(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=btn.getAttribute('aria-expanded')==='true';
      btn.setAttribute('aria-expanded',String(!open));
      nav.classList.toggle('open',!open);
    });
    nav.addEventListener('click',function(e){
      if(e.target.tagName==='A'){btn.setAttribute('aria-expanded','false');nav.classList.remove('open');}
    });
  }
  var form=document.getElementById('res-form'),msg=document.getElementById('form-msg');
  if(form&&msg){
    form.addEventListener('submit',function(e){e.preventDefault();msg.hidden=false;});
  }
})();
