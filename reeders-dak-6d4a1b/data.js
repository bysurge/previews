// Dakdekkersbedrijf Reeders Dak (Goes). Bron: reedersdak.nl + Google (4,8 / 6, opgehaald 25-11-2026). Eigenaar Johan Reeders staat op de site.
// Alleen eigen foto's van hun site (max 900px breed; Google-foto's waren beschadigd).
window.SITE = {
  naam: "Reeders Dak",
  plaats: "Goes",
  vak: "Dakdekker",
  titelExtra: "Plat dak specialist in Goes en heel Zeeland",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 40,
  kleuren: { brand: "#1d1d1f", accent: "#e01f2d" },
  telefoon: "06 51 99 56 92",
  telefoonIntl: "31651995692",
  waTekst: "App Johan",
  email: "info@reedersdak.nl",
  adres: ["Olympiastraat 7", "4462 GG Goes"],
  kvk: "67909590",
  google: { score: "4,8", aantal: "6" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Uw plat dak specialist uit Goes. Bitumen, EPDM, PVC en Derbigum, dakgoten en dakisolatie, in heel Zeeland.",

  hero: {
    regels: ["Uw plat dak", "specialist."],
    tekst: "Johan Reeders legt al ruim 25 jaar platte en hellende daken in heel Zeeland. Alles in eigen beheer, met 10 jaar schriftelijke garantie.",
    foto: "img/hero.jpg", fotoPos: "50% 45%", fotoPosMobiel: "62% 45%",
    fotoAlt: "Johan Reeders brandt nieuwe dakbedekking op een plat dak",
    donker: true,
    punten: ["Ruim 25 jaar ervaring", "10 jaar schriftelijke garantie", "Alles in eigen beheer"]
  },

  marquee: ["Bitumen", "EPDM", "PVC", "Derbigum", "Dakgoten", "Hemelwaterafvoer", "Dakisolatie", "Onderhoud en inspectie"],

  intro: {
    kicker: "Reeders Dak",
    tekst: "Elk dak vraagt om een eigen aanpak. In goed overleg kijken we wat u wilt en wat er mogelijk is, zodat u een dak krijgt dat past.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "25+ jaar", label: "Ervaring in dakwerk" },
      { getal: "10 jaar", label: "Schriftelijke garantie" },
      { getal: "15 jaar", label: "Garantie op Derbigum" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Elk dak een eigen aanpak",
    tekst: "Plat of hellend, nieuw of renovatie. Dit zijn de dakbedekkingen die we het meest gebruiken.",
    items: [
      { naam: "Bitumen", soort: "Bitumen", foto: "img/branden.jpg", pos: "50% 50%",
        tekst: "Ruim 80% van de platte daken ligt in bitumen. Ideaal om uw oude dak te overlagen; bij een nieuw dak altijd met een onderlaag, dus twee samengesmolten lagen.",
        punten: ["Hoge ponsweerstand, goed beloopbaar", "Gemineraliseerd in diverse kleuren", "Weinig onderhoud"] },
      { naam: "EPDM en PVC", soort: "EPDM / PVC", foto: "img/epdm.jpg", pos: "50% 50%",
        tekst: "EPDM leggen we meestal uit één stuk, op maat gesneden: geen naden, dus minder kans op lekkage. PVC is licht, onderhoudsarm en mooi voor daken die in het zicht liggen.",
        punten: ["Naadloos uit één stuk", "Onderhoudsvrij en recyclebaar", "Lichte kleur, laag gewicht"] },
      { naam: "Derbigum", soort: "Derbigum", foto: "img/aan-het-werk.jpg", pos: "50% 45%",
        tekst: "Ultradik en ultrabestendig, ontworpen om meer dan 35 jaar mee te gaan. Sterk genoeg voor dakterrassen, daktuinen en zonnepanelen. Gecertificeerd verwerkt sinds 1999.",
        punten: ["15 jaar schriftelijke garantie", "Geen grind of leischilfers nodig", "Sinds 1999 gecertificeerd"] }
    ],
    meer: [
      { naam: "Dakgoten", tekst: "Nieuwe goten of uw oude zinken goot renoveren in EPDM of nieuw zink. Ook hemelwaterafvoer in PVC, koper of zink." },
      { naam: "Dakisolatie", tekst: "Bij nieuwe dakbedekking kijken we meteen kritisch naar de isolatie. Warm in de winter, koel in de zomer." },
      { naam: "Onderhoud en inspectie", tekst: "Laat uw dak controleren, zodat kleine problemen klein blijven." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Foto's", kicker: "Foto's",
    titel: "Wat wij zoal doen",
    tekst: "Een greep uit ons werk in Zeeland.",
    items: [
      { foto: "img/plat-dak.jpg", label: "Strak plat dak", pos: "50% 50%" },
      { foto: "img/lichtkoepel.jpg", label: "Lichtkoepel ingewerkt", pos: "50% 50%" },
      { foto: "img/pvc-dak.jpg", label: "Lichte kunststof dakbedekking", pos: "50% 60%" },
      { foto: "img/dak-wijk.jpg", label: "Gemineraliseerd in rood", pos: "50% 50%" },
      { foto: "img/onderlaag.jpg", label: "Nieuw dak in opbouw", pos: "50% 50%" }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie, zwart op wit",
    tekst: "Op al onze nieuw aangebrachte of gerenoveerde daken en dakgoten zit standaard 10 jaar schriftelijke garantie. Op daken in Derbigum zelfs 15 jaar.",
    lijst: {
      titel: "Opgeleid en gecertificeerd",
      punten: [
        "Derbigum daksystemen (sinds 1999)",
        "Verwerking van EPDM-membranen",
        "Verwerking van zink",
        "Verwerking van PVC-folies",
        "Basisveiligheid VCA",
        "Gezond en veilig werken op het dak (2021)"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Johan heeft ons 30 jaar oude bitumen dak vernieuwd. Het dak is heel mooi en vakkundig gelegd, we zijn er ontzettend blij mee! Johan is een hele nette en vriendelijke man, hij heeft met ons meegedacht naar de beste opties.", naam: "M. E." },
      { tekst: "Ik had een oud platdak met veel hoeken en ongewone constructies. Hij dacht goed mee en daar was de ervaring duidelijk zichtbaar. … Alles is netjes afgewerkt en hier werd ook duidelijk aandacht aan besteed.", naam: "Maurits C." },
      { tekst: "Gebeld voor reparatie lekkage en vervangen dakbedekking met enige haast. De volgende dag is de reparatie uitgevoerd en week later zat nieuwe dakbedekking er al vakkundig op. … TOP!!!", naam: "Edmond S." },
      { tekst: "Net en vakkundig personeel, scherpe prijsstelling van hun diensten.", naam: "Martijn H." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Vakmanschap uit Goes",
    rol: "Johan Reeders, Reeders Dak",
    tekst: [
      "Dakdekkersbedrijf Reeders Dak staat voor vakmanschap en kwaliteit. Alle werkzaamheden voeren we in eigen beheer uit, zodat we garant kunnen staan voor een goed dak.",
      "Met ruim 25 jaar ervaring in huis kunt u bij ons terecht voor platte en hellende daken, dakgoten, regenpijpen, onderhoud en inspectie. Een brede dienstverlening en uitstekende service, in heel Zeeland."
    ],
    foto: "img/onderlaag.jpg", fotoPos: "50% 40%", fotoAlt: "Johan Reeders aan het werk op een plat dak",
    knop: "App Johan"
  },

  werkgebied: {
    titel: "In heel Zeeland",
    tekst: "Vanuit Goes werken we in de hele provincie.",
    plaatsen: ["Walcheren", "Zuid-Beveland", "Noord-Beveland", "Zeeuws-Vlaanderen", "Schouwen-Duiveland", "Tholen"]
  },

  band: {
    foto: "img/branden.jpg", fotoPos: "50% 50%",
    titel: "Benieuwd wat uw dak nodig heeft?",
    tekst: "Neem contact op. We kijken samen wat er mogelijk is en maken een offerte op maat."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat er aan de hand is, of app direct een foto van uw dak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak", "Hellend dak", "Lekkage", "Dakgoot", "Dakisolatie", "Onderhoud / inspectie"],
    voorbeeld: "Bijvoorbeeld: ons bitumen dak is 30 jaar oud en aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
