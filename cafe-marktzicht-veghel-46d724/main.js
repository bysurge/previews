(function(){
  // mobiel menu
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded',open);
    btn.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Menu openen');}
  });

  // tabs van de kaart
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function show(t){
    tabs.forEach(function(x){
      var on=x===t;
      x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;
      document.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){show(t)});
    t.addEventListener('keydown',function(e){
      var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(n){var nt=tabs[(i+n+tabs.length)%tabs.length];show(nt);nt.focus();}
    });
  });

  // vandaag open? (uren volgens hun site; na middernacht telt de vorige dag door)
  var H={0:[14,24],1:null,2:null,3:null,4:[12,24],5:[12,25],6:[14,25]};
  var names=['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  function fmt(h){h=h%24;return (h<10?'0':'')+h+'.00';}
  var now=new Date(), d=now.getDay(), h=now.getHours()+now.getMinutes()/60;
  var row=document.querySelector('.hours tr[data-d="'+d+'"]'); if(row) row.classList.add('is-today');
  var el=document.getElementById('today'), txt, open=false;
  var prev=H[(d+6)%7];
  if(prev && prev[1]>24 && h<prev[1]-24){open=true;txt='Nu open, tot '+fmt(prev[1]);}
  else if(H[d] && h>=H[d][0] && h<Math.min(H[d][1],24)){open=true;txt='Nu open, vandaag tot '+fmt(H[d][1]);}
  else if(H[d] && h<H[d][0]){txt='Vandaag open vanaf '+fmt(H[d][0]);}
  else{
    for(var i=1;i<=7;i++){var nd=(d+i)%7;if(H[nd]){txt='Nu gesloten, '+(i===1?'morgen':names[nd])+' open vanaf '+fmt(H[nd][0]);break;}}
  }
  el.innerHTML='<span class="dot"></span>'+txt;
  if(!open) el.classList.add('closed');

  // voorbeeldformulieren versturen niets
  [].forEach.call(document.querySelectorAll('.demo-form'),function(f){
    f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.demo-msg').hidden=false;});
  });
})();
