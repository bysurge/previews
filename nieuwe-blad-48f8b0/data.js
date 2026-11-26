// Hoveniersbedrijf Het Nieuwe Blad (Diemen / Amsterdam). Bron: hetnieuweblad.nl, 26-11-2026.
// Foto's: alleen hun eigen projectfoto's (de sfeerfoto's van de homepage-slider zijn stock en NIET gebruikt).
// Google-profiel niet met zekerheid gevonden (Maps gaf een andere hovenier) -> geen Google-score/reviews getoond.
window.SITE = {
  naam: "Hoveniersbedrijf Het Nieuwe Blad",
  kortNaam: "Het Nieuwe Blad",
  vak: "Hovenier",
  plaats: "Amsterdam",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoHoogte: 44,
  kleuren: { brand: "#21402f", accent: "#b0463a" },
  telefoon: "06 22 05 26 67",
  telefoonIntl: "31622052667",
  waTekst: "App Martin",
  email: "martin@hetnieuweblad.nl",
  adres: ["Onoribo 2", "1112 WS Diemen"],
  kvk: "33276727",
  voetTekst: "Hovenier met een creatieve inslag in Amsterdam en omgeving. Tuinontwerp, tuinaanleg en tuinonderhoud, sinds 1996.",

  hero: {
    regels: ["Verrassende", "accenten voor", "*uw tuin.*"],
    tekst: "Martin Worst ontwerpt, legt aan en onderhoudt tuinen in Amsterdam en omgeving. Gespecialiseerd in beplanting, met oog voor bijzondere plantencombinaties.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "50% 55%",
    fotoAlt: "Formele tuin met buxushaagjes, grindpaden en vormbomen",
    badge: "Telefonisch altijd bereikbaar",
    donker: true,
    punten: ["Hovenier sinds 1996", "Van ontwerp tot onderhoud"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Beplanting", "Sierbestrating", "Waterpartijen", "Tuinverlichting", "Snoeien"],

  intro: {
    kicker: "Over Het Nieuwe Blad",
    tekst: "Planten zijn de basis van een *sfeervolle tuin.* Sierbestrating, water en een paar bijzondere accenten maken hem af. Een Franse bloementuin, een Engelse tuin of iets heel eigens: alles kan.",
    stats: [
      { getal: "1996", label: "Hovenier sinds" },
      { getal: "Altijd", label: "Telefonisch bereikbaar" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *complete aanleg*",
    tekst: "Martin komt altijd eerst bij u langs. Hij bekijkt de tuin, bespreekt uw wensen en legt een plan van aanpak met een globale begroting voor.",
    items: [
      { naam: "Tuinontwerp", foto: "img/haagjes.jpg", tekst: "Een ontwerp dat een goed beeld geeft van de nieuwe tuin, compleet met beplantingslijst en een begroting van materialen en arbeidstijd.",
        punten: ["Gebruik, stijl en sfeer", "Beplantingslijst", "Heldere begroting"] },
      { naam: "Tuinaanleg", foto: "img/osdorp.jpg", tekst: "Samen met een vast netwerk van specialisten: boomchirurg, elektricien, metselaar of irrigatiewerker. Het tuin-totaal-team.",
        punten: ["Sierbestrating en mozaïek", "Waterpartijen en verlichting", "Muren en treden"] },
      { naam: "Beplanting", foto: "img/esdoorn.jpg", tekst: "Hier ligt het specialisme van Martin: bijzondere plantencombinaties die bij uw tuin, licht en bodem passen.",
        punten: ["Bijzondere combinaties", "Bomen en heesters", "Klimplanten en rozen"] },
      { naam: "Tuinonderhoud", foto: "img/beplanting.jpg", tekst: "De schoonheid van een tuin zit in de verandering, van seizoen tot seizoen. Wij houden hem in optimale staat.",
        punten: ["Wieden, snoeien en bemesten", "Gras maaien en kanten", "Ziektebestrijding en bevloeiing"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Tuinen",
    titel: "Gerealiseerde *tuinen*",
    tekst: "In Amsterdam en omgeving zijn al veel tuinen aangelegd door Het Nieuwe Blad. Een greep eruit.",
    items: [
      { foto: "img/watergraafsmeer.jpg", label: "Tuin in de Watergraafsmeer", sub: "Ontwerp en aanleg", pos: "50% 60%" },
      { foto: "img/broek-lavendel.jpg", label: "Broek in Waterland", sub: "Beplanting" },
      { foto: "img/osdorp-4mnd.jpg", label: "Tuin in Osdorp, na 4 maanden", sub: "Aanleg" },
      { foto: "img/prinsengracht.jpg", label: "Nieuwe tuin aan de Prinsengracht", sub: "Aanleg" },
      { foto: "img/abcoude.jpg", label: "Boerderijtuin in Abcoude", sub: "Aanleg" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot leven*",
    tekst: "Een goed idee voor een tuin kan overal vandaan komen. Wij werken het samen met u uit.",
    foto: "img/rozen-deur.jpg", fotoPos: "50% 50%", fotoAlt: "Blauwe tuindeur met witte klimrozen",
    stappen: [
      { naam: "Langskomen", tekst: "We bekijken de locatie en bespreken uw wensen." },
      { naam: "Plan en begroting", tekst: "U krijgt een plan van aanpak en een globale begroting ter goedkeuring." },
      { naam: "Ontwerp", tekst: "Het eerste ontwerp, met beplantingslijst, en daarna de definitieve aanpak." },
      { naam: "Aanleg en onderhoud", tekst: "Het tuin-totaal-team legt de tuin aan, en houdt hem desgewenst mooi." }
    ]
  },

  over: {
    kicker: "Over Martin", navNaam: "Over ons",
    titel: "Martin *Worst*",
    rol: "Hovenier en tuinontwerper",
    tekst: [
      "Sinds 1996 heeft Martin een veelzijdige en creatieve kijk op tuinontwerp en -aanleg ontwikkeld. Hij is gespecialiseerd in beplanting en heeft jarenlange ervaring met sierbestrating, waterpartijen en tuinaccessoires.",
      "Zijn passie wordt gedeeld door een enthousiast netwerk van eigen ondernemers en specialisten. Samen verzorgen ze uw tuin, of maken er een paradijselijke buitenruimte van."
    ],
    foto: "img/martin.jpg", fotoPos: "50% 35%", fotoAlt: "Martin Worst",
    knop: "Stuur Martin een bericht"
  },

  werkgebied: {
    titel: "Amsterdam *en omgeving*",
    tekst: "Vanuit Diemen werken we in heel Amsterdam en de omgeving. Dit zijn plekken waar we tuinen aanlegden:",
    plaatsen: ["Amsterdam", "Osdorp", "Watergraafsmeer", "Broek in Waterland", "Abcoude"]
  },

  band: {
    foto: "img/landelijk.jpg", fotoPos: "50% 60%",
    titel: "Een tuin met *een verrassing?*",
    tekst: "Bespreek uw idee met Martin. Telefonisch altijd bereikbaar."
  },

  contact: {
    titel: "Bespreek uw *droomtuin*",
    tekst: "Heeft u een bijzonder idee, of is uw tuin dringend aan onderhoud toe? Vertel het kort, of stuur Martin direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Beplanting", "Tuinonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: stadstuin van 6 bij 12 meter, we willen meer groen en een plek in de zon"
  }
};
