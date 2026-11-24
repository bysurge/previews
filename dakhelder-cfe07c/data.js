// DakHelder Nederland (Utrecht). Bron: dakhelder.nl (half ingevuld sjabloon) + Google (5,0 / 34). Alle foto's = eigen Google-foto's. Zie content.md.
window.SITE = {
  naam: "DakHelder Nederland",
  kortNaam: "DakHelder",
  plaats: "Utrecht",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoOpFoto: "img/logo-op-foto.png",
  logoHoogte: 30,
  kleuren: { brand: "#1f252c", accent: "#d63a30" },
  telefoon: "030 340 3700",
  telBel: "+31303403700",
  whatsapp: false,
  email: "info@dakhelder.nl",
  adres: ["Raoul Wallenberglaan 30", "3527 WL Utrecht"],
  google: { score: "5,0", aantal: "34" },
  ctaTekst: "Gratis offerte",
  navCta: "Offerte",
  voetTekst: "Dakdekker vanuit Utrecht. Dakreparaties, onderhoud en complete renovaties, voor particulieren en bedrijven. 24-uurs nooddienst.",

  hero: {
    regels: ["Waterdicht,", "elke keer", "weer."],
    tekst: "Dakreparaties, onderhoud en complete dakrenovaties vanuit Utrecht. Platte daken en pannendaken, met minimaal 10 jaar garantie op ons werk.",
    foto: "img/hero-vakman.jpg", fotoPos: "50% 100%",
    fotoMobiel: "img/hero-vakman-mobiel.jpg", fotoPosMobiel: "45% 50%",
    fotoAlt: "Dakdekker van DakHelder Nederland werkt aan een plat dak",
    donker: true,
    punten: ["Minimaal 10 jaar garantie", "24-uurs nooddienst", "Gratis offerte"]
  },

  marquee: ["Platte daken", "Pannendaken", "Daklekkage", "Dakreparatie", "Dakonderhoud", "Dakinspectie", "Dakrenovatie", "Isolatie", "Trims en boeidelen"],

  spoed: {
    titel: "Lekkage of dakschade?",
    tekst: "Onze 24-uurs nooddienst staat voor u klaar. Bij spoed zijn we snel ter plaatse."
  },

  intro: {
    kicker: "Over DakHelder",
    tekst: "Bij DakHelder staan vakmanschap en betrouwbaarheid voorop. Heldere afspraken, netjes werken en een dak dat weer jaren waterdicht is. Daar gaat het ons om.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "34", tel: 34, label: "Reviews op Google" },
      { getal: "10 jaar", label: "Garantie, minimaal" },
      { getal: "24/7", label: "Nooddienst bij lekkage" }
    ]
  },

  diensten: {
    titel: "Van kleine reparatie tot nieuw dak",
    tekst: "Voor particulieren en bedrijven. We werken met hoogwaardige materialen, voor een duurzaam en waterdicht resultaat.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak-schoorsteen.jpg", pos: "50% 60%", tekst: "Nieuwe dakbedekking, reparatie of renovatie. Inclusief de afwerking: nieuwe trims en boeidelen.",
        punten: ["Nieuwe dakbedekking", "Trims en boeidelen", "Strak aangesloten op schoorsteen en gevel"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak-zonnepanelen.jpg", pos: "50% 50%", tekst: "Een pannendak dat aan vernieuwing toe is? We renoveren het, en isoleren meteen mee als u dat wilt.",
        punten: ["Pannendakrenovatie", "Met isolatie", "Vooraf duidelijk wat er gebeurt"] },
      { naam: "Daklekkage", soort: "Daklekkage / spoed", foto: "img/reparatie-aansluiting.jpg", pos: "50% 45%", tekst: "We sporen lekkages nauwkeurig op en herstellen ze vakkundig, om verdere schade te voorkomen.",
        punten: ["24-uurs nooddienst", "Oorzaak opsporen", "Vakkundig hersteld"] },
      { naam: "Inspectie en onderhoud", soort: "Dakinspectie", foto: "img/grind-dak.jpg", pos: "50% 55%", tekst: "Met tijdig onderhoud blijft uw dak in topconditie. We inspecteren uw dak en pakken kleine gebreken aan voordat ze groot worden.",
        punten: ["Dakinspectie", "Dakonderhoud", "Snelle dakreparaties"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk, op het dak",
    tekst: "Een greep uit onze klussen in en rond Utrecht.",
    items: [
      { foto: "img/plat-dak-lichtkoepel.jpg", label: "Plat dak", sub: "Met lichtkoepel en ontluchting", pos: "50% 60%" },
      { foto: "img/nieuwe-bedekking.jpg", label: "Dakbedekking", sub: "Aan het werk", pos: "50% 55%" },
      { foto: "img/grind-verwijderen.jpg", label: "Grinddak", sub: "Grind eraf, klaar voor de klus", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Helder, van offerte tot oplevering",
    tekst: "Geen verborgen kosten en geen verrassingen. U weet vooraf precies wat er gaat gebeuren.",
    stappen: [
      { naam: "Gratis offerte", tekst: "Vertel ons wat er aan de hand is. We komen kijken en maken een vrijblijvende offerte." },
      { naam: "Heldere afspraken", tekst: "Een duidelijke offerte, zonder verborgen kosten. U hoort vooraf wat we gaan doen." },
      { naam: "Vakwerk", tekst: "Onze dakdekkers werken snel en zorgvuldig, binnen de afgesproken tijd. We passen ons aan uw agenda aan." },
      { naam: "Netjes opgeleverd", tekst: "Alles wordt keurig opgeruimd. Het resultaat is precies zoals besproken." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "Minimaal 10 jaar garantie",
    tekst: "Op al onze werkzaamheden krijgt u minimaal tien jaar garantie. Zo weet u zeker dat uw dak waterdicht blijft.",
    lijst: {
      titel: "Waarom klanten voor DakHelder kiezen",
      punten: [
        "Hoogwaardige materialen, voor een duurzaam resultaat",
        "Opgeleide dakdekkers met jarenlange ervaring",
        "Flexibel: we passen ons aan uw agenda aan",
        "Snel ter plaatse bij spoed",
        "Voor particulieren en bedrijven",
        "Bereikbaar ma-za 09.00-20.00 uur"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Carlos en Jason de dakdekkers die bij ons kwamen, waren vakkundig en vriendelijk. Hun hebben het dak snel en netjes gerepareerd, met oog voor detail en duidelijk veel ervaring. De communicatie was helder en het werk werd binnen de afgesproken tijd afgerond.", naam: "Han C." },
      { tekst: "Zeer tevreden over de pannendakrenovatie met isolatie. We zijn vooraf duidelijk geïnformeerd over de werkzaamheden. Dakhelder levert uitstekend werk met een goede prijs-kwaliteitverhouding. … altijd welkom voor een kop koffie!", naam: "SML" },
      { tekst: "De offerte was helder, zonder verborgen kosten. Ons dak ziet er weer als nieuw uit en we voelen ons gerust nu alles weer goed waterdicht is. Ook na afloop werd alles netjes opgeruimd.", naam: "Mounia A." },
      { tekst: "Het werk op ons platte dak is snel en uiterst zorgvuldig uitgevoerd. De werkzaamheden zijn vakkundig en netjes afgerond, inclusief het plaatsen van nieuwe trims en boeidelen.", naam: "Laura M." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw betrouwbare dakdekker",
    rol: "DakHelder Nederland, dak-specialist uit Utrecht",
    tekst: [
      "Met jarenlange ervaring in de dakdekkersbranche helpen we u met alle dakwerkzaamheden: van een snelle reparatie tot een complete dakrenovatie.",
      "We werken met de beste materialen en gaan voor tevreden klanten bij elke klus. Voor particulieren en bedrijven, met een focus op kwaliteit en service."
    ],
    foto: "img/dakrand-avond.jpg", fotoPos: "50% 60%", fotoAlt: "Strak afgewerkte dakrand van een plat dak in de avondzon",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Vanuit Utrecht",
    tekst: "Ons kantoor zit aan de Raoul Wallenberglaan in Utrecht. Bel of mail gerust om te horen wat we voor u kunnen doen."
  },

  contact: {
    titel: "Vraag een gratis offerte aan",
    tekst: "Bel, mail of laat hieronder een bericht achter. We zijn bereikbaar van maandag tot en met zaterdag, 09.00 tot 20.00 uur. Bij spoed 24 uur per dag.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis offerte", "Daklekkage / spoed", "Plat dak", "Pannendak", "Dakinspectie", "Anders"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen bij de schoorsteen, of ons platte dak is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
