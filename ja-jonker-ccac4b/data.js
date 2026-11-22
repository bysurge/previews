// Schilders- en onderhoudsbedrijf J.A. Jonker (Rotterdam). Sjabloon v2. Bron: jajonker.nl (teksten, referenties, foto's, logo).
// Geen reviews/score op hun site: geen reviewsectie. Alleen vast nummer: whatsapp:false. KvK uit hun privacy-pdf.
// Alle eigen foto's zijn 1024x433: hero = Laurenskerk boven, onderaan uitgelopen naar donker (img/hero.jpg, 1024x720).
window.SITE = {
  naam: "Schilders- en onderhoudsbedrijf J.A. Jonker",
  kortNaam: "J.A. Jonker",
  plaats: "Rotterdam",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  kleuren: { brand: "#13304f", accent: "#e8c650" },
  telefoon: "010 286 9134",
  telefoonIntl: "31102869134",
  telBel: "+31102869134",
  whatsapp: false,
  email: "info@jajonker.nl",
  adres: ["Droogbloem 43", "3068 AW Rotterdam"],
  kvk: "27166499",
  navCta: "Offerte",
  voetTekst: "Binnen- en buitenschilderwerk, houtrotreparatie en wand- en vloerafwerking. Voor particulieren, VvE's, bedrijven, scholen en aannemers in Rotterdam en omstreken.",

  hero: {
    regels: ["Vakmanschap", "met passie", "voor het vak."],
    badge: "Schilder van het Stadhuis en de Laurenskerk",
    tekst: "Binnen- en buitenschilderwerk, houtrotreparatie en wand- en vloerafwerking in Rotterdam en omstreken. Met garantie op schrift.",
    foto: "img/hero.jpg", fotoPos: "56% 0%",
    fotoAlt: "De Laurenskerk in Rotterdam met een hoogwerker, tijdens het schilderwerk"
  },

  marquee: ["Stadhuis Rotterdam", "Laurenskerk", "VCA-gecertificeerd", "Erkend Leerbedrijf", "Buitenschilderwerk", "Binnenschilderwerk", "Houtrotreparatie", "Spuitwerk", "Wand- en vloerafwerking"],

  intro: {
    kicker: "Over J.A. Jonker",
    tekst: "Van een tussenwoning tot het Stadhuis en de Laurenskerk: we schilderen voor particulieren, VvE's, bedrijven, scholen en aannemers. Met zorg voor uw huis, eerlijk advies en een prijs die vooraf vaststaat.",
    stats: [
      { getal: "VCA", label: "Gecertificeerde schilders" },
      { getal: "Erkend", label: "Leerbedrijf" },
      { getal: "3 tot 5", label: "Jaar garantie, op schrift" },
      { getal: "Gratis", label: "Opname en advies aan huis" }
    ]
  },

  diensten: {
    titel: "Vakwerk, binnen en buiten",
    tekst: "Altijd met de beste materialen die binnen de milieunormen vallen. We komen kosteloos langs en adviseren ter plekke.",
    items: [
      { naam: "Buitenschilderwerk", foto: "img/buiten.jpg", tekst: "Goed schilderwerk beschermt en verfraait uw huis of bedrijf. Elke drie tot zes jaar opnieuw, afhankelijk van de ligging.",
        punten: ["Kozijnen, deuren en gevelbetimmering", "Buitenmuren, dakgoten en dakkapellen", "Ook als onderhoudscontract"] },
      { naam: "Binnenschilderwerk", foto: "img/binnen.jpg", tekst: "Een mooie, nieuwe uitstraling, en bescherming tegen slijtage, vocht en schimmel. De verf kiezen we per ruimte.",
        punten: ["Muren en plafonds", "Kozijnen, deuren en trappen", "Spuitwerk in eigen spuitcabine"] },
      { naam: "Houtrotreparatie", foto: "img/kozijn.jpg", tekst: "Rotte plekken ruim verwijderen en vullen, of een deel vervangen. Zo krijgt het schilderwerk weer een goede basis.",
        punten: ["Advies over de juiste methode", "Herstellen of deels vervangen", "Voorkomen met tijdig onderhoud"] },
      { naam: "Wand- en vloerafwerking", foto: "img/lijstwerk.jpg", tekst: "Van strakke wanden heeft u elke dag plezier. Behang, sierpleister, stucwerk of glasvezelbehang: we doen het allemaal.",
        punten: ["Wand- en betonrotreparaties", "Vloeren egaliseren, galerijvloeren", "Balkonvloeren voor VvE's"] }
    ],
    meer: [
      { naam: "Eigen spuitcabine", tekst: "Keukenfronten, deuren en panelen gespoten in zijde- of hoogglans, op onze locatie in Rotterdam." },
      { naam: "Onderhoudscontract", tekst: "Veel klanten kiezen voor een contract. Zo blijft het schilderwerk mooi en beschermd tegen weer en houtrot." },
      { naam: "Stuc- en spuitwerk", tekst: "Sinds 2018 werken we samen met Jobeca Vastgoed Onderhoud, gespecialiseerd in stuc- en spuitwerk." }
    ]
  },

  galerij: {
    vorm: "recht", navNaam: "Referenties", kicker: "Referenties",
    titel: "Van Koopgoot tot Laurenskerk",
    tekst: "Rotterdam kent ons werk. Een greep uit de plekken waar we schilderden.",
    items: [
      { foto: "img/g-laurenskerk.jpg", label: "Laurenskerk", sub: "Rotterdam" },
      { foto: "img/g-koopgoot.jpg", label: "Koopgoot Beurstraverse", sub: "Rotterdam" },
      { foto: "img/g-hofbogen.jpg", label: "Hofbogen", sub: "Rotterdam" },
      { foto: "img/g-kuyls.jpg", label: "Kuyls Fundatie", sub: "Wand- en schilderwerk" },
      { foto: "img/g-oudehaven.jpg", label: "Oude Haven", sub: "Rotterdam" },
      { foto: "img/g-rdm.jpg", label: "RDM-kade", sub: "Rotterdam" },
      { foto: "img/g-glasgevel.jpg", label: "Glasgevel", sub: "Werk op hoogte" },
      { foto: "img/g-school.jpg", label: "Basisschool", sub: "Buitenschilderwerk" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "U betaalt altijd wat vooraf is afgesproken.",
    foto: "img/trap.jpg", fotoPos: "50% 50%", fotoAlt: "Wit geschilderde trapbalusters met een kroonluchter",
    stappen: [
      { naam: "Kosteloos langs", tekst: "We bekijken de klus bij u en adviseren ter plekke over werkzaamheden en materialen." },
      { naam: "Eerlijk advies", tekst: "Ook als dat betekent dat uw schilderwerk best nog een jaar kan wachten." },
      { naam: "Vaste prijs vooraf", tekst: "Een duidelijke afspraak, zodat u achteraf niet voor verrassingen staat." },
      { naam: "Garantie op schrift", tekst: "Op uw wens een garantiecertificaat, samen met de verfleverancier." }
    ]
  },

  garantie: {
    titel: "Garantie die op papier staat",
    tekst: "We nemen onszelf en u serieus. Daarom geven we, als u dat wilt, samen met de verfleverancier een garantiecertificaat af.",
    jaren: [
      { jaar: "3 tot 5 jaar", tekst: "Gegarandeerd blijvend goed resultaat, afhankelijk van de afspraak" },
      { jaar: "Kosteloos", tekst: "Herstel als het schilderwerk eerder gebreken vertoont" },
      { jaar: "9% btw", tekst: "Op arbeid voor particulieren en VvE's, bij woningen ouder dan twee jaar" }
    ],
    lijst: {
      titel: "Hier werkten we onder meer",
      tekst: "Opdrachtgevers die op vakmanschap rekenen.",
      punten: ["Stadhuis Rotterdam", "Laurenskerk Rotterdam", "H.H. Laurentius en Elisabeth Kathedraal", "Koopgoot Beurstraverse", "Hofbogen Rotterdam", "Huis Sonneveld", "Het Nieuwe Instituut", "Pelgrimvaderskerk Delfshaven", "Dorpskerk Leidschendam"]
    }
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Jan en Alex",
    rol: "De basis van J.A. Jonker",
    tekst: [
      "Jan en Alex vormen de basis van het bedrijf. Afhankelijk van de klus werken ze met een groep professionele, VCA-gecertificeerde schilders en vakmannen.",
      "We werken met plezier en gaan met de uiterste zorg om met uw huis, bedrijf of interieur. En als Erkend Leerbedrijf mogen we ook nieuwe schilders opleiden."
    ],
    foto: "img/aan-het-werk.jpg", fotoPos: "60% 40%", fotoAlt: "Schilder van J.A. Jonker aan het werk in een afgeplakte gang",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Rotterdam Rijnmond en verder",
    tekst: "We werken het meest in Rotterdam Rijnmond en Zuid-Holland. Een klus aan de andere kant van het land nemen we ook graag aan.",
    plaatsen: ["Rotterdam", "Rotterdam Rijnmond", "Zuid-Holland", "Ook verder weg"]
  },

  faq: [
    { v: "Kost een offerte iets?", a: "Nee. We komen kosteloos bij u langs, bekijken de klus en adviseren ter plekke over de werkzaamheden en materialen." },
    { v: "Betaal ik minder btw op schilderwerk?", a: "Particulieren en VvE's betalen 9% btw op de arbeid voor schilderwerk aan woningen ouder dan twee jaar. Dat scheelt u flink ten opzichte van 21%." },
    { v: "Welke garantie krijg ik?", a: "Op uw wens geven we samen met de verfleverancier een garantiecertificaat voor drie tot vijf jaar. Vertoont het werk eerder gebreken, dan herstellen we dat kosteloos." },
    { v: "Hoe kan ik besparen op schilderwerk?", a: "Combineer klussen: laat meerdere dingen tegelijk doen, of schilder samen met de buren. En maak vooraf een vaste prijsafspraak." },
    { v: "Werken jullie ook voor VvE's en bedrijven?", a: "Zeker. We werken voor VvE's en beheerders, aannemers, scholen, winkels en bedrijfspanden. Voor VvE's behandelen we bijvoorbeeld vaak balkonvloeren." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "30% 50%",
    titel: "Toe aan goed schilderwerk?",
    tekst: "Bel of mail ons. We komen kosteloos langs en u weet vooraf precies wat het kost."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vertel kort wat u wilt laten doen. Staan we met een kwast in de hand en nemen we niet direct op? Dan bellen we u zo snel mogelijk terug.",
    onderwerpen: ["Buitenschilderwerk", "Binnenschilderwerk", "Houtrotreparatie", "Wand- en vloerafwerking", "Spuitwerk", "Onderhoudscontract"],
    voorbeeld: "Bijvoorbeeld: kozijnen en dakkapel aan de achterkant, er zit wat houtrot in"
  }
};
