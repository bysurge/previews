// Ricardo Groen Schildersbedrijf (Rotterdam). Bron: ricardogroen.nl (opgehaald 2026-11-22).
// Geen reviews/score, geen KvK bekend: weggelaten. Ervaring op hun site tegenstrijdig (23 vs 15 jaar): geen getal gebruikt.
// Adres volgens contactpagina/footer (privacyverklaring noemt Graaf Florisstraat 108 B3). VCA is de enige certificering.
window.SITE = {
  naam: "Ricardo Groen Schildersbedrijf",
  kortNaam: "Ricardo Groen",
  plaats: "Rotterdam",
  titelExtra: "Schilder in Rotterdam",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  kleuren: { brand: "#001c36", accent: "#5aa9cc" },
  telefoon: "06 18 255 355",
  telefoonIntl: "31618255355",
  waTekst: "App Ricardo",
  email: "info@ricardogroen.nl",
  adres: ["Gladiolusstraat 33-B", "3051 LE Rotterdam"],
  navCta: "Offerte",
  voetTekst: "Binnen- en buitenschilderwerk, onderhoud en renovatie in Rotterdam en omstreken. Voor particulieren en bedrijven.",

  hero: {
    regels: ["Vakwerk dat", "jaren mooi", "blijft."],
    tekst: "Binnen- en buitenschilderwerk in Rotterdam en omstreken. Van een winkelpui uit 1905 tot uw woonkamer: grondig voorbereid en strak afgewerkt.",
    foto: "img/hero-winkelpui.jpg", fotoPos: "30% 55%",
    fotoAlt: "Gerestaureerde winkelpui uit 1905 in de Graaf Florisstraat met donkerblauwe deuren",
    badge: "VCA-gecertificeerd vakschilder"
  },

  marquee: ["Buitenschilderwerk", "Binnenschilderwerk", "Wanden en plafonds", "Trappen lakken", "Houtrot herstellen", "Waterschade", "Kalkverf en fresco", "Kleuradvies"],

  intro: {
    kicker: "Over het bedrijf",
    tekst: "Goed schilderwerk begint bij de ondergrond. Ricardo kijkt eerst wat uw huis echt nodig heeft, bespreekt vooraf de aanpak en prijs, en levert pas op als u tevreden bent.",
    stats: [
      { getal: "2018", label: "Eigen schildersbedrijf in Rotterdam" },
      { getal: "VCA", label: "Gecertificeerd, veilig werken" },
      { getal: "Vooraf", label: "Een duidelijke prijsindicatie" },
      { getal: "Gratis", label: "Onderhoudsrapport na afloop" }
    ]
  },

  diensten: {
    titel: "Binnen en buiten, één vakschilder",
    tekst: "Voor huizen, winkels, kantoren en restaurants. Kies wat u wilt laten doen, dan komt Ricardo kijken en krijgt u een vrijblijvende offerte.",
    items: [
      { naam: "Buitenschilderwerk", foto: "img/delft-kozijnen.jpg", pos: "60% 40%", tekst: "Verf beschermt uw hout tegen vocht en vuil. We controleren afwatering, hechting en verbindingen, en lossen gebreken eerst op.",
        punten: ["Kozijnen, deuren en daklijsten", "Naden dichtgezet met kit", "Eerst overleg bij houtrot of schade"] },
      { naam: "Binnenschilderwerk", foto: "img/vt-wonen-2.jpg", tekst: "Strakke plafonds, frisse muren en deuren en kozijnen weer als nieuw. Met verf op waterbasis, dus geen verflucht.",
        punten: ["Deuren, ook in hoogglans", "Kozijnen met enkel glas of glas-in-lood", "U kunt gewoon thuisblijven"] },
      { naam: "Wanden en plafonds", foto: "img/ricardo-wand.jpg", pos: "60% 50%", tekst: "Niet elke wand is schilderklaar. Eerst maken we de ondergrond goed, daarna wordt het egaal en strak.",
        punten: ["Gaatjes en scheuren weggewerkt", "Nieuw stucwerk goed voorbehandeld", "Glasvezelbehang voor sterke wanden"] },
      { naam: "Trappen lakken", foto: "img/trap.jpg", pos: "50% 60%", tekst: "Een gelakte trap is een blikvanger in huis. We gebruiken anti-slip trappenlak van Sigma, zodat hij ook veilig blijft.",
        punten: ["Zijkanten en leuningen strak gelakt", "Anti-slip lak op de treden", "Kleuren naar wens"] },
      { naam: "Woning verkopen", foto: "img/plafond.jpg", tekst: "Laat uw huis schilderen voordat het te koop gaat. Kopers zien een verzorgd huis, en de garantie gaat met het onderhoudsrapport mee.",
        punten: ["Opfrisbeurt of groter onderhoud", "Lichte, rustige kleuren", "Onderhoudsrapport voor de koper"] },
      { naam: "Kleur- en verfadvies", foto: "img/woonkamer-blauw.jpg", pos: "35% 50%", tekst: "Toe aan iets nieuws, maar geen idee waar te beginnen? Ricardo helpt u kleuren en technieken kiezen die bij u en uw huis passen.",
        punten: ["Advies over kleur en verfsoort", "Accentwanden en kleurcombinaties", "Bijzondere technieken voor binnen"] }
    ],
    meer: [
      { naam: "Waterschade herstellen", tekst: "Ricardo beoordeelt de schade bij u thuis en werkt plafond, muur of kozijn weer weg. Ook een offerte voor uw verzekeraar is mogelijk." },
      { naam: "Houtrot herstellen", tekst: "Rot hout verwijderd, laten drogen en hersteld met tweecomponenten-reparatiemiddel, daarna gegrond en geschilderd." },
      { naam: "Kalkverf, fresco en metallic", tekst: "Speciale verftechnieken voor binnen, zoals kalkverf, krijtverf, Italiaans fresco en een metallic look." }
    ]
  },

  voorNa: {
    titel: "Een voordeur uit 1905",
    tekst: "Deze deur van Amerikaans grenen in de Graaf Florisstraat was zwaar beschadigd. Kaal gemaakt, hersteld en in diep donkerblauw gelakt, zodat hij weer jaren mee kan. Sleep over de foto.",
    items: [
      { naam: "Oude verflaag", voor: "img/deur-voor.jpg", na: "img/deur-na.jpg" },
      { naam: "Kaal hout", voor: "img/deur-kaal.jpg", na: "img/deur-na.jpg" }
    ]
  },

  galerij: {
    vorm: "recht", navNaam: "Projecten", kicker: "Projecten",
    titel: "Werk waar we trots op zijn",
    tekst: "Van monumentale panden tot moderne interieurs. Een greep uit de projecten van de afgelopen jaren.",
    items: [
      { foto: "img/delft-gevels.jpg", label: "Panden uit 1915", sub: "Delft" },
      { foto: "img/delft-erker.jpg", pos: "30% 50%", label: "Kozijnen in hoogglans Sigma-lak", sub: "Delft" },
      { foto: "img/sveapark.jpg", pos: "35% 50%", label: "Gevelpanelen duurzaam beschermd", sub: "Sveapark, Schiedam" },
      { foto: "img/trap-woonkamer.jpg", label: "Woonkamer en trap restylen", sub: "Diep donkerblauw en RAL 9003" },
      { foto: "img/vt-wonen.jpg", pos: "60% 50%", label: "Woonkamer in rustige tinten", sub: "Urban Taupe, Snow White en Stone" },
      { foto: "img/meddo-metallic.jpg", pos: "40% 50%", label: "Metallic look", sub: "Meddo" },
      { foto: "img/fresco-vlaardingen.jpg", pos: "30% 50%", label: "Fresco kalkverf", sub: "Vlaardingen" },
      { foto: "img/deur-binnen.jpg", label: "Winkelpui uit 1905", sub: "Graaf Florisstraat, Rotterdam" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt Ricardo",
    tekst: "Duidelijke afspraken vooraf, een strakke planning en samen naar het resultaat kijken.",
    foto: "img/ricardo-kozijn.jpg", fotoPos: "60% 40%", fotoAlt: "Ricardo schildert een kozijn vanaf de steiger",
    stappen: [
      { naam: "Contact", tekst: "Bel, app, mail of vul het formulier in. Ricardo neemt contact op voor een afspraak." },
      { naam: "Bekijken en offerte", tekst: "Samen bekijken we het werk. U krijgt een vrijblijvende offerte met een heldere prijs." },
      { naam: "Planning", tekst: "We kiezen samen het beste moment, zodat het werk u zo min mogelijk hindert." },
      { naam: "Uitvoering en controle", tekst: "Netjes afgeplakt en schoon gewerkt. Na afloop bekijken we samen het resultaat." },
      { naam: "Onderhoudsrapport", tekst: "U krijgt gratis een rapport met het onderhoud dat de komende jaren te verwachten is." }
    ]
  },

  garantie: {
    titel: "Garantie die met uw huis meegaat",
    tekst: "Op het geleverde schilderwerk krijgt u garantie. Verkoopt u uw huis binnen de garantietermijn, dan gaat die via het onderhoudsrapport over op de nieuwe bewoners.",
    lijst: {
      titel: "Bij elke klus",
      punten: ["Garantie op het geleverde schilderwerk", "Gratis onderhoudsrapport na afloop", "Geen onderhoudscontract nodig", "Binnen verf op waterbasis, zonder verflucht", "Machinaal schuren met stofafzuiging"]
    },
    merken: ["Sigma Coatings"], merkenTekst: "Onder meer lakken van"
  },

  over: {
    kicker: "Over Ricardo", navNaam: "Over Ricardo",
    titel: "Ricardo Groen",
    rol: "Gediplomeerd vakschilder, eigen bedrijf sinds 2018",
    tekst: [
      "Ricardo leerde het vak van zijn vader en leermeester Nico Groen, schilder in Vlaardingen. Hij begon met vakantiewerk en werkte daarna jaren fulltime als schilder in de regio Rotterdam en de Achterhoek.",
      "Na zijn studie aan de Hogeschool Rotterdam werkte hij vier jaar als projectmanager. Het schilderen bleef trekken: in 2018 begon hij zijn eigen schildersbedrijf in Rotterdam.",
      "Dat merkt u aan een strakke planning, heldere afspraken en oog voor detail. Naast onderhoud is Ricardo gespecialiseerd in bijzondere verftechnieken voor binnen."
    ],
    foto: "img/ricardo.jpg", fotoPos: "50% 30%", fotoAlt: "Ricardo Groen",
    badge: "img/vca-badge.png",
    knop: "Stuur Ricardo een bericht"
  },

  werkgebied: {
    titel: "Rotterdam en omstreken",
    tekst: "Vanuit Rotterdam werkt Ricardo in de hele regio.",
    plaatsen: ["Rotterdam", "Kralingen", "Overschie", "Schiebroek", "Schiedam", "Vlaardingen", "Maassluis", "Capelle aan den IJssel", "Ridderkerk", "Barendrecht", "Berkel en Rodenrijs", "Bergschenhoek"]
  },

  faq: [
    { v: "Heb ik lang last van rommel en verflucht?", a: "Nee. We dekken en plakken netjes af waar we werken en schuren machinaal met stofzuigers. Binnen gebruiken we grondverf en lak op waterbasis, zonder schadelijke dampen." },
    { v: "Kan ik thuisblijven als er binnen geschilderd wordt?", a: "Ja. We maken samen een plan, zodat u met uw gezin gewoon thuis kunt blijven. Verf op waterbasis is binnen een uur stofdroog: een trap die 's ochtends is geschilderd, kunt u 's middags weer op." },
    { v: "Is verf op waterbasis net zo goed als verf op terpentinebasis?", a: "Voor binnen is het zelfs beter. Het verkleurt nauwelijks, beschermt beter tegen huidvet en blijft daardoor langer mooi." },
    { v: "Wat kost het schilderwerk?", a: "Schilderwerk is maatwerk. Ricardo komt daarom altijd eerst kijken. De prijs hangt af van de staat van het schilderwerk en de ondergrond, en van de bereikbaarheid. U krijgt vooraf een duidelijke prijsindicatie." }
  ],

  band: {
    foto: "img/band-delft.jpg", fotoPos: "50% 45%",
    titel: "Tijd voor nieuw schilderwerk?",
    tekst: "Vraag een vrijblijvende offerte aan. Ricardo komt langs, kijkt mee en geeft eerlijk advies."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vertel kort wat u wilt laten doen. Ricardo neemt zo snel mogelijk contact met u op, of stuur direct een WhatsApp.",
    onderwerpen: ["Buitenschilderwerk", "Binnenschilderwerk", "Wanden en plafonds", "Trappen lakken", "Woning verkopen", "Kleur- en verfadvies", "Waterschade"],
    voorbeeld: "Bijvoorbeeld: kozijnen en voordeur aan de voorkant schilderen"
  }
};
