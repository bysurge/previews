(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  });

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
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
      var n=null;
      if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];
      if(e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];
      if(n){n.focus();select(n);e.preventDefault();}
    });
  });

  // openingstijden vandaag (minuten sinds middernacht)
  var cafe={0:[[1020,1290]],1:[[600,840]],2:[[600,840]],3:[[600,840]],4:[[600,1440]],5:[[600,1320]],6:[[1020,1320]]};
  var keuken={0:[[1020,1200]],1:[[690,840]],2:[[690,840]],3:[[690,840]],4:[[690,840],[1020,1200]],5:[[690,840],[1020,1200]],6:[[1020,1200]]};
  function t(m){var h=Math.floor(m/60)%24,mm=m%60;return (h<10?'0':'')+h+'.'+(mm<10?'0':'')+mm;}
  function line(name,slots,now){
    for(var i=0;i<slots.length;i++){
      if(now>=slots[i][0]&&now<slots[i][1])return name+' <b>nu open</b> tot '+t(slots[i][1])+' uur';
    }
    for(var j=0;j<slots.length;j++){
      if(now<slots[j][0])return name+' vandaag open vanaf '+t(slots[j][0])+' uur';
    }
    var tom=(day+1)%7, names=['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
    var next=(name==='Café'?cafe:keuken)[tom][0][0];
    return name+' nu dicht, '+names[tom]+' weer open vanaf '+t(next)+' uur';
  }
  var d=new Date(), day=d.getDay(), now=d.getHours()*60+d.getMinutes();
  var c=document.querySelector('[data-cafe]'), k=document.querySelector('[data-keuken]');
  if(c&&k){
    c.innerHTML=line('Café',cafe[day],now);
    k.innerHTML=line('Keuken',keuken[day],now);
  }
  [].forEach.call(document.querySelectorAll('.hours tr[data-d="'+day+'"]'),function(r){r.classList.add('vandaag');});

  var form=document.getElementById('res-form'), msg=document.getElementById('form-msg');
  form.addEventListener('submit',function(e){e.preventDefault();msg.hidden=false;});
})();
