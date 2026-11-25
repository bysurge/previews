// J&W Dak en Geveltechniek (Apeldoorn). Geen eigen site (domein geparkeerd). Bron: Google (5,0 / 7, opgehaald 25-11-2026).
// Alleen hun eigen Google-foto's. Geen logo bekend: eenvoudig dak-icoon + naam. Diensten afgeleid van hun foto's.
window.SITE = {
  naam: "J&W Dak en Geveltechniek",
  kortNaam: "J&W Dak en Gevel",
  plaats: "Apeldoorn",
  vak: "Dakdekker",
  titelExtra: "Dak en gevel in Apeldoorn",
  logo: "img/logo.svg",
  logoWit: "img/logo-wit.svg",
  logoVorm: "icoon",
  logoHoogte: 34,
  kleuren: { brand: "#1b222b", accent: "#d08a3c" },
  telefoon: "06 26 46 29 23",
  telefoonIntl: "31626462923",
  waTekst: "WhatsApp",
  adres: ["Christiaan Geurtsweg 11, G9", "7335 JV Apeldoorn"],
  google: { score: "5,0", aantal: "7" },
  ctaTekst: "Offerte aanvragen",
  navCta: "Offerte",
  voetTekst: "Platte daken, pannendaken, gevelbekleding en aanbouw in Apeldoorn en omgeving. Bij lekkage snel ter plaatse.",

  hero: {
    regels: ["Dak en gevel", "in één", "vertrouwde hand."],
    tekst: "Van een lekkend plat dak tot een complete aanbouw met nieuwe gevel. Snel ter plaatse, eerlijk advies en netjes afgewerkt.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "30% 50%",
    fotoAlt: "Vakmannen van J&W aan het werk op een plat dak naast een pannendak",
    donker: true,
    punten: ["5,0 op Google", "Eerlijk advies vooraf", "Dak, gevel en aanbouw"]
  },

  marquee: ["Platte daken", "Bitumen", "Pannendaken", "Lekkages", "Gevelbekleding", "Aanbouw", "Dakopbouw", "Lichtstraten"],

  spoed: {
    titel: "Lekt uw dak?",
    tekst: "Bel of app direct. Klanten schrijven dat er binnen 24 tot 48 uur iemand stond."
  },

  intro: {
    kicker: "J&W Dak en Geveltechniek",
    tekst: "Een dak moet gewoon droog blijven en een gevel moet er strak uitzien. Wij kijken eerst eerlijk wat er nodig is, leggen het duidelijk uit en voeren het daarna vakkundig uit.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "7 van 7", label: "Reviews met vijf sterren" },
      { getal: "2 vakken", label: "Dak én gevel, één aanspreekpunt" },
      { getal: "Apeldoorn", label: "En omgeving" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Wat we voor u doen",
    tekst: "Van reparatie tot complete aanbouw. U heeft één aanspreekpunt voor dak én gevel.",
    items: [
      { naam: "Platte daken", foto: "img/plat-dak.jpg", pos: "50% 55%", soort: "Bitumen dakbedekking",
        tekst: "Nieuwe dakbedekking op uw platte dak, strak afgewerkt met opstaande randen en daktrim.",
        punten: ["Nieuwe bitumen dakbedekking", "Daktrim en dakranden", "Isoleren van het dak"] },
      { naam: "Lekkage verhelpen", foto: "img/plat-werk.jpg", pos: "50% 50%", soort: "Snel ter plaatse",
        tekst: "Een lekkage zoeken we op en lossen we direct goed op, ook rond doorvoeren van bijvoorbeeld een airco.",
        punten: ["Lekkages opsporen", "Dakdoorvoeren afwerken", "Eerlijk advies over herstel"] },
      { naam: "Pannendaken", foto: "img/pannen.jpg", pos: "50% 40%", soort: "Hellende daken",
        tekst: "Dakpannen vervangen of een compleet nieuw pannendak, netjes gelegd op nieuwe panlatten.",
        punten: ["Nieuwe pannen leggen", "Panlatten en folie", "Reparatie van hellende daken"] },
      { naam: "Gevelbekleding", foto: "img/gevel.jpg", pos: "50% 50%", soort: "Geveltechniek",
        tekst: "Een strakke, onderhoudsarme gevel rond uw woning, garage of aanbouw.",
        punten: ["Gevelbekleding plaatsen", "Boeidelen en overstekken", "Aansluiting op dak en kozijn"] },
      { naam: "Aanbouw en dakopbouw", foto: "img/aanbouw.jpg", pos: "50% 50%", soort: "Houtskeletbouw",
        tekst: "Meer ruimte met een aanbouw of dakopbouw: van balklaag en houtskelet tot dak en gevel.",
        punten: ["Houtskeletbouw", "Balklagen en dakopbouw", "Afgewerkt met dak en gevel"] },
      { naam: "Lichtstraten en dakramen", foto: "img/lichtstraat.jpg", pos: "50% 40%", soort: "Daglicht",
        tekst: "Een lichtstraat of dakraam, waterdicht ingewerkt in het dak.",
        punten: ["Lichtstraten plaatsen", "Waterdicht inwerken", "Afwerking binnen en buiten"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit onze klussen in Apeldoorn en omgeving.",
    items: [
      { foto: "img/aanbouw-klaar.jpg", label: "Aanbouw met gevelbekleding", sub: "Klaar voor gebruik", pos: "50% 50%" },
      { foto: "img/houtskelet.jpg", label: "Houtskeletbouw", sub: "Aanbouw in aanbouw", pos: "50% 50%" },
      { foto: "img/balklaag.jpg", label: "Nieuwe balklaag", pos: "50% 50%" },
      { foto: "img/dakopbouw.jpg", label: "Dakopbouw met isolatie", pos: "50% 60%" },
      { foto: "img/gevel.jpg", label: "Gevel rond garage en entree", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Snel, duidelijk en zonder verrassingen.",
    foto: "img/plat-werk.jpg", fotoPos: "50% 50%", fotoAlt: "Werk aan een plat dak",
    stappen: [
      { naam: "Contact", tekst: "Bel of app ons, gerust met een foto van het probleem." },
      { naam: "Opname", tekst: "We komen snel kijken en leggen eerlijk uit wat er nodig is." },
      { naam: "Uitvoering", tekst: "Na akkoord gaan we snel aan de slag, vakkundig en netjes." },
      { naam: "Oplevering", tekst: "We lopen alles samen na en laten het netjes achter." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Eerlijk en goed advies gekregen over mijn lekkage, en prettig betrouwbaar personeel om mee te werken. Binnen 24 uur was er iemand om de schade op te nemen en het werk werd direct uitgevoerd.", naam: "Henk B." },
      { tekst: "Het was een spoedgeval, en binnen 48 uur stonden ze al op de stoep. De werkzaamheden zijn vervolgens binnen één dag uitgevoerd. Ze gingen professioneel te werk en namen de tijd om alles duidelijk uit te leggen…", naam: "Richard D." },
      { tekst: "Snel ter plaatse, vriendelijk personeel en top kwaliteit. Niks op aan te merken, zeker een aanrader.", naam: "Arthur T." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Dak en gevel, goed geregeld",
    rol: "J&W Dak en Geveltechniek, Apeldoorn",
    tekst: [
      "J&W combineert dakwerk en geveltechniek. Zo regelen we een nieuw dak, de gevelbekleding en de aansluiting daartussen in één keer, zonder gedoe met verschillende partijen.",
      "Klanten noemen ons eerlijk, snel en vriendelijk."
    ],
    foto: "img/aanbouw-klaar.jpg", fotoPos: "50% 50%", fotoAlt: "Aanbouw met nieuwe gevelbekleding",
    knop: "Stuur ons een bericht"
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    titel: "Benieuwd wat uw dak nodig heeft?",
    tekst: "Stuur een foto of bel even. We denken graag mee en geven eerlijk advies."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat er aan de hand is. We nemen snel contact met u op, of stuur direct een WhatsApp.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Lekkage", "Plat dak", "Pannendak", "Gevelbekleding", "Aanbouw of dakopbouw", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: bij harde regen lekt het bij de dakkapel",
    belofte: "Eerlijk advies, vrijblijvende offerte."
  }
};
