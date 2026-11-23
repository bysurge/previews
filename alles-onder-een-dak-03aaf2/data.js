// Alles Onder Eén Dak V.O.F. (Eindhoven). Bron: allesondereen-dak.nl (alle pagina's) + Google (4,8 uit 103), opgehaald 23-11-2026. Zie content.md.
// Foto's: eigen site (projecten) + Google-profiel. Foto's met andermans bestandsnaam (Leerssen, RT0212) en Google-foto's met watermerk-kruis niet gebruikt.
// Sjabloon-bug: de keurmerkenstrook (2 kolommen, 1fr) loopt op telefoon over de rand (pagina 472px breed). Tijdelijk hier opgelost:
document.head.insertAdjacentHTML('beforeend', '<style>@media (max-width:1023px){.trust ul{grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))}}</style>');
window.SITE = {
  naam: "Alles Onder Eén Dak",
  kortNaam: "Alles Onder Eén Dak",
  plaats: "Eindhoven",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png", logoWit: "img/logo-wit.png", logoHoogte: 52,
  kleuren: { brand: "#1c1815", accent: "#e57b2e" },
  telefoon: "06 22 18 02 97",
  telefoonIntl: "31622180297",
  telefoon2: "040 282 76 94",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of een foto, ook bij lekkage",
  email: "alles.onder.1.dak@outlook.com",
  adres: ["Schumannstraat 33", "5654 PE Eindhoven"],
  google: { score: "4,8", aantal: "103" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Dakinspectie",
  voetTekst: "Staat paraat als het om vakwerk gaat. Dakdekker in Eindhoven en omstreken: pannendaken, platte daken, lekkages, schoorstenen, lood- en zinkwerk. 15 jaar garantie op nieuw dakwerk.",

  hero: {
    regels: ["Staat paraat", "als het om", "vakwerk gaat."],
    tekst: "De dakdekker van Eindhoven en omstreken. Uit een echte dakdekkersfamilie, voor kleine reparaties tot complete dakrenovaties. Altijd snel ter plaatse.",
    foto: "img/hero.jpg", fotoPos: "50% 45%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 0%",
    fotoAlt: "Nieuw oranje pannendak op een jaren-dertigwoning, met steiger van Alles Onder Eén Dak",
    donker: true,
    punten: ["15 jaar garantie op nieuw dakwerk", "24/7 spoedlijn bij lekkage", "Gratis dakinspectie"]
  },

  marquee: ["Pannendaken", "Nokrenovatie", "Platte daken", "Daklekkage", "Schoorsteenrenovatie", "Lood- en zinkwerk", "Gootcoating", "Dakisolatie", "Dakramen", "Plastisol en Keralit", "Gootreiniging"],

  spoed: {
    titel: "Daklekkage? Spoedlijn 24/7",
    tekst: "Dag en nacht, 7 dagen per week. Bel of app ons, ook met een foto van de lekkage."
  },

  intro: {
    kicker: "Over Alles Onder Eén Dak",
    tekst: "Wat voor probleem u ook heeft met uw dak: wij lossen het op, efficiënt en vakkundig. We komen gratis langs voor een dakinspectie en een offerte, en werken alleen met duurzame A-kwaliteit producten.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "103", tel: 103, label: "Reviews op Google" },
      { getal: "15 jaar", label: "Schriftelijke garantie op nieuw dakwerk" },
      { getal: "24/7", label: "Spoedlijn bij daklekkage" }
    ]
  },

  keurmerkenTitel: "Veilig werken op hoogte, volgens VCA, BHV en het Arbo-besluit",
  keurmerken: [
    { naam: "VCA", sub: "Gecertificeerd", logo: "img/merk-vca.png" },
    { naam: "BHV", sub: "Brandveiligheid", logo: "img/merk-bhv.png" }
  ],

  diensten: {
    titel: "Alles voor uw dak, onder één dak",
    tekst: "Steigers, liften en vakmensen in eigen beheer. Voor particulieren én bedrijven, van tussenwoning tot villa.",
    items: [
      { naam: "Pannendaken en nokrenovatie", soort: "Pannendak", foto: "img/zwart-satinet.jpg", pos: "50% 45%", tekst: "Poreuze of verkleurde dakpannen vervangen we voordelig en efficiënt. Zo gaat uw dak weer tientallen jaren zorgeloos mee.",
        punten: ["Pannen vervangen", "Complete nokrenovatie", "Nieuwe ruiterband en nokpannen"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 55%", tekst: "Gespecialiseerd in het aanleggen en renoveren van bitumen daken. Voor carports, aanbouwen, dakkapellen en schuren.",
        punten: ["Bitumen gaat zo'n 25 jaar mee", "Renovatie en vervanging", "Jaarlijks onderhoud"] },
      { naam: "Daklekkage", soort: "Daklekkage", foto: "img/lekkage.jpg", pos: "50% 40%", tekst: "Door slechte afwerking of stormschade: we sporen de lekkage op en lossen het grondig op. Pas dan is het werk klaar.",
        punten: ["24-uursservice, 7 dagen per week", "Hele regio Eindhoven", "Ook tijdelijk dichtmaken"] },
      { naam: "Schoorstenen", soort: "Schoorsteen", foto: "img/schoorsteen-na.jpg", pos: "50% 40%", tekst: "Renoveren, opnieuw voegen of compleet nieuw opmetselen. Ook vegen en een passende schoorsteenkap.",
        punten: ["Nieuw lood rond de schoorsteen", "Voegen en impregneren", "Vegen en schoorsteenkappen"] },
      { naam: "Lood- en zinkwerk", soort: "Lood- en zinkwerk", foto: "img/koper.jpg", pos: "50% 50%", tekst: "Lood rond schoorsteen en erker, kilgoten, dakgoten en regenpijpen. Maatwerk door vakmensen met jarenlange ervaring.",
        punten: ["Loodwerk vervangen", "Zinken en koperen goten", "Gootcoating zonder solderen"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 40%", tekst: "Bij voorkeur van buitenaf, zonder koudebruggen. Lagere energiekosten en meer wooncomfort.",
        punten: ["Isolatieplaten van A-merken", "Dampdoorlatende folie", "Ook van binnenuit mogelijk"] }
    ],
    meer: [
      { naam: "Dakinspectie", tekst: "Gratis. We brengen de staat van uw hele dak in kaart, ook vóór de aankoop van een woning." },
      { naam: "Dakramen en lichtkoepels", tekst: "Vakkundig en lekvrij geplaatst, ook Velux en Solatube." },
      { naam: "Plastisol en Keralit", tekst: "Onderhoudsarme boeidelen, dakkapellen en gevels. Nooit meer schilderen." },
      { naam: "Dakgoot en zonnepanelen reinigen", tekst: "Voor- en achterzijde dakgoot reinigen voor €69,99 excl. btw." }
    ]
  },

  voorNa: {
    titel: "Schoorsteen, als nieuw",
    tekst: "Verweerd voegwerk uitgehakt en de schoorsteen opnieuw gevoegd. Schuif om het verschil te zien.",
    items: [
      { naam: "Schoorsteenrenovatie", voor: "img/schoorsteen-voor.jpg", na: "img/schoorsteen-na.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk in en rond Eindhoven",
    tekst: "Nieuwbouw, renovatie en onderhoud. Een greep uit onze projecten.",
    items: [
      { foto: "img/steiger.jpg", label: "Pannendak gerenoveerd", sub: "Met nieuwe isolatiefolie, vanaf de steiger", pos: "50% 45%" },
      { foto: "img/folie.jpg", label: "Nieuwe pannen, nieuwe folie", sub: "Panlatten klaar voor de pannen", pos: "50% 60%" },
      { foto: "img/dakkapel.jpg", label: "Dakkapel geplaatst", sub: "Strak ingewerkt in het pannendak", pos: "50% 50%" },
      { foto: "img/nok.jpg", label: "Nokrenovatie", sub: "Nieuwe nokpannen, recht gesteld", pos: "50% 50%" },
      { foto: "img/plastisol.jpg", label: "Plastisol boeidelen", sub: "Onderhoudsarm en kleurvast", pos: "50% 40%" }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "15 jaar schriftelijke garantie",
    tekst: "Op nieuwe daken en nieuwbouwprojecten krijgt u standaard 15 jaar garantie. We werken alleen met hoogwaardige producten met keurmerk, en leggen alle afspraken vooraf schriftelijk vast.",
    lijst: {
      titel: "Ook na de oplevering",
      tekst: "Service begint vóór het werk en gaat door na de oplevering. Daarom bieden we elk jaar in november een onderhoudsbeurt aan.",
      punten: [
        "Dakgoten en daken schoongemaakt",
        "Bladeren en vuil weg bij randen en afvoeren",
        "Inspectie aan de hand van een checklist",
        "Kleine mankementen direct gerepareerd",
        "Rapportage per e-mail of mondeling"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Al meerdere keren dakwerkzaamheden nodig gehad, en nu op ons nieuwe adres weer Danny ingeschakeld. Altijd snelle reactie en snel ter plaatse. Danny geeft altijd eerlijk en kundig advies en denkt mee. Top vakmannen en super vriendelijk!!", naam: "Bart V." },
      { tekst: "Heel fijn (familie)bedrijf, eerlijk en leveren mooi werk. Hebben ons dak, garage en schoorsteen vakkundig gerenoveerd en alles netjes achtergelaten. Denken mee en hebben nette prijzen.", naam: "Joost B." },
      { tekst: "Samen met de buren onze dakpannen laten vervangen met nog een aantal reparaties laten uitvoeren. De communicatie verliep vlot en vriendelijk en de werken zijn netjes en kundig uitgevoerd. Top service!", naam: "Magda V. D." },
      { tekst: "We schakelen al jaren hen in voor problemen met ons dak. Ze zijn vakkundig, behulpzaam en hanteren eerlijke prijzen. Zeker een aanrader!", naam: "Cristian R." },
      { tekst: "Fijne communicatie, afspraken zijn nagekomen en het resultaat mag er zijn! We zijn blij met ons nieuwe dak.", naam: "Toine R." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uit een echte dakdekkersfamilie",
    rol: "Alles Onder Eén Dak V.O.F., Eindhoven",
    tekst: [
      "Ons bedrijf is ontstaan uit een echte dakdekkersfamilie. Bij ons werken alleen gespecialiseerde dakdekkers, VCA-gediplomeerd en met jarenlange ervaring.",
      "Onze diensten zijn in de loop der jaren gegroeid met de wensen van onze klanten. Zo vindt u voor elk dak een passende oplossing, alles onder één dak. Samen met de buren? Vraag naar onze collectiviteitskorting."
    ],
    foto: "img/bus.jpg", fotoPos: "40% 55%", fotoAlt: "De bus van Alles Onder Eén Dak met aanhanger op locatie",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Eindhoven en omstreken",
    tekst: "We werken vooral voor particulieren, maar ook voor grote bedrijven, in Eindhoven en de wijde omgeving. Bij lekkage staat onze 24-uursservice in de hele regio klaar."
  },

  faq: [
    { v: "Is een dakinspectie echt gratis?", a: "Ja. We komen gratis langs, brengen de staat van uw dak stap voor stap in kaart en u krijgt een vrijblijvende offerte. Ook handig vóór de aankoop van een woning." },
    { v: "Wat houdt de 15 jaar garantie in?", a: "Op nieuwe daken en nieuwbouwprojecten krijgt u standaard 15 jaar schriftelijke garantie op de A-kwaliteit producten die we gebruiken." },
    { v: "Hoe vaak moet mijn schoorsteen geveegd worden?", a: "Eén keer per jaar. Dat voorkomt schoorsteenbrand en koolmonoxidevergiftiging, en de meeste verzekeraars stellen het als voorwaarde bij een open haard of houtkachel." },
    { v: "Wat kost het reinigen van de dakgoot?", a: "Het reinigen van de dakgoten aan de voor- en achterzijde van uw woning kost €69,99 excl. 21% btw." },
    { v: "Kunnen we samen met de buren iets laten doen?", a: "Graag. Voor bijvoorbeeld schoorstenen en boeidelen geven we collectiviteitskorting als u het samen met de buren aanpakt." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een gratis dakinspectie aan. Voorkomen is beter dan genezen."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Vul het formulier in, bel of stuur een WhatsApp. Bij lekkage zijn we dag en nacht bereikbaar.",
    formTitel: "Aanvraag",
    onderwerpen: ["Dakinspectie", "Daklekkage", "Pannendak", "Plat dak", "Schoorsteen", "Lood- en zinkwerk", "Dakisolatie", "Anders"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen langs de schoorsteen, of onze dakpannen zijn verkleurd en poreus",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
