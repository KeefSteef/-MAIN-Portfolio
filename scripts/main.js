globalOn();
function startAnim(){
    
  const tl = gsap.timeline();

      tl.to(".logo_name", 0.8, {
      y: 0,
      opacity: 1
    }, );
    tl.to(".scroll_block", 0.8, {
      y: 0,
      opacity: 1
    }, "-=0.25");
    
    tl.to('.main_image',1.3,{ease:Power1.easeInOut,width:'100%',scale:1.2});
    tl.to('.one_hide',1.1,{rotation:0,ease:Power2.easeInOut,top:'0px'});
    tl.to('.two_hide',1.1,{rotation:0,ease:Power2.easeInOut,top:'0px'},'-=0.8');
    tl.to('.three_hide',1.1,{rotation:0,ease:Power2.easeInOut,top:'0px'},'-=0.8');
  }


   function globalOn(){

      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp:0.05,
        multiplier:0.7,
        smoothMobile:true
      });

  
  }

  function interSection(){
      
      const loader = new IntersectionObserver((entries)=>{

        if(entries[0].intersectionRatio > 0)
        {
          gsap.set('.img_content',{ClipPath: 'inset(0% 0% 0% 0%)',ease:Cubic.easeInOut,scale:1});

        }
      });

      loader.observe(document.querySelector('.connector_content'))


      const contact = new IntersectionObserver((entries)=>{

        if(entries[0].intersectionRatio > 0 )
        {
            (function(){

              const tl = new gsap.timeline();
                    title = document.querySelectorAll('.main_details h2');
                    info = document.querySelectorAll('.main_details p,a');
              tl.to('.contact_logo span',2,{top:0,rotation:0, ease:Expo.easeInOut});
              tl.to('.main_preview h3 span',.7,{top:0,opacity:1},`-=0.75`);
              tl.to('.space_stick',.6,{opacity:1,y:0},`-=0.3`);
              tl.to('.contact_details h2 span ',{opacity:1,top:0});
              tl.to('.contact_details .name,.number ',.7,{opacity:1,y:0},`-=0.3`);
              tl.to('.Email h2 span',{top:0},`-=0.5`);
              tl.to('.Email a',{opacity: 1,y:0});
              tl.to('.location_details h2 span',{top:0},`-=0.3`);
              tl.to('.location_details p',{y:0,opacity:1});
              tl.to('.status h2 span',{top:0},`-=0.3`);
              tl.to('.status p',{opacity:1,y:0},`-=0.1`);


          
          
              // tl.to(info[0],.5,{opacity:1,y:0});
              // tl.to('.main_details h2',1,{opacity:1,y:0},`-=0.75`);
              // tl.to('.main_details p,a',.7,{opacity:1,y:0},`-=0.5`);
            }())
        }

      });

      contact.observe(document.querySelector('.main_preview h3 '))


  }

    function hover(){
      let button = document.querySelector('.hover_loader')

      button.addEventListener("mouseover", function( event ){

        document.querySelector('.y_stick').style.width = 150 + 'px';
      
      })

      button.addEventListener("mouseout", function( event ){

        document.querySelector('.y_stick').style.width = 0 + 'px';
      
      })
    }
    
    hover();
    interSection()