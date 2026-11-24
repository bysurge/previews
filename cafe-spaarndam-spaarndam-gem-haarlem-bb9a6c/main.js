(function(){
  // mobiel menu
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
      nav.classList.remove('open');btn.setAttribute('aria-expanded','false');
    });});
  }

  // tabs
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
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(!d)return;
      var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();
    });
  });

  // vandaag open?
  var now=new Date(), dag=now.getDay();
  var uren={0:'12:00',3:'15:00',4:'15:00',5:'15:00',6:'15:00'};
  var today=document.querySelector('[data-today]');
  if(today){
    today.textContent=uren[dag]?'Vandaag open vanaf '+uren[dag]:'Vandaag gesloten, woensdag weer open vanaf 15:00';
  }
  var rij=document.querySelector('[data-uren] tr[data-dag="'+dag+'"]');
  if(rij)rij.classList.add('nu');

  // woensdaghappen: verlopen datums weg, eerstvolgende uitlichten, rest inklappen
  var lijst=document.querySelector('[data-happen]');
  if(lijst){
    var items=[].slice.call(lijst.children);
    var start=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    var komend=items.filter(function(li){
      var p=li.getAttribute('data-d').split('-');
      var d=new Date(+p[0],+p[1]-1,+p[2]);
      if(d<start){li.remove();return false;}
      return true;
    });
    var next=document.querySelector('[data-next]');
    if(komend.length&&next){
      komend[0].classList.add('eerst');
      next.innerHTML='Eerstvolgende woensdag ('+komend[0].querySelector('time').textContent+'): <b>'+komend[0].querySelector('span').textContent+'</b>';
      next.hidden=false;
    }
    var meer=document.querySelector('[data-meer]');
    var zicht=6;
    if(komend.length>zicht&&meer){
      komend.slice(zicht).forEach(function(li){li.classList.add('verborgen');});
      meer.addEventListener('click',function(){
        var open=meer.getAttribute('aria-expanded')==='true';
        komend.slice(zicht).forEach(function(li){li.classList.toggle('verborgen',open);});
        meer.setAttribute('aria-expanded',open?'false':'true');
        meer.textContent=open?'Toon het hele schema':'Toon minder';
      });
    }else if(meer){meer.remove();}
    if(!komend.length){
      lijst.insertAdjacentHTML('beforebegin','<p class="bord-next">Het nieuwe schema volgt binnenkort.</p>');
    }
  }
})();
