/****** Adecco Slider Button ***********
**Author: Mark Costa - Adecco Group NA**
***************************************/

(function($) {
$.fn.mainSlider = function(settings) { 
	settings = $.extend({
		sliderWrap: '#mainSlideWrap',
		textNav: '.txtNav',
		buttonElements: 'a',
		autoRotate: true,
		rotateInterval: 7000,
		arrowBtns: true		
	}, settings)
	
	
	//cache vars
	var
	_numberOfPanels = $(settings.textNav + ' ' + settings.buttonElements).length,
	_rotateSpeed = settings.rotateSpeed,
	_rotateInterval = settings.rotateInterval;
	
	
	/********* setup ********/
	
	//make sure only the first slide shows
	$(settings.sliderWrap + " li:first").css("display", "block");
	
	//add class to first text button
	$(settings.textNav + ' ' + settings.buttonElements + ':first').addClass('txtNavActive');
	
	//add arrows
	if (settings.arrowBtns) {
/*		$('<a href="javascript:void(0);" class="slPrev"></a><a href="javascript:void(0);" class="slNext"></a>').appendTo(settings.sliderWrap);
*/
	/*	$('<a href="javascript:void(0);" class="slPrev"><i class="fa fa-chevron-left"></i></a><a href="javascript:void(0);" class="slNext"><i class="fa fa-chevron-right"></i></a>').appendTo(settings.sliderWrap);*/
		$('<a href="#prev-slide" class="slPrev"><i class="fa fa-chevron-left"></i></a><a href="#next-slide" class="slNext"><i class="fa fa-chevron-right"></i></a>').appendTo(settings.sliderWrap);

	}
	
	appendIds(settings.sliderWrap + ' li', 'slide');
	appendIds(settings.textNav + ' ' + settings.buttonElements, 'txtNav');
	
	//append Ids to the panels and to the nav 
	function appendIds(selector, name) {
		$(selector).each(function(n) {
    		$(this).attr('id', name+ '-' + (n+1));
     	});
	}
	
	/********* INIT ********/
	
	if(settings.autoRotate) {
		var intervalSet = setInterval(function(){moveSlide()}, _rotateInterval);
		pauseAutoSlide();
	}
	
	moveSlideOnTxtClick();
	moveSlideOnArwClick();
	
	
	/********* clicks ********/
	
	//text button clicks
	function moveSlideOnTxtClick() {
		$('[id^=txtNav]').click(function(e){
		 e.preventDefault(); // cancel default behavior
			var currentslide = $(this).attr('id').split('-');
			$(settings.sliderWrap + ' li').hide();
			$('#slide-' + currentslide[1]).css('display', 'inline-block');
			activeNav(currentslide[1]);
		});	
	}
	
	//arrow button clicks
	function moveSlideOnArwClick() {
		
		$('.slPrev').click(function(e){
			e.preventDefault();
			var currentslide = $(settings.sliderWrap + ' li:visible').attr('id').split('-');
			$(settings.sliderWrap + ' li').hide();
			if(currentslide[1] > 1) {
				$('#slide-' + (Math.floor(currentslide[1])-1)).css('display', 'inline-block');
				activeNav(Math.floor(currentslide[1])-1);
			}
			else {
				$('#slide-' + _numberOfPanels).css('display', 'inline-block');
				activeNav(_numberOfPanels);
			}
			
			
		});
		
		$('.slNext').click(function(e){
			 e.preventDefault(); // cancel default behavior
			 moveSlide();
		});
	}
	
	/********* move foward functions ********/
	function moveSlide() {
		var currentslide = $(settings.sliderWrap + ' li:visible').attr('id').split('-');
		$(settings.sliderWrap + ' li').hide();
			
		if(currentslide[1] < _numberOfPanels) {
			$('#slide-' + (Math.floor(currentslide[1])+1)).css('display', 'inline-block');
			activeNav(Math.floor(currentslide[1])+1);
		}
		else {
			$('#slide-1').css('display', 'inline-block');
			activeNav(1);
		}
	}
	
	/********* auto functions ********/
	function pauseAutoSlide() {
		$(settings.sliderWrap).mouseenter(function(){
			stopSlide();
		});
		$(settings.sliderWrap).mouseleave(function(){
			startSlide();
		});
		
		if (window.attachEvent) {
		//IE
		window.attachEvent('focus', startSlide);
		window.attachEvent('blur', stopSlide);
		
		} else {
		//Not IE
		window.addEventListener('focus', startSlide);    
		window.addEventListener('blur', stopSlide);
		}
		
		function stopSlide() {
			clearInterval(intervalSet); 
			intervalSet=null;
		}
		
		function startSlide() {
			intervalSet = setInterval(function(){moveSlide()}, _rotateInterval)
		}
	}
	
	/********* subfunctions ********/
	
	//active text button nav
	function activeNav(currentNumber) {
		$('[id^=txtNav]').removeClass('txtNavActive');
		$('#txtNav-' + currentNumber).addClass('txtNavActive');
	
	} 
	
}
})(jQuery); //end Function