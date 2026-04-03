import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideSidebar from "@/components/GuideSidebar";
import { Link } from "react-router-dom";

export default function UploadExcel() {
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
            <h1 className="text-3xl font-bold text-white mb-2">How to Send Bulk WhatsApp Messages from Excel</h1>
            <p className="text-muted-foreground mb-8">Instead of typing phone numbers one by one, upload your contact list directly from an Excel or CSV file and send WhatsApp messages from Excel in seconds — without saving any contact to your phone.</p>

            {/* Supported formats */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Supported File Formats</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-gray-700 rounded-xl px-4 py-4 flex gap-3 items-start">
                  <code className="text-green-400 font-mono font-bold text-sm bg-green-500/10 px-2 py-1 rounded shrink-0">.xlsx</code>
                  <div>
                    <p className="text-white font-medium text-sm">Excel Workbook</p>
                    <p className="text-muted-foreground text-sm">Standard Excel format. Most recommended.</p>
                  </div>
                </div>
                <div className="border border-gray-700 rounded-xl px-4 py-4 flex gap-3 items-start">
                  <code className="text-green-400 font-mono font-bold text-sm bg-green-500/10 px-2 py-1 rounded shrink-0">.xls</code>
                  <div>
                    <p className="text-white font-medium text-sm">Excel 97–2003</p>
                    <p className="text-muted-foreground text-sm">Older Excel format, fully supported.</p>
                  </div>
                </div>
                <div className="border border-gray-700 rounded-xl px-4 py-4 flex gap-3 items-start">
                  <code className="text-green-400 font-mono font-bold text-sm bg-green-500/10 px-2 py-1 rounded shrink-0">.csv</code>
                  <div>
                    <p className="text-white font-medium text-sm">CSV File</p>
                    <p className="text-muted-foreground text-sm">Comma-separated values. Works from any spreadsheet app.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to format */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">How to Format Your Excel File</h2>
              <p className="text-muted-foreground text-sm mb-4">For best results, structure your Excel file with a <strong className="text-white">header row in the first row</strong> and one contact per row below it.</p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">Name</th>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">Phone</th>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">City</th>
                      <th className="text-left px-4 py-2 text-white font-semibold border-b border-gray-700">Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "John Smith", phone: "919876543210", city: "Mumbai", product: "Pro Plan" },
                      { name: "Sara Khan", phone: "919123456789", city: "Delhi", product: "Free Plan" },
                      { name: "Ravi Patel", phone: "918765432109", city: "Pune", product: "Enterprise" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-700 last:border-0 hover:bg-gray-800/50">
                        <td className="px-4 py-2 text-muted-foreground">{row.name}</td>
                        <td className="px-4 py-2 text-muted-foreground">{row.phone}</td>
                        <td className="px-4 py-2 text-muted-foreground">{row.city}</td>
                        <td className="px-4 py-2 text-muted-foreground">{row.product}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Upload steps */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">How to Send Bulk WhatsApp Messages from Your Excel or CSV File</h2>
              <div className="space-y-5">
                {[
                  { num: 1, title: 'Click "Upload Excel" in the Numbers section', desc: 'Open the WasappBulk popup and click the green "Upload Excel" button in the Numbers section header.' },
                  { num: 2, title: "Select your file", desc: "Choose your .xlsx, .xls, or .csv file from your computer. The file is read locally — never uploaded to any server." },
                  { num: 3, title: "Contacts are imported automatically", desc: "WasappBulk reads all rows and adds each phone number as a contact chip. If names are detected, they appear on the chip in green." },
                  { num: 4, title: "Check the success message", desc: "The status bar shows how many contacts were imported and which variables are available." }
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

            {/* Phone number formats */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">Phone Number Format</h2>
              <p className="text-muted-foreground text-sm mb-4">Always include the <strong className="text-white">country code</strong> in your phone number column.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-2.5">
                  <code className="text-green-400 font-mono text-sm">919876543210</code>
                  <span className="text-muted-foreground text-sm">✓ Country code + number (recommended)</span>
                </div>
                <div className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-2.5">
                  <code className="text-green-400 font-mono text-sm">+91 98765 43210</code>
                  <span className="text-muted-foreground text-sm">✓ With + and spaces</span>
                </div>
                <div className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-2.5">
                  <code className="text-green-400 font-mono text-sm">91-9876-543210</code>
                  <span className="text-muted-foreground text-sm">✓ With dashes</span>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Tips & Notes</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong className="text-white">Duplicate numbers</strong> are automatically skipped — no double messages.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>You can upload <strong className="text-white">multiple files</strong> — contacts from each file are added to the existing list.</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Your imported contacts are <strong className="text-white">saved locally</strong> — they reappear the next time you open the extension.</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠</span>
                  <span>The first row <strong className="text-white">must be a header row</strong> for variable detection to work.</span>
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
