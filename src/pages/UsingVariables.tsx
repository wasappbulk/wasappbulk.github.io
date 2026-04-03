import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideSidebar from "@/components/GuideSidebar";
import { Link } from "react-router-dom";

export default function UsingVariables() {
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
            <h1 className="text-3xl font-bold mb-2">Personalize WhatsApp Messages with Variables</h1>
            <p className="text-muted-foreground mb-8">Learn how to use variables to send personalized bulk messages to each contact</p>

            {/* What Are Variables */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">What Are Message Variables?</h2>
              <p className="text-muted-foreground mb-4">
                Variables are <strong>placeholders</strong> you add to your message template using curly braces <code>{'{'}<span className="text-green-400">columnName</span>{'}'}</code>.
                When the message is sent, WasappBulk automatically replaces each placeholder with that contact's actual data from your Excel file.
              </p>
              <p className="text-muted-foreground mb-4">
                This lets you send <strong>personalized WhatsApp messages in bulk</strong> — greeting each person by name, including their order details, scores, city, or any custom field, all from a single message template without writing each message manually.
              </p>
              <p className="text-muted-foreground">
                Think of it like a <strong>mail merge</strong> — instead of writing 100 different messages, you write <strong>one template</strong> with placeholders, and WasappBulk fills them in with each person's data automatically.
              </p>
            </section>

            {/* Simple Example */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">Simple Example</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 mb-6">
                <p className="text-sm font-semibold mb-3"><strong>Instead of writing:</strong></p>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <p>❌ "Hi John, you scored 95!"</p>
                  <p>❌ "Hi Sarah, you scored 87!"</p>
                  <p>❌ "Hi Mike, you scored 92!"</p>
                </div>
                <p className="text-sm font-semibold mb-3"><strong>You write ONE template:</strong></p>
                <div className="bg-black border border-gray-700 rounded px-3 py-2 mb-4 text-sm font-mono text-green-400">
                  "Hi {'{name}'}, you scored {'{marks}'}!"
                </div>
                <p className="text-sm text-muted-foreground">✓ WasappBulk automatically sends personalized versions to each person</p>
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">How It Works — Step by Step</h2>
              <div className="space-y-4">
                {[
                  { num: 1, title: "Prepare Excel file with column headers", desc: 'Create an Excel file where the first row is headers. Example: Name, Phone, Marks, City' },
                  { num: 2, title: "Upload Excel to WasappBulk", desc: "Click 'Upload Excel' — the extension reads all column headers and imports your contacts with their data." },
                  { num: 3, title: "Write message with {placeholders}", desc: "Type your message and use {columnName} placeholders wherever you want personalized data." },
                  { num: 4, title: "Click Send", desc: "WasappBulk automatically replaces each placeholder with that person's actual data and sends the personalized message." }
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-medium">{step.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Real-World Examples */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">Real-World Examples</h2>

              <div className="mb-8">
                <p className="text-sm font-semibold mb-3">📚 Example 1: Student Results</p>
                <p className="text-muted-foreground text-sm mb-3">Your Excel file has columns: <code>Name</code>, <code>Marks</code>, <code>School</code>, <code>Phone</code></p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-xs border border-gray-700 rounded-lg">
                    <thead className="bg-gray-900">
                      <tr>
                        <th className="text-left px-3 py-2 border-b border-gray-700">Name</th>
                        <th className="text-left px-3 py-2 border-b border-gray-700">Marks</th>
                        <th className="text-left px-3 py-2 border-b border-gray-700">School</th>
                        <th className="text-left px-3 py-2 border-b border-gray-700">Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="px-3 py-2 text-muted-foreground">Rohan</td>
                        <td className="px-3 py-2 text-muted-foreground">92</td>
                        <td className="px-3 py-2 text-muted-foreground">St. Xavier</td>
                        <td className="px-3 py-2 text-muted-foreground">9876543210</td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="px-3 py-2 text-muted-foreground">Ananya</td>
                        <td className="px-3 py-2 text-muted-foreground">88</td>
                        <td className="px-3 py-2 text-muted-foreground">Delhi Public</td>
                        <td className="px-3 py-2 text-muted-foreground">9876543211</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mb-2">Your message template:</p>
                <div className="bg-black border border-gray-700 rounded px-3 py-2 text-sm font-mono text-gray-300 whitespace-pre-line mb-3">Hi <span className="text-green-400 font-semibold">{'{name}'}</span>! 🎉
Your exam result: <span className="text-green-400 font-semibold">{'{marks}'}</span> marks
School: <span className="text-green-400 font-semibold">{'{school}'}</span></div>
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold mb-3">💼 Example 2: Business Meeting Reminder</p>
                <p className="text-muted-foreground text-sm mb-3">Columns: <code>Name</code>, <code>Company</code>, <code>Time</code>, <code>Location</code>, <code>Phone</code></p>
                <p className="text-muted-foreground text-sm mb-2">Your message:</p>
                <div className="bg-black border border-gray-700 rounded px-3 py-2 text-sm font-mono text-gray-300 whitespace-pre-line">Dear <span className="text-green-400 font-semibold">{'{name}'}</span>,

Meeting reminder: <span className="text-green-400 font-semibold">{'{time}'}</span>
📍 Location: <span className="text-green-400 font-semibold">{'{location}'}</span>
Company: <span className="text-green-400 font-semibold">{'{company}'}</span></div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">🛍️ Example 3: Order Confirmation</p>
                <p className="text-muted-foreground text-sm mb-3">Columns: <code>Name</code>, <code>OrderID</code>, <code>Amount</code>, <code>City</code>, <code>Phone</code></p>
                <p className="text-muted-foreground text-sm mb-2">Your message:</p>
                <div className="bg-black border border-gray-700 rounded px-3 py-2 text-sm font-mono text-gray-300 whitespace-pre-line">Hi <span className="text-green-400 font-semibold">{'{name}'}</span>! 🎉

Order confirmed!
Order ID: <span className="text-green-400 font-semibold">{'{orderid}'}</span>
Amount: ₹<span className="text-green-400 font-semibold">{'{amount}'}</span>
Delivery to: <span className="text-green-400 font-semibold">{'{city}'}</span></div>
              </div>
            </section>

            {/* Any Column Works */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">Any Excel Column Works!</h2>
              <p className="text-muted-foreground text-sm mb-4">
                You're not limited to "Name" and "Marks". <strong>Any column header in your Excel becomes a variable</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { col: "Name", var: "{name}", example: "John, Sarah, Mike" },
                  { col: "Email", var: "{email}", example: "john@test.com" },
                  { col: "Marks", var: "{marks}", example: "95, 87, 92" },
                  { col: "City", var: "{city}", example: "Mumbai, Delhi, Pune" },
                  { col: "Company", var: "{company}", example: "TechCorp, DesignHub" },
                  { col: "OrderID", var: "{orderid}", example: "ORD12345" },
                  { col: "Amount", var: "{amount}", example: "5000, 2500" },
                  { col: "Package", var: "{package}", example: "Premium, Standard" }
                ].map((item, i) => (
                  <div key={i} className="border border-gray-700 rounded px-3 py-2.5">
                    <p className="text-xs text-gray-500 mb-1">Column: <strong>{item.col}</strong></p>
                    <p className="text-sm font-mono text-green-400 mb-1">{item.var}</p>
                    <p className="text-xs text-gray-500">{item.example}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Syntax Rules */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">Syntax Rules</h2>
              <ul className="space-y-3">
                <li className="border border-gray-700 rounded px-4 py-3">
                  <p className="text-sm font-semibold">Use curly braces</p>
                  <code className="text-xs">{'{name}'} ✓ | (name) ❌ | [name] ❌</code>
                </li>
                <li className="border border-gray-700 rounded px-4 py-3">
                  <p className="text-sm font-semibold">Match column names</p>
                  <code className="text-xs">Excel has 'Name' → use {'{name}'}</code>
                </li>
                <li className="border border-gray-700 rounded px-4 py-3">
                  <p className="text-sm font-semibold">No spaces inside</p>
                  <code className="text-xs">{'{name}'} ✓ | {'{ name }'} ❌</code>
                </li>
                <li className="border border-gray-700 rounded px-4 py-3">
                  <p className="text-sm font-semibold">Case-insensitive</p>
                  <code className="text-xs">{'{Name}'}, {'{name}'}, {'{NAME}'} all work</code>
                </li>
              </ul>
            </section>

            {/* Tips */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">Tips & Best Practices</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Variable names are <strong>case-insensitive</strong> — all versions work the same</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>You can use <strong>multiple variables</strong> in one message</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>If a contact has no value, it's replaced with <strong>empty text</strong></span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Works with <strong>.xlsx, .xls, .csv</strong> files</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠</span>
                  <span>Your Excel's <strong>first row MUST be column headers</strong></span>
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
