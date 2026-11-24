(function(){
  var btn=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  var LEAF='<span class="leaf" title="vegetarisch" aria-label="vegetarisch">v</span>';

  function buildTabs(tabsEl,panelsEl,groups,prefix,render){
    var tabs=[];
    groups.forEach(function(g,i){
      var b=document.createElement('button');
      b.setAttribute('role','tab');b.id=prefix+'-t-'+g.id;b.setAttribute('aria-controls',prefix+'-p-'+g.id);
      b.setAttribute('aria-selected',i===0);b.tabIndex=i===0?0:-1;b.textContent=g.naam;
      tabsEl.appendChild(b);tabs.push(b);
      var p=document.createElement('div');p.setAttribute('role','tabpanel');p.id=prefix+'-p-'+g.id;p.setAttribute('aria-labelledby',b.id);
      if(i)p.hidden=true;p.innerHTML=render(g);panelsEl.appendChild(p);
    });
    function sel(t){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on})}
    tabs.forEach(function(t,i){
      t.addEventListener('click',function(){sel(t)});
      t.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){var n=tabs[(i+d+tabs.length)%tabs.length];sel(n);n.focus()}});
    });
  }

  // menuboek
  buildTabs(document.getElementById('menu-tabs'),document.getElementById('menu-panels'),window.KOYO_MENU,'m',function(g){
    return (g.sub?'<p class="panel-sub">'+esc(g.sub)+'</p>':'')+'<ul class="dishes">'+g.items.map(function(it){
      return '<li><span class="num">'+esc(it[0])+'</span><span class="dn">'+esc(it[1])+(it[3]?LEAF:'')+(it[2]?'<span class="dj">'+esc(it[2])+'</span>':'')+'</span>'+(it[4]?'<span class="tag">+ € '+esc(it[4])+'</span>':'<span></span>')+'</li>';
    }).join('')+'</ul>';
  });

  // afhaal
  buildTabs(document.getElementById('take-tabs'),document.getElementById('take-panels'),window.KOYO_AFHAAL,'a',function(g){
    return '<ul class="take-list">'+g.items.map(function(it){
      return '<li><span class="tn">'+esc(it[0])+'</span><span>'+esc(it[1])+(it[4]?LEAF:'')+(it[2]?'<span class="tq">'+esc(it[2])+'</span>':'')+'</span><span class="tp">€ '+esc(it[3])+'</span></li>';
    }).join('')+'</ul>';
  });

  // boxen
  document.getElementById('boxes').innerHTML=window.KOYO_BOXEN.map(function(b){
    return '<article class="box"><span class="num">'+b[0]+'</span><h4>'+esc(b[1])+'</h4><p class="pcs">'+esc(b[2])+'</p><p class="bp">€ '+esc(b[3])+'</p><p class="bc">'+esc(b[4])+'</p></article>';
  }).join('');
})();
