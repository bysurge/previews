(function(){
  var tog=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  tog.addEventListener('click',function(){var o=nav.classList.toggle('open');tog.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');tog.setAttribute('aria-expanded','false')}});

  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  // hero slideshow (eigen foto's)
  var slides=document.querySelectorAll('.hero-slides img'),si=0;
  if(slides.length>1&&!reduce)setInterval(function(){slides[si].classList.remove('on');si=(si+1)%slides.length;slides[si].classList.add('on')},6000);

  // open status
  var now=new Date(),d=now.getDay(),m=now.getHours()*60+now.getMinutes();
  var close=(d===5||d===6)?1440:1320,closeTxt=(d===5||d===6)?'00:00':'22:00';
  var st=document.getElementById('status'),t=document.getElementById('status-text');
  if(d===1){t.textContent='Vandaag gesloten, dinsdag vanaf 12:00 uur weer open';st.classList.add('closed')}
  else if(m<720){t.textContent='Vandaag open vanaf 12:00 uur'}
  else if(m<close){t.textContent='Nu open, tot '+closeTxt+' uur';st.classList.add('open')}
  else{t.textContent=d===0?'Dinsdag vanaf 12:00 uur weer open':'Morgen vanaf 12:00 uur weer open';st.classList.add('closed')}
  var row=document.querySelector('#hours tr[data-d="'+d+'"]');if(row)row.classList.add('today');

  // kaart
  var K=window.KAART,panel=document.getElementById('panel'),jump=document.getElementById('jump'),intro=document.getElementById('kaart-intro');
  var esc=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')};
  function show(key){
    var k=K[key],h='',j='';
    k.groepen.forEach(function(g,i){
      var id=key+'-'+i;
      j+='<a href="#'+id+'">'+esc(g.naam)+'</a>';
      h+='<div class="groep" id="'+id+'"><h3>'+esc(g.naam)+'</h3>'+(g.noot?'<p class="noot">'+esc(g.noot)+'</p>':'');
      g.items.forEach(function(it){
        var price=/\d/.test(it[2])?'€ '+it[2]:it[2];
        h+='<div class="item"><div class="item-top"><span class="item-name">'+esc(it[0])+(it[4]?' <span class="tag">'+it[4]+'</span>':'')+'</span><span class="item-price">'+price+'</span></div>'+
          (it[1]?'<p class="item-desc">'+esc(it[1])+'</p>':'')+(it[3]?'<p class="item-extra">'+esc(it[3])+'</p>':'')+'</div>';
      });
      h+='</div>';
    });
    panel.innerHTML=h;jump.innerHTML=j;intro.textContent=k.intro;
    document.querySelectorAll('.tabs button').forEach(function(b){b.setAttribute('aria-selected',b.dataset.tab===key)});
    panel.setAttribute('aria-labelledby','tab-'+key);
  }
  show('lunch');
  document.querySelector('.tabs').addEventListener('click',function(e){var b=e.target.closest('button');if(b)show(b.dataset.tab)});
  document.querySelector('.tabs').addEventListener('keydown',function(e){
    if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return;
    var bs=[].slice.call(this.querySelectorAll('button')),i=bs.indexOf(document.activeElement);if(i<0)return;
    var n=bs[(i+(e.key==='ArrowRight'?1:bs.length-1))%bs.length];n.focus();show(n.dataset.tab);
  });
  // links elders op de pagina die een kaart openen
  document.querySelectorAll('a[data-tab]').forEach(function(a){a.addEventListener('click',function(){show(a.dataset.tab)})});
})();
