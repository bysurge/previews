(function(){
  // mobiel menu
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Menu openen');}
  b.addEventListener('click',function(){
    var o=n.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
    b.setAttribute('aria-label',o?'Menu sluiten':'Menu openen');
  });
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});

  // tabs menukaart
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t){
    tabs.forEach(function(x){
      var on=x===t;
      x.setAttribute('aria-selected',on?'true':'false');
      x.tabIndex=on?0:-1;
      document.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;
      if(j===null)return;
      j=(j+tabs.length)%tabs.length;tabs[j].focus();select(tabs[j]);
    });
  });

  // vandaag open? (do t/m ma 14-20, di+wo dicht), tijd op Ameland
  try{
    var parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Amsterdam',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
    var get=function(k){return (parts.find(function(p){return p.type===k;})||{}).value;};
    var day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(get('weekday'));
    var mins=parseInt(get('hour'),10)*60+parseInt(get('minute'),10);
    var li=document.querySelector('#week li[data-d="'+day+'"]');
    if(li)li.classList.add('today');
    var s=document.getElementById('status');
    var openDay=day!==2&&day!==3;
    if(openDay&&mins>=840&&mins<1200){s.textContent='Nu open, tot 20.00 uur';s.classList.add('is-open');}
    else if(openDay&&mins<840){s.textContent='Vandaag open van 14.00 tot 20.00 uur';}
    else{s.textContent='Nu gesloten · do t/m ma open van 14.00 tot 20.00 uur';}
  }catch(e){}
})();
