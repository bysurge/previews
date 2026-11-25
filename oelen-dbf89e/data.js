// Daktechniek Oelen (Hollandscheveld). Bron: daktechniekoelen.nl (alle pagina's) + Google (5,0 / 16), opgehaald 25-11-2026. Zie content.md.
// Foto's: eigen site + eigen Google-profiel. Geen stockfoto's.
window.SITE = {
  naam: "Daktechniek Oelen",
  plaats: "Hoogeveen",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-op-foto.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#202326", accent: "#e3a52a" },
  telefoon: "06 27 17 30 61",
  telefoonIntl: "31627173061",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of foto",
  email: "info@daktechniekoelen.nl",
  adres: ["Juffrouw Blekkinghstraat 3", "7913 EA Hollandscheveld"],
  kvk: "90655303",
  google: { score: "5,0", aantal: "16" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Gratis inspectie",
  voetTekst: "Gediplomeerd dakdekkersbedrijf uit Hollandscheveld. Platte en hellende daken in Hoogeveen en heel Noord-Nederland.",

  hero: {
    regels: ["Waterdicht.", "Tien jaar lang."],
    tekst: "Reparatie, renovatie of een nieuw plat dak. Rudolf Oelen helpt u met meer dan 25 jaar ervaring, in Hoogeveen en heel Noord-Nederland.",
    foto: "img/hero.jpg", fotoPos: "50% 55%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 45%",
    fotoAlt: "Nieuw plat dak met strakke daktrim, gelegd door Daktechniek Oelen",
    donker: true,
    punten: ["10 jaar garantie op waterdichtheid", "Meer dan 25 jaar ervaring", "Gratis dakinspectie"]
  },

  marquee: ["Bitumen", "EPDM", "Resitrix", "Dakrenovatie", "Nieuw plat dak", "Dakisolatie", "Daklekkage", "Stormschade", "Lichtkoepels", "Loodwerk", "Dakgoten"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "Ziet u vocht of schimmelplekken in het plafond? Bel of app Rudolf, dan komt hij kijken en adviseert hij wat er nodig is."
  },

  intro: {
    kicker: "Daktechniek Oelen",
    tekst: "Een gediplomeerd dakdekkersbedrijf uit Hollandscheveld. We werken alleen met de beste materialen, en daarom krijgt u 10 jaar garantie op de waterdichtheid. Met één vaste contactpersoon: Rudolf zelf.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "25+", label: "Jaar ervaring" },
      { getal: "10", tel: 10, label: "Jaar garantie op waterdichtheid" },
      { getal: "1", tel: 1, label: "Vaste contactpersoon" }
    ]
  },

  diensten: {
    titel: "Alles voor platte en hellende daken",
    tekst: "Voor particulieren en bedrijven. Van een kleine reparatie tot een volledig nieuw dak.",
    items: [
      { naam: "Dakbedekking", soort: "Dakbedekking", foto: "img/d-bitumen.jpg", pos: "50% 50%",
        tekst: "Bitumen is de meest gebruikte dakbedekking, met een bewezen levensduur van meer dan 20 jaar. We werken ook met kunststof, EPDM en Resitrix.",
        punten: ["Bitumen, EPDM, Resitrix", "Alleen de beste materialen", "10 jaar garantie op waterdichtheid"] },
      { naam: "Dakrenovatie en nieuw plat dak", soort: "Dakrenovatie", foto: "img/p-tuin.jpg", pos: "50% 50%",
        tekst: "Is uw dak aan vervanging toe, of komt er een nieuw dak? Het beste moment om te zorgen voor een lange levensduur, met of zonder isolatie.",
        punten: ["Eerst inspectie en advies", "Met of zonder isolatie", "Ook carports en garages"] },
      { naam: "Dakreparatie en lekkage", soort: "Dakreparatie / lekkage", foto: "img/d-reparatie.jpg", pos: "50% 50%",
        tekst: "Heeft de dakbedekking zijn beste tijd gehad, of ziet u vocht en schimmel in het plafond? We zoeken de oorzaak en herstellen ook de houten constructie.",
        punten: ["Daklekkage en stormschade", "Hersteltimmerwerk", "Eerlijk advies"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/p-zonnepanelen.jpg", pos: "50% 60%",
        tekst: "Vaak hoeft de bestaande isolatie er niet af en volstaat extra isolatie erbovenop. Dat scheelt flink in de kosten. Ook voor nieuwbouw zijn er opties.",
        punten: ["Gratis adviesgesprek", "Extra isolatie op bestaand dak", "Nieuwbouw"] }
    ],
    meer: [
      { naam: "Dakonderhoud", tekst: "Bladeren kunnen afvoeren verstoppen. Met onderhoud blijft uw dak langer goed." },
      { naam: "Lood- en zinkwerk", tekst: "Lood in gevels vervangen, inslijpen en conserveren. Zinken goten bekleden met kunststof." },
      { naam: "Afvoeren", tekst: "Standleidingen en vergaarbakken plaatsen of vervangen, in PVC of zink." },
      { naam: "En verder", tekst: "Lichtkoepels, groendaken, dakterrassen, dakshingles, valbeveiliging en stalen of zinken afdekkappen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Strak afgewerkte daken",
    tekst: "Een greep uit ons werk.",
    items: [
      { foto: "img/p-bus-dak.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 50%" },
      { foto: "img/p-dakrand.jpg", label: "Dakrand", sub: "Strakke afdekkap", pos: "50% 40%" },
      { foto: "img/p-hoek.jpg", label: "Aanbouw", sub: "Nieuwe daktrim", pos: "50% 40%" },
      { foto: "img/bus.jpg", label: "Op locatie", sub: "Altijd met eigen bus", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Ontzorgen, korte lijnen en heldere communicatie.",
    stappen: [
      { naam: "U neemt contact op", tekst: "Bel, app of mail. Stuur gerust een foto van uw dak mee." },
      { naam: "Gratis dakinspectie", tekst: "Rudolf komt langs en bekijkt hoe uw dak ervoor staat." },
      { naam: "Passende offerte", tekst: "In overleg komen we tot een offerte op maat, tegen een scherpe prijs." },
      { naam: "Vakkundig uitgevoerd", tekst: "Met de beste materialen en 10 jaar garantie op waterdichtheid." }
    ]
  },

  garantie: {
    kicker: "Onze belofte", navNaam: "Garantie",
    titel: "10 jaar garantie op waterdichtheid",
    tekst: "Omdat we alleen met de beste materialen en gereedschappen werken, staan we achter ons dak. Tien jaar lang.",
    lijst: {
      titel: "Waarom Daktechniek Oelen?",
      punten: [
        "Bewezen kwaliteit",
        "Meer dan 25 jaar ervaring",
        "Gediplomeerd bedrijf",
        "Vaste contactpersoon",
        "Service op maat"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Rudolf is een aimabele, uiterst klantvriendelijke man, die ons dak naar volle tevredenheid van nieuwe dakbedekking voorzien heeft. Een zeer nette werker, komt afspraken stipt na, reageert snel en accuraat …", naam: "Anna Verbrugge" },
      { tekst: "Rudolf heeft een professionele instelling waarbij hij meedenkt met de klant en heldere adviezen geeft. Hij heeft bij mij de carport gerestaureerd en samen met het dak van de garage van nieuw dakleer en daktrim voorzien.", naam: "Stefan" },
      { tekst: "… Rudolf Oelen (Daktechniek Oelen) een echte professional die zijn vak verstaat. Reuze blij met het strakke resultaat. Vanaf het eerste contact tot de afronding dik in orde.", naam: "Andre Boertien" },
      { tekst: "Eerder dan gepland kwam Rudolf het dak repareren. Rustig, geconcentreerd en ondanks de warmte werd het dak deskundig aangepakt. … Top prestatie en nogmaals bedankt.", naam: "Hans" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Goedendag, ik ben Rudolf",
    rol: "Rudolf Oelen, eigenaar Daktechniek Oelen",
    tekst: [
      "Met meer dan 25 jaar ervaring help ik u met veel plezier bij alle problemen en onderhoud aan platte en (licht) hellende daken. Lekkages verhelpen, renoveren, een volledig nieuw plat dak, isolatie of onderhoud.",
      "Zowel particulieren als bedrijven zijn welkom. We denken graag met u mee, zodat we samen tot een passende offerte komen. Denkt u aan verduurzaming of zonnepanelen? Ook dan helpt een gratis dakinspectie u op weg."
    ],
    foto: "img/over.jpg", fotoPos: "50% 40%", fotoAlt: "Rudolf Oelen op een plat dak",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur Rudolf een bericht"
  },

  werkgebied: {
    titel: "Heel Noord-Nederland",
    tekst: "Vanuit Hollandscheveld werken we in Hoogeveen en omgeving, en in heel Drenthe, Friesland, Groningen en Overijssel. Staat uw plaats er niet tussen? Neem gerust contact op.",
    plaatsen: ["Hoogeveen", "Hollandscheveld", "Drenthe", "Friesland", "Groningen", "Overijssel"]
  },

  faq: [
    { v: "Wat kost een dakinspectie?", a: "Niets. De dakinspectie en het adviesgesprek zijn gratis en de offerte is vrijblijvend." },
    { v: "Hoe lang gaat bitumen dakbedekking mee?", a: "Bitumen heeft een bewezen levensduur van meer dan 20 jaar, als er met kwaliteitsmaterialen wordt gewerkt. Op de waterdichtheid krijgt u 10 jaar garantie." },
    { v: "Moet de oude isolatie eraf?", a: "In veel gevallen niet. Vaak volstaat extra isolatie bovenop de bestaande laag, en dat scheelt flink in de kosten." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja, zowel particuliere als zakelijke klanten zijn bij ons aan het juiste adres." }
  ],

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. Rudolf neemt zelf contact met u op.",
    formTitel: "Inspectie of offerte aanvragen",
    onderwerpen: ["Gratis dakinspectie", "Dakbedekking", "Dakrenovatie", "Nieuw plat dak", "Daklekkage", "Dakisolatie", "Anders"],
    voorbeeld: "Bijvoorbeeld: het dak van onze garage lekt bij de dakrand na een flinke bui",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
