// Bongers Dakwerken B.V. (Heeze). Bron: bongersdakwerken.nl + Google (4,4 / 16), 25-11-2026. Zie content.md.
// Eigen foto's: alleen de headerfoto van hun site (hero) en Google-foto's van hun bedrijfsterrein (steigers, bussen).
// Geen stock meer (25-11): kaarten gebruiken eigen foto (hero/bedrijf).
// Geen 06/WhatsApp: alleen bellen en mailen.
window.SITE = {
  naam: "Bongers Dakwerken",
  kortNaam: "Bongers",
  plaats: "Heeze",
  vak: "Dakdekker",
  logo: "img/logo.svg", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.svg", logoOpFoto: "img/logo-wit.svg", logoHoogte: 34,
  kleuren: { brand: "#1d1b1b", accent: "#d8343c" },
  telefoon: "040 226 37 33",
  telBel: "+31402263733",
  whatsapp: false,
  email: "info@bongersdakwerken.nl",
  adres: ["Industrieweg 80", "5591 JL Heeze"],
  kvk: "65935322",
  google: { score: "4,4", aantal: "16" },
  navCta: "Offerte",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Pannendekkers sinds 1988. Pannendaken, lood- en zinkwerk, dakramen en dakkapellen, dakisolatie, timmerwerk en steigerbouw.",

  hero: {
    regels: ["Pannendekkers", "sinds 1988."],
    tekst: "Nieuwbouw, renovatie of reparatie: Bongers Dakwerken legt complete pannendaken, inclusief lood, zink, isolatie en timmerwerk.",
    foto: "img/hero.jpg", fotoPos: "50% 50%", fotoPosMobiel: "72% 50%",
    fotoAlt: "Rood pannendak tegen een blauwe lucht",
    donker: true,
    punten: ["10 jaar garantie", "30 jaar fabrieksgarantie op nieuwe pannen", "Eigen steigerbouw"]
  },

  marquee: ["Pannendaken", "Loodwerk", "Zinkwerk", "Dakramen", "Dakkapellen", "Dakisolatie", "Timmerwerk", "Steigerbouw"],

  intro: {
    kicker: "Bongers Dakwerken",
    tekst: "Al sinds 1988 zijn we pannendekkers in hart en nieren. Van de pannen tot het lood, de goten en het timmerwerk: u heeft één aanspreekpunt voor uw hele dak.",
    stats: [
      { getal: "1988", label: "Pannendekkers sinds" },
      { getal: "10 jaar", label: "Garantie op ons werk" },
      { getal: "4,4", label: "Gemiddeld op Google" }
    ]
  },

  diensten: {
    titel: "Alles voor uw pannendak",
    tekst: "Nieuwe of gebruikte pannen, beton of gebakken: we denken mee over wat bij uw woning en uw smaak past.",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/hero.jpg", pos: "50% 40%", tekst: "Een compleet nieuw pannendak of een renovatie. We adviseren over de pan die bij uw woning past en leggen hem strak.",
        punten: ["Nieuwe en gebruikte dakpannen", "Betonpannen en gebakken pannen", "Nieuwbouw, renovatie en reparatie"] },
      { naam: "Lood- en zinkwerk", soort: "Lood / zink", foto: "img/bedrijf.jpg", pos: "50% 50%", tekst: "Lood rond de schoorsteen of dakkapel vernieuwen of repareren, en zinken goten die weer jaren meekunnen.",
        punten: ["Loodwerk schoorsteen en dakkapel", "Zinken dakgoten en kielgoten", "Verholen goten bij dakkapellen"] },
      { naam: "Dakramen en dakkapellen", soort: "Dakraam / dakkapel", foto: "img/hero.jpg", pos: "30% 70%", tekst: "We plaatsen nieuwe dakramen en timmeren ze netjes af. Ook een nieuwe dakkapel, of werk aan uw bestaande, regelen we.",
        punten: ["Dakramen plaatsen en aftimmeren", "Nieuwe dakkapel", "Bestaande dakkapel aanpakken"] },
      { naam: "Steigerbouw", soort: "Steigerbouw", foto: "img/steiger.jpg", pos: "70% 60%", tekst: "Steigers bouwen we zelf, met eigen materiaal vanaf ons terrein in Heeze. Veilig werken, zonder gedoe met een derde partij.",
        punten: ["Eigen steigermateriaal", "Voor dak- en gevelwerk", "Opbouwen en afbreken"] }
    ],
    meer: [
      { naam: "Dakisolatie", tekst: "Koel in de zomer, warm in de winter. We adviseren welke isolatie bij uw dak past." },
      { naam: "Timmerwerk", tekst: "Overstekken, boeiboorden, dakbeschot en dakgoten: het complete timmerwerk aan uw dak." },
      { naam: "Reparaties", tekst: "Een kapotte pan, lekkend lood of een goot die overloopt? Ook voor kleinere klussen staan we klaar." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "Zekerheid voor jaren",
    tekst: "We willen dat u lang plezier heeft van uw dak. Daarom staan we achter ons werk, en de fabrikant achter de pannen.",
    jaren: [
      { jaar: "10 jaar", tekst: "garantie op vrijwel alle werkzaamheden en materialen die wij uitvoeren" },
      { jaar: "30 jaar", tekst: "fabrieksgarantie op alle nieuw geleverde pannen" }
    ],
    lijst: {
      titel: "Eén bedrijf voor uw hele dak",
      punten: [
        "Pannendekkers sinds 1988",
        "Lood, zink, isolatie en timmerwerk in eigen hand",
        "Eigen steigerbouw",
        "Vrijblijvende offerte"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Top bedrijf. Echt vakmanschap, je merkt al gelijk dat het personeel verstand heeft van de zaken en met plezier werkt. … Goede prijs-kwaliteitverhouding, ik raad dit zeker aan, aan ieder!", naam: "James L." },
      { tekst: "Van geen isolatie naar een RC van 6. Nieuwe pannen, dakkapel vervangen, geheel nieuwe goten en omtimmering. Super fijne werknemers die hier mooi werk leveren. Niet simpelweg vervangen maar meedenken en oplossingen zoeken …", naam: "Ad van I., Valkenswaard" },
      { tekst: "Snelle en professionele hulp. Absoluut aan te bevelen!", naam: "dk Boss" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw pannendekker uit Heeze",
    rol: "Bongers Dakwerken, Industrieweg 80, Heeze",
    tekst: [
      "Sinds 1988 is Bongers Dakwerken gevestigd in Heeze, gespecialiseerd in het maken van complete pannendaken.",
      "In de loop der jaren is daar het volledige timmerwerk aan het dak bijgekomen, en ook steigerbouw doen we zelf. Zo regelen we alles voor uw dak, van de eerste steiger tot de laatste pan."
    ],
    foto: "img/bedrijf.jpg", fotoPos: "50% 30%", fotoAlt: "Bedrijfsbussen van Bongers Dakwerken op het terrein in Heeze",
    knop: "Neem contact op"
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 40%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Bel 040 226 37 33 of mail ons. We maken zo snel mogelijk een afspraak en een vrijblijvende offerte."
  },

  contact: {
    titel: "Vertel ons over uw dak",
    tekst: "Vraag een vrijblijvende offerte aan. Vul het formulier in, bel of mail, dan maken we zo snel mogelijk een afspraak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Lood / zink", "Dakraam / dakkapel", "Dakisolatie", "Timmerwerk", "Steigerbouw", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de pannen van ons huis zijn aan vervanging toe, en we willen meteen isoleren",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};

// Kleine aanpassing binnen data.js (sjabloon niet aanpassen): leesbare hero-tekst op de foto.
(function () {
  const st = document.createElement('style');
  st.textContent = '.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
