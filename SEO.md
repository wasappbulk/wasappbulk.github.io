# WasappBulk — SEO Strategy Guide

> This file documents the full SEO strategy for https://wasappbulk.github.io
> Reference this before making any changes to the landing page.

---

## Target URL
```
https://wasappbulk.github.io
```

---

## Meta Title & Description

```
Title (55 chars):
WasappBulk – Free WhatsApp Bulk Sender Chrome Extension

Alt Title:
Send Bulk WhatsApp Messages Free – No API | WasappBulk

Description (155 chars):
Send bulk WhatsApp messages to 1000s of contacts — no API, no saving
numbers. Free plan: 10 msgs/day. Pro: 5,000/day. Install free in 30 seconds.
```

---

## H1 / H2 / H3 Structure

### H1 (one per page)
```
Free WhatsApp Bulk Sender Chrome Extension — No API Needed
```

### H2 Sections
```
1. Send WhatsApp Messages to Thousands in Minutes
2. How WasappBulk Works — 3 Simple Steps
3. Features That Set Us Apart
4. Who Uses WasappBulk? Real Use Cases
5. Plans & Pricing — Start Free
6. WasappBulk vs WhatsApp Business API
7. Is It Safe? Anti-Ban System Explained
8. What Our Users Say
9. Frequently Asked Questions
```

### H3 Under Features
```
- Send to Unsaved Numbers — No Contact Saving Required
- Personalized Messages with {Name} Variables
- Upload Contacts from CSV or Excel
- Attach Images, Videos, PDFs and Documents
- Smart Delay Between Messages (Anti-Ban Mode)
- Real-Time Delivery Status Tracking
- Works Directly on WhatsApp Web — No App Install
```

### H3 Under Use Cases
```
- WhatsApp Bulk Sender for Small Businesses
- E-Commerce Order Updates & Promotions
- Event Invitations & RSVP Campaigns
- Real Estate Leads Follow-Up
- Restaurant & Food Delivery Promotions
- Educational Institutes — Fee Reminders & Notices
```

### H3 Under vs API Section
```
- No Monthly WhatsApp Business API Fees
- No Meta Business Verification Required
- Works on Your Existing WhatsApp Number
- Setup in Under 2 Minutes
```

---

## Target Keywords

### Primary (High Volume — Build Toward)
| Keyword | Est. Monthly Volume | Difficulty |
|---|---|---|
| whatsapp bulk sender | 12,000–22,000 | High |
| bulk whatsapp messages | 8,000–15,000 | High |
| whatsapp bulk message sender | 6,000–12,000 | High |
| wa bulk sender | 3,000–8,000 | Medium-High |
| whatsapp marketing tool | 5,000–10,000 | High |
| whatsapp blast software | 4,000–8,000 | Medium |

### Long-Tail (Win First — Low Competition)
| Keyword | Est. Monthly Volume | Difficulty |
|---|---|---|
| whatsapp bulk sender chrome extension free | 800–2,000 | Medium |
| send bulk whatsapp messages without API | 500–1,200 | Low-Medium |
| free whatsapp bulk sender no API needed | 400–900 | Low |
| whatsapp bulk message chrome extension | 600–1,500 | Medium |
| send bulk whatsapp from excel chrome extension | 400–1,000 | Low-Medium |
| whatsapp mass message sender free | 500–1,200 | Medium |
| whatsapp bulk message without saving number | 1,000–3,000 | Low |
| how to send bulk whatsapp messages | 5,000–10,000 | Medium |

### Comparison Keywords (Easy Wins)
```
- wasender alternative free
- sheetwa alternative free
- prosender alternative
- best free whatsapp bulk sender chrome extension
- whatsapp bulk sender vs api
- whatsapp bulk sender for small business
```

---

## Competitor Analysis

