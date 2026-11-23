// Geraeds Breda (Breda). Bron: geraedsbreda.nl (alle pagina's) + Google (4,9 / 129), opgehaald 23-11-2026. Zie content.md.
// Geen los logo-bestand: laurier "ANNO 1953" van hun site als beeldmerk + naam.
window.SITE = {
  naam: "Geraeds Breda",
  kortNaam: "Geraeds Breda",
  plaats: "Breda",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoHoogte: 34,
  kleuren: { brand: "#1d2124", accent: "#e07a4c" },
  telefoon: "06 52 23 18 76",
  telefoonIntl: "31652231876",
  telefoon2: "076 542 92 48",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of foto",
  email: "info@geraedsbreda.nl",
  adres: ["Pieternel Koomansstraat 47", "4822 WC Breda"],
  google: { score: "4,9", aantal: "129" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Familiebedrijf sinds 1953. Dakpannen, dakgoten, schoorstenen, boeiboorden, dakisolatie en timmerwerk aan uw dak, in heel West-Brabant.",

  hero: {
    regels: ["Met een hart", "voor daken."],
    tekst: "Familiebedrijf uit Breda, sinds 1953. Nieuwe dakpannen, dakgoten, schoorstenen, boeiboorden en isolatie: op uw huis, uw aanbouw en uw schuur.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 40%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 50%",
    fotoAlt: "Nieuw oranje pannendak van Geraeds Breda, van bovenaf gezien",
    donker: true,
    punten: ["Sinds 1953", "7 jaar garantie", "VCA-gecertificeerd"]
  },

  marquee: ["Dakpannen", "Dakgoten", "Schoorstenen", "Boeiboorden", "Dakisolatie", "Timmerwerk", "Nokvorsten", "Dakramen", "Regenpijpen"],

  intro: {
    kicker: "Familiebedrijf sinds 1953",
    tekst: "In 1953 begon de (over)grootvader. Nu staan de (klein)kinderen op het dak, met dezelfde passie. En als we klaar zijn, ruimen we alles netjes op.",
    stats: [
      { getal: "1953", label: "Opgericht als familiebedrijf" },
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "129", tel: 129, label: "Reviews op Google" },
      { getal: "7 jaar", label: "Garantie op ons werk" }
    ]
  },

  diensten: {
    titel: "Alles voor uw pannendak",
    tekst: "Renovatie of nieuwbouw, groot onderhoud of een losse goot. Het hele dak in één hand.",
    items: [
      { naam: "Dakpannen", soort: "Dakpannen", foto: "img/dakpannen.jpg", pos: "50% 60%", tekst: "Nieuwe pannen, met of zonder nieuwe panlatten en damp-open folie. Beton of keramisch, en we adviseren welke het beste bij uw huis past.",
        punten: ["Nieuwe pannen en hulpstukken", "Nokvorst met ventilerende nok", "Gebruikte pannen op voorraad"] },
      { naam: "Dakgoten", soort: "Dakgoot", foto: "img/dakgoten.jpg", pos: "50% 30%", tekst: "Zinken, PVC of getimmerde goten. Een nieuwe zinken bak op de bestaande beugels, of de hele goot vernieuwd.",
        punten: ["Aangesloten op de goot van de buren", "Betimmering in hout of plastisol", "Zinken of PVC regenpijpen"] },
      { naam: "Schoorstenen", soort: "Schoorsteen", foto: "img/schoorstenen.jpg", pos: "35% 50%", tekst: "Van opnieuw voegen tot afbreken en opmetselen. Of de schoorsteen helemaal weg, als u hem niet meer gebruikt.",
        punten: ["Voegen, impregneren, loodwerk", "Bovenplaat waterdicht", "Lekkages opsporen en verhelpen"] },
      { naam: "Boeiboorden", soort: "Boeiboorden", foto: "img/boeiboorden.jpg", pos: "50% 40%", tekst: "Oude boeiboorden eraf, nieuwe erop. In hout, of in plastisol: roestvrij, kleurvast en onderhoudsarm.",
        punten: ["Hout of plastisol", "Dakgoot netjes weggewerkt", "Strakke uitstraling vanaf de straat"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/dakisolatie.jpg", pos: "50% 50%", tekst: "Liggen de pannen er toch af? Dan is dit hét moment om vanaf de buitenkant te isoleren. We kijken per huis wat past.",
        punten: ["Isolatieplaten, binnenzijde wit afgewerkt", "Of op het bestaande dakbeschot", "Warmer huis, lagere energierekening"] },
      { naam: "Timmerwerk", soort: "Timmerwerken", foto: "img/timmerwerk.jpg", pos: "50% 45%", tekst: "Een aangetaste balklaag, een gebroken dakbalk of een doorhangend dak: we vernieuwen de constructie onder uw pannen.",
        punten: ["Balklaag en dakbalken", "Nieuw dakbeschot", "Dakramen en dakelementen"] }
    ]
  },

  voorNa: {
    titel: "Hetzelfde huis, een nieuw dak",
    tekst: "Oude pannen eraf, nieuwe erop. Schuif over de foto en zie het verschil.",
    items: [
      { naam: "Nieuwe dakpannen", voor: "img/voor-1.jpg", na: "img/na-1.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken in heel West-Brabant",
    tekst: "Van Breda tot Raamsdonksveer. Een greep uit ons werk, van bovenaf gezien.",
    items: [
      { foto: "img/p-wernhout.jpg", label: "Dakrenovatie met isolatie", sub: "Nieuwe pannen op een geïsoleerd dak", pos: "50% 55%" },
      { foto: "img/p-breda.jpg", label: "Pannendak Breda", sub: "Keramische pannen, strak tot in de nok", pos: "50% 50%" },
      { foto: "img/p-zevenbergen.jpg", label: "Pannendak Zevenbergen", pos: "50% 55%" },
      { foto: "img/p-raamsdonksveer.jpg", label: "Pannendak Raamsdonksveer", pos: "50% 50%" },
      { foto: "img/p-made.jpg", label: "Pannendak Made", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    kicker: "Dakpannen", titel: "Vier keuzes voor uw pannendak",
    tekst: "Niet elk dak hoeft helemaal opnieuw. We kijken eerst wat er écht nodig is.",
    foto: "img/werkwijze.jpg", fotoPos: "50% 90%", fotoAlt: "Nieuwe isolatieplaten en panlatten op een dak in renovatie",
    stappen: [
      { naam: "Alleen nieuwe pannen", tekst: "Pannen en hulpstukken eraf, panlatten nagelopen en waar nodig vervangen, nieuwe pannen erop." },
      { naam: "Pannen en panlatten", tekst: "Ook nieuwe panlatten, en desgewenst een damp-open folie zodat vocht uit de constructie kan." },
      { naam: "Pannen met isolatie", tekst: "Isolatieplaten erbij, op het bestaande dakbeschot of met een wit afgewerkte binnenzijde." },
      { naam: "Repareren", tekst: "Kan het dak nog mee? Dan vervangen we de slechtste pannen door goede gebruikte exemplaren van onze voorraad." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "7 jaar garantie",
    tekst: "Al generaties lang staan we achter ons werk. Daarom krijgt u 7 jaar garantie, en werken we alleen met materiaal van A-kwaliteit.",
    lijst: {
      titel: "Waarom Geraeds Breda",
      punten: [
        "Familiebedrijf sinds 1953",
        "Meer dan 35 jaar ervaring",
        "VCA-gecertificeerd",
        "Materiaal van A-kwaliteit",
        "Gebruikte pannen op voorraad voor reparaties",
        "Netjes opgeruimd, oude materialen afgevoerd"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Er is door Geraeds ontzettend hard gewerkt, heel fijn meegedacht en bleven zij telkens goed in contact met ons om zo tot een prachtig nieuw dak te komen (inclusief nieuwe goten, boeiboorden en regenpijpen). … elke dag werd alles keurig achtergelaten.", naam: "Daniëlle B." },
      { tekst: "Wij zijn zeer tevreden over dit bedrijf. Bij ons hebben ze de schoorsteen verwijderd. Vriendelijk personeel en ze werken ontzettend netjes. Ze doen wat ze beloven en reageren snel op de mailtjes bij vragen.", naam: "Lianne B." },
      { tekst: "Tijdens het gehele traject dacht het team van Geraeds met ons en de buren mee. Voor het vervangen hebben ze ook nog tijd gevonden voor een noodreparatie. Kortom uitstekende service en kwaliteit afgeleverd tegen een buitengewoon scherpe prijs.", naam: "Ruzica B." },
      { tekst: "Vanaf het 1ste gesprek tot de uitvoering alles super verlopen. Mooie scherpe prijs, installatie zeer professioneel en snel. Laten alles super netjes achter.", naam: "Pascal K." },
      { tekst: "We hebben ons dak volledig laten renoveren (isoleren, nieuwe pannen, dakgoten, boeiboorden e.d.) en alles is super mooi uitgevoerd. … Elke dag waren ze er weer stipt op tijd en gingen ze ook niet weg voordat hetgeen wat voor die dag gepland stond was afgewerkt.", naam: "D. Valk" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Al generaties op het dak",
    rol: "Dak- en Klusbedrijf Geraeds Breda, sinds 2012 samen met E. Geraeds en S. Geraeds Klussenbedrijf",
    tekst: [
      "Wat in 1953 begon met de (over)grootvader, is nog steeds een familiebedrijf. De (klein)kinderen staan met dezelfde passie op uw dak.",
      "Samen vormen we een goed ingespeeld team van vakmensen voor al uw daken en timmerwerk. Renovatie of nieuwbouw: we doen het zoals we het voor onszelf zouden doen."
    ],
    foto: "img/over.jpg", fotoPos: "64% 30%", fotoAlt: "Vakman van Geraeds legt nieuwe dakpannen op een groot dak",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Heel West-Brabant",
    tekst: "Vanuit Breda werken we vooral in West-Brabant: van Raamsdonksveer tot Zundert, van Oosterhout tot Willemstad en van Roosendaal tot Waalwijk.",
    plaatsen: ["Breda", "Oosterhout", "Made", "Raamsdonksveer", "Zevenbergen", "Willemstad", "Roosendaal", "Bergen op Zoom", "Zundert", "Waalwijk"]
  },

  faq: [
    { v: "Welke dakpannen kan ik kiezen?", a: "U kiest uit betonnen of keramische dakpannen, met binnen beide soorten veel modellen. We adviseren u graag over de pan die het beste bij uw dak past." },
    { v: "Moet mijn hele dak vervangen worden?", a: "Niet altijd. Vaak kunnen we het dak repareren: we vervangen dan de slechtste pannen door goede gebruikte exemplaren. We hebben veel soorten en modellen op voorraad." },
    { v: "Is dit een goed moment om te isoleren?", a: "Ja, als de pannen er toch af gaan. Van buitenaf isoleren is dan veel makkelijker dan van binnenuit. We kijken per huis welke isolatie het beste past." },
    { v: "Wat is een ventilerende nok?", a: "Bij een nokvorstrenovatie halen we de oude nokvorsten en de bovenste rij pannen weg, brengen een ventilerende ondervorst aan en schroeven nieuwe nokvorsten vast. Zo kan uw dak beter ademen." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Vraag vrijblijvend een offerte aan. We komen kijken en adviseren u eerlijk."
  },

  contact: {
    titel: "Vraag vrijblijvend een offerte aan",
    tekst: "Vertel kort wat u wilt laten doen. Liever direct contact? Bel of stuur een WhatsApp, eventueel met een foto van uw dak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Dakpannen", "Dakgoot", "Schoorsteen", "Boeiboorden", "Dakisolatie", "Timmerwerken", "Overig"],
    voorbeeld: "Bijvoorbeeld: onze dakpannen zijn aan vervanging toe en we willen meteen isoleren",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
