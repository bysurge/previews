// HovenierF / Hoveniers- en klussenbedrijf F. Noorman (Groningen). Bron: hovenierf.nl (26-11-2026) + Google (5,0 uit 3).
// Foto's: alleen eigen foto's van hun site. Logo: hun ronde F-logo (wit deel donker gemaakt voor de lichte nav).
window.SITE = {
  naam: "HovenierF",
  kortNaam: "HovenierF",
  vak: "Hovenier",
  plaats: "Groningen",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-op-foto.png",
  logoWit: "img/logo-op-foto.png",
  logoVorm: "icoon",
  logoMetNaam: true,
  logoHoogte: 44,
  kleuren: { brand: "#24301f", accent: "#86a92a" },
  telefoon: "06 15 27 54 73",
  telefoonIntl: "31615275473",
  waTekst: "App Frank",
  email: "info@hovenierf.nl",
  adres: ["Warmoesstraat 28", "9724 JL Groningen"],
  kvk: "58290370",
  google: { score: "5,0", aantal: 3 },
  voetTekst: "Hoveniers- en klussenbedrijf F. Noorman uit Groningen. Tuinaanleg en -onderhoud, bestrating, schuttingen, tuinhuizen en vlonders. Aangesloten bij de VHG.",

  hero: {
    regels: ["Van ontwerp", "naar *uitvoering.*"],
    tekst: "Tuinaanleg en -onderhoud, bestrating, schuttingen, tuinhuizen en vlonders in Groningen en omgeving. Met vakmanschap, kennis en ouderwetse service.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%", donker: true,
    fotoAlt: "Houten vlonder langs het water met plantenbakken en hortensia's",
    punten: ["VHG-hovenier", "VCA-gecertificeerd"]
  },

  marquee: ["Tuinaanleg", "Tuinonderhoud", "Bestrating", "Schuttingen van hout", "Tuinhuizen", "Vlonders", "Tuinmetselwerk", "Ecologische tuinaanleg", "Inheemse beplanting", "Snoei- en rooiwerk"],

  intro: {
    kicker: "HovenierF",
    tekst: "Onze kracht is vakmanschap, kennis, passie en *ouderwetse service.* Frank komt altijd eerst langs, denkt met u mee en blijft ook na de oplevering bereikbaar.",
    stats: [
      { getal: "1951", label: "Kwekerij Noorman, de familie-oorsprong" },
      { getal: "5,0", label: "Op Google" },
      { getal: "VHG", label: "Aangesloten sinds 2017" },
      { getal: "Accu", label: "Al het gereedschap sinds 2023" }
    ]
  },

  keurmerkenTitel: "Aangesloten en gecertificeerd",
  keurmerken: [
    { naam: "VHG", sub: "Koninklijke Vereniging van Hoveniers en Groenvoorzieners", logo: "img/vhg.png" },
    { naam: "VCA", sub: "Veilig werken", logo: "img/vca.png" }
  ],

  diensten: {
    titel: "Alles voor uw tuin, *en daartussenin*",
    tekst: "Voor particulieren en bedrijven, klein en groot. Ook voor klussen in en om het huis kunt u bij ons terecht.",
    items: [
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Van een rommelige tuin naar een plek om te leven, ook ecologisch met inheemse beplanting. We hergebruiken graag wat er al ligt: stenen, hout, zand of aarde.",
        punten: ["Tuininrichting", "Ecologische tuinaanleg", "Hergebruik van materiaal"] },
      { naam: "Bestrating en tuinmetselwerk", foto: "img/bestrating.jpg", pos: "50% 55%", tekst: "Terrassen, paden en grote vlakken, strak gelegd inclusief grondwerk. Ook natuurstenen tuinmuren en trappen.",
        punten: ["Terrassen en paden", "Natuurstenen tuinmuren", "Leveren van bestrating"] },
      { naam: "Schuttingen, tuinhuizen en vlonders", foto: "img/tuinhuis.jpg", pos: "50% 60%", tekst: "Houten schuttingen, pergola's, vlonders en tuinhuizen, ook naar eigen ontwerp gebouwd. Wij kiezen voor FSC- of PEFC-hout.",
        punten: ["Tuinhuis op maat", "Vlonders en pergola's", "Schuttingen van hout"] },
      { naam: "Onderhoud, snoei- en rooiwerk", foto: "img/snoeien.jpg", pos: "50% 40%", tekst: "Vast tuinonderhoud, hagen snoeien, bomen rooien en snoeien en gras- en bosmaaien. Onkruid bestrijden we het liefst zonder gif.",
        punten: ["Bomen en hagen snoeien", "Bomen rooien", "Ook voor bedrijven"] },
      { naam: "Ontwerp en beplanting", foto: "img/beplanting.jpg", pos: "50% 55%", tekst: "Een schets, tekening of beplantingsplan, en het leveren en planten van de beplanting. Kwekerijplanten, bomen en heesters vallen onder het lage btw-tarief van 9%.",
        punten: ["Tuinontwerp of schets", "Beplantingsplan", "Leveren van beplanting"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Ons werk",
    titel: "Tuinen van *HovenierF*",
    tekst: "Een greep uit ons werk in Groningen en omgeving. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/hero.jpg", label: "Vlonder aan het water", sub: "Vlonder aanleg" },
      { foto: "img/tuinhuis2.jpg", label: "Luxe tuinhuis", sub: "Eigen ontwerp en bouw" },
      { foto: "img/aanleg.jpg", label: "Ook voor grote vlakken", sub: "Tuinaanleg" },
      { foto: "img/voorna.jpg", label: "Stadstuin, voor en na", sub: "Bestrating" },
      { foto: "img/ontwerp.jpg", label: "Terras met verhoogde borders", sub: "Ontwerp en aanleg" },
      { foto: "img/trap.jpg", label: "Bestrating, detail", sub: "Tuinmetselwerk" },
      { foto: "img/tuinhuis.jpg", label: "Tuinhuis met overkapping", sub: "Eigen ontwerp en bouw" }
    ]
  },

  werkwijze: {
    titel: "Zo werken *we*",
    tekst: "Geen twee projecten zijn hetzelfde. Ook tijdens de uitvoering blijven we met u in overleg.",
    stappen: [
      { naam: "Overleg op locatie", tekst: "We komen altijd eerst langs om het project in te schatten en uw wensen te horen." },
      { naam: "Offerte", tekst: "U krijgt een duidelijke, gedetailleerde offerte en de consumentenvoorwaarden van de VHG." },
      { naam: "Schets en uitvoering", tekst: "Een tekening of ruwe schets van het tuinplan. Na uw akkoord gaan we aan de slag." },
      { naam: "Oplevering en service", tekst: "Heeft u achteraf toch vragen of problemen, dan komen we langs om het in orde te maken." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "M. van der V.", tekst: "Wij zijn erg tevreden met de aanleg van onze tuin en het plaatsen van de schutting! Een vakman die weet wat hij doet en oog heeft voor detail en een goede afwerking." },
      { naam: "Heleen H.", tekst: "Heel plezierig samenwerken met Frank, hij is kundig en betrouwbaar en neemt z'n tijd om een top resultaat te bereiken!" },
      { naam: "Sipke B.", tekst: "Frank is vriendelijk, heeft verstand van zaken in en rond de tuin, draagt in een gesprek prima oplossingen aan en werkt het mooi uit." },
      { naam: "Yolanda, Groningen", tekst: "Sinds de aanleg is er geen steen verzakt in de tuin, het ligt er prachtig en heel netjes bij. Voor het (her)inrichten van je tuin kan ik Frank warm aanbevelen!" },
      { naam: "Hilda, Groningen", tekst: "Frank heeft actief meegedacht met de herinrichting van mijn achtertuin. … Frank kan goed luisteren, is flexibel en werkt netjes en secuur. Ik ben heel blij met het eindresultaat." }
    ]
  },

  over: {
    kicker: "Over Frank", navNaam: "Over ons",
    titel: "Groen zit *in de familie*",
    rol: "Frank Noorman, hovenier en eigenaar",
    tekst: [
      "In 1951 had de familie Noorman al een kwekerij. Frank zet die liefde voor het groen voort met zijn hoveniers- en klussenbedrijf in Groningen.",
      "We werken met materialen die het milieu zo min mogelijk belasten: FSC- of PEFC-hout, liefst geen bestrijdingsmiddelen, en sinds 2023 alleen nog accu- of elektrisch gereedschap.",
      "Sinds 2017 zijn we aangesloten bij de VHG. Mocht er toch iets niet in orde zijn, dan heeft u de garantie dat fouten en schade worden hersteld."
    ],
    foto: "img/kwekerij.jpg", fotoPos: "50% 40%", fotoAlt: "Kwekerij Noorman in 1951",
    knop: "Stuur Frank een bericht"
  },

  werkgebied: {
    titel: "Groningen en omgeving",
    tekst: "Vanuit Groningen werken we in de stad en de regio, voor particulieren en bedrijven.",
    plaatsen: ["Groningen", "en omgeving"]
  },

  faq: [
    { v: "Komen jullie eerst langs?", a: "Ja, altijd. We maken op locatie een inschatting van het project en overleggen daarna met u over de offerte." },
    { v: "Hoe lang is een offerte geldig?", a: "Maximaal 30 dagen, tenzij in de offerte anders staat. Een offerte is vrijblijvend; hij wordt pas bindend als u opdracht geeft." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja. Voor bedrijven, klein en groot, doen we graag op vaste basis het tuinonderhoud: maaien, hagen snoeien, bomen rooien of het parkeerterrein onkruidvrij maken zonder gif." },
    { v: "Doen jullie ook klussen in huis?", a: "Ja, naast hovenier zijn we ook klussenbedrijf. Vraag gerust wat er mogelijk is." }
  ],

  band: {
    foto: "img/tuinhuis2.jpg", fotoPos: "50% 55%",
    titel: "Uw tuin, *onze zorg*",
    tekst: "Neem contact op voor een aanvraag, een vraag of gewoon om even 'moi' te zeggen."
  },

  contact: {
    titel: "Even *'moi'* zeggen?",
    tekst: "Vertel kort wat u voor ogen heeft. Frank komt graag langs om het te bekijken.",
    onderwerpen: ["Tuinaanleg", "Bestrating", "Schutting, tuinhuis of vlonder", "Onderhoud en snoeien", "Ontwerp en beplanting", "Klus in huis"],
    voorbeeld: "Bijvoorbeeld: nieuwe houten schutting en het terras opnieuw bestraten"
  }
};
