(function(){
  // mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        toggle.setAttribute('aria-expanded','false');
        nav.classList.remove('open');
      });
    });
  }

  // tabs van de kaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus){
    tabs.forEach(function(t){
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({block:'nearest', inline:'nearest'});
  }
  tabs.forEach(function(t, i){
    t.addEventListener('click', function(){ select(t); });
    t.addEventListener('keydown', function(e){
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i+1)%tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i-1+tabs.length)%tabs.length];
      if (n){ e.preventDefault(); select(n, true); }
    });
  });
  document.querySelectorAll('.link-tab').forEach(function(b){
    b.addEventListener('click', function(){ select(document.getElementById(b.dataset.tab), true); });
  });

  // vandaag open?
  var hours = {0:[16,21],1:null,2:null,3:[16,20],4:[16,20],5:[16,21],6:[16,21]};
  var names = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes()/60;
  var row = document.querySelector('.hours tr[data-d="'+d+'"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today'), txt = document.getElementById('today-text');
  if (el && txt) {
    var today = hours[d];
    if (today && h < today[1]) {
      txt.textContent = (h >= today[0] ? 'Nu open, tot ' : 'Vandaag open van 16.00 tot ') + today[1] + '.00 uur';
    } else {
      var n = 1; while (!hours[(d+n)%7]) n++;
      var nd = (d+n)%7;
      txt.textContent = 'Nu gesloten. Weer open ' + (n===1 ? 'morgen' : names[nd]) + ' vanaf 16.00 uur';
      el.classList.add('closed');
    }
  }
})();
