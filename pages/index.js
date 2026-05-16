import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, CalendarDays, ShieldCheck, Bot, Scale, Mail, Database, Cpu,
  Rocket, Code2, Video, Globe2, ArrowRight, Sparkles, CheckCircle2,
  Menu, X, Waves, Network, FileText
} from "lucide-react";

const brands = {
  letaiwork4u: {
    domain: "letaiwork4u.com",
    name: "LetAIwork4u",
    label: "Mother Company",
    claim: "Lass die KI für dich arbeiten.",
    headline: "KI, Voicebots, Software und Robotik – praktisch nutzbar für echte Unternehmen.",
    subline: "LetAIwork4u ist das Mutterunternehmen für moderne KI-Integration, Voice Automation, LegalTech, App-Entwicklung, Webdesign und Future Robotics.",
    badge: "AI • Automation • Voice • Robotics",
    cta: "Kostenlose Beratung buchen",
    secondCta: "Projekte entdecken",
    gradient: "from-cyan-300 via-blue-500 to-indigo-700",
    nav: ["KI Integration", "Voicebots", "Robotik", "Software", "Webdesign"],
    services: [
      { icon: Bot, title: "KI Voicebots", text: "Telefonassistenten mit Weiterleitung, Terminbuchung, Kalenderprüfung und E-Mail-Bestätigung." },
      { icon: Cpu, title: "KI Integration", text: "DSGVO-konforme KI-Workflows, lokale Modelle, Open Source und Closed Source Beratung." },
      { icon: Rocket, title: "Future Robotics", text: "Exoskelette, Hunde-Roboter und humanoide Robotik verständlich getestet und erklärt." },
      { icon: Code2, title: "Vibe Coding & Apps", text: "Schnelle App- und Softwareentwicklung mit modernen KI-gestützten Prozessen." },
      { icon: Video, title: "AI Media", text: "Bilder, Videos, Social Media Spots, Logos und Kampagnen mit aktuellen KI-Modellen." },
      { icon: Globe2, title: "Webdesign", text: "Moderne Webseiten mit GEO-Struktur, SEO, Conversion und starker Markenwirkung." }
    ],
    sections: [
      ["Innovation Ecosystem", "Alle Produkte und Projekte laufen sichtbar unter der Muttermarke zusammen."],
      ["KI Integration", "Open Source, Closed Source, DSGVO, OCR, Automatisierung und AI Agents verständlich erklärt."],
      ["Future Lab", "Robotik, Exoskelette und humanoide Zukunftstechnologien mit echten Erfahrungsberichten."],
      ["Trust", "Klare Ansprechpartner, echte Demos, starke Cases und saubere Markenarchitektur."]
    ],
    proof: ["Muttermarke aller Produkte", "Praxisnahe KI statt Buzzwords", "Beratung, Umsetzung und Innovation aus einer Hand"]
  },
  handwerker: {
    domain: "handwerkervoicebot.de",
    name: "HandwerkerVoicebot",
    label: "Powered by LetAIwork4u",
    claim: "Kein Anruf. Kein Auftrag. Kein Stress.",
    headline: "Der KI Telefonassistent für Handwerksbetriebe.",
    subline: "Dein Voicebot nimmt Anrufe entgegen, erkennt Anliegen, leitet auf Wunsch direkt weiter, prüft freie Termine und bucht automatisch – inklusive Bestätigung per E-Mail.",
    badge: "DSGVO-konforme KI Anrufannahme",
    cta: "Voicebot ausprobieren",
    secondCta: "Demo-Termin buchen",
    gradient: "from-orange-300 via-cyan-400 to-blue-700",
    nav: ["Funktionen", "Branchen", "DSGVO", "Demo", "Kontakt"],
    services: [
      { icon: Phone, title: "Lokale Telefonnummer", text: "Dein Betrieb erhält eine lokale Rufnummer und ist professionell erreichbar." },
      { icon: Bot, title: "KI-Anrufannahme", text: "Der Voicebot beantwortet Anfragen freundlich, schnell und rund um die Uhr." },
      { icon: ArrowRight, title: "Direkte Weiterleitung", text: "Auf Wunsch des Anrufers wird der Anruf direkt an dich oder dein Team weitergeleitet." },
      { icon: CalendarDays, title: "Kalenderprüfung", text: "Die KI prüft freie Termine ohne Warteschleife und schlägt passende Zeiten vor." },
      { icon: Mail, title: "E-Mail-Bestätigung", text: "Kunde und Betrieb erhalten automatisch eine Terminbestätigung." },
      { icon: ShieldCheck, title: "DSGVO-konform", text: "Datenschutz, Transparenz und saubere Prozesse für deutsche Unternehmen." }
    ],
    sections: [
      ["Live Workflow", "Kunde ruft an, KI erkennt Anliegen, Kalender wird geprüft, Termin wird bestätigt."],
      ["Branchen", "Eigene Unterseiten für Elektriker, Sanitär, Heizung, Dachdecker, Gartenbau und mehr."],
      ["DSGVO", "Datenschutz, Hosting, Auftragsverarbeitung und Telefonie transparent erklären."],
      ["Conversion", "Demo-Call, Testnummer und klare Kontaktwege sichtbar platzieren."]
    ],
    proof: ["Für Elektriker, Sanitär, Heizung, Dachdecker & mehr", "24/7 erreichbar", "Mehr Aufträge aus verpassten Anrufen"]
  },
  anwaltsoft: {
    domain: "anwaltsoft.de",
    name: "AnwaltSoft",
    label: "LegalTech made by LetAIwork4u",
    claim: "Moderne Kanzleisoftware. Klar. Schnell. Brauchbar.",
    headline: "CRM, DMS, Kalender und beA-Integration für moderne Kanzleien.",
    subline: "AnwaltSoft ist das anwaltsspezifische Softwareprodukt von LetAIwork4u – für Datenmanagement, Kanzleiorganisation, Mandantenverwaltung und digitale Workflows.",
    badge: "LegalTech • CRM • DMS • beA",
    cta: "Demo ansehen",
    secondCta: "Kontakt aufnehmen",
    gradient: "from-slate-200 via-cyan-400 to-blue-900",
    nav: ["CRM", "DMS", "beA", "Kalender", "Demo"],
    services: [
      { icon: Scale, title: "Kanzlei CRM", text: "Mandanten, Akten, Kontakte und Vorgänge strukturiert in einer modernen Oberfläche." },
      { icon: Database, title: "DMS", text: "Dokumentenmanagement für Kanzleien mit klarer Ablage und schneller Suche." },
      { icon: Mail, title: "beA Integration", text: "beA Postfach-Funktionen als Teil eines anwaltsspezifischen Workflows." },
      { icon: CalendarDays, title: "Kalender", text: "Termine, Fristen und Kanzleiabläufe übersichtlich und interaktiv verwalten." },
      { icon: ShieldCheck, title: "DSGVO & Datenschutz", text: "Entwickelt mit Blick auf sensible Kanzleidaten und rechtliche Anforderungen." },
      { icon: Sparkles, title: "Modernes Interface", text: "Kein verstaubtes Kanzlei-System, sondern eine intuitive Software für echte Nutzung." }
    ],
    sections: [
      ["Interactive Demo", "Mandanten, Akten, Dokumente, Fristen und Kanzlei-Workflows interaktiv präsentieren."],
      ["DMS", "Dokumentenmanagement als zentraler Nutzen klar ausbauen."],
      ["beA Verbindung", "beA4Outlook als eigenes Produkt prominent verlinken."],
      ["Legal Trust", "Datenschutz, Rollenrechte, Kanzlei-Anforderungen und klare Roadmap."]
    ],
    proof: ["Eigenes LegalTech-Produkt", "Made by LetAIwork4u", "CRM + DMS + beA + Kalender"]
  },
  bea: {
    domain: "bea4outlook.app",
    name: "beA4Outlook",
    label: "by AnwaltSoft · powered by LetAIwork4u",
    claim: "beA in deiner gewohnten Outlook-Umgebung.",
    headline: "beA-Nachrichten direkt in Outlook empfangen und senden.",
    subline: "beA4Outlook ist in Entwicklung und soll Kanzleien ermöglichen, beA-Kommunikation dort zu bearbeiten, wo ohnehin gearbeitet wird: in Outlook.",
    badge: "In Entwicklung • Outlook • beA",
    cta: "Warteliste anfragen",
    secondCta: "Produktdemo vormerken",
    gradient: "from-blue-200 via-cyan-400 to-violet-700",
    nav: ["Outlook", "beA", "Workflow", "Roadmap", "Kontakt"],
    services: [
      { icon: Mail, title: "beA Empfang", text: "beA-Nachrichten direkt in einer vertrauten Arbeitsumgebung empfangen." },
      { icon: ArrowRight, title: "beA Versand", text: "Nachrichten senden, ohne ständig zwischen Systemen wechseln zu müssen." },
      { icon: Scale, title: "Für Kanzleien", text: "Fokus auf anwaltliche Arbeitsabläufe statt generischer E-Mail-Logik." },
      { icon: Database, title: "Ablage & DMS", text: "Anbindung an Kanzleiablage und Dokumentenmanagement als Teil von AnwaltSoft." },
      { icon: ShieldCheck, title: "Sicher gedacht", text: "Datenschutz und Kanzlei-Compliance stehen im Mittelpunkt der Entwicklung." },
      { icon: Sparkles, title: "Gewohnter Workflow", text: "Outlook bleibt die zentrale Oberfläche für Kommunikation und Organisation." }
    ],
    sections: [
      ["Produkt-Fokus", "Eine schlanke Seite nur für beA in Outlook, Early Access und Warteliste."],
      ["Feature Animation", "Animierter Nachrichtenfluss: Empfangen, Senden, Ablegen, Zuordnen."],
      ["Roadmap", "Beta-Status, geplante Funktionen und Kanzlei-Feedback sichtbar machen."],
      ["Cross Branding", "by AnwaltSoft und powered by LetAIwork4u konsequent zeigen."]
    ],
    proof: ["Teil von AnwaltSoft", "Für Kanzlei-Workflows", "Outlook statt Systemwechsel"]
  }
};

