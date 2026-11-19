(function(){
  // mobile menu
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=btn.getAttribute('aria-expanded')!=='true';
    btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');
    nav.classList.toggle('open',open);document.body.style.overflow=open?'hidden':'';
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){btn.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.style.overflow='';}});

  // opening hours (0=zondag); closing after midnight written as 24/25
  var hours={0:[11,25],1:null,2:null,3:[17,24],4:[12,24],5:[12,25],6:[11,25]};
  var names=['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  var fmt=function(h){h=h%24;return (h<10?'0':'')+h+'.00'};
  var now=new Date(),d=now.getDay(),t=now.getHours()+now.getMinutes()/60;
  var el=document.querySelector('[data-today]');
  // still open after midnight from the previous day?
  var prev=hours[(d+6)%7];
  if(el){
    if(prev&&prev[1]>24&&t<prev[1]-24){el.textContent='Nu open, tot '+fmt(prev[1])+' uur';el.classList.add('open');}
    else if(hours[d]&&t<hours[d][1]){
      var h=hours[d];el.textContent=(t>=h[0]?'Nu open, tot ':'Vandaag open van '+fmt(h[0])+' tot ')+fmt(h[1])+' uur';el.classList.add('open');
    }else{
      for(var i=1;i<8;i++){var n=hours[(d+i)%7];if(n){el.textContent=(i===1?'Morgen':'Weer open op '+names[(d+i)%7])+' vanaf '+fmt(n[0])+' uur';break;}}
    }
  }
  document.querySelectorAll('.uren tr[data-day]').forEach(function(r){
    if(!hours[+r.dataset.day])r.classList.add('closed');
    if(+r.dataset.day===d)r.classList.add('is-today');
  });

  // tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab){tabs.forEach(function(x){var on=x===tab;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});}
  tabs.forEach(function(tab,i){
    tab.addEventListener('click',function(){select(tab)});
    tab.addEventListener('keydown',function(e){var j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;if(j===null)return;j=(j+tabs.length)%tabs.length;select(tabs[j]);tabs[j].focus();e.preventDefault();});
  });
  if(t>=16)select(document.getElementById('t-diner'));

  // demo form: nothing is sent
  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.demo-msg').hidden=false;});
  });
})();
