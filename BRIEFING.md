# HOKO Drop 01 Pre-Order Page Briefing

## Quick-Start für Claude Code

Diese Datei ist die zentrale Spec für die Pre-Order-Page von HOKO Drop 01. Lies sie vollständig, bevor du baust.

**Erste Schritte:**
1. Lies dieses Briefing komplett.
2. Gib eine 5-Punkte-Zusammenfassung deines Verständnisses.
3. Stelle Fragen zu unklaren Punkten, anstatt zu raten.
4. Setze schrittweise auf, mit Review-Pause nach jedem größeren Schritt.

**Reihenfolge der Implementierung:**
1. Next.js 14 Projekt mit TypeScript und Tailwind
2. Geist-Schrift via next/font/google
3. Tailwind Custom Colors aus diesem Briefing
4. shadcn/ui Init mit Button, Form, Accordion, Input, Dialog, Toast
5. Komponenten-Files (alle 9 Sektionen plus DropCounter)
6. /app/page.tsx mit allen Sektionen
7. /lib Files (constants, stripe, buttondown, db)
8. /api Routes (Stripe + Buttondown + Webhook)
9. /danke Page
10. Test-Setup

**Was du nicht improvisieren solltest:**
- Copy-Texte 1:1 aus diesem Briefing
- Brand-Farben exakt wie spezifiziert
- Pastel-de-Nata-Differenzierung in jeder Anpassung mitdenken

---

## Projekt-Übersicht

HOKO ist eine Berliner Drop-Bakery für Hokkaido Cheese Tart.
Drop 01 findet am Samstag, 30. Mai 2026 statt.
50 Boxen à 4 Tarts werden vorbestellt, am Drop-Tag frisch gebacken,
zwischen 16:00 und 18:00 Uhr in Berlin abgeholt.

Diese Page ist die einseitige Pre-Order-Page für Drop 01.
Bezahlung erfolgt vorab via Stripe.
Newsletter via Buttondown.
Hosting auf Vercel.

## Tech Stack

- Framework: Next.js 14 (App Router, TypeScript strict)
- Styling: Tailwind CSS
- UI Components: shadcn/ui (Button, Form, Dialog, Accordion, Input)
- Payment: Stripe Checkout (Server-Side Sessions)
- Newsletter: Buttondown API
- Database: Vercel KV (für Order-Tracking + Drop-Counter)
- Deploy: Vercel
- Domain: hoko-drop01.vercel.app (Test), später eathoko.com (TBA, Domain noch nicht gekauft)

## Brand-Tonalität

- Casual Premium, food-forward, urban-Berlin
- Drop-driven, Streetwear-Mechanik
- Direkt, knapp, plakativ
- Numbers vor Adjektiven ("50 Boxen, 18 Euro" statt "limitiert, attraktiv")
- Keine Em-Dashes, keine KI-typischen Phrasen
- Englisch-deutsche Mischung erlaubt ("Drop", "Pickup", "freshly baked")
- NICHT: Edel-Patisserie, Kawaii-japanisch, Lifestyle-Magazin

## Wichtige Brand-Constraint: Pastel de Nata Differenzierung

HOKO Cheese Tart wird in Berlin visuell schnell mit Pastel de Nata verwechselt. Das ist das primäre Differenzierungs-Risiko.

**Visuelle Unterschiede (alle Bilder müssen das zeigen):**
- HOKO ist höher (4-5 cm), Pastel de Nata ist flach (2 cm)
- HOKO hat glatte goldbraune Oberfläche, Pastel de Nata hat dunkle Brennstellen
- HOKO Füllung ist cremeweiß und fließt beim Anschnitt, Pastel de Nata Füllung ist gelb-orange und fest
- HOKO Kruste ist Sablé-Mürbteig, Pastel de Nata Kruste ist Blätterteig

**Sprachliche Unterschiede:**
- "Cheese Tart" konsequent verwenden, nicht nur "Tart"
- Geschmack: käsig, buttrig, leicht salzig (NICHT süß-vanillig)
- Kruste: Sablé-Stil (NICHT Blätterteig)

