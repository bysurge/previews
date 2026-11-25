// DCL Daktechniek (Helmond). Bron: dcldaktechniek.nl (home, projecten, contact) + Google (5,0 / 9). Zie content.md.
// Alle foto's = eigen projectfoto's van hun site. Logo: eigen logo (witte tekst -> donkere versie voor lichte achtergrond).
window.SITE = {
  naam: "DCL Daktechniek",
  kortNaam: "DCL Daktechniek",
  plaats: "Helmond",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#1c1e22", accent: "#e0a526" },
  telefoon: "06 38 96 16 85",
  telefoonIntl: "31638961685",
  google: { score: "5,0", aantal: "9" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Inspectie",
  waTekst: "App ons",
  voetTekst: "Dakdekker in Helmond. Platte daken repareren, renoveren en isoleren, voor woonhuis en bedrijf. 24/7 bereikbaar bij lekkage.",

  hero: {
    regels: ["Uw dak weer", "jaren dicht."],
    tekst: "Wij repareren, renoveren en isoleren uw dak snel en vakkundig. De beste kwaliteit, tegen een betaalbare prijs.",
    foto: "img/hero-autodroom.jpg", fotoPos: "40% 50%",
    fotoMobiel: "img/hero-kraan-mobiel.jpg", fotoPosMobiel: "60% 50%",
    fotoAlt: "Kraan en bus van DCL Daktechniek bij de dakrenovatie van Autodroom Helmond",
    donker: true,
    punten: ["24/7 bereikbaar", "Gratis dakinspectie", "5,0 op Google"]
  },

  marquee: ["Platte daken", "Dakrenovatie", "Daklekkage", "Dakisolatie", "Dakonderhoud", "Dakinspectie", "Dakgoten", "Lichtkoepels", "Nieuwbouw", "Bedrijfsdaken"],

  spoed: {
    titel: "Lekkage? Geen paniek.",
    tekst: "Bel ons meteen. Ons team staat 24/7 voor u klaar."
  },

  intro: {
    kicker: "DCL Daktechniek",
    tekst: "Op zoek naar een vakkundige dakdekker in Helmond? Wij repareren, renoveren en isoleren daken van woonhuizen en bedrijven. Duidelijke afspraken en net werk, daar staan we voor.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "24/7", label: "Bereikbaar bij lekkage" },
      { getal: "Gratis", label: "Dakinspectie" },
      { getal: "Helmond", label: "En omgeving" }
    ]
  },

  diensten: {
    titel: "Repareren, renoveren, isoleren",
    tekst: "Van een lekkende dakgoot tot het complete dak van een bedrijfspand. We nemen de mogelijkheden eerst samen met u door.",
    knop: "Inspectie aanvragen",
    items: [
      { naam: "Dakrenovatie", foto: "img/wit-dak-koepels.jpg", pos: "50% 55%",
        tekst: "Moet uw dak gerenoveerd worden? We bekijken samen wat er nodig is en vernieuwen het dak, met isolatie als u dat wilt.",
        punten: ["Platte daken van woonhuis en bedrijf", "Oude dakbedekking eraf, nieuw dak erop", "Isoleren in één keer mee"] },
      { naam: "Daklekkage", foto: "img/dakgoot.jpg", pos: "50% 50%",
        tekst: "Een lekkage wacht niet. Bel ons, ook buiten kantoortijd. We sporen het lek op en maken het vakkundig dicht.",
        punten: ["24 uurs service bij lekkage", "Dakgoten weer waterdicht", "Ook voor bedrijfspanden"] },
      { naam: "Onderhoud en inspectie", foto: "img/lichtstraat.jpg", pos: "50% 50%",
        tekst: "Goed onderhoud voorkomt lekkages en grote schade. We kijken uw dak gratis na en zeggen eerlijk wat er nodig is.",
        punten: ["Gratis dakinspectie", "Lichtkoepels en lichtstraten", "Kleine gebreken op tijd verholpen"] },
      { naam: "Nieuwbouw", foto: "img/woonhuis-wit.jpg", pos: "50% 50%",
        tekst: "Wij verzorgen de dakbedekking voor nieuwbouw en nieuwbouwprojecten, inclusief het isoleren van het dak.",
        punten: ["Dakbedekking voor nieuwbouw", "Inclusief dakisolatie", "Ook voor projecten"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten", navNaam: "Projecten",
    titel: "Recent werk in en rond Helmond",
    tekst: "Van bungalow tot bedrijfspand. Zoals het complete dak van Autodroom Helmond.",
    items: [
      { foto: "img/autodroom-kraan.jpg", label: "Autodroom Helmond", sub: "Volledig dak vernieuwd", pos: "50% 50%" },
      { foto: "img/plat-dak-koepels.jpg", label: "Plat dak", sub: "Renovatie met lichtkoepels", pos: "50% 50%" },
      { foto: "img/bungalow-wit.jpg", label: "Woonhuis", sub: "Renovatie dak", pos: "50% 50%" },
      { foto: "img/dak-tuin.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 60%" },
      { foto: "img/dak-staand.jpg", label: "Woonhuis", sub: "Renovatie dak", pos: "50% 60%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Heel tevreden over het vernieuwen van het plat dak van onze bungalow. DCL heeft het hele dak vakkundig gesloopt en weer opgebouwd. David communiceert heel goed en houdt je van alles op de hoogte. Een fijn contact, betrouwbaar en professioneel.", naam: "Betty M." },
      { tekst: "DCL heeft het volledige dak van Autodroom Helmond vernieuwd. Duidelijke afspraken, marktconforme prijs en service zonder gezeur. Erg blij met het resultaat …", naam: "Frank v.d. N." },
      { tekst: "Wij zijn heel snel en vakkundig geholpen door David en een hele nette prijs. Wij moesten snel ons dakleer vervangen hebben en dat heeft hij netjes en snel gedaan. Top service", naam: "Kirsten S." },
      { tekst: "Vanaf het eerste contact wordt het goed opgepakt door DCL. Afwerking van geleverde werk is perfect en geen meerwerk kosten.", naam: "Ron A." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Vakwerk, tegen een eerlijke prijs",
    tekst: [
      "DCL Daktechniek is een dakdekker uit Helmond. We werken voor particulieren en bedrijven: van het dakleer van een bungalow tot het complete dak van een bedrijfspand, met kraan en al.",
      "Vakmanschap en kwaliteit staan voorop, net als duidelijke afspraken. We nemen de mogelijkheden eerst samen met u door, zodat u weet waar u aan toe bent."
    ],
    foto: "img/kraan-bus.jpg", fotoPos: "50% 50%", fotoAlt: "Kraan en bedrijfsbus van DCL Daktechniek",
    knop: "App ons"
  },

  band: {
    foto: "img/band-dak.jpg", fotoPos: "50% 50%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een gratis dakinspectie aan. We vertellen eerlijk wat er nodig is."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Bel of app ons, of laat hieronder een bericht achter. Een foto van uw dak meesturen helpt.",
    formTitel: "Inspectie aanvragen",
    onderwerpen: ["Daklekkage", "Dakrenovatie", "Onderhoud of inspectie", "Dakisolatie", "Dakgoot", "Nieuwbouw", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons platte dak lekt bij de lichtkoepel",
    belofte: "We nemen snel contact met u op."
  }
};
