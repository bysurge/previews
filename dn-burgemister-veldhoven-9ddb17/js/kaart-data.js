// Kaarten van D'n Burgemister, overgenomen van hun menukaart-afbeeldingen (lunch maart 2026, diner 2026/06, drinks april 2026).
window.KAART = {
  lunch: {
    titel: "Lunch",
    intro: "Allergieën of dieetwensen? Laat het weten aan een van onze medewerkers!",
    groepen: [
      { naam: "Uitsmijters & omelet", noot: "Keuze uit wit of bruin brood.", items: [
        ["Uitsmijter ham/kaas", "salade", "12,25", "+ bacon 1,00"],
        ["Omelet ham/kaas", "room | salade", "13,15"],
        ["Omelet tomaat/kaas", "room | salade", "13,15"],
        ["Boerenomelet", "room | salade | champignons | tomaat | ui | kaas", "13,95"]
      ]},
      { naam: "Overige lunch", noot: "Keuze uit wit of bruin brood en uit Bourgondische- of groentekroketten.", items: [
        ["Kroketten met brood", "salade | mosterd", "11,95"],
        ["Kroketten met friet", "salade | mosterd | mayonaise", "12,95"],
        ["Gemeenteraadje", "tomatensoep | ham | kaas | spiegelei | kroket | coleslaw | mosterd", "15,95"]
      ]},
      { naam: "Huisgemaakte soepen", noot: "Met brood en kruidenboter.", items: [
        ["Tomatensoep", "room | bosui", "7,25", "", "vega"],
        ["Soep van het moment", "vraag het onze medewerkers", "8,45"],
        ["Soeperij", "proeverij van tomatensoep en soep van het moment", "8,45"]
      ]},
      { naam: "Salades", noot: "Met brood en kruidenboter.", items: [
        ["Salade Vis", "huisgerookte zalm | gamba's | gebakken zalm | sojamayonaise", "19,95"],
        ["Salade Carpaccio", "Parmigiano Reggiano | tomaat | pijnboompitten | truffelmayonaise", "16,95"],
        ["Salade Geitenkaas", "courgette | wortel | paprika | pecan | honing-tijmmayonaise", "16,50", "", "vega"],
        ["Salade Caesar", "krokante kip | little gem | tomaat | Parmigiano Reggiano | croutons", "18,75", "+ bacon of ansjovis 1,00"]
      ]},
      { naam: "Broodjes", noot: "Keuze uit wit of bruin brood.", items: [
        ["Huisgerookte zalm", "roomkaas | rode ui | komkommer | sojamayonaise", "13,95"],
        ["Crunchy chicken", "komkommer | sesam | bosui | honing-sesamsaus", "13,95"],
        ["Rundercarpaccio", "Parmigiano Reggiano | tomaat | pijnboompitten | truffelmayonaise", "13,95"],
        ["Warme brie", "serranoham | pecan | honing", "13,45", "", "vega mogelijk"],
        ["Pulled chicken", "mango chutney | rode ui | komkommer | chilisaus", "13,45"],
        ["Pulled pork", "coleslaw | ananas | BBQ-saus", "13,45"],
        ["Burrata", "pesto | perzik | balsamico | rucola | tomaat | tomatencrumble", "14,25", "", "vega"]
      ]},
      { naam: "Sandwiches", noot: "Keuze uit wit of bruin brood.", items: [
        ["Club sandwich", "gegrilde kipfilet | ei | tomaat | bacon | little gem", "15,95"],
        ["Club sandwich zalm", "roomkaas | avocado | rode ui | komkommer", "15,95"]
      ]},
      { naam: "Tosti's", noot: "Keuze uit wit of bruin brood.", items: [
        ["Tosti ham/kaas", "Burgemistersaus | salade", "6,95"],
        ["Tosti Burgemister", "Burgemistersaus | spiegelei | champignons | salade", "8,15"],
        ["Tosti Hawaii", "Burgemistersaus | ananas | salade", "8,15", "", "vega"],
        ["Boerentosti", "keuze uit geitenkaas of brie | honing | pecan | salade", "9,25"]
      ]},
      { naam: "Burgers", noot: "Met friet, mayonaise en salade.", items: [
        ["Classic Burger", "sla | tomaat | augurk | Burgemistersaus", "18,25"],
        ["Truffel Burger", "Parmigiano Reggiano | bacon | sla | ui | truffelmayonaise", "19,95"],
        ["D'n Burgemister Burger", "gorgonzola piccante | bacon | sla | gekaramelliseerde ui", "19,95"],
        ["BBQ Burger", "BBQ-lak | cheddar | sla | rode ui | gerookte amandel-spekmayonaise", "19,95"],
        ["Zesty Chicken Burger", "cheddar | sla | tomaat | rode ui | yoghurt-citroenmayonaise", "19,95"],
        ["Creamy Chicken Burger", "roomkaas | sla | tomaat | gekaramelliseerde rode ui", "20,95"],
        ["Spicy Hawaii Burger", "gegrilde ananas | bacon | avocado | gochujangmayonaise", "21,95"],
        ["Kimchi Burger", "coleslaw | little gem | gochujangmayonaise", "19,95", "", "vegan"]
      ]},
      { naam: "Kids", items: [
        ["Kindermenu", "keuze uit frikandel, kroket of kipnuggets | friet | salade | mayonaise | appelmoes", "9,95"],
        ["Poffertjes", "poedersuiker | stroop", "6,50"],
        ["Kinder ijsco", "vanille-ijs | slagroom | smarties", "4,95"]
      ]},
      { naam: "Dessert", items: [
        ["Trio van sorbetijs", "vers fruit", "9,25"],
        ["Pornstar Tiramisu", "huisgemaakte tiramisu | passievrucht", "11,95"],
        ["Appelgebak", "", "4,50", "+ slagroom 0,50"],
        ["Wisselgebak", "", "4,75", "+ slagroom 0,50"]
      ]}
    ]
  },
  diner: {
    titel: "Diner",
    intro: "Onze burgers zijn huisgemaakt van 100% puur rundergehakt.",
    groepen: [
      { naam: "Huisgemaakte soepen", noot: "Met brood en kruidenboter.", items: [
        ["Tomatensoep", "room", "6,75", "", "vega"],
        ["Soep van het moment", "", "7,75"],
        ["Soeperij", "proeverij van tomatensoep en soep van het moment", "7,75"]
      ]},
      { naam: "Voorgerechten", noot: "Onze huisgerookte zalm is een driedaagse bereiding van marineren, drogen en koud roken.", items: [
        ["Broodplankje", "kruidenboter | aioli | olijven", "7,75", "", "vega"],
        ["Starter van de Chef", "informeer bij een van onze medewerkers", "dagprijs"],
        ["Rundercarpaccio", "truffelmayonaise | Parmigiano Reggiano | tomaat | pijnboompitten", "13,50"],
        ["Huisgerookte zalm", "sojamayonaise | zeewier | komkommer", "13,75"],
        ["Bruschetta perzik", "vegan roomkaas | perzik | rucola | balsamicodressing | tomatencrumble", "10,50", "", "vegan"],
        ["Burrata", "gegrilde perzik | rucola | pesto | balsamicodressing | tomatencrumble", "13,45", "", "vega"]
      ]},
      { naam: "Hoofdgerechten vlees", noot: "Met friet, mayonaise, zoete-aardappelcrème en groenten.", items: [
        ["Grillduo van varken", "krokante buikspek | varkensmedaillon", "24,95"],
        ["Surf & turf", "biefstuk | gamba's", "25,95"],
        ["Diamanthaas", "175 gr / 250 gr", "26,95 / 30,95"]
      ]},
      { naam: "Hoofdgerechten vis", noot: "Met friet, mayonaise, pastinaakcrème en groenten.", items: [
        ["Zeebaars", "karamelcitroenlak", "24,95"],
        ["Zalmfilet", "citroen-dille hollandaise", "25,95"]
      ]},
      { naam: "Overige hoofdgerechten", items: [
        ["Burgemister's keuze", "", "dagprijs"],
        ["Ravioli truffel", "champignons | truffelroomsaus", "24,95", "", "vega"]
      ]},
      { naam: "Plates", noot: "Met friet, mayonaise en salade.", items: [
        ["Gamba's", "gemarineerd in knoflook-chiliolie", "21,95"],
        ["Saté van puck", "gemarineerde kippendij | atjar | satésaus | kroepoek | seroendeng", "22,95"],
        ["Spareribs", "knoflooksaus of chilisaus | keuze uit zoet, pittig of BBQ", "24,95"],
        ["Fish & Chips", "remoulade", "22,95"]
      ]},
      { naam: "Maaltijdsalades", noot: "Met brood en kruidenboter.", items: [
        ["Salade Carpaccio", "", "15,95"],
        ["Salade Caesar", "gemarineerde kippendij | little gem | ei | tomaat | Parmigiano Reggiano | croutons", "18,95", "+ ansjovis 1,00 | + bacon 1,00"],
        ["Salade Vis", "", "19,95"],
        ["Salade Geitenkaas", "", "15,95", "", "vega"]
      ]},
      { naam: "Burgers", noot: "Met friet, mayonaise en salade. Huisgemaakt van 100% puur rundergehakt.", items: [
        ["Classic", "", "18,25", "+ kaas 1,00 | + bacon 1,00"],
        ["Truffel", "", "19,95"],
        ["D'n Burgemister", "gorgonzola piccante", "19,95"],
        ["BBQ", "", "19,95"],
        ["Zesty chicken", "", "19,95"],
        ["Creamy chicken", "", "20,95"],
        ["Spicy Hawaii", "cheddar | ananas | bacon | avocado | gochujang", "21,95"],
        ["Kimchi", "", "19,95", "", "vegan"]
      ]},
      { naam: "Bijgerechten", items: [
        ["Gegrilde groenten", "", "4,75"],
        ["Witte rijst", "", "3,50"],
        ["Groene salade", "sla | tomaat | komkommer | rode ui | ei | croutons", "4,75"],
        ["Friet", "mayonaise", "3,50"],
        ["Zoete-aardappelfriet", "truffelmayonaise", "4,75"],
        ["Saus naar keuze", "citroen-dille hollandaise | champignonsaus | aioli | pepersaus | truffeljus | kruidenboter", "1,00"]
      ]}
    ]
  },
  drinks: {
    titel: "Drinks & Bites",
    intro: "Burgemister Bites serveren we van 12:00 tot 21:00 uur.",
    groepen: [
      { naam: "All day favorites", items: [
        ["Bitterballen", "mosterd | 10 of 20 stuks", "8,50 / 15,00"],
        ["Gemengd borrelgarnituur", "mayonaise | curry | 8 of 16 stuks", "8,75 / 15,50"],
        ["Oriental snacks", "garnalen | oude kaas sticks | loempia's | krokante kipstukjes | 8 stuks, ook als 16 stuks", "9,35"],
        ["Gepaneerde garnalen", "chilisaus | 8 stuks", "8,25"],
        ["Kimchi ballen", "sriracha mayonaise | 8 stuks", "8,75"]
      ]},
      { naam: "Burgemister Bites", noot: "Van 12:00 tot 21:00 uur.", items: [
        ["Nacho's", "salsa | guacamole | crème fraîche | bosui | rode peper", "13,95", "+ pulled pork of pulled chicken 5,50"],
        ["Loaded fries", "zoete-aardappelfriet | truffelmayonaise | Parmezaanse kaas", "7,50"],
        ["Broodplankje", "", "7,75"],
        ["Borrelplank", "diverse vlees- en kaassoorten | olijven | huisgerookte zalm | toast | smeersels", "19,95"],
        ["Borrelplank Deluxe", "spareribs | kimchi ballen | bitterballen | vlees en kaas | olijven | zalm | toast | smeersels", "29,95"]
      ]},
      { naam: "Gebak", items: [
        ["Appeltaart", "", "4,50"],
        ["Nougatine ijsgebak", "", "4,75"],
        ["Wisselend gebak", "", "4,75"],
        ["+ slagroom", "", "0,50"]
      ]},
      { naam: "Bier op tap", items: [
        ["Birra Moretti", "0,25 l / 0,5 l", "3,50 / 6,65"],
        ["Paulaner", "0,3 l / 0,5 l", "4,90 / 7,45"],
        ["Heineken Witpils", "0,25 l", "3,60"],
        ["Affligem Blond", "", "5,40"],
        ["Affligem Dubbel", "", "5,40"],
        ["Texels Skuumkoppe", "0,3 l / 0,5 l", "4,95 / 7,60"],
        ["Oedipus Pais Tropical IPA", "", "5,45"],
        ["Wisseltap", "", "5,55"]
      ]},
      { naam: "Lokaal bier van Van Moll", items: [
        ["Langharig tuig", "weizen", "6,40"],
        ["Doerak", "IPA", "6,70"],
        ["Triple Trouble", "tripel", "6,70"],
        ["Wanderlust", "IPA 0,3%", "6,10"]
      ]},
      { naam: "Bier op fles", items: [
        ["Liefmans", "", "5,30"], ["Duvel", "", "6,25"], ["La Chouffe", "", "6,25"], ["Omer", "", "6,50"],
        ["Hoegaarden Wit", "", "4,90"], ["Straffe Hendrik Quadruppel", "", "7,15"], ["Affligem Tripel", "", "5,75"],
        ["Tripel Karmeliet", "", "7,15"], ["Desperados", "", "5,50"], ["Seizoensbok", "", "5,50"], ["Bier van het moment", "", "6,25"]
      ]},
      { naam: "Alcoholvrij bier", items: [
        ["Birra Moretti 0%", "", "3,85"], ["Amstel Radler 0%", "", "3,85"], ["Affligem Blond 0%", "", "4,70"],
        ["Texels Skuumkoppe 0%", "", "5,25"], ["Liefmans 0%", "", "5,30"]
      ]},
      { naam: "Wijn wit", noot: "Prijzen per glas / fles.", items: [
        ["Chardonnay Giovinello", "Dunántúl, Hongarije", "4,95 / 24,00"],
        ["Verdejo La Lustrosa", "Spanje", "5,25 / 25,00"],
        ["Pinot Grigio Pasqua", "Veneto", "5,75 / 28,00"],
        ["Sauvignon Blanc Reserva Agustinos", "Maipo Valley, Chili", "5,75 / 28,00"],
        ["Chardonnay La Ligne Noire", "Pays d'Oc", "6,50 / 32,00"]
      ]},
      { naam: "Wijn rood", noot: "Prijzen per glas / fles.", items: [
        ["Merlot Giovinello", "", "4,95 / 24,00"],
        ["Grenache-Syrah-Mourvèdre La Ligne Noire", "", "5,50 / 27,00"],
        ["Rioja Crianza Viña Baroja", "", "6,40 / 31,00"],
        ["I Passi Appassimento Primitivo", "Torrevento, Puglia", "6,90 / 34,00"]
      ]},
      { naam: "Rosé, mousserend en alcoholvrij", noot: "Prijzen per glas / fles.", items: [
        ["Pinot Grigio Blush Rosé Pasqua", "rosé", "5,25 / 25,00"],
        ["Mélodie Provence Rosé", "Château de Terrebonne", "7,00 / 34,00"],
        ["Prosecco Treviso Pasqua", "mousserend", "6,00 / 30,00"],
        ["Chardonnay Chavin zero", "alcoholvrij, per glas", "4,95"],
        ["Merlot Chavin zero", "alcoholvrij, per glas", "4,95"],
        ["Prosecco Pronol", "alcoholvrij, per glas", "5,35"]
      ]},
      { naam: "Hard seltzer", items: [
        ["STELZ", "Ice tea Peach | Ice tea Lemon | van het moment", "5,50"]
      ]},
      { naam: "Frisdrank", items: [
        ["Frisdrank", "Pepsi Regular of Zero | Sinas | 7UP Zero Sugar | Cassis | Lipton Sparkling, Peach of Green | Tonic | Bitter lemon | Ginger ale | Rivella", "3,30"]
      ]},
      { naam: "Overige dranken", items: [
        ["Sourcy still / sparkling", "", "3,30"], ["Sourcy 0,75 l", "", "6,60"], ["Verse jus d'orange", "", "4,80"],
        ["Ranja", "", "1,75"], ["Appelsap", "", "3,30"], ["Sinaasappelsap", "", "3,30"], ["Chocomel", "", "3,50"],
        ["Fristi", "", "3,50"], ["Melk", "", "3,00"], ["Ginger Beer", "", "4,50"], ["Crodino", "", "5,10"]
      ]},
      { naam: "Shaken ice tea", items: [
        ["Shaken ice tea", "Black Tea Lemon, Peach, Melon of Mango | Green Tea Forest Fruit, Lemon, Mint of Peach (sugarfree) | Wildberries Infusion | Tropical Infusion", "5,25"]
      ]},
      { naam: "Warme dranken", noot: "Extra: havermelk 0,50 | Monin siropen 0,50 | decafé 0,25 | slagroom 0,50", items: [
        ["Koffie", "", "3,25"], ["Cappuccino", "", "3,40"], ["Espresso", "", "2,85"], ["Dubbele espresso", "", "3,90"],
        ["Latte macchiato", "", "4,35"], ["Koffie verkeerd", "", "3,50"], ["Flat white", "", "3,80"], ["Chai latte", "", "4,15"],
        ["Dirty chai latte", "", "4,95"], ["Thee", "", "3,00"], ["Verse muntthee", "", "4,00"], ["Verse gemberthee", "", "4,00"],
        ["Warme chocomel", "", "3,60"]
      ]},
      { naam: "Likeuren", noot: "50 cc.", items: [
        ["Disaronno", "", "4,70"], ["Licor 43", "", "4,70"], ["Tia Maria", "", "4,70"], ["Baileys", "", "4,70"],
        ["Cointreau", "", "5,45"], ["Frangelico", "", "5,45"], ["DOM Bénédictine", "", "5,75"], ["Drambuie", "", "5,95"], ["Grand Marnier", "", "5,95"]
      ]},
      { naam: "Gedistilleerd", noot: "35 cc.", items: [
        ["Limoncello", "", "3,85"], ["Campari", "", "3,85"], ["Salmari", "", "3,65"], ["Jonge jenever", "", "3,65"],
        ["Sambuca / Tequila", "", "3,65"], ["Jägermeister / Schrobbeler", "", "3,65"], ["Eristoff Vodka", "", "3,65"],
        ["Bacardi", "Carta Blanca | Lemon | Razz | Spiced", "3,65"], ["Malibu", "", "3,65"], ["Passoa", "", "3,65"], ["Corenwijn", "50 cc", "4,95"]
      ]},
      { naam: "Whiskey", noot: "50 cc. Speciale whiskey? Vraag het aan een van onze medewerkers!", items: [
        ["Johnnie Walker Red", "", "4,95"], ["Jack Daniel's", "", "6,20"], ["Jameson", "", "5,55"]
      ]},
      { naam: "Port", items: [
        ["Ruby Port", "Offley, Douro", "4,40"], ["White Port", "", "4,40"]
      ]}
    ]
  }
};
