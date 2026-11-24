// Broeren Dakwerken (Cuijk). Bron: broerendak.wixsite.com/broerendakwerken (één pagina) + visitekaartje op die site + Google (4,9 / 34). Foto's: Google-profiel + eigen site. Zie content.md.
window.SITE = {
  naam: "Broeren Dakwerken",
  kortNaam: "Broeren",
  plaats: "Cuijk",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 46,
  kleuren: { brand: "#16191d", accent: "#d9863a" },
  telefoon: "06 39 05 56 77",
  telefoonIntl: "31639055677",
  email: "broeren_dak@hotmail.com",
  adres: ["Rembrandtstraat 26", "5431 VD Cuijk"],
  google: { score: "4,9", aantal: "34" },
  ctaTekst: "Gratis offerte",
  navCta: "Offerte",
  waTekst: "Stuur een app",
  voetTekst: "Dakdekker met meer dan 20 jaar ervaring. Platte daken, isolatie, nieuwbouw, renovatie, onderhoud en reparaties.",

  hero: {
    regels: ["Platte daken,", "strak gelegd."],
    tekst: "Dakdekker met meer dan 20 jaar ervaring, van grote bouwprojecten tot kleine reparaties. Vraag gerust een gratis offerte aan.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%",
    fotoAlt: "Twee dakdekkers van Broeren aan het werk op een plat garagedak",
    donker: true,
    punten: ["Meer dan 20 jaar ervaring", "Gratis offerte", "4,9 op Google"]
  },

  marquee: ["Platte daken", "Bitumen", "Isolatie", "Nieuwbouw", "Renovatie", "Onderhoud", "Reparaties", "Dakinspectie"],

  spoed: {
    titel: "Lekkage aan uw dak?",
    tekst: "Bel of stuur een foto via WhatsApp. We komen snel kijken en vertellen eerlijk wat er nodig is."
  },

  intro: {
    kicker: "Broeren Dakwerken",
    tekst: "Al meer dan 20 jaar op het dak, van grootschalige bouwprojecten tot een lekkende schuur. Ik doe mijn uiterste best om ervoor te zorgen dat elke klant volledig tevreden is.",
    stats: [
      { getal: "20+", tel: 20, label: "Jaar ervaring" },
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "34", tel: 34, label: "Reviews op Google" },
      { getal: "Gratis", label: "Offerte" }
    ]
  },

  diensten: {
    titel: "Alles voor uw platte dak",
    tekst: "Een nieuw dak, betere isolatie of een lekkage die opgelost moet worden. Groot of klein, het krijgt dezelfde aandacht.",
    items: [
      { naam: "Aanleg platte daken", soort: "Plat dak", foto: "img/bitumen-aanleg.jpg", pos: "50% 55%", tekst: "Nieuwe bitumen dakbedekking, vakkundig gebrand en strak afgewerkt. Voor woningen, aanbouwen, garages en schuren.",
        punten: ["Bitumen dakbedekking", "Strakke afwerknaden", "Nieuwbouw en aanbouw"] },
      { naam: "Isolatie", soort: "Isolatie", foto: "img/isolatie.jpg", pos: "50% 60%", tekst: "Bij een nieuw of vernieuwd dak is het hét moment om te isoleren. Dat scheelt warmte in de winter en stookkosten.",
        punten: ["Isolatie onder de dakbedekking", "Bij nieuwbouw en renovatie"] },
      { naam: "Renovatie en onderhoud", soort: "Renovatie", foto: "img/plat-dak-strak.jpg", pos: "50% 50%", tekst: "Oude dakbedekking eraf, nieuwe lagen erop. Ook aansluitingen en loodslabben worden netjes opnieuw gedaan.",
        punten: ["Oude dakbedekking verwijderen", "Loodslabben ingefreesd en afgevoegd", "Onderhoud en dakinspectie"] },
      { naam: "Reparaties en lekkage", soort: "Lekkage / reparatie", foto: "img/schuurdak.jpg", pos: "50% 50%", tekst: "Een lekkend schuur- of garagedak? We zoeken uit waar het water vandaan komt en lossen het vakkundig op.",
        punten: ["Snel ter plaatse", "Eerlijke prijsafspraak vooraf"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Enkele voorbeelden van ons werk",
    tekst: "Renovatie en nieuwbouw, van een groot plat dak tot een garage of aanbouw.",
    items: [
      { foto: "img/groot-dak.jpg", label: "Groot plat dak", sub: "Bitumen dakbedekking", pos: "50% 60%" },
      { foto: "img/nieuwbouw.jpg", label: "Nieuwbouw", sub: "Dakrand en dakbedekking", pos: "50% 50%" },
      { foto: "img/licht-dak.jpg", label: "Plat dak", sub: "Lichte toplaag, strak gelegd", pos: "50% 60%" },
      { foto: "img/site-dak.jpg", label: "Renovatie", sub: "Nieuwe dakbedekking", pos: "50% 50%" },
      { foto: "img/site-rollen.jpg", label: "Aan het werk", sub: "Nieuwe rollen bitumen", pos: "50% 50%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "In slechts twee dagen hebben zij de oude dakbedekking volledig verwijderd en vervolgens twee nieuwe lagen bitumen vakkundig aangebracht. … De medewerkers werken netjes, komen op tijd, laten alles schoon achter en communiceren duidelijk.", naam: "Jeroen van Schlechter" },
      { tekst: "Mijn vriend en ik hadden lekkage aan het garagedak … Ondanks dat het voor hen een stukje rijden was, stonden ze al snel bij ons op de stoep! … Binnen twee dagen hebben wij weer een superstrak en mooi dak!", naam: "Kimberly V." },
      { tekst: "Reageerde snel en kwam snel langs voor advies en later de prijsopgave. Nette prijs en voelde meteen goed en eerlijk. Vakkundig, werk netjes en mooie afwerknaden.", naam: "Tom S." },
      { tekst: "Goed en betrouwbaar, we zijn heel blij met zowel het bitume op de nieuwe aanbouw als op de bestaande serre die ze hebben aangebracht. Ook alle loodslabbe netjes opnieuw ingefreesd en afgevoegd.", naam: "Tom van L." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Meer dan 20 jaar op het dak",
    rol: "Broeren Dakwerken, Cuijk",
    tekst: [
      "Broeren Dakwerken heeft meer dan 20 jaar ervaring, van grootschalige bouwprojecten tot kleine reparatiewerkzaamheden. Platte daken zijn ons vak: aanleggen, isoleren, renoveren en repareren.",
      "Klanten noemen ons netjes, op tijd en duidelijk. U hoort vooraf wat er moet gebeuren en wat het kost, en we laten alles schoon achter."
    ],
    foto: "img/bus.jpg", fotoPos: "60% 55%", fotoAlt: "Bus van Broeren Dakwerken voor een woning",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Tijd voor een nieuw dak?",
    tekst: "Vraag een gratis offerte aan. We komen kijken en vertellen eerlijk wat er nodig is."
  },

  contact: {
    titel: "Vraag een gratis offerte aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp met een foto van uw dak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak", "Isolatie", "Nieuwbouw", "Renovatie", "Lekkage / reparatie", "Dakinspectie"],
    voorbeeld: "Bijvoorbeeld: het dak van de garage lekt, of de dakbedekking van de aanbouw is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
