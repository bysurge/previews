// Dackus Dakwerken (Maastricht). GEEN eigen website: alles uit het Google-profiel (5,0 / 3), 25-11-2026. Zie content.md.
// Logo zelf gemaakt (woordmerk). Foto's: Google-profiel. Diensten alleen wat de foto's en reviews laten zien.
window.SITE = {
  naam: "Dackus Dakwerken",
  kortNaam: "Dackus Dakwerken",
  plaats: "Maastricht",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 40,
  kleuren: { brand: "#1c2229", accent: "#b4693a" },
  telefoon: "06 25 03 06 54",
  telefoonIntl: "31625030654",
  adres: ["Jerichoplein 13", "6222 CA Maastricht"],
  google: { score: "5,0", aantal: "3" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  voetTekst: "Dakdekker in Maastricht. Pannendaken, dakkapellen, platte daken, isolatie en complete dakrenovaties.",

  hero: {
    regels: ["Uw dak,", "goed geregeld."],
    tekst: "Van nieuwe pannen tot een strak beklede dakkapel. Duidelijk advies, een overzichtelijke offerte en werk dat op tijd af is.",
    foto: "img/hero.jpg", fotoPos: "50% 40%",
    fotoPosMobiel: "40% 45%",
    fotoAlt: "Nieuwe dakkapel met donkere felsnaadbekleding op een pannendak in Maastricht",
    donker: true,
    punten: ["5,0 op Google", "Afspraak is afspraak", "Duidelijke offerte"]
  },

  marquee: ["Pannendaken", "Dakkapellen", "Dakopbouw", "Platte daken", "Dakisolatie", "Dakrenovatie", "Zinkwerk"],

  intro: {
    kicker: "Dackus Dakwerken",
    tekst: "Een nieuw dak is een flinke klus. Daarom krijgt u bij Dackus vooraf helder advies over de mogelijkheden, een overzichtelijke offerte, en een team dat het werk afmaakt in de tijd die is afgesproken.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Op tijd", label: "Werk af in de afgesproken tijd" },
      { getal: "Helder", label: "Advies en een overzichtelijke offerte" }
    ]
  },

  diensten: {
    titel: "Van pannendak tot dakkapel",
    tekst: "Stuur een paar foto's van uw dak via WhatsApp. Dan weet u snel waar u aan toe bent.",
    knop: "Vraag een offerte aan",
    items: [
      { naam: "Dakrenovatie", soort: "Dakrenovatie", foto: "img/renovatie.jpg", pos: "50% 40%",
        tekst: "Het hele dak eraf en opnieuw opgebouwd, ook bij oudere woningen zoals een jaren-30-huis. Met nieuwe pannen en goede afwerking.",
        punten: ["Complete dakvernieuwing", "Ook voor oudere woningen", "Netjes opgeleverd"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannen-zink.jpg", pos: "50% 50%",
        tekst: "Nieuwe dakpannen, strak gelegd en waterdicht aangesloten op dakramen, dakkapellen en schoorsteen.",
        punten: ["Nieuwe pannen", "Aansluitingen rond dakramen", "Strakke afwerking"] },
      { naam: "Dakkapellen", soort: "Dakkapel", foto: "img/dakkapel-zink.jpg", pos: "50% 50%",
        tekst: "Dakkapellen met een strakke, moderne bekleding in felsnaad. Mooi om te zien vanaf de straat.",
        punten: ["Felsnaadbekleding", "Strak en modern", "Aangesloten op het pannendak"] },
      { naam: "Dakopbouw", soort: "Dakopbouw", foto: "img/opbouw.jpg", pos: "50% 50%",
        tekst: "Meer ruimte onder het dak met een dakopbouw. Van houten constructie tot het afgewerkte dak erop.",
        punten: ["Extra woonruimte", "Constructie en dak", "Op maat"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/platdak.jpg", pos: "50% 55%",
        tekst: "Nieuwe bitumen dakbedekking op uitbouwen en woningen, met lichtkoepels en dakranden netjes ingewerkt.",
        punten: ["Bitumen dakbedekking", "Lichtkoepels ingewerkt", "Strakke dakranden"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 50%",
        tekst: "Isolatieplaten op het dak, voordat de pannen erop gaan. Warmer binnen en een lagere energierekening.",
        punten: ["Isolatieplaten", "Samen met een nieuw dak", "Lagere energierekening"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit daken die we in en rond Maastricht hebben gemaakt.",
    items: [
      { foto: "img/renovatie.jpg", label: "Nieuw dak", sub: "Complete renovatie", pos: "50% 40%" },
      { foto: "img/dakkapel-2.jpg", label: "Dakkapel", sub: "Strak bekleed", pos: "50% 40%" },
      { foto: "img/woning.jpg", label: "Pannendak", sub: "Nieuwe pannen", pos: "50% 30%" },
      { foto: "img/opbouw.jpg", label: "Dakopbouw", sub: "In aanbouw", pos: "50% 50%" },
      { foto: "img/platdak.jpg", label: "Plat dak", sub: "Bitumen met lichtkoepel", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt Dackus",
    tekst: "Duidelijk advies vooraf en afspraken die worden nagekomen. Dat noemen klanten op Google.",
    foto: "img/oud-dak.jpg", fotoPos: "50% 50%", fotoAlt: "Oud dakbeschot verwijderd tijdens een dakrenovatie",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat u wilt, het liefst met een paar foto's van uw dak." },
      { naam: "Advies", tekst: "We komen kijken en leggen duidelijk uit wat de mogelijkheden zijn." },
      { naam: "Heldere offerte", tekst: "Een overzichtelijke offerte, zodat u precies weet waar u aan toe bent." },
      { naam: "Vakwerk op tijd", tekst: "Het werk is af in de afgesproken tijd, ook als het weer tegenzit." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Leroy heeft bij mij het hele dak (jaren 30 woning) gerenoveerd. Ik kan niet anders dan positief zijn. Hij komt zijn afspraken na, maakt het werk af in de afgesproken tijd en levert goed werk af. …", naam: "Eddy K." },
      { tekst: "Leroy was duidelijk in advies en mogelijkheden en stelde een overzichtelijke offerte op. Het opgeleverde werk is van hoge kwaliteit en Leroy en collega's toonden zich nette werklui, die zelfs bij stevige vrieskou een flink werktempo hadden.", naam: "Erik C." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dakdekker in Maastricht",
    rol: "Dackus Dakwerken, Maastricht",
    tekst: [
      "Klanten kennen Dackus Dakwerken als een vriendelijk team dat zijn afspraken nakomt. Ook bij minder weer gaan we gewoon het dak op, zodat het werk op tijd af is.",
      "Van een nieuw pannendak tot een dakkapel of complete renovatie: u krijgt vooraf duidelijk advies en een overzichtelijke offerte. Vragen? Stuur gerust een bericht met een foto."
    ],
    foto: "img/dakkapel-2.jpg", fotoPos: "50% 40%", fotoAlt: "Nieuwe dakkapel op een woning",
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/woning.jpg", fotoPos: "50% 25%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Bel of app 06 25 03 06 54. Stuur er een foto bij, dan denken we met u mee."
  },

  contact: {
    titel: "Vertel wat u met uw dak wilt",
    tekst: "Vul het formulier in, bel, of stuur direct een WhatsApp met een foto.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Nieuw pannendak", "Dakkapel", "Dakopbouw", "Plat dak", "Dakisolatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: jaren-30-woning, de pannen zijn aan vervanging toe en we willen meteen isoleren",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};

// Leesbare hero-tekst op de foto (sjabloon niet aanpassen).
(function () {
  const st = document.createElement('style');
  st.textContent = '.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
