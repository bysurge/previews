// Daktechniek Achterhoek V.O.F. (Ruurlo). Bron: eigen site (JouwWeb) + Google 4,9 / 43, 25-11-2026. Zie content.md.
// Logo: woordmerk zelf nagemaakt in de stijl van het beeldmerk op hun busjes. Foto's: eigen site + Google-profiel.
window.SITE = {
  naam: "Daktechniek Achterhoek",
  kortNaam: "Daktechniek Achterhoek",
  plaats: "Ruurlo",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 40,
  kleuren: { brand: "#1c2226", accent: "#c63a32" },
  telefoon: "06 30 66 66 49",
  telefoonIntl: "31630666649",
  email: "info@daktechniekachterhoek.com",
  kvk: "96514221",
  waTekst: "App ons",
  waContact: "Stuur een WhatsApp, met een foto van uw dak",
  adres: ["De Vente 5a-03", "7261 ST Ruurlo"],
  google: { score: "4,9", aantal: "43" },
  navCta: "App ons",
  ctaTekst: "Offerte aanvragen",
  voetTekst: "Dakdekker uit Ruurlo. Pannendaken, platte daken, lood- en zinkwerk, isolatie en dakonderhoud in de Achterhoek.",

  hero: {
    regels: ["Uw dak in", "goede handen."],
    tekst: "Lokale dakdekker uit Ruurlo. Van een nieuw pannendak tot een plat dak, lood en zink of een lekkage: netjes geregeld, met een persoonlijke aanpak.",
    foto: "img/hero.jpg", fotoPos: "60% 40%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "45% 80%",
    fotoAlt: "Pannendak in aanbouw met nieuwe panlatten en folie, steiger aan de gevel",
    donker: true,
    punten: ["4,9 op Google", "Hellende en platte daken", "Onderhoudsabonnement"]
  },

  marquee: ["Pannendaken", "Platte daken", "Lood- en zinkwerk", "Dakisolatie", "Schoorstenen", "Dakgoten", "Dakinspectie", "Dakonderhoud", "Lekkages"],

  spoed: {
    titel: "Lekkage?",
    tekst: "Stuur een WhatsApp met een paar foto's van de schade. Dan kijken we zo snel mogelijk wat er nodig is."
  },

  intro: {
    kicker: "Over Daktechniek Achterhoek",
    tekst: "Een lokaal dakbedrijf uit Ruurlo, opgericht door een geboren en getogen Achterhoeker. Met jarenlange ervaring op het dak, oog voor detail en een persoonlijke aanpak, van de eerste inspectie tot de laatste pan.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "43", tel: 43, label: "Reviews op Google" },
      { getal: "€150", label: "Onderhoudsabonnement per jaar" }
    ]
  },

  diensten: {
    titel: "Alles voor uw dak",
    tekst: "Voor nieuwbouw en renovatie, hellend of plat. We werken met pannen, bitumen en PVC.",
    knop: "Offerte aanvragen",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 50%", tekst: "Een nieuw pannendak of de pannen vervangen, als het moet met nieuwe isolatie eronder. Strak gelegd en netjes afgewerkt.",
        punten: ["Nieuwe dakpannen", "Nokvorsten en lood", "Dakramen ingewerkt"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/platdak.jpg", pos: "50% 60%", tekst: "Bitumen of PVC op uitbouwen, dakkapellen, schuren en woningen. Met nette daktrim en goede aansluitingen.",
        punten: ["Bitumen", "PVC", "Dakkapellen en schuren"] },
      { naam: "Lood- en zinkwerk", soort: "Lood en zink", foto: "img/zink.jpg", pos: "50% 55%", tekst: "Zinken dakgoten, loodslabben en aansluitingen bij schoorsteen en dakkapel. Het werk dat een dak echt waterdicht maakt.",
        punten: ["Zinken dakgoten", "Loodwerk", "Regenpijpen"] },
      { naam: "Dakisolatie", soort: "Isolatie", foto: "img/werk.jpg", pos: "50% 50%", tekst: "Een warm huis begint bij het dak. We isoleren hellende en platte daken, en kijken met u naar de subsidiemogelijkheden.",
        punten: ["Hellend en plat", "Samen met een nieuw dak", "Subsidie mogelijk"] },
      { naam: "Schoorsteenrenovatie", soort: "Schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 55%", tekst: "Lekt het rond de schoorsteen? We vernieuwen lood en voegwerk, of renoveren de schoorsteen helemaal.",
        punten: ["Nieuw lood", "Lekkage bij de schoorsteen", "Renovatie"] },
      { naam: "Dakgoten en onderhoud", soort: "Onderhoud", foto: "img/goot.jpg", pos: "50% 50%", tekst: "Met het onderhoudsabonnement komen we 2 tot 4 keer per jaar langs: dak en goten inspecteren en schoonmaken. €150 per jaar, inclusief btw.",
        punten: ["Inspectie en reiniging", "Verstoppingen voorkomen", "Eerst overleg bij reparaties"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk in de Achterhoek",
    tekst: "Van een compleet nieuw pannendak tot een plat dak op een winkelpand.",
    items: [
      { foto: "img/p-wit-huis.jpg", label: "Pannendak", sub: "Nieuw dak met dakkapel", pos: "50% 50%" },
      { foto: "img/p-boerderij.jpg", label: "Dakrenovatie", sub: "Pannendak vernieuwd", pos: "50% 45%" },
      { foto: "img/p-renovatie.jpg", label: "Renovatie", sub: "Nieuwe pannen en isolatie", pos: "50% 40%" },
      { foto: "img/plat-blauw.jpg", label: "Plat dak", sub: "Nieuwe bitumen en daktrim", pos: "50% 50%" },
      { foto: "img/p-dubbel.jpg", label: "Boeidelen en goten", sub: "Strak afgewerkt", pos: "50% 45%" }
    ]
  },

  werkwijze: {
    titel: "Zo pakken we het aan",
    tekst: "Eerst goed kijken, dan een duidelijke offerte. En tijdens het werk houden we u op de hoogte.",
    foto: "img/busjes.jpg", fotoPos: "50% 60%", fotoAlt: "De busjes van Daktechniek Achterhoek bij een klus",
    stappen: [
      { naam: "App of mail", tekst: "Vertel wat er speelt, het liefst met een paar foto's van uw dak." },
      { naam: "Inspectie", tekst: "We komen langs en lopen de situatie op het dak nauwkeurig na." },
      { naam: "Duidelijke offerte", tekst: "U krijgt een gespecificeerde offerte en planning, zonder verrassingen." },
      { naam: "Vakwerk", tekst: "We werken netjes door en ruimen alles op. Komen we onderweg iets tegen, dan overleggen we eerst." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Fabian kwam allereerst aan huis om de situatie van het dak nauwkeurig na te lopen. Aansluitend kreeg ik een gespecificeerde offerte / planning. … Bij aanvang een team van 4 professionals die doorpakken, netjes en klantvriendelijk zijn.", naam: "Maureen van H." },
      { tekst: "Afgelopen Maart hebben Fabian en z’n mannen bij ons het pannendak volledig opnieuw gelegd. Dit hebben ze netjes volgens planning en zeer vakkundig gedaan.", naam: "Niels R." },
      { tekst: "De isolatie bleek veel slechter dan verwacht, maar dat was geen enkel probleem. Het plan werd bijgesteld en het benodigde materiaal was er snel. … Wat een metamorfose!!", naam: "Familie Veldhuizen" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Geboren en getogen Achterhoeker",
    rol: "Daktechniek Achterhoek, Ruurlo",
    tekst: [
      "Daktechniek Achterhoek is ontstaan uit liefde voor het vak. Na jaren ervaring in de dakbedekking begon de oprichter zijn eigen bedrijf, met een simpel doel: goed dakwerk leveren, met een persoonlijke aanpak.",
      "We zijn trots op onze roots in de Achterhoek en werken het liefst voor mensen uit de buurt. Elk project doen we met zorg en precisie, zodat u weer jaren zorgeloos onder uw dak woont."
    ],
    foto: "img/band.jpg", fotoPos: "70% 50%", fotoAlt: "Het busje van Daktechniek Achterhoek bij een klus in een winkelstraat",
    knop: "Stuur een bericht"
  },

  faq: [
    { v: "Welke daken doen jullie?", a: "Hellende en platte daken, voor nieuwbouw en renovatie. We werken met pannen, bitumen en PVC, en doen ook lood- en zinkwerk, isolatie en schoorstenen." },
    { v: "Wat houdt het onderhoudsabonnement in?", a: "We komen 2 tot 4 keer per jaar langs om uw dak en dakgoten te inspecteren en schoon te maken. Het kost €150 per jaar, inclusief btw, en loopt een jaar. Moet er iets gerepareerd worden, dan krijgt u eerst een offerte." },
    { v: "Hoe meld ik een lekkage?", a: "Het snelst via WhatsApp: vertel waar het lekt en stuur een paar foto's mee. We zijn telefonisch beperkt bereikbaar, dus een bericht werkt het best." },
    { v: "Is er subsidie voor dakisolatie?", a: "Vaak wel. We kijken graag met u naar de mogelijkheden als we uw dak isoleren." }
  ],

  band: {
    foto: "img/p-plat-groot.jpg", fotoPos: "50% 50%",
    titel: "Hoe staat uw dak ervoor?",
    tekst: "Stuur een WhatsApp naar 06 30 66 66 49, met een foto. Dan hoort u snel wat er nodig is."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, of stuur direct een WhatsApp met een foto. Telefonisch zijn we beperkt bereikbaar, een bericht werkt het best.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak", "Lood en zink", "Isolatie", "Schoorsteen", "Onderhoudsabonnement", "Lekkage", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de dakpannen zijn aan vervanging toe en de isolatie mag beter",
    belofte: "Ma t/m do 08.30-17.00, vr 08.30-15.00. We reageren zo snel mogelijk."
  }
};
