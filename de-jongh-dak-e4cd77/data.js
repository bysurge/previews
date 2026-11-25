// De Jongh Dak en Bouwservice (Helmond). Bron: dejonghdakenbouw.nl (alle pagina's) + Google (4,9 / 402), opgehaald 25-11-2026. Zie content.md.
// Foto's: eigen Google-profiel (g01-g11) + 1 eigen foto van hun site (p-dakrand). De overige sitefoto's zijn stock en niet gebruikt.
window.SITE = {
  naam: "De Jongh Dak en Bouwservice",
  kortNaam: "De Jongh",
  plaats: "Helmond",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoKlein: "img/icoon.png",
  logoVorm: "icoon",
  logoHoogte: 40,
  logoWit: "img/logo-wit.png",
  kleuren: { brand: "#10243d", accent: "#e9a03b" },
  telefoon: "06 43 43 91 75",
  telefoonIntl: "31643439175",
  telefoon2: "0492 - 77 90 75",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of foto",
  email: "info@dejonghdakenbouw.nl",
  adres: ["Duizeldonksestraat 1B", "5705 CA Helmond"],
  kvk: "73641022",
  google: { score: "4,9", aantal: "402" },
  ctaTekst: "Vraag een prijsindicatie",
  navCta: "Offerte",
  voetTekst: "Dakdekker in Helmond en omgeving. Daklekkages, dakreparaties, dakbedekking en onderhoud, met rechtstreeks contact met de vakman.",

  hero: {
    regels: ["Lekt uw dak?", "Wij lossen", "het op."],
    tekst: "Dakdekker in Helmond en omgeving, gespecialiseerd in daklekkages, dakreparaties en dakonderhoud. Snelle service en duidelijk advies, zonder gedoe.",
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 55%",
    fotoAlt: "Strak afgewerkt plat dak met lichtkoepels naast een dakkapel",
    donker: true,
    punten: ["10 jaar garantie", "Rechtstreeks contact met de vakman", "Meer dan 20 jaar ervaring"]
  },

  marquee: ["Daklekkage", "Dakreparatie", "Bitumen", "EPDM", "PVC", "Dakpannen", "Zinken dakgoten", "Dakonderhoud", "Dakisolatie", "Lichtkoepels", "Dakkapellen"],

  spoed: {
    titel: "Lekt uw dak?",
    tekst: "We zijn goed bereikbaar en snel ter plaatse. Stuur gerust een foto, dan kijken we meteen mee."
  },

  intro: {
    kicker: "De Jongh Dak en Bouwservice",
    tekst: "Een dak in prima conditie voorkomt lekkages en onverwachte kosten. Wij helpen u daarbij: van een snelle reparatie tot een complete nieuwe dakbedekking, met advies op maat.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "402", tel: 402, label: "Reviews op Google" },
      { getal: "20+", tel: 20, label: "Jaar ervaring" },
      { getal: "10 jaar", label: "Garantie" }
    ]
  },

  diensten: {
    titel: "Alles voor uw dak",
    tekst: "Platte en hellende daken, reparatie, renovatie en nieuwbouw. U spreekt altijd direct met de vakman.",
    items: [
      { naam: "Daklekkage", soort: "Daklekkage", foto: "img/lekkage.jpg", pos: "50% 50%",
        tekst: "Ouderdom, verstoppingen of stormschade: we sporen de oorzaak snel op. Onze werkbus is volledig ingericht, zodat we de lekkage meteen kunnen repareren.",
        punten: ["Opsporen, vaststellen en repareren", "Volledig ingerichte werkbus", "Snel ter plaatse"] },
      { naam: "Dakbedekking", soort: "Dakbedekking", foto: "img/dakbedekking.jpg", pos: "50% 50%",
        tekst: "PVC, EPDM, bitumen of dakpannen. We inspecteren uw dak grondig, luisteren naar uw wensen en geven een eerlijk advies met een passende offerte.",
        punten: ["Reparatie, renovatie en nieuwbouw", "Alle soorten dakbedekking", "Advies op maat"] },
      { naam: "Dakonderhoud", soort: "Onderhoud", foto: "img/onderhoud.jpg", pos: "50% 40%",
        tekst: "Periodiek onderhoud voorkomt problemen. We reinigen de waterloop en controleren toplaag, naden, afvoeren, dakrand en aansluitingen. U krijgt een verslag met foto's en advies.",
        punten: ["Inspectie en reiniging", "Verslag met foto's", "Geen onverwachte kosten"] },
      { naam: "Daglicht", soort: "Daglicht", foto: "img/daglicht.jpg", pos: "50% 50%",
        tekst: "Meer licht in huis met een lichtkoepel of lichtstraat. We leveren en monteren ook terrasoverkappingen.",
        punten: ["Heldere en opaal lichtkoepels", "Lichtstraten", "Terrasoverkappingen"] }
    ],
    meer: [
      { naam: "Dakgoten", tekst: "Nieuwe zinken goten en regenpijpen leveren en monteren, of uw bestaande goot laten repareren." },
      { naam: "Dakkapellen", tekst: "Samen met vaste partners plaatsen we een nieuwe dakkapel. Een bestaande dakkapel isoleren we of we vervangen boeiboorden, zijwangen en loodslabben." },
      { naam: "Dakisolatie", tekst: "We isoleren alle soorten daken, schuin, hellend of plat. Zo bespaart u op uw energiekosten." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Strak en waterdicht",
    tekst: "Een greep uit onze klussen in Helmond en omgeving.",
    items: [
      { foto: "img/p-plat.jpg", label: "Plat dak", sub: "Nieuwe bitumen dakbedekking", pos: "50% 55%" },
      { foto: "img/p-luifel.jpg", label: "Luifel", sub: "Opnieuw afgewerkt", pos: "50% 50%" },
      { foto: "img/p-dakrand.jpg", label: "Dakrand", sub: "Strak afgewerkte rand", pos: "50% 50%" },
      { foto: "img/p-koepels.jpg", label: "Lichtkoepels", sub: "Strak ingewerkt in het platte dak", pos: "50% 50%" },
      { foto: "img/p-detail.jpg", label: "Detail", sub: "Nette aansluiting rond de afvoer", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Snel, duidelijk en zonder gedoe.",
    stappen: [
      { naam: "U neemt contact op", tekst: "Bel, app of mail. Stuur gerust een foto van het probleem mee." },
      { naam: "Inspectie", tekst: "We bekijken uw dak grondig en zoeken de oorzaak." },
      { naam: "Advies en offerte", tekst: "U krijgt een eerlijk advies op maat met een passende offerte." },
      { naam: "Uitvoering", tekst: "We voeren het werk vakkundig uit en laten de plek netjes achter." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie",
    tekst: "We leveren vakwerk en staan daarvoor in. Daarom krijgt u 10 jaar garantie.",
    lijst: {
      titel: "Waarom De Jongh?",
      punten: [
        "Goed bereikbaar en snel ter plaatse",
        "Rechtstreeks contact met de vakman",
        "Advies en offerte op maat",
        "Meer dan 20 jaar ervaring",
        "Voor platte en hellende daken"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ik vertelde de eigenaar vorige week nog dat ik nooit meer een bedrijf tegen kom die a) de telefoon op neemt, b) meteen terug belt na een vraag, snel acteert … Heb je iets aan je dak.. niet nadenken en meteen De Jongh bellen.", naam: "Rene Van de Poel" },
      { tekst: "We hadden last van lekkage door achterstallig onderhoud en versleten lood, wat zij zeer professioneel hebben aangepakt. … Een betrouwbare en vakkundige partij die we zeker kunnen aanbevelen!", naam: "Nita S-M" },
      { tekst: "Al snel was het probleem gevonden en heeft hij dit opgelost. Dit was binnen een uurtje gedaan, tussendoor ontving ik foto's via WhatsApp om te laten zien wat er aan de hand was.", naam: "Lisanne Hofs" },
      { tekst: "Onlangs onze dakbedekking laten vernieuwen door De Jongh Dak- en Bouwservice. Van begin tot eind zijn we zeer tevreden over de service en het vakmanschap.", naam: "Willem Vriens" },
      { tekst: "Een lekkage was snel vakkundig verholpen. … Trekt zijn schoenen uit, vraagt de stofzuiger. Heel bijzonder! Echt een aanrader!!", naam: "Maja Van Hout" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Dé dakdekker in de regio Helmond",
    rol: "Dakdekker voor particulieren in Helmond en omgeving",
    tekst: [
      "De Jongh Dak en Bouwservice is ervaren in de dakdekkerswereld. We doen dakbeheer, onderhoud, reparatie, nieuwbouw en renovatie van alle daken in Helmond en omstreken.",
      "Onze lijnen zijn kort: u heeft altijd direct contact met de vakman. Zo weet u snel waar u aan toe bent."
    ],
    foto: "img/over.jpg", fotoPos: "50% 60%", fotoAlt: "Nieuw pannendak en plat dak onder een blauwe lucht",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  contact: {
    titel: "Vraag een prijsindicatie aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. We zijn bereikbaar van maandag tot en met vrijdag, 09:00 tot 18:00.",
    formTitel: "Prijsindicatie aanvragen",
    onderwerpen: ["Daklekkage", "Dakbedekking", "Onderhoud", "Dakgoten", "Daglicht", "Anders"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen langs de lichtkoepel op ons platte dak",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
