// SC Service Dakdekkersbedrijf (Venlo), sinds 2008. Bron: scservicedakdekkersbedrijf.nl (één pagina) + Google (5,0 / 18). Geen logo op hun site: naam in tekst. Foto's: eigen site + Google. Zie content.md.
window.SITE = {
  naam: "SC Service Dakdekkersbedrijf",
  kortNaam: "SC Service",
  plaats: "Venlo",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Venlo",
  logo: "img/leeg.svg", logoVorm: "icoon",
  kleuren: { brand: "#1d2329", accent: "#b8874f" },
  telefoon: "06 81 30 85 59",
  telefoonIntl: "31681308559",
  waTekst: "App ons",
  waContact: "Stuur ons een bericht",
  email: "scservice@ziggo.nl",
  adres: ["Heutzstraat 20", "5913 AK Venlo"],
  google: { score: "5,0", aantal: "18" },
  ctaTekst: "Plan een dakinspectie",
  navCta: "Offerte",
  voetTekst: "Dakdekkersbedrijf in Venlo, sinds 2008. Pannendaken, platte daken, dakkapellen, lood- en zinkwerk en houtwerk rond het dak.",

  hero: {
    regels: ["Vakwerk op", "uw dak."],
    tekst: "Dakdekker in Venlo sinds 2008. Van een nieuw pannendak tot een strakke dakkapel: we komen snel kijken, vinden het probleem en maken een duidelijke offerte.",
    foto: "img/hero.jpg", fotoPos: "55% 30%",
    fotoPosMobiel: "48% 30%",
    fotoAlt: "Nieuwe antraciet dakkapel op een bakstenen woning",
    donker: true,
    punten: ["Sinds 2008", "Snel een dakinspectie", "5,0 op Google"]
  },

  marquee: ["Pannendaken", "Platte daken", "Dakkapellen", "Isoleren", "VELUX dakvensters", "Nokvorsten", "Lood- en zinkwerk", "Zinken goten", "Rockpanel", "Overkappingen"],

  intro: {
    kicker: "Over SC Service",
    tekst: "Al sinds 2008 werken we aan daken in Venlo en omgeving. Heeft u een probleem met uw dak? We komen zo snel mogelijk kijken, zoeken de oorzaak en maken een offerte.",
    stats: [
      { getal: "2008", label: "Actief sinds" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "18", tel: 18, label: "Reviews op Google" },
      { getal: "Venlo", label: "En omgeving" }
    ]
  },

  diensten: {
    titel: "Alles voor uw dak",
    tekst: "Nieuw of renovatie, plat of schuin. En alles wat er rond het dak bij komt kijken.",
    knop: "Vraag een offerte",
    items: [
      { naam: "Dakkapellen", soort: "Nieuw en renovatie", foto: "img/dakkapellen.jpg", pos: "50% 50%", tekst: "Een nieuwe dakkapel of uw oude laten opknappen, strak afgewerkt met Rockpanel.",
        punten: ["Nieuwe dakkapellen", "Renovatie", "Rockpanel-montage"] },
      { naam: "Pannendaken", soort: "Hellend dak", foto: "img/pannendak.jpg", pos: "50% 50%", tekst: "Een compleet nieuw pannendak, of reparatie en onderhoud van uw bestaande dak.",
        punten: ["Nieuw en renovatie", "Isoleren", "Nokvorsten renoveren"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 40%", tekst: "Nieuwe dakbedekking op uw woning, aanbouw, erker of overkapping, of reparatie van een lekkend plat dak.",
        punten: ["Nieuwe dakbedekking", "Reparatie van lekkages", "Ook erkers en aanbouwen"] },
      { naam: "Lood- en zinkwerk", soort: "Goten en lood", foto: "img/lood-zink.jpg", pos: "50% 50%", tekst: "Zinken goten en regenpijpen, en vervanging van lood rond schoorstenen en dakkapellen.",
        punten: ["Zinken goten en buizen", "Vervangen van lood", "Dakgootreiniging"] },
      { naam: "Dakrenovatie", soort: "Renovatie", foto: "img/renovatie.jpg", pos: "50% 40%", tekst: "Is uw dak op? We vernieuwen het compleet, inclusief isolatie, VELUX dakvensters en schoorsteenwerk.",
        punten: ["Isoleren", "VELUX dakvensters", "Schoorstenen en impregnatie"] },
      { naam: "Houtwerk en overkappingen", soort: "Timmerwerk", foto: "img/houtwerk.jpg", pos: "50% 50%", tekst: "Terrasoverkappingen, pergola's en tuinhuizen, en al het houtwerk rond het dak.",
        punten: ["Overkappingen en pergola's", "Tuinhuizen", "Plastisol en timmerwerk"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Een greep uit ons werk",
    tekst: "Dakkapellen, pannendaken en renovaties in Venlo en omgeving.",
    items: [
      { foto: "img/project-1.jpg", label: "Dakkapellen", sub: "Karakteristieke rij woningen", pos: "50% 40%" },
      { foto: "img/project-2.jpg", label: "Dakkapel", sub: "Strak afgewerkt in antraciet", pos: "50% 50%" },
      { foto: "img/project-3.jpg", label: "Pannendak", sub: "Met twee dakkapellen", pos: "50% 50%" },
      { foto: "img/project-4.jpg", label: "Brede dakkapel", sub: "Nieuw geplaatst", pos: "50% 50%" },
      { foto: "img/project-5.jpg", label: "Dakkapel", sub: "Met VELUX dakvenster", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Snel duidelijkheid over uw dak, en afspraken die we nakomen.",
    foto: "img/werkwijze.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuw pannendak met strakke nok",
    stappen: [
      { naam: "Dakinspectie", tekst: "We komen zo snel mogelijk kijken en zoeken waar het probleem zit." },
      { naam: "Duidelijke offerte", tekst: "U krijgt een offerte met een heldere prijs, zonder verrassingen achteraf." },
      { naam: "Netjes uitgevoerd", tekst: "We werken secuur, ruimen op en lopen het resultaat samen met u na." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Sever is precies, accuraat en professioneel. Transparant in wat hij doet en hoe hij dingen aanpakt. Komt afspraken na, denkt goed na, communiceert duidelijk en houdt zich aan prijsafspraken.", naam: "André W." },
      { tekst: "SC Service ingezet om ons gehele dak te vernieuwen en dakkapellen te plaatsen en te renoveren. Sever komt zijn afspraken na, werkt samen met Lukas hard, secuur en netjes. Geleverd werk van heel goede kwaliteit!", naam: "Kay P." },
      { tekst: "We zijn enorm blij hoe Sever het dakleer van onze erker heeft vervangen. Ook heeft hij gelijk de regenpijpen vervangen door zink. … Heel klantgericht, vriendelijk, werkt heel netjes, eerlijk geprijsd en komt alle afspraken na!", naam: "Victor en Brenda G." },
      { tekst: "Hij komt zijn afspraken na, voert het werk netjes en secuur uit en is altijd vriendelijk. We hebben ook op Sever kunnen rekenen toen we wat spoed hadden. Fijne vent en een echt vakman.", naam: "Matthijs v. d. L." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dak in goede handen",
    rol: "Dakdekkersbedrijf in Venlo, sinds 2008",
    tekst: [
      "SC Service is al sinds 2008 het dakdekkersbedrijf voor veel tevreden klanten in Venlo en omgeving. Van een kleine reparatie tot een compleet nieuw dak met dakkapellen.",
      "Heeft u een probleem met uw dak? We komen zo snel mogelijk langs voor een dakinspectie en maken daarna een duidelijke offerte."
    ],
    foto: "img/over.jpg", fotoPos: "50% 50%", fotoAlt: "Rij woningen met dakkapellen",
    knop: "Stuur ons een bericht"
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 40%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Plan een dakinspectie. We komen snel kijken en maken een duidelijke offerte."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Bereikbaar maandag tot en met vrijdag van 8:00 tot 16:00. Kunnen we niet opnemen? Stuur een WhatsApp of e-mail, dan reageren we zo snel mogelijk.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak", "Dakkapel", "Lekkage of reparatie", "Lood- en zinkwerk", "Overkapping of houtwerk", "Anders"],
    voorbeeld: "Bijvoorbeeld: we willen een dakkapel aan de achterkant",
    belofte: "We reageren zo snel mogelijk."
  }
};
