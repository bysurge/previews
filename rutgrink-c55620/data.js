// Hoveniersbedrijf Rutgrink (Lisse). Bron: rutgrinkhoveniers.nl (26-11-2026) + eigen Google-profiel (5,0 uit 5).
// Foto's: eigen projectfoto's van hun site (grootste versies). Geen stockfoto's. Geen 06/WhatsApp -> bellen/mailen.
window.SITE = {
  naam: "Hoveniersbedrijf Rutgrink",
  kortNaam: "Rutgrink",
  vak: "Hovenier",
  plaats: "Lisse",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 54,
  kleuren: { brand: "#24402a", accent: "#7a9a2e" },
  telefoon: "0252 21 73 86",
  telefoonIntl: "31252217386",
  telBel: "+31252217386",
  whatsapp: false,
  email: "info@rutgrinkhoveniers.nl",
  adres: ["Leidsevaart 13", "2161 AR Lisse"],
  kvk: "76265595",
  google: { score: "5,0", aantal: 5 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Sinds 1978 tuinontwerp, aanleg en onderhoud in de Bollenstreek, met uitlopers richting Den Haag en Haarlem.",

  hero: {
    regels: ["Al sinds 1978", "tuinen in de", "*Bollenstreek.*"],
    tekst: "Meedenken, ontwerpen, aanleggen en onderhouden. Uw wensen en onze vakkennis samen in een doordacht plan voor vele jaren tuinplezier.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "70% 50%", donker: true,
    fotoAlt: "Border met rudbeckia en siergrassen, met een molen op de achtergrond",
    punten: ["Vrijblijvend eerste gesprek", "VCA-gecertificeerd", "Erkend leerbedrijf"],
    notitie: { tekst: "Najaarssnoei en de grote winterbeurt" }
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Schuttingen en pergola's", "Vlonders", "Vijvers", "Beplanting", "Tuinonderhoud", "Boomverzorging"],

  intro: {
    kicker: "Hoveniersbedrijf Rutgrink",
    tekst: "Meer dan *groen alleen.* Van tuinontwerp tot grond- en straatwerk, groenvoorzieningen en boomverzorging: alles voor uw tuin, door één vast team.",
    stats: [
      { getal: "1978", label: "Opgericht in de Bollenstreek" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "VCA", label: "Veilig en vakkundig werken" },
      { getal: "SBB", label: "Erkend leerbedrijf" }
    ]
  },

  keurmerkenTitel: "Aangesloten en erkend",
  keurmerken: [
    { naam: "Vereniging Hoveniers en Groenvoorzieners", sub: "Lid van de VHG" },
    { naam: "VCA-gecertificeerd" },
    { naam: "SBB erkend leerbedrijf" }
  ],

  diensten: {
    titel: "Van eerste schets tot *onderhoud*",
    tekst: "Voor particulieren, bedrijven en instellingen. Kies waar u hulp bij wilt, dan maken we een duidelijke offerte zonder verrassingen.",
    items: [
      { naam: "Tuinontwerp", foto: "img/border.jpg", pos: "50% 90%", tekst: "We bespreken uw wensen en kijken naar de ligging, zon en schaduw en de buren. Daarna volgt een goed onderbouwd ontwerp of schetsvoorstel, meestal in meerdere varianten.",
        punten: ["Ontwerp of schetsvoorstel", "Meerdere varianten", "Voor grotere ontwerpen samen met Angela's Tuinen"] },
      { naam: "Bestrating", foto: "img/klinkerpad.jpg", pos: "50% 55%", tekst: "Terrassen, tuinpaden en opritten in klinkers, tegels of halfverharding. Een goede ondergrond bepaalt het resultaat. Materialen bekijkt u in het echt op onze locatie in Lisse.",
        punten: ["Klinkers en tegels", "Natuursteen en grind", "Materialen bekijken in Lisse"] },
      { naam: "Schuttingen, pergola's en vlonders", foto: "img/pergola-terras.jpg", pos: "50% 55%", tekst: "Een pergola geeft uw tuin een dak, een vlonder brengt u dichter bij het water. In hardhout, gewolmaniseerd hout of kunststof.",
        punten: ["Schuttingen", "Pergola's en overkappingen", "Vlonders en trappen"] },
      { naam: "Vijvers en grondkeringen", foto: "img/vijver.jpg", pos: "50% 60%", tekst: "Een vijver brengt leven in de tuin. Groot of klein, van beton of kunststof, inclusief grondwerk en beplanting. Hoogteverschillen lossen we op met grondkeringen en beschoeiingen.",
        punten: ["Nieuwe of bestaande vijver", "Grondkeringen", "Beschoeiingen aan het water"] },
      { naam: "Beplanting", foto: "img/terras.jpg", pos: "50% 60%", tekst: "We stellen een beplantingslijst op die bij uw wensen en grondsoort past, en bereiden de grond goed voor. Geen tijd om te sproeien? Dan adviseren we over een bevloeiingsinstallatie.",
        punten: ["Beplantingsplan", "Grondverbetering", "Bevloeiing en sfeerverlichting"] },
      { naam: "Tuinonderhoud en boomverzorging", foto: "img/pergola.jpg", pos: "50% 55%", tekst: "Wekelijks, maandelijks of alleen de grote winter- of voorjaarsbeurt. Op regie of op contract. Onze hoveniers weten precies hoe en wanneer iedere boom gesnoeid moet worden.",
        punten: ["Eenmalig of jaarrond", "Snoeien en hagen scheren", "Boomverzorging"] }
    ]
  },

  seizoenen: {
    kicker: "Onderhoud",
    titel: "Het juiste werk op het *juiste moment*",
    tekst: "Snoeien is groeien. Wij weten wanneer welke plant aandacht nodig heeft.",
    items: [
      { naam: "Lente", foto: "img/rond.jpg", titel: "De tuin *klaar voor de zomer*",
        tekst: "Met de voorjaarsbeurt en voorjaarssnoei begint de tuin goed aan het seizoen.",
        punten: ["Voorjaarsbeurt", "Voorjaarssnoei", "Nieuwe beplanting"] },
      { naam: "Zomer", foto: "img/tuinpad.jpg", pos: "50% 60%", titel: "Genieten, *wij houden het bij*",
        tekst: "Onderhoud wekelijks of maandelijks, zodat alles er de hele zomer verzorgd uitziet.",
        punten: ["Zomersnoei", "Hagen scheren", "Gras maaien"] },
      { naam: "Herfst", foto: "img/water.jpg", pos: "50% 55%", titel: "Snoeien voor *een mooi voorjaar*",
        tekst: "De najaarssnoei en het verzorgen van bomen, op het juiste moment en met het juiste gereedschap.",
        punten: ["Najaarssnoei", "Boomverzorging", "Vormsnoei"] },
      { naam: "Winter", foto: "img/bank.jpg", pos: "50% 60%", titel: "De grote *winterbeurt*",
        tekst: "Een rustig moment in de tuin, en het goede moment om plannen te maken voor een nieuwe tuin.",
        punten: ["Winterbeurt", "Tuinontwerp voor het voorjaar", "Vrijblijvend eerste gesprek"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Tuinen van *Rutgrink*",
    tekst: "Een greep uit tuinen die we aanlegden in Lisse, Sassenheim, Noordwijk, Voorhout en omgeving. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/vijver.jpg", label: "Vlonderpad langs de vijver", sub: "Vijver en vlonder" },
      { foto: "img/overkapping.jpg", label: "Overkapping met loungeplek", sub: "Aanleg" },
      { foto: "img/trap.jpg", label: "Hardhouten trap en vlonder", sub: "Grondkering" },
      { foto: "img/rondpad.jpg", label: "Pergola met rond pad", sub: "Pergola en bestrating" },
      { foto: "img/bank.jpg", label: "Bank op een steenkorf", sub: "Ontwerp en aanleg" },
      { foto: "img/waterschaal.jpg", label: "Waterschaal op een steenkorf", sub: "Water in de tuin" },
      { foto: "img/douche.jpg", label: "Schutting met buitendouche", sub: "Schutting" },
      { foto: "img/water.jpg", label: "Tuin aan het water", sub: "Aanleg" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Koen van Berge H.", tekst: "Deze vakmensen hebben onze hele tuin gedaan, overkapping, bestrating, afgraven en verhogen, grasmat en planten. Echt Top werk!!! Ze werken super netjes duidelijke afspraken en werken ook door! … We zijn super blij met dit bedrijf een echte aanrader!" },
      { naam: "Frank FL", tekst: "Fantastisch werk! Dankjewel, Roel en team!" },
      { naam: "Hugo B", tekst: "Super, vaklui en goed afspraken mee te maken." }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot stand*",
    tekst: "Een eerste oriënterend gesprek is bij ons altijd vrijblijvend.",
    stappen: [
      { naam: "Uw wensen op een rij", tekst: "Zet uw wensen op een lijstje en kijk gerust rond voor ideeën en een stijl die bij u past." },
      { naam: "Kennismaken", tekst: "U belt voor een afspraak. We bespreken uw wensen, geven advies en kijken wanneer het werk kan." },
      { naam: "Ontwerp en offerte", tekst: "U krijgt een vrijblijvende offerte met alle werkzaamheden en prijzen, meestal met meerdere ontwerpen." },
      { naam: "Aan de slag", tekst: "We nemen alles samen door en passen het zo nodig aan. Daarna gaan onze hoveniers aan het werk." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Al ruim veertig jaar *een begrip*",
    rol: "Rutgrink Hoveniers B.V., Lisse",
    tekst: [
      "Hoveniersbedrijf Rutgrink is opgericht in 1978 en al meer dan veertig jaar een begrip in de Bollenstreek. Met een team van vakbekwame hoveniers leggen we elk jaar veel mooie tuinen aan, renoveren we bestaande tuinen en verzorgen we het onderhoud voor particulieren en bedrijven.",
      "Liever zelf aan de slag? Dan maken we samen een stappenplan en werkt u onder vakkundige begeleiding in uw eigen tuin. Sinds 2020 zijn we onderdeel van de De Klerk Groep in Lisse."
    ],
    foto: "img/gabion.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde tuin met steenkorfbank, terras en gazon",
    knop: "Mail ons"
  },

  werkgebied: {
    titel: "De Bollenstreek en omgeving",
    tekst: "Vanuit Lisse werken we vooral in de Bollenstreek, met uitlopers richting Den Haag en Haarlem.",
    plaatsen: ["Lisse", "Sassenheim", "Voorhout", "Noordwijk", "Katwijk", "Warmond", "Nieuwe Wetering"]
  },

  faq: [
    { v: "Is het eerste gesprek vrijblijvend?", a: "Ja. We bespreken uw wensen, geven advies en sturen daarna een vrijblijvende offerte met alle werkzaamheden en prijzen." },
    { v: "Kan ik ook zelf meewerken in mijn tuin?", a: "Zeker. Samen stellen we een stappenplan op, zodat u met het juiste gereedschap en onder begeleiding zelf aan de slag kunt. Het vaktechnische werk doen onze hoveniers." },
    { v: "Kan ik alleen onderhoud afnemen?", a: "Ja. Eenmalig of jaarrond, wekelijks, maandelijks of alleen de grote winter- of voorjaarsbeurt. Op regie of op contract." },
    { v: "Waar kan ik bestratingsmateriaal bekijken?", a: "Op onze locatie aan de Leidsevaart in Lisse kunt u bestratingsmaterialen in het echt bekijken." }
  ],

  band: {
    foto: "img/border.jpg", fotoPos: "50% 65%",
    titel: "Zin in *jaren tuinplezier?*",
    tekst: "Bel of mail ons voor een vrijblijvend eerste gesprek. Maandag tot en met vrijdag van 07:30 tot 18:00, zaterdag van 08:00 tot 13:00."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft, dan nemen we contact met u op. Bellen kan ook: maandag tot en met vrijdag van 07:30 tot 18:00 en zaterdag van 08:00 tot 13:00.",
    onderwerpen: ["Tuinontwerp", "Bestrating", "Schuttingen, pergola's en vlonders", "Vijvers en grondkeringen", "Beplanting", "Tuinonderhoud"],
    voorbeeld: "Bijvoorbeeld: nieuwe achtertuin met terras, vlonder en beplanting"
  }
};
