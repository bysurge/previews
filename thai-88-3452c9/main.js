(function () {

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function row(no, name, th, desc, price) {
    return '<li><span class="no">' + no + '</span><span class="nm">' + esc(name) +
      (th ? ' <em>' + esc(th) + '</em>' : '') + (desc ? '<small>' + esc(desc) + '</small>' : '') +
      '</span><span class="pr">€ ' + price + '</span></li>';
  }

  // Build the menu tabs from menu.js
  var tabs = document.getElementById('menuTabs'), panels = document.getElementById('menuPanels');
  if (tabs && window.MENU) {
    window.MENU.forEach(function (c, n) {
      var b = document.createElement('button');
      b.setAttribute('role', 'tab'); b.id = 'tb-' + c.id; b.setAttribute('aria-controls', 'p-' + c.id);
      b.setAttribute('aria-selected', n === 0); b.tabIndex = n === 0 ? 0 : -1; b.textContent = c.tab;
      tabs.appendChild(b);
      var p = document.createElement('div');
      p.className = 'panel'; p.id = 'p-' + c.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
      if (n) p.hidden = true;
      var html = '<h3>' + c.title + '</h3>' + (c.note ? '<p class="panel-note">' + c.note + '</p>' : '');
      if (c.mains) {
        var M = window.MAINS;
        html += '<p class="pick-label" id="pickLabel">Kies je basis</p><div class="chips" role="tablist" aria-labelledby="pickLabel">' +
          M.bases.map(function (bs, i) {
            return '<button role="tab" id="mb-' + bs.id + '" aria-controls="mp-' + bs.id + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : '') + '>' +
              bs.label + ' <span>€ ' + bs.price + '</span></button>';
          }).join('') + '</div>';
        html += M.bases.map(function (bs, i) {
          return '<div class="subpanel" id="mp-' + bs.id + '" role="tabpanel" aria-labelledby="mb-' + bs.id + '"' + (i ? ' hidden' : '') + '>' +
            (bs.note ? '<p class="base-note">' + bs.note + '</p>' : '') +
            '<ol class="dish-list">' + M.dishes.map(function (d, k) {
              return row(bs.start + k, d[0], d[1].replace('{x}', bs.th), d[2], bs.price);
            }).join('') + '</ol></div>';
        }).join('');
      } else {
        html += '<ol class="dish-list">' + c.items.map(function (i) {
          if (i.head) return '<li class="list-head">' + i.head + '</li>';
          return row(i[0], i[1], i[2], i[3], i[4]);
        }).join('') + '</ol>';
      }
      p.innerHTML = html;
      panels.appendChild(p);
    });
    // Inner tabs of the mains panel get their own tab group
    var chips = panels.querySelector('.chips');
    if (chips) chips.parentNode.setAttribute('data-tabs', '');
  }

  // Header shadow
  var top = document.querySelector('.top');
  function onScroll() { if (top) top.classList.toggle('solid', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Mobile menu
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // Tabs (each tablist manages only its own direct tabs)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = list.querySelectorAll(':scope > [role=tab]');
    function select(t) {
      tabs.forEach(function (o) {
        var on = o === t;
        o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1;
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, n) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { var nx = tabs[(n + d + tabs.length) % tabs.length]; select(nx); nx.focus(); }
      });
    });
  });

  // Today in the hours table + "open now" line in the hero
  var now = new Date(), day = now.getDay();
  var row = document.querySelector('[data-hours] tr[data-d="' + day + '"]');
  if (row) {
    row.classList.add('is-today');
    var txt = row.querySelector('td').textContent.trim();
    var t = document.getElementById('today');
    if (t) { t.textContent = 'Vandaag: ' + txt; t.hidden = false; }
    var o = document.getElementById('openNow');
    if (o) o.textContent = txt === 'gesloten' ? 'Vandaag gesloten. Woensdag t/m zondag open vanaf 16.00 uur.' : 'Vandaag open: ' + txt + ' uur';
  }


  // Demo forms never send anything
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.demo-msg'); if (m) m.hidden = false;
    });
  });
})();
