(function(){
  var d=document,nav=d.getElementById('nav'),bur=d.querySelector('.burger');
  bur.addEventListener('click',function(){var o=nav.classList.toggle('open');bur.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');bur.setAttribute('aria-expanded','false')}});
  d.querySelectorAll('.tab').forEach(function(t){t.addEventListener('click',function(){
    d.querySelectorAll('.tab').forEach(function(x){x.classList.toggle('on',x===t)});
    d.querySelectorAll('.panel').forEach(function(p){p.classList.toggle('show',p.id===t.dataset.p)});
  })});
  d.querySelectorAll('.panel').forEach(function(p){
    p.querySelectorAll('.chip').forEach(function(c){c.addEventListener('click',function(){
      p.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===c)});
      p.querySelectorAll('.cat').forEach(function(x){x.classList.toggle('show',x.id===c.dataset.t)});
    })});
  });
  var now=new Date(),dow=now.getDay(),rows=d.querySelectorAll('.hours tr');
  if(rows[(dow+6)%7])rows[(dow+6)%7].classList.add('now');
  var s=dow===0?10.5*60:9.5*60,m=now.getHours()*60+now.getMinutes(),t=d.getElementById('today');
  t.textContent=(m>=s&&m<17*60)?'Nu open, tot 17:00':'Vandaag open van '+(dow===0?'10:30':'09:30')+' tot 17:00';
  t.hidden=false;
  d.getElementById('cform').addEventListener('submit',function(e){e.preventDefault();d.getElementById('sent').hidden=false});
})();
