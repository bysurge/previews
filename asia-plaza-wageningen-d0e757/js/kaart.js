// Menu data, overgenomen van asia-plaza.nl (restaurant- en afhaalkaart, november 2026).
// Restaurantkaart: [nummer, naam, omschrijving, prijs]
window.RESTAURANT = [
  { id: 'soepen', t: 'Soepen', items: [
    ['120', 'WanTan Tang', 'Kipbouillon met kipflensjes', '6,95'],
    ['121', 'SuanLa Tang', 'Pikante rijk gevulde groentensoep, gebonden', '6,95'],
    ['122', 'HongQie Tang', 'Zoete Chinese tomatensoep', '5,75'],
    ['123', 'JiTang', 'Chinese kippensoep', '5,50'],
    ['124', 'Chi Tang', 'Chinese haaienvinnensoep', '6,50'],
    ['125', 'ZhaoPai Tang', 'Gebonden fijne groenten en garnaal', '7,50'],
    ['126', 'ShuiJiao Tang', 'Kipbouillon met garnalenflensjes', '7,50']
  ]},
  { id: 'voor', t: 'Warme voorgerechten', items: [
    ['130', 'ChunJuan', 'Huisgemaakte Chinese loempiaatjes', '5,50'],
    ['131', 'Pangsit goreng', 'Krokant gebakken kipflensjes met zoetzure saus', '6,75'],
    ['132', 'Pisang Goreng', 'Gebakken bananen', '4,95'],
    ['133', 'Indische loempia', 'Grote loempia met gestoofd rundvlees', '9,00'],
    ['134', 'Zha DaXia', 'Gepaneerde garnalen', '6,95'],
    ['136', 'XiaJiao', 'Gestoomde garnalenflensjes', '8,90'],
    ['137', 'Shao Mai', 'Gestoomde vleestasjes', '7,75'],
    ['139', 'Saté Babi', 'Geroosterde varkenssaté', '6,75'],
    ['140', 'Hors-d’oeuvre', 'Combinatie van warme hapjes', '9,50'],
    ['141', 'Zhongshi DianXin', 'Combinatie van gestoomde en gebakken hapjes (min. 2 pers.)', '14,95 p.p.']
  ]},
  { id: 'bij', t: 'Bijgerechten', items: [
    ['150', 'Kroepoek', '', '4,50'],
    ['152', 'Kali Mifen', 'Kerrie mihoen met Chashao vlees', '8,00 p.p.'],
    ['153', 'Kali Fang', 'Pikant gebakken kerrie rijst', '8,00 p.p.'],
    ['154', 'Xiao Shencai', 'Gemengde verse wok groenten', '9,50 p.p.'],
    ['155', 'Chinese Mie of Mihoen', '', '9,75 p.p.']
  ]},
  { id: 'mandarijn', t: 'Mandarijnse keuken', zh: '北京餐', intro: 'De noordelijke kookstijl, ook wel de Beijing keuken genoemd, naar de keizerlijke stad Beijing. Er wordt veelvuldig gebruik gemaakt van knoflook, uien, sojasaus en rijstwijn. Een van de hoogtepunten is de wereldberoemde Peking eend.', items: [
    ['160', 'Saam Sin Ap', 'Geroosterde Peking eend met Gongbao saus', '23,50'],
    ['161', 'BaBao Ya', '¼ eend op een bed van diverse soorten vlees, garnalen en groenten', '24,00'],
    ['162', 'JiangBao Niu', 'Ossenhaas in pikante Hoisin saus', '22,00'],
    ['163', 'YuXiang Yaoguo Rousi', 'Varkensfilet met cashewnoten in licht pikante saus', '22,00'],
    ['164', 'Taoyuan San Wei', 'Combinatie van varkenshaas, kipfilet, garnalen en groenten', '22,75']
  ]},
  { id: 'canton', t: 'Cantonese keuken', zh: '广东餐', intro: 'De streek Canton kent een mild klimaat en is een zeer vruchtbare streek waar vele soorten vruchten groeien.', items: [
    ['170', 'Tangcu Rou', 'Cantonese koeloeyoek in zoetzure saus', '21,00'],
    ['171', 'Lizhi Jicao', 'Kipfilet met lychee vruchten', '21,25'],
    ['172', 'ChaShao', 'Zoet-geroosterde varkenshaas', '21,00'],
    ['173', 'Xian Boluo Ji', 'Kipfilet met verse ananas', '23,50'],
    ['174', 'Jingdu Niu Wo', 'Runderhaas in Hoisin saus', '22,25'],
    ['175', 'Pipa Xia', 'Pittige grote Black Tiger garnalen met jasje met kipgehakt', '26,50']
  ]},
  { id: 'sichuan', t: 'Sichuan keuken', zh: '四川餐', intro: 'Deze provincie in West-China kenmerkt zich door pittige gerechten. Rode pepers, sambal en chili-olie worden veelvuldig gebruikt.', items: [
    ['180', 'Jiaoyan Jicao', 'Pittige grote Black Tiger garnalen met jasje', '24,75'],
    ['181', 'Hechuan Niu', 'Biefstuk met peultjes en Chinese champignons in chilisaus', '22,50'],
    ['182', 'Mapo Muer Rou', 'Varkenshaas roergebakken met wolkenoor champignon', '22,95'],
    ['183', 'Bawang Ji', 'Malse kipfilet met broodkruimels in pittige saus en fijn gesneden groenten', '23,25'],
    ['184', 'GongBao Ji', 'Kipfilet met paprika in Gongbao saus, licht pittig', '22,25'],
    ['185', 'Sieuw YeKei', 'Krokante kipfilet met pittige kruiden en paprika', '22,75'],
    ['186', 'Youlong Xifeng', 'Krokante kipfilet met pittige kruiden en paprika', '24,95']
  ]},
  { id: 'nanjing', t: 'Nanjing keuken', zh: '南京餐', intro: 'In het oosten van China is het klimaat warmer; men houdt van snel en licht eten. Door de ligging aan de Yangtze-rivier is er naast vlees en gevogelte een groot aanbod vis en schaaldieren.', items: [
    ['190', 'Jielan Dasuan Ji', 'Kipfilet met broccoli in knoflooksaus', '21,95'],
    ['191', 'Gongbao Donggu Sanyang Rou', 'Mix van kip-, varkens- en rundvlees met Chinese champignons in licht pikante saus', '24,00'],
    ['194', 'Haoyou Xia', 'Gamba’s in oestersaus', '23,95']
  ]},
  { id: 'monggu', t: 'Keuken van MongGu', zh: '蒙古餐', intro: 'Deze provincie staat bekend om de grill- en barbecuegerechten, ook wel Tieban genoemd. De gerechten komen direct van het vuur op een hete gietijzeren schaal.', items: [
    ['200', 'Tieban Qingjiao Yuan', 'Paprikaringen gevuld met gehakt van kip, varken en garnalen', '25,00'],
    ['201', 'Tieban Sandi', 'Gegrilde varkenssaté', '25,00'],
    ['202', 'Tieban Niuliu', 'Gegrilde stukken bief', '25,95'],
    ['203', 'Tieban Mix', 'Mix van rundvlees, kipfilet, varken en groenten', '25,95'],
    ['204', 'Tieban Shao', 'Mix van rundvlees, kipfilet, varken en garnalen', '25,50'],
    ['205', 'Tieban Donggu Ya', 'Peking eend met Chinese champignons', '25,50'],
    ['206', 'Tieban Huozhi Ji', 'Kipfilet met pangang saus', '22,75'],
    ['207', 'Tieban Huozhi Yupian', 'Pangasiusfilet in zoete, licht pikante saus', '25,00'],
    ['208', 'Tieban Xia', 'Geroerbakken gamba’s met uien en knoflook', '25,50']
  ]},
  { id: 'rames', t: 'Indische rames schotels', zh: '印尼餐', items: [
    ['220', 'Nasi Goreng Rames speciaal', '2 soorten gestoofd rundvlees, babi pangang, kip pangang, saté, malachai (stoofgroenten), gado gado', '25,95'],
    ['221', 'Bami Goreng Rames speciaal', '2 soorten gestoofd rundvlees, babi pangang, kip pangang, saté, malachai (stoofgroenten), gado gado', '25,95']
  ]},
  { id: 'bao', t: 'Bao, de Chinese wokschaal', zh: '煲', intro: 'De gerechten worden kort geroerbakt en direct van het vuur geserveerd in een hete wokschaal, ook wel Bao genoemd.', items: [
    ['230', 'Haixian Bao', 'Seafood schaal van gamba’s, inktvis en pangasiusfilet', '25,00'],
    ['231', 'ShiJin Bao', 'Gecombineerde schaal van garnalen en vlees', '24,00'],
    ['232', 'Heijiao Niu Bao', 'Ossenhaas in zwarte pepersaus', '23,95']
  ]},
  { id: 'varken', t: 'Varkenshaas', zh: '肉餐', items: [
    ['240', 'Babi pangang', 'Mager gebakken varkensvlees', '20,95'],
    ['241', 'Huo Nan', 'Krokant gebakken babi-spek', '21,95'],
    ['242', 'Koeloeyoek', 'Gepaneerde varkenshaasblokjes met zoetzure saus', '19,50'],
    ['243', 'Varkenshaas champignons', 'Plakjes varkenshaas met champignons', '21,00']
  ]},
  { id: 'ei', t: 'Ei- en groentengerechten', items: [
    ['250', 'Foeyonghai met kipfilet', '', '19,25'],
    ['251', 'Foeyonghai met Chinese garnalen', '', '21,00'],
    ['252', 'Tjap tjoy met varkenshaas', '', '19,75'],
    ['253', 'Tjap tjoy met garnalen', '', '21,50'],
    ['254', 'Tjap tjoy met runderhaas', '', '21,00'],
    ['255', 'Tjap tjoy met kipfilet', '', '19,75']
  ]},
  { id: 'gevogelte', t: 'Gevogelte', zh: '禽餐', items: [
    ['260', 'Kip kerrie', '', '19,95'],
    ['261', 'Kip champignons', '', '19,95'],
    ['262', 'Kip ananas', '', '19,95'],
    ['263', 'Donggu Ji', 'Roergebakken kipfilet met Chinese champignons', '21,00'],
    ['264', 'FuZhi Ya', 'Peking eend met pikante saus', '23,50']
  ]},
  { id: 'garnalen', t: 'Garnalen', zh: '虾餐', items: [
    ['270', 'Zha Daxia', 'Garnalen in krokante loempiavelletjes', '23,50'],
    ['271', 'Maogu Xia', 'Garnalen met champignons', '23,95'],
    ['272', 'Kali Xia', 'Garnalen in kerriesaus', '23,95'],
    ['273', 'Huozhi Xia', 'Garnalen in pangang saus', '23,95'],
    ['274', 'Donggu Xia', 'Garnalen met shiitake', '24,25']
  ]},
  { id: 'rund', t: 'Runderhaas', zh: '牛餐', items: [
    ['280', 'Kali Niu', 'Runderhaas in kerriesaus', '22,25'],
    ['281', 'DouChi Niu', 'Runderhaas in zwarte bonensaus', '22,25'],
    ['282', 'Huozhi Niu', 'Runderhaas in pikante saus', '22,25']
  ]},
  { id: 'kind', t: 'Kinderschotels', items: [
    ['290', 'Frites met kipsaté en mayonaise', '', '12,50'],
    ['291', 'Frites met frikandel en mayonaise', '', '12,50'],
    ['292', 'Nasi of bami goreng met kipsaté', '', '12,50']
  ]},
  { id: 'vega', t: 'Vegetarisch', zh: '素', items: [
    ['300', 'Luohan Cai Bao', 'Gemengde groenten en tofu in een heet wokschaaltje', '21,95'],
    ['301', 'Gado Gado', 'Taugé, komkommer en wortel in pindasaus', '19,95'],
    ['302', 'Late Tofu', 'Tofu in licht pikante saus', '21,95']
  ], menu: { t: 'Vegetarisch menu', sub: 'Vanaf 2 personen', p: '29,75 per persoon', lines: [
    ['Cai Tang', 'Gebonden groentesoep'], ['Pisang goreng', 'Gebakken bananen'], ['Foeyonghai', 'Gebakken omelet met pangang saus'],
    ['Malachai', 'Gestoofde kool in kerrie'], ['Luohan Cai', 'Gemengde wokgroenten'], ['Su Doufubao', 'Tofu in pikante saus']
  ]}},
  { id: 'mihoen', t: 'Mihoen', items: [
    ['310', 'Mihoen met Chinese garnalen', '', '21,25'],
    ['311', 'Mihoen met kipfilet', '', '19,75'],
    ['312', 'Xingzhou Mihoen', 'Mihoen met Chashao en kleine garnalen met pittige kerriekruiden', '20,95']
  ]},
  { id: 'combi', t: 'Nasi / bami schotels', items: [
    ['313', 'Shenrou fang of mian', 'Nasi/bami met babi pangang, tjap tjoy en saté', '21,75'],
    ['314', 'Hurou fang of mian', 'Nasi/bami met babi pangang, foeyonghai en saté', '21,75'],
    ['320', 'Huonan Chashao Huorou', 'Nasi/bami met babi spek, babi pangang en Chashao', '23,50'],
    ['321', 'Zaji Chashao Huorou', 'Nasi/bami met kip pangang, babi pangang en Chashao', '23,50'],
    ['322', 'Gongbaorou Chashao Huorou', 'Nasi/bami met varkenshaas in Gongbao saus, babi pangang en Chashao', '23,50'],
    ['323', 'Daxia Chashao Huorou', 'Nasi/bami met gepaneerde garnalen, babi pangang en Chashao', '23,50'],
    ['324', 'Kaliji Chashao Huorou', 'Nasi/bami met kip kerrie, babi pangang en Chashao', '23,50'],
    ['325', 'Malan Chashao Huorou', 'Nasi/bami met daging roedjak, babi pangang en Chashao', '23,50']
  ]}
];

