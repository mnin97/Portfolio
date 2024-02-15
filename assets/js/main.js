const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



$(".header .nav .list .item").hover(
    function() {
        // Hover in
        $(this).addClass("on");
    },
    function() {
        // Hover out
        $(this).removeClass("on");
    }
);

$(".main .project .project-list .list-item").hover(
    function() {
        
        $(this).find(".link-go").data("tab");

        $(this).find(".link-go").addClass("active");
    },
    function() {
        
        $(this).find(".link-go").removeClass("active");
    }
);

const introText = new SplitType('.logo-section .text', { types: 'words, chars', });
const introTextMotion = gsap.timeline({}) 
introTextMotion.from(".logo-section .char",{
    yPercent:100,
    stagger:{
        from:"random",
        each:0.1,
    }
},'a')
introTextMotion.from(".logo-section .title .year",{
    opacity:0
},'a+=0.5')
introTextMotion.from(".logo-section .desc span",{
    opacity:0
},'a+=0.5')
introTextMotion.from(".works .item",{
    opacity:0,
    scale:0,
    stagger:{
        from:"random",
        each:0.1,
    }
},'a')



const introText2 = new SplitType('.my-project .text', { types: 'words, chars' });

const introTextMotion2 = gsap.timeline({
  paused: true
});

introTextMotion2.from(".my-project .char", {
  yPercent: 100,
  stagger: {
    from: "random",
    each: 0.1,
  }
}, 'a')
.from(".my-project .headline .num", {
  opacity: 0
}, 'a+=0.5')
// .from(".my-project .desc", {
//   opacity: 0
// }, 'a+=0.5')
// .from(".my-project .desc span",{
//     opacity:0
// },'a+=0.5')

ScrollTrigger.create({
  trigger: '.my-project',
  start: 'top 80%', 
  onEnter: () => introTextMotion2.play()
});



gsap.to(".header", {
    scrollTrigger: {
        trigger: ".main .project .project-list",
        start: "top top",
        end: "bottom bottom ",
        scrub: true,
        onEnter: () => $(".header").addClass("fix-none"),
        onLeaveBack: () => $(".header").removeClass("fix-none"),
}})



const workHeadlineText = new SplitType('.works .headline .text', { types: 'words, chars', });

let mm = gsap.matchMedia();
mm.add("(max-width: 999px)", () => {
    const stickyMotion = gsap.timeline({
        scrollTrigger:{
            trigger:".works",
            start:"0% 0%",
            end:"100% 0%",
            scrub:true,
            onEnter:function(){
                workTextMotion.play()
            }
        },
    })
    .to(".works .worksspace-wrapper", {scale:1.4})
})



mm.add("(min-width: 1000px)", () => {
    gsap.set('.works .worksspace-wrapper .workspace-center',{yPercent:-33})
    const stickyMotion = gsap.timeline({
        scrollTrigger:{
            trigger:".works",
            start:"0% 0%",
            end:"100% 0%",
            scrub:true,
            onEnter:function(){
                workTextMotion.play()
            }
        },
    })
    .to(".works .list:nth-child(1)", {yPercent:-20},'a')
    .to(".works .list:nth-child(2)", {yPercent:0},'a')
    .to(".works .list:nth-child(3)", {yPercent:-10},'a')

        
    const workTextMotion = gsap.timeline({ paused:true, }) 
    workTextMotion.from(".works .headline .char",{
        yPercent:100,
        stagger:{
            from:"random",
            each:0.1,
        }
    })
    workTextMotion.from(".works .headline .num",{ opacity:0 })

    const workGapMotion =  gsap.timeline({
        scrollTrigger:{
            trigger:".my-project",
            start:"0% 100%",
            end:"top 10%",
            scrub:true,
        },
    })
    
    workGapMotion.to(".works .worksspace-wrapper .workspace",{ gap:40 },'a')
    workGapMotion.to(".works .worksspace-wrapper .workspace-center",{ gap:40 },'a')
    workGapMotion.to(".works .worksspace-wrapper",{ 
        gap:40,
        filter: 'brightness(0.2)'
     },'a')
    

})









$(".my-project .project-list .item").hover(function(){
    bg=$(this).data('bg');
    $('.my-project').css('background',bg)
},function(){
    $('.my-project').css('background','#000')
});

const mainSlide = new Swiper(".project .swiper", {
    slidesPerView:"2",  
    loop:true,
   
     breakpoints: {
        1024: {
          slidesPerView: 2,
          pagination: {
            el: ".fraction",
            type: "fraction",
          },
        }, 
        
        320: {
          slidesPerView: 1,
          pagination: {
            el: ".fraction",
            type: "fraction",
          },
        },
      },
   });




function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
$('.time').html(`${hours} : ${minutes} : ${seconds}`);	//  시:분:초
}
setInterval(() => {
    getTime();
}, 1000);



$('.fix-top').click(function(){
    if ($(this).text() === "top") {
        lenis.scrollTo(0,{duration:3})
        $(this).text('bototm')
    }else{
        $(this).text('top')
        lenis.scrollTo('.footer',{duration:3})
    }
})

$('#project').click(function() {
    $('html, body').animate({
        scrollTop: $('.my-project').offset().top
    });
});
$('#footer-intro').click(function() {
    $('html, body').animate({
        scrollTop: $('.footer-intro').offset().top
    });
});
$('#logo-section').click(function() {
    $('html, body').animate({
        scrollTop: $('.logo-section').offset().top
    });
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".my-project .desc",
        
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        onEnter: function () {
            projectTextMotion.play();
        }
    }
});



const projectTextMotion = gsap.timeline({
    paused: true
});

projectTextMotion.from(".my-project .desc", {
    xPercent: -100,
    stagger: {
        from: "start", // Change from "random" to "start"
        each: 10,
    },
    opacity:0,
    duration:1.5,
});




let mm2 = gsap.matchMedia();

mm2.add("(max-width: 760px)", () => {
    gsap.from(".my-project .arrow-icon", {
        yPercent: 20,
        duration: 1.2, 
        repeat: -1,
        scrub: true,
    });
});

gsap.from(".my-project .arrow-icon", {
    xPercent: -20,
    duration: 1.2, 
    repeat: -1,
    scrub: true,
});





gsap.timeline({
    
})

gsap.from(".footer-intro .right", {
    scrollTrigger: {
        trigger: ".footer-intro .right",
        start: "10% 90%",
        end: "bottom bottom",
        
    },
    xPercent: 100,
    stagger: {
        amount: 0.1, // Specify the stagger amount
    },
    opacity: 0,
});

gsap.from(".footer-intro .left", {
    scrollTrigger: {
        trigger: ".footer-intro .left",
        start: "10% 90%",
        end: "bottom bottom",
        
    },
    xPercent: -100,
    stagger: {
        amount: 0.1, // Specify the stagger amount
    },
    opacity: 0,
});


$(".moblie-header .hambuger-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".moblie-side-nav").toggleClass("on");
});

// Mobile navigation item click event
$(".moblie-side-nav .item a").on("click", function (e) {
    e.preventDefault();
    var targetSection = $(this).attr("href");

    // Smooth scroll to section function
    $("html, body").animate({
        scrollTop: $(targetSection).offset().top
    }, 2000);

    // Close the mobile navigation (optional)
    $(".moblie-header .hambuger-btn").removeClass("active");
    $(".moblie-side-nav").removeClass("on");
});