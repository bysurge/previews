(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  function closeNav(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeNav);});
  }

  // Menukaart opbouwen
  var tabsEl=document.getElementById('menu-tabs'), panelsEl=document.getElementById('menu-panels');
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;');}
  (window.MENU||[]).forEach(function(c,i){
    var b=document.createElement('button');
    b.type='button';b.setAttribute('role','tab');b.id='t-'+c.id;b.setAttribute('aria-controls','p-'+c.id);
    b.setAttribute('aria-selected',i===0?'true':'false');b.tabIndex=i===0?0:-1;b.textContent=c.tab;
    tabsEl.appendChild(b);
    var p=document.createElement('div');
    p.className='panel';p.id='p-'+c.id;p.setAttribute('role','tabpanel');p.setAttribute('aria-labelledby','t-'+c.id);
    if(i>0)p.hidden=true;
    var html='<figure class="panel-photo"><img src="img/'+c.img+'" width="1200" height="800" alt="'+esc(c.alt)+'" loading="lazy"></figure><div>';
    c.groups.forEach(function(g){
      html+='<div class="grp"><h3>'+esc(g.h)+'</h3>'+(g.note?'<p class="grp-note">'+esc(g.note)+'</p>':'')+'<ul class="dishes">';
      g.items.forEach(function(d){
        html+='<li><p class="dish-top"><span>'+esc(d[0])+'</span><b>€ '+esc(d[2])+'</b></p><p class="desc">'+esc(d[1])+'</p></li>';
      });
      html+='</ul></div>';
    });
    p.innerHTML=html+'</div>';
    panelsEl.appendChild(p);
  });
  var tabs=[].slice.call(tabsEl.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(o){var on=o===t;o.setAttribute('aria-selected',on?'true':'false');o.tabIndex=on?0:-1;document.getElementById(o.getAttribute('aria-controls')).hidden=!on;});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();}});
  });
  document.querySelectorAll('[data-tab]').forEach(function(a){
    a.addEventListener('click',function(){var t=document.getElementById('t-'+a.getAttribute('data-tab'));if(t)select(t);});
  });

  // Tijden 17:30 - 22:30 per kwartier (zoals op hun eigen formulier)
  var sel=document.getElementById('tijd');
  if(sel){for(var m=17*60+30;m<=22*60+30;m+=15){var o=document.createElement('option');var h=Math.floor(m/60),mm=m%60;o.textContent=h+':'+(mm<10?'0':'')+mm;if(m===19*60)o.selected=true;sel.appendChild(o);}}

  var f=document.getElementById('res-form');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('form-msg').hidden=false;});

  // Rustige diavoorstelling in de boog
  var imgs=document.querySelectorAll('.slides img'), k=0;
  if(imgs.length>1&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    setInterval(function(){imgs[k].classList.remove('on');k=(k+1)%imgs.length;imgs[k].classList.add('on');},5500);
  }
})();