// Menu's in het restaurant
window.MENUS = [
  { t: 'Feestdiner', nr: '102', sub: 'Vanaf 2 personen', p: '32,50 p.p.', lines: ['ZhaoPai Tang, gebonden soep met fijne groenten en garnaal', 'Hors-d’oeuvre, combinatie van warme hapjes', 'Babi pangang, gebakken mager vlees met pangang saus', 'ChaShao, geroosterde varkenshaas', 'GongBaoJi, kipfilet met groenten in licht pikante saus', 'Tiepan Niu, biefstuk, uien en Chinese champignons', 'Koffie of thee'] },
  { t: 'GuangDong menu', sub: 'Vanaf 2 personen', p: '39,80 p.p.', lines: ['CaiTang, gebonden soep met groenten', 'Hors-d’oeuvre, combinatie van warme hapjes', 'ChaShao, geroosterde varkenshaas', 'Xinxian BoLuoJi, kipfilet met verse ananas', 'YangCheng ChaoCao, bieffilet in Canton stijl', 'YangCong Xia, Chinese garnalen met verse uien', 'Chinese thee'] },
  { t: 'Sichuan menu', sub: 'Vanaf 2 personen', p: '37,75 p.p.', lines: ['SuanLa Tang, pikante rijk gevulde Sichuan soep', 'Hors-d’oeuvre, combinatie van warme hapjes', 'HeChuan Niu, bieffilet met bamboe uit de wok', 'GongBaoJi, kipfilet in pikante gongbao saus', 'Tieban Shen, gecombineerde tieban vleesschotel', 'MaPo MuEr Yu, tongfilet met wolkenoor (champignon)', 'Chinese thee'] },
  { t: 'Surprise menu', sub: 'Menu A, B of C, vanaf 2 personen', p: '31,00 / 38,50 / 48,95 p.p.', lines: ['Kunt u geen keuze maken? Laat u adviseren door onze chef-kok. Rekening houdend met uw voorkeuren en wensen verrast hij u graag met de specialiteiten van de Chinese keuken.'] },
  { t: 'Chinese rijsttafel', nr: '105', sub: 'Vanaf 2 personen', p: '29,95 p.p.', lines: ['Keuze uit tomatensoep of kippensoep', 'Foe yong hai, babi pangang, koeloeyoek, saté ajam, GongBaoJi (kipfilet, licht pikant)', 'Koffie of thee'] },
  { t: 'Indonesische rijsttafel', nr: '106', sub: 'Vanaf 2 personen', p: '31,00 p.p.', lines: ['Keuze uit tomatensoep of kippensoep', 'Babi pangang, malachai (stoofgroenten), atjar, spiegeleieren, gado gado, kip kerrie, daging smoor, daging roedjak, saté ajam, pisang goreng', 'Koffie of thee'] },
  { t: 'Chinees-Indonesische rijsttafel', sub: 'Vanaf 4 personen', p: '34,25 p.p.', lines: ['Keuze uit tomaten-, kippen- of haaienvinnensoep', 'Babi pangang, foe yong hai, kipfilet in kerriesaus, gepaneerde garnalen, koeloeyoek, saté ajam, daging smoor, daging roedjak, atjar, malachai (stoofgroenten), pisang goreng', 'Koffie of thee'] }
];

