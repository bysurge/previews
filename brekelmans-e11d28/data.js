// Brekelmans Dakdekkers ('s-Hertogenbosch). Bron: brekelmansdakdekkers.nl (alle pagina's) + Google (5,0 uit 10), opgehaald 23-11-2026. Zie content.md.
// Hun site heeft alleen stockfoto's en geen logo: alle foto's komen van hun Google-profiel; logo = naam in tekst.
// De reviews op hun eigen site (Familie de Vries, Peter Jansen, ...) lijken voorbeeldteksten: niet gebruikt, alleen echte Google-reviews.
window.SITE = {
  naam: "Brekelmans Dakdekkers",
  kortNaam: "Brekelmans",
  plaats: "'s-Hertogenbosch",
  vak: "Dakdekker",
  logo: "img/leeg.svg", logoVorm: "icoon",
  kleuren: { brand: "#171c22", accent: "#c98b4a" },
  telefoon: "06 36 29 77 48",
  telefoonIntl: "31636297748",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of een foto van uw dak",
  email: "info@brekelmansdakdekkers.nl",
  google: { score: "5,0", aantal: "10" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Familiebedrijf in dakwerk uit 's-Hertogenbosch. Pannendaken, platte daken, lekkages en dakinspectie, voor particulieren, bedrijven en VvE's.",

  hero: {
    regels: ["Vakmanschap", "op grote", "hoogte."],
    tekst: "Familiebedrijf uit 's-Hertogenbosch, specialist in pannendaken en platte daken. Van een snelle lekkage-reparatie tot een compleet nieuw dak.",
    foto: "img/hero.jpg", fotoPos: "50% 55%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 20%",
    fotoAlt: "Nieuw pannendak met glanzend zwarte pannen en een dakraam, gelegd door Brekelmans Dakdekkers",
    donker: true,
    punten: ["Familiebedrijf sinds 2018", "Offerte gratis en vrijblijvend", "Particulier, bedrijf en VvE"]
  },

  marquee: ["Pannendaken", "Platte daken", "Lekkages", "Dakinspectie", "Dakonderhoud", "Renovatie", "Reparatie", "Dakkapellen", "Lichtkoepels"],

  spoed: {
    titel: "Lekkage? Wij zijn er snel bij",
    tekst: "We sporen de oorzaak op en verhelpen de lekkage vakkundig, zodat verdere schade wordt voorkomen."
  },

  intro: {
    kicker: "Over Brekelmans",
    tekst: "Een echt familiebedrijf, waar het vak van opa op vader op zoon is doorgegeven. Eerlijk advies, een persoonlijke aanpak en een dak waar u jaren veilig en droog onder woont.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "10", tel: 10, label: "Reviews op Google" },
      { getal: "2018", label: "Actief in 's-Hertogenbosch" },
      { getal: "Gratis", label: "Offerte, vrijblijvend" }
    ]
  },

  diensten: {
    titel: "Plat of schuin, wij staan voor u klaar",
    tekst: "Voor particulieren, bedrijven en VvE's. Met de beste materialen, voor een duurzaam en betrouwbaar resultaat.",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannen.jpg", pos: "50% 50%", tekst: "Van traditioneel tot modern: we leggen, renoveren en repareren pannendaken, voor een dak dat jarenlang meegaat.",
        punten: ["Nieuw leggen", "Renoveren", "Repareren en onderhouden"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/lichtkoepels.jpg", pos: "50% 60%", tekst: "Aanleg, onderhoud en reparatie van platte daken. Waterdicht en duurzaam, ook rond lichtkoepels en dakkapellen.",
        punten: ["Aanleggen en renoveren", "Onderhoud", "Lichtkoepels en aansluitingen"] },
      { naam: "Lekkage verhelpen", soort: "Lekkage", foto: "img/schoorsteen.jpg", pos: "50% 45%", tekst: "Een lekkage vraagt snelle actie. We sporen de oorzaak op en lossen het vakkundig op, zodat verdere schade wordt voorkomen.",
        punten: ["Snel ter plaatse", "Oorzaak opgespoord", "Vakkundig hersteld"] },
      { naam: "Dakinspectie en onderhoud", soort: "Dakinspectie", foto: "img/nok.jpg", pos: "50% 40%", tekst: "Met een regelmatige inspectie zien we problemen vroeg. U krijgt advies om uw dak in topconditie te houden.",
        punten: ["Grondige inspectie", "Eerlijk advies", "Langere levensduur van uw dak"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Projecten met trots uitgevoerd",
    tekst: "Van traditionele pannendaken tot moderne platte daken. Een greep uit ons recente werk.",
    items: [
      { foto: "img/dakkapel.jpg", label: "Pannendak met dakkapel", sub: "Glanzend zwarte pannen, strak afgewerkt", pos: "50% 40%" },
      { foto: "img/plat-zonnepanelen.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking tussen de zonnepanelen", pos: "50% 50%" },
      { foto: "img/aanbouw.jpg", label: "Pannendak op een aanbouw", sub: "Nieuw dak boven de pui", pos: "50% 40%" },
      { foto: "img/rode-pannen.jpg", label: "Rode pannen", sub: "Compleet nieuw pannendak", pos: "50% 50%" },
      { foto: "img/plat-isolatie.jpg", label: "Plat dak met isolatie", sub: "In uitvoering", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Van eerste inspectie tot oplevering",
    tekst: "Duidelijke afspraken en open communicatie, het hele traject door.",
    foto: "img/plat-isolatie.jpg", fotoPos: "50% 55%", fotoAlt: "Plat dak in uitvoering, met isolatieplaten klaar om te verwerken",
    stappen: [
      { naam: "Kennismaking", tekst: "U belt, appt of mailt. We plannen zo snel mogelijk een afspraak." },
      { naam: "Inspectie en offerte", tekst: "We komen langs, bekijken de situatie en maken een offerte. Gratis en vrijblijvend." },
      { naam: "Uitvoering", tekst: "Met de beste materialen en technieken. U wordt goed op de hoogte gehouden." },
      { naam: "Oplevering", tekst: "We leveren netjes op en lopen het resultaat met u na. Uw tevredenheid staat voorop." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Snelle reactie. De daad bij het woord. Mijn lekkage meteen opgelost inclusief kleine andere noodzakelijkheden. Prettige mannen met een ondernemerszin waar je een voorbeeld aan kunt nemen. … En… op zondag. Petje af.", naam: "Céline G." },
      { tekst: "Echt een super resultaat behaald door de heren van Brekelmans, meerdere dakdekkers op de vloer gehad. Maar toch de keuze gevallen op Brekelmans, 0 spijt van, super jongens, bedankt.", naam: "Leroy v. A." },
      { tekst: "Noah kwam voor de offerte en maakte duidelijke afspraken. Ik ben heel erg blij, lekkage snel verholpen, echt een aanrader. Bedankt Noah en team!", naam: "Chris M." },
      { tekst: "Fijne gasten, goed werk geleverd. Aanrader!", naam: "Olga E." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Familiebedrijf met traditie",
    rol: "Van opa op vader op zoon",
    tekst: [
      "Brekelmans Dakdekkers is een echt familiebedrijf, waar het vakmanschap van generatie op generatie is doorgegeven. Die ervaring zetten we in voor elk dak, ook de complexe.",
      "We luisteren goed naar uw wensen, geven eerlijk advies en houden u het hele traject op de hoogte. Van de eerste inspectie tot de oplevering."
    ],
    foto: "img/zwart-dak.jpg", fotoPos: "50% 45%", fotoAlt: "Woning met een nieuw zwart pannendak",
    knop: "Stuur ons een bericht"
  },

  faq: [
    { v: "Kost het iets als jullie een offerte maken?", a: "Nee. Een offerte is geheel vrijblijvend en kosteloos. We komen graag langs om de situatie te bekijken, zodat u precies weet waar u aan toe bent." },
    { v: "Hoe snel kunnen jullie aan de slag?", a: "Dat hangt af van de omvang van de klus en onze planning. Neem contact op, dan plannen we zo snel mogelijk een afspraak. Bij een lekkage zijn we er snel bij." },
    { v: "Hoelang bestaan jullie al?", a: "Brekelmans Dakdekkers is sinds 2018 actief en is overgegaan van opa op vader op zoon. We zijn trots op de vele tevreden klanten in 's-Hertogenbosch en omgeving." },
    { v: "Werken jullie ook voor bedrijven en VvE's?", a: "Ja. We werken voor particulieren, bedrijven en VvE's." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 40%",
    titel: "Benieuwd wat we voor uw dak kunnen doen?",
    tekst: "Vraag vandaag nog een vrijblijvende offerte aan. We denken graag met u mee."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vertel kort wat er aan de hand is. Bel, app of vul het formulier in, dan nemen we snel contact met u op.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak", "Lekkage", "Dakinspectie", "Anders"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen bij de dakkapel, of ons platte dak is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
