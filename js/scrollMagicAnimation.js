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


var controller = new ScrollMagic.Controller();
var hide_verytoplogo_anim = TweenMax.to('#verytoplogo', 4, {
  opacity: 0.0,
  top:'300px'
});

var scene = new ScrollMagic.Scene({
  triggerElement: '#trig_hide_verytoplogo',
  duration: '120%',
  offset: 0,
  triggerHook: 0.4
})
.setTween(hide_verytoplogo_anim)
.addTo(controller)
.addIndicators({
  name: "trig_hide_verytoplogo"
});

// ---------- 배경 어둡게 ------------
var background_to_black = TweenMax.to('#white_bg', 1, {
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