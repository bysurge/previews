// Hoveniersbedrijf De Zuidplas (Nieuwerkerk aan den IJssel). Bron: hoveniersbedrijf-dezuidplas.nl (26-11-2026) + Google (5,0 uit 6).
// Foto's: eigen fotoalbums van hun site + eigen Google-foto's. Contactpersoon Willem van der Klocht (site), Jacob genoemd in referenties.
window.SITE = {
  naam: "Hoveniersbedrijf De Zuidplas",
  kortNaam: "De Zuidplas",
  vak: "Hovenier",
  plaats: "Nieuwerkerk aan den IJssel",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 34,
  kleuren: { brand: "#1d4a2f", accent: "#3a9e57" },
  telefoon: "06 44 00 37 10",
  telefoonIntl: "31644003710",
  waTekst: "App Willem",
  email: "hoveniersbedrijfdezuidplas@solcon.nl",
  adres: ["Schoolstraat 31", "2912 CP Nieuwerkerk aan den IJssel"],
  kvk: "63255715",
  google: { score: "5,0", aantal: 6 },
  voetTekst: "Allround hovenier sinds 2015, specialist in tuinonderhoud. Tuinontwerp, tuinaanleg en onderhoud in Zuidplas, Rotterdam en omstreken.",

  hero: {
    regels: ["Een mooie tuin", "moet je ook", "*bijhouden.*"],
    tekst: "Tuinontwerp, tuinaanleg en vooral tuinonderhoud, voor particulieren en bedrijven in Zuidplas, Rotterdam en omstreken.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "50% 60%", donker: true,
    fotoAlt: "Rond terras van klinkers met buxushagen en een vijvertje",
    punten: ["Afspraak is afspraak", "Vrijblijvende offerte"]
  },

  marquee: ["Tuinonderhoud", "Onderhoudscontracten", "Tuinaanleg", "Tuinrenovatie", "Tuinontwerp", "Schuttingen en tuinmuren", "(Sier)bestrating", "Overkappingen en veranda's", "Vijvers en vlonders", "Tuinverlichting"],

  intro: {
    kicker: "De Zuidplas",
    tekst: "Wij beginnen en we *maken het af.* Met een goede planning, altijd vakwerk en een werkplek die we netjes achterlaten. Afspraak is afspraak.",
    stats: [
      { getal: "2015", label: "Eigen hoveniersbedrijf" },
      { getal: "5,0", label: "Op Google" },
      { getal: "9,4", label: "Gemiddeld op Trustoo" },
      { getal: "Flexibel", label: "Ook in werktijden" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *onderhoud*",
    tekst: "Elke tuin, van een kleine tuin bij een woonhuis tot een grote tuin bij een bedrijf of instelling.",
    items: [
      { naam: "Tuinonderhoud", foto: "img/border.jpg", pos: "50% 55%", tekst: "Onze specialiteit. Eenmalig of met een onderhoudscontract op maat: wekelijks, maandelijks of per jaar. U kiest zelf wat wij doen en wat u zelf doet.",
        punten: ["Onderhoudsplan per jaar", "Maaien, snoeien, onkruid", "Eenmalig of op contract"] },
      { naam: "Tuinaanleg en renovatie", foto: "img/gazon.jpg", pos: "50% 60%", tekst: "Een nieuwe tuin aanleggen of de oude opknappen, zonder onnodige onderbreking. Bij grote opdrachten werken we samen met vakbekwame collega-hoveniers.",
        punten: ["Grondwerk", "Beplanting en gazon", "Vijver, vlonder en verlichting"] },
      { naam: "Schuttingen en bestrating", foto: "img/pad.jpg", pos: "50% 60%", tekst: "Erfafscheiding met een schutting, heg of tuinmuur, en (sier)bestrating voor oprit, tuinpad of terras.",
        punten: ["Schutting, heg of tuinmuur", "Opritten en tuinpaden", "Terrassen"] },
      { naam: "Overkappingen", foto: "img/overkapping.jpg", pos: "50% 55%", tekst: "Een veranda, vrijstaande tuinoverkapping of prieel, mooi ingepast in de tuin.",
        punten: ["Veranda", "Vrijstaande overkapping", "Prieel en tuinhuis"] },
      { naam: "Tuinontwerp", foto: "img/plantenbak.jpg", pos: "50% 55%", tekst: "Voor kleinere tuinen maken we het ontwerp zelf, in nauwe samenspraak met u. Voor grote tuinen werken we samen met een tuinarchitect. Heeft u al een ontwerp, dan leggen we het tot in de puntjes aan.",
        punten: ["Advies over indeling", "Erfafscheiding en beplanting", "Samen met tuinarchitect"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Fotoalbum",
    titel: "Tuinen van *De Zuidplas*",
    tekst: "Een greep uit tuinen die we aanlegden en onderhouden. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/avond.jpg", label: "Overkapping met verlichting", sub: "Tuinaanleg" },
      { foto: "img/vijver.jpg", label: "Vijver met tuinhuis", sub: "Tuinaanleg" },
      { foto: "img/water.jpg", label: "Vlonder aan het water", sub: "Tuinaanleg aan het water" },
      { foto: "img/voortuin.jpg", label: "Voortuin met buxus", sub: "Aanleg en onderhoud" },
      { foto: "img/terras.jpg", label: "Strak terras met overkapping", sub: "Tuinaanleg" },
      { foto: "img/tuinhuis.jpg", label: "Tuinhuis met afdak", sub: "Houtwerk" },
      { foto: "img/voortuin2.jpg", label: "Voortuin met hagen", sub: "Tuinaanleg" },
      { foto: "img/pergola.jpg", label: "Pergola en terras", sub: "Overkapping" },
      { foto: "img/schutting.jpg", label: "Nieuwe schutting en gazon", sub: "Tuinaanleg" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Lisette van der K.", tekst: "De communicatie was goed en snel, er werd goed meegedacht over het eindresultaat. Ze hebben zeer netjes gewerkt en alles ruim op tijd afgekregen. … kan deze hovenier van harte aanbevelen!" },
      { naam: "Don H.", tekst: "Willem heeft een onderhoudsplan opgesteld, zodat we weten wat er door het jaar heen gaat gebeuren. Alle afspraken worden keurig nagekomen. … We zijn zeer tevreden." },
      { naam: "Eldo B.", tekst: "Mijn terras opgehoogd en anders aangelegd. Met minder tegels oogt het toch groter … Meedenken met beplanting speciaal voor vlinders en bijen doen ze ook heel goed." },
      { naam: "L. Relenas", tekst: "We hebben onze tuin laten renoveren door Willem en Jacob en genieten nu van onze mooie tuin met overkapping. De jongens zijn heel professioneel, eerlijk, netjes en betrouwbaar." },
      { naam: "Soraya", tekst: "Er was meteen een klik. … Onze tuin is mooier geworden dan we hadden gehoopt. Samen met zijn maat heeft Willem onze droomtuin waargemaakt." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Afspraak is *afspraak*",
    rol: "Willem van der Klocht, Hoveniersbedrijf De Zuidplas",
    tekst: [
      "Na 5 jaar opleiding en ervaring als allround hovenier is Hoveniersbedrijf De Zuidplas in 2015 voor zichzelf gestart.",
      "We geven graag advies over tuinontwerp en materialen, want de juiste materiaalkeuze maakt het verschil. U krijgt een duidelijke offerte, en met een goede planning wordt alles op het juiste moment geleverd.",
      "Betrouwbaarheid is ons motto: altijd vakwerk, de werkplek netjes achterlaten, en flexibel, ook in werktijden."
    ],
    foto: "img/gazon.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde tuin met gazon en borders",
    knop: "Stuur Willem een bericht"
  },

  werkgebied: {
    titel: "Zuidplas, Rotterdam en omstreken",
    tekst: "Wij werken voor particulieren en bedrijven in de gemeenten Zuidplas en Rotterdam (ook Nesselande en Hillegersberg), en verder in de regio.",
    plaatsen: ["Nieuwerkerk aan den IJssel", "Moordrecht", "Zevenhuizen-Moerkapelle", "Rotterdam", "Capelle aan den IJssel", "Krimpen aan den IJssel", "Zoetermeer", "Bleiswijk", "Berkel en Rodenrijs", "Reeuwijk", "Berkenwoude", "Vlaardingen"]
  },

  faq: [
    { v: "Kan ik zelf kiezen wat jullie onderhouden?", a: "Ja. U kiest zelf wat wij doen en wat u zelf doet: gras maaien, snoeien, onkruidbestrijding. Eenmaal per week, per maand of per jaar, wij geven u graag advies." },
    { v: "Maken jullie ook het ontwerp?", a: "Voor kleinere tuinen maken we het ontwerp zelf, samen met u. Voor grotere tuinen werken we samen met een tuinarchitect. U kunt ook met een eigen ontwerp komen." },
    { v: "Doen jullie ook grote projecten?", a: "Ja, van een kleine tuin bij een woonhuis tot een grote tuin bij een bedrijf of instelling. Bij grote opdrachten schakelen we vakbekwame collega-hoveniers in." },
    { v: "Is een offerte vrijblijvend?", a: "Ja. Bel, app of mail voor een afspraak of vraag direct een vrijblijvende offerte aan." }
  ],

  band: {
    foto: "img/avond.jpg", fotoPos: "50% 55%",
    titel: "Uw tuin *mooi houden?*",
    tekst: "Neem gerust contact op voor meer informatie, een afspraak of een vrijblijvende offerte."
  },

  contact: {
    titel: "Vraag een *vrijblijvende* offerte aan",
    tekst: "Vertel kort wat u voor ogen heeft. Bellen of appen kan ook: 06 44 00 37 10.",
    onderwerpen: ["Tuinonderhoud", "Tuinaanleg en renovatie", "Schuttingen en bestrating", "Overkapping", "Tuinontwerp"],
    voorbeeld: "Bijvoorbeeld: een onderhoudscontract voor onze achtertuin, eens per maand"
  }
};
