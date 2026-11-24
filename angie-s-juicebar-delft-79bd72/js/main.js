(function(){
  var b=document.querySelector('.burger'),nav=document.getElementById('nav');
  if(b&&nav){
    b.addEventListener('click',function(){var o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Menu sluiten':'Menu openen');document.body.classList.toggle('nav-open',o);});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');b.setAttribute('aria-expanded','false');document.body.classList.remove('nav-open');}});
  }
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function sel(t,focus){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});
    if(focus)t.focus();
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){sel(t);});
    t.addEventListener('keydown',function(e){var d=(e.key==='ArrowRight'||e.key==='ArrowDown')?1:(e.key==='ArrowLeft'||e.key==='ArrowUp')?-1:0;if(d){e.preventDefault();sel(tabs[(i+d+tabs.length)%tabs.length],true);}});
  });
  [].forEach.call(document.querySelectorAll('.demo-form'),function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');m.textContent='Dit is een voorbeeld: het formulier verstuurt nog niets.';});
  });
})();