// Afhaalkaart: [nummer, naam, omschrijving, prijs]
window.AFHAAL = [
  { t: 'Soepen', items: [
    ['10', 'Sun La Tong', 'Pikante rijkgevulde Sichuansoep', '5,50'],
    ['11', 'Sai Choi Tong', 'Gebonden Chinese groentensoep', '5,35'],
    ['12', 'Mauku Tong', 'Heldere bouillon met champignons', '5,45'],
    ['13', 'Yu Chi Tong', 'Haaienvinnensoep', '5,25'],
    ['14', 'Kai Tong', 'Chinese kippensoep', '5,25'],
    ['15', 'Kur Tong', 'Chinese zoete tomatensoep', '5,25'],
    ['16', 'Hakao Tong', 'Kipbouillon met garnalenflensjes en groenten', '7,20'],
    ['17', 'Wantang Tong', 'Kipbouillon met kipflensjes en groenten', '6,70']
  ]},
  { t: 'Voorgerechten', items: [
    ['20', 'Loempia speciaal', '', '6,25'],
    ['21', 'Indische loempia', 'Extra gevuld met gestoofd vlees', '8,75'],
    ['22', 'Chinese loempia', 'Mini loempia', '4,95'],
    ['23', 'Saté ajam', 'Kip', '7,45'],
    ['26', 'Pangsit goreng', '', '7,75'],
    ['27', 'Pisang goreng', '', '7,75'],
    ['28', 'Siu mai', 'Pasteitjes met vlees', '8,75'],
    ['31', 'Loempia babi pangang', 'Extra gevuld met babi pangang', '9,00']
  ]},
  { t: 'Diversen', items: [
    ['40', 'Kroepoek oedang / casava', '', '4,00'],
    ['41', 'Witte rijst', '', '5,50'],
    ['42', 'Pommes frites', '', '4,95'],
    ['43', 'Atjar tjampoer', '', '4,00'],
    ['44', 'Pindasaus', '250 ml / 500 ml', '3,50 / 4,25'],
    ['45', 'Pikante saus', '250 ml / 500 ml', '3,50 / 4,25']
  ]},
  { t: 'Vegetarisch', items: [
    ['50', 'Chap tjap tjoy', 'Gemengde verse groenten', '13,25'],
    ['51', 'Kur foe yong hai', 'Omelet met pikante saus', '13,75'],
    ['52', 'Mauku tonku mie', 'Met twee wilde soorten champignons', '13,50'],
    ['53', 'Late tau hoe', 'Tofu met groenten in pikante saus', '16,25']
  ]},
  { t: 'Asia Plaza combinaties', items: [
    ['60', 'Nasi of bami Asia Plaza', 'Met babi pangang, foe yong hai, koe loe yuk en saté', '21,10'],
    ['61', 'Nasi of bami Asia Plaza', 'Met babi pangang, tjap tjoy, koe loe yuk en saté', '21,10'],
    ['62', 'Nasi of bami Asia Plaza', 'Met babi pangang, kipfilet in kerriesaus, koe loe yuk en saté', '21,10'],
    ['63', 'Nasi of bami Asia Plaza', 'Met babi pangang, kipfilet met champignons, koe loe yuk en saté', '21,10']
  ]},
  { t: 'Nasi of bami goreng', items: [
    ['70', 'Nasi of bami goreng', '', '7,95'],
    ['71', 'Nasi of bami goreng', 'Met gestoofd vlees', '12,15'],
    ['72', 'Nasi of bami goreng speciaal', 'Halve kip', '13,40'],
    ['73', 'Nasi of bami goreng speciaal', 'Met 3 stokjes saté', '13,75'],
    ['74', 'Nasi of bami goreng', 'Met gesneden kip en groenten', '14,25'],
    ['75', 'Nasi of bami goreng', 'Met gesneden vlees en groenten', '14,55'],
    ['76', 'Nasi of bami goreng', 'Met gesneden runderhaas en groenten', '16,15'],
    ['77', 'Nasi of bami goreng', 'Met Chinese garnalen en groenten', '20,80'],
    ['78', 'Nasi of bami goreng', 'Met gebraden kip, babi pangang en saté', '20,80'],
    ['79', 'Nasi of bami goreng', 'Met foe yong hai, babi pangang en saté', '20,80'],
    ['80', 'Nasi of bami goreng', 'Met tjap tjoy, babi pangang en saté', '20,80'],
    ['81', 'Nasi of bami goreng', 'Met daging roedjak, babi pangang en saté', '20,80'],
    ['82', 'Nasi of bami goreng', 'Met koe loe yuk, babi pangang en saté', '20,80']
  ]},
  { t: 'Mihoen', items: [
    ['90', 'Mihoen met vlees', '', '12,70'],
    ['91', 'Mihoen met kipfilet', '', '13,50'],
    ['92', 'Mihoen met Chinese garnalen', '', '16,45'],
    ['93', 'Mihoen', 'Met foe yong hai, babi pangang en saté', '21,80'],
    ['94', 'Mihoen', 'Met gebraden kip, babi pangang en saté', '21,80'],
    ['95', 'Mihoen', 'Met garnalen, babi pangang en saté', '21,80'],
    ['96', 'Mihoen', 'Met koe loe yuk, babi pangang en saté', '21,80'],
    ['97', 'Mihoen', 'Met daging roedjak, babi pangang en saté', '21,80']
  ]},
  { t: 'Tjap tjoy', items: [
    ['100', 'Tjap tjoy met vlees', 'Gemengde Chinese groenten', '14,75'],
    ['101', 'Tjap tjoy met kipfilet', '', '15,75'],
    ['102', 'Tjap tjoy met runderhaas', '', '17,15'],
    ['103', 'Tjap tjoy met Chinese garnalen', '', '17,65']
  ]},
  { t: 'Foe yong hai', items: [
    ['110', 'Foe yong hai met vlees', 'Chinese omelet', '14,75'],
    ['111', 'Foe yong hai met kipfilet', '', '15,75'],
    ['112', 'Foe yong hai met Chinese garnalen', '', '18,00'],
    ['113', 'Foe yong hai speciaal', 'Met extra babi pangang en koe loe yuk', '16,85']
  ]},
  { t: 'Garnalen en vis', items: [
    ['120', 'Garnalen in loempiavel', 'Met zoetzure saus', '18,40'],
    ['121', 'Garnalen in loempiavel', 'Met pikante saus', '18,40'],
    ['122', 'Chinese garnalen in kerriesaus', '', '18,40'],
    ['123', 'Chinese garnalen in pikante saus', '', '18,40'],
    ['124', 'Chinese garnalen', 'Met Chinese hete kool in oestersaus', '18,40'],
    ['125', 'Chinese garnalen', 'Met champignons in oestersaus', '18,40'],
    ['126', 'Chinese garnalen', 'Met bamboescheuten in pikante saus', '18,90'],
    ['127', 'Chinese garnalen', 'Met Chinese champignons', '19,95'],
    ['133', 'Yu pjee', 'Gefrituurde visfilet in pikante saus', '17,90']
  ]},
  { t: 'Peking eend', items: [
    ['140', 'Peking eend', 'Met champignons en pikante saus', '19,90'],
    ['141', 'Peking eend in kerriesaus', '', '19,90'],
    ['142', 'Peking eend', 'Met Chinese champignons', '20,90']
  ]},
  { t: 'Varkensvlees', items: [
    ['150', 'Cha chiuw', 'Chinese geroosterde babi pangang', '16,75'],
    ['151', 'Babi pangang', 'Gebakken mager vlees', '16,75'],
    ['152', 'Babi pangang spek', 'Geroosterde babi spek', '16,75'],
    ['153', 'Babi pangang in ketjapsaus', '', '16,75'],
    ['154', 'Varkenshaas in kerriesaus', '', '16,75'],
    ['155', 'Varkenshaas in pikante saus', '', '16,75'],
    ['157', 'Varkenshaas in gonbao saus', 'En groenten', '15,90'],
    ['159', 'Varkenshaas met bamboescheuten', '', '15,90'],
    ['160', 'Varkenshaas met Chinese hete kool', '', '16,40'],
    ['161', 'Varkenshaas met champignons', '', '15,90'],
    ['162', 'Varkenshaas met Chinese champignons', '', '16,40'],
    ['164', 'Varkenshaas met broccoli', '', '16,40'],
    ['165', 'Varkenshaas met paprika', 'In pittige saus', '16,40'],
    ['166', 'Koe loe yuk', 'Gepaneerde varkenshaas met zoetzure saus', '16,75']
  ]},
  { t: 'Runderhaas', items: [
    ['170', 'Runderhaas in pikante saus', '', '18,65'],
    ['171', 'Runderhaas in kerriesaus', '', '18,65'],
    ['172', 'Runderhaas in tomatensaus', '', '18,65'],
    ['173', 'Runderhaas in pittige saus', '', '18,65'],
    ['174', 'Runderhaas met paprika', 'En pittige saus', '19,65'],
    ['175', 'Runderhaas met champignons', '', '18,65'],
    ['176', 'Runderhaas met Chinese champignons', '', '19,65'],
    ['177', 'Runderhaas met bamboescheuten', '', '18,65'],
    ['178', 'Runderhaas met Chinese hete kool', '', '18,65'],
    ['179', 'Runderhaas in oestersaus', '', '18,65'],
    ['180', 'Runderhaas in zwarte bonensaus', '', '18,65']
  ]},
  { t: 'Kip', items: [
    ['190', 'Ajam pangang', 'Geroosterde kip pangang', '17,85'],
    ['191', 'Gebraden halve kip', 'In pikante saus', '16,00'],
    ['192', 'Gefileerde kip in pikante saus', '', '17,15'],
    ['193', 'Gefileerde kip in kerriesaus', '', '17,15'],
    ['194', 'Gefileerde kip in tomatensaus', '', '17,15'],
    ['195', 'Gefileerde kip in zoetzure saus', '', '17,15'],
    ['196', 'Gefileerde kip in oestersaus', '', '17,15'],
    ['197', 'Gefileerde kip met ananas', '', '17,15'],
    ['198', 'Gefileerde kip met champignons', '', '17,15'],
    ['199', 'Gefileerde kip met Chinese champignons', '', '17,45'],
    ['200', 'Gefileerde kip met asperges', '', '17,15'],
    ['201', 'Gefileerde kip met bamboescheuten', '', '17,15'],
    ['202', 'Gefileerde kip met paprika', 'In pittige saus', '17,15'],
    ['203', 'Gefileerde kip met zwarte bonensaus', '', '17,15'],
    ['204', 'Gefileerde kip met Chinese hete kool', '', '17,15'],
    ['205', 'Koe loe kei', 'Gepaneerde kipfilet met zoetzure saus', '18,50']
  ]},
  { t: 'Indische gerechten', items: [
    ['210', 'Nasi of bami rames', '', '13,75'],
    ['211', 'Nasi of bami rames met saté', '', '14,75'],
    ['212', 'Nasi of bami rames speciaal', 'Met saté en kip', '16,25'],
    ['213', 'Nasi of bami rames Asia Plaza', 'Speciaal, een combinatie van 9 Indische schotels', '23,50'],
    ['214', 'Gado gado', '', '13,00'],
    ['215', 'Daging roedjak', 'Gestoofd rundvlees', '18,50']
  ]},
  { t: 'Kindermenu', items: [
    ['230', 'Nasi of bami met saté', '', '9,75'],
    ['231', 'Frites met kip', '', '9,75'],
    ['232', 'Frites met frikandel', '', '9,75'],
    ['233', 'Frites met saté', '', '9,75']
  ]},
  { t: 'Specialiteiten', items: [
    ['241', 'Weiku Sanxin', 'Mixed seafood in smaakvolle Mongoolse specerijen', '19,35'],
    ['242', 'Gonbao mix', 'Varkenshaas, kipfilet en runderhaas met groenten in gonbao saus', '18,90'],
    ['251', 'Sichuan niu', 'Beef in pikante Sichuan stijl', '18,15'],
    ['260', 'Huiku paktjoy kei', 'Chinese kool met kipfilet in Huiku saus', '18,15'],
    ['270', 'Saam sin ya', 'Geroosterde Peking eend met seizoensgroente in gonbao saus', '20,90'],
    ['271', 'Gonbao kei', 'Roergebakken kipfilet met groenten', '18,15'],
    ['272', 'Gonbao ha', 'Chinese garnalen in gonbao saus', '21,00']
  ]},
  { t: 'Rijst en mie specialiteiten', items: [
    ['280', 'Chinese bami met vlees', '', '13,95'],
    ['281', 'Chinese bami met Chinese garnalen', '', '17,00'],
    ['282', 'Sing chau fang', 'Nasi met garnalen en geroosterd vlees, pikant gekruid', '13,95'],
    ['283', 'Sing chau mihoen', 'Mihoen met garnalen en geroosterd vlees, pikant gekruid', '14,95'],
    ['284', 'Kerry fang', 'Roergebakken pikante nasi met vlees', '10,20']
  ]},
  { t: 'Oriëntaalse menu’s en rijsttafels', items: [
    ['290', 'Menu Canton Guang Dong', 'Voor 2 personen: cai tong (gebonden groentensoep), hors d’oeuvre, cha chiuw, jindu niu (runderhaas met peultjes in chilisaus), polo kei (kipfilet met ananas), jiao yan ha (Chinese garnalen roergebakken), lychees als nagerecht', '52,50'],
    ['291', 'Menu Sichuan (pittig)', 'Voor 2 personen: sun la tong, hors d’oeuvre, he chuan niu (runderhaas met bamboe), tiepan rou (pittige varkenshaas van de plaat), mapo mu’er yu (pangasiusfilet met wolkenoor), casava kroepoek', '52,50'],
    ['292', 'Rijsttafel Asia Plaza', 'Voor 4 personen: 18 verschillende Chinese en Indische gerechten', '76,00'],
    ['293', 'Chinese rijsttafel', 'Voor 2 personen: kroepoek, 2 stokjes saté, babi pangang, gon bao kei, koe loe yuk en foe yong hai', '42,25'],
    ['294', 'Chinese rijsttafel', 'Voor 4 personen: kroepoek, 4 stokjes saté, babi pangang, koe loe yuk, foe yong hai, tjap tjoy, Chinese garnalen, gon bao kei', '69,00'],
    ['295', 'Indische rijsttafel', 'Voor 1 persoon', '24,50'],
    ['296', 'Indische rijsttafel', 'Voor 2 personen: 12 warme en koude Indische schotels', '41,25']
  ]}
];
