jQuery(document).find('.flexslider').each(function () {
    $(this).flexslider({
        controlNav: $(this).data("controlnav"),
        pauseOnHover: $(this).data("pauseon"),
        controlsContainer: $(this).data("navfooter"), // to tweak, as this entire line must not be generated if property in control is unticked
        animation: $(this).data("animation"),
        slideshow: $(this).data("slideshow"),
        reverse: $(this).data("reverse"),
        directionNav: $(this).data("directionnav"),
        animationSpeed: $(this).data("animationspeed"),
        slideshowSpeed: $(this).data("slideshowspeed"),
        prevText: $(this).data("prevtext"),
        nextText: $(this).data("nexttext"),
        direction: $(this).data("direction")
    });
});