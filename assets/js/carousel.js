$('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoWidth:true,
    autoplay:true,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    autoplaySpeed: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.owl-2').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots:false,
})

$('.owl-3').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots:false,
    
})

