import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

function Step({ n, title, desc }: { n: number; title: string; desc: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-7 h-7 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
        {n}
      </div>
      <div>
        <p className="text-foreground font-medium">{title}</p>
        <div className="text-muted-foreground text-sm mt-0.5">{desc}</div>
      </div>
    </div>
  );
}

function TipList({ items }: { items: { icon: string; text: React.ReactNode }[] }) {
  return (
    <ul className="space-y-2 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCTA({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl px-6 py-5 mt-10">
      <p className="text-foreground font-semibold mb-1">{title}</p>
      <p className="text-muted-foreground text-sm mb-4">{desc}</p>
      <Link
        to="/guide"
        className="inline-block gradient-cta text-primary-foreground text-sm font-semibold px-5 py-2 rounded-[var(--radius)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        ← Back to Guide
      </Link>
    </div>
  );
}

export default function GuideUsingVariables() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <article>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Personalize WhatsApp Messages with Variables
            </h1>
            <p className="text-muted-foreground mb-8">
              Learn how to use variables to send personalized bulk messages to each contact
            </p>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">What Are Message Variables?</h2>
              <p className="text-muted-foreground mb-4">
                Variables are <strong className="text-foreground">placeholders</strong> you add to your message template using curly braces{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm">{`{columnName}`}</code>.
                When the message is sent, WasappBulk automatically replaces each placeholder with that
                contact's actual data from your Excel file.
              </p>
              <p className="text-muted-foreground mb-4">
                This lets you send <strong className="text-foreground">personalized WhatsApp messages in bulk</strong> — greeting each person
                by name, including their order details, scores, city, or any custom field, all from a single
                message template without writing each message manually.
              </p>
              <p className="text-muted-foreground">
                Think of it like a <strong className="text-foreground">mail merge</strong> — instead of writing 100 different messages, you write <strong>one template</strong> with placeholders, and WasappBulk fills them in with each person's data automatically.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">Simple Example</h2>
              <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
                <p className="text-sm text-foreground mb-3"><strong>Instead of writing:</strong></p>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <p>❌ "Hi John, you scored 95!"</p>
                  <p>❌ "Hi Sarah, you scored 87!"</p>
                  <p>❌ "Hi Mike, you scored 92!"</p>
                </div>
                <p className="text-sm text-foreground mb-3"><strong>You write ONE template:</strong></p>
                <div className="bg-background border border-border rounded-lg px-3 py-2 mb-4 text-sm font-mono text-primary">
                  "Hi {`{name}`}, you scored {`{marks}`}!"
                </div>
                <p className="text-sm text-muted-foreground">✓ WasappBulk automatically sends personalized versions to each person</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">How It Works — Step by Step</h2>
              <div className="space-y-4">
                <Step n={1} title="Prepare Excel file with column headers" desc={<>Create an Excel file where the <strong className="text-foreground">first row is headers</strong>. Example: <code className="bg-muted px-1 rounded text-primary">Name</code>, <code className="bg-muted px-1 rounded text-primary">Phone</code>, <code className="bg-muted px-1 rounded text-primary">Marks</code>, <code className="bg-muted px-1 rounded text-primary">City</code></>} />
                <Step n={2} title="Upload Excel to WasappBulk" desc="Click 'Upload Excel' — the extension reads all column headers and imports your contacts with their data." />
                <Step n={3} title="Write message with {placeholders}" desc={<>Type your message and use <code className="bg-muted px-1 rounded text-primary">{`{columnName}`}</code> placeholders wherever you want personalized data.</>} />
                <Step n={4} title="Click Send" desc="WasappBulk automatically replaces each placeholder with that person's actual data and sends the personalized message." />
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">Real-World Examples</h2>

              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-3">📚 Example 1: Student Results</p>
                <p className="text-muted-foreground text-sm mb-3">Your Excel file has columns: <code className="bg-muted px-1 rounded text-primary">Name</code>, <code className="bg-muted px-1 rounded text-primary">Marks</code>, <code className="bg-muted px-1 rounded text-primary">School</code>, <code className="bg-muted px-1 rounded text-primary">Phone</code></p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
                    <thead className="bg-muted">
                      <tr>
                        {["Name", "Marks", "School", "Phone"].map((h) => (
                          <th key={h} className="text-left px-3 py-2 text-foreground font-semibold border-b border-border">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Rohan", "92", "St. Xavier", "9876543210"],
                        ["Ananya", "88", "Delhi Public", "9876543211"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50">
                          {row.map((cell, j) => (
                            <td key={j} className="px-3 py-2 text-muted-foreground text-xs">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mb-2">Your message template:</p>
                <div className="bg-background border border-border rounded-lg px-3 py-2 mb-3 text-sm font-mono text-foreground whitespace-pre-line">
                  {"Hi "}<span className="text-primary font-semibold">{`{name}`}</span>{"! 🎉\nYour exam result: "}<span className="text-primary font-semibold">{`{marks}`}</span>{" marks\nSchool: "}<span className="text-primary font-semibold">{`{school}`}</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-3">💼 Example 2: Business Meeting Reminder</p>
                <p className="text-muted-foreground text-sm mb-3">Columns: <code className="bg-muted px-1 rounded text-primary">Name</code>, <code className="bg-muted px-1 rounded text-primary">Company</code>, <code className="bg-muted px-1 rounded text-primary">Time</code>, <code className="bg-muted px-1 rounded text-primary">Location</code>, <code className="bg-muted px-1 rounded text-primary">Phone</code></p>
                <p className="text-muted-foreground text-sm mb-2">Your message:</p>
                <div className="bg-background border border-border rounded-lg px-3 py-2 mb-3 text-sm font-mono text-foreground whitespace-pre-line">
                  {"Dear "}<span className="text-primary font-semibold">{`{name}`}</span>{",\n\nMeeting reminder: "}<span className="text-primary font-semibold">{`{time}`}</span>{"\n📍 Location: "}<span className="text-primary font-semibold">{`{location}`}</span>{"\nCompany: "}<span className="text-primary font-semibold">{`{company}`}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">🛍️ Example 3: Order Confirmation</p>
                <p className="text-muted-foreground text-sm mb-3">Columns: <code className="bg-muted px-1 rounded text-primary">Name</code>, <code className="bg-muted px-1 rounded text-primary">OrderID</code>, <code className="bg-muted px-1 rounded text-primary">Amount</code>, <code className="bg-muted px-1 rounded text-primary">City</code>, <code className="bg-muted px-1 rounded text-primary">Phone</code></p>
                <p className="text-muted-foreground text-sm mb-2">Your message:</p>
                <div className="bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono text-foreground whitespace-pre-line">
                  {"Hi "}<span className="text-primary font-semibold">{`{name}`}</span>{"! 🎉\n\nOrder confirmed!\nOrder ID: "}<span className="text-primary font-semibold">{`{orderid}`}</span>{"\nAmount: ₹"}<span className="text-primary font-semibold">{`{amount}`}</span>{"\nDelivery to: "}<span className="text-primary font-semibold">{`{city}`}</span>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">Any Excel Column Works!</h2>
              <p className="text-muted-foreground text-sm mb-4">
                You're not limited to "Name" and "Marks". <strong className="text-foreground">Any column header in your Excel becomes a variable</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { header: "Name", variable: "{name}", example: "John, Sarah, Mike" },
                  { header: "Email", variable: "{email}", example: "john@test.com" },
                  { header: "Marks", variable: "{marks}", example: "95, 87, 92" },
                  { header: "City", variable: "{city}", example: "Mumbai, Delhi, Pune" },
                  { header: "Company", variable: "{company}", example: "TechCorp, DesignHub" },
                  { header: "OrderID", variable: "{orderid}", example: "ORD12345" },
                  { header: "Amount", variable: "{amount}", example: "5000, 2500" },
                  { header: "Package", variable: "{package}", example: "Premium, Standard" },
                ].map((item) => (
                  <div key={item.header} className="border border-border rounded-lg px-3 py-2.5">
                    <p className="text-xs text-muted-foreground mb-1">Column: <strong className="text-foreground">{item.header}</strong></p>
                    <p className="text-sm font-mono text-primary mb-1">{item.variable}</p>
                    <p className="text-xs text-muted-foreground">{item.example}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">Syntax Rules</h2>
              <ul className="space-y-3">
                <li className="border border-border rounded-lg px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">Use curly braces</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded text-primary font-mono">{`{name}`} ✓ | {`(name)`} ❌ | {`[name]`} ❌</code>
                </li>
                <li className="border border-border rounded-lg px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">Match column names</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded text-primary font-mono">Excel has 'Name' → use {`{name}`}</code>
                </li>
                <li className="border border-border rounded-lg px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">No spaces inside</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded text-primary font-mono">{`{name}`} ✓ | {`{ name }`} ❌</code>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">Tips &amp; Best Practices</h2>
              <TipList items={[
                { icon: "✓", text: <>Variable names are <strong className="text-foreground">case-insensitive</strong> — all versions work the same</> },
                { icon: "✓", text: <>You can use <strong className="text-foreground">multiple variables</strong> in one message</> },
                { icon: "✓", text: <>If a contact has no value, it's replaced with <strong className="text-foreground">empty text</strong></> },
                { icon: "✓", text: <>Works with <strong className="text-foreground">.xlsx, .xls, .csv</strong> files</> },
                { icon: "⚠", text: <>Your Excel's <strong className="text-foreground">first row MUST be column headers</strong></> },
              ]} />
            </section>

            <SectionCTA
              title="Ready to send personalized messages?"
              desc="Install WasappBulk, upload your Excel file with contact names and data, and start sending personalized bulk WhatsApp messages in minutes — no coding required."
            />
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
