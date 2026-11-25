// Roof Repair Daksystemen (Papendrecht). Bron: roofrepairdaksystemen.com (gecrawld 25-11) + Google (5,0 / 20, reviews in google.md).
// Geen 06/WhatsApp: whatsapp:false, kanaal e-mail. Zie content.md.
window.SITE = {
  naam: "Roof Repair",
  kortNaam: "Roof Repair",
  plaats: "Papendrecht",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#161616", accent: "#c3a06b" },
  telefoon: "078 220 79 93",
  telBel: "+31782207993",
  whatsapp: false,
  email: "roofrepairdaksystemen@gmail.com",
  adres: ["Margriethof", "3355 EK Papendrecht"],
  kvk: "81537204",
  google: { score: "5,0", aantal: "20" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Zekerheid van bovenaf. Platte daken, pannendaken, lood- en zinkwerk, lekkages en dakinspecties, vanuit Papendrecht door heel Nederland.",

  hero: {
    regels: ["Zekerheid", "van bovenaf."],
    tekst: "Zorgeloze daken voor particulieren, bedrijven en VvE's. Van een snelle reparatie bij lekkage tot een complete renovatie, met 10 jaar garantie.",
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 60%",
    fotoAlt: "Nieuw plat dak met lichtkoepels onder een blauwe lucht",
    donker: true,
    punten: ["10 jaar garantie", "Eigen vakmensen", "5,0 op Google"]
  },

  marquee: ["Bitumen daken", "Pannendaken", "Lood- en zinkwerk", "Lekkage verhelpen", "Dakinspectie", "Dakrenovatie", "Witte dakbedekking", "Dakveiligheid", "Voor VvE's"],

  spoed: {
    titel: "Lekkage? Bel direct.",
    tekst: "Vaak zijn we binnen 24 tot 48 uur bij u. Voor noodgevallen hebben we een spoedservice, ook buiten werktijden."
  },

  intro: {
    kicker: "Roof Repair",
    tekst: "Wij zijn gespecialiseerd in bitumineuze dakbedekking en pannendaken. We denken met u mee, communiceren duidelijk en werken netjes af, van een kleine reparatie tot een compleet nieuw dak.",
    stats: [
      { getal: "188", label: "Projecten afgerond" },
      { getal: "8+ jaar", label: "Ervaring in dakwerk" },
      { getal: "10 jaar", label: "Garantie op ons werk" },
      { getal: "5,0", label: "Op Google, 20 reviews" }
    ]
  },

  diensten: {
    titel: "Alles voor een waterdicht dak",
    tekst: "Plat of hellend, woning of bedrijfshal: we zoeken samen met u de oplossing die bij uw dak past.",
    items: [
      { naam: "Bitumen daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 60%",
        tekst: "Sterk, waterdicht en duurzaam. Tweelaagse bitumineuze dakbedekking van A-merken, desgewenst met isolatie en afschot.",
        punten: ["Nieuwbouw en renovatie", "Isolatie en afschot", "Ook witte, koele daken"] },
      { naam: "Lekkage verhelpen", soort: "Lekkage", foto: "img/lekkage.jpg", pos: "50% 55%",
        tekst: "We sporen de bron op, zo nodig met vochtmeting of warmtecamera, en zorgen voor een blijvende oplossing. Geen lapwerk.",
        punten: ["Vaak binnen 24 tot 48 uur", "Spoedservice", "Herstel met garantie"] },
      { naam: "Dakinspectie", soort: "Inspectie", foto: "img/inspectie.jpg", pos: "50% 60%",
        tekst: "Een grondige controle van dakbedekking, aansluitingen, lood- en zinkwerk en goten. U krijgt een helder rapport.",
        punten: ["Vanaf €89 voor een woning", "Verrekend als wij het werk doen", "Rapport voor verzekeraar of verkoop"] }
    ],
    meer: [
      { naam: "Dakrenovatie", tekst: "Een compleet nieuw dak of renovatie van uw bestaande dak, duurzaam en vakkundig uitgevoerd." },
      { naam: "Pannendaken", tekst: "Renovatie en reparatie van pannendaken, voor een stevig dak met een verzorgde uitstraling." },
      { naam: "Lood- en zinkwerk", tekst: "Waterdicht en netjes afgewerkt. Ambachtelijk vakwerk tot in detail." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Van chalet tot bedrijfshal",
    tekst: "Een greep uit ons werk: een chaletdak in twee dagen vernieuwd, een uitbouw van een zorginstelling in Hardinxveld in één dag, en 2500 m² witte dakbedekking op een bedrijfshal.",
    items: [
      { foto: "img/p-lichtkoepel.jpg", label: "Plat dak met lichtkoepel", sub: "Bitumineuze dakbedekking, strak langs de gevel", pos: "50% 60%" },
      { foto: "img/p-dakterras.jpg", label: "Nieuw plat dak", sub: "Bitumen, klaar voor jaren", pos: "50% 60%" },
      { foto: "img/p-glad.jpg", label: "Strak afgewerkt", sub: "Dakrand en afvoer netjes ingewerkt", pos: "50% 70%" },
      { foto: "img/p-school.jpg", label: "Dak met daglicht", sub: "Lichtkoepel opnieuw ingedekt", pos: "50% 65%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Heb Roof Repair ingeschakeld, binnen twee uur waren ze ter plaatse. Erg goede service en vakbekwame mensen. Ik zou ze zeker weer bellen voor de renovatie van mijn dak.", naam: "Jozeph F." },
      { tekst: "Na zware regenval lekkage gehad in onze slaapkamer… Vakkundig, vriendelijk, meedenkend en schappelijke prijzen. Kortom, zeer goed geholpen: dak gerepareerd, dag later weer stortbui gehad en geen lekkage meer gehad.", naam: "Ilse A." },
      { tekst: "Ze leveren keer op keer vakwerk, denken goed mee en komen hun afspraken na. … Een betrouwbare partner die kwaliteit hoog in het vaandel heeft staan.", naam: "Emille H." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie op ons werk",
    tekst: "We werken met gecertificeerde materialen van A-merken en volgens de richtlijnen van onder meer VEBIDAK, BDA Dakadvies en het Bouwbesluit.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "10 jaar waterdichtheidsgarantie",
        "Eigen vakmensen, geen onderaannemers",
        "Direct contact met de uitvoerende specialist",
        "Meer dan 8 jaar ervaring in dakwerk",
        "Persoonlijk contact en duidelijk advies",
        "Vrijblijvende offerte"
      ]
    }
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dak, onze zorg",
    rol: "Roof Repair Daksystemen, Papendrecht",
    tekst: [
      "Bij Roof Repair staan kwaliteit, vakmanschap en betrouwbaarheid centraal. Met een team van drie vakspecialisten werken we aan daken van particulieren, bedrijven, scholen en VvE's.",
      "Of het nu gaat om een lekkage, nieuwe dakbedekking of onderhoud: we kijken eerst goed, leggen eerlijk uit wat er nodig is en voeren elke opdracht uit met zorg en aandacht."
    ],
    foto: "img/over.jpg", fotoPos: "35% 50%", fotoAlt: "Bouwhekdoek van Roof Repair Daksystemen bij een nieuwbouwproject",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Vanuit Papendrecht, door heel Nederland",
    tekst: "Ons team werkt door heel Nederland. In overleg zijn we ook inzetbaar in België en Duitsland."
  },

  faq: [
    { v: "Wat kost een dakinspectie?", a: "Voor een standaard woning vanaf €89 inclusief btw. Voor grotere panden of moeilijk bereikbare daken maken we een offerte op maat. Laat u het geadviseerde werk door ons doen, dan verrekenen we de inspectiekosten volledig." },
    { v: "Hoe snel kunnen jullie komen bij een lekkage?", a: "Vaak zijn we binnen 24 tot 48 uur ter plaatse. Voor noodgevallen hebben we een spoedservice, ook buiten reguliere werktijden." },
    { v: "Werken jullie ook voor VvE's?", a: "Ja. Voor VvE's en vastgoedbeheerders leveren we inspectierapporten die passen in een meerjarenonderhoudsplan (MJOP)." },
    { v: "Wanneer zijn jullie bereikbaar?", a: "Telefonisch van maandag tot en met vrijdag van 07:00 tot 17:00 en op zaterdag van 09:00 tot 16:00." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 30%",
    titel: "Klaar voor een dak zonder zorgen?",
    tekst: "Vraag vrijblijvend een offerte of dakinspectie aan. U hoort binnen 24 uur van ons."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vertel kort wat er aan uw dak moet gebeuren, of bel ons direct op 078 220 79 93.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Lekkage", "Dakinspectie", "Plat dak (bitumen)", "Pannendak", "Lood- en zinkwerk", "Dakrenovatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons platte dak lekt bij de lichtkoepel, of we willen het dak laten inspecteren voor de verkoop",
    belofte: "U ontvangt binnen 24 uur een reactie."
  }
};
