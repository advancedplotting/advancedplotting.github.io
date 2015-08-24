// ###########################################################################
// ###########################################################################
// ###########################################################################
// Product overview - add class="first" to the first-child and every 4th element
$('.product-list > .prd-wrap:nth-child(3n+1)').addClass('first');

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Product overview - layout switcher - Grid to List
function display(view) {
    if (view == 'list') {
        $('.prd-grid').attr('class', 'prd-overview prd-list');
        $('.prd-layout').html('<span title="As A Grid" class="icon-th icon-large inactive-view" onclick="display(\'grid\');"></span> <span class="icon-list icon-large active-view"></span>');
        $.totalStorage('display', 'list');
    } else {
        $('.prd-list').attr('class', 'prd-overview prd-grid');
        $('.prd-layout').html('<span class="icon-th icon-large active-view"></span> <span title="As A List" class="icon-list icon-large inactive-view" onclick="display(\'list\');"></span>');
        $.totalStorage('display', 'grid');
    }
}
view = $.totalStorage('display');
if (view) {
    display(view);
} else {
    display('grid');
}

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Single Product Page

// Initiate main product image Cloud Zoom function
$("#zoom01, .cloud-zoom-gallery").CloudZoom();

// Product Image Thumbnails - add class="first" to the first-child and every 4th element
$('.prd-image-xtra > ul li:nth-child(4n+1)').addClass('first');