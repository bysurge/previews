// RM Dakbedekkingen (Dordrecht). Bron: rmdakbedekkingen.nl (home, over, dakrenovatie, projecten, contact) + Google (5,0 / 49). Foto's: eigen site + Google. Zie content.md.
window.SITE = {
  naam: "RM Dakbedekkingen",
  plaats: "Dordrecht",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 44,
  kleuren: { brand: "#17202a", accent: "#c98b4f" },
  telefoon: "06 41 15 90 25",
  telefoonIntl: "31641159025",
  email: "info@rmdakbedekkingen.nl",
  adres: ["Pijnenburg 39", "3328 DB Dordrecht"],
  google: { score: "5,0", aantal: "49" },
  ctaTekst: "Laat uw dak beoordelen",
  navCta: "Offerte",
  waTekst: "App Robin",
  waContact: "App Robin",
  voetTekst: "Lokale dakdekker uit de Drechtsteden. Dakrenovatie, daklekkage en dakinspectie. Binnen Dordrecht geen voorrijkosten.",

  hero: {
    regels: ["Uw dak goed", "geregeld."],
    tekst: "Lokale dakdekker uit Dordrecht. Van de eerste inspectie tot de oplevering van uw vernieuwde dak, met garantie op al het werk.",
    foto: "img/hero.jpg", fotoPos: "50% 58%", fotoPosMobiel: "45% 50%",
    fotoAlt: "Dakdekker van RM Dakbedekkingen brandt nieuwe bitumen op een plat dak",
    donker: true,
    punten: ["Garantie op al het werk", "Geen voorrijkosten in Dordrecht", "Dezelfde dag teruggebeld"]
  },

  marquee: ["Dakrenovatie", "Daklekkage", "Dakinspectie", "Bitumen", "Platte daken", "Pannendaken", "Dakisolatie", "Dakgoten", "Zinkwerk", "Nokrenovatie"],

  spoed: {
    titel: "Lekkage? Snel handelen voorkomt erger.",
    tekst: "Bel of app Robin met een foto. Hij komt snel kijken en zorgt zo nodig eerst voor een noodoplossing."
  },

  intro: {
    kicker: "Over RM Dakbedekkingen",
    tekst: "Eerst goed kijken, dan pas adviseren. Soms is een reparatie genoeg, soms is renovatie de betere investering. U hoort het eerlijk, en betaalt niet voor werk dat niet nodig is.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "49", tel: 49, label: "Reviews op Google" },
      { getal: "€ 0", label: "Voorrijkosten in Dordrecht" },
      { getal: "Zelfde dag", label: "Teruggebeld na uw aanvraag" }
    ]
  },

  diensten: {
    titel: "Van inspectie tot renovatie",
    tekst: "Bitumen en platte daken, pannendaken, isolatie, dakgoten, zinkwerk en nokrenovatie. Ook nieuwbouw en overkappingen.",
    items: [
      { naam: "Dakrenovatie", soort: "Dakrenovatie", foto: "img/plat-dak-wijk.jpg", pos: "50% 60%", tekst: "Is uw dakbedekking verouderd of komen kleine reparaties steeds terug? Dan vernieuwen we het dak, zodat het weer jaren mee kan.",
        punten: ["Dakbedekking vervangen", "Dakisolatie", "Aansluitingen, randen en afvoeren"] },
      { naam: "Daklekkage", soort: "Daklekkage", foto: "img/lood-schoorsteen.jpg", pos: "50% 50%", tekst: "Snel reageren voorkomt schade aan uw interieur en de dakconstructie. We zoeken de oorzaak en lossen het echt op.",
        punten: ["Lood en voegwerk bij de schoorsteen", "Dakpannen en dakramen", "Zo nodig eerst een noodoplossing"] },
      { naam: "Dakinspectie", soort: "Dakinspectie", foto: "img/schoorsteen-nok.jpg", pos: "50% 50%", tekst: "Een regelmatige inspectie spoort problemen vroeg op en verlengt de levensduur van uw dak. We kijken goed en vertellen eerlijk wat we zien.",
        punten: ["Staat van de dakbedekking", "Advies: repareren of renoveren", "Duidelijke offerte"] }
    ],
    meer: [
      { naam: "Pannendaken en nokken", tekst: "Pannen vervangen en nokken renoveren." },
      { naam: "Dakgoten en zinkwerk", tekst: "Dakgoten, lood en zinken regenpijpen." },
      { naam: "Nieuwbouw en overkappingen", tekst: "Ook nieuwe daken en stijlvolle overkappingen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Projecten in Dordrecht en omgeving",
    tekst: "Van een kleine reparatie tot een volledig vernieuwd dak. Zo laten we elk dak achter.",
    items: [
      { foto: "img/plat-dak.jpg", label: "Plat dak", sub: "Nieuwe bitumen dakbedekking", pos: "50% 60%" },
      { foto: "img/schoorsteen.jpg", label: "Renovatie schoorsteen", sub: "Nieuw lood en opnieuw gevoegd", pos: "50% 40%" },
      { foto: "img/zinken-regenpijp.jpg", label: "Zinken regenpijp", sub: "In plaats van de oude PVC", pos: "50% 35%" },
      { foto: "img/dakkapel.jpg", label: "Dakkapel", sub: "Nieuwe laag bitumen", pos: "50% 60%" },
      { foto: "img/nok.jpg", label: "Nokrenovatie", sub: "Pannendak", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Van een eerste inspectie naar een vernieuwd dak",
    tekst: "Zodra uw aanvraag binnenkomt, belt Robin dezelfde dag om een afspraak te plannen.",
    foto: "img/team.jpg", fotoPos: "50% 30%", fotoAlt: "Het team van RM Dakbedekkingen aan het werk op een dak",
    stappen: [
      { naam: "We bekijken uw dak", tekst: "We komen langs en beoordelen de dakbedekking en alles wat invloed heeft op de levensduur." },
      { naam: "We bespreken de mogelijkheden", tekst: "Soms is een reparatie genoeg. Soms is renovatie beter voor de lange termijn." },
      { naam: "U ontvangt een duidelijke offerte", tekst: "U weet vooraf welke werkzaamheden nodig zijn. Geen verrassingen achteraf." },
      { naam: "We gaan aan de slag", tekst: "Na akkoord plannen we het werk in en renoveren we uw dak vakkundig." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Waarom RM",
    titel: "Garantie op al het werk",
    tekst: "Ook na de renovatie wilt u zekerheid. Daarom krijgt u garantie op al het geleverde werk.",
    lijst: {
      titel: "Waarom RM Dakbedekkingen?",
      punten: [
        "Eerst goed kijken, dan adviseren",
        "Rechtstreeks contact met Robin",
        "Lokaal, dus snel ter plaatse",
        "Geen voorrijkosten binnen Dordrecht",
        "Duidelijke afspraken en offerte vooraf",
        "Zorgvuldige, vakkundige uitvoering"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "De werkzaamheden zijn snel en netjes uitgevoerd. Tijdens de werkzaamheden kreeg ik via WhatsApp af en toe een foto van de voortgang, wat erg fijn was. Na afloop is alles keurig achtergelaten.", naam: "Marco V." },
      { tekst: "Robin heeft bij ons het dak gerenoveerd en geïsoleerd. Hij en zijn medewerkers werken netjes. … Maar nog belangrijker, ze komen afspraken na en de communicatie is duidelijk!", naam: "Dilan M." },
      { tekst: "Robin is makkelijk benaderbaar, komt snel kijken en past meteen een noodoplossing toe waarna de echte reparatie wordt ingepland. En, het belangrijkste: de problemen zijn dan echt opgelost.", naam: "Marjan" },
      { tekst: "Robin heeft mij reeds twee keer uit de brand geholpen. … Reageert snel, is vriendelijk en deskundig. Zeer tevreden mee.", naam: "Steven van N." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over Robin",
    titel: "Robin Mast",
    rol: "Eigenaar van RM Dakbedekkingen",
    tekst: [
      "RM Dakbedekkingen is een lokale dakdekker uit de Drechtsteden. Ik werk samen met andere ervaren dakdekkers uit de regio, zodat we grote en kleine klussen goed kunnen oppakken.",
      "Wat ons onderscheidt? Meedenken. We zoeken altijd de oplossing die past bij uw wensen en uw dak. U heeft rechtstreeks contact met mij, van de eerste afspraak tot de oplevering."
    ],
    foto: "img/plat-dak-staand.jpg", fotoPos: "50% 50%", fotoAlt: "Vernieuwd plat dak in een woonwijk",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur Robin een bericht"
  },

  werkgebied: {
    titel: "Dordrecht en de Drechtsteden",
    tekst: "Als lokaal bedrijf kennen we de regio en zijn we snel ter plaatse. Binnen Dordrecht rekenen we geen voorrijkosten. Recente projecten onder meer in:",
    plaatsen: ["Dordrecht", "Sliedrecht", "Bergschenhoek"]
  },

  faq: [
    { v: "Moet mijn dak gerenoveerd worden, of is repareren genoeg?", a: "Dat hoeft u niet zelf te bepalen. We bekijken de staat van uw dak en adviseren eerlijk. Soms is een reparatie genoeg, soms is renovatie de betere investering voor de lange termijn." },
    { v: "Rekenen jullie voorrijkosten?", a: "Binnen Dordrecht rekenen we geen voorrijkosten." },
    { v: "Hoe snel hoor ik iets na mijn aanvraag?", a: "Zodra uw aanvraag binnenkomt, belt Robin dezelfde dag om een afspraak te plannen. Hij komt langs om alles in te meten en maakt daarna de offerte." },
    { v: "Krijg ik garantie?", a: "Ja, RM Dakbedekkingen geeft garantie op al het geleverde werk." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Twijfelt u over uw dak?",
    tekst: "U hoeft niet zelf te bepalen of het een reparatie of renovatie wordt. We kijken en adviseren eerlijk."
  },

  contact: {
    titel: "Laat uw dak beoordelen",
    tekst: "Vul het formulier in, bel of stuur Robin een WhatsApp. U wordt dezelfde dag teruggebeld.",
    formTitel: "Afspraak aanvragen",
    onderwerpen: ["Dakrenovatie", "Daklekkage", "Dakinspectie", "Anders"],
    voorbeeld: "Bijvoorbeeld: het lood rond de schoorsteen lekt, of de dakbedekking van de aanbouw is aan vervanging toe",
    belofte: "Robin belt u dezelfde dag terug."
  }
};
