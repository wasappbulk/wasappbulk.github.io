import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideSidebar from "@/components/GuideSidebar";
import { Link } from "react-router-dom";

export default function Media() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Attach Images, PDFs & Videos to Bulk WhatsApp Messages</h1>
            <p className="text-muted-foreground mb-8">WasappBulk lets you send images, videos, PDFs, and other files alongside your personalized message text to all your contacts at once.</p>

            {/* Supported types */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Supported Media Types</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-700 rounded-xl px-4 py-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">🖼️</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Images</p>
                    <code className="text-green-400 text-xs font-mono">JPEG, PNG, GIF, WebP</code>
                    <p className="text-muted-foreground text-sm mt-1">Product photos, banners, offer cards, infographics.</p>
                  </div>
                </div>
                <div className="border border-gray-700 rounded-xl px-4 py-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">🎥</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Videos</p>
                    <code className="text-green-400 text-xs font-mono">MP4, MOV, WebM</code>
                    <p className="text-muted-foreground text-sm mt-1">Product demos, promotional clips, tutorials.</p>
                  </div>
                </div>
                <div className="border border-gray-700 rounded-xl px-4 py-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">📄</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Documents</p>
                    <code className="text-green-400 text-xs font-mono">PDF</code>
                    <p className="text-muted-foreground text-sm mt-1">Invoices, brochures, reports, menus, catalogues.</p>
                  </div>
                </div>
                <div className="border border-gray-700 rounded-xl px-4 py-4 flex gap-3 items-start">
                  <span className="text-2xl shrink-0">📦</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Max File Size</p>
                    <code className="text-green-400 text-xs font-mono">Up to 50 MB</code>
                    <p className="text-muted-foreground text-sm mt-1">Files larger than 50 MB cannot be attached.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to attach */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">How to Attach a File</h2>
              <div className="space-y-5">
                {[
                  { num: 1, title: "Click the 📎 attachment icon in the Message section", desc: "The paperclip icon is in the formatting toolbar just below the message text box." },
                  { num: 2, title: "Select your file", desc: "A file picker opens. Choose any supported image, video, or PDF from your computer." },
                  { num: 3, title: "File appears in the Attached section", desc: "The filename is shown below the message box with a × button to remove it. Your message text stays separate." },
                  { num: 4, title: "Write your message and send", desc: "Type your message as normal (with variables if needed). When you click Start Sending, each contact receives both the media file and your personalized message together." }
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

            {/* Tips */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Tips & Notes</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong className="text-white">One media file per session</strong> — the same file is sent to all contacts in that send. Start a new session to use a different file.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>You can still use <strong className="text-white">message variables</strong> like {'{name}'} even when attaching media — the caption is fully personalized.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Media files are stored <strong className="text-white">locally in your browser</strong> — they are never uploaded to WasappBulk servers.</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠</span>
                  <span>WhatsApp may compress images and videos — use the highest quality file you have for best results.</span>
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
