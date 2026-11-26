// Posthumus Tuinen (Apeldoorn). Bron: posthumus-tuinen.nl (Joomla, gecrawld 26-11-2026; portfolio leeg, alleen stock/AI-beelden) + Google 4,2 uit 6 (score niet getoond).
// Foto's: alleen eigen foto's van hun Google-profiel (bestratingsklus met rondjes, schutting + boom planten). Allemaal staand en van 1-2 klussen.
// Geen logo bruikbaar (op hun site wazig/afgesneden): eenvoudig blad-icoon + naam. Voornaam Mark staat alleen in Google-reviews, niet op hun site.
window.SITE = {
  naam: "Posthumus Tuinen",
  kortNaam: "Posthumus Tuinen",
  vak: "Hovenier",
  plaats: "Apeldoorn",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  kleuren: { brand: "#2f3b33", accent: "#a8713a" },
  telefoon: "06 29 38 30 92",
  telefoonIntl: "31629383092",
  waTekst: "App ons",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Tuinontwerp, tuinaanleg en tuinonderhoud in Apeldoorn en omgeving. Netjes gewerkt, tuinafval nemen we mee.",

  hero: {
    regels: ["Uw tuin, *netjes*", "aangelegd en", "onderhouden."],
    tekst: "Posthumus Tuinen ontwerpt, legt aan en onderhoudt tuinen in Apeldoorn. Met een eigen ontwerp of met dat van u, en altijd met een opgeruimde werkplek.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "50% 60%", donker: true,
    fotoAlt: "Nieuw gelegd pad van rode klinkers in visgraatverband tussen hagen",
    punten: ["Ontwerp, aanleg en onderhoud", "Tuinafval wordt afgevoerd"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Schuttingen", "Hagen en bomen", "Tuinonderhoud", "Snoeien", "Gazon maaien"],

  intro: {
    kicker: "Posthumus Tuinen",
    tekst: "Een rustige plek om te ontspannen, een tuin vol *kleur en geur,* of strak en modern: we luisteren naar uw wensen en maken het samen met u waar.",
    stats: [
      { getal: "Netjes", label: "Opgeruimd werken, afval mee" },
      { getal: "Op maat", label: "Ook met uw eigen ontwerp" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *onderhoud*",
    tekst: "Een volledig nieuw ontwerp, een bestaande tuin vernieuwen of gewoon regelmatig onderhoud: we staan voor u klaar.",
    items: [
      { naam: "Tuinontwerp", foto: "img/muurtje.jpg", pos: "50% 60%", tekst: "We bespreken uw wensen en ideeën en vertalen die naar een ontwerp op maat, met aandacht voor detail, biodiversiteit en inheemse planten.",
        punten: ["Ontwerp op maat", "Kleine stadstuin of grote tuin", "Duurzaam en natuurlijk"] },
      { naam: "Tuinaanleg en bestrating", foto: "img/rondje.jpg", pos: "50% 60%", tekst: "Heeft u al een ontwerp? Dan brengen we het tot leven. Zo niet, dan maken we er eerst een. Terrassen, paden, borders en water, zorgvuldig uitgevoerd.",
        punten: ["Bestrating en terrassen", "Borders en beplanting", "Met uw of ons ontwerp"] },
      { naam: "Schuttingen, hagen en bomen", foto: "img/schutting.jpg", pos: "50% 50%", tekst: "Een nieuwe schutting, een haag of een boom planten, of juist een boom weghalen: ook dat regelen we voor u.",
        punten: ["Schuttingen plaatsen", "Hagen en bomen planten", "Bomen verwijderen"] },
      { naam: "Tuinonderhoud", foto: "img/entree.jpg", pos: "50% 70%", tekst: "Gazon maaien, struiken en bomen snoeien, borders verzorgen. We ruimen tussendoor op en voeren het tuinafval voor u af.",
        punten: ["Maaien en snoeien", "Winterklaar maken", "Tuinafval afvoeren"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Aan het werk",
    titel: "Uit *de praktijk*",
    tekst: "Een nieuwe voortuin met klinkers, rondingen en een gemetseld muurtje.",
    items: [
      { foto: "img/team.jpg", label: "Klinkers leggen in een ronding", sub: "Bestrating", pos: "50% 60%" },
      { foto: "img/hero.jpg", label: "Pad in visgraatverband", sub: "Bestrating", pos: "50% 60%" },
      { foto: "img/voortuin.jpg", label: "Voortuin in aanleg", sub: "Aanleg", pos: "50% 70%" },
      { foto: "img/klinkers.jpg", label: "Rondingen op maat", sub: "Bestrating", pos: "50% 60%" },
      { foto: "img/muurtje.jpg", label: "Gemetseld muurtje", sub: "Aanleg", pos: "50% 60%" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Arjan K.", tekst: "Zeer goed en vriendelijke man zeer professioneel. ook zijn medewerker is erg vriendelijk. … Nu de tuin afgemaakt zeer mooie bestrating gelegd. Ook in halletje. Wij zijn zeer tevreden … weer een dikke 10 dus." },
      { naam: "Gerbert H.", tekst: "Mark heeft ons binnen no-time van een boom afgeholpen. Netjes gewerkt en voorkomende collega. Van harte aanbevolen!" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Vakmanschap, *netheid* en respect voor de natuur",
    rol: "Posthumus Tuinen, Apeldoorn",
    tekst: [
      "Bij Posthumus Tuinen werken we nauw samen met u: we luisteren naar uw wensen en ideeën, en zorgen dat uw tuinproject soepel verloopt, van het eerste idee tot het laatste onderhoud.",
      "We houden van netheid en orde. Ons werkgebied blijft schoon en opgeruimd, en tuinafval voeren we graag voor u af."
    ],
    foto: "img/team.jpg", fotoPos: "50% 40%", fotoAlt: "Twee hoveniers leggen klinkers in een voortuin",
    knop: "Stuur ons een bericht"
  },

  faq: [
    { v: "Ik heb al een tuinontwerp. Kunnen jullie dat aanleggen?", a: "Ja. We realiseren uw eigen ontwerp met aandacht voor detail. Heeft u nog geen ontwerp, dan maken we er graag een voor u." },
    { v: "Nemen jullie het tuinafval mee?", a: "Ja, we ruimen tussendoor op en voeren het tuinafval voor u af." },
    { v: "Doen jullie ook vast onderhoud?", a: "Zeker: maaien, snoeien en borders verzorgen, zodat uw tuin er het hele jaar goed bij ligt." },
    { v: "Hoe neem ik contact op?", a: "Bel of app 06 29 38 30 92, of vul het formulier in. Zijn we druk in een andere tuin aan het werk, dan bellen we u zo snel mogelijk terug." }
  ],

  band: {
    foto: "img/rondje.jpg", fotoPos: "50% 55%",
    titel: "Klaar voor een *nieuwe tuin?*",
    tekst: "Vertel ons wat u voor ogen heeft. We denken graag met u mee."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vul het formulier in of stuur direct een WhatsApp met een foto van uw tuin. Liever een persoonlijk gesprek? Bel 06 29 38 30 92.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg en bestrating", "Schutting, haag of boom", "Tuinonderhoud"],
    voorbeeld: "Bijvoorbeeld: nieuwe bestrating in de voortuin en een haag langs het pad"
  }
};
