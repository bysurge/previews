// Van Muijden Dakbedekking B.V. (Zeist). Bron: muijden.nl + Google (4,6 / 38). Foto's: eigen site + logo van Google-profiel. Zie content.md.
// Geen klanten-06/WhatsApp (het 06-nummer op hun site is van Ashlee, alleen voor vacatures): alleen bellen (030-nummer).
window.SITE = {
  naam: "Van Muijden Dakbedekking B.V.",
  kortNaam: "Van Muijden",
  plaats: "Zeist",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Zeist en de regio Utrecht",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 44,
  logoWit: "img/logo-wit.png",
  kleuren: { brand: "#1a1d24", accent: "#d3282e" },
  telefoon: "030 605 3522",
  telBel: "+31306053522",
  whatsapp: false,
  email: "info@muijden.nl",
  adres: ["Dijnselburgerlaan 1-20", "3705 LP Zeist"],
  google: { score: "4,6", aantal: "38" },
  ctaTekst: "Gratis dakopname",
  navCta: "Offerte",
  voetTekst: "Familiebedrijf sinds 1975, specialist in platte daken. Lekkage, onderhoud, renovatie en nieuwbouw, voor particulieren en bedrijven in de regio Utrecht.",

  hero: {
    regels: ["Al 50 jaar", "specialist in", "platte daken."],
    tekst: "Familiebedrijf uit Zeist, sinds 1975. Lekkage, onderhoud, renovatie en nieuwbouw, van het schuurtje in uw tuin tot een complete school.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "35% 55%",
    fotoAlt: "Dakdekkers van Van Muijden op een nieuw plat dak, met de bouwkraan op de achtergrond",
    donker: true,
    punten: ["10 jaar schriftelijke garantie", "Gratis dakopname", "VCA* en KOMO gecertificeerd"]
  },

  marquee: ["Daklekkage", "Dakonderhoud", "Dakinspectie", "Dakrenovatie", "Nieuwbouw", "Bitumen", "Groendaken", "Dakterrassen", "Valbeveiliging", "Dakisolatie"],

  spoed: {
    titel: "Lekkage? Meld het direct",
    tekst: "Bij calamiteiten kunt u altijd bij ons terecht. En is de klus aan het eind van de dag niet af, dan werken we gewoon door."
  },

  intro: {
    kicker: "Van Muijden Dakbedekking",
    tekst: "Van het schuurtje in uw achtertuin tot nieuwbouw voor scholen en bedrijven. Met Van Muijden heeft u altijd een veilig en waterdicht dak boven uw hoofd.",
    stats: [
      { getal: "1975", label: "Familiebedrijf, begonnen in Utrecht" },
      { getal: "3", tel: 3, label: "Generaties Van Muijden" },
      { getal: "4,6", label: "Gemiddeld uit 38 Google-reviews" },
      { getal: "1 van 14", label: "Toplevel dak-specialisten in Nederland" }
    ]
  },

  keurmerkenTitel: "Erkend en gecertificeerd",
  keurmerken: [
    { naam: "VCA*", sub: "Alle medewerkers", logo: "img/merk-vca.png" },
    { naam: "KOMO", sub: "BRL 4702", logo: "img/merk-komo.png" },
    { naam: "Vebidak", sub: "Branchevereniging", logo: "img/merk-vebidak.png" },
    { naam: "Erkend leerbedrijf", sub: "SBB", logo: "img/merk-sbb.png" }
  ],

  diensten: {
    titel: "Alles voor een waterdicht plat dak",
    tekst: "Voor particulieren én bedrijven, klein en groot. Vooraf krijgt u altijd een heldere, scherpe offerte.",
    items: [
      { naam: "Daklekkage", soort: "Lekkage melden", foto: "img/dakdekker.jpg", pos: "55% 50%", tekst: "Een lekkage komt altijd onverwacht. Opsporen en verhelpen is voor ons dagelijks werk: snel, en zo dat u weer jaren vooruit kunt.",
        punten: ["Snel ter plaatse", "Oorzaak gevonden en opgelost", "Ook 's avonds bij calamiteiten"] },
      { naam: "Dakonderhoud", soort: "Dakonderhoud", foto: "img/onderhoud.jpg", pos: "50% 60%", tekst: "Met een onderhoudscontract controleren en reinigen we uw dak, afvoeren en goten. Kleine reparaties doen we meteen.",
        punten: ["Voorkomt verstopping en vorstschade", "Langere levensduur van uw dak", "Grotere reparaties eerst een offerte"] },
      { naam: "Dakinspectie", soort: "Gratis dakopname", foto: "img/inspectie.jpg", pos: "50% 50%", tekst: "Een duidelijk beeld van uw dak: u krijgt een inspectierapport over dakbedekking, ondergrond, afvoeren, doorvoeren en randafwerking.",
        punten: ["Rapport met alle details", "Onderhoudsplan op maat", "Eerlijk en vakkundig advies"] },
      { naam: "Dakrenovatie", soort: "Dakrenovatie", foto: "img/renovatie-schiphol.jpg", pos: "50% 60%", tekst: "Is uw dak verouderd of lekt het, dan overlagen of vervangen we de dakbedekking, waar nodig met extra isolatie.",
        punten: ["Overlagen of vervangen", "Aanvullend isoleren", "Vooraf een duidelijke prijs"] },
      { naam: "Nieuwbouw", soort: "Nieuwbouw", foto: "img/nieuwbouw.jpg", pos: "50% 50%", tekst: "Dé dakspecialist voor uw woning, nieuwbouwproject of kantoor. Bitumen of groendak, met isolatie en ruimte voor zonnepanelen.",
        punten: ["Particulier en zakelijk", "Bitumen of sedum", "Advies over isolatie"] },
      { naam: "Dakterrassen en valbeveiliging", soort: "Dakterras / valbeveiliging", foto: "img/dakterras.jpg", pos: "50% 60%", tekst: "We leggen dakterrassen en groendaken aan en zorgen voor valbeveiliging, zodat u veilig op uw dak kunt.",
        punten: ["Dakterrassen", "Groendaken met sedum", "Valbeveiliging"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Van groendak tot Schiphol",
    tekst: "Een greep uit ons werk: groendaken, dakterrassen, valbeveiliging, nieuwbouw en renovatie.",
    items: [
      { foto: "img/groendak.jpg", label: "Groendak", sub: "Sedum op een plat dak", pos: "50% 50%" },
      { foto: "img/renovatie-schiphol.jpg", label: "Renovatie", sub: "Plat dak met uitzicht op Schiphol", pos: "50% 40%" },
      { foto: "img/dakterras-2.jpg", label: "Dakterras", sub: "Tegels in een strak patroon", pos: "50% 50%" },
      { foto: "img/valbeveiliging.jpg", label: "Valbeveiliging", sub: "Veilig werken op hoogte", pos: "50% 50%" },
      { foto: "img/nieuwbouw-2.jpg", label: "Nieuwbouw", sub: "Grindafwerking en looppad", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "U weet precies waar u aan toe bent",
    tekst: "Altijd eerst een dakopname en een offerte. Zo komt u niet voor verrassingen te staan.",
    foto: "img/ladder.jpg", fotoPos: "60% 40%", fotoAlt: "Dakdekker van Van Muijden met een ladder bij een woning",
    stappen: [
      { naam: "Gratis dakopname", tekst: "We beoordelen de staat van uw dakbedekking, gratis en vrijblijvend." },
      { naam: "Advies en rapportage", tekst: "U krijgt duidelijk advies over wat er nodig is, en wat niet." },
      { naam: "Heldere offerte", tekst: "Een scherpe offerte conform bestek, met heldere afspraken." },
      { naam: "Schoon en veilig uitgevoerd", tekst: "Ervaren dakdekkers, één vast aanspreekpunt en 10 jaar schriftelijke garantie." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar schriftelijke garantie",
    tekst: "U krijgt wat we beloven: KOMO-gecertificeerde producten, aangebracht volgens de vakrichtlijn voor gesloten dakbedekkingen. Met 10 jaar garantie, zwart op wit.",
    lijst: {
      titel: "Van Muijden staat garant voor",
      punten: [
        "Eerlijk en vakkundig advies",
        "Ervaren en allround dakdekkers",
        "Efficiënt en veilig werken",
        "De nieuwste technieken en producten",
        "Scherpe tarieven en heldere afspraken"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ik heb Van Muijden Dakbedekking ingeschakeld voor de renovatie van zowel ons woonhuis als ons bedrijfspand. Het resultaat is echt top … We hebben in het verleden eens een vervelende lekkage gehad en ze kwamen toen zelfs 's avonds laat nog langs om het op te lossen.", naam: "M." },
      { tekst: "Snelle reactie na het invullen van het formulier op de website op maandag. De dakdekker is op woensdag langsgekomen. Na inspectie had hij de lekkage snel gevonden én meteen opgelost.", naam: "Joop ten D." },
      { tekst: "Vanaf het eerste contact was de communicatie duidelijk en professioneel. Het werk aan het dak werd vakkundig, snel en tegen een redelijke prijs uitgevoerd. Het team liet alles netjes en schoon achter.", naam: "Mihail M." },
      { tekst: "Ze konden snel langskomen en dachten aan de telefoon al mee. Er hoefde niet lang gezocht te worden naar de oorzaak en het probleem was snel verholpen. Deze vriendelijke mannen leveren vakwerk.", naam: "Tijme V." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Drie generaties, één belofte",
    rol: "Familiebedrijf sinds 1975, begonnen in Utrecht",
    tekst: [
      "Wat begon als een klein familiebedrijf in Utrecht, is in ruim vijftig jaar een vertrouwde naam in de regio geworden. Van vader op zoon, en inmiddels met dochters en schoonzoon.",
      "Steeds met dezelfde kernwaarden: kwaliteit leveren, afspraken nakomen en werken alsof het voor onszelf is. Ervaring en jong talent versterken elkaar, en als erkend leerbedrijf leiden we zelf nieuwe dakdekkers op."
    ],
    foto: "img/team.jpg", fotoPos: "50% 40%", fotoAlt: "Twee dakdekkers van Van Muijden dragen rollen dakbedekking in de werkplaats",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Zeist en de regio Utrecht",
    tekst: "Vanuit Zeist werken we in en rond de provincie Utrecht. Woont u in de regio maar staat uw plaats er niet bij? Neem gerust contact op.",
    plaatsen: ["Zeist", "Utrecht", "Nieuwegein", "De Bilt", "Bilthoven", "Bunnik", "Doorn", "Soest"]
  },

  band: {
    foto: "img/utrecht.jpg", fotoPos: "50% 60%",
    titel: "Hoe staat uw dak ervoor?",
    tekst: "Vraag een gratis en vrijblijvende dakopname aan, met duidelijk advies en rapportage."
  },

  contact: {
    titel: "Vraag een offerte of dakopname aan",
    tekst: "Vul het formulier in, bel ons of mail naar info@muijden.nl. Bij een lekkage helpen we u zo snel mogelijk.",
    formTitel: "Aanvraag",
    onderwerpen: ["Lekkage melden", "Gratis dakopname", "Dakonderhoud", "Dakrenovatie", "Nieuwbouw", "Dakterras / valbeveiliging"],
    voorbeeld: "Bijvoorbeeld: lekkage bij de lichtkoepel van ons platte dak, ongeveer 40 m²",
    belofte: "We nemen snel contact met u op."
  }
};
