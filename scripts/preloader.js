

    setTimeout(()=>{
        let logo = document.querySelector('#logo');
        if(logo)
        {
            
            const tl = new gsap.timeline();

           tl.to('#logo',.7,{opacity:0,bottom:30});
           tl.to('.loading_section',1.5,{scaleY:0,ease:Expo.easeInOut,transformOrigin:'top',onComplete:function(){
               startAnim();
               interSection();
               hover();
               //   smoo
           }});
        }
       

    },4000);


