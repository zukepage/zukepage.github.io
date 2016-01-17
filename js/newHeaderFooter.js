(function(c,b,a,e){var d=c(b);c.fn.lazyload=function(f){var h=this;var j;var g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
function k(){var l=0;h.each(function(){var m=c(this);if(g.skip_invisible&&!m.is(":visible")){return}if(c.abovethetop(this,g)||c.leftofbegin(this,g)){}else{if(!c.belowthefold(this,g)&&!c.rightoffold(this,g)){m.trigger("appear");
l=0}else{if(++l>g.failure_limit){return false}}}})}if(f){if(e!==f.failurelimit){f.failure_limit=f.failurelimit;
delete f.failurelimit}if(e!==f.effectspeed){f.effect_speed=f.effectspeed;delete f.effectspeed}c.extend(g,f)
}j=(g.container===e||g.container===b)?d:c(g.container);if(0===g.event.indexOf("scroll")){j.bind(g.event,function(){return k()
})}this.each(function(){var l=this;var m=c(l);l.loaded=false;if(m.attr("src")===e||m.attr("src")===false){if(m.is("img")){m.attr("src",g.placeholder)
}}m.one("appear",function(){if(!this.loaded){if(g.appear){var n=h.length;g.appear.call(l,n,g)}c("<img />").bind("load",function(){var p=m.attr("data-"+g.data_attribute);
m.hide();if(m.is("img")){m.attr("src",p)}else{m.css("background-image","url('"+p+"')")}m[g.effect](g.effect_speed);
l.loaded=true;var o=c.grep(h,function(r){return !r.loaded});h=c(o);if(g.load){var q=h.length;g.load.call(l,q,g)
}}).attr("src",m.attr("data-"+g.data_attribute))}});if(0!==g.event.indexOf("scroll")){m.bind(g.event,function(){if(!l.loaded){m.trigger("appear")
}})}});d.bind("resize",function(){k()});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){d.bind("pageshow",function(l){if(l.originalEvent&&l.originalEvent.persisted){h.each(function(){c(this).trigger("appear")
})}})}c(a).ready(function(){k()});return this};c.belowthefold=function(g,h){var f;if(h.container===e||h.container===b){f=(b.innerHeight?b.innerHeight:d.height())+d.scrollTop()
}else{f=c(h.container).offset().top+c(h.container).height()}return f<=c(g).offset().top-h.threshold};
c.rightoffold=function(g,h){var f;if(h.container===e||h.container===b){f=d.width()+d.scrollLeft()}else{f=c(h.container).offset().left+c(h.container).width()
}return f<=c(g).offset().left-h.threshold};c.abovethetop=function(g,h){var f;if(h.container===e||h.container===b){f=d.scrollTop()
}else{f=c(h.container).offset().top}return f>=c(g).offset().top+h.threshold+c(g).height()};c.leftofbegin=function(g,h){var f;
if(h.container===e||h.container===b){f=d.scrollLeft()}else{f=c(h.container).offset().left}return f>=c(g).offset().left+h.threshold+c(g).width()
};c.inviewport=function(f,g){return !c.rightoffold(f,g)&&!c.leftofbegin(f,g)&&!c.belowthefold(f,g)&&!c.abovethetop(f,g)
};c.extend(c.expr[":"],{"below-the-fold":function(f){return c.belowthefold(f,{threshold:0})},"above-the-top":function(f){return !c.belowthefold(f,{threshold:0})
},"right-of-screen":function(f){return c.rightoffold(f,{threshold:0})},"left-of-screen":function(f){return !c.rightoffold(f,{threshold:0})
},"in-viewport":function(f){return c.inviewport(f,{threshold:0})},"above-the-fold":function(f){return !c.belowthefold(f,{threshold:0})
},"right-of-fold":function(f){return c.rightoffold(f,{threshold:0})},"left-of-fold":function(f){return !c.rightoffold(f,{threshold:0})
}})})(jQuery,window,document);
/*!
 * jQuery Lazy - v0.3.3
 * http://jquery.eisbehr.de/lazy/
 * http://eisbehr.de
 *
 * Copyright 2014, Daniel 'Eisbehr' Kern
 *
 * Dual licensed under the MIT and GPL-2.0 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * jQuery("img.lazy").lazy();
 */
