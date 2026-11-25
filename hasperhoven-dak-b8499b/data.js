// Hasperhoven Dakbedekking (Hengelo). Bron: hasperhovendakbedekking.nl (grijs, kapotte hero-foto, Times-lettertype)
// + Google 5,0 uit 7 reviews (25-11-2026, helper p11). Geen voornaam op de site: aanhef met bedrijfsnaam.
window.SITE = {
  naam: "Hasperhoven Dakbedekking",
  kortNaam: "Hasperhoven",
  plaats: "Hengelo",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoWit: "img/logo-wit.png",
  logoMetNaam: false,
  logoHoogte: 52,
  kleuren: { brand: "#1c1d21", accent: "#d8342b" },
  telefoon: "06 53 92 62 22",
  telefoonIntl: "31653926222",
  waTekst: "Stuur een WhatsApp",
  email: "info@hasperhovendak.nl",
  adres: ["Lijsterweg 49", "7557 PL Hengelo"],
  google: { score: "5,0", aantal: "7" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Bitumen daken leggen en repareren, en lekkages snel verholpen. Voor particulieren en bedrijven in Hengelo en omgeving.",

  hero: {
    regels: ["Bitumen daken", "en lekkages,", "snel geregeld."],
    tekst: "25 jaar ervaring met het leggen van bitumen daken en het repareren van lekkages. Voor particulieren en bedrijven.",
    foto: "img/hero.jpg", fotoPos: "50% 12%", fotoPosMobiel: "45% 30%", donker: true,
    fotoAlt: "Dakdekker van Hasperhoven brandt een rol bitumen op een plat dak",
    punten: ["25 jaar ervaring", "Afspraak is afspraak", "5,0 op Google"]
  },

  marquee: ["Bitumen daken", "Dakreparatie", "Lekkages", "Platte daken", "Dakisolatie", "Particulier", "Zakelijk"],

  spoed: {
    titel: "Lekkage? Neem snel contact op",
    tekst: "Zodat uw huis niet onderloopt. Stuur gerust een foto via WhatsApp, dan komen we snel kijken.",
    knop: "Bel direct"
  },

  intro: {
    kicker: "Over Hasperhoven",
    tekst: "Van een kleine reparatie tot een compleet nieuw dak: u krijgt eerlijk advies, een scherpe prijs en een vakman die uitlegt wat hij doet. Betrouwbaarheid staat voorop. Afspraak is afspraak.",
    stats: [
      { getal: "25", label: "Jaar ervaring met bitumen" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "7", label: "Reviews op Google" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Gespecialiseerd in bitumen: leggen, repareren en lekkages dichten.",
    items: [
      { naam: "Bitumen daken leggen", soort: "Nieuw dak", foto: "img/plat-dak.jpg", pos: "50% 60%", tekst: "Gaat u (ver)bouwen of is uw dak aan vervanging toe? We leggen een nieuw bitumen dak, strak tot in de randen.",
        punten: ["Nieuwbouw en verbouw", "Complete vervanging", "Strak afgewerkt"] },
      { naam: "Bitumen daken repareren", soort: "Reparatie", foto: "img/reparatie.jpg", pos: "50% 40%", tekst: "Is uw dak verouderd? We komen langs, kijken wat er nodig is en geven eerlijk advies: repareren waar het kan.",
        punten: ["Eerlijk advies", "Repareren waar het kan", "Uitleg over aanpak en materiaal"] },
      { naam: "Lekkages dichten", soort: "Lekkage", foto: "img/hero.jpg", pos: "50% 30%", tekst: "Lekkage wilt u niet weken laten wachten. We komen snel kijken en lossen het vakkundig op.",
        punten: ["Snel ter plaatse", "Vakkundig gedicht", "Duidelijke prijs vooraf"] },
      { naam: "Bedrijfsdaken en isolatie", soort: "Zakelijk", foto: "img/bedrijfsdak.jpg", pos: "50% 50%", tekst: "Ook voor bedrijven: platte daken op staal, met isolatie eronder voor een beter binnenklimaat.",
        punten: ["Bedrijfspanden", "Isolatie meenemen", "Grote oppervlakken"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Werk", kicker: "Aan het werk",
    titel: "Vakmanschap op het dak",
    tekst: "Een kijkje bij ons werk in Hengelo en omgeving.",
    items: [
      { foto: "img/isolatie.jpg", label: "Bedrijfsdak", sub: "Isolatieplaten klaar om te leggen", pos: "50% 60%" },
      { foto: "img/plat-dak.jpg", label: "Plat dak", sub: "Nieuw bitumen dak", pos: "50% 60%" },
      { foto: "img/reparatie.jpg", label: "Reparatie", sub: "Dakbedekking op maat gesneden", pos: "50% 40%" },
      { foto: "img/bedrijfsdak.jpg", label: "Staaldak", sub: "Voorbereiding nieuw dakpakket", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Klanten noemen het vaakst: eerlijk advies, goede uitleg en een scherpe prijs.",
    foto: "img/bus.jpg", fotoPos: "50% 50%", fotoAlt: "De bus van Hasperhoven Dakbedekking, rol bitumen op de schouder",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er speelt. Bij lekkage komen we snel kijken." },
      { naam: "Kijken en uitleggen", tekst: "We beoordelen het dak en leggen uit wat we zien." },
      { naam: "Duidelijke offerte", tekst: "Helder gespecificeerd, met een scherpe prijs." },
      { naam: "Vakwerk", tekst: "We zeggen wat we doen, en doen wat we zeggen." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Wat een geruststelling. Lekkage en dan een vakman aan de lijn die gewoon ffe komt kijken. Kijkt en beoordeelt en liet meteen een goede prijs achter.", naam: "Johan G." },
      { tekst: "Alles werd netjes uitgelegd en afspraken werden goed nagekomen, ze zeggen wat ze doen en doen wat ze zeggen. De offerte was correct en duidelijk gespecificeerd en de prijs was scherp.", naam: "Boudewijn S." },
      { tekst: "Wat een vakman. Mijn dak had wel enige spoed en hij reageert gelijk, echt een super prijs en kon het dezelfde week nog maken.", naam: "Esther L." }
    ]
  },

  werkgebied: {
    titel: "Thuis in Hengelo",
    tekst: "We werken vanuit Hengelo, voor particulieren en bedrijven. Twijfelt u of we bij u in de buurt komen? Stuur gerust een bericht."
  },

  band: {
    foto: "img/plat-dak.jpg", fotoPos: "50% 50%",
    titel: "Lekkage, of toe aan een nieuw dak?",
    tekst: "Bel of app ons. We komen snel kijken en geven eerlijk advies."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, of bel of app direct.",
    formTitel: "Aanvraag",
    onderwerpen: ["Lekkage", "Reparatie", "Nieuw bitumen dak", "Bedrijfsdak", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: bij hevige regen lekt het in de slaapkamer onder het platte dak",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
