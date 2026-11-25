// Dak- en Woningonderhoud NLD ('s-Hertogenbosch). Bron: dakenwoningonderhoudnld.nl (alle pagina's) + Google (4,8 / 116), opgehaald 25-11-2026. Zie content.md.
// Foto's: eigen projectfoto's van hun site (WhatsApp-foto's van klussen). Geen stock.
window.SITE = {
  naam: "Dak- en Woningonderhoud NLD",
  kortNaam: "NLD",
  plaats: "'s-Hertogenbosch",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "icoon",
  logoMetNaam: false,
  logoHoogte: 50,
  kleuren: { brand: "#102038", accent: "#3d7bd9" },
  telefoon: "06 58 77 28 21",
  telefoonIntl: "31658772821",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of foto",
  email: "info@dakenwoningonderhoudnld.nl",
  adres: ["Hoge Slagen 2", "5233 VG 's-Hertogenbosch"],
  google: { score: "4,8", aantal: "116" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  voetTekst: "Dakdekker uit 's-Hertogenbosch voor platte en hellende daken. Reparatie, renovatie, isolatie en 24/7 spoedservice.",

  hero: {
    regels: ["Uw dak", "op nummer één."],
    tekst: "Dakdekkers uit 's-Hertogenbosch met jarenlange ervaring in platte en schuine daken. Van een lekkage tot een compleet nieuw dak.",
    foto: "img/hero.jpg", fotoPos: "50% 55%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "60% 50%",
    fotoAlt: "Nieuwe bitumen dakbedekking tussen twee pannendaken",
    donker: true,
    punten: ["24/7 spoedservice", "Gratis dakinspectie", "VCA-gecertificeerd"]
  },

  marquee: ["Bitumen daken", "Pannendaken", "Dakreparatie", "Daklekkage", "Dakisolatie", "Dakrenovatie", "Dakinspectie", "Dakdoorvoeren", "Dakramen"],

  spoed: {
    titel: "Lekkage of een andere noodsituatie?",
    tekst: "Sommige dakproblemen kunnen niet wachten. Daarom zijn we 24/7 bereikbaar voor spoed."
  },

  intro: {
    kicker: "Dak- en Woningonderhoud NLD",
    tekst: "Uw dak is niet alleen een functioneel onderdeel van uw huis, maar ook de kroon op de woning. Wij zorgen dat elk dak er goed uitziet, en vooral veilig en duurzaam is.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "116", tel: 116, label: "Reviews op Google" },
      { getal: "24/7", label: "Spoedservice" },
      { getal: "VCA", label: "Gecertificeerde dakdekkers" }
    ]
  },

  diensten: {
    titel: "Alles op en rond uw dak",
    tekst: "Repareren en renoveren van platte en schuine daken, met eerlijk advies vooraf.",
    items: [
      { naam: "Bitumen daken", soort: "Bitumen dak", foto: "img/bitumen.jpg", pos: "50% 50%",
        tekst: "Bitumen is duurzaam en geschikt voor alle weersomstandigheden. We vervangen en repareren bitumen dakbedekking en komen graag langs voor een vrijblijvende inspectie.",
        punten: ["Vervangen en repareren", "Ook lekkages", "Vrijblijvende inspectie"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannen.jpg", pos: "50% 50%",
        tekst: "Reparatie, onderhoud, renovatie en isolatie van pannendaken. We vervangen beschadigde pannen, verhelpen lekkages en voorkomen nieuwe schade met regelmatig onderhoud.",
        punten: ["Beschadigde pannen vervangen", "Lekkages repareren", "Regelmatig onderhoud"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 50%",
        tekst: "Het isoleren van daken hoort bij ons vaste werk. Een goed geïsoleerd dak houdt de warmte binnen, bij platte en bij schuine daken.",
        punten: ["Platte en schuine daken", "Advies op maat"] },
      { naam: "Gratis dakinspectie", soort: "Dakinspectie", foto: "img/inspectie.jpg", pos: "50% 40%",
        tekst: "Een van onze dakdekkers inspecteert uw dak uitgebreid en bespreekt de bevindingen met u. U krijgt een deskundig rapport en eerlijk advies, en desgewenst een offerte.",
        punten: ["Uitgebreide inspectie", "Deskundig rapport", "Eerlijk advies"], knop: "Inspectie aanvragen" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Platte en hellende daken",
    tekst: "Een greep uit onze projecten.",
    items: [
      { foto: "img/p-dakraam.jpg", label: "Dakraam", sub: "Strak ingewerkt in het pannendak", pos: "50% 50%" },
      { foto: "img/p-plat.jpg", label: "Plat dak", sub: "Nieuwe bitumen met lichtkoepels", pos: "50% 50%" },
      { foto: "img/p-pannen.jpg", label: "Pannendak", sub: "Pannen en nok", pos: "50% 50%" },
      { foto: "img/p-isolatie.jpg", label: "Dakisolatie", sub: "Isolatieplaten op het platte dak", pos: "50% 50%" },
      { foto: "img/p-nok.jpg", label: "Nokvorsten", sub: "Strak gelegd", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerlijk en duidelijk",
    tekst: "Open communicatie en transparantie, van inspectie tot oplevering.",
    stappen: [
      { naam: "U neemt contact op", tekst: "Bel, app of vraag online een offerte aan. Bij spoed zijn we 24/7 bereikbaar." },
      { naam: "Gratis inspectie", tekst: "We bekijken uw dak uitgebreid en bespreken wat we zien." },
      { naam: "Offerte op maat", tekst: "Gedetailleerd en vrijblijvend, met eerlijk advies." },
      { naam: "Uitvoering", tekst: "Door VCA-gecertificeerde dakdekkers, volgens de hoogste veiligheidsnormen." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Na goed overleg, laten zien wat er aan de hand is en wat er moet gebeuren om alles goed te herstellen en niet opnieuw een pleister te plakken, werd alles in één dag geregeld door inzet en hard werken. … Zoek je betrouwbare mensen? Wij raden ze zeker aan!", naam: "Elke Molegraaf - Sniekers" },
      { tekst: "Vanaf het eerste contact was de communicatie duidelijk en prettig. Nette afspraken, heel eerlijk advies en een hele nette prijs. … Alles is keurig achtergelaten en het resultaat ziet er strak en professioneel uit.", naam: "Fawad Azizyaar" },
      { tekst: "We hebben meerdere (zogenoemde) dakexperts laten langskomen, maar iedereen stelde een andere oplossing voor. Uiteindelijk kregen we het meeste vertrouwen in de duidelijke en praktische aanpak van Dak- en Woningonderhoud NLD.", naam: "Jeroen Kops" },
      { tekst: "Ik had op maandag een lekkage op een plat dak welke op vrijdag naar alle tevredenheid is verholpen. … Prijs was goed, werk werd snel ingepland en de offerte werd direct verstuurd.", naam: "Remco van Breda" },
      { tekst: "Keurig en representatief persoon vooropname komen doen met heldere toelichting. Netjes gemaakt en de werkplek ook keurig schoon achter gelaten.", naam: "Robert Schalken" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Integer, respectvol en professioneel",
    rol: "Dakdekkers uit 's-Hertogenbosch",
    tekst: [
      "Ons bedrijf is opgericht om klanten de hoogste kwaliteit dak- en woningonderhoud te bieden. Onze dakdekkers hebben jarenlange ervaring met het repareren en renoveren van platte en schuine daken.",
      "We werken uitsluitend met VCA-gecertificeerde dakdekkers. En we geloven in open communicatie, transparantie en duurzame relaties met onze klanten."
    ],
    foto: "img/over.jpg", fotoPos: "40% 50%", fotoAlt: "Dakdekker van NLD bij de bus in een woonstraat",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. Wij nemen zo snel mogelijk contact met u op.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Bitumen dak", "Pannendak", "Daklekkage", "Dakisolatie", "Dakinspectie", "Anders"],
    voorbeeld: "Bijvoorbeeld: na de storm komt er water binnen bij de dakkapel",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
