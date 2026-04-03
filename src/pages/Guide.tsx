import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideSidebar from "@/components/GuideSidebar";
import { Link } from "react-router-dom";

export default function Guide() {
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
              <h1 className="text-3xl font-bold mb-2">WasappBulk Guide</h1>
              <p className="text-muted-foreground mb-8">Learn how to use WasappBulk to send bulk WhatsApp messages</p>

              <div className="space-y-4">
                <Link to="/guide/getting-started" className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-900 transition">
                  <div className="font-semibold">🚀 Getting Started</div>
                  <div className="text-sm text-muted-foreground mt-1">Installation and first steps</div>
                </Link>

                <Link to="/guide/upload-excel" className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-900 transition">
                  <div className="font-semibold">📊 Upload Excel</div>
                  <div className="text-sm text-muted-foreground mt-1">Import your contacts from Excel or CSV</div>
                </Link>

                <Link to="/guide/using-variables" className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-900 transition">
                  <div className="font-semibold">✨ Using Variables</div>
                  <div className="text-sm text-muted-foreground mt-1">Personalize messages with {'{name}'}, {'{marks}'}, etc.</div>
                </Link>

                <Link to="/guide/send-messages" className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-900 transition">
                  <div className="font-semibold">📱 Send Messages</div>
                  <div className="text-sm text-muted-foreground mt-1">Configure and send your bulk messages</div>
                </Link>

                <Link to="/guide/media" className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-900 transition">
                  <div className="font-semibold">📎 Attach Media</div>
                  <div className="text-sm text-muted-foreground mt-1">Add images, PDFs, and videos</div>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