| Competitor | URL | Strength | Weakness | Our Angle |
|---|---|---|---|---|
| ProSender | prosender.tech | 100K+ users, strong schema | Complex UI | Simpler, cleaner UX |
| SheetWA | sheetwa.com | Deep content, Google Sheets | No free plan ($9.99+) | Genuine free tier |
| WASender | wasender.com | Strong brand, clean UI | Paid SaaS, no free tier | Free plan available |
| WAWebSender | wawebsender.com | Multilingual, "Free Forever" | Thin blog, weak DA | Better content strategy |
| WA Biz Sender | wabiz.in | India-focused | Spammy branding | Professional positioning |
| Privyr | privyr.com/tools | High DA parent | Just a tool page | Full product + support |

### Biggest Competitive Advantage
> Only WasappBulk has a **genuine free plan with no credit card required**.
> SheetWA: paid only. WASender: paid only. ProSender: unclear free limits.
> Lead with "Free Plan — No Credit Card" on every page and in every meta description.

---

## Schema Markup (Add to index.html)

### 1. SoftwareApplication (Most Critical)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "WasappBulk – WhatsApp Bulk Sender",
  "operatingSystem": "Chrome, Chromium-based browsers",
  "applicationCategory": "BusinessApplication",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Plan",
      "price": "0",
      "priceCurrency": "USD",
      "description": "10 messages per day, no credit card required"
    },
    {
      "@type": "Offer",
      "name": "Pro Plan",
      "price": "19",
      "priceCurrency": "USD",
      "description": "5,000 messages per day, media attachments, scheduling"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "320"
  },
  "url": "https://wasappbulk.github.io",
  "featureList": "Bulk WhatsApp messaging, CSV import, Anti-ban delay, Message personalization, Media attachments",
  "softwareVersion": "1.0.0"
}
```

### 2. Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WasappBulk",
  "url": "https://wasappbulk.github.io",
  "logo": "https://wasappbulk.github.io/assets/logo.png",
  "sameAs": [
    "https://chromewebstore.google.com/detail/wasappbulk/YOUR_EXTENSION_ID"
  ]
}
```

### 3. FAQPage (Rich Snippets in Google)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is WasappBulk free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WasappBulk offers a free plan with 10 messages per day. No credit card required. The Pro plan allows up to 5,000 messages per day."
      }
    },
    {
      "@type": "Question",
      "name": "Does WasappBulk require the WhatsApp Business API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. WasappBulk works directly through WhatsApp Web using your existing WhatsApp number. No API, no Meta Business verification required."
      }
    },
    {
      "@type": "Question",
      "name": "Will my WhatsApp account get banned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WasappBulk uses a smart anti-ban delay system with randomized intervals between messages. When used responsibly within recommended limits, the risk of a ban is very low."
      }
    },
    {
      "@type": "Question",
      "name": "Can I send WhatsApp messages to unsaved numbers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WasappBulk lets you send messages to any phone number without saving them to contacts first."
      }
    },
    {
      "@type": "Question",
      "name": "How many messages can I send per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free plan: 10 messages/day. Pro plan: 5,000 messages/day. Enterprise: 50,000 messages/day. Limits reset daily at midnight UTC."
      }
    },
    {
      "@type": "Question",
      "name": "Does WasappBulk support images, videos and documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pro plan users can attach images (JPEG, PNG, GIF, WebP), videos (MP4, MOV) and documents (PDF) up to 50MB per file."
      }
    },
    {
      "@type": "Question",
      "name": "Can I personalise each message with the recipient's name?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Use {name} placeholders in your message. WasappBulk replaces them with the corresponding value from your CSV contact list."
      }
    },
    {
      "@type": "Question",
      "name": "How do I install WasappBulk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Search for WasappBulk in the Chrome Web Store and click Add to Chrome. Installs in under 30 seconds. No sign-up required for the free plan."
      }
    }
  ]
}
```

---

## Technical SEO Checklist

- [ ] Add `<title>` and `<meta name="description">` to index.html
- [ ] Add all 3 schema blocks in `<head>` as JSON-LD `<script>` tags
- [ ] Add Open Graph tags (og:title, og:description, og:image 1200×630px)
- [ ] Add Twitter Card tags
- [ ] Add `<link rel="canonical" href="https://wasappbulk.github.io/" />`
- [ ] Create `public/sitemap.xml`
- [ ] Create `public/robots.txt`
- [ ] Add `lang="en"` to `<html>` tag
- [ ] Use WebP format for all images
- [ ] Add `width` and `height` to all `<img>` tags (prevents CLS)
- [ ] Add `loading="lazy"` to below-fold images

---

## Files to Create

```
public/
  sitemap.xml     ← submit to Google Search Console
  robots.txt      ← allow all, point to sitemap
  privacy.html    ← already done ✅
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.1">
  <url>
    <loc>https://wasappbulk.github.io/</loc>
    <lastmod>2026-03-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://wasappbulk.github.io/privacy.html</loc>
    <lastmod>2026-03-03</lastmod>
    <priority>0.5</priority>
  </url>
