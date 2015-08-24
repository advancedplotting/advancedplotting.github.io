// ###########################################################################
// ###########################################################################
// ###########################################################################
// Images
// Remove width and height from images that have it in their HTML code
// this ensures that images stay responsive
jQuery(document).ready(function ($) {
    $('img').removeAttr('width height');
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Tables
// Add class "dark" to even table rows
// added because IE8 doesn't support the CSS nth property
$('table tr:nth-child(even)').addClass('dark');
$('.table .t-row:nth-child(even)').addClass('dark');

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Alert Messages
$(".alert-msg .close").click(function () {
    $(this).parent().animate({
        "opacity": "0"
    }, 400).slideUp(400);
    return false;
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Accordions
$(".accordion-title").click(function () {
    $(".accordion-title").removeClass("active");
    $(".accordion-content").slideUp("normal");
    if ($(this).next().is(":hidden") == true) {
        $(this).addClass("active");
        $(this).next().slideDown("normal");
    }
});
$(".accordion-content").hide();

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Toggles
$(".toggle-title").click(function () {
    $(this).toggleClass("active").next().slideToggle("fast");
    return false;
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Tabs
$(".tab-wrapper").tabs({
    event: "click"
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// FitVids - Media Such as Vimeo, Youtube etc.
$(".mediabox").fitVids();

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Vertically Centre Text On Images
$.fn.flexVerticalCenter = function (onAttribute) {
    return this.each(function () {
        var $this = $(this);
        var attribute = onAttribute || 'margin-top';
        var resizer = function () {
            $this.css(
                attribute, (($this.parent().height() - $this.height()) / 2));
        };
        resizer();
        $(window).resize(resizer);
    });
};
// To run the function:
$('.viewit').flexVerticalCenter();

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Show / Hide Topbar
$("#slideit").click(function () {
    $("div#slidepanel").slideDown("slow");
});
$("#closeit").click(function () {
    $("div#slidepanel").slideUp("slow");
});
// Switch buttons from "+" to "-" on click
$("#openpanel a").click(function () {
    $("#openpanel a").toggle();
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Nice scrollbars - Uncomment to use
/*
$("html").niceScroll({
    zindex:"100000",
    cursoropacitymin: .3,
    cursoropacitymax: 1,
    cursorcolor: "#CCCCCC",
    cursorwidth: "10px",
    cursorborder: "1px solid #999999",
    cursorborderradius: "4px",
	horizrailenabled: false
});

$("html").getNiceScroll().resize();
*/

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Scroll to top Button

// Check to see if the window is top if not then display button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("#scrolltotop").fadeIn();
    } else {
        $("#scrolltotop").fadeOut();
    }
});

//Click event to scroll to top
$("#scrolltotop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
    return false;
});

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Mobile Menu based on:
// "Convert a Menu to a Dropdown for Small Screens" from Chris Collier - http://css-tricks.com/convert-menu-to-dropdown/
// "Submenu's with a dash" Daryn St. Pierre - http://jsfiddle.net/bloqhead/Kq43X/

// Create the dropdown base
$('<form id="mobilemenu" class="formstyler"><select /></form>').appendTo("#topnav");
// Create default option "Go to..." or something else
$("<option />", {
    "selected": "selected",
    "value": "",
    "text": "MENU"
}).appendTo("#topnav select");
// Populate dropdown with menu items
$("#topnav a").each(function () {
    var el = $(this);
    // Modified here to add puffer to menu items depending on which level they are
    if ($(el).parents(".sub-menu .sub-menu .sub-menu").length >= 1) {
        $('<option />', {
            'value': el.attr("href"),
            'text': '- - - ' + el.text()
        }).appendTo("#topnav select");
    } else if ($(el).parents(".sub-menu .sub-menu").length >= 1) {
        $('<option />', {
            'value': el.attr("href"),
            'text': '- - ' + el.text()
        }).appendTo("#topnav select");
    } else if ($(el).parents(".sub-menu").length >= 1) {
        $('<option />', {
            'value': el.attr("href"),
            'text': '- ' + el.text()
        }).appendTo("#topnav select");
    } else {
        $('<option />', {
            'value': el.attr("href"),
            'text': el.text()
        }).appendTo("#topnav select");
    }
});
// Make the dropdown menu actually work
$("#topnav select").change(function () {
    if ($(this).find('option:selected').val() !== '#') {
        window.location = $(this).find('option:selected').val();
    }
});
// End Mobile Menu

// ###########################################################################
// ###########################################################################
// ###########################################################################
// Formstyler
// initiate formstyler to make form select elements look good
$(function () {
    $('.formstyler select').styler();
})