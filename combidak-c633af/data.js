// Combidak (Lemelerveld). Bron: combidak.nl (alle menupagina's) + Google (4,1 / 20), opgehaald 25-11-2026. Zie content.md.
// Alle foto's zijn eigen foto's (hun site + hun Google-profiel). Geen 06/WhatsApp -> whatsapp: false.
window.SITE = {
  naam: "Combidak",
  plaats: "Lemelerveld",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-op-foto.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 44,
  kleuren: { brand: "#0f1f38", accent: "#e3872c" },
  telefoon: "0572 33 15 04",
  telBel: "+31572331504",
  whatsapp: false,
  email: "info@combidak.nl",
  adres: ["Handelsweg 35-37", "8152 BN Lemelerveld"],
  kvk: "05067581",
  google: { score: "4,1", aantal: "20" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakdekker uit Lemelerveld, gespecialiseerd in hellende daken. Voor particulieren, aannemers en wooncorporaties. Combidak legt de lat hoog!",

  hero: {
    regels: ["Wij leggen", "de lat hoog."],
    tekst: "Dakdekker uit Lemelerveld, gespecialiseerd in hellende daken. Dakpannen, dakisolatie en kapconstructies: van advies tot oplevering, alles in eigen beheer.",
    foto: "img/hero.jpg", fotoPos: "50% 45%", fotoPosMobiel: "50% 50%",
    fotoMobiel: "img/hero-mobiel.jpg",
    fotoAlt: "Combidak-bus voor een pand in de steigers waar een nieuw pannendak wordt gelegd",
    donker: true,
    punten: ["15 jaar Daksysteemgarantie PLUS", "KOMO-gecertificeerd", "Eigen dakdekkerskraan"]
  },

  marquee: ["Dakpannen", "Dakisolatie", "Kapconstructies", "Dakrenovatie", "Timmerwerk", "Dakgoten", "Gevelbekleding", "Kozijnen", "Dakdekkerskraan", "Onderhoud"],

  intro: {
    kicker: "Combidak",
    tekst: "Een duurzaam dak, goed geïsoleerd en afgewerkt met hoogwaardige dakpannen. Of u nu particulier, aannemer of wooncorporatie bent: wij verzorgen het hele traject, van advies tot en met de uitvoering.",
    stats: [
      { getal: "15 jaar", label: "Daksysteemgarantie PLUS" },
      { getal: "40 m", tel: 40, label: "Hijshoogte van onze eigen kraan" },
      { getal: "4,1", label: "Gemiddeld op Google" },
      { getal: "20", tel: 20, label: "Reviews op Google" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd en aangesloten bij",
  keurmerken: [
    { naam: "KOMO", sub: "Dakdekken hellende daken", logo: "img/komo.png" },
    { naam: "Dakmeester", sub: "Voor duurzame daken", logo: "img/dakmeester.png" },
    { naam: "Daksysteemgarantie PLUS", sub: "15 jaar garantie", logo: "img/dsg.png" },
    { naam: "VCA", sub: "Veilig werken", logo: "img/vca.png" },
    { naam: "Erkend leerbedrijf", sub: "SBB", logo: "img/sbb.png" },
    { naam: "Het Hellende Dak", sub: "Branchevereniging", logo: "img/heda.png" }
  ],

  diensten: {
    titel: "Alles voor uw hellende dak",
    tekst: "Van de kapconstructie tot de laatste dakpan. Eén vakkundige partij voor het hele dak.",
    items: [
      { naam: "Dakpannen", soort: "Dakpannen", foto: "img/dakpannen.jpg", pos: "50% 50%",
        tekst: "Van advies over kleur en materiaal tot een perfecte afwerking. We verwijderen ook veilig uw oude pannen en kijken naar de constructie eronder.",
        punten: ["Beton- en keramische pannen", "Nelskamp, Wienerberger Koramic, Monier", "Ook restpartijen en gebruikte pannen"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 60%",
        tekst: "Via het dak gaat de meeste warmte verloren. We brengen uw situatie in kaart en isoleren met dakelementen of een prefab kap. U bespaart energie en woont comfortabeler.",
        punten: ["Nieuwbouw en renovatie", "Isolerende dakelementen of prefab kap", "Advies over het beste materiaal"] },
      { naam: "Kapconstructies", soort: "Kapconstructie", foto: "img/kap.jpg", pos: "60% 50%",
        tekst: "Nieuw, vernieuwen of aanpassen aan een nieuwe situatie. Traditioneel als gording- of sporenkap, of prefab. Ook herstel van oude en monumentale kappen.",
        punten: ["Gording-, sporen- of prefab kap", "Herstel van monumentale kappen", "Snel en solide gebouwd"] },
      { naam: "Timmerwerk en kozijnen", soort: "Timmerwerk", foto: "img/timmer.jpg", pos: "50% 55%",
        tekst: "Nieuwe windveren en gootboeien, gevelbekleding, een geïsoleerde en afgetimmerde zolder of nieuwe kozijnen, ramen en deuren. Veel maken we prefab in onze eigen werkplaats.",
        punten: ["Windveren, gootboeien en gevelbekleding", "Kozijnen in hout of kunststof", "Eigen machinale werkplaats"] },
      { naam: "Dakdekkerskraan", soort: "Kraan huren", foto: "img/kraan.jpg", pos: "55% 40%",
        tekst: "Met onze eigen kraan gaan dakelementen en pannen snel en veilig het dak op. De kraan is ook te huur voor bedrijven en particulieren.",
        punten: ["Tot 40 meter hijshoogte", "30 meter reikwijdte", "Ook te huur"], knop: "Kraan aanvragen" },
      { naam: "Onderhoud", soort: "Onderhoud", foto: "img/onderhoud.jpg", pos: "45% 50%",
        tekst: "Regelmatig onderhoud voorkomt lekkage en slijtage. Met een onderhoudscontract op maat weet u zeker dat uw dak in orde blijft.",
        punten: ["Onderhoudscontract op maat", "Dakbedekking, kap en isolatie", "Problemen voorkomen in plaats van verhelpen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Daken die er weer jaren tegen kunnen",
    tekst: "Nieuwbouw en renovatie, voor particulieren, aannemers en wooncorporaties.",
    items: [
      { foto: "img/p-renovatie.jpg", label: "Dakrenovatie", sub: "Complete rij woningen, met onze eigen kraan", pos: "50% 50%" },
      { foto: "img/p-dakpannen.jpg", label: "Nieuwe dakpannen", sub: "Strak gelegd pannendak", pos: "50% 50%" },
      { foto: "img/p-kraan.jpg", label: "Dakrenovatie", sub: "Kraan en steigers voor een vlotte klus", pos: "50% 50%" },
      { foto: "img/p-rood.jpg", label: "Keramische pannen", sub: "Klaar om gelegd te worden", pos: "50% 50%" },
      { foto: "img/p-stad.jpg", label: "In het centrum", sub: "Hijsen op een krappe plek", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Helder van begin tot eind",
    tekst: "Een nieuw dak is meer dan pannen, hout en steen. Zo pakken we het aan.",
    foto: "img/werkwijze.jpg", fotoPos: "50% 50%", fotoAlt: "Combidak-bus en kraan bij een woning in renovatie",
    stappen: [
      { naam: "Analyse van uw dak", tekst: "We beginnen met de bestaande situatie, zodat u weet hoe uw dak ervoor staat." },
      { naam: "Advies", tekst: "Over isolatie, materiaal en kleur. Goede keuzes vooraf voorkomen verrassingen later." },
      { naam: "Duidelijke offerte", tekst: "Een overzichtelijke, transparante begroting. Zo weet u precies waar u aan toe bent." },
      { naam: "Uitvoering in eigen beheer", tekst: "Volgens het Bouwbesluit, met prefab elementen uit onze eigen werkplaats. Ook na oplevering staan we voor u klaar." }
    ]
  },

  garantie: {
    kicker: "Kwaliteit", navNaam: "Kwaliteit",
    titel: "15 jaar zekerheid",
    tekst: "Als Dakmeester en KOMO-gecertificeerde dakdekker kunnen we uw dak opleveren met Daksysteemgarantie PLUS: 15 jaar gegarandeerd vakwerk in dakwerk.",
    lijst: {
      titel: "Daarom Combidak",
      punten: [
        "Specialist in hellende daken",
        "Alles in eigen beheer, van advies tot oplevering",
        "Eigen dakdekkerskraan en machinale werkplaats",
        "VCA- en KOMO-gecertificeerd",
        "Onderhoudscontract op maat",
        "Voor particulieren, aannemers en wooncorporaties"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Een tijd geleden door Combidak Lemelerveld een dakrenovatie uit laten voeren. Wij zijn in dit hele proces compleet ontzorgd. … Kortom weer een prachtig dak, waar we vele jaren mee vooruit kunnen.", naam: "Irma Hegeman" },
      { tekst: "Fijn bedrijf kan een klus snel oppakken. Levert goed werk en is prima mee te overleggen. … Fijn nu is onze zolder weer droog!", naam: "Dini van Vilsteren" },
      { tekst: "Combidak heeft bij ons goed werk geleverd door nieuwe pannen te leveren en erop te leggen. Vriendelijk personeel, en werken zeer netjes!", naam: "Alice Ruiter" },
      { tekst: "Nieuwe dakpannen laten plaatsen. Erg tevreden. Vakkundig en netjes werk verricht!", naam: "Marlon Lammers", sterren: 4 }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Combidak legt de lat hoog",
    rol: "Dakdekker voor nieuwbouw en renovatie, vanuit Lemelerveld",
    tekst: [
      "Combidak heeft alle kennis en ervaring om de dakwerkzaamheden voor uw nieuwbouw- of renovatieproject goed uit te voeren. Ook voor dakgoten, gevelbekleding, het vernieuwen van een schoorsteen of het plaatsen van een dakkapel bent u bij ons aan het juiste adres.",
      "Met onze eigen machinale werkplaats en dakdekkerskraan werken we snel en flexibel, met zo min mogelijk overlast. En geen klus is te groot of te klein: ook voor het schaven van een balk of het leveren van materiaal kunt u bij ons terecht."
    ],
    foto: "img/over.jpg", fotoPos: "40% 60%", fotoAlt: "Bus van Combidak bij een woning in de steigers",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Neem contact op"
  },

  faq: [
    { v: "Werken jullie ook voor aannemers en wooncorporaties?", a: "Ja. Voor aannemers zijn we specialist in hellende daken: isolerende dakelementen, dakpannen en de afwerking van windveren en gootboeien, inclusief materialen. Voor wooncorporaties doen we complete dakrenovaties met een duidelijk plan van aanpak en zo min mogelijk overlast voor bewoners." },
    { v: "Kan ik jullie dakdekkerskraan huren?", a: "Ja, de kraan is ook te huur voor andere bedrijven en particulieren. Hij hijst tot 40 meter hoog en heeft een reikwijdte van 30 meter." },
    { v: "Welke dakpannen kunnen jullie leveren?", a: "Veel soorten, zowel beton- als keramische pannen in klein- en grootformaat. Veel gebruikte merken zijn Nelskamp, Wienerberger Koramic en Monier. We hebben ook regelmatig restpartijen en gebruikte dakpannen." },
    { v: "Wat is Daksysteemgarantie PLUS?", a: "Als Dakmeester en KOMO-gecertificeerde dakdekker kunnen we uw dak opleveren met Daksysteemgarantie PLUS. Dat staat voor 15 jaar gegarandeerd vakwerk in dakwerk." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 35%",
    titel: "Toe aan een nieuw dak?",
    tekst: "We bekijken de staat van uw dak en adviseren u over isolatie, materiaal en kleur."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Laat een bericht achter of bel ons tijdens kantooruren. Wij nemen contact met u op.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Dakpannen", "Dakisolatie", "Kapconstructie", "Timmerwerk / kozijnen", "Kraan huren", "Onderhoud"],
    voorbeeld: "Bijvoorbeeld: ons pannendak is aan vervanging toe en we willen meteen beter isoleren",
    belofte: "We nemen zo spoedig mogelijk contact met u op."
  }
};
