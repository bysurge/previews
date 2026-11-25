// Bodek Bouw (Assen). Eigen site: kale Google Sites-pagina (3 lege subpagina's). Inhoud van bodekbouw.nl +
// Google-profiel (5,0 / 15), 25-11-2026. Logo zelf gemaakt (woordmerk; hun eigen logo is alleen een klein rond badge).
// Foto's: Google-profiel + eigen site. Geen stock.
window.SITE = {
  naam: "Bodek Bouw",
  kortNaam: "Bodek Bouw",
  plaats: "Assen",
  vak: "Dakdekker",
  logo: "img/logo.svg", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.svg", logoOpFoto: "img/logo-wit.svg", logoHoogte: 38,
  kleuren: { brand: "#1f2a2e", accent: "#d08a3c" },
  telefoon: "06 23 96 99 09",
  telefoonIntl: "31623969909",
  email: "bodekbouw7@gmail.com",
  kvk: "93087896",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  adres: ["Assen"],
  google: { score: "5,0", aantal: "15" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Dakdekkers- en timmerbedrijf uit Assen. Platte en schuine daken, goten en dakranden.",

  hero: {
    regels: ["Uw dak in", "vakkundige handen."],
    tekst: "Dakdekkers- en timmerbedrijf uit Assen. Platte en schuine daken, reparaties, dakramen, goten en dakranden. Eerlijk advies, net werk.",
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 40%",
    fotoAlt: "Nieuw rood pannendak onder een blauwe lucht",
    donker: true,
    punten: ["Snel langs om te kijken", "Dakdekker én timmerman", "Ma t/m vr van 7 tot 17 uur"]
  },

  marquee: ["Platte daken", "Schuine daken", "Dakreparaties", "Dakramen", "Dakgoten", "Dakranden", "Daktrim", "Loodwerk", "Timmerwerk"],

  spoed: {
    titel: "Lekkage? App of bel ons.",
    tekst: "Klanten vertellen dat we vaak de volgende dag al kwamen kijken. Stuur gerust een foto mee."
  },

  intro: {
    kicker: "Bodek Bouw",
    tekst: "Van een losse nokvorst tot een complete dakrenovatie: we werken netjes en nauwkeurig, geven eerlijk advies en combineren Pools vakmanschap met Nederlandse normen.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "15", tel: 15, label: "Reviews op Google" },
      { getal: "Dak", label: "En timmerwerk" },
      { getal: "Assen", label: "En omgeving" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Voor woningen en bedrijven in Assen en de regio. Elke klus krijgt eerst een duidelijke offerte.",
    items: [
      { naam: "Schuine daken", soort: "Pannendaken", foto: "img/schilddak-lucht.jpg", pos: "50% 50%", tekst: "Nieuwe pannen, nokvorsten weer vast en het dakbeschot eronder waar nodig vervangen.",
        punten: ["Pannendaken", "Nokvorsten", "Rot dakbeschot vervangen"] },
      { naam: "Platte daken", soort: "Bitumen", foto: "img/plat-dak-bitumen.jpg", pos: "50% 50%", tekst: "Een nieuw plat dak op uw woning, aanbouw of bedrijfspand, strak afgewerkt tot in de randen.",
        punten: ["Nieuwe dakbedekking", "Nieuwe ondergrond", "Woningen en bedrijven"] },
      { naam: "Goten en dakranden", soort: "Afwerking", foto: "img/dakrand.jpg", pos: "50% 50%", tekst: "Dakgoten, daktrim en dakrandafwerking, en lood waar het dak op de gevel aansluit.",
        punten: ["Gootwerk", "Daktrim", "Loodslabben"] },
      { naam: "Dakramen en timmerwerk", soort: "Timmerbedrijf", foto: "img/dakkapel.jpg", pos: "50% 50%", tekst: "Een dakraam plaatsen, een rot overstek vervangen of een dakkapel opknappen: ook het timmerwerk doen we zelf.",
        punten: ["Dakramen", "Overstekken", "Dakkapellen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit onze daken in en rond Assen.",
    items: [
      { foto: "img/schilddak-boven.jpg", label: "Schilddak", sub: "Nieuw pannendak", pos: "50% 50%" },
      { foto: "img/pannendak-zwart.jpg", label: "Pannendak", sub: "Strak afgewerkt", pos: "50% 40%" },
      { foto: "img/plat-dak.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 60%" },
      { foto: "img/nok.jpg", label: "Nok", sub: "Nokvorsten vastgezet", pos: "50% 60%" },
      { foto: "img/plat-dak-bedrijf.jpg", label: "Bedrijfspand", sub: "Plat dak", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Persoonlijk, snel en zonder verrassingen achteraf.",
    foto: "img/dakbeschot.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuw dakbeschot op een plat dak",
    stappen: [
      { naam: "App of mail", tekst: "Stuur een foto van uw dak, dan kijken we meteen mee." },
      { naam: "We komen kijken", tekst: "Vaak al snel, en we nemen de tijd om goed te luisteren." },
      { naam: "Duidelijke offerte", tekst: "Vooraf helder wat het kost. Geen verrassingen bij de afrekening." },
      { naam: "Netjes gemaakt", tekst: "Duurzaam en nauwkeurig, en alles netjes achtergelaten." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Onze nokvorsten zaten niet meer vast waardoor er lekkage is ontstaan. Ze hebben het rotte dakbeschot vervangen, lood aangebracht en de nok weer vastgezet. Daarnaast namen ze het schoonmaken van de dakgoten ook nog even mee.", naam: "Ian t." },
      { tekst: "Ze kwamen de volgende dag al kijken en konden de werkzaamheden snel inplannen. Eerst netjes een offerte gekregen en bij de afrekening geen verrassingen.", naam: "Erik W." },
      { tekst: "Jakub heeft de loodslab tussen mijn huis en garage vervangen. Ik ben zeer tevreden over de kwaliteit, de prijs en de communicatie.", naam: "Joris W." },
      { tekst: "We hadden een lekkage in het dak van ons huis. De mannen kwamen meteen om ons te helpen … Het probleem is niet teruggekomen.", naam: "Andżelika Z." }
    ]
  },

  werkgebied: {
    titel: "Assen en omgeving",
    tekst: "Door ons vaste werkgebied zijn we altijd dichtbij en kunnen we snel komen kijken. Twijfelt u of we bij u komen? Stuur gerust een berichtje."
  },

  band: {
    foto: "img/schilddak-lucht.jpg", fotoPos: "50% 50%",
    titel: "Even een foto sturen?",
    tekst: "App een foto van uw dak, dan kijken we mee en hoort u snel wat er nodig is."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "App, bel of mail ons, of laat hieronder een bericht achter. We zijn open van maandag tot en met vrijdag, van 7 tot 17 uur, en op afspraak.",
    formTitel: "Aanvraag",
    onderwerpen: ["Daklekkage", "Schuin dak", "Plat dak", "Goten of dakrand", "Dakraam", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de nokvorsten zitten los en het lekt op zolder",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
