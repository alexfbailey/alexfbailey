document.addEventListener('DOMContentLoaded',function(){
  var lb=document.createElement('div');lb.className='lb';
  lb.innerHTML='<button class="x" aria-label="Close">&times;</button><div class="frame"></div>';
  document.body.appendChild(lb);
  function close(){lb.classList.remove('on');lb.querySelector('.frame').innerHTML='';}
  lb.querySelector('.x').onclick=close;
  lb.onclick=function(e){if(e.target===lb)close();};
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  document.querySelectorAll('a.play').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      lb.querySelector('.frame').innerHTML='<iframe src="https://www.youtube.com/embed/'+a.dataset.yt+'?autoplay=1&rel=0&modestbranding=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      lb.classList.add('on');
    });
  });
});
