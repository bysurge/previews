// HS Dakdekker (Alkmaar). Bron: hsdakdekker.nl + Google (4,6 / 12). Foto's: Google-profiel + 1 eigen foto van de site (de rest van hun site is stock). Zie content.md.
window.SITE = {
  naam: "HS Dakdekker",
  plaats: "Alkmaar",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoHoogte: 40,
  kleuren: { brand: "#1f1b19", accent: "#ef7a3c" },
  telefoon: "072 785 3033",
  telBel: "+31727853033",
  telefoonIntl: "31640905489",
  telefoon2: "06 40 90 54 89",
  waTekst: "WhatsApp",
  waContact: "Stuur een appje of foto",
  email: "klantenservice@hsdakdekker.nl",
  adres: ["Karel van Manderstraat 42", "1813 TZ Alkmaar"],
  kvk: "78092019",
  google: { score: "4,6", aantal: "12" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  voetTekst: "Dakdekker uit Alkmaar, al meer dan 10 jaar. Plat dak of pannendak, reparatie of complete renovatie. Bij lekkage 24/7 bereikbaar.",

  hero: {
    regels: ["Uw dak,", "in goede handen."],
    tekst: "Plat dak of pannendak, kleine reparatie of complete renovatie: wij zijn snel bij u op locatie in Alkmaar en omgeving, en u weet altijd waar u aan toe bent.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 28%", fotoPosMobiel: "40% 40%",
    fotoAlt: "Dakdekker van HS Dakdekker legt nieuwe pannen op een woning met steiger",
    donker: true,
    punten: ["Gratis dakinspectie", "24/7 bereikbaar bij lekkage", "Meer dan 10 jaar ervaring"]
  },

  marquee: ["Daklekkage", "Lekdetectie", "Pannendaken", "Bitumen", "Nokvorsten", "Dakisolatie", "Dakrenovatie", "Dakkapellen", "Dakonderhoud", "Dakinspectie"],

  spoed: {
    titel: "Last van daklekkage?",
    tekst: "We zijn 24 uur per dag, 7 dagen per week bereikbaar en snel bij u om het lek op te sporen en te repareren."
  },

  intro: {
    kicker: "HS Dakdekker",
    tekst: "Van een kleine reparatie tot een compleet nieuw dak met isolatie: geen klus is ons te klein of te groot. U krijgt eerlijk advies, en we houden u van begin tot eind op de hoogte.",
    stats: [
      { getal: "10+ jaar", label: "Ervaring in dakwerk" },
      { getal: "24/7", label: "Bereikbaar bij lekkage" },
      { getal: "4,6", label: "Gemiddeld op Google" },
      { getal: "Gratis", label: "Dakinspectie en offerte" }
    ]
  },

  diensten: {
    titel: "Alles voor uw dak",
    tekst: "Voor particulieren en bedrijven, op platte en schuine daken.",
    items: [
      { naam: "Daklekkage en lekdetectie", soort: "Lekkage / spoed", foto: "img/goot-detail.jpg", pos: "60% 50%",
        tekst: "We sporen de bron van het lek op, ook als die niet zit waar het druppelt, en repareren het meteen. Op platte daken en pannendaken.",
        punten: ["24/7 bereikbaar", "Snel op locatie", "Ook bij storm- en waterschade"] },
      { naam: "Pannendak vervangen", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 50%",
        tekst: "Een van onze favoriete klussen. We vervangen uw oude dak door een nieuw, duurzaam en waterdicht pannendak.",
        punten: ["Isolatie meteen mee", "Ventilatie of dakramen erbij", "Nokvorsten vastzetten of vervangen"] },
      { naam: "Bitumen dakbedekking", soort: "Plat dak / bitumen", foto: "img/bitumen.jpg", pos: "50% 60%",
        tekst: "Voor veranda's, dakkapellen, aanbouwen, schuren en garages. Sterk, budgetvriendelijk en over bijna elke ondergrond te leggen.",
        punten: ["Reparatie of complete vervanging", "Woonhuis en bedrijfspand", "Ook kleine reparaties"] },
      { naam: "Dak vernieuwen en isoleren", soort: "Dakrenovatie / isolatie", foto: "img/vernieuwen.jpg", pos: "50% 45%",
        tekst: "Is uw dak aan vervanging toe of net een huis gekocht? We vernieuwen het dak, zo nodig met de constructie, en isoleren het goed.",
        punten: ["Eerst gratis dakinspectie", "Advies over isolatiemateriaal", "Lagere energierekening"] }
    ],
    meer: [
      { naam: "Nokvorsten", tekst: "Losse of versleten nokvorsten vastzetten of vernieuwen, voordat het gaat lekken." },
      { naam: "Dakkapel renovatie", tekst: "Renoveren is vaak goedkoper dan vervangen: goede onderdelen blijven gewoon zitten." },
      { naam: "Dakonderhoud", tekst: "Kleine punten direct hersteld, zodat er later geen grote schade ontstaat." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Zo laten we uw dak achter",
    tekst: "Nieuwe folie, panlatten en pannen, strak en waterdicht.",
    items: [
      { foto: "img/nok-folie.jpg", label: "Pannendak vernieuwd", sub: "Nieuwe folie en latten tot aan de nok", pos: "50% 55%" },
      { foto: "img/pannen-latten.jpg", label: "Nieuwe pannen", sub: "Strak gelegd op nieuwe panlatten", pos: "50% 40%" },
      { foto: "img/plat-zonnepanelen.jpg", label: "Plat dak", sub: "Met zonnepanelen", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan pas een offerte",
    tekst: "Van begin tot eind denken we met u mee en houden we u op de hoogte.",
    stappen: [
      { naam: "Gratis dakinspectie", tekst: "We klimmen uw dak op en onderzoeken het nauwkeurig: constructie, dakbedekking, naden, goten en afvoer." },
      { naam: "Eerlijk advies", tekst: "U hoort precies wat er wel en niet mankeert, en krijgt vrijblijvend advies over pannen, kleur en daksysteem." },
      { naam: "Kleine punten direct", tekst: "Kleine reparaties doen we meteen. Grotere klussen pas na overleg, met een duidelijke offerte." },
      { naam: "Op tijd en binnen budget", tekst: "We garanderen dat we uw dakproject op tijd en binnen budget afronden." }
    ]
  },

  garantie: {
    kicker: "Zekerheid", navNaam: "Garantie",
    titel: "100% tevredenheids­garantie",
    tekst: "Ons werk is gegarandeerd, en we zijn volledig verzekerd voor al ons werk. Zo weet u zeker dat uw investering veilig is.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Meer dan 10 jaar ervaring in dakwerk",
        "Volledig verzekerd voor al ons werk",
        "Gratis dakinspectie en offerte",
        "24/7 bereikbaar bij daklekkage",
        "Op tijd en binnen budget afgerond"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Zeer tevreden over de werkzaamheden! Vanaf het eerste contact was de communicatie duidelijk en professioneel. De dakdekkers waren vriendelijk, werkten netjes en hebben het dak vakkundig aangepakt. … Zeker een aanrader als je op zoek bent naar een betrouwbare en professionele dakdekker!", naam: "Gezim R." },
      { tekst: "Zeer tevreden over deze dakdekker. Hij heeft mijn dak gebrand, werkte snel en vakkundig. Alles netjes uitgevoerd en sinds de werkzaamheden geen last meer van lekkages. Zeker een aanrader!", naam: "Astrid van der S." },
      { tekst: "Henrik heeft ons goed geïnformeerd en geholpen waar de lekkage aanwezig was, en hoe het op te lossen was.", naam: "Gorkem" },
      { tekst: "Is bij ons langsgekomen om een inspectie te doen en heeft ons verteld wat er aan de hand was met het dak. Topper!", naam: "Deron C." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Dé lokale dakspecialist",
    rol: "Gevestigd in Alkmaar, al meer dan 10 jaar aan het werk",
    tekst: [
      "Een dakdekker kiezen is niet makkelijk. Daarom krijgt u van ons altijd vrijblijvend advies, en uitleg over wat er écht aan uw dak moet gebeuren.",
      "We zijn dagelijks bezig om daken in de regio Alkmaar betaalbaar te verbeteren, bij particulieren en bedrijven. Geen opdracht is ons te klein of te groot."
    ],
    foto: "img/bus.jpg", fotoPos: "30% 90%", fotoAlt: "De bus van HS Dakdekker bij een klus",
    knop: "Stuur ons een appje"
  },

  werkgebied: {
    titel: "Alkmaar en omgeving",
    tekst: "Vanuit Alkmaar zijn we snel bij u op locatie in de regio. En voor uw dak werken we ook door heel Nederland.",
    plaatsen: ["Alkmaar", "Heiloo", "Sint Pancras", "Langedijk", "Heerhugowaard", "Castricum", "Schagen", "Heemskerk", "Beverwijk", "Zaanstad"]
  },

  faq: [
    { v: "Wat kost een dakinspectie?", a: "Niets. We komen gratis langs, klimmen uw dak op en vertellen u precies wat er wel en niet mankeert." },
    { v: "Hoe vaak moet ik mijn dak laten inspecteren?", a: "Ons advies is twee keer per jaar. Zo komen gebreken vroeg aan het licht en gaat uw dak een stuk langer mee." },
    { v: "Ik heb een lekkage, hoe snel kunnen jullie komen?", a: "We zijn 24/7 bereikbaar en snel bij u op locatie. Bel ons, of stuur een appje met een foto van de lekkage." },
    { v: "Is bitumen geschikt voor mijn dak?", a: "Voor platte daken zoals een veranda, dakkapel, aanbouw, schuur of garage is bitumen een sterke en budgetvriendelijke keuze." }
  ],

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Laat een bericht achter, bel of stuur een appje. Uw bericht wordt direct in behandeling genomen.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis dakinspectie", "Lekkage / spoed", "Pannendak", "Plat dak / bitumen", "Dakrenovatie / isolatie", "Nokvorsten", "Dakkapel"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen bij het dakraam, of de nokvorsten zitten los",
    belofte: "Uw bericht wordt direct in behandeling genomen."
  }
};