(function(c,b,a,d){c.fn.lazy=function(v){var g={bind:"load",threshold:500,fallbackWidth:2000,fallbackHeight:2000,visibleOnly:false,appendScroll:b,scrollDirection:"both",delay:-1,combined:false,attribute:"data-original",removeAttribute:true,handledName:"handled",effect:"show",effectTime:0,enableThrottle:false,throttle:250,enableQueueing:true,beforeLoad:null,onLoad:null,afterLoad:null,onError:null,onFinishedAll:null},f=this,r=0,t=-1,l=-1,j=null,m=[],y=false;
function k(){if(g.delay>=0){setTimeout(function(){u(true)},g.delay)}if(g.delay<0||g.combined){u(false);
h(function(){c(g.appendScroll).bind("scroll",n(g.throttle,function(){h(function(){u(false)},this,true)
}))},this);h(function(){c(g.appendScroll).bind("resize",n(g.throttle,function(){t=l=-1;h(function(){u(false)
},this,true)}))},this)}}function u(B){if(!f.length){return}var z=false;for(var A=0;A<f.length;A++){(function(){var E=f[A],D=c(E);
if(o(E)||B){var C=f[A].tagName.toLowerCase();if(D.attr(g.attribute)&&((C=="img"&&D.attr(g.attribute)!=D.attr("src"))||((C!="img"&&D.attr(g.attribute)!=D.css("background-image"))))&&!D.data(g.handledName)&&(D.is(":visible")||!g.visibleOnly)){z=true;
D.data(g.handledName,true);h(function(){s(D,C)},this)}}})()}if(z){h(function(){f=c(f).filter(function(){return !c(this).data(g.handledName)
})},this)}}function s(A,z){var C=c(new Image());++r;if(g.onError){C.error(function(){q(g.onError,A);w()
})}else{C.error(function(){w()})}var B=false;C.one("load",function(){var D=function(){if(!B){b.setTimeout(D,100);
return}A.hide();if(z=="img"){A.attr("src",C.attr("src"))}else{A.css("background-image","url("+C.attr("src")+")")
}A[g.effect](g.effectTime);if(g.removeAttribute){A.removeAttr(g.attribute)}q(g.afterLoad,A);C.unbind("load").remove();
w()};D()});q(g.beforeLoad,A);C.attr("src",A.attr(g.attribute));q(g.onLoad,A);B=true;if(C.complete){C.load()
}}function o(D){var C=p(),B=x(),E;try{E=D.getBoundingClientRect()}catch(F){E={top:D.offsetTop,left:D.offsetLeft}
}var A=((B+g.threshold)>E.top)&&(-g.threshold<E.bottom),z=((C+g.threshold)>E.left)&&(-g.threshold<E.right);
if(g.scrollDirection=="vertical"){return A}else{if(g.scrollDirection=="horizontal"){return z}}return A&&z
}function p(){if(t>=0){return t}t=b.innerWidth||a.documentElement.clientWidth||a.body.clientWidth||a.body.offsetWidth||g.fallbackWidth;
return t}function x(){if(l>=0){return l}l=b.innerHeight||a.documentElement.clientHeight||a.body.clientHeight||a.body.offsetHeight||g.fallbackHeight;
return l}function n(A,C){var B,D=0;function z(){var E=+new Date()-D;function F(){D=+new Date();C.apply(d)
}B&&clearTimeout(B);if(E>A||!g.enableThrottle){F()}else{B=setTimeout(F,A-E)}}return z}function w(){--r;
if(!f.size()&&!r){q(g.onFinishedAll,null)}}function q(A,z){if(A){if(z){h(function(){A(z)},this)}else{h(A,this)
}}}function e(){j=setTimeout(function(){h();if(m.length){e()}},2)}function h(z,A,C){if(z){if(g.enableQueueing){z.call(A||b)
}if(!C||(C&&!y)){m.push([z,A,C]);if(C){y=true}}if(m.length==1){e()}return 0}var B=m.shift();if(!B){return 0
}if(B[2]){y=false}B[0].call(B[1]||b);return 0}(function(){if(v){c.extend(g,v)}if(g.onError){f.each(function(){var z=this;
h(function(){c(z).bind("error",function(){q(g.onError,c(this))})},z)})}if(g.bind=="load"){c(b).load(k)
}else{if(g.bind=="event"){k()}}})();return this};c.fn.Lazy=c.fn.lazy})(jQuery,window,document);
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function(a){a.fn.hoverIntent=function(n,d,h){var k={interval:100,sensitivity:6,timeout:0,over:function(){return undefined
},out:function(){return undefined},selector:null};if(typeof n==="object"){k=a.extend(k,n)}else{if(a.isFunction(d)){k=a.extend(k,{over:n,out:d,selector:h})
}else{k=a.extend(k,{over:n,out:n,selector:d})}}var m,l,g,f;var e=function(o){m=o.pageX;l=o.pageY};var c=function(p,o){o.hoverIntent_t=clearTimeout(o.hoverIntent_t);
if(Math.sqrt((g-m)*(g-m)+(f-l)*(f-l))<k.sensitivity){a(o).off("mousemove.hoverIntent",e);o.hoverIntent_s=true;
return k.over.apply(o,[p])}else{g=m;f=l;o.hoverIntent_t=setTimeout(function(){c(p,o)},k.interval)}};var j=function(p,o){o.hoverIntent_t=clearTimeout(o.hoverIntent_t);
o.hoverIntent_s=false;return k.out.apply(o,[p])};var b=function(q){var p=a.extend({},q);var o=this;if(o.hoverIntent_t){o.hoverIntent_t=clearTimeout(o.hoverIntent_t)
}if(q.type==="mouseenter"){g=p.pageX;f=p.pageY;a(o).on("mousemove.hoverIntent",e);if(!o.hoverIntent_s){o.hoverIntent_t=setTimeout(function(){c(p,o)
},k.interval)}}else{a(o).off("mousemove.hoverIntent",e);if(o.hoverIntent_s){o.hoverIntent_t=setTimeout(function(){j(p,o)
},k.timeout)}}};return this.on({"mouseenter.hoverIntent":b,"mouseleave.hoverIntent":b},k.selector)}})(jQuery);
(function(a){a.fn.addOption=function(){var h=function(p,k,m,q){var n=document.createElement("option");
n.value=k,n.text=m;var r=p.options;var j=r.length;if(!p.cache){p.cache={};for(var l=0;l<j;l++){p.cache[r[l].value]=l
}}if(typeof p.cache[k]=="undefined"){p.cache[k]=j}p.options[p.cache[k]]=n;if(q){n.selected=true}};var c=arguments;
if(c.length==0){return this}var g=true;var b=false;var e,d,f;if(typeof(c[0])=="object"){b=true;e=c[0]
}if(c.length>=2){if(typeof(c[1])=="boolean"){g=c[1]}else{if(typeof(c[2])=="boolean"){g=c[2]}}if(!b){d=c[0];
f=c[1]}}this.each(function(){if(this.nodeName.toLowerCase()!="select"){return}if(b){for(var j in e){h(this,j,e[j],g)
}}else{h(this,d,f,g)}});return this};a.fn.ajaxAddOption=function(d,f,b,e,c){if(typeof(d)!="string"){return this
}if(typeof(f)!="object"){f={}}if(typeof(b)!="boolean"){b=true}this.each(function(){var g=this;a.getJSON(d,f,function(h){a(g).addOption(h,b);
if(typeof e=="function"){if(typeof c=="object"){e.apply(g,c)}else{e.call(g)}}})});return this};a.fn.removeOption=function(){var c=arguments;
if(c.length==0){return this}var e=typeof(c[0]);var d,f;if(e=="string"||e=="object"||e=="function"){d=c[0];
if(d.constructor==Array){var b=d.length;for(var g=0;g<b;g++){this.removeOption(d[g],c[1])}return this
}}else{if(e=="number"){f=c[0]}else{return this}}this.each(function(){if(this.nodeName.toLowerCase()!="select"){return
}if(this.cache){this.cache=null}var h=false;var l=this.options;if(!!d){var j=l.length;for(var k=j-1;k>=0;
k--){if(d.constructor==RegExp){if(l[k].value.match(d)){h=true}}else{if(l[k].value==d){h=true}}if(h&&c[1]===true){h=l[k].selected
}if(h){l[k]=null}h=false}}else{if(c[1]===true){h=l[f].selected}else{h=true}if(h){this.remove(f)}}});return this
};a.fn.sortOptions=function(c){var d=a(this).selectedValues();var b=typeof(c)=="undefined"?true:!!c;this.each(function(){if(this.nodeName.toLowerCase()!="select"){return
}var g=this.options;var e=g.length;var h=[];for(var f=0;f<e;f++){h[f]={v:g[f].value,t:g[f].text}}h.sort(function(k,j){o1t=k.t.toLowerCase(),o2t=j.t.toLowerCase();
if(o1t==o2t){return 0}if(b){return o1t<o2t?-1:1}else{return o1t>o2t?-1:1}});for(var f=0;f<e;f++){g[f].text=h[f].t;
g[f].value=h[f].v}}).selectOptions(d,true);return this};a.fn.selectOptions=function(e,b){var d=e;var g=typeof(e);
if(g=="object"&&d.constructor==Array){var f=this;a.each(d,function(){f.selectOptions(this,b)})}var h=b||false;
if(g!="string"&&g!="function"&&g!="object"){return this}this.each(function(){if(this.nodeName.toLowerCase()!="select"){return this
}var k=this.options;var c=k.length;for(var j=0;j<c;j++){if(d.constructor==RegExp){if(k[j].value.match(d)){k[j].selected=true
}else{if(h){k[j].selected=false}}}else{if(k[j].value==d){k[j].selected=true}else{if(h){k[j].selected=false
}}}}});return this};a.fn.copyOptions=function(d,c){var b=c||"selected";if(a(d).size()==0){return this
}this.each(function(){if(this.nodeName.toLowerCase()!="select"){return this}var g=this.options;var e=g.length;
for(var f=0;f<e;f++){if(b=="all"||(b=="selected"&&g[f].selected)){a(d).addOption(g[f].value,g[f].text)
}}});return this};a.fn.containsOption=function(e,c){var d=false;var b=e;var f=typeof(b);var g=typeof(c);
if(f!="string"&&f!="function"&&f!="object"){return g=="function"?this:d}this.each(function(){if(this.nodeName.toLowerCase()!="select"){return this
}if(d&&g!="function"){return false}var k=this.options;var h=k.length;for(var j=0;j<h;j++){if(b.constructor==RegExp){if(k[j].value.match(b)){d=true;
if(g=="function"){c.call(k[j],j)}}}else{if(k[j].value==b){d=true;if(g=="function"){c.call(k[j],j)}}}}});
return g=="function"?this:d};a.fn.selectedValues=function(){var b=[];this.selectedOptions().each(function(){b[b.length]=this.value
});return b};a.fn.selectedTexts=function(){var b=[];this.selectedOptions().each(function(){b[b.length]=this.text
});return b};a.fn.selectedOptions=function(){return this.find("option:selected")}})(jQuery);var hintMap={"0.5":"Unacceptable","1.0":"Really bad","1.5":"Bad","2.0":"Expected more","2.5":"Just OK","3.0":"Satisfactory","3.5":"Pretty good","4.0":"Great!","4.5":"Excellent!","5.0":"Blown away!"};
function setRatingTitle(b){var a=b.attr("id");var e=a;if($("div[id = 'adj-"+e+"']").text()==""){$("div[id = 'adj-"+e+"']").text('Rated: "'+hintMap[$("[name='"+e+"']").val()]+'"')
}var a=b.attr("id");var d=parseFloat($("[name='"+a+"']").val()).toFixed(1);var c=hintMap[d];b.attr("title",c)
}function initializeRating(){$(".rating").each(function(){var a=$(this);setRatingTitle(a)});$(".micro-rating").each(function(){var a=$(this);
setRatingTitle(a)});$(".rating img").each(function(){$(this).removeAttr("title")});$(".micro-rating img").each(function(){$(this).removeAttr("title")
})}function createPaginationUrl(b,a){if(b==undefined){return}var d;b=removePoundSign(b);if(b.toString().indexOf("reviewPageNumber")==-1){if(b.toString().indexOf("?")==-1){d=b+"?reviewPageNumber="+a
}else{d=b+"&reviewPageNumber="+a}}else{var c=getUrlParameters("reviewPageNumber",b);d=b.replace("reviewPageNumber="+c,"reviewPageNumber="+a)
}return d}function createReviewSortUrl(a){a=removePoundSign(a);var e=$("#sortingMethod").val();if(e!=""){var b=$("#sortingMethod").val();
var d;if(a.toString().indexOf("reviewSortType")==-1){if(a.toString().indexOf("?")==-1){d=a+"?reviewSortType="+b
}else{d=a+"&reviewSortType="+b}}else{var c=getUrlParameters("reviewSortType",a);d=a.replace("reviewSortType="+c,"reviewSortType="+b)
}}return d}function openSortUrl(){if($("#sortingMethod").val()!=""){var a=$("#reviewPageUrl").val();var b=createReviewSortUrl(a);
window.open(b)}}$("#sortingMethod").on("focus",function(){$(this).find("option.dummy").prop("selected",true)
});$("#sortingMethod").on("change",function(){if($("#sortingInSameWindow").val()==undefined){var a=$(this);
var b=a.find("option:selected").text();$(".dummy").attr("value",a.val()).text(b);openSortUrl()}});function initializePaginationForReviewLinks(){$(".paginationLink").each(function(){var b=$("#reviewPageUrl").val();
var a=$.trim($(this).text());var c=createPaginationUrl(b,a);$(this).attr("href",c)});$(".read-more").each(function(){var b=$("#reviewPageUrl").val();
var a=2;var c=createPaginationUrl(b,a);$(this).attr("href",c)})}function lazyLoadCustomerProfilePic(){$(".customer-profile-pic, .customer-pic").each(function(){var a=$(this).find(".review-image");
var b=$.trim($(this).find(".review-image-source").text());if(b!=""){a.html('<img src="'+b+'"/>')}})}function initializeVoting(){$(".votedown,.voteup").click(function(){var d=$(this);
var a=d.data("review-id");var f=d.is(".voteup");var b=$("#bankId").val();var e=$("#cityName").val();var c=$("#productTypeId").val();
$.post("/review-vote.html",{voteReviewId:a,voteReviewUp:f,bank:b,city:e,productTypeIdParam:c},function(g){if(g){d.closest("li").find(".firstTime").removeClass("dontshow")
}else{d.closest("li").find(".alreadyRated").removeClass("dontshow")}d.closest("li").find(".asking").addClass("dontshow")
})})}function removePoundSign(a){return a.replace("#","")}var BBConstants={numberClass:"number",wholeNumberClass:"wholenumber",alphaNumericClass:"alphanumeric",moneyClass:"money",emiClass:"emi",percentClass:"percent",yearClass:"integer",monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],otherValue:"OTHER",residentIndian:"RESIDENT_INDIAN",outsideIndia:"OUTSIDE INDIA",nriOptions:["NRI","PIO_CARD_HOLDER","BORN_TO_INDIAN_PARENTS"],salaried:"SALARIED",selfEmployed:"SELF_EMPLOYED",cacheKey:"b46c5fc6-a1c0-41b1-914e-457631ce74dc"};
function getRoundedAmount(e){var a=2;var d=e*Math.pow(10,a);var c=Math.round(d);var b=c/Math.pow(10,a);
return b.toString()}function getNearestSignificantNumber(b,e){var f=b.toString();e--;var d=f/Math.pow(10,e);
var c=Math.ceil(d);var a=c*Math.pow(10,e);return a}function makeComma(a){if(a.length<=2){return a}length1=a.substr(0,(a.length-2));
formattedInput=makeComma(length1)+","+a.substring(a.length-2,a.length);return formattedInput}function getFormattedPositiveNumber(a,g){a=""+a;
a=a.replace(/,/g,"");a=getRoundedAmount(a);number=a;if(number.length>3&&number.length<=12){var c=number.substring(number.length-3,number.length);
var b=number.substring(0,number.length-3);var e=makeComma(b);e=e+","+c;if(g==1){if(e.length>11){var f=e.substr(0,11);
var d=e.substr(f.length,e.length);returnString=f+"<br>"+d;return returnString}else{return e}}else{return e
}}return number}function getFormattedNumber(a){var b=(""+a).charAt(0)!="-"?getFormattedPositiveNumber(a):"-"+getFormattedPositiveNumber(-a);
return b=="NaN"?0:b}function getFormattedWholeNumber(a){if(a==""){return""}var b=(""+a).charAt(0)!="-"?getFormattedPositiveNumber(a):"-"+getFormattedPositiveNumber(-a);
return b=="NaN"?-1:b}function setCookie(e,b,a,d){var c=e+"="+b;if(a!=null){c+=a}if(d!=null){c+="; path="+d
}document.cookie=c}function getCookie(a){return parseCookies()[a]}function getCookieExpireForDate(a){return"; expires="+a.toUTCString()
}function checkCookieValue(b,a){return parseCookies()[b]===a}function isCookieNotPresent(a){return !(a in parseCookies())
}function parseCookies(){var d=document.cookie.split("; ");var b={};for(var a=d.length-1;a>=0;a--){var c=d[a].split("=");
b[c[0]]=c[1]}return b}
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(f){var a=/\+/g;function d(j){return b.raw?j:encodeURIComponent(j)
}function g(j){return b.raw?j:decodeURIComponent(j)}function h(j){return d(b.json?JSON.stringify(j):String(j))
}function c(j){if(j.indexOf('"')===0){j=j.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{j=decodeURIComponent(j.replace(a," "));
return b.json?JSON.parse(j):j}catch(k){}}function e(k,j){var l=b.raw?k:c(k);return f.isFunction(j)?j(l):l
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setTime(+u+r*86400000)}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;
o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w};b.defaults={};f.removeCookie=function(k,j){if(f.cookie(k)===undefined){return false}f.cookie(k,"",f.extend({},j,{expires:-1}));
return !f.cookie(k)}}));var crore=10000000;var lakh=100000;var dPlaces=1;function setNumbering(){function c(d,f){var e=getFormattedNumber(d.value.replace(/\D/g,""));
d.value=(e==0)?f:e}function a(d,f){var e=getFormattedWholeNumber(d.value.replace(/\D/g,""));d.value=(e==-1)?f:e
}function b(d,f){var e=d.value.replace(/[^a-zA-Z0-9]/,"");d.value=(e==0)?f:e}$("input."+BBConstants.numberClass).each(function(){c(this,"")
}).keyup(function(){c(this,"")});$("input."+BBConstants.alphaNumericClass).each(function(){b(this,"")
}).keyup(function(){b(this,"")});$("input."+BBConstants.wholeNumberClass).each(function(){a(this,"")}).keyup(function(){a(this,"")
});$("input."+BBConstants.moneyClass).each(function(){c(this,0)}).keyup(function(){c(this,0)});$("input."+BBConstants.emiClass).each(function(){c(this,"")
}).keyup(function(){var d=getFormattedNumber(this.value.replace(/\D/g,""));if(d!=0){this.value=d}else{if(this.value!=0){this.value=""
}}});$("input."+BBConstants.percentClass).each(function(){if(this.value!=""&&this.value>100){this.value=this.value/100
}}).keyup(function(){if(isNaN(this.value)||this.value<0||this.value>100){this.value=""}})}function formatNumber(){$(".number").each(function(){if((!this.innerHTML.NaN)&&(this.innerHTML!="")&&(this.innerHTML!="N/A")){this.innerHTML=getFormattedNumber(this.innerHTML)
}});$(".wholenumber").each(function(){if((!this.innerHTML.NaN)&&(this.innerHTML!="")&&(this.innerHTML!="N/A")){this.innerHTML=getFormattedNumber(this.innerHTML)
}});$(".alphanumeric").each(function(){if((!this.innerHTML.NaN)&&(this.innerHTML!="")&&(this.innerHTML!="N/A")){this.innerHTML=alphaNumericCheck(this.innerHTML)
}})}function getAmountInCrores(b,a){if(!a){a=dPlaces}return Math.round((b/crore)*Math.pow(10,a))/Math.pow(10,a)
}function getAmountInLakhs(b,a){if(!a){a=dPlaces}return Math.round((b/lakh)*Math.pow(10,a))/Math.pow(10,a)
}function getFormattedAmount(c){var e=c.toString().replace(/,/g,"");var d,b,a=2;switch(true){case (e>=crore):d=getAmountInCrores(e,a);
b=(d==1)?"Crore":"Crores";return d+" "+b;break;case (e>=lakh):d=getAmountInLakhs(e,a);b=(d==1)?"Lakh":"Lakhs";
return d+" "+b;break;default:return getFormattedNumber(e);break}}var widgetStartTime=0;function getServerDate(){return $("#serverTimestamp").length==1&&!isNaN($("#serverTimestamp").val())?new Date(parseInt($("#serverTimestamp").val())):new Date()
}function getCurrentYear(){return(getServerDate().getFullYear())}function getCurrentMonth(){return(getServerDate().getMonth())
}function showNextArrow(){$(".item.active img.pointing-arrow").removeClass("dontshow")}function initializeSlideQueue(c){var a=[];
if(c=="OLD"){if($("input[name='form.details.uiParameters.referenceId']").val()!=null){a=[0,1,2,3,4,5,6,7,8,9,10]
}else{a=[0,1,2,3,4,5,6,7,8]}}else{if(c=="NEW"){if($("input[name='form.details.uiParameters.referenceId']").val()!=null){a=[0,1,3,4,5,6,8,10]
}else{a=[0,1,3,4,5,6,8]}}else{if(c=="expiredInsurance"){var b=$("div.contactMe").index();a=[0,1,2,3,b,b+1]
}else{if(c=="home-loan-fixed-slides"){$("div .item[slidenumber] input[name*=form]").attr("disabled",true);
$("div .item[slidenumber] select[name*=form]").attr("disabled",true);$(".fixedSlides").each(function(){$(this).attr("disabled",false);
$(this).find("input[name*=form]").attr("disabled",false);$(this).find("select[name*=form]").attr("disabled",false);
if($(this).attr("slidenumber")=="0"&&$("#eForm_form_details_uiParameters_variant").val()!="slide"&&$("#eFormSentence_form_details_formType").val()!=null&&$("#eFormSentence_form_details_formType").val()=="short"){a.push($(this).attr("slidenumber"))
}if($("#eForm_form_details_uiParameters_variant").val()=="slide"||($(this).attr("slidenumber")=="0"&&$("#displayCityCompleteElig").val()=="true")){a.push($(this).attr("slidenumber"))
}else{if($(this).attr("slidenumber")!="0"){a.push($(this).attr("slidenumber"))}}});a.push(contactSlideNo.toString())
}else{var d=$("div .item").length;for(d;d>-1;d--){a.push(d.toString())}}}}}a=a.sort(function(f,e){return f-e
});$("#sliderQueue").attr("data-sliders",a);if(isVariantOptionPresent("hlTransfer")){updateSlidesForTransferHomeLoan()
}}var canMoveToNextSlideForHl=true;var slideDelay=1000;function moveToSlideInQueue(d){var b=$("#newstaggered-carousel .item.active").index();
var c;var a=$("#sliderQueue").attr("data-sliders").split(",");if(d=="next"){if($("#productNameSpace").val()=="home-loan"||$("#productNameSpace").val()=="car-insurance"){hideModal()
}c=a[jQuery.inArray(b.toString(),a)+1];if($("div .item[slidenumber="+c+"] input").length>0){$("div .item[slidenumber="+c+"] input").each(function(){if(!($(this).hasClass("optional-field"))&&!($(this).hasClass("tt-hint"))){$(this).addClass("validate");
$(this).removeClass("dontvalidate");$(this).attr("disabled",false)}})}if($("div .item[slidenumber="+c+"] select").length>0){$("div .item[slidenumber="+c+"] select").each(function(){if(!($(this).hasClass("optional-field"))&&!($(this).hasClass("tt-hint"))){$(this).addClass("validate");
$(this).removeClass("dontvalidate");$(this).attr("disabled",false)}})}}else{if(d=="prev"){c=a[jQuery.inArray(b.toString(),a)-1];
$("a[name='moveCarouselButton']").each(function(){if(!$(this).hasClass("skip-slide")){if($(this).hasClass("search-for-button")){$(this).removeClass("loading-circle").html("Search for Home Loans")
}else{$(this).removeClass("loading-circle").html("Continue")}}})}}$("div .item[slidenumber="+c+"] input[name*=form]").attr("disabled",false);
$("div .item[slidenumber="+c+"] select[name*=form]").attr("disabled",false);canMoveToNextSlideForHl=true;
$("#newstaggered-carousel").carousel(parseInt(c))}function getUserChoiceForAppReminder(){var a=false;
if(isCookieEnabled()){a=getCookie("pendingAppReminder")=="dontShow"}return a}function checkVisibilityPendingAppReminder(){var a=parseInt($("#pendingApplicationsCount").val());
return !getUserChoiceForAppReminder()&&a>0}function getElapsedTimeInSeconds(b){var a=new Date($.now());
return(parseInt((a-b)/1000))}function setVisibilityPendingAppReminder(a,c){if((a&&checkVisibilityPendingAppReminder())&&!$(".app-remind-wrap").hasClass("app_left_anim")){$(".app-remind-wrap").addClass("app_left_anim");
trackGAEventForAppReminder(gaActions.APP_WIDGET_SHOWN_TO_USER,parseInt($("#pendingApplicationsCount").val()));
widgetStartTime=new Date($.now())}else{if((!a&&checkVisibilityPendingAppReminder()&&$(".app-remind-wrap").hasClass("app_left_anim"))){$(".app-remind-wrap").removeClass("app_left_anim");
var b=getElapsedTimeInSeconds(widgetStartTime);trackGAEventForAppReminder(c!=null?c:gaActions.APP_WIDGET_HIDDEN,b)
}}}function preLoadImages(d,c){var b;var a=$("#productNameSpace").val();if(a){b="/"+a+"/preLoadImages.html?ajax=true&&loadFirstSlideOnly="+d
}else{if(c=="insurance"){b="/preLoadImages.html?ajax=true&&prefetchPTypeCat="+c}}$.ajax({method:"get",url:b,success:function(e){$("body").append(e)
}})}function slideNext(){setVisibilityPendingAppReminder(false);hideModal();if($("#productNameSpace").val()=="personal-loan"){var b=$("#newstaggered-carousel .item.active").index();
var c;var a=$("#sliderQueue").attr("data-sliders").split(",");c=a[jQuery.inArray(b.toString(),a)+1]}if($("#productNameSpace").val()=="home-loan"){addAnimationForCTAButton();
setTimeout(function(){moveToSlideInQueue("next")},slideDelay)}else{if($("#productNameSpace").val()=="car-insurance"){moveToSlideInQueue("next")
}else{if($("#productNameSpace").val()=="personal-loan"){addAnimationForCTAButton();setTimeout(function(){$("#newstaggered-carousel").carousel(parseInt(c))
},slideDelay)}else{$("#newstaggered-carousel").carousel("next")}}}}function triggerTooltip(b,a,c){$(b).tooltip({placement:$(window).width()<1023?"bottom":"right",trigger:a,title:c})
}function changeToCamelCase(c){if($.trim(c)==""){return}c=c.toLowerCase();var b=null;var a=c.split(" ");
for(i in a){a[i]=(a[i].charAt(0)).toUpperCase()+a[i].substring(1,a[i].length).toLowerCase()}return a.join(" ")
}function moveFocusToNextField(c,d,b,g){var h=48;var a=57;var f=(g.keyCode||g.which);if(f<h||f>a){return
}if($(c).val().length>=b){if($(c).val().length==b&&f>=h&&f<=a){c.val(c.val()+String.fromCharCode(f))}d.focus();
g&&g.preventDefault()&&g.stopPropagation()}}function preAppendZeroForDateField(a){if(a.val().length==1){a.val("0"+a.val())
}}function moveNextSlideMobile(){if($("#mobileSite").val()=="true"){$("input[name='form.details.applicant.currentContactDetail.primaryEmail.contact'],[name='form.details.applicant.currentContactDetail.primaryMobile.contact'],[name='form.details.applicant.firstName']").on("keypress",function(a){if(a.which==13){$("#eForm_submit_button").trigger("click")
}});$("input[name='form.applicantPlaceHolder.residenceCity.fallback1'],#companyNameFieldSal,[name='form.details.applicant.firstName']").on("focus",function(a){$("html,body").animate({scrollTop:$(this).offset().top-80},"slow")
})}}function formatNameToImageName(a){var b=$.trim(a.toLowerCase());b=b.replace(" ","-");b=b.replace("(","");
b=b.replace(")","");b=b.replace("&","");b=b.replace("/","-");return b}function getMinValueForYearComponent(){return(getCurrentYear()-5)
}function alphaNumericCheck(a){return !(/[^a-zA-Z0-9]/.test(a))}function generateImageFromCompanyName(a){return'<img class="sal-comp-logo" src="/images/company/'+formatNameToImageName(a)+'.png" alt="'+a+'">'
}function checkExactMatch(c,d,a,b){$.ajax({cache:false,url:$("#productNameSpace").val()+"/checkMatch.html?ajax=true&type="+c+"&query="+encodeURIComponent(d.trim()),type:"post",dataType:"json",success:function(e){if(e=="true"&&a.length>=0){a.val(d.trim());
if(b!=null){b()}}else{a.val("")}}})}function bindLinksForLeads(b,d,e){var c=isSEM();var a=typeof e=="boolean"&&e;
d.click(unbind_checkout);b.each(function(){var f=$(this);f.click(function(){showLead(f,a)})});if(c&&!a){unbind_checkout()
}if(a){window.onunload=checkout}}function findDiffernceBetweenTwoDates(a,c){var b=new Date(a-c);return Math.abs(b/(1000*60*60*24))
}function findNonAbsoluteDiffernceBetweenTwoDates(a,c){var b=new Date(a-c);return b/(1000*60*60*24)}var coApplicantSlideNo=27;
var contactSlideNo=46;var constructionTypeSlideNo=19;var endOfConstructionTypeSlides=25;var propertyPurchaseSlideNo=15;
var coapplicantGenderSlideno=32;var applicantTypeOfEmploymentSlideNo=5;var coappTypeOfEmploymentSlideNo=33;
var applicantCompanySlideNumber=6;var applicantSalarySlideNumber=11;var citizenshipStatusSlideNo=1;var coApplicantCitizenshipSlideNo=31;
var residenceCitySlideNo=0;var coApplicantResidenceCitySlideNo=30;function initializeSlideDependencies(){$("#newstaggered-carousel #eForm_form_details_coApplicant_employment_type").each(function(){$(this).on("EmpType",function(){if(!($(this).val()==$(".radio.label-icon.checked.hl-emp-type-coapp").attr("for"))){return
}dependentSlidesOnCoAppEmpType()})});$("#newstaggered-carousel #eForm_form_details_applicant_employment_type").each(function(){$(this).on("EmpType",function(){if(!($(this).val()==$(".radio.label-icon.checked.hl-emp-type").attr("for"))){return
}dependentSlidesOnEmpType()})});$(".property-purchase-radio").each(function(){$(this).on("propertyPurchaseChange",function(){if(!($(this).val()==$(".radio.label-icon.checked.hl-loan-purpose").attr("for"))){return
}dependentSlidesOnPropertyPurchase()})});$("#newstaggered-carousel #eForm_form_details_property_propertyConstructionType").each(function(){$(this).on("propertyConstruction",function(){if(!($(this).val()==$(".radio.label-icon.checked.hl-property-details").attr("for"))){return
}dependentSlidesOnPropertyConstruction()})});$(".coApplicant-selection").each(function(){$(this).on("coApplicantCheckboxChange",function(){if($(".coApplicant-selected:checked").val()!="on"){for(var a=coApplicantSlideNo+1;
a<contactSlideNo;a++){removeSlideFromQueue(a.toString())}$(".coApplicant-selection").each(function(){$(this).parent().removeClass("checked")
});$("input[name='form.details.applyingWithCoApplicant']").removeAttr("checked");if($(".coApplicant-radio").parent().hasClass("checked")){$(".coApplicant-radio").parent().removeClass("checked")
}}$("#newstaggered-carousel").carousel(coApplicantSlideNo);$(".add-co-applicant-slide a[name='moveCarouselButton']").removeClass("loading-circle").html("Continue")
})});$(".outside-india-checkbox0").on("change",function(){if($(".outside-india-checkbox0:checked").val()!="on"){removeSlideFromQueue(citizenshipStatusSlideNo.toString());
$(".outside-india-checkbox0").parent().removeClass("checked")}$("#newstaggered-carousel").carousel(residenceCitySlideNo);
$(".city-slide a[name='moveCarouselButton']").removeClass("loading-circle").html("Search for Home Loans")
});$(".outside-india-checkbox1").on("change",function(){if($(".outside-india-checkbox1:checked").val()!="on"){removeSlideFromQueue(coApplicantCitizenshipSlideNo.toString());
$(".outside-india-checkbox1").parent().removeClass("checked")}$("#newstaggered-carousel").carousel(coApplicantResidenceCitySlideNo);
$(".city-slide a[name='moveCarouselButton']").removeClass("loading-circle").html("Continue")});$(".coApplicant-radio").on("coApplicantChange",function(){if(!($(this).val()==$(".radio.label-icon.hl-coapplicant-present.checked").attr("for"))){return
}dependentSlidesForCoApplicantPresent()});$("#newstaggered-carousel #eForm_form_details_coApplicant_applicantRelation_radio").each(function(){$(this).on("relationship",function(){if(!($(this).val()==$(".radio.checked.hl-coapplicant-relation").attr("for"))){return
}dependentSlidesForCoAppRelation()})});$("#newstaggered-carousel #eForm_form_details_coApplicant_applicantRelation_select").each(function(){$(this).on("relationship",function(){var a=$("input[name='form.details.coApplicant.applicantRelation']").val();
dependentSlidesForCoAppRelation()})});$("#newstaggered-carousel #eForm_form_details_coApplicant_coOwner").each(function(){$(this).change(function(){addAnimationForCTAButton();
setTimeout(function(){dependentSlidesOnCoAppOwner()},slideDelay)})});$("#newstaggered-carousel .citizenship-radio0").on("citizenshipStatus",function(){var a=$(".complete-eligibility-form input[name='form.details.applicant.citizenshipStatus']").val();
if(a!=BBConstants.residentIndian){disableCityFieldsAndShowCountryDropdown(residenceCitySlideNo.toString())
}else{if(a==BBConstants.residentIndian){disableCountryDropdownsAndMoveToCitySlide(residenceCitySlideNo,".applicant-city-slide-heading")
}}});$("#newstaggered-carousel .citizenship-radio1").on("citizenshipStatusForCoApplicant",function(){var a=$(".complete-eligibility-form input[name='form.details.coApplicant.citizenshipStatus']").val();
if(a!=BBConstants.residentIndian){disableCityFieldsAndShowCountryDropdown(coApplicantResidenceCitySlideNo.toString())
}else{if(a==BBConstants.residentIndian){disableCountryDropdownsAndMoveToCitySlide(coApplicantResidenceCitySlideNo,".coapplicant-city-slide-heading")
}}})}function hideFields(a){a.each(function(){$(this).removeClass("validate");$(this).addClass("dontvalidate");
$(this).addClass("optional-field");$(this).attr("disabled",true)})}function showFields(a){a.each(function(){$(this).addClass("validate");
$(this).removeClass("dontvalidate");$(this).removeClass("optional-field");$(this).attr("disabled",false)
})}function disableCityFieldsAndShowCountryDropdown(a){showFields($("div .item.active .residence-country select[name*=form]"));
if(a==residenceCitySlideNo){$("div.item[slidename='citizenship']").find(".residence-country").removeClass("dontshow")
}else{if(a==coApplicantResidenceCitySlideNo){$("div.item[slidename='coapp_citizenship']").find(".residence-country").removeClass("dontshow")
}}$(".flatui-dropdown").find(".disabled").removeClass("disabled")}function disableCountryDropdownsAndMoveToCitySlide(a,c){var b=a==0?"Search for Home Loans":"Continue";
var d=a==0?"Where in India do you live?":"Where in India does co-applicant live?";var e=$(c).clone().wrap("<span>").children();
$("div .item.active").find(".residency-areas").addClass("dontshow");hideFields($("div .item.active .residence-country input"));
hideFields($("div .item.active .country-dropdown input"));$(".city-slide a[name='moveCarouselButton']").removeClass("loading-circle").html(b);
$(c).html(d);e.appendTo($(c));$("#newstaggered-carousel").carousel(a)}function disableCitySlideForNRI(a){$("div .item[slidenumber="+a+"] input").attr("disabled",true);
$("div .item[slidenumber="+a+"] select").attr("disabled",true)}function sortFunction(d,c){var f=parseInt(d,10);
var e=parseInt(c,10);return f-e}function dependentSlidesForCoAppRelation(){var a=$("input[name='form.details.coApplicant.applicantRelation']").val();
if(a=="CHILDREN"){removeSlideFromQueue(coapplicantGenderSlideno.toString());addSlideToQueue(coapplicantGenderSlideno.toString())
}else{removeSlideFromQueue(coapplicantGenderSlideno.toString())}moveToSlideInQueue("next")}function dependentSlidesForCoApplicantPresent(){var c=[(coApplicantSlideNo+1).toString(),(coApplicantSlideNo+2).toString(),(coApplicantSlideNo+3).toString(),(coApplicantSlideNo+6).toString(),(coApplicantSlideNo+18).toString()];
var a=$(".property-purchase-radio:checked").val();a=="TRANSFER_EXISTING_HOME_LOAN"?c.push((coApplicantSlideNo+16).toString()):c.push((coApplicantSlideNo+17).toString());
if($(".coApplicant-radio:checked").val()=="true"){$(".coApplicant-selection").each(function(){$(this).parent().addClass("checked")
});addSlidesToQueue(c)}else{for(var b=coApplicantSlideNo+1;b<contactSlideNo;b++){removeSlideFromQueue(b.toString())
}}moveToSlideInQueue("next")}function dependentSlidesOnCoAppOwner(){var d=$("input[name='form.details.coApplicant.applicantRelation']").val();
var c=$("input[name='form.details.coApplicant.coOwner']:checked").val();var b=[(propertyPurchaseSlideNo+28).toString(),(propertyPurchaseSlideNo+29).toString()];
if((d=="FATHER"||d=="MOTHER"||d=="CHILDREN")){if(c=="false"){for(var a=33;a<45;a++){removeSlideFromQueue(a.toString())
}}else{if(c=="true"){addSlideToQueue("33")}}}moveToSlideInQueue("next")}function dependentSlidesOnPropertyConstruction(){var e=$("input[name='form.details.property.propertyConstructionType']:checked").val();
var b=[(constructionTypeSlideNo).toString(),(constructionTypeSlideNo+1).toString()];var d=[(constructionTypeSlideNo+2).toString(),(constructionTypeSlideNo+3).toString(),(constructionTypeSlideNo+4).toString(),(constructionTypeSlideNo+5).toString()];
var c=[(constructionTypeSlideNo+5).toString(),(constructionTypeSlideNo+6).toString()];if(e=="CONSTRUCTED"||e=="UNDER_CONSTRUCTION"){for(var a=constructionTypeSlideNo;
a<=endOfConstructionTypeSlides;a++){removeSlideFromQueue(a.toString())}$.each(b,function(f,g){addSlideToQueue(g)
})}else{if(e=="PURCHASE_LAND"){for(a=constructionTypeSlideNo;a<=endOfConstructionTypeSlides;a++){removeSlideFromQueue(a.toString())
}$.each(d,function(f,g){addSlideToQueue(g)})}else{if(e=="CONSTRUCT_ON_OWN_LAND"){for(a=constructionTypeSlideNo;
a<=endOfConstructionTypeSlides;a++){removeSlideFromQueue(a.toString())}$.each(c,function(f,g){addSlideToQueue(g)
})}else{if(e=="PURCHASE_LAND_AND_CONSTRUCT"){for(a=constructionTypeSlideNo;a<=endOfConstructionTypeSlides;
a++){removeSlideFromQueue(a.toString())}$.each(d,function(f,g){addSlideToQueue(g)});addSlideToQueue(endOfConstructionTypeSlides.toString())
}}}}moveToSlideInQueue("next")}function dependentSlidesForTransferHomeLoan(b,c){$.each(b,function(d,e){removeSlideFromQueue(e)
});for(var a=constructionTypeSlideNo+1;a<=endOfConstructionTypeSlides;a++){removeSlideFromQueue(a.toString())
}$.each(c,function(d,e){addSlideToQueue(e)})}function updateSlidesForTransferHomeLoan(){var a=[(propertyPurchaseSlideNo+3).toString()];
var b=[(propertyPurchaseSlideNo+3).toString(),(propertyPurchaseSlideNo+11).toString()];$.each($(".item"),function(){if($(this).attr("slidename")=="purpose"){var c=$(this).attr("slidenumber");
removeSlideFromQueue(c)}});dependentSlidesForTransferHomeLoan(a,b)}function dependentSlidesOnPropertyPurchase(){var b=$(".property-purchase-radio:checked").val();
var d=[(propertyPurchaseSlideNo+3).toString()];var e=[(propertyPurchaseSlideNo+3).toString(),(propertyPurchaseSlideNo+11).toString()];
if(b=="PURCHASE_IDENTIFIED_PROPERTY"){$.each(e,function(f,g){removeSlideFromQueue(g)});for(var c=constructionTypeSlideNo+1;
c<=endOfConstructionTypeSlides;c++){removeSlideFromQueue(c.toString())}addSlideToQueue(d)}else{if(b=="TRANSFER_EXISTING_HOME_LOAN"){dependentSlidesForTransferHomeLoan(d,e)
}else{if(b=="PURCHASE_NOT_YET_IDENTIFIED_PROPERTY"){$.each(d,function(f,g){removeSlideFromQueue(g)});
$.each(e,function(f,g){removeSlideFromQueue(g)});for(var a=constructionTypeSlideNo+1;a<=endOfConstructionTypeSlides;
a++){removeSlideFromQueue(a.toString())}}}}moveToSlideInQueue("next")}function dependentSlidesOnCoAppEmpType(){var c=$("input[name='form.details.coApplicant.employment.type']:checked").val();
var f=coappTypeOfEmploymentSlideNo;var j=[(f+1).toString(),(f+3).toString(),(f+4).toString(),(f+5).toString(),(f+6).toString(),(f+7).toString(),(f+8).toString(),(f+9).toString()];
var e=[(f+1).toString(),(f+3).toString(),(f+6).toString(),(f+7).toString(),(f+8).toString()];var h=[(f+1).toString(),(f+4).toString(),(f+5).toString(),(f+9).toString()];
var b=[(f+2).toString()];var g=[(propertyPurchaseSlideNo+28).toString(),(propertyPurchaseSlideNo+29).toString()];
var d=$(".property-purchase-radio:checked").val();var k=$("input[name='form.details.coApplicant.citizenshipStatus']").val();
if(c=="SALARIED"||c=="SALARIED_PROFESSIONAL"){$.each(b,function(m,n){removeSlideFromQueue(n)});dependentSlidesForSalaried(e,h,k);
var a=$("input[id='eForm_form_coApplicantPlaceHolder_employmentAbroadStartDate_month']").val();var l=$("input[id='eForm_form_coAapplicantPlaceHolder_employmentAbroadStartDate_year']").val();
if($("#mobileSite").val().toString()!="true"){if(k!=BBConstants.residentIndian){if(a==""){$("input[id='eForm_form_coAapplicantPlaceHolder_employmentAbroadStartDate_year']").val((getServerDate().getFullYear()-5).toString())
}if(l==""){$("input[id='eForm_form_coApplicantPlaceHolder_employmentAbroadStartDate_month']").val("0")
}}}if(d=="PURCHASE_NOT_YET_IDENTIFIED_PROPERTY"||d=="PURCHASE_IDENTIFIED_PROPERTY"){$.each(g,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo+29).toString())}else{$.each(g,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo+28).toString())}}else{if(c=="SELF_EMPLOYED_BUSINESS"||c=="SELF_EMPLOYED_PROFESSIONAL"){$.each(j,function(m,n){removeSlideFromQueue(n)
});$.each(b,function(m,n){addSlideToQueue(n)});if(d=="PURCHASE_NOT_YET_IDENTIFIED_PROPERTY"||d=="PURCHASE_IDENTIFIED_PROPERTY"){$.each(g,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo+29).toString())}else{$.each(g,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo+28).toString())}}else{$.each(b,function(m,n){removeSlideFromQueue(n)
});$.each(j,function(m,n){removeSlideFromQueue(n)});$.each(g,function(m,n){removeSlideFromQueue(n)})}}moveToSlideInQueue("next")
}function dependentSlidesOnEmpType(){var k=$("input[name='form.details.applicant.employment.type']:checked").val();
var e=applicantTypeOfEmploymentSlideNo;var h=[(e+1).toString(),(e+3).toString(),(e+4).toString(),(e+5).toString(),(e+6).toString(),(e+7).toString(),(e+8).toString(),(e+9).toString()];
var d=[(e+1).toString(),(e+3).toString(),(e+6).toString(),(e+7).toString(),(e+8).toString()];var g=[(e+1).toString(),(e+4).toString(),(e+5).toString(),(e+9).toString()];
var b=[(e+2).toString()];var f=[(propertyPurchaseSlideNo).toString(),(propertyPurchaseSlideNo+1).toString()];
var c=$(".property-purchase-radio:checked").val();var j=$("input[name='form.details.applicant.citizenshipStatus']").val();
if(k=="SALARIED"||k=="SALARIED_PROFESSIONAL"){$.each(b,function(m,n){removeSlideFromQueue(n)});dependentSlidesForSalaried(d,g,j);
if(!($("#eForm_form_details_uiParameters_variant").val()=="slide")&&$("#displayCompanyCompleteElig").val()=="false"&&$("#eForm_form_details_formType").val()!="long"){removeSlideFromQueue(applicantCompanySlideNumber.toString())
}else{addSlideToQueue(applicantCompanySlideNumber.toString())}if(!($("#eForm_form_details_uiParameters_variant").val()=="slide")&&$("#displaySalaryCompleteElig").val()=="false"&&$("#eForm_form_details_formType").val()!="long"){removeSlideFromQueue(applicantSalarySlideNumber.toString())
}else{if(j=="RESIDENT_INDIAN"){addSlideToQueue(applicantSalarySlideNumber.toString())}}var a=$("input[id='eForm_form_applicantPlaceHolder_employmentAbroadStartDate_year']").val();
var l=$("input[id='eForm_form_applicantPlaceHolder_employmentAbroadStartDate_month']").val();if($("#mobileSite").val().toString()!="true"){if(j!=BBConstants.residentIndian){if(a==""){$("input[id='eForm_form_applicantPlaceHolder_employmentAbroadStartDate_year']").val((getServerDate().getFullYear()-5).toString())
}if(l==""){$("input[id='eForm_form_applicantPlaceHolder_employmentAbroadStartDate_month']").val("0")}}}if(c=="PURCHASE_NOT_YET_IDENTIFIED_PROPERTY"||c=="PURCHASE_IDENTIFIED_PROPERTY"){$.each(f,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo+1).toString())}else{$.each(f,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo).toString())}}else{if(k=="SELF_EMPLOYED_BUSINESS"||k=="SELF_EMPLOYED_PROFESSIONAL"){$.each(h,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((e+2).toString());if(c=="PURCHASE_NOT_YET_IDENTIFIED_PROPERTY"||c=="PURCHASE_IDENTIFIED_PROPERTY"){$.each(f,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo+1).toString())}else{$.each(f,function(m,n){removeSlideFromQueue(n)
});addSlideToQueue((propertyPurchaseSlideNo).toString())}}else{if(k=="STUDENT"||k=="RETIRED"||k=="HOMEMAKER"){$.each(b,function(m,n){removeSlideFromQueue(n)
});$.each(h,function(m,n){removeSlideFromQueue(n)});$.each(f,function(m,n){removeSlideFromQueue(n)})}}}moveToSlideInQueue("next")
}function dependentSlidesForSalaried(c,a,b){if($.inArray(b,BBConstants.nriOptions)>=0){$.each(c,function(d,e){removeSlideFromQueue(e)
});$.each(a,function(d,e){addSlideToQueue(e)})}else{$.each(a,function(d,e){removeSlideFromQueue(e)});
$.each(c,function(d,e){addSlideToQueue(e)})}}function addSlideToQueue(b){var a=$("#sliderQueue").attr("data-sliders").split(",");
var c=a.indexOf(b);if(c==-1){a.push(b.toString());a=a.sort(sortFunction);$("#sliderQueue").attr("data-sliders",a)
}}function addSlidesToQueue(b){var a=$("#sliderQueue").attr("data-sliders").split(",");$.each(b,function(d,f){var c=f;
var e=a.indexOf(c);if(e==-1){a.push(c)}});a=a.sort(sortFunction);$("#sliderQueue").attr("data-sliders",a)
}function removeSlideFromQueue(b){var a=$("#sliderQueue").attr("data-sliders").split(",");var c=a.indexOf(b);
if(c>-1){a.splice(c,1);a.sort(sortFunction);if($("div .item[slidenumber="+b+"] input").length>0){$("div .item[slidenumber="+b+"] input").each(function(){if(!($(this).hasClass("optional-field"))){$(this).removeClass("validate");
$(this).addClass("dontvalidate");$(this).attr("disabled",true)}})}if($("div .item[slidenumber="+b+"] select").length>0){$("div .item[slidenumber="+b+"] select").each(function(){if(!($(this).hasClass("optional-field"))){$(this).removeClass("validate");
$(this).addClass("dontvalidate");$(this).attr("disabled",true)}})}$("#sliderQueue").attr("data-sliders",a)
}}function addAnimationForCTAButton(){$("div .item.active #continueButton").addClass("loading-circle").html("Please wait..")
}function dependentSlideForCitySlide(b,a,e){var c=$(b).val();var d=$(a).val();if(c!=""&&c!=null&&c==BBConstants.otherValue){if(d!=""&&d!=null&&d==BBConstants.outsideIndia){if(e==0){addSlideToQueue(citizenshipStatusSlideNo.toString());
$(".outside-india-checkbox0").parent().addClass("checked")}else{addSlideToQueue(coApplicantCitizenshipSlideNo.toString());
$(".outside-india-checkbox1").parent().addClass("checked")}}}else{if(e==0){removeSlideFromQueue(citizenshipStatusSlideNo.toString())
}else{removeSlideFromQueue(coApplicantCitizenshipSlideNo.toString())}}$(".residency-status-slide a[name='moveCarouselButton']").removeClass("loading-circle").html("Continue");
moveToSlideInQueue("next")}function slideDependencyForNRIs(){addSlideToQueue(citizenshipStatusSlideNo.toString());
$(".outside-india-checkbox0").parent().addClass("checked");$("[name='fallBackName0']").attr("value",BBConstants.outsideIndia)
}function coApplicantSlideDependencyForNRIs(){addSlideToQueue(coApplicantCitizenshipSlideNo.toString());
$(".outside-india-checkbox1").parent().addClass("checked");$("[name='fallBackName1']").attr("value",BBConstants.outsideIndia)
}function hideModal(){$("#live-city0").modal("hide");$("#live-car0").modal("hide");$("#live-city1").modal("hide");
$("#propertyCity").modal("hide");$(".item.active .recommendedSearchImg").remove()}function populateEmailFromNewsLetter(){var a=$("#nonPartnerPageEmail").val();
$("#collectEmailFromNewsletter").val(a)}function popover_close(){$.fn.extend({popoverClosable:function(b){var c={template:'<div class="popover">                <div class="arrow"></div>                <div class="popover-header">                <button type="button" class="close" data-dismiss="popover" aria-hidden="true">&times;</button>                <h3 class="popover-title"></h3>                </div>                <div class="popover-content"></div>                </div>'};
b=$.extend({},c,b);var a=this;a.popover(b);a.on("click",function(d){d.preventDefault();a.not(this).popover("hide")
});$("html").on("click",'[data-dismiss="popover"]',function(d){a.popover("hide")})}});$(function(){$('[data-toggle="popover"]').popoverClosable()
})}function isMobileSite(){if($("#mobileSite").val()=="true"){return true}else{return false}}function updateCIManufactureDate(){if($("#carType").val()=="OLD"){$("#manufacturedOn,input[name='form.details.carDetail.manufacturedOn']").val([pad($("#manufacturedMonth").val()),"01",$("#manufacturedYear").val()].join("/"))
}else{var a=$("#manufacturedOn").val().split("/")[1];$("#manufacturedOn,input[name='form.details.carDetail.manufacturedOn']").val([pad($("#manufacturedMonth").val()),a,$("#manufacturedYear").val()].join("/"))
}}function bindCIChangeDates(){$("#registeredDay,#registeredMonth,#registeredYear").live("change",function(){$("#registeredOn,input[name='form.details.carDetail.registeredOn']").val([pad($("#registeredMonth").val()),pad($("#registeredDay").val()),$("#registeredYear").val()].join("/"));
updateCIManufactureDate();$().dateSelectBoxes({generateOptions:true,monthElement:$("#manufacturedMonth"),dayElement:$("#manufacturedDay"),yearElement:$("#manufacturedYear"),defaultDate:$("#manufacturedOn").val(),minDate:getManufacturedMinDate(),maxDate:getDateObjectFormat($("#registeredOn").val())})
});$("#manufacturedMonth,#manufacturedYear").live("change",function(){updateCIManufactureDate()});$("#expiryDay,#expiryMonth,#expiryYear").live("change",function(){$("#expiryDate").val([pad($("#expiryMonth").val()),pad($("#expiryDay").val()),$("#expiryYear").val()].join("/"));
$("#policyStartDate").val(getPolicyStartDate())})}function getPolicyStartDate(){var a=[pad($("#expiryYear").val()),pad($("#expiryMonth").val()),pad($("#expiryDay").val())].join("-");
return getNextDay(a)}function getNextDay(b){var a=new Date(b);a.setDate(a.getDate()+1);return(pad(a.getMonth()+1))+"/"+pad(a.getDate())+"/"+pad(a.getFullYear())
}function initializeSelectBoxes(){var d=$("#carType").val();var b=$("#registeredOn").val();var c=$("#manufacturedOn").val();
var f=new Date();f.setFullYear(f.getFullYear()-14);var a=$("#expiryDate").val();if(c==""){c=b}$().dateSelectBoxes({generateOptions:true,monthElement:$("#manufacturedMonth"),dayElement:$("#manufacturedDay"),yearElement:$("#manufacturedYear"),defaultDate:c,minDate:getManufacturedMinDate(),maxDate:getDateObjectFormat(b)});
if(d=="NEW"){var g=new Date();g.setDate(new Date().getDate()+45);var e=new Date();e.setDate(e.getDate()+29);
if(getDateObjectFormat(b)<new Date()){b=$.datepicker.formatDate("mm/dd/yy",new Date())}$().dateSelectBoxes({generateOptions:true,monthElement:$("#registeredMonth"),dayElement:$("#registeredDay"),yearElement:$("#registeredYear"),defaultDate:b,maxDate:e,minDate:new Date()})
}else{var g=new Date();var e=new Date();g.setDate(new Date().getDate()+45);if(g.getFullYear()==new Date().getFullYear()){e.setFullYear(e.getFullYear()-1,11,31)
}$().dateSelectBoxes({generateOptions:true,monthElement:$("#expiryMonth"),dayElement:$("#expiryDay"),yearElement:$("#expiryYear"),defaultDate:$("#expiryDate").val(),minDate:new Date(),maxDate:g});
$().dateSelectBoxes({generateOptions:true,monthElement:$("#registeredMonth"),dayElement:$("#registeredDay"),yearElement:$("#registeredYear"),defaultDate:$("#registeredOn").val(),maxDate:e,minDate:f})
}}function getDateObjectFormat(a){return new Date(a)}function getManufacturedMinDate(){var a=new Date($("#registeredOn").val());
a.setFullYear(a.getFullYear()-2);return a}function isMobile(d){var b=""+d;var c=/^[9|8|7]\d{9}/;var a=c.exec(b);
console.log(a);if(a==null){return false}else{return true}}$(window).load(function(){var f=$("#offersFramework").val();
var e=true;if($("#ajaxOfferLoad").val()==null||$("#ajaxOfferLoad").val()=="false"){e=false}var b=$("#pageName").val();
var d=$("#productNameSpace").val();if(f&&e){var a=constructUrl();var c=$("#offer-table");$.ajax({method:"get",url:a,success:function(g){c.append(g);
formatNumber();formatNumbers();initTrackEvents($);initialiseRatings();if(b=="eligPage"){readyFunction()
}else{if(pageName=="searchPage"){filterSection();sort();initTooltip();initialiseRatings();sliderInputKeyUp();
bindRateAlertEvents();checkboxOnly();updateOffersMobile()}}offerPageJSStack();if($("#isShowNonPartnerModal").val()=="true"){bindOfferSelect();
initTrackEvents($("#policiesHolder"))}if($("#productNameSpace").val()=="car-insurance"){addLPGToAddOnList();
setUpPremiumSubscript();reapplyFiltersIfNecessary()}$(".js-offer-size").html($(".js-offers-row:visible").length);
$("#filter-section,#showFilter,#amount-tenure-filter").removeClass("disable-section");$("#sort-section").removeClass("dontshow");
if(!isMobileSite()){loadDetails()}}});if(!isMobileSite()){bindDataActionLoc();bindOfferSelect();offerPageEventHandler()
}}else{if(f){formatNumber();formatNumbers();initTrackEvents($);offerPageJSStack();if(!isMobileSite()){offerPageEventHandler()
}initialiseRatings();$("#filter-section,#showFilter,#amount-tenure-filter").removeClass("disable-section");
$("#sort-section").removeClass("dontshow");if(!isMobileSite()){loadDetails()}}}});function constructUrl(){var a=$("#productNameSpace").val();
var c=$("#pageName").val();var d=$("#offersFramework").val();$("#eForm_form_details_uiParameters_landingPageNamespace").val();
var b;if(c=="eligPage"){if($("#eForm_form_details_uiParameters_landingPageNamespace").val()){b="/"+a+"/get-more-seo-offers.html?&landingPageNamespace="+$("#eForm_form_details_uiParameters_landingPageNamespace").val()+"&loadIntialOffers=true&ajax=true&ajaxOfferLoad=false&pageNameForAjax="+c
}else{b="/"+a+"/get-more-cards.html?loadIntialOffers=true&ajax=true&ajaxOfferLoad=false&pageNameForAjax="+c
}}else{if(c=="careers"){b="/get-additional-offers.html?loadIntialOffers=true&ajaxOfferLoad=false&ajax=true"
}else{if(c=="searchPage"){b="/"+a+"/get-more-offers.html?loadIntialOffers=true&ajaxOfferLoad=false&ajax=true&xsell=false&searchId="+$("#searchReferenceId").val()+"&pageNameForAjax="+c
}else{if(c=="insuranceOfferPage"){b="/"+a+"/get-more-insurance-search-offers.html?loadIntialOffers=true&ajaxOfferLoad=false&ajax=true&xsell=false&appId="+$("#appId").val()+"&pageNameForAjax="+c
}}}}return b}function fetchUserReviewsAjax(){var a="/"+$("#productNameSpace").val()+"/fetchUserReviewsAjax.html?ajax=true&cacheKey="+BBConstants.cacheKey+"&cacheLevel=2&pageName="+$("#pageName").val();
if($("#hiddenUserReviewParams").val()!=undefined&&$("#hiddenUserReviewParams").val()!=""){a=a+$("#hiddenUserReviewParams").val()
}$.ajax({type:"GET",url:a,success:function(b){$("#user-review-section-ajax").html(b);initializeRating();
if($("#pageName").val()=="eligPage"){if($("#cl-user-review-link").hasClass("active")){console.log("if-reviewDesc");
reviewDescTrim();flagForFirstTime=false}else{$('a[data-toggle="tab"]').on("shown.bs.tab",function(c){if($(this).attr("href").indexOf("review")>=0&&flagForFirstTime){reviewDescTrim();
flagForFirstTime=false}})}}initializeCustomEvents();initializeCustomText();initializeVotingUps();index=parseInt($("#startIndex").val());
if($("#pageName").val()=="landingPage"&&$("#hideUserReviewsSection").val()=="false"){initializePaginationForReviews();
$("#review-page-holder-icon").show()}}})}function isInternal(){return !isProductionEnv()||isInternalAccess()
}function initTypeAhead(e,g,d,b,f,c){b=b||30;if($("#mobileSite")&&$("#mobileSite").val()=="true"){b=6
}var a=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("name"),queryTokenizer:Bloodhound.tokenizers.whitespace,limit:b,remote:{url:d+"&query=%QUERY",filter:function(h){return $.map(h,function(j){return{name:j}
})},ajax:{dataType:"jsonp",jsonp:"jsonp_callback",jsonpCallback:"bbCallback",data:{limit:b}}}});a.initialize();
if(f){e.typeahead(null,{name:g,displayKey:"name",source:a.ttAdapter()}).off("blur")}else{e.typeahead(null,{name:g,displayKey:"name",source:a.ttAdapter()})
}e.closest(".twitter-typeahead").on("click"," .empty-message",function(){$(this).hide();e.closest(".carousel").carousel("next")
});e.closest(".twitter-typeahead").on("click",function(){if(g=="cities"&&c!=undefined){c.hide();c.removeClass("validate");
c.addClass("dontvalidate");$(".item.active .recommendedSearchImg").remove()}})}function initSlider(e,h,g,c,d){function b(){if(g.prop("tagName")=="SELECT"){e.slider("setValue",Number(g.find("option:selected").val().replace(/,/g,"")),false);
e.change()}else{if(g.val()!=undefined){e.slider("setValue",Number(g.val().replace(/,/g,"")),false)}e.change()
}}function a(j,k){if(j>=Number(k)){return">"+getFormattedNumber(String(j))}return getFormattedNumber(String(j))
}function f(j,k){if(j<k){g.val(getFormattedNumber(j));g.valid();g.change();showNextArrow()}else{g.val("")
}}h=h||{};e.slider({min:h.min||Number(0),max:h.max||100,value:h.value||0,orientation:h.orientation||"horizontal",step:h.step||10,formater:function(j){if(c||undefined){return c(j,h.max,g,h.min)
}else{return a(j,this.options.max)}}});if(g||undefined){b();e.on("slideStop",function(k,j){if(d||undefined){d("slideStop",g,k.value,h.max);
b()}else{f(k.value,h.max)}});g.on("focusout",function(k,j){if(d||undefined){d("focusout",g,$(this).val(),h.max)
}b();showNextArrow()})}return e}function customSliderValueFormatter(c,a,d,b){if(c>=a){if(d||undefined){d.focus()
}return">"+getFormattedNumber(String(Number(c)-1))}if(c<=b){return"<"+getFormattedNumber(String(Number(b)+1))
}return getFormattedNumber(String(c))}function customSliderValueFormatter1(c,a,d,b){if(c>=75){if(d||undefined){d.focus()
}return"Above"+getFormattedNumber(String(Number(75)))}return getFormattedNumber(String(c))}function customSlideEventForYearSlider(a,d,b,c){d.val(b);
d.valid();d.change();showNextArrow()}function initDobSlider(e,t,r,q){var f=$("input[name$='.dob.day'][type='hidden']");
var s=$("input[name$='.dob.month'][type='hidden']");var n=$("input[name$='.dob.year'][type='hidden']");
function m(w,u,v){q.removeClass("dontshow");q.val(v+" "+BBConstants.monthNames[u-1]+" "+w)}function h(u){t.datepicker({onSelect:function(v,w){f.val($(this).datepicker("getDate").getDate());
m(n.val(),s.val(),f.val());showNextArrow()}});t.datepicker("setDate",u);t.siblings(".dob-sub-heading").show();
t.show()}function o(x){var v=$.inArray(x.split(" ")[0],BBConstants.monthNames);var w=x.split(" ")[1];
var u=getServerDate();u.setDate(1);u.setMonth(v);u.setYear(w);if(f.val()){u.setDate(f.val())}n.val(w);
s.val(v+1);return u}function k(u,v){e.find("table tbody tr td").each(function(){if($(this).text()==(BBConstants.monthNames[u]+" "+v)){$(this).addClass("selected")
}})}function p(){e.on("click","table tbody tr td",function(){if($(this).text()!=""){var u=o($(this).text());
e.find("table tbody tr td.selected").removeClass("selected");k(u.getMonth(),u.getFullYear());h(u);f.val("");
t.find(".ui-state-active").removeClass("ui-state-active");m(n.val(),s.val(),f.val())}})}function g(A,x,z){var v=1;
do{var w=1;var u="<tr>";do{u+="<td><a>"+BBConstants.monthNames[A]+" "+x+"</a></td>";if(A==11){A=0;x=x+1
}else{A++}w++}while(w<=3);u+="</tr>";e.find("table tbody tr:last").after(u);v++}while(v<=4);var y="<tr><td><a>"+BBConstants.monthNames[A]+" "+x+"</a></td><td></td><td></td></tr>";
e.find("table tbody tr:last").after(y)}function b(){f.val("");s.val("");n.val("");t.find("table tbody td a").removeClass("ui-state-active");
t.hide();t.siblings(".dob-sub-heading").hide();q.val("")}function j(w){b();var u=getServerDate().getMonth();
var v=u;e.find("table tbody").html("<tr></tr>");g(v,w,u);e.removeClass("dontshow")}function d(){r.on("slideStop",function(v,u){j(getServerDate().getFullYear()-v.value-1)
})}function a(B,w,A){w=w-1;var y;try{y=new Date(B,w,A)}catch(z){console.log("Invalid date")}var x=(y&&y.getDate()==A&&y.getMonth()==w&&y.getFullYear()==B);
if(x){var v=getServerDate();var u=v.getFullYear()-parseInt(B);if(w>(v.getMonth())||(w==(v.getMonth())&&v.getDate()<parseInt(A))){u--
}r.slider("setValue",u);j(Number(v.getFullYear()-u-1));k(w,B);h(new Date(B,w,A));m(B,w+1,A)}}function l(){$(".news-tagger-age-picker-mobile").find(".input-date").on("blur",function(){preAppendZeroForDateField($(this));
f.val($(this).val());s.val($(".input-month").val());n.val($(".input-year").val());m(n.val(),s.val(),f.val())
});$(".news-tagger-age-picker-mobile").find(".input-month").on("blur",function(){preAppendZeroForDateField($(this));
f.val($(".input-date").val());s.val($(this).val());n.val($(".input-year").val());m(n.val(),s.val(),f.val())
});$(".news-tagger-age-picker-mobile").find(".input-year").on("blur",function(){f.val($(".input-date").val());
s.val($(".input-month").val());n.val($(this).val());m(n.val(),s.val(),f.val())})}function c(){$(".news-tagger-age-picker-mobile").find(".input-date").on("keypress",function(u){moveFocusToNextField($(this),$(".news-tagger-age-picker-mobile").find(".input-month"),1,u)
});$(".news-tagger-age-picker-mobile").find(".input-month").on("keypress",function(u){moveFocusToNextField($(this),$(".news-tagger-age-picker-mobile").find(".input-year"),1,u)
})}c();d();p();a(n.val(),s.val(),f.val());l()}function getAppNotifications(){var a="/myaccount_ajax.html";
$.ajax({url:a,cache:false,type:"get",success:function(d){$("#notification-container").html(d);formatNumber();
if($("#notifSize").val()>0){$("#notification-count").removeClass("dontshow");$("#notification-count-link").removeClass("dontshow");
$("#notification-count").text($("#notifSize").val())}}});function b(){var d=$("#notification-count")[0];
if(d.textContent<=0||d.textContent==""){return 0}else{return d.textContent}}function c(){if(b()!=0){BB_trackGoogleEventWithLabel("notifications","noChoice","")
}}$(".bell-arrow").addClass("dontshow");$("#notificationLink, #notificationLinkMobile").unbind("click").on("click",function(d){if($("#notification-container").is(":visible")){c()
}else{BB_trackGoogleEventWithLabel("notifications","choose",b())}$("#notification-container, .bell-arrow").fadeToggle(300);
$("#notification-count").fadeOut("slow");return false});$(document).not("#notificationLink, #notificationLinkMobile").click(function(d){if(!$(d.target).is("#notification-container *")&&$("#notification-container").is(":visible")){$("#notification-container,.bell-arrow").hide();
c()}})}function bindNotificationOnLogin(){$("body").on("customerLoggedIn",function(){getAppNotifications()
})}$(function(){var a=$(".bbheader.old-bbheader");$(document).scroll(function(){a.css({position:$(this).scrollTop()>100?"fixed":"relative"})
});var c=$("#logged-in-status")!=undefined&&$("#logged-in-status")!=null&&$("#logged-in-status").val()=="true";
var b=$("#loggedin")!=undefined&&$("#loggedin")!=null&&$("#loggedin").val()=="true";if(b||c){getAppNotifications()
}bindNotificationOnLogin()});$(document).ready(function(){var b=$("#mobileSite")!=undefined&&$("#mobileSite").val()=="true";
var a=$("#pagName")!=undefined&&$("#pagName").val()!="newBootStrapMyAccount";if(b&&!a){$(".js-db-slide-in-menu li a").on("click",function(){window.location.href="/myaccount.html?entryTab="+$(this).attr("data-tab-name")
})}else{bindCustomerDBDropDownForDesktop()}});function triggerShowDashBoardSideMenu(a){var c=$("#logged-in-status")!=undefined&&$("#logged-in-status")!=null&&$("#logged-in-status").val()=="true";
var b=$("#loggedin")!=undefined&&$("#loggedin")!=null&&$("#loggedin").val()=="true";if(b||c){showDashBoardSideMenu()
}else{showLoginAndFireEvent(LoginSource.NAV_BAR)}}function showDashBoardSideMenu(){$(".db-menu-vertical").toggleClass("db-menu-open");
$(".modal-screen").toggle();$(".db-menu-vertical").show();if($("#bs-example-navbar-collapse-1").hasClass("in")){$("#navbarToggleButton").trigger("click")
}if($("#db-menu-s1").hasClass("db-menu-open")){$("#navbarToggleButton").attr("data-target","#");$("body").css("overflow","hidden").css("height","100%");
$("html").css("overflow","hidden").css("height","100%")}else{if(!$("#db-menu-s1").hasClass("db-menu-open")){resetSideMenuAndNavBar()
}}}function resetSideMenuAndNavBar(){$("body").css("overflow","").css("height","");$("html").css("overflow","").css("height","");
$("#navbarToggleButton").attr("data-target","#bs-example-navbar-collapse-1")}function bindCustomerDBDropDownForDesktop(){$(".js-menu-db-dropdown").on("click",function(){window.location.href="/myaccount.html?entryTab="+$(this).attr("data-user-db-tab-name")
});$("#my-account-link").on("click",function(){window.location.href="/myaccount.html?entryTab=username_label"
})}SocialLogin={init:function(){SocialLogin.FB.init();SocialLogin.GPLUS.init();SocialLogin.LINKEDIN.init()
},loginStatus:function(){return $("#logged-in-status").val()=="true"},login:function(b,g,d,a,c,f){var e={"user.email":typeof b=="undefined"?g:b,"user.password":g,"user.firstName":typeof d=="undefined"?"":d,"user.lastName":typeof a=="undefined"?"":a,"user.customerType":c,profileImage:f,isBootstrapPage:$("#isBootstrapPage").val(),_spring_security_remember_me:"true",isSocialAutoLogin:social_auto_login};
$.ajax({cache:false,url:"/signin_social.html",data:e,type:"post",success:function(h){if(typeof $.unblockUI=="function"){$.unblockUI()
}var j=getNativeSignInElement();if(typeof j.modal=="function"){j.modal("hide")}$("#login-status").html(h);
$("input#loggedin").val("true");$(".connect-bb").slideUp(1000);$("#previous-section-indicator").hide();
$("body").trigger("customerLoggedIn");$(".hide-upon-login").addClass("dontshow");$("#login-status-span").on("mouseenter",function(){$("#login-status-span").addClass("open")
});$("#login-status-span").on("mouseleave",function(){$("#login-status-span").removeClass("open")});if(window.location.hash&&window.location.hash=="#_=_"){window.location.hash=""
}window.location.href=new URI().removeSearch("code");trackLoginSuccessEvent(h)},error:function(){if("FACEBOOK"==c){trackingLoginError("fbLoginError")
}else{if("GOOGLE"==c){trackingLoginError("googleLoginError")}}}})}};SocialLogin.FB={initialized:false,POST_LOGIN_URL_PARAM:"/?code=",POST_LOGIN_URL_PARAM2:"&code=",signIn:function(){FB.api("/me?fields=email,id,first_name,last_name,picture",function(a){SocialLogin.login(a.email,a.id,a.first_name,a.last_name,"FACEBOOK",a.picture.data.url)
})},getPostLoginUri:function(){return window.location.href},isFBLoggedIn:function(){return(window.location.href.indexOf(SocialLogin.FB.POST_LOGIN_URL_PARAM)!=-1||window.location.href.indexOf(SocialLogin.FB.POST_LOGIN_URL_PARAM2)!=-1)
},init:function(){if(!SocialLogin.FB.initialized){SocialLogin.FB.initialized=true;$(".sign-in-box .sign-in-fb").live("click",function(){if(isMobileSite()){if(!SocialLogin.loginStatus()){FB.getLoginStatus(function(a){if(a.status=="connected"||a.session){SocialLogin.FB.signIn(a)
}else{if(a.authResponse){FB.api("/me/permissions",function(b){});SocialLogin.FB.signIn(a)}else{window.location="https://www.facebook.com/dialog/oauth?client_id=473486006089780&scope=email,user_about_me,user_birthday,user_location&redirect_uri="+encodeURIComponent(SocialLogin.FB.getPostLoginUri())
}}})}}else{if(!SocialLogin.loginStatus()){FB.login(function(a){if(a.session){SocialLogin.FB.signIn(a)
}else{if(a.authResponse){FB.api("/me/permissions",function(b){});SocialLogin.FB.signIn(a)}else{trackingLoginError("fbLoginError")
}}},{scope:"email, user_about_me, user_birthday, user_location"})}}});if(!SocialLogin.loginStatus()){SocialLogin.FB.logout()
}$("#sign-out-ajax").live("click",function(){removeSocialLoginCookie();SocialLogin.FB.logout()})}},logout:function(){function a(b){if(!b.session){FB.logout(a)
}}if(typeof FB!="undefined"){FB.getLoginStatus(a)}}};function SocialLogin_GPLUS_signIn(a){return SocialLogin.GPLUS.signIn(a)
}SocialLogin.GPLUS={parameters:{"class":"g-signin",clientid:"292169499198-2jvr5jk5p7o0mi75ir842dc9ud269p2n.apps.googleusercontent.com",cookiepolicy:"single_host_origin",callback:"SocialLogin_GPLUS_signIn",scope:"https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read"},initialized:false,signIn:function(a){if(gplus_auto_login_flag){if(!a.status["signed_in"]){removeSocialLoginCookie()
}else{reportAutoLoginEvent("login","google")}}function b(e){var d=e.emails.filter(function(f){return f.type==="account"
})[0].value;SocialLogin.login(d,e.id,e.name["givenName"],e.name["familyName"],"GOOGLE",e.image["url"])
}function c(){var d=gapi.client.plus.people.get({userId:"me"});d.execute(b)}if(a.status["signed_in"]){gapi.client.load("plus","v1",c)
}else{if((a.error["access_denied"])||(a.error["immediate_failed"])){trackingLoginError("googleLoginError")
}}},init:function(){if(!SocialLogin.GPLUS.initialized){SocialLogin.GPLUS.initialized=true;$(".sign-in-box .sign-in-google").live("click",function(){if(!SocialLogin.loginStatus()){gapi.auth.signIn(SocialLogin.GPLUS.parameters)
}});if(!SocialLogin.loginStatus()&&typeof gapi!="undefined"&&typeof gapi.auth!="undefined"){gapi.auth.signOut()
}$("#sign-out-ajax").live("click",function(){removeSocialLoginCookie();gapi.auth.signOut()})}},autologin:function(){if(gplus_auto_login_flag){gapi.auth.signIn(SocialLogin.GPLUS.parameters)
}}};SocialLogin.LINKEDIN={initialized:false,signIn:function(){IN.API.Profile("me").fields(["id","firstName","lastName","emailAddress","picture-url"]).result(function(a){profile=a.values[0];
if(SocialLogin.LINKEDIN.isAuthorized()){SocialLogin.login(profile.emailAddress,profile.id,profile.firstName,profile.lastName,"LINKEDIN",profile["picture-url"])
}})},init:function(){if(!SocialLogin.LINKEDIN.initialized){SocialLogin.LINKEDIN.initialized=true;$(".sign-in-box .sign-in-linked").live("click",function(){if(!SocialLogin.loginStatus()){IN.UI.Authorize().place();
IN.Event.onOnce(IN,"auth",SocialLogin.LINKEDIN.signIn)}});$("#sign-out-ajax").live("click",function(){IN.User.logout()
})}},isAuthorized:function(){return typeof IN.User!="undefined"&&IN.User.isAuthorized()}};function onLoadCallback(){gapi.client.setApiKey("AIzaSyD-5I9YepWc2VyWhSjZpIePv4TVzw6Jj6E");
gapi.client.load("plus","v1",function(){})}function loadSocialPlugin(){if(linkedin_flag==false){$.ajax({url:"https://platform.linkedin.com/in.js?async=true",dataType:"script",context:this,success:function(){IN.init({api_key:"77m6enmavtqgpa",authorize:true,onLoad:SocialLogin.LINKEDIN.init()});
linkedin_flag=true}})}if(glus_load_flag==false){var a="https://apis.google.com/js/client.js?onload=onLoadCallback'";
$.ajax({url:a,async:false,dataType:"script",context:this,success:function(){glus_load_flag=true}})}if(load_flag==false){var a="https://connect.facebook.net/en_US/all.js";
$.ajax({url:a,async:false,dataType:"script",context:this,success:function(){window.fbAsyncInit=function(){initFB();
if(SocialLogin.FB.isFBLoggedIn()||fb_auto_login_flag){FB.getLoginStatus(function(b){if(fb_auto_login_flag&&b.status!="connected"){removeSocialLoginCookie()
}else{if(fb_auto_login_flag){reportAutoLoginEvent("login","fb")}SocialLogin.FB.signIn(b)}})}load_flag=true
}}})}}NativeLogin={emailErrorMsg:function(){return NativeLogin.constructErrorMessage("Uh-oh! Please enter a valid email")
},pwdMinlengthErrorMsg:function(){return NativeLogin.constructErrorMessage("Uh-oh! Password should contain at least 8 characters")
},strongPwdErrorMsg:function(){return NativeLogin.constructErrorMessage("Uh-oh! Password must contain at least one digit (0-9) and one alphabet.")
},pwdReqdErrorMsg:function(){return NativeLogin.constructErrorMessage("Uh-oh! Password should contain at least 8 characters")
},confirmPWdErrorMsg:function(){return NativeLogin.constructErrorMessage("Uh-oh! Please enter the same password as above")
},validateSignupResult:function(a){var b="bbLoginSignUpError";if(a=="SUCCESS"){NativeLogin.onSuccessfulAuthentication("SignUp")
}else{if(a=="validation_error_weak"){$(".error-msg .error-info").html("Uh-oh! Password should be alphanumeric and at least 8 characters long");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow");trackingLoginError(b)
}else{if(a=="validation_error_username"){$(".error-msg .error-info").html("Uh-oh! Password should not be part of the username");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow");trackingLoginError(b)
}else{if(a=="existing_user"){$(".error-msg .error-info").html("Uh-oh! This user name already exists.");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow");trackingLoginError(b)
}else{$(".error-msg .error-info").html("Uh-oh! Your registration failed. Take another shot, please?");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow");trackingLoginError(b)
}}}}},validateSigninResult:function(a){var b="bbLoginSignInError";if(a=="SUCCESS"){NativeLogin.onSuccessfulAuthentication("SignIn")
}else{if(a=="AUTH_FAILURE"){$(".error-msg .error-info").html("Uh-oh! Please enter valid email id and password");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow");trackingLoginError(b)
}else{if(a=="input"){$(".error-msg .error-info").html("Uh-oh! Sign in failed. Please try again.");$(".error-msg").removeClass("dontshow");
$(".input-error-cl").removeClass("dontshow");trackingLoginError(b)}else{if(a=="ACCOUNT_LOCKED"){$(".error-msg .error-info").html("Uh-oh! Your account has been locked. Please reset your password & try again.");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow");trackingLoginError(b)
}}}}},validateForgotPassResult:function(a){if(a=="success"){var b=$("#popupForgotPassForm #email").val();
$("#activation_code_div #active_email").val(b);NativeLogin.showResetPassword()}else{if(a=="USER_NOT_FOUND"){$(".error-msg .error-info").html("Uh-oh! Unable to find this user. Are you sure that’s the right email ID?");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}else{$(".error-msg .error-info").html("Uh-oh! Unable to send your activation code. Take another shot, please?");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}}},validateVerificationCodeResult:function(a){if(a=="success"){var c=$("#popupActivationCodeForm #active_email").val();
$("#popupChangePasswordForm #change_email").val(c);var b=$("#popupActivationCodeForm #verifCode").val();
$("#popupChangePasswordForm #resetpassword_verifCode").val(b);NativeLogin.showChangePassword()}else{if(a=="activationCodeExpired"){$(".error-msg .error-info").html("Uh-oh! Activation code expired. Please try again");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}else{$(".error-msg .error-info").html("Uh-oh! Invalid activation code.");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}}},validateChangePasswordResult:function(a){if(a=="success"){NativeLogin.onSuccessfulAuthentication("ChangePassword")
}else{if(a=="input"){$(".error-msg .error-info").html("Uh-oh! username should not be part of password ");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow");NativeLogin.showChangePassword()
}else{if(a=="validation_error_weak"){$(".error-msg .error-info").html("Uh-oh! Password should be alphanumeric and at least 8 characters long");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}else{if(a=="validation_error_username"){$(".error-msg .error-info").html("Uh-oh! Password should not be part of the username");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}else{if(a=="validation_error_last_5"){$(".error-msg .error-info").html("Uh-oh! Password should not be same as current password");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}else{$(".error-msg .error-info").html("Uh-oh! Unable to change password . Take another shot, please?");
$(".error-msg").removeClass("dontshow");$(".input-error-cl").removeClass("dontshow")}}}}}},onSuccessfulAuthentication:function(a){getNativeSignInElement().modal("hide");
$(".saveForLater").addClass("dontshow");$("body").trigger("customerLoggedIn");$("#login-status").on("mouseenter",function(){$(".inline-block").addClass("open")
});$("#login-status").on("mouseleave",function(){$(".inline-block").removeClass("open")});$("#logged-in-status").val("true");
if($("#pageName")==null||($("#pageName").val()!="hello")){location.reload()}$("html,body").scrollTop(0);
trackLoginSuccessEvent("NATIVE_LOGIN",a)},errorPlacementFunction:function(b,a){$("label[name=serverSideError]").addClass("dontshow");
b.addClass("input-error-cl");b.insertAfter(a)},validateSignupForm:function(){signupValidator=$("#popupSignupForm").validate({rules:{"user.email":{required:true,email:true},"user.password":{required:true,minlength:8,strongPassword:true}},messages:{"user.email":NativeLogin.emailErrorMsg(),"user.password":{required:NativeLogin.pwdReqdErrorMsg(),minlength:NativeLogin.pwdMinlengthErrorMsg(),strongPassword:NativeLogin.strongPwdErrorMsg()}},highlight:function(a){$("label[name=serverSideError]").addClass("dontshow")
},errorPlacement:function(a,b){NativeLogin.errorPlacementFunction(a,b)}});return $("#popupSignupForm").valid()
},validateSigninForm:function(){signinValidator=$("#popupLoginForm").validate({rules:{"user.email":{required:true,email:true},"user.password":{required:true,minlength:8,strongPassword:true}},messages:{"user.email":NativeLogin.emailErrorMsg(),"user.password":{required:NativeLogin.pwdReqdErrorMsg(),minlength:NativeLogin.pwdMinlengthErrorMsg(),strongPassword:NativeLogin.strongPwdErrorMsg()}},highlight:function(a){$("label[name=serverSideError]").addClass("dontshow")
},errorPlacement:function(a,b){NativeLogin.errorPlacementFunction(a,b)}});return $("#popupLoginForm").valid()
},validateForgotPassForm:function(){forgotPwdValidator=$("#popupForgotPassForm").validate({rules:{email:{required:true,email:true}},messages:{email:NativeLogin.emailErrorMsg()},highlight:function(b){$("label[name=serverSideError]").addClass("dontshow")
},errorPlacement:function(b,c){NativeLogin.errorPlacementFunction(b,c)}});var a=$("#popupForgotPassForm #email").val();
$("#activation_code_div #active_email").val(a);return $("#popupForgotPassForm").valid()},validateActivationCodeForm:function(){activationCodeValidator=$("#popupActivationCodeForm").validate({rules:{verifCode:{required:true,number:true}},messages:{verifCode:NativeLogin.constructErrorMessage("Uh-oh! Please enter a valid verification code")},highlight:function(c){$("label[name=serverSideError]").addClass("dontshow")
},errorPlacement:function(c,d){NativeLogin.errorPlacementFunction(c,d)}});var b=$("#popupActivationCodeForm #active_email").val();
$("#popupChangePasswordForm #change_email").val(b);var a=$("#popupActivationCodeForm #verifCode").val();
$("#popupChangePasswordForm #resetpassword_verifCode").val(a);return $("#popupActivationCodeForm").valid()
},validateChangePasswordForm:function(){changePwdValidator=$("#popupChangePasswordForm").validate({rules:{password:{required:true,minlength:8,strongPassword:true},confirmPassword:{required:true,equalTo:"#popupChangePasswordForm [name='password']"}},messages:{password:{required:NativeLogin.pwdReqdErrorMsg(),minlength:NativeLogin.pwdMinlengthErrorMsg(),strongPassword:NativeLogin.strongPwdErrorMsg()},confirmPassword:{required:NativeLogin.pwdReqdErrorMsg(),equalTo:NativeLogin.confirmPWdErrorMsg()}},highlight:function(a){$("label[name=serverSideError]").addClass("dontshow")
},errorPlacement:function(a,b){NativeLogin.errorPlacementFunction(a,b)}});return $("#popupChangePasswordForm").valid()
},constructErrorMessage:function(b){var c="<table><tr><td><span class='error-icon'><img src='images/icon-error.png' alt='Error'/></span></td><td><span class='error-info'>";
var a="</span></td></tr></table>";return c+b+a},registerClicks:function(){$("#forgetpwd").click(function(){$("label[name=serverSideError]").addClass("dontshow");
$("#loginTabs").addClass("dontshow");$("#loginTabContent").addClass("dontshow");$("#reset_pwd_div").removeClass("dontshow")
});$("div[name=back_to_login]").click(function(){$("#reset_pwd_div").addClass("dontshow");$("#activation_code_div").addClass("dontshow");
$("#changePwd_div").addClass("dontshow");$("#loginTabs").removeClass("dontshow");$("#loginTabContent").removeClass("dontshow");
NativeLogin.clearForms()});$("#newUserTab").click(function(){$("#newuser").addClass("active");$("#exituser").removeClass("active");
$(".error .input-error-cl").addClass("dontshow");$("label[name=serverSideError]").addClass("dontshow");
signupValidator.resetForm()});$("#exitUserTab").click(function(){$("#exituser").addClass("active");$("#newuser").removeClass("active");
$(".error .input-error-cl").addClass("dontshow");$("label[name=serverSideError]").addClass("dontshow");
signinValidator.resetForm()});$(".loginbtn").click(function(){$("label[name=serverSideError]").addClass("dontshow")
})},clearForms:function(){$("label[name=serverSideError]").addClass("dontshow");$(".error .input-error-cl").addClass("dontshow");
signupValidator.resetForm();signinValidator.resetForm();forgotPwdValidator.resetForm();activationCodeValidator.resetForm();
changePwdValidator.resetForm()},showResetPassword:function(){$("#reset_pwd_div").addClass("dontshow");
$("#activation_code_div").removeClass("dontshow")},showChangePassword:function(){$("#activation_code_div").addClass("dontshow");
$("#changePwd_div").removeClass("dontshow")}};function showLoginAndFireEvent(a){loadSocialPlugin();SocialLogin.init();
var e=getNativeSignInElement();var b=LOGIN_TEXT;var c="loginAttempt";var d="Login to BankBazaar";if(a==LoginSource.SHORTLIST_OFFER){d="Login to Shortlist Offers"
}else{if(a==LoginSource.SAVE_FOR_LATER){d="Login to Save Offers"}else{if(a==LoginSource.APP_TRACK_STATUS){d="Account Setup"
}else{if(a==LoginSource.APP_EMAIL_LINK){d="Login to Email link"}else{if(a==LoginSource.APP_PAGE_STICKY){d="PSST... WHY NOT SIGN UP?"
}else{if(a==LoginSource.APP_SAVE){d="Login to Save Application"}}}}}}if($("#isBootstrapPage").val()=="true"){getNativeLoginViaAjax(a);
e.modal("show");e.find(".modal-title").text(d)}BB_trackGoogleEventWithLabel(b,c,a);addLoginTrackerElement(a)
}function iframeLoginListener(b){if((b.origin.indexOf(window.location.hostname)!=-1)&&(b.data!=null)){var a=b.data.split(";");
if(a.length>=2&&a[0]!=null&&a[1]!=null){if(a[0]=="signUp"){NativeLogin.validateSignupResult(a[1])}else{if(a[0]=="signIn"){NativeLogin.validateSigninResult(a[1])
}else{if(a[0]=="sendVerificationCode"){NativeLogin.validateForgotPassResult(a[1])}else{if(a[0]=="confirmVerificationCode"){NativeLogin.validateVerificationCodeResult(a[1])
}else{if(a[0]=="changePassword"){NativeLogin.validateChangePasswordResult(a[1])}}}}}}}}function showLogout(){$("#login-status-span").toggleClass("open")
}function addLoginTrackerElement(b){if($("#signInFrom").length>0){$("#signInFrom").val(b)}else{var a=$("<input>");
a.val(b);a.attr("id","signInFrom");a.attr("type","hidden");getNativeSignInElement().append(a)}}function createLoginResponseElement(a){var b=$("<input>");
b.attr("id","loginResponse");b.attr("type","hidden");b.html(a);getNativeSignInElement().append(b)}function trackLoginSuccessEvent(c,a){if((c!="NATIVE_LOGIN")&&(!$("#logged-in-type").length>0)){createLoginResponseElement(c)
}var b=$("#logged-in-type").val();var d;if("NATIVE_LOGIN"===c&&(("SignUp"==a)||("SignIn"==a))){d="bbLogin"+a
}else{if("FACEBOOK"===b){d="fbLogin";BB_trackGoogleEventWithLabel(LOGIN_TEXT,d+"-success-"+initial_fb_connected_status,getCurrentLoginSource())
}else{if("GOOGLE"===b){d="googleLogin"}}}BB_trackGoogleEventWithLabel(LOGIN_TEXT,d,getCurrentLoginSource())
}function getCurrentLoginSource(){return $("#signInFrom").val()}function isUserLoggedIn(){return($("#logged-in-status").val()=="true")
}function trackingLoginError(a){BB_trackGoogleEventWithLabel(LOGIN_TEXT,a,getCurrentLoginSource())}function getNativeSignInElement(){if($("#isBootstrapPage").val()!="true"){return $("#sign-in-box")
}else{return $("#js-sign-in-box")}}function getNativeLoginViaAjax(a){$.ajax({url:"/getNativeLoginWidget.html",async:false,success:function(b){$("#nativeLogin").html(b);
initTrackEvents($("#nativeLogin"));NativeLogin.registerClicks();if($("#popupActivationCodeForm").length>0){NativeLogin.validateSignupForm();
NativeLogin.validateSigninForm();NativeLogin.validateForgotPassForm();NativeLogin.validateActivationCodeForm();
NativeLogin.validateChangePasswordForm()}if(window.addEventListener){addEventListener("message",iframeLoginListener,false)
}else{attachEvent("onmessage",iframeLoginListener)}$("#signUpNative").on("click",function(c){if($("#popupSignupForm").valid()){BB_trackGoogleEventWithLabel("userData","enterEmail",a);
BB_trackGoogleEventWithLabel(LOGIN_TEXT,"bbLoginAttemptSignUp",getCurrentLoginSource())}});$("#signInNative").on("click",function(c){if($("#popupLoginForm").valid()){BB_trackGoogleEventWithLabel("userData","enterEmail",a);
BB_trackGoogleEventWithLabel(LOGIN_TEXT,"bbLoginAttempt",getCurrentLoginSource())}})}});if($("#popupActivationCodeForm").length>0){NativeLogin.clearForms()
}}function showLoginModal(){if(!isInternalAccess()&&$("input#loggedin").val()!="true"){SocialLogin.init();
getNativeSignInElement().modal("show")}}var LOGIN_TEXT="login";LoginSource={NAV_BAR:"navBar",EXIT_BLOCKER:"exitBlocker",HELLO_PAGE:"helloPage",GET_STARTED:"getStarted",SHORTLIST_OFFER:"shortlistOffer",SAVE_FOR_LATER:"saveForLater",APP_SAVE:"appSave",APP_EMAIL_LINK:"appEmailLink",APP_PAGE_STICKY:"appPageSticky",APP_TRACK_STATUS:"appTrackStatus",NAV_BAR_OLD:"navBarOld",HELP_CENTRE:"helpCentre",MY_ACCOUNT:"myAccount"};
var initial_fb_connected_status="NOT_SET";var gplus_auto_login_flag=false;var fb_auto_login_flag=false;
var social_auto_login=false;var LOGIN_SRC_FB="a0056698f3e52c773755a11d";var LOGIN_SRC_GPLUS="b5d582f836c4da9bc9f9b532";
var LOGIN_SRC_BB="ce8b591129885ac9005fc278ad86";$(document).ready(function(){$(document).on("hide.bs.modal","#js-sign-in-box",function(){if($("#pageName").val()=="newBootstrapAppPage"){$("#js-sign-in-box").find(".js-close").trigger("close")
}});$(".sign-in-fb").on("click",function(a){BB_trackGoogleEventWithLabel(LOGIN_TEXT,"fbLoginAttempt",getCurrentLoginSource());
FB.getLoginStatus(function(b){initial_fb_connected_status=b.status;BB_trackGoogleEventWithLabel(LOGIN_TEXT,"fbLoginAttempt-"+initial_fb_connected_status,getCurrentLoginSource())
})});$(".sign-in-google").on("click",function(a){BB_trackGoogleEventWithLabel(LOGIN_TEXT,"googleLoginAttempt",getCurrentLoginSource())
});if((isMobileSite()&&SocialLogin.FB.isFBLoggedIn())){loadSocialPlugin()}if(checkForAutoSocialLogin()){if(getLoggedInTypeFromCookie()==LOGIN_SRC_FB){social_auto_login=true;
fb_auto_login_flag=true;loadSocialPlugin()}else{if(getLoggedInTypeFromCookie()==LOGIN_SRC_GPLUS){social_auto_login=true;
gplus_auto_login_flag=true;loadSocialPlugin();SocialLogin.init();setTimeout(SocialLogin_GPLUS_autologin,1000)
}}}else{if(getLoggedInTypeFromCookie()==LOGIN_SRC_BB){if(!sessionStorage.bb_login_reported_flag&&checkIfAutoLoginFromCookie()){reportAutoLoginEvent("login","BB");
sessionStorage.bb_login_reported_flag=true}}}});function SocialLogin_GPLUS_autologin(){SocialLogin.GPLUS.autologin()
}function checkForAutoSocialLogin(){if(isUserLoggedIn()){return false}if(!getLoggedInTypeFromCookie()||getLoggedInTypeFromCookie()==LOGIN_SRC_BB){return false
}return true}function removeSocialLoginCookie(){reportAutoLoginEvent("logout",getLoggedInTypeFromCookiePlain());
$.removeCookie("slc_t")}function getLoggedInTypeFromCookie(){return $.cookie("slc_t")}function getLoggedInTypeFromCookiePlain(){var a=getLoggedInTypeFromCookie();
if(a==LOGIN_SRC_FB){return"fb"}else{if(a==LOGIN_SRC_GPLUS){return"google"}else{return"native"}}}function checkIfAutoLoginFromCookie(){return !($.cookie("slc_f"))
}function reportAutoLoginEvent(a,b){BB_trackGoogleEventWithLabel(LOGIN_TEXT,b+"-auto-"+a,getLoggedInTypeFromCookiePlain())
}
/*! URI.js v1.15.1 http://medialize.github.io/URI.js/ */
(function(b,a){"object"===typeof exports?module.exports=a():"function"===typeof define&&define.amd?define(a):b.IPv6=a(b)
})(this,function(b){var a=b&&b.IPv6;return{best:function(k){k=k.toLowerCase().split(":");var m=k.length,c=8;
""===k[0]&&""===k[1]&&""===k[2]?(k.shift(),k.shift()):""===k[0]&&""===k[1]?k.shift():""===k[m-1]&&""===k[m-2]&&k.pop();
m=k.length;-1!==k[m-1].indexOf(".")&&(c=7);var d;for(d=0;d<m&&""!==k[d];d++){}if(d<c){for(k.splice(d,1,"0000");
k.length<c;){k.splice(d,0,"0000")}}for(d=0;d<c;d++){for(var m=k[d].split(""),f=0;3>f;f++){if("0"===m[0]&&1<m.length){m.splice(0,1)
}else{break}}k[d]=m.join("")}var m=-1,p=f=0,j=-1,o=!1;for(d=0;d<c;d++){o?"0"===k[d]?p+=1:(o=!1,p>f&&(m=j,f=p)):"0"===k[d]&&(o=!0,j=d,p=1)
}p>f&&(m=j,f=p);1<f&&k.splice(m,f,"");m=k.length;c="";""===k[0]&&(c=":");for(d=0;d<m;d++){c+=k[d];if(d===m-1){break
}c+=":"}""===k[m-1]&&(c+=":");return c},noConflict:function(){b.IPv6===this&&(b.IPv6=a);return this}}
});(function(P){function M(e){throw RangeError(G[e])}function N(g,h){for(var k=g.length;k--;){g[k]=h(g[k])
}return g}function m(f,g){return N(f.split(O),g).join(".")}function Q(g){for(var n=[],p=0,l=g.length,h,q;
p<l;){h=g.charCodeAt(p++),55296<=h&&56319>=h&&p<l?(q=g.charCodeAt(p++),56320==(q&64512)?n.push(((h&1023)<<10)+(q&1023)+65536):(n.push(h),p--)):n.push(h)
}return n}function K(e){return N(e,function(g){var h="";65535<g&&(g-=65536,h+=A(g>>>10&1023|55296),g=56320|g&1023);
return h+=A(g)}).join("")}function c(e,g){return e+22+75*(26>e)-((0!=g)<<5)}function J(g,l,n){var h=0;
g=n?j(g/700):g>>1;for(g+=j(g/l);455<g;h+=36){g=j(g/35)}return j(h+36*g/(g+38))}function F(y){var t=[],u=y.length,p,B=0,w=128,v=72,n,l,z,q,h;
n=y.lastIndexOf("-");0>n&&(n=0);for(l=0;l<n;++l){128<=y.charCodeAt(l)&&M("not-basic"),t.push(y.charCodeAt(l))
}for(n=0<n?n+1:0;n<u;){l=B;p=1;for(z=36;;z+=36){n>=u&&M("invalid-input");q=y.charCodeAt(n++);q=10>q-48?q-22:26>q-65?q-65:26>q-97?q-97:36;
(36<=q||q>j((2147483647-B)/p))&&M("overflow");B+=q*p;h=z<=v?1:z>=v+26?26:z-v;if(q<h){break}q=36-h;p>j(2147483647/q)&&M("overflow");
p*=q}p=t.length+1;v=J(B-l,p,0==l);j(B/p)>2147483647-w&&M("overflow");w+=j(B/p);B%=p;t.splice(B++,0,w)
}return K(t)}function a(v){var w,p,u,E,C,y,n,l,D,b=[],h,R,B;v=Q(v);h=v.length;w=128;p=0;C=72;for(y=0;
y<h;++y){D=v[y],128>D&&b.push(A(D))}for((u=E=b.length)&&b.push("-");u<h;){n=2147483647;for(y=0;y<h;++y){D=v[y],D>=w&&D<n&&(n=D)
}R=u+1;n-w>j((2147483647-p)/R)&&M("overflow");p+=(n-w)*R;w=n;for(y=0;y<h;++y){if(D=v[y],D<w&&2147483647<++p&&M("overflow"),D==w){l=p;
for(n=36;;n+=36){D=n<=C?1:n>=C+26?26:n-C;if(l<D){break}B=l-D;l=36-D;b.push(A(c(D+B%l,0)));l=j(B/l)}b.push(A(c(l,0)));
C=J(p,R,u==E);p=0;++u}}++p;++w}return b.join("")}var x="object"==typeof exports&&exports,L="object"==typeof module&&module&&module.exports==x&&module,H="object"==typeof global&&global;
if(H.global===H||H.window===H){P=H}var s,d=/^xn--/,I=/[^ -~]/,O=/\x2E|\u3002|\uFF0E|\uFF61/g,G={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=Math.floor,A=String.fromCharCode,o;
s={version:"1.2.3",ucs2:{decode:Q,encode:K},decode:F,encode:a,toASCII:function(e){return m(e,function(f){return I.test(f)?"xn--"+a(f):f
})},toUnicode:function(e){return m(e,function(f){return d.test(f)?F(f.slice(4).toLowerCase()):f})}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd){define(function(){return s
})}else{if(x&&!x.nodeType){if(L){L.exports=s}else{for(o in s){s.hasOwnProperty(o)&&(x[o]=s[o])}}}else{P.punycode=s
}}})(this);(function(b,a){"object"===typeof exports?module.exports=a():"function"===typeof define&&define.amd?define(a):b.SecondLevelDomains=a(b)
})(this,function(c){var a=c&&c.SecondLevelDomains,b={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch "},has:function(g){var d=g.lastIndexOf(".");
if(0>=d||d>=g.length-1){return !1}var f=g.lastIndexOf(".",d-1);if(0>=f||f>=d-1){return !1}var j=b.list[g.slice(d+1)];
return j?0<=j.indexOf(" "+g.slice(f+1,d)+" "):!1},is:function(g){var d=g.lastIndexOf(".");if(0>=d||d>=g.length-1||0<=g.lastIndexOf(".",d-1)){return !1
}var f=b.list[g.slice(d+1)];return f?0<=f.indexOf(" "+g.slice(0,d)+" "):!1},get:function(g){var d=g.lastIndexOf(".");
if(0>=d||d>=g.length-1){return null}var f=g.lastIndexOf(".",d-1);if(0>=f||f>=d-1){return null}var j=b.list[g.slice(d+1)];
return !j||0>j.indexOf(" "+g.slice(f+1,d)+" ")?null:g.slice(f+1)},noConflict:function(){c.SecondLevelDomains===this&&(c.SecondLevelDomains=a);
return this}};return b});(function(b,a){"object"===typeof exports?module.exports=a(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],a):b.URI=a(b.punycode,b.IPv6,b.SecondLevelDomains,b)
})(this,function(X,U,V,A){function Y(e,g){var f=1<=arguments.length,b=2<=arguments.length;if(!(this instanceof Y)){return f?b?new Y(e,g):new Y(e):new Y
}if(void 0===e){if(f){throw new TypeError("undefined is not a valid argument for URI")}e="undefined"!==typeof location?location.href+"":""
}this.href(e);return void 0!==g?this.absoluteTo(g):this}function S(b){return b.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")
}function c(b){return void 0===b?"Undefined":String(Object.prototype.toString.call(b)).slice(8,-1)}function R(b){return"Array"===c(b)
}function N(g,l){var k={},f,h;if("RegExp"===c(l)){k=null}else{if(R(l)){for(f=0,h=l.length;f<h;f++){k[l[f]]=!0
}}else{k[l]=!0}}f=0;for(h=g.length;f<h;f++){if(k&&void 0!==k[g[f]]||!k&&l.test(g[f])){g.splice(f,1),h--,f--
}}return g}function a(g,l){var k,f;if(R(l)){k=0;for(f=l.length;k<f;k++){if(!a(g,l[k])){return !1}}return !0
}var h=c(l);k=0;for(f=g.length;k<f;k++){if("RegExp"===h){if("string"===typeof g[k]&&g[k].match(l)){return !0
}}else{if(g[k]===l){return !0}}}return !1}function L(f,h){if(!R(f)||!R(h)||f.length!==h.length){return !1
}f.sort();h.sort();for(var g=0,e=f.length;g<e;g++){if(f[g]!==h[g]){return !1}}return !0}function T(b){return escape(b)
}function P(b){return encodeURIComponent(b).replace(/[!'()*]/g,T).replace(/\*/g,"%2A")}function K(b){return function(f,e){if(void 0===f){return this._parts[b]||""
}this._parts[b]=f||null;this.build(!e);return this}}function m(b,e){return function(g,f){if(void 0===g){return this._parts[b]||""
}null!==g&&(g+="",g.charAt(0)===e&&(g=g.substring(1)));this._parts[b]=g;this.build(!f);return this}}var Q=A&&A.URI;
Y.version="1.15.1";var W=Y.prototype,O=Object.prototype.hasOwnProperty;Y._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:Y.duplicateQueryParameters,escapeQuerySpace:Y.escapeQuerySpace}
};Y.duplicateQueryParameters=!1;Y.escapeQuerySpace=!0;Y.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;Y.idn_expression=/[^a-z0-9\.-]/i;
Y.punycode_expression=/(xn--)/i;Y.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;Y.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
Y.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;
Y.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};
Y.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};Y.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;
Y.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};
Y.getDomAttribute=function(b){if(b&&b.nodeName){var e=b.nodeName.toLowerCase();return"input"===e&&"image"!==b.type?void 0:Y.domAttributes[e]
}};Y.encode=P;Y.decode=decodeURIComponent;Y.iso8859=function(){Y.encode=escape;Y.decode=unescape};Y.unicode=function(){Y.encode=P;
Y.decode=decodeURIComponent};Y.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};
Y.encodeQuery=function(b,f){var e=Y.encode(b+"");void 0===f&&(f=Y.escapeQuerySpace);return f?e.replace(/%20/g,"+"):e
};Y.decodeQuery=function(b,f){b+="";void 0===f&&(f=Y.escapeQuerySpace);try{return Y.decode(f?b.replace(/\+/g,"%20"):b)
}catch(e){return b}};var s={encode:"encode",decode:"decode"},M,J=function(b,e){return function(g){try{return Y[e](g+"").replace(Y.characters[b][e].expression,function(h){return Y.characters[b][e].map[h]
})}catch(f){return g}}};for(M in s){Y[M+"PathSegment"]=J("pathname",s[M]),Y[M+"UrnPathSegment"]=J("urnpath",s[M])
}s=function(b,f,e){return function(g){var n;n=e?function(k){return Y[f](Y[e](k))}:Y[f];g=(g+"").split(b);
for(var l=0,h=g.length;l<h;l++){g[l]=n(g[l])}return g.join(b)}};Y.decodePath=s("/","decodePathSegment");
Y.decodeUrnPath=s(":","decodeUrnPathSegment");Y.recodePath=s("/","encodePathSegment","decode");Y.recodeUrnPath=s(":","encodeUrnPathSegment","decode");
Y.encodeReserved=J("reserved","encode");Y.parse=function(b,f){var e;f||(f={});e=b.indexOf("#");-1<e&&(f.fragment=b.substring(e+1)||null,b=b.substring(0,e));
e=b.indexOf("?");-1<e&&(f.query=b.substring(e+1)||null,b=b.substring(0,e));"//"===b.substring(0,2)?(f.protocol=null,b=b.substring(2),b=Y.parseAuthority(b,f)):(e=b.indexOf(":"),-1<e&&(f.protocol=b.substring(0,e)||null,f.protocol&&!f.protocol.match(Y.protocol_expression)?f.protocol=void 0:"//"===b.substring(e+1,e+3)?(b=b.substring(e+3),b=Y.parseAuthority(b,f)):(b=b.substring(e+1),f.urn=!0)));
f.path=b;return f};Y.parseHost=function(g,l){var k=g.indexOf("/"),f;-1===k&&(k=g.length);if("["===g.charAt(0)){f=g.indexOf("]"),l.hostname=g.substring(1,f)||null,l.port=g.substring(f+2,k)||null,"/"===l.port&&(l.port=null)
}else{var h=g.indexOf(":");f=g.indexOf("/");h=g.indexOf(":",h+1);-1!==h&&(-1===f||h<f)?(l.hostname=g.substring(0,k)||null,l.port=null):(f=g.substring(0,k).split(":"),l.hostname=f[0]||null,l.port=f[1]||null)
}l.hostname&&"/"!==g.substring(k).charAt(0)&&(k++,g="/"+g);return g.substring(k)||"/"};Y.parseAuthority=function(b,e){b=Y.parseUserinfo(b,e);
return Y.parseHost(b,e)};Y.parseUserinfo=function(e,g){var f=e.indexOf("/"),b=e.lastIndexOf("@",-1<f?f:e.length-1);
-1<b&&(-1===f||b<f)?(f=e.substring(0,b).split(":"),g.username=f[0]?Y.decode(f[0]):null,f.shift(),g.password=f[0]?Y.decode(f.join(":")):null,e=e.substring(b+1)):(g.username=null,g.password=null);
return e};Y.parseQuery=function(h,t){if(!h){return{}}h=h.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");
if(!h){return{}}for(var r={},b=h.split("&"),q=b.length,p,l,n=0;n<q;n++){p=b[n].split("="),l=Y.decodeQuery(p.shift(),t),p=p.length?Y.decodeQuery(p.join("="),t):null,O.call(r,l)?("string"===typeof r[l]&&(r[l]=[r[l]]),r[l].push(p)):r[l]=p
}return r};Y.build=function(b){var e="";b.protocol&&(e+=b.protocol+":");b.urn||!e&&!b.hostname||(e+="//");
e+=Y.buildAuthority(b)||"";"string"===typeof b.path&&("/"!==b.path.charAt(0)&&"string"===typeof b.hostname&&(e+="/"),e+=b.path);
"string"===typeof b.query&&b.query&&(e+="?"+b.query);"string"===typeof b.fragment&&b.fragment&&(e+="#"+b.fragment);
return e};Y.buildHost=function(b){var e="";if(b.hostname){e=Y.ip6_expression.test(b.hostname)?e+("["+b.hostname+"]"):e+b.hostname
}else{return""}b.port&&(e+=":"+b.port);return e};Y.buildAuthority=function(b){return Y.buildUserinfo(b)+Y.buildHost(b)
};Y.buildUserinfo=function(b){var e="";b.username&&(e+=Y.encode(b.username),b.password&&(e+=":"+Y.encode(b.password)),e+="@");
return e};Y.buildQuery=function(h,t,r){var b="",q,p,l,n;for(p in h){if(O.call(h,p)&&p){if(R(h[p])){for(q={},l=0,n=h[p].length;
l<n;l++){void 0!==h[p][l]&&void 0===q[h[p][l]+""]&&(b+="&"+Y.buildQueryParameter(p,h[p][l],r),!0!==t&&(q[h[p][l]+""]=!0))
}}else{void 0!==h[p]&&(b+="&"+Y.buildQueryParameter(p,h[p],r))}}}return b.substring(1)};Y.buildQueryParameter=function(b,f,e){return Y.encodeQuery(b,e)+(null!==f?"="+Y.encodeQuery(f,e):"")
};Y.addQuery=function(e,g,f){if("object"===typeof g){for(var b in g){O.call(g,b)&&Y.addQuery(e,b,g[b])
}}else{if("string"===typeof g){void 0===e[g]?e[g]=f:("string"===typeof e[g]&&(e[g]=[e[g]]),R(f)||(f=[f]),e[g]=(e[g]||[]).concat(f))
}else{throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")}}};Y.removeQuery=function(e,g,f){var b;
if(R(g)){for(f=0,b=g.length;f<b;f++){e[g[f]]=void 0}}else{if("RegExp"===c(g)){for(b in e){g.test(b)&&(e[b]=void 0)
}}else{if("object"===typeof g){for(b in g){O.call(g,b)&&Y.removeQuery(e,b,g[b])}}else{if("string"===typeof g){void 0!==f?"RegExp"===c(f)?!R(e[g])&&f.test(e[g])?e[g]=void 0:e[g]=N(e[g],f):e[g]===f?e[g]=void 0:R(e[g])&&(e[g]=N(e[g],f)):e[g]=void 0
}else{throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter")
}}}}};Y.hasQuery=function(f,k,h,b){if("object"===typeof k){for(var g in k){if(O.call(k,g)&&!Y.hasQuery(f,g,k[g])){return !1
}}return !0}if("string"!==typeof k){throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter")
}switch(c(h)){case"Undefined":return k in f;case"Boolean":return f=Boolean(R(f[k])?f[k].length:f[k]),h===f;
case"Function":return !!h(f[k],k,f);case"Array":return R(f[k])?(b?a:L)(f[k],h):!1;case"RegExp":return R(f[k])?b?a(f[k],h):!1:Boolean(f[k]&&f[k].match(h));
case"Number":h=String(h);case"String":return R(f[k])?b?a(f[k],h):!1:f[k]===h;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
}};Y.commonPath=function(f,h){var g=Math.min(f.length,h.length),e;for(e=0;e<g;e++){if(f.charAt(e)!==h.charAt(e)){e--;
break}}if(1>e){return f.charAt(0)===h.charAt(0)&&"/"===f.charAt(0)?"/":""}if("/"!==f.charAt(e)||"/"!==h.charAt(e)){e=f.substring(0,e).lastIndexOf("/")
}return f.substring(0,e+1)};Y.withinString=function(z,y,w){w||(w={});var v=w.start||Y.findUri.start,u=w.end||Y.findUri.end,n=w.trim||Y.findUri.trim,t=/[a-z0-9-]=["']?$/i;
for(v.lastIndex=0;;){var b=v.exec(z);if(!b){break}b=b.index;if(w.ignoreHtml){var l=z.slice(Math.max(b-3,0),b);
if(l&&t.test(l)){continue}}var l=b+z.slice(b).search(u),p=z.slice(b,l).replace(n,"");w.ignore&&w.ignore.test(p)||(l=b+p.length,p=y(p,b,l,z),z=z.slice(0,b)+p+z.slice(l),v.lastIndex=b+p.length)
}v.lastIndex=0;return z};Y.ensureValidHostname=function(b){if(b.match(Y.invalid_hostname_characters)){if(!X){throw new TypeError('Hostname "'+b+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available')
}if(X.toASCII(b).match(Y.invalid_hostname_characters)){throw new TypeError('Hostname "'+b+'" contains characters other than [A-Z0-9.-]')
}}};Y.noConflict=function(b){if(b){return b={URI:this.noConflict()},A.URITemplate&&"function"===typeof A.URITemplate.noConflict&&(b.URITemplate=A.URITemplate.noConflict()),A.IPv6&&"function"===typeof A.IPv6.noConflict&&(b.IPv6=A.IPv6.noConflict()),A.SecondLevelDomains&&"function"===typeof A.SecondLevelDomains.noConflict&&(b.SecondLevelDomains=A.SecondLevelDomains.noConflict()),b
}A.URI===this&&(A.URI=Q);return this};W.build=function(b){if(!0===b){this._deferred_build=!0}else{if(void 0===b||this._deferred_build){this._string=Y.build(this._parts),this._deferred_build=!1
}}return this};W.clone=function(){return new Y(this)};W.valueOf=W.toString=function(){return this.build(!1)._string
};W.protocol=K("protocol");W.username=K("username");W.password=K("password");W.hostname=K("hostname");
W.port=K("port");W.query=m("query","?");W.fragment=m("fragment","#");W.search=function(f,g){var e=this.query(f,g);
return"string"===typeof e&&e.length?"?"+e:e};W.hash=function(f,g){var e=this.fragment(f,g);return"string"===typeof e&&e.length?"#"+e:e
};W.pathname=function(b,f){if(void 0===b||!0===b){var e=this._parts.path||(this._parts.hostname?"/":"");
return b?(this._parts.urn?Y.decodeUrnPath:Y.decodePath)(e):e}this._parts.path=this._parts.urn?b?Y.recodeUrnPath(b):"":b?Y.recodePath(b):"/";
this.build(!f);return this};W.path=W.pathname;W.href=function(b,l){var k;if(void 0===b){return this.toString()
}this._string="";this._parts=Y._parts();var h=b instanceof Y,g="object"===typeof b&&(b.hostname||b.path||b.pathname);
b.nodeName&&(g=Y.getDomAttribute(b),b=b[g]||"",g=!1);!h&&g&&void 0!==b.pathname&&(b=b.toString());if("string"===typeof b||b instanceof String){this._parts=Y.parse(String(b),this._parts)
}else{if(h||g){for(k in h=h?b._parts:b,h){O.call(this._parts,k)&&(this._parts[k]=h[k])}}else{throw new TypeError("invalid input")
}}this.build(!l);return this};W.is=function(w){var v=!1,u=!1,t=!1,p=!1,l=!1,b=!1,g=!1,n=!this._parts.urn;
this._parts.hostname&&(n=!1,u=Y.ip4_expression.test(this._parts.hostname),t=Y.ip6_expression.test(this._parts.hostname),v=u||t,l=(p=!v)&&V&&V.has(this._parts.hostname),b=p&&Y.idn_expression.test(this._parts.hostname),g=p&&Y.punycode_expression.test(this._parts.hostname));
switch(w.toLowerCase()){case"relative":return n;case"absolute":return !n;case"domain":case"name":return p;
case"sld":return l;case"ip":return v;case"ip4":case"ipv4":case"inet4":return u;case"ip6":case"ipv6":case"inet6":return t;
case"idn":return b;case"url":return !this._parts.urn;case"urn":return !!this._parts.urn;case"punycode":return g
}return null};var x=W.protocol,o=W.port,j=W.hostname;W.protocol=function(b,e){if(void 0!==b&&b&&(b=b.replace(/:(\/\/)?$/,""),!b.match(Y.protocol_expression))){throw new TypeError('Protocol "'+b+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]")
}return x.call(this,b,e)};W.scheme=W.protocol;W.port=function(b,e){if(this._parts.urn){return void 0===b?"":this
}if(void 0!==b&&(0===b&&(b=null),b&&(b+="",":"===b.charAt(0)&&(b=b.substring(1)),b.match(/[^0-9]/)))){throw new TypeError('Port "'+b+'" contains characters other than [0-9]')
}return o.call(this,b,e)};W.hostname=function(b,f){if(this._parts.urn){return void 0===b?"":this}if(void 0!==b){var e={};
Y.parseHost(b,e);b=e.hostname}return j.call(this,b,f)};W.host=function(b,e){if(this._parts.urn){return void 0===b?"":this
}if(void 0===b){return this._parts.hostname?Y.buildHost(this._parts):""}Y.parseHost(b,this._parts);this.build(!e);
return this};W.authority=function(b,e){if(this._parts.urn){return void 0===b?"":this}if(void 0===b){return this._parts.hostname?Y.buildAuthority(this._parts):""
}Y.parseAuthority(b,this._parts);this.build(!e);return this};W.userinfo=function(b,f){if(this._parts.urn){return void 0===b?"":this
}if(void 0===b){if(!this._parts.username){return""}var e=Y.buildUserinfo(this._parts);return e.substring(0,e.length-1)
}"@"!==b[b.length-1]&&(b+="@");Y.parseUserinfo(b,this._parts);this.build(!f);return this};W.resource=function(b,f){var e;
if(void 0===b){return this.path()+this.search()+this.hash()}e=Y.parse(b);this._parts.path=e.path;this._parts.query=e.query;
this._parts.fragment=e.fragment;this.build(!f);return this};W.subdomain=function(b,f){if(this._parts.urn){return void 0===b?"":this
}if(void 0===b){if(!this._parts.hostname||this.is("IP")){return""}var e=this._parts.hostname.length-this.domain().length-1;
return this._parts.hostname.substring(0,e)||""}e=this._parts.hostname.length-this.domain().length;e=this._parts.hostname.substring(0,e);
e=new RegExp("^"+S(e));b&&"."!==b.charAt(b.length-1)&&(b+=".");b&&Y.ensureValidHostname(b);this._parts.hostname=this._parts.hostname.replace(e,b);
this.build(!f);return this};W.domain=function(b,f){if(this._parts.urn){return void 0===b?"":this}"boolean"===typeof b&&(f=b,b=void 0);
if(void 0===b){if(!this._parts.hostname||this.is("IP")){return""}var e=this._parts.hostname.match(/\./g);
if(e&&2>e.length){return this._parts.hostname}e=this._parts.hostname.length-this.tld(f).length-1;e=this._parts.hostname.lastIndexOf(".",e-1)+1;
return this._parts.hostname.substring(e)||""}if(!b){throw new TypeError("cannot set domain empty")}Y.ensureValidHostname(b);
!this._parts.hostname||this.is("IP")?this._parts.hostname=b:(e=new RegExp(S(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(e,b));
this.build(!f);return this};W.tld=function(f,g){if(this._parts.urn){return void 0===f?"":this}"boolean"===typeof f&&(g=f,f=void 0);
if(void 0===f){if(!this._parts.hostname||this.is("IP")){return""}var e=this._parts.hostname.lastIndexOf("."),e=this._parts.hostname.substring(e+1);
return !0!==g&&V&&V.list[e.toLowerCase()]?V.get(this._parts.hostname)||e:e}if(f){if(f.match(/[^a-zA-Z0-9-]/)){if(V&&V.is(f)){e=new RegExp(S(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(e,f)
}else{throw new TypeError('TLD "'+f+'" contains characters other than [A-Z0-9]')}}else{if(!this._parts.hostname||this.is("IP")){throw new ReferenceError("cannot set TLD on non-domain host")
}e=new RegExp(S(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(e,f)}}else{throw new TypeError("cannot set TLD empty")
}this.build(!g);return this};W.directory=function(b,f){if(this._parts.urn){return void 0===b?"":this}if(void 0===b||!0===b){if(!this._parts.path&&!this._parts.hostname){return""
}if("/"===this._parts.path){return"/"}var e=this._parts.path.length-this.filename().length-1,e=this._parts.path.substring(0,e)||(this._parts.hostname?"/":"");
return b?Y.decodePath(e):e}e=this._parts.path.length-this.filename().length;e=this._parts.path.substring(0,e);
e=new RegExp("^"+S(e));this.is("relative")||(b||(b="/"),"/"!==b.charAt(0)&&(b="/"+b));b&&"/"!==b.charAt(b.length-1)&&(b+="/");
b=Y.recodePath(b);this._parts.path=this._parts.path.replace(e,b);this.build(!f);return this};W.filename=function(b,h){if(this._parts.urn){return void 0===b?"":this
}if(void 0===b||!0===b){if(!this._parts.path||"/"===this._parts.path){return""}var g=this._parts.path.lastIndexOf("/"),g=this._parts.path.substring(g+1);
return b?Y.decodePathSegment(g):g}g=!1;"/"===b.charAt(0)&&(b=b.substring(1));b.match(/\.?\//)&&(g=!0);
var f=new RegExp(S(this.filename())+"$");b=Y.recodePath(b);this._parts.path=this._parts.path.replace(f,b);
g?this.normalizePath(h):this.build(!h);return this};W.suffix=function(b,h){if(this._parts.urn){return void 0===b?"":this
}if(void 0===b||!0===b){if(!this._parts.path||"/"===this._parts.path){return""}var g=this.filename(),f=g.lastIndexOf(".");
if(-1===f){return""}g=g.substring(f+1);g=/^[a-z0-9%]+$/i.test(g)?g:"";return b?Y.decodePathSegment(g):g
}"."===b.charAt(0)&&(b=b.substring(1));if(g=this.suffix()){f=b?new RegExp(S(g)+"$"):new RegExp(S("."+g)+"$")
}else{if(!b){return this}this._parts.path+="."+Y.recodePath(b)}f&&(b=Y.recodePath(b),this._parts.path=this._parts.path.replace(f,b));
this.build(!h);return this};W.segment=function(l,t,h){var r=this._parts.urn?":":"/",q=this.path(),n="/"===q.substring(0,1),q=q.split(r);
void 0!==l&&"number"!==typeof l&&(h=t,t=l,l=void 0);if(void 0!==l&&"number"!==typeof l){throw Error('Bad segment "'+l+'", must be 0-based integer')
}n&&q.shift();0>l&&(l=Math.max(q.length+l,0));if(void 0===t){return void 0===l?q:q[l]}if(null===l||void 0===q[l]){if(R(t)){q=[];
l=0;for(var p=t.length;l<p;l++){if(t[l].length||q.length&&q[q.length-1].length){q.length&&!q[q.length-1].length&&q.pop(),q.push(t[l])
}}}else{if(t||"string"===typeof t){""===q[q.length-1]?q[q.length-1]=t:q.push(t)}}}else{t?q[l]=t:q.splice(l,1)
}n&&q.unshift("");return this.path(q.join(r),h)};W.segmentCoded=function(b,l,k){var g,h;"number"!==typeof b&&(k=l,l=b,b=void 0);
if(void 0===l){b=this.segment(b,l,k);if(R(b)){for(g=0,h=b.length;g<h;g++){b[g]=Y.decode(b[g])}}else{b=void 0!==b?Y.decode(b):void 0
}return b}if(R(l)){for(g=0,h=l.length;g<h;g++){l[g]=Y.decode(l[g])}}else{l="string"===typeof l||l instanceof String?Y.encode(l):l
}return this.segment(b,l,k)};var d=W.query;W.query=function(b,h){if(!0===b){return Y.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
}if("function"===typeof b){var g=Y.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=b.call(this,g);
this._parts.query=Y.buildQuery(e||g,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
this.build(!h);return this}return void 0!==b&&"string"!==typeof b?(this._parts.query=Y.buildQuery(b,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!h),this):d.call(this,b,h)
};W.setQuery=function(b,l,k){var g=Y.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof b||b instanceof String){g[b]=void 0!==l?l:null
}else{if("object"===typeof b){for(var h in b){O.call(b,h)&&(g[h]=b[h])}}else{throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
}}this._parts.query=Y.buildQuery(g,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
"string"!==typeof b&&(k=l);this.build(!k);return this};W.addQuery=function(b,h,g){var e=Y.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
Y.addQuery(e,b,void 0===h?null:h);this._parts.query=Y.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
"string"!==typeof b&&(g=h);this.build(!g);return this};W.removeQuery=function(b,h,g){var e=Y.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
Y.removeQuery(e,b,h);this._parts.query=Y.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
"string"!==typeof b&&(g=h);this.build(!g);return this};W.hasQuery=function(b,h,g){var e=Y.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
return Y.hasQuery(e,b,h,g)};W.setSearch=W.setQuery;W.addSearch=W.addQuery;W.removeSearch=W.removeQuery;
W.hasSearch=W.hasQuery;W.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
};W.normalizeProtocol=function(b){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!b));
return this};W.normalizeHostname=function(b){this._parts.hostname&&(this.is("IDN")&&X?this._parts.hostname=X.toASCII(this._parts.hostname):this.is("IPv6")&&U&&(this._parts.hostname=U.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!b));
return this};W.normalizePort=function(b){"string"===typeof this._parts.protocol&&this._parts.port===Y.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!b));
return this};W.normalizePath=function(b){var p=this._parts.path;if(!p){return this}if(this._parts.urn){return this._parts.path=Y.recodeUrnPath(this._parts.path),this.build(!b),this
}if("/"===this._parts.path){return this}var n,h="",l,g;"/"!==p.charAt(0)&&(n=!0,p="/"+p);p=p.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");
n&&(h=p.substring(1).match(/^(\.\.\/)+/)||"")&&(h=h[0]);for(;;){l=p.indexOf("/..");if(-1===l){break}else{if(0===l){p=p.substring(3);
continue}}g=p.substring(0,l).lastIndexOf("/");-1===g&&(g=l);p=p.substring(0,g)+p.substring(l+3)}n&&this.is("relative")&&(p=h+p.substring(1));
p=Y.recodePath(p);this._parts.path=p;this.build(!b);return this};W.normalizePathname=W.normalizePath;
W.normalizeQuery=function(b){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(Y.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!b));
return this};W.normalizeFragment=function(b){this._parts.fragment||(this._parts.fragment=null,this.build(!b));
return this};W.normalizeSearch=W.normalizeQuery;W.normalizeHash=W.normalizeFragment;W.iso8859=function(){var b=Y.encode,e=Y.decode;
Y.encode=escape;Y.decode=decodeURIComponent;try{this.normalize()}finally{Y.encode=b,Y.decode=e}return this
};W.unicode=function(){var b=Y.encode,e=Y.decode;Y.encode=P;Y.decode=unescape;try{this.normalize()}finally{Y.encode=b,Y.decode=e
}return this};W.readable=function(){var b=this.clone();b.username("").password("").normalize();var q="";
b._parts.protocol&&(q+=b._parts.protocol+"://");b._parts.hostname&&(b.is("punycode")&&X?(q+=X.toUnicode(b._parts.hostname),b._parts.port&&(q+=":"+b._parts.port)):q+=b.host());
b._parts.hostname&&b._parts.path&&"/"!==b._parts.path.charAt(0)&&(q+="/");q+=b.path(!0);if(b._parts.query){for(var p="",n=0,e=b._parts.query.split("&"),l=e.length;
n<l;n++){var h=(e[n]||"").split("="),p=p+("&"+Y.decodeQuery(h[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));
void 0!==h[1]&&(p+="="+Y.decodeQuery(h[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}q+="?"+p.substring(1)
}return q+=Y.decodeQuery(b.hash(),!0)};W.absoluteTo=function(b){var l=this.clone(),k=["protocol","username","password","hostname","port"],g,h;
if(this._parts.urn){throw Error("URNs do not have any generally defined hierarchical components")}b instanceof Y||(b=new Y(b));
l._parts.protocol||(l._parts.protocol=b._parts.protocol);if(this._parts.hostname){return l}for(g=0;h=k[g];
g++){l._parts[h]=b._parts[h]}l._parts.path?".."===l._parts.path.substring(-2)&&(l._parts.path+="/"):(l._parts.path=b._parts.path,l._parts.query||(l._parts.query=b._parts.query));
"/"!==l.path().charAt(0)&&(k=(k=b.directory())?k:0===b.path().indexOf("/")?"/":"",l._parts.path=(k?k+"/":"")+l._parts.path,l.normalizePath());
l.build();return l};W.relativeTo=function(b){var p=this.clone().normalize(),n,h,l,g;if(p._parts.urn){throw Error("URNs do not have any generally defined hierarchical components")
}b=(new Y(b)).normalize();n=p._parts;h=b._parts;l=p.path();g=b.path();if("/"!==l.charAt(0)){throw Error("URI is already relative")
}if("/"!==g.charAt(0)){throw Error("Cannot calculate a URI relative to another relative URI")}n.protocol===h.protocol&&(n.protocol=null);
if(n.username===h.username&&n.password===h.password&&null===n.protocol&&null===n.username&&null===n.password&&n.hostname===h.hostname&&n.port===h.port){n.hostname=null,n.port=null
}else{return p.build()}if(l===g){return n.path="",p.build()}b=Y.commonPath(p.path(),b.path());if(!b){return p.build()
}h=h.path.substring(b.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");n.path=h+n.path.substring(b.length);
return p.build()};W.equals=function(b){var p=this.clone();b=new Y(b);var n={},h={},l={},g;p.normalize();
b.normalize();if(p.toString()===b.toString()){return !0}n=p.query();h=b.query();p.query("");b.query("");
if(p.toString()!==b.toString()||n.length!==h.length){return !1}n=Y.parseQuery(n,this._parts.escapeQuerySpace);
h=Y.parseQuery(h,this._parts.escapeQuerySpace);for(g in n){if(O.call(n,g)){if(!R(n[g])){if(n[g]!==h[g]){return !1
}}else{if(!L(n[g],h[g])){return !1}}l[g]=!0}}for(g in h){if(O.call(h,g)&&!l[g]){return !1}}return !0};
W.duplicateQueryParameters=function(b){this._parts.duplicateQueryParameters=!!b;return this};W.escapeQuerySpace=function(b){this._parts.escapeQuerySpace=!!b;
return this};return Y});(function(b,a){"object"===typeof exports?module.exports=a(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],a):b.URITemplate=a(b.URI,b)
})(this,function(k,f){function j(e){if(j._cache[e]){return j._cache[e]}if(!(this instanceof j)){return new j(e)
}this.expression=e;j._cache[e]=this;return this}function d(e){this.data=e;this.cache={}}var a=f&&f.URITemplate,c=Object.prototype.hasOwnProperty,o=j.prototype,m={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};
j._cache={};j.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;j.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;
j.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;j.expand=function(v,u){var r=m[v.operator],n=r.named?"Named":"Unnamed",g=v.variables,y=[],x,l,s;
for(s=0;l=g[s];s++){x=u.get(l.name),x.val.length?y.push(j["expand"+n](x,r,l.explode,l.explode&&r.separator||",",l.maxlength,l.name)):x.type&&y.push("")
}return y.length?r.prefix+y.join(r.separator):""};j.expandNamed=function(C,A,z,y,e,G){var D="",r=A.encode;
A=A.empty_name_separator;var B=!C[r].length,x=2===C.type?"":k[r](G),E,s,F;s=0;for(F=C.val.length;s<F;
s++){e?(E=k[r](C.val[s][1].substring(0,e)),2===C.type&&(x=k[r](C.val[s][0].substring(0,e)))):B?(E=k[r](C.val[s][1]),2===C.type?(x=k[r](C.val[s][0]),C[r].push([x,E])):C[r].push([void 0,E])):(E=C[r][s][1],2===C.type&&(x=C[r][s][0])),D&&(D+=y),z?D+=x+(A||E?"=":"")+E:(s||(D+=k[r](G)+(A||E?"=":"")),2===C.type&&(D+=x+","),D+=E)
}return D};j.expandUnnamed=function(B,z,y,x,e){var E="",C=z.encode;z=z.empty_name_separator;var r=!B[C].length,A,v,s,D;
s=0;for(D=B.val.length;s<D;s++){e?v=k[C](B.val[s][1].substring(0,e)):r?(v=k[C](B.val[s][1]),B[C].push([2===B.type?k[C](B.val[s][0]):void 0,v])):v=B[C][s][1],E&&(E+=x),2===B.type&&(A=e?k[C](B.val[s][0].substring(0,e)):B[C][s][0],E+=A,E=y?E+(z||v?"=":""):E+","),E+=v
}return E};j.noConflict=function(){f.URITemplate===j&&(f.URITemplate=a);return j};o.expand=function(g){var p="";
this.parts&&this.parts.length||this.parse();g instanceof d||(g=new d(g));for(var n=0,l=this.parts.length;
n<l;n++){p+="string"===typeof this.parts[n]?this.parts[n]:j.expand(this.parts[n],g)}return p};o.parse=function(){var z=this.expression,y=j.EXPRESSION_PATTERN,w=j.VARIABLE_PATTERN,s=j.VARIABLE_NAME_PATTERN,g=[],C=0,r,n,x;
for(y.lastIndex=0;;){n=y.exec(z);if(null===n){g.push(z.substring(C));break}else{g.push(z.substring(C,n.index)),C=n.index+n[0].length
}if(!m[n[1]]){throw Error('Unknown Operator "'+n[1]+'" in "'+n[0]+'"')}if(!n[3]){throw Error('Unclosed Expression "'+n[0]+'"')
}r=n[2].split(",");for(var B=0,A=r.length;B<A;B++){x=r[B].match(w);if(null===x){throw Error('Invalid Variable "'+r[B]+'" in "'+n[0]+'"')
}if(x[1].match(s)){throw Error('Invalid Variable Name "'+x[1]+'" in "'+n[0]+'"')}r[B]={name:x[1],explode:!!x[3],maxlength:x[4]&&parseInt(x[4],10)}
}if(!r.length){throw Error('Expression Missing Variable(s) "'+n[0]+'"')}g.push({expression:n[0],operator:n[1],variables:r})
}g.length||g.push(z);this.parts=g;return this};d.prototype.get=function(h){var p=this.data,n={type:0,val:[],encode:[],encodeReserved:[]},l;
if(void 0!==this.cache[h]){return this.cache[h]}this.cache[h]=n;p="[object Function]"===String(Object.prototype.toString.call(p))?p(h):"[object Function]"===String(Object.prototype.toString.call(p[h]))?p[h](h):p[h];
if(void 0!==p&&null!==p){if("[object Array]"===String(Object.prototype.toString.call(p))){l=0;for(h=p.length;
l<h;l++){void 0!==p[l]&&null!==p[l]&&n.val.push([void 0,String(p[l])])}n.val.length&&(n.type=3)}else{if("[object Object]"===String(Object.prototype.toString.call(p))){for(l in p){c.call(p,l)&&void 0!==p[l]&&null!==p[l]&&n.val.push([l,String(p[l])])
}n.val.length&&(n.type=2)}else{n.type=1,n.val.push([void 0,String(p)])}}}return n};k.expand=function(e,n){var g=(new j(e)).expand(n);
return new k(g)};return j});(function(b,a){"object"===typeof exports?module.exports=a(require("jquery","./URI")):"function"===typeof define&&define.amd?define(["jquery","./URI"],a):a(b.jQuery,b.URI)
})(this,function(m,j){function k(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function s(g){var h=g.nodeName.toLowerCase();
return"input"===h&&"image"!==g.type?void 0:j.domAttributes[h]}function q(e){return{get:function(b){return m(b).uri()[e]()
},set:function(l,b){m(l).uri()[e](b);return b}}}function f(e,t){var r,n,u;if(!s(e)||!t){return !1}r=t.match(a);
if(!r||!r[5]&&":"!==r[2]&&!d[r[2]]){return !1}u=m(e).uri();if(r[5]){return u.is(r[5])}if(":"===r[2]){return n=r[1].toLowerCase()+":",d[n]?d[n](u,r[4]):!1
}n=r[1].toLowerCase();return p[n]?d[r[2]](u[n](),r[4],n):!1}var p={},d={"=":function(g,h){return g===h
},"^=":function(g,h){return !!(g+"").match(new RegExp("^"+k(h),"i"))},"$=":function(g,h){return !!(g+"").match(new RegExp(k(h)+"$","i"))
},"*=":function(g,n,l){"directory"===l&&(g+="/");return !!(g+"").match(new RegExp(k(n),"i"))},"equals:":function(g,h){return g.equals(h)
},"is:":function(g,h){return g.is(h)}};m.each("authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "),function(e,b){p[b]=!0;
m.attrHooks["uri:"+b]=q(b)});var c=function(e,h){return m(e).uri().href(h).toString()};m.each(["src","href","action","uri","cite"],function(e,h){m.attrHooks[h]={set:c}
});m.attrHooks.uri.get=function(e){return m(e).uri()};m.fn.uri=function(h){var u=this.first(),t=u.get(0),r=s(t);
if(!r){throw Error('Element "'+t.nodeName+'" does not have either property: href, src, action, cite')
}if(void 0!==h){var v=u.data("uri");if(v){return v.href(h)}h instanceof j||(h=j(h||""))}else{if(h=u.data("uri")){return h
}h=j(u.attr(r)||"")}h._dom_element=t;h._dom_attribute=r;h.normalize();u.data("uri",h);return h};j.prototype.build=function(e){if(this._dom_element){this._string=j.build(this._parts),this._deferred_build=!1,this._dom_element.setAttribute(this._dom_attribute,this._string),this._dom_element[this._dom_attribute]=this._string
}else{if(!0===e){this._deferred_build=!0}else{if(void 0===e||this._deferred_build){this._string=j.build(this._parts),this._deferred_build=!1
}}}return this};var o,a=/^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;o=m.expr.createPseudo?m.expr.createPseudo(function(e){return function(b){return f(b,e)
}}):function(h,n,l){return f(h,l[3])};m.expr[":"].uri=o;return m});var load_flag=false;var linkedin_flag=false;
var glus_load_flag=false;var google_plus_one_load_flag=false;var href=$(location).attr("href");var title=$(document).find("title").text();
var des=$("meta[property='og:description']");des=des.attr("content");var twitter_load_flag=false;$("#ascyn_fb_share,#ascyn_fb_share_custom").live("click",function(){if(load_flag==false){var a="https://connect.facebook.net/en_US/all.js";
$.ajax({url:a,async:false,dataType:"script",context:this,success:function(){window.fbAsyncInit=function(){initFB();
load_flag=true;fbShare($(this).attr("data-custom-text")!=null?$(this).attr("data-custom-text"):des)}}})
}else{fbShare($(this).attr("data-custom-text")!=null?$(this).attr("data-custom-text"):des)}});$("#async_twitter_share").live("click",function(){if(twitter_load_flag==false||typeof(twttr)=="undefined"){var a="https://platform.twitter.com/widgets.js";
$.ajax({url:a,async:false,dataType:"script",context:this,success:function(){twitter_load_flag=true;twttr.widgets.load();
twitterShare()}})}else{twitterShare()}});function twitterShare(a){BB_trackGoogleSocialEvent("twitter","share",href)
}function twitterShareMessage(e){var b="https://twitter.com/intent/tweet?text="+e;var c=600;var a=300;
var g=(($(window).height())-a)/2;var f=(($(window).width())-c)/2;var d="width="+c+", height="+a+", top="+g+", left="+f+", scrollbars=no, resizable=yes";
window.open(b,"_blank",d)}$("#ascyn_fb_like").live("click",function(){if(load_flag==false){var a="https://connect.facebook.net/en_US/all.js";
$.ajax({url:a,async:false,dataType:"script",context:this,success:function(){window.fbAsyncInit=function(){initFB();
load_flag=true;fbLike()}}})}else{fbLike()}});$(window).load(function(){setTimeout(function(){if(!google_plus_one_load_flag){var a="https://apis.google.com/js/platform.js";
$.ajax({url:a,async:false,dataType:"script",context:this,success:function(){google_plus_one_load_flag=true;
renderGPlus()}})}else{renderGPlus()}},2000)});function renderGPlus(){gapi.plusone.render("gplus-one",{annotation:"none",size:"medium",callback:"sendPlus"})
}function sendPlus(){BB_trackGoogleSocialEvent("google","+1",href)}function initFB(){FB.init({appId:"473486006089780",status:true,cookie:true,xfbml:true,version:"v2.0"})
}function fbLikeCall(){FB.api("https://graph.facebook.com/me/og.likes","post",{object:href},function(a){if(a.id!=""){$("#ascyn_fb_liked").show();
$("#ascyn_fb_like").hide();BB_trackGoogleSocialEvent("facebook","like",href)}})}function fbShare(c){var a=title;
var b=href;if($("#pageName").val()!=undefined&&$("#pageName").val()=="newBootstrapThankYouPage"){a=$("#ascyn_fb_share_custom").attr("fb_story_title");
b=$("#ascyn_fb_share_custom").attr("fb_story_redirect_url")}FB.ui({method:"feed",name:a,link:b,description:c},function(d){if(d&&d.post_id){BB_trackGoogleSocialEvent("facebook","share",href)
}})}function fbLike(){FB.getLoginStatus(function(a){if(a.status==="connected"){fbLikeCall()}else{FB.login(function(b){if(b.status=="connected"){fbLikeCall()
}})}})}$(function(){if($("#pageName").val()=="indexPage"){$("#flashSale").addClass("dontshow");$("#landingPageFlashSale").removeClass("dontshow")
}else{$("#flashSale").removeClass("dontshow");$("#landingPageFlashSale").addClass("dontshow")}$("span[class$=js-flashsale-cls-btn]").click(function(){setTimeout(function(){$("#landingPageFlashSale").fadeOut()
},300);setTimeout(function(){$("#flashSale").fadeIn()},200)});if($("#landingPageFlashSale").length>0){$("#flashSale").addClass("dontshow");
$("#landingPageFlashSale").removeClass("dontshow")}function c(){$("#newsletter_signup_form").ajaxForm({url:"/newsletter_signup.html",type:"post",dataType:"jsonp",jsonp:"jsonp_callback",beforeSubmit:function(){if($("#captcha-holder").is(":visible")){return true
}$("#captcha-holder").removeClass("hide");$(".footer-subscribe").addClass("subscribeextend");return false
},complete:function(d){$(".footer-subscribe").removeClass("subscribeextend");$("#captcha-holder").addClass("hide")
},success:function(d){$(".form-result").text(d.stringResult)}});$("#newsletter_signup_form").validate()
}initTypeAhead($("#company-dropdown-input"),"companies","/autoComplete.html?ajax=true&type=COMPANY&productTypeId="+$("#productTypeId").val(),5);
initTypeAhead($("#city-dropdown-input"),"cities","/autoComplete.html?ajax=true&type=CITY&productTypeId="+$("#productTypeId").val());
initTypeAhead($("#car-dropdown-input"),"car","/autoComplete.html?ajax=true&type=CAR&productTypeId="+$("#productTypeId").val());
enableDropdownSelectFields();bindingForSelectingAutoComplete();initializeRecommender({field:$("#company-dropdown-input"),reco:$("select[name='form.applicantPlaceHolder.companyName.recommend']"),getDataFromDifferentField:true,dataFromField:$("input[name='form.applicantPlaceHolder.companyName']")},"COMPANY","credit-card");
populateCity();setCityFieldBindings();setDOBFieldBindings();setCompanyFieldBindings();populateCar();setCarFieldBindings();
setIntendedLoanFieldBindings();minIntendedLoanAmountCheck();minSalaryCheck();setSalaryFieldBindings();
setDecidedFieldBindings();formatSalary();clearDropDownField();if($("#productTypeCategory").val()=="INSURANCE"){a();
setUpTrackingForSntcForm()}function a(){if($("select.trackDropDownChange").length==0){return}b();$("select.trackDropDownChange").each(function(){if(($(this).prev("input.dropDownChangeTracker")).val()=="false"){$(this).next("div").find(".filter-option").css({opacity:"0.3"})
}});$("select.trackDropDownChange").change(function(){var d=$(this).next("div");d.find(".filter-option").css({opacity:"1"});
d.removeClass("error-border-line");$(this).prev("input.dropDownChangeTracker").val("true");if($(".error-border-line").length==0){$(".el-sentence-error label").hide()
}})}function b(){$("select.trackDropDownChange").each(function(d,e){var f=$(this).attr("name");if($("input[name='"+f+"']:hidden").val()!=""){$(this).prev("input.dropDownChangeTracker").val("true")
}})}$("#eForm").submit(function(){if(!$("#eForm").valid()){window.scrollTo(0,0);return false}if($("#productNameSpace").val()!="car-insurance"&&$("#productNameSpace").val()!="life-insurance"&&$("#productNameSpace").val()!="health-insurance"){$("#waitModal").modal({backdrop:"static"});
$("#waitModal").modal("show");trackVirtualPagePath(true,"loadingoffers")}});$("#eForm_0").click(function(){$("#landingPageFlashSale").css("display","none");
if($("#productTypeCategory").val()=="INSURANCE"){BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,analyticsConstants.FORM_SUBMIT_ATTEMPT,$("#productNameSpace").val())
}});$("#eFormSentence").submit(function(){if(!$("#eFormSentence").valid()){if($("#productTypeCategory").val()=="INSURANCE"){BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,analyticsConstants.FORM_SUBMIT_ERROR,$("#productNameSpace").val())
}window.scrollTo(0,0);return false}else{if($("#productTypeCategory").val()=="INSURANCE"){BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,analyticsConstants.FORM_SUBMIT,$("#productNameSpace").val());
$(".el-sentence-form-ins").removeClass("check-eligibility-btn").addClass("loading-circle").html("Please wait..");
$.ajax({type:"POST",url:"/save-eligibility.html",async:false,data:$("#eFormSentence").serialize()})}}if($("#productNameSpace").val()!="car-insurance"){$("#waitModal").modal({backdrop:"static"});
$("#waitModal").modal("show");trackVirtualPagePath(true,"loadingoffers")}});c();if($("#pageName").val()!="searchPage"){initializeRating()
}initializePaginationForReviewLinks();initializeVoting();lazyLoadCustomerProfilePic();SocialLogin.init()
});$(".js-newsletter-subscribe-form").validate({rules:{EMAIL:{required:true,email:true}},messages:{EMAIL:constructErrorMessage("Uh-oh! Please enter a valid email")},unhighlight:function(b,a){$("#newsletter-subscribe-err").css("display","none")
},errorPlacement:function(a,b){$("#newsletter-subscribe-err").show()}});$(".js-sticky-subscribe-form").validate({rules:{EMAIL:{required:true,email:true}},messages:{EMAIL:constructErrorMessage("Please enter a valid email")},unhighlight:function(b,a){$("#mce-responses").css("display","none")
},errorPlacement:function(a,b){$("#mce-responses").after(a)}});$(document).ready(function(){$('[name="mc-newsletter-embedded-subscribe"]').click(function(b){var c=$(".js-newsletter-subscribe-form").valid();
if(c){$(this).prop("disabled",true);mailID=$(".js-newsletter-email").val();sourceValue=$("#mc_source_value").val();
sourceURL=window.location.href;subscribeToNewsLetterViaMC(mailID,sourceValue,sourceURL);alertMCSuccessMessage();
b.preventDefault()}else{return false}});$('[name="mc-sticky-embedded-subscribe"]').click(function(b){var c=$(".js-sticky-subscribe-form").valid();
if(c){$(this).prop("disabled",true);mailID=$(".js-sticky-email").val();sourceValue=$("#mc_source_value").val();
sourceURL=window.location.href;subscribeToNewsLetterViaMC(mailID,sourceValue,sourceURL);alertMCSuccessMessage();
b.preventDefault();$(".get-mail-top").addClass("dontshow")}else{return false}});function a(){$("#mc-embedded-subscribe-non-partner").click(function(){$(this).prop("disabled",true);
mailID=$("#nonPartnerPageEmail").val();sourceValue=$("#mc_source_value").val();sourceURL=window.location.href;
subscribeToNewsLetterViaMC(mailID,sourceValue,sourceURL);alertMCSuccessMessage();trackEnterEmailEvent(mailID,"offerNonPartner");
event.preventDefault()})}a()});$(".banner a[href^='#']").on("click",function(b){b.preventDefault();var a=this.hash;
$("html, body").animate({scrollTop:$(a).offset().top},0,function(){window.location.hash=a})});$(document).ready(function(){$(".subscribe-btn").click(function(){$(".footer-subscribe").addClass("subscribeextend")
})});$(document).bind("shown.bs.modal",function(){var a=$(".showHowBbWorks").find("iframe");if(a==null||a.size()==0){var b='<iframe rel="0&amp;" autohide="1&amp;" showinfo=0 autoplay=1 allowfullscreen="" src="https://www.youtube.com/embed/J9rI4luiZPc?rel=0" frameborder="0"></iframe>';
$(".showHowBbWorks").find(".modal-body").append(b)}});$(document).bind("hidden.bs.modal",function(){var a=$(".showHowBbWorks iframe").attr("src");
$(".showHowBbWorks iframe").attr("src","");$(".showHowBbWorks iframe").attr("src",a)});$(document).ready(function(){if($.browser.chrome){$("head").append('<style>/* Web Fonts*/ @font-face {    font-family: "webfont"; src: url("webfont.eot");    font-weight: normal;    font-style: normal; }</style>')
}});$(".dropdown-menu").find(".keep-open").click(function(a){a.stopPropagation()});function enableDropdownSelectFields(){$(".selectpicker").selectpicker({style:"btn-info"})
}function populateCity(){var a=$("#eFormSentence_form_applicantPlaceHolder_residenceCity_value").val();
if(a=="OTHER"){$("#city-other-input").removeClass("dontshow");$(".cityFieldDropdown").css("display","none").addClass("dontshow")
}}function setCityFieldBindings(){var a=function(c){$("#eFormSentence_form_applicantPlaceHolder_residenceCity_value").val(c)
};var b=function(c){if(c==""){c="Bangalore"}$("#eFormSentence_form_applicantPlaceHolder_residenceCity_fallback").val(c)
};$("#city-dropdown-input").keyup(function(){var c=$("#city-dropdown-input").val();b(c)});$("#city-dropdown-input").bind("typeahead:selected",function(e,c,d){var f=c.name;
b(f)});$("#eFormSentence_form_applicantPlaceHolder_residenceCity_value").change(function(){if($("#eFormSentence_form_applicantPlaceHolder_residenceCity_value").val()=="OTHER"){$("#city-other-input").removeClass("dontshow");
$(".cityFieldDropdown").addClass("dontshow");setTimeout(function(){$("#city-other-input").addClass("open");
$("#city-dropdown-input").focus()},300)}});$("#city-other-input").on("show.bs.dropdown",function(){setTimeout(function(){$("#city-dropdown-input").focus()
},500)})}function setCompanyFieldBindings(){var a=function(b){if(b==""){b="IBM CORP (IBM)"}$("#eFormSentence_form_applicantPlaceHolder_companyName").val(b)
};$("#company-dropdown-input").keyup(function(){var b=$("#company-dropdown-input").val();a(b)});$("#company-dropdown-input").bind("typeahead:selected",function(e,c,d){var b=c.name;
a(b)});$("#eFormSentence_form_applicantPlaceHolder_companyName_recommend").change(function(){var b=$("#eFormSentence_form_applicantPlaceHolder_companyName_recommend").val();
a(b);$("#did-you-mean-company").removeClass("orangedrop")});$("#company-dropdown-input").live("showRecommendationDropdown",function(){if(!$("#eFormSentence_form_applicantPlaceHolder_companyName").parent().hasClass("open")){$("#eFormSentence_form_applicantPlaceHolder_companyName").dropdown("toggle")
}});$("#company-dropdown").on("show.bs.dropdown",function(){setTimeout(function(){$("#company-dropdown-input").focus()
},500)})}function populateCar(){if($("#carName").val()=="OTHER"){$("#car-other-input").removeClass("dontshow");
$(".carFieldDropdown").addClass("dontshow");var a=$("#staggeredCarName").val();$("#eFormSentence_form_carName").val(a)
}}function setCarFieldBindings(){var a=function(b){if(b==""){b="MARUTI SUZUKI SWIFT LXI"}$("#eFormSentence_form_carName").val(b);
$("#staggeredCarName").val(b)};$("#car-dropdown-input").keyup(function(){var b=$("#car-dropdown-input").val();
a(b)});$("#car-dropdown-input").bind("typeahead:selected",function(e,c,d){var b=c.name;a(b)});$("#carName").change(function(){if($("#carName").val()=="OTHER"){$("#car-other-input").removeClass("dontshow");
$(".carFieldDropdown").addClass("dontshow");setTimeout(function(){$("#car-other-input").addClass("open");
$("#car-dropdown-input").focus()},300)}else{var b=$("#carName").val();a(b)}});$("#car-other-input").on("show.bs.dropdown",function(){setTimeout(function(){$("#car-dropdown-input").focus()
},500)})}function setDOBFieldBindings(){$("#dob-dropdown").on("show.bs.dropdown",function(){setTimeout(function(){$("#dob-date-input").focus()
},500)});$(".el-dob-sec").keyup(setDOBFieldBindingsHelper)}function isValidDOB(b,d,c,a){if(b!=""&&d!=""&&c!=""&&(validateCurrentDate($("#dob-date-input").val(),$("#dob-date-input")))&&(validDate($("#dob-date-input").val(),$("#dob-date-input")))){return true
}return false}function validateCurrentDate(g,d){var c=$(d).parents("li.wwgrp").find("input");if(c.length==0){c=$(d).parents("div.dob").find("input")
}var b=new Date();var e=$(c[0]).val();var h=$(c[1]).val();var f=$(c[2]).val();var a=new Date(f,h-1,e);
return b>=a}function validDate(e,b){var a=$(b).parents("li.wwgrp").find("input");if(a.length==0){a=$(b).parents("div.dob").find("input")
}var c=$(a[0]).val();var g=$(a[1]).val();var d=$(a[2]).val();if(c==""||g==""||d==""){return}var f=new Date(d,g-1,c);
if($(a[0]).is(":visible")){return !((f.getMonth()+1!=g)||(f.getDate()!=c)||(f.getFullYear()!=d)||(d<1900))
}return false}function setInputValue(a,b){$(a).val(b).change()}function handleInputFieldError(a,b){$(b).show();
$(a).error()}function setDOBFieldBindingsHelper(){var c=$("#dob-date-input").val();var g=$("#dob-month-input").val();
var d=$("#dob-year-input").val();var a=new Date(d,g-1,c);var b=getAge(a);var e=$(".el-dob-validation-message");
var f=$(".el-dob-validation-message label");if(isValidDOB(c,g,d,b)){f.html("");if(b<18){f.html("You are too young to apply!!");
handleInputFieldError($("#dob-input"),$(".el-dob-validation-message"));return}else{if(b>70){f.html("You are too old to apply!!");
handleInputFieldError($("#dob-input"),$(".el-dob-validation-message"));return}else{e.hide()}}setInputValue($("#dob-input"),b)
}else{$("#dob-input").val("");if(c!=""&&g!=""&&(d!=""&&d.length==4)){f.html("Please enter a valid date!!");
handleInputFieldError($("#dob-input"),$(".el-dob-validation-message"))}}}function setSalaryFieldBindings(){$("#monthly-salary-dropdown-input").keyup(setSalaryFieldBindingsHelper);
$("#salary-dropdown").on("show.bs.dropdown",function(){setTimeout(function(){$("#monthly-salary-dropdown-input").focus()
},500)});var b=$("#annual-salary-dropdown-input");if(b.length>0){var a=b.val().replace(/,/g,"");if(a!=""){setAnnualSalaryDisplay(a)
}$("#annual-earning-btn").click(function(){var c=$("#annual-salary-dropdown-input").val().replace(/,/g,"");
if(c=""||c<200000){setAnnualSalaryError($(".el-salary-validation-message"));handleInputFieldError($(".life-el-annual"),$(".el-salary-validation-message"))
}});b.keyup(setAnnualSalaryFieldBindingsHelper);b.keydown(function(){$(this).keyup()});$("#annual-salary-dropdown").on("show.bs.dropdown",function(){setTimeout(function(){b.focus()
},500)})}}function setAnnualSalaryDisplay(a){var b;a=parseFloat(new Number(a/100000).toFixed(2));b=a+" L";
setInputValue($(".life-el-annual.salary-view-mob"),b);$(".life-el-annual.salary-view-mob").width((b.length)*10);
b=a+" Lakhs";setInputValue($(".life-el-annual.salary-view"),b);$(".life-el-annual.salary-view").width((b.length)*22)
}function setAnnualSalaryError(a){$(".life-el-annual").val("");$(".life-el-annual.salary-view").width(130);
$(".el-salary-validation-message label").html("Hi, Enter your annual Salary!!");a.show()}function setAnnualSalaryFieldBindingsHelper(){var a=$("#annual-salary-dropdown-input").val().replace(/,/g,"");
var b=$(".el-salary-validation-message");if(a!=""&&a>=200000){setAnnualSalaryDisplay(a);b.hide()}else{setAnnualSalaryError(b)
}}function setSalaryFieldBindingsHelper(){if(typeof this!="undefined"&&typeof this.value!="undefined"){var a=getFormattedNumber(this.value.replace(/\D/g,""));
this.value=(a==0&&$(this).is(".number"))?"":a}var b=$("#monthly-salary-dropdown-input").val();if(b==""){b="50,000"
}if($("#productNameSpace").val()=="personal-loan"){$("#eFormSentence_form_details_applicant_income_monthlyTakeHomeSalary").val(b)
}else{$("#eFormSentence_form_details_applicant_income_grossMonthlyIncome").val(b)}$("#monthly-salary-dropdown-input").placeholder(b)
}function setIntendedLoanFieldBindings(){$("#intended-loan-amount-dropdown-input").keyup(function(){var a=getFormattedNumber(this.value.replace(/\D/g,""));
this.value=(a==0&&$(this).is(".number"))?"":a;var b=$("#intended-loan-amount-dropdown-input").val();if(b==""){b=$("#intended_loan_placeHolder_value").val()
}$("#eFormSentence_form_details_intended_loan_amount").val(b)});$("#intended-loan-amount-dropdown").on("show.bs.dropdown",function(){setTimeout(function(){$("#intended-loan-amount-dropdown-input").focus()
},500)})}function minIntendedLoanAmountCheck(){$("#intended-loan-amount-dropdown-input").blur(minIntendedLoanAmountCheckHelper)
}function minIntendedLoanAmountCheckHelper(){var b=$("#eFormSentence_form_details_intended_loan_amount").val();
var a;if(typeof b!="undefined"){b=b.replace(/,/g,"");if($("#productNameSpace").val()=="home-loan"){if(b<1000000){$("#eFormSentence_form_details_intended_loan_amount").val("10,00,000");
$("#intended-loan-amount-dropdown-input").val("10,00,000")}}else{if($("#productNameSpace").val()=="personal-loan"){if(b<10000){$("#eFormSentence_form_details_intended_loan_amount").val("10,000");
$("#intended-loan-amount-dropdown-input").val("10,000")}}}a=$("#eFormSentence_form_details_intended_loan_amount").val();
if(typeof a!="undefined"){if($("#isMobileSite").val()=="true"){$("#eFormSentence_form_details_intended_loan_amount").width((a.length)*18)
}else{$("#eFormSentence_form_details_intended_loan_amount").width((a.length)*23)}}}}function minSalaryCheck(){$("#monthly-salary-dropdown-input").blur(function(){var a=$("#monthly-salary-dropdown-input").val();
if(typeof a!="undefined"){a=a.replace(/,/g,"");if(a<5000&&a!=""){a="5,000";if($("#productNameSpace").val()=="personal-loan"){$("#eFormSentence_form_details_applicant_income_monthlyTakeHomeSalary").val(a)
}else{$("#eFormSentence_form_details_applicant_income_grossMonthlyIncome").val(a)}$("#monthly-salary-dropdown-input").placeholder(a)
}}})}function setDecidedFieldBindings(){var a=function(){if($("#carUndecided-from-display").val()=="true"){$("#car-collection-part").hide();
$("#not-decided-part").show()}else{$("#car-collection-part").show();$("#not-decided-part").hide()}};a();
$("#carUndecided-from-display").change(function(){a()})}function formatSalary(){var a;if($("#productNameSpace").val()=="personal-loan"){a=$("#eFormSentence_form_details_applicant_income_monthlyTakeHomeSalary").val();
if(a!=undefined&&(!a.NaN)&&(a!="")&&(a!="N/A")){$("#eFormSentence_form_details_applicant_income_monthlyTakeHomeSalary").val(getFormattedNumber(a))
}}else{a=$("#eFormSentence_form_details_applicant_income_grossMonthlyIncome").val();if(a!=undefined&&(!a.NaN)&&(a!="")&&(a!="N/A")){$("#eFormSentence_form_details_applicant_income_grossMonthlyIncome").val(getFormattedNumber(a))
}}}function clearDropDownField(){if($(".dropdown .dropdown-menu .input-group").find("input[type=text]").val()!=undefined||$(".dropdown .dropdown-menu .input-group").find("input[type=text]").val()!=""){$(".dropdown .dropdown-menu .input-group").find("input[type=text]").val("")
}}function isVariantOptionPresent(a){var b=$("#variantOptions").val();if(typeof b!="undefined"&&b.indexOf(a)>-1){return true
}return false}function isMobile(d){var b=""+d;var c=/^[9|8|7]\d{9}/;var a=c.exec(b);console.log(a);if(a==null){return false
}else{return true}}function bindingForSelectingAutoComplete(){$(".tt-dropdown-menu").click(function(a){a.stopPropagation()
})}$("document").ready(function(){setTimeout(function(){$(".product-landing-btn-block a").addClass("animation-target")
},3000);if($("#eFormSentence_form_applicantPlaceHolder_residenceCity_fallback").val()!=""){$("#city-dropdown-input").blur()
}});$(window).load(function(){minIntendedLoanAmountCheckHelper();var a=setTimeout(function(){$("div.cityFieldDropdown").addClass("open").hide().fadeIn("slow").css("display","")
},3000);$("div.cityFieldDropdown").click(function(){clearTimeout(a)});if($("#searchAlreadyDone").val()=="true"){clearTimeout(a)
}var b=$("#productNameSpace").val();var c=$("#mode").val();if(b=="credit-card"){preLoadImages(false)}else{if(b=="car-insurance"||b=="life-insurance"||b=="health-insurance"){preLoadImages(true)
}else{if(b=="personal-loan"||b=="home-loan"||b=="car-loan"){if($("#eForm_form_details_uiParameters_mode").val()=="slide"||$("#eForm_form_details_uiParameters_catStyleNeeded").val()=="true"||$("#eForm_form_details_uiParameters_mode").val()=="seo"||$("#variantName").val()=="true"){preLoadImages(false)
}else{preLoadImages(true)}}else{if(!b&&c=="insurance"){preLoadImages(true,c)}}}}});$(function(){$("#scrollup").hide();
$(window).scroll(function(){if($(document).height()>1600){if(($(this).scrollTop()>1600)&&$(".screen-block-grey").hasClass("dontshow")){$("#scrollup").fadeIn()
}else{$("#scrollup").fadeOut()}}});$("#scrollup a").click(function(){$("body,html").animate({scrollTop:0},800);
return false})});function hookBackButtonForModal(b,a){b.on("show.bs.modal",function(f){var d=window.location+"#"+a;
var c={search:a};history.pushState(c,"",d)});$(window).on("popstate",function(){$(".modal").each(function(){if($(this).hasClass("in")){var c="#"+($(this).attr("id"));
$(c).modal("hide")}})})}function constructErrorMessage(b){var c="<table><tr><td><span class='error-icon'><img src='images/icon-error.png'/></span></td><td><span class='error-info'>";
var a="</span></td></tr></table>";return c+b+a}var tabberOptions=undefined;var LEAD_SRC=undefined;var cdnDomain=$("#cdnDomain").val();
if($("#insurance_link_needed").val()){tabberOptions={onClick:function(e){var b=e.tabber;var d=b.id;var a=e.index;
if(d=="myacc_tab"&&a==1){var c=window.open($("#mpAegonLink").val()+"/verifyOwnershipForm.html?fromMP=true","_blank");
c.focus();return false}}}}var fadeTime=3000;jQuery.extend({getCachedUrl:function(a,c,d,b){if(jQuery.isFunction(c)){b=b||d;
d=c;c=undefined}return jQuery.ajax({type:"GET",url:a,data:c,success:d,dataType:b,cache:true})},getCachedScript:function(a,b){return jQuery.getCachedUrl(a,undefined,b,"script")
}});String.prototype.startsWith=function(a){return(this.indexOf(a)===0)};$.validator.addMethod("strongPassword",function(a,b){return/[0-9]/.test(a)&&/[a-zA-Z]/.test(a)
},"Password must contain at least one digit (0-9) and one alphabet.");function showFeedbackForm(){$("div.SuggestSuccess").addClass("dontshow");
$("div.suggest").removeClass("dontshow")}function dispBlockUI(){var executeBeforeStr=$(this).attr("executeBefore");
var message_selector=$(this).attr("rel");var this_metadata=$.extend(true,{},$(this).metadata());eval(executeBeforeStr);
var default_param={width:495,height:310,left:35,top:100};var div_width=(this_metadata.css&&this_metadata.css.width=="source_width"&&(delete this_metadata.css["width"])!=null)?$(this).width():(!isNaN(parseInt(this_metadata.width)))?parseInt(this_metadata.width):default_param.width,div_height=(this_metadata.css&&this_metadata.css.height=="source_height"&&(delete this_metadata.css["height"])!=null)?$(this).height():(!isNaN(parseInt(this_metadata.height)))?parseInt(this_metadata.height):default_param.height;
var div_top=(this_metadata.css&&this_metadata.css.top=="centered"&&(delete this_metadata.css["top"])!=null)?$(window).height()/2-div_height/2:default_param.top+"px";
var div_left=(this_metadata.css&&this_metadata.css.left=="centered"&&(delete this_metadata.css["left"])!=null)?$(window).width()/2-div_width/2:((this_metadata.css&&this_metadata.css.left&&this_metadata.css.left.length>=2&&this_metadata.css.left[0]=="bd_relative"&&(delete this_metadata.css["left"])!=null)?(($("#bd").position().left+$(this).metadata().css.left[1])+"px"):default_param.left+"%");
var default_blockUI_param={css:{padding:0,margin:0,width:div_width+"px",height:div_height+"px",top:div_top,left:div_left,color:"#000",border:"0px none",backgroundColor:"transparent",textAlign:"left",cursor:"auto",zIndex:10000,focusInput:"false"},applyPlatformOpacityRules:false,overlayCSS:{backgroundColor:"#000000",opacity:"0.5"},focusInput:false,message:$(message_selector)};
var default_blockUI_param_clone=$.extend(true,{},default_blockUI_param);var default_blockUI_param_2=$.extend(true,default_blockUI_param_clone,{css:{width:"592px",height:"auto",top:"5%",left:($("#bd").position().left+156)+"px"}});
default_blockUI_param=(this_metadata.defaultParam=="_592_auto_5pc_bd156_"&&(delete this_metadata.defaultParam)!=null)?default_blockUI_param_2:default_blockUI_param;
var merged_blockUI_param=$.extend(true,{},default_blockUI_param);$.extend(true,merged_blockUI_param,this_metadata);
jQuery.blockUI(merged_blockUI_param);var executeAfter=$(this).attr("executeAfter");if(executeAfter){eval(executeAfter)
}}function addValidatorRule(a,b){if(a.length<1){return}if(typeof a.rules=="function"){a.rules("add",b)
}}function removeValidatorRule(a,b){if(a.length<1){return}if(typeof a.rules=="function"){a.rules("remove",b)
}}function addLoadEvent(a){var b=window.onload;if(typeof b!="function"){window.onload=a}else{window.onload=function(){b();
a()}}}function toWords(g){var n=["","Thousand","Lakh","Crore"];var p=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var e=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
var m=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];var b="";function c(r){var j=[];
var q=true;while(r.length>2){var s=(q&&r.length>=3)?3:2;q=false;j.push(r.substr(r.length-s,s));r=r.substr(0,r.length-s)
}if(r!=""){j.push(r)}return j}function d(j){if(j==""){return j}var q=parseInt(j,10);if(q==0){return""
}if(q<10){return p[q]}else{if(q>=10&&q<20){return e[q-10]}else{return m[parseInt(j.charAt(0))]+" "+p[parseInt(j.charAt(1))]
}}}g=g.replace(/[\, ]/g,"");if(g!=parseFloat(g)){return"not a number"}var f=[];if(g.indexOf(".")>-1){f=g.split(".");
g=f[0]}var k=0;while(g.length>0){var a=[];if(g.length>7){a=c(g.substr(g.length-7));g=g.substr(0,g.length-7)
}else{a=c(g);g=""}var o="";console.log(a);for(var l=0;l<a.length;l++){var h=a[l];if(parseInt(h)==0){}else{if(h.length==3){o=p[parseInt(h.charAt(0))]+" Hundred and "+d(h.substr(1))+" "+n[l]+" "+o
}else{o=d(h)+" "+n[l]+" "+o}}console.log(o)}b=(k!=0)?o+" Crore"+b:o+((f.length==0)?" Only":"");k++}if(f.length>1){g=f[1];
if(g>0){b=b+" point ";for(var l=0;l<g.length;l++){b=b+p[parseInt(g.charAt(l))]+" "}}}return b.replace(/\s+/g," ")
}function setCharSetValidations(){function a(b){var c=b.getAttribute("allowedcharset");if(c!=""){b.value=b.value.replace(new RegExp("[^"+c+"]","g"),"")
}}$("input[allowedCharSet]").each(function(){a(this)}).keyup(function(){a(this)})}function tnrConvert(c){var b=Math.floor(c/12);
var a=c%12;var d=b>1?b+" years ":(b==1?"1 Year ":"");var e=a>0?a+" Months":"";return d+e}function isSEM(){var b=document.location.search.substring(1).split("&");
for(var a=0;a<b.length;a++){if(b[a]=="WT.srch=1"){return true}}return false}function isInternalAccess(){return $("#internalAccess").size()>0?$("#internalAccess").val()=="true":false
}function isDevelopmentEnv(){return !($("#stageValue").length>0)||$("#stageValue").val()=="dev"}function isJawrDebug(){return !($("#jawrDebug").length>0)||$("#jawrDebug").val()=="true"
}function isProductionEnv(){return !($("#stageValue").length>0)||$("#stageValue").val()=="prod"}function isValidmobile_nri(a){return a.length>4&&!isNaN(a)
}function isMSIE(){return navigator.userAgent.indexOf("MSIE")>-1}function isOldMSIE(){return(navigator.userAgent.indexOf("MSIE 7")>-1||navigator.userAgent.indexOf("MSIE 6")>-1)
}function isCookieEnabled(){var a=navigator.cookieEnabled;if(typeof navigator.cookieEnabled=="undefined"&&!a){document.cookie="testcookie";
a=(document.cookie.indexOf("testcookie")!=-1)}return(a)}function getURLParameter(a){return encodeURIComponent(decodeURIComponent((RegExp(a+"=(.+?)(&|$)").exec(location.search)||[,null])[1])).replace(/[!'()]/g,escape).replace(/\*/g,"%2A")
}function popup(b,d,c){var a=window.open(b,d,c);if(a!=null&&typeof(a)!="undefined"){a.focus()}}function goToAnchor(a){document.location.href=document.location.href.split("#")[0]+"#"+a
}function isHLTransfer(){if(document.location.pathname.indexOf("refinance")!=-1){return true}return getURLParameter("hltransfer")=="true"
}function prefetch(){var a=$("div.prefetch");a.filter('[rel$=".txt"],[rel$=".xml"],[rel~=".js"],[rel~=".css"]').each(function(){$.ajax({url:$(this).attr("rel"),dataType:"text"})
});a.filter('[rel$=".js"]').each(function(){var c=JAWR.loader.getURLs($(this).attr("rel"),"js");for(var b=0;
b<c.length;b++){$.ajax({url:c[b],dataType:"text"})}});a.filter('[rel$=".css"]').each(function(){var c=JAWR.loader.getURLs($(this).attr("rel"),"css");
for(var b=0;b<c.length;b++){$.ajax({url:c[b],dataType:"text"})}});a.filter('[rel$=".png"],[rel$=".jpg"],[rel$=".jpeg"],[rel$=".gif"],[rel$=".swf"]').each(function(){$.get($(this).attr("rel"))
})}function css_lazy_load(){$("div.lazyloadcss").each(function(){var c=$(this).attr("rel");var e=JAWR.loader.getURLs(c,"css");
for(var b=0;b<e.length;b++){var a=e[b];var d=$("<link />").attr({rel:"stylesheet",type:"text/css",media:"screen",href:a});
$("body").append(d)}})}function invoke(b){if(typeof b=="string"&&typeof window[b]=="function"){b=window[b]
}if(typeof b=="function"){var a=Array.prototype.splice.call(arguments,1);return b.apply(null,a)}return 0
}function js_lazy_load(){var c=[];function d(g){if(typeof g=="undefined"||$.trim(g)==""){return true}var e=g.split(",");
for(var f=0;f<e.length;f++){if($.inArray($.trim(e[f]),c)==-1){return false}}return true}function b(h,e,g){var f=e?e:0;
if(f>=h.length){return}$.when($.getCachedScript(h[f])).done(function(j,k){c.push($.trim(h[f]));if(h[f+1]!=undefined){b(h,f+1,g)
}else{if(typeof g!="undefined"){invoke(window[g])}}}).fail(function(l,k,j){b(h,f+1,g);alert("failed to load:"+h[f]+"\n Exception:"+j.message)
})}function a(f){if(d(f.dependencies)){var h=JAWR.loader.getURLs(f.src,"js");if(isDevelopmentEnv()&&isJawrDebug()){b(h,0,f.func);
c.push($.trim(f.src))}else{for(var e=0;e<h.length;e++){var g=$.getCachedScript(h[e]).done(function(j,k){setTimeout(function(){invoke(window[f.func]);
c.push($.trim(f.src))},100)})}}}else{setTimeout(function(){a(f)},500)}}$("div.lazyloadjs").each(function(){a($(this).metadata())
})}function lazyLoadContent(){$(".lazy-load").each(function(){var b=$(this),a=b.metadata().src;if((window.location.protocol=="https:")&&(a=="/social-tools/fb-like-header.html")){return
}$.get(a,{ajax:true,encodedUrl:encodeURIComponent(document.location.href)},function(c){b.html(c)});b.removeClass("dontshow")
});$(".lazy-load-images").each(function(){var b=$(this),a=b.metadata().src;if(b.is("img")){b.attr("src",a)
}else{b.attr("style","background-image:url("+a+")")}})}function setCurrentHeaderNav(){setHeaderNavForProduct(window.location.pathname)
}function changeNavBarAction(a){}var links=new Array();function setHeaderNavForProduct(a){if(a==undefined){return
}$("div.navBar td.selected").removeClass("selected");if(a.indexOf("loan-against-property")!=-1){$(".lap_link").addClass("selected")
}else{if(a.indexOf("myaccount")!=-1){$(".my_account").addClass("selected")}else{if(a.indexOf("about")!=-1){$(".about_link").addClass("selected");
changeNavBarAction($(".about_link"))}else{if(a.indexOf("careers")!=-1){$(".careers_link").addClass("selected");
changeNavBarAction($(".careers_link"))}else{if(a.indexOf("guide")!=-1){$(".guide_link").addClass("selected")
}else{if(a.indexOf("login.html")!=-1){$(".user_login").addClass("selected")}else{if(a.indexOf("verifyOwnershipForm.html")!=-1){$(".track_app").addClass("selected")
}else{urlToClassMap(a)}}}}}}}}function urlToClassMap(b){var a={"refinance-calculator":".hl_fin_link","home-loan-balance-transfer-calculator":".hl_fin_link","car-loan-emi-calculator":".cl_emi_link","home-loan-emi-calculator":".hl_emi_link","personal-loan-emi-calculator":".pl_emi_link","sip-savings-calculator":".sip_link","loan-repayment-tenure-calculator":".lrt_link","compound-interest-calculator":".cic_link","retirement-savings-calculator":".rets_link","emi-calculator":".emi_link","finance-tools":".fin_link","personal-loan":".pl_link","home-loan":".hl_link","car-loan":".cl_link","education-loan":".el_link","consumer-durable-loan":".cdl_link",loan:".loan_link","american-express-credit-card":".cc_amex_link","axis-credit-card":".cc_axis_link","citibank-credit-card":".cc_citi_link","hdfc-credit-card":".cc_hdfc_link","icici-credit-card":".cc_icici_link","indusind-credit-card":".cc_indusind_link","credit-card":".cc_link","axis-fixed-deposit-rate":".axis_fd_link","canara-bank-fixed-deposit-rate":".canara_fd_link","citibank-fixed-deposit-rate":".citi_fd_link","hdfc-fixed-deposit-rate":".hdfc_fd_link","icici-fixed-deposit-rate":".icici_fd_link","punjab-national-bank-fixed-deposit-rate":".pnb_fd_link","sbi-fixed-deposit-rate":".sbi_fd_link","andhra-bank-fixed-deposit-rate":".andhra_fd_link","united-bank-fixed-deposit-rate":".ubi_fd_link","yes-bank-fixed-deposit-rate":".yes_fd_link","indusind-fixed-deposit-rate":".indus_fd_link","central-bank-of-india-fixed-deposit-rate":".cbi_fd_link","standard-chartered-fixed-deposit-rate":".scb_fd_link","karur-vysya-bank-fixed-deposit-rate":".kyb_fd_link","hsbc-fixed-deposit-rate":".hsbc_fd_link","allahabad-bank-fixed-deposit-rate.":".allahabad_fd_link","bank-of-baroda-fixed-deposit-rate":".bob_fd_link","bank-of-india-fixed-deposit-rate":".boi_fd_link","indian-bank-fixed-deposit-rate":".indian_fd_link","ing-vysya-fixed-deposit-rate":".ing_fd_link","fixed-deposit-rate":".best_fd_link","fixed-deposit":".fd_link","life-insurance":".tli_link","customer-review":".reviewlink",reviews:".randr_link","ifsc-code":".ifsclink"};
for(key in a){if(b.indexOf(key)!=-1){$(a[key]).addClass("selected");changeNavBarAction($(a[key]));$($(a[key]).parent().parent("li")).addClass("highlight");
if((document.URL.indexOf("calculator")!=-1)){$(a["personal-loan"]).removeClass("selected");$($(a["personal-loan"]).parent().parent()).removeClass("highlight");
$(a["car-loan"]).removeClass("selected");$($(a["car-loan"]).parent().parent()).removeClass("highlight");
$(a["home-loan"]).removeClass("selected");$($(a["home-loan"]).parent().parent()).removeClass("highlight")
}break}}}function checkout(a){if($("#mobileSite").val()=="true"){return}var b=$("#lead_captured");if(b.length==1&&b.val()!="true"){var c="eligibilityId="+$("#lead_eligibility").val()+"&source="+(LEAD_SRC!=undefined?LEAD_SRC:$("#lead_source").val());
c+=(a==undefined)?"":"&bankId="+a;LEAD_SRC=undefined;popup("/"+$("#lead_product").val()+"/lead_show.html?"+c,"lc","width=470,height=600")
}}function unbind_checkout(){window.onunload=function(){}}function setAutoCompleteOff(){$("input.autocomplete_off").each(function(){$(this).attr("autocomplete","off")
})}function setDOBAutoTab(){$(".dobAutoTab").each(function(){var a=$(this).children().find("input");var b=$(a[0]);
var d=$(a[1]);var c=$(a[2]);b.autotab({format:"numeric",target:d});d.autotab({format:"numeric",previous:b,target:c});
c.autotab({format:"numeric",previous:d})})}function updateMedicalQuestionsYesCount(){var a=0;$(".medical_yes:checked").each(function(){if($(this).val()=="YES"){a++
}});$("[modelPath='app.details.applicant.miscPersonalInfo.MEDICAL_YES_COUNT']").val(a)}$(".medical_yes").change(function(){updateMedicalQuestionsYesCount();
var c=$(this).attr("modelPath");var d=c+"_PRESENT";var a=$("[modelPath='"+d+"']");if($("[modelPath='"+c+"']:checked").val()=="YES"){var b=parseInt($("[modelPath='app.details.applicant.miscPersonalInfo.MEDICAL_YES_COUNT']").val());
if(b<=4){a.val("YES")}else{a.val("NO")}}else{a.val("NO")}});function setPhoneNumberAutoTab(){$(".telephone").each(function(){var a=$(this).children().find("input");
var c=$(a[0]);var b=$(a[1]);c.autotab({format:"numeric",target:b});b.autotab({format:"numeric",previous:c})
})}function blockUI_click_event_init(){$(".blockUIGeneral").unbind("click");$(document).on("click",".blockUIGeneral",dispBlockUI)
}function dynamicContentFormatter(){setNumbering();setCurrentHeaderNav();formatNumber();setAutoCompleteOff();
setCharSetValidations();$(".tenure").each(function(){$(this).text(tnrConvert($(this).text()))})}function truncateName(k,a,e,f){var c=$.trim(k);
var b=c;var j=c.length;var g=7;a=a||32;f=((f+1)||(g+1))-1;if(j>a){var h=c.substring(j-f,j);var l=e||"..";
var d=c.substring(0,a-f-l.length+1);b=d+l+h}return b}function onDocReady(){setDOBAutoTab();setPhoneNumberAutoTab();
dynamicContentFormatter();updateMedicalQuestionsYesCount();setHiddenVariables();blockUI_click_event_init();
invoke("onDocReady_");showFbGooglePlusLayover()}function getAge(b){var d=getServerDate();var c=d.getFullYear()-b.getFullYear();
var a=d.getMonth()-b.getMonth();if(a<0||(a===0&&d.getDate()<b.getDate())){c--}return c}function setToggleCheckBox(f,c){var e=c?parseInt(c):0;
var d;if(!isNaN(e)){var a=$(f).parents().eq(e);d=a.find("input")}if(d!=undefined){var b;c=d.filter(function(){var h=false;
var g=this;$(f).each(function(){h=h||(g.isEqualNode(this))});return !h});setToggleCheckBox(f,c)}f.change(function(g){if($(this).attr("checked")=="checked"){c.attr("checked",false).trigger("change")
}});c.change(function(g){if($(this).attr("checked")=="checked"){f.attr("checked",false).trigger("change")
}})}var fbGPlusTimeout;function pollForFbGooglePlusPopup(a){fbGPlusTimeout=setTimeout(function(){if($(".blockUI.blockMsg.blockPage").length>0){pollForFbGooglePlusPopup(10*1000)
}else{$("#fb_goolePlus_layOver").each(dispBlockUI)}},a)}function setHiddenVariables(){$(".ajax-hidden-variable").html($("#ajax-content").html())
}function showFbGooglePlusLayover(){if($("#fBLayover_StartTime").val()=="0"&&$("#fBLayover_StartTime_Backup").length>0){$("#fBLayover_StartTime").val($("#fBLayover_StartTime_Backup").val())
}if($("#showFbGplusLayover").val()=="true"&&$("#fBLayover_StartTime").val()!="0"){var a=5*60*1000-(new Date().getTime()-Number($("#fBLayover_StartTime").val()));
pollForFbGooglePlusPopup(a);$("#fb_goolePlus_layOver .fb-likes-form-close").click(function(){var c="";
if($("#productNameSpace").val()!=null){c="/"+$("#productNameSpace").val()+"/"}var b=c+"disable_fbLayover.html";
$.post(b,function(){$.unblockUI();$("#showFbGplusLayover").val("false")})})}}$(onDocReady);$(window).load(function(){setTimeout(function(){lazyLoadContent();
prefetch();css_lazy_load();js_lazy_load();invoke("postLoad_")},100)});var toTitleCase=function(b){var a=b.toLowerCase();
return a.replace(/(?:^|\s)\w/g,function(c){return c.toUpperCase()})};function S4(){return(((1+Math.random())*65536)|0).toString(16).substring(1)
}function generateGUID(){return(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())}function xSellCongrats(a){$("#xsellCongratsButton").click(function(){$.ajax({cache:false,url:"saveXsellDetails.html",type:"post",data:a=="partner"?{xsellApplicationType:a,appId:$("#appId").val()}:{xsellApplicationType:a},async:true,success:function(b){$("#xsellCongratsButton").attr("disabled",true);
$("#xsellCongratsButton").addClass("csp-grey-btn");$("#xsellCongratsButton").removeClass("csp-btn");$(".xsellSuccess").removeClass("dontshow")
}})})}function subscribeToNewsLetterViaMC(a,c,d){console.log("newsletter subscription call mail : "+a+" source : "+c);
var b={mailID:a,sourceValue:c,sourceURL:d};$.getJSON("subscribeToNewsLetterMC.html",b,function(f,e,g){console.log("newsletter subscription success");
$("#closeExitBlockerModal").trigger("click")})}function alertMCInstantFadeOut(){setTimeout(function(){$(".alert-success-mc").fadeOut("slow")
},1500)}function alertMCSuccessMessage(){$(".alert-success-mc").show();alertMCInstantFadeOut()}window.onunload=checkout;
function initializeRecommender(c,f,e,a,d,g){var b={callback:g||function(j,h,l){var k=$("div .item.active").attr("slidename");
if((j.exactMatch&&j.recommendations.length==0)&&((f=="CITY"&&(k=="city"||k=="coapp_city"||k=="propertycity"))||(f=="COMPANY"&&k=="employer")||(k=="car"&&f=="CAR"))){if($("#productNameSpace").val()=="car-insurance"){populateVariantCallback();
moveToSlideInQueue("next")}else{moveToNextSlide()}}},showRecommendation:function(j,h,k){k.attr("disabled",false).parents().filter("li:first").removeClass("dontshow").find(".wwlbl");
if(k!=null&&typeof k!="undefined"){$("button[id="+k.attr("id")+"]").focus();k.addClass("validate");k.removeClass("dontvalidate");
k.siblings("div").removeClass("validate");$("button[id='"+k.attr("id")+"']").siblings("ul").find(".selected").removeClass("selected")
}},hideRecommendation:function(h){h.attr("disabled",true).parents().filter("li:first").addClass("dontshow");
h.removeClass("validate");h.addClass("dontvalidate")}};b=$.extend(false,{},{urlParams:{type:f,limit:60},showMatchMsg:false,showSearchingMsg:true,changeMatchMsg:true},b);
b=$.extend(false,{},{onRecoStart:a||function(){},onRecoEnd:d||function(){}},b);b=$.extend(false,{},{getDataFromDifferentField:c.dataFromField,dataFromField:c.dataFromField},b);
c.field.recommender("/"+e+"/recommend.html",c.reco,b,f)}var analyticsConstants={GET_QUOTE:"getQuote",EXPLORE:"explore",NAV_BAR_MENU:"navBarMenu",EMI_CALC_MENU:"emiCalcMenu",GATEWAY_PAGE_MENU:"gatewayPageMenu",CHOOSE_PRODUCT:"chooseProduct",START:"Start",COMPLETE:"Complete",ERROR:"Error",SENTENCE_FORM:"sntcForm",FORM_SUBMIT:"formSubmit",FORM_SUBMIT_ATTEMPT:"formSubmitAttempt",FORM_SUBMIT_ERROR:"formSubmitError",ENTER_EMAIL:"enterEmail",USER_DATA:"userData"};
function validateEmail(a){if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)){return true}return false
}function trackGetQuoteEvent(b,a){BB_trackGoogleEventWithLabel(b,analyticsConstants.GET_QUOTE,a)}function trackExploreEvent(b,a){BB_trackGoogleEventWithLabel(b,analyticsConstants.EXPLORE,a)
}function trackProductSelectionEvent(b,a){BB_trackGoogleEventWithLabel(b,analyticsConstants.CHOOSE_PRODUCT,a)
}function trackEnterEmailEvent(b,a){if(validateEmail(b)){BB_trackGoogleEventWithLabel(analyticsConstants.USER_DATA,analyticsConstants.ENTER_EMAIL,a)
}}function setUpTrackingForProductMenu(a){$("div.getquote a").click(function(){trackGetQuoteEvent(a,$(this).attr("data-product"))
});$("div.explore a").click(function(){trackExploreEvent(a,$(this).attr("data-product"))});$("a.header-icon").click(function(){trackProductSelectionEvent(a,$(this).attr("data-product"))
})}function setUpTrackingForNavBar(){var a=analyticsConstants.NAV_BAR_MENU;$("a.menu-getquote").live("click",function(){trackGetQuoteEvent(a,$(this).attr("data-product"))
});$("a.menu-explore").live("click",function(){trackExploreEvent(a,$(this).attr("data-product"))});$("#loans .tab-left a").live("click",trackEventsOnLevel2HeaderMenu);
$("#credit-cards .tab-left a").live("click",trackEventsOnLevel2HeaderMenu);$("#fixed-deposits .tab-left a").live("click",trackEventsOnLevel2HeaderMenu);
$("#insurance .tab-left a").live("click",trackEventsOnLevel2HeaderMenu)}function trackEventsOnLevel2HeaderMenu(){trackProductSelectionEvent(analyticsConstants.NAV_BAR_MENU,$(this).attr("data-product"))
}function setUpTrackingForSntcForm(){$("div.sntc-form-field").on("click",function(){if(!$(this).hasClass("open")){var a=$(this).prev("select").attr("data-selection")+analyticsConstants.START;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())}});$("select.sntc-form-field").on("change",function(){var a=$(this).attr("data-selection")+analyticsConstants.COMPLETE;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())});$("input.sntc-form-field").on("click",function(){var a=$(this).attr("data-selection")+analyticsConstants.START;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())});$("input.sntc-form-field").on("change",function(){if($(this).is(":visible")){var a=$(this).attr("data-selection")+analyticsConstants.COMPLETE;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())}});$("input.sntc-form-field").on("error",function(){if($(this).is(":visible")){var a=$(this).attr("data-selection")+analyticsConstants.ERROR;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())}})}function enableSticky(){if($("#stickyCTAText").hasClass("dontshow")){$("#stickyCTAText").removeClass("dontshow");
stickyShown=true}$("#stickyButton").off().on("click",function(){BB_trackGoogleEventWithLabel(ctaCategory(),ctaShownAction(),ctaLabel())
});if(stickyShown){BB_trackGoogleEventWithLabel(ctaCategory(),ctaShownAction(),ctaLabel());stickyShown=false
}$(".sticky-top").addClass("sticky");$(".sticky-button-mob").addClass("sticky-search-mob-button");$(".sticky-mob-button-nobg").addClass("sticky-mob-button-bg")
}function disableSticky(){if(!$("#stickyCTAText").hasClass("dontshow")){$("#stickyCTAText").addClass("dontshow");
$(".sticky-top").removeClass("sticky");$(".sticky-button-mob").removeClass("sticky-search-mob-button");
$(".sticky-mob-button-nobg").removeClass("sticky-mob-button-bg");stickyShown=false}}function enableStickyOnClick(){$(".tabbable-one ul li a").click(function(){if($(this).attr("id")=="cl-hungry-for-more-link"){enableSticky()
}else{disableSticky()}})}function isHavingHungryForMore(){return("life-insurance,car-insurance,health-insurance,newSeo,credit-card").indexOf($("#variantName").val())!=-1&&$("#pageName").val()=="eligPage"
}function isSeoLandingPage(){return $("#variantName").val()=="newSeo"&&$("#pageName").val()=="landingPage"
}function isIfscCodePage(){return $("#pageName").val()=="ifsc-code"}function isEmiCalculatorPage(){return $("#pageName").val()=="eligPage"&&$("#variantName").val()=="EMI Calculator"
}function enableStickyOnScroll(){if(isStickAvailable()){$(window).scroll(function(){var b=calculateThreshold();
var d=false;if($(window).scrollTop()>b){if($("#newstaggered-carousel").length>0){var e=$("#newstaggered-carousel").offset().top;
var a=$("#newstaggered-carousel").offset().top+$("#newstaggered-carousel").height();var c=e-$(window).scrollTop();
if((c<$(window).height()/2&&c>0)||(c<0&&(($(window).scrollTop()-a)<$(window).height()/2))||e==($(window).scrollTop())||!$("#slide-grey").hasClass("dontshow")){$("#stickyCTAText").addClass("dontshow")
}else{if($("#stickyCTAText").hasClass("dontshow")){$("#stickyCTAText").removeClass("dontshow");d=true
}}}else{if((("fixedDeposit","newSeo").indexOf($("#variantName").val())!=-1&&($("#pageName").val()=="eligPage"||$("#pageName").val()=="landingPage"))||($("#pageName").val()=="ifsc-code")){if($("#stickyCTAText").hasClass("dontshow")){$("#stickyCTAText").removeClass("dontshow");
d=true}$("#stickyButton").off().on("click",function(){BB_trackGoogleEventWithLabel(ctaCategory(),ctaShownAction(),ctaLabel())
})}else{if(("life-insurance,car-insurance,health-insurance").indexOf($("#variantName").val())!=-1&&$("#pageName").val()=="eligPage"&&$("#cl-hungry-for-more-link").hasClass("active")){if($("#stickyCTAText").hasClass("dontshow")){$("#stickyCTAText").removeClass("dontshow");
d=true}$("#stickyButton").off().on("click",function(){BB_trackGoogleEventWithLabel(ctaCategory(),ctaShownAction(),ctaLabel())
})}}}if(d){BB_trackGoogleEventWithLabel(ctaCategory(),ctaShownAction(),ctaLabel());d=false}$(".sticky-top").addClass("sticky")
}else{$(".sticky-top").removeClass("sticky");$("#stickyCTAText").addClass("dontshow")}if($(window).scrollTop()>b){$(".sticky-button-mob").addClass("sticky-search-mob-button");
$(".sticky-mob-button-nobg").addClass("sticky-mob-button-bg")}else{$(".sticky-button-mob").removeClass("sticky-search-mob-button");
$(".sticky-mob-button-nobg").removeClass("sticky-mob-button-bg")}})}}function isStickAvailable(){if($("#stickyCTAText").length>0){return true
}return false}var ctaShownAction=function(){return"ctaShown"};var ctaClickedAction=function(){return"ctaClicked"
};var ctaCategory=function(){return"cta"};var ctaLabel=function(){var a=$("#pageName");var b=$("#productNameSpace");
if(a!=undefined&&a.length>0){if(b!=undefined&&b.length>0){if(a.val()!="ifsc-code"){return b.val().toLowerCase().replace("_","-")+"-seo"
}else{return"ifsc"}}}return""};function calculateThreshold(){if(($("#variantName").val()=="credit-card"&&($("#bank").val()!="allBank"||($("#bank").val()=="allBank"&&($("#mode").val()=="landing"||$("#mode").val()=="seo"))))){return $(".product-description").offset().top
}return 500}$(document).ready(function(){getNativeSignInElement().bind("shown.bs.modal",function(){$(".menu-section-left > li:last-child a").css({zIndex:0})
});getNativeSignInElement().bind("hidden.bs.modal",function(){$(".menu-section-left > li:last-child a").css({zIndex:9999})
});setUpTrackingForNavBar();$("#navbarToggleButton").removeClass("dontshow");if(isMobileSite()&&isHavingHungryForMore()){enableStickyOnClick()
}else{if(isMobileSite()&&(isSeoLandingPage()||isIfscCodePage()||isEmiCalculatorPage())){enableSticky()
}else{enableStickyOnScroll()}}});function navHover(){$(".menu-nav-tabs a").hoverIntent({over:function(a){$(this).tab("show")
},interval:125});$(".menu-nav-tabs a").on("click",function(a){$(this).tab("show")})}var unhighlightMenu=function(){$("ul.navbar-nav li.dd-present").removeClass("active");
$(".tab-content.submenu > .tab-pane").removeClass("active")};$("ul.navbar-nav li.dd-present a").hoverIntent({over:function(a){$(this).tab("show")
},interval:125});$("ul.navbar-nav li").not(".dd-present").hoverIntent({over:function(a){if($("ul.navbar-nav li.dd-present").hasClass("active")){unhighlightMenu()
}},interval:125});$(".tab-content.submenu").on("mouseleave",function(){unhighlightMenu()});$(document).ready(function(){$(".owl-next,.owl-prev").click(function(){setTimeout(function(){window.scrollBy(0,+1);
window.scrollBy(0,-1)},500)})});window.addEventListener("load",function(){window.loaded=true});$(window).bind("load",function(){window.loaded=true;
bindLazy()});$(document).ajaxStop(function(){if(window.loaded){bindLazy()}});function bindLazy(){$("img.lazy").lazy({bind:"event"})
}function initEmailValidation(){$("#mc-embedded-subscribe-form-footer").validate({rules:{"mce-EMAIL":{required:true,email:true}},messages:{"mce-EMAIL":constructErrorMessage("Uh-oh! Please enter a valid email")}})
}function constructErrorMessage(b){var c="<table><tr><td><span class='error-icon'><img src='images/icon-error.png'/></span></td><td><span class='error-info'>";
var a="</span></td></tr></table>";return c+b+a}$(document).ready(function(){if($("#bb-footer").val()=="true"){if($("#common-new-footer").val()!=undefined&&$("#ajax-footer").val()=="true"){var m=$("#pageName").val();
var b=$("#variantName").val();var c=$("#productNameSpace").val();var g=$("#sessionId").val();var p=$("#propertyCity").val();
var q=$("#formName").val();var e=$("#mcIdVal").val();var l=$("#isMobileReceived").val();var d=$("#mcId").val();
var r=$("#pTypeId").val();var j=$("#bank").val();var f=$("#city").val();var h=$("#mode").val();var o=$("#originalRequestURL").val();
$.ajax({url:c+"/ajax-footer.html",cache:false,type:"get",data:{ajax:true,pageName:m,variantName:b,sessionId:g,propertyCity:p,formName:q,mcIdVal:e,isMobileReceived:l,mcId:d,pTypeId:r,bank:j,city:f,mode:h,originalRequestURL:o},success:function(s){$("#common-new-footer").html(s);
k()}})}else{k()}}function n(){$('[id="mc-embedded-subscribe-footer"]').on("click",function(s){var t=$(".js-subscribe-form").valid();
if(t){$(this).prop("disabled",true);mailID=$(this).siblings("#mce-EMAIL").val();sourceValue=$(this).siblings("#mc_source_value").val();
sourceURL=window.location.href;subscribeToNewsLetterViaMC(mailID,sourceValue,sourceURL);alertMCSuccessMessage();
trackEnterEmailEvent(mailID,"footer");s.preventDefault()}})}function a(){$('[name="mc-newsletter-embedded-subscribe"]').click(function(s){var t=$(".js-newsletter-subscribe-form").valid();
if(t){s.preventDefault();$(this).prop("disabled",true);mailID=$(".js-newsletter-email").val();sourceValue=$(this).siblings("#mc_source_value").val();
sourceURL=window.location.href;subscribeToNewsLetterViaMC(mailID,sourceValue,sourceURL);alertMCSuccessMessage()
}else{return false}})}function k(){initEmailValidation();n();a()}});var analyticsConstants={GET_QUOTE:"getQuote",EXPLORE:"explore",NAV_BAR_MENU:"navBarMenu",EMI_CALC_MENU:"emiCalcMenu",GATEWAY_PAGE_MENU:"gatewayPageMenu",CHOOSE_PRODUCT:"chooseProduct",START:"Start",COMPLETE:"Complete",ERROR:"Error",SENTENCE_FORM:"sntcForm",FORM_SUBMIT:"formSubmit",FORM_SUBMIT_ATTEMPT:"formSubmitAttempt",FORM_SUBMIT_ERROR:"formSubmitError",ENTER_EMAIL:"enterEmail",USER_DATA:"userData"};
function validateEmail(a){if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)){return true}return false
}function trackGetQuoteEvent(b,a){BB_trackGoogleEventWithLabel(b,analyticsConstants.GET_QUOTE,a)}function trackExploreEvent(b,a){BB_trackGoogleEventWithLabel(b,analyticsConstants.EXPLORE,a)
}function trackProductSelectionEvent(b,a){BB_trackGoogleEventWithLabel(b,analyticsConstants.CHOOSE_PRODUCT,a)
}function trackEnterEmailEvent(b,a){if(validateEmail(b)){BB_trackGoogleEventWithLabel(analyticsConstants.USER_DATA,analyticsConstants.ENTER_EMAIL,a)
}}function setUpTrackingForProductMenu(a){$("div.getquote a").click(function(){trackGetQuoteEvent(a,$(this).attr("data-product"))
});$("div.explore a").click(function(){trackExploreEvent(a,$(this).attr("data-product"))});$("a.header-icon").click(function(){trackProductSelectionEvent(a,$(this).attr("data-product"))
})}function setUpTrackingForNavBar(){var a=analyticsConstants.NAV_BAR_MENU;$("a.menu-getquote").live("click",function(){trackGetQuoteEvent(a,$(this).attr("data-product"))
});$("a.menu-explore").live("click",function(){trackExploreEvent(a,$(this).attr("data-product"))});$("#loans .tab-left a").live("click",trackEventsOnLevel2HeaderMenu);
$("#credit-cards .tab-left a").live("click",trackEventsOnLevel2HeaderMenu);$("#fixed-deposits .tab-left a").live("click",trackEventsOnLevel2HeaderMenu);
$("#insurance .tab-left a").live("click",trackEventsOnLevel2HeaderMenu)}function trackEventsOnLevel2HeaderMenu(){trackProductSelectionEvent(analyticsConstants.NAV_BAR_MENU,$(this).attr("data-product"))
}function setUpTrackingForSntcForm(){$("div.sntc-form-field").on("click",function(){if(!$(this).hasClass("open")){var a=$(this).prev("select").attr("data-selection")+analyticsConstants.START;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())}});$("select.sntc-form-field").on("change",function(){var a=$(this).attr("data-selection")+analyticsConstants.COMPLETE;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())});$("input.sntc-form-field").on("click",function(){var a=$(this).attr("data-selection")+analyticsConstants.START;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())});$("input.sntc-form-field").on("change",function(){if($(this).is(":visible")){var a=$(this).attr("data-selection")+analyticsConstants.COMPLETE;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())}});$("input.sntc-form-field").on("error",function(){if($(this).is(":visible")){var a=$(this).attr("data-selection")+analyticsConstants.ERROR;
BB_trackGoogleEventWithLabel(analyticsConstants.SENTENCE_FORM,a,$("#productNameSpace").val())}})}var mobile=false;
var mobileFilterMapSlide={};var mobileFilterMapList={};var prefillActiveForFlow=false;var loadEventReported=false;
function mobileFilterValues(a,c,b){if(b=="list"){if(c in mobileFilterMapList){delete mobileFilterMapList[c]
}else{mobileFilterMapList[c]=a}}else{if(a in mobileFilterMapSlide){delete mobileFilterMapSlide[a]}mobileFilterMapSlide[a]=c
}}function TrackEvents(D){var K="trckr";var C="ubid";var v="WT.mc_id";var c="sessionWebEvent";var k="sent";
var R="offer";var F="app";var h="appcongrats";var O="slideElig";var Q="offerDetails";var e="sntcElig";
var j="cmplElig";var x="maxElig";var J="minInterest";var I="offerCnt";var a="searchId";var y="sumAssured";
var L="minInsurance";var b="maxInsurance";var n=",bberror:error";var s="data-actionData";D.find("[data-action]").each(function(){var T=t($(this));
for(var U=0;U<T.length;U++){var W=T[U].split(":");if(W.length>=1&&W.length<=3){var V=W[0];$(this).on(V,function(aa){var X=aa.type;
var Z=A($(this),u($(this),X));if(Z==null){return}var ab=m();var Y=p($(this),Z);var ac=null;if($(this).is(":radio")){if($(this).is(":checked")){ac=H(ab,Z,Y)
}else{if($(this).is(":not(:checked)")&&X=="bberror"){ac=H(ab,Z,Y)}}}else{ac=H(ab,Z,Y)}if(ac){B(ac)}})
}else{}}});if(D.selector==$(document).selector){if(!loadEventReported){f();loadEventReported=true}}function f(){if($("#pageName").val()=="newBootstrapAppPage"||$("#pageName").val()=="eligPage"||$("#pageName").val()=="searchPage"){g()
}if($("#pageName").val()=="searchPage"||$("#pageName").val()=="insuranceOfferPage"||$("#pageName").val()=="newBootstrapAppPage"||$("#pageName").val()=="eligPage"){var V=m();
if($("#pageName").val()=="newBootstrapAppPage"){var U={group:F,name:"load",location:"page",prevlocation:localStorage.getItem("prevActionLocValstr"),prevaction:localStorage.getItem("prevActionValstr")}
}else{if($("#pageName").val()=="eligPage"){var U={group:O,name:"load",location:"page",prevlocation:localStorage.getItem("prevActionLocValstr"),prevaction:localStorage.getItem("prevActionValstr")}
}else{var U={group:R,name:"load",location:"page",prevlocation:localStorage.getItem("prevActionLocValstr"),prevaction:localStorage.getItem("prevActionValstr")}
}}var T=p($(this),U);webEventInfo=H(V,U,T);B(webEventInfo)}}function g(){prefillActiveForFlow=$("#prefill-active-param").val()=="true"&&!isInternalAccess();
if(!($("#pageName").val()=="newBootstrapAppPage"||$("#pageName").val()=="eligPage")){return}if(prefillActiveForFlow){if($("#pageName").val()=="newBootstrapAppPage"){$("input[name*='applicant']","#newAppForm").each(function(){var T=$(this);
if(T.attr("name").startsWith("app.")){if(T.attr("type")=="radio"||T.attr("type")=="checkbox"){if(T.filter(":checked").length>0){$("input[name='"+T.attr("name")+"'").each(function(){$(this).attr(s,"prefilled")
})}return}else{if(T.attr("type")=="select"){if(T.filter(":selected").length>0){T.attr(s,"prefilled")}return
}else{if(T.val()){T.attr(s,"prefilled")}}}}})}else{if($("#pageName").val()=="eligPage"){$("input[name*='applicant']","#eForm").each(function(){var T=$(this);
if(T.attr("name").startsWith("form")){if(T.attr("type")=="radio"||T.attr("type")=="checkbox"){if(T.filter(":checked").length>0){$("input[name='"+T.attr("name")+"'").each(function(){$(this).attr(s,"prefilled")
})}return}else{if(T.attr("type")=="select"){if(T.filter(":selected").length>0){T.attr(s,"prefilled")}return
}else{if(T.val()){T.attr(s,"prefilled")}}}}})}}}}function t(Y){var Z=Y.attr("data-action");if(Z!=null&&Z!=""){var W=Z.split(":");
var V=W[0].split(",");var T=W[1].split(",");var X=W[2];Z=null;for(var U=0;U<V.length;U++){if(Z==null){Z=V[U]+":"+T[U]
}else{Z=Z+","+V[U]+":"+T[U]}if(X!=""&&X!=null){Z=Z+":"+X}}}Z=Z+n;return Z.split(",")}function u(X,V){var T=t(X);
for(var U=0;U<T.length;U++){var Y=T[U].split(":");var W=Y[0];if(V===W){return Y[1]}}}function G(X,V){var T=t(X);
for(var U=0;U<T.length;U++){var Y=T[U].split(":");var W=Y[1];if(V===W){return(Y[2]=="inclData")}}}function o(){return E(new Date())
}function E(Y){var V=Y.getFullYear();var aa=Y.getMonth()<10?"0"+(Y.getMonth()+1):(Y.getMonth()+1);var T=Y.getDate()<10?"0"+Y.getDate():Y.getDate();
var X=Y.getHours()<10?"0"+Y.getHours():Y.getHours();var U=Y.getMinutes()<10?"0"+Y.getMinutes():Y.getMinutes();
var W=Y.getSeconds()<10?"0"+Y.getSeconds():Y.getSeconds();var Z=V+"-"+aa+"-"+T+" "+X+":"+U+":"+W;return Z
}function H(V,U,T){V.action=U;V.data=T;localStorage.setItem("prevActionLocValstr",V.action.location);
localStorage.setItem("prevActionValstr",V.action.name);if(isInternal()){console.log("Event JSON: "+JSON.stringify(V))
}return V}function A(Z,U){var X;if(typeof Z.attr("data-actionLoc")=="undefined"){X=Z.parents("[data-actionloc]").attr("data-actionLoc")
}else{X=Z.attr("data-actionLoc")}if(X==undefined){return null}var aa=X.split(":");var Y=aa[0];var V=$("#eForm_form_details_uiParameters_formType").val();
if(typeof V!="undefined"&&V=="medium"&&Y=="slideElig"){Y="cmplElig"}var T=aa[1];if(T=="slideNav"){T=$("#newstaggered-carousel .item.active").attr("slidename")
}if(Y=="eligPage"){Y="slideElig"}else{if(Y=="newBootstrapAppPage"){Y="app"}else{if(Y=="newBootstrapThankYouPage"){Y="appcongrats"
}else{if(Y=="insuranceOfferPage"||Y=="searchPage"){Y="offer"}}}}var W={group:Y,name:U,location:T,prevlocation:localStorage.getItem("prevActionLocValstr"),prevaction:localStorage.getItem("prevActionValstr")};
return W}function m(){var T={ubid:d(C),trckr:d(K),product:$("#productNameSpace").val()};if(isInternal()){T.env="internal"
}return T}function N(){var U=$("#logged-in-status").val();var T={loginStatus:U};if(U=="true"){T.loginType=$("#logged-in-type").val()
}return T}function l(){var T={trckr:d(K),ubid:d(C),site:$("#global_website").val(),url:location.href,usragnt:navigator.userAgent,navappversion:navigator.appVersion,referer:document.referrer,source:S()};
if(!isProductionEnv()){T.env="internal"}if($("#variantOptions").val()!=""){T.variantOpt=$("#variantOptions").val()
}if(d(v)!=""){T.wtmcid=decodeURIComponent(d(v))}return T}function S(){return $("#mobileSite").val()=="false"?"Desktop":"Mobile"}setTimeout(function(){if(isCookieEnabled()==true){if(d(c)!=k){var T=l();
if(T&&z(T)){B(T);setCookie(c,k,null,"/")}}}},2000);function z(T){return(T.ubid!=null&&T.ubid!="")?true:false
}function d(V){var U=V+"=";var T=document.cookie.split(";");for(var W=0;W<T.length;W++){var X=T[W];while(X.charAt(0)==" "){X=X.substring(1)
}if(X.indexOf(U)!=-1){return X.substring(U.length,X.length)}}return""}function q(){dataOtherArray=[];
if($("#pre-approved-zero-offers")!=undefined&&$("#pre-approved-zero-offers").val()=="true"){var T={name:"paOfferCnt",valint:0};
dataOtherArray.push(T)}else{if($("#pre-approved-offers-present")!=undefined&&$("#pre-approved-offers-present").val()=="true"){var T={name:"paOfferCnt",valint:1};
dataOtherArray.push(T)}}return dataOtherArray}function p(W,ab){var X={};if(ab.group==O||ab.group==j){Y()
}if(ab.group==e){V()}if(ab.group==R){T();X.other=q()}if(ab.group==F||ab.group==h){ae()}if(ab.group==Q){U()
}Z();if(G(W,ab.name)){X.other=ad(W,ab)}if(ab.name=="load"||(ab.location=="submit"&&ab.group==F)){aa()
}else{ac()}return X;function Z(){if($("#pageName").val()=="newBootstrapAppPage"||$("#pageName").val()=="newBootstrapThankYouPage"){var af=$("#loggedin").val()
}else{af=$("#logged-in-status").val()}X.loginStatus=af;if(af=="true"){X.loginType=$("#logged-in-type").val()
}}function ae(){X.searchId=$("#appId").val();X.offerBank=$("#bankName").val();if(localStorage.getItem("appPageOfferRate")!="undefined"&&localStorage.getItem("appPageOfferRate")!=undefined){X.offerRate=localStorage.getItem("appPageOfferRate")
}if(localStorage.getItem("appPageOfferIndex")!="undefined"&&localStorage.getItem("appPageOfferIndex")!=undefined){X.offerIndex=localStorage.getItem("appPageOfferIndex")
}}function ac(){if(!(ab.name=="edit"||ab.name=="enterMobile"||ab.name=="enterEmail")){return}if(prefillActiveForFlow&&($("#pageName").val()=="newBootstrapAppPage"||$("#pageName").val()=="eligPage")){if(!X.other){X.other=[]
}var ah=!W.attr(s)?"false":(W.attr(s)=="prefilled"?"true":"false");if(ab.group==O&&ah=="false"){var af=false;
if(ab.location=="salary-slider"){af=$('input[type="text"][name="form.details.applicant.income.monthlyTakeHomeSalary"]')
}else{if(ab.location=="workexp-slider"||ab.location=="workexp-month"||ab.location=="workexp-year"){af=$('input[name="form.applicantPlaceHolder.employmentStartDate.year"]')
}else{if(ab.location=="grossmonthlysalary-slider"){af=$('input[type="text"]input[name="form.details.applicant.income.grossMonthlyIncome"]')
}else{if(ab.location=="annualbonus-slider"){af=$('input[name="form.details.applicant.income.recentAnnualPerformanceBonus"]')
}else{if(ab.location=="avgmonthlyincentive-slider"){af=$('input[name="form.details.applicant.income.averageMonthlyIncentives"]')
}else{if(ab.location=="movedtocity-month"||ab.location=="movedtocity-year"){af=$('input[name="form.applicantPlaceHolder.cityStartDate.year"]')
}else{if(ab.location=="movedtores-year"||ab.location=="movedtores-month"){af=$('input[name="form.applicantPlaceHolder.residenceStartDate.year"]')
}else{if(ab.location=="dob-slider"||ab.location=="dob-month"){af=$('input[name="form.applicantPlaceHolder.dob.year"]')
}else{if(ab.location=="totalemi-slider"){af=$('input[name="form.details.applicant.income.totalEMI"]')
}else{if(ab.location=="residencetype"){af=$('input[name="form.details.applicant.residenceType"]')}else{if(ab.location=="maximumcredit-slider"){af=$('input[name="form.details.applicant.income.maximumCreditOfExistingCards"]')
}}}}}}}}}}}if(af){ah=!af.attr(s)?"false":(af.attr(s)=="prefilled"?"true":"false")}}var ag={name:"prefillFieldStatus",valstr:ah};
X.other.push(ag);if($("#prefill-edit-param").val()=="false"){$("#prefill-edit-param").val("true")}}}function aa(){if(prefillActiveForFlow&&($("#pageName").val()=="newBootstrapAppPage"||$("#pageName").val()=="eligPage"||$("#pageName").val()=="searchPage")){if(!X.other){X.other=[]
}var af={name:"prefillFlowStatus",valstr:!$("#prefill-active-param")?false:$("#prefill-active-param").val()};
X.other.push(af);if((ab.name=="load"&&ab.group==R)||(ab.location=="submit"&&ab.group==F)){var ag={name:"prefillFlowEditStatus",valstr:!$("#prefill-edit-param")?false:$("#prefill-edit-param").val()};
X.other.push(ag)}}}function T(){X[I]=M($("#offerCount").val());if($("#pageName").val()=="insuranceOfferPage"){X[y]=$("#productShortName").val()=="CarInsurance"?M($("#idv_Actuals").val()):M($("#sumAssured_Actuals").val());
X[L]=M($("#minInsuranceAmount").val());X[b]=M($("#maxInsuranceAmount").val());X.offerBank=W.parents("div .row-pad").children("input[name='offerBank']").val();
X.offerIndex=W.parents("section:first").attr("offerIndex");if(X.offerIndex!="undefined"){localStorage.setItem("appPageOfferIndex",X.offerIndex)
}}else{if($("#pageName").val()=="searchPage"){X[x]=M($("#maxElig").val());X[J]=M($("#minInterest").val());
X[a]=$("#searchReferenceId").val();X.offerBank=W.parents("section:first").find(".js-offers-row-bank").attr("data-bank");
X.offerRate=W.parents("section:first").find(".js-offers-row-interest-rate").attr("data-interest-rate");
if(X.offerRate==null){X.offerRate=W.parents("section:first").find(".js-offers-row-annual-fee").attr("data-annual-fee")
}X.offerIndex=W.parents("section:first").attr("offerIndex");if(X.offerIndex!="undefined"){localStorage.setItem("appPageOfferIndex",X.offerIndex)
}if(X.offerRate!="undefined"){localStorage.setItem("appPageOfferRate",X.offerRate)}}}}function U(){if($("#searchReferenceId").val()!=""){X[a]=$("#searchReferenceId").val()
}X.offerBank=$("#bankName").val()}function V(){var ah=$("#eFormSentence_form_applicantPlaceHolder_residenceCity_value").val();
if(ah=="OTHER"){ah=$("#eFormSentence_form_applicantPlaceHolder_residenceCity_fallback").val()}var ag=$("input[name='form.applicantPlaceHolder.companyName']").val();
var af=($("#productNameSpace").val()=="personal-loan"||$("#productNameSpace").val()=="credit-card")?$("input[name='form.details.applicant.income.monthlyTakeHomeSalary']").val():$("input[name='form.details.applicant.income.grossMonthlyIncome']").val();
if(ah!=""){X.city=ah}if(ag!=""){X.company=ag}if(af!=""){X.salary=M(af)}}function Y(){var ag=$('input[name="form.applicantPlaceHolder.residenceCity.value"]');
if(ag.is(":radio")){var ai=($('input[name="form.applicantPlaceHolder.residenceCity.value"]:radio:checked').val()!=BBConstants.otherValue)?$('input[name="form.applicantPlaceHolder.residenceCity.value"]:radio:checked').val():$("#form_applicantPlaceHolder_residenceCity_fallback[name='form.applicantPlaceHolder.residenceCity.fallback']").val()
}else{var ai=ag.val()}var ah=$('#companyNameFieldSal[name="form.applicantPlaceHolder.companyName"]').val();
if(typeof ah=="undefined"){ah=$('[name="form.applicantPlaceHolder.companyName"]').val()}var af=($("#productNameSpace").val()=="personal-loan"||$("#productNameSpace").val()=="credit-card")?$('.news-tagger-input[name="form.details.applicant.income.monthlyTakeHomeSalary"]').val():$('.news-tagger-input[name="form.details.applicant.income.grossMonthlyIncome"]').val();
if(typeof af=="undefined"){af=($("#productNameSpace").val()=="personal-loan"||$("#productNameSpace").val()=="credit-card")?$('[name="form.details.applicant.income.monthlyTakeHomeSalary"]').val():$('[name="form.details.applicant.income.grossMonthlyIncome"]').val()
}if(ai!=""){X.city=ai}if(ah!=""){X.company=ah}if(af!=""){X.salary=M(af)}}function ad(ak,ah){var aj=[];
var ai="";if(ak.is(":radio")){if(ak.is(":checked")){ai=ak.val()}}else{if(ak.is("label")){ai=ak.attr("data-val")
}else{if(ak.is("div")){ai=ak.find("input").val()}else{if(ak.is("td")){ai=ak.children().attr("data-val")
}else{if(ak.is("a")){ai=ak.text()}else{ai=ak.val()}}}}}if(mobile==true){for(var af in mobileFilterMapList){var ag={name:mobileFilterMapList[af],valstr:af};
aj.push(ag)}for(var af in mobileFilterMapSlide){var ag={name:af,valstr:mobileFilterMapSlide[af]};aj.push(ag)
}mobile=false;mobileFilterMapList={};mobileFilterMapSlide={};return aj}if(ak.is("[data-name]")){if(ak.is("[data-value]")){var ag={name:ak.attr("data-name"),valstr:ak.attr("data-value")}
}else{var ag={name:ak.attr("data-name"),valstr:ai}}}else{var ag={name:ah.location,valstr:ai}}aj.push(ag);
return aj}}function w(V,U,T){if(T=="str"){V.valstr=U}else{if(T=="int"){V.valint=U}else{if(T=="float"){V.valfloat=U
}else{if(T=="bool"){V.valbool=U}else{if(T=="time"){V.valtime=U}}}}}}function r(W,X,U){var V=JSON.stringify(U);
var T=btoa(V);P(W,X,T,null)}function P(Y,X,W,Z){var ab=Z||"application/octet-stream";var aa={name:X,mimeType:ab};
const U="-------314159265358979323846";const T="\r\n--"+U+"\r\n";const ac="\r\n--"+U+"--";var V=T+"Content-Type: application/json\r\n\r\n"+JSON.stringify(aa)+T+"Content-Type: "+ab+"\r\nContent-Transfer-Encoding: base64\r\n\r\n"+W+ac
}function B(T){$.ajax({type:"POST",url:"https://events.bankbazaar.com/analytics/",dataType:"json",async:true,cache:false,timeout:5000,data:JSON.stringify(T),success:function(U){},error:function(U,W,V){}})
}function M(T){return((typeof T!="undefined")?(parseFloat(T.replace(/,/g,""))):T)}}var appPage=false;
function initTrackEvents(a,b){if(b=="mobile"){mobile=true}if(typeof a=="function"||typeof a=="undefined"){a=$(document);
if(window.location.href.indexOf("application_edit.html")>0||window.location.href.indexOf("internal_app_view.html")>0||window.location.href.indexOf("internal_app_edit.html")>0){if(appPage==true){$.TrackEvents=new TrackEvents(a);
appPage=false}else{appPage=true}}else{$.TrackEvents=new TrackEvents(a)}}else{$.TrackEvents=new TrackEvents(a)
}}var offersFramework=$("#offersFramework").val();if(!offersFramework){$(initTrackEvents)}$(document).ready(function(){$("#sidemenu").click(function(){$(".side-menu").toggleClass("side-menu-open");
$(".side-menu").show();$(".screen-block-hamburger").removeClass("dontshow");if(!$("html").hasClass("body-overflow")){$("html").addClass("body-overflow")
}else{$("html").removeClass("body-overflow")}$(".screen-block-hamburger-mob").toggleClass("dontshow")
});$(".screen-block-hamburger").click(function(){$(".side-menu").removeClass("side-menu-open");$(".screen-block-hamburger").addClass("dontshow");
$("html").removeClass("body-overflow")});$(".screen-block-hamburger-mob").click(function(){$(".side-menu").removeClass("side-menu-open");
$(".screen-block-hamburger-mob").addClass("dontshow");$("html").removeClass("body-overflow")});$(".side-menu-list li").click(function(){if($(this).hasClass("open")){$(this).removeClass("open active")
}else{$(".side-menu-list li.open").removeClass("open active");$(this).addClass("active").addClass("open")
}});$(".bbicons-menu-more").on("click",function(){var b=$(".js-mobile-side-menu");var a=$(b).height();
$(b).animate({scrollTop:a},1000)})});