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
    t.scrollIntoView({block:'nearest',inline:'nearest'});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){sel(t);var m=document.querySelector('.menu');if(m&&m.getBoundingClientRect().top<0)m.scrollIntoView({behavior:'smooth'});});
    t.addEventListener('keydown',function(e){var d=(e.key==='ArrowRight'||e.key==='ArrowDown')?1:(e.key==='ArrowLeft'||e.key==='ArrowUp')?-1:0;if(d){e.preventDefault();sel(tabs[(i+d+tabs.length)%tabs.length],true);}});
  });
})();
