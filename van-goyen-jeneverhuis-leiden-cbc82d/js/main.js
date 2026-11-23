(function(){
  // mobile menu
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});

  // opening hours today
  var uren={0:['16:00','00:00'],1:['19:00','01:00'],2:['17:00','01:00'],3:['17:00','01:00'],4:['17:00','01:00'],5:['16:00','02:00'],6:['16:00','02:00']};
  var d=new Date().getDay(), row=document.querySelector('.uren tr[data-d="'+d+'"]');
  if(row) row.classList.add('vandaag');
  var t=document.querySelector('[data-today]');
  if(t) t.textContent='Schoolsteeg 4, Leiden. Vandaag open van '+uren[d][0]+' tot '+uren[d][1];

  // jenever list
  var data=window.JENEVERS||[], lijst=document.getElementById('lijst'), zoek=document.getElementById('zoek'),
      meer=document.getElementById('meer'), leeg=document.getElementById('leeg'), land='', alles=false, KORT=10;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function render(){
    var q=(zoek.value||'').toLowerCase().trim();
    var rows=data.filter(function(j){
      if(land&&j.land!==land) return false;
      if(!q) return true;
      return (j.n+' '+j.maker+' '+j.plaats+' '+j.t).toLowerCase().indexOf(q)>-1;
    });
    var toon=(alles||q)?rows:rows.slice(0,KORT);
    lijst.innerHTML=toon.map(function(j){
      return '<li><details><summary><span class="jn">'+esc(j.n)+'</span><span class="jp">€ '+esc(j.p)+'</span>'+
        '<span class="jm">'+esc(j.maker)+(j.plaats?', '+esc(j.plaats)+' ('+esc(j.land)+')':'')+'</span>'+
        '<span class="jt">'+esc(j.t)+'</span></summary>'+(j.d?'<p class="jd">'+esc(j.d)+'</p>':'')+'</details></li>';
    }).join('');
    leeg.hidden=rows.length>0;
    meer.hidden=alles||q||rows.length<=KORT;
    meer.textContent='Toon de hele kaart ('+rows.length+' jenevers)';
  }
  zoek.addEventListener('input',render);
  document.querySelectorAll('.land button').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.land button').forEach(function(x){x.classList.remove('on')});
      b.classList.add('on'); land=b.getAttribute('data-land'); render();
    });
  });
  meer.addEventListener('click',function(){alles=true;render()});
  render();

  // buttons that preselect the request type
  var soort=document.getElementById('soort');
  document.querySelectorAll('[data-kies]').forEach(function(a){
    a.addEventListener('click',function(){soort.value=a.getAttribute('data-kies')});
  });

  // demo forms: never send
  document.querySelectorAll('form').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');if(m)m.hidden=false});
  });
})();
