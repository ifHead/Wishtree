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

$('document').ready(function(){
  var controller = new ScrollMagic.Controller();
  var hide_verytoplogo_anim = TweenMax.to('#verytoplogo', 4, {
    opacity: 0.0,
    height: "450px"
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger_hide_verytoplogo',
    duration: '120%',
    offset: 0,
    triggerHook: 0.2
  })
  .setTween(hide_verytoplogo_anim)
  .addTo(controller)
  .addIndicators({
    name: "hide_verytoplogo"
  });
});