// ===== WhatsApp Extension Backend Server =====
// Serves dynamic CSS selectors to extension
// Logs message sends to database

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();

// ===== CORS Configuration for Chrome Extensions =====
// Allow all origins including chrome-extension:// URLs
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests from:
    // 1. Chrome extensions (chrome-extension://...)
    // 2. Local dev (localhost, 127.0.0.1)
    // 3. Any origin (needed for extension cross-origin requests)
    callback(null, true);
  },
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'apikey']
}));

app.use(express.json());

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

console.log('✅ Supabase initialized');

// ===== API ENDPOINTS =====

// 1. GET SELECTORS - Extension calls this to get dynamic selectors
app.get('/api/selectors', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('whatsapp_selectors')
      .select('*')
      .eq('is_working', true);

    if (error) throw error;

    // Format for extension
    const formatted = {};
    data.forEach(sel => {
      formatted[sel.name] = sel.selectors;
    });

    res.json({
      success: true,
      selectors: formatted,
      count: data.length,
      lastUpdated: new Date()
    });
  } catch (error) {
    console.error('❌ GET /api/selectors error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      selectors: {}
    });
  }
});

// 2. LOG MESSAGE - Extension reports each message sent
app.post('/api/log-message', async (req, res) => {
  try {
    const { extensionId, phoneNumber, message, status, error } = req.body;

    // Validate
    if (!phoneNumber || !status) {
      return res.status(400).json({
        success: false,
        error: 'Missing phoneNumber or status'
      });
    }

    const { data, error: dbError } = await supabase
      .from('message_logs')
      .insert([{
        extension_id: extensionId,
        phone_number: phoneNumber,
        message: message || null,
        status: status,
        error: error || null
      }]);

    if (dbError) throw dbError;

    res.json({
      success: true,
      logId: data[0]?.id,
      message: `Message logged: ${status}`
    });
  } catch (error) {
    console.error('❌ POST /api/log-message error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 3. GET STATISTICS - Dashboard view of all sends
app.get('/api/stats', async (req, res) => {
  try {
    const { data: allMessages, error } = await supabase
      .from('message_logs')
      .select('status');

    if (error) throw error;

    const totalMessages = allMessages.length;
    const successCount = allMessages.filter(m => m.status === 'sent').length;
    const failureCount = allMessages.filter(m => m.status === 'failed').length;
    const successRate = totalMessages > 0
      ? ((successCount / totalMessages) * 100).toFixed(2)
      : 0;

    res.json({
      success: true,
      stats: {
        totalMessages,
        successCount,
        failureCount,
        pendingCount: totalMessages - successCount - failureCount,
        successRate: `${successRate}%`
      }
    });
  } catch (error) {
    console.error('❌ GET /api/stats error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 4. UPDATE SELECTOR - Admin updates selector when WhatsApp changes UI
app.post('/api/update-selector', async (req, res) => {
  try {
    const { name, selectors, whatsappVersion, isWorking } = req.body;

    if (!name || !selectors || !Array.isArray(selectors)) {
      return res.status(400).json({
        success: false,
        error: 'Missing name or selectors array'
      });
    }

    const { data, error } = await supabase
      .from('whatsapp_selectors')
      .upsert([{
        name: name,
        selectors: selectors,
        whatsapp_version: whatsappVersion || null,
        is_working: isWorking !== false,
        tested_at: new Date()
      }], { onConflict: 'name' });

    if (error) throw error;

    res.json({
      success: true,
      message: `Selector "${name}" updated`,
      selectorId: data[0]?.id
    });
  } catch (error) {
    console.error('❌ POST /api/update-selector error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 5. START SEND - Fetch quota and plan info at start of sending
app.options('/api/start-send', cors());  // Handle preflight request
app.post('/api/start-send', async (req, res) => {
  try {
    console.log('📞 POST /api/start-send called from:', req.headers.origin);

    const { authToken } = req.body;

    if (!authToken) {
      return res.status(400).json({
        success: false,
        error: 'Missing authToken'
      });
    }

    // Get user info from auth token (in real app, verify JWT signature)
    // For now, assume token is valid and extract userId
    const decoded = JSON.parse(Buffer.from(authToken.split('.')[1], 'base64').toString());
    const userId = decoded.sub || decoded.userId;

    // Get user's subscription plan
    const { data: userData, error: userError } = await supabase
      .from('auth.users')
      .select('id, email')
      .eq('id', userId)
      .single();

    if (userError) throw userError;

    // Get user's subscription plan
    const { data: planData, error: planError } = await supabase
      .from('user_subscriptions')
      .select('plan_id, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    // Default to free plan if no subscription
    const planId = planData?.plan_id || 'free';

    // Get plan limits
    const { data: planDetails } = await supabase
      .from('subscription_plans')
      .select('name, messages_per_day')
      .eq('id', planId)
      .single();

    const dailyLimit = planDetails?.messages_per_day || 10;
    const planName = planDetails?.name || 'Free';

    // Get today's message count
    const today = new Date().toISOString().split('T')[0];
    const { data: todayLogs, error: logError } = await supabase
      .from('message_logs')
      .select('id')
      .eq('user_id', userId)
      .gte('created_at', `${today}T00:00:00`)
      .lte('created_at', `${today}T23:59:59`);

    const sentToday = todayLogs?.length || 0;
    const remainingToday = Math.max(0, dailyLimit - sentToday);

    res.json({
      success: true,
      plan: planName,
      planId: planId,
      dailyLimit: dailyLimit,
      sentToday: sentToday,
      remainingToday: remainingToday,
      message: `Ready to send. You have ${remainingToday} messages remaining today.`
    });
  } catch (error) {
    console.error('❌ POST /api/start-send error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 6. UPDATE USAGE - Update usage stats after sending stops
app.options('/api/update-usage', cors());  // Handle preflight request
app.post('/api/update-usage', async (req, res) => {
  try {
    console.log('📞 POST /api/update-usage called from:', req.headers.origin);

    const { authToken, sentToday, remainingToday, planId } = req.body;

    if (!authToken) {
      return res.status(400).json({
        success: false,
        error: 'Missing authToken'
      });
    }

    // Decode auth token to get userId
    const decoded = JSON.parse(Buffer.from(authToken.split('.')[1], 'base64').toString());
    const userId = decoded.sub || decoded.userId;

    // Update user's daily stats (could store in a new table)
    // For now, just return success
    res.json({
      success: true,
      message: 'Usage stats updated',
      sentToday: sentToday,
      remainingToday: remainingToday
    });
  } catch (error) {
    console.error('❌ POST /api/update-usage error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 7. GET SELECTOR BY NAME - Get specific selector
app.get('/api/selectors/:name', async (req, res) => {
  try {
    const { name } = req.params;

    const { data, error } = await supabase
      .from('whatsapp_selectors')
      .select('*')
      .eq('name', name)
      .single();

    if (error) throw error;

    res.json({
      success: true,
      selector: data
    });
  } catch (error) {
    console.error('❌ GET /api/selectors/:name error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 6. HEALTH CHECK - Verify server is running
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running ✅',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// 7. ROOT ENDPOINT
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'WhatsApp Extension Backend Server',
    endpoints: {
      'GET /api/health': 'Server health check',
      'GET /api/selectors': 'Get all active selectors',
      'GET /api/selectors/:name': 'Get specific selector',
      'POST /api/log-message': 'Log message send',
      'GET /api/stats': 'Get statistics',
      'POST /api/update-selector': 'Update selector'
    }
  });
});

// ===== ERROR HANDLING =====
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal server error'
  });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📍 Get selectors: http://localhost:${PORT}/api/selectors`);
});
