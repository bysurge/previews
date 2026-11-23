(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

  // vandaag open?
  var d=new Date(),day=d.getDay(),weekend=day===0||day===6;
  var open=weekend?9*60:8*60,close=17*60,now=d.getHours()*60+d.getMinutes();
  var t=document.getElementById('today'),start=weekend?'09:00':'08:00';
  if(now>=open&&now<close){t.textContent='Nu open, vandaag tot 17:00';}
  else if(now<open){t.textContent='Vandaag open van '+start+' tot 17:00';t.classList.add('dicht');}
  else{t.textContent='Nu gesloten, morgen weer open vanaf '+((day===5||day===6)?'09:00':'08:00');t.classList.add('dicht');}
  [].forEach.call(document.querySelectorAll('.hours tr'),function(r){if(r.dataset.days.split(',').indexOf(String(day))>-1)r.classList.add('nu')});
})();
