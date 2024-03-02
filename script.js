const tl = gsap.timeline()

tl.from("#nav-1 ,#nav-2 ,#nav-3",{
    y:-100,
    duration:1,
    delay:1,
    stagger:0.5
})

tl.from("#main #content h1,span",{
    opacity:0,
    y:100,
    stagger:0.5
})

tl.from("#main #images #im1,#im2,#im3,#im4",{
    opacity:0,
    scale:0,
    duration:1,
    
})