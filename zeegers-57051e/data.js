// Zeegers Dakwerk (Amstelveen). Bron: zeegersdakwerk.nl + Google (4,8 / 40). Foto's: eigen site + Google. Zie content.md.
window.SITE = {
  naam: "Zeegers Dakwerk",
  plaats: "Amstelveen",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-op-foto.png",
  logoHoogte: 58,
  kleuren: { brand: "#1f2a31", accent: "#3fae55" },
  telefoon: "0297 548 386",
  telefoonIntl: "31297548386",
  telBel: "+31297548386",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of foto",
  email: "info@zeegersdakwerk.nl",
  adres: ["Keurmeesterstraat 36", "1187 ZX Amstelveen"],
  kvk: "86727362",
  google: { score: "4,8", aantal: "40" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dak & zink uit Amstelveen, sinds 2020. Dakbedekking, dakrenovatie, isolatie, zinkwerk, lekkages en inspecties.",

  hero: {
    regels: ["Dak & zink,", "goed geregeld."],
    tekst: "Dakdekker in Amstelveen en omgeving. Dakbedekking, renovatie, isolatie en ambachtelijk zinkwerk, met 10 jaar garantie op werk en materialen.",
    foto: "img/hero.jpg", fotoPos: "55% 45%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Dakdekker van Zeegers rolt nieuwe bitumen dakbedekking uit op een plat dak",
    donker: true,
    punten: ["10 jaar garantie", "Geen verborgen kosten", "24/7 bereikbaar bij lekkage"]
  },

  marquee: ["Bitumen daken", "Dakrenovatie", "Dakisolatie", "Zinken dakgoten", "Zinken dakkapellen", "Daklekkage", "Dakinspectie", "Dakonderhoud", "Groendaken"],

  spoed: {
    titel: "Lekkage? Wij komen snel.",
    tekst: "Bij een acute lekkage zijn we 24/7 bereikbaar en snel ter plaatse om de schade te beperken."
  },

  intro: {
    kicker: "Over Zeegers",
    tekst: "Lowie en Shanice richtten Zeegers Dakwerk op in 2020. Sindsdien draait alles om eerlijk advies, een persoonlijke aanpak en daken en zinkwerk die jaren meegaan.",
    stats: [
      { getal: "2020", label: "Opgericht door Lowie en Shanice" },
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "40", tel: 40, label: "Reviews op Google" },
      { getal: "10 jaar", label: "Garantie op werk en materialen" }
    ]
  },

  diensten: {
    titel: "Van dakgoot tot nok",
    tekst: "Particulier of zakelijk, nieuwbouw, verbouw of onderhoud: we denken mee en adviseren op maat.",
    items: [
      { naam: "Dakbedekking", soort: "Dakbedekking", foto: "img/dakbedekking.jpg", pos: "50% 50%", tekst: "Bitumen (dakleer), EPDM of PVC: waterdicht aangebracht en jarenlang zorgeloos. Ook witte daken die uw huis koel houden.",
        punten: ["Bitumen, EPDM en PVC", "Witte daken (cool roof)", "Groendaken"] },
      { naam: "Dakrenovatie", soort: "Dakrenovatie", foto: "img/renovatie.jpg", pos: "50% 60%", tekst: "Verouderd of beschadigd dak? We vernieuwen platte en schuine daken, en versterken de constructie waar dat nodig is.",
        punten: ["Platte en hellende daken", "Vrijblijvende dakopname", "Isoleren in één keer mee"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 55%", tekst: "Een goed geïsoleerd dak houdt de warmte binnen en verlaagt uw energierekening. Plat of schuin, van binnen of van buiten.",
        punten: ["Warm dak-principe", "Hoogwaardige materialen", "Hulp bij subsidie (ISDE)"] },
      { naam: "Zinkwerk", soort: "Zinkwerk", foto: "img/zinkwerk.jpg", pos: "50% 50%", tekst: "Zinken dakgoten, regenpijpen, dakkapellen en gevelbekleding. Op maat gemaakt en gesoldeerd, en gaat tot wel vijftig jaar mee.",
        punten: ["Dakgoten en regenpijpen", "Zinken dakkapellen", "Gevelbekleding"] },
      { naam: "Daklekkage", soort: "Daklekkage", foto: "img/lekkage.jpg", pos: "50% 40%", tekst: "We sporen het lek op zonder breekwerk, met onder meer een infraroodcamera of rookproef, en herstellen het vakkundig.",
        punten: ["24/7 bereikbaar", "Snel ter plaatse", "Vooraf een heldere prijs"] },
      { naam: "Inspectie en onderhoud", soort: "Inspectie of onderhoud", foto: "img/inspectie.jpg", pos: "50% 50%", tekst: "Kleine gebreken op tijd zien voorkomt grote schade. U krijgt een helder rapport met praktisch advies.",
        punten: ["Rapport met bevindingen", "Periodiek onderhoud", "Ook voor VvE's en bedrijven"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Zink en dak, tot in de details",
    tekst: "Strak gesoldeerde naden, zinken dakkapellen en goten op maat. Zo laten we elk dak achter.",
    items: [
      { foto: "img/dakkapel-zink.jpg", label: "Zinken dakkapellen", sub: "Twee dakkapellen, volledig in zink bekleed", pos: "50% 50%" },
      { foto: "img/schoorsteen.jpg", label: "Schoorsteen in zink", sub: "Strak bekleed en waterdicht", pos: "50% 45%" },
      { foto: "img/dakkapel-zijkant.jpg", label: "Dakkapel", sub: "Zinken wangen, klaar voor de pannen", pos: "50% 40%" },
      { foto: "img/kilgoot.jpg", label: "Zinken kilgoot", sub: "Tussen de pannen", pos: "50% 50%" },
      { foto: "img/goot-zink.jpg", label: "Zinken dakgoot", sub: "Op maat gemaakt", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Duidelijk vanaf het eerste contact",
    tekst: "U weet altijd waar u aan toe bent: een heldere offerte, zonder verborgen kosten.",
    foto: "img/werkwijze.jpg", fotoPos: "50% 45%", fotoAlt: "Gerenoveerd dak met dakraam en nieuwe goot",
    stappen: [
      { naam: "Intake en afspraak", tekst: "We bespreken kort uw situatie en plannen een afspraak die u uitkomt." },
      { naam: "Opname op locatie", tekst: "Een ervaren dakdekker bekijkt het dak. Voor een offerte is die opname vrijblijvend." },
      { naam: "Heldere offerte", tekst: "U ontvangt een duidelijk voorstel met eerlijk advies en transparante kosten." },
      { naam: "Vakkundige uitvoering", tekst: "Ons team van ervaren dakdekkers gaat aan de slag, met oog voor detail." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie",
    tekst: "We staan achter ons werk. Daarom krijgt u 10 jaar garantie, op het geleverde werk én op de gebruikte materialen.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Een heldere offerte, zonder verborgen kosten",
        "Eerlijk advies over materialen, ook over de nadelen",
        "Alleen hoogwaardige en duurzame materialen",
        "Snel ter plaatse bij lekkage, 24/7 bereikbaar",
        "Lekdetectie zonder breekwerk",
        "Zakelijk: onderhoudsplannen voor VvE's en vastgoed"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Mijn ervaring met dit bedrijf is buitengewoon goed! Er wordt snel gereageerd, zowel aan de telefoon als per email alsook met fysieke hulp. … Hij denkt erg met je mee. … Ik raad dit bedrijf aan!", naam: "Susanne P." },
      { tekst: "Werkzaamheden perfect uitgevoerd. Het zink van onze dakgoot moest vervangen worden. Communicatie is top, aardig team en een bewonderingswaardig werktempo. … er zijn geen verborgen kosten. Eerlijk bedrijf!", naam: "Lotte T." },
      { tekst: "Wij hebben Zeegers Dakwerk leren kennen als een professioneel bedrijf met kundige, hardwerkende medewerkers. Iedereen was zeer bereidwillig mee te denken om tot een goed resultaat te komen.", naam: "Sibylle K." },
      { tekst: "Een betrouwbare firma voor het vernieuwen van je dakgoten. Ik kan Zeegers Dakwerk van harte aanbevelen.", naam: "Erik G." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Lowie en Shanice",
    rol: "Oprichters van Zeegers Dakwerk, sinds 2020",
    tekst: [
      "Lowie ontdekte al jong zijn passie voor het dak. Op zijn zestiende begon hij bij een loodgietersbedrijf, en niet veel later stapte hij over naar een dakdekkersbedrijf. Sindsdien is hij volledig gespecialiseerd in het vak.",
      "In 2020 richtte hij samen met Shanice Zeegers Dakwerk op. Met een team van ervaren vakmensen werken we aan elk project met oog voor detail, en via cursussen blijven we bij met de nieuwste technieken en materialen."
    ],
    foto: "img/over.jpg", fotoPos: "40% 50%", fotoAlt: "Dakdekker van Zeegers brandt dakbedekking aan bij een opstand",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Amstelveen en ver daarbuiten",
    tekst: "Vanuit Amstelveen werken we in Noord-Holland, Zuid-Holland, Utrecht en Flevoland. Voor particulieren, VvE's, vastgoedbeheerders en bouwbedrijven.",
    plaatsen: ["Amstelveen", "Noord-Holland", "Zuid-Holland", "Utrecht", "Flevoland"]
  },

  faq: [
    { v: "Is daklekkage verzekerd?", a: "Vaak wel, via de opstalverzekering, vooral bij storm of een onverwachte gebeurtenis. Bij achterstallig onderhoud kan de verzekeraar de schade afwijzen. Leg de schade vast met foto's." },
    { v: "Kan ik subsidie krijgen voor dakisolatie?", a: "In veel gevallen wel, via de ISDE. Meestal moet u dan twee energiebesparende maatregelen combineren, zoals dak- en vloerisolatie. We helpen u graag met de actuele regelingen." },
    { v: "Hoe lang duurt een dakrenovatie?", a: "Een kleine renovatie is soms binnen één dag klaar, een volledige vernieuwing duurt meerdere dagen. U krijgt vooraf altijd een heldere planning." },
    { v: "Is een dakinspectie gratis?", a: "Een opname voor een offerte is vrijblijvend en kosteloos. Een volledige inspectie met rapport doen we tegen een vast tarief; u hoort vooraf wat dat kost." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 70%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een vrijblijvende dakopname aan. We kijken mee en vertellen eerlijk wat er nodig is."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. Bij lekkage zijn we 24/7 bereikbaar.",
    formTitel: "Aanvraag",
    onderwerpen: ["Dakbedekking", "Dakrenovatie", "Dakisolatie", "Zinkwerk", "Daklekkage", "Inspectie of onderhoud"],
    voorbeeld: "Bijvoorbeeld: de zinken dakgoot lekt, of het platte dak op de uitbouw is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
