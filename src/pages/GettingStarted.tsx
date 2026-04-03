import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideSidebar from "@/components/GuideSidebar";
import { Link } from "react-router-dom";

export default function GettingStarted() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Getting Started with WasappBulk — Free WhatsApp Bulk Sender</h1>
            <p className="text-muted-foreground mb-8">WasappBulk is a free WhatsApp bulk sender Chrome extension that lets you send bulk WhatsApp messages directly from your browser — no third-party servers, no API fees, 100% private. Follow the steps below to get up and running in under 5 minutes.</p>

            {/* Before You Begin */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Before You Begin</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-gray-700 rounded-xl px-4 py-4">
                  <div className="text-2xl mb-2">🌐</div>
                  <p className="text-white font-semibold text-sm mb-1">Google Chrome</p>
                  <p className="text-muted-foreground text-sm">Version 88 or newer. This bulk WhatsApp sender Chrome extension runs entirely inside Chrome — no extra software needed.</p>
                </div>
                <div className="border border-gray-700 rounded-xl px-4 py-4">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-white font-semibold text-sm mb-1">WhatsApp Account</p>
                  <p className="text-muted-foreground text-sm">An active WhatsApp account on your phone to connect to WhatsApp Web.</p>
                </div>
                <div className="border border-gray-700 rounded-xl px-4 py-4">
                  <div className="text-2xl mb-2">📋</div>
                  <p className="text-white font-semibold text-sm mb-1">Contact List</p>
                  <p className="text-muted-foreground text-sm">Phone numbers ready — you can type them manually or upload an Excel file.</p>
                </div>
              </div>
            </section>

            {/* Installation Steps */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Step-by-Step Installation</h2>
              <div className="space-y-5">
                {[
                  {
                    num: 1,
                    title: "Install the WasappBulk Chrome Extension",
                    desc: "Visit the Chrome Web Store and click Add to Chrome. The extension is free — no credit card required."
                  },
                  {
                    num: 2,
                    title: "Pin the extension to your toolbar",
                    desc: "Click the puzzle icon in Chrome's top-right corner, find WasappBulk, and click the pin icon so it stays visible in your toolbar."
                  },
                  {
                    num: 3,
                    title: "Open WhatsApp Web",
                    desc: "Go to web.whatsapp.com and scan the QR code with your phone to log in. Keep this tab open while using the extension."
                  },
                  {
                    num: 4,
                    title: "Create a free account",
                    desc: "Click the WasappBulk icon in your toolbar. Sign up with your email to get started. Free accounts can send up to 10 messages per day."
                  },
                  {
                    num: 5,
                    title: "You're ready to send!",
                    desc: "Once connected to WhatsApp Web, the extension turns green — you can now send bulk WhatsApp messages to all your contacts without saving their numbers to your phone."
                  }
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

            {/* Plans */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Plan Overview</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">Plan</th>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">Messages / Day</th>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">Personalization</th>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">Media Attachments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { plan: "Free", messages: "10", personalization: "✓", media: "✓" },
                      { plan: "Pro", messages: "5,000", personalization: "✓", media: "✓" },
                      { plan: "Enterprise", messages: "50,000", personalization: "✓", media: "✓" }
                    ].map((row) => (
                      <tr key={row.plan} className="border-b border-gray-700 last:border-0 hover:bg-gray-800/50">
                        <td className="px-4 py-2 text-white font-medium">{row.plan}</td>
                        <td className="px-4 py-2 text-muted-foreground">{row.messages}</td>
                        <td className="px-4 py-2 text-muted-foreground">{row.personalization}</td>
                        <td className="px-4 py-2 text-muted-foreground">{row.media}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Important Tips</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong className="text-white">Keep WhatsApp Web open</strong> in a separate tab while sending — the extension uses it to deliver messages.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong className="text-white">Use a delay of at least 8 seconds</strong> between messages to avoid WhatsApp flagging your account.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Enable <strong className="text-white">Randomize Delay</strong> in Settings for more natural-looking sending behavior.</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠</span>
                  <span>Do not close the WhatsApp Web tab while a bulk send is in progress — it will pause the queue.</span>
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