function FloatingOrb({ className }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function NeuralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,.25),transparent_35%)]" />
      <FloatingOrb className="w-72 h-72 bg-cyan-400 left-10 top-24" />
      <FloatingOrb className="w-96 h-96 bg-blue-700 right-0 bottom-10" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:56px_56px]" />
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-40 bg-cyan-200/20"
          style={{ top: `${12 + i * 10}%`, left: `${(i * 13) % 80}%` }}
          animate={{ opacity: [0.1, 0.7, 0.1], x: [0, 80, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function HologramCard({ brand }) {
  return (
    <motion.div
      key={brand.name}
      initial={{ opacity: 0, scale: .92, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: .7 }}
      className="relative"
    >
      <div className={`absolute -inset-6 bg-gradient-to-br ${brand.gradient} rounded-[3rem] blur-2xl opacity-30`} />
      <div className="relative rounded-[3rem] border border-white/15 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={`aspect-square rounded-[2.5rem] bg-gradient-to-br ${brand.gradient} p-1`}
        >
          <div className="h-full rounded-[2.4rem] bg-slate-950/80 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            <motion.div
              className="absolute w-[140%] h-[140%] border border-cyan-200/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[90%] h-[90%] border border-white/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-32 h-32 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 shadow-2xl"
            >
              <Bot className="w-16 h-16 text-cyan-200" />
            </motion.div>
            <h2 className="text-4xl font-black mb-3">{brand.name}</h2>
            <p className="text-xl text-slate-300 italic">{brand.claim}</p>
            <div className="mt-10 px-4 py-2 rounded-xl bg-white text-slate-950 font-bold">{brand.domain}</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [active, setActive] = useState("letaiwork4u");
  const [menu, setMenu] = useState(false);
  const brand = brands[active];

  return (
    <div className="min-h-screen bg-[#050914] text-white overflow-hidden font-sans">
      <NeuralBackground />

      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-slate-950/40 sticky top-0">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <button onClick={() => setActive("letaiwork4u")} className="flex items-center gap-3 text-left">
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${brand.gradient} shadow-lg shadow-cyan-500/20 flex items-center justify-center`}>
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold tracking-wide">LetAIwork4u Ecosystem</div>
              <div className="text-xs text-slate-400">AI · LegalTech · Voice · Robotics</div>
            </div>
          </button>
          <nav className="hidden lg:flex items-center gap-2">
            {Object.entries(brands).map(([key, item]) => (
              <button key={key} onClick={() => setActive(key)} className={`px-4 py-2 rounded-full text-sm transition ${active === key ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>
                {item.name}
              </button>
            ))}
          </nav>
          <button className="lg:hidden" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        </div>
        {menu && <div className="lg:hidden px-5 pb-4 grid gap-2">{Object.entries(brands).map(([key, item]) => <button key={key} onClick={() => {setActive(key); setMenu(false)}} className="text-left p-3 rounded-xl bg-white/10">{item.name}</button>)}</div>}
      </header>

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-5 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div key={active + "hero"} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur text-sm text-slate-200 mb-7">
              <Sparkles className="w-4 h-4" /> {brand.badge}
            </div>
            <p className="text-cyan-200 mb-3 tracking-wide uppercase text-sm">{brand.label}</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              {brand.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">{brand.subline}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="px-6 py-4 rounded-2xl font-bold transition shadow-xl bg-cyan-300 text-slate-950 hover:bg-cyan-200">{brand.cta}</button>
              <button className="px-6 py-4 rounded-2xl font-bold border border-white/15 hover:bg-white/10 transition">{brand.secondCta}</button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {brand.proof.map((item) => <div key={item} className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0" />{item}</div>)}
            </div>
          </motion.div>
          <HologramCard brand={brand} />
        </section>

        <section className="max-w-7xl mx-auto px-5 pb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-cyan-200 uppercase text-sm tracking-wide mb-2">Website-Struktur</p>
              <h2 className="text-3xl md:text-5xl font-black">Klar getrennt. Stark verbunden.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {brand.nav.map((n) => <span key={n} className="px-4 py-2 rounded-full bg-white/10 text-sm text-slate-300 border border-white/10">{n}</span>)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brand.services.map((service, index) => {
              const Icon = service.icon;
              return <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="group rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur p-6 hover:bg-white/[0.10] transition overflow-hidden relative">
                <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${brand.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition`} />
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-cyan-200" /></div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.text}</p>
              </motion.div>
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 pb-24">
          <div className="mb-10">
            <p className="text-cyan-200 uppercase text-sm tracking-wide mb-2">Landingpage Blueprint</p>
            <h2 className="text-3xl md:text-5xl font-black">Die wichtigsten Sektionen für {brand.name}</h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-5">
            {brand.sections.map(([title, text], idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * .06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <div className="text-cyan-200 text-sm mb-2">0{idx + 1}</div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 pb-24">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl p-8 md:p-12 overflow-hidden relative">
            <div className={`absolute right-0 top-0 w-96 h-96 bg-gradient-to-br ${brand.gradient} opacity-20 blur-3xl`} />
            <div className="relative grid lg:grid-cols-[1.3fr_.7fr] gap-10 items-center">
              <div>
                <p className="text-cyan-200 uppercase text-sm tracking-wide mb-2">Gemeinsame Markenlogik</p>
                <h2 className="text-3xl md:text-5xl font-black mb-5">Alles zahlt auf LetAIwork4u ein.</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">Jede Domain bekommt eine eigene Zielgruppe und eine eigene Conversion-Logik. Gleichzeitig bleibt die visuelle DNA gleich: Deep Blue, Cyan Glow, klare Typografie, Bewegung, futuristische Bilder und das wiedererkennbare AI-Voice-Symbol.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10"><Waves className="mb-2 text-cyan-200" />HandwerkerVoicebot<br/><span className="text-slate-400 text-sm">powered by LetAIwork4u</span></div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10"><Scale className="mb-2 text-cyan-200" />AnwaltSoft<br/><span className="text-slate-400 text-sm">LegalTech made by LetAIwork4u</span></div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10"><FileText className="mb-2 text-cyan-200" />beA4Outlook<br/><span className="text-slate-400 text-sm">by AnwaltSoft</span></div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10"><Network className="mb-2 text-cyan-200" />Robotics / Future Lab<br/><span className="text-slate-400 text-sm">LetAIwork4u Innovation</span></div>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950 border border-white/10 p-6">
                <div className="text-sm text-slate-400 mb-3">Brand Signature</div>
                <div className="text-4xl font-black mb-2">{brand.name}</div>
                <div className="text-cyan-200 mb-6">{brand.label}</div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden"><motion.div className={`h-full bg-gradient-to-r ${brand.gradient}`} animate={{ width: ["20%", "100%", "45%", "80%"] }} transition={{ duration: 5, repeat: Infinity }} /></div>
                <p className="mt-6 text-slate-300">{brand.domain}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
