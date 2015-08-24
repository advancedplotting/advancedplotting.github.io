$(document).ready(function () {
    $("[data-pp^='prettyPhoto']").prettyPhoto({
        hook: 'data-pp', /* the attribute tag to use for prettyPhoto hooks. default: 'rel'. For HTML5, use "data-rel" or similar. */
        animation_speed: 'normal', /* fast/slow/normal */
        slideshow: 5000, /* false OR interval time in ms */
        autoplay_slideshow: false, /* true/false */
        opacity: 0.80, /* Value between 0 and 1 */
        show_title: true, /* true/false */
        allow_resize: true, /* Resize the photos bigger than viewport. true/false */
        allow_expand: false, /* Allow the user to expand a resized image. true/false */
        default_width: 500,
        default_height: 344,
        counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
        theme: '', /* light_square / dark_square / light_rounded / dark rounded is the default */
        horizontal_padding: 20, /* The padding on each side of the picture */
        hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
        wmode: 'opaque', /* Set the flash wmode attribute */
        autoplay: false, /* Automatically start videos: True/False */
        modal: false, /* If set to true, only the close button will close the window */
        deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
        overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
        overlay_gallery_max: 30, /* Maximum number of pictures in the overlay gallery */
        keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
        social_tools: false,
		ie6_fallback: false,
		markup: '<div class="pp_pic_holder"> \
		  <div class="ppt">&nbsp;</div> \
		  <div class="pp_content_container"> \
			<div class="pp_content"> \
			  <div class="pp_loaderIcon"></div> \
			  <div class="pp_fade"> \
				<a href="#" class="pp_expand" title="Resize The Image"><em>Expand</em></a> \
				<div class="pp_imagewrapper"> \
				  <div class="pp_hoverContainer"> \
					<a class="pp_next" href="#"><em>Next</em></a> \
					<a class="pp_previous" href="#"><em>Previous</em></a> \
				  </div> \
				  <div id="pp_full_res"></div> \
				</div> \
				<div class="pp_details"> \
				  <div class="pp_nav"> \
					<a href="#" class="pp_arrow_previous" title="Previous"><em>Previous</em></a> \
					<p class="currentTextHolder">0/0</p> \
					<a href="#" class="pp_arrow_next" title="Next"><em>Next</em></a> \
					<div class="clear"></div> \
				  </div> \
				  <p class="pp_description"></p> \
				  <div class="pp_social">{pp_social}</div> \
				  <a class="pp_close" href="#"><em>Close</em></a> \
				  <div class="clear"></div> \
				</div> \
			  </div> \
			</div> \
		  </div> \
		</div> \
		<div class="pp_overlay"></div>'
    });
});