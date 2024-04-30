function navAnimation(){
    var nav = document.querySelector("#nav2");
console.log(nav);


nav.addEventListener("mouseenter",function(){
var tl = gsap.timeline()

tl.to(".nav-bottom",{
    height:"21vh",
    duration:0.5
})

tl.to("#nav2  h5",{
    display:"block"
,    duration:0.2
})
tl.to("#nav2  h5 span",{
    y:0,
    stagger:{
        amount:0.5
    }
})
})
nav.addEventListener("mouseleave",function(){
var tl = gsap.timeline()

tl.to("#nav2  h5 span",{
    y:25,
    stagger:{
        amount:0.3
    }
    })

    tl.to("#nav2 h5",{
         display:"none",
         duration:0.2
    })
    tl.to(".nav-bottom",{
        height:0,
        duration:0.2
    })
})

}

function showimage()
{
    
    var imgslide = document.querySelectorAll(".right-elem");
    
    imgslide.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
        })
        
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-90,
                y:dets.y - elem.getBoundingClientRect().y-160,
            })
        })
        
    })
}

function section3VideoAnimation()
{
    var section3page = document.querySelector(".section3-center");
    var video = document.querySelector("video");
    
    section3page.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })
}

function animvideo()
{
    let section8video = document.querySelectorAll(".second");
    // console.log(section8video)
    
    section8video.forEach(function(elem){
        // console.log(elem.childNodes[7])
        elem.addEventListener("mouseenter",function(){
           elem.childNodes[7].style.opacity =1
           elem.childNodes[7].play()
           elem.childNodes[7].style.height = "77%"
        })
        elem.addEventListener("mouseleave",function(){
           elem.childNodes[7].style.opacity =0
           elem.childNodes[7].load()
        })
    })
    let section8video2 = document.querySelectorAll(".third");
    // console.log(section8video)
    
    section8video2.forEach(function(elem){
        // console.log(elem.childNodes[7])
        elem.addEventListener("mouseenter",function(){
           elem.childNodes[7].style.opacity =1
           elem.childNodes[7].play()
           elem.childNodes[7].style.height = "77%"
           elem.childNodes[7].style.transition = "all cubic-bezier(0.19, 1, 0.22, 1) 1s;"
        })
        elem.addEventListener("mouseleave",function(){
           elem.childNodes[7].style.opacity =0
           elem.childNodes[7].load()
        })
    })
}

function section7video()
{

    let sections2 = document.querySelectorAll('.con-right');
// console.log(sections2

sections2.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        // console.log(elem.childNodes[3])
        elem.childNodes[3].style.opacity =1
        elem.childNodes[3].play()

    })
    elem.addEventListener("mouseleave",function(){
        // console.log(elem.childNodes[3])
        elem.childNodes[3].style.opacity =0
        elem.childNodes[3].load()

    })
})
}


function loadingAnimation()
{
    
  
    var tl = gsap.timeline()
    tl.from("#section1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#section1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("#nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#section1 h1, #section1 p, #section div, #section1 img , #section1 span", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
    // tl.from("#section2", {
    //     opacity: 0,

    //     // duration: 0.5,
    //     // stagger: 0.2
    //     delay:0.1
    // })
}

function scrollerber()
{

    gsap.from("#con h2",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#con",
            scroller:"body",
            start:"top 80%",
            end :"top 10%",
            scrub:true
        }
    })
}





section3VideoAnimation();
showimage();
navAnimation();
section7video();
animvideo()
loadingAnimation();
scrollerber();



