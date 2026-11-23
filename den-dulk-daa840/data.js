// Den Dulk Daktechniek (Den Haag). Bron: dendulkdaktechniek.nl (alle pagina's) + Google (4,8 / 75), 23-11-2026. Zie content.md.
window.SITE = {
  naam: "Den Dulk Daktechniek",
  kortNaam: "Den Dulk",
  plaats: "Den Haag",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 40,
  kleuren: { brand: "#18212b", accent: "#f39a33" },
  telefoon: "06 57 10 08 91",
  telefoonIntl: "31657100891",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van je dak",
  email: "info@dendulk-daktechniek.nl",
  adres: ["Rijklof van Groenstraat 14", "2593 EH Den Haag"],
  kvk: "86931598",
  google: { score: "4,8", aantal: "75" },
  navCta: "Offerte",
  ctaTekst: "Gratis offerte aanvragen",
  voetTekst: "Daklekkage, dakrenovatie, dakisolatie, dakkapellen en schoorstenen in Den Haag en omgeving. Voor particulieren, VvE's en bedrijven.",

  hero: {
    regels: ["Lekkage weg.", "Dak weer", "strak."],
    tekst: "Daklekkage of dakrenovatie in regio Den Haag? Snel ter plaatse bij spoed, eerlijk advies zonder verrassingen achteraf en garantie op ons werk. Voor particulieren én VvE's.",
    foto: "img/hero.jpg", fotoPos: "50% 62%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "40% 50%",
    fotoAlt: "Nieuwe bitumen dakbedekking op een rij Haagse daken, onder een strakblauwe lucht",
    donker: true,
    punten: ["Snelle hulp bij lekkages", "Vrijblijvende dakinspectie", "Altijd garantie op ons werk"]
  },

  marquee: ["Daklekkage", "Platte daken", "Bitumen en EPDM", "Pannendaken", "Dakisolatie", "Dakkapellen", "Schoorstenen", "Lood- en zinkwerk", "Lichtkoepels", "Dakgoten", "VvE-onderhoud"],

  spoed: {
    titel: "Lekkage? Stuur direct een foto",
    tekst: "Bij acute daklekkage zijn we zo snel mogelijk ter plaatse. Bel of app ons, ook op zaterdag voor spoed.",
    knop: "Bel 06 57 10 08 91"
  },

  intro: {
    kicker: "Over Den Dulk",
    tekst: "Geen snelle praatjes, gewoon goed werk op het dak. Je hebt direct contact met de vakman die ook echt bij jou het dak op gaat, en je ziet met foto's precies wat er aan de hand is.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "75", tel: 75, label: "Reviews op Google" },
      { getal: "Gratis", label: "Dakinspectie en offerte" },
      { getal: "Eigen", label: "Steigers, veilig en netjes" }
    ]
  },

  diensten: {
    titel: "Van één dakpan tot een compleet nieuw dak",
    tekst: "Alles onder één dak. We repareren alleen wat echt nodig is, en je krijgt vooraf een heldere prijsopgave.",
    items: [
      { naam: "Daklekkage verhelpen", soort: "Daklekkage (spoed)", foto: "img/lekkage.jpg", pos: "50% 45%", tekst: "Vochtplek op het plafond of water dat naar binnen druppelt? We sporen de lekkage op en zorgen voor een blijvende, waterdichte oplossing.",
        punten: ["Pannendaken en platte daken", "Dakkapellen, lood- en zinkwerk", "Foto's van de oorzaak"], knop: "Hulp bij lekkage" },
      { naam: "Platte daken", soort: "Dakrenovatie", foto: "img/platdak.jpg", pos: "50% 55%", tekst: "Nieuwe bitumen (APP/SBS) of EPDM dakbedekking, inclusief daktrimmen en hemelwaterafvoeren. Weer tientallen jaren waterdicht.",
        punten: ["Uitbouwen, dakterrassen, schuren", "Lichtkoepels en lichtstraten", "Zonnepanelen eraf en terug"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 50%", tekst: "Via een slecht geïsoleerd dak verdwijnt tot 30% van je warmte. We isoleren platte en schuine daken, van buiten of van binnenuit.",
        punten: ["Bijvoorbeeld 80 mm PIR-isolatie", "Ideaal samen met renovatie", "Vaak ISDE-subsidie mogelijk"], knop: "Advies aanvragen" },
      { naam: "Dakkapellen en zinkwerk", soort: "Dakkapel of schoorsteen", foto: "img/dakkapel.jpg", pos: "50% 40%", tekst: "Nieuwe dakbedekking op de dakkapel, rot houtwerk vervangen en lood- en zinkaansluitingen die weer jaren waterdicht zijn.",
        punten: ["Zinken deklijsten op maat", "Zijwangen onderhoudsarm bekleed", "Kilgoten en dakgoten"] },
      { naam: "Schoorsteenrenovatie", soort: "Dakkapel of schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 45%", tekst: "Scheuren in het voegwerk of slecht lood zijn de nummer 1 oorzaak van lekkages. We voegen, impregneren en vervangen loodloketten.",
        punten: ["Uithakken en opnieuw voegen", "Nieuwe loodloketten", "Ook schoorsteen verwijderen"], knop: "Inspectie aanvragen" },
      { naam: "VvE's en bedrijfspanden", soort: "VvE-onderhoud", foto: "img/vve.jpg", pos: "50% 55%", tekst: "Groot onderhoud en renovatie van grote platte daken, voor VvE's, beheerders, bedrijfshallen en loodsen. Met heldere rapportage.",
        punten: ["Onderhoud 1 of 2 keer per jaar", "Fotorapportage voor het bestuur", "Snelle hulp bij lekkage"] }
    ]
  },

  voorNa: {
    titel: "Van vergaan terras naar strak plat dak",
    tekst: "Sleep over de foto. Dit dakterras kreeg een complete nieuwe laag bitumen, met alle randen langs het hekwerk en de gevel waterdicht afgewerkt.",
    items: [
      { naam: "Dakterras", voor: "img/terras-voor.jpg", na: "img/terras-na.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Eerlijk vakwerk, in beeld",
    tekst: "We laten liever zien wat we doen dan dat we erover praten. Een greep uit afgeronde projecten in en rond Den Haag.",
    items: [
      { foto: "img/zonnepanelen.jpg", label: "Plat dak met zonnepanelen", sub: "Panelen eraf, nieuwe bitumen, panelen terug", pos: "50% 55%" },
      { foto: "img/zinken-goten.jpg", label: "Witte bitumen en zink", sub: "Geïsoleerd, met nieuwe zinken dakgoten", pos: "50% 60%" },
      { foto: "img/lichtstraat.jpg", label: "Opstand voor een lichtstraat", sub: "Waterdicht ingebrand in bitumen", pos: "50% 55%" },
      { foto: "img/dakterras.jpg", label: "Dakterras", sub: "Composiet vlonderplanken op maat", pos: "50% 60%" },
      { foto: "img/schuur.jpg", label: "Houten schuren, Scheveningen", sub: "Nieuwe bitumen en daktrimmen", pos: "50% 55%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan een vaste prijs",
    tekst: "Veel lekkages ontstaan op plekken die je vanaf de grond niet ziet. Daarom gaan we eerst het dak op.",
    foto: "img/aan-het-werk.jpg", fotoPos: "50% 85%", fotoAlt: "Vakman van Den Dulk aan het werk op een plat dak met isolatie",
    stappen: [
      { naam: "Gratis inspectie op locatie", tekst: "We komen langs en maken duidelijke foto's van de staat van je dak." },
      { naam: "Eerlijk advies", tekst: "We vertellen wat er echt nodig is: repareren als het kan, renoveren als dat op termijn voordeliger is." },
      { naam: "Vaste, heldere offerte", tekst: "Geen kleine lettertjes en geen verrassingen tijdens de uitvoering." },
      { naam: "Netjes uitgevoerd, met garantie", tekst: "Met eigen steigers, het dak tussentijds altijd waterdicht, en alles schoon achtergelaten." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Tijdens de harde regen ontdekten we ineens water bij onze dakkapel en het plafond. Na een berichtje via WhatsApp werd er meteen meegedacht en kwam hij snel langs bij ons in Den Haag. Alles werd duidelijk uitgelegd, inclusief foto's van bovenaf … Hij komt zijn afspraken na en laat alles super schoon achter!", naam: "Tusja W." },
      { tekst: "We zaten met een vervelende lekkage op het dak en werden super snel geholpen. Er werd goed gekeken naar de oorzaak, duidelijk uitgelegd wat er moest gebeuren en het is daarna strak opgelost. Gewoon een eerlijke, betrouwbare vakman die zijn afspraken nakomt!", naam: "Desteny de R." },
      { tekst: "Mike en zijn collega's hebben ons ontzettend goed geholpen. Snel contact opgenomen na de aanvraag, vriendelijk te woord gestaan, en een gepaste oplossing gevonden voor de nodige reparaties. Ik raad Mike en zijn team iedereen van harte aan!", naam: "Rutger van B." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Korte lijnen, eigen steigers",
    rol: "Den Dulk Daktechniek, uw betrouwbare dakspecialist",
    tekst: [
      "Een probleem aan je dak komt altijd ongelegen. Dan wil je iemand op je dak die verstand van zaken heeft, zijn afspraken nakomt en eerlijk vertelt wat er aan de hand is.",
      "Of het nu gaat om een spoedreparatie in Den Haag of groot onderhoud voor een VvE: we werken met eigen werk- en schoorsteensteigers, maken foto's van wat we aantreffen en leveren werk af waar we zelf trots op zijn."
    ],
    foto: "img/steiger.jpg", fotoPos: "50% 50%", fotoAlt: "Steiger en nieuwe dakbedekking bij een dakkapel in Den Haag",
    badge: "img/logo-icoon.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Den Haag en de hele regio",
    tekst: "Centraal in de regio, dus bij een acute lekkage of stormschade snel ter plaatse, zonder onnodige voorrijkosten.",
    plaatsen: ["Den Haag", "Scheveningen", "Kijkduin", "Wassenaar", "Katwijk", "Noordwijk", "Leiden", "Voorschoten", "Voorburg", "Leidschendam", "Rijswijk", "Westland", "Delft", "Zoetermeer"]
  },

  faq: [
    { v: "Wat kost het om een daklekkage te verhelpen?", a: "Dat hangt af van de oorzaak. Een verschoven dakpan of een kapot stukje lood is snel opgelost, een verouderd plat dak vraagt meer werk. We bekijken eerst de situatie en geven je vooraf een eerlijke prijs." },
    { v: "Zit het lek precies boven de vochtplek op mijn plafond?", a: "Niet altijd. Water zoekt het laagste punt en kan via balken of isolatie een paar meter verderop naar binnen komen. Daarom lopen we altijd het hele dakvlak en de aansluitingen na." },
    { v: "Hoe lang duurt een dakrenovatie?", a: "Een rijtjeshuis of twee-onder-een-kap is meestal binnen enkele werkdagen tot een week klaar, afhankelijk van de grootte en het weer. Je dak is tussentijds altijd waterdicht afgedekt." },
    { v: "Kan ik subsidie krijgen voor dakisolatie?", a: "Vaak wel, via de ISDE-subsidie. Je krijgt van ons een duidelijke factuur met de gebruikte materialen en Rd-waarde, zodat je de subsidie eenvoudig kunt aanvragen." },
    { v: "Werken jullie ook voor VvE's en bedrijfspanden?", a: "Zeker. We doen lekopsporing, reparaties en groot onderhoud voor VvE's en vastgoedbeheerders, inclusief duidelijke rapportage voor het bestuur." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Klaar voor een dak dat weer 100% waterdicht is?",
    tekst: "Bel of app 06 57 10 08 91, of vraag binnen een minuut een vrijblijvende prijsopgave aan."
  },

  contact: {
    titel: "Vraag vrijblijvend een offerte of inspectie aan",
    tekst: "Laat je gegevens achter, bel, of stuur een foto via WhatsApp. We nemen vandaag nog contact met je op.",
    formTitel: "Aanvraag",
    onderwerpen: ["Daklekkage (spoed)", "Dakrenovatie", "Dakisolatie", "Dakkapel of schoorsteen", "VvE-onderhoud", "Overig"],
    voorbeeld: "Bijvoorbeeld: na de regen een vochtplek op het plafond, onder de dakkapel",
    belofte: "We nemen vandaag nog contact met je op."
  }
};

// Kleine aanpassing binnen data.js (sjabloon niet aanpassen): breed logo in de nav mag iets breder dan 180px,
// en een zachte schaduw onder de hero-tekst zodat die ook op de drukke dakfoto goed leesbaar blijft.
(function () {
  const st = document.createElement('style');
  st.textContent = '.nav .brand img.breed{max-width:220px}.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
