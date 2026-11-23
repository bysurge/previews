(function(){
  var toggle=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  function close(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
  toggle.addEventListener('click',function(){var o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o?'true':'false');});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]')),img=document.getElementById('kaart-img');
  function select(t){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});
    var src=t.getAttribute('data-img');
    if(img&&src&&img.getAttribute('src')!==src){img.style.opacity=0;setTimeout(function(){img.src=src;img.style.opacity=1;},180);}
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var n=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;
      if(n===null)return;n=(n+tabs.length)%tabs.length;tabs[n].focus();select(tabs[n]);e.preventDefault();
    });
  });

  var form=document.getElementById('res-form');
  form.addEventListener('submit',function(e){e.preventDefault();form.querySelector('.form-msg').hidden=false;});
})();
