// Droom Daken (Utrecht). Bron: droomdaken.nl (alle pagina's) + Google (4,9 / 44), 25-11-2026. Zie content.md.
window.SITE = {
  naam: "Droom Daken",
  plaats: "Utrecht",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 54,
  kleuren: { brand: "#14243a", accent: "#4f8fd1" },
  telefoon: "085 060 4544",
  telefoonIntl: "31850604544",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van je dak",
  email: "info@droomdaken.nl",
  adres: ["Van Deventerlaan 31", "3528 AG Utrecht"],
  google: { score: "4,9", aantal: "44" },
  navCta: "Gratis dakinspectie",
  ctaTekst: "Gratis dakinspectie aanvragen",
  voetTekst: "Daklekkage, platte daken, pannendaken, zinken daken, schoorstenen, dakisolatie en dakreiniging. Gevestigd in Utrecht, actief in heel Nederland.",

  hero: {
    regels: ["U droomt,", "wij maken", "uw dak."],
    tekst: "Lekkage, een plat dak of een compleet nieuw pannendak: Droom Daken maakt, onderhoudt en renoveert daken voor een eerlijke prijs. Met tien jaar garantie op ons werk.",
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 50%",
    fotoAlt: "Dronefoto van een woning met een volledig vernieuwd antraciet pannendak, in een herfstige tuin",
    donker: true,
    punten: ["Gratis dakinspectie", "10 jaar garantie op ons werk", "24/7 hulp bij noodgevallen"]
  },

  marquee: ["Daklekkage", "Platte daken", "Bitumen en EPDM", "Pannendaken", "Zinken daken", "Schoorsteenrenovatie", "Dakisolatie", "Dakgoten", "Dakinspectie", "Softwash dakreiniging"],

  spoed: {
    titel: "Noodgeval met uw dak?",
    tekst: "Droom Daken staat 24/7 voor u klaar. Bel direct, of stuur een foto van de lekkage via WhatsApp.",
    knop: "Bel 085 060 4544"
  },

  intro: {
    kicker: "Over Droom Daken",
    tekst: "Een dakdekker in hart en nieren. We maken, onderhouden en renoveren daken vakkundig, voor een eerlijke prijs. Met één vast aanspreekpunt, heldere afspraken en dronebeelden van uw nieuwe dak.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "44", tel: 44, label: "Reviews op Google" },
      { getal: "10 jaar", label: "Garantie op ons werk" },
      { getal: "24/7", label: "Hulp bij noodgevallen" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd en geselecteerd",
  keurmerken: [
    { naam: "Gecertificeerd Dakdekker", sub: "Gecontroleerd en gediplomeerd", logo: "img/k-dakdekker.png" },
    { naam: "VCA", sub: "Veilig werken", logo: "img/k-vca.png" },
    { naam: "Top30 Vakbedrijven", sub: "Geselecteerd 2026-2027", logo: "img/k-top30.png" }
  ],

  diensten: {
    titel: "Alles voor een dak dat jaren meegaat",
    tekst: "Van een klein lek tot een compleet nieuw dak. Na een gratis inspectie krijgt u eerlijk advies en een offerte op maat.",
    items: [
      { naam: "Daklekkage", soort: "Daklekkage (spoed)", foto: "img/lekkage.jpg", pos: "50% 50%", tekst: "Een lekkage kan veel schade aanrichten, ook door een heel klein gat. We sporen de oorzaak snel op en branden scheuren in bitumen dicht of vervangen delen.",
        punten: ["Snel de oorzaak opgespoord", "24/7 bereikbaar", "Blijvende oplossing"], knop: "Hulp bij lekkage" },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/platdak.jpg", pos: "50% 50%", tekst: "Een nieuw plat dak in bitumen of EPDM, met de beste materialen. Voor uitbouwen, garages, dakkapellen en bedrijfspanden.",
        punten: ["Bitumen of EPDM", "Strak afgewerkte randen", "Ook voor bedrijfspanden"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 40%", tekst: "Nieuwe panlatten, dakfolie en dakpannen, eventueel met isolatie. Dakpannen gaan lang mee en zijn goed bestand tegen elk weer.",
        punten: ["Compleet nieuw of deels vervangen", "Met dakisolatie", "Dakgoten direct mee"] },
      { naam: "Zinken daken", soort: "Zinken dak", foto: "img/zink.jpg", pos: "50% 50%", tekst: "Een van de meest duurzame dakoplossingen: strak, modern en met een uitzonderlijk lange levensduur. Voor nieuwbouw en renovatie.",
        punten: ["Plaatsen en renoveren", "Oog voor detail", "Perfecte afwerking"] },
      { naam: "Schoorsteenrenovatie", soort: "Schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 55%", tekst: "We herstellen beschadigingen, vervangen loodslabben en vernieuwen uw schoorsteen waar nodig. Of we halen een oude schoorsteen helemaal weg.",
        punten: ["Nieuwe loodslabben", "Herstel van voegwerk", "Schoorsteen verwijderen"] },
      { naam: "Dak- en gevelreiniging", soort: "Reiniging", foto: "img/reiniging.jpg", pos: "50% 50%", tekst: "Met ons Softwash-systeem maken we daken, gevels en straatwerk weer schoon. Ook houtwerk en dakkapellen worden weer als nieuw.",
        punten: ["Softwash-systeem", "Daken, gevels en schoorstenen", "Houtwerk en dakkapellen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Onze daken, van bovenaf",
    tekst: "Na afloop maken we dronebeelden van het nieuwe dak. Een greep uit ons werk.",
    items: [
      { foto: "img/proj-1.jpg", label: "Nieuw pannendak met dakkapel", sub: "Antraciet pannen, strak afgewerkt", pos: "50% 75%" },
      { foto: "img/proj-2.jpg", label: "Pannendak en platte daken", sub: "Twee-onder-een-kap", pos: "50% 50%" },
      { foto: "img/proj-3.jpg", label: "Pannendak en plat dak", sub: "Rode pannen en een nieuwe uitbouw", pos: "50% 50%" },
      { foto: "img/proj-4.jpg", label: "Rij woningen", sub: "Met steigers en dakfolie", pos: "50% 50%" },
      { foto: "img/proj-5.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Geen kleine lettertjes, duidelijke afspraken",
    tekst: "Eén vast aanspreekpunt van inspectie tot oplevering.",
    foto: "img/werk.jpg", fotoPos: "50% 50%", fotoAlt: "Bus van Droom Daken met ladderlift bij een woning",
    stappen: [
      { naam: "Gratis dakinspectie", tekst: "U vraagt een vrijblijvende inspectie aan. Daarna krijgt u gericht advies over wat er moet gebeuren." },
      { naam: "Offerte op maat", tekst: "Op basis van de inspectie maken we een heldere offerte. Geen kleine lettertjes." },
      { naam: "Voorbereiding", tekst: "We plannen het werk en bestellen alle materialen, van dakbedekking en isolatie tot dakramen." },
      { naam: "Uitvoering en afwerking", tekst: "We starten op de afgesproken datum en leveren uw dak netjes op, met tien jaar garantie." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Droom Daken heeft bij ons het volledige dak gerenoveerd: nieuwe panlatten, nieuwe dakpannen, dakfolie. Daarnaast een oude schoorsteen verwijderd en de goten vervangen. Heel blij met het eindresultaat, ziet er superstrak uit.", naam: "Koen D." },
      { tekst: "Heren van droomdaken hebben inmiddels alle daken bij ons vernieuwd, plat als schuine daken. Simpel gezegd perfect werk afgeleverd. … Wat ons betreft hoef je niet verder te zoeken en geef droomdaken een bel!", naam: "Alpay D." },
      { tekst: "Dak laten vervangen door dit bedrijf, deze mannen werken keihard, en leveren topkwaliteit. … Verder een mooie service, dat men drone opnames opstuurt van het geplaatste nieuwe dak. Kortom: een bedrijf helemaal van deze tijd, een aanrader!", naam: "Phaedra" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dak is onze zorg",
    rol: "Droom Daken, dakdekker uit Utrecht",
    tekst: [
      "“Wij voeren ons vak uit met liefde, plezier en passie.” Ons ervaren team verzorgt uw dak tot in de kleinste details, en daarom geven we tien jaar garantie op ons werk.",
      "Bij ons geen onduidelijke communicatie: u heeft één vast aanspreekpunt voor uw hele project. En heeft u een noodgeval, dan staan we 24/7 voor u klaar."
    ],
    foto: "img/over.jpg", fotoPos: "50% 60%", fotoAlt: "Dakdekker van Droom Daken bij de bedrijfsbus",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Vanuit Utrecht, door heel Nederland",
    tekst: "Droom Daken is gevestigd in Utrecht en actief in heel Nederland. Vraag gerust een gratis dakinspectie aan, waar u ook woont."
  },

  faq: [
    { v: "Is de dakinspectie echt gratis?", a: "Ja. De dakinspectie is gratis en vrijblijvend, zonder verplichtingen. Daarna krijgt u gericht advies en een offerte op maat." },
    { v: "Hoeveel garantie krijg ik?", a: "We geven tien jaar garantie op ons geleverde werk." },
    { v: "Wat doe ik bij een acute lekkage?", a: "Bel ons direct of stuur een foto via WhatsApp. Droom Daken staat 24/7 voor u klaar bij noodgevallen." },
    { v: "Bitumen of EPDM voor mijn platte dak?", a: "Beide zijn goede, duurzame materialen. Na de inspectie adviseren we wat het beste past bij uw dak, uw wensen en uw budget." },
    { v: "Kunnen jullie ook mijn dak of gevel reinigen?", a: "Ja, met ons Softwash-systeem reinigen we daken, gevels, schoorstenen en straatwerk. Ook houtwerk en dakkapellen worden weer als nieuw." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Klaar voor uw droomdak?",
    tekst: "Bel 085 060 4544, stuur een appje, of vraag direct een gratis dakinspectie aan."
  },

  contact: {
    titel: "Vraag uw gratis dakinspectie aan",
    tekst: "Laat uw gegevens achter, bel, of stuur een foto via WhatsApp. We nemen snel contact met u op.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis dakinspectie", "Daklekkage (spoed)", "Plat dak", "Pannendak", "Zinken dak", "Schoorsteen", "Reiniging", "Overig"],
    voorbeeld: "Bijvoorbeeld: na de regen een vochtplek op het plafond van de aanbouw",
    belofte: "We nemen snel contact met u op."
  }
};
