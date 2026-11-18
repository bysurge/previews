(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded','false')}});
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function sel(b){tabs.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;var p=document.getElementById(x.getAttribute('aria-controls'));if(on)p.removeAttribute('hidden');else p.setAttribute('hidden','')})}
  tabs.forEach(function(b,i){b.addEventListener('click',function(){sel(b)});
    b.addEventListener('keydown',function(e){var j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:-1;if(j>=0){j=(j+tabs.length)%tabs.length;tabs[j].focus();sel(tabs[j]);e.preventDefault()}})});
  var d=new Date().getDay();
  [].forEach.call(document.querySelectorAll('.hours tr'),function(r){if(+r.dataset.d===d)r.classList.add('today')});
})();
