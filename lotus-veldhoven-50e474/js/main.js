(function(){
  // mobile menu
  var tog=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  tog.addEventListener('click',function(){var o=nav.classList.toggle('open');tog.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');tog.setAttribute('aria-expanded','false')}});

  // open status + today in hours
  var now=new Date(),d=now.getDay(),m=now.getHours()*60+now.getMinutes();
  var st=document.getElementById('status'),stt=document.getElementById('status-text');
  if(d===1){stt.textContent='Vandaag gesloten, dinsdag weer open vanaf 16.00 uur';st.classList.add('closed')}
  else if(m<960){stt.textContent='Vandaag open vanaf 16.00 uur'}
  else if(m<1230){stt.textContent='Nu open, tot 20.30 uur';st.classList.add('open')}
  else{stt.textContent=d===0?'Dinsdag weer open vanaf 16.00 uur':'Morgen weer open vanaf 16.00 uur';st.classList.add('closed')}
  var row=document.querySelector('#hours tr[data-d="'+d+'"]');if(row)row.classList.add('today');

  // afhaalkaart
  var euro=function(v){return '€ '+v.toFixed(2).replace('.',',')};
  var list=document.getElementById('kaart-list'),chips=document.getElementById('chips');
  var slug=function(s){return 'cat-'+s.toLowerCase().replace(/[^a-z]+/g,'-')};
  var html='',ch='';
  (window.KAART||[]).forEach(function(c){
    var id=slug(c.name);
    ch+='<button class="chip" type="button" data-target="'+id+'">'+c.name.replace(' gerechten met rijst','').replace(' gerechten','')+'</button>';
    html+='<div class="cat" id="'+id+'"><h3>'+c.name+'</h3>';
    c.items.forEach(function(it){
      var txt=(it.nr+' '+it.name+' '+it.desc).toLowerCase();
      html+='<div class="dish" data-s="'+txt.replace(/"/g,'')+'"><span class="nr">'+it.nr+'</span><span class="nm">'+it.name+(it.desc?'<span class="ds">'+it.desc+'</span>':'')+'</span><span class="pr">'+euro(it.price)+(it.pp?' p.p.':'')+'</span>'+
        (it.pp?'<span class="plus-none"></span>':'<button class="plus" type="button" aria-label="Nr. '+it.nr+' op mijn briefje" data-add="'+it.nr+'|'+it.name.replace(/"/g,'')+'|'+it.price+'">+</button>')+'</div>';
    });
    html+='</div>';
  });
  list.innerHTML=html;chips.innerHTML=ch;

  // one category at a time (chips), search looks through the whole card
  var cats=[].slice.call(document.querySelectorAll('.cat')),cur=cats[0].id;
  var zoek=document.getElementById('zoek'),noHit=document.getElementById('no-hit');
  function showCat(id){
    cur=id;zoek.value='';
    cats.forEach(function(c){c.style.display=c.id===id?'':'none';[].forEach.call(c.querySelectorAll('.dish'),function(r){r.style.display=''})});
    [].forEach.call(chips.children,function(b){var on=b.dataset.target===id;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);if(on)chips.scrollTo({left:b.offsetLeft-16,behavior:'smooth'})});
    noHit.hidden=true;
  }
  chips.addEventListener('click',function(e){
    var b=e.target.closest('.chip');if(!b)return;
    showCat(b.dataset.target);
    var tools=document.querySelector('.kaart-tools');
    if(tools.getBoundingClientRect().top<0||document.getElementById(cur).getBoundingClientRect().top<tools.offsetHeight+62){
      var y=document.getElementById('afhaalkaart').querySelector('.kaart-grid').getBoundingClientRect().top+window.scrollY-tools.offsetHeight-70;
      window.scrollTo({top:y,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    }
  });
  showCat(cur);

  zoek.addEventListener('input',function(){
    var q=zoek.value.trim().toLowerCase(),any=false;
    if(!q){var keep=cur;zoek.value='';showCat(keep);return}
    [].forEach.call(chips.children,function(b){b.classList.remove('on');b.setAttribute('aria-pressed','false')});
    cats.forEach(function(c){
      var vis=0;
      [].forEach.call(c.querySelectorAll('.dish'),function(r){var ok=r.dataset.s.indexOf(q)>-1||r.querySelector('.nr').textContent.toLowerCase()===q;r.style.display=ok?'':'none';if(ok)vis++});
      c.style.display=vis?'':'none';if(vis)any=true;
    });
    noHit.hidden=any;
  });

  // bestelbriefje (alleen lokaal, niets wordt verstuurd)
  var items={},order=[];
  var bl=document.getElementById('b-list'),be=document.getElementById('b-empty'),bs=document.getElementById('b-sum'),
      bc=document.getElementById('b-count'),bt=document.getElementById('b-total'),box=document.getElementById('briefje'),
      bar=document.getElementById('briefje-bar');
  function render(){
    var tot=0,n=0,h='';
    order.forEach(function(k){var it=items[k];if(!it)return;tot+=it.p*it.q;n+=it.q;
      h+='<li><span class="bn">'+(/^[A-D]$|^MM$/.test(k)?(k==='MM'?'Maand':'Menu '+k):'nr. '+k)+'</span><span>'+it.n+'</span><span class="bq"><button type="button" data-min="'+k+'" aria-label="Eén minder">−</button>'+it.q+'<button type="button" data-plus="'+k+'" aria-label="Eén meer">+</button></span></li>'});
    bl.innerHTML=h;be.style.display=n?'none':'';
    bs.textContent=euro(tot);bt.textContent=euro(tot);bc.textContent=n;
    box.classList.toggle('show',n>0);
    document.querySelectorAll('[data-add]').forEach(function(b){
      var k=b.dataset.add.split('|')[0],q=items[k]?items[k].q:0;
      if(b.classList.contains('plus')){b.classList.toggle('has',q>0);b.textContent=q>0?q+'×':'+'}
      else{b.classList.toggle('added',q>0);b.textContent=q>0?'Op uw briefje ('+q+')':'Op mijn briefje'}
    });
  }
  function add(k,n,p){if(!items[k]){items[k]={n:n,p:p,q:0};order.push(k)}items[k].q++;render()}
  document.addEventListener('click',function(e){
    var a=e.target.closest('[data-add]');
    if(a){var p=a.dataset.add.split('|');add(p[0],p[1],parseFloat(p[2]));return}
    var mn=e.target.closest('[data-min]');
    if(mn){var k=mn.dataset.min;items[k].q--;if(!items[k].q){delete items[k];order.splice(order.indexOf(k),1)}render();return}
    var pl=e.target.closest('[data-plus]');
    if(pl){items[pl.dataset.plus].q++;render()}
  });
  bar.addEventListener('click',function(){var x=box.classList.toggle('expanded');bar.setAttribute('aria-expanded',x)});
  document.getElementById('b-clear').addEventListener('click',function(){items={};order=[];box.classList.remove('expanded');bar.setAttribute('aria-expanded','false');render()});
  render();
})();
