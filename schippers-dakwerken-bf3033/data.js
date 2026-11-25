// Schippers Dakwerken (Heerenveen). Bron: schippersdakwerken.nl (WordPress-thema 2015, © 2021, lorem ipsum + spamlinks) + Google (4,4 / 25).
// Foto's: Google-profiel + eigen site. Geen Google-reviewteksten opgehaald -> geen reviewsectie.
window.SITE = {
  naam: "Schippers Dakwerken",
  kortNaam: "Schippers Dakwerken",
  plaats: "Heerenveen",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Friesland, Groningen en Drenthe",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 40,
  kleuren: { brand: "#25282b", accent: "#d2461f" },
  telefoon: "06 46 32 76 06",
  telefoonIntl: "31646327606",
  telBel: "+31646327606",
  email: "info@schippersdakwerken.nl",
  adres: ["Dubbele Regel 58", "8441 AP Heerenveen"],
  kvk: "01118353",
  google: { score: "4,4", aantal: "25" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  waTekst: "App Douwe",
  waContact: "Direct contact met Douwe",
  voetTekst: "Dakdekker uit Heerenveen voor platte daken, hellende daken, zinkwerk en daklekkages. Voor particulieren, VvE's en bedrijven in Friesland, Groningen en Drenthe.",

  hero: {
    regels: ["Uw dak,", "rechtstreeks", "met Douwe."],
    tekst: "Dakdekker uit Heerenveen voor platte daken, hellende daken en zinkwerk. Geen tussenpersonen: u heeft direct Douwe Schippers aan de lijn.",
    foto: "img/hero.jpg", fotoPos: "50% 35%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Woning met nieuw metalen dak en dakraam, strak tegen de blauwe lucht",
    donker: true,
    punten: ["10 jaar garantie op een nieuw dak", "Geen voorrijkosten", "Vakman van het jaar (Werkspot)"]
  },

  marquee: ["Daklekkage", "Bitumen", "Universal", "Pannendaken", "Leien", "Zink- en koperwerk", "Dakgoten", "Dakramen", "Lichtkoepels", "Dakisolatie"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "Spoedreparaties zijn mogelijk. In Friesland komen we vaak dezelfde dag nog langs."
  },

  intro: {
    kicker: "Schippers Dakwerken",
    tekst: "Geen gedoe: u krijgt direct Douwe aan de lijn om alles af te stemmen. Eerlijk advies, goede materialen en afspraak is afspraak.",
    stats: [
      { getal: "10 jaar", label: "Garantie op een nieuw dak" },
      { getal: "€ 0", label: "Voorrijkosten" },
      { getal: "4,4", label: "Gemiddeld op Google" },
      { getal: "VCA", label: "Gecertificeerd en brandveilig" }
    ]
  },

  diensten: {
    titel: "Plat, hellend of zink",
    tekst: "Voor particulieren, VvE's en bedrijven in Friesland, Groningen en Drenthe.",
    items: [
      { naam: "Platte daken", soort: "Bitumen en Universal", foto: "img/plat-dak-vaart.jpg", pos: "50% 50%", tekst: "Bitumen gaat zeker 25 jaar mee. Of kies Universal: één laag, gelast met hete lucht zonder open vuur, en volledig recyclebaar.",
        punten: ["Oude dak kan vaak blijven liggen", "Wit, zwart, grijs of groen", "Isolatie van buitenaf met PIR"] },
      { naam: "Hellende daken", soort: "Pannen, leien, singels", foto: "img/pannendak-woning.jpg", pos: "50% 50%", tekst: "Pannendaken, daksingels, leien en zinken daken. Ook voor nokvorsten, nieuwe nokfolie, renovatie en stormschade.",
        punten: ["Renovatie en reparatie", "Nokvorst en nokfolie", "Dakpannen op voorraad"] },
      { naam: "Zink- en koperwerk", soort: "Dakgoten", foto: "img/goot.jpg", pos: "50% 50%", tekst: "Zinken dakgoten vervangen, dakkapellen en gevels bekleden met zink, en sierlijke zinken regenpijpen. Koper kan ook.",
        punten: ["Oude goot netjes afgevoerd", "Rot houtwerk meteen hersteld", "U hoeft niet thuis te zijn"] },
      { naam: "Daklekkage", soort: "Spoed", foto: "img/goot-vernieuwen.jpg", pos: "50% 40%", tekst: "Lekkage, stormschade of achterstallig onderhoud? We komen zo snel mogelijk voor een noodreparatie, zodat de schade beperkt blijft.",
        punten: ["Spoedreparaties mogelijk", "Dakpannen hebben we bij", "Advies over uw verzekering"] }
    ],
    meer: [
      { naam: "Dakramen en lichtkoepels", tekst: "Plaatsen en vervangen, op hellende en platte daken." },
      { naam: "Dakisolatie", tekst: "Het beste moment is bij vervanging van uw dak. We adviseren PIR, of Rockwool als u onbrandbaar wilt." },
      { naam: "Onderhoud", tekst: "Een plat dak om het jaar laten controleren, goten twee keer per jaar schoon. Dat kunnen wij voor u doen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk in het noorden",
    tekst: "Van een plat dak aan de vaart tot een bedrijfsdak.",
    items: [
      { foto: "img/plat-dak-water.jpg", label: "Plat dak", sub: "Woning aan het water", pos: "50% 60%" },
      { foto: "img/plat-dak-werk.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 50%" },
      { foto: "img/aanbouw.jpg", label: "Aanbouw", sub: "Dakrand in zink", pos: "50% 40%" },
      { foto: "img/plat-dak-groot.jpg", label: "Bedrijfsdak", sub: "Groot plat dak", pos: "50% 50%" },
      { foto: "img/ladderlift.jpg", label: "Pannendak", sub: "Materiaal met de ladderlift omhoog", pos: "50% 40%" }
    ]
  },

  werkwijze: {
    titel: "Vooraf weten waar u aan toe bent",
    tekst: "Een goede inspectie en een duidelijke offerte, zonder kosten.",
    foto: "img/plat-dak-groot.jpg", fotoPos: "50% 50%", fotoAlt: "Groot plat dak met nieuwe bitumen dakbedekking",
    stappen: [
      { naam: "Bel of app Douwe", tekst: "Rechtstreeks, zonder tussenpersoon. Een foto van uw dak via WhatsApp helpt al." },
      { naam: "Gratis dakinspectie", tekst: "We komen langs, bekijken uw dak en bespreken uw wensen. In Friesland ook 's avonds of in het weekend." },
      { naam: "Gratis offerte", tekst: "Een eerlijke, duidelijke prijs. Geen voorrijkosten." },
      { naam: "Vakwerk met garantie", tekst: "Kwaliteitsproducten, geen bouwmarktspul. 10 jaar garantie op een nieuw dak." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Douwe Schippers, Vakman van het jaar",
    rol: "Eigenaar Schippers Dakwerken",
    tekst: [
      "Schippers Dakwerken bestaat uit Douwe Schippers en de partners met wie hij nauw samenwerkt. Een deskundige jury van Werkspot.nl riep Douwe uit tot 'Vakman van het jaar' in de categorie dakdekkers.",
      "De jury koos de dakdekker die van alle markten thuis is: een pannendak vernieuwen, bitumen op een plat dak of een dakgoot repareren. Wij staan voor persoonlijke service, afspraak is afspraak, kwaliteit en een voordelige prijs."
    ],
    foto: "img/bussen.jpg", fotoPos: "50% 60%", fotoAlt: "De bedrijfsbussen van Schippers Dakwerken",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Friesland, Groningen en Drenthe",
    tekst: "Vanuit Heerenveen werken we voor particulieren, VvE's en bedrijven in het hele noorden. Op verzoek ook in andere regio's, als het goed vooraf wordt ingepland."
  },

  band: {
    foto: "img/plat-dak-vaart.jpg", fotoPos: "50% 55%",
    titel: "Gratis dakinspectie en offerte",
    tekst: "Vooraf weten waar u aan toe bent? We komen langs, bekijken uw dak en u krijgt direct een duidelijke prijs. Dat kost u helemaal niets."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Bel of app Douwe direct, of laat hieronder een bericht achter. Een foto van uw dak is altijd handig.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis dakinspectie", "Daklekkage / spoed", "Plat dak", "Hellend dak", "Zinkwerk / dakgoot", "Dakisolatie", "Dakraam / lichtkoepel"],
    voorbeeld: "Bijvoorbeeld: de zinken goot aan de voorkant lekt op meerdere plekken",
    belofte: "Douwe neemt zo snel mogelijk contact met u op."
  }
};
