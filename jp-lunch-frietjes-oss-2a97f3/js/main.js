(function(){
  // mobile menu
  var btn=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

  // tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t)});
    t.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus()}});
  });
  document.querySelectorAll('[data-open]').forEach(function(a){
    a.addEventListener('click',function(e){e.preventDefault();var t=document.getElementById(a.getAttribute('href').slice(1));select(t);document.getElementById('menukaart').scrollIntoView({behavior:'smooth'})});
  });

  // opening hours today
  var H={1:[11,18],2:[11,18],3:[11,20],4:[11,20],5:[11,20],6:[11,20]};
  var now=new Date(),d=now.getDay(),h=now.getHours()+now.getMinutes()/60,el=document.getElementById('today');
  var row=document.querySelector('#hours tr[data-d="'+d+'"]');if(row)row.classList.add('is-today');
  if(H[d]){
    var open=h>=H[d][0]&&h<H[d][1];
    el.textContent=open?'Nu open, vandaag tot '+H[d][1]+'.00 uur':'Vandaag open van '+H[d][0]+'.00 tot '+H[d][1]+'.00 uur';
    if(open)el.classList.add('open');
  } else el.textContent='Zondag gesloten · koopzondagen 13.00 – 19.00';
})();
