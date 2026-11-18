(function(){
  var top=document.getElementById('top'),nav=document.getElementById('nav'),btn=document.querySelector('.menu-btn');
  function onScroll(){top.classList.toggle('solid',window.scrollY>40)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  function close(){nav.classList.remove('open');top.classList.remove('open');btn.setAttribute('aria-expanded','false');document.body.style.overflow=''}
  btn.addEventListener('click',function(){
    var o=!nav.classList.contains('open');
    nav.classList.toggle('open',o);top.classList.toggle('open',o);btn.setAttribute('aria-expanded',String(o));
    document.body.style.overflow=o?'hidden':'';
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A')close()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});

  document.querySelectorAll('[data-tabs]').forEach(function(box){
    var tabs=[].slice.call(box.querySelectorAll('[role=tab]'));
    function show(t){
      tabs.forEach(function(x){
        var on=x===t;x.setAttribute('aria-selected',String(on));x.tabIndex=on?0:-1;
        var p=document.getElementById(x.getAttribute('aria-controls'));if(p)p.hidden=!on;
      });
    }
    tabs.forEach(function(t,i){
      t.addEventListener('click',function(){show(t)});
      t.addEventListener('keydown',function(e){
        var n=null;
        if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];
        if(e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];
        if(n){e.preventDefault();show(n);n.focus()}
      });
    });
    show(tabs[0]);
  });

  document.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');if(m)m.hidden=false});
  });
})();
