// De Leeuw Dakrenovatie (Almere). Bron: deleeuwdakrenovatie.nl + Google (5,0 / 24). Foto's: eigen site (geen Google-foto's). Zie content.md.
// Geen 06/WhatsApp gevonden: alleen bellen (085-nummer).
window.SITE = {
  naam: "De Leeuw Dakrenovatie",
  kortNaam: "De Leeuw",
  plaats: "Almere",
  vak: "Dakdekker",
  logo: "img/beeldmerk.png",
  logoOpFoto: "img/beeldmerk-wit.png",
  logoVorm: "icoon",
  logoHoogte: 34,
  logoWit: "img/logo-wit.png",
  kleuren: { brand: "#1c1a18", accent: "#e07a2c" },
  telefoon: "085 060 5468",
  telBel: "+31850605468",
  whatsapp: false,
  email: "deleeuwdakrenovatie@gmail.com",
  adres: ["Randstad 22", "1316 BZ Almere"],
  kvk: "95067159",
  google: { score: "5,0", aantal: "24" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  voetTekst: "Dakdekker uit Almere voor platte daken, pannendaken, lekkages en dakgoten. Gratis dakinspectie binnen 24 uur en 15 jaar garantie.",

  hero: {
    regels: ["Sterk in", "elk dak."],
    tekst: "Platte daken, pannendaken, lekkages en dakgoten in Almere en omstreken. Van een kleine reparatie tot een complete dakrenovatie, met 15 jaar garantie.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "30% 50%",
    fotoAlt: "Dakdekker van De Leeuw brandt nieuwe bitumen dakbedekking vast",
    donker: true,
    punten: ["15 jaar garantie", "Gratis dakinspectie binnen 24 uur", "Geen voorrijkosten"]
  },

  marquee: ["Bitumen daken", "Dakrenovatie", "Pannendaken", "Daklekkage", "Dakreparatie", "Dakgoten", "Nokvorsten", "Schoorsteenrenovatie", "Spoedservice"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "Onze dakdekkers zijn 24/7 inzetbaar. Bel, dan komen we snel om erger te voorkomen."
  },

  intro: {
    kicker: "Over De Leeuw",
    tekst: "Waar De Leeuw werkt, ligt het dak sterk. Met zorg, precisie en goede materialen, zodat uw dak weer jarenlang beschermd is tegen weer en wind.",
    stats: [
      { getal: "15 jaar", label: "Garantie op ons werk" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "24", tel: 24, label: "Reviews op Google" },
      { getal: "24 uur", label: "Gratis dakinspectie binnen een dag" }
    ]
  },

  diensten: {
    titel: "Voor alles op én aan uw dak",
    tekst: "Een acute lekkage, een dak dat aan vervanging toe is of betere isolatie: we hebben de expertise in huis. En altijd zonder voorrijkosten.",
    items: [
      { naam: "Platte daken en bitumen", soort: "Plat dak / bitumen", foto: "img/afvoer.jpg", pos: "50% 60%", tekst: "Oude dakbedekking eraf, nieuwe PIR-isolatie, een onderlaag en een sterke toplaag. Of, als de ondergrond nog goed is, een nieuwe laag over de bestaande.",
        punten: ["Nieuw, renovatie of overlagen", "Isoleren met PIR-platen", "Ook reparatie en onderhoud"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 40%", tekst: "Het dak volledig aangepakt: isolatiefolie, nieuwe panlatten en nieuwe keramische pannen. Weer een dak dat jaren meegaat.",
        punten: ["Complete pannendakrenovatie", "Nokvorsten opnieuw vastgezet", "Isoleren bij vervanging"] },
      { naam: "Lekkage en reparatie", soort: "Lekkage / spoed", foto: "img/reparatie.jpg", pos: "50% 30%", tekst: "Van een kleine lekkage tot flinke schade aan uw dak: we pakken het snel aan en zorgen dat het niet opnieuw gebeurt.",
        punten: ["24/7 noodservice", "Snel ter plaatse", "Oorzaak opgespoord en hersteld"] },
      { naam: "Dakgoten", soort: "Dakgoot", foto: "img/zinken-goot.jpg", pos: "50% 50%", tekst: "Verstopte of lekkende goten leiden tot rottende gevels en vochtproblemen. We repareren en vernieuwen, ook het zinkwerk.",
        punten: ["Reinigen en repareren", "Nieuw zinkwerk", "Waterdicht voor jaren"] },
      { naam: "Schoorsteenrenovatie", soort: "Schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 50%", tekst: "Scheuren in de voegen of verouderd lood geven lekkage en vocht. We herstellen uw schoorsteen, zodat hij weer veilig en dicht is.",
        punten: ["Voegwerk en loodslabben", "Aansluiting op het dak", "Voorkomt lekkage en vocht"] },
      { naam: "Gratis dakinspectie", soort: "Gratis dakinspectie", foto: "img/dakrand.jpg", pos: "50% 50%", tekst: "We controleren uw dak op zwakke plekken en beginnende schade, zodat een klein probleem geen dure reparatie wordt.",
        punten: ["Binnen 24 uur", "Helemaal gratis", "Duidelijk advies, met offerte op maat"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Recente projecten",
    titel: "Zo laten we een dak achter",
    tekst: "Een greep uit ons werk van de afgelopen tijd, van zinken goot tot complete pannendakrenovatie.",
    items: [
      { foto: "img/band.jpg", label: "Platdak renovatie", sub: "PIR-isolatie, onderlaag en nieuwe toplaag", pos: "50% 50%" },
      { foto: "img/pannendak-2.jpg", label: "Pannendakrenovatie", sub: "Folie, panlatten en nieuwe pannen", pos: "50% 40%" },
      { foto: "img/zinken-goot.jpg", label: "Dakgoot renovatie", sub: "Oud zinkwerk volledig vervangen", pos: "50% 60%" },
      { foto: "img/panlatten.jpg", label: "Panlatten en folie", sub: "Klaar voor de nieuwe pannen", pos: "50% 50%" },
      { foto: "img/vakman.jpg", label: "Op het dak", sub: "Brander en vakmanschap", pos: "50% 35%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan pas een prijs",
    tekst: "Een exacte prijs op afstand is lastig: elk dak is anders. Daarom komen we eerst gratis langs.",
    foto: "img/goot-nieuw.jpg", fotoPos: "50% 50%", fotoAlt: "Vernieuwde dakgoot met bitumen afwerking",
    stappen: [
      { naam: "Gratis dakinspectie", tekst: "Binnen 24 uur komen we langs en bekijken we de staat van uw dak." },
      { naam: "Offerte op maat", tekst: "U krijgt een duidelijke, vrijblijvende offerte. Zo weet u precies waar u aan toe bent." },
      { naam: "Vakkundig uitgevoerd", tekst: "We werken met zorg, precisie en goede materialen, en laten alles netjes achter." },
      { naam: "15 jaar garantie", tekst: "Op ons werk krijgt u 15 jaar garantie. Een dakpartner waarop u kunt bouwen." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Wij hebben ons platte dak laten renoveren en zijn ontzettend tevreden met het resultaat. De communicatie was duidelijk en het werk is netjes en snel uitgevoerd. Alles werd schoon achtergelaten en het dak ziet er weer als nieuw uit. Zeker een aanrader!", naam: "Mathz" },
      { tekst: "Het platte dak van onze schuur was oud en versleten en is volledig vernieuwd. Alles werd netjes en professioneel gedaan. Goede communicatie en vriendelijk personeel.", naam: "Sam B." },
      { tekst: "Ze hebben fantastisch werk geleverd! Ons dak ziet er weer als nieuw uit.", naam: "Sem B." },
      { tekst: "Fijn team om mee te werken. Alles netjes opgelost en geen lekkage meer.", naam: "Ezzu S." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Een dakpartner waarop u kunt bouwen",
    rol: "De Leeuw Dakrenovatie, Almere",
    tekst: [
      "Bij De Leeuw Dakrenovatie werken we elke dag aan daken die staan voor duurzaamheid, veiligheid en vakmanschap. Plat of schuin, renovatie of reparatie: elke klus krijgt dezelfde zorg.",
      "Service die verder gaat dan het werk alleen: een gratis dakinspectie binnen 24 uur, een vrijblijvende offerte op maat en een spoedservice als het echt niet kan wachten."
    ],
    foto: "img/vakman.jpg", fotoPos: "50% 35%", fotoAlt: "Dakdekker van De Leeuw aan het werk op een pannendak",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Almere en omstreken",
    tekst: "Vanuit Almere werken we in heel Flevoland en de provincies eromheen.",
    plaatsen: ["Flevoland", "Noord-Holland", "Utrecht", "Gelderland", "Zuid-Holland"]
  },

  faq: [
    { v: "Is lekkage aan mijn dak verzekerd?", a: "Waterschade in huis door een daklekkage wordt meestal vergoed, net als schade door hagel of storm. Schade door achterstallig onderhoud, slijtage of ouderdom doorgaans niet." },
    { v: "Kan er een nieuwe laag over mijn oude dakbedekking?", a: "Vaak wel, als de ondergrond nog goed is. Bij de inspectie letten we op vocht, hechting en isolatie. Dat scheelt kosten en gaat sneller." },
    { v: "Wat kost mijn dak?", a: "Elk dak is anders, dus op afstand een exacte prijs geven is lastig. We komen gratis langs en u krijgt een duidelijke offerte, zonder verrassingen achteraf." }
  ],

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een gratis dakinspectie aan. Binnen 24 uur weet u waar u aan toe bent."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Laat een bericht achter of bel ons. Bij lekkage of stormschade zijn we 24/7 inzetbaar.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis dakinspectie", "Lekkage / spoed", "Plat dak / bitumen", "Pannendak", "Dakgoot", "Schoorsteen"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen bij de dakrand, of het platte dak is aan vervanging toe",
    belofte: "We nemen snel contact met u op, zonder voorrijkosten."
  }
};
