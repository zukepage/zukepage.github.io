//global init vars /*mc*/
var path = location.pathname.toLowerCase();
(function($) {
    $(document).ready(function() {

        var path = location.pathname;

        // Cache the DOM objects for faster retrieval. 
        var $overlay = $('.overlay-sg');
        var $sgLightbox = $('.salaryguide-lightbox-sg');

        $overlay.fullWidth().css('opacity', '0.7');
        $sgLightbox.centerAlign();

        var isHomepagePage = true;
        var isLocationPage = true;
        var isClientPage = true;
        var isSalaryGuideOverlayPage = (path === '/clients/salary-guide/overlay/') ? true : false;
        //        var isSalaryGuidePage = true;
        var isSalaryGuidePage = (path === '/clients/salary-guide/') ? true : false;
        //	 	var isJobSeekersPage = (path === '/job-seekers/') ? true : false;
        var noModal = myCookie("noModalSG15");
        var hideSalary = true;
		//var showModal;
        //alert('path: ' + path);
        //	alert('isSalaryGuidePage + isSalaryGuideOverlayPage : ' + isSalaryGuidePage + isSalaryGuideOverlayPage);
/*        if (noModal != "2" && hideSalary == true && isSalaryGuidePage == false && isSalaryGuideOverlayPage == false && !path.match("/job-seekers/") && !path.match("/web-key/") && !path.match("/job/") && !path.match("/thankyou/") && detectmob() == false) {*/
        if (noModal != "2" && hideSalary == true && isSalaryGuidePage == false && isSalaryGuideOverlayPage == false && !path.match("/job-seekers/") && !path.match("/web-key/") && !path.match("/job/") && !path.match("/thankyou/") && detectmob() == false && showModal == null) {

            //        if (noModal != "2") {
            //			alert("noModal != 2:" & noModal);

            setCookie("noModalSG15", "2", 7);
            $sgLightbox.show();
            $overlay.show();

        };
        //	alert("noModal:" & noModal);
        //$sgLightbox.show();
        //$overlay.show();

        // Close modal
        $('.modal_close_sg, .overlay-sg').click(function() {

            $overlay.hide();
            $sgLightbox.hide();
        });

        // Ensure the lightbox overlay responds to changes in the viewport size.
        $(window).resize(function() {
            $overlay.fullWidth();
            $sgLightbox.centerAlign();
        });
		/**/
		
        var browserinc = myCookie('browserinc');

        //IE 7+ lower messaging
            var ieHtml = '<div id="broswerIncompatibleWarning_browserIncompatibleAlert" class="col-sm-12" style="z-index: 102; position: relative; text-align: center; display: none;"><div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert" onclick="createCookie()"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><p><span id="broswerIncompatibleWarning_text">The browser you are using is incompatible with our website.</span><a id="broswerIncompatibleWarning_incompatibleLink" class="alert-link" href="/browserincompatible/"><span id="broswerIncompatibleWarning_linkText">Click here for more information.</span></a></p></div></div>'
			
            if ($('.ie6').length > 0 || $('.ie7').length > 0 || $('.ie8').length > 0) {
                if (browserinc != '2') {
                    $(ieHtml).prepend('.site-header-inner');
                    setCookie('browserinc', '2', 0);
                } /*end if browserinc*/
            } /*end if ie version*/

        /*resource center nav hightlighting*/
        if (path.match("/clients/salary-guide/resource-center/")) {
            /*console.log("test");*/
            $('.secondary-nav a').removeClass('active');
            $('.secondary-nav a[href="/clients/salary-guide/resource-center/"]').addClass('active');
            /*console.log("test2");*/

        }
        /* 3rd level nav item highlights *mc* */
        if (path && $('.side-navigation').length > 0) {
            var navItem = $('.side-navigation a[href$="' + path + '"]');
            navItem.parent("li").addClass('side-nav-active');
        }
        /*for mobile menu*/
        /*  $('.toggle-nav').click(function() {
              $('.container-content').toggleClass('active')
              $('.site-header-inner').toggleClass('active')
          });*/
        // Mobile search bar toggle
        /* $('.toggle-search').click(function(e) {
             e.preventDefault();
             $('body').toggleClass('search-open');
         });*/

        /*for mobile menu*/
        $('.open-menu').click(function() {
            $('.container-content').toggleClass('active')
            $('.site-header-inner').toggleClass('active')
        });
        // Mobile search bar toggle
        $('.toggle-search').click(function(e) {
            e.preventDefault();
            $('body').toggleClass('search-open');
        });
        // Mobile refine search toggle
        $('.toggle-refine').click(function(e) {
            e.preventDefault();
            $('body').toggleClass('refine-open');
            $('.toggle-refine i').toggleClass('ico-carrot-down ico-close-menu');
            $('.refine-placeholder').append($('.faceted-search'));
        });
        // Mobile sort by toggle
        $('.toggle-sort').click(function(e) {
            e.preventDefault();
            $('body').toggleClass('sort-open')
            $('.toggle-sort i').toggleClass('ico-carrot-down ico-close-menu');
        });
        /*fixes facet search to close after making a selection*/
        $(document).on('click', '.facetbox input[type=checkbox], #hypRemoveAll, a.fa-times-circle', function() {
            ToggleRefine();
        });

        //placeholders for IE - removed for now...
        /*var placeholder = 'placeholder' in document.createElement('input');  
		if (!placeholder) {      
		 $(":input").each(function(){ 
		$(this).placeHolder();
		 });
		}*/
        /*Set focus on first form field in a form, on page load*/
        $(function() {
            if ($(".scfForm").length > 0) {
                if (document.URL.indexOf("/job/") == -1 && document.URL.indexOf("/resumes/") == -1 && document.URL.indexOf("/about/holiday/") == -1) {
                    $(".scfForm:first *:input[type!=hidden]:first").focus();
                }
            }
        });
        /*Case Study Tabs*/
        $(function() {
            if ($("#tabs").length > 0) {
                $("#tabs").tabs();
            }
        });
        /*Media Room Video Overlay*/
        $(function() {
            $(".mediaRoomVideo").colorbox({
                iframe: true,
                innerWidth: 853,
                innerHeight: 510
            });
        });
        $(function() {
            $(".jcolorbox-1").colorbox({
                rel: 'jcolorbox-1'
            });
            $(".jcolorbox-2").colorbox({
                rel: 'jcolorbox-2'
            });
        });
        $(function() {
            $(".colorbox").colorbox({
                iframe: true,
                innerWidth: 853,
                innerHeight: 510
            });
            /*Our Community Pages*/
            $(function() {
                $('#galleria-Win4Youth').jcarousel({
                    animation: "slow",
                    wrap: "circular"
                });
            });
            $(function() {
                $('#galleria-HighFive').jcarousel({
                    animation: "slow",
                    wrap: "circular"
                });
            });
        });
        if ($().selectbox) {
            $("#frmJobSearch-Wrapper #fm-jobCategory, #frmJobSearch-Wrapper #fm-jobLocation, #frmJobSearch-Wrapper #zipRadius, #LocationSearch-wrapper #dd-locationSelect, #markets").selectbox({
                speed: 1
            });
        }
        /*we dont want the custom selectboxes for mobile *mc* */
        if (!detectDevice()) {
            /*Homepage Specific selectbox calls*/
            if ($().selectbox) {
                $("#frmHomeJob-Wrapper #fm-jobCategory, #frmHomeJob-Wrapper #fm-jobLocation, #frmHomeJob-Wrapper #zipRadius").selectbox({
                    classHolder: "hm-sbHolder",
                    classHolderDisabled: "hm-sbHolderDisabled",
                    classSelector: "hm-sbSelector",
                    classOptions: "hm-sbOptions",
                    classGroup: "hm-sbGroup",
                    classSub: "hm-sbSub",
                    classDisabled: "hm-sbDisabled",
                    classToggleOpen: "hm-sbToggleOpen",
                    classToggle: "hm-sbToggle",
                    classFocus: "hm-sbFocus"
                });
            }
            if ($().selectbox) {
                $("#HomeContentSubBody #dd-locationSelect").selectbox({
                    speed: 1,
                    classHolder: "hmLoc-sbHolder",
                    classHolderDisabled: "hmLoc-sbHolderDisabled",
                    classSelector: "hmLoc-sbSelector",
                    classOptions: "hmLoc-sbOptions",
                    classGroup: "hmLoc-sbGroup",
                    classSub: "hmLoc-sbSub",
                    classDisabled: "hmLoc-sbDisabled",
                    classToggleOpen: "hmLoc-sbToggleOpen",
                    classToggle: "hmLoc-sbToggle",
                    classFocus: "hmLoc-sbFocus"
                });
            }
        } else {
            //show the selectboxes for mobile *mc*
            $("#frmHomeJob-Wrapper #fm-jobCategory, #frmHomeJob-Wrapper #fm-jobLocation, #frmHomeJob-Wrapper #zipRadius, #HomeContentSubBody #dd-locationSelect").show();
        }
        //HM page Locations Dropdown
        $("#dd-locationSelect").change(function() {
            if (!($(this).val() == "-1")) {
                document.location = $(this).val();
            }
        });
        $("#locations").change(function() {
            if (!($(this).val() == "-1")) {
                document.location = $(this).val();
            }
        });
        $(".toutInner .ui-selectBox").css({
            'width': '100%'
        });
        /*SG*/
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

            $(".salary-link, .salary-link-btm, .salary-link-img, .salary-link-cover").colorbox({
                iframe: true,
                /*href: "#salaryGuideForm",*/
                href: "/clients/salary-guide/overlay/",
                width: modalwidth,
                height: modalheight,
                /*                innerWidth: "680px",
                                innerHeight: "650px",*/
                maxWidth: "680px",
                close: "close"
            });
            //$overlay.hide();
            //            $sgLightbox.hide();
        });

        /*$(function()
                {
        			$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});	
        	});*/
        /*END SG*/

        /* Handler for Locations DDL Quick Nav */
        $("#ConsultingMarkets-wrapper select#markets").change(function() {
            var selectedMarket = "";
            $("#ConsultingMarkets-wrapper select#markets option:selected").each(function() {
                selectedMarket = $(this).val();
            });
            if (!(selectedMarket == "-1")) document.location = "/clients/industry-expertise/" + selectedMarket + "/";
        });
        $("#ConsultingMarkets-wrapper #marketSubmit").css("display", "none");
        /* Show more articles (pressroom) *mc* */
        $('#toggle-news').toggle(
            function() {
                $(this).text("Show Fewer Articles >");
                $(".hideShow").show();
            },
            function() {
                $(this).text("Show More Articles >");
                $(".hideShow").hide();
                $("html, body").scrollTop(0);
            }
        );
        /*Add Follw Us Heading*/
        if ($(".social-links").length > 0) {
            $(".social-links").prepend("<span class=\"FollowUs\">Follow us</span>");
        }
        /*Add State of Texas DIR */
        if ($('.austin').length && $(' .branch--detail').length) {
            //  $(".social-links").prepend("<span class=\"FollowUs\">Follow us</span>");
            $('<div class="branch--sponsor" style="float: left;"> <a href="/state-of-texas-DIR/"><img alt="Dept. of Information Resources" src="/~/media/adeccogroup/brands/modis%20brand/usa/media/state-of-texas-DIR-logo-bw.png" style="margin-left: 60px; margin-top: 36px;"></a><br><a href="/state-of-texas-DIR/" style="width: 100%; text-align: center; display: inline-block;margin-left: 30px;">Services Offered &gt;</a> </div>').insertAfter(".branch--detail");
        }
        /*Mobile Cat menu selection highlighting*/
        $('.mainCatStrip-mobile a').each(function() {
            var path = location.pathname
            if (path.match($(this).attr('href'))) {
                $(this).parent('li.mainCatStrip-mobile').addClass('subMobileBg-active');
            }
        });
        $('.mainCatStrip-mobile ul li a').each(function() {
            var path = location.pathname
            if (path.match($(this).attr('href'))) {
                if (!$(this).parent('li').hasClass("secondaryCatStrip-mobile")) {
                    $(this).parent('li').addClass('subMobile-active');
                };
            }
        });
        /**/
        $(function() {
            var path = location.pathname.substring(0);
            if (path) {
                $('#mainCatStrip-mobile a[href$="' + path + '"]').parent("ul").attr('class', 'current');
            }
        });
        /*Random Footer Image Generator*/
        /*<div id="FooterImg"><img height="100" alt="Footer icon 1" width="205" src="~/media/c7348073904d4db3bf2694ae7b47d722.ashx" /></div>

        	var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
        	*/
        /*	$('.container-body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
         */
        /* $("<div id=\"FooterImg\"><img height=\"100\" alt=\"Footer icon 1\" width=\"205\" src=\"~/media/" + images[Math.floor(Math.random() * images.length)] + "\" /></div>").insertAfter(".container-body");*/
        if ($(".container-body").length > 0) {
            var images = ['c7348073904d4db3bf2694ae7b47d722.ashx', '27ec299018764c2b89f932695740f3a6.ashx', '1d3ea62197b8493487ebeaa5a19a8be3.ashx', '64093d8c422a4c9ea25fc2162c1a8429.ashx', '30fdcd29dfc04876804232b6a8983e90.ashx', 'cab38deeb0434bb2a184f45eea3fa1db.ashx', '323195a5c62345399f40f876985ec2f8.ashx', '446b5e7f031947fdbd0c1b64ab5f3d08.ashx', '4412452592894565a2365380933a3d76.ashx', '826a16084caf4c88a81d2dc7f949f871.ashx'];
            $('<div id=\"FooterImg\"><img height=\"100\" alt=\"Footer icon\" width=\"205\" src=\"~/media/' + images[Math.floor(Math.random() * images.length)] + '"/></div>').insertAfter(".container-body");
        }
        /**/
        if ($('#FooterImg').next('p').length > 0) {
            $('#FooterImg').next('p').remove();
        }
        if ($(".toggle-sort").length > 0) {
            $(".toggle-sort").text("Show more");
        }
        if ($(".toggle-refine").length > 0) {
            $(".toggle-refine").text("Refine search");
        }
        /* $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#ad');
         */
        /*END Random Footer Image Generator*/
        var browserinc = myCookie("browserinc");

        //IE 7+ lower messaging
        /*		if ($('.ie6').length>0 || $('.ie7').length>0) {*/
/*        if ($('.ie6').length > 0 || $('.ie7').length > 0 || $('.ie8').length > 0) {*/

            var ieHtml = '<div id="broswerIncompatibleWarning_browserIncompatibleAlert" class="col-sm-12" style="z-index: 102; position: relative; text-align: center; display: none;"><div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert" onclick="createCookie()"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><p><span id="broswerIncompatibleWarning_text">The browser you are using is incompatible with our website.</span><a id="broswerIncompatibleWarning_incompatibleLink" class="alert-link" href="/browserincompatible/"><span id="broswerIncompatibleWarning_linkText">Click here for more information.</span></a></p></div></div>'
            if ($('.ie6').length > 0 || $('.ie7').length > 0 || $('.ie8').length > 0) {
                if (browserinc != "2") {
                    $(ieHtml).prepend('.site-header-inner');

                    //$('#broswerIncompatibleWarning_browserIncompatibleAlert').show();
                    setCookie("browserinc", "2", 0);
                } /*end if browserinc*/
            } /*end if ie version*/

           /* $(ieHtml).prepend('.site-header-inner');*/
       // }

        /* ==========================================================================
	   BEGIN Custom Modal 
	   ========================================================================== */
        // Cache the DOM objects for faster retrieval. 
        //        var $overlay = $('.overlay');
        //        var $sgLightbox = $('.salaryguide-lightbox');
        //        $overlay.fullWidth().css('opacity', '0.7');
        //        $sgLightbox.centerAlign();

        // Only display Lightbox if 
        //	1. Device is iPad
        //	2. Device is desktop
        //		a. Homepage 			- /
        //		b. Clients Section		- /client/
        //		c. Main Location		- /local/
        /*     	var isHomePage = (path === '/Pages/default.aspx') ? true : false;
     	var isLocationPage = (path === '/local/Pages/default.aspx') ? true : false;
     	var isClientPage = path.indexOf('client') ? true : false;
     	var isSalaryGuidePage = (path === '/client/knowledge-center/salary-guide/Pages/default.aspx') ? true : false;

     	debug("isHomePage:" + isHomePage);
     	debug("isLocationPage:" + isLocationPage);
     	debug("isClientPage:" + isClientPage);
     	debug("isSalaryGuidePage:" + isSalaryGuidePage);*/
        //      var isHomePage = true;
        //        var isLocationPage = true;
        //        var isClientPage = true;
        //        var isSalaryGuidePage = true;
        //
        //        //        if (!path.match('/salary-guide/')) {
        //        if (!path.match('/salary-guide/') && !path.match('/it-insights/it-white-papers/outsourcing-disadvantages-white-paper/') && !path.match('/it-insights/it-white-papers/outsourcing-disadvantages-white-paper2/') && !path.match('/it-insights/it-white-papers/outsourcing-disadvantages-white-paper/download/')) {
        //            if (!isMobile.Mobile()) {
        //                //console.log('found match');
        //                if ($('.overlay').length > 0) {
        //
        //
        //                    if (!$.cookie('noModal')) {
        //                        $.cookie('noModal', '1', {
        //                            expires: 60,
        //                            path: '/'
        //                        });
        //                        $overlay.fadeIn(150, function() {
        //                            $sgLightbox.css('display', 'block');
        //                        });
        //                    }
        //                }
        //            } //end if (is.Mobile)
        //
        //        } //end if (!path.match)
        //
        //        // Close modal
        //        $('.modal_close, .overlay').click(function() {
        //            $sgLightbox.slideUp(function() {
        //                $overlay.fadeOut(150);
        //            });
        //        });
        //        // Ensure the lightbox overlay responds to changes in the viewport size.
        //        $(window).resize(function() {
        //            $overlay.fullWidth();
        //            $sgLightbox.centerAlign();
        //        });
        /* ==========================================================================
	   END Custom Modal
	   ========================================================================== */
        //add more link and hide job description
        /*console.log(getUrlVars()["utm_source"]);*/
        /*	if($('.job--description').length && getUrlVars()["utm_source"]) {
         */
        //if ($('.job--description').length && getUrlVars()["utm_source"] || getUrlVars()["bid"] || !$('[id*="hypBacktoResults"]').length) {
            /*if($('.job--description').length){*/
            /*console.log("works");*/
            /*	var moreLink = '<a href="javascript:void(0);" class="rd-more" data-toggled="off">Read full job description ></a>' 
		$('.job--description').after(moreLink);
		$('.job--description').hide();*/
            /*		 $('div.job-desc').expander({*/
        //    $('div.job--task-specifics').expander({
     //           slicePoint: 200, // default is 100
   //           expandPrefix: '... ', // default is '... '
  //              expandText: 'Read the full job description >', // default is 'read more'
        //        collapseTimer: 0, // re-collapses after 5 seconds; default is 0, so no re-collapsing
       //         userCollapseText: 'Hide the full job description >' // default is 'read less'
     //       });
      //  }
        if ($('.job--description').length && !getUrlVars()["utm_source"] && !getUrlVars()["bid"]) {
            var applyLink = '<a href="#apply" class="apply-btn">Apply Now</a>'
            $('.job--description').before(applyLink);
        }
        /*LocationPages*/
        if ($('.branch--intro').length) {
            /*if($('.job--description').length){*/
            /*console.log("works");*/
            /*	var moreLink = '<a href="javascript:void(0);" class="rd-more" data-toggled="off">Read full job description ></a>' 
		$('.job--description').after(moreLink);
		$('.job--description').hide();*/
            $('div.branch--intro').expander({
                slicePoint: 560, // default is 100
                expandPrefix: '... ', // default is '... '
                expandText: 'Read more >', // default is 'read more'
                collapseTimer: 0, // re-collapses after 5 seconds; default is 0, so no re-collapsing
                userCollapseText: 'Read less >' // default is 'read less'
            });
        }
        //toggle job description
        /*$('body').on('click', '.rd-more', function(){
		if($(this).attr('data-toggled') == 'off'){
			$(this).attr('data-toggled', 'on')
			$('.rd-more').text('Hide full job description >');
			$('.job--description').show();
		}
		else if($(this).attr('data-toggled') == 'on') {
			$(this).attr('data-toggled', 'off')
			$('.rd-more').text('Read full job description >');
			$('.job--description').hide();
		}
	});*/
    }); //doc.ready
})(jQuery);
//get query string
function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

