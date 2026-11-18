(function(){
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  var price=function(p){return '€ '+String(p).replace('.',',')};
  function parse(cat){
    return (cat.d||'').trim().split('\n').filter(Boolean).map(function(l){var a=l.split('|');return {nr:a[0],nm:a[1],ds:a[2],pr:a[3]}});
  }
  function itemHTML(i,q){
    var hl=function(s){s=esc(s||'');if(!q)return s;var r=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');return s.replace(r,'<mark>$1</mark>')};
    return '<li class="item"><span class="nr">'+esc(i.nr)+'</span><span class="nm">'+hl(i.nm)+'</span><span class="pr">'+price(i.pr)+'</span>'+(i.ds?'<span class="ds">'+hl(i.ds)+'</span>':'')+'</li>';
  }
  function catHTML(cat,q,items){
    var h='<h3>'+esc(cat.t)+(cat.star?' *':'')+'</h3>';
    if(cat.note)h+='<p class="pnote">'+esc(cat.note)+'</p>';
    if(cat.list){h+='<ul class="combi-list">'+cat.list.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>';return h}
    h+='<ul class="items">'+items.map(function(i){return itemHTML(i,q)}).join('')+'</ul>';
    return h;
  }
  function widget(data,tabsEl,panelEl,starText,searchEl){
    var cur=data[0].id;
    data.forEach(function(c){c._i=parse(c)});
    function renderTabs(){
      tabsEl.innerHTML=data.map(function(c){return '<button type="button" role="tab" data-id="'+c.id+'" aria-selected="'+(c.id===cur)+'">'+esc(c.t)+'</button>'}).join('');
    }
    function star(cat){
      var n=panelEl.parentNode.querySelector('.star-note');
      if(!n)return;
      if(cat&&cat.star){n.hidden=false;n.textContent=starText}else n.hidden=true;
    }
    function render(){
      var q=searchEl?searchEl.value.trim():'';
      if(q){
        var ql=q.toLowerCase(),out='',n=0;
        data.forEach(function(c){
          var m=c._i.filter(function(i){return (i.nr+' '+i.nm+' '+(i.ds||'')).toLowerCase().indexOf(ql)>-1});
          if(m.length){n+=m.length;out+='<p class="groupname">'+esc(c.t)+'</p><ul class="items">'+m.map(function(i){return itemHTML(i,q)}).join('')+'</ul>'}
        });
        panelEl.innerHTML=out||'<p class="empty">Geen gerecht gevonden voor "'+esc(q)+'". Probeer een ander woord, of bel ons: 0341-553001.</p>';
        tabsEl.style.display='none';star(null);
        return;
      }
      tabsEl.style.display='';
      var cat=data.filter(function(c){return c.id===cur})[0];
      panelEl.innerHTML=catHTML(cat,'',cat._i);
      star(cat);
    }
    tabsEl.addEventListener('click',function(e){
      var b=e.target.closest('button');if(!b)return;
      cur=b.getAttribute('data-id');renderTabs();render();
    });
    if(searchEl)searchEl.addEventListener('input',render);
    renderTabs();render();
  }
  widget(window.KAART,document.getElementById('kaart-tabs'),document.getElementById('kaart-panel'),'* Gerechten met een sterretje: met witte rijst € 1,50 extra, met nasi of bami € 2,00 extra, met mihoen of Chinese bami € 3,00 extra.',document.getElementById('q'));
  widget(window.AFHAAL,document.getElementById('afhaal-tabs'),document.getElementById('afhaal-panel'),'* Gerechten met een sterretje: met witte rijst € 1,20 extra, met nasi of bami € 1,30 extra, met mihoen of Chinese bami € 3,70 extra.',null);

  document.getElementById('rt').innerHTML=window.RIJSTTAFELS.map(function(r){
    return '<article><div class="top2"><h3>'+esc(r[1])+'</h3><span class="p">€ '+r[4]+'</span></div><p class="meta">Nr. '+r[0]+' · per persoon · '+esc(r[2])+'</p><p>'+esc(r[3])+'</p></article>';
  }).join('');
  document.getElementById('dr').innerHTML=Object.keys(window.DRANKEN).map(function(k){
    return '<div><h3>'+esc(k)+'</h3><ul>'+window.DRANKEN[k].split('\n').map(function(l){var a=l.split('|');return '<li><span>'+esc(a[0])+'</span><span>'+price(a[1])+'</span></li>'}).join('')+'</ul></div>';
  }).join('');

  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
})();
