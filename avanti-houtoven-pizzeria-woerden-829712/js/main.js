(function(){
  var b=document.querySelector('.burger');
  b.addEventListener('click',function(){var o=document.body.classList.toggle('nav-open');b.setAttribute('aria-expanded',o)});
  document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('nav-open');b.setAttribute('aria-expanded','false')})});
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(t){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on})}
  tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(t)});t.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){var n=tabs[(i+d+tabs.length)%tabs.length];sel(n);n.focus()}})});
  document.querySelectorAll('[data-open-tab]').forEach(function(a){a.addEventListener('click',function(){var t=document.getElementById(a.getAttribute('data-open-tab'));if(t)sel(t)})});
  var f=document.querySelector('form.book');
  f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.demo-msg');m.hidden=false;m.focus()});
  var h=document.querySelector('[data-today]');
  if(h){h.textContent=new Date().getDay()===1?'Vandaag (maandag) gesloten':'Vandaag open van 17:00 tot 22:00'}
})();