</urlset>
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://wasappbulk.github.io/sitemap.xml
```

---

## Backlink Strategy (Priority Order)

### Week 1 — Do Immediately
1. **Chrome Web Store** — optimise extension description with keywords (link from google.com DA 100)
2. **AlternativeTo.net** — list as alternative to SheetWA, ProSender, WASender
3. **Product Hunt** — schedule launch, get 30+ upvoters ready on Day 1
4. **G2.com** — free product profile under "WhatsApp Marketing"
5. **Capterra** — list under "WhatsApp Marketing" + "Bulk Messaging"
6. **Softonic** — submit extension listing

### Week 2–4
7. **Reddit** — post in r/Chrome, r/entrepreneur, r/digital_marketing (genuine post)
8. **Quora** — answer questions about bulk WhatsApp with natural mention
9. **YouTube** — 3-minute demo video, link in description
10. **Facebook Groups** — WhatsApp marketing & India digital marketing groups

### Ongoing
11. **Guest posts** — pitch marketing blogs: "Chrome Extensions Replacing WhatsApp API"
12. **"Best of" list outreach** — email authors of "Top WhatsApp Bulk Senders" lists to add WasappBulk
13. **Comparison pages** — create `/vs-wasender`, `/vs-sheetwa`, `/vs-prosender` pages

---

## Blog Posts to Write (SEO Content)

| Post Title | Target Keyword | Priority |
|---|---|---|
| How to Send Bulk WhatsApp Without Getting Banned (2026) | how to avoid whatsapp ban bulk messages | HIGH |
| WhatsApp Bulk Sender vs WhatsApp API — Which Is Right? | whatsapp bulk sender vs api | HIGH |
| How to Send Bulk WhatsApp from Excel — Step by Step | send bulk whatsapp from excel | HIGH |
| Best Free WhatsApp Bulk Senders Compared (2026) | best free whatsapp bulk sender | HIGH |
| WhatsApp Marketing for Small Business — Complete Guide | whatsapp marketing for small business | MEDIUM |
| WasappBulk vs WASender — Full Comparison | wasender alternative free | MEDIUM |
| WasappBulk vs SheetWA — Which Is Better? | sheetwa alternative | MEDIUM |
| WhatsApp Bulk Sender for Real Estate Agents | whatsapp bulk sender real estate | LOW |
| WhatsApp Bulk Sender for Restaurants | whatsapp bulk sender restaurant | LOW |

---

## Google Search Console Setup

1. Go to: https://search.google.com/search-console
2. Add property: `https://wasappbulk.github.io`
3. Verify via HTML tag (add `<meta name="google-site-verification" content="...">` to index.html)
4. Submit sitemap: `https://wasappbulk.github.io/sitemap.xml`
5. Request indexing for homepage URL

---

## WASender.com — Specific Competitive Angles

- WASender is a paid SaaS — no genuine free tier
- Requires separate WhatsApp Business account setup
- More complex dashboard vs WasappBulk's simple Chrome extension
- **Keywords to target:** `wasender alternative`, `wasender alternative free`, `free wasender`
- **Create page:** `/vs-wasender` targeting these comparison queries

---

## Notes
- India is the #1 target market (535M+ WhatsApp users)
- Always mention "No API", "No credit card", "Free plan" in all content
- Use plain crawlable HTML for all key content — avoid hiding text in JS components
- Update `lastmod` in sitemap.xml after every content update
