(function(){
  function init(slider){
    if(slider.dataset.commaSliderInit)return;
    slider.dataset.commaSliderInit='1';
    var track=slider.querySelector('.comma-slider__track');
    var prev=slider.querySelector('.comma-slider__btn--prev');
    var next=slider.querySelector('.comma-slider__btn--next');
    if(!track)return;

    function step(){
      var slide=track.querySelector('.comma-slider__slide');
      return slide?slide.getBoundingClientRect().width+12:300;
    }
    function update(){
      if(!prev||!next)return;
      prev.disabled=track.scrollLeft<=2;
      next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;
    }
    if(prev)prev.addEventListener('click',function(){track.scrollBy({left:-step()*1.2,behavior:'smooth'})});
    if(next)next.addEventListener('click',function(){track.scrollBy({left:step()*1.2,behavior:'smooth'})});
    track.addEventListener('scroll',update,{passive:true});
    window.addEventListener('resize',update);
    update();
  }
  function boot(){document.querySelectorAll('.comma-slider').forEach(init)}
  if(document.readyState!=='loading')boot();
  else document.addEventListener('DOMContentLoaded',boot);
  document.addEventListener('shopify:section:load',boot);
})();
