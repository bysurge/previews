// FortunaDak (Dordrecht). Bron: fortunadak.nl + Google (4,9 / 79). Foto's: eigen site + Google-profiel. Zie content.md.
window.SITE = {
  naam: "FortunaDak",
  plaats: "Dordrecht",
  vak: "Dakdekker",
  logo: "img/logo-nav.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png",
  kleuren: { brand: "#1c2025", accent: "#c9a45f" },
  telefoon: "06 13 53 37 02",
  telefoonIntl: "31613533702",
  waTekst: "App direct",
  email: "info@fortunadak.nl",
  adres: ["Wijngaardstraat 10", "3311 TZ Dordrecht"],
  google: { score: "4,9", aantal: "79" },
  ctaTekst: "Gratis offerte",
  navCta: "Offerte",
  voetTekst: "Dakdekker in Dordrecht. Platte daken, pannendaken, zinkwerk en lekkages, voor particulieren en bedrijven.",

  hero: {
    regels: ["Uw dak,", "onze oplossing."],
    tekst: "Dakdekker uit Dordrecht voor platte daken, pannendaken, zinkwerk en lekkages. Particulier of zakelijk: op werkdagen heeft u binnen 48 uur een offerte.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 60%", fotoPosMobiel: "32% 50%",
    fotoAlt: "Strak afgewerkt bitumen dak tussen de pannendaken, met uitzicht over de tuinen",
    punten: ["24/7 spoedservice bij lekkage", "Offerte binnen 48 uur", "Gratis en vrijblijvend"]
  },

  marquee: ["EPDM", "PVC", "Bitumen", "Pannendaken", "Zinkwerk", "Lekkages", "Dakrenovatie", "Dakonderhoud", "Nieuwbouw"],

  spoed: {
    titel: "Lekkage? Bel direct.",
    tekst: "Onze spoedservice staat 24/7 klaar om een lek snel te verhelpen en verdere schade te voorkomen."
  },

  intro: {
    kicker: "Over FortunaDak",
    tekst: "Wij zijn pas tevreden als u dat ook bent. Eerst goed luisteren, dan een plan op maat en een dak dat jaren meegaat. Voor particulieren en bedrijven, vanuit Dordrecht.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "79", tel: 79, label: "Reviews op Google" },
      { getal: "48 uur", label: "Tot uw offerte (werkdagen)" },
      { getal: "24/7", label: "Spoedservice bij lekkage" }
    ]
  },

  diensten: {
    titel: "Elk dak, de juiste aanpak",
    tekst: "Plat of schuin, reparatie of compleet nieuw: we kennen de materialen en kiezen wat bij uw dak past.",
    items: [
      { naam: "Bitumen daken", soort: "Plat dak", foto: "img/bitumen.jpg", tekst: "Bitumineuze dakbedekking voor allerlei dakconstructies, voor een betrouwbare afdichting die lang meegaat.",
        punten: ["Aanbouw, uitbouw en garage", "Nieuw dak of renovatie", "Strak afgewerkte dakranden"] },
      { naam: "EPDM en PVC", soort: "Plat dak", foto: "img/pvc-dak.jpg", tekst: "Duurzame, waterdichte kunststof dakbedekking: ideaal voor platte daken en onderhoudsarm.",
        punten: ["Aanbrengen en repareren", "Ook voor bedrijfspanden", "Lichtkoepels netjes ingewerkt"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", tekst: "Traditionele of moderne dakpannen: we installeren, repareren en renoveren uw pannendak.",
        punten: ["Losse of kapotte pannen", "Complete renovatie", "Dakkapellen en aansluitingen"] },
      { naam: "Lekkage en reparatie", soort: "Lekkage", foto: "img/reparatie.jpg", tekst: "We zoeken de echte oorzaak en lossen die op. Bij spoed staan we 24/7 voor u klaar.",
        punten: ["Snel ter plaatse", "Oorzaak eerst, geen onnodig nieuw dak", "Verdere schade voorkomen"] }
    ],
    meer: [
      { naam: "Zinkwerk", tekst: "Dakgoten, regenpijpen en ander zinkwerk, vakkundig aangebracht." },
      { naam: "Dakonderhoud", tekst: "Preventief onderhoud, zodat kleine problemen geen grote worden." },
      { naam: "Dakrenovatie en nieuwbouw", tekst: "Van een volledig nieuw dak tot renovatie voor ieder budget." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Strak opgeleverd",
    tekst: "Een greep uit ons werk in en rond Dordrecht: platte daken, aanbouwen en lichtkoepels.",
    items: [
      { foto: "img/plat-dak.jpg", label: "Bitumen plat dak", sub: "Nieuwe dakbedekking, strak tot in de hoeken", pos: "50% 60%" },
      { foto: "img/in-uitvoering.jpg", label: "In uitvoering", sub: "Nieuwe ondergrond en dakbedekking", pos: "40% 60%" },
      { foto: "img/dakkapel.jpg", label: "Dakkapel", sub: "Op een pannendak", pos: "40% 50%" },
      { foto: "img/lichtkoepel.jpg", label: "Lichtkoepel", sub: "Waterdicht ingewerkt", pos: "50% 50%" },
      { foto: "img/aanbouw.jpg", label: "Aanbouw", sub: "Plat dak tussen de pannen", pos: "40% 55%" }
    ]
  },

  werkwijze: {
    titel: "Snel geholpen, zonder lange wachttijd",
    tekst: "U weet vooraf wat er gebeurt en wat het kost.",
    foto: "img/werk-plat.jpg", fotoPos: "50% 60%", fotoAlt: "Nieuw plat dak met zonnepanelen op de buren",
    stappen: [
      { naam: "Aanvraag", tekst: "Bel, app of vul het formulier in. Gaat het om een lekkage of om een opname?" },
      { naam: "Opname en advies", tekst: "We komen kijken, zoeken de oorzaak en leggen helder uit wat nodig is." },
      { naam: "Offerte binnen 48 uur", tekst: "Op werkdagen heeft u binnen 48 uur een duidelijke, vrijblijvende offerte." },
      { naam: "Snel ingepland", tekst: "Na akkoord plannen we uw klus snel in, houden ons aan de planning en beperken de overlast." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Fortunadak gebeld voor een spoedklus; een lekkend pannendak. Binnen 24 uur was het opgelost! Waar twee andere bedrijven ons een nieuw dak wilden verkopen, had Fortunadak de exacte oorzaak snel gevonden en opgelost.", naam: "Madelein K." },
      { tekst: "Christiaan is een echte vakman die duidelijk communiceert, afspraken nakomt en goed meedenkt. Hij neemt de tijd om alles uit te leggen en werkt netjes en zorgvuldig. … Absoluut een aanrader!", naam: "Fleur D." },
      { tekst: "… erachter gekomen dat twee dakkapellen toe zijn aan een nieuwe bedekking. Gebeld met Christiaan en binnen een aantal dagen kwam hij al langs. … Top geholpen en het ziet er weer mooi uit.", naam: "Patrick H." },
      { tekst: "Heeft mijn dak keurig netjes behandeld en is nu weer als nieuw. Betrouwbare en vriendelijke vakman.", naam: "Dennis de V." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Vakmanschap met aandacht",
    rol: "Dakdekker in Dordrecht",
    tekst: [
      "FortunaDak heeft jarenlange ervaring met dakrenovatie en nieuwbouwdaken. Van EPDM, PVC en bitumen tot pannendaken en zinkwerk.",
      "We nemen de tijd om naar uw wensen te luisteren, communiceren helder en maken waar wat we beloven. Pas als u tevreden bent, zijn wij het ook."
    ],
    foto: "img/aan-het-werk.jpg", fotoPos: "45% 50%", fotoAlt: "Dakdekker van FortunaDak aan het werk op een plat dak",
    knop: "Stuur ons een bericht"
  },

  faq: [
    { v: "Hoe snel krijg ik een offerte?", a: "Op werkdagen proberen we uw aanvraag binnen 48 uur te beantwoorden. Na akkoord plannen we de klus snel in." },
    { v: "Ik heb een lekkage. Kunnen jullie snel komen?", a: "Ja. Onze spoedservice staat 24/7 klaar. Bel direct, of stuur via WhatsApp een foto van de lekkage." },
    { v: "Met welke daken werken jullie?", a: "Platte daken met EPDM, PVC of bitumen, pannendaken en zinkwerk zoals dakgoten en regenpijpen." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja, we werken voor particulieren en bedrijven, van een aanbouw tot een bedrijfspand." }
  ],

  band: {
    foto: "img/band-dakkapel.jpg", fotoPos: "50% 55%",
    titel: "Benieuwd wat wij voor uw dak kunnen doen?",
    tekst: "Vraag een gratis offerte aan. Op werkdagen heeft u binnen 48 uur antwoord."
  },

  contact: {
    titel: "Vraag een gratis offerte aan",
    tekst: "Vertel kort wat er aan de hand is. We reageren snel, en bij een lekkage kunt u ons ook direct bellen of appen.",
    onderwerpen: ["Lekkage", "Plat dak", "Pannendak", "Zinkwerk", "Opname / advies", "Anders"],
    voorbeeld: "Bijvoorbeeld: lekkage bij de dakkapel, of nieuwe bedekking op het platte dak van de aanbouw",
    belofte: "Op werkdagen reageren we binnen 48 uur."
  }
};
