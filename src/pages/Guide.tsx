import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const menuItems = [
  { id: "getting-started", label: "Getting Started" },
  { id: "upload-excel", label: "Upload Excel" },
  { id: "variables", label: "Using Variables" },
  { id: "send-messages", label: "Send Messages" },
  { id: "media", label: "Attach Media" },
  { id: "faq", label: "FAQ" },
];

// ── Shared UI helpers ────────────────────────────────────────────────────────

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
      <a
        href="#"
        className="inline-block gradient-cta text-primary-foreground text-sm font-semibold px-5 py-2 rounded-[var(--radius)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        Install Free Extension
      </a>
    </div>
  );
}

// ── Getting Started ──────────────────────────────────────────────────────────

function GettingStartedSection() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Getting Started with WasappBulk — Free WhatsApp Bulk Sender
      </h1>
      <p className="text-muted-foreground mb-8">
        WasappBulk is a free WhatsApp bulk sender Chrome extension that lets you send bulk WhatsApp messages directly
        from your browser — no third-party servers, no API fees, 100% private. Follow the steps
        below to get up and running in under 5 minutes.
      </p>

      {/* Requirements */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Before You Begin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🌐", title: "Google Chrome", desc: "Version 88 or newer. This bulk WhatsApp sender Chrome extension runs entirely inside Chrome — no extra software needed." },
            { icon: "📱", title: "WhatsApp Account", desc: "An active WhatsApp account on your phone to connect to WhatsApp Web." },
            { icon: "📋", title: "Contact List", desc: "Phone numbers ready — you can type them manually or upload an Excel file." },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-xl px-4 py-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-foreground font-semibold text-sm mb-1">{item.title}</p>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Installation steps */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Step-by-Step Installation</h2>
        <div className="space-y-5">
          <Step
            n={1}
            title="Install the WasappBulk Chrome Extension"
            desc={<>Visit the Chrome Web Store and click <strong className="text-foreground">Add to Chrome</strong>. The extension is free — no credit card required.</>}
          />
          <Step
            n={2}
            title="Pin the extension to your toolbar"
            desc="Click the puzzle icon in Chrome's top-right corner, find WasappBulk, and click the pin icon so it stays visible in your toolbar."
          />
          <Step
            n={3}
            title="Open WhatsApp Web"
            desc={<>Go to <code className="bg-muted px-1 rounded text-primary">web.whatsapp.com</code> and scan the QR code with your phone to log in. Keep this tab open while using the extension.</>}
          />
          <Step
            n={4}
            title="Create a free account"
            desc="Click the WasappBulk icon in your toolbar. Sign up with your email to get started. Free accounts can send up to 10 messages per day."
          />
          <Step
            n={5}
            title="You're ready to send!"
            desc="Once connected to WhatsApp Web, the extension turns green — you can now send bulk WhatsApp messages to all your contacts without saving their numbers to your phone."
          />
        </div>
      </section>

      {/* Plans */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Plan Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                {["Plan", "Messages / Day", "Personalization", "Media Attachments"].map((h) => (
                  <th key={h} className="text-left px-4 py-2 text-foreground font-semibold border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Free", "10", "✓", "✓"],
                ["Pro", "5,000", "✓", "✓"],
                ["Enterprise", "50,000", "✓", "✓"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2 ${j === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Important Tips</h2>
        <TipList items={[
          { icon: "✓", text: <><strong className="text-foreground">Keep WhatsApp Web open</strong> in a separate tab while sending — the extension uses it to deliver messages.</> },
          { icon: "✓", text: <><strong className="text-foreground">Use a delay of at least 8 seconds</strong> between messages to avoid WhatsApp flagging your account.</> },
          { icon: "✓", text: <>Enable <strong className="text-foreground">Randomize Delay</strong> in Settings for more natural-looking sending behavior.</> },
          { icon: "⚠", text: <>Do not close the WhatsApp Web tab while a bulk send is in progress — it will pause the queue.</> },
        ]} />
      </section>

      <SectionCTA
        title="Ready to send your first bulk WhatsApp message?"
        desc="Install WasappBulk for free and reach all your contacts in minutes — no coding, no API setup required."
      />
    </article>
  );
}

// ── Upload Excel ─────────────────────────────────────────────────────────────

function UploadExcelSection() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        How to Send Bulk WhatsApp Messages from Excel
      </h1>
      <p className="text-muted-foreground mb-8">
        Instead of typing phone numbers one by one, upload your contact list directly from an
        Excel or CSV file and send WhatsApp messages from Excel in seconds — without saving any contact
        to your phone. WasappBulk automatically reads all phone numbers — and if your file
        includes names or other columns, those become personalization variables you can use in your message.
      </p>

      {/* Supported formats */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Supported File Formats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { ext: ".xlsx", label: "Excel Workbook", desc: "Standard Excel format. Most recommended." },
            { ext: ".xls", label: "Excel 97–2003", desc: "Older Excel format, fully supported." },
            { ext: ".csv", label: "CSV File", desc: "Comma-separated values. Works from any spreadsheet app." },
          ].map((item) => (
            <div key={item.ext} className="border border-border rounded-xl px-4 py-4 flex gap-3 items-start">
              <code className="text-primary font-mono font-bold text-sm bg-primary/10 px-2 py-1 rounded shrink-0">{item.ext}</code>
              <div>
                <p className="text-foreground font-medium text-sm">{item.label}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to format */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">How to Format Your Excel File</h2>
        <p className="text-muted-foreground text-sm mb-4">
          For best results, structure your Excel file with a <strong className="text-foreground">header row in the first row</strong> and one contact per row below it.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                {["Name", "Phone", "City", "Product"].map((h) => (
                  <th key={h} className="text-left px-4 py-2 text-foreground font-semibold border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["John Smith", "919876543210", "Mumbai", "Pro Plan"],
                ["Sara Khan", "919123456789", "Delhi", "Free Plan"],
                ["Ravi Patel", "918765432109", "Pune", "Enterprise"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 text-muted-foreground">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          All columns except <code className="bg-muted px-1 rounded text-primary">Phone</code> become available as message variables — e.g. <code className="bg-muted px-1 rounded text-primary">{`{Name}`}</code>, <code className="bg-muted px-1 rounded text-primary">{`{City}`}</code>, <code className="bg-muted px-1 rounded text-primary">{`{Product}`}</code>.
        </p>
      </section>

      {/* Upload steps */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">How to Send Bulk WhatsApp Messages from Your Excel or CSV File</h2>
        <div className="space-y-5">
          <Step
            n={1}
            title='Click "Upload Excel" in the Numbers section'
            desc='Open the WasappBulk popup and click the green "Upload Excel" button in the Numbers section header.'
          />
          <Step
            n={2}
            title="Select your file"
            desc="Choose your .xlsx, .xls, or .csv file from your computer. Sending a bulk WhatsApp message from CSV works exactly the same way. The file is read locally — never uploaded to any server."
          />
          <Step
            n={3}
            title="Contacts are imported automatically"
            desc="WasappBulk reads all rows and adds each phone number as a contact chip. If names are detected, they appear on the chip in green."
          />
          <Step
            n={4}
            title="Check the success message"
            desc={<>The status bar shows how many contacts were imported and which variables are available — e.g. <em className="text-foreground">10 contacts imported — variables available: {`{Name}`}, {`{City}`}</em>.</>}
          />
        </div>
      </section>

      {/* Phone number formats */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Phone Number Format</h2>
        <p className="text-muted-foreground text-sm mb-4">
          Always include the <strong className="text-foreground">country code</strong> in your phone number column. WasappBulk accepts several common formats:
        </p>
        <div className="space-y-2">
          {[
            { format: "919876543210", label: "✓ Country code + number (recommended)" },
            { format: "+91 98765 43210", label: "✓ With + and spaces" },
            { format: "91-9876-543210", label: "✓ With dashes" },
            { format: "9876543210", label: "⚠ Without country code — use the country picker in the app" },
          ].map((item) => (
            <div key={item.format} className="flex items-center gap-3 border border-border rounded-lg px-4 py-2.5">
              <code className="text-primary font-mono text-sm">{item.format}</code>
              <span className="text-muted-foreground text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Tips &amp; Notes</h2>
        <TipList items={[
          { icon: "✓", text: <><strong className="text-foreground">Duplicate numbers</strong> are automatically skipped — no double messages.</> },
          { icon: "✓", text: <>You can upload <strong className="text-foreground">multiple files</strong> — contacts from each file are added to the existing list.</> },
          { icon: "✓", text: <>Your imported contacts are <strong className="text-foreground">saved locally</strong> — they reappear the next time you open the extension.</> },
          { icon: "✓", text: <>The first row <strong className="text-foreground">must be a header row</strong> for variable detection to work (Name, Phone, etc.).</> },
          { icon: "⚠", text: <>Numbers shorter than 7 digits are ignored automatically.</> },
        ]} />
      </section>

      <SectionCTA
        title="Try uploading your contact list now"
        desc="Upload any Excel or CSV file and WasappBulk will import all contacts instantly — with personalization variables ready to use."
      />
    </article>
  );
}

// ── Send Messages ────────────────────────────────────────────────────────────

function SendMessagesSection() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        How to Send Bulk WhatsApp Messages
      </h1>
      <p className="text-muted-foreground mb-8">
        WasappBulk is a bulk WhatsApp message sender used as a WhatsApp marketing tool by
        businesses, educators, and sales teams worldwide. Once your contacts are added and your
        message is ready, it handles the entire sending process automatically — opening each chat,
        typing the message, and confirming delivery.
      </p>

      {/* How sending works */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">How WasappBulk Sends Messages</h2>
        <p className="text-muted-foreground text-sm mb-5">
          WasappBulk works as a wa bulk message sender directly inside your browser using WhatsApp Web.
          It does not use any external API or server — every message is sent directly from your
          WhatsApp account, just as if you typed it yourself.
        </p>
        <div className="space-y-5">
          <Step n={1} title="Opens WhatsApp Web chat for the contact" desc="The extension automatically navigates to the contact's chat using their phone number." />
          <Step n={2} title="Fills in the personalized message" desc="Your message template is filled with that contact's data (name, city, etc.) before sending." />
          <Step n={3} title="Clicks the send button" desc="The extension clicks the WhatsApp send button — the message is delivered from your account." />
          <Step n={4} title="Waits for the delay" desc="After confirming delivery, WasappBulk waits the configured delay before sending to the next contact." />
          <Step n={5} title="Moves to the next contact" desc="The process repeats until all contacts in the queue have been messaged." />
        </div>
      </section>

      {/* Step by step usage */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Sending Your First Bulk Message</h2>
        <div className="space-y-5">
          <Step
            n={1}
            title="Add phone numbers"
            desc="Type numbers in the Numbers field or upload an Excel file. Each number appears as a chip."
          />
          <Step
            n={2}
            title="Write your message"
            desc={<>Type your message in the Message box. Use <code className="bg-muted px-1 rounded text-primary">{`{Name}`}</code> or any Excel column variable to personalize it for each recipient.</>}
          />
          <Step
            n={3}
            title="Configure delay in Settings"
            desc="Go to Settings and set the delay between messages. Minimum 8 seconds is recommended to avoid WhatsApp bans. Enable Randomize Delay for extra safety."
          />
          <Step
            n={4}
            title='Click "Start Sending"'
            desc="Hit the green Start Sending button. WasappBulk begins processing your queue automatically."
          />
          <Step
            n={5}
            title="Monitor progress in the Progress tab"
            desc="Switch to the Progress tab to see real-time stats — how many sent, failed, and remaining. You can pause or stop at any time."
          />
        </div>
      </section>

      {/* Progress tab explained */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Understanding the Progress Tab</h2>
        <div className="space-y-3">
          {[
            { label: "✅ Sent", desc: "Messages successfully delivered to this contact." },
            { label: "❌ Failed", desc: "Message could not be delivered — invalid number or WhatsApp not installed on that phone." },
            { label: "📋 Total", desc: "Total contacts in the current sending queue." },
            { label: "⏸ Pause", desc: "Temporarily pauses the queue. Click Resume to continue from where it stopped." },
            { label: "⏹ Stop", desc: "Stops the queue completely. Any unsent messages remain in the list so you can retry." },
            { label: "🔁 Retry Failed", desc: "Appears after sending completes — click to re-attempt all failed contacts." },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 items-start border border-border rounded-lg px-4 py-3">
              <span className="text-foreground font-semibold text-sm w-28 shrink-0">{item.label}</span>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Anti-ban tips */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">How to Send Bulk WhatsApp Messages Without Getting Banned</h2>
        <TipList items={[
          { icon: "✓", text: <><strong className="text-foreground">Always use a delay of at least 8 seconds</strong> between messages. 10–15 seconds is safer.</> },
          { icon: "✓", text: <><strong className="text-foreground">Enable Randomize Delay</strong> — adds ±2 seconds variation to mimic human behavior.</> },
          { icon: "✓", text: <>Keep your daily sends under <strong className="text-foreground">200 messages</strong> to stay safe on a regular number.</> },
          { icon: "✓", text: <><strong className="text-foreground">Personalize your messages</strong> using variables — identical messages to many contacts increase ban risk.</> },
          { icon: "⚠", text: <>Never send to numbers that haven't opted in to receive messages from you.</> },
        ]} />
      </section>

      <SectionCTA
        title="Start sending bulk WhatsApp messages today"
        desc="Install WasappBulk free — add your contacts, write your message, and start your first bulk send in under 2 minutes."
      />
    </article>
  );
}

// ── Attach Media ─────────────────────────────────────────────────────────────

function AttachMediaSection() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Attach Images, PDFs &amp; Videos to Bulk WhatsApp Messages
      </h1>
      <p className="text-muted-foreground mb-8">
        WasappBulk is a WhatsApp bulk sender with attachment support — send images, videos, PDFs,
        and other files alongside your personalized message text. Every contact in your list
        receives the same media file, making it perfect for WhatsApp marketing messages with media
        such as offer banners, catalogues, and product videos.
      </p>

      {/* Supported types */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Supported Media Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: "🖼️", type: "Images", formats: "JPEG, PNG, GIF, WebP", desc: "Product photos, banners, offer cards, infographics." },
            { icon: "🎥", type: "Videos", formats: "MP4, MOV, WebM", desc: "Product demos, promotional clips, tutorials." },
            { icon: "📄", type: "Documents", formats: "PDF", desc: "Invoices, brochures, reports, menus, catalogues." },
            { icon: "📦", type: "Max File Size", formats: "Up to 50 MB", desc: "Files larger than 50 MB cannot be attached." },
          ].map((item) => (
            <div key={item.type} className="border border-border rounded-xl px-4 py-4 flex gap-3 items-start">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="text-foreground font-semibold text-sm">{item.type}</p>
                <code className="text-primary text-xs font-mono">{item.formats}</code>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to attach */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">How to Attach a File</h2>
        <div className="space-y-5">
          <Step
            n={1}
            title='Click the 📎 attachment icon in the Message section'
            desc="The paperclip icon is in the formatting toolbar just below the message text box."
          />
          <Step
            n={2}
            title="Select your file"
            desc="A file picker opens. Choose any supported image, video, or PDF from your computer."
          />
          <Step
            n={3}
            title="File appears in the Attached section"
            desc="The filename is shown below the message box with a × button to remove it. Your message text stays separate."
          />
          <Step
            n={4}
            title="Write your message and send"
            desc="Type your message as normal (with variables if needed). When you click Start Sending, each contact receives both the media file and your personalized message together."
          />
        </div>
      </section>

      {/* How media + text works */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">How Media + Text Works Together</h2>
        <p className="text-muted-foreground text-sm mb-4">
          WasappBulk sends the media and the message text as a <strong className="text-foreground">single WhatsApp message</strong> — letting you send personalized WhatsApp messages with an image, video, or PDF as the caption. It works exactly like when you manually share a photo with a caption, but automated for every contact.
        </p>
        <div className="bg-muted border border-border rounded-xl px-5 py-4">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest font-semibold">What the recipient sees</p>
          <div className="bg-background border border-border rounded-lg p-3 max-w-xs">
            <div className="bg-muted rounded-lg h-28 flex items-center justify-center text-3xl mb-2">🖼️</div>
            <p className="text-sm text-foreground">Hello John! 🎉 Check out our new offer just for you in Mumbai. Valid today only!</p>
            <p className="text-xs text-muted-foreground mt-1">10:32 AM ✓✓</p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Tips &amp; Notes</h2>
        <TipList items={[
          { icon: "✓", text: <><strong className="text-foreground">One media file per session</strong> — the same file is sent to all contacts in that send. Start a new session to use a different file.</> },
          { icon: "✓", text: <>You can still use <strong className="text-foreground">message variables</strong> like <code className="bg-muted px-1 rounded text-primary">{`{Name}`}</code> even when attaching media — the caption is fully personalized.</> },
          { icon: "✓", text: <>Media files are stored <strong className="text-foreground">locally in your browser</strong> — they are never uploaded to WasappBulk servers.</> },
          { icon: "✓", text: <>To remove an attached file, click the <strong className="text-foreground">× button</strong> next to the filename before starting the send.</> },
          { icon: "⚠", text: <>WhatsApp may compress images and videos — use the highest quality file you have for best results.</> },
          { icon: "⚠", text: <>Very large files (close to 50 MB) may slow down the sending process slightly as the file is loaded for each message.</> },
        ]} />
      </section>

      <SectionCTA
        title="Send media + personalized messages to all your contacts"
        desc="Install WasappBulk free and attach images, PDFs, or videos to your bulk WhatsApp campaigns in seconds."
      />
    </article>
  );
}

// ── Variables (existing) ─────────────────────────────────────────────────────

function VariablesSection() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Personalize WhatsApp Messages with Variables
      </h1>
      <p className="text-muted-foreground mb-8">
        WasappBulk acts as a WhatsApp message personalization tool — letting you send personalized
        WhatsApp messages to multiple contacts at once using dynamic variables from your Excel sheet.
        Each contact receives a unique, customized message, making your outreach feel personal at scale.
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
          This lets you send <strong className="text-foreground">personalized WhatsApp messages in bulk</strong> — greeting each person by name, including their order details, scores, city, or any custom field, all from a single message template without writing each message manually.
        </p>
        <p className="text-muted-foreground">
          Think of it like a <strong className="text-foreground">mail merge</strong> — instead of writing 100 different messages, you write <strong>one template</strong> with placeholders, and WasappBulk fills them in with each person's data automatically.
        </p>
      </section>

      {/* Simple Analogy */}
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

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">How It Works — Step by Step</h2>
        <div className="space-y-4">
          <Step n={1} title="Prepare Excel file with column headers" desc={<>Create an Excel file where the <strong className="text-foreground">first row is headers</strong>. Example: <code className="bg-muted px-1 rounded text-primary">Name</code>, <code className="bg-muted px-1 rounded text-primary">Phone</code>, <code className="bg-muted px-1 rounded text-primary">Marks</code>, <code className="bg-muted px-1 rounded text-primary">City</code></>} />
          <Step n={2} title="Upload Excel to WasappBulk" desc="Click 'Upload Excel' — the extension reads all column headers and imports your contacts with their data." />
          <Step n={3} title="Write message with {placeholders}" desc={<>Type your message and use <code className="bg-muted px-1 rounded text-primary">{`{columnName}`}</code> placeholders wherever you want personalized data.</>} />
          <Step n={4} title="Click Send" desc="WasappBulk automatically replaces each placeholder with that person's actual data and sends the personalized message." />
        </div>
      </section>

      {/* Multiple Real Examples */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Real-World Examples</h2>

        {/* Example 1: Students */}
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
          <p className="text-muted-foreground text-sm mb-2">What Rohan receives:</p>
          <div className="bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground whitespace-pre-line">
            {"Hi Rohan! 🎉\nYour exam result: 92 marks\nSchool: St. Xavier"}
          </div>
        </div>

        {/* Example 2: Business */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-3">💼 Example 2: Business Meeting Reminder</p>
          <p className="text-muted-foreground text-sm mb-3">Columns: <code className="bg-muted px-1 rounded text-primary">Name</code>, <code className="bg-muted px-1 rounded text-primary">Company</code>, <code className="bg-muted px-1 rounded text-primary">Time</code>, <code className="bg-muted px-1 rounded text-primary">Location</code>, <code className="bg-muted px-1 rounded text-primary">Phone</code></p>
          <p className="text-muted-foreground text-sm mb-2">Your message:</p>
          <div className="bg-background border border-border rounded-lg px-3 py-2 mb-3 text-sm font-mono text-foreground whitespace-pre-line">
            {"Dear "}<span className="text-primary font-semibold">{`{name}`}</span>{",\n\nMeeting reminder: "}<span className="text-primary font-semibold">{`{time}`}</span>{"\n📍 Location: "}<span className="text-primary font-semibold">{`{location}`}</span>{"\nCompany: "}<span className="text-primary font-semibold">{`{company}`}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">Result for Mr. Sharma (10 AM, Mumbai, TechCorp):</p>
          <div className="bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground whitespace-pre-line">
            {"Dear Mr. Sharma,\n\nMeeting reminder: 10 AM\n📍 Location: Mumbai\nCompany: TechCorp"}
          </div>
        </div>

        {/* Example 3: E-commerce */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">🛍️ Example 3: Order Confirmation</p>
          <p className="text-muted-foreground text-sm mb-3">Columns: <code className="bg-muted px-1 rounded text-primary">Name</code>, <code className="bg-muted px-1 rounded text-primary">OrderID</code>, <code className="bg-muted px-1 rounded text-primary">Amount</code>, <code className="bg-muted px-1 rounded text-primary">City</code>, <code className="bg-muted px-1 rounded text-primary">Phone</code></p>
          <p className="text-muted-foreground text-sm mb-2">Your message:</p>
          <div className="bg-background border border-border rounded-lg px-3 py-2 mb-3 text-sm font-mono text-foreground whitespace-pre-line">
            {"Hi "}<span className="text-primary font-semibold">{`{name}`}</span>{"! 🎉\n\nOrder confirmed!\nOrder ID: "}<span className="text-primary font-semibold">{`{orderid}`}</span>{"\nAmount: ₹"}<span className="text-primary font-semibold">{`{amount}`}</span>{"\nDelivery to: "}<span className="text-primary font-semibold">{`{city}`}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">Result for customer with Order ORD12345, ₹5000, Delhi:</p>
          <div className="bg-muted/30 border border-border rounded-lg px-3 py-2 text-sm text-foreground whitespace-pre-line">
            {"Hi John! 🎉\n\nOrder confirmed!\nOrder ID: ORD12345\nAmount: ₹5000\nDelivery to: Delhi"}
          </div>
        </div>
      </section>

      {/* What columns can you use */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Any Excel Column Works!</h2>
        <p className="text-muted-foreground text-sm mb-4">
          You're not limited to "Name" and "Marks". <strong className="text-foreground">Any column header in your Excel becomes a variable</strong>. Here are common examples:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { header: "Name", variable: "{name}", example: "John, Sarah, Mike" },
            { header: "Email", variable: "{email}", example: "john@test.com" },
            { header: "Phone", variable: "{phone}", example: "9876543210" },
            { header: "Marks", variable: "{marks}", example: "95, 87, 92" },
            { header: "Score", variable: "{score}", example: "85, 90, 78" },
            { header: "City", variable: "{city}", example: "Mumbai, Delhi, Pune" },
            { header: "Company", variable: "{company}", example: "TechCorp, DesignHub" },
            { header: "OrderID", variable: "{orderid}", example: "ORD12345" },
            { header: "Amount", variable: "{amount}", example: "5000, 2500" },
            { header: "Date", variable: "{date}", example: "2026-04-10" },
            { header: "Package", variable: "{package}", example: "Premium, Standard" },
            { header: "Status", variable: "{status}", example: "Pending, Shipped" },
          ].map((item) => (
            <div key={item.header} className="border border-border rounded-lg px-3 py-2.5">
              <p className="text-xs text-muted-foreground mb-1">Column: <strong className="text-foreground">{item.header}</strong></p>
              <p className="text-sm font-mono text-primary mb-1">{item.variable}</p>
              <p className="text-xs text-muted-foreground">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Common Mistakes & How to Fix Them</h2>
        <div className="space-y-4">
          <div className="border border-red-200 bg-red-50 rounded-lg px-4 py-3">
            <p className="text-sm font-semibold text-red-900 mb-1">❌ Wrong spelling:</p>
            <p className="text-sm text-red-800 mb-2">Message: "Hi {`{nmae}`}, congratulations!"</p>
            <p className="text-xs text-red-700">Result: "Hi {`{nmae}`}, congratulations!" — NOT replaced (typo!)</p>
          </div>
          <div className="border border-green-200 bg-green-50 rounded-lg px-4 py-3">
            <p className="text-sm font-semibold text-green-900 mb-1">✅ Correct spelling:</p>
            <p className="text-sm text-green-800 mb-2">Message: "Hi {`{name}`}, congratulations!"</p>
            <p className="text-xs text-green-700">Result: "Hi John, congratulations!"</p>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-lg px-4 py-3">
            <p className="text-sm font-semibold text-red-900 mb-1">❌ Variable doesn't exist:</p>
            <p className="text-sm text-red-800 mb-2">Message: "Your age is {`{age}`}" but Excel has no "Age" column</p>
            <p className="text-xs text-red-700">Result: "Your age is {`{age}`}" — NOT replaced</p>
          </div>
          <div className="border border-green-200 bg-green-50 rounded-lg px-4 py-3">
            <p className="text-sm font-semibold text-green-900 mb-1">✅ Use existing columns:</p>
            <p className="text-sm text-green-800 mb-2">Make sure your Excel has the columns you want to use</p>
            <p className="text-xs text-green-700">Message: "Score: {`{marks}`}" ✓ (Excel has "Marks" column)</p>
          </div>
        </div>
      </section>

      {/* Important Syntax Rules */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Syntax Rules</h2>
        <div className="space-y-3">
          {[
            { rule: "Use curly braces", example: "{name}", note: "Always use {}, not () or []" },
            { rule: "Match column names", example: "Excel has 'Name' → use {name}", note: "Case doesn't matter — {Name}, {name}, {NAME} all work" },
            { rule: "No spaces inside", example: "{name} ✓ | { name } ❌", note: "Spaces break the placeholder" },
            { rule: "Use any column", example: "{phone}, {marks}, {city}, {company}", note: "Any Excel header becomes a variable" },
          ].map((item) => (
            <div key={item.rule} className="border border-border rounded-lg px-4 py-3">
              <p className="text-sm font-semibold text-foreground mb-1">{item.rule}</p>
              <code className="text-xs bg-muted px-2 py-1 rounded text-primary font-mono">{item.example}</code>
              <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-3">Tips &amp; Best Practices</h2>
        <TipList items={[
          { icon: "✓", text: <>Variable names are <strong className="text-foreground">case-insensitive</strong> — <code className="bg-muted px-1 rounded text-primary">{`{Name}`}</code>, <code className="bg-muted px-1 rounded text-primary">{`{name}`}</code> and <code className="bg-muted px-1 rounded text-primary">{`{NAME}`}</code> all work the same.</> },
          { icon: "✓", text: <>You can use <strong className="text-foreground">multiple variables in one message</strong> — as many as you want: <code className="bg-muted px-1 rounded text-primary">{`{name}`}</code>, <code className="bg-muted px-1 rounded text-primary">{`{marks}`}</code>, <code className="bg-muted px-1 rounded text-primary">{`{city}`}</code>, etc.</> },
          { icon: "✓", text: <>If a contact has no value for a variable, it's replaced with <strong className="text-foreground">empty text</strong> — no broken messages.</> },
          { icon: "✓", text: <>Works with <strong className="text-foreground">.xlsx, .xls, .csv</strong> files — any spreadsheet format.</> },
          { icon: "✓", text: <>Your Excel's <strong className="text-foreground">first row MUST be column headers</strong> for variables to be detected automatically.</> },
          { icon: "⚠", text: <>Double-check spelling of variable names — they must match your Excel column headers exactly.</> },
        ]} />
      </section>

      <SectionCTA
        title="Ready to send personalized WhatsApp messages?"
        desc="Install WasappBulk, upload your Excel file with contact names and data, and start sending personalized bulk WhatsApp messages in minutes — no coding required."
      />
    </article>
  );
}

// ── Main Export ──────────────────────────────────────────────────────────────

export default function Guide() {
  const [activeSection, setActiveSection] = useState("getting-started");

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-6xl mx-auto px-6 py-12 flex gap-8">

          {/* Left Sidebar */}
          <aside className="w-56 shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Guide
              </p>
              <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            {activeSection === "getting-started" && <GettingStartedSection />}
            {activeSection === "upload-excel"    && <UploadExcelSection />}
            {activeSection === "variables"       && <VariablesSection />}
            {activeSection === "send-messages"   && <SendMessagesSection />}
            {activeSection === "media"           && <AttachMediaSection />}
            {activeSection === "faq"             && (
              <div className="text-muted-foreground text-sm">FAQ coming soon.</div>
            )}
          </main>

        </div>
      </div>
      <Footer />
    </>
  );
}
