

function pageTransition()
{ 
  // $('*').css("overflow","visible");
    const ab = gsap.timeline();
    ab.set('.loading-transition',{left:'0%',width:'0%'});
    ab.to('.loading-transition',1.5,{ease:Expo.easeInOut,width:'100%',letf:'0%'});
    ab.to('.loading-transition',1.5,{ease:Expo.easeInOut,width:'100%',left:'100%'});
   


}

function fadeInContent()
{
	

    TweenLite.from('.about__back',2,{ease:Expo.easeInOut,scaleY:0,transformOrigin:'bottom'});
    var ab = new TimelineMax();
    
    
    ab.set('.about__photo_wrap',{clip:"rect(800px,800px,800px,0px)"});
    ab.to('.about__photo_wrap',2, { clip:"rect(0px,600px,800px,0px)",ease:Expo.easeOut}, 1);
    ab.to('.about_title',1,{opacity:1,y:-50})
    ab.to('.first_p',1,{opacity:1,y:-50},'-=0.8');
    ab.to('.second_p',1,{opacity:1,y:-50},'-=0.8');

  
}


barba.hooks.afterLeave(() => {

  setTimeout(function(){
	interSection();
	hover();
	startAnim();
	globalOn();
	//   smooth(1);
  })

  scroll.destroy();
});
// barba.hooks.beforeEnter(() => {
//   setTimeout(function(){
// 	globalOn();
// 	interSection();
// 	hover();
// 	startAnim();
// 	// smooth(0.05);
//   })
// });


barba.init({
	sync: true,

	transitions: [
		{
			async leave() {
				const done = this.async();
				pageTransition();
				await delay(1600);
				done();
			},
			async enter() {
				 fadeInContent();
			},
			async once() {
				 fadeInContent();
			},
		},
	],
});

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}