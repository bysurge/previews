(function(){
  // mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function(e){
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab){
    tabs.forEach(function(t){
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function(t, i){
    t.addEventListener('click', function(){ select(t); });
    t.addEventListener('keydown', function(e){
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var nt = tabs[(i + n + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function(a){
    a.addEventListener('click', function(){
      var t = document.getElementById(a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // today's hours
  var hours = {1:[10,17.5],2:[10,17.5],3:[10,17.5],4:[10,17.5],5:[10,21],6:[10,17]};
  function fmt(h){ var m = Math.round((h % 1) * 60); return Math.floor(h) + '.' + (m < 10 ? '0' + m : m); }
  var now = new Date(), d = now.getDay(), slot = hours[d];
  if (d === 0) {
    var next = new Date(now); next.setDate(now.getDate() + 7);
    if (next.getMonth() !== now.getMonth()) slot = [12,17]; // last Sunday of the month
  }
  var mo = now.getMonth(), da = now.getDate();
  if ((mo === 11 && (da === 25 || da === 26)) || (mo === 0 && da === 1)) slot = null;
  var el = document.querySelector('[data-today]');
  if (el) {
    var t = now.getHours() + now.getMinutes() / 60;
    if (slot && t >= slot[0] && t < slot[1]) { el.textContent = 'Nu open, vandaag tot ' + fmt(slot[1]) + ' uur'; el.classList.add('open'); }
    else if (slot && t < slot[0]) { el.textContent = 'Vandaag open van ' + fmt(slot[0]) + ' tot ' + fmt(slot[1]) + ' uur'; }
  }
  var row = document.querySelector('[data-hours] [data-d="' + d + '"]');
  if (row) row.classList.add('now');
})();
