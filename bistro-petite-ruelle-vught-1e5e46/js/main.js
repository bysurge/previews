(function(){
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function(){
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('#main-nav a').forEach(function(a){
    a.addEventListener('click', function(){ header.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
  });

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      if(!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length]; select(next); next.focus();
    });
  });

  // Hero slideshow (calm crossfade, off for reduced motion)
  var slides = document.querySelectorAll('.slide');
  if(slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var i = 0;
    setInterval(function(){
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 5500);
  }

  // Open today
  var open = {0:'17:00',1:'17:30',2:null,3:null,4:'17:30',5:'17:30',6:'17:30'};
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-day="'+d+'"]');
  if(row) row.classList.add('today');
  var st = document.getElementById('open-status');
  if(open[d]){ st.innerHTML = 'Vandaag open vanaf <b>' + open[d] + '</b>. Di en wo gesloten.'; }
  else {
    var k = 1; while(!open[(d+k)%7]) k++;
    var names = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
    st.innerHTML = 'Vandaag gesloten. ' + (k === 1 ? 'Morgen' : 'Vanaf ' + names[(d+k)%7]) + ' weer open vanaf <b>' + open[(d+k)%7] + '</b>.';
  }

  // Newsletter: preview only
  var form = document.getElementById('news');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('news-msg').textContent = 'Dit is een voorbeeld: er wordt niets verstuurd.';
  });
})();
