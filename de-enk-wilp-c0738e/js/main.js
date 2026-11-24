(function(){
  // mobile menu
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false')});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  }

  // today: opening status + highlight
  var d=new Date(),day=d.getDay(),mins=d.getHours()*60+d.getMinutes();
  var row=document.querySelector('.tijden-tabel tr[data-day="'+day+'"]');
  if(row)row.classList.add('vandaag');
  var t=document.querySelector('[data-today]');
  if(t){
    if(day===1||day===2){t.textContent='Vandaag gesloten, woensdag weer open';t.classList.add('dicht')}
    else if(mins<600){t.textContent='Vandaag open van 10:00 tot 16:00'}
    else if(mins<960){t.textContent='Nu open, tot 16:00'}
    else{t.textContent=(day===0?'Woensdag':'Morgen')+' weer open vanaf 10:00';t.classList.add('dicht')}
  }

  // dog season 1 Oct - 1 May
  var h=document.querySelector('[data-hond]'),m=d.getMonth();
  if(h&&(m>=9||m<=3||(m===4&&d.getDate()===1))){h.textContent='Nu hondenseizoen, t/m 1 mei';h.classList.add('nu')}

  // tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function sel(tab,focus){
    tabs.forEach(function(x){var on=x===tab;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});
    if(focus)tab.focus();
  }
  tabs.forEach(function(tab,i){
    tab.addEventListener('click',function(){sel(tab)});
    tab.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight')sel(tabs[(i+1)%tabs.length],1);
      if(e.key==='ArrowLeft')sel(tabs[(i-1+tabs.length)%tabs.length],1);
    });
  });

  // hero slideshow
  var imgs=document.querySelectorAll('.hero-slides img'),k=0;
  if(imgs.length>1&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    setInterval(function(){imgs[k].classList.remove('is-on');k=(k+1)%imgs.length;imgs[k].classList.add('is-on')},6000);
  }
})();
