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

const controller = new ScrollMagic.Controller();
var body_elem = document.querySelector("body");
const timeline = new TimelineLite();

timeline.add(
  TweenLite.to('#verytoplogo', 2, {
    opacity: 1
  })
)
const reveal_verytoplogo_scrollmagic = new ScrollMagic.Scene({
  triggerElement: "#trigger_reveal_verytoplogo",
  duration: 100,
  triggerHook: 0.2
}).setTween(reveal_verytoplogo_timeline).addIndicators().addTo(controller);


timeline.add(
  TweenLite.to('#verytoplogo', 2, {
    opacity: 0
  })
)
const hide_verytoplogo_scrollmagic = new ScrollMagic.Scene({
  triggerElement: "#trigger_hide_verytoplogo",
  duration: 100,
  triggerHook: 0.2
}).setTween(hide_verytoplogo_timeline).addIndicators().addTo(controller);
