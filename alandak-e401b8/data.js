// Alan Dakbedekking & Dakonderhoud (Oud Gastel / Roosendaal). Bron: alandak.nl + Google (4,9 / 77). Zie content.md.
// Let op: de site-foto's (hero, dienstkaarten, over, band) zijn stock van hun eigen site; eigen werk = alleen de Google-foto's (projecten).
window.SITE = {
  naam: "Alan Dakbedekking & Dakonderhoud",
  kortNaam: "Alan Dakbedekking",
  plaats: "Oud Gastel",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Roosendaal en omgeving",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 26,
  kleuren: { brand: "#15233b", accent: "#d2753a" },
  telefoon: "0165 327 820",
  telBel: "+31165327820",
  whatsapp: false,
  email: "info@alandak.nl",
  adres: ["Argon 24b", "4751 XC Oud Gastel"],
  google: { score: "4,9", aantal: "77" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  voetTekst: "Dakdekker voor platte en licht hellende daken. Vanuit Oud Gastel, tegen Roosendaal aan, in heel West-Brabant, Zeeland en Zuid-Holland.",

  hero: {
    regels: ["Een plat dak", "dat weer jaren", "droog blijft."],
    tekst: "Dakdekker voor platte en licht hellende daken in de regio Roosendaal. Inspectie, lekkage, renovatie en onderhoud, met 10 jaar garantie op waterdichtheid.",
    foto: "img/hero-brander.jpg", fotoPos: "60% 50%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Brander op een plat dak met bitumen dakbedekking",
    donker: true,
    punten: ["10 jaar garantie op waterdichtheid", "Gratis dakinspectie", "Dakdekker sinds 1992"]
  },

  marquee: ["Bitumen", "EPDM", "PVC", "Dakinspectie", "Lekkage herstel", "Dakrenovatie", "Dakisolatie", "Lichtkoepels", "Stormschade", "Boeidelen", "Dakgoten"],

  spoed: {
    titel: "Acute lekkage?",
    tekst: "Bel ons. Bij spoed voeren we snel een noodreparatie uit, zodat de schade beperkt blijft."
  },

  intro: {
    kicker: "Over Alan",
    tekst: "Van vader op zoon. Al sinds 1992 op het dak, met één doel: eerst goed kijken waar het probleem zit, en het dan in één keer goed oplossen. Zonder onnodige ingrepen.",
    stats: [
      { getal: "1992", label: "Oprichter dakdekker sinds" },
      { getal: "10 jaar", label: "Garantie op waterdichtheid" },
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "77", tel: 77, label: "Reviews op Google" }
    ]
  },

  keurmerkenTitel: "VCA-gecertificeerd, en we werken met A-merken",
  keurmerken: [
    { naam: "VCA", sub: "Veilig werken op het dak" },
    { naam: "Derbigum", sub: "Bitumen", logo: "img/merk-derbigum.png" },
    { naam: "Soprema", sub: "Dakbedekking", logo: "img/merk-soprema.png" },
    { naam: "Mawipex", sub: "Dakbedekking", logo: "img/merk-mawipex.png" },
    { naam: "Rockwool", sub: "Isolatie", logo: "img/merk-rockwool.png" },
    { naam: "Kingspan", sub: "Isolatie", logo: "img/merk-kingspan.png" }
  ],

  diensten: {
    titel: "Platte daken, van inspectie tot nieuw dak",
    tekst: "Bitumen, EPDM of PVC. Voor woningen en bedrijfspanden, voor particulieren en bedrijven.",
    items: [
      { naam: "Dakinspectie", foto: "img/inspectie.jpg", pos: "50% 50%", tekst: "Twijfelt u over uw dak? We komen gratis en vrijblijvend kijken, en zoeken bij een lekkage naar de echte oorzaak.",
        punten: ["Gratis en vrijblijvend", "Kleine lekkages vaak direct verholpen", "Eerlijk advies over de vervolgstappen"] },
      { naam: "Lekkage herstel", foto: "img/lekkage.jpg", pos: "50% 55%", tekst: "Een lekkage lijkt onschuldig, maar kan leiden tot vocht, schimmel en schade aan de constructie. We pakken de oorzaak aan.",
        punten: ["Oorzaak opsporen", "Snel en vakkundig gerepareerd", "Noodreparatie bij spoed"] },
      { naam: "Dakrenovatie", foto: "img/stormschade.jpg", pos: "40% 50%", tekst: "Is uw dak op? We bekijken eerst de ondergrond en isolatie, en leggen dan een compleet nieuwe daklaag.",
        punten: ["Bitumen, EPDM of PVC", "Isolatie op of onder de bedekking", "10 jaar garantie op waterdichtheid"] },
      { naam: "Dakonderhoud", foto: "img/onderhoud.jpg", pos: "50% 70%", tekst: "Met jaarlijks onderhoud gaat uw dak veel langer mee. Blaasjes en scheuren pakken we aan voordat ze gaan lekken.",
        punten: ["Onderhoudscontract: 1x per jaar controle", "Afvoeren en goten schoon", "Kleine gebreken direct hersteld"] }
    ],
    meer: [
      { naam: "Lichtkoepels", tekst: "Bestaande koepels vernieuwen, of een nieuwe erbij bij een dakrenovatie. Meer licht en ventilatie." },
      { naam: "Stormschade", tekst: "We herstellen de schade en maken op verzoek een rapport voor uw verzekering." },
      { naam: "Dakisolatie", tekst: "Isolatie op of onder de dakbedekking. Daar gaat de meeste warmte verloren." },
      { naam: "Kleiner werk", tekst: "Boeidelen, dakbeschot, dakgoten, standleidingen en nieuwe doorvoeren." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk, van klein tot groot",
    tekst: "Van een platte aanbouw tot het dak van een bedrijfspand.",
    items: [
      { foto: "img/plat-dak-terras.jpg", label: "Plat dak", sub: "Woning, strak afgewerkt", pos: "50% 50%" },
      { foto: "img/plat-dak-groot.jpg", label: "Plat dak", sub: "Groot bedrijfsdak", pos: "50% 60%" },
      { foto: "img/metalen-dak.jpg", label: "Dakwerk", sub: "Bedrijfspand", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan pas een offerte",
    tekst: "U weet precies waar u aan toe bent, en komt niet voor onverwachte kosten te staan.",
    stappen: [
      { naam: "Gratis dakinspectie", tekst: "We controleren uw dak op slijtage, schade en zwakke plekken, en zoeken de oorzaak van een lekkage." },
      { naam: "Eerlijk advies", tekst: "We leggen uit hoe uw dak ervoor staat en wat er echt nodig is. Kleine lekkages lossen we in overleg vaak direct op." },
      { naam: "Offerte op maat", tekst: "Een duidelijke offerte, afgestemd op uw dak en uw wensen." },
      { naam: "Uitvoering en garantie", tekst: "Korte wachttijden, netjes gewerkt, en 10 jaar garantie op waterdichtheid." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar waterdicht, gegarandeerd",
    tekst: "Op een renovatie of een nieuw dak krijgt u 10 jaar garantie op waterdichtheid, op de materialen én op ons werk. Laat u het onderhoud bij ons, dan blijft die garantie gewoon staan.",
    lijst: {
      titel: "Waarom klanten voor Alan kiezen",
      punten: [
        "Specialist in platte en licht hellende daken",
        "Dakdekkers met VCA* en VCA**, jaarlijks bijgeschoold",
        "Schaderapport voor uw verzekering",
        "Voor woningen en bedrijfspanden",
        "Korte wachttijden, snel geholpen",
        "Onderhoudscontract voor een lange levensduur"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Wat een service en wat een vriendelijke mannen. Een lekkage in een jaren 30 huis is nooit fijn en geeft veel vraagtekens maar met de rust, kennis en enorme vriendelijkheid is t gevonden en verholpen en dat tijdens het gratis inspectiebezoek.", naam: "Dyann M." },
      { tekst: "Furkan met z'n collega's geweest om de dakranden te vernieuwen. … Zeer tevreden over het werk en de communicatie. … Nadat ze weer terug geplaatst waren is Furkan nog langs geweest om alles na te lopen op eventuele beschadigingen. Wat een geweldige service.", naam: "Wim van de K." },
      { tekst: "Reageren snel en hebben het werk snel uit kunnen voeren. … Alles is opgeruimd en de achtertuin en het pad naast ons huis werden aangeveegd na de werkzaamheden. Kundig personeel en voeren alles uit na overleg/uitleg met jou als klant.", naam: "Loes van S." },
      { tekst: "Een tijdje geleden dachten wij dat we een lekkage hadden op zolder. We hebben Alan dakbedekking gebeld en zij kwamen diezelfde ochtend nog kijken. … hij kon ons goed advies geven.", naam: "Iris E." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Van vader op zoon",
    rol: "Familiebedrijf, opgericht in 2007",
    tekst: [
      "De oprichter staat al sinds 1992 op het dak. In 2007 begon hij Alan Dakbedekking in Zeeland, en in 2015 verhuisde het bedrijf naar Oud Gastel, tegen Roosendaal aan.",
      "Inmiddels heeft zijn zoon het bedrijf overgenomen. De vader werkt nog altijd mee op het dak. Samen met een jong team zoeken we per klus de beste oplossing, voor particulieren en bedrijven."
    ],
    foto: "img/lichtkoepel.jpg", fotoPos: "50% 60%", fotoAlt: "Plat dak met lichtkoepel en ventilatie",
    badge: "img/logo-blok.png", badgeVrij: true,
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Roosendaal en omgeving",
    tekst: "Vanuit Oud Gastel werken we in West-Brabant, Zeeland en Zuid-Holland. Onder andere in:",
    plaatsen: ["Roosendaal", "Oud Gastel", "Bergen op Zoom", "Etten-Leur", "Oudenbosch", "Halsteren", "Steenbergen", "Wouw", "Rucphen", "Zevenbergen", "Dinteloord", "Fijnaart", "Bosschenhoofd", "Rijsbergen"]
  },

  faq: [
    { v: "Kost een dakinspectie iets?", a: "Nee, de dakinspectie is gratis en vrijblijvend. Kleine lekkages kunnen we in overleg vaak direct tijdens de inspectie verhelpen." },
    { v: "Wat valt onder de garantie?", a: "Bij een renovatie of nieuw dak krijgt u 10 jaar garantie op waterdichtheid, op materialen en werk. De garantie blijft geldig zolang het onderhoud door ons wordt gedaan." },
    { v: "Hoe lang gaat een plat dak mee?", a: "Onze dakbedekking gaat doorgaans zo'n 20 jaar mee, mits u het dak jaarlijks laat onderhouden. Met ons onderhoudscontract controleren we uw dak één keer per jaar." },
    { v: "Vergoedt de verzekering stormschade?", a: "Sommige verzekeringen vergoeden stormschade. Wij maken op aanvraag een rapport met de schade, de vervolgstappen en de prijs." },
    { v: "Welke dakbedekking is het beste?", a: "Dat hangt af van uw dak. Bitumen is sterk en voordelig, EPDM is onderhoudsarm en heeft minder naden, en we werken ook met PVC. We adviseren u graag tijdens de inspectie." }
  ],

  band: {
    foto: "img/band-rollen.jpg", fotoPos: "50% 50%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een gratis dakinspectie aan. We komen langs en vertellen eerlijk hoe uw dak ervoor staat."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Bel, mail of laat hieronder een bericht achter. We hanteren korte wachttijden. Ma-vr 08:00-17:00, za 09:00-12:30.",
    formTitel: "Aanvraag",
    onderwerpen: ["Dakinspectie", "Lekkage herstel", "Dakrenovatie", "Dakonderhoud", "Lichtkoepel", "Stormschade", "Anders"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen bij de aanbouw, of het platte dak is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
