(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  }
  // today in the hours table and hero
  var d=new Date().getDay(),row=document.querySelector('.hours tr[data-day="'+d+'"]'),t=document.querySelector('[data-today]');
  if(row){row.classList.add('today');if(t)t.textContent='Vandaag open vanaf 17.00, keuken tot 21.00'}
  else if(t){t.textContent='Woensdag tot en met zaterdag vanaf 17.00'}
  var f=document.getElementById('form');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.form-msg').hidden=false});
})();
