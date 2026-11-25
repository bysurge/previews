// Nijvo Pannendekkersbedrijf (Enschede). Geen echte website (alleen "binnenkort"-pagina met logo, 06, adres, "Ook voor stormschades!").
// Bron: nijvo.nl (placeholder) + Google (4,8 / 33, reviews). Alle foto's van hun Google-profiel. Logo van de placeholder, wit weggehaald.
window.SITE = {
  naam: "Nijvo Pannendekkersbedrijf",
  kortNaam: "Nijvo",
  plaats: "Enschede",
  vak: "Pannendekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 48,
  kleuren: { brand: "#0f2238", accent: "#2f7fc0" },
  telefoon: "06 51 60 70 15",
  telefoonIntl: "31651607015",
  email: "info@nijvo.nl",
  adres: ["Kuipersdijk 173", "7512 CE Enschede"],
  google: { score: "4,8", aantal: "33" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  waTekst: "App ons",
  voetTekst: "Pannendekkersbedrijf uit Enschede. Nieuwe pannendaken, dakrenovatie en stormschade.",

  hero: {
    regels: ["Een nieuw dak,", "strak gepland."],
    tekst: "Nijvo is pannendekkersbedrijf in Enschede. Nieuwe dakpannen, een compleet nieuw dak of herstel na stormschade: vakwerk, met duidelijke afspraken.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 50%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Woning met een nieuw pannendak, van bovenaf gezien",
    donker: true,
    punten: ["4,8 op Google", "Ook voor stormschade", "Eigen kraanwagen"]
  },

  marquee: ["Pannendaken", "Nieuwe dakpannen", "Dakrenovatie", "Stormschade", "Complete daken", "Rijtjeshuizen", "Vrijstaande woningen"],

  spoed: {
    titel: "Stormschade?",
    tekst: "Ook voor stormschades kunt u bij ons terecht. Bel of app, en stuur gerust een foto mee."
  },

  intro: {
    kicker: "Nijvo",
    tekst: "Pannendaken zijn ons vak. Van een enkele woning tot een heel blok huizen: we werken nauwkeurig, denken mee en laten alles netjes achter.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "33", label: "Google-reviews" },
      { getal: "Eigen", label: "Kraanwagen" },
      { getal: "Enschede", label: "Kuipersdijk 173" }
    ]
  },

  diensten: {
    titel: "Wat we doen",
    tekst: "Bel of app voor advies of een vrijblijvende offerte.",
    items: [
      { naam: "Nieuwe dakpannen", foto: "img/pannen.jpg", pos: "50% 50%",
        tekst: "Uw pannen vervangen door nieuwe, strak gelegd en netjes afgewerkt rondom het dak.",
        punten: ["Voor rijtjeshuis en vrijstaand", "Ook voor een heel blok woningen", "Netjes opgeleverd"] },
      { naam: "Compleet nieuw dak", foto: "img/renovatie.jpg", pos: "50% 50%",
        tekst: "Is meer nodig dan alleen pannen? Dan vernieuwen we het complete dak, zodat het weer veilig en waterdicht is.",
        punten: ["Dakconstructie hersteld", "Pannen, latten en afwerking", "Duidelijke uitleg bij oplevering"] },
      { naam: "Stormschade", foto: "img/straat-kraan.jpg", pos: "50% 50%",
        tekst: "Losgewaaide of kapotte pannen na een storm? We komen kijken en herstellen de schade.",
        punten: ["Pannen terugleggen of vervangen", "Met eigen kraanwagen", "Stuur gerust eerst een foto"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk", navNaam: "Projecten",
    titel: "Recent werk in Twente",
    items: [
      { foto: "img/woning.jpg", label: "Vrijstaande woning", sub: "Nieuw pannendak", pos: "50% 55%" },
      { foto: "img/hoekhuis.jpg", label: "Hoekwoning", sub: "Nieuwe dakpannen", pos: "50% 40%" },
      { foto: "img/rijtjeshuis.jpg", label: "Rijwoning", sub: "Pannen vervangen", pos: "50% 30%" },
      { foto: "img/steiger.jpg", label: "Renovatie", sub: "Dak in uitvoering", pos: "50% 50%" },
      { foto: "img/bussen.jpg", label: "Onderweg", sub: "Met eigen bussen", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo verloopt uw klus",
    tekst: "Alles strak gepland en duidelijk gecommuniceerd, zodat u niet voor verrassingen komt te staan.",
    foto: "img/kraanwagen.jpg", fotoPos: "50% 50%", fotoAlt: "Kraanwagen van Nijvo",
    stappen: [
      { naam: "Kennismaken", tekst: "Bel of app. We komen kijken en bespreken wat uw dak nodig heeft." },
      { naam: "Duidelijke offerte", tekst: "U weet vooraf waar u aan toe bent." },
      { naam: "Goed voorbereid", tekst: "Container en dakpannen worden vooraf geleverd, zodat we op de afgesproken dag kunnen beginnen." },
      { naam: "Netjes opgeleverd", tekst: "We leggen uit hoe alles is afgewerkt en laten alles netjes achter." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Eindelijk weer eens een bedrijf dat je kunt vertrouwen, je geen poot uitdraait, met je mee denkt en vakwerk levert!", naam: "Theo v. S." },
      { tekst: "Wat een vakmannen! We zijn super tevreden. De wijze van communicatie en werkwijze kan niet beter. Zo zou elk bedrijf moeten werken.", naam: "Patrick K." },
      { tekst: "De communicatie was duidelijk, ze waren altijd op tijd en het dak ziet er prachtig uit. Nog belangrijker, het is weer helemaal veilig.", naam: "Artemis S." }
    ]
  },

  band: {
    foto: "img/straat-kraan.jpg", fotoPos: "50% 45%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Bel of app voor een vrijblijvende offerte."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel, app of mail ons, of laat hieronder een bericht achter.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Nieuwe dakpannen", "Compleet nieuw dak", "Stormschade", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: onze dakpannen zijn verweerd en er liggen er een paar los",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
