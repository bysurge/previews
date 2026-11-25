// Maxus Zink & Dakwerken b.v. (Oosterhout). Bron: eigen site (Strato) + Google 4,8 / 37, 25-11-2026. Zie content.md.
// Logo: eigen rond beeldmerk van hun site, transparant gemaakt. Foto's: eigen site + Google-profiel.
window.SITE = {
  naam: "Maxus Zink & Dakwerken",
  kortNaam: "Maxus",
  plaats: "Oosterhout",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "icoon", logoMetNaam: true,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 48,
  kleuren: { brand: "#1f2326", accent: "#b08d57" },
  telefoon: "06 22 85 24 68",
  telefoonIntl: "31622852468",
  email: "Dakwerken@maxusonderhoud.nl",
  waTekst: "App ons",
  waContact: "Stuur een WhatsApp, met een foto van uw dak",
  adres: ["Damweg 45", "4905 BS Oosterhout"],
  google: { score: "4,8", aantal: "37" },
  navCta: "Bel of app",
  ctaTekst: "Offerte aanvragen",
  voetTekst: "Uw dak, ons ambacht. Zinkwerk, lood, platte daken en pannendaken voor particulieren en bedrijven.",

  hero: {
    regels: ["Uw dak,", "ons ambacht."],
    tekst: "Zinkwerkers en dakdekkers uit Oosterhout. Van zinken dakgoten en loodwerk tot een nieuw plat dak, voor uw woning of bedrijfspand.",
    foto: "img/hero.jpg", fotoPos: "70% 40%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 30%",
    fotoAlt: "Zinkwerker van Maxus aan het werk aan een zinken dakgoot op de steiger",
    donker: true,
    punten: ["4,8 op Google", "Lood, zink en leisteen", "Particulier en zakelijk"]
  },

  marquee: ["Zinkwerk", "Dakgoten", "Loodwerk", "Platte daken", "Pannendaken", "Leisteen", "Dakisolatie", "Dakrenovatie", "Zonnepanelen-klaar"],

  intro: {
    kicker: "Over Maxus",
    tekst: "Een team van ervaren zinkwerkers, dakdekkers en loodgieters. We houden de oude ambachten in ere, met lood, zink en leisteen, en werken met de nieuwste technieken. Voor particulieren en voor bedrijven.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "37", tel: 37, label: "Reviews op Google" }
    ]
  },

  diensten: {
    titel: "Vakwerk van goot tot nok",
    tekst: "Zink is ons vak, maar we doen het hele dak. Eerst meten we op het dak zelf, dan krijgt u een eerlijke offerte.",
    knop: "Offerte aanvragen",
    items: [
      { naam: "Zinken dakgoten", soort: "Zinkwerk", foto: "img/zinkgoot.jpg", pos: "50% 50%", tekst: "Nieuwe zinken goten, op maat gemaakt en gesoldeerd. Of alle zinkdelen rond het huis in één keer vervangen.",
        punten: ["Op maat gesoldeerd", "Goten en boeidelen", "Alle zinkdelen in één keer"] },
      { naam: "Hemelwaterafvoer", soort: "Zinkwerk", foto: "img/afvoer.jpg", pos: "50% 50%", tekst: "Zinken regenpijpen en afvoeren, strak tegen de gevel. Mooi én ze gaan jaren mee.",
        punten: ["Zinken regenpijpen", "Strak afgewerkt", "Vervangen of nieuw"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/platdak.jpg", pos: "50% 55%", tekst: "Nieuwe dakbedekking op uitbouwen, garages en woningen. Ook als voorbereiding op zonnepanelen.",
        punten: ["Bitumen dakleer", "Klaar voor zonnepanelen", "Nette dakranden"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 50%", tekst: "Dakrenovatie van hellende daken: nieuwe pannen, loodwerk rond de schoorsteen en een strakke afwerking.",
        punten: ["Dakrenovatie", "Lood bij schoorsteen", "Nokvorsten"] },
      { naam: "Lood en leisteen", soort: "Lood of leisteen", foto: "img/leisteen.jpg", pos: "50% 50%", tekst: "Ambachtelijk werk met lood en leisteen. Voor dakkapellen, torentjes en aansluitingen die mooi moeten blijven.",
        punten: ["Loodslabben", "Leien daken", "Ambachtelijk"] },
      { naam: "Bedrijfsdaken", soort: "Bedrijfspand", foto: "img/utiliteit.jpg", pos: "50% 60%", tekst: "Grote platte daken voor de utiliteitsbouw: renovatie, isolatie en onderhoud, met een ervaren team.",
        punten: ["Utiliteitsbouw", "Dakisolatie", "Dakonderhoud"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Een plaatje zegt meer",
    tekst: "Een greep uit ons werk, van zinken goten tot een compleet dak.",
    items: [
      { foto: "img/p-houten-huis.jpg", label: "Dak en zinkwerk", sub: "Pannendak met zinken goot", pos: "50% 50%" },
      { foto: "img/p-torentje.jpg", label: "Zink en lood", sub: "Torentje met spits", pos: "50% 35%" },
      { foto: "img/boeideel.jpg", label: "Zinkwerk", sub: "Boeidelen en regenpijp", pos: "50% 40%" },
      { foto: "img/p-plat.jpg", label: "Plat dak", sub: "Nieuw dakleer met lichtkoepel", pos: "50% 50%" },
      { foto: "img/p-zink-pijp.jpg", label: "Hemelwaterafvoer", sub: "Zinken regenpijp", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerst meten, dan pas een prijs",
    tekst: "Geen schatting vanaf de stoep. We gaan het dak op, meten alles na en zien zo ook kleine problemen die anders gemist worden.",
    foto: "img/werk.jpg", fotoPos: "50% 60%", fotoAlt: "Groot plat bedrijfsdak met nieuwe dakbedekking door Maxus",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er speelt. Een foto erbij helpt altijd." },
      { naam: "Inspectie op het dak", tekst: "We komen kijken en meten alles zelf na." },
      { naam: "Eerlijke offerte", tekst: "U betaalt voor wat er echt nodig is, niet voor vierkante meters extra." },
      { naam: "Netjes uitgevoerd", tekst: "Op tijd, vakkundig en we laten geen rommel achter." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Scott van Maxus Zink & Dakwerken is de enige die daadwerkelijk op het dak is geweest voor een inspectie en om het e.e.a te meten. Daardoor kwam er ook een ander klein probleem aan het licht (los gelaten lood) wat ze ook konden repareren.", naam: "Leroy C." },
      { tekst: "Top werk geleverd. Rondom het huis alle zinkdelen vervangen, Scott denkt goed mee met klantwensen. Keurig gewerkt en alles weer schoon en opgeruimd achter gelaten.", naam: "Martin van der A." },
      { tekst: "Super goed werk geleverd. Ons dak ziet er weer keurig uit. En het Zinkwerk is mooi afgewerkt. Echte vakmensen en geven goed advies.", naam: "J. Jacobs" }
    ]
  },

  over: {
    kicker: "Ons bedrijf", navNaam: "Over ons",
    titel: "Met plezier en liefde voor het vak",
    rol: "Maxus Zink & Dakwerken b.v., Oosterhout",
    tekst: [
      "Ons hoogste doel: kwaliteitswerk afleveren aan tevreden klanten. Dat lukt alleen als je het vak met plezier en liefde uitoefent.",
      "We werken met de nieuwste technieken, maar zeker ook met de oude ambachten en gereedschappen. En we gaan met de tijd mee: we verduurzamen met zoveel mogelijk natuurlijke producten, isoleren daken en maken ze klaar voor zonnepanelen."
    ],
    foto: "img/over.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuw plat dak met strakke dakrand, gemaakt door Maxus",
    knop: "Neem contact op"
  },

  band: {
    foto: "img/p-wit-huis.jpg", fotoPos: "50% 40%",
    titel: "Zonnepanelen op komst?",
    tekst: "Laat eerst uw dak nakijken. We maken het klaar voor de panelen en geven u eerlijk advies."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, bel of stuur een WhatsApp. We nemen zo snel mogelijk contact met u op.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Zinkwerk", "Dakgoten", "Plat dak", "Pannendak", "Lood of leisteen", "Zonnepanelen", "Bedrijfspand", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de zinken goten lekken en het platte dak is zo'n 25 jaar oud",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
