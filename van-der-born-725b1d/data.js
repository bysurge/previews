// Hoveniersbedrijf S. van der Born (Leiden). Bron: hoveniersvanderborn.nl + Google (5,0 / 5), 26-11-2026.
// Foto's: alleen hun eigen projectfoto's (de stockfoto's van hun site NIET gebruikt). Geen e-mailadres op hun site.
window.SITE = {
  naam: "Hoveniersbedrijf S. van der Born",
  kortNaam: "Van der Born",
  vak: "Hovenier",
  plaats: "Leiden",
  logo: "img/boom.png",
  logoVorm: "icoon",
  logoHoogte: 40,
  kleuren: { brand: "#233d26", accent: "#a8743c" },
  telefoon: "06 13 37 53 61",
  telefoonIntl: "31613375361",
  waTekst: "App Sietsge",
  adres: ["IJsbaan 51", "2331 EP Leiden"],
  kvk: "81107684",
  google: { score: "5,0", aantal: "5" },
  voetTekst: "Full-service hoveniersbedrijf in Leiden. Ontwerp, aanleg, bestrating, overkappingen, boomverzorging en tuinonderhoud, met één vast aanspreekpunt.",

  hero: {
    regels: ["Eén hovenier,", "van eerste schets", "*tot oplevering.*"],
    tekst: "Sietsge van der Born ontwerpt, legt aan en onderhoudt tuinen in Leiden en omgeving. U praat steeds met dezelfde persoon, van idee tot resultaat.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "45% 55%",
    fotoAlt: "Terras met houten pergola, plantenbakken en een tuinhuis",
    donker: true,
    punten: ["Gediplomeerd boomverzorger", "Overkappingen op maat"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Overkappingen en schuren", "Schuttingen", "Bomen snoeien", "Tuinonderhoud", "Beplanting"],

  intro: {
    kicker: "Over Van der Born",
    tekst: "Eén *aanspreekpunt* voor het hele proces. U deelt uw ideeën met één persoon, en samen brengen we ze tot leven. Voor elk budget is er een mooie tuin te maken.",
    stats: [
      { getal: "5,0", label: "Op Google" },
      { getal: "1", label: "Vast aanspreekpunt, van ontwerp tot oplevering" },
    ]
  },

  diensten: {
    titel: "Alles voor uw tuin, *uit één hand*",
    tekst: "Van het eerste ontwerp tot het snoeiwerk. U bepaalt zelf wat u laat doen, en mag ook gerust meewerken.",
    items: [
      { naam: "Ontwerp, aanleg en bestrating", foto: "img/terras-gazon.jpg", tekst: "Een tuin die past bij uw wensen en budget. We ontwerpen, leggen aan en bestraten, en leveren beplanting rechtstreeks van de kwekerij.",
        punten: ["Tuinontwerp", "Terrassen en paden", "Beplanting van de kwekerij"] },
      { naam: "Overkappingen en schuren", foto: "img/schuur.jpg", tekst: "Een schuur, overkapping of schutting, gemaakt van standaard materialen en op maat uitgevoerd. Ook standaard systemen leveren we.",
        punten: ["Overkappingen op maat", "Schuren en bergingen", "Schuttingen"] },
      { naam: "Bomen snoeien", foto: "img/boomklimmer.jpg", pos: "50% 30%", tekst: "Als gediplomeerd boomverzorger snoeien we met klimtechnieken of een hoogwerker. Toppen, knotten of kandelaren als dat nodig is om een boom te behouden.",
        punten: ["Klimtechniek en hoogwerker", "Toppen en knotten", "Bomen kappen"] },
      { naam: "Tuinonderhoud", foto: "img/pergola-zon.jpg", tekst: "Netjes onderhouden, volgens uw wensen, en schoon achtergelaten. Ook de voor- en najaarsbeurt, tegen een gunstig uurtarief.",
        punten: ["Bladruimen en onkruidvrij", "Heesters snoeien en gras maaien", "Onderhoud van borders"] },
      { naam: "Tuinafval afvoeren of hergebruiken", foto: "img/bus.jpg", tekst: "Snoeiafval voeren we af, of we versnipperen het hout zodat u het als bodembedekking in uw tuin kunt gebruiken.",
        punten: ["Afvoer van snoeiafval", "Versnipperen", "Hergebruik als bodembedekker"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Fotogalerij",
    titel: "Tuinen van *Van der Born*",
    tekst: "Een greep uit projecten in Leiden en omgeving.",
    items: [
      { foto: "img/overkapping-terras.jpg", label: "Overkapping met tegelterras", sub: "Aanleg en bestrating", pos: "50% 60%" },
      { foto: "img/terras-trap.jpg", label: "Terras met traptreden", sub: "Bestrating" },
      { foto: "img/veranda.jpg", label: "Veranda aan het water", sub: "Op maat gemaakt" },
      { foto: "img/schutting.jpg", label: "Schutting en plantenbak", sub: "Aanleg" },
      { foto: "img/voortuin-pad.jpg", label: "Voortuin met nieuw pad", sub: "Bestrating" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Wij hebben een super mooie voor en achtertuin opgeleverd gekregen. Sietsge werkt netjes, overlegt alles en komt echt zijn afspraken na. Erg tevreden over zijn werkzaamheden en een aanrader voor iedereen!", naam: "Marijke L." },
      { tekst: "Superfijne hovenier! Houdt onze grote tuin netjes bij en komt met goede ideeën om de boel mooi te houden en mooier te maken! Denkt mee. Wij zijn zeer tevreden!", naam: "Rik v. S." },
      { tekst: "Afspraken worden nagekomen tijdens de aanleg van onze voortuin … Zeer kundige skills, overlegt indien er verduidelijking nodig is wat betreft het ontwerp. En draagt oplossingen aan wanneer er zich een probleem aandient.", naam: "P. van E." },
      { tekst: "Professioneel en goede prijs kwaliteitverhouding. Komt afspraken na en komt optijd.", naam: "Maaike" }
    ]
  },

  over: {
    kicker: "Over Sietsge", navNaam: "Over ons",
    titel: "Sietsge van der *Born*",
    rol: "Hovenier en gediplomeerd boomverzorger",
    tekst: [
      "Laat u de tuin liever ontwerpen, aanleggen, renoveren of onderhouden? Dan doet Sietsge dat voor u. Hij snoeit ook bomen als gediplomeerd boomklimmer, en bouwt schuren en overkappingen.",
      "Vakwerk, afspraken nakomen en professioneel advies, voor een gunstig uurtarief. U mag zelf meewerken in uw tuin: wij doen wat u zegt en geven graag advies."
    ],
    foto: "img/snoeien.jpg", fotoPos: "50% 40%", fotoAlt: "Boomverzorger in een boom aan het snoeien",
    knop: "Stuur Sietsge een bericht"
  },

  band: {
    foto: "img/grote-overkapping.jpg", fotoPos: "50% 50%",
    titel: "Zin in een tuin *naar wens?*",
    tekst: "Informeer vrijblijvend naar de mogelijkheden. Bel of app Sietsge."
  },

  contact: {
    titel: "Informeer *vrijblijvend*",
    tekst: "Vertel kort wat u voor ogen heeft. Sietsge neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Ontwerp en aanleg", "Bestrating", "Overkapping of schuur", "Bomen snoeien", "Tuinonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: overkapping achter in de tuin en nieuwe tegels op het terras"
  }
};
