(function(){
  var burger=document.getElementById('burger'),nav=document.getElementById('nav');
  burger.addEventListener('click',function(){
    var o=nav.classList.toggle('open');
    burger.setAttribute('aria-expanded',o?'true':'false');
    burger.setAttribute('aria-label',o?'Menu sluiten':'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
    nav.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Menu openen');
  });});

  // menukaart: tabs
  var tabs=[].slice.call(document.querySelectorAll('.rantang [role=tab]'));
  function select(t,focus){
    tabs.forEach(function(b){
      var on=b===t;b.setAttribute('aria-selected',on?'true':'false');b.tabIndex=on?0:-1;
      document.getElementById(b.getAttribute('aria-controls')).hidden=!on;
    });
    if(focus)t.focus();
  }
  tabs.forEach(function(b,i){
    b.addEventListener('click',function(){select(b)});
    b.addEventListener('keydown',function(e){
      var k=e.key,n=null;
      if(k==='ArrowDown'||k==='ArrowRight')n=tabs[(i+1)%tabs.length];
      if(k==='ArrowUp'||k==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];
      if(n){e.preventDefault();select(n,true);}
    });
  });

  // vandaag open?
  var now=new Date(),d=now.getDay(),m=now.getHours()*60+now.getMinutes();
  var row=document.querySelector('.hours tr[data-d="'+d+'"]');if(row)row.classList.add('now');
  var el=document.getElementById('today');
  if(d===1||d===2){el.textContent='Vandaag gesloten. Woensdag vanaf 17:00 weer open';}
  else{
    var open=d===3?17*60:15*60,close=21*60+30,kitchen=20*60+30;
    if(m<open)el.textContent='Vandaag open vanaf '+(d===3?'17:00':'15:00')+', keuken tot 20:30';
    else if(m<kitchen){el.textContent='Nu open, de keuken is open tot 20:30';el.classList.add('is-open');}
    else if(m<close)el.textContent='Nu open tot 21:30, de keuken is al dicht';
    else el.textContent=(d===0?'Nu gesloten. Woensdag vanaf 17:00 weer open':'Morgen weer open vanaf 15:00');
  }
})();
