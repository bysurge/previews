(function(){
  // mobile menu
  var burger=document.getElementById('burger'), nav=document.getElementById('nav');
  function setMenu(open){
    nav.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open?'true':'false');
    burger.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');
    document.body.style.overflow=open?'hidden':'';
  }
  burger.addEventListener('click',function(){setMenu(!nav.classList.contains('open'));});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false);});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});

  // hero slideshow (calm crossfade, off for reduced motion)
  var slides=document.querySelectorAll('.hero-slides img');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(slides.length>1 && !reduce){
    var i=0;
    setInterval(function(){
      slides[i].classList.remove('is-on');
      i=(i+1)%slides.length;
      slides[i].classList.add('is-on');
    },6500);
  }

  // menu tabs
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function select(t){
    tabs.forEach(function(b){
      var on=b===t;
      b.setAttribute('aria-selected',on?'true':'false');
      b.tabIndex=on?0:-1;
      document.getElementById(b.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,idx){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var n=null;
      if(e.key==='ArrowRight')n=tabs[(idx+1)%tabs.length];
      if(e.key==='ArrowLeft')n=tabs[(idx-1+tabs.length)%tabs.length];
      if(n){e.preventDefault();select(n);n.focus();}
    });
  });

  // demo forms
  document.querySelectorAll('form').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var m=f.querySelector('.form-msg'); if(m) m.hidden=false;
    });
  });

  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
})();
