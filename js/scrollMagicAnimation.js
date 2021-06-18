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
.add(TweenMax.fromTo('#mainpage_1', 1, 
{ transform: 'translate(-50%, -120px)' }, {  transform: 'translate(-50%, -160px)' }))
.add(TweenMax.to('#mainpage_1', 1.2,
{  filter: 'brightness(1)' }))
.add(TweenMax.to('#mainpage_1', 1,
{  filter: 'brightness(0.6)'}))
.add(TweenMax.to('#mainpage_1', 1,
{  filter: 'brightness(0.61)' }))
.add(TweenMax.to('#mainpage_1', 3,
{ visibility: 'hidden' }));

var scene_m1 = new ScrollMagic.Scene({
  triggerElement: '#trig_mainpage',
  duration: '500%',
  offset: 0,
  triggerHook: 0
})
.setTween(tl_1)
.addTo(controller);

var tl_2 = new TimelineMax()
.add(TweenMax.fromTo('#mainpage_2', 1, 
{ transform: 'translate(-50%, 5vh)' }, {  transform: 'translate(-50%, -52vh)' }))
.add(TweenMax.to('#mainpage_2', 0.6, 
{  filter: 'brightness(0.6)', ease: Sine.easeIn}))
.add(TweenMax.to('#mainpage_2', 2, 
{  filter: 'brightness(0.61)', ease: Sine.easeIn}))
.add(TweenMax.to('#mainpage_2', 3, 
{ visibility: 'hidden' }));

var scene_m2 = new ScrollMagic.Scene({
  triggerElement: '#trig_mainpage',
  duration: '500%',
  offset: 0,
  triggerHook: 0
})
.setTween(tl_2)
.addTo(controller);

var tl_3 = new TimelineMax()
.add(TweenMax.fromTo('#mainpage_3', 1.3, 
{ transform: 'translate(-50%, 40vh)' }, {  transform: 'translate(-50%, -50vh)' }))
.add(TweenMax.to('#mainpage_3', 1.3, 
{  filter: 'brightness(0.6)', ease: Power2.easeOut }))
.add(TweenMax.to('#mainpage_3', 2, 
{  filter: 'brightness(0.61)'  }))
.add(TweenMax.to('#mainpage_3', 3, 
{ visibility: 'hidden' }));

var scene_m3 = new ScrollMagic.Scene({
  triggerElement: '#trig_mainpage',
  duration: '500%',
  offset: 0,
  triggerHook: 0
})
.setTween(tl_3)
.addTo(controller);

var tl_4 = new TimelineMax()
.add(TweenMax.fromTo('#mainpage_4', 1, 
{ transform: 'translate(-50%, 0vh)' }, {  transform: 'translate(-50%, -104vh)' }))
.add(TweenMax.to('#mainpage_4', 0.5, 
{  filter: 'brightness(0.6)', ease: Power1.easeOut  }))
.add(TweenMax.to('#mainpage_4', 2, 
{  filter: 'brightness(0.61)'  }))
.add(TweenMax.to('#mainpage_4', 3,
{ visibility: 'hidden' }));

var scene_m4 = new ScrollMagic.Scene({
  triggerElement: '#trig_mainpage',
  duration: '500%',
  offset: 0,
  triggerHook: 0
})
.setTween(tl_4)
.addTo(controller);


var upper_cover_move = TweenMax.fromTo(
  '#p_cover_upper', 2,
  {transform: 'translate(-70%, -100px)'}, 
  {transform: 'translate(-50%, 200px)'}
);
var covermove_1 = new ScrollMagic.Scene({
  triggerElement: '#trig_covers',
  triggerHook: 1,
  // offset: 0,
  duration: '200%'
})
.setTween(upper_cover_move)
.addTo(controller)
// .addIndicators({
//   name: "upper_cover_move"
// });

var under_cover_move = TweenMax.fromTo(
  '#p_cover_under', 2, 
  {transform: 'translate(-40%, 0px)'}, 
  {transform: 'translate(-60%, 0px)'}
);
var covermove_2 = new ScrollMagic.Scene({
  triggerElement: '#trig_covers',
  triggerHook: 1,
  // offset: 0,
  duration: '200%'
})
.setTween(under_cover_move)
.addTo(controller);




// ---------- 배경 어둡게 ------------
var background_to_black = TweenMax.to('#white_bg', 2, {
  ease: Power2.easeOut,
  opacity: 0.13
});
var scene2 = new ScrollMagic.Scene({
  triggerElement: '#trig_bg_to_black',
  triggerHook: 0,
  // offset: 0,
  // duration: '120%'
})
.setTween(background_to_black)
.addTo(controller)
// .addIndicators({
//   name: "trig_bg_to_black"
// });
// ------------------------------------

// ---------- 배경 밝게 ------------
var background_to_white = TweenMax.to('#white_bg', 1, {
  ease: Power1.easeOut,
  opacity: 1.0
});
var scene3 = new ScrollMagic.Scene({
  triggerElement: '#trig_bg_to_white',
  triggerHook: 0.1
  // offset: 0,
  // duration: '120%'
})
.setTween(background_to_white)
.addTo(controller)
// .addIndicators({
//   name: "trig_bg_to_white"
// });
// ------------------------------------

// //-----------배경 빠르게 블랙------------------
// var bg_fast_black = TweenMax.to('#white_bg', 0.3, {
//   opacity: 0.0
// });
// var fast1 = new ScrollMagic.Scene({
//   triggerElement: '#trig_fast_black',
//   triggerHook: 0
//   // offset: 0,
//   // duration: '120%'
// })
// .setTween(bg_fast_black)
// .addTo(controller)
// .addIndicators({
//   name: "trig_fast_black"
// });
// // ------------------------------------

// // ---------- 배경 빠르게 화이트 ------------
// var bg_fast_white = TweenMax.to('#white_bg', 0.3, {
//   opacity: 1.0
// });
// var fast2 = new ScrollMagic.Scene({
//   triggerElement: '#trig_fast_white',
//   triggerHook: 0
  
//   // offset: 0,
//   // duration: '120%'
// })
// .setTween(bg_fast_white)
// .addTo(controller)
// .addIndicators({
//   name: "trig_fast_white"
// });
// //-----------------------------------

//----------소망나무 핀-------------
var tl_5 = new TimelineMax()
.add(TweenMax.to('#wt_2', 2, 
{ opacity: 1.0 }))
.add(TweenMax.to('#wt_3', 2, 
{ opacity: 1.0 }))
.add(TweenMax.to('#wt_4', 2, 
{ opacity: 1.0 }));
	
for(let i = 0; i < 5; i++){
  let pinObj = ["#wt_1", "#wt_2", "#wt_3", "#wt_4", "#B1_P"];
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#trig_wishtree_pin",
    duration: '370%',
    triggerHook: 0.5,
    offset: 0
  })
  .setPin(pinObj[i])
  .addTo(controller)
  .setTween(tl_5)
  // .addIndicators({
  //   name: "trig_wishtree_pin"
  // });
}
//---------------------------------

//----------우체통-----------------
let pinObj2 = ['#ut_1','#ut_2', '#B2-25P']
var anim3 = TweenMax.to('#ut_1',1,{
  opacity: 0
});

for(let i = 0; i < 3; i++){
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#trig_postbox_pin",
    duration: '140%',
    triggerHook: 0.5,
  })
  .setPin(pinObj2[i])
  .addTo(controller)
  .setTween(anim3)
  // .addIndicators({
  //   name: "trig_postbox_pin"
  // });
}

//----------------------------------