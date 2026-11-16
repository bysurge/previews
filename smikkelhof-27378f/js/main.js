(function(){
var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
function show(t){tabs.forEach(function(b){var on=b===t;b.setAttribute('aria-selected',on);document.getElementById(b.getAttribute('aria-controls')).hidden=!on;});}
tabs.forEach(function(b,i){b.addEventListener('click',function(){show(b);});
b.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;if(n===null)return;n=(n+tabs.length)%tabs.length;tabs[n].focus();show(tabs[n]);});});
var burger=document.querySelector('.burger'),nav=document.getElementById('nav');
function set(o){document.body.classList.toggle('navopen',o);burger.setAttribute('aria-expanded',o);}
burger.addEventListener('click',function(){set(!document.body.classList.contains('navopen'));});
nav.addEventListener('click',function(e){if(e.target.tagName==='A')set(false);});
})();