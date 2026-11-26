// Tuinhulp Amsterdam (Dhr. S. van Oort). Bronnen: tuinhulpamsterdam.nl (teksten, logo) + Google-profiel (score, reviews, foto's).
// Foto's: alleen eigen Google-foto's (4 stuks); de huidige site gebruikt alleen stockfoto's, die zijn NIET overgenomen.
window.SITE = {
  naam: "Tuinhulp Amsterdam",
  kortNaam: "Tuinhulp",
  vak: "Tuinman",
  plaats: "Amsterdam",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#34401f", accent: "#a8863a" },
  telefoon: "06 34 02 19 22",
  telefoonIntl: "31634021922",
  waTekst: "Stuur een WhatsApp",
  email: "info@tuinhulpamsterdam.nl",
  kvk: "65334280",
  google: { score: "4,3", aantal: 12 },
  ctaTekst: "Vraag een afspraak aan",
  navCta: "Afspraak",
  voetTekst: "Tuinman en tuinhulp in Amsterdam, de Zaanstreek, Uithoorn, Hoofddorp en Amstelveen. Onderhoud, aanleg en uw tuin winterklaar.",

  hero: {
    regels: ["Uw tuin weer", "een plek om", "*van te genieten.*"],
    tekst: "Geen tijd of zin in de tuin, of lukt het niet meer zelf? Tuinhulp Amsterdam onderhoudt, ruimt op en legt aan. Eerlijk, hard werkend en met duidelijke afspraken vooraf.",
    foto: "img/hero.jpg", fotoPos: "50% 55%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 60%",
    donker: true,
    fotoAlt: "Een door Tuinhulp Amsterdam verzorgde achtertuin met terras en weelderige beplanting",
    punten: ["Afspraken vooraf helder", "Tuinafval nemen we mee"],
    notitie: { label: "Nu in de planning", tekst: "Tuinen winterklaar maken en bloembollen planten" }
  },

  marquee: ["Tuinonderhoud", "Snoeien", "Onkruid wieden", "Grasmaaien", "Tuinaanleg", "Straatwerk ophogen", "Schuttingen", "Winterklaar maken"],

  intro: {
    kicker: "Over Tuinhulp Amsterdam",
    tekst: "Een tuin vraagt onderhoud, maar u heeft er niet altijd *tijd of zin* in. Wij komen onze afspraken na en bespreken vooraf hoelang we bezig zijn. Eerlijk, hard werken en transparant.",
    stats: [
      { getal: "4,3", label: "Op Google, uit 12 reviews" },
      { getal: "Vooraf", label: "Weet u hoelang we bezig zijn" },
      { getal: "Ook", label: "Tuinaanleg en tuinrenovatie" },
      { getal: "Afval", label: "Voeren we netjes voor u af" }
    ]
  },

  diensten: {
    titel: "Alles voor een tuin die *er weer bij staat*",
    tekst: "Van een vaste onderhoudsbeurt tot een complete renovatie. Stuur een paar foto's van uw tuin, dan denken we met u mee.",
    knop: "Vraag een afspraak aan",
    items: [
      { naam: "Tuinonderhoud", foto: "img/border.jpg", pos: "50% 60%",
        tekst: "Wieden, snoeien, maaien en bemesten. Wij houden uw tuin bij, zodat u er alleen van hoeft te genieten.",
        punten: ["Onkruid wieden, ook tussen de tegels", "Struiken, hagen en klimop snoeien", "Grasmaaien, kanten steken en verticuteren", "Tuinafval afvoeren"] },
      { naam: "Tuinaanleg en renovatie", foto: "img/hortensia.jpg", pos: "50% 65%",
        tekst: "Een verwaarloosde tuin weer prachtig maken. We meten de tuin in, bespreken uw wensen en houden rekening met de zon.",
        punten: ["Tuinontwerp en plantadvies", "Terrassen en houten vlonders", "Graszoden leggen", "Grond verbeteren"] },
      { naam: "Straatwerk ophogen", foto: "img/border-straat.jpg", pos: "50% 70%",
        tekst: "Onze huizen staan op palen, onze tuinen niet. Verzakt uw terras? Wij hogen het netjes op en zorgen dat het water weer goed wegloopt.",
        punten: ["Verzakte terrassen en paden", "Afwatering die weer klopt", "Advies over een nieuw terras"] },
      { naam: "Schutting plaatsen", foto: "img/terras.jpg", pos: "15% 55%",
        tekst: "Stormschade of toe aan een nieuwe schutting? Wij plaatsen hem vakkundig en snel.",
        punten: ["Nieuwe schutting", "Vervangen na stormschade"] },
      { naam: "Tuin winterklaar maken", foto: "img/border.jpg", pos: "50% 30%",
        tekst: "Borders onkruidvrij, het gazon gemaaid en gevoed, bloembollen in de grond en kuipplanten beschermd tegen de vorst.",
        punten: ["Bloembollen planten", "Gazon maaien, bemesten en kalken", "Kuipplanten beschermen", "Najaarssnoei"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk",
    titel: "Tuinen die *weer opbloeien*",
    tekst: "Een paar tuinen in Amsterdam waar we aan werkten.",
    items: [
      { foto: "img/terras.jpg", label: "Achtertuin met terras", sub: "Aanleg en onderhoud", pos: "50% 55%" },
      { foto: "img/hortensia.jpg", label: "Voortuin vol hortensia's", sub: "Beplanting", pos: "50% 70%" },
      { foto: "img/border.jpg", label: "Border langs het pad", sub: "Onderhoud", pos: "50% 60%" },
      { foto: "img/border-straat.jpg", label: "Geveltuin", sub: "Beplanting en snoeiwerk", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo *werken we*",
    tekst: "Simpel en duidelijk. U weet vooraf waar u aan toe bent.",
    stappen: [
      { naam: "Stuur een paar foto's", tekst: "Via WhatsApp: een paar foto's van de tuin, het adres en uw wensen." },
      { naam: "Duidelijke afspraak", tekst: "We bespreken vooraf wat we doen en hoelang we denken bezig te zijn." },
      { naam: "Aan het werk", tekst: "We werken hard en netjes, en geven tips voor het onderhoud daarna." },
      { naam: "Opgeruimd achtergelaten", tekst: "Tuinafval voeren we af. Als u wilt, komen we vaker terug." }
    ]
  },

  reviews: {
    kicker: "Reviews",
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Maaike S.", sterren: 4, tekst: "Sean heeft van een verwaarloosde, saaie tuin, weer een fijne, gezellige plek gemaakt. … Allemaal in goed overleg, hij was snel met de offerte en aanpassingen, werkt netjes, heeft het huis netjes achtergelaten en hij was fijn in de omgang." },
      { naam: "Desiree B.", tekst: "Hij heeft meegedacht met het creatieve proces, tips gegeven voor langer termijn onderhoud, alles netjes gesnoeid en zal nu elk kwartaal langs komen. Zeer betaalbaar, laagdrempelig maar erg professioneel en betrokken." },
      { naam: "Bente v.d. A.", tekst: "Tuinhulp Amsterdam heeft ons geweldig geholpen met het aanleggen van een houten terras inclusief plantenbakken. Goede communicatie en een geweldig eindresultaat." },
      { naam: "Nikie K.", tekst: "Alles ziet er weer netjes uit en daarnaast hebben we samen kunnen nadenken over wat er in het volgende seizoen zou kunnen worden gedaan. … Echt superleuk en goeie service, kan het zeker aanraden!" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Een tuinman *die meedenkt*",
    rol: "Dhr. S. van Oort, Tuinhulp Amsterdam",
    tekst: [
      "Tuinhulp Amsterdam helpt mensen die geen tijd of zin hebben in hun tuin, of die het door lichamelijke beperkingen niet meer zelf kunnen.",
      "We komen onze afspraken na, werken hard en zijn eerlijk over wat iets kost en hoelang het duurt. En we denken graag mee: over de grond, de zon en wat er volgend seizoen kan."
    ],
    foto: "img/border-straat.jpg", fotoPos: "50% 55%", fotoAlt: "Geveltuin met hortensia's langs de stoep",
    knop: "Stuur ons een WhatsApp"
  },

  werkgebied: {
    titel: "Amsterdam en *omgeving*",
    tekst: "Buiten deze plaatsen kan ook, dan rekenen we reiskosten.",
    plaatsen: ["Amsterdam", "Zaanstreek", "Uithoorn", "Hoofddorp", "Amstelveen"]
  },

  faq: [
    { v: "Hoe vraag ik een afspraak aan?", a: "Het snelst via WhatsApp: stuur een paar foto's van uw tuin, het adres en wat u wilt laten doen. Mailen of het formulier invullen kan ook." },
    { v: "Komen jullie ook buiten Amsterdam?", a: "Ja. We werken in Amsterdam, de Zaanstreek, Uithoorn, Hoofddorp en Amstelveen. Daarbuiten kan ook, dan rekenen we reiskosten." },
    { v: "Moeten alle bladeren uit de tuin?", a: "Niet per se. Onder dode bladeren leven veel insecten en in borders en onder hagen beschermen ze de wortels in de winter. Van het gazon halen we ze wel weg." },
    { v: "Kan ik zelf bloembollen kopen?", a: "Zeker. Wij kunnen ze voor u aanschaffen (het liefst biologisch), maar u mag ze ook zelf kopen. Dan planten wij ze voor u in." },
    { v: "Do you speak English?", a: "Yes. Send us a few photos of your garden, the address and what you would like done, and we will help you." }
  ],

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    titel: "Zin in een tuin *zonder zorgen?*",
    tekst: "Stuur een paar foto's van uw tuin via WhatsApp. We laten snel weten wat we voor u kunnen doen."
  },

  contact: {
    titel: "Vraag een *afspraak* aan",
    formTitel: "Afspraak aanvragen",
    tekst: "Vertel kort wat er in uw tuin moet gebeuren. Of stuur direct een WhatsApp met een paar foto's, dat werkt het snelst.",
    onderwerpen: ["Tuinonderhoud", "Tuinaanleg of renovatie", "Straatwerk ophogen", "Schutting plaatsen", "Winterklaar maken", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin van 6 bij 8 meter, borders wieden en de heg snoeien"
  }
};
