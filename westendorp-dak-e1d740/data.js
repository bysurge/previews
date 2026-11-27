// Westendorp Dakbedekkingen B.V. (IJsselmuiden). Bron: westendorpdakbedekkingen.nl + Google (4,4 / 20). Zie content.md.
// Alle foto's eigen (projectpagina's van hun site), geen renders of stock. Geen 06: kanaal e-mail, geen WhatsApp-knoppen.
// Let op: ze werken volgens hun site uitsluitend voor zakelijke opdrachtgevers; teksten zijn daarop geschreven.
window.SITE = {
  naam: "Westendorp Dakbedekkingen",
  kortNaam: "Westendorp",
  plaats: "IJsselmuiden",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 50,
  kleuren: { brand: "#14243d", accent: "#a33a28" },
  telefoon: "038 - 820 09 92",
  telBel: "+31388200992",
  whatsapp: false,
  email: "info@westendorpdakbedekkingen.nl",
  adres: ["Veldoven 4", "8271 RT IJsselmuiden"],
  google: { score: "4,4", aantal: "20" },
  ctaTekst: "Offerte aanvragen",
  navCta: "Offerte",
  voetTekst: "Dakdekkersbedrijf voor platte en licht hellende daken. Voor bedrijven, woningcorporaties, vastgoedbeheerders, overheid, scholen en zorg.",

  hero: {
    regels: ["Een duurzaam", "dak begint bij", "Westendorp."],
    tekst: "Platte en licht hellende daken voor zakelijke opdrachtgevers. Nieuwbouw, renovatie en onderhoud, met eigen vakmensen.",
    foto: "img/hero-kampen.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 55%",
    fotoAlt: "Dronefoto van de vernieuwde daken van de HBS in Kampen, met de binnenstad op de achtergrond",
    donker: true,
    punten: ["Eigen vakmensen", "Vebidak en VCA", "24/7 calamiteitendienst"]
  },

  spoed: {
    titel: "Lekkage op uw bedrijfsdak?",
    tekst: "Onze calamiteitendienst is 24/7 bereikbaar voor zakelijke klanten.",
    knop: "Bel 038 - 820 09 92"
  },

  marquee: ["Nieuwbouw", "Dakrenovatie", "Service en onderhoud", "Dakveiligheid", "Groendaken", "Dakterrassen", "Blauwe daken", "Energiedaken", "Dak- en wandbeplating", "MJOP"],

  intro: {
    kicker: "Een begrip in dakwerk",
    tekst: "Westendorp Dakbedekkingen is al tientallen jaren dé partner voor platte en licht hellende daken. Van aanleg en beheer tot onderhoud, vanuit IJsselmuiden voor een groot deel van midden- en noord-Nederland.",
    stats: [
      { getal: "4,4", label: "Gemiddeld op Google" },
      { getal: "24/7", label: "Calamiteitendienst" },
      { getal: "100%", tel: 100, label: "Medewerkers met VCA" }
    ]
  },

  keurmerkenTitel: "Aangesloten en gecertificeerd",
  keurmerken: [
    { naam: "Vebidak", sub: "Branchevereniging dakbedekking" },
    { naam: "Erkend leerbedrijf", sub: "Opleiding via Tectum" },
    { naam: "VCA", sub: "Alle medewerkers" }
  ],

  diensten: {
    titel: "Alles voor het platte dak",
    tekst: "Voor bedrijven, woningcorporaties, vastgoedbeheerders, overheid, scholen en zorginstellingen.",
    knop: "Offerte aanvragen",
    items: [
      { naam: "Nieuwbouw", soort: "Nieuwbouw", foto: "img/nieuwbouw.jpg", pos: "50% 50%",
        tekst: "Al in de ontwerpfase meedenken in het bouwteam. Zo kiezen we samen de beste materialen en wordt het gebouw duurzamer en voordeliger over de hele levensduur.",
        punten: ["Dakconstructie en dakbedekking", "Gewenste isolatiewaarde", "Meedenken in complexe vraagstukken"] },
      { naam: "Dakrenovatie", soort: "Renovatie en duurzaam", foto: "img/renovatie.jpg", pos: "50% 40%",
        tekst: "Eerst deskundig advies, dan de juiste aanpak. We leggen alle factoren helder uit, zodat u onnodige kosten voorkomt.",
        punten: ["Conditie van dakopbouw en isolatie", "Afvoer, noodoverstorten en plasvorming", "Eisen voor wind, isolatie, asbest en mastiek"] },
      { naam: "Service en onderhoud", soort: "Onderhoud", foto: "img/onderhoud.jpg", pos: "50% 60%",
        tekst: "Periodiek onderhoud verlengt de levensduur van uw dak en voorkomt lekkages. Voor kleine reparaties staan we 24/7 klaar.",
        punten: ["Inspectie en nulmeting", "MJOP met begrotingsprijzen", "Snelle reparaties"] },
      { naam: "Dakveiligheid", soort: "Veiligheid", foto: "img/veiligheid.jpg", pos: "50% 55%",
        tekst: "Elke klus begint met een veiligheidscheck. Daarna adviseren we over permanente oplossingen zoals hekwerken en ankerpunten.",
        punten: ["Klim- en valbeveiliging", "Collectieve valbeveiliging", "Dakveiligheidsscan"] },
      { naam: "Multifunctionele daken", soort: "Groen, rood, blauw, geel", foto: "img/dakterras.jpg", pos: "50% 60%",
        tekst: "Een plat dak kan meer: een groendak, een dakterras, waterberging of zonne-energie. We kijken graag met u naar de mogelijkheden.",
        punten: ["Groendaken", "Dakterrassen", "Blauwe daken en energiedaken"] }
    ],
    meer: [
      { naam: "Rapportage met offerte", tekst: "Visuele en/of technische inspectie met technisch advies en omschrijving." },
      { naam: "Bouwfysische berekeningen", tekst: "Ook windbelastingberekeningen voor uw dak." },
      { naam: "Dak- en wandbeplating", tekst: "Naast vlakdaksystemen brengen we ook dak- en wandbeplating aan." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken waar we trots op zijn",
    tekst: "Een greep uit onze nieuwbouw- en renovatieprojecten.",
    items: [
      { foto: "img/arnhem.jpg", label: "Sluiseiland, Arnhem", sub: "Nieuwbouw voor Nikkels", pos: "50% 55%" },
      { foto: "img/deventer.jpg", label: "4 flats, Deventer", sub: "Renovatie voor Mateboer", pos: "50% 50%" },
      { foto: "img/twello.jpg", label: "Twello", sub: "Nieuwbouw voor Nikkels", pos: "50% 50%" },
      { foto: "img/ijsselmuiden.jpg", label: "Bedrijfspand, IJsselmuiden", sub: "Nieuwbouw", pos: "50% 50%" },
      { foto: "img/winschoten.jpg", label: "Woonzorglocatie, Winschoten", sub: "Nieuwbouw", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    kicker: "Van plan tot uitvoering",
    titel: "Wij ontzorgen u volledig",
    tekst: "Korte lijnen en één aanspreekpunt, van eerste inspectie tot oplevering.",
    foto: "img/kraan.jpg", fotoPos: "50% 35%", fotoAlt: "Een kraan tilt materiaal op het dak bij de renovatie van flats in Deventer",
    stappen: [
      { naam: "Inspectie", tekst: "We brengen de conditie van uw dak in kaart, visueel en waar nodig technisch." },
      { naam: "Advies en offerte", tekst: "U krijgt een rapportage met technisch advies en een heldere offerte." },
      { naam: "Uitvoering", tekst: "Onze eigen, goed opgeleide dakdekkers voeren het werk veilig uit." },
      { naam: "Beheer", tekst: "Met periodiek onderhoud blijft uw dak jarenlang in topconditie." }
    ]
  },

  garantie: {
    kicker: "Kwaliteit", navNaam: "Kwaliteit",
    titel: "Gemaakt volgens de vakrichtlijn",
    tekst: "Al onze daken maken we volgens de Vakrichtlijn Gesloten dakbedekkingssystemen van Vebidak, gelijk aan die van BDA en Dakmerk.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Alleen eigen, goed opgeleide vakmensen",
        "Alle medewerkers VCA-gecertificeerd",
        "Erkend leerbedrijf met eigen leermeesters",
        "Calamiteitendienst 24/7 bereikbaar",
        "Partner in resultaatgericht vastgoedonderhoud (RGS/RGVO)",
        "Werkgebied: groot deel van midden- en noord-Nederland"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Zeer vakkundig gedaan en erg netjes gewerkt. Totaal geen rommel achtergelaten. … Echt top geregeld, ze doen gewoon wat ze beloven!", naam: "Jan van den B." },
      { tekst: "Keurig bedrijf dat afspraken nakomt en een eerlijke prijs rekent. … De mannen waren vriendelijk en netjes en hebben keurig werk verricht.", naam: "Paul F.", sterren: 4 },
      { tekst: "Geweldig dakdekkersbedrijf, goede prijs-kwaliteitverhouding, denkt mee en is zeker niet de duurste.", naam: "Gerrit V." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Onze mensen zijn het hart van het bedrijf",
    rol: "Westendorp Dakbedekkingen B.V., IJsselmuiden",
    tekst: [
      "Westendorp Dakbedekkingen is een middelgroot dakdekkersbedrijf aan de Veldoven in IJsselmuiden. Tientallen jaren ervaring maakten ons tot een gespecialiseerd en gekwalificeerd dakdekkersbedrijf.",
      "We werken alleen met eigen vakmensen, die regelmatig bijscholing volgen over de nieuwste producten en technieken. Leerlingen leiden we zelf op tot zelfstandig (voorman) dakdekker."
    ],
    foto: "img/team.jpg", fotoPos: "45% 40%", fotoAlt: "Twee medewerkers van Westendorp Dakbedekkingen bij de bedrijfsbus",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Midden- en noord-Nederland",
    tekst: "Vanuit IJsselmuiden werken we in een groot deel van midden- en noord-Nederland.",
    plaatsen: ["Kampen", "Zwolle", "Deventer", "Dronten", "Emmeloord", "Hattem", "Arnhem", "Winschoten", "Hilversum"]
  },

  faq: [
    { v: "Werken jullie ook voor particulieren?", a: "Nee, we werken uitsluitend voor zakelijke opdrachtgevers: bedrijven, woningcorporaties, vastgoedbeheerders, overheidsinstanties, scholen en zorginstellingen." },
    { v: "Wat als mijn dak lekt?", a: "Onze calamiteitendienst is 24/7 bereikbaar voor zakelijke klanten. Bel 038 - 820 09 92 en we nemen zo snel mogelijk contact op." },
    { v: "Hoe lang gaat een plat dak mee?", a: "Theoretisch zo'n 25 jaar. Met regelmatig en structureel onderhoud houdt u die levensduur vast en voorkomt u lekkages." },
    { v: "Kunnen jullie een meerjarenonderhoudsplan maken?", a: "Ja. We maken een MJOP met begrotingsprijzen, op basis van een nulmeting en inspectie van uw dak." }
  ],

  band: {
    foto: "img/band-dak.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw of beter dak?",
    tekst: "Vertel ons over uw gebouw. We denken mee en maken een rapportage met offerte."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Laat een bericht achter of bel ons op 038 - 820 09 92. We nemen zo snel mogelijk contact met u op.",
    formTitel: "Aanvraag",
    onderwerpen: ["Offerte nieuwbouw", "Dakrenovatie", "Onderhoud of inspectie", "Dakveiligheid", "Multifunctioneel dak", "Lekkage"],
    voorbeeld: "Bijvoorbeeld: het platte dak van ons bedrijfspand (ca. 800 m2) is aan renovatie toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
