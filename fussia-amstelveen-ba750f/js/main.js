// Fussia preview: menu data (overgenomen uit de eigen menukaart en afhaalkaart), tabs en mobiel menu.
(function () {
  // [nummer, naam, omschrijving, prijs/toeslag]
  var AYCE = [
    { id: 'nigiri', t: 'Nigiri', note: 'per stuk', items: [
      ['1', 'Zalm', ''], ['2', 'Zalm & kaas', ''], ['3', 'Tonijn', ''], ['4', 'Tonijn & kaas', ''],
      ['5', 'Zeebaars', ''], ['6', 'Paling', ''], ['7', 'Krab', ''], ['8', 'Gekookte garnaal', ''],
      ['9', 'Zoetwatergarnaal', ''], ['10', 'Geroosterde bief', ''], ['11', 'Coquille', ''],
      ['12', 'Zoete omelet', ''], ['13', "Chef's vegetarische sushi", '']] },
    { id: 'maki', t: 'Maki', note: '3 stuks', items: [
      ['14', 'Zalmrol', ''], ['15', 'Tonijnrol', ''], ['16', 'Krabrol', ''], ['17', 'Japanse rettichrol', ''],
      ['18', 'Komkommerrol', ''], ['19', 'Avocadorol', ''], ['20', 'Zoete omeletrol', ''],
      ['21', 'California', 'avocado, komkommer & krab'], ['22', 'Avocado & zalm', ''], ['23', 'Verse zalm avocado', ''],
      ['24', 'Pikante tonijn', ''], ['25', 'Gebakken garnaal', ''], ['26', 'Vegetarische sushi', 'tempura roll'],
      ['27', 'Gepaneerde kip', 'kip & mango'], ['28', 'Gebakken witvis', ''], ['29', 'Zalm & kaas', '2 stuks'],
      ['30', 'Carpaccio & komkommer', ''], ['31', 'Beef', 'geroosterd rund'], ['32', 'Mango', '2 stuks'],
      ['33', 'Paling & kaas', '2 stuks'], ['34', 'Zalm & mango', ''], ['35', 'Grote mix', '2 stuks'],
      ['36', 'Ebi avocado', 'garnaal & avocado'], ['37', 'Gegrilde kip', '']] },
    { id: 'special', t: 'Special sushi', note: '4 stuks', items: [
      ['CT', 'Fumi roll', 'garnaal, zalm & avocado', '+ € 2,50'],
      ['EC', 'Ebi crazy roll', 'garnaal & avocado', '+ € 2,50'],
      ['CF', 'California flame salmon', 'zalm, krab & avocado', '+ € 2,50'],
      ['CU', 'California flame unagi roll', 'zalm, krab, avocado & unagi', '+ € 2,50']] },
    { id: 'temaki', t: 'Temaki & gunkan', note: 'per stuk', items: [
      ['38', 'Zalm handrol', ''], ['39', 'Paling handrol', ''], ['40', 'Krab handrol', ''],
      ['41', 'Gebakken kip handrol', ''], ['42', 'Gefrituurde garnaal handrol', ''], ['43', 'Zeewier handrol', ''],
      ['44', 'Gunkan viskuit', ''], ['45', 'Gunkan zalmtartaar', ''], ['46', 'Gunkan tonijntartaar', ''],
      ['47', 'Gunkan krabsalade', ''], ['48', 'Gunkan maissalade', ''], ['49', 'Gunkan zeewiersalade', '']] },
    { id: 'sashimi', t: 'Sashimi', note: '', items: [
      ['50', 'Verse rauwe zalm', '4 stuks', '+ € 4,00'],
      ['51', 'Verse rauwe tonijn', '4 stuks', '+ € 5,00'],
      ['52', 'Verse rauwe vis', '16 stuks', '+ € 10,00']] },
    { id: 'soep', t: 'Soep & salade', note: '', items: [
      ['53', 'Wan tan soep', 'bouillon met kippendumplings'], ['54', 'Chinese tomatensoep', ''], ['55', 'Miso soep', ''],
      ['57', 'Biefstuksalade', ''], ['58', 'Vietnamese garnalensalade', ''], ['59', 'Sashimisalade', ''],
      ['60', 'Zoetzure pikante komkommers', ''], ['61', 'Zeewiersalade', ''], ['62', 'Fussia fruitsalade', ''],
      ['63', 'California salade', ''], ['64', 'Kip met mosterd-dilledressing', '']] }
  ];

  var AFHAAL = [
    { id: 'a-nigiri', t: 'Nigiri', note: '2 stuks', items: [
      ['1', 'Zalm', '', '4,30'], ['2', 'Zalm & kaas', '', '4,50'], ['3', 'Tonijn', '', '4,75'], ['4', 'Tonijn & kaas', '', '4,95'],
      ['5', 'Zeebaars', '', '4,25'], ['6', 'Paling', '', '4,75'], ['7', 'Krab', '', '3,95'], ['8', 'Gekookte garnaal', '', '4,00'],
      ['9', 'Zoetwatergarnaal', '', '4,25'], ['10', 'Geroosterde bief', '', '4,50'], ['11', 'Coquille', '', '4,75'],
      ['12', 'Zoete omelet', '', '4,00'], ['13', 'Fussia veggie', "chef's vegetarische sushi", '4,00']] },
    { id: 'a-maki', t: 'Maki', note: '3 stuks', items: [
      ['14', 'Zalmrol', '', '2,30'], ['15', 'Tonijnrol', '', '2,40'], ['16', 'Krabrol', '', '2,20'], ['17', 'Japanse rettichrol', '', '2,20'],
      ['18', 'Komkommerrol', '', '2,20'], ['19', 'Avocadorol', '', '2,20'], ['20', 'Zoete omeletrol', '', '2,20'],
      ['21', 'California', 'avocado, komkommer & krab', '4,00'], ['22', 'Avocado & zalm', '', '4,00'], ['23', 'Verse zalm avocado', '', '4,00'],
      ['24', 'Pikante tonijn', '', '4,00'], ['25', 'Gefrituurde garnaal', '', '4,50'], ['26', 'Vegetarische sushi', 'tempura roll', '4,00'],
      ['27', 'Gepaneerde kip', 'kip & mango', '4,50'], ['28', 'Gebakken witvis', '', '4,50'], ['29', 'Zalm & kaas', '2 stuks', '4,25'],
      ['30', 'Carpaccio & komkommer', '', '4,50'], ['31', 'Beef', 'geroosterd rund', '4,50'], ['32', 'Mango', '', '3,70'],
      ['33', 'Paling & kaas', '2 stuks', '4,25'], ['34', 'Zalm & mango', '', '4,25'], ['35', 'Grote mix', '2 stuks', '4,00'],
      ['36', 'Ebi avocado', 'garnaal & avocado', '4,25'], ['37', 'Gegrilde kip', '', '4,50']] },
    { id: 'a-special', t: 'Special sushi', note: '4 of 8 stuks', items: [
      ['CT', 'Fumi roll', 'garnaal, zalm & avocado', '6,75 / 13,50'],
      ['EC', 'Ebi crazy roll', 'garnaal & avocado, 8 stuks', '13,50'],
      ['CF', 'California flame salmon roll', 'zalm, krab & avocado', '6,25 / 12,50'],
      ['CU', 'California flame unagi roll', 'unagi, krab & avocado', '6,75 / 13,50']] },
    { id: 'a-temaki', t: 'Temaki & gunkan', note: '', items: [
      ['38', 'Zalm handrol', 'per stuk', '4,00'], ['39', 'Paling handrol', 'per stuk', '4,00'], ['40', 'Krab handrol', 'per stuk', '4,00'],
      ['41', 'Gebakken kip handrol', 'per stuk', '4,00'], ['42', 'Gefrituurde garnaal handrol', 'per stuk', '4,00'], ['43', 'Zeewier handrol', 'per stuk', '4,00'],
      ['44', 'Gunkan viskuit', '2 stuks', '4,50'], ['45', 'Gunkan zalmtartaar', '2 stuks', '4,50'], ['46', 'Gunkan tonijntartaar', '2 stuks', '4,75'],
      ['47', 'Gunkan krabsalade', '2 stuks', '4,50'], ['48', 'Gunkan maissalade', '2 stuks', '4,50'], ['49', 'Gunkan zeewiersalade', '2 stuks', '4,50']] },
    { id: 'a-sashimi', t: 'Sashimi & soep', note: '', items: [
      ['50', 'Verse rauwe zalm', '4 stuks', '6,00'], ['51', 'Verse rauwe tonijn', '4 stuks', '7,00'], ['52', 'Verse rauwe vis', '16 stuks', '14,00'],
      ['53', 'Wan tan soep', 'bouillon met kippendumplings', '6,00'], ['54', 'Chinese tomatensoep', '', '5,00'], ['55', 'Miso soep', '', '5,50']] },
    { id: 'a-salade', t: 'Salade', note: '', items: [
      ['57', 'Biefstuksalade', '', '5,50'], ['58', 'Vietnamese garnalensalade', '', '5,50'], ['59', 'Sashimisalade', '', '5,50'],
      ['60', 'Zoetzure pikante komkommers', '', '6,50'], ['61', 'Zeewiersalade', '', '6,50'], ['62', 'Fussia fruitsalade', '', '6,50'],
      ['63', 'California salade', '', '5,50'], ['64', 'Kip met mosterd-dilledressing', '', '5,50']] },
    { id: 'a-dimsum', t: 'Dim sum & saté', note: '', items: [
      ['65', "Mini loempia's", '6 stuks', '5,25'], ['66', 'Kippasteitjes', '4 stuks', '5,25'], ['67', 'Gebakken witvis', '', '5,25'],
      ['68', 'Peking eend ba pao', '2 stuks', '6,50'], ['69', 'Siu mai', 'varkensdumplings, 4 stuks', '6,00'],
      ['70', 'Kipsaté', '4 stuks', '6,50'], ['71', 'Biefsaté', '4 stuks', '7,50'], ['72', 'Lamssaté', '4 stuks', '7,50'], ['73', 'Garnalensaté', '4 stuks', '8,50']] },
    { id: 'a-teppan', t: 'Teppan yaki', note: '', items: [
      ['74', 'Zalmfilet', '2 stuks', '7,50'], ['75', 'Witvis', '2 stuks', '7,00'], ['76', 'Garnalen met schil', '4 stuks', '8,00'],
      ['77', 'Kipblokjes', '', '8,50'], ['78', 'Biefblokjes', '', '10,00'], ['79', 'Biefrolletjes', '4 stuks', '8,50'], ['80', 'Lamskotelet', '2 stuks', '8,50']] },
    { id: 'a-tempura', t: 'Tempura & fried', note: '', items: [
      ['81', 'Tempura garnalen', '3 stuks', '7,50'], ['82', 'Garnalenkroket', 'in aardappelslierten, 4 stuks', '6,50'],
      ['83', 'Gefrituurde kipstukjes Japanse stijl', '', '7,50'], ['84', 'Gepaneerde kip met citrussaus', '', '8,50'],
      ['85', 'Mini frikandel', '6 stuks', '5,00'], ['86', 'Gefrituurde inktvisringen', '4 stuks', '6,50'], ['87', 'Gefrituurde garnalen', '3 stuks', '6,50'],
      ['88', "Kip loempia's", '2 stuks', '6,00'], ['89', 'Gefrituurde aardappelkoekjes', '4 stuks', '6,00'], ['90', 'Gefrituurde banaan', '4 stuks', '6,00'],
      ['91', 'Sesamballetjes met rodebonenpasta', '6 stuks', '7,50'], ['92', 'Puddingbroodje', '2 stuks', '6,50']] },
    { id: 'a-wok', t: 'Aziatische gerechten', note: '', items: [
      ['93', 'Kip pikante Sichuan saus', '', '14,50'], ['94', 'Pikante kerrie kip', '', '14,50'], ['95', 'King do kai', '', '14,50'],
      ['96', 'Bief pikante Sichuan saus', '', '16,00'], ['97', 'Ossenhaas in zwarte pepersaus', '', '16,00'], ['98', "Chef's special bief", '', '16,00'],
      ['99', 'Garnalen in knoflooksaus', '', '17,00'], ['100', 'Garnalen in zout & peper', '', '17,00'], ['101', 'Peking eend in Chinese stijl', '', '15,00'],
      ['102', 'Gewokte groenten in knoflooksaus', '', '14,00'], ['103', 'Tofu met peper en zout', '', '14,00'],
      ['104', 'Gebakken champignons', '', '12,00'], ['105', 'Gebakken courgette', '', '12,00']] },
    { id: 'a-bij', t: 'Bijgerechten', note: '', items: [
      ['106', 'Sojabonen', '', '5,00'], ['107', 'Witte rijst', '', '4,00'], ['108', 'Gebakken rijst', '', '6,00'], ['109', 'Gebakken udon', '', '6,50'],
      ['110', 'Gebakken bami', '', '6,00'], ['111', 'Chinese mihoen', '', '6,00'], ['112', 'Patat', '', '5,00'],
      ['113', 'Nasi Fussia', 'gebakken rijst met rund, kip, garnalen en groenten', '16,00']] },
    { id: 'a-box', t: 'Sushiboxen', note: '', box: true, items: [
      ['', 'Sushi menu A', '15 stuks: 1x inari nigiri, 1x omelet nigiri, 1x Fussia veggie nigiri, 3x Japanse rettich maki, 3x avocado maki, 3x vegetarische maki, 3x komkommer maki', '13,00'],
      ['', 'Sushi menu B', '24 stuks: 6x komkommer maki, 6x krab maki, 6x zalm maki, 6x omelet maki', '15,00'],
      ['', 'Sushi menu C', '24 stuks: 2x zalm nigiri, 2x tonijn nigiri, 2x inari nigiri, 3x komkommer maki, 3x krab maki, 3x tonijn maki, 3x California maki, 3x pikante tonijn maki, 3x omelet maki', '22,00'],
      ['', 'Super Fussia menu', '40 stuks: 2x zalm nigiri, 2x tonijn nigiri, 2x paling nigiri, 2x Fussia veggie nigiri, 8x krokante garnalen maki, 3x California maki, 3x pikante tonijn maki, 3x zalm avocado maki, 3x komkommer maki, 3x zalm maki, 3x tonijn maki, 3x gegrilde kip maki, 3x zalm & kaas maki', '39,00'],
      ['', 'Family menu', '60 stuks: 6x zalm maki, 6x tonijn maki, 6x krab maki, 6x komkommer maki, 6x avocado maki, 6x California maki, 6x verse zalm avocado maki, 6x gefrituurde garnalen maki, 6x gepaneerde kip maki, 6x pikante tonijn maki', '56,00'],
      ['', 'Family happy menu', '72 stuks: 8x krokante garnalen maki, 8x gepaneerde kip maki, 8x gefl. zalm maki, 6x California maki, 6x beef maki, 6x verse zalm avocado maki, 6x zalm maki, 6x tonijn maki, 6x komkommer maki, 6x zalm sashimi, 6x tonijn sashimi', '76,00'],
      ['', 'Japanse set menu C', '2x zalm nigiri, 3x California maki, 3x komkommer maki, 6x mini loempia, 4x kipsaté, 2x gefrituurde garnalen, 1x king do chicken, 1x ossenhaas in zwarte pepersaus, keuze uit yaki meshi, noodles of mihoen', '35,00']] }
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function build(key, groups, priced) {
    var tabs = document.querySelector('[data-tabs="' + key + '"]');
    var panels = document.querySelector('[data-panels="' + key + '"]');
    if (!tabs || !panels) return;
    groups.forEach(function (g, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab';
      b.id = 'tab-' + g.id;
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', 'p-' + g.id);
      b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      b.tabIndex = i === 0 ? 0 : -1;
      b.textContent = g.t;
      tabs.appendChild(b);

      var p = document.createElement('div');
      p.className = 'panel' + (g.box ? ' panel-box' : '');
      p.id = 'p-' + g.id;
      p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', b.id);
      if (i !== 0) p.hidden = true;
      var html = '<div class="panel-head"><h3>' + esc(g.t) + '</h3>' + (g.note ? '<span>' + esc(g.note) + '</span>' : '') + '</div><ul class="dishes">';
      g.items.forEach(function (it) {
        var price = it[3] ? (priced ? '€ ' + it[3] : it[3]) : '';
        html += '<li>' + (it[0] ? '<span class="no">' + esc(it[0]) + '</span>' : '') +
          '<span class="dn"><b>' + esc(it[1]) + '</b>' + (it[2] ? '<em>' + esc(it[2]) + '</em>' : '') + '</span>' +
          (price ? '<span class="pr' + (priced ? '' : ' sup') + '">' + esc(price) + '</span>' : '') + '</li>';
      });
      p.innerHTML = html + '</ul>';
      panels.appendChild(p);
    });

    var all = function () { return tabs.querySelectorAll('[role=tab]'); };
    function select(btn) {
      all().forEach(function (t) {
        var on = t === btn;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('[role=tab]');
      if (b) select(b);
    });
    tabs.addEventListener('keydown', function (e) {
      var list = Array.prototype.slice.call(all());
      var i = list.indexOf(document.activeElement);
      if (i < 0) return;
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      n = (n + list.length) % list.length;
      list[n].focus(); select(list[n]); e.preventDefault();
    });
  }

  build('ayce', AYCE, false);
  build('afhaal', AFHAAL, true);

  // Mobiel menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function close() { burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('nav-open', open);
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  // Header krijgt achtergrond na scrollen
  var bar = document.getElementById('topbar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
