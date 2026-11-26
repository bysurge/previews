// Cornus Tuinen (Amersfoort), Koop de Vries. Bron: cornustuinen.nl (26-11-2026, oude eigen CMS) + Google (5,0 uit 1, geen tekst, geen foto's -> niet getoond).
// Foto's: eigen foto's uit hun fotogalerij en dienstpagina's. Seizoenenteksten komen van hun pagina "Het jaar rond een mooie tuin".
// Review: Fam. Wiltz staat zo op hun eigen site (pagina tuinonderhoud).
window.SITE = {
  naam: "Cornus Tuinen",
  kortNaam: "Cornus Tuinen",
  vak: "Hovenier",
  plaats: "Amersfoort",
  logo: "img/logo.svg",
  logoOpFoto: "img/logo-wit.svg",
  logoMetNaam: false,
  logoVorm: "breed",
  logoHoogte: 54,
  kleuren: { brand: "#2f3a2a", accent: "#b3362c" },
  telefoon: "06 12 22 80 37",
  telefoonIntl: "31612228037",
  waTekst: "App Koop",
  email: "info@cornustuinen.nl",
  adres: ["De Lagune 2", "3823 TS Amersfoort"],
  ctaTekst: "Vraag vrijblijvend advies",
  navCta: "Contact",
  voetTekst: "Hoveniersbedrijf in Amersfoort, gespecialiseerd in tuinonderhoud. Passie voor planten, aandacht en kwaliteit.",

  hero: {
    regels: ["Passie", "voor planten,", "*en vakmanschap.*"],
    tekst: "Cornus Tuinen in Amersfoort is gespecialiseerd in tuinonderhoud voor echte tuinliefhebbers. Van een haag scheren twee uur per jaar tot een vaste dag per maand.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "50% 60%", donker: true,
    fotoAlt: "Rond buxusparterre met grindpad voor een tuinpaviljoen",
    badge: "Erkend leerbedrijf SBB",
    punten: ["Onderhoudscontract altijd opzegbaar", "Spuitlicentie aanwezig"]
  },

  marquee: ["Tuinonderhoud", "Onderhoudscontract", "Gazononderhoud", "Vasteplantenborders", "Boomverzorging", "Tuinadvies", "Aanleg en renovatie", "Vormsnoei"],

  intro: {
    kicker: "Aandacht en kwaliteit",
    tekst: "Onze klanten zijn *echte tuinliefhebbers.* Die passie delen we, en met onze betrokkenheid zorgen we dat uw tuin levendig en mooi is én blijft.",
    stats: [
      { getal: "1907", label: "Grootvader De Vries begon in het vak" },
      { getal: "SBB", label: "Erkend leerbedrijf" },
      { getal: "Op maat", label: "Contract of op uurbasis" },
      { getal: "Altijd", label: "Opzegbaar contract" }
    ]
  },

  diensten: {
    titel: "Een tuin die *blijft groeien*",
    tekst: "Gespecialiseerd in onderhoud, maar ook voor aanleg, bomen en advies bent u bij ons aan het juiste adres.",
    items: [
      { naam: "Tuinonderhoud", foto: "img/schuur.jpg", pos: "50% 55%", tekst: "Een onderhoudscontract of werk op uurbasis. Samen maken we een plan om achterstallig onderhoud weg te werken of uw tuin in topconditie te houden, zodat u de kosten kunt spreiden.",
        punten: ["Van 2x per jaar tot elke maand", "Ook gemeenschappelijk groen", "Altijd opzegbaar"] },
      { naam: "Vasteplantenborders", foto: "img/border-rood.jpg", pos: "50% 55%", tekst: "Verrassende plantencombinaties, geïnspireerd door Piet Oudolf en Gertrude Jekyll, met strakke hagen die de seizoenen versterken. Met onze eigen kweek- en experimenteertuin.",
        punten: ["Beplantingsplan", "Hagen en snoeivormen", "Mooi in elk seizoen"] },
      { naam: "Gazononderhoud", foto: "img/gazon.jpg", pos: "50% 55%", tekst: "Het gazon is de groene basis van uw tuin. We stellen een schema op voor voeding, water, licht en lucht, en geven tips over wat u zelf kunt doen.",
        punten: ["Bemesten", "Kale plekken aanpakken", "Onderhoudsschema"] },
      { naam: "Boomverzorging", foto: "img/treurwilg.jpg", pos: "50% 40%", tekst: "Een boom geeft uw tuin diepte en hoogte, maar moet wel passen. We snoeien, planten en verplanten, verwijderen bomen en frezen stobben. Ook vormbomen en fruitbomen.",
        punten: ["Snoeien en verplanten", "Bomen verwijderen", "Stobben frezen"] },
      { naam: "Aanleg en renovatie", foto: "img/bestraten.jpg", pos: "50% 55%", tekst: "Van een kleine aanpassing tot een grote renovatie: vijvers, gazons, borders, pergola's en vlonders, sierbestrating, beregening en verlichting. Wij regelen het en voeren het oude af.",
        punten: ["Borders en gazons", "Hout- en ijzerwerk", "Bestrating en beregening"] },
      { naam: "Tuinadvies", foto: "img/vaste-planten.jpg", pos: "50% 55%", tekst: "Bruine coniferen, een kale buxus of een zieke rododendron? Vraag het een vakman. Ook over bemesting, kapvergunningen, vijveronderhoud en fruitbomen snoeien.",
        punten: ["Ziekten en plagen", "Regelgeving", "Beplantingsplan"] }
    ]
  },

  seizoenen: {
    kicker: "Het jaar rond",
    titel: "Ieder seizoen *zijn eigen charme*",
    tekst: "Elke dag van het jaar heeft de natuur iets moois te bieden, ook in uw tuin.",
    items: [
      { naam: "Lente", maanden: "maart – mei", foto: "img/vaste-planten.jpg", titel: "De tuin verandert *van dag tot dag*",
        tekst: "Het voorjaar is de tijd van de bollen. Wie regelmatig door de tuin loopt, ziet ook de vaste planten geboren worden, tot ze het in de loop van het voorjaar overnemen." },
      { naam: "Zomer", maanden: "juni – augustus", foto: "img/borderdetail.jpg", titel: "De border *uitbundig in bloei*",
        tekst: "Bodembedekkers zoals geraniums houden onkruid tegen, hoge planten geven contrast en grotere vlakken van dezelfde plant brengen rust in de border." },
      { naam: "Herfst", maanden: "september – november", foto: "img/grassen.jpg", pos: "50% 40%", titel: "Mooi, *ook na de bloei*",
        tekst: "Ook uitgebloeide planten kunnen heel decoratief zijn. Grassen spelen nu een grote rol, en laatbloeiers als salvia's nemen het stokje over." },
      { naam: "Winter", maanden: "december – februari", foto: "img/parterre.jpg", titel: "Rijp op *oude zaaddozen*",
        tekst: "Rijp of sneeuw op de uitgebloeide planten is een lust voor het oog. In januari ruimen we het dode materiaal op, en met sneeuwklokjes en helleborussen begint het nieuwe seizoen." }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Fotogalerij",
    titel: "Tuinen in *ons beheer*",
    tekst: "Onze passie voor planten is te zien in de tuinen van onze klanten. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/border-gazon.jpg", label: "Borders langs het gazon", sub: "Onderhoud" },
      { foto: "img/knoopbed.jpg", label: "Knopentuin van buxus", sub: "Vormsnoei" },
      { foto: "img/taxusbol.jpg", label: "Taxusbol scheren", sub: "Vakwerk" },
      { foto: "img/schaduwborder.jpg", label: "Schaduwborder met varens", sub: "Beplanting" },
      { foto: "img/binnentuin.jpg", label: "Binnentuin met vijver", sub: "Gemeenschappelijk groen" },
      { foto: "img/buxus.jpg", label: "Buxus 'appeltaart'", sub: "Vormsnoei" },
      { foto: "img/lupine.jpg", label: "Volle border", sub: "Vaste planten" },
      { foto: "img/aanleg.jpg", label: "Terras in aanleg", sub: "Aanleg" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Fam. Wiltz", tekst: "Sinds de ziekte van mijn man lukt het ons niet meer onze tuin zelf te onderhouden. Met een onderhoudscontract kunnen wij blijven genieten van onze tuin en hoeven wij niet meteen te verhuizen." }
    ]
  },

  over: {
    kicker: "Over Koop", navNaam: "Over ons",
    titel: "Geworteld *in het verleden*",
    rol: "Koop de Vries, eigenaar",
    tekst: [
      "Mijn passie voor planten heb ik geërfd van mijn grootvader, G.J. de Vries. Hij begon in 1907 in de bloemisterij, was eerste tuinknecht op kasteel Twickel en werkte veertig jaar als tuinbaas op landgoed De Bellinckhof in Almelo.",
      "Die liefde voor het vak brengen we graag over: Cornus Tuinen is een door de SBB erkend leerbedrijf, en we bezoeken regelmatig demodagen en vakbeurzen om bij te blijven."
    ],
    foto: "img/koop.jpg", fotoPos: "40% 40%", fotoAlt: "Koop de Vries tussen de bladeren",
    knop: "Stuur Koop een bericht"
  },

  werkgebied: {
    titel: "Amersfoort en omgeving",
    tekst: "Vanuit Amersfoort onderhouden we tuinen van particulieren, van stadstuin tot exclusieve tuin. We komen graag vrijblijvend langs.",
    plaatsen: ["Amersfoort"]
  },

  faq: [
    { v: "Zit ik vast aan een onderhoudscontract?", a: "Nee. Het contract is altijd opzegbaar. Bent u onverhoopt niet tevreden, dan kunt u op ieder moment stoppen." },
    { v: "Wat staat er in een onderhoudscontract?", a: "Per maand welke werkzaamheden we doen en wat dat kost, ook grasmaaien en beregening. Het wordt jaarlijks opgesteld, zodat u vooraf weet waar u aan toe bent." },
    { v: "Kan ik ook zelf meehelpen?", a: "Ja. U kunt uw tuin met ondersteuning van een vakman zelf onderhouden, en bij aanleg kunt u desgewenst meehelpen." },
    { v: "Wanneer kan er aangelegd worden?", a: "Het hele jaar door, zolang het niet vriest." }
  ],

  band: {
    foto: "img/border-gazon.jpg", fotoPos: "50% 60%",
    titel: "U hoeft er alleen nog *van te genieten*",
    tekst: "We komen graag vrijblijvend langs om te bespreken wat we voor uw tuin kunnen doen."
  },

  contact: {
    titel: "Vraag *vrijblijvend* advies",
    tekst: "Bel of app Koop de Vries, of mail naar info@cornustuinen.nl. We komen graag bij u langs.",
    onderwerpen: ["Tuinonderhoud", "Onderhoudscontract", "Borders en beplanting", "Gazon", "Bomen", "Aanleg en renovatie", "Advies"],
    voorbeeld: "Bijvoorbeeld: vast onderhoud voor onze border en de hagen, een paar keer per jaar"
  }
};
