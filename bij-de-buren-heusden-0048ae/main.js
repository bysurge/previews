(function(){
  // mobile menu
  var btn=document.querySelector('.nav-btn'),nav=document.getElementById('nav');
  function setNav(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');document.body.style.overflow=open?'hidden':'';}
  btn.addEventListener('click',function(){setNav(!nav.classList.contains('open'));});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setNav(false);});});

  // menu tabs
  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function show(t){
    tabs.forEach(function(o){var on=o===t;o.setAttribute('aria-selected',on);o.tabIndex=on?0:-1;document.getElementById(o.getAttribute('aria-controls')).hidden=!on;});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){show(t);});
    t.addEventListener('keydown',function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(d){var n=tabs[(i+d+tabs.length)%tabs.length];show(n);n.focus();e.preventDefault();}
    });
  });

  // open today (hours from their site; vr/za until 01:00)
  var hours={0:[11,22],1:null,2:[11,22],3:[11,22],4:[11,22],5:[11,25],6:[11,25]};
  var names=['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  var now=new Date(),d=now.getDay(),h=now.getHours()+now.getMinutes()/60;
  var li=document.querySelector('#days li[data-d="'+d+'"]');
  if(li&&!li.classList.contains('closed'))li.classList.add('today');
  var rows=document.querySelectorAll('.hours tr');
  var rowIdx=(d+6)%7; if(rows[rowIdx])rows[rowIdx].classList.add('today');
  var el=document.getElementById('nu'),prev=hours[(d+6)%7];
  function fmt(x){x=x%24;return (x<10?'0':'')+x+'.00';}
  var t=hours[d];
  if(prev&&prev[1]>24&&h<prev[1]-24){el.textContent='Nu open, tot '+fmt(prev[1])+' uur';el.classList.add('open');}
  else if(!t){el.textContent='Vandaag ('+names[d]+') gesloten. Morgen weer open vanaf 11.00 uur';}
  else if(h<t[0]){el.textContent='Vandaag open van '+fmt(t[0])+' tot '+fmt(t[1])+' uur, keuken vanaf 12.00 uur';}
  else if(h<t[1]){el.textContent='Nu open, tot '+fmt(t[1])+' uur. Keuken tot 21.00 uur';el.classList.add('open');}
  else{el.textContent='Nu gesloten. Dinsdag t/m zondag open vanaf 11.00 uur';}

  // demo form
  var f=document.getElementById('reserveren');
  f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('res-msg').hidden=false;});
})();
