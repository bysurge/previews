(function(){
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');

  function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  toggle.addEventListener('click', function(){
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    });
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
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // Open now
  var hours = {0:[11,22],1:[10,22],2:[11,22],3:null,4:[11,22],5:[11,22],6:[11,22]};
  var names = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes()/60;
  var row = document.querySelector('.hours tr[data-day="'+d+'"]');
  if(row) row.classList.add('today');
  var st = document.getElementById('open-status');
  var today = hours[d];
  function fmt(x){ return (x<10?'0':'')+x+':00'; }
  if(today && h >= today[0] && h < today[1]){
    st.innerHTML = '<b>Nu open</b> tot ' + fmt(today[1]) + ' uur';
  } else if(today && h < today[0]){
    st.innerHTML = 'Vandaag open vanaf <b>' + fmt(today[0]) + '</b> uur';
  } else {
    var k = 1; while(!hours[(d+k)%7]) k++;
    var nd = (d+k)%7;
    st.innerHTML = (d === 3 ? 'Woensdag gesloten. ' : 'Nu gesloten. ') + (k === 1 ? 'Morgen' : names[nd].charAt(0).toUpperCase()+names[nd].slice(1)) + ' weer open vanaf <b>' + fmt(hours[nd][0]) + '</b>';
  }

  // One-time PIN-ON moment
  var pin = document.querySelector('.pin-on');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ pin.classList.add('in'); io.disconnect(); } });
    }, {threshold:.35});
    io.observe(pin);
  } else { pin.classList.add('in'); }
})();
