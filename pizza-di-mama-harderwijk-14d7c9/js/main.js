(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded','false')}});
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function show(tab){tabs.forEach(function(b){var on=b===tab;b.setAttribute('aria-selected',on);document.getElementById(b.getAttribute('aria-controls')).hidden=!on})}
  tabs.forEach(function(b){b.addEventListener('click',function(){show(b)})});
  show(tabs[0]);
  var f=document.getElementById('demo-form');
  f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.form-msg').hidden=false});
})();
