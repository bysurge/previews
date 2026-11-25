// Van Ojen Hoveniers (Nuenen). Bron: vanojenhoveniers.nl (25-11-2026) + eigen Google-profiel (4,5 uit 10).
// Foto's: allemaal van hun eigen site (projectfoto's 900px). Geen logo-bestand op hun site gevonden: eenvoudig blad-icoon + naam (zoals molenaar-buiten).
// Voornaam (Frank) staat alleen in Google-reviews, niet op de site: niet gebruikt. Reviews letterlijk van Google.
window.SITE = {
  naam: "Van Ojen Hoveniers",
  vak: "Hovenier",
  plaats: "Nuenen",
  titelExtra: "Hovenier in Nuenen en omgeving",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  kleuren: { brand: "#1f4a36", accent: "#c27a2c" },
  telefoon: "06 28 97 77 50",
  telefoonIntl: "31628977750",
  waTekst: "WhatsApp",
  email: "info@vanojenhoveniers.nl",
  adres: ["Geldropsedijk 18", "5672 AC Nuenen"],
  google: { score: "4,5", aantal: 10 },
  voetTekst: "Tuinontwerp, tuinaanleg, tuinonderhoud, sierbestrating en kunstgras in Nuenen en omgeving. Voor particulieren en bedrijven.",

  hero: {
    regels: ["Van ontwerp", "tot onderhoud,", "*van a tot z.*"],
    tekst: "Ervaren en veelzijdig hoveniersbedrijf uit Nuenen. Voor een balkon of tussenwoning, een villatuin of een grote bedrijfstuin.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "60% 50%", donker: true,
    fotoAlt: "Villatuin met strak geknipte hagen en gazon",
    punten: ["Vrijblijvend kennismaken", "Officieel dealer van Tiger Turf"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Sierbestrating", "Kunstgras", "Tuinafscheidingen", "Tuinverlichting", "Tuinhuisjes op maat"],

  intro: {
    kicker: "Van Ojen Hoveniers",
    tekst: "Liefde voor uw tuin, groot of klein. We verzorgen *het hele traject,* van het eerste ontwerp tot de uitvoering, en desgewenst het onderhoud daarna.",
    stats: [
      { getal: "4,5", label: "Gemiddeld op Google" },
      { getal: "A tot Z", label: "Ontwerp, aanleg en onderhoud" },
      { getal: "Tiger Turf", label: "Officieel dealer kunstgras" },
      { getal: "Gratis", label: "Kennismakingsgesprek" }
    ]
  },

  diensten: {
    titel: "Alles voor uw tuin, *uit één hand*",
    tekst: "Particulier of zakelijk, klein of groot. Kies waar u hulp bij wilt, dan komen we graag bij u aan de tuintafel zitten.",
    items: [
      { naam: "Tuinontwerp", foto: "img/bedrijfstuin.jpg", tekst: "Samen inventariseren we uw wensen en kijken we naar hoogteverschillen, zon en schaduw en planten die moeten blijven. Daarna maken onze tuinarchitecten een mooi ontwerp.",
        punten: ["Vrijblijvend gesprek", "Zon en schaduw", "Ontwerp op maat"] },
      { naam: "Tuinaanleg", foto: "img/bestrating.jpg", tekst: "Een renovatie of een compleet nieuwe tuin, modern of juist rustiek. Ook een kleine verandering geeft uw tuin een heel ander aanzien.",
        punten: ["Nieuwe aanleg", "Renovatie", "Terrassen"] },
      { naam: "Tuinonderhoud", foto: "img/hagen.jpg", pos: "50% 55%", tekst: "Onkruid wieden, hagen en bomen snoeien, gras maaien. Op een moment dat het u uitkomt, of met een vast onderhoudscontract.",
        punten: ["Particulier", "Zakelijk", "Onderhoudscontract"] },
      { naam: "Sierbestrating", foto: "img/kunstgras.jpg", pos: "40% 60%", tekst: "Talloze sierbestratingen, steensoorten en patronen voor uw tuin, terras of oprit. Van ontwerp tot uitvoering.",
        punten: ["Terrassen", "Opritten", "Patronen op maat"] },
      { naam: "Kunstgras", foto: "img/minigolf.jpg", pos: "50% 60%", tekst: "Gespecialiseerd in aanleg en onderhoud van kunstgras. Voor tuin, balkon, rond zwembad of speeltoestellen, en rond kantoorpanden.",
        punten: ["Officieel dealer Tiger Turf", "Tuin en balkon", "Zakelijk"] }
    ],
    meer: [
      { naam: "Tuinafscheidingen", tekst: "Schuttingen en afscheidingen die passen bij uw tuin." },
      { naam: "Tuinverlichting en elektra", tekst: "Sfeervol licht, zodat u ook 's avonds van uw tuin geniet." },
      { naam: "Tuinhuisjes en speeltoestellen", tekst: "Standaard of op maat gemaakt." }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Recente *projecten*",
    tekst: "Van villatuin tot minigolfbaan: een greep uit ons werk.",
    items: [
      { foto: "img/voortuin.jpg", label: "Strak gesnoeide bolvormen", sub: "Onderhoud", pos: "50% 60%" },
      { foto: "img/onderhoud.jpg", label: "Stadstuin met kunstgras", sub: "Aanleg" },
      { foto: "img/tuin-kunstgras.jpg", label: "Entree met leibomen", sub: "Aanleg" },
      { foto: "img/ontwerp.jpg", label: "Haag langs de oprit", sub: "Onderhoud" },
      { foto: "img/aanleg.jpg", label: "Minigolfbaan", sub: "Zakelijk" }
    ]
  },

  werkwijze: {
    titel: "Zo pakken we het *aan*",
    tekst: "Professioneel, van a tot z. En wilt u zelf meedoen? Ook dat kan.",
    stappen: [
      { naam: "Kennismaken", tekst: "Een vrijblijvend gesprek bij u aan de tuintafel." },
      { naam: "Ontwerp", tekst: "We bekijken de mogelijkheden van uw tuin en maken een passend ontwerp." },
      { naam: "Uitvoering", tekst: "Onze vakmensen leggen alles aan met het juiste materieel." },
      { naam: "Onderhoud", tekst: "Desgewenst stellen we samen een periodiek onderhoudscontract op." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Tammy", tekst: "We hebben het all-in laten leggen door hem en binnen een dag was het af. Frank werkt hard, is proffesioneel en heeft echt vakwerk geleverd. …" },
      { naam: "Rosanne W.", tekst: "Heel tevreden over onze tuinaanleg! De heren hebben snel en netjes gewerkt. Heel vriendelijk bovendien. We kunnen deze hovenier zeker aanbevelen." },
      { naam: "Miriam", tekst: "Betrouwbaar, deskundig, zorgvuldig en heldere en snelle communicatie. Absoluut aanrader!" },
      { naam: "Cor van E.", tekst: "Fijn bedrijf. Frank heeft met zijn ideeën voor een mooi ontwerp van de tuin gezorgd. Aanrader." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Uw *tuinspecialist* uit Nuenen",
    rol: "Van Ojen Hoveniers",
    tekst: [
      "Van Ojen Hoveniers is een ervaren en veelzijdig hoveniersbedrijf uit Nuenen. Kwaliteit vinden we erg belangrijk, en we geven graag advies.",
      "We houden van grote projecten, maar gaan net zo graag aan de slag met balkonaankleding of de voor- of achtertuin van een tussenwoning."
    ],
    foto: "img/eigenaar.jpg", fotoPos: "50% 15%", fotoAlt: "Van Ojen Hoveniers in een tuin met verbena",
    knop: "Stuur een WhatsApp"
  },

  werkgebied: {
    titel: "Nuenen en omgeving",
    tekst: "Vanuit Nuenen werken we in de regio, voor particulieren en bedrijven, zoals onze projecten in Nuenen en Helmond. Twijfelt u? Vraag het gerust."
  },

  faq: [
    { v: "Is een eerste gesprek vrijblijvend?", a: "Ja. Een kennismakingsgesprek is vrijblijvend; we komen graag bij u aan de tuintafel zitten." },
    { v: "Doen jullie ook kleine tuinen?", a: "Zeker. Van balkonaankleding tot de tuin van een tussenwoning gaan we graag aan de slag." },
    { v: "Kan ik een vast onderhoudscontract afsluiten?", a: "Ja, zowel particulier als zakelijk kunnen we op contractbasis afspraken maken over periodiek onderhoud." },
    { v: "Welk kunstgras leggen jullie?", a: "Van Ojen Hoveniers is officieel dealer van Tiger Turf en heeft voor elke toepassing een passende soort, met een gegarandeerd goede installatie." }
  ],

  band: {
    foto: "img/graszoden.jpg", fotoPos: "50% 60%",
    titel: "Van uw tuin een *paradijs* maken?",
    tekst: "Mail of bel voor meer informatie of een vrijblijvend kennismakingsgesprek."
  },

  contact: {
    titel: "Maak een *vrijblijvende* afspraak",
    tekst: "Graag helpen we u om van uw tuin een paradijs te maken. Mail, bel of app ons, of laat uw gegevens achter. We nemen zo snel mogelijk contact op.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Sierbestrating", "Kunstgras"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw aanleggen met een terras en kunstgras"
  }
};
