(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');});});
  }
  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(o){
      var on=o===t;o.setAttribute('aria-selected',on?'true':'false');o.tabIndex=on?0:-1;
      document.getElementById(o.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(d){var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();}
    });
  });
  var f=document.getElementById('res-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('form-msg').hidden=false;});}
})();
