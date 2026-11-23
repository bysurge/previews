(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});

  // tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function kies(t,focus){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});
    if(focus)t.focus();
    if(t.scrollIntoView&&window.innerWidth<640)t.scrollIntoView({block:'nearest',inline:'center'});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){kies(t)});
    t.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight')kies(tabs[(i+1)%tabs.length],true);
      if(e.key==='ArrowLeft')kies(tabs[(i-1+tabs.length)%tabs.length],true);
    });
  });

  // today
  var uren={0:null,1:['17:00','21:00'],2:['12:00','22:00'],3:['12:00','22:00'],4:['12:00','22:00'],5:['12:00','22:00'],6:['17:00','22:00']};
  var d=new Date().getDay(), row=document.querySelector('.uren tr[data-d="'+d+'"]');
  if(row)row.classList.add('vandaag');
  var el=document.querySelector('[data-today]');
  if(el)el.textContent='Coenderstraat 54, Delft. '+(uren[d]?'Vandaag open van '+uren[d][0]+' tot '+uren[d][1]:'Vandaag gesloten, morgen weer open');

  document.querySelectorAll('form').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.form-msg').hidden=false});
  });
})();
