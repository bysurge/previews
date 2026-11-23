// Kwint Dak (Echteld). Bron: kwintdak.nl + Google (4,9 / 34). Foto's: eigen site (geen Google-foto's). Zie content.md.
window.SITE = {
  naam: "Kwint Dak",
  plaats: "Echteld",
  vak: "Dakdekker",
  logo: "img/logo.svg",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.svg",
  logoHoogte: 44,
  kleuren: { brand: "#15202c", accent: "#8db8dc" },
  telefoon: "0344 620 857",
  telBel: "+31344620857",
  telefoon2: "06 2874 0861",
  telefoonIntl: "31628740861", // 06 van hun contactpagina (Marco: WhatsApp gaat voor)
  email: "info@kwintdak.nl",
  adres: ["Spoorstraat 9", "4054 MA Echteld"],
  kvk: "86430971",
  google: { score: "4,9", aantal: "34" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakdekkersbedrijf uit Echteld. Bitumen, kunststof, shingles en zinkwerk, voor particulieren en bedrijven.",

  hero: {
    regels: ["Een dak waar", "u jaren op", "kunt bouwen."],
    tekst: "Bitumen, EPDM, shingles en zinkwerk. Van een kleine reparatie tot een compleet nieuw dak, voor particulieren en bedrijven.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 40%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 40%",
    fotoAlt: "Nieuw bitumen dak in aanbouw, met de dakbanen klaar om te verwerken",
    donker: true,
    punten: ["Vrijblijvende offerte", "Reactie binnen 24 uur", "KOMO-gecertificeerde materialen"]
  },

  marquee: ["Bitumen", "EPDM", "PVC", "Shingles", "Zinkwerk", "Dakgoten", "Sedumdaken", "Isolatie", "Dakreparatie", "Dakonderhoud", "Nieuwbouw"],

  spoed: {
    titel: "Lekkage of schade aan uw dak?",
    tekst: "Snel handelen voorkomt grotere schade. Bel ons even, dan kijken we met u mee."
  },

  intro: {
    kicker: "Waarom Kwint Dak",
    tekst: "Jarenlange ervaring en een persoonlijke aanpak. We houden u het hele project op de hoogte, geven advies op maat en werken met een duidelijke planning.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "34", tel: 34, label: "Reviews op Google" },
      { getal: "24 uur", label: "Reactie op uw aanvraag" },
      { getal: "KOMO", label: "Gecertificeerde dakbedekking" }
    ]
  },

  diensten: {
    titel: "Elk dak, elke dakbedekking",
    tekst: "Platte en licht hellende daken zijn ons vak. Groot of klein, woonhuis of bedrijfspand.",
    items: [
      { naam: "Bitumen", soort: "Bitumen", foto: "img/bitumen.jpg", pos: "50% 55%", tekst: "Dé oplossing voor platte daken, garages, dakkapellen en uitbouwen. We gebruiken alleen toplagen van Kelders, met KOMO-certificaat.",
        punten: ["Gaat gemiddeld 25 jaar mee", "100% recyclebaar", "Ook als basis voor een groendak"] },
      { naam: "Kunststof: EPDM en PVC", soort: "EPDM / PVC", foto: "img/epdm.jpg", pos: "50% 50%", tekst: "Licht, flexibel en aangebracht zonder open vuur. Ideaal bij renovatie, en goed te combineren met isolatie.",
        punten: ["EPDM gaat 30 tot 50 jaar mee", "Naadloos en waterdicht", "Brandveilig aangebracht"] },
      { naam: "Zinkwerk", soort: "Zinkwerk", foto: "img/zinkgoot.jpg", pos: "50% 50%", tekst: "Dakgoten, hemelwaterafvoer, dakranden en kilgoten. Ook zinken dakbedekking en gevelbekleding op maat.",
        punten: ["Zink gaat 50 tot 100 jaar mee", "Weinig onderhoud", "Strak en tijdloos"] },
      { naam: "Shingles", soort: "Shingles", foto: "img/shingles.jpg", pos: "50% 40%", tekst: "Voor schuine daken, in veel kleuren en vormen. Licht van gewicht en geluiddempend.",
        punten: ["Advies over kleur en patroon", "Licht voor de dakconstructie", "Goede prijs-kwaliteit"] },
      { naam: "Reparatie en onderhoud", soort: "Reparatie / onderhoud", foto: "img/onderhoud.jpg", pos: "50% 50%", tekst: "Eerst een grondige inspectie, dan helder advies. We repareren snel en controleren het resultaat samen met u.",
        punten: ["Lekkages en scheuren", "Goten en dak schoon", "Onderhoudscontract mogelijk"] },
      { naam: "Duurzame daken", soort: "Duurzaam dak", foto: "img/sedum.jpg", pos: "50% 50%", tekst: "Sedumdaken, witte dakbedekking en goede isolatie. Een witte toplaag scheelt zo'n vijf graden binnen.",
        punten: ["Sedum- en groendaken", "Beter rendement zonnepanelen", "Lagere energierekening"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Een greep uit ons werk",
    tekst: "Van woonhuis tot bedrijfspand en nieuwbouw: zo laten we een dak achter.",
    items: [
      { foto: "img/renovatie.jpg", label: "Dakrenovatie", sub: "Groot plat dak, bitumen", pos: "50% 55%" },
      { foto: "img/isolatie.jpg", label: "Isolatie", sub: "Nieuwe isolatielaag vóór de dakbedekking", pos: "50% 55%" },
      { foto: "img/licht-dak.jpg", label: "Lichte toplaag", sub: "Strak afgewerkt tot in de randen", pos: "50% 50%" },
      { foto: "img/nieuwbouw.jpg", label: "Nieuwbouw", sub: "Plat dak met grind", pos: "50% 60%" },
      { foto: "img/bitumen-pannen.jpg", label: "Bitumen", sub: "Nette overlappen bij de aansluiting", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Duidelijk, van inspectie tot oplevering",
    tekst: "U weet altijd waar u aan toe bent. Geen verrassingen achteraf.",
    foto: "img/afvoer.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuw bitumen dak met dakafvoer",
    stappen: [
      { naam: "Inspectie", tekst: "We bekijken uw dak grondig en zoeken de oorzaak van het probleem." },
      { naam: "Advies", tekst: "U krijgt een helder advies over wat er nodig is, afgestemd op uw wensen en budget." },
      { naam: "Vrijblijvende offerte", tekst: "Een duidelijke offerte, zodat u precies weet wat u kunt verwachten." },
      { naam: "Uitvoering en controle", tekst: "We werken snel en netjes, en controleren het resultaat samen met u." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Op 3 plaatsen langs schuur en huis flinke lekkage in de dakgoot. Kwint-dak gebeld en kwamen spoedig voor inspectie en reparatie. … Een grote klus en prima werk afgeleverd! Zijn zeer vriendelijk, vertrouwd en werken netjes.", naam: "Hetty van L." },
      { tekst: "Ik heb hen telefonisch benaderd en ontving snel een mooie, maar vooral realistische offerte. … Ze kwamen netjes op tijd en hebben het dak van de uitbouw vakkundig en netjes gemaakt.", naam: "Michelle S." },
      { tekst: "Kwint Dak heeft bij mij een dakreparatie uitgevoerd en ik ben super tevreden. Ze reageerden snel, gaven duidelijk uitleg en hebben het probleem netjes opgelost. … zeker een aanrader!", naam: "Gert van Z." },
      { tekst: "De dakdekkers werkten netjes, dachten mee en lieten alles schoon en opgeruimd achter. Het eindresultaat ziet er strak en degelijk uit, precies zoals afgesproken.", naam: "Gerben L.", sterren: 4 }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Kwint Dak",
    rol: "Dakdekkersbedrijf uit Echteld",
    tekst: [
      "Wij zijn een ervaren dakdekkersbedrijf voor particulieren en bedrijven. Lekkage, een nieuw dak of periodiek onderhoud: we werken met aandacht voor detail en met hoogwaardige materialen.",
      "Ook aannemers en projectontwikkelaars weten ons te vinden voor daken bij nieuwbouw. Kleine reparatie of grote renovatie: u krijgt werk van hoge kwaliteit, afgestemd op uw wensen en budget."
    ],
    foto: "img/zinkgoot.jpg", fotoPos: "40% 60%", fotoAlt: "Bus van Kwint Dak bij een woning",
    knop: "Neem contact op"
  },

  band: {
    foto: "img/hero-mobiel.jpg", fotoPos: "50% 35%",
    titel: "Tijd voor een nieuw dak?",
    tekst: "Vraag een vrijblijvende offerte aan. We reageren binnen 24 uur."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vul het formulier in, dan nemen we binnen 24 uur contact met u op. Liever nog sneller geholpen? Bel ons even.",
    formTitel: "Aanvraag",
    onderwerpen: ["Bitumen", "EPDM / PVC", "Zinkwerk", "Shingles", "Reparatie / onderhoud", "Duurzaam dak", "Nieuwbouw"],
    voorbeeld: "Bijvoorbeeld: de dakbedekking van onze garage is aan vervanging toe, ongeveer 20 m²",
    belofte: "We nemen binnen 24 uur contact met u op."
  }
};
