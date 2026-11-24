(function(){
  // header: solid after scrolling past the top of the hero
  var bar=document.getElementById('top-bar');
  function onScroll(){bar.classList.toggle('solid',window.scrollY>40)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});

  // mobile menu
  var tog=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  tog.addEventListener('click',function(){
    var open=tog.getAttribute('aria-expanded')==='true';
    tog.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);
    if(!open)bar.classList.add('solid');else onScroll();
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){tog.setAttribute('aria-expanded','false');nav.classList.remove('open')}});

  // opening hours: today
  var hours={0:[12,0,22],1:[16.5,0,22],2:null,3:[16.5,0,22],4:[16.5,0,22],5:[12,0,22],6:[12,0,22]};
  var now=new Date(),d=now.getDay(),h=now.getHours()+now.getMinutes()/60;
  var row=document.querySelector('.uren tr[data-d="'+d+'"]');if(row)row.classList.add('today');
  var el=document.getElementById('vandaag'),t=hours[d];
  if(!t){el.textContent='Vandaag (dinsdag) zijn we gesloten';el.classList.add('closed')}
  else{
    var from=t[0]===12?'12:00':'16:30';
    if(h<t[2])el.textContent='Vandaag open van '+from+' tot 22:00';
    else{el.textContent='Morgen weer open';el.classList.add('closed');if(d===1)el.textContent='Woensdag weer open vanaf 16:30'}
  }

  // menu
  var M=window.MAMTA_MENU,body=document.getElementById('kaart-body'),cats=document.getElementById('cats'),note=document.getElementById('kaart-note');
  var notes={diner:'Restaurantkaart. Al onze currygerechten worden geserveerd met basmatirijst.',lunch:'Lunchkaart. Vrijdag t/m zondag zijn we vanaf 12:00 uur open.',afhaal:'Afhaalkaart. Let op: de afhaalprijzen wijken af van de restaurantkaart.'};
  var hot=/pittig|heet/i;
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  function slug(k,i){return 'k-'+k+'-'+i}
  function render(k){
    note.textContent=notes[k];
    var html='',ch='';
    M[k].forEach(function(s,i){
      ch+='<button type="button"'+(i?'':' class="on"')+' data-target="'+slug(k,i)+'">'+esc(s.t)+'</button>';
      html+='<section class="k-sec" id="'+slug(k,i)+'"'+(i?' hidden':'')+'><h3>'+esc(s.t)+'</h3>'+(s.i?'<p class="k-intro">'+esc(s.i)+'</p>':'')+'<ul class="dishes">';
      s.d.forEach(function(x){
        var tag=x.tag?'<span class="tag'+(hot.test(x.tag)?' hot':'')+'">'+esc(x.tag)+'</span>':'';
        html+='<li class="dish'+(x.n?'':' nonr')+'">'+(x.n?'<span class="nr">'+x.n+'</span>':'')+'<span class="nm">'+esc(x.name)+tag+'</span><span class="pr">'+esc(x.p)+'</span>'+(x.d?'<p class="ds">'+esc(x.d)+'</p>':'')+'</li>';
      });
      html+='</ul></section>';
    });
    body.innerHTML=html;cats.innerHTML=ch;
    document.querySelectorAll('.kaart-tabs button').forEach(function(b){b.setAttribute('aria-selected',String(b.dataset.kaart===k))});
  }
  cats.addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;
    cats.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});
    body.querySelectorAll('.k-sec').forEach(function(s){s.hidden=s.id!==b.dataset.target});var top=document.getElementById('kaart').querySelector('.kaart-tabs').getBoundingClientRect().top;if(top<0)document.querySelector('.kaart-tabs').scrollIntoView();
  });
  document.querySelectorAll('.kaart-tabs button').forEach(function(b){b.addEventListener('click',function(){render(b.dataset.kaart)})});
  document.querySelectorAll('[data-open]').forEach(function(a){a.addEventListener('click',function(){
    render(a.dataset.open);
    if(a.dataset.cat){var i=M[a.dataset.open].findIndex(function(s){return s.t===a.dataset.cat});
      if(i>=0){var bt=cats.querySelector('[data-target="'+slug(a.dataset.open,i)+'"]');if(bt)bt.click();}}
  })});
  render('diner');

  // reservation form: preview only
  var dt=document.getElementById('res-datum'),min=new Date();min.setDate(min.getDate()+2);
  dt.min=min.toISOString().slice(0,10);
  document.getElementById('res-form').addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById('form-msg').textContent='Dit is een voorbeeld: er is niets verstuurd. In de echte website komt uw reservering hier bij Mamta binnen.';
  });
})();
