// Preview A.G. Tuinen (Leiden/Leiderdorp). Bron: ag-tuinen.nl (teksten + eigen foto's) en hun Google-profiel (score + foto's).
// Geen stockfoto's. Geen Google-reviewteksten beschikbaar, dus geen reviewsectie.
window.SITE = {
  naam: "A.G. Tuinen",
  kortNaam: "A.G. Tuinen",
  vak: "Hovenier",
  plaats: "Leiden",
  titelExtra: "Hovenier in Leiden en Leiderdorp",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 38,
  kleuren: { brand: "#24472a", accent: "#a87440" },
  telefoon: "06 46 12 42 14",
  telefoonIntl: "31646124214",
  waTekst: "App Arjen",
  email: "info@ag-tuinen.nl",
  adres: ["Grotiuslaan 3", "2353 BP Leiderdorp"],
  google: { score: "5,0", aantal: 2 },
  voetTekst: "Hoveniersbedrijf voor aanleg, onderhoud en renovatie van tuinen in Leiden, Leiderdorp en omgeving. Voor particulieren, bedrijven en VvE's.",

  hero: {
    regels: ["Genieten van", "een goed", "*onderhouden tuin.*"],
    tekst: "Hovenier in Leiden en Leiderdorp voor aanleg, onderhoud en renovatie. Voor particulieren, bedrijven en VvE's.", donker: true,
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%",
    fotoAlt: "Gerenoveerde achtertuin met grote tegels, een boom en volle borders",
    punten: ["Vrijblijvend langs en offerte", "Aanleg, onderhoud en renovatie"],
    notitie: { label: "Nu in de planning", tekst: "Najaarsbeurt en blad opruimen" }
  },

  marquee: ["Tuinonderhoud", "Tuinaanleg", "Tuinrenovatie", "Tuinontwerp", "Bestrating", "Snoeien", "Beplanting", "Bedrijfstuinen en VvE's"],

  intro: {
    kicker: "Over A.G. Tuinen",
    tekst: "Niet iedereen heeft groene vingers of de tijd voor de tuin. Wij kennen uw planten en bomen en weten wat ze nodig hebben, zodat u *alleen nog hoeft te genieten.*",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Vrijblijvend", label: "We komen langs en maken een offerte" }
    ]
  },

  diensten: {
    titel: "Alles voor uw tuin, *uit één hand*",
    tekst: "Van een voor- en najaarsbeurt tot een complete nieuwe tuin. Voor elke klus de juiste expertise, dankzij een breed netwerk van collega-hoveniers en leveranciers.",
    items: [
      { naam: "Tuinonderhoud", foto: "img/na-3.jpg", pos: "50% 55%",
        tekst: "Een voor- en najaarsbeurt, hagen en heesters snoeien, onkruid uit de borders, het gazon maaien en in het najaar het blad opruimen.",
        punten: ["Voor- en najaarsbeurt", "Snoeien van hagen en heesters", "Bestrating schoonspuiten"] },
      { naam: "Tuinaanleg", foto: "img/lounge-3.jpg",
        tekst: "Van tuinontwerp en beplantingsplan tot bestrating, gazon, verlichting en beregening. Ook een schutting, hekwerk, tuinhuisje of vlonder.",
        punten: ["Tuinontwerp op maat", "Verlichting en beregening", "Schutting, vlonder, tuinhuis"] },
      { naam: "Tuinrenovatie", foto: "img/na-1.jpg",
        tekst: "Planten te groot geworden, tegels verzakt of een nieuw huis met een verwaarloosde tuin? Wij snoeien achterstallig werk, herstellen de bestrating en richten de plantvakken opnieuw in.",
        punten: ["Achterstallig snoeiwerk", "Bestrating herstellen", "Plantvakken opnieuw inrichten"] },
      { naam: "Bestrating", foto: "img/g-visgraat.jpg", pos: "50% 60%",
        tekst: "Terrassen en paden die er strak bij liggen, van klinkers in visgraatverband tot grote tegels. Op de juiste hoogte gelegd, zodat het jaren mooi blijft.",
        punten: ["Terrassen en paden", "Klinkers en tegels", "Herstraten na verzakking"] }
    ],
    meer: [
      { naam: "Bedrijven, kantoren en VvE's", tekst: "Een verzorgde bedrijfstuin is uw visitekaartje. We leggen aan en onderhouden het hele jaar door, met grasmaaien, snoeien, bemesten en onkruidbestrijding." },
      { naam: "Onderhoudscontract", tekst: "Spreek vaste beurten en werkzaamheden af. U weet vooraf wat het per jaar kost en wij bellen zelf om een afspraak te maken. Eenmalig kan natuurlijk ook." }
    ]
  },

  voorNa: {
    titel: "Een tuin, *opnieuw ingericht*",
    tekst: "Sleep over de foto. Links de tuin zoals we hem aantroffen, rechts na de renovatie: grote tegels, nieuwe plantvakken en een waterbak.",
    items: [
      { naam: "Zithoek achterin", voor: "img/voor-1.jpg", na: "img/na-2.jpg" },
      { naam: "Vlonder en vijver", voor: "img/voor-2.jpg", na: "img/na-1.jpg" },
      { naam: "Bij de tuindeuren", voor: "img/voor-3.jpg", na: "img/na-4.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *A.G. Tuinen*",
    tekst: "Een greep uit tuinen die we aanlegden, opknapten en onderhouden.",
    items: [
      { foto: "img/lounge-2.jpg", label: "Terras met loungehoek en buitenkeuken", sub: "Tuinaanleg", pos: "50% 55%" },
      { foto: "img/g-pad.jpg", label: "Slingerpad door het gazon", sub: "Tuinaanleg" },
      { foto: "img/g-vijver.jpg", label: "Rond terras aan de vijver", sub: "Bestrating" },
      { foto: "img/lounge-4.jpg", label: "Zitplek met hortensia's", sub: "Beplanting", pos: "50% 60%" },
      { foto: "img/g-plantenbak.jpg", label: "Plantenbak aan het water", sub: "Tuinaanleg" }
    ]
  },

  werkwijze: {
    titel: "Zo werken *we*",
    tekst: "Duidelijk vanaf het eerste contact. U weet wat we gaan doen, wanneer, en wat het kost.",
    stappen: [
      { naam: "Bel, app of mail", tekst: "Vertel kort wat u in gedachten heeft. We maken een afspraak om langs te komen." },
      { naam: "Samen de tuin bekijken", tekst: "We bespreken uw wensen en de mogelijkheden, en meten de tuin op als er een ontwerp nodig is." },
      { naam: "Vrijblijvende offerte", tekst: "U krijgt een duidelijke offerte, die we samen doornemen en waar nodig toelichten." },
      { naam: "Aan de slag", tekst: "We plannen het werk en de duur samen met u in. Daarna leveren we de tuin netjes op." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Vakwerk in *Leiden en Leiderdorp*",
    rol: "Arjen Graveland, A.G. Tuinen",
    tekst: [
      "A.G. Tuinen is een hoveniersbedrijf in Leiden en Leiderdorp, met vakbekwame, klantvriendelijke mensen en jarenlange ervaring in het hovenierswerk.",
      "We werken voor particulieren, bedrijven en Verenigingen van Eigenaren. Dankzij een breed netwerk van collega-hoveniers en leveranciers hebben we voor elke klus de juiste expertise en de juiste materialen."
    ],
    foto: "img/lounge-1.jpg", fotoPos: "40% 50%", fotoAlt: "Terras met een houten statafel en groene borders",
    knop: "Stuur Arjen een bericht"
  },

  werkgebied: {
    titel: "Leiden, Leiderdorp en omgeving",
    tekst: "Vanuit Leiderdorp werken we in Leiden en de wijde omgeving. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Leiden", "Leiderdorp"]
  },

  faq: [
    { v: "Komen jullie vrijblijvend langs?", a: "Ja. Na een telefoontje, app of mail maken we een afspraak, bekijken we de tuin en bespreken we uw wensen. Daarna krijgt u een vrijblijvende offerte." },
    { v: "Kan ik een onderhoudscontract afsluiten?", a: "Ja. U kiest de termijnen en werkzaamheden, bijvoorbeeld een voor- en najaarsbeurt en eventueel een beurt in de zomer. U weet vooraf wat het per jaar kost." },
    { v: "Kan onderhoud ook eenmalig?", a: "Zeker. U kunt het onderhoud eenmalig laten doen, of alleen wanneer u het nodig vindt." },
    { v: "Werken jullie ook voor bedrijven en VvE's?", a: "Ja. We leggen tuinen aan en onderhouden ze bij bedrijven, kantoren, Verenigingen van Eigenaren en parken." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Zin in een tuin om *van te genieten?*",
    tekst: "Neem vrijblijvend contact op. We komen langs, kijken mee en maken een offerte op maat."
  },

  contact: {
    titel: "Vraag een *vrijblijvende offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Arjen neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinonderhoud", "Tuinaanleg", "Tuinrenovatie", "Bestrating", "Onderhoudscontract", "Bedrijfstuin of VvE"],
    voorbeeld: "Bijvoorbeeld: achtertuin van 6 bij 10 meter, nieuwe bestrating en de borders opnieuw inrichten"
  }
};
