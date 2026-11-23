// GEDATEC Gevel & Daktechniek (Den Haag). Bron: gedatec.nl (HTML-bron, site blijft wit) + Google (4,8 / 115). Foto's: eigen site + Google. Zie content.md.
window.SITE = {
  naam: "GEDATEC",
  plaats: "Den Haag",
  vak: "Dak- en gevelspecialist",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-op-foto.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 40,
  kleuren: { brand: "#1c1e21", accent: "#ec6a3c" },
  telefoon: "070 205 4205",
  telBel: "+31702054205",
  whatsapp: false,
  email: "info@gedatec.nl",
  adres: ["Hoogkarspelstraat 139", "2547 LM Den Haag"],
  kvk: "68676468",
  google: { score: "4,8", aantal: "115" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Gevel- en daktechniek uit Den Haag. Van kleine reparatie tot grote renovatie, voor particulieren, bedrijven, VvE's en vastgoedbeheerders.",

  hero: {
    regels: ["Dak en gevel,", "in vakkundige", "handen."],
    tekst: "Al meer dan 15 jaar vernieuwen, isoleren en herstellen we daken en gevels in Den Haag. Van een kleine reparatie tot de complete renovatie van uw woning of pand.",
    foto: "img/hero.jpg", fotoPos: "50% 45%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Dakdekkers van Gedatec leggen nieuwe dakpannen",
    donker: true,
    punten: ["Meer dan 15 jaar ervaring", "Dak én gevel uit één hand", "Vrijblijvende offerte"]
  },

  marquee: ["Platte daken", "Pannendaken", "Leien", "Shingles", "Dakisolatie", "Lood- en zinkwerk", "Dakgoten", "Voegwerk", "Metselwerk", "Gevelreiniging", "Impregneren", "Steigerverhuur"],

  intro: {
    kicker: "Over Gedatec",
    tekst: "Gedatec staat voor gevel- en daktechniek: vakmanschap, heldere afspraken en een eerlijke prijs. Ook de lastige klussen in koper, zink en lood pakken we graag aan.",
    stats: [
      { getal: "15+", label: "Jaar ervaring in dak en gevel" },
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "115", tel: 115, label: "Reviews op Google" }
    ]
  },

  diensten: {
    titel: "Alles voor uw dak en gevel",
    tekst: "Van een lekkende kilgoot tot een compleet nieuw dak met isolatie. Ook voor nieuwbouw, aanbouw en opbouw.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-isolatie.jpg", pos: "50% 55%", tekst: "Bitumineuze dakbedekking met een gemodificeerde toplaag (APP of SBS): lang mee, weinig onderhoud.",
        punten: ["Renovatie en nieuwbouw", "Isoleren in één keer mee", "Lichtkoepels en dakterrassen"] },
      { naam: "Pannen, leien en shingles", soort: "Pannendak", foto: "img/shingles.jpg", pos: "50% 50%", tekst: "Hellende daken die jaren tegen regen, wind, hagel en sneeuw kunnen. Leien vervangen we volgens de welstand.",
        punten: ["Dakpannen leggen en vervangen", "Hellend dak isoleren", "Velux dakramen"] },
      { naam: "Lood- en zinkwerk", soort: "Lood- en zinkwerk", foto: "img/zinkwerk.jpg", pos: "50% 50%", tekst: "Specialistisch werk in zink, koper en lood: van loodslabben bij de schoorsteen tot een volledig zinken dak.",
        punten: ["Dakkapellen en kilgoten", "Zinken goten en balkonvloeren", "Netjes aangeklopt en gepatineerd"] },
      { naam: "Dakinspectie en goten", soort: "Dakinspectie", foto: "img/dakgoot.jpg", pos: "50% 60%", tekst: "Eén keer per jaar laten controleren voorkomt dure schade. We kijken ook naar schoorsteen, goten, boeidelen en windveren.",
        punten: ["Goten schoonvegen", "Regenpijpen in pvc, zink en koper", "Rond of vierkant"] },
      { naam: "Voeg- en metselwerk", soort: "Voeg- en metselwerk", foto: "img/voegwerk.jpg", pos: "50% 50%", tekst: "Nieuwe voegen of scheuren in het metselwerk herstellen. We adviseren welke voeg het best bij uw gevel past.",
        punten: ["Alle soorten voegwerk", "Lateien en gevelverankering", "Betonherstel en balkonrenovatie"] },
      { naam: "Gevelreiniging en impregneren", soort: "Gevelreiniging", foto: "img/gevelreiniging.jpg", pos: "50% 50%", tekst: "Een schone, beschermde gevel die geen water meer opneemt en zichzelf bij elke regenbui schoonspoelt.",
        punten: ["Milieuvriendelijke reiniging", "Graffitiverwijdering", "Vocht- en vuilwering"] }
    ],
    meer: [
      { naam: "Voor iedereen", tekst: "Particulieren, bedrijven, woningbouwverenigingen, VvE's, bouwbedrijven en vastgoedbeheerders." },
      { naam: "Ook aan de gevel", tekst: "Stucwerk, schilderwerk, spouwisolatie en schoorsteenrenovatie." },
      { naam: "Steigerverhuur", tekst: "Renovatie- en rolsteigers voor werk in en rond uw pand. Vraag een vrijblijvende prijsopgave." }
    ]
  },

  voorNa: {
    titel: "Zie zelf het verschil",
    tekst: "Een paar klussen van dichtbij. Schuif over de foto om voor en na te vergelijken.",
    items: [
      { naam: "Gevel", voor: "img/vn-gevel-voor.jpg", na: "img/vn-gevel-na.jpg" },
      { naam: "Dakkapel", voor: "img/vn-dakkapel-voor.jpg", na: "img/vn-dakkapel-na.jpg" },
      { naam: "Garagedak", voor: "img/vn-garage-voor.jpg", na: "img/vn-garage-na.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Van rijtjeshuis tot flat",
    tekst: "Dakkapellen, platte daken en complete gevels: zo ziet ons werk eruit in en rond Den Haag.",
    items: [
      { foto: "img/flat-drone.jpg", label: "Gevel en dak", sub: "Een compleet appartementencomplex in de steigers", pos: "50% 50%" },
      { foto: "img/dakkapel-steiger.jpg", label: "Dakkapel", sub: "Nieuwe dakbedekking en zinkwerk", pos: "45% 40%" },
      { foto: "img/plat-skyline.jpg", label: "Plat dak", sub: "Nieuwe bitumen dakbedekking", pos: "50% 60%" },
      { foto: "img/hoogwerker.jpg", label: "Gevelwerk", sub: "Met de hoogwerker op hoogte", pos: "50% 40%" },
      { foto: "img/gevel-bus.jpg", label: "Gevelrenovatie", sub: "Steiger, bus en ploeg op locatie", pos: "50% 55%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ons dak is recent volledig vervangen en geïsoleerd en het resultaat is echt super. Vanaf het eerste contact was de communicatie prettig en duidelijk. De werkzaamheden zijn netjes en vakkundig uitgevoerd …", naam: "Robbert B." },
      { tekst: "Gedatec was snel ter plaatse voor een inventarisatie van een lekkage aan de dakkapel en heeft goede communicatie via de app tav de geplande werkzaamheden. Duidelijk en betrouwbaar!", naam: "Willem S." },
      { tekst: "De mannen hebben erg secuur en bekwaam vakwerk geleverd en het zeer netjes achtergelaten. … Rutger was erg meedenkend in het vinden van een passende oplossing en ook erg flexibel in de planning van het werk.", naam: "Daniel P." },
      { tekst: "Prettig dat er iemand langskwam voor de offerte zodat er even kon worden overlegd. … Ook tijdens de klus werd goed overlegd, en het werk is goed gedaan.", naam: "Hans G.", sterren: 4 },
      { tekst: "Fijne communicatie, denken mee en komen afspraken na. Hele fijne ervaring en goed werk.", naam: "Karen O." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Ook voor de moeilijke klussen",
    rol: "Gedatec Gevel & Daktechniek, Den Haag",
    tekst: [
      "Gedatec is gespecialiseerd in dak- en gevelwerk, met meer dan 15 jaar ervaring in de branche en hart voor de zaak. Zink, koper en lood is specialistisch werk, en daarom worden we regelmatig gevraagd voor de lastigere daken en gevels. Dat houdt ons scherp.",
      "Communicatie, betrouwbaarheid en kwaliteit staan bij ons voorop. Heldere afspraken en korte lijnen zijn voor ons vanzelfsprekend."
    ],
    foto: "img/over.jpg", fotoPos: "50% 50%", fotoAlt: "Vakman van Gedatec werkt aan de dakrand van een plat dak",
    knop: "Neem contact op"
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 35%",
    titel: "Benieuwd wat we voor uw pand kunnen doen?",
    tekst: "Vertel ons wat er speelt aan uw dak of gevel. We komen graag langs en maken een offerte op maat."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Bel, mail of laat hieronder een bericht achter. Bereikbaar van maandag tot en met donderdag 08:00-17:00 en vrijdag 08:00-13:00.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak", "Pannendak", "Lood- en zinkwerk", "Dakinspectie", "Voeg- en metselwerk", "Gevelreiniging", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de dakbedekking van onze aanbouw is aan vervanging toe, of het voegwerk laat los",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
