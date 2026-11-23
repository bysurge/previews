(function(){
  // mobile menu
  var toggle=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  toggle.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
  });

  // opening status (laagseizoen t/m 22 maart en vanaf 2 oktober; hoogseizoen 22 maart t/m 1 oktober)
  var d=new Date(),m=d.getMonth()+1,day=d.getDate(),wd=d.getDay(); // 0=zo
  var hoog=(m>3||(m===3&&day>=22))&&(m<10||(m===10&&day<=1));
  var extra=(m===12&&day>=31)||(m===1&&day<=9)||(m===2&&day>=11&&day<=20);
  var openDays=hoog?[1,2,3,4,5,6]:[4,5,6];
  var names=['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
  var el=document.getElementById('today');
  var season=document.querySelector('.season[data-season="'+(hoog?'hoog':'laag')+'"]');
  if(season){
    season.classList.add('is-now');
    var dts=season.querySelectorAll('dt');
    var idx=(wd+6)%7; if(dts[idx])dts[idx].classList.add('is-today');
  }
  if(el){
    if(extra){el.textContent='De bistro is vandaag gesloten (extra sluitingsdagen)';el.classList.add('is-closed');}
    else if(openDays.indexOf(wd)>-1){el.textContent='Vanavond open vanaf 18.00 uur, binnenkomen tot 19.00 uur';}
    else{
      var n=1;while(openDays.indexOf((wd+n)%7)<0&&n<7)n++;
      el.textContent='Vandaag gesloten, '+names[(wd+n)%7]+' weer open vanaf 18.00 uur';
      el.classList.add('is-closed');
    }
  }

  // demo form
  var form=document.getElementById('res-form'),msg=document.getElementById('form-msg');
  form.addEventListener('submit',function(e){e.preventDefault();msg.hidden=false;});
})();
