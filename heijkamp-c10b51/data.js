// Hoveniersbedrijf D. Heijkamp (Nieuwegein). Bron: hoveniersbedrijf-dheijkamp.nl (26-11-2026, oude bouwpakket-site) + Google (4,4 uit 7).
// Foto's: eigen foto's van hun site (max 600px breed, kleiner bestaat niet). Google-foto's waren onbruikbaar (kapot/binnenfoto). Geen stockfoto's.
// Logo: hun echte logo staat alleen klein op een bouwbord (twee bomen); hier een eenvoudig boom-icoon in hun kleuren + naam.
window.SITE = {
  naam: "Hoveniersbedrijf D. Heijkamp",
  kortNaam: "D. Heijkamp",
  vak: "Hovenier",
  plaats: "Nieuwegein",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  kleuren: { brand: "#2e4630", accent: "#b8532c" },
  telefoon: "06 54 36 37 39",
  telefoonIntl: "31654363739",
  waTekst: "App Dick",
  email: "mail@hoveniersbedrijf-dheijkamp.nl",
  adres: ["Marconibaan 40", "3439 MS Nieuwegein"],
  kvk: "30112034",
  google: { score: "4,4", aantal: 7 },
  ctaTekst: "Vraag vrijblijvend advies",
  voetTekst: "Sinds 1993 tuinrenovatie, tuinaanleg en tuinonderhoud in Nieuwegein en omstreken. Voor particulieren, bedrijven en instellingen.",

  hero: {
    regels: ["Sinds 1993", "uw hovenier in", "*Nieuwegein.*"],
    tekst: "Tuinrenovatie, tuinaanleg en tuinonderhoud voor particulieren en bedrijven. Dick komt persoonlijk langs voor advies, weer of geen weer betrokken.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%", donker: true,
    fotoAlt: "Tuin met rond terras in sierbestrating en een border vol beplanting",
    punten: ["Geen voorrijkosten", "SBB erkend leerbedrijf"]
  },

  marquee: ["Tuinrenovatie", "Tuinaanleg", "Sierbestrating", "Erfafscheiding", "Vijvers en vlonders", "Tuinonderhoud", "Hagen en snoeien", "Bedrijfstuinen"],

  intro: {
    kicker: "Hoveniersbedrijf D. Heijkamp",
    tekst: "Begonnen als eenmanszaak, inmiddels gegroeid, maar het *persoonlijk contact* staat nog altijd voorop. Van het eerste advies tot de laatste plant.",
    stats: [
      { getal: "1993", label: "Hovenier sinds" },
      { getal: "4,4", label: "Gemiddeld op Google" },
      { getal: "€ 0", label: "Voorrijkosten" },
      { getal: "SBB", label: "Erkend leerbedrijf" }
    ]
  },

  keurmerkenTitel: "Erkend",
  keurmerken: [
    { naam: "SBB erkend leerbedrijf", sub: "Medewerkers vakkundig geschoold" }
  ],

  diensten: {
    titel: "Alles voor uw tuin, *uit één hand*",
    tekst: "Door jarenlange ervaring doen we tuinrenovatie, aanleg en onderhoud in de breedste zin van het woord. Staat uw wens er niet bij? Vraag het gerust.",
    items: [
      { naam: "Tuinrenovatie", foto: "img/renovatie.jpg", pos: "50% 55%", tekst: "Een vervallen of verkeerd aangelegde tuin weer mooi en bruikbaar maken: opnieuw indelen, bestrating ophogen en nieuwe borders.",
        punten: ["Herstel van een vervallen tuin", "Tuin opnieuw indelen", "Bestrating ophogen"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Van ontwerp tot oplevering: sierbestrating, erfafscheiding, vijver, vlonder, gazon, beplanting, verlichting en drainage. Ook een schuur of blokhut plaatsen we.",
        punten: ["Tuinontwerp en sierbestrating", "Schuttingen en erfafscheiding", "Vijver, vlonder en verlichting"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 50%", tekst: "Uw tuin voorjaars- of winterklaar, het gazon gezond en de hagen strak. Met hoogwaardige materialen en beplanting, zodat u er lang plezier van heeft.",
        punten: ["Snoeien en hagen knippen", "Gazon en maaiwerk", "Onkruid en boomverzorging"] },
      { naam: "Bedrijven en instellingen", foto: "img/bedrijven.jpg", pos: "50% 55%", tekst: "Aanleg, renovatie en onderhoud voor bedrijven, VvE's en zorgcentra. Met een onderhoudscontract (factuur per kwartaal) of op afroep, en snel ter plaatse bij blad, gladheid of zwerfvuil.",
        punten: ["Onderhoudscontract of op afroep", "Gladheidsbestrijding", "Belevings- en bewegingstuinen"] },
      { naam: "Herinneringsboom", foto: "img/boom.jpg", pos: "50% 50%", tekst: "Een levend monument voor een dierbare: een boom die groeit en bloeit. We helpen kiezen welke boom het beste past, en leveren en planten hem.",
        punten: ["Advies over de boomsoort", "Levering en plaatsing"] }
    ]
  },

  seizoenen: {
    kicker: "Het hele jaar",
    titel: "Elk seizoen *zijn eigen werk*",
    tekst: "Particulier of zakelijk: we zorgen dat het juiste werk op het juiste moment gebeurt.",
    items: [
      { naam: "Lente", maanden: "maart – mei", foto: "img/boom.jpg", titel: "De tuin *voorjaarsklaar*",
        tekst: "Borders bijwerken, nieuwe beplanting en het gazon een goede start geven.",
        punten: ["Voorjaarsklaar maken", "Beplanting", "Onderhoud gazon"] },
      { naam: "Zomer", maanden: "juni – augustus", foto: "img/zomer.jpg", titel: "Genieten, *wij houden het bij*",
        tekst: "U zit buiten, wij houden de hagen strak en het onkruid weg.",
        punten: ["Hagen knippen", "Maaiwerkzaamheden", "Onkruid verwijderen"] },
      { naam: "Herfst", maanden: "september – november", foto: "img/herfst.jpg", pos: "50% 55%", titel: "Blad ruimen en *winterklaar*",
        tekst: "Vallend blad bij bedrijven ruimen we snel op, en de tuin gaat netjes de winter in.",
        punten: ["Bladruimen bij bedrijven", "Winterklaar maken", "Snoeien"] },
      { naam: "Winter", maanden: "december – februari", foto: "img/winter.jpg", titel: "Veilig en *klaar voor de lente*",
        tekst: "Gladheidsbestrijding voor bedrijven, en het goede moment voor snoei, boomverzorging en renovatie.",
        punten: ["Gladheidsbestrijding bedrijven", "Boomverzorging", "Tuinrenovatie plannen"] }
    ]
  },

  voorNa: {
    titel: "Van verwilderd naar *verzorgd*",
    tekst: "Sleep over de foto. Links de tuin zoals we hem aantroffen, rechts na de renovatie.",
    items: [
      { naam: "Voortuin met schutting", voor: "img/voor-1.jpg", na: "img/na-1.jpg" },
      { naam: "Zijpad", voor: "img/voor-2.jpg", na: "img/na-2.jpg" },
      { naam: "Voortuin", voor: "img/voor-3.jpg", na: "img/na-3.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *Heijkamp*",
    tekst: "Een greep uit tuinen die we aanlegden, renoveerden en onderhouden.",
    items: [
      { foto: "img/p-pad.jpg", label: "Kunstgras met slingerend pad", sub: "Tuinaanleg", pos: "50% 60%" },
      { foto: "img/p-vijver.jpg", label: "Vijvertuin", sub: "Onderhoud" },
      { foto: "img/p-terras.jpg", label: "Leisteen in wildverband", sub: "Sierbestrating" },
      { foto: "img/p-schutting.jpg", label: "Schutting en terras", sub: "Erfafscheiding" },
      { foto: "img/p-lounge.jpg", label: "Terras met tuinhuis", sub: "Tuinaanleg" }
    ]
  },

  werkwijze: {
    titel: "Zo werken *wij*",
    tekst: "Door goed overleg en meedenken maken we voor iedereen een passend voorstel, voor iedere beurs.",
    stappen: [
      { naam: "Dick komt langs", tekst: "Persoonlijk advies bij u in de tuin. Overdag, of als dat beter uitkomt 's avonds of in het weekend." },
      { naam: "Offerte op maat", tekst: "U krijgt een duidelijk voorstel dat past bij uw wensen en budget. Geen voorrijkosten." },
      { naam: "Aanleg of renovatie", tekst: "Met hoogwaardige materialen en beplanting, en met betrokkenheid van begin tot eind." },
      { naam: "Onderhoud", tekst: "Eenmalig, op afroep of met een vast onderhoudscontract, zodat de tuin mooi blijft." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Jolanda S.", tekst: "Wat een topper. Harde werker. Meedenker. Goede uitvoerder. En tot slot: laat het keurig schoon en opgeruimd achter. Top hovenier!" }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Weer of geen weer, *betrokken*",
    rol: "Sinds 1993 in Nieuwegein",
    tekst: [
      "Hoveniersbedrijf D. Heijkamp begon in 1993 als eenmanszaak. Inmiddels zijn we gegroeid, maar Dick houdt het persoonlijk contact met klanten hoog in het vaandel.",
      "Onze medewerkers zijn vakkundig geschoold; we zijn een SBB erkend leerbedrijf. U kent ons misschien van de tuinen die we aanlegden en onderhouden bij zorgcentra in Nieuwegein, zoals de Belevingstuin en Ontmoetingstuin van De Geinsche Hof en de Bewegingstuin in Vreeswijk."
    ],
    foto: "img/werk.jpg", fotoPos: "50% 40%", fotoAlt: "Tegels op maat slijpen tijdens de aanleg",
    knop: "App Dick"
  },

  werkgebied: {
    titel: "Nieuwegein en omstreken",
    tekst: "Gevestigd in Nieuwegein, dus vaak bij u in de buurt. Daardoor rekenen we geen voorrijkosten.",
    plaatsen: ["Nieuwegein", "Vreeswijk", "Utrecht", "Vleuten"]
  },

  faq: [
    { v: "Rekenen jullie voorrijkosten?", a: "Nee. We zijn gevestigd in Nieuwegein en berekenen geen voorrijkosten." },
    { v: "Kan Dick ook 's avonds langskomen?", a: "Ja. Advies aan huis kan op werkdagen, maar als dat u beter uitkomt ook in de avond of het weekend." },
    { v: "Werken jullie ook voor bedrijven en VvE's?", a: "Ja. De meeste zakelijke klanten kiezen een onderhoudscontract met een factuur per kwartaal, maar onderhoud op afroep kan ook." },
    { v: "Staat mijn klus er niet bij?", a: "Neem toch contact op. Dit is maar een deel van ons werk; hoogstwaarschijnlijk kunnen we u toch helpen." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Uw tuin *weer op orde?*",
    tekst: "Dick komt vrijblijvend langs voor advies en een offerte op maat."
  },

  contact: {
    titel: "Vraag vrijblijvend *advies* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Dick neemt contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinrenovatie", "Tuinaanleg", "Tuinonderhoud", "Bedrijven en VvE's", "Herinneringsboom"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw bestraten en een nieuwe schutting"
  }
};
