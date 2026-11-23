// Take-awaykaart MR.CHANG (web /menus + PDF take-awaykaart). [nr, naam, omschrijving, prijs, labels]
// labels: v vegetarisch, ve veganistisch, g glutenvrij, m mild, p pittig, s uitgelicht, x = * keuze bijgerecht
window.MRCHANG_MENU = {
  menus: [
    ['38', "Menu voor 2 personen", "Babi pangang, kip in knoflook-chilisaus, foe yong hai, kipsaté (2 stuks), met 1x keuze uit witte rijst, gebakken rijst, bami of mifang (+ € 4,50)", '31,50', ''],
    ['39', "Tapas menu voor thuis, vanaf 2 personen", "Smokey salmon, edamame, seafood roll (4 st.), gamba pearl (2 st.), Peking duck pancakes, Canton egg omelette, veggie mix, Si-Chuan beef, garlic gamba's, babi pangang, geserveerd met witte rijst", '55,00', 's'],
    ['40', "Menu voor 4 personen", "Krokante kip met zoetzure saus, ossenhaas met knoflook-chilisaus, gebakken gamba's in knoflook, babi pangang, kipsaté (4 stuks), gewokte groentemix, met 2x keuze uit witte rijst, gebakken rijst, bami of mifang (+ € 4,50)", '62,00', ''],
    ['41', "Chinese rijsttafel voor 4 personen", "Babi pangang, gewokte groentemix, gepaneerde garnalen, kip in knoflook-chilisaus, foe yong hai, koe lou youk, kipsaté (4 stuks), met 2x keuze uit rijst, bami of mifang", '59,50', '']
  ],
  gerechten: [
    ['1', "Chinese tomatensoep", "", '3,50', 'g ve'],
    ['2', "Toast met garnaal en sesamzaadjes", "6 stuks", '6,00', 's'],
    ['3', "Huisgemaakte miniloempia's", "6 stuks", '6,00', 'v'],
    ['4', "Kipdumplings", "6 stuks", '6,50', ''],
    ['5', "Gebakken banaan", "Gepaneerd, gefrituurd, met poedersuiker; 5 stuks", '5,50', 'v'],
    ['6', "Foe yong hai", "Groente-omelet in tomatensaus", '7,50', 'v s x'],
    ['7', "Gestoomd broodje met gestoofd vlees", "2 mini-bapao's met gestoofd gehakt", '6,50', ''],
    ['8', "Huisgemaakte gehaktballetjes", "6 stuks in Chinese 5-specerijensaus", '7,50', ''],
    ['9', "Kou lou youk", "Gepaneerde varkensblokjes in zoetzure 5-spicessaus", '8,00', 'x'],
    ['10', "Gewokte groentemix", "", '8,00', 'v'],
    ['11', "Gepaneerde garnalen", "4 stuks", '6,50', ''],
    ['12', "Kipsaté", "4 stuks", '7,50', ''],
    ['13', "Kip in knoflook-chilisaus", "Gewokt", '10,00', 'm x'],
    ['14', "Krokante kip", "Met licht pittige zoetzure saus", '10,00', 'x'],
    ['15', "Babi pangang", "Krokant varkensvlees met zoet-pittige rode saus", '10,00', 'm x'],
    ['16', "Babi ketjap", "Krokant varkensvlees in zoete ketjapsaus", '10,00', 'x'],
    ['17', "Krokant speenvarken", "Met hoisinsaus", '11,00', 'x'],
    ['18', "Edamame", "Groene sojabonen", '7,50', 've'],
    ['19', "Ossenhaas met champignon en oestersaus", "", '13,00', 'x'],
    ['20', "Ossenhaas met knoflook en chilisaus", "", '13,00', 'm s x'],
    ['21', "Peking eend met pannenkoekjes", "6 pannenkoekjes, komkommer, lente-ui en hoisinsaus", '15,00', 's x'],
    ['22', "Gamba's in knoflook", "Gewokt", '12,50', 'x'],
    ['23', "Mifang kip", "", '12,00', ''],
    ['24', "Mifang garnalen", "", '17,50', 's'],
    ['25', "Seafood roll", "4 stuks", '6,00', 's'],
    ['26', "Gamba pearl", "2 stuks", '6,00', ''],
    ['27', "Canton egg omelette", "", '7,50', 'v x'],
    ['28', "Si-Chuan beef", "Gewokte ossenhaas in pittige saus", '13,00', 'p x'],
    ['29', "Japanse zalm", "2 stuks, gegrild", '8,50', ''],
    ['30', "Sweet bun", "2 stuks, krokant van buiten, zacht van binnen, gevuld met zoete custard", '5,50', 'v']
  ],
  bij: [
    ['31', "Kroepoek", "Verse garnalenkroepoek", '3,00', ''],
    ['32', "Gepekelde komkommer en wortel", "", '4,00', 've'],
    ['33', "Gebakken rijst", "Grote nasi", '5,50', 'v'],
    ['34', "Bami", "Grote portie", '5,50', 'v'],
    ['35', "Mifang", "Grote portie", '8,00', 'v'],
    ['36', "Babi-pangangsaus", "", '2,50', 'm v'],
    ['37', "Satésaus", "", '2,50', 'v'],
    ['', "Witte rijst bij een * gerecht", "", '2,00', 've'],
    ['', "Gebakken rijst bij een * gerecht", "", '2,50', ''],
    ['', "Bami bij een * gerecht", "", '2,50', ''],
    ['', "Mifang bij een * gerecht", "", '3,00', 'v']
  ],
  poke: [
    ['42', "Poké bowl salmon", "Zalm, mais, sojabonen, komkommer, omelet, avocado, zeewier", '12,50', ''],
    ['43', "Poké bowl chicken", "Kip, mais, sojabonen, komkommer, omelet, avocado, zeewier", '12,50', ''],
    ['44', "Poké bowl ebi", "Garnaal, mais, sojabonen, komkommer, omelet, avocado, zeewier", '12,50', ''],
    ['45', "Poké bowl veggie", "Mais, sojabonen, komkommer, omelet, avocado, zeewier, tofu", '10,50', '']
  ],
  sushi: [
    { t: 'Nigiri', items: [
      ['A1', "Zalm", "", '1,80'], ['A2', "Tonijn", "", '2,00'], ['A3', "Beef", "", '2,00'], ['A4', "Paling (unagi)", "", '2,00'],
      ['A5', "Avocado", "", '1,80'], ['A6', "Geflambeerde zalm", "", '2,00'], ['A7', "Tobiko zalm", "Zalm met viskuit", '2,00'],
      ['A8', "Philadelphia zalm", "Zalm met roomkaas", '2,00'], ['A9', "Katafi zalm", "Zalm met mayo", '2,00'], ['A10', "Sake oshizushi, 2 st.", "Zalm, kaas, tobiko", '2,20'] ] },
    { t: 'Gunkan', items: [
      ['A11', "Garnaal gunkan", "Garnaal, gekruide nori", '2,50'], ['A12', "Zalm gunkan", "", '2,00'], ['A13', "Wakame gunkan", "Zeewier", '2,00'] ] },
    { t: 'Maki', items: [
      ['A14', "Zalmrol, 8 st.", "", '3,00'], ['A15', "Tonijnrol, 8 st.", "", '3,00'], ['A16', "Komkommerrol, 8 st.", "Kappa maki", '3,00'], ['A17', "Avocadorol, 8 st.", "", '3,00'] ] },
    { t: 'Uramaki', items: [
      ['A18', "Garnaal maki rol, 4 st.", "Ebi, komkommer, tobiko", '5,00'], ['A19', "Volcano zalm rol, 4 st.", "Roomkaas, omelet, avocado, zalm", '6,00'],
      ['A20', "Spicy tonijn rol, 4 st.", "", '4,50'], ['A21', "Avocado tonijn rol, 4 st.", "", '4,50'],
      ['A22', "Surf-turf rol, 4 st.", "Garnaal, komkommer, beef, truffelmayo", '6,00'], ['A23', "Crispy rol, 4 st.", "Tempura, avocado", '5,00'],
      ['A24', "California rol, 4 st.", "Krab, avocado, komkommer", '4,50'], ['A25', "Wasabi sake rol, 4 st.", "", '5,00'],
      ['A26', "Tori maki rol, 4 st.", "Kip, avocado, sesam", '5,00'], ['A27', "Spicy sake rol, 4 st.", "Avocado, sriracha, zalm", '5,00'],
      ['A28', "Aardbei rol, 4 st.", "Roomkaas, omelet, avocado, aardbei", '5,00'], ['A29', "Mr.CHANG rol, 4 st.", "Komkommer, garnaal, avocado, zalm", '7,00'],
      ['A30', "Gebakken sushi rol, 6 st.", "Komkommer, krab, zeewier, ui", '7,00'], ['A31', "Dragon rol, 4 st.", "Avocado, tobiko, ebi, komkommer", '6,00'],
      ['A32', "Rainbow rol, 4 st.", "Ebi, komkommer, avocado, zalm, tonijn", '6,00'] ] },
    { t: 'Tamaki', items: [
      ['A33', "California tamaki, 1 st.", "Avocado, komkommer, tobiko, krab, sla", '3,00'], ['A34', "Zalm tamaki, 1 st.", "", '3,00'], ['A35', "Wakame tamaki, 1 st.", "", '3,00'] ] },
    { t: 'Sashimi', items: [
      ['A36', "Zalm sashimi, 5 st.", "", '8,00'], ['A37', "Tonijn sashimi, 5 st.", "", '8,00'], ['A38', "Sashimi mix, 6 st.", "Zalm en tonijn", '9,00'] ] }
  ],
  sushimenu: [
    ['M1', "Zalm menu, 13 st.", "Zalm nigiri 2 st., wasabi uramaki 2 st., zalm maki 4 st., zalm oshizushi 2 st., zalm sashimi 3 st.", '12,50', ''],
    ['M2', "Maguro menu, 13 st.", "Maguro nigiri 2 st., avocado tuna 2 st., tekka maki 4 st., spicy maguro 2 st., tonijn sashimi 3 st.", '12,50', ''],
    ['M3', "Maki menu, 16 st.", "California maki 4 st., spicy sake 4 st., ebi maki 4 st., avocado tuna 4 st.", '18,50', ''],
    ['M4', "Veggie menu, 18 st.", "Avocado nigiri 2 st., crispy rol 8 st., komkommer maki 4 st., avocado maki 4 st.", '15,50', ''],
    ['M5', "Mr.Chang box, 40 st.", "Zalm nigiri 4 st., maguro nigiri 4 st., komkommer maki 8 st., sake maki 8 st., California maki 8 st., ebi maki 8 st.", '32,50', ''],
    ['M6', "Crispy menu, 32 st.", "Tori maki 8 st., crispy maki 8 st., ebi maki 8 st., ebi gunkan 4 st., gebakken sushi 4 st.", '36,50', ''],
    ['M7', "Special menu, 64 st.", "Beef nigiri 4 st., wasabi sake 8 st., ebi maki 8 st., komkommer maki 8 st., sake maki 8 st., tori maki 8 st., tekka maki 8 st., California maki 8 st., zalm oshizushi 4 st.", '60,50', ''],
    ['M8', "Family box, 80 st.", "Flamed zalm nigiri 4 st., beef nigiri 4 st., avocado maki 8 st., tekka maki 8 st., sake maki 8 st., komkommer maki 8 st., tori maki 8 st., ebi maki 8 st., spicy maguro 8 st., California maki 8 st., sake sashimi 4 st., maguro sashimi 4 st.", '72,50', '']
  ]
};
