// Hilkhuysen Dak Techniek B.V. (Zevenbergen). Bron: daktechniek.nl + Google (4,2 / 17). Zie content.md.
// Foto's: eigen Google-profiel + eigen foto's van hun site. Geen 06 gevonden: kanaal e-mail, geen WhatsApp-knoppen.
window.SITE = {
  naam: "Hilkhuysen Dak Techniek",
  kortNaam: "Hilkhuysen",
  plaats: "Zevenbergen",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 40,
  kleuren: { brand: "#1d2023", accent: "#c62a2a" },
  telefoon: "0168 32 82 59",
  telBel: "+31168328259",
  whatsapp: false,
  email: "info@daktechniek.nl",
  adres: ["Campagneweg 11U", "4761 RM Zevenbergen"],
  kvk: "75212935",
  google: { score: "4,2", aantal: "17" },
  ctaTekst: "Vrijblijvend advies",
  navCta: "Contact",
  voetTekst: "Familiebedrijf voor platte daken uit Zevenbergen, sinds 1987. Eigen gediplomeerde dakdekkers, VCA* en lid van Vebidak.",

  hero: {
    regels: ["Uw platte dak,", "waterdicht én", "netjes afgewerkt."],
    tekst: "Familiebedrijf uit Zevenbergen, sinds 1987. Met een klein, ervaren team eigen dakdekkers voor renovatie, nieuwbouw, onderhoud en lekkages.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 60%", fotoPosMobiel: "40% 60%",
    fotoAlt: "Nieuw gelegde bitumen dakbedekking op een plat dak, met de brander nog op het dak",
    donker: true,
    punten: ["Sinds 1987", "10 jaar garantie op waterdichtheid", "Lid van Vebidak"]
  },

  marquee: ["EPDM", "PVC", "Bitumen", "Dakshingles", "Dakisolatie", "Lichtkoepels", "Dakonderhoud", "Lekkages", "Renovatie en nieuwbouw"],

  spoed: {
    titel: "Lekkage aan uw platte dak?",
    tekst: "Stuur een e-mail of bel op werkdagen tussen 7.00 en 17.00. We doen ons uiterste best om de lekkage zo snel mogelijk te verhelpen."
  },

  intro: {
    kicker: "Over Hilkhuysen",
    tekst: "Een dak moet niet alleen waterdicht zijn, het moet er ook netjes uitzien. Daar werken we sinds 1987 aan, bewust met een klein team. Klein en regionaal betekent zeker niet onkundig.",
    stats: [
      { getal: "1987", label: "Familiebedrijf sinds" },
      { getal: "10 jaar", label: "Garantie op waterdichtheid" },
      { getal: "4,2", label: "Gemiddeld op Google" },
      { getal: "VCA*", label: "Gecertificeerd sinds 2001" }
    ]
  },

  keurmerkenTitel: "Aangesloten en gecertificeerd",
  keurmerken: [
    { naam: "Vebidak", sub: "Lid sinds 2006" },
    { naam: "VCA*", sub: "Gecertificeerd sinds 2001" },
    { naam: "CAO Bikudak", sub: "Gediplomeerde dakdekkers" }
  ],

  diensten: {
    titel: "Alles voor uw platte dak",
    tekst: "Renovatie en nieuwbouw, voor woningen en bedrijfspanden.",
    knop: "Advies aanvragen",
    items: [
      { naam: "Kunststof: EPDM en PVC", soort: "Plat dak", foto: "img/epdm.jpg", pos: "50% 55%", tekst: "Geen brander nodig en een lange levensduur. EPDM is bestand tegen extreme temperaturen, ozon en uv; PVC is er in verschillende kleuren.",
        punten: ["EPDM rubber", "PVC in kleur", "Koud verlijmd"] },
      { naam: "Bitumen", soort: "Plat dak", foto: "img/aansluiting.jpg", pos: "40% 50%", tekst: "Goed beloopbaar en sterk. We werken met APP en SBS, aangebracht met de brander. Om brandveiligheidsredenen niet op dakkapellen.",
        punten: ["APP en SBS", "Goed beloopbaar", "Renovatie en nieuwbouw"] },
      { naam: "Dakisolatie", soort: "Isolatie", foto: "img/isolatie.jpg", pos: "50% 60%", tekst: "Bij renovatie of nieuwbouw isoleren we uw platte dak meteen mee. We bespreken de mogelijkheden graag bij u op locatie.",
        punten: ["Bij renovatie en nieuwbouw", "Advies op locatie", "Woning en bedrijfspand"] },
      { naam: "Onderhoud en inspectie", soort: "Onderhoud", foto: "img/schoorsteen.jpg", pos: "50% 50%", tekst: "Met een (half)jaarlijkse inspectie ontdekken we problemen op tijd en gaat uw dak langer mee. Eenmalig of met een onderhoudscontract.",
        punten: ["Dak, goten en afvoeren schoon", "Naden en aansluitingen gecontroleerd", "Rapportage over uw dak"] }
    ],
    meer: [
      { naam: "Dakshingles", tekst: "Kleine bitumenleien voor hellende daken, in veel kleuren en modellen." },
      { naam: "Lichtkoepels", tekst: "Vervangen of nieuw plaatsen, ook platdakramen van Velux en Intura." },
      { naam: "Lekkages", tekst: "Lekkage aan uw platte dak, shingles of dakgoot? We komen altijd met twee dakdekkers." },
      { naam: "Dakgoten", tekst: "Ook voor reparaties aan uw dakgoot kunt u bij ons terecht." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Werk", kicker: "Ons werk",
    titel: "Strak tot in de hoeken",
    tekst: "Een greep uit ons werk in de regio.",
    items: [
      { foto: "img/hero-dak.jpg", label: "Plat dak", sub: "Nieuwe bitumen dakbedekking", pos: "50% 60%" },
      { foto: "img/aansluiting.jpg", label: "Bedrijfspand", sub: "Strakke aansluiting op de gevel", pos: "40% 50%" },
      { foto: "img/schoorsteen.jpg", label: "Detailwerk", sub: "Schoorsteen netjes ingewerkt", pos: "50% 50%" },
      { foto: "img/aan-het-werk.jpg", label: "Woning", sub: "Aan het werk op de aanbouw", pos: "50% 40%" },
      { foto: "img/shingles.jpg", label: "Hellend dak", sub: "Bitumineuze dakshingles", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    kicker: "Zo werken we",
    titel: "Geen verrassingen achteraf",
    tekst: "Duidelijke afspraken, van eerste bezoek tot oplevering.",
    foto: "img/bussen-uit.jpg", fotoPos: "60% 50%", fotoAlt: "De bedrijfsbussen van Hilkhuysen Dak Techniek",
    stappen: [
      { naam: "Vrijblijvend bekijken", tekst: "We komen geheel vrijblijvend uw dak bekijken en bespreken vooraf alle mogelijkheden en eventuele problemen." },
      { naam: "Schriftelijke offerte", tekst: "U krijgt een schriftelijke offerte, zodat u niet voor onaangename verrassingen komt te staan." },
      { naam: "Eigen dakdekkers", tekst: "Het werk doen onze eigen gediplomeerde dakdekkers. We huren geen onderaannemers in." },
      { naam: "Netjes opgeleverd", tekst: "Waterdicht en netjes afgewerkt, met 10 jaar garantie op waterdichtheid volgens de Vebidak-voorwaarden." }
    ]
  },

  garantie: {
    kicker: "Kwaliteit", navNaam: "Kwaliteit",
    titel: "10 jaar garantie op waterdichtheid",
    tekst: "Op het aanleggen en compleet renoveren van daken gelden de voorwaarden van Vebidak, de brancheorganisatie voor bitumineuze en kunststof dakbedekking. Daarin staat 10 jaar garantie op waterdichtheid. Vebidak is aangesloten bij de Geschillencommissie.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Familiebedrijf sinds 1987",
        "Lid van Vebidak sinds 2006",
        "VCA* gecertificeerd sinds 2001",
        "Eigen gediplomeerde dakdekkers, geen onderaannemers",
        "Elk jaar bijgeschoold",
        "Alleen gecertificeerde materialen en gereedschap"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Hilkhuysen kwam onmiddellijk langs voor inspectie, maakte nette prijs en binnen een mum van tijd was het dak vervangen met EPDM. Topwerk, vriendelijke mannen en alles netjes afgevoerd.", naam: "Consument" },
      { tekst: "Wij hebben ons complete dak laten renoveren en isoleren. … De werkzaamheden waren uitvoerig beschreven, de communicatie was bijzonder goed en prettig.", naam: "Markus van der W." },
      { tekst: "Klein dak vervangen door EPDM, goede vaklui en netjes. … Zeer tevreden, klant is Koning.", naam: "Frans O." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Klein team, groot vakmanschap",
    rol: "Hilkhuysen Dak Techniek B.V., sinds 1987",
    tekst: [
      "In 1987 zijn we het familiebedrijf gestart. We werken bewust met een klein, enthousiast team dakdekkers, vooral in de regio Zevenbergen, Breda, Etten-Leur en Roosendaal.",
      "Onze dakdekkers zijn gediplomeerd en blijven met cursussen up-to-date. We werken met gereedschap en materiaal van hoge kwaliteit, zodat uw dak er tegen kan: van plensregen tot hittegolf."
    ],
    foto: "img/pand-bussen.jpg", fotoPos: "45% 50%", fotoAlt: "Het bedrijfspand van Hilkhuysen Dak Techniek in Zevenbergen met de bedrijfsbussen",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "West- en Midden-Brabant",
    tekst: "Vanuit Zevenbergen werken we in de gemeente Moerdijk en de gemeenten eromheen.",
    plaatsen: ["Zevenbergen", "Breda", "Etten-Leur", "Roosendaal", "Halderberge", "Drimmelen", "Oosterhout", "Gilze en Rijen", "Tilburg", "Dongen", "Waalwijk", "Bergen op Zoom", "Steenbergen"]
  },

  faq: [
    { v: "EPDM, PVC of bitumen?", a: "Kunststof heeft geen brander nodig en gaat lang mee; EPDM is extra bestendig, PVC is er in kleur. Bitumen blijft goed beloopbaar. We bespreken graag bij u op locatie wat het beste past." },
    { v: "Doen jullie ook pannendaken?", a: "Nee. We zijn gespecialiseerd in platte daken en dakshingles. Werk aan pannen-, riet- of leien daken voeren we niet uit." },
    { v: "Hoe gaat een lekkagereparatie?", a: "We bellen u om door te geven wanneer we komen. Voor de veiligheid werken we altijd met twee dakdekkers. Kleine reparaties doen we op regiebasis: werkuren inclusief reistijd vanaf Zevenbergen, plus materiaal." },
    { v: "Kan ik een onderhoudscontract afsluiten?", a: "Ja. We doen een eenmalige inspectie of komen (half)jaarlijks langs met een onderhoudscontract, inclusief rapportage over de staat van uw dak." }
  ],

  band: {
    foto: "img/aansluiting.jpg", fotoPos: "40% 50%",
    titel: "Toe aan een nieuw plat dak?",
    tekst: "We komen vrijblijvend kijken en u krijgt een duidelijke, schriftelijke offerte."
  },

  contact: {
    titel: "Vraag vrijblijvend advies aan",
    tekst: "Laat een bericht achter of bel op werkdagen tussen 7.00 en 17.00 naar 0168 32 82 59.",
    formTitel: "Aanvraag",
    onderwerpen: ["Nieuw plat dak", "Dakrenovatie", "Lekkage", "Dakisolatie", "Lichtkoepel", "Dakshingles", "Onderhoud / inspectie"],
    voorbeeld: "Bijvoorbeeld: het platte dak van onze aanbouw lekt, ongeveer 20 m², graag een offerte voor EPDM",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