**FAQ-Eintrag explizit:** "Ist das wie eine Pastel de Nata?" wird auf der Page beantwortet.

## 7 Pieces of Code für HOKO (Brand-Reference)

Diese sind die Brand-Bausteine. Bei Copy-Unsicherheiten zurück auf diese Pieces fallen.

**1. Creation Story:** In Tokyo Bakery-Tradition, in Berlin nicht verfügbar bis HOKO. 50 Boxen pro Drop, frisch heute, weg morgen.

**2. Creed:** Frische ist nicht verhandelbar. Knappheit ist Ehrlichkeit. Der Bruch ist der Moment.

**3. Icons:** Bruchkante mit fließender Creme. HOKO-Box. HOKO-Wordmark in Caps. Pickup-Übergabe.

**4. Rituals:** Drop-Tag-Ritual (festes Datum). Pickup-Ritual (Hand-zu-Hand-Übergabe). Anschnitt-Ritual (Bruch und Fluss). Newsletter-Insider-Ritual.

**5. Sacred Words:** "Drop", "Bruch", "Box", "Pickup", "Heute frisch", "Hokkaido", "50 Boxen", "Cheese Tart" (nicht abkürzen).

**6. Pagans (Anti-HOKO):** Pastel de Nata Verwechslung. Kalte Asia-Markt-Tarts. Lifestyle-Edel-Bakeries. Convenience-Bakery-Ketten. Versand-Modell.

**7. Leader:** Bruder als Founder-Face plus Konditorin als Authority-Anker.

## Visual Identity

### Farben (in tailwind.config.ts als Custom Colors)

- background: #F5F0E8 (Off-White, Hauptfarbe)
- foreground: #0A0A0A (Tief-Schwarz)
- accent: #C7853A (Goldbraun, für CTAs und Akzente)
- muted: #8B6F47 (Wood-Tone, für Sub-Texte)

### Schriften

- Display + Body: Geist (von Vercel via next/font/google)
- Fallback: Inter
- Wordmark "HOKO": Geist Bold, All Caps

### Typografie-Hierarchie

- H1: Geist Bold, 96px desktop / 56px mobile
- H2: Geist Bold, 48px desktop / 32px mobile
- H3: Geist Bold, 24px
- Body: Geist Regular, 18px desktop / 16px mobile
- Small: Geist Regular, 14px
- Caption: Geist Regular, 12px

## Page-Architektur

Single-Page Pre-Order mit folgenden Sektionen in Reihenfolge:

1. Pre-Hero Tagline (klein, oben) - Awareness: Cold Traffic
2. Hero (Two-Column auf Desktop, Stack auf Mobile) - Awareness: Cold to Solution-Aware
3. Story / Why HOKO - Awareness: Problem-Aware to Solution-Aware
4. Drop-Mechanik (3-Schritte-Plan) - Awareness: Solution-Aware
5. Bonus-Stack - Awareness: Solution-Aware to Product-Aware
6. Pre-Order-Form (Stripe-Integration) - Awareness: Product-Aware to Most-Aware
7. FAQ (Accordion) - Awareness: Most-Aware
8. Newsletter-Sign-up (für Nicht-Käufer) - Awareness: Solution-Aware
9. Footer

Plus eine separate Confirmation-Page `/danke` nach erfolgreicher Stripe-Zahlung.

---

## Sektion 1: Pre-Hero Tagline

**Komponente:** `<PreHeroTagline />`

**Awareness-Stage:** Cold Traffic (sensorischer Hook in unter 1 Sekunde)

