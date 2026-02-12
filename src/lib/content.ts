export const site = {
  brand: "EDILCASA",
  tagline: "Un punto fisso per la tua casa",
  description:
    "Ristrutturazioni chiavi in mano, showroom materiali e consulenza: un processo ordinato, tempi chiari, risultato premium.",
  primaryCTA: "Richiedi preventivo",
  secondaryCTA: "Vedi lavori",
  phonePrimary: "0373 258539",
  email: "areacommerciale@edilcasa.info",
  legal: "© 2026 Edilcasa. Tutti i diritti riservati.",
  legal2: "EDILCASA MULTISERVICE SRL - Sede legale: Via Milano, 25, 26013 Crema CR - P.IVA 01674500192",
  locations: [
    {
      name: "Store Crema",
      address: "Via Milano, 25, 26013 Crema (CR)",
      phone: "0373 258539",
      hours: "Lun–Sab 09:00–13:00 / 15:00–18:00",
      email: "areacommerciale@edilcasa.info",
    },
    {
      name: "Store Lodi",
      address: "Corso Adda, 40, 26900 Lodi (LO)",
      phone: "0371 1870241",
      hours: "Lun–Sab 09:00–12:30",
      email: "areacommerciale@edilcasa.info",
    },
  ],
  nav: [
    { label: "Servizi", href: "/servizi" },
    { label: "Progetti", href: "/progetti" },
    { label: "Contatti", href: "/contatti" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  stats: [
    { label: "Anni di esperienza", value: "20+" },
    { label: "Progetti completati", value: "450+" },
    { label: "Showroom", value: "2" },
    { label: "Tempo medio preventivo", value: "48h" },
  ],
  badges: ["Sopralluogo veloce", "Preventivo chiaro", "Team specializzato"],
  services: [
    {
      title: "Ristrutturazioni complete",
      desc: "Un unico referente: demolizioni, impianti, finiture e consegna chiavi in mano.",
      tag: "Chiavi in mano",
      icon: "Hammer",
    },
    {
      title: "Bagni premium",
      desc: "Progetto, materiali e posa: bagno moderno, funzionale, facile da pulire.",
      tag: "Bagno",
      icon: "Droplets",
    },
    {
      title: "Pavimenti & rivestimenti",
      desc: "Ceramiche, SPC, parquet e grandi formati: scelta guidata in showroom.",
      tag: "Materiali",
      icon: "LayoutGrid",
    },
    {
      title: "Cartongesso & tinteggiature",
      desc: "Illuminazione, velette, controsoffitti e finiture pulite per ambienti nuovi.",
      tag: "Interni",
      icon: "Paintbrush2",
    },
    {
      title: "Serramenti & porte",
      desc: "Efficienza energetica, comfort acustico e posa a regola d’arte.",
      tag: "Efficienza",
      icon: "DoorClosed",
    },
    {
      title: "Consulenza showroom",
      desc: "Dal moodboard ai campioni: scegli con serenità, senza errori e ripensamenti.",
      tag: "Scelta guidata",
      icon: "Sparkles",
    },
  ],
  process: [
    { title: "Sopralluogo", desc: "Capire spazi, vincoli e obiettivi. Senza promesse vaghe." },
    { title: "Proposta", desc: "Preventivo chiaro + alternative materiali. Scegli tu il livello." },
    { title: "Pianificazione", desc: "Calendario lavori, responsabilità e checkpoint. Zero caos." },
    { title: "Esecuzione", desc: "Cantiere ordinato, aggiornamenti regolari, qualità controllata." },
    { title: "Consegna", desc: "Pulizia finale + verifica dettagli. Ti consegniamo un risultato che dura." },
  ],
  projectCategories: ["Bagno", "Interni", "Esterni", "Commerciale"] as const,
  projects: [
    { title: "Bagno minimal in grandi formati", category: "Bagno", city: "Crema", year: "2025" },
    { title: "Zona living: pavimenti + tinteggiature", category: "Interni", city: "Lodi", year: "2025" },
    { title: "Facciata e cappotto termico", category: "Esterni", city: "Crema", year: "2024" },
    { title: "Ristrutturazione bagno luxury", category: "Bagno", city: "Lodi", year: "2024" },
    { title: "Showroom corner: posa e finiture", category: "Commerciale", city: "Crema", year: "2025" },
    { title: "Interni moderni: cartongesso e luci", category: "Interni", city: "Crema", year: "2024" },
  ],
  reviews: [
    {
      name: "Marco R.",
      role: "Ristrutturazione bagno",
      quote:
        "Preventivo chiaro e tempi rispettati. Il bagno è venuto identico al progetto, finiture super pulite.",
    },
    {
      name: "Sara L.",
      role: "Pavimenti & rivestimenti",
      quote:
        "In showroom ci hanno guidato senza confonderci. Scelta materiali semplice e risultato davvero premium.",
    },
    {
      name: "Andrea P.",
      role: "Ristrutturazione completa",
      quote:
        "Un solo referente e aggiornamenti costanti. Cantiere ordinato: zero stress, massima serietà.",
    },
    {
      name: "Giulia M.",
      role: "Cartongesso & tinteggiature",
      quote:
        "Dettagli curati e consigli pratici. Hanno trasformato l’ambiente senza sorprese sul costo finale.",
    },
    {
      name: "Davide S.",
      role: "Serramenti",
      quote:
        "Posa fatta bene e miglior comfort acustico subito. Molto professionali dalla prima visita.",
    },
    {
      name: "Elena C.",
      role: "Bagno chiavi in mano",
      quote:
        "Tempistiche e comunicazione perfette. Il risultato sembra da rivista, ma con scelte ragionate.",
    },
  ],
  faqs: [
    {
      q: "Quanto tempo ci vuole per un preventivo?",
      a: "In genere 24–48 ore dopo il sopralluogo e la raccolta requisiti. Se servono varianti materiali, ti mandiamo 2 opzioni chiare.",
    },
    {
      q: "Fate ristrutturazioni chiavi in mano?",
      a: "Sì. Gestiamo fasi, fornitori e finiture con un unico referente. Tu hai un piano, un calendario e checkpoint di qualità.",
    },
    {
      q: "Gestite detrazioni e pratiche?",
      a: "Possiamo guidarti sui passaggi e coordinare i professionisti quando necessario. Ogni caso viene valutato in base al tipo di intervento.",
    },
    {
      q: "Posso scegliere i materiali in showroom?",
      a: "Certo. Ti aiutiamo a scegliere in modo coerente (stile, budget, manutenzione) evitando errori tipici e ripensamenti.",
    },
    {
      q: "Come funziona la pianificazione lavori?",
      a: "Definiamo un calendario con fasi e responsabilità. Ti aggiorniamo con checkpoint e foto, così sai sempre a che punto siamo.",
    },
    {
      q: "Che garanzie offrite?",
      a: "Lavoriamo con materiali certificati e posa controllata. Le garanzie dipendono dal tipo di prodotto/intervento e vengono indicate in proposta.",
    },
  ],
};

export type ProjectCategory = typeof site.projectCategories[number];
