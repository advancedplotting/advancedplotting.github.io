// ###########################################################################
// ###########################################################################
// ###########################################################################
// ResponsiveSlides.js
$(".rslides").responsiveSlides({
    auto: true,
    speed: 300,
    timeout: 6000,
    pager: true,
    nav: true,
    random: false,
    pause: true,
    pauseControls: true,
    prevText: "<em>Previous<\/em>",
    nextText: "<em>Next<\/em>",
    maxwidth: "",
    navContainer: "",
    manualControls: "",
    namespace: "centered-btns"
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Nivo Slider
$(".nivoSlider").nivoSlider({
    effect: "random",
    animSpeed: 500,
    pauseTime: 10000,
    startSlide: 0,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    prevText: "<em>Previous<\/em>",
    nextText: "<em>Next<\/em>",
    randomStart: false
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Unslider
$(".unslider").unslider({
    speed: 1000,
    delay: 8000,
    arrows: true,
    keys: true,
    fluid: true,
    dots: true
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Nerve Slider - Full Width
$(".ns-full").nerveSlider({
    sliderTheme: "light",
    sliderWidth: "100%",
    sliderHeight: "500px",
    sliderHeightAdaptable: true,
    slideTransition: "fade",
    slideTransitionSpeed: 2500,
    slideTransitionDelay: 5000,
    slideTransitionEasing: "swing",
    slideImageScaleMode: "fill",
    slidesDraggable: true,
    sliderResizable: true,
    sliderKeepAspectRatio: false,
    showCaptions: false,
    simultaneousCaptions: false
});

// Nerve Slider - Normal
$(".ns-norm").nerveSlider({
    sliderTheme: "light",
    sliderWidth: "100%",
    sliderHeight: "300px",
    slideTransition: "fade",
    slideTransitionSpeed: 1500,
    // slideTransitionDelay: 7000,
    slideTransitionEasing: "linear",
    slideImageScaleMode: "stretch",
    slidesDraggable: true,
    sliderResizable: true,
    sliderKeepAspectRatio: false,
    showFilmstrip: true
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Flexslider - Homepage Slider
$(".flex-homepage").flexslider({
    selector: ".flex-slides > li",
    animation: "fade",
    touch: true,
    animationLoop: true,
    directionNav: true,
    controlNav: false,
    pauseOnHover: true,
    prevText: "<em>Previous<\/em>",
    nextText: "<em>Next<\/em>",
    smoothHeight: true
});

// Flexslider - Carousels
$(".flex-carousel").flexslider({
    selector: ".flex-slides > li",
    animation: "slide",
    touch: true,
    directionNav: true,
    controlNav: false,
    pauseOnHover: true,
    prevText: "<em>Previous<\/em>",
    nextText: "<em>Next<\/em>",
    itemWidth: 222,
    itemMargin: 30, // Margin must also be set the same in the CSS file
    move: 1
});

// Flexslider - Standard Slider With Everything
$(".flex-full-basic").flexslider({
    selector: ".flex-slides > li",
    animation: "slide",
    touch: true,
    animationLoop: true,
    directionNav: true,
    controlNav: true,
    pauseOnHover: true,
    prevText: "<em>Previous<\/em>",
    nextText: "<em>Next<\/em>",
    smoothHeight: true
});

// Flexslider - Standard Slider With Thumbs
$(".flex-thumbs").flexslider({
    selector: ".flex-slides > li",
    animation: "slide",
    touch: true,
    animationLoop: true,
    directionNav: false,
    controlNav: "thumbnails",
    pauseOnHover: true,
    smoothHeight: true
});

// Flexslider - Horizontal Text Slider
$(".flex-text-horizontal").flexslider({
    selector: ".flex-slides > li",
    animation: "slide",
    touch: true,
    animationLoop: true,
    directionNav: false,
    controlNav: false,
    direction: "horizontal",
    pauseOnHover: true,
    smoothHeight: true
});

// Flexslider - Vertical Text Slider
$(".flex-text-vertical").flexslider({
    selector: ".flex-slides > li",
    animation: "slide",
    touch: true,
    animationLoop: true,
    directionNav: false,
    controlNav: false,
    direction: "vertical",
    pauseOnHover: true,
    smoothHeight: true
});

// Flexslider - Shop Featured Products Slider (Sidebar)
$(".flex-featured-products").flexslider({
    selector: ".flex-slides > li",
    animation: "slide",
    touch: true,
    animationLoop: false,
    directionNav: false,
    controlNav: true,
    slideshow: false,
    direction: "vertical",
    pauseOnHover: true,
    smoothHeight: true
});