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