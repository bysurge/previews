// ROS&BERG Vastgoed Onderhoud (Helmond). Bron: rosenberg-vastgoedonderhoud.nl + Google (4,9 / 42). Foto's: eigen site. Zie content.md.
window.SITE = {
  naam: "ROS&BERG Vastgoed Onderhoud",
  kortNaam: "ROS&BERG",
  plaats: "Helmond",
  vak: "Dak- en gevelspecialist",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 36,
  kleuren: { brand: "#0f2236", accent: "#4f9fd9" },
  telefoon: "0492 700 235",
  telBel: "+31492700235",
  whatsapp: false,
  email: "info@rosenberg-vastgoedonderhoud.nl",
  adres: ["Steenovenweg 5", "5708 HN Helmond"],
  google: { score: "4,9", aantal: "42" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "De dak- en gevelspecialist uit Helmond. Dakcoating, dakreiniging, goten, dakkapellen, gevels en schoorstenen, al meer dan 25 jaar.",

  hero: {
    regels: ["Dak en gevel,", "alles onder", "één dak."],
    tekst: "Dakcoating, dakreiniging, goten, dakkapellen, gevels en schoorstenen. Al meer dan 25 jaar, voor particulieren en bedrijven.",
    foto: "img/hero-schoorsteen.jpg", fotoPos: "50% 40%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Drie vakmensen van ROS&BERG aan het werk bij een schoorsteen op een pannendak",
    donker: true,
    punten: ["25 jaar ervaring", "Duidelijk vooraf en transparant", "Intensieve nazorg"]
  },

  marquee: ["Dakcoating", "Dakreiniging", "Dak ontmossen", "Goten", "Dakrenovatie", "Dakkapellen", "Gevelreiniging", "Gevelrenovatie", "Schoorstenen", "Scheurherstel", "Schilderwerk"],

  intro: {
    kicker: "Over ROS&BERG",
    tekst: "Problemen aan dak en gevel komen vaak samen. Daarom doen wij allebei. We komen altijd eerst kijken, geven eerlijk advies en zeggen het ook als iets niet nodig is.",
    stats: [
      { getal: "25+", label: "Jaar ervaring" },
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "42", tel: 42, label: "Reviews op Google" },
      { getal: "VCA", label: "Gecertificeerd, dak én gevel" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd en erkend",
  keurmerken: [
    { naam: "VCA", sub: "Veilig werken, dak en gevel" },
    { naam: "Erkend leerbedrijf", sub: "Wij leiden vakmensen op" },
    { naam: "ISO 9001", sub: "Kwaliteit, SGS", logo: "img/merk-iso9001.png" },
    { naam: "ISO 14001", sub: "Milieu, SGS", logo: "img/merk-iso14001.png" }
  ],

  diensten: {
    titel: "Van dakpan tot schoorsteen",
    tekst: "Alle specialismen onder één dak, voor woningen en bedrijfspanden. U heeft maar met één partij te maken.",
    items: [
      { naam: "Dakcoating", soort: "Dakcoating", foto: "img/dakcoating.jpg", pos: "50% 50%", tekst: "Zijn de pannen nog goed? Dan is coaten vaak beter én goedkoper dan vervangen. Na reinigen spuiten we de coating erop: uw dak ziet er weer als nieuw uit.",
        punten: ["Geen nieuwe pannen nodig", "Ontmossen en reinigen vooraf", "Jaren extra bescherming"] },
      { naam: "Dakreiniging en ontmossen", soort: "Dakreiniging", foto: "img/dakreiniging.jpg", pos: "50% 50%", tekst: "Mos en algen tasten uw pannen aan en zorgen voor barsten en lekkages. Een schoon dak voorkomt grotere kosten.",
        punten: ["Mos, algen en vuil weg", "Impregneren of coaten erbij", "Ook leien en sneldek"] },
      { naam: "Goten", soort: "Goten", foto: "img/goot.jpg", pos: "50% 50%", tekst: "Lekt uw goot? Vervangen is niet altijd nodig. Van standaard goot tot bakgoot en mastgoot, van zinkwerk tot timmerwerk.",
        punten: ["Zinken dakgoten", "Bak- en mastgoten", "Reparatie of vervanging"] },
      { naam: "Dakrenovatie en dakkapellen", soort: "Dakrenovatie / dakkapel", foto: "img/dakkapel.jpg", pos: "50% 40%", tekst: "Nieuwe pannen, isolatie aan de buitenkant of een dakkapel met houtrot of lekkage: we renoveren het compleet.",
        punten: ["Nieuwe pannen en isolatie", "Dakkapel in kunststof of Keralit", "Nieuwbouw, plat en hellend"] },
      { naam: "Gevelwerken", soort: "Gevel", foto: "img/gevelreiniging.jpg", pos: "50% 40%", tekst: "Gevelreiniging zonder schade, gevelrenovatie, voegwerk, scheurherstel en gevel schilderen. Ook voor bedrijfspanden.",
        punten: ["Reinigen en impregneren", "Voegen en scheurherstel", "Gevel schilderen of spuiten"] },
      { naam: "Schoorsteenrenovatie", soort: "Schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 45%", tekst: "De schoorsteen is de nummer 1 oorzaak van daklekkage. We vervangen loodwerk, herstellen voegen en dichten hem netjes af.",
        punten: ["Nieuw loodwerk", "Voegwerk en afdekking", "Renoveren of verwijderen"] }
    ],
    meer: [
      { naam: "Schilderwerk", tekst: "Binnen- en buitenschilderwerk, bedrijfspanden schilderen en houtrot repareren." },
      { naam: "Bedrijfspanden", tekst: "Damwanden en gevels reinigen, met een eigen plan van aanpak en minimale overlast." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Recent werk",
    titel: "Daken die weer stralen",
    tekst: "Van Helmond tot Eindhoven, Someren, Weert en Roermond: zo laten we een dak of gevel achter.",
    items: [
      { foto: "img/villa.jpg", label: "Dakwerk", sub: "Villa met pannendak", pos: "50% 55%" },
      { foto: "img/avond.jpg", label: "Woonhuis", sub: "Strak dak, klaar voor jaren", pos: "50% 50%" },
      { foto: "img/blauw-dak.jpg", label: "Woonhuis", sub: "Pannendak en dakkapellen", pos: "50% 50%" },
      { foto: "img/someren.jpg", label: "Gevelreiniging bedrijfspand", sub: "Someren", pos: "50% 50%" },
      { foto: "img/luchtfoto.jpg", label: "Dakwerk", sub: "Woning aan het water", pos: "50% 55%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan eerlijk advies",
    tekst: "Overweegt u een dakrenovatie, maar is coaten beter? Dan hoort u dat van ons.",
    foto: "img/team.jpg", fotoPos: "50% 40%", fotoAlt: "Vakmensen van ROS&BERG aan het werk aan een gevel",
    stappen: [
      { naam: "Inspectie bij u thuis", tekst: "We komen altijd eerst langs om uw dak of gevel te bekijken." },
      { naam: "Eerlijk advies", tekst: "We herkennen problemen snel en vertellen wat de beste oplossing is. Zien we ook iets aan de gevel, dan zeggen we het." },
      { naam: "Duidelijke offerte", tekst: "Vooraf helder en transparant: werkzaamheden en werkwijze duidelijk uitgesplitst." },
      { naam: "Uitvoering en nazorg", tekst: "Netjes en snel uitgevoerd, en daarna intensieve nazorg." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "De mannen van Ros&Berg hebben bij ons 4 schoorstenen gerenoveerd (loodwerk vervangen, voegwerk, afdichten aan bovenzijde en hydrofoberen). Dat hebben ze heel netjes en snel uitgevoerd. Complimenten!", naam: "Frank M." },
      { tekst: "Ontzettend blij met hoe snel en netjes alles is geregeld! Mijn dakgoot was binnen no-time vervangen en ze hebben daarbij echt goed rekening gehouden met mijn overkapping. Alles zonder gedoe en super strak afgewerkt.", naam: "Ozkan M." },
      { tekst: "De uit te voeren werkzaamheden waren duidelijk uitgesplitst en ook de werkwijze was duidelijk omschreven. … In goed overleg hebben ze zelfs op de zon en feestdagen gewerkt om tijdig klaar te zijn. … Zij leveren goed werk, geven een duidelijke offerte en doen wat ze zeggen.", naam: "F. Strauven" },
      { tekst: "Ze hebben ons pand (BouwQ), en daarnaast bij meerdere panden op hetzelfde terrein een gevelrenovatie en een gevelreiniging uitgevoerd. … Professioneel, vriendelijk en met een topresultaat. Zeker een aanrader!", naam: "Bert L." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Alles onder één dak",
    rol: "Dak- en gevelspecialist uit Helmond, al 25 jaar",
    tekst: [
      "Mos op het dak groeit vaak ook tegen de gevel, en schade aan het dak leidt op den duur tot schade aan de gevel. Omdat we beide doen, en op beide VCA-gecertificeerd zijn, bent u met één bedrijf klaar.",
      "Ons hechte team werkt met respect en liefde voor het vak. Zo maken we mooi en eervol werk, voor particulieren en bedrijven in Brabant en Limburg."
    ],
    foto: "img/hoogwerker.jpg", fotoPos: "50% 50%", fotoAlt: "ROS&BERG reinigt een gevel vanaf de hoogwerker",
    knop: "Vraag advies aan"
  },

  werkgebied: {
    titel: "Brabant en het noorden van Limburg",
    tekst: "Vanuit Helmond werken we in heel Noord-Brabant en Noord-Limburg. Voor bedrijfspanden ook in de rest van Nederland en België.",
    plaatsen: ["Helmond", "Eindhoven", "Someren", "Deurne", "Best", "Meijel", "Weert", "Maasbree", "Roermond", "Swalmen", "Riethoven"]
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 35%",
    titel: "Is uw dak of gevel toe aan onderhoud?",
    tekst: "Vraag vrijblijvend een offerte aan. We nemen dezelfde dag nog contact met u op."
  },

  contact: {
    titel: "Vraag vrijblijvend een offerte aan",
    tekst: "Vul het formulier zo volledig mogelijk in. De specialist neemt dezelfde dag nog contact met u op om uw vraag te beantwoorden of een afspraak in te plannen.",
    formTitel: "Aanvraag",
    onderwerpen: ["Dakcoating", "Dakreiniging", "Goten", "Dakrenovatie / dakkapel", "Gevel", "Schoorsteen", "Schilderwerk"],
    voorbeeld: "Bijvoorbeeld: er zit veel mos op ons pannendak, kan het gecoat worden?",
    belofte: "We nemen dezelfde dag nog contact met u op."
  }
};
