/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license **************SWIPE FUNCTION ONLY*/
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});

$(document).ready(function()
{
    //Make HTML5 placeholders work in IE
    /*if (!Modernizr.input.placeholder)
    {
        $('[placeholder]').focus(function()
        {
            var input = $(this);
            if (input.val() == input.attr('placeholder'))
            {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function()
        {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder'))
            {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function()
        {
            $(this).find('[placeholder]').each(function()
            {
                var input = $(this);
                if (input.val() == input.attr('placeholder'))
                {
                    input.val('');
                }
            })
        });
    }*/
/*If we ARE on the homepage append NEW style search box - moved this hear to avoid old cached js */
if ($(".Home").length > 0) {
        $("#utlSearch").append("<form action=\"/search-results/\" id=\"frmSearch\"> <input type=\"hidden\" name=\"cx\" value=\"015052813340329435768:nx2vi52wfzm\" /> <input type=\"hidden\" name=\"cof\" value=\"FORID:10;NB:1\" /> <input type=\"hidden\" name=\"ie\" value=\"UTF-8\" /> <div class=\"search-input\"> <img src=\"/~/media/adeccogroup/brands/modis%20brand/USA/media/search-icon-2015.png\" class=\"search-icon\" alt=\"Search\" /> <div class=\"search-input-left\"></div> <input id=\"SearchTerm\" type=\"text\" class=\"search-input-middle Heading\" name=\"q\" size=\"15\" value=\"SITE SEARCH\" /> </div> <input id=\"Submit1\" type=\"submit\" class=\"hide\" name=\"sa\" value=\"Go\" /> </form>");
    }
/**/	
    /*Site Search field clear on focus*/
    $(".Home #frmSearch input#SearchTerm").focus(function() {
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
	if ($('.carousel-wrap').length)
    {
        var curr = 1,
            //get max # of carousel Items
            maxCount = $('.car-item').length,
            animationCurrent = false;
        //initialize	
        $('#carItem-4').prependTo(".carousel-wrap-inner ul");
        //mobile swipe right
        $(".carousel-wrap-container").on("swipeleft", function(event)
        {
            //get next slide & set new
            if (curr == maxCount)
            {
                curr = 1
            }
            else
            {
                curr++
            }
            //function is created since its used more than once					
            moveToNext();
            navHighlight(curr);
        });
        //mobile swipe left
        $(".carousel-wrap-container").on("swiperight", function(event)
        {
            //get prev slide & set new
            if (curr == 1)
            {
                curr = maxCount
            }
            else
            {
                curr--
            }
            //function is created since its used more than once		
            moveToPrev();
            navHighlight(curr);
        });
        //next button
        $('.car-next-btn').click(function(event)
        {
            //prevent bubbling
            //event.stopPropagation();
            //get next slide & set new
            if (curr == maxCount)
            {
                curr = 1
            }
            else
            {
                curr++
            }
            //function is created since its used more than once					
            moveToNext();
            navHighlight(curr);
        }); ///END next
        //prev button
        $('.car-prev-btn').click(function(event)
        {
            //prevent bubbling
            //event.stopPropagation();
            //get prev slide & set new
            if (curr == 1)
            {
                curr = maxCount
            }
            else
            {
                curr--
            }
            //function is created since its used more than once		
            moveToPrev();
            navHighlight(curr);
        }); //END prev
        // nav 
        $('.carNav a').click(function(event)
        {
            //prevent bubbling
            //event.stopPropagation();
            //console.log("clicks");
            //get the num of slide to go to
            var clickedNum = $(this).attr('id').split('-'),
                //get the index (order) of this element and add 1 since #'s start with 0
                goTo = $('#carItem-' + clickedNum[1]).index() + 1,
                /* get the index (order) of current slide
					   currSlide = $('#carItem-' + curr ).index() + 1;*/
                // the second slide Index will "always" be the active
                currSlide = 2;
            //console.log(goTo);
            //moving foward
            if (goTo > currSlide)
            {
                //console.log("foward");
                var jumpNum = parseInt(goTo - currSlide),
                    //inital margin left, slide + the jump number of slides * 720/870 
                    movePercent = 73.56321 + (jumpNum * 82.275862);
                //move carousel
                $('.carousel-wrap-inner').stop(true, true).animate(
                {
                    'margin-left': '-' + movePercent + '%'
                }, function()
                {
                    //callback - move first slide over to last & reset css
                    for (i = 0; i < jumpNum; i++)
                    {
                        $('.car-item').first().appendTo(".carousel-wrap-inner ul");
                    }
                    $('.carousel-wrap-inner').attr('style', '');
                });
            } //end IF foward
            //moving backwards
            if (goTo < currSlide)
            {
                //console.log("backwards");
                moveToPrev();
            }
            //set current slide
            curr = clickedNum[1];
            navHighlight(curr);
        }); //END nav
        function moveToNext()
        {
            //move carousel
            $('.carousel-wrap-inner').stop(true, true).animate(
            {
                'margin-left': '-156.32183%'
            }, function()
            {
                //callback - move first slide over to last & reset css
                $('.car-item').first().appendTo(".carousel-wrap-inner ul");
                $('.carousel-wrap-inner').attr('style', '');
            });
        }

        function moveToPrev()
        {
            //move last slide over to first and adjust the css
            $('.car-item').last().prependTo(".carousel-wrap-inner ul");
            //-156.32183% = 1360/870 (initial negative margin + slider width + 10px margin-right)
            $('.carousel-wrap-inner').css('margin-left', '-156.32183%');
            //move carousel
            $('.carousel-wrap-inner').stop(true, true).animate(
            {
                'margin-left': '-73.56321%'
            }, function()
            {
                //callback - reset css
                $('.carousel-wrap-inner').attr('style', '');
            });
        } // END FUNCTION
        function navHighlight(currSlide)
        {
            //reset
            $('.car-dots .car-dot-item, .carNav a').removeClass('carActive');
            //activate new nav
            $('#carNav-' + currSlide + ',#carDots-' + currSlide).addClass('carActive');
        }
    } //END if ($('.carousel-wrap').length)
    //scrolling fix - IM if you are reading this: next time, attach scroll to the pagination button click. 
    if ($('.Home').length)
    {
        $(window).scroll(function()
        {
            if ($('html, body').is(':animated'))
            {
                $('html, body').dequeue().stop();
            }
        });
    }
}); // END READY