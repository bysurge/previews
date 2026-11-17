// menu button
var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
// tabs
var tabs=[].slice.call(document.querySelectorAll('.tab'));
function show(t){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);document.getElementById(x.getAttribute('aria-controls')).hidden=!on})}
tabs.forEach(function(t,i){t.addEventListener('click',function(){show(t)});t.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(n){var x=tabs[(i+n+tabs.length)%tabs.length];x.focus();show(x)}})});
// today's opening hours (restaurant: do-zo 16:30-22:00)
(function(){var d=new Date().getDay(),el=document.querySelector('[data-today]'),rows=document.querySelectorAll('.hours tr');
var map=[6,0,1,2,3,4,5];if(rows[map[d]])rows[map[d]].classList.add('now');
if(el){el.textContent=(d===0||d>=4)?'Vandaag open van 16:30 tot 22:00':'Vandaag gesloten, donderdag t/m zondag open'}})();
// example forms
[].forEach.call(document.querySelectorAll('form.ex'),function(f){f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.form-msg').textContent='Dit is een voorbeeld: er wordt niets verstuurd.'})});
