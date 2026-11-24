(function(){
  var bar=document.getElementById('top-bar');
  function onScroll(){bar.classList.toggle('solid',window.scrollY>40)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});

  var tog=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  tog.addEventListener('click',function(){
    var open=tog.getAttribute('aria-expanded')==='true';
    tog.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);
    if(!open)bar.classList.add('solid');else onScroll();
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){tog.setAttribute('aria-expanded','false');nav.classList.remove('open')}});

  var K=window.RMC_KAART,body=document.getElementById('kaart-body'),cats=document.getElementById('cats'),note=document.getElementById('kaart-note');
  var notes={diner:'Topstukken van de grill, met gerechten om te delen. Kies een onderdeel van de kaart.',takeaway:'Op vrijdag en zaterdag tussen 18:30 & 20:30 uur is afhalen niet mogelijk.'};
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  function dish(x){
    return '<li class="dish"><span class="nm">'+esc(x[0])+'</span><span class="pr">'+esc(x[2])+'</span>'+(x[1]?'<p class="ds">'+esc(x[1])+'</p>':'')+(x[3]?'<span class="xtra">'+esc(x[3])+'</span>':'')+'</li>';
  }
  function render(k){
    note.textContent=notes[k];
    var html='',ch='',st=Math.max(0,K[k].findIndex(function(s){return s.steaks}));
    K[k].forEach(function(s,i){
      var id='k-'+k+'-'+i;
      ch+='<button type="button"'+(i===st?' class="on"':'')+' data-target="'+id+'">'+esc(s.t)+'</button>';
      html+='<section class="k-sec" id="'+id+'"'+(i!==st?' hidden':'')+'><h3>'+esc(s.t)+'</h3>'+(s.intro?'<p class="k-intro">'+esc(s.intro)+'</p>':'');
      if(s.breeds){
        html+='<div class="breeds">';
        s.breeds.forEach(function(b){
          html+='<div class="breed"><h4>'+esc(b.b)+'</h4><p class="bs">'+esc(b.s)+'</p>';
          b.items.forEach(function(c){html+='<div class="cut"><span class="w">'+esc(c[1])+'</span><span class="cn">'+esc(c[0])+(c[3]?'<small>'+esc(c[3])+'</small>':'')+'</span><span class="cp">'+esc(c[2])+'</span></div>'});
          html+='</div>';
        });
        html+='</div>';
      } else {
        html+='<ul class="dishes">'+s.items.map(dish).join('')+'</ul>';
      }
      html+='</section>';
    });
    body.innerHTML=html;cats.innerHTML=ch;
    document.querySelectorAll('.kaart-tabs button').forEach(function(b){b.setAttribute('aria-selected',String(b.dataset.kaart===k))});
  }
  cats.addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;
    cats.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});
    body.querySelectorAll('.k-sec').forEach(function(s){s.hidden=s.id!==b.dataset.target});
    if(cats.getBoundingClientRect().top<70)document.getElementById('kaart').scrollIntoView();
  });
  document.querySelectorAll('.kaart-tabs button').forEach(function(b){b.addEventListener('click',function(){render(b.dataset.kaart)})});
  document.querySelectorAll('[data-open]').forEach(function(a){a.addEventListener('click',function(){render(a.dataset.open)})});
  render('diner');
})();
