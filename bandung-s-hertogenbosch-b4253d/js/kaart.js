// Menukaart Restaurant Bandung, overgenomen van restaurantbandung.nl/menu/ en /afhaalmenu-2/ (23-11-2026).
// Formaat gerecht: [naam, prijs of '', omschrijving]
window.KAART = {
  restaurant: {
    rijsttafels: [
      { naam: 'Banten', prijs: '36,00', extra: 'p.p., min. 2 personen', items: [
        ['Sate sapi', '2 stokjes sate van runderhaas'], ['Sate kambing', '2 stokjes sate van geitenvlees'], ['Sate ayam', '2 stokjes kipsate'],
        ['Sate udang', 'Garnalensate'], ['Sate lilit', '2 stokjes sate van vis'], ['Sate tahu', 'Vegetarische sate'],
        ['Gulai sayuran', 'Groenten in kokos-kerriesaus'], ['Urap urap', 'Groenten met gekruide kokos'], ['Nasi putih', 'Witte rijst'],
        ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Sukabumi', prijs: '31,00', extra: 'p.p.', items: [
        ['Daging rendang', 'Rundvlees met pittige kokos'], ['Daging smoor', 'Rundvlees met kecap'], ['Sate ayam', '1 stokje kipsate'],
        ['Sate kambing', 'Sate van geitenvlees'], ['Ayam bumbu gulai', 'Licht pikante kip'], ['Telor balado', 'Ei met Spaanse pepers'],
        ['Ikan saos mangut', 'Vis in pittig gele kokossaus'], ['Gado gado', 'Groenten met pindasaus'], ['Gulai sayuran', 'Groenten in kokos-kerriesaus'],
        ['Nasi putih', 'Witte rijst'], ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Bandung', prijs: '35,50', extra: 'p.p.', items: [
        ['Daging rendang', 'Rundvlees met pittige kokos'], ['Daging smoor', 'Rundvlees in ketjap'], ['Sate ayam', '1 stokje kipsate'],
        ['Sate kambing', '1 stokje sate van geitenvlees'], ['Ayam bumbu gulai', 'Licht pikante kip'], ['Ikan saos mangut', 'Licht pikant visgerecht'],
        ['Sambal goreng udang', 'Pikante garnaal'], ['Sate udang', 'Garnalensate'], ['Telor balado', 'Ei met Spaanse pepers'],
        ['Gado gado', 'Groenten met pindasaus'], ['Gulai sayuran', 'Groenten in kokos-kerriesaus'], ['Sambal goreng buncis', 'Hete boontjes'],
        ['Nasi putih', 'Witte rijst'], ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Bogor', prijs: '31,00', extra: 'p.p., vegetarisch', items: [
        ['Sambal goreng tempe', 'Licht pikante soyakoek'], ['Gado-gado', 'Groenten in pindasaus'], ['Gulai sayuran', 'Groenten in kokos-kerriesaus'],
        ['Sate tahu', 'Sate van tahu'], ['Sate tempe', 'Sate van tempe'], ['Urap-urap', 'Groenten met licht gekruide kokos'],
        ['Telor balado', 'Ei met Spaanse pepers'], ['Tumis goreng tahu petai', 'Tahu met petehbonen'], ['Terong belado', 'Aubergine met Spaanse pepers'],
        ['Ketoprak', 'Groenten met rijstvermicelli'], ['Nasi putih', 'Witte rijst'], ['Acar', 'Zoetzuur'],
        ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Pangandaran', prijs: '35,50', extra: 'p.p., vis en zeevruchten', items: [
        ['Ikan belado', 'Roodbaars in sambal'], ['Sambal goreng ikan', 'Licht pikante roodbaars'], ['Udang kecap', 'Garnaal in ketjap'],
        ['Sate udang', 'Garnalensate'], ['Ikan pepesan', 'Makreel in bananenblad'], ['Sambal goreng buncis', 'Hete boontjes'],
        ['Urap urap', 'Groenten met gekruide kokos'], ['Gado gado', 'Groenten met pindasaus'], ['Sate lilit', 'Sate van vis'],
        ['Nasi putih', 'Witte rijst'], ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] }
    ],
    rubrieken: [
      { id: 'lunch', naam: 'Lunch', items: [
        ['Soto ayam', '10,00', ''], ['Soto bandung', '10,00', ''], ['Nasi rames', '20,00', 'Bord rijst met allemaal lekkere hapjes eromheen'],
        ['Nasi rames Bandung', '22,50', 'Bord rijst met nog meer lekkere dingen eromheen'], ['Lumpia', '3,00', 'Loempia met kip/groentevulling'],
        ['Pastel', '3,75', 'Deeg gevuld met kip/groenten'], ['Risoles', '3,75', 'Flensje gevuld met kip en groenten'],
        ['Mini loempia’s', '2,70', '6 mini loempiaatjes'], ['Lemper', '3,75', 'Kleefrijst met kipvulling'], ['Perkedel jagung', '3,75', 'Maiskoekjes']] },
      { id: 'sate', naam: 'Saté', noot: 'Geroosterd, 3 stokjes per portie.', items: [
        ['Sate ayam', '6,90', 'Sate van kippenvlees'], ['Sate sapi', '9,90', 'Sate van rundvlees'], ['Sate kambing', '9,30', 'Sate van geitenvlees'],
        ['Sate udang', '7,80', 'Garnalensate'], ['Sate tahu/tempe', '6,00', 'Sate van soya'], ['Sate lilit', '7,50', 'Sate van vis']] },
      { id: 'voor', naam: 'Voorgerechten', items: [
        ['Soto ayam madura', '7,50', 'Javaanse kippensoep'], ['Soto Bandung', '8,00', 'Runderbouillon'], ['Sop tomat', '7,50', 'Tomatensoep'],
        ['Soto betawi', '8,00', 'Rundvleessoep met santen'], ['Udang goreng tepung', '8,10', 'Gebakken garnalen'], ['Gorengan Bandung', '17,00', 'Diverse gebakken hapjes']] },
      { id: 'vlees', naam: 'Vlees', noot: 'Met witte rijst. Nasi goreng enz. voor € 1,50 extra.', items: [
        ['Daging smoor', '18,50', 'Gesmoord rundvlees'], ['Daging rendang', '18,50', 'Pikant rundvlees'], ['Daging gulai', '19,50', 'Rundvlees met kerrie'],
        ['Tongseng kambing', '20,00', 'Geitenhaas met groenten'], ['Gulai kambing', '20,00', 'Geitenhaas met kerrie'], ['Iga bakar sapi Bandung', '24,50', 'Kalfsrib met pikante ketjap']] },
      { id: 'vis', naam: 'Vis', noot: 'Met witte rijst. Nasi goreng enz. voor € 1,50 extra.', items: [
        ['Ikan goreng belado', '16,00', 'Roodbaars met Spaanse pepers'], ['Ikan bumbu acar', '16,00', 'Roodbaars in zoetzure saus'],
        ['Pepes ikan', '23,00', 'Makreel in bananenblad'], ['Ikan teri', '13,50', 'Mini visjes'], ['Udang rica rica', '16,50', 'Garnalen met sambal & citroengras'],
        ['Udang kecap', '16,50', 'Garnalen met ketjap'], ['Udang taotjo', '16,50', 'Garnalen in taotjosaus'], ['Sambal goreng kupang', '16,50', 'Pikante mosselen'],
        ['Sarang kupang', '8,00', 'Mosselnestjes']] },
      { id: 'kip', naam: 'Kip', noot: 'Met witte rijst. Nasi goreng enz. voor € 1,50 extra.', items: [
        ['Ayam bakar padang', '17,00', 'Pikant gebakken kippenvleugels'], ['Ayam rica rica', '16,50', 'Kip in sambal citroengras'],
        ['Ayam gulai', '16,50', 'Kip in kerrie kokos'], ['Ayam kecap', '16,50', 'Kip met kecap'], ['Ayam rujak', '16,50', 'Pittig kipgerecht'],
        ['Ayam tongseng', '16,50', 'Licht pikante kip met groenten']] },
      { id: 'groenten', naam: 'Groenten', items: [
        ['Karedok', '12,50', 'Groenten met een pindadressing'], ['Gado-gado', '12,50', 'Groenten met pindasaus'], ['Lotek', '12,50', 'Groenten met pinda-kunjit'],
        ['Sambal goreng tempe', '12,50', 'Pikante tempe'], ['Tumis goreng tahu petai', '12,50', 'Tahu met pete'], ['Sambal goreng boontjes', '12,50', 'Hete boontjes'],
        ['Sayur lodeh', '12,50', 'Groenten in kokosmelk'], ['Gulai nangka', '13,50', 'Jonge jackfruit'], ['Tahu goreng Bandung', '12,50', 'Gebakken tahu']] },
      { id: 'ei', naam: 'Ei', items: [
        ['Sambal goreng telor', '4,00', 'Ei in licht pikante kokos'], ['Telor belado', '4,00', 'Ei met Spaanse pepers'], ['Dadar jawa', '11,50', 'Javaanse omelet'],
        ['Tahu telor', '16,50', 'Omelet met tahu'], ['Dadar isi', '21,50', 'Omelet met vlees gevuld']] },
      { id: 'bij', naam: 'Bijgerechten', items: [
        ['Krupuk', '3,50', ''], ['Maniok', '3,50', ''], ['Emping', '4,50', ''], ['Pindasaus', '3,50', ''], ['Serundeng', '3,25', ''],
        ['Kentang belado', '3,75', ''], ['Nasi putih', '3,75', ''], ['Nasi kuning', '6,00', ''], ['Nasi goreng', '6,00', ''], ['Nasi Jawa', '7,00', ''], ['Bami goreng', '7,00', '']] }
    ]
  },
  afhalen: {
    rijsttafels: [
      { naam: 'Banten', prijs: '35,50', extra: 'p.p., min. 2 personen', items: [
        ['Sate sapi', '2 stokjes sate van runderhaas'], ['Sate kambing', '2 stokjes sate van geitenvlees'], ['Sate ayam', '2 stokjes kipsate'],
        ['Sate udang', 'Garnalensate'], ['Sate lilit', '2 stokjes sate van vis'], ['Sate tahu/tempe', 'Vegetarische sate'],
        ['Gulai sayuran', 'Groenten in kerrie-kokosmelk'], ['Urap urap', 'Groenten met gekruide kokos'], ['Nasi putih', 'Witte rijst'],
        ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Sukabumi', prijs: '28,00', extra: 'p.p.', items: [
        ['Daging rendang', 'Rundvlees met pittige kokos'], ['Daging smoor', 'Rundvlees met kecap'], ['Sate ayam', '1 stokje kipsate'],
        ['Sate kambing', 'Sate van geitenvlees'], ['Ayam gulai', 'Kip in kerrie kokos'], ['Telor balado', 'Ei met Spaanse pepers'],
        ['Ikan saos mangut', 'Pittige roodbaars'], ['Gado-gado', 'Groenten met pindasaus'], ['Gulai sayuran', 'Groenten in kerrie-kokosmelk'],
        ['Nasi putih', 'Witte rijst'], ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Bandung', prijs: '30,75', extra: 'p.p.', items: [
        ['Daging rendang', 'Rundvlees met pittige kokos'], ['Daging smoor', 'Rundvlees met kecap'], ['Sate ayam', '1 stokje kipsate'],
        ['Sate kambing', '1 stokje sate van geitenvlees'], ['Ayam bumbu gulai', 'Licht pikante kip'], ['Ikan saos mangut', 'Pittige roodbaars'],
        ['Sambal goreng udang', 'Pikante garnaal'], ['Sate udang', 'Garnalensate'], ['Telor balado', 'Ei met Spaanse pepers'],
        ['Urap urap', 'Groenten met gekruide kokos'], ['Gulai sayuran', 'Groenten in kokosmelk'], ['Sambal goreng buncis', 'Hete boontjes'],
        ['Nasi putih', 'Witte rijst'], ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Bogor', prijs: '28,00', extra: 'p.p., vegetarisch', items: [
        ['Sambal goreng tempe', 'Licht pikante soyakoek'], ['Gado-gado', 'Groenten in pindasaus'], ['Gulai sayuran', 'Groenten in kerrie-kokosmelk'],
        ['Sate tahu', 'Sate van tahu'], ['Sate tempe', 'Sate van tempe'], ['Urap-urap', 'Groenten met licht gekruide kokos'],
        ['Telor balado', 'Ei met Spaanse pepers'], ['Tumis goreng tahu petai', 'Tahu met petehbonen'], ['Terong belado', 'Aubergine met Spaanse pepers'],
        ['Nasi putih', 'Witte rijst'], ['Acar', 'Zoetzuur'], ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Serundeng', 'Kokosschaafsel']] },
      { naam: 'Pangandaran', prijs: '30,75', extra: 'p.p., vis en zeevruchten', items: [
        ['Ikan belado', 'Roodbaars in sambal'], ['Sambal goreng kupang', 'Mosselen in sambalkokos'], ['Sambal goreng udang', 'Pikante garnaal'],
        ['Sate udang', 'Garnalensate'], ['Ikan pepesan', 'Makreel in bananenblad'], ['Sarang kupang', 'Mosselen in beslag'],
        ['Urap urap', 'Groenten met gekruide kokos'], ['Tumis goreng tahu petai', 'Tahu met petehbonen'], ['Sate lilit', 'Sate van vis'],
        ['Nasi putih', 'Witte rijst'], ['Kentang belado', 'Zoet gebakken aardappelfrietjes'], ['Acar', 'Zoetzuur'], ['Serundeng', 'Kokosschaafsel']] }
    ],
    rubrieken: [
      { id: 'voor', naam: 'Voorgerechten', items: [
        ['Soto ayam madura', '6,50', 'Javaanse kippensoep'], ['Soto Bandung', '7,50', 'Runderbouillon'], ['Sop tomat', '6,50', 'Tomatensoep'],
        ['Lumpia', '2,75', 'Loempia gevuld met kip en groenten'], ['Pastel', '3,50', 'Deeg gevuld met kip en groenten'],
        ['Risoles', '3,50', 'Flensje gevuld met kip en groenten'], ['Perkedel jagung', '3,50', '2 maiskoekjes'], ['Mini lumpia’s', '2,75', '6 mini loempiaatjes'],
        ['Lemper', '3,75', 'Kleefrijst met kipvulling'], ['Soto betawi', '7,00', 'Rundvleessoep met santen'], ['Udang goreng tepung', '8,00', 'Gebakken garnalen'],
        ['Gorengan Bandung', '16,00', 'Diverse gebakken hapjes']] },
      { id: 'sate', naam: 'Saté', noot: 'Geroosterd, 3 stokjes per portie.', items: [
        ['Sate ayam', '6,90', 'Sate van kippenvlees'], ['Sate sapi', '9,90', 'Sate van rundvlees'], ['Sate kambing', '9,60', 'Sate van geitenvlees'],
        ['Sate udang', '7,50', 'Garnalensate'], ['Sate tahu/tempe', '6,00', 'Sate van soya'], ['Sate lilit', '7,50', 'Sate van vis']] },
      { id: 'vlees', naam: 'Vlees', noot: 'Met witte rijst. Nasi goreng enz. voor € 1,75 extra.', items: [
        ['Daging smoor', '17,00', 'Gesmoord rundvlees'], ['Daging rendang', '17,00', 'Pikant rundvlees'], ['Daging gulai', '18,00', 'Rundvlees met kerrie'],
        ['Tongseng kambing', '20,00', 'Geitenvlees met groenten'], ['Gulai kambing', '20,00', 'Geitenvlees met kerrie'], ['Iga bakar Bandung', '24,00', '']] },
      { id: 'vis', naam: 'Vis', noot: 'Met witte rijst. Nasi goreng enz. voor € 1,75 extra.', items: [
        ['Ikan goreng belado', '16,50', 'Roodbaars met Spaanse pepers'], ['Ikan bumbu acar', '16,50', 'Roodbaars in zoetzure saus'],
        ['Pepes ikan', '21,50', 'Makreel in bananenblad'], ['Ikan teri', '16,50', 'Mini visjes'], ['Udang rica rica', '16,50', 'Garnalen met sambal & citroengras'],
        ['Udang kecap', '16,50', 'Garnalen met ketjap'], ['Sambal goreng udang', '16,50', 'Garnalen in kokos-sambal'], ['Udang taotjo', '16,00', 'Garnalen in taotjo'],
        ['Sambal goreng kupang', '16,50', 'Mosselen in sambal-kokossaus'], ['Sarang kupang', '8,50', 'Mosselnestjes']] },
      { id: 'kip', naam: 'Kip', noot: 'Met witte rijst. Nasi goreng enz. voor € 1,75 extra.', items: [
        ['Ayam bakar padang', '15,50', 'Pikant gebakken kippenvleugels'], ['Ayam rica rica', '15,50', 'Kip in sambal citroengras'],
        ['Ayam gulai', '15,50', 'Kip in kerrie kokos'], ['Ayam kecap', '15,50', 'Kip met kecap'], ['Ayam rujak', '15,00', 'Pittig kipgerecht']] },
      { id: 'groenten', naam: 'Groenten', items: [
        ['Karedok', '10,50', 'Groenten met een pindadressing'], ['Gado-gado', '10,50', 'Groenten met pindasaus'], ['Sambal goreng tempe', '10,50', 'Pikante tempe'],
        ['Tumis goreng tahu petai', '10,50', 'Tahu met pete'], ['Sambal goreng boontjes', '10,50', 'Hete boontjes'], ['Sayur lodeh', '10,50', 'Groenten in kokosmelk'],
        ['Gulai nangka', '12,00', 'Jonge jackfruit in kerriesaus'], ['Lotek', '12,00', 'Groenten in pinda-curcumasaus'], ['Tahu goreng Bandung', '12,00', 'Gebakken tahu']] },
      { id: 'ei', naam: 'Ei', items: [
        ['Sambal goreng telor', '3,70', 'Ei in licht pikante kokos'], ['Telor belado', '3,70', 'Ei met Spaanse pepers'], ['Dadar jawa', '10,00', 'Javaanse omelet'],
        ['Tahu telor', '15,00', 'Omelet met tahu'], ['Dadar isi', '20,00', 'Omelet gevuld met rundvlees'], ['Telor bumbu kemangi', '3,70', 'Ei met kemangi']] },
      { id: 'bij', naam: 'Bijgerechten & zoet', items: [
        ['Krupuk', '3,50', 'Kroepoek'], ['Maniok', '3,50', 'Cassavechips'], ['Emping', '4,50', 'Chips van melindjonoten'], ['Pindasaus', '3,50', ''],
        ['Serundeng', '3,25', 'Kokosschaafsel'], ['Kentang belado', '3,75', 'Zoetgebakken aardappelfrietjes'], ['Nasi putih', '3,50', 'Witte rijst'],
        ['Nasi kuning', '6,00', 'Gele rijst'], ['Nasi goreng', '6,00', 'Gebakken rijst'], ['Bami goreng', '6,50', 'Dunne bami'], ['Nasi Jawa', '6,50', 'Pikante nasi goreng'],
        ['Acar ketimun', '4,50', 'Zoetzuur van komkommer'], ['Pisang goreng', '5,00', 'Gebakken banaan'],
        ['Cendol', '6,00', 'Kokosmelk met palmsuiker, jackfruit en rijstemeel'], ['Spekkoek', '4,50', '']] }
    ]
  }
};
