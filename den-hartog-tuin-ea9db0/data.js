// Den Hartog Tuincreaties (Lent, Nijmegen). Bronnen: denhartogtuinen.nl (over ons, stijl, ontwerp, realisatie, renovatie,
// onderhoud, recensies, contact) + Google-profiel (5,0 uit 5). Alle foto's van hun eigen site. Geen stockfoto's.
// Reviews: van hun eigen recensiepagina (namen zoals daar vermeld) + Google.
window.SITE = {
  naam: "Den Hartog Tuincreaties",
  kortNaam: "Den Hartog",
  vak: "Tuinontwerper en hovenier",
  titelExtra: "Tuinontwerp en hovenier in Lent en Nijmegen",
  plaats: "Lent",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 50,
  kleuren: { brand: "#3a3226", accent: "#7d9a2c" },
  telefoon: "06 25 08 47 69",
  telefoonIntl: "31625084769",
  waTekst: "App Boy",
  email: "info@denhartogtuinen.nl",
  adres: ["Steltsestraat 18", "6663 BS Nijmegen"],
  google: { score: "5,0", aantal: 5 },
  voetTekst: "Tuinontwerp, tuinaanleg en tuinonderhoud in Lent, Nijmegen en omgeving. Rust en eenvoud, zonder tierelantijnen.",

  hero: {
    regels: ["Een tuin met", "rust en", "*eenvoud.*"],
    tekst: "Boy den Hartog ontwerpt, legt aan en onderhoudt tuinen in Lent, Nijmegen en omgeving. Eén aanspreekpunt, van eerste schets tot vaste onderhoudsbeurt.",
    donker: true,
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%",
    fotoAlt: "Terras met twee houten banken aan het water, onder een grote boom",
    punten: ["Tuinarchitect sinds 2011", "Ontwerp, aanleg en onderhoud"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinrenovatie", "Beplantingsplannen", "Bloemenborders", "Vijvers", "Tuinabonnementen", "Grasmaaien"],

  intro: {
    kicker: "Den Hartog Tuincreaties",
    tekst: "Hagen en bomen als basis, sierlijke heesters, *wuivende grassen* en bloeiende borders erin. Een tuin die past bij uw huis, en waar u vanuit de woning naar blijft kijken.",
    stats: [
      { getal: "2011", label: "Eigen bedrijf sinds" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "1", label: "Vast aanspreekpunt, van ontwerp tot onderhoud" }
    ]
  },

  diensten: {
    titel: "Van schets tot *bloeiende tuin*",
    tekst: "U kiest zelf hoeveel u uit handen geeft: alleen het ontwerp, de hele aanleg, of ook het onderhoud daarna.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 55%", tekst: "Na een kennismaking meet Boy de tuin in en maakt hij een schetsplan dat u samen doorloopt. Daarna volgt een definitief ontwerp, op schaal en in kleur.",
        punten: ["Schetsplan en definitief ontwerp", "Beplantingsplan", "Verlichting en beregening"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Boy begeleidt de hele aanleg, zodat u één aanspreekpunt heeft. Of u doet zelf een deel: dan levert en plant hij op de juiste momenten mee.",
        punten: ["Uitzetten van de tuin", "Bestrating en materialen", "Leveren en planten"] },
      { naam: "Tuinrenovatie", foto: "img/renovatie.jpg", pos: "50% 55%", tekst: "Toe aan iets anders? Boy brengt in kaart wat beter kan en wat kan blijven. Niet altijd hoeft de hele tuin op de schop, en dat scheelt kosten.",
        punten: ["Plan op maat", "Hergebruik waar het kan", "Nieuwe borders"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 60%", tekst: "Een tuinabonnement dat bij u past: in het voor- en najaar, elk kwartaal, iedere maand of op afroep. Ook wekelijks grasmaaien kan.",
        punten: ["Voor- en najaar", "Elk kwartaal of maandelijks", "Op afroep", "Grasmaaien"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *Den Hartog*",
    tekst: "Een greep uit tuinen die Boy ontwierp, aanlegde of onderhoudt.",
    items: [
      { foto: "img/vijver.jpg", label: "Vijver met waterlelies en kattenstaart", sub: "Ontwerp en aanleg", pos: "50% 55%" },
      { foto: "img/pergola.jpg", label: "Stadstuin met pergola en terras", sub: "Ontwerp en aanleg" },
      { foto: "img/border-paard.jpg", label: "Border met kogeldistels langs de haag", sub: "Beplanting" },
      { foto: "img/sproeier.jpg", label: "Gazon met grindpad en jonge bomen", sub: "Aanleg" },
      { foto: "img/grassen.jpg", label: "Lampenpoetsersgras in een strakke bak", sub: "Beplanting" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot stand*",
    tekst: "Een goed doordacht ontwerp is de basis voor jarenlang tuinplezier.",
    stappen: [
      { naam: "Kennismaken", tekst: "Samen nemen we uw wensen en aandachtspunten door, en Boy kijkt naar de omgeving en de huidige tuin." },
      { naam: "Inmeten en schetsplan", tekst: "Na akkoord op de offerte meet Boy de tuin in en presenteert hij een schetsplan. Wijzigen kan nog." },
      { naam: "Definitief ontwerp", tekst: "Op schaal en in kleur, met beplantingsplan en eventueel verlichting en beregening." },
      { naam: "Aanleg en onderhoud", tekst: "Boy begeleidt de aanleg en houdt de tuin daarna desgewenst bij met een tuinabonnement." }
    ]
  },

  reviews: {
    titel: "Wat klanten over *Boy* zeggen",
    items: [
      { naam: "Familie Bos", tekst: "In een paar dagen een enorme metamorfose naar een rustige, makkelijk te onderhouden tuin. En zoals ik het wilde: geen modieuze fratsen, maar inheemse planten met verwijzingen naar de geschiedenis van Lent. … Een aanrader!" },
      { naam: "Familie Groos", tekst: "Boy denkt mee, is vakkundig, heeft ideeën, en heeft verstand van allerlei aspecten van tuinen: beplanting, aanleg borders, en dan onze prachtige vijver waar we elke dag van genieten. … En, o ja, hij heeft nog gevoel voor humor ook!" },
      { naam: "Familie Jansen", tekst: "Het aanleggen gebeurde professioneel en binnen de geschatte tijd met echt minimaal overlast. Eind van de dag was steeds alles wat weg moest, afgevoerd en schoon. … We genieten nu dagelijks van de tuin." },
      { naam: "Hans E.", tekst: "Komt zijn beloftes na.. levert prima werk.. ruimt ook alles weer netjes op. Tegen een prima prijs.. kortom zeer aanbevelenswaardig." },
      { naam: "Familie Peeters", tekst: "Boy is erg servicegericht: een kleine beschadiging aan de schuur werd snel en professioneel verholpen en toen na enkele weken bleek dat een aantal planten niet goed wilde opkomen, werden deze op zeer korte termijn vervangen door nieuwe exemplaren." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over Boy",
    titel: "Boy den Hartog, *tuinontwerper en hovenier*",
    rol: "Den Hartog Tuincreaties, Lent",
    tekst: [
      "Na de hoveniersopleiding en management groen deed Boy veel ervaring op als hovenier. In 2011 rondde hij de opleiding tuinarchitectuur af en begon hij voor zichzelf.",
      "Hij ontwerpt, onderhoudt en begeleidt de aanleg van tuinen, voor particulieren en voor bedrijven. Zijn ontwerpen kenmerken zich door rust en eenvoud: stijlvol, zonder tierelantijnen."
    ],
    foto: "img/border.jpg", fotoPos: "50% 60%", fotoAlt: "Tuin met ooievaarsbek, siergrassen en gazon",
    knop: "Stuur Boy een bericht"
  },

  werkgebied: {
    titel: "Lent, Nijmegen *en omgeving*",
    tekst: "Den Hartog Tuincreaties werkt in de hele regio, vooral in deze plaatsen.",
    plaatsen: ["Lent", "Nijmegen", "Beuningen", "Wijchen", "Malden", "Groesbeek", "Ubbergen", "Heilig Landstichting", "Arnhem", "Elst", "Bemmel"]
  },

  faq: [
    { v: "Moet ik ontwerp én aanleg bij u afnemen?", a: "Nee, u bent vrij in uw keuze. Vaak gaan ontwerp en aanleg wel hand in hand, en is Boy van ontwerp tot realisatie betrokken." },
    { v: "Kan ik zelf meewerken aan de aanleg?", a: "Ja. Boy kan de tuin uitzetten, materialen en planten leveren en u op de juiste momenten begeleiden. U schakelt hem in waar u dat nodig vindt." },
    { v: "Moet bij een renovatie de hele tuin op de schop?", a: "Niet altijd. Boy kijkt goed welke delen kunnen blijven of hergebruikt kunnen worden. Dat kan kosten besparen." },
    { v: "Welke tuinabonnementen zijn er?", a: "Onderhoud in het voor- en najaar, elk kwartaal, iedere maand of op afroep, en wekelijks grasmaaien. Samen bekijken we wat bij u past." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Zin in een tuin *die bloeit?*",
    tekst: "Boy komt graag langs voor een kennismaking in uw tuin."
  },

  contact: {
    titel: "Vraag een *kennismaking* aan",
    tekst: "Vertel kort wat u wilt. Boy neemt contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinrenovatie", "Tuinabonnement", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de buxus is weg en we willen een border die lang bloeit"
  }
};
