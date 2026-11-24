(function(){
  // mobile menu
  var t=document.querySelector('.nav-toggle'), nav=document.getElementById('nav');
  t.addEventListener('click',function(){
    var o=t.getAttribute('aria-expanded')==='true';
    t.setAttribute('aria-expanded',String(!o)); nav.classList.toggle('open',!o);
    document.body.style.overflow=o?'':'hidden';
  });
  nav.addEventListener('click',function(e){ if(e.target.tagName==='A'){ t.setAttribute('aria-expanded','false'); nav.classList.remove('open'); document.body.style.overflow=''; } });

  // hero slideshow
  var imgs=document.querySelectorAll('.slides img'), i=0;
  if(imgs.length>1 && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    setInterval(function(){ imgs[i].classList.remove('on'); i=(i+1)%imgs.length; imgs[i].classList.add('on'); },6000);
  }

  // menu tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function sel(b){
    tabs.forEach(function(x){ var on=x===b; x.setAttribute('aria-selected',on); x.tabIndex=on?0:-1; document.getElementById(x.getAttribute('aria-controls')).hidden=!on; });
  }
  tabs.forEach(function(b,k){
    b.addEventListener('click',function(){ sel(b); });
    b.addEventListener('keydown',function(e){
      var n=e.key==='ArrowRight'?k+1:e.key==='ArrowLeft'?k-1:null; if(n===null) return;
      n=(n+tabs.length)%tabs.length; sel(tabs[n]); tabs[n].focus(); e.preventDefault();
    });
  });

  // today's status (times from their own site)
  var d=new Date(), day=d.getDay(), h=d.getHours()+d.getMinutes()/60;
  var row=document.querySelector('.hours tr[data-d="'+day+'"]'); if(row) row.classList.add('is-today');
  var el=document.getElementById('today');
  if(day===2){ el.textContent='Dinsdag gesloten, morgen weer open'; el.classList.add('shut'); }
  else if(h<14){ el.textContent='Vandaag open van 14.00 tot 22.00 uur'; el.classList.add('open'); }
  else if(h<22){ el.textContent='Nu open, tot 22.00 uur'; el.classList.add('open'); }
  else { el.textContent='Nu gesloten'+(day===1?', woensdag weer open':', morgen weer open'); el.classList.add('shut'); }
})();
