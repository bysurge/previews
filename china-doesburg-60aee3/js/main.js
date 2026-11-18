(function(){
  var d=document;
  var nav=d.getElementById('nav'),bur=d.querySelector('.burger');
  bur.addEventListener('click',function(){
    var o=nav.classList.toggle('open');bur.setAttribute('aria-expanded',o);
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');bur.setAttribute('aria-expanded','false');}});

  function showPanel(id){
    d.querySelectorAll('.tab').forEach(function(t){t.classList.toggle('on',t.dataset.p===id)});
    d.querySelectorAll('.panel').forEach(function(p){p.classList.toggle('show',p.id===id)});
  }
  d.querySelectorAll('.tab').forEach(function(t){t.addEventListener('click',function(){showPanel(t.dataset.p)})});
  d.querySelectorAll('[data-open]').forEach(function(a){a.addEventListener('click',function(){showPanel(a.dataset.open)})});

  d.querySelectorAll('.panel').forEach(function(p){
    p.querySelectorAll('.chip').forEach(function(c){
      c.addEventListener('click',function(){
        p.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===c)});
        p.querySelectorAll('.cat').forEach(function(x){x.classList.toggle('show',x.id===c.dataset.t)});
      });
    });
  });

  /* openingstijden: vandaag markeren */
  var hrs={0:'12:00-21:00',1:'16:00-21:00',2:null,3:'16:00-21:00',4:'16:00-21:00',5:'12:00-21:00',6:'12:00-21:00'};
  var now=new Date(),dow=now.getDay(),rows=d.querySelectorAll('.hours tr');
  var idx=(dow+6)%7;
  if(rows[idx])rows[idx].classList.add('now');
  var t=d.getElementById('today'),h=hrs[dow];
  if(h){
    var p=h.split('-'),m=now.getHours()*60+now.getMinutes();
    var a=p[0].split(':'),b=p[1].split(':');
    var s=(+a[0])*60+(+a[1]),e=(+b[0])*60+(+b[1]);
    t.textContent=(m>=s&&m<e)?'Vandaag open tot 21:00':'Vandaag open van '+p[0]+' tot '+p[1];
  }else t.textContent='Dinsdag zijn we gesloten';
  t.hidden=false;

  var f=d.getElementById('rform');
  f.addEventListener('submit',function(e){e.preventDefault();d.getElementById('sent').hidden=false});
})();
