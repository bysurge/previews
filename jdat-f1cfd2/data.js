// J.Dat dakwerken (Eindhoven). Geen werkende eigen site (Vercel 404): alles van Google (5,0 uit 9). Foto's: eigen Google-profiel. Zie content.md.
// Geen logo bekend: naam in tekst. Geen voornaam op eigen site (alleen "Joris" in reviews), dus geen naam in de eigen teksten.
window.SITE = {
  naam: "J.Dat dakwerken",
  kortNaam: "J.Dat dakwerken",
  plaats: "Eindhoven",
  vak: "Dakdekker",
  logo: "img/leeg.svg", logoVorm: "icoon",
  kleuren: { brand: "#1b1f24", accent: "#c0773a" },
  telefoon: "06 24 89 97 09",
  telefoonIntl: "31624899709",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of een foto van uw dak",
  google: { score: "5,0", aantal: "9" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakdekker in Eindhoven. Pannendaken, platte daken, lood en goten: repareren, vernieuwen en onderhouden.",

  hero: {
    regels: ["Een dak", "waar u weer", "op kunt bouwen."],
    tekst: "Dakdekker in Eindhoven. Van een lekkende schoorsteen of een volle kilgoot tot een compleet nieuw dak: vakkundig, netjes en in goed overleg.",
    foto: "img/hero.jpg", fotoPos: "50% 45%",
    fotoPosMobiel: "62% 50%",
    fotoAlt: "Strak gelegd zwart pannendak tegen een avondlucht",
    donker: true,
    punten: ["5,0 op Google", "Pannen en platte daken", "Eerlijke, duidelijke prijs"]
  },

  marquee: ["Pannendaken", "Platte daken", "Dakreparatie", "Lekkages", "Loodwerk", "Schoorstenen", "Kilgoten", "Dakgoten", "Nieuw dak"],

  intro: {
    kicker: "Over J.Dat dakwerken",
    tekst: "Klanten roemen vooral de aanpak: vooraf goed overleggen, duidelijk uitleggen wat er gaat gebeuren en daarna netjes en snel afwerken. Voor een eerlijke prijs.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "9", tel: 9, label: "Reviews op Google" },
      { getal: "Plat", label: "en schuin dak" },
      { getal: "Eindhoven", label: "en omgeving" }
    ]
  },

  diensten: {
    titel: "Alles voor uw dak",
    tekst: "Plat of schuin, klein of groot. We kijken eerst goed wat er nodig is en leggen u precies uit wat we gaan doen.",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannen-huis.jpg", pos: "50% 45%", tekst: "Een nieuw pannendak, losse pannen weer vastzetten of een dak dat aan vernieuwing toe is. Strak gelegd en netjes afgewerkt.",
        punten: ["Nieuw dak leggen", "Pannen vastzetten", "Herstel en onderhoud"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-uitvoering.jpg", pos: "50% 50%", tekst: "Nieuwe dakbedekking op uw aanbouw, garage of woning, of herstel van een plat dak dat lekt.",
        punten: ["Nieuwe dakbedekking", "Aanbouw, garage en woning", "Reparatie"] },
      { naam: "Lood en lekkages", soort: "Lekkage", foto: "img/schoorsteen.jpg", pos: "50% 55%", tekst: "Lekt het bij de schoorsteen of een aansluiting? We zetten het opnieuw netjes in het lood, zodat uw zolder weer droog blijft.",
        punten: ["Schoorsteen in het lood", "Lekkage opsporen", "Strak afgewerkt"] },
      { naam: "Goten en kilgoten", soort: "Goten", foto: "img/kilgoot.jpg", pos: "50% 35%", tekst: "Een verstopte of lekkende kilgoot zorgt voor ellende. We reinigen en repareren uw goten, zodat het water weer weg kan.",
        punten: ["Kilgoot reinigen", "Dakgoot repareren", "Meteen het dak nagekeken"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Een greep uit ons werk",
    tekst: "Pannendaken en platte daken in Eindhoven en omgeving.",
    items: [
      { foto: "img/nieuwbouw.jpg", label: "Pannendak", sub: "Nieuwbouwwoning met zonnepanelen", pos: "50% 45%" },
      { foto: "img/plat-1.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking op de aanbouw", pos: "50% 50%" },
      { foto: "img/hero-m.jpg", label: "Plat dak", sub: "Strak tot in de dakrand", pos: "50% 50%" },
      { foto: "img/plat-2.jpg", label: "Plat dak", sub: "Aanbouw achter de woning", pos: "50% 55%" },
      { foto: "img/panlatten.jpg", label: "In uitvoering", sub: "Folie en panlatten, klaar voor de pannen", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Geen verrassingen: u weet vooraf wat er gebeurt en wat het kost.",
    foto: "img/plat-uitvoering.jpg", fotoPos: "50% 50%", fotoAlt: "Plat dak in uitvoering met rollen dakbedekking",
    stappen: [
      { naam: "Eerst overleggen", tekst: "We bekijken samen wat er aan de hand is en wat er moet gebeuren." },
      { naam: "Duidelijke prijs", tekst: "U hoort vooraf wat het gaat kosten. Transparant, zonder verrassingen." },
      { naam: "Netjes uitgevoerd", tekst: "Snel en strak afgewerkt, en we laten alles weer opgeruimd achter." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Het is prettig afspraken maken met Joris: hij legt duidelijk uit hoe de werkzaamheden gaan verlopen en wat ons eventueel nog te wachten staat. Alles gebeurt in goed overleg.", naam: "Marcel d. B." },
      { tekst: "Ze hebben mijn schoorsteen netjes in het lood gezet en daardoor de lekkage op mijn zolder goed verholpen. Alles ziet er strak uit en ze werken netjes, Super tevreden!", naam: "Selina N." },
      { tekst: "Ze zijn bekwaam en vakkundig. … Ondanks het zo warm was toen, bleven ze gewoon doorwerken. Goede kwaliteit en goede en eerlijke prijs.", naam: "Sevim U." },
      { tekst: "Dakdekker met duidelijk veel ervaring en passie voor het vak. Hij was transparant over de prijs en heeft daarnaast goed werk geleverd.", naam: "Thijs K." }
    ]
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 40%",
    titel: "Benieuwd wat we voor uw dak kunnen doen?",
    tekst: "Stuur een appje met een foto van uw dak, dan kijken we graag met u mee."
  },

  werkgebied: {
    titel: "Eindhoven en omgeving",
    tekst: "J.Dat dakwerken zit in Eindhoven en werkt in de stad en de omliggende plaatsen."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vertel kort wat er aan de hand is. Bel, app of vul het formulier in, dan nemen we snel contact met u op.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak", "Lekkage / lood", "Goten", "Anders"],
    voorbeeld: "Bijvoorbeeld: het lekt bij de schoorsteen, of de kilgoot zit vol bladeren",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