/*detectmob*/
function detectmob() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    }
    /*END detectmob*/
    /*Fix wonky mobile refine toggle*/
$('.toggle-refine').click(function() {
    $('body').removeClass('sort-open')
});
$('.toggle-sort').click(function() {
    $('body').removeClass('refine-open')
});
//Fix for IM *mc*
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function detectDevice() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
            return true;
        } else {
            return false;
        }
    }
    (function($) {
        $.fn.placeHolder = function() {
            var input = this;
            var text = input.attr('placeholder');
            if (text) input.val(text).css({
                color: 'grey'
            });
            input.focus(function() {
                if (input.val() === text) input.css({
                    color: 'lightGrey'
                }).selectRange(0, 0).one('keydown', function() {
                    input.val("").css({
                        color: 'black'
                    });
                });
            });
            input.blur(function() {
                if (input.val() == "" || input.val() === text) input.val(text).css({
                    color: 'grey'
                });
            });
            input.keyup(function() {
                if (input.val() == "") input.val(text).css({
                    color: 'lightGrey'
                }).selectRange(0, 0).one('keydown', function() {
                    input.val("").css({
                        color: 'black'
                    });
                });
            });
            input.mouseup(function() {
                if (input.val() === text) input.selectRange(0, 0);
            });
        };
        $.fn.selectRange = function(start, end) {
            return this.each(function() {
                if (this.setSelectionRange) {
                    this.setSelectionRange(start, end);
                } else if (this.createTextRange) {
                    var range = this.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', end);
                    range.moveStart('character', start);
                    range.select();
                }
            });
        };
    })(jQuery);

function myCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            //            debug(unescape(y));
            return unescape(y);
        }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + ";path=/";
};

//center align
(function($) {
    $.fn.centerAlign = function() {
        return this.each(function(i) {
            var ah = $(this).height();
            var ph = $(window).height();
            var mh = Math.ceil((ph - ah) / 2);
            var aw = $(this).width();
            var pw = $(window).width();
            var mw = Math.ceil((pw - aw) / 2);
            $(this).css({
                'top': mh,
                'left': mw
            });
        });
    };
})(jQuery);

//full width
(function($) {
    $.fn.fullWidth = function() {
        return this.each(function(i) {
            var fh = $(document).height();
            var fw = $(document).width();
            $(this).css({
                'width': fw,
                'height': fh
            });
        });
    };

})(jQuery);

// Mobile refine search toggle
function ToggleRefine() {
        $('body').toggleClass('refine-open');
        $('.toggle-refine i').toggleClass('ico-carrot-down ico-close-menu');
        $('.refine-placeholder').append($('.faceted-search'));
    }
    // Mobile refine search toggle
function ToggleSort() {
    $('body').toggleClass('sort-open');
    $('.toggle-refine i').toggleClass('ico-carrot-down ico-close-menu');
}