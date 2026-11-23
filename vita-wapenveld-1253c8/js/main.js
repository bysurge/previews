(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  }
  // tabs
  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t)});
    t.addEventListener('keydown',function(e){
      var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(n){e.preventDefault();var k=tabs[(i+n+tabs.length)%tabs.length];select(k);k.focus()}
    });
  });
  // today
  var d=new Date().getDay(),row=document.querySelector('.hours tr[data-day="'+d+'"]'),t=document.querySelector('[data-today]');
  if(row)row.classList.add('today');
  if(t){t.textContent=(d>=2&&d<=6)?'Vandaag open van 10.00 tot 17.00':'Dinsdag tot en met zaterdag 10.00 – 17.00'}
  // demo form
  var f=document.getElementById('offerte');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.form-msg').hidden=false});
})();
