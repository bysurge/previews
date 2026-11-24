(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=btn.getAttribute('aria-expanded')!=='true';
      btn.setAttribute('aria-expanded',String(open));
      nav.classList.toggle('open',open);
      document.body.style.overflow=open?'hidden':'';
    });
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
      btn.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.style.overflow='';
    });});
  }

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(o){
      var on=o===t;
      o.setAttribute('aria-selected',String(on));
      o.tabIndex=on?0:-1;
      document.getElementById(o.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var n=null;
      if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];
      if(e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];
      if(n){e.preventDefault();select(n);n.focus();}
    });
  });

  var form=document.querySelector('.nb-form');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();form.querySelector('.nb-msg').hidden=false;});}
})();
