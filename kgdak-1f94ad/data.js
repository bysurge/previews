// KGdak (Amersfoort). Bron: kgdak.nl (alle pagina's) + Google (4,9 / 35). Zie content.md.
// Foto's: hun Google-profiel (eigen werk) + 1 foto van hun site. Logo: KG-logo van hun site, transparant gemaakt.
window.SITE = {
  naam: "KGdak",
  plaats: "Amersfoort",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "icoon",
  logoHoogte: 46,
  kleuren: { brand: "#161a1f", accent: "#b08a4e" },
  telefoon: "06 42 01 84 98",
  telefoonIntl: "31642018498",
  adres: ["Hogeweg 30", "3814 CE Amersfoort"],
  google: { score: "4,9", aantal: "35" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  waTekst: "App ons",
  voetTekst: "Dakdekker uit Amersfoort voor particulieren en bedrijven. Dakbedekking, isolatie, lekkages, goten, zink- en loodwerk.",

  hero: {
    regels: ["Uw dak in", "goede handen."],
    tekst: "KGdak levert duurzame en betrouwbare dakoplossingen voor particulieren en bedrijven. Van reparatie en lekkage tot renovatie of een compleet nieuw dak.",
    foto: "img/hero-plat-dak.jpg", fotoPos: "50% 45%", fotoPosMobiel: "45% 50%",
    fotoAlt: "Plat dak met nieuwe dakbedekking, van bovenaf gefotografeerd",
    donker: true,
    punten: ["4,9 op Google", "Vrijblijvende offerte", "Particulier en zakelijk"]
  },

  marquee: ["Bitumineuze dakbedekking", "Dakisolatie", "Lekkages", "Dakinspectie", "Dakgoten", "Zinkwerk", "Loodwerk", "Groendak", "Renovatie"],

  spoed: {
    titel: "Lekkage?",
    tekst: "Neem direct contact op. We komen zo snel mogelijk langs, zo nodig voor een spoedreparatie."
  },

  intro: {
    kicker: "KGdak",
    tekst: "Jarenlange ervaring in daktechniek, een persoonlijke aanpak en vakmanschap waar u op kunt rekenen. Voor reparaties, renovaties of een compleet nieuw dak.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "35", label: "Google-reviews" },
      { getal: "Snel", label: "Bij lekkage zo snel mogelijk langs" },
      { getal: "Vrijblijvend", label: "Offerte en advies" }
    ]
  },

  diensten: {
    titel: "Wat we voor uw dak doen",
    tekst: "Neem gerust contact op voor meer informatie of een vrijblijvende offerte.",
    items: [
      { naam: "Dakbedekking en renovatie", foto: "img/pannendak.jpg", pos: "50% 60%",
        tekst: "Repareren of vervangen om de levensduur van uw dak te verlengen. Eerst een grondige inspectie, daarna bespreken we samen wat nodig is.",
        punten: ["Bitumineuze dakbedekking", "Lichtkoepels en extra wensen", "Voorbereiden van een groendak"] },
      { naam: "Lekkage en inspectie", foto: "img/dakraam.jpg", pos: "50% 50%",
        tekst: "We sporen lekkages op en verhelpen ze. Na een inspectie krijgt u een duidelijk rapport met aanbevelingen.",
        punten: ["Lekkage opsporen en verhelpen", "Spoedreparatie als het nodig is", "Rapport met aanbevelingen"] },
      { naam: "Isolatie", foto: "img/plat-dak-airco.jpg", pos: "50% 50%",
        tekst: "Minder warmteverlies, meer wooncomfort en lagere stookkosten. We adviseren welk isolatiemateriaal past bij uw wensen en budget.",
        punten: ["Diverse isolatiematerialen", "Advies op maat", "Vaak mee bij een renovatie"] },
      { naam: "Goten, zink en lood", foto: "img/dakgoot.jpg", pos: "50% 50%",
        tekst: "Aanleg en reparatie van dakgoten, zinkwerk, loodwerk en dakbeslag, plus afvoer voor regenwater en beluchtingspijpen.",
        punten: ["Dakgoten aanleggen en repareren", "Zinkwerk en loodwerk", "Regenwaterafvoer"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk", navNaam: "Projecten",
    titel: "Recent werk",
    tekst: "Platte daken, lichtkoepels, goten en zinkwerk.",
    items: [
      { foto: "img/lichtkoepel.jpg", label: "Lichtkoepel", sub: "Ingewerkt in plat dak", pos: "50% 50%" },
      { foto: "img/zinkwerk.jpg", label: "Zinkwerk", sub: "Langs de dakpannen", pos: "50% 50%" },
      { foto: "img/bitumen.jpg", label: "Dakbedekking", sub: "Bitumen", pos: "50% 40%" },
      { foto: "img/dakrand.jpg", label: "Dakrand", sub: "Netjes afgewerkt", pos: "50% 50%" },
      { foto: "img/plat-dak-2.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Duidelijk en persoonlijk, van eerste contact tot oplevering.",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er speelt. Een foto van uw dak meesturen helpt." },
      { naam: "Inspectie", tekst: "We bekijken uw dak grondig en bespreken wat er nodig is." },
      { naam: "Vrijblijvende offerte", tekst: "Inclusief uw extra wensen, zoals isolatie of een lichtkoepel." },
      { naam: "Vakkundig uitgevoerd", tekst: "Met vakmanschap, kwaliteit en een persoonlijke aanpak." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Super tevreden over deze mannen. Communiceren helder, zijn goed bereikbaar en snel beschikbaar. … Waar anderen zouden afhaken bleven zij zoeken tot ze het gevonden hadden.", naam: "MNJ Meuwissen" },
      { tekst: "Dakkapel had onderhoud nodig en de schoorsteen moest gerenoveerd worden vanwege lekkage. De mannen hebben top werk geleverd voor een zeer goeie prijs. Contact is snel en prettig.", naam: "Herman Z." },
      { tekst: "Zeer tevreden met hun snelle service, deskundig advies, positieve benadering en het afgeleverde werk.", naam: "Remi A." }
    ]
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel of app ons, of laat hieronder een bericht achter. Bij lekkage komen we zo snel mogelijk langs.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Dakbedekking", "Lekkage", "Dakinspectie", "Isolatie", "Goten, zink of lood", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het lekt bij de dakkapel na de laatste storm",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
