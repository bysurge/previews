(function () {
  // Menu exact zoals op brasseriedavid.nl (lunch- en dinerkaart)
  var M = {
    lunch: [
      ['Voorgerechten', [
        ['Broodplankje', 'Waterkersmayonaise en gezouten boter', '6.50'],
        ['Rode bieten carpaccio', 'Walnoot, geitenkaas, rucola en balsamico', '13.75'],
        ['Crab bisque', '', '11.50'],
        ['Carpaccio', 'Pesto, cashewnoot, Parmezaan en rucola', '14.50'],
        ['Paling toast', 'Salade, toast en piccalilly mayonaise', '21.50']]],
      ['Eieren', [
        ['Uitsmijter ham of kaas', '', '11.50'],
        ['Uitsmijter ham en kaas', '', '13.50'],
        ['Uitsmijter spek', 'Extra kaas + 1.00', '12.50'],
        ['Roerei gerookte zalm', '', '16.50']]],
      ['Broodjes en clubsandwiches', [
        ['Clubsandwich kip', 'Avocado, bacon en piccalilly', '15.50'],
        ['Clubsandwich zalm', 'Avocado, rode ui en piccalilly', '16.50'],
        ['12 uurtje Brasserie David', 'Soepje, kroket en broodje carpaccio', '17.50'],
        ['Broodje crispy chicken', '', '15.00'],
        ['Broodje carpaccio', 'Met wit of bruin brood', '16.00'],
        ['Broodje gerookte Eveleens paling', 'Met wit of bruin brood', '21.50'],
        ['Broodje gerookte zalm', 'Met wit of bruin brood', '16.50'],
        ['Broodje avocado, tomaat en ei', '', '14.50'],
        ['2 Oma Bobs kalfsvleeskroketten', '', '12.00'],
        ['2 Oma Bobs kaas-rucola kroketten', '', '13.50']]],
      ['Croque', [
        ['Croque-monsieur', 'Ham, gruyère en béchamel', '8.50'],
        ['Croque-madame', 'Ham, gruyère, béchamel en eitje', '9.75']]],
      ['Voor de kleintjes', [
        ['Kids kipnuggets, frikandel of kroket', 'Met friet en appelmoes', '9.50'],
        ['Kids saté', 'Friet en appelmoes', '12.50']]],
      ['Hoofdgerechten', [
        ['Runder tournedos 200 gram', 'Seizoensgroenten, pepersaus en friet', '36.50'],
        ['Hamburger', 'Truffelmayo, rode ui zoetzuur, cheddar en friet', '21.50'],
        ['Kipfilet saté', 'Geserveerd met atjar, kroepoek, satésaus en friet', '21.50'],
        ['Vis van de dag', '', 'dagprijs'],
        ['Gebakken gamba’s in knoflookolie', '', '25.50'],
        ['Roodbaarsfilet', 'Mixgroenten, kreeftensaus en gefrituurde garnaal', '30.00'],
        ['Ravioli van bospaddenstoel', 'Geroosterde pompoen en champignontruffelsaus', '22.50']]],
      ['Maaltijdsalades', [
        ['Pittige kip', '', '19.50'],
        ['Geitenkaas, appel en balsamico', '', '18.50'],
        ['Trio van vis', '', '25.50']]],
      ['Bijgerechten', [
        ['Friet', '', '4.95'],
        ['Zoete aardappelfriet', '', '6.00'],
        ['Kleine salade', '', '3.95'],
        ['Truffelfriet', '', '7.75']]],
      ['Iets zoet', [
        ['Gekarameliseerde ananas', 'Mangosorbet, kokos en slagroom', '10.00'],
        ['Huisgemaakte brownie', '', '10.00'],
        ['Ouderwetse advocaat met slagroom', '', '7.75'],
        ['Huisgemaakte appeltaart', '', '4.75'],
        ['Huisgemaakte appeltaart', 'Slagroom en bolletje ijs', '7.75'],
        ['Dame blanche', 'Vanille-ijs, chocoladesaus en slagroom', '10.50'],
        ['Special coffee', 'Spanish, Irish, French, Italian', '11.00'],
        ['Special coffee David', 'Grand Marnier en Cointreau likeur', '12.00']]]
    ],
    diner: [
      ['Voorgerechten', [
        ['Broodplankje to share', 'Waterkersmayonaise en gezouten boter', '6.50'],
        ['Rode bieten carpaccio', 'Walnoot, geitenkaas, rucola en balsamico', '13.75'],
        ['Crab bisque', 'Geserveerd met een sneetje brood', '11.50'],
        ['Franse uiensoep', 'Gegratineerd met kaas en croutons', '9.00'],
        ['Carpaccio', 'Pesto, cashewnoot, Parmezaan en rucola', '15.00'],
        ['Gerookte ribeye', 'Salade, kimchi mayonaise en bosui', '16.00'],
        ['Bourgondische slakken ½ dozijn', 'Geserveerd met brood', '12.50'],
        ['Tonijn tataki', 'Avocado, radijs en sesamdressing', '16.50'],
        ['Eveleens paling en toast', 'Salade, toast en piccalilly mayonaise', '21.50']]],
      ['Voor de kleintjes', [
        ['Kids kipnuggets, frikandel of kroket', 'Met friet en appelmoes', '9.50'],
        ['Kids saté', 'Friet en appelmoes', '12.50']]],
      ['Hoofdgerechten', [
        ['Runder tournedos 200 gram', 'Seizoensgroenten, pepersaus en friet', '36.50'],
        ['Zacht gegaarde rundersukade', 'Rode kool, aardappelpuree en eigen jus', '32.50'],
        ['Varkenshaasmedaillon', 'Mixgroenten, champignonsaus en friet', '28.50'],
        ['Gebakken kalfslever', 'Gebakken ui, champignon, spek en tomaat', '24.50'],
        ['Hamburger', 'Truffelmayo, rode ui zoetzuur, cheddar en friet', '21.50'],
        ['Kipfilet saté', 'Geserveerd met atjar, kroepoek, satésaus en friet', '21.50'],
        ['Vis van de dag', '', 'dagprijs'],
        ['Gebakken gamba’s in knoflookolie', 'Mild pittig gebakken met mixgroenten', '25.50'],
        ['Roodbaarsfilet', 'Mixgroenten, kreeftensaus en gefrituurde garnalen', '30.00'],
        ['Ravioli van bospaddenstoel', 'Geroosterde pompoen en champignontruffelsaus', '22.50']]],
      ['Maaltijdsalades', [
        ['Pittige kip', '', '19.50'],
        ['Geitenkaas, appel en balsamico', '', '18.50'],
        ['Trio van vis', '', '25.50']]],
      ['Bijgerechten', [
        ['Friet', '', '4.95'],
        ['Zoete aardappelfriet', '', '6.00'],
        ['Kleine salade', '', '3.95'],
        ['Truffelfriet', 'Truffelmayonaise en Parmezaanse kaas', '7.75']]],
      ['Iets zoet', [
        ['Gekarameliseerde ananas', 'Mangosorbet, kokos en slagroom', '10.00'],
        ['Huisgemaakte brownie', '', '10.00'],
        ['Ouderwetse advocaat met slagroom', '', '7.75'],
        ['Huisgemaakte appeltaart', 'Slagroom en bolletje ijs', '7.75'],
        ['Huisgemaakte appeltaart', '', '4.75'],
        ['Dame blanche', 'Vanille-ijs, chocoladesaus en slagroom', '10.50'],
        ['Special coffee', 'Spanish, Irish, Italian, French', '10.50'],
        ['Special coffee David', 'Grand Marnier en Cointreau likeur', '11.50']]]
    ]
  };
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function price(p) { return /\d/.test(p) ? '€ ' + p.replace('.', ',') : p; }
  document.querySelectorAll('[data-menu]').forEach(function (panel) {
    var html = '';
    M[panel.getAttribute('data-menu')].forEach(function (cat) {
      html += '<div class="cat"><h3>' + esc(cat[0]) + '</h3><ul>';
      cat[1].forEach(function (d) {
        var desc = d[1] ? d[1].replace('+ 1.00', '+ € 1,00') : '';
        html += '<li><span class="d-name">' + esc(d[0]) + '</span><i aria-hidden="true"></i><span class="d-price">' + price(d[2]) + '</span>' +
          (desc ? '<span class="d-desc">' + esc(desc) + '</span>' : '') + '</li>';
      });
      html += '</ul></div>';
    });
    panel.innerHTML = html;
  });

  // Tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // Mobiel menu
  var btn = document.querySelector('.menu-toggle');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Header krijgt achtergrond na de hero
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
