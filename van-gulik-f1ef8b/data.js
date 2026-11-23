// Dakbedrijf van Gulik (Zoetermeer). Bron: dakbedrijfvangulik.nl (alle pagina's) + Google (4,9 / 34), 23-11-2026. Zie content.md.
window.SITE = {
  naam: "Dakbedrijf van Gulik",
  kortNaam: "Van Gulik",
  plaats: "Zoetermeer",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 26,
  kleuren: { brand: "#231f1e", accent: "#de5a4b" },
  telefoon: "06 15 52 29 23",
  telefoonIntl: "31615522923",
  waTekst: "WhatsApp ons",
  waContact: "Stuur een foto van uw dak",
  email: "info@dakbedrijfvangulik.nl",
  adres: ["Industrieweg 6B", "2712 LB Zoetermeer"],
  kvk: "83185356",
  google: { score: "4,9", aantal: "34" },
  navCta: "Offerte",
  ctaTekst: "Vrijblijvende offerte",
  voetTekst: "Dakwerk met vakmanschap. Van kleine reparaties tot complete renovaties, vanuit Zoetermeer door heel Nederland.",

  hero: {
    regels: ["Dakwerk met", "vakmanschap."],
    tekst: "Uw dak in vakkundige handen, van een kleine reparatie tot een complete renovatie. Pannendaken, bitumen daken, zinkwerk en schoorstenen, vanuit Zoetermeer.",
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    fotoPosMobiel: "34% 50%",
    fotoAlt: "Strak gelegd nieuw pannendak met dakraam, onder een lichte lucht",
    donker: true,
    punten: ["5 tot 10 jaar garantie", "Binnen 24 uur reactie", "Heldere prijzen"]
  },

  marquee: ["Pannendaken", "Bitumen daken", "Zinkwerk", "Dakgoten", "Lekkages", "Nokvorsten", "Schoorsteenrenovatie", "Vogelpreventie", "Dakonderhoud", "Inspecties"],

  spoed: {
    titel: "Lekkage of schade aan uw dak?",
    tekst: "Bij schade zijn we snel ter plaatse. Stuur gerust een foto, u krijgt binnen 24 uur reactie."
  },

  intro: {
    kicker: "Over Van Gulik",
    tekst: "De betrouwbare dakdekker voor álle dakwerkzaamheden. Eerlijk advies, geen onnodig werk, en een prijs waar u achteraf niet van schrikt.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "34", tel: 34, label: "Reviews op Google" },
      { getal: "5-10 jaar", label: "Garantie op ons werk" },
      { getal: "24 uur", label: "Reactie op uw aanvraag" }
    ]
  },

  diensten: {
    titel: "Alles voor uw dak, van nok tot goot",
    tekst: "Dit zijn de klussen die we dagelijks doen. Staat uw klus er niet bij? Vraag het gerust, we doen nog veel meer.",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 55%", tekst: "Heeft uw dak zijn beste tijd gehad? We vervangen versleten of afgebrokkelde pannen, zodat uw dak weer jarenlang wind- en waterdicht is.",
        punten: ["Pannen vervangen of compleet nieuw", "Lood rond dakkapel en schoorsteen", "Reparatie van lekkages"] },
      { naam: "Bitumen daken", soort: "Bitumen dak", foto: "img/bitumen.jpg", pos: "50% 50%", tekst: "Dakleer van hoge kwaliteit voor platte daken. Beschermt tegen regen, sneeuw en harde wind, en gaat gewoonlijk minstens 20 jaar mee.",
        punten: ["Reparatie of vervanging", "Ook isoleren mogelijk", "Platte daken en dakkapellen"] },
      { naam: "Zinkwerk en dakgoten", soort: "Zinkwerk", foto: "img/dakgoot.jpg", pos: "50% 50%", tekst: "Zinken dakgoten, regenpijpen en dakranden. Vaak is vervangen niet eens nodig: goede zinkrenovatie lost het probleem ook op.",
        punten: ["Dakgoten en regenpijpen", "Lood- en zinkaansluitingen", "Eerst eerlijk advies"] },
      { naam: "Nokvorsten en lekkages", soort: "Lekkage", foto: "img/nok.jpg", pos: "50% 40%", tekst: "Lekt het bij de nok of komt er ineens water binnen? We komen snel kijken, vinden de oorzaak en plannen de reparatie direct in.",
        punten: ["Nokvorsten vervangen", "Snel ter plaatse bij schade", "Geen verrassing op de factuur"] },
      { naam: "Schoorsteenrenovatie", soort: "Schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 45%", tekst: "Slecht voegwerk of loszittende stenen geven lekkages en gevaarlijke situaties. We herstellen, plaatsen een afdekking of halen de schoorsteen weg.",
        punten: ["Voegwerk herstellen", "Schoorsteenafdekking", "Oude schoorsteen verwijderen"] },
      { naam: "Vogelpreventie", soort: "Vogelpreventie", foto: "img/vogelschroot.jpg", pos: "50% 40%", tekst: "Vogels nestelen graag onder de pannen en beschadigen isolatie en zinkwerk. Met vogelschroten en vogelnetten blijft uw dak van u.",
        punten: ["Vogelschroten en -netten", "Eerst bestaande schade herstellen", "Alleen toegestane methoden"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Aan het werk",
    titel: "Zo ziet ons werk eruit",
    tekst: "Steiger op, oude pannen eraf, nieuwe erop. En alles netjes opgeruimd als we weer weggaan.",
    items: [
      { foto: "img/op-het-dak.jpg", label: "Dakrenovatie", sub: "Op het dak van een vrijstaande woning", pos: "60% 40%" },
      { foto: "img/steiger.jpg", label: "Steiger staat", sub: "Pannendak en schoorsteen in uitvoering", pos: "50% 40%" },
      { foto: "img/dakbeschot.jpg", label: "Plat dak", sub: "Isolatieplaten klaar om te leggen", pos: "50% 50%" },
      { foto: "img/lift.jpg", label: "Pannen eraf", sub: "Met de ladderlift, veilig en snel", pos: "50% 45%" },
      { foto: "img/opgeleverd.jpg", label: "Opgeleverd", sub: "Strak pannendak, met zonnepanelen", pos: "50% 40%" }
    ]
  },

  werkwijze: {
    titel: "Eerlijk advies, heldere prijs",
    tekst: "Geen onnodige werkzaamheden, geen aangepraat werk. Klanten noemen het zelf het vaakst.",
    foto: "img/vakman.jpg", fotoPos: "50% 55%", fotoAlt: "Vakman van Dakbedrijf van Gulik bekijkt een rij daken",
    stappen: [
      { naam: "U neemt contact op", tekst: "Bel, app of mail. Binnen 24 uur hoort u van ons." },
      { naam: "We komen kijken", tekst: "Vaak nog dezelfde week, soms dezelfde dag. We zoeken de oorzaak en vertellen eerlijk wat wel en niet nodig is." },
      { naam: "Duidelijke offerte", tekst: "Vrijblijvend, met een heldere beschrijving en prijs. Zonder verrassingen achteraf." },
      { naam: "Netjes uitgevoerd", tekst: "Op de afgesproken tijd, hard gewerkt en alles opgeruimd achtergelaten." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "5 tot 10 jaar garantie",
    tekst: "We staan achter ons vakwerk. Daarom krijgt u 5 tot 10 jaar garantie op het werk dat we uitvoeren.",
    lijst: {
      titel: "Waarom klanten voor ons kiezen",
      punten: [
        "Snelle reactie en een vrijblijvende offerte",
        "Vakkundig werk met 5 tot 10 jaar garantie",
        "Heldere prijzen zonder verrassingen",
        "Snel ter plaatse bij schade",
        "Van kleine reparatie tot complete renovatie",
        "Ook dakonderhoud en inspecties"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Uiteindelijk hebben we gekozen voor Dakbedrijf Van Gulik vanwege hun eerlijke advies en het goede gevoel dat we vanaf het eerste contact hadden. Er werden geen onnodige werkzaamheden geadviseerd of aangepraat. … Het eindresultaat is prachtig; de nieuwe dakgoten zien er strak uit en alles is vakkundig en netjes afgewerkt.", naam: "Janine C." },
      { tekst: "Alle oude nokvorsten zijn vervangen en een oude schoorsteen is verwijderd. Er is hard gewerkt, de afspraken zijn goed nagekomen en het werk is netjes uitgevoerd. Alles is na afloop goed achtergelaten. Erg tevreden over het resultaat en zeker een aanrader!", naam: "Dave" },
      { tekst: "Wij hebben ons dak laten renoveren door dakbedrijf gulik. Ik kan nog steeds niet geloven dat het zo snel voor elkaar was. Echte vakmannen. … Afspraken worden nagekomen en je weet precies waar je aan toe bent.", naam: "Anja V." },
      { tekst: "Van Gulik heeft bij ons een plat dak geisoleerd en van nieuw bitumen voorzien. De jongens (en dame) van Van Gulik zijn erg vriendelijk, netjes en werken echt KEI-hard. Vriendelijke mensen en een super mooi resultaat.", naam: "Patrick B." },
      { tekst: "Op de dag van melden kwam iemand langs om de oorzaak van lekkage (nokvorsten) te inspecteren … Gisteren zijn twee man van Van Gulik langs geweest en kwamen aan op de vooraf afgesproken tijd. Reparatie uitgevoerd en achteraf ook geen verassing gehad met de factuur.", naam: "Fosvox73" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Eerlijk dakwerk, netjes gedaan",
    rol: "Dakbedrijf van Gulik, Zoetermeer",
    tekst: [
      "Een goed dak is essentieel voor uw woning. Daarom vertellen we eerlijk wat wel en niet nodig is, komen we onze afspraken na en laten we alles netjes achter.",
      "Van een losse nokvorst tot een compleet nieuw pannendak voor een hele rij woningen: we werken vanuit Zoetermeer, en gaan door heel Nederland. En tevreden klanten vertellen het weer aan de buren."
    ],
    foto: "img/bus.jpg", fotoPos: "55% 50%", fotoAlt: "Vakman van Dakbedrijf van Gulik bij de bus en de ladderlift",
    badge: "img/logo-icoon.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Zoetermeer en heel Nederland",
    tekst: "Vanuit de Industrieweg in Zoetermeer gaan we door heel Nederland om u goed te helpen. Twijfelt u of we bij u in de buurt komen? Vraag het gerust."
  },

  faq: [
    { v: "Moet mijn zinkwerk meteen vervangen worden?", a: "Niet altijd. Vaak wordt geadviseerd om meteen te vervangen, maar zinkrenovatie door een vakkundige zinkverwerker kan het probleem in veel gevallen ook verhelpen." },
    { v: "Hoe lang gaat een bitumen dak mee?", a: "Bitumen dakbedekking gaat gewoonlijk minimaal 20 jaar mee en beschermt uitstekend tegen regen, sneeuw en harde wind." },
    { v: "Wat doen jullie tegen vogels onder de pannen?", a: "We plaatsen vogelschroten of vogelnetten. Hebben vogels al schade gemaakt, dan herstellen we die eerst, zodat uw isolatie en zinkwerk weer in orde zijn." },
    { v: "Is een offerte vrijblijvend?", a: "Ja, onze offertes zijn altijd vrijblijvend. U krijgt binnen 24 uur reactie op uw aanvraag." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 40%",
    titel: "Direct hulp nodig of een vraag over uw dak?",
    tekst: "We staan klaar. Bel of app 06 15 52 29 23, of vraag een vrijblijvende offerte aan."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vul het formulier in, of bel of app ons gerust. U krijgt binnen 24 uur reactie.",
    onderwerpen: ["Pannendak", "Bitumen dak", "Zinkwerk", "Lekkage", "Schoorsteen", "Vogelpreventie"],
    voorbeeld: "Bijvoorbeeld: na de storm liggen er een paar pannen los en lekt het bij de nok",
    belofte: "U krijgt binnen 24 uur reactie op uw aanvraag."
  }
};

// Kleine aanpassing binnen data.js (sjabloon niet aanpassen): het brede logo mag in de nav breder dan 180px.
(function () {
  const st = document.createElement('style');
  st.textContent = '.nav .brand img.breed{max-width:260px}@media (max-width:699px){.nav .brand img.breed{max-width:200px}}' +
    '.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
