// nr|naam|omschrijving|prijs  (prijzen zoals op lingfa.nl)
window.KAART = [
{id:'dimsum',t:'Dim sum',note:'Asian Bites: gezellig borrelen met Chinese hapjes ter grootte van tapas. U bestelt een aantal gerechten en deelt ze met uw tafelgenoten.',d:`
1|Mini loempia's|gevuld met groenten, 4 st|3.70
2|Kantonese loempia's|vlees en groenten, 2 st|4.90
3|Sieuw Mai|gefrituurde varkensvleespasteitjes, 3 st|4.40
4|Pisang Goreng|gebakken bananen, 2 st|3.10
5|Pangsit Goreng|gebakken deeglap met kip, 2 st|3.10
6|Ka Lee Kok|gefrituurde kerriehapjes, 3 st|3.20
7|Chinese gehaktballetjes|3 st|3.40
8|Vlees spareribs|2 st|5.00
9|Saté ajam|kipsaté, 2 st|5.60
10|Saté babi|vlees saté, 2 st|5.60
11|Kippenvleugels met chilisaus|3 st|5.10
12|Haai Kiem|krabpootjes, 2 st|6.00
13|Soi Kauw|gefrituurde deeglapjes met garnalen, 3 st|5.00
14|Butterfly|gepaneerde garnalen, 3 st|4.80
15|Garnalenloempia's|4 st|6.90
17|Gestoomde Sieuw Mai|vleespasteitjes, 3 st|5.90
18|Gestoomde Ha Kau|garnalenpasteitjes, 3 st|6.90
19|Gestoomde Ngau Ma|biefstukpasteitjes, 3 st|5.90
22|Gestoomde dim sum combinatie|5 st|9.50
23|Atjar|vegetarische salade|3.80
24|Kroepoek||4.10`},
{id:'soep',t:'Soepen',d:`
30|Tomatensoep||5.50
31|Kippensoep||5.50
32|Haaievinnensoep||5.80
33|Ling Fa soep||6.80
34|Pekingsoep|gebonden pikante soep|6.80
35|Wan Tan soep|kippensoep, garnalen en vleesballetjes|7.00`},
{id:'nasi',t:'Nasi en bami',note:'Traditionele Chinees-Indische gerechten.',d:`
40|Nasi of bami goreng speciaal|kippenpoten en kipsaté|15.00
41|Nasi of bami goreng|3 stokjes saté|15.00
42|Nasi of bami goreng|kippenlevers en groenten|15.80
43|Singapore|kerriepoeder, Chinese garnalen, varkensvlees en kipfilet|18.00
44|"Ling-Fa"|Chinese garnalen, Chinese champignons, varkensvlees en kipfilet|19.00
45|"À la Ling-Fa"|babi pangang, ko lo yuk, ajam pangang en 2 stokjes kipsaté|22.50`},
{id:'chowmin',t:'Chinese bami',d:`
50|Chow Min garnalen||21.00
51|Chow Min varkensvlees||17.00
52|Chow Min kipfilet||17.00
53|Chow Min biefstuk||19.00
54|Chow Min "Ling-Fa"|Chinese garnalen, varkensvlees, kip|20.00`},
{id:'mihoen',t:'Mihoen',d:`
60|Mihoen garnalen||21.00
61|Mihoen varkensvlees||17.00
62|Mihoen kipfilet||17.00
63|Mihoen biefstuk||19.00
64|Mihoen Singapore|kerriepoeder, Chinese garnalen, varkensvlees en kip|20.00`},
{id:'varken',t:'Varkensvlees',star:1,d:`
70|Babi Pangang|geroosterd varkensvlees|18.80
72|Ko Lo Yuk|gefrituurde gehaktballetjes zoetzuur|18.00
74|King Do Yuk|gemarineerd varkensvlees in Chinese tomaten-ketjapsaus|18.00
75|San Chow Yuk|varkensvlees gepaneerd met ananas en zoetzure pittige saus|18.50
76|Speenvarken|geroosterd varkensspek|18.80
77|Cha Sieuw|geroosterd varkensvlees met babi pangangsaus|18.80`},
{id:'kip',t:'Kip',star:1,d:`
90|Ajam Pangang|geroosterde kip|18.00
92|Ko Lo Kai|gefrituurde kippenballetjes zoetzuur|18.00
94|King Do Kai|gemarineerde kip in Chinese tomaten-ketjapsaus|18.00
95|San Chew Kai|kip gepaneerd, ananas zoetzuur|18.50
97|Mao Koe Kai|kip met champignons|18.50`},
{id:'ossenhaas',t:'Ossenhaas en lam',star:1,d:`
110|Ossenhaas saté|paprika en ui in ketjapsaus, 4 stokjes|31.00
111|Ye Heung Ngau Ting|roergebakken ossenhaas, pittige Szechuanse knoflooksaus|26.00
112|Tau Peng Nau Ting|pittige sambalsaus|26.00
113|Tjeung Pau Yeung Ting|roergebakken lamshaasjes, Hoi-sin en Tau-peng saus|28.00
114|Ka Lan Ngau Ting|ossenhaas met broccoli|26.00
115|Tong Koe Ngau Lau|biefstuk van de haas, Chinese champignonroomsaus|26.00
116|Hak Tjieuw Ngau Lau|biefstuk van de haas, zwarte pepersaus|27.50
117|Tchien Yeung Pha|in de wok gebakken lamskoteletten à la chef|32.00
118|Chuan La Ngau Ting|roergebakken ossenhaas, pittige saus door de chefkok|27.00
119|Kung Po Nau Ting|goed gekruide pittige saus|26.00
120|Sha Cha Nau Ting|pittige barbecuesaus|26.00`},
{id:'ei',t:'Ei',star:1,d:`
130|Foe Yong Hai kip||17.00
131|Foe Yong Hai garnalen||19.30
132|Foe Yong Hai krab en garnalen||20.30`},
{id:'veg',t:'Vegetarisch',star:1,d:`
140|Lo Hang Zhai|Chinese groenten met tofu|17.80
141|Mao Po Tofu|gebakken tofu met groenten in pittige saus|17.50
142|Gado Gado|groenten, taugé, pindasaus, kroepoek|16.40
143|Foe Yong Hai||16.50
144|Tjap Tjoy|groenten met taugé|16.50`},
{id:'groenten',t:'Groenten',star:1,d:`
150|Tjap Tjoy kip||16.90
151|Tjap Tjoy biefstuk||18.80
152|Tjap Tjoy varkensvlees||16.90
153|Tjap Tjoy garnalen||19.90
154|Tjap Tjoy "Ling-Fa"|Chinese garnalen, varkensvlees en kip|20.50`},
{id:'tipan',t:'Topanyaki',star:1,note:'Ti-pan is een oude Oosterse bereidingswijze die uw gerecht echt spettervers op tafel brengt. Op een gloeiendhete gietijzeren braadslee brandt de saus samen met de kruiden in het gerecht, dat daarna direct wordt geserveerd. Sauzen naar keuze: oestersaus, tausiesaus, konbaosaus, yushangsaus, zwarte pepersaus, taupensaus, ketjapsaus, zoetzure saus, pikante saus of kerriesaus.',d:`
160|Ti-pan Ying & Yang saté|mix van saté's|31.00
161|Ti-pan Ha Lok|ongepelde grote garnalen|31.50
162|Ti-pan Tja Kai|gefrituurde kipfilet|21.50
163|Ti-pan Kai|kipfilet|21.50
164|Ti-pan Voh Yuk|geroosterde babi pangang|21.80
165|Ti-pan Yuk|varkenshaas|21.50
166|Ti-pan Sieuw Ap|geroosterde Peking eend|29.00
167|Ti-pan Ngau Lau|biefstuk van de haas|33.00
168|Ti-pan Ngau|ossenhaas|29.50
169|Ti-pan Yeung Pha|lamskoteletten|33.00
170|Ti-pan Hak Tjieuw Ngau Lau|biefstuk van de haas in Chinese pepersaus|33.00
171|Ti-pan Hak Tjieuw Yeung Lau|lamshaasjes in Chinese pepersaus|33.00
172|Ti-pan Hajiao|gepelde garnalen|30.50
173|Ti-pan Long Lee|tongfilet|27.00`},
{id:'nachtegaal',t:'Nachtegaal',star:1,note:'In een nest, met cashewnoten en diverse groenten.',d:`
180|Yieun Kwo Ha Tin|gepelde garnalen|24.00
181|Yieun Kwo Yuk Ting|varkenshaas|21.50
182|Yieun Kwo Kai Ting|kipfilet|21.50
183|Yien Kwo Ngau Ting|ossenhaas|24.00
184|Yieun Kwo Yeung Ting|lamshaas|24.00
185|Tja Hui Chow|roergebakken vis met speciale Chinese groenten, samengesteld door de chefkok|24.00`},
{id:'combi',t:'Combinatie',star:1,note:'Stel zelf een menu samen: kies 2 van de onderstaande gerechten. € 23,00 per persoon.',list:['Babi Pangang','Foe Yong Hai','Tjap Tjoy (groenten met kip)','Ko Lo Yuk','Ajam Pangang','Saté (kipsaté)','Pisang Goreng','Kip kerrie (kip met currysaus en champignons)','Babi Ketjap (varkensvlees met ketchupsaus)']},
{id:'special',t:'Specialiteiten',star:1,d:`
200|Tjong Choi Ngau|roergebakken biefstuk met speciale Chinese groente|24.50
201|Chow Long Lee|gebakken tongfilet met diverse groenten|24.50
202|Suun Rong Ha|roergebakken garnalen met knoflook en diverse groenten|26.50
204|Vlees Kerrie Bao|Chinees stoofpotje met ossenhaas, varkenshaas en kipfilet|26.00
205|Hoi Sin Bao|Chinees stoofpotje met zeevruchten|27.50
206|Sie Tjap Samen Yu|gestoomde zalmfilet met Chinese zwarte bonen en Chinese sojasaus|29.00
207|Tjiw Yim Ha Lok|à la minute gefrituurde grote garnalen in halve schil, daarna roergebakken in vijfkruidenpoeder|31.00
209|Zha Da Ha|gepaneerde grote Chinese garnalen|27.00`},
{id:'indisch',t:'Indisch',d:`
222|Nasi rames speciaal|gebakken rijst, rundvlees met ketchupsaus en rundvlees met pittige saus, saté en kipdrumsticks|21.50
223|Bami rames speciaal|gebakken noodles, idem|21.50`},
{id:'kinder',t:'Kindermenu',d:`
240|Patat met kippenpoten||12.00
241|Patat met sateestokjes||12.00
242|Patat met frikadel||10.50
243|Patat met kroket||10.50`}
];
window.RIJSTTAFELS = [
['502','Verrassingsmenu','vanaf 2 personen','4 gangen, koffie of thee, ijs','62,00'],
['505','Chinese rijsttafel','vanaf 2 personen','Pangsit Goreng, kippensoep of tomatensoep, Babi Pangang, Foe Yong Hai (omelet met tomaten-ketchupsaus), Ko Lo Yuk, Tjap Tjoy (groenten met kip), kipsaté, koffie of thee','31,00'],
['506','Indische rijsttafel','vanaf 2 personen','kippensoep of tomatensoep, rundvlees roedjak, rundvlees smoor, Ajam Pangang, Babi Pangang, Foe Yong Hai, Pisang Goreng, Gado Gado, kipsaté, Indische groenten, koffie of thee','31,00'],
['507','Chinees-Indische rijsttafel','vanaf 4 personen','kippensoep of tomatensoep, Babi Pangang, Ko Lo Yuk, Pisang Goreng, Ma Lai Yuk, saté atjar, Foe Yong Hai, Tjap Tjoy, Kong Po garnalen, koffie of thee','34,00'],
['508','"À la Ling-Fa" menu','vanaf 2 personen','Kantonese loempia\'s, kippensoep of tomatensoep, Babi Pangang, kipsaté, zelf 2 samenstellen uit Tjap Tjoy, Foe Yong Hai, Ko Lo Yuk, Mao Koe Kai, Ka Lee Kai, Tao Si Kai, Babi Ketjap, Kung Po Yuk; koffie of thee','31,50'],
['509','Duck menu','vanaf 2 personen','Yap Keung (eendenloempia\'s), Yap Tong (eendensoep), Fow Ap (geroosterde Peking eend, pittige saus), Pa Zhang Pa Ap (Peking eend met groenten, garnalen en vlees), Po Low Ap (Peking eend met verse ananas), koffie of thee','49,50'],
['510','Kanton menu','vanaf 2 personen','Yeung Haai Kiem (gefrituurde krabschaar), Wan Tan Tong (vleesballetjes in kippenbouillon), Yieun Kwo Kai Ting (kipfilet met cashewnoten, ananas en groenten), Suun Rong Ha (gebakken garnalen in garnalenknoflooksaus), King Do Yuk, koffie of thee','49,50'],
['511','Shanghai menu','vanaf 2 personen','Butterfly, garnalenloempia\'s, mini loempia\'s, Shanghai Tong (licht gebonden soep met groenten en Chinese champignons), Cha Sieuw, Kuai Tei Kai Ting (kipblokjes met cashewnoten en groenten), Tja Hui Chow (roergebakken vis met Chinese groenten), koffie of thee','49,50'],
['512','Szecheun menu','vanaf 2 personen','gevulde loempia\'s, Sun Laat Tong (pikante soep uit het district Szecheun), Tau Peng Kai (kipfilet in Szecheunse sambalsaus), Kong Po Ngau (roergebakken biefstuk, zoet-pittige saus), Tepan Hajiao (grote gebakken garnalen op ti-pan), koffie of thee','49,50']
];
window.DRANKEN = {
'Fris, warm en bier':`Cappuccino|3.70
Espresso|3.40
Dubbele espresso|4.10
Thee|3.40
Koffie|3.40
Chinese thee|3.90
Grote bier|8.10
Bier|4.10
Bier (per fles)|4.00
Chinese bier|4.30
Coca-Cola, Cola Zero|3.30
Sinas, Fanta|3.30
7-Up, Sprite|3.30
Tonic|3.40
Spa rood|3.30
Spa blauw|3.30
Cassis|3.30
Appelsap|3.30
Bitter lemon|3.30
Chocomelk|3.30
Fristi|3.30
Ice tea|3.40`,
'Wijn en sterk':`Chinese witte wijn|5.50
Chinese rode wijn|5.50
Rosé|5.00
Rode wijn|5.00
Witte wijn (zoet of droog)|5.00
Karaf witte wijn 0,5 l|18.00
Karaf rode wijn 0,5 l|18.00
Rode port|4.40
Witte port|4.40
Beerenburg|3.90
Jenever (oud of jong)|3.90
Martini (wit of rood)|4.60
Sherry (droog of medium)|4.60
Saké (per fles)|8.50
Vieux|4.60`};
window.AFHAAL = [
{id:'a-soep',t:'Soepen',d:`
1|Kippensoep||4.70
2|Tomatensoep||4.70
3|Haaienvinnensoep||4.70
4|Haaienvinnensoep met krab en asperges||6.10
5|Champignonsoep||6.10
8|Ling-Fa soep|kipblokjes, asperges en Chinese champignons|6.10
9|Wan Tan soep||6.90
10|Groentensoep||6.10
10a|Pekingsoep||6.70`},
{id:'a-voor',t:'Voor- en bijgerechten',d:`
11|Spareribs|3 st|7.80
11a|Nieuwe hapjes: gestoomde dim sum combinatie|5 st|9.30
12|Chinese mini loempia's|8 st|5.60
12a|Kantonese loempia's|4 st|7.00
13|Pisang Goreng|6 st|5.60
14|Gebakken ananas|4 st|5.50
15|Kroepoek||4.00
15b|Pikante kroepoek||4.70
16|Loempia||6.20
516|Loempia babi pangang||9.20
616|Loempia ajam pangang||9.20
416|Loempia Ma la Yuk|gesmoorde rundvlees|9.20
17|Pangsit Goreng|8 st|6.20
17a|Sui Kauw|deeglapjes met garnalen, 4 st|7.80
18|Saté ajam|4 stokjes|8.90
19|Saté babi||8.90
20|Saté oedang||16.40
21|Atjar||3.70
22|Pindasaus||3.70
23|Kerriesaus||3.70
24|Pikante saus||3.70
24a|Zoetzuresaus||3.70
25|Oestersaus||3.70
26|Zwarte pepersaus||3.70
26a|Witte rijst||4.00`},
{id:'a-nasi',t:'Nasi',d:`
27|Nasi met ei en ham||7.80
28|Nasi speciaal|kip en saté|13.50
29|Nasi extra speciaal|1/2 kip en 2 stokjes saté|16.80
30|Nasi met saté|3 stokjes|13.50
31|Nasi kippenvlees en groenten||12.50
32|Nasi gesneden gebraden kip en groenten||12.50
33|Nasi varkensvlees en groenten||12.50
34|Nasi Chinese garnalen en groenten||16.90
35|Nasi kippenlevers en groenten||12.50
36|Nasi gesneden biefstuk en groenten||14.80
37|Nasi Singapore|kerriepoeder, garnalen, vlees en kippenvlees|14.80
38|Yong Chou Chow Fan|nasi goreng met vlees en garnalen|15.20`},
{id:'a-bami',t:'Bami',d:`
39|Bami ei en ham||7.80
40|Bami speciaal||13.50
41|Bami extra speciaal||16.80
42|Bami saté||13.50
43|Bami kippenvlees en groenten||12.50
44|Bami gesneden gebraden kip en groenten||12.50
45|Bami varkensvlees en groenten||12.50
46|Bami Chinese garnalen en groenten||16.90
47|Bami kippenlevers en groenten||12.50
48|Bami gesneden biefstuk en groenten||14.80
48a|Bami Singapore||14.80`},
{id:'a-ling',t:'Ling-Fa speciaal',d:`
49|Nasi goreng Ling-Fa|groenten, Chinese garnalen, Chinese champignons, kippenvlees en varkensvlees|15.70
50|Nasi goreng à la Ling-Fa|2 stokjes saté, babi pangang, koe loe yuk, ajam pangang|20.50
51|Bami goreng Ling-Fa||15.70
52|Bami goreng à la Ling-Fa||20.50`},
{id:'a-combi',t:'Combinaties',d:`
53|Foe Yuk Fan|foe yong hai, babi pangang, nasi|19.30
54|Foe Yuk Min|foe yong hai, babi pangang, bami|19.30
55|Foe Ko Fan|foe yong hai, koe loe yuk, nasi|19.30
56|Foe Ko Min|foe yong hai, koe loe yuk, bami|19.30
57|Foe Tjap Fan|foe yong hai, tjap tjoy, nasi|19.30
58|Foe Tjap Min|foe yong hai, tjap tjoy, bami|19.30
59|Tjap Yuk Fan|tjap tjoy, babi pangang, nasi|19.30
60|Tjap Yuk Min|tjap tjoy, babi pangang, bami|19.30
61|Tjap Ko Fan|tjap tjoy, koe loe yuk, nasi|19.30
62|Tjap Ko Min|tjap tjoy, koe loe yuk, bami|19.30
63|Nasi goreng compleet|nasi goreng, babi pangang en 2 stokjes saté|17.00
64|Nasi goreng extra compleet|nasi goreng, babi pangang, 2 stokjes saté, foe yong hai, tjap tjoy|25.80
65|Bami goreng compleet||17.00
66|Bami goreng extra compleet||25.80`},
{id:'a-chow',t:'Chinese bami en mihoen',d:`
67|Tai Ha Chow Meen|garnalen en groenten|17.30
68|You Si Chow Meen|varkensvlees|13.80
69|Kai Si Chow Meen|kippenvlees|13.80
70|Chow Meen Ling-Fa||15.80
71|Tai Ha Mai Fan|mihoen met garnalen|17.50
72|You Si Mai Fan|mihoen met varkensvlees|14.70
73|Kai Si Mai Fan|mihoen met kippenvlees|14.70
74|Biefstuk Mai Fan|mihoen met biefstuk|16.40
75|Sing Chou Chow Mai|mihoen Singapore|16.50`},
{id:'a-ei',t:'Ei, groenten en vegetarisch',star:1,d:`
76|Foe Yong Hai met ham||14.40
77|Foe Yong Hai kip||14.40
78|Foe Yong Hai krab||18.50
79|Foe Yong Hai Chinese garnalen||18.60
80|Foe Yong Hai krab en Chinese garnalen||19.50
81|Tjap Tjoy speciaal|kippenvlees met varkensvlees|14.40
82|Tjap Tjoy varkensvlees||14.40
83|Tjap Tjoy kippenvlees||14.40
84|Tjap Tjoy gesneden gebraden kip||14.40
85|Tjap Tjoy gesneden biefstuk||18.50
86|Tjap Tjoy Chinese garnalen||18.50
87|Tjap Tjoy Ling-Fa|cha siu, kippenvlees en garnalen|18.50
177|Ma Po Taufoe||15.00
177a|Lo Hang Zhai||15.00
273|Vegetarische mihoen||13.00
276|Vegetarische foe yong hai||13.50
283|Vegetarische tjap tjoy||13.50`},
{id:'a-vlees',t:'Varkensvlees en kip',star:1,d:`
141|Babi pangang spek|speenvarken|18.80
88|Cha Siu||18.80
89|Babi pangang speciaal||18.30
90|Babi pangang met pindasaus||18.30
91|Babi pangang met ketjapsaus||18.30
92|Varkensvlees met champignons||16.50
93|Varkensvlees met Chinese champignons||16.50
95|Varkensvlees met asperges||16.50
96|Varkensvlees met kerriesaus en champignons||16.50
97|Varkensvlees met zwarte pepersaus||16.50
99|Babi ketjap||16.50
100|Koe Loe Yuk|gepaneerd varkensvlees met zoetzure saus|17.90
102|Ajam pangang||17.80
103|Kipblokjes met champignons||16.50
104|Kipblokjes met Chinese champignons||16.50
107|Kipblokjes met kerriesaus en champignons||16.50
108|Kipblokjes met tomatensaus||16.50
110|Koe Loe Kai||17.90
110b|Ajam ketjap||16.50
112|Kipblokjes met ananas||16.50
113|Kipblokjes met pindasaus en champignons||16.50`},
{id:'a-tipan',t:'Ti-pan, garnalen, vis en biefstuk',star:1,d:`
114a|Ti-pan kip||17.50
115|Ti-pan zha kai||17.90
116|Ti-pan saté mix||23.40
117|Ti-pan garnalen||23.40
289|Ti-pan babi pangang||18.80
600|Ti-pan Nau|gesneden biefstuk|22.80
601|Ti-pan Nau Ting||25.80
603|Ti-pan Long Lee|tongvis|22.30
120|Ha Lok|gebakken Chinese garnalen met schil|25.30
121|Cha Tai Ha||21.00
122|Chinese garnalen met champignons||19.70
123|Chinese garnalen met Chinese champignons||19.70
125|Chinese garnalen met kerriesaus en champignons||19.70
129|Koe Loe Ha||20.70
130|Gebakken tong met champignons||20.00
131|Gebakken tong met zoetzure saus||20.00
135|Biefstuk met champignons||19.50
136|Biefstuk met kerriesaus en champignons||19.50
137|Biefstuk met chuan la saus||19.50
138|Biefstuk met asperges||19.50`},
{id:'a-kanton',t:'Speciale Kantonese gerechten',star:1,d:`
139|King Do Yuk||16.50
140|Yuk Ting||16.50
142|Sam Sie Yuk||16.50
143|San Chow Yuk||16.80
144|Sie Tjap Yuk||16.50
145|Koe Loe Kwak|spareribs zoetzuur|16.50
146|Sie Tjap Pai Kwak||16.50
147|King Do Pai Kwak||16.50
148|Kai Ting||16.50
149|Sie Tjap Kai||16.50
150|San Chow Kai||16.90
151|Sam Sie Kai||16.50
152|King Do Kai||16.50
153|Sam Sie Nau||19.50
154|Kaai Laan Nau||19.50
155|Tong Koe Nau||19.80
156|Sie Tjap Nau||20.00
157|Tjong Tjoy Nau||19.50
159|Sie Tjap Ha||19.90
160|Kaai Lan Ha||19.90
161|Nao Jou Ha||19.90
162|Ma Lah Ha||19.90
163|Sin Tsi Ha||19.90
164|Sie Jau Ha||19.90
165|Kaai Lan Yu||19.90
166|Sie Tjap Yu||19.90
167|Inktvis met vijfkruidenpoeder||21.00
168|Inktvis met zwarte bonensaus||21.00
171|Pekingeend met zwarte bonensaus||20.30
172|Pekingeend met babi pangangsaus of oestersaus||19.80
173|Pekingeend met champignons||19.80
174|Pekingeend met Chinese champignons||20.30
175|Taufoe met vlees en Chinese garnalen||17.60
176|Taufoe met cha siu en Chinese garnalen||17.60`},
{id:'a-szech',t:'Szechuan en Indonesisch',star:1,note:'De Szechuan-gerechten zijn zeer pikant.',d:`
194|Kung Po Nau||19.90
195|Kung Po Kai||16.70
196|Kung Po Yuk||16.70
197|Ye Heung Nau||19.90
198|Ye Heung Kai||16.70
199|Ye Heung Yuk||16.70
200|Tja Heung Nau||19.90
203|Tau Peng Nau||19.90
204|Tau Peng Kai||16.70
205|Tau Peng Yuk||16.70
206|Kong Po Saam|Chinese garnalen, ossenhaas en kipfilet|22.50
184|Indonesische rijsttafel voor 1 persoon||26.80
185|Indonesische rijsttafel voor 2 personen||52.80
186|Indonesische rijsttafel voor 4 personen||103.80
187|Nasi rames||15.20
188|Nasi rames speciaal||17.50
189|Bami rames||15.20
190|Bami rames speciaal||17.50
191|Gado Gado||13.30
193a|Maa Laai Yuk|gesmoorde rundvlees, donkere en lichte saus|19.10`},
{id:'a-rijst',t:'Rijsttafels en Hollands',d:`
207|Rijsttafel A|voor 1 persoon|25.90
208|Rijsttafel B|voor 2 personen|50.80
209|Rijsttafel C|voor 4 personen|101.10
210|Kantonese rijsttafel|voor 2 personen|62.90
211|Speciale rijsttafel à la Ling-Fa|voor 4 personen|133.50
181|Biefstuk van de haas|met champignons, frites en appelmoes|24.60
183|Gebraden halve kip|met champignons, frites en appelmoes|19.20`}
];
