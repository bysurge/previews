// De IJssel Onderhoud en Schilderwerken (Krimpen aan den IJssel). Bron: deijselonderhoudenschilderwerken.nl.
// Geen logo (monogram + tekst gemaakt), geen eigen foto's: alle foto's zijn de stockfoto's van hun eigen site
// (01 bijgesneden zonder Tsjechisch etiket). Geen reviews, projecten, werkwijze of werkgebied bekend: weggelaten.
// WhatsApp staat niet op hun site; knoppen aan omdat het een 06-nummer is (Marco: checken).
window.SITE = {
  naam: "De IJssel Onderhoud en Schilderwerken",
  kortNaam: "De IJssel",
  plaats: "Krimpen aan den IJssel",
  titelExtra: "Schilder- en onderhoudswerk in Krimpen aan den IJssel",
  logo: "img/monogram.png",
  kleuren: { brand: "#1f3324", accent: "#c8a96a" },
  telefoon: "06 87 82 99 15",
  telefoonIntl: "31687829915",
  waTekst: "Stuur een WhatsApp",
  email: "info@deijselonderhoudenschilderwerken.nl",
  adres: ["Gipskruid 19", "2925 DA Krimpen aan den IJssel"],
  kvk: "42073802",
  navCta: "Offerte",
  voetTekst: "Schilderwerk, stucwerk en reparaties voor binnen en buiten. Vanuit Krimpen aan den IJssel, al ruim zeven jaar actief in Nederland.",

  hero: {
    badge: "Ruim 7 jaar ervaring in Nederland",
    regels: ["Uw huis", "weer in", "topconditie."],
    tekst: "Schilderwerk, stucwerk en reparaties voor binnen en buiten. Met oog voor detail en een resultaat dat lang mooi blijft.",
    foto: "img/hero-plafond.jpg", fotoPos: "55% 40%",
    fotoAlt: "Vakman werkt de rand van een plafond af in een lichte kamer"
  },

  marquee: ["Schilderwerk binnen", "Schilderwerk buiten", "Stucwerk", "Houtrotbehandeling", "Reparaties", "Behangen", "Laminaat leggen", "Huisonderhoud"],

  intro: {
    kicker: "Over De IJssel",
    tekst: "Schilders, stukadoors en klusprofessionals onder één dak. Van een kamer schilderen tot behang, laminaat of houtrot: u heeft één aanspreekpunt voor het onderhoud van uw woning.",
    stats: [
      { getal: "7+", tel: 7, label: "Jaar actief in Nederland" },
      { getal: "3", label: "Vakken: schilderen, stucen en klussen" }
    ]
  },

  diensten: {
    titel: "Onderhoud met zorg en precisie",
    tekst: "Kies wat u wilt laten doen. U krijgt een duidelijke offerte, afgestemd op uw woning.",
    items: [
      { naam: "Schilderwerk", foto: "img/schilderwerk-roller.jpg", pos: "45% 50%",
        tekst: "Nauwkeurig schilderwerk voor binnen en buiten, met duurzame verfsoorten die lang mooi blijven.",
        punten: ["Muren en plafonds", "Binnen en buiten", "Duurzame verfsoorten"] },
      { naam: "Stucwerk", foto: "img/stucwerk-spaan.jpg", pos: "55% 50%",
        tekst: "Strak afgewerkte muren en plafonds, voor een fris en rustig interieur.",
        punten: ["Muren", "Plafonds", "Strakke basis voor verf"] },
      { naam: "Reparaties", foto: "img/reparatie-spatel.jpg", pos: "50% 45%",
        tekst: "Vakkundige reparaties, waaronder houtrotbehandeling en structureel onderhoud.",
        punten: ["Houtrotbehandeling", "Structureel onderhoud", "Gaten en scheuren herstellen"] }
    ],
    meer: [
      { naam: "Behangen", tekst: "Nieuw behang, netjes en strak aangebracht." },
      { naam: "Laminaat leggen", tekst: "Een nieuwe vloer, ook in combinatie met schilder- of stucwerk." },
      { naam: "Huisonderhoud", tekst: "Eén aanspreekpunt voor het onderhoud van uw woning." }
    ]
  },

  over: {
    kicker: "Ons verhaal", navNaam: "Over ons",
    titel: "Vakmanschap met wortels in Libanon en Turkije",
    rol: "Al ruim zeven jaar actief in Nederland",
    tekst: [
      "De IJssel Onderhoud en Schilderwerken is een ervaren aannemersbedrijf met wortels in Libanon en Turkije. Inmiddels werken we al ruim zeven jaar in Nederland, vanuit Krimpen aan den IJssel.",
      "Ons team bestaat uit vakkundige schilders, stukadoors en klusprofessionals die elk project met zorg en precisie uitvoeren. Ons doel is simpel: voor elke klant de hoogste kwaliteit en service."
    ],
    foto: "img/stucadoor-steiger.jpg", fotoPos: "45% 40%", fotoAlt: "Stukadoor werkt op een steiger aan een plafond",
    badge: "img/monogram.png",
    knop: "Neem contact op"
  },

  band: {
    foto: "img/band-gele-muur.jpg", fotoPos: "50% 35%",
    titel: "Klaar voor een frisse start?",
    tekst: "Vertel ons wat er moet gebeuren. U krijgt snel een duidelijke offerte."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat u wilt laten doen. We nemen zo snel mogelijk contact met u op.",
    onderwerpen: ["Schilderwerk", "Stucwerk", "Reparaties", "Behangen", "Laminaat leggen", "Anders"],
    voorbeeld: "Bijvoorbeeld: woonkamer en plafond schilderen, of houtrot bij de achterdeur",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};


// Kleine aanpassing binnen data.js (sjabloon niet aanpassen): het lange e-mailadres past niet op 390px.
// Mobiel: Contact-kolom in de footer over de volle breedte, e-mail in de contactlijst iets kleiner.
(function () {
  const st = document.createElement('style');
  st.textContent = '@media (max-width:767px){.ft-cols{grid-auto-flow:dense}.ft-cols>div:nth-child(2){grid-column:1/-1}' +
    '.ct-list a[href^="mailto"] span{font-size:13.5px;overflow-wrap:anywhere}}';
  document.head.appendChild(st);
})();
