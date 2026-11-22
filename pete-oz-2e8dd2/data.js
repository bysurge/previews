// Pete Oz Klussenbedrijf (Rotterdam-West). GEEN eigen website: alles uit zijn Google-profiel (22-11-2026).
// Google 4,8 uit 63 reviews. Logo zelf gemaakt (monogram PO + wordmark). Foto's: zijn Google-foto's.
window.SITE = {
  naam: "Pete Oz Klussenbedrijf",
  kortNaam: "Pete Oz",
  plaats: "Rotterdam",
  titelExtra: "Klusbedrijf en schilder in Rotterdam",
  logo: "img/logo-po.png",
  logoMetNaam: true,
  kleuren: { brand: "#1f2a33", accent: "#d39a5b" },
  telefoon: "06 84 61 91 90",
  telefoonIntl: "31684619190",
  waTekst: "App Pete",
  adres: ["Geuzenstraat 4A", "3023 PG Rotterdam"],
  google: { score: "4,8", aantal: "63" },
  navCta: "Klus aanvragen",
  ctaTekst: "Vraag een prijs aan",
  voetTekst: "Klusbedrijf, timmerman en schilder in Rotterdam. Sloop en renovatie, houtrot herstellen en alle klussen in en om het huis.",

  hero: {
    regels: ["Vakwerk aan", "uw huis, binnen", "en buiten."],
    tekst: "Timmerwerk, schilderwerk, sloop en renovatie en houtrot herstellen in Rotterdam. Eén vakman die netjes werkt en zijn afspraken nakomt.",
    foto: "img/hero-dakkapel.jpg", fotoPos: "50% 40%", fotoPosMobiel: "72% 50%",
    fotoAlt: "Monumentale houten dakkapel, kaal geschuurd voor herstel en nieuw schilderwerk"
  },

  marquee: ["Timmerwerk", "Schilderwerk", "Sloop en renovatie", "Houtrot herstellen", "Deuren vervangen", "Kozijnen", "Tv- en kastmontage", "Kleine reparaties"],

  intro: {
    kicker: "Over Pete Oz",
    tekst: "Een rotte kozijnhoek, een deur die klemt of een complete verbouwing: Pete pakt het aan. Klusser, timmerman en schilder in één, dus u heeft één aanspreekpunt van begin tot eind.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "63", tel: 63, label: "Reviews op Google" },
      { getal: "24 uur", label: "Per dag bereikbaar" },
      { getal: "5", tel: 5, label: "Vakgebieden, één vakman" }
    ]
  },

  diensten: {
    titel: "Van kleine klus tot renovatie",
    tekst: "Stuur Pete een paar foto's van uw klus via WhatsApp. Dan weet u snel waar u aan toe bent.",
    items: [
      { naam: "Schilderwerk", foto: "img/kozijnen-na.jpg", tekst: "Binnen en buiten: kozijnen, deuren, gevels en muren. Strak en netjes afgewerkt.",
        punten: ["Buitenschilderwerk", "Binnenschilderwerk", "Kozijnen en deuren"] },
      { naam: "Timmerwerk", foto: "img/lichtstraat.jpg", tekst: "Kozijnen, lichtstraten, deuren en constructies van hout, op maat gemaakt en geplaatst.",
        punten: ["Kozijnen en lichtstraten", "Deuren vervangen", "Maatwerk in hout"] },
      { naam: "Houtrot herstellen", foto: "img/houtrot.jpg", tekst: "Rot hout wordt opgespoord, verwijderd en hersteld, zodat uw kozijn of deur weer jaren meegaat.",
        punten: ["Rotte delen eruit", "Vakkundig herstellen", "Daarna gronden en lakken"] },
      { naam: "Sloop en renovatie", foto: "img/regelwerk.jpg", pos: "50% 40%", tekst: "Oude delen eruit, nieuwe erin. Van een uitbouw tot een complete gevel of ruimte.",
        punten: ["Slopen en afvoeren", "Nieuw regelwerk en wanden", "Alles in één hand"] }
    ],
    meer: [
      { naam: "Deuren", tekst: "Voordeur, achterdeur of binnendeur: repareren, vervangen en afhangen." },
      { naam: "Montage", tekst: "Een tv-meubel stevig aan de muur, kasten ophangen of lampen netjes aansluiten." },
      { naam: "Kleine klussen", tekst: "Die ene reparatie waar u zelf niet aan toekomt. Geen klus te klein." }
    ]
  },

  voorNa: {
    titel: "Zie het verschil",
    tekst: "Sleep over de foto. Links hoe Pete het aantrof, rechts hoe hij het achterliet.",
    items: [
      { naam: "Kozijnen", voor: "img/kozijnen-voor.jpg", na: "img/kozijnen-na.jpg" }
    ]
  },

  galerij: {
    vorm: "recht", navNaam: "Werk", kicker: "Uit de praktijk",
    titel: "Pete aan het werk",
    tekst: "Een greep uit lopende klussen in en rond Rotterdam.",
    items: [
      { foto: "img/dakkapel.jpg", label: "Dakkapel", sub: "Kaal geschuurd voor herstel" },
      { foto: "img/lichtstraat.jpg", label: "Lichtstraat", sub: "Nieuw kozijn in hardhout" },
      { foto: "img/houtrot.jpg", label: "Houtrot", sub: "Rotte delen opsporen" },
      { foto: "img/regelwerk.jpg", label: "Renovatie", sub: "Nieuw regelwerk bij de achtergevel" },
      { foto: "img/dakgoot.jpg", label: "Dakrand", sub: "Nieuwe goot in de maak" },
      { foto: "img/dak.jpg", label: "Plat dak", sub: "Met lichtkoepel" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt Pete",
    tekst: "Duidelijke afspraken en een eerlijke prijs. Dat is waar klanten hem op Google het vaakst om noemen.",
    foto: "img/voordeur.jpg", fotoPos: "50% 45%", fotoAlt: "Oude voordeur, kaal geschuurd en klaar voor herstel",
    stappen: [
      { naam: "Stuur een bericht", tekst: "Vertel via WhatsApp wat u wilt laten doen, het liefst met een paar foto's." },
      { naam: "Afspraken", tekst: "Pete kijkt naar de klus en samen spreekt u prijs en planning af." },
      { naam: "Aan de slag", tekst: "Hij komt wanneer afgesproken en werkt netjes en vlot door." },
      { naam: "Oplevering", tekst: "Samen loopt u het resultaat na. Alles wordt schoon achtergelaten." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Pete heeft bij ons een lamp opgehangen en onze achterdeur gerepareerd. Uitstekend werk, werkte netjes en kwam al zijn afspraken na. Daarnaast rekent hij een eerlijke prijs.", naam: "Paul Malherbe" },
      { tekst: "Pete heeft bij ons de buitenkant geschilderd, een echte vakman, ziet er allemaal strak en netjes uit.", naam: "Stijn van der Laan" }
    ]
  },

  werkgebied: {
    titel: "Thuis in Rotterdam",
    tekst: "Pete werkt vanuit de Geuzenstraat in Rotterdam-West. Twijfelt u of hij bij u in de buurt komt? Stuur gerust een bericht."
  },

  faq: [
    { v: "Doet Pete ook kleine klussen?", a: "Ja. Een lamp ophangen, een tv-meubel aan de muur of een deur die klemt: ook daarvoor kunt u Pete appen." },
    { v: "Hoe vraag ik een prijs aan?", a: "Stuur een WhatsApp met een korte omschrijving en een paar foto's, of vul het formulier hieronder in. Pete laat snel weten wat hij voor u kan doen." },
    { v: "Wanneer is Pete bereikbaar?", a: "U kunt Pete altijd een bericht sturen, hij is 24 uur per dag bereikbaar." }
  ],

  band: {
    foto: "img/dak.jpg", fotoPos: "50% 35%",
    titel: "Klus in gedachten?",
    tekst: "Stuur Pete een bericht met een paar foto's. Dan hoort u snel wat hij voor u kan doen."
  },

  contact: {
    titel: "Vertel wat u wilt laten doen",
    tekst: "Vul het formulier in of stuur direct een WhatsApp. Pete reageert snel.",
    formTitel: "Klus aanvragen",
    onderwerpen: ["Schilderwerk", "Timmerwerk", "Houtrot herstellen", "Sloop en renovatie", "Deuren", "Kleine klus"],
    voorbeeld: "Bijvoorbeeld: kozijnen aan de achterkant hebben houtrot en moeten geschilderd worden",
    belofte: "Pete neemt zo snel mogelijk contact met u op."
  }
};
