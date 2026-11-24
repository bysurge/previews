(function(){
  var top=document.getElementById('top'),btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
  function onScroll(){top.classList.toggle('solid',window.scrollY>40)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  function setMenu(open){btn.setAttribute('aria-expanded',open);nav.classList.toggle('open',open);top.classList.toggle('menu-open',open);document.body.style.overflow=open?'hidden':''}
  btn.addEventListener('click',function(){setMenu(btn.getAttribute('aria-expanded')!=='true')});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});

  var slides=document.querySelectorAll('.slide'),i=0;
  var still=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(slides.length>1&&!still){setInterval(function(){slides[i].classList.remove('on');i=(i+1)%slides.length;slides[i].classList.add('on')},6000)}

  [['contactForm'],['newsForm']].forEach(function(id){
    var f=document.getElementById(id[0]);if(!f)return;
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg')||f.parentNode.querySelector('.form-msg');if(m)m.hidden=false});
  });
})();
