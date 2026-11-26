(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  });

  // open/dicht indicator, from the opening hours on their own site
  var hours={0:[16,24],1:[20,24],3:[20,24],4:[20,24],5:[20,24]};
  var names=['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  var now=new Date(),d=now.getDay(),h=now.getHours()+now.getMinutes()/60;
  var row=document.querySelector('.hours tr[data-d="'+d+'"]');if(row)row.classList.add('today');
  var st=document.getElementById('status'),t,dicht=true;
  if(hours[d]&&h>=hours[d][0]&&h<hours[d][1]){t='Nu open, tot middernacht';dicht=false;}
  else if(hours[d]&&h<hours[d][0]){t='Vandaag open vanaf '+hours[d][0]+'.00 uur';}
  else if(d===6){t='Zaterdag alleen open bij evenementen';}
  else{
    for(var i=1;i<7;i++){var n=(d+i)%7;if(hours[n]){t='Nu dicht, '+(i===1?'morgen':names[n])+' weer open vanaf '+hours[n][0]+'.00 uur';break;}}
  }
  if(t){st.textContent=t;st.hidden=false;if(dicht)st.classList.add('dicht');}

  var f=document.getElementById('news');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById('newsmsg').textContent='Dit is een voorbeeld: er is niets verstuurd.';
  });
})();
