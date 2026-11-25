// Voortman dak- en zinkwerken (Deventer). Bron: voortmandakwerken.nl (verouderde WordPress, felblauw menu, facebook-blok)
// + Google 5,0 uit 6 reviews (25-11-2026, helper p11). Voornaam "Frank" alleen in een logo-bestandsnaam: niet gebruikt.
window.SITE = {
  naam: "Voortman dak- en zinkwerken",
  kortNaam: "Voortman",
  plaats: "Deventer",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoWit: "img/logo-wit.png",
  logoMetNaam: false,
  logoHoogte: 48,
  kleuren: { brand: "#17233a", accent: "#2f6fd6" },
  telefoon: "06 48 74 90 87",
  telefoonIntl: "31648749087",
  telefoon2: "0570 59 50 98",
  waTekst: "Stuur een WhatsApp",
  email: "info@voortmandakwerken.nl",
  adres: ["Vogelslag 44", "7423 CD Deventer"],
  google: { score: "5,0", aantal: "6" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Allround dakdekker uit Deventer. Bitumen, EPDM en PVC, zink-, lood- en koperwerk. Voor particulieren, bedrijven en woningcorporaties.",

  hero: {
    regels: ["Dak- en zinkwerk", "uit Deventer."],
    tekst: "Allround dakdekker uit Deventer, gespecialiseerd in bitumen en zink. Na een inspectie krijgt u een plan van aanpak op maat.",
    foto: "img/hero.jpg", fotoPos: "50% 45%", fotoPosMobiel: "62% 50%", donker: true,
    fotoAlt: "Nieuw bitumen dak met zinken dakrand, uitkijkend over een vijver",
    punten: ["Meer dan 30 jaar ervaring", "Bitumen, EPDM en PVC", "Zink, lood en koper"]
  },

  marquee: ["Bitumen", "EPDM", "PVC", "Shingles", "Zinkwerk", "Dakgoten", "Lood- en koperwerk", "Dakisolatie", "Onderhoud"],

  intro: {
    kicker: "Over Voortman",
    tekst: "Geen enkel dak is hetzelfde en verdient een persoonlijke aanpak. Daarom kijken we eerst goed naar uw dak, en krijgt u daarna een plan van aanpak dat past. Voor particulieren, (bouw)bedrijven en woningcorporaties.",
    stats: [
      { getal: "30+", label: "Jaar ervaring" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Deventer", label: "Thuisbasis" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Van een nieuw plat dak tot een zinken goot op maat: alles vakkundig gemaakt en gemonteerd.",
    items: [
      { naam: "Dakbedekking", soort: "Dakbedekking", foto: "img/bitumen.jpg", pos: "50% 50%", tekst: "Bitumen in APP of SBS, voor platte én hellende daken. Ook EPDM, PVC en shingles. Na de inspectie adviseren we wat het beste past.",
        punten: ["APP en SBS bitumen", "EPDM en PVC", "Ook dakterrassen"] },
      { naam: "Zinkwerk", soort: "Zinkwerk", foto: "img/zinkgoot.jpg", pos: "50% 60%", tekst: "Dakgoten, regenpijpen, randafwerking en zinken daken. Zorgvuldig ingemeten, op maat gemaakt en strak gesoldeerd.",
        punten: ["Dakgoten en regenpijpen", "Zinken randen en daken", "Op maat gemaakt"] },
      { naam: "Lood- en koperwerk", soort: "Lood / koper", foto: "img/koper-dak.jpg", pos: "50% 50%", tekst: "Lood rond schoorstenen en in opgaande gevels, en koperen dak- en gevelafwerking die met de jaren alleen mooier wordt.",
        punten: ["Voetlood en loketten", "Lood rond schoorstenen", "Koperen afwerking"] },
      { naam: "Reparatie en renovatie", soort: "Renovatie", foto: "img/renovatie.jpg", pos: "50% 50%", tekst: "Lekt uw dak of is het versleten? We repareren of vernieuwen het, en nemen de isolatie meteen mee als dat zinvol is.",
        punten: ["Lekkages verhelpen", "Dak vernieuwen", "Isolatie meenemen"] },
      { naam: "Onderhoud", soort: "Onderhoud", foto: "img/onderhoud.jpg", pos: "50% 50%", tekst: "Periodiek onderhoud met heldere afspraken, rapportages per dakvlak en een snelle calamiteitenservice.",
        punten: ["Onderhoudscontracten", "Rapportage per dakvlak", "Calamiteitenservice"] },
      { naam: "Nieuwbouw", soort: "Nieuwbouw", foto: "img/nieuwbouw.jpg", pos: "50% 50%", tekst: "Het platte dak en al het zink-, lood- en koperwerk voor uw nieuwbouw. We denken vooraf mee met de architect.",
        punten: ["Platte daken", "Zink, lood en koper", "Meedenken vooraf"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Laatste werken",
    titel: "Vakwerk tot in de hoek",
    tekst: "Een greep uit ons werk in Deventer en omgeving.",
    items: [
      { foto: "img/koper-dak.jpg", label: "Zinken dak", sub: "Rond dak in zink, in banen gezet", pos: "50% 50%" },
      { foto: "img/zink-rand.jpg", label: "Zinkwerk", sub: "Zinken dakrand en afdekking", pos: "50% 50%" },
      { foto: "img/zink-muur.jpg", label: "Muurafdekking", sub: "Strak in zink afgewerkt", pos: "50% 50%" },
      { foto: "img/tuinhuis.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking op een bijgebouw", pos: "50% 50%" },
      { foto: "img/zink-hoek.jpg", label: "Zinkwerk", sub: "Hoekdetail, strak gesoldeerd", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Open communicatie van begin tot eind: u weet altijd wat we doen en waarom.",
    foto: "img/solderen.jpg", fotoPos: "50% 50%", fotoAlt: "Een zinken goot wordt gesoldeerd",
    stappen: [
      { naam: "Inspectie", tekst: "We komen langs en bekijken uw dak grondig." },
      { naam: "Plan op maat", tekst: "U krijgt een plan van aanpak en een offerte die past bij uw dak." },
      { naam: "Vakkundig uitgevoerd", tekst: "Met de juiste materialen, en steeds overleg over de voortgang." },
      { naam: "Onderhoud", tekst: "Daarna kunt u het onderhoud bij ons onderbrengen." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Dank voor het vakwerk. Vakbekwame, vriendelijke dakdekkers die snel en goed werken. Op een schaal van 1 tot 10, geef ik Voortman en zijn dakdekkers een 12.", naam: "T.H." },
      { tekst: "Goeie vakman, weet van aanpakken. Veel kennis van zaken, en denkt in oplossingen. Levert goed en degelijk werk af.", naam: "Jan F." },
      { tekst: "Een hele goede vakman, werkt netjes en volgens afspraak. Als je een goede dakdekker zoekt zou ik zeggen: bel hem maar.", naam: "Henk W." },
      { tekst: "Beste dakdekker die ik ooit heb gezien, alles strak en nergens lekkage.", naam: "Melvin G." }
    ]
  },

  werkgebied: {
    titel: "Thuis in Deventer",
    tekst: "We werken vanuit Deventer voor particulieren, bedrijven en woningcorporaties. Twijfelt u of we bij u in de buurt komen? Stuur gerust een bericht."
  },

  band: {
    foto: "img/renovatie.jpg", fotoPos: "50% 50%",
    titel: "Lekkage of toe aan een nieuw dak?",
    tekst: "Bel of app ons. We komen kijken en maken een plan op maat."
  },

  contact: {
    titel: "Vraag vrijblijvend een offerte aan",
    tekst: "Vul het formulier in, of bel of app direct.",
    formTitel: "Aanvraag",
    onderwerpen: ["Plat dak", "Zinkwerk / goten", "Lood / koper", "Lekkage", "Onderhoud", "Nieuwbouw"],
    voorbeeld: "Bijvoorbeeld: onze zinken dakgoot lekt bij de hoek",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
