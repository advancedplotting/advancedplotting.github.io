(function ($) {
    "use strict";
    $(window).load(function () {
        if ($.fn.isotope) {
            $('.isotope-wrapper').each(function () {
                var $this = $(this);
                // Set filter(s) list class
                var $filters = $this.find('.isotope-filters ul:eq(0)');
                // Set container class for all of the filterable elements (articles, images etc.)
                var $container = $this.find('.isotope-container ul:eq(0)');
                // Start Isotope
                // Set all options for the Isotope container here
                $container.isotope({
                    // To ensure cross-browser functionality we use jquery to animate instead of CSS
                    animationEngine: 'jquery',
                    // Set all of the animation options here
                    animationOptions: {
                        // Transition duration, the higher the number the slower the transition
                        duration: 700,
                        // Which easing function to use for the transition, see: http://api.jqueryui.com/easings/
                        easing: 'swing',
                        // Start the animation immediately
                        queue: false
                    },
                    // Triggers layout logic when browser window is resized.
                    resizable: true,
                    // If resizesContainer is set to false, be sure to set a size for the container in your CSS, so it doesn't collapse when Isotope is triggered.
                    resizesContainer: true,
                    // CSS styles applied to the container element.
                    containerStyle: {
                        // Relative positioning enables absolute positioning on child items.
                        position: 'relative',
                        // Overflow hidden ensures that filtered items that are outside the container do not interfere with other content.
                        overflow: 'hidden'
                    },
                    // Restricts Isotope item elements to a specific element, ID or class.
                    itemSelector: 'li',
                    // Item elements are arranged into rows. Rows progress vertically top to bottom
                    layoutMode: 'fitRows',
                    // The class applied to filterable elements
                    itemClass: 'isotope-item',
                    // The class applied to filterable elements that are hidden when Filtering
                    hiddenClass: 'isotope-hidden',
                    // The style applied to filterable elements that are hidden when Filtering
                    hiddenStyle: {
                        opacity: 0,
                        scale: 0.001
                    },
                    // The style applied to filterable elements that are made visible when Filtering
                    visibleStyle: {
                        opacity: 1,
                        scale: 1
                    },
                    // Isotope uses CSS3 transforms to position item elements, when available in the browser.
                    // Setting transformsEnabled to false will disable this feature so all browsers use top/left absolute positioning
                    transformsEnabled: false
                });
                /* Set up filters */
                $filters.find('a').click(function () {
                    /* Add or remove classes for styling */
                    $filters.find('li.current').removeClass('current');
                    $(this).parent('li').addClass('current');
                    /* Filter Attribute */
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector
                    });
                    return false;
                });
                if (document.location.hash) {
                    var filter = document.location.hash.replace('#', '');
                    var $filter = $filters.find('a[data-filter=".' + filter + '"]');
                    if ($filter.length > 0) {
                        $filters.find('li.current').removeClass('current');
                        $filter.parents('li').addClass('current');
                        $container.isotope({
                            filter: '.' + filter
                        });
                    }
                }
            });
            // smartresize - https://github.com/louisremi/jquery-smartresize
            $(window).smartresize(function () {
                // Leave this empty - We use CSS to control re-sizing
                $('.isotope-wrapper .isotope-container ul:eq(0)').isotope({});
            });
        }
    });
})(jQuery);