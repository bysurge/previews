(function(){
  // mobile menu
  var btn=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      document.body.style.overflow=open?'hidden':'';
    });
    nav.addEventListener('click',function(e){
      if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');document.body.style.overflow='';}
    });
  }

  // today's hours (Europe/Amsterdam local time of the viewer)
  var hours={0:[12,21],1:[16,21],2:null,3:[16,21],4:[16,21],5:[16,21],6:[12,21]};
  var names=['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  var now=new Date(),d=now.getDay(),h=now.getHours()+now.getMinutes()/60;
  var row=document.querySelector('#hours tr[data-d="'+d+'"]');
  if(row)row.classList.add('is-today');
  var t=document.getElementById('today-text'),dot=document.querySelector('.today .dot');
  if(t){
    var o=hours[d],txt,cls;
    if(!o){txt='Vandaag ('+names[d]+') gesloten, feestdagen uitgezonderd';cls='closed';}
    else if(h>=o[0]&&h<o[1]){txt='Nu open, vandaag tot '+o[1]+':00';cls='open';}
    else if(h<o[0]){txt='Vandaag open van '+o[0]+':00 tot '+o[1]+':00';cls='';}
    else{txt='Vandaag gesloten vanaf '+o[1]+':00';cls='closed';}
    t.textContent=txt;if(cls&&dot)dot.classList.add(cls);
  }

  // catering tabs
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function sel(tab){
    tabs.forEach(function(x){
      var on=x===tab;x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;
      document.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(tab,i){
    tab.addEventListener('click',function(){sel(tab);});
    tab.addEventListener('keydown',function(e){
      var j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;
      if(j===null)return;j=(j+tabs.length)%tabs.length;sel(tabs[j]);tabs[j].focus();e.preventDefault();
    });
  });
})();
