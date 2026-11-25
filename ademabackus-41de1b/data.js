// AdemaBackus Dakwerken (Heerlen/Landgraaf). Bron: ademabackusdakwerken.nl (home, diensten, offerte, contact, projecten) + Google (4,9 / 94). Zie content.md.
// Foto's: vooral hun Google-profiel (2000px); site-foto's zijn klein (309px). Hero-foto op hun site is een stockfoto: niet gebruikt.
// Logo uit hun headerbanner (naam + dakje), wit weggehaald.
window.SITE = {
  naam: "AdemaBackus Dakwerken",
  kortNaam: "AdemaBackus",
  plaats: "Heerlen",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#1f1830", accent: "#c0392b" },
  telefoon: "06 407 78 256",
  telefoonIntl: "31640778256",
  telefoon2: "06 523 82 141",
  email: "info@ademabackusdakwerken.nl",
  adres: ["Tuinstraat 13", "6414 TG Heerlen"],
  kvk: "65514072",
  google: { score: "4,9", aantal: "94" },
  ctaTekst: "Vraag een gratis offerte aan",
  navCta: "Offerte",
  waTekst: "App Dimitri",
  voetTekst: "Dakdekkersbedrijf uit Heerlen en Landgraaf. Pannendaken, platte daken, dakramen, lood- en zinkwerk. Kwaliteit en garantie bij elke klus.",

  hero: {
    regels: ["Kwaliteit en garantie", "bij elke klus."],
    tekst: "AdemaBackus Dakwerken doet nieuwbouw en renovatie, en is gespecialiseerd in reparatie, onderhoud en inspectie van uw dak. Vanuit Heerlen en Landgraaf, in heel Nederland.",
    foto: "img/hero-dakraam.jpg", fotoPos: "50% 45%", fotoPosMobiel: "50% 45%",
    fotoAlt: "Nieuw dakraam strak ingewerkt in een pannendak",
    donker: true,
    punten: ["10 jaar garantie", "Gratis offerte", "Heel Nederland"]
  },

  marquee: ["Pannendaken", "Platte daken", "Dakramen", "Lood- en zinkwerk", "Isolatie", "Gevelbekleding", "Shingles", "Dakkapellen", "Onderhoud"],

  intro: {
    kicker: "AdemaBackus",
    tekst: "Adema Dakwerken en Backus Dakbedekkingen werkten jarenlang samen en gaan nu verder als één bedrijf. Service, kwaliteit en continuïteit staan bij ons hoog in het vaandel.",
    stats: [
      { getal: "4,9", label: "Uit 94 Google-reviews" },
      { getal: "10 jaar", label: "Garantie op ons werk" },
      { getal: "Gratis", label: "Vrijblijvende offerte" },
      { getal: "NL", label: "Werkgebied: heel Nederland" }
    ]
  },

  diensten: {
    titel: "Alles op en rond uw dak",
    tekst: "In de ruimste zin van het woord. Ons doel: iedere klant voor de volle 100% tevreden.",
    items: [
      { naam: "Pannendak", foto: "img/pannendak-werk.jpg", pos: "50% 40%",
        tekst: "Voor renovatie en nieuwbouw. We helpen u kiezen tussen betonnen of keramische, holle of platte dakpannen.",
        punten: ["Renovatie en nieuwbouw", "Advies over het soort pan", "Ook reparatie en onderhoud"] },
      { naam: "Plat dak", foto: "img/platdak.jpg", pos: "50% 50%",
        tekst: "SBS- en APP-gemodificeerde dakbedekking, of een plat dak helemaal opgebouwd vanaf de balklaag.",
        punten: ["Onderconstructie en dampremmende laag", "Isolatie en waterkerende lagen", "Mechanisch of losliggend"] },
      { naam: "Dakramen", foto: "img/dakraam-rolluik.jpg", pos: "50% 50%",
        tekst: "We werken met het Velux-programma: ruime keus, beproefde kwaliteit en accessoires als rolgordijnen.",
        punten: ["Plaatsen en vervangen", "Strak ingewerkt in de pannen", "Rolgordijnen en luxaflex"] },
      { naam: "Lood- en zinkwerk", foto: "img/zinkgoot.jpg", pos: "50% 50%",
        tekst: "Loodaansluitingen in gevels en schoorstenen, en zinkwerk van dakgoot tot compleet zinkdak. Zo blijft alles waterdicht.",
        punten: ["Loodaansluitingen", "Dakgoten en zinken kappen", "Felswerk en zinkdaken"] }
    ],
    meer: [
      { naam: "Isolatie", tekst: "Pir, EPS, PUR of steenwol: we kiezen het materiaal dat past bij uw constructie en woning." },
      { naam: "Gevelbekleding", tekst: "Gevels en boeiboorden bekleden met Archipan, zink of Plastisol, in veel kleuren en onderhoudsvrij." },
      { naam: "Dakkapellen en shingles", tekst: "Onderhoudsvrije dakkapellen met hardhouten of kunststof kozijn, en shingles in vele vormen en kleuren." }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten", navNaam: "Projecten",
    titel: "Recent werk",
    items: [
      { foto: "img/dakraam-plaatsen.jpg", label: "Dakraam plaatsen", sub: "In een bestaand pannendak", pos: "50% 50%" },
      { foto: "img/op-het-dak.jpg", label: "Pannendak", sub: "Aan het werk", pos: "50% 35%" },
      { foto: "img/dakraam-latten.jpg", label: "Dakraam", sub: "Voorbereiding", pos: "50% 50%" },
      { foto: "img/zonnepanelen.jpg", label: "Dakwerk", sub: "Met zonnepanelen", pos: "50% 50%" },
      { foto: "img/dakraam-rolluik.jpg", label: "Dakraam", sub: "Met rolluik", pos: "50% 50%" }
    ]
  },

  garantie: {
    kicker: "Garantie",
    titel: "10 jaar garantie, standaard",
    tekst: "Onze leveranciers geven 10 jaar productgarantie op de waterdichtheid van hun materiaal. Omdat we alleen A-kwaliteit verwerken, geven we die 10 jaar garantie ook op ons werk.",
    lijst: {
      titel: "Wat dat voor u betekent",
      punten: [
        "10 jaar garantie op de waterdichtheid",
        "Alleen A-kwaliteit materialen",
        "Goede voorbereiding en advies",
        "Gratis en vrijblijvende offerte"
      ]
    },
    merkenTekst: "We werken met o.a.",
    merken: ["Velux", "Monier", "Laumans", "Royal", "EcoTherm", "Unilin", "Archipan"]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Toen een van de dakramen al volledig was ingebouwd vond Dimitri het niet perfect genoeg erbij liggen, dus werd er weer een gedeelte afgemonteerd, bekeken en weer teruggemonteerd. Nu was het perfect…", naam: "Elroy S." },
      { tekst: "Platte dak van mijn berging super netjes gemaakt. Komen afspraken na, netjes opgeruimd na afloop, oog voor detail en altijd in voor een grapje.", naam: "Luna" },
      { tekst: "Het bedrijf werkt zorgvuldig en levert goed werk af! Weer of geen weer, ze komen en werken hard!", naam: "Sindie M." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Dimitri en Richo",
    rol: "Dimitri Adema en Richo Backus",
    tekst: [
      "Adema Dakwerken en Backus Dakbedekkingen hebben de handen ineengeslagen. Na jarenlang samenwerken gaan we verder onder één naam: AdemaBackus Dakwerken.",
      "We zijn gevestigd in Heerlen en Landgraaf, maar heel Nederland is ons werkgebied. Voor een offerte maken we vrijblijvend tijd vrij, met een duidelijke uitleg erbij."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 50%", fotoAlt: "De bus van AdemaBackus Dakwerken",
    knop: "App Dimitri"
  },

  contact: {
    titel: "Vraag een gratis offerte aan",
    tekst: "Bel of app Dimitri (06 407 78 256) of Richo (06 523 82 141), mail ons, of laat hieronder een bericht achter.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak", "Dakraam", "Lood- of zinkwerk", "Isolatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: we willen een dakraam in ons pannendak laten plaatsen",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
