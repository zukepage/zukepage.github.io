var doc = jQuery(document);
/*disables built in triggers for mobile*/
// Mobile nav toggle
function ToggleNav() {}
// Mobile search bar toggle
function ToggleSearch() {}
// Mobile refine search toggle
function ToggleRefine() {}
// Mobile sort by toggle
function ToggleSort() {}
//global init vars /*mc*/
// (function($) {
$(document).ready(function() {
    $.fn.mainSlider({
        autoRotate: false
    });
    facetMove();
    /*	function ToggleNav() {};		
		ToggleNav = null; */
    /*     function ToggleNav() {}*/
    /*for mobile menu*/



    // Mobile search bar toggle
    /*$('.toggle-search').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('search-open');
    });*/
    // Mobile refine search toggle
    /*$('.toggle-refine').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('refine-open');
        $('.toggle-refine i').toggleClass('ico-carrot-down ico-close-menu');
        $('.refine-placeholder').append($('.faceted-search'));
    });*/
    // Mobile sort by toggle
    /*     $('.toggle-sort').click(function(e) {
             e.preventDefault();
             $('body').toggleClass('sort-open')
             $('.toggle-sort i').toggleClass('ico-carrot-down ico-close-menu');
         });*/
/*Additional SG Function Calls*/		 
 $(function() {
            /* $(".salary-link, .salary-link-btm, .salary-link-img, .salary-link-cover").colorbox(
            {
                inline: true,
                href: "#salaryGuideForm",
                innerWidth: "680px",
                innerHeight: "650px",
                close: "close"
            });
*/
            var modalwidth = '80%';
            var modalheight = '650px';
            if (detectDevice()) {
                modalwidth = '100%';
                modalheight = '850px';
            }
  
					  });
    /*mobile jobs sort and refine buttons*/
    if ($(".toggle-sort").length > 0) {
        $(".toggle-sort").text("Show more");
    }
    if ($(".toggle-refine").length > 0) {
        $(".toggle-refine").text("Refine search");
    }
    /**/
    /*Fix mobile refine toggle*/
    $('.toggle-refine').click(function() {
        $('body').removeClass('sort-open')
    });
    $('.toggle-sort').click(function() {
        $('body').removeClass('refine-open')
    });
    /*    $.fn.mainSlider({
            autoRotate: false
        });*/
    /*Add Site Search in Utility nav*/
    /*    if ($(".utility-nav .nav").length > 0) {*/
    //
    // if ($('.ie6').length > 0 || $('.ie7').length > 0 || $('.ie8').length > 0) {

   /* if ($(".utility-nav .nav").length > 0 && !$("body").hasClass("home-2015")) {
        $(".utility-nav .nav").append("<li id=\"utlSearch\"> <form action=\"/search-results/\" id=\"frmSearch\"> <input type=\"hidden\" name=\"cx\" value=\"015052813340329435768:nx2vi52wfzm\" /> <input type=\"hidden\" name=\"cof\" value=\"FORID:10;NB:1\" /> <input type=\"hidden\" name=\"ie\" value=\"UTF-8\" /> <div class=\"search-input\"> <img src=\"/~/media/adeccogroup/brands/modis%20brand/usa/css/img/search-icon.png\" class=\"search-icon\" alt=\"Search\" /> <div class=\"search-input-left\"></div> <input id=\"SearchTerm\" type=\"text\" class=\"search-input-middle Heading\" name=\"q\" size=\"15\" value=\"SEARCH\" /> </div> <input id=\"Submit1\" type=\"submit\" class=\"hide\" name=\"sa\" value=\"Go\" /> </form> </li>");
    }

    if ($(".home-2015").length > 0) {
        $("#utlSearch").append("<form action=\"/search-results/\" id=\"frmSearch\"> <input type=\"hidden\" name=\"cx\" value=\"015052813340329435768:nx2vi52wfzm\" /> <input type=\"hidden\" name=\"cof\" value=\"FORID:10;NB:1\" /> <input type=\"hidden\" name=\"ie\" value=\"UTF-8\" /> <div class=\"search-input\"> <img src=\"/~/media/adeccogroup/brands/modis%20brand/USA/media/search-icon-2015.png\" class=\"search-icon\" alt=\"Search\" /> <div class=\"search-input-left\"></div> <input id=\"SearchTerm\" type=\"text\" class=\"search-input-middle Heading\" name=\"q\" size=\"15\" value=\"SITE SEARCH\" /> </div> <input id=\"Submit1\" type=\"submit\" class=\"hide\" name=\"sa\" value=\"Go\" /> </form>");
    }*/

    /**/
    if ($(".utility-nav .nav").length > 0 && !$("body").hasClass("Home")) {

        $(".utility-nav .nav").append("<li id=\"utlSearch\"> <form action=\"/search-results/\" id=\"frmSearch\"> <input type=\"hidden\" name=\"cx\" value=\"015052813340329435768:nx2vi52wfzm\" /> <input type=\"hidden\" name=\"cof\" value=\"FORID:10;NB:1\" /> <input type=\"hidden\" name=\"ie\" value=\"UTF-8\" /> <div class=\"search-input\"> <img src=\"/~/media/adeccogroup/brands/modis%20brand/usa/css/img/search-icon.png\" class=\"search-icon\" alt=\"Search\" /> <div class=\"search-input-left\"></div> <input id=\"SearchTerm\" type=\"text\" class=\"search-input-middle Heading\" name=\"q\" size=\"15\" value=\"SEARCH\" /> </div> <input id=\"Submit1\" type=\"submit\" class=\"hide\" name=\"sa\" value=\"Go\" /> </form> </li>");
    }
/*moved to seperate js file due to caching*/	
    /*if ($(".Home").length > 0) {
        $("#utlSearch").append("<form action=\"/search-results/\" id=\"frmSearch\"> <input type=\"hidden\" name=\"cx\" value=\"015052813340329435768:nx2vi52wfzm\" /> <input type=\"hidden\" name=\"cof\" value=\"FORID:10;NB:1\" /> <input type=\"hidden\" name=\"ie\" value=\"UTF-8\" /> <div class=\"search-input\"> <img src=\"/~/media/adeccogroup/brands/modis%20brand/USA/media/search-icon-2015.png\" class=\"search-icon\" alt=\"Search\" /> <div class=\"search-input-left\"></div> <input id=\"SearchTerm\" type=\"text\" class=\"search-input-middle Heading\" name=\"q\" size=\"15\" value=\"SITE SEARCH\" /> </div> <input id=\"Submit1\" type=\"submit\" class=\"hide\" name=\"sa\" value=\"Go\" /> </form>");
    }*/

    if ($('.home-2015').length > 0) {

        //$(".home-2015 #site-header .container:nth-child(2n)").removeClass("container").addClass("container-fluid");

    }
    if ($('.home-2015').length > 0) {
        $('#txtkeyword').attr('placeholder', 'Job title, skills, company, or job ID')
    }
    /**/
    if ($('.Home').length > 0) {

        //$(".home-2015 #site-header .container:nth-child(2n)").removeClass("container").addClass("container-fluid");

    }
    if ($('.Home').length > 0) {
        $('#txtkeyword').attr('placeholder', 'Job title, skills, company, or job ID')
    }
    /**/
    if ($('.linkedin-recruiter-request .placeHolderTextRecipientsMarket').length > 0) {
        $('.linkedin-recruiter-request .placeHolderTextRecipientsMarket .scfSingleLineTextBox').attr('placeholder', 'Example: CA023')
    }

    if ($(".home-2015 .third-row .col-md-12").length > 0) {
        var images = ['c7348073904d4db3bf2694ae7b47d722.ashx', '27ec299018764c2b89f932695740f3a6.ashx', '1d3ea62197b8493487ebeaa5a19a8be3.ashx', '64093d8c422a4c9ea25fc2162c1a8429.ashx', '30fdcd29dfc04876804232b6a8983e90.ashx', 'cab38deeb0434bb2a184f45eea3fa1db.ashx', '323195a5c62345399f40f876985ec2f8.ashx', '446b5e7f031947fdbd0c1b64ab5f3d08.ashx', '4412452592894565a2365380933a3d76.ashx', '826a16084caf4c88a81d2dc7f949f871.ashx'];
        $(".home-2015 .third-row .col-md-12").append('<div id=\"FooterImg\"><img height=\"100\" alt=\"Footer icon\" width=\"205\" src=\"~/media/' + images[Math.floor(Math.random() * images.length)] + '"/></div>');
    }

    /**/
    if ($(".Home .third-row .col-md-12").length > 0) {
        var images = ['c7348073904d4db3bf2694ae7b47d722.ashx', '27ec299018764c2b89f932695740f3a6.ashx', '1d3ea62197b8493487ebeaa5a19a8be3.ashx', '64093d8c422a4c9ea25fc2162c1a8429.ashx', '30fdcd29dfc04876804232b6a8983e90.ashx', 'cab38deeb0434bb2a184f45eea3fa1db.ashx', '323195a5c62345399f40f876985ec2f8.ashx', '446b5e7f031947fdbd0c1b64ab5f3d08.ashx', '4412452592894565a2365380933a3d76.ashx', '826a16084caf4c88a81d2dc7f949f871.ashx'];
        $(".Home .third-row .col-md-12").append('<div id=\"FooterImg\"><img height=\"100\" alt=\"Footer icon\" width=\"205\" src=\"~/media/' + images[Math.floor(Math.random() * images.length)] + '"/></div>');
    }
    /**/
    /*Site Search field clear on focus*/
    $("#frmSearch input#SearchTerm").focus(function() {
        if (this.value == this.defaultValue) {
            this.value = "";
            $('.search-icon').css({
                "display": "none"
            });
        }
    }).blur(function() {
        if (!this.value.length) {
            this.value = this.defaultValue;
            $('.search-icon').css({
                "display": "block"
            });
        }
    });
    /*END Site Search*/
    /******************************/
    /*BEGIN ADDTHIS SHARING SCRIPTS*/
    /******************************/
    if ($('.job-details').length) {
        $('<h3 class="headlineJobDesc">Job Description</h3>').prependTo('.job--description');
        $('<span class="dropbox_txt">Dropbox</span>').appendTo('.dropbox');
        $('<span class="gdrive_txt">Google Drive</span>').appendTo('.gdrive');
        $('<span class="linkedIn_txt">LinkedIn</span>').appendTo('.linkedIn');

    }

    /*define a list of urls that you dont want addthis enabled on and set 	var SuppressSocialShare = true if on one of those pages. This prevents addThis from being added to the respective page*/
    var hideShareArr = [
        /*/^\/community\/$/*/
        /*/\/download\/(.*)$/*/
        "/\/download\/(.*)$/", "/thankyou/", "/copyright/", "/html-sitemap/", "/privacy/", "/terms-of-use/", "/workatmodis/"
    ]
    $.each(hideShareArr, function(i, val) {
        if (path.match(val)) {
            //hide code goes here  
            var SuppressSocialShare = true; //set var SuppressSocialShare = true so that the socialCode isn't output and AddThis doesn't run.
        }
    });
    /**/
    //add AddThis to pages
    var socialCode = '<div class="media-extra with-title addThis-shareBox">' + '<h4>Share:</h4>' + '<div class="addthis_toolbox addthis_default_style addthis_20x20_style">' + '<a class="addthis_button_linkedin"></a>' + '<a class="addthis_button_twitter"></a>' + '<a class="addthis_button_pinterest_share"></a>' + '<a class="addthis_button_google_plusone_share"></a>' + '<a class="addthis_button_facebook"></a>' + '<a class="addthis_button_compact"></a>' + '<a class="addthis_button_facebook_like" fb:like:layout="button"></a>' + '<a class="addthis_counter addthis_bubble_style"></a>' + '</div>' + '</div>';
    if ($("#mainContent").length > 0 && typeof SuppressSocialShare == "undefined") {
        $("#mainContent article").append(socialCode);
    }
    /******************************/
    /*END ADDTHIS SHARING SCRIPTS*/
    /******************************/
}); //doc.ready
//})(jQuery);

function createCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + ";path=/";
};
// Mobile refine search toggle
function ToggleRefine() {
    if ($('body').hasClass('sort-open')) {
        $('body').removeClass('sort-open');
    }
    $('body').toggleClass('refine-open');
    $('.toggle-refine i').toggleClass('ico-carrot-down ico-close-menu');
    $('.refine-placeholder').append($('.faceted-search'));
}
// Mobile refine search toggle
function ToggleSort() {
    if ($('body').hasClass('refine-open')) {
        $('body').removeClass('refine-open');
    }
    $('body').toggleClass('sort-open');
    $('.toggle-refine i').toggleClass('ico-carrot-down ico-close-menu');
}

$(window).resize(facetMove);

function facetMove() {
    if ($('.mobile-buttons').css('display') == 'none') {
        $('.faceted-search').appendTo('.job-facets--left .facet');
    }
}