// Dakdekkersbedrijf van Moerkerk (Geleen). Bron: vanmoerkerk.com + Google (4,6 / 31). Foto's: eigen site + Google-profiel.
// Geen 06 / WhatsApp -> whatsapp:false, bellen naar vast nummer. Logo op site is 100x19 px -> eenvoudig beeldmerk nagetekend + naam als tekst.
window.SITE = {
  naam: "Dakdekkersbedrijf van Moerkerk",
  kortNaam: "Van Moerkerk",
  plaats: "Geleen",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Geleen en omgeving",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  kleuren: { brand: "#13263f", accent: "#4f86c6" },
  telefoon: "046 - 474 19 85",
  telefoonIntl: "31464741985",
  telBel: "+31464741985",
  whatsapp: false,
  email: "info@vanmoerkerk.com",
  adres: ["Groenstraat 174", "6162 ET Geleen"],
  kvk: "14031716",
  google: { score: "4,6", aantal: "31" },
  ctaTekst: "Vrijblijvende offerte",
  navCta: "Offerte",
  voetTekst: "Platte daken, pannendaken, dakkapellen, boeiboorden, dakgoten en schoorstenen. Sinds 1979 in Geleen en omgeving.",

  hero: {
    regels: ["Renoveren", "zonder zorgen."],
    tekst: "Sinds 1979 het dakdekkersbedrijf voor bestaande woningen in Geleen en omgeving. Van plat dak tot dakkapel, met 10 jaar volledige garantie.",
    foto: "img/hero.jpg", fotoPos: "50% 35%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 40%",
    fotoAlt: "Nieuwe antraciet dakkapel met rolluiken op een pannendak",
    donker: true,
    punten: ["Sinds 1979", "10 jaar garantie", "VCA-gecertificeerd"]
  },

  marquee: ["Platte daken", "Pannendaken", "Dakkapellen", "Boeiboordbekleding", "Dakgoten", "Schoorstenen", "Dakisolatie", "Carports"],

  spoed: {
    titel: "Daklekkage?",
    tekst: "Bel direct voor een spoedklus. We komen uw dak zo snel mogelijk repareren.",
    knop: "Bel 046 - 474 19 85"
  },

  intro: {
    kicker: "Sinds 1979",
    tekst: "Dakdekkersbedrijf van Moerkerk is gespecialiseerd in herstelwerk aan bestaande woningen. Van een plat dak tot een nieuwe dakkapel: wij adviseren eerlijk en werken alleen met materiaal van A-merkkwaliteit.",
    stats: [
      { getal: "1979", label: "Opgericht in Geleen" },
      { getal: "10 jaar", label: "Volledige garantie" },
      { getal: "4,6", label: "Gemiddeld op Google" },
      { getal: "VCA", label: "Gecertificeerd" }
    ]
  },

  diensten: {
    titel: "Voor tal van klussen aan uw dak",
    tekst: "Wij komen vrijblijvend bij u thuis of op kantoor om de mogelijkheden te bespreken.",
    items: [
      { naam: "Platte daken", soort: "Bitumen en isolatie", foto: "img/lichtkoepel.jpg", pos: "50% 50%", tekst: "Een goed plat dak gaat met de nieuwste technieken en materialen 25 tot 35 jaar mee. Wij adviseren u ook graag over isoleren.",
        punten: ["Bitumen dakbedekking", "Dakisolatie", "Lichtkoepels en daglicht"] },
      { naam: "Pannendaken", soort: "Repareren en vernieuwen", foto: "img/pannendak.jpg", pos: "50% 50%", tekst: "Keramische of betonnen pannen, staal of zink. Wij repareren en vernieuwen daken in de bestaande woningbouw.",
        punten: ["Dakpannen vernieuwen", "Reparaties", "Advies over het uiterlijk"] },
      { naam: "Dakkapellen", soort: "Meer ruimte en licht", foto: "img/dakkapel.jpg", pos: "50% 50%", tekst: "Maak van uw zolder een echte kamer. Desgewenst met geïntegreerd rolluik en kunststof kozijn.",
        punten: ["Dakkapel plaatsen", "Rolluik en kunststof kozijn", "Daglichtsystemen"] },
      { naam: "Boeiboordbekleding", soort: "Nooit meer verven", foto: "img/boeiboord-goot.jpg", pos: "50% 50%", tekst: "Wij bekleden uw boeiboorden met Trespa of Plastisol. Mooi afgewerkt en u hoeft ze nooit meer te verven.",
        punten: ["Trespa of Plastisol", "Veel RAL-kleuren", "Past achter daktrim en kraallijst"] }
    ],
    meer: [
      { naam: "Dakgoten en regenbuizen", tekst: "Repareren of vervangen, en dakgoten en daken reinigen." },
      { naam: "Schoorstenen", tekst: "Kanaalinspecties en schoorsteen vegen." },
      { naam: "Carports en overkappingen", tekst: "Een vaste overkapping of carport, stevig en waterdicht." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit onze klussen in Geleen en omgeving.",
    items: [
      { foto: "img/isolatie.jpg", label: "Plat dak isoleren", sub: "Nieuwe isolatieplaten", pos: "50% 45%" },
      { foto: "img/werk-woning.jpg", label: "Dakrenovatie", sub: "Woning", pos: "50% 50%" },
      { foto: "img/schoorsteen.jpg", label: "Schoorsteenkap", sub: "Op plat dak", pos: "50% 50%" },
      { foto: "img/plat-dak.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 50%" },
      { foto: "img/gevel.jpg", label: "Gevel- en boeiboordbekleding", sub: "Strak afgewerkt", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Eerlijk advies, vakwerk en een telefoontje achteraf.",
    foto: "img/dakopbouw.jpg", fotoPos: "50% 50%", fotoAlt: "Dakdekkers aan het werk aan een woning",
    stappen: [
      { naam: "Contact", tekst: "Bel of mail ons, of vul het formulier in." },
      { naam: "Advies bij u thuis", tekst: "We komen vrijblijvend langs en kijken wat er echt nodig is." },
      { naam: "Vakwerk", tekst: "Veilig uitgevoerd door ons VCA-gecertificeerde team, met A-merk materialen." },
      { naam: "Evaluatie", tekst: "Na de oplevering bellen we u altijd nog even om te horen hoe het bevalt." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Bij de aankoop van ons huis … hebben we 4 bedrijven laten komen voor een dakinspectie. 3 bedrijven wilde ons meteen een nieuw dak \"aansmeren\" … Michel van Moerkerk was de enige die een grondige inspectie heeft gedaan en met het eerlijke antwoord kwam.", naam: "G. Creemers" },
      { tekst: "Komt afspraken stipt na, reageert snel op contactformulier en mails. … Kortom: heel tevreden over dit mooie familiebedrijf dat zeer goed werk levert voor een redelijke prijs!", naam: "Ingrid L." },
      { tekst: "Op de eerste plaats uitermate prettig dat ze helder zijn in hun communicatie en de gemaakte afspraak zijn nagekomen, ondanks drukte net voor de bouwvak. … Volgende keer wenden wij ons opnieuw tot dit bedrijf.", naam: "Graziella R." },
      { tekst: "Deze firma is echter voor ons \"de\" firma om zaken mee te doen als het om dak en schoorsteen-werkzaamheden aangaat. … Moerkerk vinden wij echt een aanrader.", naam: "Peter P." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Een familiebedrijf sinds 1979",
    rol: "Groenstraat 174, Geleen",
    tekst: [
      "In 1979 werd Dakdekkersbedrijf van Moerkerk opgericht. Inmiddels zijn we volledig gespecialiseerd in bijna alle dakwerkzaamheden, vooral voor particulieren, maar ook voor gemeenten en scholen.",
      "Advies en service vinden we vanzelfsprekend. Daarom werken we alleen met A-merk materialen, krijgt u 10 jaar volledige garantie op al ons werk (reparaties uitgezonderd) en bellen we na de oplevering altijd nog even om te evalueren."
    ],
    foto: "img/pand.jpg", fotoPos: "45% 50%", fotoAlt: "Het bedrijfspand van Van Moerkerk aan de Groenstraat in Geleen",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Geleen en omgeving",
    tekst: "Vanuit de Groenstraat in Geleen werken we voor woningen, gemeenten en scholen in de regio."
  },

  faq: [
    { v: "Hoeveel garantie krijg ik?", a: "U krijgt 10 jaar volledige garantie op al onze werken. Reparatiewerken zijn hiervan uitgesloten." },
    { v: "Komen jullie eerst kijken?", a: "Ja. We komen graag vrijblijvend bij u thuis of op kantoor om de mogelijkheden te bespreken." },
    { v: "Ik heb een lekkage. Kunnen jullie snel komen?", a: "Bel ons direct op 046 - 474 19 85. We komen uw dak zo snel mogelijk repareren." },
    { v: "Hoe lang gaat een plat dak mee?", a: "Met de nieuwste technieken en materialen gaat een plat dak inmiddels 25 tot 35 jaar mee." }
  ],

  band: {
    foto: "img/isolatie.jpg", fotoPos: "50% 30%",
    titel: "Klaar voor een dak zonder zorgen?",
    tekst: "Vertel ons wat er aan uw dak moet gebeuren. We denken vrijblijvend met u mee."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Bel of mail ons, of laat hieronder een bericht achter. We nemen zo snel mogelijk contact met u op.",
    formTitel: "Aanvraag",
    onderwerpen: ["Plat dak", "Pannendak", "Dakkapel", "Boeiboorden", "Dakgoten", "Schoorsteen", "Lekkage"],
    voorbeeld: "Bijvoorbeeld: de dakgoot aan de achterkant lekt en de boeiboorden bladderen",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
