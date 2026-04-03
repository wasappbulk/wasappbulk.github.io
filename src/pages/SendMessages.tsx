import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideSidebar from "@/components/GuideSidebar";
import { Link } from "react-router-dom";

export default function SendMessages() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 py-12 flex gap-8">
          {/* Sidebar */}
          <GuideSidebar />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <article>
            <h1 className="text-3xl font-bold text-white mb-2">How to Send Bulk WhatsApp Messages</h1>
            <p className="text-muted-foreground mb-8">WasappBulk is a bulk WhatsApp message sender used as a WhatsApp marketing tool by businesses, educators, and sales teams worldwide. Once your contacts are added and your message is ready, it handles the entire sending process automatically — opening each chat, typing the message, and confirming delivery.</p>

            {/* How sending works */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">How WasappBulk Sends Messages</h2>
              <p className="text-muted-foreground text-sm mb-5">WasappBulk works as a wa bulk message sender directly inside your browser using WhatsApp Web. It does not use any external API or server — every message is sent directly from your WhatsApp account, just as if you typed it yourself.</p>
              <div className="space-y-5">
                {[
                  { num: 1, title: "Opens WhatsApp Web chat for the contact", desc: "The extension automatically navigates to the contact's chat using their phone number." },
                  { num: 2, title: "Fills in the personalized message", desc: "Your message template is filled with that contact's data (name, city, etc.) before sending." },
                  { num: 3, title: "Clicks the send button", desc: "The extension clicks the WhatsApp send button — the message is delivered from your account." },
                  { num: 4, title: "Waits for the delay", desc: "After confirming delivery, WasappBulk waits the configured delay before sending to the next contact." },
                  { num: 5, title: "Moves to the next contact", desc: "The process repeats until all contacts in the queue have been messaged." }
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div>
                      <p className="text-white font-medium">{step.title}</p>
                      <div className="text-muted-foreground text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sending Your First Bulk Message */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Sending Your First Bulk Message</h2>
              <div className="space-y-5">
                {[
                  { num: 1, title: "Add phone numbers", desc: "Type numbers in the Numbers field or upload an Excel file. Each number appears as a chip." },
                  { num: 2, title: "Write your message", desc: "Type your message in the Message box. Use {'{Name}'} or any Excel column variable to personalize it for each recipient." },
                  { num: 3, title: "Configure delay in Settings", desc: "Go to Settings and set the delay between messages. Minimum 8 seconds is recommended to avoid WhatsApp bans. Enable Randomize Delay for extra safety." },
                  { num: 4, title: 'Click "Start Sending"', desc: "Hit the green Start Sending button. WasappBulk begins processing your queue automatically." },
                  { num: 5, title: "Monitor progress in the Progress tab", desc: "Switch to the Progress tab to see real-time stats — how many sent, failed, and remaining. You can pause or stop at any time." }
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div>
                      <p className="text-white font-medium">{step.title}</p>
                      <div className="text-muted-foreground text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Understanding the Progress Tab */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Understanding the Progress Tab</h2>
              <div className="space-y-3">
                <div className="flex gap-4 items-start border border-gray-700 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold text-sm w-32 shrink-0">✅ Sent</span>
                  <p className="text-muted-foreground text-sm">Messages successfully delivered to this contact.</p>
                </div>
                <div className="flex gap-4 items-start border border-gray-700 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold text-sm w-32 shrink-0">❌ Failed</span>
                  <p className="text-muted-foreground text-sm">Message could not be delivered — invalid number or WhatsApp not installed on that phone.</p>
                </div>
                <div className="flex gap-4 items-start border border-gray-700 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold text-sm w-32 shrink-0">📋 Total</span>
                  <p className="text-muted-foreground text-sm">Total contacts in the current sending queue.</p>
                </div>
                <div className="flex gap-4 items-start border border-gray-700 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold text-sm w-32 shrink-0">⏸ Pause</span>
                  <p className="text-muted-foreground text-sm">Temporarily pauses the queue. Click Resume to continue from where it stopped.</p>
                </div>
                <div className="flex gap-4 items-start border border-gray-700 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold text-sm w-32 shrink-0">⏹ Stop</span>
                  <p className="text-muted-foreground text-sm">Stops the queue completely. Any unsent messages remain in the list so you can retry.</p>
                </div>
                <div className="flex gap-4 items-start border border-gray-700 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold text-sm w-32 shrink-0">🔁 Retry Failed</span>
                  <p className="text-muted-foreground text-sm">Appears after sending completes — click to re-attempt all failed contacts.</p>
                </div>
              </div>
            </section>

            {/* Anti-ban tips */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">How to Send Bulk WhatsApp Messages Without Getting Banned</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong className="text-white">Always use a delay of at least 8 seconds</strong> between messages. 10–15 seconds is safer.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong className="text-white">Enable Randomize Delay</strong> — adds ±2 seconds variation to mimic human behavior.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Keep your daily sends under <strong className="text-white">200 messages</strong> to stay safe on a regular number.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong className="text-white">Personalize your messages</strong> using variables — identical messages to many contacts increase ban risk.</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠</span>
                  <span>Never send to numbers that haven't opted in to receive messages from you.</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-6 py-5 mt-10 mb-8">
              <p className="text-white font-semibold mb-1">Try uploading your contact list now</p>
              <p className="text-muted-foreground text-sm mb-4">Upload any Excel or CSV file and WasappBulk will import all contacts instantly — with personalization variables ready to use.</p>
              <a href="#" className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold px-5 py-2 rounded hover:scale-105 transition-transform">Install Free Extension</a>
            </div>

            <Link to="/guide" className="inline-block mt-8 bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold px-5 py-2 rounded hover:scale-105 transition-transform">
              ← Back to Guide
            </Link>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
