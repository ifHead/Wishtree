const flightPath = {
  curviness: 1.5,
  autoRotate: true,
  values: [
    {x: 0, y: -300},
    {x: 300, y: 10}, 
    {x: 500, y: 100}, 
    {x: 750, y: -100}, 
    {x: 350, y: -50},
    {x: 600, y: 100},
    {x: 800, y: 0},
    {x: window.innerWidth, y: -250}
  ]
}
// hide_verytoplogo_anim = 
//------------첫 로고화면-------------
var controller = new ScrollMagic.Controller();
var tl_1 = new TimelineMax()
.add(TweenMax.to('#verytoplogo', 1, 
{  filter: "brightness(0.2)" }))
.add(TweenMax.to('#verytoplogo', 0, 
{ visibility: 'hidden' }));

var scene = new ScrollMagic.Scene({
  triggerElement: '#trig_hide_verytoplogo',
  duration: '150%',
  offset: 0,
  triggerHook: 0.8
})
.setTween(tl_1)
.addTo(controller)
.addIndicators({
  name: "trig_hide_verytoplogo"
});

// ---------- 배경 어둡게 ------------
var background_to_black = TweenMax.to('#white_bg', 1, {
  ease: Power1.easeOut,
  opacity: 0.0
});
var scene2 = new ScrollMagic.Scene({
  triggerElement: '#trig_bg_to_black',
  triggerHook: 0.6,
  // offset: 0,
  // duration: '120%'
})
.setTween(background_to_black)
.addTo(controller)
.addIndicators({
  name: "trig_bg_to_black"
});
// ------------------------------------

// ---------- 배경 밝게 ------------
var background_to_white = TweenMax.to('#white_bg', 1, {
  ease: Power1.easeIn,
  opacity: 1.0
});
var scene2 = new ScrollMagic.Scene({
  triggerElement: '#trig_bg_to_white',
  triggerHook: 0.5,
  
  // offset: 0,
  // duration: '120%'
})
.setTween(background_to_white)
.addTo(controller)
.addIndicators({
  name: "trig_bg_to_white"
});
// ------------------------------------