**Layout:**
- Volle Breite
- Höhe 48-60px
- Off-White Hintergrund (#F5F0E8)
- Schwarzer Text (#0A0A0A), All Caps, mittig zentriert
- Schrift: Geist Bold, 14px desktop, 12px mobile
- Optional: kleiner Goldbraun-Punkt (•) vor und nach dem Text

**Copy:**

```
WENN DIE KRUSTE BRICHT UND DIE CREME FLIESST, WEISST DU, DASS ES ECHT IST.
```

Kritisch: "und die Creme fließt" ist die Pastel-Differenzierung. Pastel de Nata Creme fließt nicht, HOKO Creme fließt.

---

## Sektion 2: Hero

**Komponente:** `<Hero />`

**Awareness-Stage:** Cold to Solution-Aware (Brand-Identifikation, Visual-Wow, primärer CTA)

**Layout:**
- min-h-[90vh]
- Two-Column auf Desktop (50/50), Stack auf Mobile
- Linke Hälfte: Text + CTA
- Rechte Hälfte: Bruchkanten-Hero-Image

**Image:**
- Source: `/images/hero-bruchkanten.jpg`
- Alt: "Hokkaido Cheese Tart, Bruchkante mit fließender Cremefüllung"
- Object-cover, fullbleed in Container

**Copy linke Seite:**

H1 (Geist Bold, 96px desktop / 56px mobile, schwarz):

```
Crispy. Cremig.
50 Boxen.
```

H2 (Geist Regular, 24px desktop / 18px mobile, dunkelgrau #333):

```
Hokkaido Cheese Tart. Berlin Drop 01.
Heute frisch, morgen weg.
```

Drop-Counter (18px, Goldbraun):

```
[X] von 50 Boxen vergeben
```

CTA-Button (Goldbraun bg, Off-White text, Geist Bold, 18px, 56px höhe):

```
Box sichern · 18 Euro
```

Sub-Text unter CTA (12px, dunkelgrau):

```
Pickup am Sa 30.05.2026, 16:00–18:00 Uhr
```

**Drop-Counter-Logik:**
Live-Counter, der die Anzahl bereits verkaufter Boxen aus der Datenbank zieht.
Bei <10 verfügbar: Schrift wird Goldbraun-aggressive ("Nur noch 7 Boxen").
Bei 0 verfügbar: "Drop 01 ausverkauft. Newsletter für Drop 02 abonnieren."

**Click auf CTA-Button:**
Smooth-Scroll zu `<PreOrderForm />` Sektion.

---

## Sektion 3: Story / Why HOKO

**Komponente:** `<Story />`

**Awareness-Stage:** Problem-Aware to Solution-Aware

**Layout:**
- Vollbreite Sektion, Off-White
- Centered Text, max-width 700px
- Crust-Macro-Image rechts oder unten (responsive)

**Image:**
- Source: `/images/crust-macro.jpg`
- Alt: "Detailaufnahme der knusprigen Sablé-Kruste einer Hokkaido Cheese Tart"
- 400x400px desktop, full-width mobile

**Copy:**

H2 (Geist Bold, 48px, schwarz, centered):

```
Hokkaido Cheese Tart, jetzt in Berlin.
```

Body (Geist Regular, 18px, dunkelgrau, max-width 600px):

```
In Tokyo gibt es eine Bakery-Tradition: Cheese Tarts, die heute morgen aus dem Ofen kommen, und heute Abend weg sind. Knusprige Sablé-Kruste, fließende Hokkaido-Milch-Käse-Füllung. Frisch ist nicht verhandelbar.

Hokkaido Cheese Tart ist nicht süß. Sie ist käsig. Cremige Hokkaido-Milch trifft auf Frischkäse, leicht salzig, buttrig. Ein anderer Bissen, ein anderes Tart-Erlebnis.

In Berlin gibt es das nicht. Bis jetzt.

HOKO ist eine Drop-Bakery: 50 Boxen pro Drop, an einem Tag, an einem Ort. Heute frisch gebacken. Morgen weg. Das ist Hokkaido-Wahrheit, Berlin-direkt.
```

**Sub-Komponente: Konditorin-Profil**

Falls `/images/baker-portrait.jpg` vorhanden ist:

Drei-spaltig auf Desktop, gestapelt auf Mobile:
- Konditorin-Foto rund maskiert (120x120px)
- Name (Geist Bold, 16px): [TBA, Platzhalter]
- Bio (Geist Regular, 14px, dunkelgrau): Konditorin-Meisterin. [X] Jahre Patisserie-Erfahrung. Bäckt für HOKO.

Falls Foto nicht vorhanden: Sub-Komponente komplett auslassen.

---

## Sektion 4: Drop-Mechanik

**Komponente:** `<DropMechanik />`

**Awareness-Stage:** Solution-Aware

**Layout:**
- Vollbreite, Off-White
- 3-Schritte-Plan, horizontal auf Desktop, vertikal auf Mobile
- Drop-Lineup-Image unter den Schritten

**Image:**
- Source: `/images/drop-lineup.jpg`
- Alt: "Vier HOKO-Boxen aufgereiht auf einem Holztresen, bereit für Pickup"
- Volle Breite, max-height 400px

**Copy:**

H2 (Geist Bold, 40px, schwarz, centered):

```
So funktioniert's.
```

3 Schritte (jeder mit großer Zahl + Headline + Body):

```
01. PRE-ORDER
Box online sichern.
50 Boxen, first come first serve.

02. WIR BACKEN
Drop-Tag: Konditorin bäckt frisch am Morgen.
4 Tarts pro Box.

03. PICKUP
Sa 30.05.2026, 16:00–18:00 Uhr.
Berlin-Mitte, Torstraße [Adresse-Platzhalter].
Box mitnehmen. Anschneiden. Bruch erleben.
```

Pickup-Adresse als Konstante in `lib/constants.ts`:

```typescript
export const PICKUP_ADDRESS = "Berlin-Mitte, Torstraße [TBA]";
export const PICKUP_DATE = "Sa 30.05.2026";
export const PICKUP_TIME = "16:00–18:00 Uhr";
export const TOTAL_BOXES = 50;
export const PRICE_PER_BOX = 18;
export const MAX_BOXES_PER_ORDER = 3;
```

---

## Sektion 5: Bonus-Stack

**Komponente:** `<BonusStack />`

**Awareness-Stage:** Solution-Aware to Product-Aware

**Layout:**
- Two-Column auf Desktop, Stack auf Mobile
- Box-Open-Image links
- Bonus-Liste rechts

**Image:**
- Source: `/images/box-open.jpg`
- Alt: "HOKO-Box geöffnet, 4 frisch gebackene Hokkaido Cheese Tarts in 2x2 Anordnung"

**Copy:**

H2 (Geist Bold, 40px, schwarz):

```
Was du beim Drop 01 bekommst:
```

Bonus-Liste (jeder Punkt mit Goldbraun-Checkmark):

```
✓ 4 frisch gebackene Hokkaido Cheese Tarts
  Heute morgen aus dem Ofen.

✓ HOKO-Box mit Drop-Sticker "1 of 50"
  Nummeriertes Sammlerstück. Limited.

✓ Handgeschriebene Karte vom Founder-Team
  Persönlich. Nicht maschinell.

✓ Erste Reihe für Drop 02
  Wir informieren dich 24h vor allen anderen.

✓ Geld-zurück, wenn nicht begeistert
  Keine Fragen. Keine Diskussion.
```

---

## Sektion 6: Pre-Order-Form

**Komponente:** `<PreOrderForm />`

**Awareness-Stage:** Product-Aware to Most-Aware (Conversion-Sektion)

**Layout:**
- Centered, max-width 480px
- Off-White Hintergrund mit Border (1px Schwarz)
- Form-Felder vertikal gestapelt
- Stripe-Element für Card-Input
- Big CTA-Button am Ende

**Copy:**

H2 (Geist Bold, 40px, schwarz, centered):

```
Box sichern.
```

Sub-Headline (Geist Regular, 16px, dunkelgrau, centered):

```
50 Boxen total. Bezahlung jetzt, Pickup am 30.05.
```

**Form-Felder:**

```
Vorname * (required)
[Input-Field, full-width, height 48px]

Email * (required, valid email)
[Input-Field, full-width, height 48px]

Telefon (optional, für Pickup-Reminder)
[Input-Field, full-width, height 48px]

Anzahl Boxen * (1, 2, oder 3)
[Number-Selector, default 1]
[Sub-Text: "Maximal 3 Boxen pro Bestellung."]

Stripe Card Element (Stripe Checkout Session, Server-Side erstellt)

Total-Anzeige: "Total: [Anzahl] x 18 Euro = [Total] Euro"
```

CTA-Button (Goldbraun bg, Off-White text, Geist Bold, 20px, 64px höhe, full-width):

```
Jetzt bezahlen und Box sichern
```

Sub-Text (12px, dunkelgrau):

```
Sichere Zahlung via Stripe.
Geld-zurück-Garantie, wenn du beim Bissen nicht begeistert bist.
```

**Validation:**
- Alle Required-Felder müssen ausgefüllt sein
- Email muss valides Format haben
- Stripe Card muss valide sein
- Anzahl muss zwischen 1 und 3 sein
- Total muss verfügbare Boxen nicht überschreiten

**Submit-Logic:**
1. Form-Daten validieren (client-side mit react-hook-form + zod)
2. API-Call zu `/api/create-payment-intent` mit Bestelldaten
3. Stripe Checkout Session erstellen (server-side)
4. Redirect zu Stripe Checkout URL
5. Bei Stripe-Erfolg: Webhook empfängt `checkout.session.completed`
   - Order in DB (Vercel KV) speichern
   - Email an Buttondown subscriben
   - Order-Counter inkrementieren
6. Stripe redirected User zu `/danke?order=[orderId]`
7. Bei Stripe-Fehler: Stripe redirected zurück zu Page mit Error-State

---

## Sektion 7: FAQ

**Komponente:** `<FAQ />`

**Awareness-Stage:** Most-Aware

**Layout:**
- Collapsible Accordion (shadcn/ui Accordion)
- Centered, max-width 700px
- Off-White Hintergrund

**Copy:**

H2 (Geist Bold, 40px, schwarz, centered):

```
Häufige Fragen.
```

**FAQ-Items (Accordion):**

```
▾ Was wenn ich nicht kommen kann?
Schreib uns bis Donnerstag vor Drop. Wir geben deine Box an die nächste Person auf der Warteliste und erstatten dir den Preis.

▾ Welche Allergene?
HOKO Cheese Tart enthält: Milch, Weizen, Eier, Butter. Vegan oder glutenfrei können wir aktuell nicht anbieten.

▾ Wie lange ist die Cheese Tart frisch?
Heute frisch. Optimal innerhalb von 2 Stunden nach Pickup essen. Maximal 24h kühl gelagert.

▾ Ist das wie eine Pastel de Nata?
Nein. Pastel de Nata ist süßer Vanillepudding in Blätterteig. Hokkaido Cheese Tart ist cremige Käsefüllung in Mürbteig-Sablé. Andere Kategorie, anderer Geschmack. Beides gut, aber nicht das Gleiche.

▾ Kann ich mehr als 3 Boxen bestellen?
Nicht für Drop 01. Wir wollen, dass möglichst viele Foodies die Chance haben. Bei Drop 02 schauen wir das an.

▾ Wie ist der Pickup-Spot zu finden?
Adresse und Detail-Anweisung kommen 24h vor Drop per Email. Pickup zwischen 16:00 und 18:00 Uhr in Berlin.

▾ Gibt's Versand?
Nein. Pickup-only. Eine Hokkaido Cheese Tart durch Berlin schicken wäre nicht frisch. Wenn du nicht in Berlin bist, abonnier den Newsletter für Drop in deiner Stadt.

▾ Wer steckt hinter HOKO?
[Bruder-Name] und [dein Name], plus Konditorin [Name]. Mehr unter der Story-Sektion oben.
```

---

## Sektion 8: Newsletter

**Komponente:** `<Newsletter />`

**Awareness-Stage:** Solution-Aware (zweite Conversion-Chance für Nicht-Käufer)

**Layout:**
- Vollbreite, Schwarzer Hintergrund (#0A0A0A) für Kontrast
- Off-White Text und Goldbraun CTA
- Centered

**Copy:**

H2 (Geist Bold, 40px, Off-White, centered):

```
Drop verpasst?
```

Sub (Geist Regular, 18px, hellgrau #CCC, centered):

```
Drop 02 kommt. Newsletter-Insider erfahren es zuerst.
Plus Behind-the-Scenes-Material und Drop-Reminder.
```

Email-Input + Button inline:
- Email-Input (Off-White bg, 48px height, full-width-on-mobile)
- CTA-Button (Goldbraun, Off-White text, "Anmelden")

Sub-Text (12px, mittelgrau #888):

```
Kein Spam. Nur Drop-Ankündigungen und Foodie-Content.
Abmelden mit einem Klick.
```

**Buttondown-Integration:**
On Submit: API Route `/api/newsletter-subscribe` ruft Buttondown API.
Bei Erfolg: Success-Message inline ("Du bist drin. Drop 02 hörst du zuerst.")
Bei Fehler: Error-Toast.

---

## Sektion 9: Footer

**Komponente:** `<Footer />`

**Layout:**
- Vollbreite, Off-White Hintergrund mit dünner Border-top (1px schwarz)
- Drei-spaltig auf Desktop, gestapelt auf Mobile

**Copy:**

Spalte 1 (Brand):

```
HOKO
Hokkaido Cheese Tart
Berlin
```

Spalte 2 (Brand-Sub-Lockup):

```
Drop 01 · Berlin · 30.05.2026
Frisch ist nicht verhandelbar.
Knappheit ist Ehrlichkeit.
Der Bruch ist der Moment.
```

Spalte 3 (Links):

```
Folge @eathoko auf Instagram
Folge @eathoko auf TikTok

Impressum
Datenschutz
Kontakt: hello@eathoko.com (TBA, Domain noch nicht aktiv)
```

Bottom-Bar (12px, mittelgrau):

```
© 2026 HOKO Drop Bakery. All rights reserved.
```

---

## Confirmation-Page `/danke`

**Komponente:** `<DankePage />`

**Inhalt:**

```
H1: Box gesichert.

H2: Drop 01 Berlin, Sa 30.05.2026.

Body:
Du bekommst gleich eine Bestätigungs-Email mit allen Details.

Pickup-Box (Off-White Card mit Border):
- Wann: Sa 30.05.2026, 16:00–18:00 Uhr
- Wo: [Pickup-Adresse]
- Was: [Anzahl] HOKO Box(en)
- Order-ID: [orderId]

Reminder-Hinweis:
Wir schicken dir 24h vor Drop einen Reminder mit Detail-Anweisung.

Social-Share:
Share auf Instagram | Share auf TikTok
"Ich bin beim ersten HOKO Drop in Berlin dabei."

Newsletter-Reminder:
Folge @eathoko für Drop-Updates und Behind-the-Scenes.

CTA-Button:
Zurück zur Page
```

---

## File-Struktur

```
/app
  /page.tsx (Single-Page Pre-Order, alle Sektionen importiert)
  /danke/page.tsx (Confirmation)
  /api
    /create-payment-intent/route.ts
    /webhook/route.ts (Stripe Webhook)
    /newsletter-subscribe/route.ts
  /layout.tsx (Root Layout mit Geist Font)
  /globals.css (Tailwind base + Custom Vars)

/components
  /PreHeroTagline.tsx
  /Hero.tsx
  /Story.tsx
  /DropMechanik.tsx
  /BonusStack.tsx
  /PreOrderForm.tsx
  /FAQ.tsx
  /Newsletter.tsx
  /Footer.tsx
  /DropCounter.tsx
  /ui/ (shadcn/ui Components)

/lib
  /stripe.ts (Stripe-Client-Setup)
  /buttondown.ts (Buttondown-API-Client)
  /db.ts (Vercel KV Setup)
  /constants.ts (PICKUP_ADDRESS, DROP_DATE, etc.)

/public
  /images
    hero-bruchkanten.jpg
    crust-macro.jpg
    box-open.jpg
    drop-lineup.jpg
    pickup-handover.jpg
    hoko-logo.png
    baker-portrait.jpg (optional)

/.env.local (lokal, nicht in Git)
/tailwind.config.ts
/next.config.js
/package.json
/components.json (shadcn/ui Config)
/README.md
```

---

## Environment Variables

In `.env.local` (NICHT in Git committen):

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

BUTTONDOWN_API_KEY=...

NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_TOTAL_BOXES=50
NEXT_PUBLIC_DROP_DATE=2026-05-30
NEXT_PUBLIC_DROP_TIME=16:00-18:00
NEXT_PUBLIC_PICKUP_ADDRESS=Berlin-Mitte, Torstraße [TBA]

KV_URL=... (Vercel KV)
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
KV_REST_API_READ_ONLY_TOKEN=...
```

In Vercel-Dashboard später auch eintragen.

---

## Stripe-Setup

1. Stripe-Account auf stripe.com erstellen
2. Test-Mode aktivieren
3. API-Keys aus Dashboard kopieren (Publishable Key + Secret Key)
4. Webhook-Endpoint auf Vercel anlegen für `/api/webhook` Route
5. Webhook-Events: `checkout.session.completed`, `payment_intent.succeeded`
6. Produkt anlegen: "HOKO Cheese Tart Box" zu 18 Euro
7. Implementierung: Stripe Checkout (einfacher als Elements für MVP)

---

## Buttondown-Setup

1. Buttondown-Account auf buttondown.email erstellen
2. API-Key aus Settings kopieren
3. Newsletter-Liste erstellen: "HOKO Insider"
4. Welcome-Email-Template erstellen (text-only, Brand-Tonalität)

---

## Vercel-Setup

1. Vercel-Account auf vercel.com erstellen
2. Mit GitHub verbinden
3. Repository importieren
4. Framework: Next.js (auto-detect)
5. Environment Variables aus `.env.local` übertragen
6. Vercel KV im Dashboard aktivieren (Storage-Tab)
7. Deploy
8. Test-URL: hoko-drop01.vercel.app
9. Später: Custom Domain eathoko.com hinzufügen (sobald gekauft)

---

## Tailwind Custom Config

In `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F0E8",
        foreground: "#0A0A0A",
        accent: "#C7853A",
        muted: "#8B6F47",
        "muted-foreground": "#666666",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
```

---

## shadcn/ui Initialisierung

Nach `npx create-next-app@latest`:

```bash
npx shadcn-ui@latest init
```

Konfigurations-Antworten:
- Style: Default
- Base color: Slate (overridable in tailwind.config.ts)
- CSS variables: Yes

Komponenten installieren:

```bash
npx shadcn-ui@latest add button input form accordion dialog toast
```

---

## Acceptance Criteria

Die Page ist fertig, wenn folgende Punkte alle erfüllt sind:

- [ ] Alle 9 Sektionen funktionieren responsive auf Desktop und Mobile
- [ ] Alle Bilder laden ohne Fehler aus `/public/images/`
- [ ] Stripe-Integration: Test-Bestellung mit Test-Karte (4242 4242 4242 4242) funktioniert end-to-end
- [ ] Drop-Counter zeigt korrekte Anzahl verkaufter Boxen
- [ ] Newsletter-Sign-up speichert Email in Buttondown
- [ ] Confirmation-Page `/danke` zeigt Order-Details an
- [ ] Page erreicht Lighthouse-Score >= 90 für Performance
- [ ] Geist-Schrift wird korrekt geladen
- [ ] Color-Tokens stimmen mit Brand-Farben überein
- [ ] Alle Copy-Texte exakt wie in diesem Briefing

---

## Aus dem Scope ausgeschlossen (für MVP nicht nötig)

- Cookie-Banner (kommt nach DSGVO-Anwalts-Check)
- Mehrsprachigkeit (DE only für Drop 01)
- A/B-Testing (kommt nach Drop 01)
- Analytics (kommt mit eigenem Briefing)
- Live-Chat (kommt später)
- Multi-Drop-Support (Drop 02 hat eigene Page)

---

## Kill-Criteria nach Drop 01 (für Tracking-Plan)

Was nach dem 30.05.2026 gemessen wird, um Drop 02 zu validieren:

| Metrik | Erfolgs-Schwelle | Wie gemessen |
|---|---|---|
| Pre-Order-Conversion | 80%+ (40+ Boxen verkauft von 50) | Stripe-Dashboard |
| Pickup-Show-Up Rate | 95%+ (alle Bezahlten kommen) | manuelle Liste am Pickup-Tag |
| Wow-Reaktionen am Pickup | qualitativ messbar, 80%+ positiv | Bruder am Pickup beobachtet, dokumentiert |
| Organische Posts in 48h | 5+ Stories/Reels von Käufern | IG/TikTok Hashtag-Suche, Tag-Notifications |
| Wiederkauf-Interesse für Drop 02 | 50%+ | Mom-Test-Frage am Pickup: "Würdest du Drop 02 buchen?" |

**Entscheidungs-Logik:**
- 4 von 5 Schwellen erreicht: Drop 02 freigeben
- 2-3 von 5 erreicht: Diagnose-Loop, dann Drop 02 mit Anpassungen
- 0-1 erreicht: Konzept hinterfragen, eventuell Pivot

---

## Hinweise für Claude Code

- TypeScript strict
- Server Components wo möglich, Client Components nur wo nötig (Form, Stripe, Drop-Counter, Newsletter)
- Stripe-Integration über Stripe Checkout Session (server-side erstellt)
- Drop-Counter via Vercel KV, einfacher Counter `boxes_sold`, increment on successful order via Webhook
- Form-Validation client-side mit react-hook-form + zod
- Alle Copy-Texte 1:1 aus diesem Briefing übernehmen, nicht improvisieren
- Bei Unklarheiten: lieber nachfragen als raten
- Pastel-de-Nata-Differenzierung in jeder Copy-Anpassung mitdenken
- Brand-Tonalität (siehe oben) konsequent durchhalten

---

## Pre-Launch-Checklist

Vor öffentlichem Launch der Page:

- [ ] Pickup-Adresse final entschieden (Bezirk + Straße)
- [ ] Konditorin-Foto und Bio besorgt
- [ ] Stripe-Account angelegt, Test-Mode funktioniert
- [ ] Stripe Live-Keys nach erfolgreichem Test-Phase
- [ ] Buttondown-Account angelegt, API-Key gesetzt
- [ ] Impressum und Datenschutz-Seite (rechtlich Pflicht in DE, von Anwalt prüfen lassen)
- [ ] Email-Adresse hello@eathoko.com eingerichtet (oder Platzhalter Gmail)
- [ ] @eathoko auf IG und TikTok registriert mit erstem Post
- [ ] Garantie-Logik intern geklärt (wer bekommt Geld zurück, wie wird es abgewickelt)
- [ ] Drop-Sticker physisch produziert (mind. 50 Stück)
- [ ] Boxen physisch beschafft (mind. 50 Stück, plus 5-10 Reserve)
- [ ] Konditorin-Vertrag fixiert (Lieferdatum, Mengen, Preis)
- [ ] Pickup-Lokation fixiert (Adresse, Zugang, Schlüssel)

---

## Notizen für Iterationen nach Drop 01

- Drop 02 Variation prüfen (z.B. saisonal, neue Geschmacksrichtung)
- Multi-Drop-Architektur überlegen (eigene Pages pro Drop oder eine Page mit Drop-Switcher)
- Domain eathoko.com aktivieren
- Cookie-Banner nach DSGVO einbauen wenn Analytics
- Mehrsprachigkeit (EN) wenn internationale Foodies kaufen wollen
- Mom-Test-Interviews mit Drop-1-Käufern für Drop-2-Optimierung
