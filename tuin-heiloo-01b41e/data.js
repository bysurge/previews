// Tuinonderhoud-Heiloo, Pieter Bakker (Heiloo). Bron: tuinonderhoudheiloo.com + Google (5,0 / 1), 26-11-2026.
// Foto's: allemaal van hun eigen site. Geen logo op hun site -> leeg.png, naam als tekst. Seizoenen = hun eigen onderhoudsschema.
window.SITE = {
  naam: "Tuinonderhoud-Heiloo",
  kortNaam: "Tuinonderhoud-Heiloo",
  vak: "Tuinonderhoud",
  plaats: "Heiloo",
  logo: "img/leeg.png",
  logoVorm: "icoon",
  logoHoogte: 1,
  kleuren: { brand: "#2e4630", accent: "#a7743b" },
  telefoon: "06 11 58 44 73",
  telefoonIntl: "31611584473",
  waTekst: "App Pieter",
  adres: ["Bosanemoon 5", "1852 XM Heiloo"],
  kvk: "54855934",
  voetTekst: "Pieter Bakker: tuinonderhoud, kleine renovaties en tuingerelateerde klussen in Heiloo.",
  ctaTekst: "Maak een afspraak",
  navCta: "Afspraak",

  hero: {
    regels: ["Uw tuin weer", "om van te", "*genieten.*"],
    tekst: "Pieter Bakker neemt het tuinonderhoud van u over: een deel of alles. Snoeien, hagen, gazon, borders en tuinklussen in Heiloo.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 55%",
    fotoAlt: "Strak geknipte haag en ronde buxusbollen in een groene tuin",
    badge: "Vrijblijvend kennismaken",
    donker: true,
    punten: ["Organische bemesting", "Ook kleine renovaties"]
  },

  marquee: ["Tuinonderhoud", "Hagen knippen", "Buxus in vorm", "Gazononderhoud", "Bomen snoeien", "Schuttingen", "Moestuinhulp", "Blad ruimen"],

  intro: {
    kicker: "Even voorstellen",
    tekst: "U heeft jaren van uw tuin genoten, maar het lukt niet meer zo goed zelf? Dan neem ik het *graag van u over.* Een deel of alles, wekelijks of eenmalig.",
    stats: [
      { getal: "Heiloo", label: "Hier opgegroeid, tussen de moestuinen" },
      { getal: "4", label: "Seizoenen, één onderhoudsschema" }
    ]
  },

  diensten: {
    titel: "Wat ik voor u *kan doen*",
    tekst: "Siertuin, wilde bloementuin of moestuin: ik onderhoud ze allemaal met plezier.",
    items: [
      { naam: "Hagen en buxus", foto: "img/buxus.jpg", tekst: "Strak scheren van hagen geeft een prachtige, dichte begroeiing. Ook de buxus in vorm knippen, met de juiste organische bemesting erna.",
        punten: ["Hagen scheren", "Buxus in vorm knippen", "Heesters knippen"] },
      { naam: "Bomen snoeien", foto: "img/boom-snoeien.jpg", pos: "50% 40%", tekst: "Bomen snoeien op beperkte hoogte, wilgen en bolbomen knotten. Kappen doe ik samen met een boomspecialist.",
        punten: ["Snoeien op beperkte hoogte", "Wilgen knotten", "Kappen met een specialist"] },
      { naam: "Gazon", foto: "img/graszoden.jpg", tekst: "Maaien, in de zomer desnoods elke week. Verticuteren, bemesten en doorzaaien. Of in één keer een nieuwe grasmat.",
        punten: ["Wekelijks maaien", "Verticuteren en doorzaaien", "Nieuwe grasmat leggen"] },
      { naam: "Borders en onkruid", foto: "img/heggenschaar.jpg", tekst: "Borders maandelijks bijhouden, beplanten en bemesten met organische mest. Onkruid op grind en tegels pak ik aan met een krachtige gasbrander.",
        punten: ["Maandelijks onderhoud", "Organische mest", "Onkruid branden"] },
      { naam: "Schuttingen en tuinklussen", foto: "img/schutting.jpg", tekst: "Kleine renovaties en tuingerelateerde klussen. Bijvoorbeeld een te grote coniferenhaag vervangen door een strakke schutting van Zweeds of Douglas rabat.",
        punten: ["Schuttingen plaatsen", "Groene afscheidingen", "Kleine renovaties"] },
      { naam: "Hulp bij uw moestuin", foto: "img/moestuin.jpg", tekst: "Al jaren een moestuin, maar lukt het niet meer om alles bij te houden? Vraag gerust, geheel vrijblijvend, om assistentie.",
        punten: ["Spitten en schoffelen", "Bodemverbetering", "Fruitbomen snoeien"] }
    ]
  },

  seizoenen: {
    kicker: "Het hele jaar",
    titel: "Onderhoud *het jaar door*",
    tekst: "Elk seizoen vraagt iets anders van uw tuin. Dit is mijn vaste schema.",
    items: [
      { naam: "Lente", maanden: "voorjaarsbeurt", foto: "img/moestuin.jpg", titel: "Alles klaar voor *het groeiseizoen*",
        tekst: "Snoeien, schoffelen en bemesten, zodat de tuin goed van start gaat.",
        punten: ["Vorstgevoelige planten snoeien", "Borders schoffelen en onkruid weg", "Gazon verticuteren, bijzaaien en bemesten", "Nieuwe vaste planten en terras schoonspuiten"] },
      { naam: "Zomer", maanden: "zomeronderhoud", foto: "img/buxus.jpg", titel: "Genieten, *ik houd het bij*",
        tekst: "U zit buiten, ik zorg dat gazon, hagen en borders er strak bij liggen.",
        punten: ["Gazon wekelijks maaien en kanten knippen", "Borders maandelijks bijhouden", "Hagen in vorm knippen", "Onkruid op grind en tegels branden"] },
      { naam: "Herfst", maanden: "herfstonderhoud", foto: "img/heggenschaar.jpg", titel: "De tuin *klaar voor de winter*",
        tekst: "Blad weg, najaarsmest erop en de laatste snoeibeurt.",
        punten: ["Blad blazen van het gazon", "Organische najaarsmest", "Bomen snoeien, zoals berk, esdoorn en walnoot", "Voorjaarsbollen planten"] },
      { naam: "Winter", maanden: "winterbeurt", foto: "img/bomen-winter.jpg", titel: "Rust in de tuin, *werk aan de bodem*",
        tekst: "De bodem verbeteren en de fruitbomen snoeien.",
        punten: ["Borders en moestuin los spitten", "Compost of koemest door de grond", "Potten in de luwte zetten", "Appel en peer snoeien"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Foto's",
    titel: "Foto's en *indrukken*",
    tekst: "Een greep uit het werk in Heiloo en omgeving.",
    items: [
      { foto: "img/schutting.jpg", label: "Schutting in plaats van coniferen", sub: "Tuinklus" },
      { foto: "img/buxus.jpg", label: "Buxus in vorm", sub: "Onderhoud" },
      { foto: "img/graszoden.jpg", label: "Nieuwe grasmat", sub: "Gazon" },
      { foto: "img/klimop-hek.jpg", label: "Groene afscheiding met klimop", sub: "Tuinklus" },
      { foto: "img/moestuin.jpg", label: "Assistentie bij de moestuin", sub: "Moestuin" }
    ]
  },

  over: {
    kicker: "Even voorstellen", navNaam: "Over mij",
    titel: "Pieter *Bakker*",
    rol: "Tuinonderhoud-Heiloo",
    tekst: [
      "Ik ben opgegroeid aan de Westerweg in Heiloo, tussen de aardbei- en aspergeakkers. In de grote moestuin van mijn vader leerde ik de kneepjes van het vak, later aangevuld op de Middelbare Land- en Tuinbouwschool in Alkmaar.",
      "Na 31 jaar bij het Korps Mariniers pakte ik mijn oude liefde voor de tuin weer op. Met Bautz, mijn Duitse Staande Langhaar, als trouwe assistent."
    ],
    foto: "img/pieter2.jpg", fotoPos: "50% 30%", fotoAlt: "Pieter Bakker",
    knop: "Stuur Pieter een bericht"
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    titel: "Even *doorpraten?*",
    tekst: "Maak een vrijblijvende afspraak. U vertelt uw wensen, ik denk mee en u weet meteen wat het kost."
  },

  contact: {
    titel: "Maak een *vrijblijvende* afspraak",
    tekst: "Vertel kort wat u uit handen wilt geven. Pieter neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Vast onderhoud", "Hagen en buxus", "Bomen snoeien", "Gazon", "Schutting of tuinklus", "Moestuin"],
    voorbeeld: "Bijvoorbeeld: elke maand de borders bijhouden en in de zomer wekelijks het gras maaien"
  }
};
