/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function(a5,aE){var z,ai,r=a5.document,aL=a5.location,f=a5.navigator,bj=a5.jQuery,L=a5.$,ap=Array.prototype.push,a7=Array.prototype.slice,aN=Array.prototype.indexOf,C=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,aR=String.prototype.trim,bJ=function(e,b2){return new bJ.fn.init(e,b2,z)
},bA=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ad=/\S/,aY=/\s+/,F=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,br=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bi=/^[\],:{}\s]*$/,bl=/(?:^|:|,)(?:\s*\[)+/g,bG=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,a3=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,bS=/^-ms-/,aX=/-([\da-z])/gi,Q=function(e,b2){return(b2+"").toUpperCase()
},aI=function(){if(r.addEventListener){r.removeEventListener("DOMContentLoaded",aI,false);bJ.ready()}else{if(r.readyState==="complete"){r.detachEvent("onreadystatechange",aI);
bJ.ready()}}},ac={};bJ.fn=bJ.prototype={constructor:bJ,init:function(e,b5,b4){var b3,b6,b2,b7;if(!e){return this
}if(e.nodeType){this.context=this[0]=e;this.length=1;return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b3=[null,e,null]
}else{b3=br.exec(e)}if(b3&&(b3[1]||!b5)){if(b3[1]){b5=b5 instanceof bJ?b5[0]:b5;b7=(b5&&b5.nodeType?b5.ownerDocument||b5:r);
e=bJ.parseHTML(b3[1],b7,true);if(a.test(b3[1])&&bJ.isPlainObject(b5)){this.attr.call(e,b5,true)}return bJ.merge(this,e)
}else{b6=r.getElementById(b3[2]);if(b6&&b6.parentNode){if(b6.id!==b3[2]){return b4.find(e)}this.length=1;
this[0]=b6}this.context=r;this.selector=e;return this}}else{if(!b5||b5.jquery){return(b5||b4).find(e)
}else{return this.constructor(b5).find(e)}}}else{if(bJ.isFunction(e)){return b4.ready(e)}}if(e.selector!==aE){this.selector=e.selector;
this.context=e.context}return bJ.makeArray(e,this)},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length
},toArray:function(){return a7.call(this)},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(b2,b4,e){var b3=bJ.merge(this.constructor(),b2);b3.prevObject=this;b3.context=this.context;
if(b4==="find"){b3.selector=this.selector+(this.selector?" ":"")+e}else{if(b4){b3.selector=this.selector+"."+b4+"("+e+")"
}}return b3},each:function(b2,e){return bJ.each(this,b2,e)},ready:function(e){bJ.ready.promise().done(e);
return this},eq:function(e){e=+e;return e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(a7.apply(this,arguments),"slice",a7.call(arguments).join(","))
},map:function(e){return this.pushStack(bJ.map(this,function(b3,b2){return e.call(b3,b2,b3)}))},end:function(){return this.prevObject||this.constructor(null)
},push:ap,sort:[].sort,splice:[].splice};bJ.fn.init.prototype=bJ.fn;bJ.extend=bJ.fn.extend=function(){var ca,b3,e,b2,b7,b8,b6=arguments[0]||{},b5=1,b4=arguments.length,b9=false;
if(typeof b6==="boolean"){b9=b6;b6=arguments[1]||{};b5=2}if(typeof b6!=="object"&&!bJ.isFunction(b6)){b6={}
}if(b4===b5){b6=this;--b5}for(;b5<b4;b5++){if((ca=arguments[b5])!=null){for(b3 in ca){e=b6[b3];b2=ca[b3];
if(b6===b2){continue}if(b9&&b2&&(bJ.isPlainObject(b2)||(b7=bJ.isArray(b2)))){if(b7){b7=false;b8=e&&bJ.isArray(e)?e:[]
}else{b8=e&&bJ.isPlainObject(e)?e:{}}b6[b3]=bJ.extend(b9,b8,b2)}else{if(b2!==aE){b6[b3]=b2}}}}}return b6
};bJ.extend({noConflict:function(e){if(a5.$===bJ){a5.$=L}if(e&&a5.jQuery===bJ){a5.jQuery=bj}return bJ
},isReady:false,readyWait:1,holdReady:function(e){if(e){bJ.readyWait++}else{bJ.ready(true)}},ready:function(e){if(e===true?--bJ.readyWait:bJ.isReady){return
}if(!r.body){return setTimeout(bJ.ready,1)}bJ.isReady=true;if(e!==true&&--bJ.readyWait>0){return}ai.resolveWith(r,[bJ]);
if(bJ.fn.trigger){bJ(r).trigger("ready").off("ready")}},isFunction:function(e){return bJ.type(e)==="function"
},isArray:Array.isArray||function(e){return bJ.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):ac[C.call(e)]||"object"
},isPlainObject:function(b4){if(!b4||bJ.type(b4)!=="object"||b4.nodeType||bJ.isWindow(b4)){return false
}try{if(b4.constructor&&!Y.call(b4,"constructor")&&!Y.call(b4.constructor.prototype,"isPrototypeOf")){return false
}}catch(b3){return false}var b2;for(b2 in b4){}return b2===aE||Y.call(b4,b2)},isEmptyObject:function(b2){var e;
for(e in b2){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(b4,b3,e){var b2;
if(!b4||typeof b4!=="string"){return null}if(typeof b3==="boolean"){e=b3;b3=0}b3=b3||r;if((b2=a.exec(b4))){return[b3.createElement(b2[1])]
}b2=bJ.buildFragment([b4],b3,e?null:[]);return bJ.merge([],(b2.cacheable?bJ.clone(b2.fragment):b2.fragment).childNodes)
},parseJSON:function(e){if(!e||typeof e!=="string"){return null}e=bJ.trim(e);if(a5.JSON&&a5.JSON.parse){return a5.JSON.parse(e)
}if(bi.test(e.replace(bG,"@").replace(a3,"]").replace(bl,""))){return(new Function("return "+e))()}bJ.error("Invalid JSON: "+e)
},parseXML:function(b4){var b2,b3;if(!b4||typeof b4!=="string"){return null}try{if(a5.DOMParser){b3=new DOMParser();
b2=b3.parseFromString(b4,"text/xml")}else{b2=new ActiveXObject("Microsoft.XMLDOM");b2.async="false";b2.loadXML(b4)
}}catch(b5){b2=aE}if(!b2||!b2.documentElement||b2.getElementsByTagName("parsererror").length){bJ.error("Invalid XML: "+b4)
}return b2},noop:function(){},globalEval:function(e){if(e&&ad.test(e)){(a5.execScript||function(b2){a5["eval"].call(a5,b2)
})(e)}},camelCase:function(e){return e.replace(bS,"ms-").replace(aX,Q)},nodeName:function(b2,e){return b2.nodeName&&b2.nodeName.toLowerCase()===e.toLowerCase()
},each:function(b6,b7,b3){var b2,b4=0,b5=b6.length,e=b5===aE||bJ.isFunction(b6);if(b3){if(e){for(b2 in b6){if(b7.apply(b6[b2],b3)===false){break
}}}else{for(;b4<b5;){if(b7.apply(b6[b4++],b3)===false){break}}}}else{if(e){for(b2 in b6){if(b7.call(b6[b2],b2,b6[b2])===false){break
}}}else{for(;b4<b5;){if(b7.call(b6[b4],b4,b6[b4++])===false){break}}}}return b6},trim:aR&&!aR.call("\uFEFF\xA0")?function(e){return e==null?"":aR.call(e)
}:function(e){return e==null?"":(e+"").replace(F,"")},makeArray:function(e,b3){var b4,b2=b3||[];if(e!=null){b4=bJ.type(e);
if(e.length==null||b4==="string"||b4==="function"||b4==="regexp"||bJ.isWindow(e)){ap.call(b2,e)}else{bJ.merge(b2,e)
}}return b2},inArray:function(b4,b2,b3){var e;if(b2){if(aN){return aN.call(b2,b4,b3)}e=b2.length;b3=b3?b3<0?Math.max(0,e+b3):b3:0;
for(;b3<e;b3++){if(b3 in b2&&b2[b3]===b4){return b3}}}return -1},merge:function(b5,b3){var e=b3.length,b4=b5.length,b2=0;
if(typeof e==="number"){for(;b2<e;b2++){b5[b4++]=b3[b2]}}else{while(b3[b2]!==aE){b5[b4++]=b3[b2++]}}b5.length=b4;
return b5},grep:function(b2,b7,e){var b6,b3=[],b4=0,b5=b2.length;e=!!e;for(;b4<b5;b4++){b6=!!b7(b2[b4],b4);
if(e!==b6){b3.push(b2[b4])}}return b3},map:function(e,b8,b9){var b6,b7,b5=[],b3=0,b2=e.length,b4=e instanceof bJ||b2!==aE&&typeof b2==="number"&&((b2>0&&e[0]&&e[b2-1])||b2===0||bJ.isArray(e));
if(b4){for(;b3<b2;b3++){b6=b8(e[b3],b3,b9);if(b6!=null){b5[b5.length]=b6}}}else{for(b7 in e){b6=b8(e[b7],b7,b9);
if(b6!=null){b5[b5.length]=b6}}}return b5.concat.apply([],b5)},guid:1,proxy:function(b5,b4){var b3,e,b2;
if(typeof b4==="string"){b3=b5[b4];b4=b5;b5=b3}if(!bJ.isFunction(b5)){return aE}e=a7.call(arguments,2);
b2=function(){return b5.apply(b4,e.concat(a7.call(arguments)))};b2.guid=b5.guid=b5.guid||bJ.guid++;return b2
},access:function(e,b7,ca,b8,b5,cb,b9){var b3,b6=ca==null,b4=0,b2=e.length;if(ca&&typeof ca==="object"){for(b4 in ca){bJ.access(e,b7,b4,ca[b4],1,cb,b8)
}b5=1}else{if(b8!==aE){b3=b9===aE&&bJ.isFunction(b8);if(b6){if(b3){b3=b7;b7=function(cd,cc,ce){return b3.call(bJ(cd),ce)
}}else{b7.call(e,b8);b7=null}}if(b7){for(;b4<b2;b4++){b7(e[b4],ca,b3?b8.call(e[b4],b4,b7(e[b4],ca)):b8,b9)
}}b5=1}}return b5?e:b6?b7.call(e):b2?b7(e[0],ca):cb},now:function(){return(new Date()).getTime()}});bJ.ready.promise=function(b5){if(!ai){ai=bJ.Deferred();
if(r.readyState==="complete"){setTimeout(bJ.ready,1)}else{if(r.addEventListener){r.addEventListener("DOMContentLoaded",aI,false);
a5.addEventListener("load",bJ.ready,false)}else{r.attachEvent("onreadystatechange",aI);a5.attachEvent("onload",bJ.ready);
var b4=false;try{b4=a5.frameElement==null&&r.documentElement}catch(b3){}if(b4&&b4.doScroll){(function b2(){if(!bJ.isReady){try{b4.doScroll("left")
}catch(b6){return setTimeout(b2,50)}bJ.ready()}})()}}}}return ai.promise(b5)};bJ.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b2,e){ac["[object "+e+"]"]=e.toLowerCase()
});z=bJ(r);var bX={};function af(b2){var e=bX[b2]={};bJ.each(b2.split(aY),function(b4,b3){e[b3]=true});
return e}bJ.Callbacks=function(cb){cb=typeof cb==="string"?(bX[cb]||af(cb)):bJ.extend({},cb);var b4,e,b5,b3,b6,b7,b8=[],b9=!cb.once&&[],b2=function(cc){b4=cb.memory&&cc;
e=true;b7=b3||0;b3=0;b6=b8.length;b5=true;for(;b8&&b7<b6;b7++){if(b8[b7].apply(cc[0],cc[1])===false&&cb.stopOnFalse){b4=false;
break}}b5=false;if(b8){if(b9){if(b9.length){b2(b9.shift())}}else{if(b4){b8=[]}else{ca.disable()}}}},ca={add:function(){if(b8){var cd=b8.length;
(function cc(ce){bJ.each(ce,function(cg,cf){var ch=bJ.type(cf);if(ch==="function"){if(!cb.unique||!ca.has(cf)){b8.push(cf)
}}else{if(cf&&cf.length&&ch!=="string"){cc(cf)}}})})(arguments);if(b5){b6=b8.length}else{if(b4){b3=cd;
b2(b4)}}}return this},remove:function(){if(b8){bJ.each(arguments,function(ce,cc){var cd;while((cd=bJ.inArray(cc,b8,cd))>-1){b8.splice(cd,1);
if(b5){if(cd<=b6){b6--}if(cd<=b7){b7--}}}})}return this},has:function(cc){return bJ.inArray(cc,b8)>-1
},empty:function(){b8=[];return this},disable:function(){b8=b9=b4=aE;return this},disabled:function(){return !b8
},lock:function(){b9=aE;if(!b4){ca.disable()}return this},locked:function(){return !b9},fireWith:function(cd,cc){cc=cc||[];
cc=[cd,cc.slice?cc.slice():cc];if(b8&&(!e||b9)){if(b5){b9.push(cc)}else{b2(cc)}}return this},fire:function(){ca.fireWith(this,arguments);
return this},fired:function(){return !!e}};return ca};bJ.extend({Deferred:function(b3){var b2=[["resolve","done",bJ.Callbacks("once memory"),"resolved"],["reject","fail",bJ.Callbacks("once memory"),"rejected"],["notify","progress",bJ.Callbacks("memory")]],b4="pending",b5={state:function(){return b4
},always:function(){e.done(arguments).fail(arguments);return this},then:function(){var b6=arguments;return bJ.Deferred(function(b7){bJ.each(b2,function(b9,b8){var cb=b8[0],ca=b6[b9];
e[b8[1]](bJ.isFunction(ca)?function(){var cc=ca.apply(this,arguments);if(cc&&bJ.isFunction(cc.promise)){cc.promise().done(b7.resolve).fail(b7.reject).progress(b7.notify)
}else{b7[cb+"With"](this===e?b7:this,[cc])}}:b7[cb])});b6=null}).promise()},promise:function(b6){return b6!=null?bJ.extend(b6,b5):b5
}},e={};b5.pipe=b5.then;bJ.each(b2,function(b7,b6){var b9=b6[2],b8=b6[3];b5[b6[1]]=b9.add;if(b8){b9.add(function(){b4=b8
},b2[b7^1][2].disable,b2[2][2].lock)}e[b6[0]]=b9.fire;e[b6[0]+"With"]=b9.fireWith});b5.promise(e);if(b3){b3.call(e,e)
}return e},when:function(b5){var b3=0,b7=a7.call(arguments),e=b7.length,b2=e!==1||(b5&&bJ.isFunction(b5.promise))?e:0,ca=b2===1?b5:bJ.Deferred(),b4=function(cc,cd,cb){return function(ce){cd[cc]=this;
cb[cc]=arguments.length>1?a7.call(arguments):ce;if(cb===b9){ca.notifyWith(cd,cb)}else{if(!(--b2)){ca.resolveWith(cd,cb)
}}}},b9,b6,b8;if(e>1){b9=new Array(e);b6=new Array(e);b8=new Array(e);for(;b3<e;b3++){if(b7[b3]&&bJ.isFunction(b7[b3].promise)){b7[b3].promise().done(b4(b3,b8,b7)).fail(ca.reject).progress(b4(b3,b6,b9))
}else{--b2}}}if(!b2){ca.resolveWith(b8,b7)}return ca.promise()}});bJ.support=(function(){var ce,cd,cb,cc,b5,ca,b9,b7,b6,b4,b2,b3=r.createElement("div");
b3.setAttribute("className","t");b3.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cd=b3.getElementsByTagName("*");cb=b3.getElementsByTagName("a")[0];if(!cd||!cb||!cd.length){return{}}cc=r.createElement("select");
b5=cc.appendChild(r.createElement("option"));ca=b3.getElementsByTagName("input")[0];cb.style.cssText="top:1px;float:left;opacity:.5";
ce={leadingWhitespace:(b3.firstChild.nodeType===3),tbody:!b3.getElementsByTagName("tbody").length,htmlSerialize:!!b3.getElementsByTagName("link").length,style:/top/.test(cb.getAttribute("style")),hrefNormalized:(cb.getAttribute("href")==="/a"),opacity:/^0.5/.test(cb.style.opacity),cssFloat:!!cb.style.cssFloat,checkOn:(ca.value==="on"),optSelected:b5.selected,getSetAttribute:b3.className!=="t",enctype:!!r.createElement("form").enctype,html5Clone:r.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(r.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
ca.checked=true;ce.noCloneChecked=ca.cloneNode(true).checked;cc.disabled=true;ce.optDisabled=!b5.disabled;
try{delete b3.test}catch(b8){ce.deleteExpando=false}if(!b3.addEventListener&&b3.attachEvent&&b3.fireEvent){b3.attachEvent("onclick",b2=function(){ce.noCloneEvent=false
});b3.cloneNode(true).fireEvent("onclick");b3.detachEvent("onclick",b2)}ca=r.createElement("input");ca.value="t";
ca.setAttribute("type","radio");ce.radioValue=ca.value==="t";ca.setAttribute("checked","checked");ca.setAttribute("name","t");
b3.appendChild(ca);b9=r.createDocumentFragment();b9.appendChild(b3.lastChild);ce.checkClone=b9.cloneNode(true).cloneNode(true).lastChild.checked;
ce.appendChecked=ca.checked;b9.removeChild(ca);b9.appendChild(b3);if(b3.attachEvent){for(b6 in {submit:true,change:true,focusin:true}){b7="on"+b6;
b4=(b7 in b3);if(!b4){b3.setAttribute(b7,"return;");b4=(typeof b3[b7]==="function")}ce[b6+"Bubbles"]=b4
}}bJ(function(){var cf,cj,ch,ci,cg="padding:0;margin:0;border:0;display:block;overflow:hidden;",e=r.getElementsByTagName("body")[0];
if(!e){return}cf=r.createElement("div");cf.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
e.insertBefore(cf,e.firstChild);cj=r.createElement("div");cf.appendChild(cj);cj.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
ch=cj.getElementsByTagName("td");ch[0].style.cssText="padding:0;margin:0;border:0;display:none";b4=(ch[0].offsetHeight===0);
ch[0].style.display="";ch[1].style.display="none";ce.reliableHiddenOffsets=b4&&(ch[0].offsetHeight===0);
cj.innerHTML="";cj.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
ce.boxSizing=(cj.offsetWidth===4);ce.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);if(a5.getComputedStyle){ce.pixelPosition=(a5.getComputedStyle(cj,null)||{}).top!=="1%";
ce.boxSizingReliable=(a5.getComputedStyle(cj,null)||{width:"4px"}).width==="4px";ci=r.createElement("div");
ci.style.cssText=cj.style.cssText=cg;ci.style.marginRight=ci.style.width="0";cj.style.width="1px";cj.appendChild(ci);
ce.reliableMarginRight=!parseFloat((a5.getComputedStyle(ci,null)||{}).marginRight)}if(typeof cj.style.zoom!=="undefined"){cj.innerHTML="";
cj.style.cssText=cg+"width:1px;padding:1px;display:inline;zoom:1";ce.inlineBlockNeedsLayout=(cj.offsetWidth===3);
cj.style.display="block";cj.style.overflow="visible";cj.innerHTML="<div></div>";cj.firstChild.style.width="5px";
ce.shrinkWrapBlocks=(cj.offsetWidth!==3);cf.style.zoom=1}e.removeChild(cf);cf=cj=ch=ci=null});b9.removeChild(b3);
cd=cb=cc=b5=ca=b9=b3=null;return ce})();var bw=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aO=/([A-Z])/g;bJ.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(bJ.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bJ.cache[e[bJ.expando]]:e[bJ.expando];
return !!e&&!R(e)},data:function(b4,b2,b6,b5){if(!bJ.acceptData(b4)){return}var b7,b9,ca=bJ.expando,b8=typeof b2==="string",cb=b4.nodeType,e=cb?bJ.cache:b4,b3=cb?b4[ca]:b4[ca]&&ca;
if((!b3||!e[b3]||(!b5&&!e[b3].data))&&b8&&b6===aE){return}if(!b3){if(cb){b4[ca]=b3=bJ.deletedIds.pop()||bJ.guid++
}else{b3=ca}}if(!e[b3]){e[b3]={};if(!cb){e[b3].toJSON=bJ.noop}}if(typeof b2==="object"||typeof b2==="function"){if(b5){e[b3]=bJ.extend(e[b3],b2)
}else{e[b3].data=bJ.extend(e[b3].data,b2)}}b7=e[b3];if(!b5){if(!b7.data){b7.data={}}b7=b7.data}if(b6!==aE){b7[bJ.camelCase(b2)]=b6
}if(b8){b9=b7[b2];if(b9==null){b9=b7[bJ.camelCase(b2)]}}else{b9=b7}return b9},removeData:function(b4,b2,b5){if(!bJ.acceptData(b4)){return
}var b8,b7,b6,b9=b4.nodeType,e=b9?bJ.cache:b4,b3=b9?b4[bJ.expando]:bJ.expando;if(!e[b3]){return}if(b2){b8=b5?e[b3]:e[b3].data;
if(b8){if(!bJ.isArray(b2)){if(b2 in b8){b2=[b2]}else{b2=bJ.camelCase(b2);if(b2 in b8){b2=[b2]}else{b2=b2.split(" ")
}}}for(b7=0,b6=b2.length;b7<b6;b7++){delete b8[b2[b7]]}if(!(b5?R:bJ.isEmptyObject)(b8)){return}}}if(!b5){delete e[b3].data;
if(!R(e[b3])){return}}if(b9){bJ.cleanData([b4],true)}else{if(bJ.support.deleteExpando||e!=e.window){delete e[b3]
}else{e[b3]=null}}},_data:function(b2,e,b3){return bJ.data(b2,e,b3,true)},acceptData:function(b2){var e=b2.nodeName&&bJ.noData[b2.nodeName.toLowerCase()];
return !e||e!==true&&b2.getAttribute("classid")===e}});bJ.fn.extend({data:function(ca,b9){var b5,b2,b8,e,b4,b3=this[0],b7=0,b6=null;
if(ca===aE){if(this.length){b6=bJ.data(b3);if(b3.nodeType===1&&!bJ._data(b3,"parsedAttrs")){b8=b3.attributes;
for(b4=b8.length;b7<b4;b7++){e=b8[b7].name;if(!e.indexOf("data-")){e=bJ.camelCase(e.substring(5));by(b3,e,b6[e])
}}bJ._data(b3,"parsedAttrs",true)}}return b6}if(typeof ca==="object"){return this.each(function(){bJ.data(this,ca)
})}b5=ca.split(".",2);b5[1]=b5[1]?"."+b5[1]:"";b2=b5[1]+"!";return bJ.access(this,function(cb){if(cb===aE){b6=this.triggerHandler("getData"+b2,[b5[0]]);
if(b6===aE&&b3){b6=bJ.data(b3,ca);b6=by(b3,ca,b6)}return b6===aE&&b5[1]?this.data(b5[0]):b6}b5[1]=cb;
this.each(function(){var cc=bJ(this);cc.triggerHandler("setData"+b2,b5);bJ.data(this,ca,cb);cc.triggerHandler("changeData"+b2,b5)
})},null,b9,arguments.length>1,null,false)},removeData:function(e){return this.each(function(){bJ.removeData(this,e)
})}});function by(b4,b3,b5){if(b5===aE&&b4.nodeType===1){var b2="data-"+b3.replace(aO,"-$1").toLowerCase();
b5=b4.getAttribute(b2);if(typeof b5==="string"){try{b5=b5==="true"?true:b5==="false"?false:b5==="null"?null:+b5+""===b5?+b5:bw.test(b5)?bJ.parseJSON(b5):b5
}catch(b6){}bJ.data(b4,b3,b5)}else{b5=aE}}return b5}function R(b2){var e;for(e in b2){if(e==="data"&&bJ.isEmptyObject(b2[e])){continue
}if(e!=="toJSON"){return false}}return true}bJ.extend({queue:function(b3,b2,b4){var e;if(b3){b2=(b2||"fx")+"queue";
e=bJ._data(b3,b2);if(b4){if(!e||bJ.isArray(b4)){e=bJ._data(b3,b2,bJ.makeArray(b4))}else{e.push(b4)}}return e||[]
}},dequeue:function(b6,b5){b5=b5||"fx";var b2=bJ.queue(b6,b5),b7=b2.length,b4=b2.shift(),e=bJ._queueHooks(b6,b5),b3=function(){bJ.dequeue(b6,b5)
};if(b4==="inprogress"){b4=b2.shift();b7--}if(b4){if(b5==="fx"){b2.unshift("inprogress")}delete e.stop;
b4.call(b6,b3,e)}if(!b7&&e){e.empty.fire()}},_queueHooks:function(b3,b2){var e=b2+"queueHooks";return bJ._data(b3,e)||bJ._data(b3,e,{empty:bJ.Callbacks("once memory").add(function(){bJ.removeData(b3,b2+"queue",true);
bJ.removeData(b3,e,true)})})}});bJ.fn.extend({queue:function(e,b2){var b3=2;if(typeof e!=="string"){b2=e;
e="fx";b3--}if(arguments.length<b3){return bJ.queue(this[0],e)}return b2===aE?this:this.each(function(){var b4=bJ.queue(this,e,b2);
bJ._queueHooks(this,e);if(e==="fx"&&b4[0]!=="inprogress"){bJ.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){bJ.dequeue(this,e)
})},delay:function(b2,e){b2=bJ.fx?bJ.fx.speeds[b2]||b2:b2;e=e||"fx";return this.queue(e,function(b4,b3){var b5=setTimeout(b4,b2);
b3.stop=function(){clearTimeout(b5)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(b3,b7){var b2,b4=1,b8=bJ.Deferred(),b6=this,e=this.length,b5=function(){if(!(--b4)){b8.resolveWith(b6,[b6])
}};if(typeof b3!=="string"){b7=b3;b3=aE}b3=b3||"fx";while(e--){b2=bJ._data(b6[e],b3+"queueHooks");if(b2&&b2.empty){b4++;
b2.empty.add(b5)}}b5();return b8.promise(b7)}});var ba,bY,q,bM=/[\t\r\n]/g,al=/\r/g,m=/^(?:button|input)$/i,aD=/^(?:button|input|object|select|textarea)$/i,G=/^a(?:rea|)$/i,P=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,bO=bJ.support.getSetAttribute;
bJ.fn.extend({attr:function(e,b2){return bJ.access(this,bJ.attr,e,b2,arguments.length>1)},removeAttr:function(e){return this.each(function(){bJ.removeAttr(this,e)
})},prop:function(e,b2){return bJ.access(this,bJ.prop,e,b2,arguments.length>1)},removeProp:function(e){e=bJ.propFix[e]||e;
return this.each(function(){try{this[e]=aE;delete this[e]}catch(b2){}})},addClass:function(b5){var b7,b3,b2,b4,b6,b8,e;
if(bJ.isFunction(b5)){return this.each(function(b9){bJ(this).addClass(b5.call(this,b9,this.className))
})}if(b5&&typeof b5==="string"){b7=b5.split(aY);for(b3=0,b2=this.length;b3<b2;b3++){b4=this[b3];if(b4.nodeType===1){if(!b4.className&&b7.length===1){b4.className=b5
}else{b6=" "+b4.className+" ";for(b8=0,e=b7.length;b8<e;b8++){if(b6.indexOf(" "+b7[b8]+" ")<0){b6+=b7[b8]+" "
}}b4.className=bJ.trim(b6)}}}}return this},removeClass:function(b7){var b4,b5,b6,b8,b2,b3,e;if(bJ.isFunction(b7)){return this.each(function(b9){bJ(this).removeClass(b7.call(this,b9,this.className))
})}if((b7&&typeof b7==="string")||b7===aE){b4=(b7||"").split(aY);for(b3=0,e=this.length;b3<e;b3++){b6=this[b3];
if(b6.nodeType===1&&b6.className){b5=(" "+b6.className+" ").replace(bM," ");for(b8=0,b2=b4.length;b8<b2;
b8++){while(b5.indexOf(" "+b4[b8]+" ")>=0){b5=b5.replace(" "+b4[b8]+" "," ")}}b6.className=b7?bJ.trim(b5):""
}}}return this},toggleClass:function(b4,b2){var b3=typeof b4,e=typeof b2==="boolean";if(bJ.isFunction(b4)){return this.each(function(b5){bJ(this).toggleClass(b4.call(this,b5,this.className,b2),b2)
})}return this.each(function(){if(b3==="string"){var b7,b6=0,b5=bJ(this),b8=b2,b9=b4.split(aY);while((b7=b9[b6++])){b8=e?b8:!b5.hasClass(b7);
b5[b8?"addClass":"removeClass"](b7)}}else{if(b3==="undefined"||b3==="boolean"){if(this.className){bJ._data(this,"__className__",this.className)
}this.className=this.className||b4===false?"":bJ._data(this,"__className__")||""}}})},hasClass:function(e){var b4=" "+e+" ",b3=0,b2=this.length;
for(;b3<b2;b3++){if(this[b3].nodeType===1&&(" "+this[b3].className+" ").replace(bM," ").indexOf(b4)>=0){return true
}}return false},val:function(b4){var e,b2,b5,b3=this[0];if(!arguments.length){if(b3){e=bJ.valHooks[b3.type]||bJ.valHooks[b3.nodeName.toLowerCase()];
if(e&&"get" in e&&(b2=e.get(b3,"value"))!==aE){return b2}b2=b3.value;return typeof b2==="string"?b2.replace(al,""):b2==null?"":b2
}return}b5=bJ.isFunction(b4);return this.each(function(b7){var b8,b6=bJ(this);if(this.nodeType!==1){return
}if(b5){b8=b4.call(this,b7,b6.val())}else{b8=b4}if(b8==null){b8=""}else{if(typeof b8==="number"){b8+=""
}else{if(bJ.isArray(b8)){b8=bJ.map(b8,function(b9){return b9==null?"":b9+""})}}}e=bJ.valHooks[this.type]||bJ.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,b8,"value")===aE){this.value=b8}})}});bJ.extend({valHooks:{option:{get:function(e){var b2=e.attributes.value;
return !b2||b2.specified?e.value:e.text}},select:{get:function(e){var b7,b3,b9=e.options,b5=e.selectedIndex,b4=e.type==="select-one"||b5<0,b8=b4?null:[],b6=b4?b5+1:b9.length,b2=b5<0?b6:b4?b5:0;
for(;b2<b6;b2++){b3=b9[b2];if((b3.selected||b2===b5)&&(bJ.support.optDisabled?!b3.disabled:b3.getAttribute("disabled")===null)&&(!b3.parentNode.disabled||!bJ.nodeName(b3.parentNode,"optgroup"))){b7=bJ(b3).val();
if(b4){return b7}b8.push(b7)}}return b8},set:function(b2,b3){var e=bJ.makeArray(b3);bJ(b2).find("option").each(function(){this.selected=bJ.inArray(bJ(this).val(),e)>=0
});if(!e.length){b2.selectedIndex=-1}return e}}},attrFn:{},attr:function(b7,b4,b8,b6){var b3,e,b5,b2=b7.nodeType;
if(!b7||b2===3||b2===8||b2===2){return}if(b6&&bJ.isFunction(bJ.fn[b4])){return bJ(b7)[b4](b8)}if(typeof b7.getAttribute==="undefined"){return bJ.prop(b7,b4,b8)
}b5=b2!==1||!bJ.isXMLDoc(b7);if(b5){b4=b4.toLowerCase();e=bJ.attrHooks[b4]||(P.test(b4)?bY:ba)}if(b8!==aE){if(b8===null){bJ.removeAttr(b7,b4);
return}else{if(e&&"set" in e&&b5&&(b3=e.set(b7,b8,b4))!==aE){return b3}else{b7.setAttribute(b4,b8+"");
return b8}}}else{if(e&&"get" in e&&b5&&(b3=e.get(b7,b4))!==null){return b3}else{b3=b7.getAttribute(b4);
return b3===null?aE:b3}}},removeAttr:function(b4,b6){var b5,b7,b2,e,b3=0;if(b6&&b4.nodeType===1){b7=b6.split(aY);
for(;b3<b7.length;b3++){b2=b7[b3];if(b2){b5=bJ.propFix[b2]||b2;e=P.test(b2);if(!e){bJ.attr(b4,b2,"")}b4.removeAttribute(bO?b2:b5);
if(e&&b5 in b4){b4[b5]=false}}}}},attrHooks:{type:{set:function(e,b2){if(m.test(e.nodeName)&&e.parentNode){bJ.error("type property can't be changed")
}else{if(!bJ.support.radioValue&&b2==="radio"&&bJ.nodeName(e,"input")){var b3=e.value;e.setAttribute("type",b2);
if(b3){e.value=b3}return b2}}}},value:{get:function(b2,e){if(ba&&bJ.nodeName(b2,"button")){return ba.get(b2,e)
}return e in b2?b2.value:null},set:function(b2,b3,e){if(ba&&bJ.nodeName(b2,"button")){return ba.set(b2,b3,e)
}b2.value=b3}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b6,b4,b7){var b3,e,b5,b2=b6.nodeType;
if(!b6||b2===3||b2===8||b2===2){return}b5=b2!==1||!bJ.isXMLDoc(b6);if(b5){b4=bJ.propFix[b4]||b4;e=bJ.propHooks[b4]
}if(b7!==aE){if(e&&"set" in e&&(b3=e.set(b6,b7,b4))!==aE){return b3}else{return(b6[b4]=b7)}}else{if(e&&"get" in e&&(b3=e.get(b6,b4))!==null){return b3
}else{return b6[b4]}}},propHooks:{tabIndex:{get:function(b2){var e=b2.getAttributeNode("tabindex");return e&&e.specified?parseInt(e.value,10):aD.test(b2.nodeName)||G.test(b2.nodeName)&&b2.href?0:aE
}}}});bY={get:function(b2,e){var b4,b3=bJ.prop(b2,e);return b3===true||typeof b3!=="boolean"&&(b4=b2.getAttributeNode(e))&&b4.nodeValue!==false?e.toLowerCase():aE
},set:function(b2,b4,e){var b3;if(b4===false){bJ.removeAttr(b2,e)}else{b3=bJ.propFix[e]||e;if(b3 in b2){b2[b3]=true
}b2.setAttribute(e,e.toLowerCase())}return e}};if(!bO){q={name:true,id:true,coords:true};ba=bJ.valHooks.button={get:function(b3,b2){var e;
e=b3.getAttributeNode(b2);return e&&(q[b2]?e.value!=="":e.specified)?e.value:aE},set:function(b3,b4,b2){var e=b3.getAttributeNode(b2);
if(!e){e=r.createAttribute(b2);b3.setAttributeNode(e)}return(e.value=b4+"")}};bJ.each(["width","height"],function(b2,e){bJ.attrHooks[e]=bJ.extend(bJ.attrHooks[e],{set:function(b3,b4){if(b4===""){b3.setAttribute(e,"auto");
return b4}}})});bJ.attrHooks.contenteditable={get:ba.get,set:function(b2,b3,e){if(b3===""){b3="false"
}ba.set(b2,b3,e)}}}if(!bJ.support.hrefNormalized){bJ.each(["href","src","width","height"],function(b2,e){bJ.attrHooks[e]=bJ.extend(bJ.attrHooks[e],{get:function(b4){var b3=b4.getAttribute(e,2);
return b3===null?aE:b3}})})}if(!bJ.support.style){bJ.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||aE
},set:function(e,b2){return(e.style.cssText=b2+"")}}}if(!bJ.support.optSelected){bJ.propHooks.selected=bJ.extend(bJ.propHooks.selected,{get:function(b2){var e=b2.parentNode;
if(e){e.selectedIndex;if(e.parentNode){e.parentNode.selectedIndex}}return null}})}if(!bJ.support.enctype){bJ.propFix.enctype="encoding"
}if(!bJ.support.checkOn){bJ.each(["radio","checkbox"],function(){bJ.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}})}bJ.each(["radio","checkbox"],function(){bJ.valHooks[this]=bJ.extend(bJ.valHooks[this],{set:function(e,b2){if(bJ.isArray(b2)){return(e.checked=bJ.inArray(bJ(e).val(),b2)>=0)
}}})});var bH=/^(?:textarea|input|select)$/i,bu=/^([^\.]*|)(?:\.(.+)|)$/,bd=/(?:^|\s)hover(\.\S+|)\b/,a6=/^key/,bN=/^(?:mouse|contextmenu)|click/,bB=/^(?:focusinfocus|focusoutblur)$/,au=function(e){return bJ.event.special.hover?e:e.replace(bd,"mouseenter$1 mouseleave$1")
};bJ.event={add:function(b4,b8,cf,b6,b5){var b9,b7,cg,ce,cd,cb,e,cc,b2,b3,ca;if(b4.nodeType===3||b4.nodeType===8||!b8||!cf||!(b9=bJ._data(b4))){return
}if(cf.handler){b2=cf;cf=b2.handler;b5=b2.selector}if(!cf.guid){cf.guid=bJ.guid++}cg=b9.events;if(!cg){b9.events=cg={}
}b7=b9.handle;if(!b7){b9.handle=b7=function(ch){return typeof bJ!=="undefined"&&(!ch||bJ.event.triggered!==ch.type)?bJ.event.dispatch.apply(b7.elem,arguments):aE
};b7.elem=b4}b8=bJ.trim(au(b8)).split(" ");for(ce=0;ce<b8.length;ce++){cd=bu.exec(b8[ce])||[];cb=cd[1];
e=(cd[2]||"").split(".").sort();ca=bJ.event.special[cb]||{};cb=(b5?ca.delegateType:ca.bindType)||cb;ca=bJ.event.special[cb]||{};
cc=bJ.extend({type:cb,origType:cd[1],data:b6,handler:cf,guid:cf.guid,selector:b5,needsContext:b5&&bJ.expr.match.needsContext.test(b5),namespace:e.join(".")},b2);
b3=cg[cb];if(!b3){b3=cg[cb]=[];b3.delegateCount=0;if(!ca.setup||ca.setup.call(b4,b6,e,b7)===false){if(b4.addEventListener){b4.addEventListener(cb,b7,false)
}else{if(b4.attachEvent){b4.attachEvent("on"+cb,b7)}}}}if(ca.add){ca.add.call(b4,cc);if(!cc.handler.guid){cc.handler.guid=cf.guid
}}if(b5){b3.splice(b3.delegateCount++,0,cc)}else{b3.push(cc)}bJ.event.global[cb]=true}b4=null},global:{},remove:function(b4,b9,cf,b5,b8){var cg,ch,cc,b3,b2,b6,b7,ce,cb,e,cd,ca=bJ.hasData(b4)&&bJ._data(b4);
if(!ca||!(ce=ca.events)){return}b9=bJ.trim(au(b9||"")).split(" ");for(cg=0;cg<b9.length;cg++){ch=bu.exec(b9[cg])||[];
cc=b3=ch[1];b2=ch[2];if(!cc){for(cc in ce){bJ.event.remove(b4,cc+b9[cg],cf,b5,true)}continue}cb=bJ.event.special[cc]||{};
cc=(b5?cb.delegateType:cb.bindType)||cc;e=ce[cc]||[];b6=e.length;b2=b2?new RegExp("(^|\\.)"+b2.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
for(b7=0;b7<e.length;b7++){cd=e[b7];if((b8||b3===cd.origType)&&(!cf||cf.guid===cd.guid)&&(!b2||b2.test(cd.namespace))&&(!b5||b5===cd.selector||b5==="**"&&cd.selector)){e.splice(b7--,1);
if(cd.selector){e.delegateCount--}if(cb.remove){cb.remove.call(b4,cd)}}}if(e.length===0&&b6!==e.length){if(!cb.teardown||cb.teardown.call(b4,b2,ca.handle)===false){bJ.removeEvent(b4,cc,ca.handle)
}delete ce[cc]}}if(bJ.isEmptyObject(ce)){delete ca.handle;bJ.removeData(b4,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(b2,b9,b7,cg){if(b7&&(b7.nodeType===3||b7.nodeType===8)){return
}var e,b4,ca,ce,b6,b5,cc,cb,b8,cf,cd=b2.type||b2,b3=[];if(bB.test(cd+bJ.event.triggered)){return}if(cd.indexOf("!")>=0){cd=cd.slice(0,-1);
b4=true}if(cd.indexOf(".")>=0){b3=cd.split(".");cd=b3.shift();b3.sort()}if((!b7||bJ.event.customEvent[cd])&&!bJ.event.global[cd]){return
}b2=typeof b2==="object"?b2[bJ.expando]?b2:new bJ.Event(cd,b2):new bJ.Event(cd);b2.type=cd;b2.isTrigger=true;
b2.exclusive=b4;b2.namespace=b3.join(".");b2.namespace_re=b2.namespace?new RegExp("(^|\\.)"+b3.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b5=cd.indexOf(":")<0?"on"+cd:"";if(!b7){e=bJ.cache;for(ca in e){if(e[ca].events&&e[ca].events[cd]){bJ.event.trigger(b2,b9,e[ca].handle.elem,true)
}}return}b2.result=aE;if(!b2.target){b2.target=b7}b9=b9!=null?bJ.makeArray(b9):[];b9.unshift(b2);cc=bJ.event.special[cd]||{};
if(cc.trigger&&cc.trigger.apply(b7,b9)===false){return}b8=[[b7,cc.bindType||cd]];if(!cg&&!cc.noBubble&&!bJ.isWindow(b7)){cf=cc.delegateType||cd;
ce=bB.test(cf+cd)?b7:b7.parentNode;for(b6=b7;ce;ce=ce.parentNode){b8.push([ce,cf]);b6=ce}if(b6===(b7.ownerDocument||r)){b8.push([b6.defaultView||b6.parentWindow||a5,cf])
}}for(ca=0;ca<b8.length&&!b2.isPropagationStopped();ca++){ce=b8[ca][0];b2.type=b8[ca][1];cb=(bJ._data(ce,"events")||{})[b2.type]&&bJ._data(ce,"handle");
if(cb){cb.apply(ce,b9)}cb=b5&&ce[b5];if(cb&&bJ.acceptData(ce)&&cb.apply&&cb.apply(ce,b9)===false){b2.preventDefault()
}}b2.type=cd;if(!cg&&!b2.isDefaultPrevented()){if((!cc._default||cc._default.apply(b7.ownerDocument,b9)===false)&&!(cd==="click"&&bJ.nodeName(b7,"a"))&&bJ.acceptData(b7)){if(b5&&b7[cd]&&((cd!=="focus"&&cd!=="blur")||b2.target.offsetWidth!==0)&&!bJ.isWindow(b7)){b6=b7[b5];
if(b6){b7[b5]=null}bJ.event.triggered=cd;b7[cd]();bJ.event.triggered=aE;if(b6){b7[b5]=b6}}}}return b2.result
},dispatch:function(e){e=bJ.event.fix(e||a5.event);var b8,b7,ch,cb,ca,b2,b9,cf,b4,cg,b5=((bJ._data(this,"events")||{})[e.type]||[]),b6=b5.delegateCount,cd=a7.call(arguments),b3=!e.exclusive&&!e.namespace,cc=bJ.event.special[e.type]||{},ce=[];
cd[0]=e;e.delegateTarget=this;if(cc.preDispatch&&cc.preDispatch.call(this,e)===false){return}if(b6&&!(e.button&&e.type==="click")){for(ch=e.target;
ch!=this;ch=ch.parentNode||this){if(ch.disabled!==true||e.type!=="click"){ca={};b9=[];for(b8=0;b8<b6;
b8++){cf=b5[b8];b4=cf.selector;if(ca[b4]===aE){ca[b4]=cf.needsContext?bJ(b4,this).index(ch)>=0:bJ.find(b4,this,null,[ch]).length
}if(ca[b4]){b9.push(cf)}}if(b9.length){ce.push({elem:ch,matches:b9})}}}}if(b5.length>b6){ce.push({elem:this,matches:b5.slice(b6)})
}for(b8=0;b8<ce.length&&!e.isPropagationStopped();b8++){b2=ce[b8];e.currentTarget=b2.elem;for(b7=0;b7<b2.matches.length&&!e.isImmediatePropagationStopped();
b7++){cf=b2.matches[b7];if(b3||(!e.namespace&&!cf.namespace)||e.namespace_re&&e.namespace_re.test(cf.namespace)){e.data=cf.data;
e.handleObj=cf;cb=((bJ.event.special[cf.origType]||{}).handle||cf.handler).apply(b2.elem,cd);if(cb!==aE){e.result=cb;
if(cb===false){e.preventDefault();e.stopPropagation()}}}}}if(cc.postDispatch){cc.postDispatch.call(this,e)
}return e.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b2,e){if(b2.which==null){b2.which=e.charCode!=null?e.charCode:e.keyCode
}return b2}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b4,b3){var b5,b6,e,b2=b3.button,b7=b3.fromElement;
if(b4.pageX==null&&b3.clientX!=null){b5=b4.target.ownerDocument||r;b6=b5.documentElement;e=b5.body;b4.pageX=b3.clientX+(b6&&b6.scrollLeft||e&&e.scrollLeft||0)-(b6&&b6.clientLeft||e&&e.clientLeft||0);
b4.pageY=b3.clientY+(b6&&b6.scrollTop||e&&e.scrollTop||0)-(b6&&b6.clientTop||e&&e.clientTop||0)}if(!b4.relatedTarget&&b7){b4.relatedTarget=b7===b4.target?b3.toElement:b7
}if(!b4.which&&b2!==aE){b4.which=(b2&1?1:(b2&2?3:(b2&4?2:0)))}return b4}},fix:function(b3){if(b3[bJ.expando]){return b3
}var b2,b6,e=b3,b4=bJ.event.fixHooks[b3.type]||{},b5=b4.props?this.props.concat(b4.props):this.props;
b3=bJ.Event(e);for(b2=b5.length;b2;){b6=b5[--b2];b3[b6]=e[b6]}if(!b3.target){b3.target=e.srcElement||r
}if(b3.target.nodeType===3){b3.target=b3.target.parentNode}b3.metaKey=!!b3.metaKey;return b4.filter?b4.filter(b3,e):b3
},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(b3,b2,e){if(bJ.isWindow(this)){this.onbeforeunload=e
}},teardown:function(b2,e){if(this.onbeforeunload===e){this.onbeforeunload=null}}}},simulate:function(b3,b5,b4,b2){var b6=bJ.extend(new bJ.Event(),b4,{type:b3,isSimulated:true,originalEvent:{}});
if(b2){bJ.event.trigger(b6,null,b5)}else{bJ.event.dispatch.call(b5,b6)}if(b6.isDefaultPrevented()){b4.preventDefault()
}}};bJ.event.handle=bJ.event.dispatch;bJ.removeEvent=r.removeEventListener?function(b2,e,b3){if(b2.removeEventListener){b2.removeEventListener(e,b3,false)
}}:function(b3,b2,b4){var e="on"+b2;if(b3.detachEvent){if(typeof b3[e]==="undefined"){b3[e]=null}b3.detachEvent(e,b4)
}};bJ.Event=function(b2,e){if(!(this instanceof bJ.Event)){return new bJ.Event(b2,e)}if(b2&&b2.type){this.originalEvent=b2;
this.type=b2.type;this.isDefaultPrevented=(b2.defaultPrevented||b2.returnValue===false||b2.getPreventDefault&&b2.getPreventDefault())?U:aa
}else{this.type=b2}if(e){bJ.extend(this,e)}this.timeStamp=b2&&b2.timeStamp||bJ.now();this[bJ.expando]=true
};function aa(){return false}function U(){return true}bJ.Event.prototype={preventDefault:function(){this.isDefaultPrevented=U;
var b2=this.originalEvent;if(!b2){return}if(b2.preventDefault){b2.preventDefault()}else{b2.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=U;var b2=this.originalEvent;if(!b2){return}if(b2.stopPropagation){b2.stopPropagation()
}b2.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U;this.stopPropagation()
},isDefaultPrevented:aa,isPropagationStopped:aa,isImmediatePropagationStopped:aa};bJ.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b2,e){bJ.event.special[b2]={delegateType:e,bindType:e,handle:function(b6){var b4,b8=this,b7=b6.relatedTarget,b5=b6.handleObj,b3=b5.selector;
if(!b7||(b7!==b8&&!bJ.contains(b8,b7))){b6.type=b5.origType;b4=b5.handler.apply(this,arguments);b6.type=e
}return b4}}});if(!bJ.support.submitBubbles){bJ.event.special.submit={setup:function(){if(bJ.nodeName(this,"form")){return false
}bJ.event.add(this,"click._submit keypress._submit",function(b4){var b3=b4.target,b2=bJ.nodeName(b3,"input")||bJ.nodeName(b3,"button")?b3.form:aE;
if(b2&&!bJ._data(b2,"_submit_attached")){bJ.event.add(b2,"submit._submit",function(e){e._submit_bubble=true
});bJ._data(b2,"_submit_attached",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bJ.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(bJ.nodeName(this,"form")){return false
}bJ.event.remove(this,"._submit")}}}if(!bJ.support.changeBubbles){bJ.event.special.change={setup:function(){if(bH.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bJ.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});bJ.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bJ.event.simulate("change",this,e,true)})}return false}bJ.event.add(this,"beforeactivate._change",function(b3){var b2=b3.target;
if(bH.test(b2.nodeName)&&!bJ._data(b2,"_change_attached")){bJ.event.add(b2,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bJ.event.simulate("change",this.parentNode,e,true)
}});bJ._data(b2,"_change_attached",true)}})},handle:function(b2){var e=b2.target;if(this!==e||b2.isSimulated||b2.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b2.handleObj.handler.apply(this,arguments)
}},teardown:function(){bJ.event.remove(this,"._change");return !bH.test(this.nodeName)}}}if(!bJ.support.focusinBubbles){bJ.each({focus:"focusin",blur:"focusout"},function(b4,e){var b2=0,b3=function(b5){bJ.event.simulate(e,b5.target,bJ.event.fix(b5),true)
};bJ.event.special[e]={setup:function(){if(b2++===0){r.addEventListener(b4,b3,true)}},teardown:function(){if(--b2===0){r.removeEventListener(b4,b3,true)
}}}})}bJ.fn.extend({on:function(b3,e,b6,b5,b2){var b7,b4;if(typeof b3==="object"){if(typeof e!=="string"){b6=b6||e;
e=aE}for(b4 in b3){this.on(b4,e,b6,b3[b4],b2)}return this}if(b6==null&&b5==null){b5=e;b6=e=aE}else{if(b5==null){if(typeof e==="string"){b5=b6;
b6=aE}else{b5=b6;b6=e;e=aE}}}if(b5===false){b5=aa}else{if(!b5){return this}}if(b2===1){b7=b5;b5=function(b8){bJ().off(b8);
return b7.apply(this,arguments)};b5.guid=b7.guid||(b7.guid=bJ.guid++)}return this.each(function(){bJ.event.add(this,b3,b5,b6,e)
})},one:function(b2,e,b4,b3){return this.on(b2,e,b4,b3,1)},off:function(b3,e,b5){var b2,b4;if(b3&&b3.preventDefault&&b3.handleObj){b2=b3.handleObj;
bJ(b3.delegateTarget).off(b2.namespace?b2.origType+"."+b2.namespace:b2.origType,b2.selector,b2.handler);
return this}if(typeof b3==="object"){for(b4 in b3){this.off(b4,e,b3[b4])}return this}if(e===false||typeof e==="function"){b5=e;
e=aE}if(b5===false){b5=aa}return this.each(function(){bJ.event.remove(this,b3,b5,e)})},bind:function(e,b3,b2){return this.on(e,null,b3,b2)
},unbind:function(e,b2){return this.off(e,null,b2)},live:function(e,b3,b2){bJ(this.context).on(e,this.selector,b3,b2);
return this},die:function(e,b2){bJ(this.context).off(e,this.selector||"**",b2);return this},delegate:function(e,b2,b4,b3){return this.on(b2,e,b4,b3)
},undelegate:function(e,b2,b3){return arguments.length===1?this.off(e,"**"):this.off(b2,e||"**",b3)},trigger:function(e,b2){return this.each(function(){bJ.event.trigger(e,b2,this)
})},triggerHandler:function(e,b2){if(this[0]){return bJ.event.trigger(e,b2,this[0],true)}},toggle:function(b4){var b2=arguments,e=b4.guid||bJ.guid++,b3=0,b5=function(b6){var b7=(bJ._data(this,"lastToggle"+b4.guid)||0)%b3;
bJ._data(this,"lastToggle"+b4.guid,b7+1);b6.preventDefault();return b2[b7].apply(this,arguments)||false
};b5.guid=e;while(b3<b2.length){b2[b3++].guid=e}return this.click(b5)},hover:function(e,b2){return this.mouseenter(e).mouseleave(b2||e)
}});bJ.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b2,e){bJ.fn[e]=function(b4,b3){if(b3==null){b3=b4;
b4=null}return arguments.length>0?this.on(e,null,b4,b3):this.trigger(e)};if(a6.test(e)){bJ.event.fixHooks[e]=bJ.event.keyHooks
}if(bN.test(e)){bJ.event.fixHooks[e]=bJ.event.mouseHooks}});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function(cV,ck){var c0,cd,cO,b3,cp,cD,cg,cj,cf,cM,cc=true,cx="undefined",c2=("sizcache"+Math.random()).replace(".",""),b7=String,cb=cV.document,ce=cb.documentElement,cu=0,ci=0,cH=[].pop,cZ=[].push,co=[].slice,cr=[].indexOf||function(db){var da=0,e=this.length;
for(;da<e;da++){if(this[da]===db){return da}}return -1},c4=function(e,da){e[c2]=da==null||da;return e
},c8=function(){var e={},da=[];return c4(function(db,dc){if(da.push(db)>cO.cacheLength){delete e[da.shift()]
}return(e[db+" "]=dc)},e)},cX=c8(),cY=c8(),cq=c8(),cB="[\\x20\\t\\r\\n\\f]",cn="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",cl=cn.replace("w","w#"),c7="([*^$|!~]?=)",cS="\\["+cB+"*("+cn+")"+cB+"*(?:"+c7+cB+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cl+")|)|)"+cB+"*\\]",c9=":("+cn+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cS+")|[^:]|\\\\.)*|.*))\\)|)",cC=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cB+"*((?:-\\d)?\\d*)"+cB+"*\\)|)(?=[^-]|$)",cW=new RegExp("^"+cB+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cB+"+$","g"),b8=new RegExp("^"+cB+"*,"+cB+"*"),cK=new RegExp("^"+cB+"*([\\x20\\t\\r\\n\\f>+~])"+cB+"*"),cP=new RegExp(c9),cR=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,cG=/^:not/,cU=/[\x20\t\r\n\f]*[+~]/,c3=/:not\($/,cv=/h\d/i,cQ=/input|select|textarea|button/i,cw=/\\(?!\\)/g,cJ={ID:new RegExp("^#("+cn+")"),CLASS:new RegExp("^\\.("+cn+")"),NAME:new RegExp("^\\[name=['\"]?("+cn+")['\"]?\\]"),TAG:new RegExp("^("+cn.replace("w","w*")+")"),ATTR:new RegExp("^"+cS),PSEUDO:new RegExp("^"+c9),POS:new RegExp(cC,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+cB+"*(even|odd|(([+-]|)(\\d*)n|)"+cB+"*(?:([+-]|)"+cB+"*(\\d+)|))"+cB+"*\\)|)","i"),needsContext:new RegExp("^"+cB+"*[>+~]|"+cC,"i")},cN=function(da){var dc=cb.createElement("div");
try{return da(dc)}catch(db){return false}finally{dc=null}},ca=cN(function(e){e.appendChild(cb.createComment(""));
return !e.getElementsByTagName("*").length}),cF=cN(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild&&typeof e.firstChild.getAttribute!==cx&&e.firstChild.getAttribute("href")==="#"
}),ct=cN(function(da){da.innerHTML="<select></select>";var e=typeof da.lastChild.getAttribute("multiple");
return e!=="boolean"&&e!=="string"}),cE=cN(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false}e.lastChild.className="e";
return e.getElementsByClassName("e").length===2}),b2=cN(function(da){da.id=c2+0;da.innerHTML="<a name='"+c2+"'></a><div name='"+c2+"'></div>";
ce.insertBefore(da,ce.firstChild);var e=cb.getElementsByName&&cb.getElementsByName(c2).length===2+cb.getElementsByName(c2+0).length;
cd=!cb.getElementById(c2);ce.removeChild(da);return e});try{co.call(ce.childNodes,0)[0].nodeType}catch(c6){co=function(da){var db,e=[];
for(;(db=this[da]);da++){e.push(db)}return e}}function cT(dc,e,de,dh){de=de||[];e=e||cb;var df,da,dg,db,dd=e.nodeType;
if(!dc||typeof dc!=="string"){return de}if(dd!==1&&dd!==9){return[]}dg=cp(e);if(!dg&&!dh){if((df=cR.exec(dc))){if((db=df[1])){if(dd===9){da=e.getElementById(db);
if(da&&da.parentNode){if(da.id===db){de.push(da);return de}}else{return de}}else{if(e.ownerDocument&&(da=e.ownerDocument.getElementById(db))&&cD(e,da)&&da.id===db){de.push(da);
return de}}}else{if(df[2]){cZ.apply(de,co.call(e.getElementsByTagName(dc),0));return de}else{if((db=df[3])&&cE&&e.getElementsByClassName){cZ.apply(de,co.call(e.getElementsByClassName(db),0));
return de}}}}}return c1(dc.replace(cW,"$1"),e,de,dh,dg)}cT.matches=function(da,e){return cT(da,null,null,e)
};cT.matchesSelector=function(e,da){return cT(da,null,null,[e]).length>0};function cL(e){return function(db){var da=db.nodeName.toLowerCase();
return da==="input"&&db.type===e}}function b6(e){return function(db){var da=db.nodeName.toLowerCase();
return(da==="input"||da==="button")&&db.type===e}}function cI(e){return c4(function(da){da=+da;return c4(function(db,df){var dd,dc=e([],db.length,da),de=dc.length;
while(de--){if(db[(dd=dc[de])]){db[dd]=!(df[dd]=db[dd])}}})})}b3=cT.getText=function(dd){var dc,da="",db=0,e=dd.nodeType;
if(e){if(e===1||e===9||e===11){if(typeof dd.textContent==="string"){return dd.textContent}else{for(dd=dd.firstChild;
dd;dd=dd.nextSibling){da+=b3(dd)}}}else{if(e===3||e===4){return dd.nodeValue}}}else{for(;(dc=dd[db]);
db++){da+=b3(dc)}}return da};cp=cT.isXML=function(e){var da=e&&(e.ownerDocument||e).documentElement;return da?da.nodeName!=="HTML":false
};cD=cT.contains=ce.contains?function(da,e){var dc=da.nodeType===9?da.documentElement:da,db=e&&e.parentNode;
return da===db||!!(db&&db.nodeType===1&&dc.contains&&dc.contains(db))}:ce.compareDocumentPosition?function(da,e){return e&&!!(da.compareDocumentPosition(e)&16)
}:function(da,e){while((e=e.parentNode)){if(e===da){return true}}return false};cT.attr=function(db,da){var dc,e=cp(db);
if(!e){da=da.toLowerCase()}if((dc=cO.attrHandle[da])){return dc(db)}if(e||ct){return db.getAttribute(da)
}dc=db.getAttributeNode(da);return dc?typeof db[da]==="boolean"?db[da]?da:null:dc.specified?dc.value:null:null
};cO=cT.selectors={cacheLength:50,createPseudo:c4,match:cJ,attrHandle:cF?{}:{href:function(e){return e.getAttribute("href",2)
},type:function(e){return e.getAttribute("type")}},find:{ID:cd?function(dc,db,da){if(typeof db.getElementById!==cx&&!da){var e=db.getElementById(dc);
return e&&e.parentNode?[e]:[]}}:function(dc,db,da){if(typeof db.getElementById!==cx&&!da){var e=db.getElementById(dc);
return e?e.id===dc||typeof e.getAttributeNode!==cx&&e.getAttributeNode("id").value===dc?[e]:ck:[]}},TAG:ca?function(e,da){if(typeof da.getElementsByTagName!==cx){return da.getElementsByTagName(e)
}}:function(e,dd){var dc=dd.getElementsByTagName(e);if(e==="*"){var de,db=[],da=0;for(;(de=dc[da]);da++){if(de.nodeType===1){db.push(de)
}}return db}return dc},NAME:b2&&function(e,da){if(typeof da.getElementsByName!==cx){return da.getElementsByName(name)
}},CLASS:cE&&function(db,da,e){if(typeof da.getElementsByClassName!==cx&&!e){return da.getElementsByClassName(db)
}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cw,"");
e[3]=(e[4]||e[5]||"").replace(cw,"");if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1]==="nth"){if(!e[2]){cT.error(e[0])}e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd"));
e[4]=+((e[6]+e[7])||e[2]==="odd")}else{if(e[2]){cT.error(e[0])}}return e},PSEUDO:function(da){var db,e;
if(cJ.CHILD.test(da[0])){return null}if(da[3]){da[2]=da[3]}else{if((db=da[4])){if(cP.test(db)&&(e=b4(db,true))&&(e=db.indexOf(")",db.length-e)-db.length)){db=db.slice(0,e);
da[0]=da[0].slice(0,e)}da[2]=db}}return da.slice(0,3)}},filter:{ID:cd?function(e){e=e.replace(cw,"");
return function(da){return da.getAttribute("id")===e}}:function(e){e=e.replace(cw,"");return function(db){var da=typeof db.getAttributeNode!==cx&&db.getAttributeNode("id");
return da&&da.value===e}},TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace(cw,"").toLowerCase();
return function(da){return da.nodeName&&da.nodeName.toLowerCase()===e}},CLASS:function(e){var da=cX[c2][e+" "];
return da||(da=new RegExp("(^|"+cB+")"+e+"("+cB+"|$)"))&&cX(e,function(db){return da.test(db.className||(typeof db.getAttribute!==cx&&db.getAttribute("class"))||"")
})},ATTR:function(db,da,e){return function(de,dd){var dc=cT.attr(de,db);if(dc==null){return da==="!="
}if(!da){return true}dc+="";return da==="="?dc===e:da==="!="?dc!==e:da==="^="?e&&dc.indexOf(e)===0:da==="*="?e&&dc.indexOf(e)>-1:da==="$="?e&&dc.substr(dc.length-e.length)===e:da==="~="?(" "+dc+" ").indexOf(e)>-1:da==="|="?dc===e||dc.substr(0,e.length+1)===e+"-":false
}},CHILD:function(e,db,dc,da){if(e==="nth"){return function(df){var de,dg,dd=df.parentNode;if(dc===1&&da===0){return true
}if(dd){dg=0;for(de=dd.firstChild;de;de=de.nextSibling){if(de.nodeType===1){dg++;if(df===de){break}}}}dg-=da;
return dg===dc||(dg%dc===0&&dg/dc>=0)}}return function(de){var dd=de;switch(e){case"only":case"first":while((dd=dd.previousSibling)){if(dd.nodeType===1){return false
}}if(e==="first"){return true}dd=de;case"last":while((dd=dd.nextSibling)){if(dd.nodeType===1){return false
}}return true}}},PSEUDO:function(dc,db){var e,da=cO.pseudos[dc]||cO.setFilters[dc.toLowerCase()]||cT.error("unsupported pseudo: "+dc);
if(da[c2]){return da(db)}if(da.length>1){e=[dc,dc,"",db];return cO.setFilters.hasOwnProperty(dc.toLowerCase())?c4(function(df,dh){var de,dd=da(df,db),dg=dd.length;
while(dg--){de=cr.call(df,dd[dg]);df[de]=!(dh[de]=dd[dg])}}):function(dd){return da(dd,0,e)}}return da
}},pseudos:{not:c4(function(e){var da=[],db=[],dc=cg(e.replace(cW,"$1"));return dc[c2]?c4(function(de,dj,dh,df){var di,dd=dc(de,null,df,[]),dg=de.length;
while(dg--){if((di=dd[dg])){de[dg]=!(dj[dg]=di)}}}):function(df,de,dd){da[0]=df;dc(da,null,dd,db);return !db.pop()
}}),has:c4(function(e){return function(da){return cT(e,da).length>0}}),contains:c4(function(e){return function(da){return(da.textContent||da.innerText||b3(da)).indexOf(e)>-1
}}),enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var da=e.nodeName.toLowerCase();
return(da==="input"&&!!e.checked)||(da==="option"&&!!e.selected)},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true},parent:function(e){return !cO.pseudos.empty(e)},empty:function(da){var e;da=da.firstChild;
while(da){if(da.nodeName>"@"||(e=da.nodeType)===3||e===4){return false}da=da.nextSibling}return true},header:function(e){return cv.test(e.nodeName)
},text:function(db){var da,e;return db.nodeName.toLowerCase()==="input"&&(da=db.type)==="text"&&((e=db.getAttribute("type"))==null||e.toLowerCase()===da)
},radio:cL("radio"),checkbox:cL("checkbox"),file:cL("file"),password:cL("password"),image:cL("image"),submit:b6("submit"),reset:b6("reset"),button:function(da){var e=da.nodeName.toLowerCase();
return e==="input"&&da.type==="button"||e==="button"},input:function(e){return cQ.test(e.nodeName)},focus:function(e){var da=e.ownerDocument;
return e===da.activeElement&&(!da.hasFocus||da.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement
},first:cI(function(){return[0]}),last:cI(function(e,da){return[da-1]}),eq:cI(function(e,db,da){return[da<0?da+db:da]
}),even:cI(function(e,db){for(var da=0;da<db;da+=2){e.push(da)}return e}),odd:cI(function(e,db){for(var da=1;
da<db;da+=2){e.push(da)}return e}),lt:cI(function(e,dc,db){for(var da=db<0?db+dc:db;--da>=0;){e.push(da)
}return e}),gt:cI(function(e,dc,db){for(var da=db<0?db+dc:db;++da<dc;){e.push(da)}return e})}};function b5(da,e,db){if(da===e){return db
}var dc=da.nextSibling;while(dc){if(dc===e){return -1}dc=dc.nextSibling}return 1}cj=ce.compareDocumentPosition?function(da,e){if(da===e){cf=true;
return 0}return(!da.compareDocumentPosition||!e.compareDocumentPosition?da.compareDocumentPosition:da.compareDocumentPosition(e)&4)?-1:1
}:function(dh,dg){if(dh===dg){cf=true;return 0}else{if(dh.sourceIndex&&dg.sourceIndex){return dh.sourceIndex-dg.sourceIndex
}}var de,da,db=[],e=[],dd=dh.parentNode,df=dg.parentNode,di=dd;if(dd===df){return b5(dh,dg)}else{if(!dd){return -1
}else{if(!df){return 1}}}while(di){db.unshift(di);di=di.parentNode}di=df;while(di){e.unshift(di);di=di.parentNode
}de=db.length;da=e.length;for(var dc=0;dc<de&&dc<da;dc++){if(db[dc]!==e[dc]){return b5(db[dc],e[dc])}}return dc===de?b5(dh,e[dc],-1):b5(db[dc],dg,1)
};[0,0].sort(cj);cc=!cf;cT.uniqueSort=function(db){var dc,dd=[],da=1,e=0;cf=cc;db.sort(cj);if(cf){for(;
(dc=db[da]);da++){if(dc===db[da-1]){e=dd.push(da)}}while(e--){db.splice(dd[e],1)}}return db};cT.error=function(dd){function dc(){function e(de){return !de?[]:e(de.caller).concat([de.toString().split("(")[0].substring(9)+"("+de.arguments+")"])
}return e(arguments.callee.caller)}var da="";try{da=dc()}catch(db){}throw new Error("Syntax error, unrecognized expression: "+dd+" [CallTrace] - "+da)
};function b4(dd,di){var da,de,dg,dh,df,db,e,dc=cY[c2][dd+" "];if(dc){return di?0:dc.slice(0)}df=dd;db=[];
e=cO.preFilter;while(df){if(!da||(de=b8.exec(df))){if(de){df=df.slice(de[0].length)||df}db.push(dg=[])
}da=false;if((de=cK.exec(df))){dg.push(da=new b7(de.shift()));df=df.slice(da.length);da.type=de[0].replace(cW," ")
}for(dh in cO.filter){if((de=cJ[dh].exec(df))&&(!e[dh]||(de=e[dh](de)))){dg.push(da=new b7(de.shift()));
df=df.slice(da.length);da.type=dh;da.matches=de}}if(!da){break}}return di?df.length:df?cT.error(dd):cY(dd,db).slice(0)
}function cz(dd,db,dc){var e=db.dir,de=dc&&db.dir==="parentNode",da=ci++;return db.first?function(dh,dg,df){while((dh=dh[e])){if(de||dh.nodeType===1){return dd(dh,dg,df)
}}}:function(di,dh,dg){if(!dg){var df,dj=cu+" "+da+" ",dk=dj+c0;while((di=di[e])){if(de||di.nodeType===1){if((df=di[c2])===dk){return di.sizset
}else{if(typeof df==="string"&&df.indexOf(dj)===0){if(di.sizset){return di}}else{di[c2]=dk;if(dd(di,dh,dg)){di.sizset=true;
return di}di.sizset=false}}}}}else{while((di=di[e])){if(de||di.nodeType===1){if(dd(di,dh,dg)){return di
}}}}}}function ch(e){return e.length>1?function(dd,dc,da){var db=e.length;while(db--){if(!e[db](dd,dc,da)){return false
}}return true}:e[0]}function cy(e,da,db,dc,df){var dd,di=[],de=0,dg=e.length,dh=da!=null;for(;de<dg;de++){if((dd=e[de])){if(!db||db(dd,dc,df)){di.push(dd);
if(dh){da.push(de)}}}}return di}function c5(db,da,dd,dc,de,e){if(dc&&!dc[c2]){dc=c5(dc)}if(de&&!de[c2]){de=c5(de,e)
}return c4(function(dq,dm,dh,dp){var ds,dn,dj,di=[],dr=[],dg=dm.length,df=dq||cs(da||"*",dh.nodeType?[dh]:dh,[]),dk=db&&(dq||!da)?cy(df,di,db,dh,dp):df,dl=dd?de||(dq?db:dg||dc)?[]:dm:dk;
if(dd){dd(dk,dl,dh,dp)}if(dc){ds=cy(dl,dr);dc(ds,[],dh,dp);dn=ds.length;while(dn--){if((dj=ds[dn])){dl[dr[dn]]=!(dk[dr[dn]]=dj)
}}}if(dq){if(de||db){if(de){ds=[];dn=dl.length;while(dn--){if((dj=dl[dn])){ds.push((dk[dn]=dj))}}de(null,(dl=[]),ds,dp)
}dn=dl.length;while(dn--){if((dj=dl[dn])&&(ds=de?cr.call(dq,dj):di[dn])>-1){dq[ds]=!(dm[ds]=dj)}}}}else{dl=cy(dl===dm?dl.splice(dg,dl.length):dl);
if(de){de(null,dm,dl,dp)}else{cZ.apply(dm,dl)}}})}function cA(df){var da,dd,db,de=df.length,di=cO.relative[df[0].type],dj=di||cO.relative[" "],dc=di?1:0,dg=cz(function(dk){return dk===da
},dj,true),dh=cz(function(dk){return cr.call(da,dk)>-1},dj,true),e=[function(dm,dl,dk){return(!di&&(dk||dl!==cM))||((da=dl).nodeType?dg(dm,dl,dk):dh(dm,dl,dk))
}];for(;dc<de;dc++){if((dd=cO.relative[df[dc].type])){e=[cz(ch(e),dd)]}else{dd=cO.filter[df[dc].type].apply(null,df[dc].matches);
if(dd[c2]){db=++dc;for(;db<de;db++){if(cO.relative[df[db].type]){break}}return c5(dc>1&&ch(e),dc>1&&df.slice(0,dc-1).join("").replace(cW,"$1"),dd,dc<db&&cA(df.slice(dc,db)),db<de&&cA((df=df.slice(db))),db<de&&df.join(""))
}e.push(dd)}}return ch(e)}function b9(dc,db){var e=db.length>0,dd=dc.length>0,da=function(dn,dh,dm,dl,du){var di,dj,dp,dt=[],ds=0,dk="0",de=dn&&[],dq=du!=null,dr=cM,dg=dn||dd&&cO.find.TAG("*",du&&dh.parentNode||dh),df=(cu+=dr==null?1:Math.E);
if(dq){cM=dh!==cb&&dh;c0=da.el}for(;(di=dg[dk])!=null;dk++){if(dd&&di){for(dj=0;(dp=dc[dj]);dj++){if(dp(di,dh,dm)){dl.push(di);
break}}if(dq){cu=df;c0=++da.el}}if(e){if((di=!dp&&di)){ds--}if(dn){de.push(di)}}}ds+=dk;if(e&&dk!==ds){for(dj=0;
(dp=db[dj]);dj++){dp(de,dt,dh,dm)}if(dn){if(ds>0){while(dk--){if(!(de[dk]||dt[dk])){dt[dk]=cH.call(dl)
}}}dt=cy(dt)}cZ.apply(dl,dt);if(dq&&!dn&&dt.length>0&&(ds+db.length)>1){cT.uniqueSort(dl)}}if(dq){cu=df;
cM=dr}return de};da.el=0;return e?c4(da):da}cg=cT.compile=function(e,de){var db,da=[],dd=[],dc=cq[c2][e+" "];
if(!dc){if(!de){de=b4(e)}db=de.length;while(db--){dc=cA(de[db]);if(dc[c2]){da.push(dc)}else{dd.push(dc)
}}dc=cq(e,b9(dd,da))}return dc};function cs(da,dd,dc){var db=0,e=dd.length;for(;db<e;db++){cT(da,dd[db],dc)
}return dc}function c1(db,e,dd,dh,dg){var de,dk,da,dj,di,df=b4(db),dc=df.length;if(!dh){if(df.length===1){dk=df[0]=df[0].slice(0);
if(dk.length>2&&(da=dk[0]).type==="ID"&&e.nodeType===9&&!dg&&cO.relative[dk[1].type]){e=cO.find.ID(da.matches[0].replace(cw,""),e,dg)[0];
if(!e){return dd}db=db.slice(dk.shift().length)}for(de=cJ.POS.test(db)?-1:dk.length-1;de>=0;de--){da=dk[de];
if(cO.relative[(dj=da.type)]){break}if((di=cO.find[dj])){if((dh=di(da.matches[0].replace(cw,""),cU.test(dk[0].type)&&e.parentNode||e,dg))){dk.splice(de,1);
db=dh.length&&dk.join("");if(!db){cZ.apply(dd,co.call(dh,0));return dd}break}}}}}cg(db,df)(dh,e,dg,dd,cU.test(db));
return dd}if(cb.querySelectorAll){(function(){var de,df=c1,dd=/'|\\/g,db=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,da=[":focus"],e=[":active"],dc=ce.matchesSelector||ce.mozMatchesSelector||ce.webkitMatchesSelector||ce.oMatchesSelector||ce.msMatchesSelector;
cN(function(dg){dg.innerHTML="<select><option selected=''></option></select>";if(!dg.querySelectorAll("[selected]").length){da.push("\\["+cB+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!dg.querySelectorAll(":checked").length){da.push(":checked")}});cN(function(dg){dg.innerHTML="<p test=''></p>";
if(dg.querySelectorAll("[test^='']").length){da.push("[*^$]="+cB+"*(?:\"\"|'')")}dg.innerHTML="<input type='hidden'/>";
if(!dg.querySelectorAll(":enabled").length){da.push(":enabled",":disabled")}});da=new RegExp(da.join("|"));
c1=function(dm,dh,dp,ds,dr){if(!ds&&!dr&&!da.test(dm)){var dk,dq,dj=true,dg=c2,di=dh,dn=dh.nodeType===9&&dm;
if(dh.nodeType===1&&dh.nodeName.toLowerCase()!=="object"){dk=b4(dm);if((dj=dh.getAttribute("id"))){dg=dj.replace(dd,"\\$&")
}else{dh.setAttribute("id",dg)}dg="[id='"+dg+"'] ";dq=dk.length;while(dq--){dk[dq]=dg+dk[dq].join("")
}di=cU.test(dm)&&dh.parentNode||dh;dn=dk.join(",")}if(dn){try{cZ.apply(dp,co.call(di.querySelectorAll(dn),0));
return dp}catch(dl){}finally{if(!dj){dh.removeAttribute("id")}}}}return df(dm,dh,dp,ds,dr)};if(dc){cN(function(dh){de=dc.call(dh,"div");
try{dc.call(dh,"[test!='']:sizzle");e.push("!=",c9)}catch(dg){}});e=new RegExp(e.join("|"));cT.matchesSelector=function(dh,dj){dj=dj.replace(db,"='$1']");
if(!cp(dh)&&!e.test(dj)&&!da.test(dj)){try{var dg=dc.call(dh,dj);if(dg||de||dh.document&&dh.document.nodeType!==11){return dg
}}catch(di){}}return cT(dj,null,null,[dh]).length>0}}})()}cO.pseudos.nth=cO.pseudos.eq;function cm(){}cO.filters=cm.prototype=cO.pseudos;
cO.setFilters=new cm();cT.attr=bJ.attr;bJ.find=cT;bJ.expr=cT.selectors;bJ.expr[":"]=bJ.expr.pseudos;bJ.unique=cT.uniqueSort;
bJ.text=cT.getText;bJ.isXMLDoc=cT.isXML;bJ.contains=cT.contains})(a5);var aj=/Until$/,bt=/^(?:parents|prev(?:Until|All))/,ao=/^.[^:#\[\.,]*$/,B=bJ.expr.match.needsContext,bx={children:true,contents:true,next:true,prev:true};
bJ.fn.extend({find:function(e){var b5,b2,b7,b8,b6,b4,b3=this;if(typeof e!=="string"){return bJ(e).filter(function(){for(b5=0,b2=b3.length;
b5<b2;b5++){if(bJ.contains(b3[b5],this)){return true}}})}b4=this.pushStack("","find",e);for(b5=0,b2=this.length;
b5<b2;b5++){b7=b4.length;bJ.find(e,this[b5],b4);if(b5>0){for(b8=b7;b8<b4.length;b8++){for(b6=0;b6<b7;
b6++){if(b4[b6]===b4[b8]){b4.splice(b8--,1);break}}}}}return b4},has:function(b4){var b3,b2=bJ(b4,this),e=b2.length;
return this.filter(function(){for(b3=0;b3<e;b3++){if(bJ.contains(this,b2[b3])){return true}}})},not:function(e){return this.pushStack(aP(this,e,false),"not",e)
},filter:function(e){return this.pushStack(aP(this,e,true),"filter",e)},is:function(e){return !!e&&(typeof e==="string"?B.test(e)?bJ(e,this.context).index(this[0])>=0:bJ.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(b5,b4){var b6,b3=0,e=this.length,b2=[],b7=B.test(b5)||typeof b5!=="string"?bJ(b5,b4||this.context):0;
for(;b3<e;b3++){b6=this[b3];while(b6&&b6.ownerDocument&&b6!==b4&&b6.nodeType!==11){if(b7?b7.index(b6)>-1:bJ.find.matchesSelector(b6,b5)){b2.push(b6);
break}b6=b6.parentNode}}b2=b2.length>1?bJ.unique(b2):b2;return this.pushStack(b2,"closest",b5)},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof e==="string"){return bJ.inArray(this[0],bJ(e))}return bJ.inArray(e.jquery?e[0]:e,this)},add:function(e,b2){var b4=typeof e==="string"?bJ(e,b2):bJ.makeArray(e&&e.nodeType?[e]:e),b3=bJ.merge(this.get(),b4);
return this.pushStack(aU(b4[0])||aU(b3[0])?b3:bJ.unique(b3))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});bJ.fn.andSelf=bJ.fn.addBack;function aU(e){return !e||!e.parentNode||e.parentNode.nodeType===11}function a1(b2,e){do{b2=b2[e]
}while(b2&&b2.nodeType!==1);return b2}bJ.each({parent:function(b2){var e=b2.parentNode;return e&&e.nodeType!==11?e:null
},parents:function(e){return bJ.dir(e,"parentNode")},parentsUntil:function(b2,e,b3){return bJ.dir(b2,"parentNode",b3)
},next:function(e){return a1(e,"nextSibling")},prev:function(e){return a1(e,"previousSibling")},nextAll:function(e){return bJ.dir(e,"nextSibling")
},prevAll:function(e){return bJ.dir(e,"previousSibling")},nextUntil:function(b2,e,b3){return bJ.dir(b2,"nextSibling",b3)
},prevUntil:function(b2,e,b3){return bJ.dir(b2,"previousSibling",b3)},siblings:function(e){return bJ.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bJ.sibling(e.firstChild)},contents:function(e){return bJ.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bJ.merge([],e.childNodes)
}},function(e,b2){bJ.fn[e]=function(b5,b3){var b4=bJ.map(this,b2,b5);if(!aj.test(e)){b3=b5}if(b3&&typeof b3==="string"){b4=bJ.filter(b3,b4)
}b4=this.length>1&&!bx[e]?bJ.unique(b4):b4;if(this.length>1&&bt.test(e)){b4=b4.reverse()}return this.pushStack(b4,e,a7.call(arguments).join(","))
}});bJ.extend({filter:function(b3,e,b2){if(b2){b3=":not("+b3+")"}return e.length===1?bJ.find.matchesSelector(e[0],b3)?[e[0]]:[]:bJ.find.matches(b3,e)
},dir:function(b3,b2,b5){var e=[],b4=b3[b2];while(b4&&b4.nodeType!==9&&(b5===aE||b4.nodeType!==1||!bJ(b4).is(b5))){if(b4.nodeType===1){e.push(b4)
}b4=b4[b2]}return e},sibling:function(b3,b2){var e=[];for(;b3;b3=b3.nextSibling){if(b3.nodeType===1&&b3!==b2){e.push(b3)
}}return e}});function aP(b4,b3,e){b3=b3||0;if(bJ.isFunction(b3)){return bJ.grep(b4,function(b6,b5){var b7=!!b3.call(b6,b5,b6);
return b7===e})}else{if(b3.nodeType){return bJ.grep(b4,function(b6,b5){return(b6===b3)===e})}else{if(typeof b3==="string"){var b2=bJ.grep(b4,function(b5){return b5.nodeType===1
});if(ao.test(b3)){return bJ.filter(b3,b2,!e)}else{b3=bJ.filter(b3,b2)}}}}return bJ.grep(b4,function(b6,b5){return(bJ.inArray(b6,b3)>=0)===e
})}function D(e){var b3=d.split("|"),b2=e.createDocumentFragment();if(b2.createElement){while(b3.length){b2.createElement(b3.pop())
}}return b2}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ay=/ jQuery\d+="(?:null|\d+)"/g,b1=/^\s+/,aB=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,s=/<([\w:]+)/,bW=/<tbody/i,M=/<|&#?\w+;/,am=/<(?:script|style|link)/i,at=/<(?:script|object|embed|option|style)/i,N=new RegExp("<(?:"+d+")[\\s/>]","i"),aH=/^(?:checkbox|radio)$/,bU=/checked\s*(?:[^=]|=\s*.checked.)/i,bz=/\/(java|ecma)script/i,aK=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,W={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},aT=D(r),o=aT.appendChild(r.createElement("div"));
W.optgroup=W.option;W.tbody=W.tfoot=W.colgroup=W.caption=W.thead;W.th=W.td;if(!bJ.support.htmlSerialize){W._default=[1,"X<div>","</div>"]
}bJ.fn.extend({text:function(e){return bJ.access(this,function(b2){return b2===aE?bJ.text(this):this.empty().append((this[0]&&this[0].ownerDocument||r).createTextNode(b2))
},null,e,arguments.length)},wrapAll:function(e){if(bJ.isFunction(e)){return this.each(function(b3){bJ(this).wrapAll(e.call(this,b3))
})}if(this[0]){var b2=bJ(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){b2.insertBefore(this[0])
}b2.map(function(){var b3=this;while(b3.firstChild&&b3.firstChild.nodeType===1){b3=b3.firstChild}return b3
}).append(this)}return this},wrapInner:function(e){if(bJ.isFunction(e)){return this.each(function(b2){bJ(this).wrapInner(e.call(this,b2))
})}return this.each(function(){var b2=bJ(this),b3=b2.contents();if(b3.length){b3.wrapAll(e)}else{b2.append(e)
}})},wrap:function(e){var b2=bJ.isFunction(e);return this.each(function(b3){bJ(this).wrapAll(b2?e.call(this,b3):e)
})},unwrap:function(){return this.parent().each(function(){if(!bJ.nodeName(this,"body")){bJ(this).replaceWith(this.childNodes)
}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.appendChild(e)
}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.insertBefore(e,this.firstChild)
}})},before:function(){if(!aU(this[0])){return this.domManip(arguments,false,function(b2){this.parentNode.insertBefore(b2,this)
})}if(arguments.length){var e=bJ.clean(arguments);return this.pushStack(bJ.merge(e,this),"before",this.selector)
}},after:function(){if(!aU(this[0])){return this.domManip(arguments,false,function(b2){this.parentNode.insertBefore(b2,this.nextSibling)
})}if(arguments.length){var e=bJ.clean(arguments);return this.pushStack(bJ.merge(this,e),"after",this.selector)
}},remove:function(e,b4){var b3,b2=0;for(;(b3=this[b2])!=null;b2++){if(!e||bJ.filter(e,[b3]).length){if(!b4&&b3.nodeType===1){bJ.cleanData(b3.getElementsByTagName("*"));
bJ.cleanData([b3])}if(b3.parentNode){b3.parentNode.removeChild(b3)}}}return this},empty:function(){var b2,e=0;
for(;(b2=this[e])!=null;e++){if(b2.nodeType===1){bJ.cleanData(b2.getElementsByTagName("*"))}while(b2.firstChild){b2.removeChild(b2.firstChild)
}}return this},clone:function(b2,e){b2=b2==null?false:b2;e=e==null?b2:e;return this.map(function(){return bJ.clone(this,b2,e)
})},html:function(e){return bJ.access(this,function(b5){var b4=this[0]||{},b3=0,b2=this.length;if(b5===aE){return b4.nodeType===1?b4.innerHTML.replace(ay,""):aE
}if(typeof b5==="string"&&!am.test(b5)&&(bJ.support.htmlSerialize||!N.test(b5))&&(bJ.support.leadingWhitespace||!b1.test(b5))&&!W[(s.exec(b5)||["",""])[1].toLowerCase()]){b5=b5.replace(aB,"<$1></$2>");
try{for(;b3<b2;b3++){b4=this[b3]||{};if(b4.nodeType===1){bJ.cleanData(b4.getElementsByTagName("*"));b4.innerHTML=b5
}}b4=0}catch(b6){}}if(b4){this.empty().append(b5)}},null,e,arguments.length)},replaceWith:function(e){if(!aU(this[0])){if(bJ.isFunction(e)){return this.each(function(b4){var b3=bJ(this),b2=b3.html();
b3.replaceWith(e.call(this,b4,b2))})}if(typeof e!=="string"){e=bJ(e).detach()}return this.each(function(){var b3=this.nextSibling,b2=this.parentNode;
bJ(this).remove();if(b3){bJ(b3).before(e)}else{bJ(b2).append(e)}})}return this.length?this.pushStack(bJ(bJ.isFunction(e)?e():e),"replaceWith",e):this
},detach:function(e){return this.remove(e,true)},domManip:function(b7,cb,ca){b7=[].concat.apply([],b7);
var b3,b5,b6,b9,b4=0,b8=b7[0],b2=[],e=this.length;if(!bJ.support.checkClone&&e>1&&typeof b8==="string"&&bU.test(b8)){return this.each(function(){bJ(this).domManip(b7,cb,ca)
})}if(bJ.isFunction(b8)){return this.each(function(cd){var cc=bJ(this);b7[0]=b8.call(this,cd,cb?cc.html():aE);
cc.domManip(b7,cb,ca)})}if(this[0]){b3=bJ.buildFragment(b7,this,b2);b6=b3.fragment;b5=b6.firstChild;if(b6.childNodes.length===1){b6=b5
}if(b5){cb=cb&&bJ.nodeName(b5,"tr");for(b9=b3.cacheable||e-1;b4<e;b4++){ca.call(cb&&bJ.nodeName(this[b4],"table")?A(this[b4],"tbody"):this[b4],b4===b9?b6:bJ.clone(b6,true,true))
}}b6=b5=null;if(b2.length){bJ.each(b2,function(cc,cd){if(cd.src){if(bJ.ajax){bJ.ajax({url:cd.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bJ.error("no ajax")}}else{bJ.globalEval((cd.text||cd.textContent||cd.innerHTML||"").replace(aK,""))
}if(cd.parentNode){cd.parentNode.removeChild(cd)}})}}return this}});function A(b2,e){return b2.getElementsByTagName(e)[0]||b2.appendChild(b2.ownerDocument.createElement(e))
}function ar(b8,b2){if(b2.nodeType!==1||!bJ.hasData(b8)){return}var b5,b4,e,b7=bJ._data(b8),b6=bJ._data(b2,b7),b3=b7.events;
if(b3){delete b6.handle;b6.events={};for(b5 in b3){for(b4=0,e=b3[b5].length;b4<e;b4++){bJ.event.add(b2,b5,b3[b5][b4])
}}}if(b6.data){b6.data=bJ.extend({},b6.data)}}function I(b2,e){var b3;if(e.nodeType!==1){return}if(e.clearAttributes){e.clearAttributes()
}if(e.mergeAttributes){e.mergeAttributes(b2)}b3=e.nodeName.toLowerCase();if(b3==="object"){if(e.parentNode){e.outerHTML=b2.outerHTML
}if(bJ.support.html5Clone&&(b2.innerHTML&&!bJ.trim(e.innerHTML))){e.innerHTML=b2.innerHTML}}else{if(b3==="input"&&aH.test(b2.type)){e.defaultChecked=e.checked=b2.checked;
if(e.value!==b2.value){e.value=b2.value}}else{if(b3==="option"){e.selected=b2.defaultSelected}else{if(b3==="input"||b3==="textarea"){e.defaultValue=b2.defaultValue
}else{if(b3==="script"&&e.text!==b2.text){e.text=b2.text}}}}}e.removeAttribute(bJ.expando)}bJ.buildFragment=function(b4,b5,b2){var b3,e,b6,b7=b4[0];
b5=b5||r;b5=!b5.nodeType&&b5[0]||b5;b5=b5.ownerDocument||b5;if(b4.length===1&&typeof b7==="string"&&b7.length<512&&b5===r&&b7.charAt(0)==="<"&&!at.test(b7)&&(bJ.support.checkClone||!bU.test(b7))&&(bJ.support.html5Clone||!N.test(b7))){e=true;
b3=bJ.fragments[b7];b6=b3!==aE}if(!b3){b3=b5.createDocumentFragment();bJ.clean(b4,b5,b3,b2);if(e){bJ.fragments[b7]=b6&&b3
}}return{fragment:b3,cacheable:e}};bJ.fragments={};bJ.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b2){bJ.fn[e]=function(b3){var b5,b7=0,b6=[],b9=bJ(b3),b4=b9.length,b8=this.length===1&&this[0].parentNode;
if((b8==null||b8&&b8.nodeType===11&&b8.childNodes.length===1)&&b4===1){b9[b2](this[0]);return this}else{for(;
b7<b4;b7++){b5=(b7>0?this.clone(true):this).get();bJ(b9[b7])[b2](b5);b6=b6.concat(b5)}return this.pushStack(b6,e,b9.selector)
}}});function p(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")
}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")}else{return[]}}}function bV(e){if(aH.test(e.type)){e.defaultChecked=e.checked
}}bJ.extend({clone:function(b5,b7,b3){var e,b2,b4,b6;if(bJ.support.html5Clone||bJ.isXMLDoc(b5)||!N.test("<"+b5.nodeName+">")){b6=b5.cloneNode(true)
}else{o.innerHTML=b5.outerHTML;o.removeChild(b6=o.firstChild)}if((!bJ.support.noCloneEvent||!bJ.support.noCloneChecked)&&(b5.nodeType===1||b5.nodeType===11)&&!bJ.isXMLDoc(b5)){I(b5,b6);
e=p(b5);b2=p(b6);for(b4=0;e[b4];++b4){if(b2[b4]){I(e[b4],b2[b4])}}}if(b7){ar(b5,b6);if(b3){e=p(b5);b2=p(b6);
for(b4=0;e[b4];++b4){ar(e[b4],b2[b4])}}}e=b2=null;return b6},clean:function(ce,b3,e,b4){var cb,ca,cd,ci,b7,ch,b8,b5,b2,cc,cg,b9,b6=b3===r&&aT,cf=[];
if(!b3||typeof b3.createDocumentFragment==="undefined"){b3=r}for(cb=0;(cd=ce[cb])!=null;cb++){if(typeof cd==="number"){cd+=""
}if(!cd){continue}if(typeof cd==="string"){if(!M.test(cd)){cd=b3.createTextNode(cd)}else{b6=b6||D(b3);
b8=b3.createElement("div");b6.appendChild(b8);cd=cd.replace(aB,"<$1></$2>");ci=(s.exec(cd)||["",""])[1].toLowerCase();
b7=W[ci]||W._default;ch=b7[0];b8.innerHTML=b7[1]+cd+b7[2];while(ch--){b8=b8.lastChild}if(!bJ.support.tbody){b5=bW.test(cd);
b2=ci==="table"&&!b5?b8.firstChild&&b8.firstChild.childNodes:b7[1]==="<table>"&&!b5?b8.childNodes:[];
for(ca=b2.length-1;ca>=0;--ca){if(bJ.nodeName(b2[ca],"tbody")&&!b2[ca].childNodes.length){b2[ca].parentNode.removeChild(b2[ca])
}}}if(!bJ.support.leadingWhitespace&&b1.test(cd)){b8.insertBefore(b3.createTextNode(b1.exec(cd)[0]),b8.firstChild)
}cd=b8.childNodes;b8.parentNode.removeChild(b8)}}if(cd.nodeType){cf.push(cd)}else{bJ.merge(cf,cd)}}if(b8){cd=b8=b6=null
}if(!bJ.support.appendChecked){for(cb=0;(cd=cf[cb])!=null;cb++){if(bJ.nodeName(cd,"input")){bV(cd)}else{if(typeof cd.getElementsByTagName!=="undefined"){bJ.grep(cd.getElementsByTagName("input"),bV)
}}}}if(e){cg=function(cj){if(!cj.type||bz.test(cj.type)){return b4?b4.push(cj.parentNode?cj.parentNode.removeChild(cj):cj):e.appendChild(cj)
}};for(cb=0;(cd=cf[cb])!=null;cb++){if(!(bJ.nodeName(cd,"script")&&cg(cd))){e.appendChild(cd);if(typeof cd.getElementsByTagName!=="undefined"){b9=bJ.grep(bJ.merge([],cd.getElementsByTagName("script")),cg);
cf.splice.apply(cf,[cb+1,0].concat(b9));cb+=b9.length}}}}return cf},cleanData:function(b2,ca){var b5,b3,b4,b9,b6=0,cb=bJ.expando,e=bJ.cache,b7=bJ.support.deleteExpando,b8=bJ.event.special;
for(;(b4=b2[b6])!=null;b6++){if(ca||bJ.acceptData(b4)){b3=b4[cb];b5=b3&&e[b3];if(b5){if(b5.events){for(b9 in b5.events){if(b8[b9]){bJ.event.remove(b4,b9)
}else{bJ.removeEvent(b4,b9,b5.handle)}}}if(e[b3]){delete e[b3];if(b7){delete b4[cb]}else{if(b4.removeAttribute){b4.removeAttribute(cb)
}else{b4[cb]=null}}bJ.deletedIds.push(b3)}}}}}});(function(){var e,b2;bJ.uaMatch=function(b4){b4=b4.toLowerCase();
var b3=/(chrome)[ \/]([\w.]+)/.exec(b4)||/(webkit)[ \/]([\w.]+)/.exec(b4)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b4)||/(msie) ([\w.]+)/.exec(b4)||b4.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b4)||[];
return{browser:b3[1]||"",version:b3[2]||"0"}};e=bJ.uaMatch(f.userAgent);b2={};if(e.browser){b2[e.browser]=true;
b2.version=e.version}if(b2.chrome){b2.webkit=true}else{if(b2.webkit){b2.safari=true}}bJ.browser=b2;bJ.sub=function(){function b3(b6,b7){return new b3.fn.init(b6,b7)
}bJ.extend(true,b3,this);b3.superclass=this;b3.fn=b3.prototype=this();b3.fn.constructor=b3;b3.sub=this.sub;
b3.fn.init=function b5(b6,b7){if(b7&&b7 instanceof bJ&&!(b7 instanceof b3)){b7=b3(b7)}return bJ.fn.init.call(this,b6,b7,b4)
};b3.fn.init.prototype=b3.fn;var b4=b3(r);return b3}})();var H,aC,aZ,bh=/alpha\([^)]*\)/i,aV=/opacity=([^)]*)/,bn=/^(top|right|bottom|left)$/,J=/^(none|table(?!-c[ea]).+)/,a2=/^margin/,bb=new RegExp("^("+bA+")(.*)$","i"),Z=new RegExp("^("+bA+")(?!px)[a-z%]+$","i"),V=new RegExp("^([-+])=("+bA+")","i"),bk={BODY:"block"},bc={position:"absolute",visibility:"hidden",display:"block"},bD={letterSpacing:0,fontWeight:400},bT=["Top","Right","Bottom","Left"],av=["Webkit","O","Moz","ms"],aM=bJ.fn.toggle;
function b(b4,b2){if(b2 in b4){return b2}var b5=b2.charAt(0).toUpperCase()+b2.slice(1),e=b2,b3=av.length;
while(b3--){b2=av[b3]+b5;if(b2 in b4){return b2}}return e}function T(b2,e){b2=e||b2;return bJ.css(b2,"display")==="none"||!bJ.contains(b2.ownerDocument,b2)
}function v(b6,e){var b5,b7,b2=[],b3=0,b4=b6.length;for(;b3<b4;b3++){b5=b6[b3];if(!b5.style){continue
}b2[b3]=bJ._data(b5,"olddisplay");if(e){if(!b2[b3]&&b5.style.display==="none"){b5.style.display=""}if(b5.style.display===""&&T(b5)){b2[b3]=bJ._data(b5,"olddisplay",bF(b5.nodeName))
}}else{b7=H(b5,"display");if(!b2[b3]&&b7!=="none"){bJ._data(b5,"olddisplay",b7)}}}for(b3=0;b3<b4;b3++){b5=b6[b3];
if(!b5.style){continue}if(!e||b5.style.display==="none"||b5.style.display===""){b5.style.display=e?b2[b3]||"":"none"
}}return b6}bJ.fn.extend({css:function(e,b2){return bJ.access(this,function(b4,b3,b5){return b5!==aE?bJ.style(b4,b3,b5):bJ.css(b4,b3)
},e,b2,arguments.length>1)},show:function(){return v(this,true)},hide:function(){return v(this)},toggle:function(b3,b2){var e=typeof b3==="boolean";
if(bJ.isFunction(b3)&&bJ.isFunction(b2)){return aM.apply(this,arguments)}return this.each(function(){if(e?b3:T(this)){bJ(this).show()
}else{bJ(this).hide()}})}});bJ.extend({cssHooks:{opacity:{get:function(b3,b2){if(b2){var e=H(b3,"opacity");
return e===""?"1":e}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bJ.support.cssFloat?"cssFloat":"styleFloat"},style:function(b4,b3,ca,b5){if(!b4||b4.nodeType===3||b4.nodeType===8||!b4.style){return
}var b8,b9,cb,b6=bJ.camelCase(b3),b2=b4.style;b3=bJ.cssProps[b6]||(bJ.cssProps[b6]=b(b2,b6));cb=bJ.cssHooks[b3]||bJ.cssHooks[b6];
if(ca!==aE){b9=typeof ca;if(b9==="string"&&(b8=V.exec(ca))){ca=(b8[1]+1)*b8[2]+parseFloat(bJ.css(b4,b3));
b9="number"}if(ca==null||b9==="number"&&isNaN(ca)){return}if(b9==="number"&&!bJ.cssNumber[b6]){ca+="px"
}if(!cb||!("set" in cb)||(ca=cb.set(b4,ca,b5))!==aE){try{b2[b3]=ca}catch(b7){}}}else{if(cb&&"get" in cb&&(b8=cb.get(b4,false,b5))!==aE){return b8
}return b2[b3]}},css:function(b7,b5,b6,b2){var b8,b4,e,b3=bJ.camelCase(b5);b5=bJ.cssProps[b3]||(bJ.cssProps[b3]=b(b7.style,b3));
e=bJ.cssHooks[b5]||bJ.cssHooks[b3];if(e&&"get" in e){b8=e.get(b7,true,b2)}if(b8===aE){b8=H(b7,b5)}if(b8==="normal"&&b5 in bD){b8=bD[b5]
}if(b6||b2!==aE){b4=parseFloat(b8);return b6||bJ.isNumeric(b4)?b4||0:b8}return b8},swap:function(b5,b4,b6){var b3,b2,e={};
for(b2 in b4){e[b2]=b5.style[b2];b5.style[b2]=b4[b2]}b3=b6.call(b5);for(b2 in b4){b5.style[b2]=e[b2]}return b3
}});if(a5.getComputedStyle){H=function(b8,b2){var e,b5,b4,b7,b6=a5.getComputedStyle(b8,null),b3=b8.style;
if(b6){e=b6.getPropertyValue(b2)||b6[b2];if(e===""&&!bJ.contains(b8.ownerDocument,b8)){e=bJ.style(b8,b2)
}if(Z.test(e)&&a2.test(b2)){b5=b3.width;b4=b3.minWidth;b7=b3.maxWidth;b3.minWidth=b3.maxWidth=b3.width=e;
e=b6.width;b3.width=b5;b3.minWidth=b4;b3.maxWidth=b7}}return e}}else{if(r.documentElement.currentStyle){H=function(b5,b3){var b6,e,b2=b5.currentStyle&&b5.currentStyle[b3],b4=b5.style;
if(b2==null&&b4&&b4[b3]){b2=b4[b3]}if(Z.test(b2)&&!bn.test(b3)){b6=b4.left;e=b5.runtimeStyle&&b5.runtimeStyle.left;
if(e){b5.runtimeStyle.left=b5.currentStyle.left}b4.left=b3==="fontSize"?"1em":b2;b2=b4.pixelLeft+"px";
b4.left=b6;if(e){b5.runtimeStyle.left=e}}return b2===""?"auto":b2}}}function aJ(e,b3,b4){var b2=bb.exec(b3);
return b2?Math.max(0,b2[1]-(b4||0))+(b2[2]||"px"):b3}function aw(b4,b2,e,b6){var b3=e===(b6?"border":"content")?4:b2==="width"?1:0,b5=0;
for(;b3<4;b3+=2){if(e==="margin"){b5+=bJ.css(b4,e+bT[b3],true)}if(b6){if(e==="content"){b5-=parseFloat(H(b4,"padding"+bT[b3]))||0
}if(e!=="margin"){b5-=parseFloat(H(b4,"border"+bT[b3]+"Width"))||0}}else{b5+=parseFloat(H(b4,"padding"+bT[b3]))||0;
if(e!=="padding"){b5+=parseFloat(H(b4,"border"+bT[b3]+"Width"))||0}}}return b5}function x(b4,b2,e){var b5=b2==="width"?b4.offsetWidth:b4.offsetHeight,b3=true,b6=bJ.support.boxSizing&&bJ.css(b4,"boxSizing")==="border-box";
if(b5<=0||b5==null){b5=H(b4,b2);if(b5<0||b5==null){b5=b4.style[b2]}if(Z.test(b5)){return b5}b3=b6&&(bJ.support.boxSizingReliable||b5===b4.style[b2]);
b5=parseFloat(b5)||0}return(b5+aw(b4,b2,e||(b6?"border":"content"),b3))+"px"}function bF(b3){if(bk[b3]){return bk[b3]
}var e=bJ("<"+b3+">").appendTo(r.body),b2=e.css("display");e.remove();if(b2==="none"||b2===""){aC=r.body.appendChild(aC||bJ.extend(r.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!aZ||!aC.createElement){aZ=(aC.contentWindow||aC.contentDocument).document;aZ.write("<!doctype html><html><body>");
aZ.close()}e=aZ.body.appendChild(aZ.createElement(b3));b2=H(e,"display");r.body.removeChild(aC)}bk[b3]=b2;
return b2}bJ.each(["height","width"],function(b2,e){bJ.cssHooks[e]={get:function(b5,b4,b3){if(b4){if(b5.offsetWidth===0&&J.test(H(b5,"display"))){return bJ.swap(b5,bc,function(){return x(b5,e,b3)
})}else{return x(b5,e,b3)}}},set:function(b4,b5,b3){return aJ(b4,b5,b3?aw(b4,e,b3,bJ.support.boxSizing&&bJ.css(b4,"boxSizing")==="border-box"):0)
}}});if(!bJ.support.opacity){bJ.cssHooks.opacity={get:function(b2,e){return aV.test((e&&b2.currentStyle?b2.currentStyle.filter:b2.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b5,b6){var b4=b5.style,b2=b5.currentStyle,e=bJ.isNumeric(b6)?"alpha(opacity="+b6*100+")":"",b3=b2&&b2.filter||b4.filter||"";
b4.zoom=1;if(b6>=1&&bJ.trim(b3.replace(bh,""))===""&&b4.removeAttribute){b4.removeAttribute("filter");
if(b2&&!b2.filter){return}}b4.filter=bh.test(b3)?b3.replace(bh,e):b3+" "+e}}}bJ(function(){if(!bJ.support.reliableMarginRight){bJ.cssHooks.marginRight={get:function(b2,e){return bJ.swap(b2,{display:"inline-block"},function(){if(e){return H(b2,"marginRight")
}})}}}if(!bJ.support.pixelPosition&&bJ.fn.position){bJ.each(["top","left"],function(e,b2){bJ.cssHooks[b2]={get:function(b5,b4){if(b4){var b3=H(b5,b2);
return Z.test(b3)?bJ(b5).position()[b2]+"px":b3}}}})}});if(bJ.expr&&bJ.expr.filters){bJ.expr.filters.hidden=function(e){return(e.offsetWidth===0&&e.offsetHeight===0)||(!bJ.support.reliableHiddenOffsets&&((e.style&&e.style.display)||H(e,"display"))==="none")
};bJ.expr.filters.visible=function(e){return !bJ.expr.filters.hidden(e)}}bJ.each({margin:"",padding:"",border:"Width"},function(e,b2){bJ.cssHooks[e+b2]={expand:function(b5){var b4,b6=typeof b5==="string"?b5.split(" "):[b5],b3={};
for(b4=0;b4<4;b4++){b3[e+bT[b4]+b2]=b6[b4]||b6[b4-2]||b6[0]}return b3}};if(!a2.test(e)){bJ.cssHooks[e+b2].set=aJ
}});var bv=/%20/g,aS=/\[\]$/,X=/\r?\n/g,bC=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aG=/^(?:select|textarea)/i;
bJ.fn.extend({serialize:function(){return bJ.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?bJ.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||aG.test(this.nodeName)||bC.test(this.type))
}).map(function(e,b2){var b3=bJ(this).val();return b3==null?null:bJ.isArray(b3)?bJ.map(b3,function(b5,b4){return{name:b2.name,value:b5.replace(X,"\r\n")}
}):{name:b2.name,value:b3.replace(X,"\r\n")}}).get()}});bJ.param=function(e,b3){var b4,b2=[],b5=function(b6,b7){b7=bJ.isFunction(b7)?b7():(b7==null?"":b7);
b2[b2.length]=encodeURIComponent(b6)+"="+encodeURIComponent(b7)};if(b3===aE){b3=bJ.ajaxSettings&&bJ.ajaxSettings.traditional
}if(bJ.isArray(e)||(e.jquery&&!bJ.isPlainObject(e))){bJ.each(e,function(){b5(this.name,this.value)})}else{for(b4 in e){n(b4,e[b4],b3,b5)
}}return b2.join("&").replace(bv,"+")};function n(b3,b5,b2,b4){var e;if(bJ.isArray(b5)){bJ.each(b5,function(b7,b6){if(b2||aS.test(b3)){b4(b3,b6)
}else{n(b3+"["+(typeof b6==="object"?b7:"")+"]",b6,b2,b4)}})}else{if(!b2&&bJ.type(b5)==="object"){for(e in b5){n(b3+"["+e+"]",b5[e],b2,b4)
}}else{b4(b3,b5)}}}var b0,ab,aq=/#.*$/,ag=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,E=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,u=/^(?:GET|HEAD)$/,aF=/^\/\//,bQ=/\?/,h=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,S=/([?&])_=[^&]*/,aW=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bZ=bJ.fn.load,y={},a9={},a0=["*/"]+["*"];
try{ab=aL.href}catch(bg){ab=r.createElement("a");ab.href="";ab=ab.href}b0=aW.exec(ab.toLowerCase())||[];
function bL(e){return function(b5,b7){if(typeof b5!=="string"){b7=b5;b5="*"}var b2,b8,b9,b4=b5.toLowerCase().split(aY),b3=0,b6=b4.length;
if(bJ.isFunction(b7)){for(;b3<b6;b3++){b2=b4[b3];b9=/^\+/.test(b2);if(b9){b2=b2.substr(1)||"*"}b8=e[b2]=e[b2]||[];
b8[b9?"unshift":"push"](b7)}}}}function t(b2,cb,b6,b9,b8,b4){b8=b8||cb.dataTypes[0];b4=b4||{};b4[b8]=true;
var ca,b7=b2[b8],b3=0,e=b7?b7.length:0,b5=(b2===y);for(;b3<e&&(b5||!ca);b3++){ca=b7[b3](cb,b6,b9);if(typeof ca==="string"){if(!b5||b4[ca]){ca=aE
}else{cb.dataTypes.unshift(ca);ca=t(b2,cb,b6,b9,ca,b4)}}}if((b5||!ca)&&!b4["*"]){ca=t(b2,cb,b6,b9,"*",b4)
}return ca}function w(b3,b4){var b2,e,b5=bJ.ajaxSettings.flatOptions||{};for(b2 in b4){if(b4[b2]!==aE){(b5[b2]?b3:(e||(e={})))[b2]=b4[b2]
}}if(e){bJ.extend(true,b3,e)}}bJ.fn.load=function(b4,b7,b8){if(typeof b4!=="string"&&bZ){return bZ.apply(this,arguments)
}if(!this.length){return this}var e,b5,b3,b2=this,b6=b4.indexOf(" ");if(b6>=0){e=b4.slice(b6,b4.length);
b4=b4.slice(0,b6)}if(bJ.isFunction(b7)){b8=b7;b7=aE}else{if(b7&&typeof b7==="object"){b5="POST"}}bJ.ajax({url:b4,type:b5,dataType:"html",data:b7,complete:function(ca,b9){if(b8){b2.each(b8,b3||[ca.responseText,b9,ca])
}}}).done(function(b9){b3=arguments;b2.html(e?bJ("<div>").append(b9.replace(h,"")).find(e):b9)});return this
};bJ.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,b2){bJ.fn[b2]=function(b3){return this.on(b2,b3)
}});bJ.each(["get","post"],function(e,b2){bJ[b2]=function(b3,b5,b6,b4){if(bJ.isFunction(b5)){b4=b4||b6;
b6=b5;b5=aE}return bJ.ajax({type:b2,url:b3,data:b5,success:b6,dataType:b4})}});bJ.extend({getScript:function(e,b2){return bJ.get(e,aE,b2,"script")
},getJSON:function(e,b2,b3){return bJ.get(e,b2,b3,"json")},ajaxSetup:function(b2,e){if(e){w(b2,bJ.ajaxSettings)
}else{e=b2;b2=bJ.ajaxSettings}w(b2,e);return b2},ajaxSettings:{url:ab,isLocal:E.test(b0[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":a0},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a5.String,"text html":true,"text json":bJ.parseJSON,"text xml":bJ.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:bL(y),ajaxTransport:bL(a9),ajax:function(b7,b4){if(typeof b7==="object"){b4=b7;
b7=aE}b4=b4||{};var ca,co,b5,cj,cc,cg,b3,ci,cb=bJ.ajaxSetup({},b4),cq=cb.context||cb,ce=cq!==cb&&(cq.nodeType||cq instanceof bJ)?bJ(cq):bJ.event,cp=bJ.Deferred(),cl=bJ.Callbacks("once memory"),b8=cb.statusCode||{},cf={},cm={},b6=0,b9="canceled",ch={readyState:0,setRequestHeader:function(cr,cs){if(!b6){var e=cr.toLowerCase();
cr=cm[e]=cm[e]||cr;cf[cr]=cs}return this},getAllResponseHeaders:function(){return b6===2?co:null},getResponseHeader:function(cr){var e;
if(b6===2){if(!b5){b5={};while((e=ag.exec(co))){b5[e[1].toLowerCase()]=e[2]}}e=b5[cr.toLowerCase()]}return e===aE?null:e
},overrideMimeType:function(e){if(!b6){cb.mimeType=e}return this},abort:function(e){e=e||b9;if(cj){cj.abort(e)
}cd(0,e);return this}};function cd(cv,cr,cw,ct){var e,cz,cx,cu,cy,cs=cr;if(b6===2){return}b6=2;if(cc){clearTimeout(cc)
}cj=aE;co=ct||"";ch.readyState=cv>0?4:0;if(cw){cu=k(cb,ch,cw)}if(cv>=200&&cv<300||cv===304){if(cb.ifModified){cy=ch.getResponseHeader("Last-Modified");
if(cy){bJ.lastModified[ca]=cy}cy=ch.getResponseHeader("Etag");if(cy){bJ.etag[ca]=cy}}if(cv===304){cs="notmodified";
e=true}else{e=ah(cb,cu);cs=e.state;cz=e.data;cx=e.error;e=!cx}}else{cx=cs;if(!cs||cv){cs="error";if(cv<0){cv=0
}}}ch.status=cv;ch.statusText=(cr||cs)+"";if(e){cp.resolveWith(cq,[cz,cs,ch])}else{cp.rejectWith(cq,[ch,cs,cx])
}ch.statusCode(b8);b8=aE;if(b3){ce.trigger("ajax"+(e?"Success":"Error"),[ch,cb,e?cz:cx])}cl.fireWith(cq,[ch,cs]);
if(b3){ce.trigger("ajaxComplete",[ch,cb]);if(!(--bJ.active)){bJ.event.trigger("ajaxStop")}}}cp.promise(ch);
ch.success=ch.done;ch.error=ch.fail;ch.complete=cl.add;ch.statusCode=function(cr){if(cr){var e;if(b6<2){for(e in cr){b8[e]=[b8[e],cr[e]]
}}else{e=cr[ch.status];ch.always(e)}}return this};cb.url=((b7||cb.url)+"").replace(aq,"").replace(aF,b0[1]+"//");
cb.dataTypes=bJ.trim(cb.dataType||"*").toLowerCase().split(aY);if(cb.crossDomain==null){cg=aW.exec(cb.url.toLowerCase());
cb.crossDomain=!!(cg&&(cg[1]!==b0[1]||cg[2]!==b0[2]||(cg[3]||(cg[1]==="http:"?80:443))!=(b0[3]||(b0[1]==="http:"?80:443))))
}if(cb.data&&cb.processData&&typeof cb.data!=="string"){cb.data=bJ.param(cb.data,cb.traditional)}t(y,cb,b4,ch);
if(b6===2){return ch}b3=cb.global;cb.type=cb.type.toUpperCase();cb.hasContent=!u.test(cb.type);if(b3&&bJ.active++===0){bJ.event.trigger("ajaxStart")
}if(!cb.hasContent){if(cb.data){cb.url+=(bQ.test(cb.url)?"&":"?")+cb.data;delete cb.data}ca=cb.url;if(cb.cache===false){var b2=bJ.now(),cn=cb.url.replace(S,"$1_="+b2);
cb.url=cn+((cn===cb.url)?(bQ.test(cb.url)?"&":"?")+"_="+b2:"")}}if(cb.data&&cb.hasContent&&cb.contentType!==false||b4.contentType){ch.setRequestHeader("Content-Type",cb.contentType)
}if(cb.ifModified){ca=ca||cb.url;if(bJ.lastModified[ca]){ch.setRequestHeader("If-Modified-Since",bJ.lastModified[ca])
}if(bJ.etag[ca]){ch.setRequestHeader("If-None-Match",bJ.etag[ca])}}ch.setRequestHeader("Accept",cb.dataTypes[0]&&cb.accepts[cb.dataTypes[0]]?cb.accepts[cb.dataTypes[0]]+(cb.dataTypes[0]!=="*"?", "+a0+"; q=0.01":""):cb.accepts["*"]);
for(ci in cb.headers){ch.setRequestHeader(ci,cb.headers[ci])}if(cb.beforeSend&&(cb.beforeSend.call(cq,ch,cb)===false||b6===2)){return ch.abort()
}b9="abort";for(ci in {success:1,error:1,complete:1}){ch[ci](cb[ci])}cj=t(a9,cb,b4,ch);if(!cj){cd(-1,"No Transport")
}else{ch.readyState=1;if(b3){ce.trigger("ajaxSend",[ch,cb])}if(cb.async&&cb.timeout>0){cc=setTimeout(function(){ch.abort("timeout")
},cb.timeout)}try{b6=1;cj.send(cf,cd)}catch(ck){if(b6<2){cd(-1,ck)}else{throw ck}}}return ch},active:0,lastModified:{},etag:{}});
function k(ca,b9,b6){var b5,b7,b4,e,b2=ca.contents,b8=ca.dataTypes,b3=ca.responseFields;for(b7 in b3){if(b7 in b6){b9[b3[b7]]=b6[b7]
}}while(b8[0]==="*"){b8.shift();if(b5===aE){b5=ca.mimeType||b9.getResponseHeader("content-type")}}if(b5){for(b7 in b2){if(b2[b7]&&b2[b7].test(b5)){b8.unshift(b7);
break}}}if(b8[0] in b6){b4=b8[0]}else{for(b7 in b6){if(!b8[0]||ca.converters[b7+" "+b8[0]]){b4=b7;break
}if(!e){e=b7}}b4=b4||e}if(b4){if(b4!==b8[0]){b8.unshift(b4)}return b6[b4]}}function ah(cc,b4){var ca,b2,b8,b6,b9=cc.dataTypes.slice(),b3=b9[0],cb={},b5=0;
if(cc.dataFilter){b4=cc.dataFilter(b4,cc.dataType)}if(b9[1]){for(ca in cc.converters){cb[ca.toLowerCase()]=cc.converters[ca]
}}for(;(b8=b9[++b5]);){if(b8!=="*"){if(b3!=="*"&&b3!==b8){ca=cb[b3+" "+b8]||cb["* "+b8];if(!ca){for(b2 in cb){b6=b2.split(" ");
if(b6[1]===b8){ca=cb[b3+" "+b6[0]]||cb["* "+b6[0]];if(ca){if(ca===true){ca=cb[b2]}else{if(cb[b2]!==true){b8=b6[0];
b9.splice(b5--,0,b8)}}break}}}}if(ca!==true){if(ca&&cc["throws"]){b4=ca(b4)}else{try{b4=ca(b4)}catch(b7){return{state:"parsererror",error:ca?b7:"No conversion from "+b3+" to "+b8}
}}}}b3=b8}}return{state:"success",data:b4}}var bs=[],az=/\?/,a8=/(=)\?(?=&|$)|\?\?/,bo=bJ.now();bJ.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bs.pop()||(bJ.expando+"_"+(bo++));
this[e]=true;return e}});bJ.ajaxPrefilter("json jsonp",function(cb,b6,ca){var b9,e,b8,b4=cb.data,b2=cb.url,b3=cb.jsonp!==false,b7=b3&&a8.test(b2),b5=b3&&!b7&&typeof b4==="string"&&!(cb.contentType||"").indexOf("application/x-www-form-urlencoded")&&a8.test(b4);
if(cb.dataTypes[0]==="jsonp"||b7||b5){b9=cb.jsonpCallback=bJ.isFunction(cb.jsonpCallback)?cb.jsonpCallback():cb.jsonpCallback;
e=a5[b9];if(b7){cb.url=b2.replace(a8,"$1"+b9)}else{if(b5){cb.data=b4.replace(a8,"$1"+b9)}else{if(b3){cb.url+=(az.test(b2)?"&":"?")+cb.jsonp+"="+b9
}}}cb.converters["script json"]=function(){if(!b8){bJ.error(b9+" was not called")}return b8[0]};cb.dataTypes[0]="json";
a5[b9]=function(){b8=arguments};ca.always(function(){a5[b9]=e;if(cb[b9]){cb.jsonpCallback=b6.jsonpCallback;
bs.push(b9)}if(b8&&bJ.isFunction(e)){e(b8[0])}b8=e=aE});return"script"}});bJ.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){bJ.globalEval(e);
return e}}});bJ.ajaxPrefilter("script",function(e){if(e.cache===aE){e.cache=false}if(e.crossDomain){e.type="GET";
e.global=false}});bJ.ajaxTransport("script",function(b3){if(b3.crossDomain){var e,b2=r.head||r.getElementsByTagName("head")[0]||r.documentElement;
return{send:function(b4,b5){e=r.createElement("script");e.async="async";if(b3.scriptCharset){e.charset=b3.scriptCharset
}e.src=b3.url;e.onload=e.onreadystatechange=function(b7,b6){if(b6||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(b2&&e.parentNode){b2.removeChild(e)}e=aE;if(!b6){b5(200,"success")}}};b2.insertBefore(e,b2.firstChild)
},abort:function(){if(e){e.onload(0,1)}}}}});var ak,aQ=a5.ActiveXObject?function(){for(var e in ak){ak[e](0,1)
}}:false,ax=0;function bE(){try{return new a5.XMLHttpRequest()}catch(b2){}}function be(){try{return new a5.ActiveXObject("Microsoft.XMLHTTP")
}catch(b2){}}bJ.ajaxSettings.xhr=a5.ActiveXObject?function(){return !this.isLocal&&bE()||be()}:bE;(function(e){bJ.extend(bJ.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})
})(bJ.ajaxSettings.xhr());if(bJ.support.ajax){bJ.ajaxTransport(function(e){if(!e.crossDomain||bJ.support.cors){var b2;
return{send:function(b8,b3){var b6,b5,b7=e.xhr();if(e.username){b7.open(e.type,e.url,e.async,e.username,e.password)
}else{b7.open(e.type,e.url,e.async)}if(e.xhrFields){for(b5 in e.xhrFields){b7[b5]=e.xhrFields[b5]}}if(e.mimeType&&b7.overrideMimeType){b7.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b8["X-Requested-With"]){b8["X-Requested-With"]="XMLHttpRequest"}try{for(b5 in b8){b7.setRequestHeader(b5,b8[b5])
}}catch(b4){}b7.send((e.hasContent&&e.data)||null);b2=function(ch,cb){var cc,ca,b9,cf,ce;try{if(b2&&(cb||b7.readyState===4)){b2=aE;
if(b6){b7.onreadystatechange=bJ.noop;if(aQ){delete ak[b6]}}if(cb){if(b7.readyState!==4){b7.abort()}}else{cc=b7.status;
b9=b7.getAllResponseHeaders();cf={};ce=b7.responseXML;if(ce&&ce.documentElement){cf.xml=ce}try{cf.text=b7.responseText
}catch(cg){}try{ca=b7.statusText}catch(cg){ca=""}if(!cc&&e.isLocal&&!e.crossDomain){cc=cf.text?200:404
}else{if(cc===1223){cc=204}}}}}catch(cd){if(!cb){b3(-1,cd)}}if(cf){b3(cc,ca,cf,b9)}};if(!e.async){b2()
}else{if(b7.readyState===4){setTimeout(b2,0)}else{b6=++ax;if(aQ){if(!ak){ak={};bJ(a5).unload(aQ)}ak[b6]=b2
}b7.onreadystatechange=b2}}},abort:function(){if(b2){b2(0,1)}}}}})}var O,ae,bR=/^(?:toggle|show|hide)$/,bK=new RegExp("^(?:([-+])=|)("+bA+")([a-z%]*)$","i"),bP=/queueHooks$/,aA=[l],a4={"*":[function(e,b8){var b4,b9,ca=this.createTween(e,b8),b5=bK.exec(b8),b6=ca.cur(),b2=+b6||0,b3=1,b7=20;
if(b5){b4=+b5[2];b9=b5[3]||(bJ.cssNumber[e]?"":"px");if(b9!=="px"&&b2){b2=bJ.css(ca.elem,e,true)||b4||1;
do{b3=b3||".5";b2=b2/b3;bJ.style(ca.elem,e,b2+b9)}while(b3!==(b3=ca.cur()/b6)&&b3!==1&&--b7)}ca.unit=b9;
ca.start=b2;ca.end=b5[1]?b2+(b5[1]+1)*b4:b4}return ca}]};function bm(){setTimeout(function(){O=aE},0);
return(O=bJ.now())}function bf(b2,e){bJ.each(e,function(b7,b5){var b6=(a4[b7]||[]).concat(a4["*"]),b3=0,b4=b6.length;
for(;b3<b4;b3++){if(b6[b3].call(b2,b7,b5)){return}}})}function g(b3,b7,ca){var cb,b6=0,e=0,b2=aA.length,b9=bJ.Deferred().always(function(){delete b5.elem
}),b5=function(){var ch=O||bm(),ce=Math.max(0,b4.startTime+b4.duration-ch),cc=ce/b4.duration||0,cg=1-cc,cd=0,cf=b4.tweens.length;
for(;cd<cf;cd++){b4.tweens[cd].run(cg)}b9.notifyWith(b3,[b4,cg,ce]);if(cg<1&&cf){return ce}else{b9.resolveWith(b3,[b4]);
return false}},b4=b9.promise({elem:b3,props:bJ.extend({},b7),opts:bJ.extend(true,{specialEasing:{}},ca),originalProperties:b7,originalOptions:ca,startTime:O||bm(),duration:ca.duration,tweens:[],createTween:function(cf,cc,ce){var cd=bJ.Tween(b3,b4.opts,cf,cc,b4.opts.specialEasing[cf]||b4.opts.easing);
b4.tweens.push(cd);return cd},stop:function(cd){var cc=0,ce=cd?b4.tweens.length:0;for(;cc<ce;cc++){b4.tweens[cc].run(1)
}if(cd){b9.resolveWith(b3,[b4,cd])}else{b9.rejectWith(b3,[b4,cd])}return this}}),b8=b4.props;an(b8,b4.opts.specialEasing);
for(;b6<b2;b6++){cb=aA[b6].call(b4,b3,b8,b4.opts);if(cb){return cb}}bf(b4,b8);if(bJ.isFunction(b4.opts.start)){b4.opts.start.call(b3,b4)
}bJ.fx.timer(bJ.extend(b5,{anim:b4,queue:b4.opts.queue,elem:b3}));return b4.progress(b4.opts.progress).done(b4.opts.done,b4.opts.complete).fail(b4.opts.fail).always(b4.opts.always)
}function an(b4,b6){var b3,b2,b7,b5,e;for(b3 in b4){b2=bJ.camelCase(b3);b7=b6[b2];b5=b4[b3];if(bJ.isArray(b5)){b7=b5[1];
b5=b4[b3]=b5[0]}if(b3!==b2){b4[b2]=b5;delete b4[b3]}e=bJ.cssHooks[b2];if(e&&"expand" in e){b5=e.expand(b5);
delete b4[b2];for(b3 in b5){if(!(b3 in b4)){b4[b3]=b5[b3];b6[b3]=b7}}}else{b6[b2]=b7}}}bJ.Animation=bJ.extend(g,{tweener:function(b2,b5){if(bJ.isFunction(b2)){b5=b2;
b2=["*"]}else{b2=b2.split(" ")}var b4,e=0,b3=b2.length;for(;e<b3;e++){b4=b2[e];a4[b4]=a4[b4]||[];a4[b4].unshift(b5)
}},prefilter:function(b2,e){if(e){aA.unshift(b2)}else{aA.push(b2)}}});function l(b5,cb,e){var ca,b3,cd,b4,ch,b7,cg,cf,ce,b6=this,b2=b5.style,cc={},b9=[],b8=b5.nodeType&&T(b5);
if(!e.queue){cf=bJ._queueHooks(b5,"fx");if(cf.unqueued==null){cf.unqueued=0;ce=cf.empty.fire;cf.empty.fire=function(){if(!cf.unqueued){ce()
}}}cf.unqueued++;b6.always(function(){b6.always(function(){cf.unqueued--;if(!bJ.queue(b5,"fx").length){cf.empty.fire()
}})})}if(b5.nodeType===1&&("height" in cb||"width" in cb)){e.overflow=[b2.overflow,b2.overflowX,b2.overflowY];
if(bJ.css(b5,"display")==="inline"&&bJ.css(b5,"float")==="none"){if(!bJ.support.inlineBlockNeedsLayout||bF(b5.nodeName)==="inline"){b2.display="inline-block"
}else{b2.zoom=1}}}if(e.overflow){b2.overflow="hidden";if(!bJ.support.shrinkWrapBlocks){b6.done(function(){b2.overflow=e.overflow[0];
b2.overflowX=e.overflow[1];b2.overflowY=e.overflow[2]})}}for(ca in cb){cd=cb[ca];if(bR.exec(cd)){delete cb[ca];
b7=b7||cd==="toggle";if(cd===(b8?"hide":"show")){continue}b9.push(ca)}}b4=b9.length;if(b4){ch=bJ._data(b5,"fxshow")||bJ._data(b5,"fxshow",{});
if("hidden" in ch){b8=ch.hidden}if(b7){ch.hidden=!b8}if(b8){bJ(b5).show()}else{b6.done(function(){bJ(b5).hide()
})}b6.done(function(){var ci;bJ.removeData(b5,"fxshow",true);for(ci in cc){bJ.style(b5,ci,cc[ci])}});
for(ca=0;ca<b4;ca++){b3=b9[ca];cg=b6.createTween(b3,b8?ch[b3]:0);cc[b3]=ch[b3]||bJ.style(b5,b3);if(!(b3 in ch)){ch[b3]=cg.start;
if(b8){cg.end=cg.start;cg.start=b3==="width"||b3==="height"?1:0}}}}}function K(b3,b2,b5,e,b4){return new K.prototype.init(b3,b2,b5,e,b4)
}bJ.Tween=K;K.prototype={constructor:K,init:function(b4,b2,b6,e,b5,b3){this.elem=b4;this.prop=b6;this.easing=b5||"swing";
this.options=b2;this.start=this.now=this.cur();this.end=e;this.unit=b3||(bJ.cssNumber[b6]?"":"px")},cur:function(){var e=K.propHooks[this.prop];
return e&&e.get?e.get(this):K.propHooks._default.get(this)},run:function(b3){var b2,e=K.propHooks[this.prop];
if(this.options.duration){this.pos=b2=bJ.easing[this.easing](b3,this.options.duration*b3,0,1,this.options.duration)
}else{this.pos=b2=b3}this.now=(this.end-this.start)*b2+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)}else{K.propHooks._default.set(this)}return this}};K.prototype.init.prototype=K.prototype;
K.propHooks={_default:{get:function(b2){var e;if(b2.elem[b2.prop]!=null&&(!b2.elem.style||b2.elem.style[b2.prop]==null)){return b2.elem[b2.prop]
}e=bJ.css(b2.elem,b2.prop,false,"");return !e||e==="auto"?0:e},set:function(e){if(bJ.fx.step[e.prop]){bJ.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bJ.cssProps[e.prop]]!=null||bJ.cssHooks[e.prop])){bJ.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now}}}}};K.propHooks.scrollTop=K.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};bJ.each(["toggle","show","hide"],function(b2,e){var b3=bJ.fn[e];bJ.fn[e]=function(b4,b6,b5){return b4==null||typeof b4==="boolean"||(!b2&&bJ.isFunction(b4)&&bJ.isFunction(b6))?b3.apply(this,arguments):this.animate(bI(e,true),b4,b6,b5)
}});bJ.fn.extend({fadeTo:function(e,b4,b3,b2){return this.filter(T).css("opacity",0).show().end().animate({opacity:b4},e,b3,b2)
},animate:function(b7,b4,b6,b5){var b3=bJ.isEmptyObject(b7),e=bJ.speed(b4,b6,b5),b2=function(){var b8=g(this,bJ.extend({},b7),e);
if(b3){b8.stop(true)}};return b3||e.queue===false?this.each(b2):this.queue(e.queue,b2)},stop:function(b3,b2,e){var b4=function(b5){var b6=b5.stop;
delete b5.stop;b6(e)};if(typeof b3!=="string"){e=b2;b2=b3;b3=aE}if(b2&&b3!==false){this.queue(b3||"fx",[])
}return this.each(function(){var b8=true,b5=b3!=null&&b3+"queueHooks",b7=bJ.timers,b6=bJ._data(this);
if(b5){if(b6[b5]&&b6[b5].stop){b4(b6[b5])}}else{for(b5 in b6){if(b6[b5]&&b6[b5].stop&&bP.test(b5)){b4(b6[b5])
}}}for(b5=b7.length;b5--;){if(b7[b5].elem===this&&(b3==null||b7[b5].queue===b3)){b7[b5].anim.stop(e);
b8=false;b7.splice(b5,1)}}if(b8||!e){bJ.dequeue(this,b3)}})}});function bI(b3,b5){var b4,e={height:b3},b2=0;
b5=b5?1:0;for(;b2<4;b2+=2-b5){b4=bT[b2];e["margin"+b4]=e["padding"+b4]=b3}if(b5){e.opacity=e.width=b3
}return e}bJ.each({slideDown:bI("show"),slideUp:bI("hide"),slideToggle:bI("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b2){bJ.fn[e]=function(b3,b5,b4){return this.animate(b2,b3,b5,b4)
}});bJ.speed=function(b3,b4,b2){var e=b3&&typeof b3==="object"?bJ.extend({},b3):{complete:b2||!b2&&b4||bJ.isFunction(b3)&&b3,duration:b3,easing:b2&&b4||b4&&!bJ.isFunction(b4)&&b4};
e.duration=bJ.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bJ.fx.speeds?bJ.fx.speeds[e.duration]:bJ.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"}e.old=e.complete;e.complete=function(){if(bJ.isFunction(e.old)){e.old.call(this)
}if(e.queue){bJ.dequeue(this,e.queue)}};return e};bJ.easing={linear:function(e){return e},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};bJ.timers=[];bJ.fx=K.prototype.init;bJ.fx.tick=function(){var b3,b2=bJ.timers,e=0;O=bJ.now();for(;
e<b2.length;e++){b3=b2[e];if(!b3()&&b2[e]===b3){b2.splice(e--,1)}}if(!b2.length){bJ.fx.stop()}O=aE};bJ.fx.timer=function(e){if(e()&&bJ.timers.push(e)&&!ae){ae=setInterval(bJ.fx.tick,bJ.fx.interval)
}};bJ.fx.interval=13;bJ.fx.stop=function(){clearInterval(ae);ae=null};bJ.fx.speeds={slow:600,fast:200,_default:400};
bJ.fx.step={};if(bJ.expr&&bJ.expr.filters){bJ.expr.filters.animated=function(e){return bJ.grep(bJ.timers,function(b2){return e===b2.elem
}).length}}var bp=/^(?:body|html)$/i;bJ.fn.offset=function(cb){if(arguments.length){return cb===aE?this:this.each(function(cc){bJ.offset.setOffset(this,cb,cc)
})}var b2,b7,b8,b5,b9,e,b4,b6={top:0,left:0},b3=this[0],ca=b3&&b3.ownerDocument;if(!ca){return}if((b7=ca.body)===b3){return bJ.offset.bodyOffset(b3)
}b2=ca.documentElement;if(!bJ.contains(b2,b3)){return b6}if(typeof b3.getBoundingClientRect!=="undefined"){b6=b3.getBoundingClientRect()
}b8=bq(ca);b5=b2.clientTop||b7.clientTop||0;b9=b2.clientLeft||b7.clientLeft||0;e=b8.pageYOffset||b2.scrollTop;
b4=b8.pageXOffset||b2.scrollLeft;return{top:b6.top+e-b5,left:b6.left+b4-b9}};bJ.offset={bodyOffset:function(e){var b3=e.offsetTop,b2=e.offsetLeft;
if(bJ.support.doesNotIncludeMarginInBodyOffset){b3+=parseFloat(bJ.css(e,"marginTop"))||0;b2+=parseFloat(bJ.css(e,"marginLeft"))||0
}return{top:b3,left:b2}},setOffset:function(b4,cd,b7){var b8=bJ.css(b4,"position");if(b8==="static"){b4.style.position="relative"
}var b6=bJ(b4),b2=b6.offset(),e=bJ.css(b4,"top"),cb=bJ.css(b4,"left"),cc=(b8==="absolute"||b8==="fixed")&&bJ.inArray("auto",[e,cb])>-1,ca={},b9={},b3,b5;
if(cc){b9=b6.position();b3=b9.top;b5=b9.left}else{b3=parseFloat(e)||0;b5=parseFloat(cb)||0}if(bJ.isFunction(cd)){cd=cd.call(b4,b7,b2)
}if(cd.top!=null){ca.top=(cd.top-b2.top)+b3}if(cd.left!=null){ca.left=(cd.left-b2.left)+b5}if("using" in cd){cd.using.call(b4,ca)
}else{b6.css(ca)}}};bJ.fn.extend({position:function(){if(!this[0]){return}var b3=this[0],b2=this.offsetParent(),b4=this.offset(),e=bp.test(b2[0].nodeName)?{top:0,left:0}:b2.offset();
b4.top-=parseFloat(bJ.css(b3,"marginTop"))||0;b4.left-=parseFloat(bJ.css(b3,"marginLeft"))||0;e.top+=parseFloat(bJ.css(b2[0],"borderTopWidth"))||0;
e.left+=parseFloat(bJ.css(b2[0],"borderLeftWidth"))||0;return{top:b4.top-e.top,left:b4.left-e.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||r.body;
while(e&&(!bp.test(e.nodeName)&&bJ.css(e,"position")==="static")){e=e.offsetParent}return e||r.body})
}});bJ.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b3,b2){var e=/Y/.test(b2);bJ.fn[b3]=function(b4){return bJ.access(this,function(b5,b8,b7){var b6=bq(b5);
if(b7===aE){return b6?(b2 in b6)?b6[b2]:b6.document.documentElement[b8]:b5[b8]}if(b6){b6.scrollTo(!e?b7:bJ(b6).scrollLeft(),e?b7:bJ(b6).scrollTop())
}else{b5[b8]=b7}},b3,b4,arguments.length,null)}});function bq(e){return bJ.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bJ.each({Height:"height",Width:"width"},function(e,b2){bJ.each({padding:"inner"+e,content:b2,"":"outer"+e},function(b3,b4){bJ.fn[b4]=function(b8,b7){var b6=arguments.length&&(b3||typeof b8!=="boolean"),b5=b3||(b8===true||b7===true?"margin":"border");
return bJ.access(this,function(ca,b9,cb){var cc;if(bJ.isWindow(ca)){return ca.document.documentElement["client"+e]
}if(ca.nodeType===9){cc=ca.documentElement;return Math.max(ca.body["scroll"+e],cc["scroll"+e],ca.body["offset"+e],cc["offset"+e],cc["client"+e])
}return cb===aE?bJ.css(ca,b9,cb,b5):bJ.style(ca,b9,cb,b5)},b2,b6?b8:aE,b6,null)}})});a5.jQuery=a5.$=bJ;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bJ
})}})(window);(function(a){a.extend(a.fn,{validate:function(b){if(!this.length){b&&b.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");
return}var d=a.data(this[0],"validator");if(d){return d}if(!a.browser.msie||a.browser.version>7){this.attr("novalidate","novalidate")
}d=new a.validator(b,this[0]);a.data(this[0],"validator",d);if(d.settings.onsubmit){var e=this.find("input, button");
e.filter(".cancel").click(function(){d.cancelSubmit=true});if(d.settings.submitHandler){e.filter(":submit").click(function(){d.submitButton=this
})}this.submit(function(f){if(d.settings.debug){f.preventDefault()}function g(){if(d.settings.submitHandler){if(d.submitButton){var h=a("<input type='hidden'/>").attr("name",d.submitButton.name).val(d.submitButton.value).appendTo(d.currentForm)
}d.settings.submitHandler.call(d,d.currentForm);if(d.submitButton){h.remove()}return true}return true
}if(d.cancelSubmit){d.cancelSubmit=false;return g()}if(d.form()){if(d.pendingRequest){d.formSubmitted=true;
return false}return g()}else{d.focusInvalid();return false}})}return d},valid:function(){if(a(this[0]).is("form")){return this.validate().form()
}else{var d=true;var b=a(this[0].form).validate();this.each(function(){d&=b.element(this)});return d}},checkForm:function(){return a(this[0]).is("form")?this.validate().checkForm():this.validate().check(a(this))
},removeAttrs:function(e){var b={},d=this;a.each(e.split(/\s/),function(f,g){b[g]=d.attr(g);d.removeAttr(g)
});return b},rules:function(f,b){var h=this[0];if(f){var e=a.data(h.form,"validator").settings;var l=e.rules;
var m=a.validator.staticRules(h);switch(f){case"add":a.extend(m,a.validator.normalizeRule(b));l[h.name]=m;
if(b.messages){e.messages[h.name]=a.extend(e.messages[h.name],b.messages)}break;case"remove":if(!b){delete l[h.name];
return m}var k={};a.each(b.split(/\s/),function(n,o){k[o]=m[o];delete m[o]});return k}}var g=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(h),a.validator.classRules(h),a.validator.attributeRules(h),a.validator.staticRules(h)),h);
if(g.required){var d=g.required;delete g.required;g=a.extend({required:d},g)}return g}});a.extend(a.expr[":"],{blank:function(b){return !a.trim(""+b.value)
},filled:function(b){return !!a.trim(""+b.value)},unchecked:function(b){return !b.checked}});a.validator=function(b,d){this.settings=a.extend(true,{},a.validator.defaults,b);
this.currentForm=d;this.init()};a.validator.format=function(b,d){if(arguments.length==1){return function(){var e=a.makeArray(arguments);
e.unshift(b);return a.validator.format.apply(this,e)}}if(arguments.length>2&&d.constructor!=Array){d=a.makeArray(arguments).slice(1)
}if(d.constructor!=Array){d=[d]}a.each(d,function(e,f){b=b.replace(new RegExp("\\{"+e+"\\}","g"),f)});
return b};a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,debug:false,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(b,d){this.lastActive=b;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass,this.errorsFor(b).length);
this.addWrapper(this.errorsFor(b)).hide()}},onfocusout:function(b,d){if(!this.checkable(b)&&(b.name in this.submitted||!this.optional(b))){this.element(b)
}},onkeyup:function(b,d){if(b.name in this.submitted||b==this.lastElement){this.element(b)}},onclick:function(b,d){if(b.name in this.submitted){this.element(b)
}else{if(b.parentNode.name in this.submitted){this.element(b.parentNode)}}},highlight:function(e,b,d){if(e.type==="radio"){this.findByName(e.name).addClass(b).removeClass(d)
}else{a(e).addClass(b).removeClass(d)}},unhighlight:function(e,b,d){if(e.type==="radio"){this.findByName(e.name).removeClass(b).addClass(d)
}else{a(e).removeClass(b).addClass(d)}}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"Required Field",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=a(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm);this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();
var b=(this.groups={});a.each(this.settings.groups,function(f,g){a.each(g.split(/\s/),function(k,h){b[h]=f
})});var e=this.settings.rules;a.each(e,function(f,g){e[f]=a.validator.normalizeRule(g)});function d(h){var g=a.data(this[0].form,"validator"),f="on"+h.type.replace(/^validate/,"");
g.settings[f]&&g.settings[f].call(g,this[0],h)}a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",d).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",d);
if(this.settings.invalidHandler){a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();a.extend(this.submitted,this.errorMap);this.invalid=a.extend({},this.errorMap);
if(!this.valid()){a(this.currentForm).triggerHandler("invalid-form",[this])}this.showErrors();return this.valid()
},checkForm:function(){this.prepareForm();for(var b=0,d=(this.currentElements=this.elements());d[b];b++){this.check(d[b])
}return this.valid()},element:function(d){d=this.validationTargetFor(this.clean(d));this.lastElement=d;
this.prepareElement(d);this.currentElements=a(d);var b=this.check(d);if(b){delete this.invalid[d.name]
}else{this.invalid[d.name]=true}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();return b},showErrors:function(d){if(d){alert("errors");a.extend(this.errorMap,d);this.errorList=[];
for(var b in d){this.errorList.push({message:d[b],element:this.findByName(b)[0]})}this.successList=a.grep(this.successList,function(e){return !(e.name in d)
})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
},resetForm:function(){if(a.fn.resetForm){a(this.currentForm).resetForm()}this.submitted={};this.lastElement=null;
this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(e){var d=0;for(var b in e){d++}return d},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()==0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid){try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(b){}}},findLastActive:function(){var b=this.lastActive;return b&&a.grep(this.errorList,function(d){return d.element.name==b.name
}).length==1&&b},elements:function(){var d=this,b={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&d.settings.debug&&window.console&&console.error("%o has no name assigned",this);
if(this.name in b||!d.objectLength(a(this).rules())){return false}b[this.name]=true;return true})},clean:function(b){return a(b)[0]
},errors:function(){return a(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)
},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=a([]);this.toHide=a([]);
this.currentElements=a([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)
},prepareElement:function(b){this.reset();this.toHide=this.errorsFor(b)},check:function(d){d=this.validationTargetFor(this.clean(d));
var k=a(d).rules();var f=false;for(var l in k){var h={method:l,parameters:k[l]};try{var b=a.validator.methods[l].call(this,d.value.replace(/\r/g,""),d,h.parameters);
if(b=="dependency-mismatch"){f=true;continue}f=false;if(b=="pending"){this.toHide=this.toHide.not(this.errorsFor(d));
return}if(!b){this.formatAndAdd(d,h);return false}}catch(g){this.settings.debug&&window.console&&console.log("exception occured when checking element "+d.id+", check the '"+h.method+"' method",g);
throw g}}if(f){return}if(this.objectLength(k)){this.successList.push(d)}return true},customMetaMessage:function(b,e){if(!a.metadata){return
}var d=this.settings.meta?a(b).metadata()[this.settings.meta]:a(b).metadata();return d&&d.messages&&d.messages[e]
},customMessage:function(d,e){var b=this.settings.messages[d];return b&&(b.constructor==String?b:b[e])
},findDefined:function(){for(var b=0;b<arguments.length;b++){if(arguments[b]!==undefined){return arguments[b]
}}return undefined},defaultMessage:function(b,d){return this.findDefined(this.customMessage(b.name,d),this.customMetaMessage(b,d),!this.settings.ignoreTitle&&b.title||undefined,a.validator.messages[d],"<strong>Warning: No message defined for "+b.name+"</strong>")
},formatAndAdd:function(d,f){var e=this.defaultMessage(d,f.method),b=/\$?\{(\d+)\}/g;if(typeof e=="function"){e=e.call(this,f.parameters,d)
}else{if(b.test(e)){e=jQuery.format(e.replace(b,"{$1}"),f.parameters)}}this.errorList.push({message:e,element:d});
this.errorMap[d.name]=e;this.submitted[d.name]=e},addWrapper:function(b){if(this.settings.wrapper){b=b.add(b.parent(this.settings.wrapper))
}return b},defaultShowErrors:function(){for(var d=0;this.errorList[d];d++){var b=this.errorList[d];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);
this.showLabel(b.element,b.message)}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(var d=0;this.successList[d];d++){this.showLabel(this.successList[d])}}if(this.settings.unhighlight){for(var d=0,e=this.validElements();
e[d];d++){this.settings.unhighlight.call(this,e[d],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(d,e){var b=this.errorsFor(d);
if(b.length){b.removeClass(this.settings.validClass).addClass(this.settings.errorClass);b.attr("generated")&&b.html(e)
}else{b=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(d),generated:true}).addClass(this.settings.errorClass).html(e||"");
if(this.settings.wrapper){b=b.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()}if(!this.labelContainer.append(b).length){this.settings.errorPlacement?this.settings.errorPlacement(b,a(d)):b.insertAfter(d)
}}if(!e&&this.settings.success){b.text("");typeof this.settings.success=="string"?b.addClass(this.settings.success):this.settings.success(b)
}this.toShow=this.toShow.add(b)},errorsFor:function(d){var b=this.idOrName(d);return this.errors().filter(function(){return a(this).attr("for")==b
})},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)},validationTargetFor:function(b){if(this.checkable(b)){b=this.findByName(b.name).not(this.settings.ignore)[0]
}return b},checkable:function(b){return/radio|checkbox/i.test(b.type)},findByName:function(b){var d=this.currentForm;
return a(document.getElementsByName(b)).map(function(e,f){return f.form==d&&f.name==b&&f||null})},getLength:function(d,b){switch(b.nodeName.toLowerCase()){case"select":return a("option:selected",b).length;
case"input":if(this.checkable(b)){return this.findByName(b.name).filter(":checked").length}}return d.length
},depend:function(d,b){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,b):true},dependTypes:{"boolean":function(d,b){return d
},string:function(d,b){return !!a(d,b.form).length},"function":function(d,b){return d(b)}},optional:function(b){return !a.validator.methods.required.call(this,a.trim(b.value),b)&&"dependency-mismatch"
},startRequest:function(b){if(!this.pending[b.name]){this.pendingRequest++;this.pending[b.name]=true}},stopRequest:function(b,d){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0}delete this.pending[b.name];if(d&&this.pendingRequest==0&&this.formSubmitted&&this.form()){a(this.currentForm).submit();
this.formSubmitted=false}else{if(!d&&this.pendingRequest==0&&this.formSubmitted){a(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false}}},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:true,message:this.defaultMessage(b,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(b,d){b.constructor==String?this.classRuleSettings[b]=d:a.extend(this.classRuleSettings,b)
},classRules:function(d){var e={};var b=a(d).attr("class");b&&a.each(b.split(" "),function(){if(this in a.validator.classRuleSettings){a.extend(e,a.validator.classRuleSettings[this])
}});return e},attributeRules:function(d){var f={};var b=a(d);for(var g in a.validator.methods){var e;
if(g==="required"&&typeof a.fn.prop==="function"){e=b.prop(g)}else{e=b.attr(g)}if(e){f[g]=e}else{if(b[0].getAttribute("type")===g){f[g]=true
}}}if(f.maxlength&&/-1|2147483647|524288/.test(f.maxlength)){delete f.maxlength}return f},metadataRules:function(b){if(!a.metadata){return{}
}var d=a.data(b.form,"validator").settings.meta;return d?a(b).metadata()[d]:a(b).metadata()},staticRules:function(d){var e={};
var b=a.data(d.form,"validator");if(b.settings.rules){e=a.validator.normalizeRule(b.settings.rules[d.name])||{}
}return e},normalizeRules:function(d,b){a.each(d,function(g,f){if(f===false){delete d[g];return}if(f.param||f.depends){var e=true;
switch(typeof f.depends){case"string":e=!!a(f.depends,b.form).length;break;case"function":e=f.depends.call(b,b);
break}if(e){d[g]=f.param!==undefined?f.param:true}else{delete d[g]}}});a.each(d,function(e,f){d[e]=a.isFunction(f)?f(b):f
});a.each(["minlength","maxlength","min","max"],function(){if(d[this]){d[this]=Number(d[this])}});a.each(["rangelength","range"],function(){if(d[this]){d[this]=[Number(d[this][0]),Number(d[this][1])]
}});if(a.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];delete d.min;delete d.max
}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];delete d.minlength;delete d.maxlength
}}if(d.messages){delete d.messages}return d},normalizeRule:function(d){if(typeof d=="string"){var b={};
a.each(d.split(/\s/),function(){b[this]=true});d=b}return d},addMethod:function(b,e,d){a.validator.methods[b]=e;
a.validator.messages[b]=d!=undefined?d:a.validator.messages[b];if(e.length<3){a.validator.addClassRules(b,a.validator.normalizeRule(b))
}},methods:{required:function(d,b,f){if(!this.depend(f,b)){return"dependency-mismatch"}switch(b.nodeName.toLowerCase()){case"select":var e=a(b).val();
return e&&e.length>0;case"input":if(this.checkable(b)){return this.getLength(d,b)>0}default:return a.trim(d).length>0
}},remote:function(g,d,h){if(this.optional(d)){return"dependency-mismatch"}var e=this.previousValue(d);
if(!this.settings.messages[d.name]){this.settings.messages[d.name]={}}e.originalMessage=this.settings.messages[d.name].remote;
this.settings.messages[d.name].remote=e.message;h=typeof h=="string"&&{url:h}||h;if(this.pending[d.name]){return"pending"
}if(e.old===g){return e.valid}e.old=g;var b=this;this.startRequest(d);var f={};f[d.name]=g;a.ajax(a.extend(true,{url:h,mode:"abort",port:"validate"+d.name,dataType:"json",data:f,success:function(l){b.settings.messages[d.name].remote=e.originalMessage;
var n=l===true;if(n){var k=b.formSubmitted;b.prepareElement(d);b.formSubmitted=k;b.successList.push(d);
b.showErrors()}else{var o={};var m=l||b.defaultMessage(d,"remote");o[d.name]=e.message=a.isFunction(m)?m(g):m;
b.showErrors(o)}e.valid=n;b.stopRequest(d,n)}},h));return"pending"},minlength:function(d,b,e){return a(b).is(":hidden")||this.optional(b)||this.getLength(a.trim(d),b)>=e
},maxlength:function(d,b,e){return this.optional(b)||this.getLength(a.trim(d),b)<=e},rangelength:function(e,b,f){var d=this.getLength(a.trim(e),b);
return this.optional(b)||(d>=f[0]&&d<=f[1])},min:function(d,b,e){return this.optional(b)||d>=e},max:function(d,b,e){return this.optional(b)||d<=e
},range:function(d,b,e){return this.optional(b)||(d>=e[0]&&d<=e[1])},email:function(d,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
},url:function(d,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(d))},dateISO:function(d,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(d)
},number:function(d,b){return a(b).is(":hidden")||this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(d.replace(/,/g,""))
},digits:function(d,b){return this.optional(b)||/^\d+$/.test(d)},creditcard:function(g,d){if(this.optional(d)){return"dependency-mismatch"
}if(/[^0-9 -]+/.test(g)){return false}var h=0,f=0,b=false;g=g.replace(/\D/g,"");for(var k=g.length-1;
k>=0;k--){var e=g.charAt(k);var f=parseInt(e,10);if(b){if((f*=2)>9){f-=9}}h+=f;b=!b}return(h%10)==0},accept:function(d,b,e){e=typeof e=="string"?e.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(b)||d.match(new RegExp(".("+e+")$","i"))},equalTo:function(d,b,f){var e=a(f).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(b).valid()
});return d==e.val()}}});a.format=a.validator.format})(jQuery);(function(d){var a={};if(d.ajaxPrefilter){d.ajaxPrefilter(function(g,f,h){var e=g.port;
if(g.mode=="abort"){if(a[e]){a[e].abort()}a[e]=h}})}else{var b=d.ajax;d.ajax=function(f){var g=("mode" in f?f:d.ajaxSettings).mode,e=("port" in f?f:d.ajaxSettings).port;
if(g=="abort"){if(a[e]){a[e].abort()}return(a[e]=b.apply(this,arguments))}return b.apply(this,arguments)
}}})(jQuery);(function(a){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(d,b){a.event.special[b]={setup:function(){this.addEventListener(d,e,true)
},teardown:function(){this.removeEventListener(d,e,true)},handler:function(f){arguments[0]=a.event.fix(f);
arguments[0].type=b;return a.event.handle.apply(this,arguments)}};function e(f){f=a.event.fix(f);f.type=b;
return a.event.handle.call(this,f)}})}a.extend(a.fn,{validateDelegate:function(e,d,b){return this.bind(d,function(f){var g=a(f.target);
if(g.is(e)){return b.apply(g,arguments)}})}})})(jQuery);
/*!
 * jQuery Form Plugin
 * version: 2.87 (20-OCT-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(b){b.fn.ajaxSubmit=function(e){if(!this.length){a("ajaxSubmit: skipping submit process - no element selected");
return this}var d,t,g,k=this;if(typeof e=="function"){e={success:e}}d=this.attr("method");t=this.attr("action");
g=(typeof t==="string")?b.trim(t):"";g=g||window.location.href||"";if(g){g=(g.match(/^([^#]+)/)||[])[1]
}e=b.extend(true,{url:g,success:b.ajaxSettings.success,type:d||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},e);
var o={};this.trigger("form-pre-serialize",[this,e,o]);if(o.veto){a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
return this}if(e.beforeSerialize&&e.beforeSerialize(this,e)===false){a("ajaxSubmit: submit aborted via beforeSerialize callback");
return this}var h=e.traditional;if(h===undefined){h=b.ajaxSettings.traditional}var y,s,m,z=this.formToArray(e.semantic);
if(e.data){e.extraData=e.data;y=b.param(e.data,h)}if(e.beforeSubmit&&e.beforeSubmit(z,this,e)===false){a("ajaxSubmit: submit aborted via beforeSubmit callback");
return this}this.trigger("form-submit-validate",[z,this,e,o]);if(o.veto){a("ajaxSubmit: submit vetoed via form-submit-validate trigger");
return this}var r=b.param(z,h);if(y){r=(r?(r+"&"+y):y)}if(e.type.toUpperCase()=="GET"){e.url+=(e.url.indexOf("?")>=0?"&":"?")+r;
e.data=null}else{e.data=r}var A=[];if(e.resetForm){A.push(function(){k.resetForm()})}if(e.clearForm){A.push(function(){k.clearForm(e.includeHidden)
})}if(!e.dataType&&e.target){var f=e.success||function(){};A.push(function(q){var n=e.replaceTarget?"replaceWith":"html";
b(e.target)[n](q).each(f,arguments)})}else{if(e.success){A.push(e.success)}}e.success=function(C,q,D){var B=e.context||e;
for(var v=0,n=A.length;v<n;v++){A[v].apply(B,[C,q,D||k,k])}};var w=b("input:file",this).length>0;var u="multipart/form-data";
var p=(k.attr("enctype")==u||k.attr("encoding")==u);if(e.iframe!==false&&(w||e.iframe||p)){if(e.closeKeepAlive){b.get(e.closeKeepAlive,function(){l(z)
})}else{l(z)}}else{if(b.browser.msie&&d=="get"&&typeof e.type==="undefined"){var x=k[0].getAttribute("method");
if(typeof x==="string"){e.type=x}}b.ajax(e)}this.trigger("form-submit-notify",[this,e]);return this;function l(X){var C=k[0],B,T,N,V,Q,E,I,G,H,R,U,L;
var F=!!b.fn.prop;if(X){if(F){for(T=0;T<X.length;T++){B=b(C[X[T].name]);B.prop("disabled",false)}}else{for(T=0;
T<X.length;T++){B=b(C[X[T].name]);B.removeAttr("disabled")}}}if(b(":input[name=submit],:input[id=submit]",C).length){alert('Error: Form elements must not have name or id of "submit".');
return}N=b.extend(true,{},b.ajaxSettings,e);N.context=N.context||N;Q="jqFormIO"+(new Date().getTime());
if(N.iframeTarget){E=b(N.iframeTarget);R=E.attr("name");if(R==null){E.attr("name",Q)}else{Q=R}}else{E=b('<iframe name="'+Q+'" src="'+N.iframeSrc+'" />');
E.css({position:"absolute",top:"-1000px",left:"-1000px"})}I=E[0];G={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(n){var aa=(n==="timeout"?"timeout":"aborted");
a("aborting upload... "+aa);this.aborted=1;E.attr("src",N.iframeSrc);G.error=aa;N.error&&N.error.call(N.context,G,aa,n);
V&&b.event.trigger("ajaxError",[G,N,aa]);N.complete&&N.complete.call(N.context,G,aa)}};V=N.global;if(V&&!b.active++){b.event.trigger("ajaxStart")
}if(V){b.event.trigger("ajaxSend",[G,N])}if(N.beforeSend&&N.beforeSend.call(N.context,G,N)===false){if(N.global){b.active--
}return}if(G.aborted){return}H=C.clk;if(H){R=H.name;if(R&&!H.disabled){N.extraData=N.extraData||{};N.extraData[R]=H.value;
if(H.type=="image"){N.extraData[R+".x"]=C.clk_x;N.extraData[R+".y"]=C.clk_y}}}var M=1;var J=2;function K(aa){var n=aa.contentWindow?aa.contentWindow.document:aa.contentDocument?aa.contentDocument:aa.document;
return n}function S(){var ac=k.attr("target"),aa=k.attr("action");C.setAttribute("target",Q);if(!d){C.setAttribute("method","POST")
}if(aa!=N.url){C.setAttribute("action",N.url)}if(!N.skipEncodingOverride&&(!d||/post/i.test(d))){k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})
}if(N.timeout){L=setTimeout(function(){U=true;P(M)},N.timeout)}function ad(){try{var n=K(I).readyState;
a("state = "+n);if(n.toLowerCase()=="uninitialized"){setTimeout(ad,50)}}catch(af){a("Server abort: ",af," (",af.name,")");
P(J);L&&clearTimeout(L);L=undefined}}var ab=[];try{if(N.extraData){for(var ae in N.extraData){ab.push(b('<input type="hidden" name="'+ae+'" />').attr("value",N.extraData[ae]).appendTo(C)[0])
}}if(!N.iframeTarget){E.appendTo("body");I.attachEvent?I.attachEvent("onload",P):I.addEventListener("load",P,false)
}setTimeout(ad,15);C.submit()}finally{C.setAttribute("action",aa);if(ac){C.setAttribute("target",ac)}else{k.removeAttr("target")
}b(ab).remove()}}if(N.forceSync){S()}else{setTimeout(S,10)}var Y,Z,W=50,D;function P(ae){if(G.aborted||D){return
}try{Z=K(I)}catch(ah){a("cannot access response document: ",ah);ae=J}if(ae===M&&G){G.abort("timeout");
return}else{if(ae==J&&G){G.abort("server abort");return}}if(!Z||Z.location.href==N.iframeSrc){if(!U){return
}}I.detachEvent?I.detachEvent("onload",P):I.removeEventListener("load",P,false);var ac="success",ag;try{if(U){throw"timeout"
}var ab=N.dataType=="xml"||Z.XMLDocument||b.isXMLDoc(Z);a("isXml="+ab);if(!ab&&window.opera&&(Z.body==null||Z.body.innerHTML=="")){if(--W){a("requeing onLoad callback, DOM not available");
setTimeout(P,250);return}}var ai=Z.body?Z.body:Z.documentElement;G.responseText=ai?ai.innerHTML:null;
G.responseXML=Z.XMLDocument?Z.XMLDocument:Z;if(ab){N.dataType="xml"}G.getResponseHeader=function(al){var ak={"content-type":N.dataType};
return ak[al]};if(ai){G.status=Number(ai.getAttribute("status"))||G.status;G.statusText=ai.getAttribute("statusText")||G.statusText
}var n=(N.dataType||"").toLowerCase();var af=/(json|script|text)/.test(n);if(af||N.textarea){var ad=Z.getElementsByTagName("textarea")[0];
if(ad){G.responseText=ad.value;G.status=Number(ad.getAttribute("status"))||G.status;G.statusText=ad.getAttribute("statusText")||G.statusText
}else{if(af){var aa=Z.getElementsByTagName("pre")[0];var aj=Z.getElementsByTagName("body")[0];if(aa){G.responseText=aa.textContent?aa.textContent:aa.innerText
}else{if(aj){G.responseText=aj.textContent?aj.textContent:aj.innerText}}}}}else{if(n=="xml"&&!G.responseXML&&G.responseText!=null){G.responseXML=O(G.responseText)
}}try{Y=q(G,n,N)}catch(ae){ac="parsererror";G.error=ag=(ae||ac)}}catch(ae){a("error caught: ",ae);ac="error";
G.error=ag=(ae||ac)}if(G.aborted){a("upload aborted");ac=null}if(G.status){ac=(G.status>=200&&G.status<300||G.status===304)?"success":"error"
}if(ac==="success"){N.success&&N.success.call(N.context,Y,"success",G);V&&b.event.trigger("ajaxSuccess",[G,N])
}else{if(ac){if(ag==undefined){ag=G.statusText}N.error&&N.error.call(N.context,G,ac,ag);V&&b.event.trigger("ajaxError",[G,N,ag])
}}V&&b.event.trigger("ajaxComplete",[G,N]);if(V&&!--b.active){b.event.trigger("ajaxStop")}N.complete&&N.complete.call(N.context,G,ac);
D=true;if(N.timeout){clearTimeout(L)}setTimeout(function(){if(!N.iframeTarget){E.remove()}G.responseXML=null
},100)}var O=b.parseXML||function(n,aa){if(window.ActiveXObject){aa=new ActiveXObject("Microsoft.XMLDOM");
aa.async="false";aa.loadXML(n)}else{aa=(new DOMParser()).parseFromString(n,"text/xml")}return(aa&&aa.documentElement&&aa.documentElement.nodeName!="parsererror")?aa:null
};var v=b.parseJSON||function(n){return window["eval"]("("+n+")")};var q=function(ae,ac,ab){var aa=ae.getResponseHeader("content-type")||"",n=ac==="xml"||!ac&&aa.indexOf("xml")>=0,ad=n?ae.responseXML:ae.responseText;
if(n&&ad.documentElement.nodeName==="parsererror"){b.error&&b.error("parsererror")}if(ab&&ab.dataFilter){ad=ab.dataFilter(ad,ac)
}if(typeof ad==="string"){if(ac==="json"||!ac&&aa.indexOf("json")>=0){ad=v(ad)}else{if(ac==="script"||!ac&&aa.indexOf("javascript")>=0){b.globalEval(ad)
}}}return ad}}};b.fn.ajaxForm=function(d){if(this.length===0){var e={s:this.selector,c:this.context};
if(!b.isReady&&e.s){a("DOM not ready, queuing ajaxForm");b(function(){b(e.s,e.c).ajaxForm(d)});return this
}a("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(f){if(!f.isDefaultPrevented()){f.preventDefault();
b(this).ajaxSubmit(d)}}).bind("click.form-plugin",function(l){var k=l.target;var g=b(k);if(!(g.is(":submit,input:image"))){var f=g.closest(":submit");
if(f.length==0){return}k=f[0]}var h=this;h.clk=k;if(k.type=="image"){if(l.offsetX!=undefined){h.clk_x=l.offsetX;
h.clk_y=l.offsetY}else{if(typeof b.fn.offset=="function"){var m=g.offset();h.clk_x=l.pageX-m.left;h.clk_y=l.pageY-m.top
}else{h.clk_x=l.pageX-k.offsetLeft;h.clk_y=l.pageY-k.offsetTop}}}setTimeout(function(){h.clk=h.clk_x=h.clk_y=null
},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};
b.fn.formToArray=function(r){var q=[];if(this.length===0){return q}var e=this[0];var h=r?e.getElementsByTagName("*"):e.elements;
if(!h){return q}var l,k,g,s,f,o,d;for(l=0,o=h.length;l<o;l++){f=h[l];g=f.name;if(!g){continue}if(r&&e.clk&&f.type=="image"){if(!f.disabled&&e.clk==f){q.push({name:g,value:b(f).val()});
q.push({name:g+".x",value:e.clk_x},{name:g+".y",value:e.clk_y})}continue}s=b.fieldValue(f,true);if(s&&s.constructor==Array){for(k=0,d=s.length;
k<d;k++){q.push({name:g,value:s[k]})}}else{if(s!==null&&typeof s!="undefined"){q.push({name:g,value:s})
}}}if(!r&&e.clk){var m=b(e.clk),p=m[0];g=p.name;if(g&&!p.disabled&&p.type=="image"){q.push({name:g,value:m.val()});
q.push({name:g+".x",value:e.clk_x},{name:g+".y",value:e.clk_y})}}return q};b.fn.formSerialize=function(d){return b.param(this.formToArray(d))
};b.fn.fieldSerialize=function(e){var d=[];this.each(function(){var k=this.name;if(!k){return}var g=b.fieldValue(this,e);
if(g&&g.constructor==Array){for(var h=0,f=g.length;h<f;h++){d.push({name:k,value:g[h]})}}else{if(g!==null&&typeof g!="undefined"){d.push({name:this.name,value:g})
}}});return b.param(d)};b.fn.fieldValue=function(k){for(var h=[],f=0,d=this.length;f<d;f++){var g=this[f];
var e=b.fieldValue(g,k);if(e===null||typeof e=="undefined"||(e.constructor==Array&&!e.length)){continue
}e.constructor==Array?b.merge(h,e):h.push(e)}return h};b.fieldValue=function(d,l){var f=d.name,r=d.type,s=d.tagName.toLowerCase();
if(l===undefined){l=true}if(l&&(!f||d.disabled||r=="reset"||r=="button"||(r=="checkbox"||r=="radio")&&!d.checked||(r=="submit"||r=="image")&&d.form&&d.form.clk!=d||s=="select"&&d.selectedIndex==-1)){return null
}if(s=="select"){var m=d.selectedIndex;if(m<0){return null}var p=[],e=d.options;var h=(r=="select-one");
var o=(h?m+1:e.length);for(var g=(h?m:0);g<o;g++){var k=e[g];if(k.selected){var q=k.value;if(!q){q=(k.attributes&&k.attributes.value&&!(k.attributes.value.specified))?k.text:k.value
}if(h){return q}p.push(q)}}return p}return b(d).val()};b.fn.clearForm=function(d){return this.each(function(){b("input,select,textarea",this).clearFields(d)
})};b.fn.clearFields=b.fn.clearInputs=function(d){var e=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){var g=this.type,f=this.tagName.toLowerCase();if(e.test(g)||f=="textarea"||(d&&/hidden/.test(g))){this.value=""
}else{if(g=="checkbox"||g=="radio"){this.checked=false}else{if(f=="select"){this.selectedIndex=-1}}}})
};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()
}})};b.fn.enable=function(d){if(d===undefined){d=true}return this.each(function(){this.disabled=!d})};
b.fn.selected=function(d){if(d===undefined){d=true}return this.each(function(){var e=this.type;if(e=="checkbox"||e=="radio"){this.checked=d
}else{if(this.tagName.toLowerCase()=="option"){var f=b(this).parent("select");if(d&&f[0]&&f[0].type=="select-one"){f.find("option").selected(false)
}this.selected=d}}})};b.fn.ajaxSubmit.debug=false;function a(){if(!b.fn.ajaxSubmit.debug){return}var d="[jquery.form] "+Array.prototype.join.call(arguments,"");
if(window.console&&window.console.log){window.console.log(d)}else{if(window.opera&&window.opera.postError){window.opera.postError(d)
}}}})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(b,g){var a=0,f=/^ui-id-\d+$/;
b.ui=b.ui||{};b.extend(b.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
b.fn.extend({focus:(function(h){return function(k,l){return typeof k==="number"?this.each(function(){var m=this;
setTimeout(function(){b(m).focus();if(l){l.call(m)}},k)}):h.apply(this,arguments)}})(b.fn.focus),scrollParent:function(){var h;
if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){h=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)}else{h=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)}return(/fixed/).test(this.css("position"))||!h.length?b(document):h},zIndex:function(m){if(m!==g){return this.css("zIndex",m)
}if(this.length){var k=b(this[0]),h,l;while(k.length&&k[0]!==document){h=k.css("position");if(h==="absolute"||h==="relative"||h==="fixed"){l=parseInt(k.css("zIndex"),10);
if(!isNaN(l)&&l!==0){return l}}k=k.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)
}})},removeUniqueId:function(){return this.each(function(){if(f.test(this.id)){b(this).removeAttr("id")
}})}});function e(l,h){var n,m,k,o=l.nodeName.toLowerCase();if("area"===o){n=l.parentNode;m=n.name;if(!l.href||!m||n.nodeName.toLowerCase()!=="map"){return false
}k=b("img[usemap=#"+m+"]")[0];return !!k&&d(k)}return(/input|select|textarea|button|object/.test(o)?!l.disabled:"a"===o?l.href||h:h)&&d(l)
}function d(h){return b.expr.filters.visible(h)&&!b(h).parents().addBack().filter(function(){return b.css(this,"visibility")==="hidden"
}).length}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(h){return function(k){return !!b.data(k,h)
}}):function(l,k,h){return !!b.data(l,h[3])},focusable:function(h){return e(h,!isNaN(b.attr(h,"tabindex")))
},tabbable:function(l){var h=b.attr(l,"tabindex"),k=isNaN(h);return(k||h>=0)&&e(l,!k)}});if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(l,h){var k=h==="Width"?["Left","Right"]:["Top","Bottom"],m=h.toLowerCase(),o={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};
function n(r,q,p,s){b.each(k,function(){q-=parseFloat(b.css(r,"padding"+this))||0;if(p){q-=parseFloat(b.css(r,"border"+this+"Width"))||0
}if(s){q-=parseFloat(b.css(r,"margin"+this))||0}});return q}b.fn["inner"+h]=function(p){if(p===g){return o["inner"+h].call(this)
}return this.each(function(){b(this).css(m,n(this,p)+"px")})};b.fn["outer"+h]=function(p,q){if(typeof p!=="number"){return o["outer"+h].call(this,p)
}return this.each(function(){b(this).css(m,n(this,p,true,q)+"px")})}})}if(!b.fn.addBack){b.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))
}}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(h){return function(k){if(arguments.length){return h.call(this,b.camelCase(k))
}else{return h.call(this)}}})(b.fn.removeData)}b.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
b.support.selectstart="onselectstart" in document.createElement("div");b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(h){h.preventDefault()
})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.extend(b.ui,{plugin:{add:function(k,l,n){var h,m=b.ui[k].prototype;
for(h in n){m.plugins[h]=m.plugins[h]||[];m.plugins[h].push([l,n[h]])}},call:function(h,l,k){var m,n=h.plugins[l];
if(!n||!h.element[0].parentNode||h.element[0].parentNode.nodeType===11){return}for(m=0;m<n.length;m++){if(h.options[n[m][0]]){n[m][1].apply(h.element,k)
}}}},hasScroll:function(m,k){if(b(m).css("overflow")==="hidden"){return false}var h=(k&&k==="left")?"scrollLeft":"scrollTop",l=false;
if(m[h]>0){return true}m[h]=1;l=(m[h]>0);m[h]=0;return l}})})(jQuery);(function(b,f){var a=0,e=Array.prototype.slice,d=b.cleanData;
b.cleanData=function(g){for(var h=0,k;(k=g[h])!=null;h++){try{b(k).triggerHandler("remove")}catch(l){}}d(g)
};b.widget=function(g,h,q){var n,o,l,p,k={},m=g.split(".")[0];g=g.split(".")[1];n=m+"-"+g;if(!q){q=h;
h=b.Widget}b.expr[":"][n.toLowerCase()]=function(r){return !!b.data(r,n)};b[m]=b[m]||{};o=b[m][g];l=b[m][g]=function(r,s){if(!this._createWidget){return new l(r,s)
}if(arguments.length){this._createWidget(r,s)}};b.extend(l,o,{version:q.version,_proto:b.extend({},q),_childConstructors:[]});
p=new h();p.options=b.widget.extend({},p.options);b.each(q,function(s,r){if(!b.isFunction(r)){k[s]=r;
return}k[s]=(function(){var t=function(){return h.prototype[s].apply(this,arguments)},u=function(v){return h.prototype[s].apply(this,v)
};return function(){var x=this._super,v=this._superApply,w;this._super=t;this._superApply=u;w=r.apply(this,arguments);
this._super=x;this._superApply=v;return w}})()});l.prototype=b.widget.extend(p,{widgetEventPrefix:o?p.widgetEventPrefix:g},k,{constructor:l,namespace:m,widgetName:g,widgetFullName:n});
if(o){b.each(o._childConstructors,function(s,t){var r=t.prototype;b.widget(r.namespace+"."+r.widgetName,l,t._proto)
});delete o._childConstructors}else{h._childConstructors.push(l)}b.widget.bridge(g,l)};b.widget.extend=function(n){var h=e.call(arguments,1),m=0,g=h.length,k,l;
for(;m<g;m++){for(k in h[m]){l=h[m][k];if(h[m].hasOwnProperty(k)&&l!==f){if(b.isPlainObject(l)){n[k]=b.isPlainObject(n[k])?b.widget.extend({},n[k],l):b.widget.extend({},l)
}else{n[k]=l}}}}return n};b.widget.bridge=function(h,g){var k=g.prototype.widgetFullName||h;b.fn[h]=function(n){var l=typeof n==="string",m=e.call(arguments,1),o=this;
n=!l&&m.length?b.widget.extend.apply(null,[n].concat(m)):n;if(l){this.each(function(){var q,p=b.data(this,k);
if(!p){return b.error("cannot call methods on "+h+" prior to initialization; attempted to call method '"+n+"'")
}if(!b.isFunction(p[n])||n.charAt(0)==="_"){return b.error("no such method '"+n+"' for "+h+" widget instance")
}q=p[n].apply(p,m);if(q!==p&&q!==f){o=q&&q.jquery?o.pushStack(q.get()):q;return false}})}else{this.each(function(){var p=b.data(this,k);
if(p){p.option(n||{})._init()}else{b.data(this,k,new g(n,this))}})}return o}};b.Widget=function(){};b.Widget._childConstructors=[];
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(g,h){h=b(h||this.defaultElement||this)[0];
this.element=b(h);this.uuid=a++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=b.widget.extend({},this.options,this._getCreateOptions(),g);
this.bindings=b();this.hoverable=b();this.focusable=b();if(h!==this){b.data(h,this.widgetFullName,this);
this._on(true,this.element,{remove:function(k){if(k.target===h){this.destroy()}}});this.document=b(h.style?h.ownerDocument:h.document||h);
this.window=b(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());
this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")
},_destroy:b.noop,widget:function(){return this.element},option:function(l,m){var g=l,n,k,h;if(arguments.length===0){return b.widget.extend({},this.options)
}if(typeof l==="string"){g={};n=l.split(".");l=n.shift();if(n.length){k=g[l]=b.widget.extend({},this.options[l]);
for(h=0;h<n.length-1;h++){k[n[h]]=k[n[h]]||{};k=k[n[h]]}l=n.pop();if(m===f){return k[l]===f?null:k[l]
}k[l]=m}else{if(m===f){return this.options[l]===f?null:this.options[l]}g[l]=m}}this._setOptions(g);return this
},_setOptions:function(g){var h;for(h in g){this._setOption(h,g[h])}return this},_setOption:function(g,h){this.options[g]=h;
if(g==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!h).attr("aria-disabled",h);
this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this
},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)
},_on:function(l,k,h){var m,g=this;if(typeof l!=="boolean"){h=k;k=l;l=false}if(!h){h=k;k=this.element;
m=this.widget()}else{k=m=b(k);this.bindings=this.bindings.add(k)}b.each(h,function(s,r){function p(){if(!l&&(g.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return
}return(typeof r==="string"?g[r]:r).apply(g,arguments)}if(typeof r!=="string"){p.guid=r.guid=r.guid||p.guid||b.guid++
}var q=s.match(/^(\w+)\s*(.*)$/),o=q[1]+g.eventNamespace,n=q[2];if(n){m.delegate(n,o,p)}else{k.bind(o,p)
}})},_off:function(h,g){g=(g||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;h.unbind(g).undelegate(g)
},_delay:function(l,k){function h(){return(typeof l==="string"?g[l]:l).apply(g,arguments)}var g=this;
return setTimeout(h,k||0)},_hoverable:function(g){this.hoverable=this.hoverable.add(g);this._on(g,{mouseenter:function(h){b(h.currentTarget).addClass("ui-state-hover")
},mouseleave:function(h){b(h.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(g){this.focusable=this.focusable.add(g);
this._on(g,{focusin:function(h){b(h.currentTarget).addClass("ui-state-focus")},focusout:function(h){b(h.currentTarget).removeClass("ui-state-focus")
}})},_trigger:function(g,h,k){var n,m,l=this.options[g];k=k||{};h=b.Event(h);h.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();
h.target=this.element[0];m=h.originalEvent;if(m){for(n in m){if(!(n in h)){h[n]=m[n]}}}this.element.trigger(h,k);
return !(b.isFunction(l)&&l.apply(this.element[0],[h].concat(k))===false||h.isDefaultPrevented())}};b.each({show:"fadeIn",hide:"fadeOut"},function(h,g){b.Widget.prototype["_"+h]=function(m,l,o){if(typeof l==="string"){l={effect:l}
}var n,k=!l?h:l===true||typeof l==="number"?g:l.effect||g;l=l||{};if(typeof l==="number"){l={duration:l}
}n=!b.isEmptyObject(l);l.complete=o;if(l.delay){m.delay(l.delay)}if(n&&b.effects&&b.effects.effect[k]){m[h](l)
}else{if(k!==h&&m[k]){m[k](l.duration,l.easing,o)}else{m.queue(function(p){b(this)[h]();if(o){o.call(m[0])
}p()})}}}})})(jQuery);(function(b,d){var a=false;b(document).mouseup(function(){a=false});b.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;
this.element.bind("mousedown."+this.widgetName,function(f){return e._mouseDown(f)}).bind("click."+this.widgetName,function(f){if(true===b.data(f.target,e.widgetName+".preventClickEvent")){b.removeData(f.target,e.widgetName+".preventClickEvent");
f.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(g){if(a){return}(this._mouseStarted&&this._mouseUp(g));this._mouseDownEvent=g;
var f=this,h=(g.which===1),e=(typeof this.options.cancel==="string"&&g.target.nodeName?b(g.target).closest(this.options.cancel).length:false);
if(!h||e||!this._mouseCapture(g)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=true
},this.options.delay)}if(this._mouseDistanceMet(g)&&this._mouseDelayMet(g)){this._mouseStarted=(this._mouseStart(g)!==false);
if(!this._mouseStarted){g.preventDefault();return true}}if(true===b.data(g.target,this.widgetName+".preventClickEvent")){b.removeData(g.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(k){return f._mouseMove(k)};this._mouseUpDelegate=function(k){return f._mouseUp(k)
};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
g.preventDefault();a=true;return true},_mouseMove:function(e){if(b.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button){return this._mouseUp(e)
}if(this._mouseStarted){this._mouseDrag(e);return e.preventDefault()}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,e)!==false);
(this._mouseStarted?this._mouseDrag(e):this._mouseUp(e))}return !this._mouseStarted},_mouseUp:function(e){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;if(e.target===this._mouseDownEvent.target){b.data(e.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return(Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})})(jQuery);(function(f,h){f.extend(f.ui,{datepicker:{version:"1.10.3"}});var g="datepicker",d;function b(){this._curInst=null;
this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
f.extend(this._defaults,this.regional[""]);this.dpDiv=e(f("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}f.extend(b.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(k){a(this._defaults,k||{});return this},_attachDatepicker:function(n,k){var o,m,l;
o=n.nodeName.toLowerCase();m=(o==="div"||o==="span");if(!n.id){this.uuid+=1;n.id="dp"+this.uuid}l=this._newInst(f(n),m);
l.settings=f.extend({},k||{});if(o==="input"){this._connectDatepicker(n,l)}else{if(m){this._inlineDatepicker(n,l)
}}},_newInst:function(l,k){var m=l[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:m,input:l,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:k,dpDiv:(!k?this.dpDiv:e(f("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(m,l){var k=f(m);l.append=f([]);l.trigger=f([]);if(k.hasClass(this.markerClassName)){return
}this._attachments(k,l);k.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(l);f.data(m,g,l);if(l.settings.disabled){this._disableDatepicker(m)}},_attachments:function(m,p){var l,o,k,q=this._get(p,"appendText"),n=this._get(p,"isRTL");
if(p.append){p.append.remove()}if(q){p.append=f("<span class='"+this._appendClass+"'>"+q+"</span>");m[n?"before":"after"](p.append)
}m.unbind("focus",this._showDatepicker);if(p.trigger){p.trigger.remove()}l=this._get(p,"showOn");if(l==="focus"||l==="both"){m.focus(this._showDatepicker)
}if(l==="button"||l==="both"){o=this._get(p,"buttonText");k=this._get(p,"buttonImage");p.trigger=f(this._get(p,"buttonImageOnly")?f("<img/>").addClass(this._triggerClass).attr({src:k,alt:o,title:o}):f("<button type='button'></button>").addClass(this._triggerClass).html(!k?o:f("<img/>").attr({src:k,alt:o,title:o})));
m[n?"before":"after"](p.trigger);p.trigger.click(function(){if(f.datepicker._datepickerShowing&&f.datepicker._lastInput===m[0]){f.datepicker._hideDatepicker()
}else{if(f.datepicker._datepickerShowing&&f.datepicker._lastInput!==m[0]){f.datepicker._hideDatepicker();
f.datepicker._showDatepicker(m[0])}else{f.datepicker._showDatepicker(m[0])}}return false})}},_autoSize:function(q){if(this._get(q,"autoSize")&&!q.inline){var n,l,m,p,o=new Date(2009,12-1,20),k=this._get(q,"dateFormat");
if(k.match(/[DM]/)){n=function(r){l=0;m=0;for(p=0;p<r.length;p++){if(r[p].length>l){l=r[p].length;m=p
}}return m};o.setMonth(n(this._get(q,(k.match(/MM/)?"monthNames":"monthNamesShort"))));o.setDate(n(this._get(q,(k.match(/DD/)?"dayNames":"dayNamesShort")))+20-o.getDay())
}q.input.attr("size",this._formatDate(q,o).length)}},_inlineDatepicker:function(l,k){var m=f(l);if(m.hasClass(this.markerClassName)){return
}m.addClass(this.markerClassName).append(k.dpDiv);f.data(l,g,k);this._setDate(k,this._getDefaultDate(k),true);
this._updateDatepicker(k);this._updateAlternate(k);if(k.settings.disabled){this._disableDatepicker(l)
}k.dpDiv.css("display","block")},_dialogDatepicker:function(r,l,p,m,q){var k,u,o,t,s,n=this._dialogInst;
if(!n){this.uuid+=1;k="dp"+this.uuid;this._dialogInput=f("<input type='text' id='"+k+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);f("body").append(this._dialogInput);n=this._dialogInst=this._newInst(this._dialogInput,false);
n.settings={};f.data(this._dialogInput[0],g,n)}a(n.settings,m||{});l=(l&&l.constructor===Date?this._formatDate(n,l):l);
this._dialogInput.val(l);this._pos=(q?(q.length?q:[q.pageX,q.pageY]):null);if(!this._pos){u=document.documentElement.clientWidth;
o=document.documentElement.clientHeight;t=document.documentElement.scrollLeft||document.body.scrollLeft;
s=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(u/2)-100+t,(o/2)-150+s]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
n.settings.onSelect=p;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);
if(f.blockUI){f.blockUI(this.dpDiv)}f.data(this._dialogInput[0],g,n);return this},_destroyDatepicker:function(m){var n,k=f(m),l=f.data(m,g);
if(!k.hasClass(this.markerClassName)){return}n=m.nodeName.toLowerCase();f.removeData(m,g);if(n==="input"){l.append.remove();
l.trigger.remove();k.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(n==="div"||n==="span"){k.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(n){var o,m,k=f(n),l=f.data(n,g);
if(!k.hasClass(this.markerClassName)){return}o=n.nodeName.toLowerCase();if(o==="input"){n.disabled=false;
l.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(o==="div"||o==="span"){m=k.children("."+this._inlineClass);m.children().removeClass("ui-state-disabled");
m.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}}this._disabledInputs=f.map(this._disabledInputs,function(p){return(p===n?null:p)
})},_disableDatepicker:function(n){var o,m,k=f(n),l=f.data(n,g);if(!k.hasClass(this.markerClassName)){return
}o=n.nodeName.toLowerCase();if(o==="input"){n.disabled=true;l.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(o==="div"||o==="span"){m=k.children("."+this._inlineClass);
m.children().addClass("ui-state-disabled");m.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=f.map(this._disabledInputs,function(p){return(p===n?null:p)});this._disabledInputs[this._disabledInputs.length]=n
},_isDisabledDatepicker:function(l){if(!l){return false}for(var k=0;k<this._disabledInputs.length;k++){if(this._disabledInputs[k]===l){return true
}}return false},_getInst:function(l){try{return f.data(l,g)}catch(k){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(q,l,p){var m,k,o,r,n=this._getInst(q);if(arguments.length===2&&typeof l==="string"){return(l==="defaults"?f.extend({},f.datepicker._defaults):(n?(l==="all"?f.extend({},n.settings):this._get(n,l)):null))
}m=l||{};if(typeof l==="string"){m={};m[l]=p}if(n){if(this._curInst===n){this._hideDatepicker()}k=this._getDateDatepicker(q,true);
o=this._getMinMaxDate(n,"min");r=this._getMinMaxDate(n,"max");a(n.settings,m);if(o!==null&&m.dateFormat!==h&&m.minDate===h){n.settings.minDate=this._formatDate(n,o)
}if(r!==null&&m.dateFormat!==h&&m.maxDate===h){n.settings.maxDate=this._formatDate(n,r)}if("disabled" in m){if(m.disabled){this._disableDatepicker(q)
}else{this._enableDatepicker(q)}}this._attachments(f(q),n);this._autoSize(n);this._setDate(n,k);this._updateAlternate(n);
this._updateDatepicker(n)}},_changeDatepicker:function(m,k,l){this._optionDatepicker(m,k,l)},_refreshDatepicker:function(l){var k=this._getInst(l);
if(k){this._updateDatepicker(k)}},_setDateDatepicker:function(m,k){var l=this._getInst(m);if(l){this._setDate(l,k);
this._updateDatepicker(l);this._updateAlternate(l)}},_getDateDatepicker:function(m,k){var l=this._getInst(m);
if(l&&!l.inline){this._setDateFromField(l,k)}return(l?this._getDate(l):null)},_doKeyDown:function(n){var l,k,p,o=f.datepicker._getInst(n.target),q=true,m=o.dpDiv.is(".ui-datepicker-rtl");
o._keyEvent=true;if(f.datepicker._datepickerShowing){switch(n.keyCode){case 9:f.datepicker._hideDatepicker();
q=false;break;case 13:p=f("td."+f.datepicker._dayOverClass+":not(."+f.datepicker._currentClass+")",o.dpDiv);
if(p[0]){f.datepicker._selectDay(n.target,o.selectedMonth,o.selectedYear,p[0])}l=f.datepicker._get(o,"onSelect");
if(l){k=f.datepicker._formatDate(o);l.apply((o.input?o.input[0]:null),[k,o])}else{f.datepicker._hideDatepicker()
}return false;case 27:f.datepicker._hideDatepicker();break;case 33:f.datepicker._adjustDate(n.target,(n.ctrlKey?-f.datepicker._get(o,"stepBigMonths"):-f.datepicker._get(o,"stepMonths")),"M");
break;case 34:f.datepicker._adjustDate(n.target,(n.ctrlKey?+f.datepicker._get(o,"stepBigMonths"):+f.datepicker._get(o,"stepMonths")),"M");
break;case 35:if(n.ctrlKey||n.metaKey){f.datepicker._clearDate(n.target)}q=n.ctrlKey||n.metaKey;break;
case 36:if(n.ctrlKey||n.metaKey){f.datepicker._gotoToday(n.target)}q=n.ctrlKey||n.metaKey;break;case 37:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,(m?+1:-1),"D")
}q=n.ctrlKey||n.metaKey;if(n.originalEvent.altKey){f.datepicker._adjustDate(n.target,(n.ctrlKey?-f.datepicker._get(o,"stepBigMonths"):-f.datepicker._get(o,"stepMonths")),"M")
}break;case 38:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,-7,"D")}q=n.ctrlKey||n.metaKey;
break;case 39:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,(m?-1:+1),"D")}q=n.ctrlKey||n.metaKey;
if(n.originalEvent.altKey){f.datepicker._adjustDate(n.target,(n.ctrlKey?+f.datepicker._get(o,"stepBigMonths"):+f.datepicker._get(o,"stepMonths")),"M")
}break;case 40:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,+7,"D")}q=n.ctrlKey||n.metaKey;
break;default:q=false}}else{if(n.keyCode===36&&n.ctrlKey){f.datepicker._showDatepicker(this)}else{q=false
}}if(q){n.preventDefault();n.stopPropagation()}},_doKeyPress:function(m){var l,k,n=f.datepicker._getInst(m.target);
if(f.datepicker._get(n,"constrainInput")){l=f.datepicker._possibleChars(f.datepicker._get(n,"dateFormat"));
k=String.fromCharCode(m.charCode==null?m.keyCode:m.charCode);return m.ctrlKey||m.metaKey||(k<" "||!l||l.indexOf(k)>-1)
}},_doKeyUp:function(m){var k,n=f.datepicker._getInst(m.target);if(n.input.val()!==n.lastVal){try{k=f.datepicker.parseDate(f.datepicker._get(n,"dateFormat"),(n.input?n.input.val():null),f.datepicker._getFormatConfig(n));
if(k){f.datepicker._setDateFromField(n);f.datepicker._updateAlternate(n);f.datepicker._updateDatepicker(n)
}}catch(l){}}return true},_showDatepicker:function(l){l=l.target||l;if(l.nodeName.toLowerCase()!=="input"){l=f("input",l.parentNode)[0]
}if(f.datepicker._isDisabledDatepicker(l)||f.datepicker._lastInput===l){return}var n,r,m,p,q,k,o;n=f.datepicker._getInst(l);
if(f.datepicker._curInst&&f.datepicker._curInst!==n){f.datepicker._curInst.dpDiv.stop(true,true);if(n&&f.datepicker._datepickerShowing){f.datepicker._hideDatepicker(f.datepicker._curInst.input[0])
}}r=f.datepicker._get(n,"beforeShow");m=r?r.apply(l,[l,n]):{};if(m===false){return}a(n.settings,m);n.lastVal=null;
f.datepicker._lastInput=l;f.datepicker._setDateFromField(n);if(f.datepicker._inDialog){l.value=""}if(!f.datepicker._pos){f.datepicker._pos=f.datepicker._findPos(l);
f.datepicker._pos[1]+=l.offsetHeight}p=false;f(l).parents().each(function(){p|=f(this).css("position")==="fixed";
return !p});q={left:f.datepicker._pos[0],top:f.datepicker._pos[1]};f.datepicker._pos=null;n.dpDiv.empty();
n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});f.datepicker._updateDatepicker(n);q=f.datepicker._checkOffset(n,q,p);
n.dpDiv.css({position:(f.datepicker._inDialog&&f.blockUI?"static":(p?"fixed":"absolute")),display:"none",left:q.left+"px",top:q.top+"px"});
if(!n.inline){k=f.datepicker._get(n,"showAnim");o=f.datepicker._get(n,"duration");n.dpDiv.zIndex(f(l).zIndex()+1);
f.datepicker._datepickerShowing=true;if(f.effects&&f.effects.effect[k]){n.dpDiv.show(k,f.datepicker._get(n,"showOptions"),o)
}else{n.dpDiv[k||"show"](k?o:null)}if(f.datepicker._shouldFocusInput(n)){n.input.focus()}f.datepicker._curInst=n
}},_updateDatepicker:function(m){this.maxRows=4;d=m;m.dpDiv.empty().append(this._generateHTML(m));this._attachHandlers(m);
m.dpDiv.find("."+this._dayOverClass+" a").mouseover();var o,k=this._getNumberOfMonths(m),n=k[1],l=17;
m.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(n>1){m.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",(l*n)+"em")
}m.dpDiv[(k[0]!==1||k[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");m.dpDiv[(this._get(m,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(m===f.datepicker._curInst&&f.datepicker._datepickerShowing&&f.datepicker._shouldFocusInput(m)){m.input.focus()
}if(m.yearshtml){o=m.yearshtml;setTimeout(function(){if(o===m.yearshtml&&m.yearshtml){m.dpDiv.find("select.ui-datepicker-year:first").replaceWith(m.yearshtml)
}o=m.yearshtml=null},0)}},_shouldFocusInput:function(k){return k.input&&k.input.is(":visible")&&!k.input.is(":disabled")&&!k.input.is(":focus")
},_checkOffset:function(p,n,m){var o=p.dpDiv.outerWidth(),s=p.dpDiv.outerHeight(),r=p.input?p.input.outerWidth():0,k=p.input?p.input.outerHeight():0,q=document.documentElement.clientWidth+(m?0:f(document).scrollLeft()),l=document.documentElement.clientHeight+(m?0:f(document).scrollTop());
n.left-=(this._get(p,"isRTL")?(o-r):0);n.left-=(m&&n.left===p.input.offset().left)?f(document).scrollLeft():0;
n.top-=(m&&n.top===(p.input.offset().top+k))?f(document).scrollTop():0;n.left-=Math.min(n.left,(n.left+o>q&&q>o)?Math.abs(n.left+o-q):0);
n.top-=Math.min(n.top,(n.top+s>l&&l>s)?Math.abs(s+k):0);return n},_findPos:function(n){var k,m=this._getInst(n),l=this._get(m,"isRTL");
while(n&&(n.type==="hidden"||n.nodeType!==1||f.expr.filters.hidden(n))){n=n[l?"previousSibling":"nextSibling"]
}k=f(n).offset();return[k.left,k.top]},_hideDatepicker:function(m){var l,p,o,k,n=this._curInst;if(!n||(m&&n!==f.data(m,g))){return
}if(this._datepickerShowing){l=this._get(n,"showAnim");p=this._get(n,"duration");o=function(){f.datepicker._tidyDialog(n)
};if(f.effects&&(f.effects.effect[l]||f.effects[l])){n.dpDiv.hide(l,f.datepicker._get(n,"showOptions"),p,o)
}else{n.dpDiv[(l==="slideDown"?"slideUp":(l==="fadeIn"?"fadeOut":"hide"))]((l?p:null),o)}if(!l){o()}this._datepickerShowing=false;
k=this._get(n,"onClose");if(k){k.apply((n.input?n.input[0]:null),[(n.input?n.input.val():""),n])}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(f.blockUI){f.unblockUI();
f("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(k){k.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(l){if(!f.datepicker._curInst){return}var k=f(l.target),m=f.datepicker._getInst(k[0]);
if(((k[0].id!==f.datepicker._mainDivId&&k.parents("#"+f.datepicker._mainDivId).length===0&&!k.hasClass(f.datepicker.markerClassName)&&!k.closest("."+f.datepicker._triggerClass).length&&f.datepicker._datepickerShowing&&!(f.datepicker._inDialog&&f.blockUI)))||(k.hasClass(f.datepicker.markerClassName)&&f.datepicker._curInst!==m)){f.datepicker._hideDatepicker()
}},_adjustDate:function(o,n,m){var l=f(o),k=this._getInst(l[0]);if(this._isDisabledDatepicker(l[0])){return
}this._adjustInstDate(k,n+(m==="M"?this._get(k,"showCurrentAtPos"):0),m);this._updateDatepicker(k)},_gotoToday:function(n){var k,m=f(n),l=this._getInst(m[0]);
if(this._get(l,"gotoCurrent")&&l.currentDay){l.selectedDay=l.currentDay;l.drawMonth=l.selectedMonth=l.currentMonth;
l.drawYear=l.selectedYear=l.currentYear}else{k=new Date();l.selectedDay=k.getDate();l.drawMonth=l.selectedMonth=k.getMonth();
l.drawYear=l.selectedYear=k.getFullYear()}this._notifyChange(l);this._adjustDate(m)},_selectMonthYear:function(o,k,n){var m=f(o),l=this._getInst(m[0]);
l["selected"+(n==="M"?"Month":"Year")]=l["draw"+(n==="M"?"Month":"Year")]=parseInt(k.options[k.selectedIndex].value,10);
this._notifyChange(l);this._adjustDate(m)},_selectDay:function(p,n,k,o){var l,m=f(p);if(f(o).hasClass(this._unselectableClass)||this._isDisabledDatepicker(m[0])){return
}l=this._getInst(m[0]);l.selectedDay=l.currentDay=f("a",o).html();l.selectedMonth=l.currentMonth=n;l.selectedYear=l.currentYear=k;
this._selectDate(p,this._formatDate(l,l.currentDay,l.currentMonth,l.currentYear))},_clearDate:function(l){var k=f(l);
this._selectDate(k,"")},_selectDate:function(o,k){var l,n=f(o),m=this._getInst(n[0]);k=(k!=null?k:this._formatDate(m));
if(m.input){m.input.val(k)}this._updateAlternate(m);l=this._get(m,"onSelect");if(l){l.apply((m.input?m.input[0]:null),[k,m])
}else{if(m.input){m.input.trigger("change")}}if(m.inline){this._updateDatepicker(m)}else{this._hideDatepicker();
this._lastInput=m.input[0];if(typeof(m.input[0])!=="object"){m.input.focus()}this._lastInput=null}},_updateAlternate:function(o){var n,m,k,l=this._get(o,"altField");
if(l){n=this._get(o,"altFormat")||this._get(o,"dateFormat");m=this._getDate(o);k=this.formatDate(n,m,this._getFormatConfig(o));
f(l).each(function(){f(this).val(k)})}},noWeekends:function(l){var k=l.getDay();return[(k>0&&k<6),""]
},iso8601Week:function(k){var l,m=new Date(k.getTime());m.setDate(m.getDate()+4-(m.getDay()||7));l=m.getTime();
m.setMonth(0);m.setDate(1);return Math.floor(Math.round((l-m)/86400000)/7)+1},parseDate:function(A,v,C){if(A==null||v==null){throw"Invalid arguments"
}v=(typeof v==="object"?v.toString():v+"");if(v===""){return null}var n,x,l,B=0,q=(C?C.shortYearCutoff:null)||this._defaults.shortYearCutoff,m=(typeof q!=="string"?q:new Date().getFullYear()%100+parseInt(q,10)),t=(C?C.dayNamesShort:null)||this._defaults.dayNamesShort,E=(C?C.dayNames:null)||this._defaults.dayNames,k=(C?C.monthNamesShort:null)||this._defaults.monthNamesShort,o=(C?C.monthNames:null)||this._defaults.monthNames,p=-1,F=-1,z=-1,s=-1,y=false,D,u=function(H){var I=(n+1<A.length&&A.charAt(n+1)===H);
if(I){n++}return I},G=function(J){var H=u(J),K=(J==="@"?14:(J==="!"?20:(J==="y"&&H?4:(J==="o"?3:2)))),L=new RegExp("^\\d{1,"+K+"}"),I=v.substring(B).match(L);
if(!I){throw"Missing number at position "+B}B+=I[0].length;return parseInt(I[0],10)},r=function(I,J,L){var H=-1,K=f.map(u(I)?L:J,function(N,M){return[[M,N]]
}).sort(function(N,M){return -(N[1].length-M[1].length)});f.each(K,function(N,O){var M=O[1];if(v.substr(B,M.length).toLowerCase()===M.toLowerCase()){H=O[0];
B+=M.length;return false}});if(H!==-1){return H+1}else{throw"Unknown name at position "+B}},w=function(){if(v.charAt(B)!==A.charAt(n)){throw"Unexpected literal at position "+B
}B++};for(n=0;n<A.length;n++){if(y){if(A.charAt(n)==="'"&&!u("'")){y=false}else{w()}}else{switch(A.charAt(n)){case"d":z=G("d");
break;case"D":r("D",t,E);break;case"o":s=G("o");break;case"m":F=G("m");break;case"M":F=r("M",k,o);break;
case"y":p=G("y");break;case"@":D=new Date(G("@"));p=D.getFullYear();F=D.getMonth()+1;z=D.getDate();break;
case"!":D=new Date((G("!")-this._ticksTo1970)/10000);p=D.getFullYear();F=D.getMonth()+1;z=D.getDate();
break;case"'":if(u("'")){w()}else{y=true}break;default:w()}}}if(B<v.length){l=v.substr(B);if(!/^\s+/.test(l)){throw"Extra/unparsed characters found in date: "+l
}}if(p===-1){p=new Date().getFullYear()}else{if(p<100){p+=new Date().getFullYear()-new Date().getFullYear()%100+(p<=m?0:-100)
}}if(s>-1){F=1;z=s;do{x=this._getDaysInMonth(p,F-1);if(z<=x){break}F++;z-=x}while(true)}D=this._daylightSavingAdjust(new Date(p,F-1,z));
if(D.getFullYear()!==p||D.getMonth()+1!==F||D.getDate()!==z){throw"Invalid date"}return D},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(t,n,o){if(!n){return""
}var v,w=(o?o.dayNamesShort:null)||this._defaults.dayNamesShort,l=(o?o.dayNames:null)||this._defaults.dayNames,r=(o?o.monthNamesShort:null)||this._defaults.monthNamesShort,p=(o?o.monthNames:null)||this._defaults.monthNames,u=function(x){var y=(v+1<t.length&&t.charAt(v+1)===x);
if(y){v++}return y},k=function(z,A,x){var y=""+A;if(u(z)){while(y.length<x){y="0"+y}}return y},q=function(x,z,y,A){return(u(x)?A[z]:y[z])
},m="",s=false;if(n){for(v=0;v<t.length;v++){if(s){if(t.charAt(v)==="'"&&!u("'")){s=false}else{m+=t.charAt(v)
}}else{switch(t.charAt(v)){case"d":m+=k("d",n.getDate(),2);break;case"D":m+=q("D",n.getDay(),w,l);break;
case"o":m+=k("o",Math.round((new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime()-new Date(n.getFullYear(),0,0).getTime())/86400000),3);
break;case"m":m+=k("m",n.getMonth()+1,2);break;case"M":m+=q("M",n.getMonth(),r,p);break;case"y":m+=(u("y")?n.getFullYear():(n.getYear()%100<10?"0":"")+n.getYear()%100);
break;case"@":m+=n.getTime();break;case"!":m+=n.getTime()*10000+this._ticksTo1970;break;case"'":if(u("'")){m+="'"
}else{s=true}break;default:m+=t.charAt(v)}}}}return m},_possibleChars:function(o){var n,m="",l=false,k=function(p){var q=(n+1<o.length&&o.charAt(n+1)===p);
if(q){n++}return q};for(n=0;n<o.length;n++){if(l){if(o.charAt(n)==="'"&&!k("'")){l=false}else{m+=o.charAt(n)
}}else{switch(o.charAt(n)){case"d":case"m":case"y":case"@":m+="0123456789";break;case"D":case"M":return null;
case"'":if(k("'")){m+="'"}else{l=true}break;default:m+=o.charAt(n)}}}return m},_get:function(l,k){return l.settings[k]!==h?l.settings[k]:this._defaults[k]
},_setDateFromField:function(p,m){if(p.input.val()===p.lastVal){return}var k=this._get(p,"dateFormat"),r=p.lastVal=p.input?p.input.val():null,q=this._getDefaultDate(p),l=q,n=this._getFormatConfig(p);
try{l=this.parseDate(k,r,n)||q}catch(o){r=(m?"":r)}p.selectedDay=l.getDate();p.drawMonth=p.selectedMonth=l.getMonth();
p.drawYear=p.selectedYear=l.getFullYear();p.currentDay=(r?l.getDate():0);p.currentMonth=(r?l.getMonth():0);
p.currentYear=(r?l.getFullYear():0);this._adjustInstDate(p)},_getDefaultDate:function(k){return this._restrictMinMax(k,this._determineDate(k,this._get(k,"defaultDate"),new Date()))
},_determineDate:function(o,l,p){var n=function(r){var q=new Date();q.setDate(q.getDate()+r);return q
},m=function(x){try{return f.datepicker.parseDate(f.datepicker._get(o,"dateFormat"),x,f.datepicker._getFormatConfig(o))
}catch(w){}var r=(x.toLowerCase().match(/^c/)?f.datepicker._getDate(o):null)||new Date(),s=r.getFullYear(),v=r.getMonth(),q=r.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,t=u.exec(x);
while(t){switch(t[2]||"d"){case"d":case"D":q+=parseInt(t[1],10);break;case"w":case"W":q+=parseInt(t[1],10)*7;
break;case"m":case"M":v+=parseInt(t[1],10);q=Math.min(q,f.datepicker._getDaysInMonth(s,v));break;case"y":case"Y":s+=parseInt(t[1],10);
q=Math.min(q,f.datepicker._getDaysInMonth(s,v));break}t=u.exec(x)}return new Date(s,v,q)},k=(l==null||l===""?p:(typeof l==="string"?m(l):(typeof l==="number"?(isNaN(l)?p:n(l)):new Date(l.getTime()))));
k=(k&&k.toString()==="Invalid Date"?p:k);if(k){k.setHours(0);k.setMinutes(0);k.setSeconds(0);k.setMilliseconds(0)
}return this._daylightSavingAdjust(k)},_daylightSavingAdjust:function(k){if(!k){return null}k.setHours(k.getHours()>12?k.getHours()+2:0);
return k},_setDate:function(q,n,p){var k=!n,m=q.selectedMonth,o=q.selectedYear,l=this._restrictMinMax(q,this._determineDate(q,n,new Date()));
q.selectedDay=q.currentDay=l.getDate();q.drawMonth=q.selectedMonth=q.currentMonth=l.getMonth();q.drawYear=q.selectedYear=q.currentYear=l.getFullYear();
if((m!==q.selectedMonth||o!==q.selectedYear)&&!p){this._notifyChange(q)}this._adjustInstDate(q);if(q.input){q.input.val(k?"":this._formatDate(q))
}},_getDate:function(l){var k=(!l.currentYear||(l.input&&l.input.val()==="")?null:this._daylightSavingAdjust(new Date(l.currentYear,l.currentMonth,l.currentDay)));
return k},_attachHandlers:function(l){var k=this._get(l,"stepMonths"),m="#"+l.id.replace(/\\\\/g,"\\");
l.dpDiv.find("[data-handler]").map(function(){var n={prev:function(){f.datepicker._adjustDate(m,-k,"M")
},next:function(){f.datepicker._adjustDate(m,+k,"M")},hide:function(){f.datepicker._hideDatepicker()},today:function(){f.datepicker._gotoToday(m)
},selectDay:function(){f.datepicker._selectDay(m,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false},selectMonth:function(){f.datepicker._selectMonthYear(m,this,"M");return false},selectYear:function(){f.datepicker._selectMonthYear(m,this,"Y");
return false}};f(this).bind(this.getAttribute("data-event"),n[this.getAttribute("data-handler")])})},_generateHTML:function(aa){var D,C,V,N,o,ae,Y,R,ah,L,al,v,x,w,l,ad,t,G,ag,T,am,F,K,u,p,W,P,S,Q,s,I,y,Z,ac,n,af,aj,O,z,ab=new Date(),E=this._daylightSavingAdjust(new Date(ab.getFullYear(),ab.getMonth(),ab.getDate())),ai=this._get(aa,"isRTL"),ak=this._get(aa,"showButtonPanel"),U=this._get(aa,"hideIfNoPrevNext"),J=this._get(aa,"navigationAsDateFormat"),A=this._getNumberOfMonths(aa),r=this._get(aa,"showCurrentAtPos"),M=this._get(aa,"stepMonths"),H=(A[0]!==1||A[1]!==1),m=this._daylightSavingAdjust((!aa.currentDay?new Date(9999,9,9):new Date(aa.currentYear,aa.currentMonth,aa.currentDay))),q=this._getMinMaxDate(aa,"min"),B=this._getMinMaxDate(aa,"max"),k=aa.drawMonth-r,X=aa.drawYear;
if(k<0){k+=12;X--}if(B){D=this._daylightSavingAdjust(new Date(B.getFullYear(),B.getMonth()-(A[0]*A[1])+1,B.getDate()));
D=(q&&D<q?q:D);while(this._daylightSavingAdjust(new Date(X,k,1))>D){k--;if(k<0){k=11;X--}}}aa.drawMonth=k;
aa.drawYear=X;C=this._get(aa,"prevText");C=(!J?C:this.formatDate(C,this._daylightSavingAdjust(new Date(X,k-M,1)),this._getFormatConfig(aa)));
V=(this._canAdjustMonth(aa,-1,X,k)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+C+"'><span class='ui-icon ui-icon-circle-triangle-"+(ai?"e":"w")+"'>"+C+"</span></a>":(U?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+C+"'><span class='ui-icon ui-icon-circle-triangle-"+(ai?"e":"w")+"'>"+C+"</span></a>"));
N=this._get(aa,"nextText");N=(!J?N:this.formatDate(N,this._daylightSavingAdjust(new Date(X,k+M,1)),this._getFormatConfig(aa)));
o=(this._canAdjustMonth(aa,+1,X,k)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+N+"'><span class='ui-icon ui-icon-circle-triangle-"+(ai?"w":"e")+"'>"+N+"</span></a>":(U?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+N+"'><span class='ui-icon ui-icon-circle-triangle-"+(ai?"w":"e")+"'>"+N+"</span></a>"));
ae=this._get(aa,"currentText");Y=(this._get(aa,"gotoCurrent")&&aa.currentDay?m:E);ae=(!J?ae:this.formatDate(ae,Y,this._getFormatConfig(aa)));
R=(!aa.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aa,"closeText")+"</button>":"");
ah=(ak)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ai?R:"")+(this._isInRange(aa,Y)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+ae+"</button>":"")+(ai?"":R)+"</div>":"";
L=parseInt(this._get(aa,"firstDay"),10);L=(isNaN(L)?0:L);al=this._get(aa,"showWeek");v=this._get(aa,"dayNames");
x=this._get(aa,"dayNamesMin");w=this._get(aa,"monthNames");l=this._get(aa,"monthNamesShort");ad=this._get(aa,"beforeShowDay");
t=this._get(aa,"showOtherMonths");G=this._get(aa,"selectOtherMonths");ag=this._getDefaultDate(aa);T="";
am;for(F=0;F<A[0];F++){K="";this.maxRows=4;for(u=0;u<A[1];u++){p=this._daylightSavingAdjust(new Date(X,k,aa.selectedDay));
W=" ui-corner-all";P="";if(H){P+="<div class='ui-datepicker-group";if(A[1]>1){switch(u){case 0:P+=" ui-datepicker-group-first";
W=" ui-corner-"+(ai?"right":"left");break;case A[1]-1:P+=" ui-datepicker-group-last";W=" ui-corner-"+(ai?"left":"right");
break;default:P+=" ui-datepicker-group-middle";W="";break}}P+="'>"}P+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+W+"'>"+(/all|left/.test(W)&&F===0?(ai?o:V):"")+(/all|right/.test(W)&&F===0?(ai?V:o):"")+this._generateMonthYearHeader(aa,k,X,q,B,F>0||u>0,w,l)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
S=(al?"<th class='ui-datepicker-week-col'>"+this._get(aa,"weekHeader")+"</th>":"");for(am=0;am<7;am++){Q=(am+L)%7;
S+="<th"+((am+L+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+v[Q]+"'>"+x[Q]+"</span></th>"
}P+=S+"</tr></thead><tbody>";s=this._getDaysInMonth(X,k);if(X===aa.selectedYear&&k===aa.selectedMonth){aa.selectedDay=Math.min(aa.selectedDay,s)
}I=(this._getFirstDayOfMonth(X,k)-L+7)%7;y=Math.ceil((I+s)/7);Z=(H?this.maxRows>y?this.maxRows:y:y);this.maxRows=Z;
ac=this._daylightSavingAdjust(new Date(X,k,1-I));for(n=0;n<Z;n++){P+="<tr>";af=(!al?"":"<td class='ui-datepicker-week-col'>"+this._get(aa,"calculateWeek")(ac)+"</td>");
for(am=0;am<7;am++){aj=(ad?ad.apply((aa.input?aa.input[0]:null),[ac]):[true,""]);O=(ac.getMonth()!==k);
z=(O&&!G)||!aj[0]||(q&&ac<q)||(B&&ac>B);af+="<td class='"+((am+L+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+((ac.getTime()===p.getTime()&&k===aa.selectedMonth&&aa._keyEvent)||(ag.getTime()===ac.getTime()&&ag.getTime()===p.getTime())?" "+this._dayOverClass:"")+(z?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!t?"":" "+aj[1]+(ac.getTime()===m.getTime()?" "+this._currentClass:"")+(ac.getTime()===E.getTime()?" ui-datepicker-today":""))+"'"+((!O||t)&&aj[2]?" title='"+aj[2].replace(/'/g,"&#39;")+"'":"")+(z?"":" data-handler='selectDay' data-event='click' data-month='"+ac.getMonth()+"' data-year='"+ac.getFullYear()+"'")+">"+(O&&!t?"&#xa0;":(z?"<span class='ui-state-default'>"+ac.getDate()+"</span>":"<a class='ui-state-default"+(ac.getTime()===E.getTime()?" ui-state-highlight":"")+(ac.getTime()===m.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+ac.getDate()+"</a>"))+"</td>";
ac.setDate(ac.getDate()+1);ac=this._daylightSavingAdjust(ac)}P+=af+"</tr>"}k++;if(k>11){k=0;X++}P+="</tbody></table>"+(H?"</div>"+((A[0]>0&&u===A[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
K+=P}T+=K}T+=ah;aa._keyEvent=false;return T},_generateMonthYearHeader:function(o,m,w,q,u,x,s,k){var B,l,C,z,p,y,v,r,n=this._get(o,"changeMonth"),D=this._get(o,"changeYear"),E=this._get(o,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",A="";
if(x||!n){A+="<span class='ui-datepicker-month'>"+s[m]+"</span>"}else{B=(q&&q.getFullYear()===w);l=(u&&u.getFullYear()===w);
A+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(C=0;C<12;
C++){if((!B||C>=q.getMonth())&&(!l||C<=u.getMonth())){A+="<option value='"+C+"'"+(C===m?" selected='selected'":"")+">"+k[C]+"</option>"
}}A+="</select>"}if(!E){t+=A+(x||!(n&&D)?"&#xa0;":"")}if(!o.yearshtml){o.yearshtml="";if(x||!D){t+="<span class='ui-datepicker-year'>"+w+"</span>"
}else{z=this._get(o,"yearRange").split(":");p=new Date().getFullYear();y=function(G){var F=(G.match(/c[+\-].*/)?w+parseInt(G.substring(1),10):(G.match(/[+\-].*/)?p+parseInt(G,10):parseInt(G,10)));
return(isNaN(F)?p:F)};v=y(z[0]);r=Math.max(v,y(z[1]||""));v=(q?Math.max(v,q.getFullYear()):v);r=(u?Math.min(r,u.getFullYear()):r);
o.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;
v<=r;v++){o.yearshtml+="<option value='"+v+"'"+(v===w?" selected='selected'":"")+">"+v+"</option>"}o.yearshtml+="</select>";
t+=o.yearshtml;o.yearshtml=null}}t+=this._get(o,"yearSuffix");if(E){t+=(x||!(n&&D)?"&#xa0;":"")+A}t+="</div>";
return t},_adjustInstDate:function(n,q,p){var m=n.drawYear+(p==="Y"?q:0),o=n.drawMonth+(p==="M"?q:0),k=Math.min(n.selectedDay,this._getDaysInMonth(m,o))+(p==="D"?q:0),l=this._restrictMinMax(n,this._daylightSavingAdjust(new Date(m,o,k)));
n.selectedDay=l.getDate();n.drawMonth=n.selectedMonth=l.getMonth();n.drawYear=n.selectedYear=l.getFullYear();
if(p==="M"||p==="Y"){this._notifyChange(n)}},_restrictMinMax:function(n,l){var m=this._getMinMaxDate(n,"min"),o=this._getMinMaxDate(n,"max"),k=(m&&l<m?m:l);
return(o&&k>o?o:k)},_notifyChange:function(l){var k=this._get(l,"onChangeMonthYear");if(k){k.apply((l.input?l.input[0]:null),[l.selectedYear,l.selectedMonth+1,l])
}},_getNumberOfMonths:function(l){var k=this._get(l,"numberOfMonths");return(k==null?[1,1]:(typeof k==="number"?[1,k]:k))
},_getMinMaxDate:function(l,k){return this._determineDate(l,this._get(l,k+"Date"),null)},_getDaysInMonth:function(k,l){return 32-this._daylightSavingAdjust(new Date(k,l,32)).getDate()
},_getFirstDayOfMonth:function(k,l){return new Date(k,l,1).getDay()},_canAdjustMonth:function(n,p,m,o){var k=this._getNumberOfMonths(n),l=this._daylightSavingAdjust(new Date(m,o+(p<0?p:k[0]*k[1]),1));
if(p<0){l.setDate(this._getDaysInMonth(l.getFullYear(),l.getMonth()))}return this._isInRange(n,l)},_isInRange:function(o,m){var l,r,n=this._getMinMaxDate(o,"min"),k=this._getMinMaxDate(o,"max"),s=null,p=null,q=this._get(o,"yearRange");
if(q){l=q.split(":");r=new Date().getFullYear();s=parseInt(l[0],10);p=parseInt(l[1],10);if(l[0].match(/[+\-].*/)){s+=r
}if(l[1].match(/[+\-].*/)){p+=r}}return((!n||m.getTime()>=n.getTime())&&(!k||m.getTime()<=k.getTime())&&(!s||m.getFullYear()>=s)&&(!p||m.getFullYear()<=p))
},_getFormatConfig:function(k){var l=this._get(k,"shortYearCutoff");l=(typeof l!=="string"?l:new Date().getFullYear()%100+parseInt(l,10));
return{shortYearCutoff:l,dayNamesShort:this._get(k,"dayNamesShort"),dayNames:this._get(k,"dayNames"),monthNamesShort:this._get(k,"monthNamesShort"),monthNames:this._get(k,"monthNames")}
},_formatDate:function(n,k,o,m){if(!k){n.currentDay=n.selectedDay;n.currentMonth=n.selectedMonth;n.currentYear=n.selectedYear
}var l=(k?(typeof k==="object"?k:this._daylightSavingAdjust(new Date(m,o,k))):this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay)));
return this.formatDate(this._get(n,"dateFormat"),l,this._getFormatConfig(n))}});function e(l){var k="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return l.delegate(k,"mouseout",function(){f(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){f(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){f(this).removeClass("ui-datepicker-next-hover")
}}).delegate(k,"mouseover",function(){if(!f.datepicker._isDisabledDatepicker(d.inline?l.parent()[0]:d.input[0])){f(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
f(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){f(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){f(this).addClass("ui-datepicker-next-hover")}}})
}function a(m,l){f.extend(m,l);for(var k in l){if(l[k]==null){m[k]=l[k]}}return m}f.fn.datepicker=function(l){if(!this.length){return this
}if(!f.datepicker.initialized){f(document).mousedown(f.datepicker._checkExternalClick);f.datepicker.initialized=true
}if(f("#"+f.datepicker._mainDivId).length===0){f("body").append(f.datepicker.dpDiv)}var k=Array.prototype.slice.call(arguments,1);
if(typeof l==="string"&&(l==="isDisabled"||l==="getDate"||l==="widget")){return f.datepicker["_"+l+"Datepicker"].apply(f.datepicker,[this[0]].concat(k))
}if(l==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return f.datepicker["_"+l+"Datepicker"].apply(f.datepicker,[this[0]].concat(k))
}return this.each(function(){typeof l==="string"?f.datepicker["_"+l+"Datepicker"].apply(f.datepicker,[this].concat(k)):f.datepicker._attachDatepicker(this,l)
})};f.datepicker=new b();f.datepicker.initialized=false;f.datepicker.uuid=new Date().getTime();f.datepicker.version="1.10.3"
})(jQuery);(function(b){function a(d){return function(){var e=this.element.val();d.apply(this,arguments);
this._refresh();if(e!==this.element.val()){this._trigger("change")}}}b.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);this._setOption("step",this.options.step);this._value(this.element.val(),true);
this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})},_getCreateOptions:function(){var d={},e=this.element;b.each(["min","max","step"],function(f,g){var h=e.attr(g);
if(h!==undefined&&h.length){d[g]=h}});return d},_events:{keydown:function(d){if(this._start(d)&&this._keydown(d)){d.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(d){if(this.cancelBlur){delete this.cancelBlur;
return}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",d)}},mousewheel:function(d,e){if(!e){return
}if(!this.spinning&&!this._start(d)){return false}this._spin((e>0?1:-1)*this.options.step,d);clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(d)}},100);d.preventDefault()
},"mousedown .ui-spinner-button":function(e){var d;d=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function f(){var g=this.element[0]===this.document[0].activeElement;if(!g){this.element.focus();this.previous=d;
this._delay(function(){this.previous=d})}}e.preventDefault();f.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;
f.call(this)});if(this._start(e)===false){return}this._repeat(null,b(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(d){if(!b(d.currentTarget).hasClass("ui-state-active")){return
}if(this._start(d)===false){return false}this._repeat(null,b(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var d=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");this.buttons=d.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(d.height()*0.5)&&d.height()>0){d.height(d.height())}if(this.options.disabled){this.disable()
}},_keydown:function(e){var d=this.options,f=b.ui.keyCode;switch(e.keyCode){case f.UP:this._repeat(null,1,e);
return true;case f.DOWN:this._repeat(null,-1,e);return true;case f.PAGE_UP:this._repeat(null,d.page,e);
return true;case f.PAGE_DOWN:this._repeat(null,-d.page,e);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(d){if(!this.spinning&&this._trigger("start",d)===false){return false}if(!this.counter){this.counter=1
}this.spinning=true;return true},_repeat:function(e,d,f){e=e||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,d,f)
},e);this._spin(d*this.options.step,f)},_spin:function(e,d){var f=this.value()||0;if(!this.counter){this.counter=1
}f=this._adjustValue(f+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",d,{value:f})!==false){this._value(f);
this.counter++}},_increment:function(d){var e=this.options.incremental;if(e){return b.isFunction(e)?e(d):Math.floor(d*d*d/50000-d*d/500+17*d/200+1)
}return 1},_precision:function(){var d=this._precisionOf(this.options.step);if(this.options.min!==null){d=Math.max(d,this._precisionOf(this.options.min))
}return d},_precisionOf:function(e){var f=e.toString(),d=f.indexOf(".");return d===-1?0:f.length-d-1},_adjustValue:function(f){var e,g,d=this.options;
e=d.min!==null?d.min:0;g=f-e;g=Math.round(g/d.step)*d.step;f=e+g;f=parseFloat(f.toFixed(this._precision()));
if(d.max!==null&&f>d.max){return d.max}if(d.min!==null&&f<d.min){return d.min}return f},_stop:function(d){if(!this.spinning){return
}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",d)
},_setOption:function(d,e){if(d==="culture"||d==="numberFormat"){var f=this._parse(this.element.val());
this.options[d]=e;this.element.val(this._format(f));return}if(d==="max"||d==="min"||d==="step"){if(typeof e==="string"){e=this._parse(e)
}}if(d==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)}this._super(d,e);
if(d==="disabled"){if(e){this.element.prop("disabled",true);this.buttons.button("disable")}else{this.element.prop("disabled",false);
this.buttons.button("enable")}}},_setOptions:a(function(d){this._super(d);this._value(this.element.val())
}),_parse:function(d){if(typeof d==="string"&&d!==""){d=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(d,10,this.options.culture):+d
}return d===""||isNaN(d)?null:d},_format:function(d){if(d===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(d,this.options.numberFormat,this.options.culture):d
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(f,d){var e;if(f!==""){e=this._parse(f);if(e!==null){if(!d){e=this._adjustValue(e)}f=this._format(e)
}}this.element.val(f);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)},stepUp:a(function(d){this._stepUp(d)}),_stepUp:function(d){if(this._start()){this._spin((d||1)*this.options.step);
this._stop()}},stepDown:a(function(d){this._stepDown(d)}),_stepDown:function(d){if(this._start()){this._spin((d||1)*-this.options.step);
this._stop()}},pageUp:a(function(d){this._stepUp((d||1)*this.options.page)}),pageDown:a(function(d){this._stepDown((d||1)*this.options.page)
}),value:function(d){if(!arguments.length){return this._parse(this.element.val())}a(this._value).call(this,d)
},widget:function(){return this.uiSpinner}})}(jQuery));(function(b,d){var a=5;b.widget("ui.slider",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=false},_refresh:function(){this._createRange();
this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var h,e,f=this.options,l=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),k="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=[];
e=(f.values&&f.values.length)||1;if(l.length>e){l.slice(e).remove();l=l.slice(0,e)}for(h=l.length;h<e;
h++){g.push(k)}this.handles=l.add(b(g.join("")).appendTo(this.element));this.handle=this.handles.eq(0);
this.handles.each(function(m){b(this).data("ui-slider-handle-index",m)})},_createRange:function(){var e=this.options,f="";
if(e.range){if(e.range===true){if(!e.values){e.values=[this._valueMin(),this._valueMin()]}else{if(e.values.length&&e.values.length!==2){e.values=[e.values[0],e.values[0]]
}else{if(b.isArray(e.values)){e.values=e.values.slice(0)}}}}if(!this.range||!this.range.length){this.range=b("<div></div>").appendTo(this.element);
f="ui-slider-range ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(f+((e.range==="min"||e.range==="max")?" ui-slider-range-"+e.range:""))}else{this.range=b([])
}},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e);this._on(e,this._handleEvents);
this._hoverable(e);this._focusable(e)},_destroy:function(){this.handles.remove();this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()},_mouseCapture:function(g){var m,q,f,k,p,r,l,e,n=this,h=this.options;if(h.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();
m={x:g.pageX,y:g.pageY};q=this._normValueFromMouse(m);f=this._valueMax()-this._valueMin()+1;this.handles.each(function(o){var s=Math.abs(q-n.values(o));
if((f>s)||(f===s&&(o===n._lastChangedValue||n.values(o)===h.min))){f=s;k=b(this);p=o}});r=this._start(g,p);
if(r===false){return false}this._mouseSliding=true;this._handleIndex=p;k.addClass("ui-state-active").focus();
l=k.offset();e=!b(g.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=e?{left:0,top:0}:{left:g.pageX-l.left-(k.width()/2),top:g.pageY-l.top-(k.height()/2)-(parseInt(k.css("borderTopWidth"),10)||0)-(parseInt(k.css("borderBottomWidth"),10)||0)+(parseInt(k.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(g,p,q)}this._animateOff=true;return true},_mouseStart:function(){return true
},_mouseDrag:function(g){var e={x:g.pageX,y:g.pageY},f=this._normValueFromMouse(e);this._slide(g,this._handleIndex,f);
return false},_mouseStop:function(e){this.handles.removeClass("ui-state-active");this._mouseSliding=false;
this._stop(e,this._handleIndex);this._change(e,this._handleIndex);this._handleIndex=null;this._clickOffset=null;
this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(f){var e,k,h,g,l;if(this.orientation==="horizontal"){e=this.elementSize.width;
k=f.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{e=this.elementSize.height;
k=f.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}h=(k/e);if(h>1){h=1}if(h<0){h=0
}if(this.orientation==="vertical"){h=1-h}g=this._valueMax()-this._valueMin();l=this._valueMin()+h*g;return this._trimAlignValue(l)
},_start:function(g,f){var e={handle:this.handles[f],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(f);
e.values=this.values()}return this._trigger("start",g,e)},_slide:function(k,h,g){var e,f,l;if(this.options.values&&this.options.values.length){e=this.values(h?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((h===0&&g>e)||(h===1&&g<e))){g=e}if(g!==this.values(h)){f=this.values();
f[h]=g;l=this._trigger("slide",k,{handle:this.handles[h],value:g,values:f});e=this.values(h?0:1);if(l!==false){this.values(h,g,true)
}}}else{if(g!==this.value()){l=this._trigger("slide",k,{handle:this.handles[h],value:g});if(l!==false){this.value(g)
}}}},_stop:function(g,f){var e={handle:this.handles[f],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(f);
e.values=this.values()}this._trigger("stop",g,e)},_change:function(g,f){if(!this._keySliding&&!this._mouseSliding){var e={handle:this.handles[f],value:this.value()};
if(this.options.values&&this.options.values.length){e.value=this.values(f);e.values=this.values()}this._lastChangedValue=f;
this._trigger("change",g,e)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e);
this._refreshValue();this._change(null,0);return}return this._value()},values:function(f,k){var h,e,g;
if(arguments.length>1){this.options.values[f]=this._trimAlignValue(k);this._refreshValue();this._change(null,f);
return}if(arguments.length){if(b.isArray(arguments[0])){h=this.options.values;e=arguments[0];for(g=0;
g<h.length;g+=1){h[g]=this._trimAlignValue(e[g]);this._change(null,g)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(f)
}else{return this.value()}}}else{return this._values()}},_setOption:function(f,g){var e,h=0;if(f==="range"&&this.options.range===true){if(g==="min"){this.options.value=this._values(0);
this.options.values=null}else{if(g==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null}}}if(b.isArray(this.options.values)){h=this.options.values.length}b.Widget.prototype._setOption.apply(this,arguments);
switch(f){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);
this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(e=0;e<h;e+=1){this._change(null,e)
}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;
break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break}},_value:function(){var e=this.options.value;
e=this._trimAlignValue(e);return e},_values:function(e){var h,g,f;if(arguments.length){h=this.options.values[e];
h=this._trimAlignValue(h);return h}else{if(this.options.values&&this.options.values.length){g=this.options.values.slice();
for(f=0;f<g.length;f+=1){g[f]=this._trimAlignValue(g[f])}return g}else{return[]}}},_trimAlignValue:function(h){if(h<=this._valueMin()){return this._valueMin()
}if(h>=this._valueMax()){return this._valueMax()}var e=(this.options.step>0)?this.options.step:1,g=(h-this._valueMin())%e,f=h-g;
if(Math.abs(g)*2>=e){f+=(g>0)?e:(-e)}return parseFloat(f.toFixed(5))},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max},_refreshValue:function(){var l,k,p,m,q,h=this.options.range,g=this.options,n=this,f=(!this._animateOff)?g.animate:false,e={};
if(this.options.values&&this.options.values.length){this.handles.each(function(o){k=(n.values(o)-n._valueMin())/(n._valueMax()-n._valueMin())*100;
e[n.orientation==="horizontal"?"left":"bottom"]=k+"%";b(this).stop(1,1)[f?"animate":"css"](e,g.animate);
if(n.options.range===true){if(n.orientation==="horizontal"){if(o===0){n.range.stop(1,1)[f?"animate":"css"]({left:k+"%"},g.animate)
}if(o===1){n.range[f?"animate":"css"]({width:(k-l)+"%"},{queue:false,duration:g.animate})}}else{if(o===0){n.range.stop(1,1)[f?"animate":"css"]({bottom:(k)+"%"},g.animate)
}if(o===1){n.range[f?"animate":"css"]({height:(k-l)+"%"},{queue:false,duration:g.animate})}}}l=k})}else{p=this.value();
m=this._valueMin();q=this._valueMax();k=(q!==m)?(p-m)/(q-m)*100:0;e[this.orientation==="horizontal"?"left":"bottom"]=k+"%";
this.handle.stop(1,1)[f?"animate":"css"](e,g.animate);if(h==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[f?"animate":"css"]({width:k+"%"},g.animate)
}if(h==="max"&&this.orientation==="horizontal"){this.range[f?"animate":"css"]({width:(100-k)+"%"},{queue:false,duration:g.animate})
}if(h==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[f?"animate":"css"]({height:k+"%"},g.animate)
}if(h==="max"&&this.orientation==="vertical"){this.range[f?"animate":"css"]({height:(100-k)+"%"},{queue:false,duration:g.animate})
}}},_handleEvents:{keydown:function(k){var l,g,f,h,e=b(k.target).data("ui-slider-handle-index");switch(k.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:k.preventDefault();
if(!this._keySliding){this._keySliding=true;b(k.target).addClass("ui-state-active");l=this._start(k,e);
if(l===false){return}}break}h=this.options.step;if(this.options.values&&this.options.values.length){g=f=this.values(e)
}else{g=f=this.value()}switch(k.keyCode){case b.ui.keyCode.HOME:f=this._valueMin();break;case b.ui.keyCode.END:f=this._valueMax();
break;case b.ui.keyCode.PAGE_UP:f=this._trimAlignValue(g+((this._valueMax()-this._valueMin())/a));break;
case b.ui.keyCode.PAGE_DOWN:f=this._trimAlignValue(g-((this._valueMax()-this._valueMin())/a));break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(g===this._valueMax()){return
}f=this._trimAlignValue(g+h);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(g===this._valueMin()){return
}f=this._trimAlignValue(g-h);break}this._slide(k,e,f)},click:function(e){e.preventDefault()},keyup:function(f){var e=b(f.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;this._stop(f,e);this._change(f,e);b(f.target).removeClass("ui-state-active")
}}}})}(jQuery));(function(a,b){var d=0;a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var g,e,h,l=this.element[0].nodeName.toLowerCase(),k=l==="textarea",f=l==="input";
this.isMultiLine=k?true:f?false:this.element.prop("isContentEditable");this.valueMethod=this.element[k||f?"val":"text"];
this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(m){if(this.element.prop("readOnly")){g=true;
h=true;e=true;return}g=false;h=false;e=false;var n=a.ui.keyCode;switch(m.keyCode){case n.PAGE_UP:g=true;
this._move("previousPage",m);break;case n.PAGE_DOWN:g=true;this._move("nextPage",m);break;case n.UP:g=true;
this._keyEvent("previous",m);break;case n.DOWN:g=true;this._keyEvent("next",m);break;case n.ENTER:case n.NUMPAD_ENTER:if(this.menu.active){g=true;
m.preventDefault();this.menu.select(m)}break;case n.TAB:if(this.menu.active){this.menu.select(m)}break;
case n.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(m);m.preventDefault()
}break;default:e=true;this._searchTimeout(m);break}},keypress:function(m){if(g){g=false;if(!this.isMultiLine||this.menu.element.is(":visible")){m.preventDefault()
}return}if(e){return}var n=a.ui.keyCode;switch(m.keyCode){case n.PAGE_UP:this._move("previousPage",m);
break;case n.PAGE_DOWN:this._move("nextPage",m);break;case n.UP:this._keyEvent("previous",m);break;case n.DOWN:this._keyEvent("next",m);
break}},input:function(m){if(h){h=false;m.preventDefault();return}this._searchTimeout(m)},focus:function(){this.selectedItem=null;
this.previous=this._value()},blur:function(m){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);
this.close(m);this._change(m)}});this._initSource();this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(m){m.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur
});var n=this.menu.element[0];if(!a(m.target).closest(".ui-menu-item").length){this._delay(function(){var o=this;
this.document.one("mousedown",function(p){if(p.target!==o.element[0]&&p.target!==n&&!a.contains(n,p.target)){o.close()
}})})}},menufocus:function(n,o){if(this.isNewMenu){this.isNewMenu=false;if(n.originalEvent&&/^mouse/.test(n.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){a(n.target).trigger(n.originalEvent)});return}}var m=o.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",n,{item:m})){if(n.originalEvent&&/^key/.test(n.originalEvent.type)){this._value(m.value)
}}else{this.liveRegion.text(m.value)}},menuselect:function(o,p){var n=p.item.data("ui-autocomplete-item"),m=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=m;this._delay(function(){this.previous=m;
this.selectedItem=n})}if(false!==this._trigger("select",o,{item:n})){this._value(n.value)}this.term=this._value();
this.close(o);this.selectedItem=n}});this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();
this.liveRegion.remove()},_setOption:function(e,f){this._super(e,f);if(e==="source"){this._initSource()
}if(e==="appendTo"){this.menu.element.appendTo(this._appendTo())}if(e==="disabled"&&f&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var e=this.options.appendTo;if(e){e=e.jquery||e.nodeType?a(e):this.document.find(e).eq(0)
}if(!e){e=this.element.closest(".ui-front")}if(!e.length){e=this.document[0].body}return e},_initSource:function(){var g,e,f=this;
if(a.isArray(this.options.source)){g=this.options.source;this.source=function(k,h){h(a.ui.autocomplete.filter(g,k.term))
}}else{if(typeof this.options.source==="string"){e=this.options.source;this.source=function(k,h){if(f.xhr){f.xhr.abort()
}f.xhr=a.ajax({url:e,data:k,dataType:"json",success:function(l){h(l)},error:function(){h([])}})}}else{this.source=this.options.source
}}},_searchTimeout:function(e){clearTimeout(this.searching);this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,e)}},this.options.delay)},search:function(f,e){f=f!=null?f:this._value();this.term=this._value();
if(f.length<this.options.minLength){return this.close(e)}if(this._trigger("search",e)===false){return
}return this._search(f)},_search:function(e){this.pending++;this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;this.source({term:e},this._response())},_response:function(){var f=this,e=++d;
return function(g){if(e===d){f.__response(g)}f.pending--;if(!f.pending){f.element.removeClass("ui-autocomplete-loading")
}}},__response:function(e){if(e){e=this._normalize(e)}this._trigger("response",null,{content:e});if(!this.options.disabled&&e&&e.length&&!this.cancelSearch){this._suggest(e);
this._trigger("open")}else{this._close()}},close:function(e){this.cancelSearch=true;this._close(e)},_close:function(e){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();this.isNewMenu=true;this._trigger("close",e)}},_change:function(e){if(this.previous!==this._value()){this._trigger("change",e,{item:this.selectedItem})
}},_normalize:function(e){if(e.length&&e[0].label&&e[0].value){return e}return a.map(e,function(f){if(typeof f==="string"){return{label:f,value:f}
}return a.extend({label:f.label||f.value,value:f.value||f.label},f)})},_suggest:function(e){var f=this.menu.element.empty();
this._renderMenu(f,e);this.isNewMenu=true;this.menu.refresh();f.show();this._resizeMenu();f.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(f,e){var g=this;a.each(e,function(h,k){g._renderItemData(f,k)})},_renderItemData:function(e,f){return this._renderItem(e,f).data("ui-autocomplete-item",f)
},_renderItem:function(e,f){return a("<li>").append(a("<a>").text(f.label)).appendTo(e)},_move:function(f,e){if(!this.menu.element.is(":visible")){this.search(null,e);
return}if(this.menu.isFirstItem()&&/^previous/.test(f)||this.menu.isLastItem()&&/^next/.test(f)){this._value(this.term);
this.menu.blur();return}this.menu[f](e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(f,e){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(f,e);e.preventDefault()
}}});a.extend(a.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(g,e){var f=new RegExp(a.ui.autocomplete.escapeRegex(e),"i");return a.grep(g,function(h){return f.test(h.label||h.value||h)
})}});a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(f){var e;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return
}if(f&&f.length){e=this.options.messages.results(f.length)}else{e=this.options.messages.noResults}this.liveRegion.text(e)
}})}(jQuery));
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend" in document;
if(!b.support.touch){return}var e=b.ui.mouse.prototype,g=e._mouseInit,d=e._mouseDestroy,a;function f(k,l){if(k.originalEvent.touches.length>1){return
}k.preventDefault();var m=k.originalEvent.changedTouches[0],h=document.createEvent("MouseEvents");h.initMouseEvent(l,true,true,window,1,m.screenX,m.screenY,m.clientX,m.clientY,false,false,false,false,0,null);
k.target.dispatchEvent(h)}e._touchStart=function(k){var h=this;if(a||!h._mouseCapture(k.originalEvent.changedTouches[0])){return
}a=true;h._touchMoved=false;f(k,"mouseover");f(k,"mousemove");f(k,"mousedown")};e._touchMove=function(h){if(!a){return
}this._touchMoved=true;f(h,"mousemove")};e._touchEnd=function(h){if(!a){return}f(h,"mouseup");f(h,"mouseout");
if(!this._touchMoved){f(h,"click")}a=false};e._mouseInit=function(){var h=this;h.element.bind({touchstart:b.proxy(h,"_touchStart"),touchmove:b.proxy(h,"_touchMove"),touchend:b.proxy(h,"_touchEnd")});
g.call(h)};e._mouseDestroy=function(){var h=this;h.element.unbind({touchstart:b.proxy(h,"_touchStart"),touchmove:b.proxy(h,"_touchMove"),touchend:b.proxy(h,"_touchEnd")});
d.call(h)}})(jQuery);$.fn.recommender=function(d,a,b,f){var e={urlParams:{},allowCustomValue:true,showNotMatchMsg:false,showMatchMsg:true,showSearchingMsg:false,callback:function(){},showRecommendation:function(){},hideRecommendation:function(){}};
if(a.length==0||!a.is("select")){return this}return this.each(function(k){var m=$(this);var g=$.extend(false,{},e,b);
function l(s){s.nextAll(".recoMsg").remove();s.nextAll(".self_employed_link").removeClass("dontshow")
}function o(w,z,u){z.html("");var A="<optgroup label=''></optgroup>",x="<option></option>";var t=$(A);
t.append($(x).text("Select").val(""));for(var v=0;v<u.length;v++){t.append($(x).val(u[v]).text(u[v]))
}z.append(t);if(g.allowCustomValue){var y=w.val();if(g.getDataFromDifferentField){y=g.dataFromField.val()
}if(f!="CITY"&&f!="CAR"){var s=$(A).append($(x).val(y).text("Continue with "+y));z.append(s)}}}var n=$("<label class='errorMsg recoMsg'>Not Found in our list.</label>");
var h=g.changeMatchMsg=="true"?$("<label class='green recoMsg'>OK to estimate</label>"):$("<label class='green recoMsg'>Matched</label>");
var p=$("<img src='/images/smwheel.gif' alt='' class='valign-middle recoMsg recommendedSearchImg'/><label class='green recoMsg dontshow recommendSearchMessage'>Searching..</label>");
function r(){l(m);a.html("");g.hideRecommendation(a)}m.focus(r).bind("recommenderHide",r);a.change(function(){l(m);
m.val($(this).val())});function q(){if(m.val().length<=0){return}m.val(m.val().toUpperCase());if(g.showSearchingMsg){m.after(p)
}if(g.onRecoStart){g.onRecoStart()}setTimeout(function(){var s=m.val();if(g.getDataFromDifferentField){s=g.dataFromField.val()
}$.post(d,$.extend(false,{},{query:s,ajax:true,t:Number(new Date())},g.urlParams),function(t){l(m);m.nextAll(".recoMsg").remove();
if(t.exactMatch){(g.showMatchMsg)?$(".self_employed_link").addClass("dontshow"):"";(g.showMatchMsg)?m.after(h):""
}else{if(m.val().length>0){if(t.recommendations.length==0){(g.showNotMatchMsg)?m.after(n):$(".self_employed_link").removeClass("dontshow")
}if(g.onRecoEnd){g.onRecoEnd()}}}if(t.recommendations.length>0){o(m,a,t.recommendations);g.showRecommendation(t,m,a);
m.trigger("showRecommendationDropdown")}g.callback(t,m,a)})},500)}m.blur(q);m.bind("triggerRecommendation",q)
})};
/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if(typeof jQuery==="undefined"){throw new Error("Bootstrap requires jQuery")
}+function(b){function a(){var f=document.createElement("bootstrap");var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var d in e){if(f.style[d]!==undefined){return{end:e[d]}}}return false}b.fn.emulateTransitionEnd=function(f){var e=false,d=this;
b(this).one(b.support.transition.end,function(){e=true});var g=function(){if(!e){b(d).trigger(b.support.transition.end)
}};setTimeout(g,f);return this};b(function(){b.support.transition=a()})}(jQuery);+function(e){var d='[data-dismiss="alert"]';
var b=function(f){e(f).on("click",d,this.close)};b.prototype.close=function(l){var k=e(this);var g=k.attr("data-target");
if(!g){g=k.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}var h=e(g);if(l){l.preventDefault()}if(!h.length){h=k.hasClass("alert")?k:k.parent()
}h.trigger(l=e.Event("close.bs.alert"));if(l.isDefaultPrevented()){return}h.removeClass("in");function f(){h.trigger("closed.bs.alert").remove()
}e.support.transition&&h.hasClass("fade")?h.one(e.support.transition.end,f).emulateTransitionEnd(150):f()
};var a=e.fn.alert;e.fn.alert=function(f){return this.each(function(){var h=e(this);var g=h.data("bs.alert");
if(!g){h.data("bs.alert",(g=new b(this)))}if(typeof f=="string"){g[f].call(h)}})};e.fn.alert.Constructor=b;
e.fn.alert.noConflict=function(){e.fn.alert=a;return this};e(document).on("click.bs.alert.data-api",d,b.prototype.close)
}(jQuery);+function(d){var b=function(f,e){this.$element=d(f);this.options=d.extend({},b.DEFAULTS,e);
this.isLoading=false};b.DEFAULTS={loadingText:"loading..."};b.prototype.setState=function(g){var k="disabled";
var e=this.$element;var h=e.is("input")?"val":"html";var f=e.data();g=g+"Text";if(!f.resetText){e.data("resetText",e[h]())
}e[h](f[g]||this.options[g]);setTimeout(d.proxy(function(){if(g=="loadingText"){this.isLoading=true;e.addClass(k).attr(k,k)
}else{if(this.isLoading){this.isLoading=false;e.removeClass(k).removeAttr(k)}}},this),0)};b.prototype.toggle=function(){var f=true;
var e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var g=this.$element.find("input");
if(g.prop("type")=="radio"){if(g.prop("checked")&&this.$element.hasClass("active")){f=false}else{e.find(".active").removeClass("active")
}}if(f){g.prop("checked",!this.$element.hasClass("active")).trigger("change")}}if(f){this.$element.toggleClass("active")
}};var a=d.fn.button;d.fn.button=function(e){return this.each(function(){var h=d(this);var g=h.data("bs.button");
var f=typeof e=="object"&&e;if(!g){h.data("bs.button",(g=new b(this,f)))}if(e=="toggle"){g.toggle()}else{if(e){g.setState(e)
}}})};d.fn.button.Constructor=b;d.fn.button.noConflict=function(){d.fn.button=a;return this};d(document).on("click.bs.button.data-api","[data-toggle^=button]",function(g){var f=d(g.target);
if(!f.hasClass("btn")){f=f.closest(".btn")}f.button("toggle");g.preventDefault()})}(jQuery);+function(b){var d=function(f,e){this.$element=b(f);
this.$indicators=this.$element.find(".carousel-indicators");this.options=e;this.paused=this.sliding=this.interval=this.$active=this.$items=null;
this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))
};d.DEFAULTS={interval:5000,pause:"hover",wrap:true};d.prototype.cycle=function(f){f||(this.paused=false);
this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));
return this};d.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();
return this.$items.index(this.$active)};d.prototype.to=function(g){var f=this;var e=this.getActiveIndex();
if(g>(this.$items.length-1)||g<0){return}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){f.to(g)
})}if(e==g){return this.pause().cycle()}return this.slide(g>e?"next":"prev",b(this.$items[g]))};d.prototype.pause=function(f){f||(this.paused=true);
if(this.$element.find(".next, .prev").length&&b.support.transition){this.$element.trigger(b.support.transition.end);
this.cycle(true)}this.interval=clearInterval(this.interval);return this};d.prototype.next=function(){if(this.sliding){return
}return this.slide("next")};d.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")
};d.prototype.slide=function(n,g){var p=this.$element.find(".item.active");var f=g||p[n]();var m=this.interval;
var o=n=="next"?"left":"right";var h=n=="next"?"first":"last";var k=this;if(!f.length){if(!this.options.wrap){return
}f=this.$element.find(".item")[h]()}if(f.hasClass("active")){return this.sliding=false}var l=b.Event("slide.bs.carousel",{relatedTarget:f[0],direction:o});
this.$element.trigger(l);if(l.isDefaultPrevented()){return}this.sliding=true;m&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
this.$element.one("slid.bs.carousel",function(){var e=b(k.$indicators.children()[k.getActiveIndex()]);
e&&e.addClass("active")})}if(b.support.transition&&this.$element.hasClass("slide")){f.addClass(n);if(f[0]!=undefined){f[0].offsetWidth
}p.addClass(o);f.addClass(o);if(p.css("transition-duration")!=undefined){p.one(b.support.transition.end,function(){f.removeClass([n,o].join(" ")).addClass("active");
p.removeClass(["active",o].join(" "));k.sliding=false;setTimeout(function(){k.$element.trigger("slid.bs.carousel")
},0)}).emulateTransitionEnd(p.css("transition-duration").slice(0,-1)*1000)}}else{p.removeClass("active");
f.addClass("active");this.sliding=false;this.$element.trigger("slid.bs.carousel")}m&&this.cycle();return this
};var a=b.fn.carousel;b.fn.carousel=function(e){return this.each(function(){var k=b(this);var h=k.data("bs.carousel");
var f=b.extend({},d.DEFAULTS,k.data(),typeof e=="object"&&e);var g=typeof e=="string"?e:f.slide;if(!h){k.data("bs.carousel",(h=new d(this,f)))
}if(typeof e=="number"){h.to(e)}else{if(g&&h[g]!=undefined){h[g]()}else{if(f.interval){h.pause().cycle()
}}}})};b.fn.carousel.Constructor=d;b.fn.carousel.noConflict=function(){b.fn.carousel=a;return this};b(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(m){var l=b(this),g;
var f=b(l.attr("data-target")||(g=l.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,""));var h=b.extend({},f.data(),l.data());
var k=l.attr("data-slide-to");if(k){h.interval=false}f.carousel(h);if(k=l.attr("data-slide-to")){f.data("bs.carousel").to(k)
}m.preventDefault()});b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var e=b(this);
e.carousel(e.data())})})}(jQuery);+function(b){var d=function(f,e){this.$element=b(f);this.options=b.extend({},d.DEFAULTS,e);
this.transitioning=null;if(this.options.parent){this.$parent=b(this.options.parent)}if(this.options.toggle){this.toggle()
}};d.DEFAULTS={toggle:true};d.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"
};d.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var f=b.Event("show.bs.collapse");
this.$element.trigger(f);if(f.isDefaultPrevented()){return}var k=this.$parent&&this.$parent.find("> .panel > .in");
if(k&&k.length){var g=k.data("bs.collapse");if(g&&g.transitioning){return}k.collapse("hide");g||k.data("bs.collapse",null)
}var l=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[l](0);this.transitioning=1;
var e=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l]("auto");this.transitioning=0;
this.$element.trigger("shown.bs.collapse")};if(!b.support.transition){return e.call(this)}var h=b.camelCase(["scroll",l].join("-"));
this.$element.one(b.support.transition.end,b.proxy(e,this)).emulateTransitionEnd(350)[l](this.$element[0][h])
};d.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var f=b.Event("hide.bs.collapse");
this.$element.trigger(f);if(f.isDefaultPrevented()){return}var g=this.dimension();this.$element[g](this.$element[g]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var e=function(){this.transitioning=0;
this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!b.support.transition){return e.call(this)
}this.$element[g](0).one(b.support.transition.end,b.proxy(e,this)).emulateTransitionEnd(350)};d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};var a=b.fn.collapse;b.fn.collapse=function(e){return this.each(function(){var h=b(this);var g=h.data("bs.collapse");
var f=b.extend({},d.DEFAULTS,h.data(),typeof e=="object"&&e);if(!g&&f.toggle&&e=="show"){e=!e}if(!g){h.data("bs.collapse",(g=new d(this,f)))
}if(typeof e=="string"){g[e]()}})};b.fn.collapse.Constructor=d;b.fn.collapse.noConflict=function(){b.fn.collapse=a;
return this};b(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(m){var o=b(this),f;
var n=o.attr("data-target")||m.preventDefault()||(f=o.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"");var g=b(n);
var k=g.data("bs.collapse");var l=k?"toggle":o.data();var p=o.attr("data-parent");var h=p&&b(p);if(!k||!k.transitioning){if(h){h.find('[data-toggle=collapse][data-parent="'+p+'"]').not(o).addClass("collapsed")
}o[g.hasClass("in")?"addClass":"removeClass"]("collapsed")}g.collapse(l)})}(jQuery);+function(h){var f=".dropdown-backdrop";
var b="[data-toggle=dropdown]";var a=function(k){h(k).on("click.bs.dropdown",this.toggle)};a.prototype.toggle=function(o){var n=h(this);
if(n.is(".disabled, :disabled")){return}var m=g(n);var l=m.hasClass("open");e();if(!l){if("ontouchstart" in document.documentElement&&!m.closest(".navbar-nav").length){h('<div class="dropdown-backdrop"/>').insertAfter(h(this)).on("click",e)
}var k={relatedTarget:this};m.trigger(o=h.Event("show.bs.dropdown",k));if(o.isDefaultPrevented()){return
}m.toggleClass("open").trigger("shown.bs.dropdown",k);n.focus()}return false};a.prototype.keydown=function(o){if(!/(38|40|27)/.test(o.keyCode)){return
}var n=h(this);o.preventDefault();o.stopPropagation();if(n.is(".disabled, :disabled")){return}var m=g(n);
var l=m.hasClass("open");if(!l||(l&&o.keyCode==27)){if(o.which==27){m.find(b).focus()}return n.click()
}var p=" li:not(.divider):visible a";var q=m.find("[role=menu]"+p+", [role=listbox]"+p);if(!q.length){return
}var k=q.index(q.filter(":focus"));if(o.keyCode==38&&k>0){k--}if(o.keyCode==40&&k<q.length-1){k++}if(!~k){k=0
}q.eq(k).focus()};function e(k){h(f).remove();h(b).each(function(){var m=g(h(this));var l={relatedTarget:this};
if(!m.hasClass("open")){return}m.trigger(k=h.Event("hide.bs.dropdown",l));if(k.isDefaultPrevented()){return
}m.removeClass("open").trigger("hidden.bs.dropdown",l)})}function g(m){var k=m.attr("data-target");if(!k){k=m.attr("href");
k=k&&/#[A-Za-z]/.test(k)&&k.replace(/.*(?=#[^\s]*$)/,"")}var l=k&&h(k);return l&&l.length?l:m.parent()
}var d=h.fn.dropdown;h.fn.dropdown=function(k){return this.each(function(){var m=h(this);var l=m.data("bs.dropdown");
if(!l){m.data("bs.dropdown",(l=new a(this)))}if(typeof k=="string"){l[k].call(m)}})};h.fn.dropdown.Constructor=a;
h.fn.dropdown.noConflict=function(){h.fn.dropdown=d;return this};h(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(k){k.stopPropagation()
}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b+", [role=menu], [role=listbox]",a.prototype.keydown)
}(jQuery);+function(d){var b=function(f,e){this.options=e;this.$element=d(f);this.$backdrop=this.isShown=null;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))}};b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(e){return this[!this.isShown?"show":"hide"](e)
};b.prototype.show=function(h){var f=this;var g=d.Event("show.bs.modal",{relatedTarget:h});this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return}this.isShown=true;this.escape();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));
this.backdrop(function(){var l=d.support.transition&&f.$element.hasClass("fade");if(!f.$element.parent().length){f.$element.appendTo(document.body)
}f.$element.show().scrollTop(0);if(l){f.$element[0].offsetWidth}f.$element.addClass("in").attr("aria-hidden",false);
f.enforceFocus();var k=d.Event("shown.bs.modal",{relatedTarget:h});l?f.$element.find(".modal-dialog").one(d.support.transition.end,function(){f.$element.focus().trigger(k)
}).emulateTransitionEnd(300):f.$element.focus().trigger(k)})};b.prototype.hide=function(f){if(f){f.preventDefault()
}f=d.Event("hide.bs.modal");this.$element.trigger(f);if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;this.escape();d(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");
d.support.transition&&this.$element.hasClass("fade")?this.$element.one(d.support.transition.end,d.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()
};b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.focus()
}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()
},this))}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}}};b.prototype.hideModal=function(){var e=this;
this.$element.hide();this.backdrop(function(){e.removeBackdrop();e.$element.trigger("hidden.bs.modal")
})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null
};b.prototype.backdrop=function(g){var f=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;
this.$backdrop=d('<div class="modal-backdrop '+f+'" />').appendTo(document.body);this.$element.on("click.dismiss.bs.modal",d.proxy(function(h){if(h.target!==h.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));
if(e){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!g){return}e?this.$backdrop.one(d.support.transition.end,g).emulateTransitionEnd(150):g()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(d.support.transition.end,g).emulateTransitionEnd(150):g()
}else{if(g){g()}}}};var a=d.fn.modal;d.fn.modal=function(e,f){return this.each(function(){var k=d(this);
var h=k.data("bs.modal");var g=d.extend({},b.DEFAULTS,k.data(),typeof e=="object"&&e);if(!h){k.data("bs.modal",(h=new b(this,g)))
}if(typeof e=="string"){h[e](f)}else{if(g.show){h.show(f)}}})};d.fn.modal.Constructor=b;d.fn.modal.noConflict=function(){d.fn.modal=a;
return this};d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(l){var k=d(this);
var g=k.attr("href");var f=d(k.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),k.data());
if(k.is("a")){l.preventDefault()}f.modal(h,this).one("hide",function(){k.is(":visible")&&k.focus()})});
d(document).on("show.bs.modal",".modal",function(){d(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){d(document.body).removeClass("modal-open")
})}(jQuery);+function(d){var b=function(f,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;
this.init("tooltip",f,e)};b.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};
b.prototype.init=function(m,k,g){this.enabled=true;this.type=m;this.$element=d(k);this.options=this.getOptions(g);
var l=this.options.trigger.split(" ");for(var h=l.length;h--;){var f=l[h];if(f=="click"){this.$element.on("click."+this.type,this.options.selector,d.proxy(this.toggle,this))
}else{if(f!="manual"){var n=f=="hover"?"mouseenter":"focusin";var e=f=="hover"?"mouseleave":"focusout";
this.$element.on(n+"."+this.type,this.options.selector,d.proxy(this.enter,this));this.$element.on(e+"."+this.type,this.options.selector,d.proxy(this.leave,this))
}}}this.options.selector?(this._options=d.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.getOptions=function(e){e=d.extend({},this.getDefaults(),this.$element.data(),e);
if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}}return e};b.prototype.getDelegateOptions=function(){var e={};
var f=this.getDefaults();this._options&&d.each(this._options,function(g,h){if(f[g]!=h){e[g]=h}});return e
};b.prototype.enter=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(e.timeout);e.hoverState="in";if(!e.options.delay||!e.options.delay.show){return e.show()
}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()}},e.options.delay.show)};b.prototype.leave=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(e.timeout);e.hoverState="out";if(!e.options.delay||!e.options.delay.hide){return e.hide()
}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()}},e.options.delay.hide)};b.prototype.show=function(){var s=d.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(s);if(s.isDefaultPrevented()){return}var r=this;
var n=this.tip();this.setContent();if(this.options.animation){n.addClass("fade")}var m=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement;
var w=/\s?auto?\s?/i;var x=w.test(m);if(x){m=m.replace(w,"")||"top"}n.detach().css({top:0,left:0,display:"block"}).addClass(m);
this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var t=this.getPosition();
var f=n[0].offsetWidth;var p=n[0].offsetHeight;if(x){var l=this.$element.parent();var k=m;var u=document.documentElement.scrollTop||document.body.scrollTop;
var v=this.options.container=="body"?window.innerWidth:l.outerWidth();var q=this.options.container=="body"?window.innerHeight:l.outerHeight();
var o=this.options.container=="body"?0:l.offset().left;m=m=="bottom"&&t.top+t.height+p-u>q?"top":m=="top"&&t.top-u-p<0?"bottom":m=="right"&&t.right+f>v?"left":m=="left"&&t.left-f<o?"right":m;
n.removeClass(k).addClass(m)}var h=this.getCalculatedOffset(m,t,f,p);this.applyPlacement(h,m);this.hoverState=null;
var g=function(){r.$element.trigger("shown.bs."+r.type)};d.support.transition&&this.$tip.hasClass("fade")?n.one(d.support.transition.end,g).emulateTransitionEnd(150):g()
}};b.prototype.applyPlacement=function(l,m){var h;var n=this.tip();var g=n[0].offsetWidth;var q=n[0].offsetHeight;
var f=parseInt(n.css("margin-top"),10);var k=parseInt(n.css("margin-left"),10);if(isNaN(f)){f=0}if(isNaN(k)){k=0
}l.top=l.top+f;l.left=l.left+k;d.offset.setOffset(n[0],d.extend({using:function(r){n.css({top:Math.round(r.top),left:Math.round(r.left)})
}},l),0);n.addClass("in");var e=n[0].offsetWidth;var o=n[0].offsetHeight;if(m=="top"&&o!=q){h=true;l.top=l.top+q-o
}if(/bottom|top/.test(m)){var p=0;if(l.left<0){p=l.left*-2;l.left=0;n.offset(l);e=n[0].offsetWidth;o=n[0].offsetHeight
}this.replaceArrow(p-g+e,e,"left")}else{this.replaceArrow(o-q,o,"top")}if(h){n.offset(l)}};b.prototype.replaceArrow=function(g,f,e){this.arrow().css(e,g?(50*(1-g/f)+"%"):"")
};b.prototype.setContent=function(){var f=this.tip();var e=this.getTitle();f.find(".tooltip-inner")[this.options.html?"html":"text"](e);
f.removeClass("fade in top bottom left right")};b.prototype.hide=function(){var g=this;var k=this.tip();
var h=d.Event("hide.bs."+this.type);function f(){if(g.hoverState!="in"){k.detach()}g.$element.trigger("hidden.bs."+g.type)
}this.$element.trigger(h);if(h.isDefaultPrevented()){return}k.removeClass("in");d.support.transition&&this.$tip.hasClass("fade")?k.one(d.support.transition.end,f).emulateTransitionEnd(150):f();
this.hoverState=null;return this};b.prototype.fixTitle=function(){var e=this.$element;if(e.attr("title")||typeof(e.attr("data-original-title"))!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")
}};b.prototype.hasContent=function(){return this.getTitle()};b.prototype.getPosition=function(){var e=this.$element[0];
return d.extend({},(typeof e.getBoundingClientRect=="function")?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())
};b.prototype.getCalculatedOffset=function(e,h,f,g){return e=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:e=="top"?{top:h.top-g,left:h.left+h.width/2-f/2}:e=="left"?{top:h.top+h.height/2-g/2,left:h.left-f}:{top:h.top+h.height/2-g/2,left:h.left+h.width}
};b.prototype.getTitle=function(){var g;var e=this.$element;var f=this.options;g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);
return g};b.prototype.tip=function(){return this.$tip=this.$tip||d(this.options.template)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
};b.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null
}};b.prototype.enable=function(){this.enabled=true};b.prototype.disable=function(){this.enabled=false
};b.prototype.toggleEnabled=function(){this.enabled=!this.enabled};b.prototype.toggle=function(g){var f=g?d(g.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
f.tip().hasClass("in")?f.leave(f):f.enter(f)};b.prototype.destroy=function(){clearTimeout(this.timeout);
this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var a=d.fn.tooltip;d.fn.tooltip=function(e){return this.each(function(){var h=d(this);
var g=h.data("bs.tooltip");var f=typeof e=="object"&&e;if(!g&&e=="destroy"){return}if(!g){h.data("bs.tooltip",(g=new b(this,f)))
}if(typeof e=="string"){g[e]()}})};d.fn.tooltip.Constructor=b;d.fn.tooltip.noConflict=function(){d.fn.tooltip=a;
return this}}(jQuery);+function(d){var b=function(f,e){this.init("popover",f,e)};if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")
}b.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
b.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);b.prototype.constructor=b;b.prototype.getDefaults=function(){return b.DEFAULTS
};b.prototype.setContent=function(){var g=this.tip();var f=this.getTitle();var e=this.getContent();g.find(".popover-title")[this.options.html?"html":"text"](f);
g.find(".popover-content")[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);g.removeClass("fade top bottom left right in");
if(!g.find(".popover-title").html()){g.find(".popover-title").hide()}};b.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};b.prototype.getContent=function(){var e=this.$element;var f=this.options;return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)
};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};b.prototype.tip=function(){if(!this.$tip){this.$tip=d(this.options.template)
}return this.$tip};var a=d.fn.popover;d.fn.popover=function(e){return this.each(function(){var h=d(this);
var g=h.data("bs.popover");var f=typeof e=="object"&&e;if(!g&&e=="destroy"){return}if(!g){h.data("bs.popover",(g=new b(this,f)))
}if(typeof e=="string"){g[e]()}})};d.fn.popover.Constructor=b;d.fn.popover.noConflict=function(){d.fn.popover=a;
return this}}(jQuery);+function(d){function b(g,f){var e;var h=d.proxy(this.process,this);this.$element=d(g).is("body")?d(window):d(g);
this.$body=d("body");this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",h);this.options=d.extend({},b.DEFAULTS,f);
this.selector=(this.options.target||((e=d(g).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";
this.offsets=d([]);this.targets=d([]);this.activeTarget=null;this.refresh();this.process()}b.DEFAULTS={offset:10};
b.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=d([]);
this.targets=d([]);var f=this;var g=this.$body.find(this.selector).map(function(){var k=d(this);var h=k.data("target")||k.attr("href");
var l=/^#./.test(h)&&d(h);return(l&&l.length&&l.is(":visible")&&[[l[e]().top+(!d.isWindow(f.$scrollElement.get(0))&&f.$scrollElement.scrollTop()),h]])||null
}).sort(function(k,h){return k[0]-h[0]}).each(function(){f.offsets.push(this[0]);f.targets.push(this[1])
})};b.prototype.process=function(){var l=this.$scrollElement.scrollTop()+this.options.offset;var g=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight;
var k=g-this.$scrollElement.height();var h=this.offsets;var e=this.targets;var m=this.activeTarget;var f;
if(l>=k){return m!=(f=e.last()[0])&&this.activate(f)}if(m&&l<=h[0]){return m!=(f=e[0])&&this.activate(f)
}for(f=h.length;f--;){m!=e[f]&&l>=h[f]&&(!h[f+1]||l<=h[f+1])&&this.activate(e[f])}};b.prototype.activate=function(g){this.activeTarget=g;
d(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var e=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';
var f=d(e).parents("li").addClass("active");if(f.parent(".dropdown-menu").length){f=f.closest("li.dropdown").addClass("active")
}f.trigger("activate.bs.scrollspy")};var a=d.fn.scrollspy;d.fn.scrollspy=function(e){return this.each(function(){var h=d(this);
var g=h.data("bs.scrollspy");var f=typeof e=="object"&&e;if(!g){h.data("bs.scrollspy",(g=new b(this,f)))
}if(typeof e=="string"){g[e]()}})};d.fn.scrollspy.Constructor=b;d.fn.scrollspy.noConflict=function(){d.fn.scrollspy=a;
return this};d(window).on("load",function(){d('[data-spy="scroll"]').each(function(){var e=d(this);e.scrollspy(e.data())
})})}(jQuery);+function(d){var b=function(e){this.element=d(e)};b.prototype.show=function(){var m=this.element;
var h=m.closest("ul:not(.dropdown-menu)");var g=m.data("target");if(!g){g=m.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}if(m.parent("li").hasClass("active")){return}var k=h.find(".active:last a")[0];var l=d.Event("show.bs.tab",{relatedTarget:k});
m.trigger(l);if(l.isDefaultPrevented()){return}var f=d(g);this.activate(m.parent("li"),h);this.activate(f,f.parent(),function(){m.trigger({type:"shown.bs.tab",relatedTarget:k})
})};b.prototype.activate=function(g,f,l){var e=f.find("> .active");var k=l&&d.support.transition&&e.hasClass("fade");
function h(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");g.addClass("active");
if(k){g[0].offsetWidth;g.addClass("in")}else{g.removeClass("fade")}if(g.parent(".dropdown-menu")){g.closest("li.dropdown").addClass("active")
}l&&l()}k?e.one(d.support.transition.end,h).emulateTransitionEnd(150):h();e.removeClass("in")};var a=d.fn.tab;
d.fn.tab=function(e){return this.each(function(){var g=d(this);var f=g.data("bs.tab");if(!f){g.data("bs.tab",(f=new b(this)))
}if(typeof e=="string"){f[e]()}})};d.fn.tab.Constructor=b;d.fn.tab.noConflict=function(){d.fn.tab=a;return this
};d(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(f){f.preventDefault();
d(this).tab("show")})}(jQuery);+function(d){var b=function(f,e){this.options=d.extend({},b.DEFAULTS,e);
this.$window=d(window).on("scroll.bs.affix.data-api",d.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",d.proxy(this.checkPositionWithEventLoop,this));
this.$element=d(f);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};b.RESET="affix affix-top affix-bottom";
b.DEFAULTS={offset:0};b.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(b.RESET).addClass("affix");var f=this.$window.scrollTop();var e=this.$element.offset();
return(this.pinnedOffset=e.top-f)};b.prototype.checkPositionWithEventLoop=function(){setTimeout(d.proxy(this.checkPosition,this),1)
};b.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var p=d(document).height();
var f=this.$window.scrollTop();var m=this.$element.offset();var k=this.options.offset;var g=k.top;var h=k.bottom;
if(this.affixed=="top"){m.top+=f}if(typeof k!="object"){h=g=k}if(typeof g=="function"){g=k.top(this.$element)
}if(typeof h=="function"){h=k.bottom(this.$element)}var l=this.unpin!=null&&(f+this.unpin<=m.top)?false:h!=null&&(m.top+this.$element.height()>=p-h)?"bottom":g!=null&&(f<=g)?"top":false;
if(this.affixed===l){return}if(this.unpin){this.$element.css("top","")}var o="affix"+(l?"-"+l:"");var n=d.Event(o+".bs.affix");
this.$element.trigger(n);if(n.isDefaultPrevented()){return}this.affixed=l;this.unpin=l=="bottom"?this.getPinnedOffset():null;
this.$element.removeClass(b.RESET).addClass(o).trigger(d.Event(o.replace("affix","affixed")));if(l=="bottom"){this.$element.offset({top:p-h-this.$element.height()})
}};var a=d.fn.affix;d.fn.affix=function(e){return this.each(function(){var h=d(this);var g=h.data("bs.affix");
var f=typeof e=="object"&&e;if(!g){h.data("bs.affix",(g=new b(this,f)))}if(typeof e=="string"){g[e]()
}})};d.fn.affix.Constructor=b;d.fn.affix.noConflict=function(){d.fn.affix=a;return this};d(window).on("load",function(){d('[data-spy="affix"]').each(function(){var f=d(this);
var e=f.data();e.offset=e.offset||{};if(e.offsetBottom){e.offset.bottom=e.offsetBottom}if(e.offsetTop){e.offset.top=e.offsetTop
}f.affix(e)})})}(jQuery);!function(b){var a=function(f,d,g){if(g){g.stopPropagation();g.preventDefault()
}this.$element=b(f);this.$newElement=null;this.button=null;this.options=b.extend({},b.fn.selectpicker.defaults,this.$element.data(),typeof d=="object"&&d);
if(this.options.title==null){this.options.title=this.$element.attr("title")}this.val=a.prototype.val;
this.render=a.prototype.render;this.init()};a.prototype={constructor:a,init:function(w){var u=this;this.$element.hide();
this.multiple=this.$element.prop("multiple");var y=this.$element.attr("class")!==undefined?this.$element.attr("class").split(/\s+/):"";
var r=this.$element.attr("id");this.$element.after(this.createView());this.$newElement=this.$element.next(".select");
var s=this.$newElement;var f=this.$newElement.find(".dropdown-menu");var l=this.$newElement.find(".dropdown-arrow");
var p=f.find("li > a");var h=s.addClass("open").find(".dropdown-menu li > a").outerHeight();s.removeClass("open");
var k=f.find("li .divider").outerHeight(true);var m=this.$newElement.offset().top;var o=0;var q=0;var x=this.$newElement.outerHeight();
this.button=this.$newElement.find("> button");if(r!==undefined){this.button.attr("id",r);b('label[for="'+r+'"]').click(function(){s.find("button#"+r).focus()
})}for(var v=0;v<y.length;v++){if(y[v]!="selectpicker"){this.$newElement.addClass(y[v])}}if(this.multiple){this.$newElement.addClass("select-multiple")
}this.button.addClass(this.options.style);f.addClass(this.options.menuStyle);l.addClass(function(){if(u.options.menuStyle){return u.options.menuStyle.replace("dropdown-","dropdown-arrow-")
}});this.checkDisabled();this.checkTabIndex();this.clickListener();var t=parseInt(f.css("padding-top"))+parseInt(f.css("padding-bottom"))+parseInt(f.css("border-top-width"))+parseInt(f.css("border-bottom-width"));
if(this.options.size=="auto"){function g(){var e=m-b(window).scrollTop();var B=b(window).innerHeight();
var z=t+parseInt(f.css("margin-top"))+parseInt(f.css("margin-bottom"))+2;var A=B-e-x-z;q=A;if(s.hasClass("dropup")){q=e-z
}f.css({"max-height":q+"px","overflow-y":"auto","min-height":h*3+"px"})}g();b(window).resize(g);b(window).scroll(g);
if(window.MutationObserver){new MutationObserver(g).observe(this.$element.get(0),{childList:true})}else{this.$element.bind("DOMNodeInserted",g)
}}else{if(this.options.size&&this.options.size!="auto"&&f.find("li").length>this.options.size){var n=f.find("li > *").filter(":not(.divider)").slice(0,this.options.size).last().parent().index();
var d=f.find("li").slice(0,n+1).find(".divider").length;q=h*this.options.size+d*k+t;f.css({"max-height":q+"px","overflow-y":"scroll"})
}}if(window.MutationObserver){new MutationObserver(b.proxy(this.reloadLi,this)).observe(this.$element.get(0),{childList:true})
}else{this.$element.bind("DOMNodeInserted",b.proxy(this.reloadLi,this))}this.render()},createDropdown:function(){var d="<div class='btn-group select'><button class='btn dropdown-toggle clearfix' data-toggle='dropdown'><span class='filter-option pull-left'></span>&nbsp;<span class='caret'></span></button><span class='dropdown-arrow'></span><ul class='dropdown-menu' role='menu'></ul></div>";
return b(d)},createView:function(){var d=this.createDropdown();var e=this.createLi();d.find("ul").append(e);
return d},reloadLi:function(){this.destroyLi();$li=this.createLi();this.$newElement.find("ul").append($li);
this.render()},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var k=this;
var f=[];var h=[];var d="";this.$element.find("option").each(function(){f.push(b(this).text())});this.$element.find("option").each(function(n){var q=b(this).attr("class")!==undefined?b(this).attr("class"):"";
var p=b(this).text();var o=b(this).data("subtext")!==undefined?'<small class="muted">'+b(this).data("subtext")+"</small>":"";
p+=o;if(b(this).parent().is("optgroup")&&b(this).data("divider")!=true){if(b(this).index()==0){var m=b(this).parent().attr("label");
var l=b(this).parent().data("subtext")!==undefined?'<small class="muted">'+b(this).parent().data("subtext")+"</small>":"";
m+=l;if(b(this)[0].index!=0){h.push('<div class="divider"></div><dt>'+m+"</dt>"+k.createA(p,"opt "+q))
}else{h.push("<dt>"+m+"</dt>"+k.createA(p,"opt "+q))}}else{h.push(k.createA(p,"opt "+q))}}else{if(b(this).data("divider")==true){h.push('<div class="divider"></div>')
}else{if(b(this).data("hidden")==true){h.push("")}else{h.push(k.createA(p,q))}}}});if(f.length>0){for(var e=0;
e<f.length;e++){var g=this.$element.find("option").eq(e);d+="<li rel="+e+">"+h[e]+"</li>"}}if(this.$element.find("option:selected").length==0&&!k.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")
}return b(d)},createA:function(e,d){return'<a tabindex="-1" href="#" class="'+d+'"><span class="pull-left">'+e+"</span></a>"
},render:function(){var h=this;if(this.options.width=="auto"){var e=this.$newElement.find(".dropdown-menu").css("width");
this.$newElement.css("width",e)}else{if(this.options.width&&this.options.width!="auto"){this.$newElement.css("width",this.options.width)
}}this.$element.find("option").each(function(k){h.setDisabled(k,b(this).is(":disabled")||b(this).parent().is(":disabled"));
h.setSelected(k,b(this).is(":selected"))});var g=this.$element.find("option:selected").map(function(k,l){if(b(this).attr("title")!=undefined){return b(this).attr("title")
}else{return b(this).text()}}).toArray();var f=g.join(", ");if(h.multiple&&h.options.selectedTextFormat.indexOf("count")>-1){var d=h.options.selectedTextFormat.split(">");
if((d.length>1&&g.length>d[1])||(d.length==1&&g.length>=2)){f=g.length+" of "+this.$element.find("option").length+" selected"
}}if(!f){f=h.options.title!=undefined?h.options.title:h.options.noneSelectedText}this.$element.next(".select").find(".filter-option").html(f)
},setSelected:function(d,e){if(e){this.$newElement.find("li").eq(d).addClass("selected")}else{this.$newElement.find("li").eq(d).removeClass("selected")
}},setDisabled:function(d,e){if(e){this.$newElement.find("li").eq(d).addClass("disabled")}else{this.$newElement.find("li").eq(d).removeClass("disabled")
}},checkDisabled:function(){if(this.$element.is(":disabled")){this.button.addClass("disabled");this.button.click(function(d){d.preventDefault()
})}},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var d=this.$element.attr("tabindex");
this.button.attr("tabindex",d)}},clickListener:function(){var d=this;b("body").on("touchstart.dropdown",".dropdown-menu",function(f){f.stopPropagation()
});this.$newElement.on("click","li a",function(l){var h=b(this).parent().index(),k=b(this).parent(),f=k.parents(".select");
if(d.multiple){l.stopPropagation()}l.preventDefault();if(f.prev("select").not(":disabled")&&!b(this).parent().hasClass("disabled")){if(!d.multiple){f.prev("select").find("option").removeAttr("selected");
f.prev("select").find("option").eq(h).prop("selected",true).attr("selected","selected")}else{var g=f.prev("select").find("option").eq(h).prop("selected");
if(g){f.prev("select").find("option").eq(h).removeAttr("selected")}else{f.prev("select").find("option").eq(h).prop("selected",true).attr("selected","selected")
}}f.find(".filter-option").html(k.text());f.find("button").focus();f.prev("select").trigger("change")
}});this.$newElement.on("click","li.disabled a, li dt, li .divider",function(f){f.preventDefault();f.stopPropagation();
$select=b(this).parent().parents(".select");$select.find("button").focus()});this.$element.on("change",function(f){d.render()
})},val:function(d){if(d!=undefined){this.$element.val(d);this.$element.trigger("change");return this.$element
}else{return this.$element.val()}}};b.fn.selectpicker=function(f,g){var d=arguments;var h;var e=this.each(function(){var n=b(this),m=n.data("selectpicker"),k=typeof f=="object"&&f;
if(!m){n.data("selectpicker",(m=new a(this,k,g)))}else{for(var l in f){m[l]=f[l]}}if(typeof f=="string"){property=f;
if(m[property] instanceof Function){[].shift.apply(d);h=m[property].apply(m,d)}else{h=m[property]}}});
if(h!=undefined){return h}else{return e}};b.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",width:null,menuStyle:null,toggleSize:null}
}(window.jQuery);!function(a){a.fn.bootstrapSwitch=function(d){var b={init:function(){return this.each(function(){var s=a(this),p,g,o,r,k="",h=s.attr("class"),l,e,m="ON",f="OFF",q=false;
a.each(["switch-mini","switch-small","switch-large"],function(t,u){if(h.indexOf(u)>=0){k=u}});s.addClass("has-switch");
if(s.data("on")!==undefined){l="switch-"+s.data("on")}if(s.data("on-label")!==undefined){m=s.data("on-label")
}if(s.data("off-label")!==undefined){f=s.data("off-label")}if(s.data("icon")!==undefined){q=s.data("icon")
}g=a("<span>").addClass("switch-left").addClass(k).addClass(l).html(m);l="";if(s.data("off")!==undefined){l="switch-"+s.data("off")
}o=a("<span>").addClass("switch-right").addClass(k).addClass(l).html(f);r=a("<label>").html("&nbsp;").addClass(k).attr("for",s.find("input").attr("id"));
if(q){r.html('<i class="'+q+'"></i>')}p=s.find(":checkbox").wrap(a("<div>")).parent().data("animated",false);
if(s.data("animated")!==false){p.addClass("switch-animate").data("animated",true)}p.append(g).append(r).append(o);
s.find(">div").addClass(s.find("input").is(":checked")?"switch-on":"switch-off");if(s.find("input").is(":disabled")){a(this).addClass("deactivate")
}var n=function(t){t.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")};s.on("keydown",function(t){if(t.keyCode===32){t.stopImmediatePropagation();
t.preventDefault();n(a(t.target).find("span:first"))}});g.on("click",function(t){n(a(this))});o.on("click",function(t){n(a(this))
});s.find("input").on("change",function(x){var w=a(this),u=w.parent(),t=w.is(":checked"),v=u.is(".switch-off");
x.preventDefault();u.css("left","");if(v===t){if(t){u.removeClass("switch-off").addClass("switch-on")
}else{u.removeClass("switch-on").addClass("switch-off")}if(u.data("animated")!==false){u.addClass("switch-animate")
}u.parent().trigger("switch-change",{el:w,value:t})}});s.find("label").on("mousedown touchstart",function(u){var t=a(this);
e=false;u.preventDefault();u.stopImmediatePropagation();t.closest("div").removeClass("switch-animate");
if(t.closest(".has-switch").is(".deactivate")){t.unbind("click")}else{t.on("mousemove touchmove",function(A){var v=a(this).closest(".switch"),x=(A.pageX||A.originalEvent.targetTouches[0].pageX)-v.offset().left,y=(x/v.width())*100,z=25,w=75;
e=true;if(y<z){y=z}else{if(y>w){y=w}}v.find(">div").css("left",(y-w)+"%")});t.on("click touchend",function(x){var w=a(this),v=a(x.target),y=v.siblings("input");
x.stopImmediatePropagation();x.preventDefault();w.unbind("mouseleave");if(e){y.prop("checked",!(parseInt(w.parent().css("left"))<-25))
}else{y.prop("checked",!y.is(":checked"))}e=false;y.trigger("change")});t.on("mouseleave",function(w){var v=a(this),x=v.siblings("input");
w.preventDefault();w.stopImmediatePropagation();v.unbind("mouseleave");v.trigger("mouseup");x.prop("checked",!(parseInt(v.parent().css("left"))<-25)).trigger("change")
});t.on("mouseup",function(v){v.stopImmediatePropagation();v.preventDefault();a(this).unbind("mousemove")
})}})})},toggleActivation:function(){a(this).toggleClass("deactivate")},isActive:function(){return !a(this).hasClass("deactivate")
},setActive:function(e){if(e){a(this).removeClass("deactivate")}else{a(this).addClass("deactivate")}},toggleState:function(e){var f=a(this).find("input:checkbox");
f.prop("checked",!f.is(":checked")).trigger("change",e)},setState:function(f,e){a(this).find("input:checkbox").prop("checked",f).trigger("change",e)
},status:function(){return a(this).find("input:checkbox").is(":checked")},destroy:function(){var e=a(this).find("div"),f;
e.find(":not(input:checkbox)").remove();f=e.children();f.unwrap().unwrap();f.unbind("change");return f
}};if(b[d]){return b[d].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof d==="object"||!d){return b.init.apply(this,arguments)
}else{a.error("Method "+d+" does not exist!")}}}}(jQuery);$(function(){$(".switch")["bootstrapSwitch"]()
});(function(b,a,d){var e=b();b.fn.dropdownHover=function(f){if("ontouchstart" in document){return this
}e=e.add(this.parent());return this.each(function(){var p=b(this),o=p.parent(),n={delay:500,instantlyCloseOthers:true},l={delay:b(this).data("delay"),instantlyCloseOthers:b(this).data("close-others")},g="show.bs.dropdown",m="hide.bs.dropdown",h=b.extend(true,{},n,f,l),k;
o.hover(function(q){if(!o.hasClass("open")&&!p.is(q.target)){return true}if(h.instantlyCloseOthers===true){e.removeClass("open")
}a.clearTimeout(k);o.addClass("open");p.trigger(g)},function(){k=a.setTimeout(function(){o.removeClass("open");
p.trigger(m)},h.delay)});p.hover(function(){if(h.instantlyCloseOthers===true){e.removeClass("open")}a.clearTimeout(k);
o.addClass("open");p.trigger(g)});o.find(".dropdown-submenu").each(function(){var r=b(this);var q;r.hover(function(){a.clearTimeout(q);
r.children(".dropdown-menu").show();r.siblings().children(".dropdown-menu").hide()},function(){var s=r.children(".dropdown-menu");
q=a.setTimeout(function(){s.hide()},h.delay)})})})};b(document).ready(function(){b('[data-hover="dropdown"]').dropdownHover()
})})(jQuery,this);!function(b){var a=function(e,d){this.options=b.extend({},b.fn.combobox.defaults,d);
this.$source=b(e);this.$container=this.setup();this.$element=this.$container.find("input[type=text]");
this.$target=this.$container.find("input[type=hidden]");this.$button=this.$container.find(".dropdown-toggle");
this.$menu=b(this.options.menu).appendTo("body");this.template=this.options.template||this.template;this.matcher=this.options.matcher||this.matcher;
this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;
this.shown=false;this.selected=false;this.refresh();this.transferAttributes();this.listen()};a.prototype={constructor:a,setup:function(){var d=b(this.template());
this.$source.before(d);this.$source.hide();return d},disable:function(){this.$element.prop("disabled",true);
this.$button.attr("disabled",true);this.disabled=true;this.$container.addClass("combobox-disabled")},enable:function(){this.$element.prop("disabled",false);
this.$button.attr("disabled",false);this.disabled=false;this.$container.removeClass("combobox-disabled")
},parse:function(){var f=this,h={},g=[],e=false,d="";this.$source.find("option").each(function(){var k=b(this);
if(k.val()===""){f.options.placeholder=k.text();return}h[k.text()]=k.val();g.push(k.text());if(k.prop("selected")){e=k.text();
d=k.val()}});this.map=h;if(e){this.$element.val(e);this.$target.val(d);this.$container.addClass("combobox-selected");
this.selected=true}return g},transferAttributes:function(){this.options.placeholder=this.$source.attr("data-placeholder")||this.options.placeholder;
this.$element.attr("placeholder",this.options.placeholder);this.$target.prop("name",this.$source.prop("name"));
this.$target.val(this.$source.val());this.$source.removeAttr("name");this.$element.attr("required",this.$source.attr("required"));
this.$element.attr("rel",this.$source.attr("rel"));this.$element.attr("title",this.$source.attr("title"));
this.$element.attr("class",this.$source.attr("class"));this.$element.attr("tabindex",this.$source.attr("tabindex"));
this.$source.removeAttr("tabindex");if(this.$source.attr("disabled")!==undefined){this.disable()}},select:function(){var d=this.$menu.find(".active").attr("data-value");
this.$element.val(this.updater(d)).trigger("change");this.$target.val(this.map[d]).trigger("change");
this.$source.val(this.map[d]).trigger("change");this.$container.addClass("combobox-selected");this.selected=true;
return this.hide()},updater:function(d){return d},show:function(){var d=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});
this.$menu.insertAfter(this.$element).css({top:d.top+d.height,left:d.left}).show();b(".dropdown-menu").on("mousedown",b.proxy(this.scrollSafety,this));
this.shown=true;return this},hide:function(){this.$menu.hide();b(".dropdown-menu").off("mousedown",b.proxy(this.scrollSafety,this));
this.$element.on("blur",b.proxy(this.blur,this));this.shown=false;return this},lookup:function(d){this.query=this.$element.val();
return this.process(this.source)},process:function(d){var e=this;d=b.grep(d,function(f){return e.matcher(f)
});d=this.sorter(d);if(!d.length){return this.shown?this.hide():this}return this.render(d.slice(0,this.options.items)).show()
},template:function(){if(this.options.bsVersion=="2"){return'<div class="combobox-container"><input type="hidden" /> <div class="input-append"> <input type="text" autocomplete="off" /> <span class="add-on dropdown-toggle" data-dropdown="dropdown"> <span class="caret"/> <i class="icon-remove"/> </span> </div> </div>'
}else{return'<div class="combobox-container"> <input type="hidden" /> <div class="input-group"> <input type="text" autocomplete="off" /> <span class="input-group-addon dropdown-toggle" data-dropdown="dropdown"> <span class="caret" /> <span class="glyphicon glyphicon-remove" /> </span> </div> </div>'
}},matcher:function(d){return ~d.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(f){var g=[],e=[],d=[],h;
while(h=f.shift()){if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(h)}else{if(~h.indexOf(this.query)){e.push(h)
}else{d.push(h)}}}return g.concat(e,d)},highlighter:function(d){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return d.replace(new RegExp("("+e+")","ig"),function(f,g){return"<strong>"+g+"</strong>"})},render:function(d){var e=this;
d=b(d).map(function(f,g){f=b(e.options.item).attr("data-value",g);f.find("a").html(e.highlighter(g));
return f[0]});d.first().addClass("active");this.$menu.html(d);return this},next:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.next();
if(!d.length){d=b(this.$menu.find("li")[0])}d.addClass("active")},prev:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.prev();
if(!d.length){d=this.$menu.find("li").last()}d.addClass("active")},toggle:function(){if(!this.disabled){if(this.$container.hasClass("combobox-selected")){this.clearTarget();
this.triggerChange();this.clearElement()}else{if(this.shown){this.hide()}else{this.clearElement();this.lookup()
}}}},scrollSafety:function(d){if(d.target.tagName=="UL"){this.$element.off("blur")}},clearElement:function(){this.$element.val("").focus()
},clearTarget:function(){this.$source.val("");this.$target.val("");this.$container.removeClass("combobox-selected");
this.selected=false},triggerChange:function(){this.$source.trigger("change")},refresh:function(){this.source=this.parse();
this.options.items=this.source.length},listen:function(){this.$element.on("focus",b.proxy(this.focus,this)).on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));
if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this)).on("mouseleave","li",b.proxy(this.mouseleave,this));
this.$button.on("click",b.proxy(this.toggle,this))},eventSupported:function(d){var e=d in this.$element;
if(!e){this.$element.setAttribute(d,"return;");e=typeof this.$element[d]==="function"}return e},move:function(d){if(!this.shown){return
}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();break;case 38:d.preventDefault();this.prev();
break;case 40:d.preventDefault();this.next();break}d.stopPropagation()},keydown:function(d){this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);
this.move(d)},keypress:function(d){if(this.suppressKeyPressRepeat){return}this.move(d)},keyup:function(d){switch(d.keyCode){case 40:case 39:case 38:case 37:case 36:case 35:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();
break;default:this.clearTarget();this.lookup()}d.stopPropagation();d.preventDefault()},focus:function(d){this.focused=true
},blur:function(f){var d=this;this.focused=false;var g=this.$element.val();if(!this.selected&&g!==""){this.$element.val("");
this.$source.val("").trigger("change");this.$target.val("").trigger("change")}if(!this.mousedover&&this.shown){setTimeout(function(){d.hide()
},200)}},click:function(d){d.stopPropagation();d.preventDefault();this.select();this.$element.focus()
},mouseenter:function(d){this.mousedover=true;this.$menu.find(".active").removeClass("active");b(d.currentTarget).addClass("active")
},mouseleave:function(d){this.mousedover=false}};b.fn.combobox=function(d){return this.each(function(){var g=b(this),f=g.data("combobox"),e=typeof d=="object"&&d;
if(!f){g.data("combobox",(f=new a(this,e)))}if(typeof d=="string"){f[d]()}})};b.fn.combobox.defaults={bsVersion:"3",menu:'<ul class="typeahead typeahead-long dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'};
b.fn.combobox.Constructor=a}(window.jQuery);(function(b,a,d){var e=b();b.fn.dropdownHover=function(f){if("ontouchstart" in document){return this
}e=e.add(this.parent());return this.each(function(){var p=b(this),o=p.parent(),n={delay:500,instantlyCloseOthers:true},l={delay:b(this).data("delay"),instantlyCloseOthers:b(this).data("close-others")},g="show.bs.dropdown",m="hide.bs.dropdown",h=b.extend(true,{},n,f,l),k;
o.hover(function(q){if(!o.hasClass("open")&&!p.is(q.target)){return true}if(h.instantlyCloseOthers===true){e.removeClass("open")
}a.clearTimeout(k);o.addClass("open");p.trigger(g)},function(){k=a.setTimeout(function(){o.removeClass("open");
p.trigger(m)},h.delay)});p.hover(function(){if(h.instantlyCloseOthers===true){e.removeClass("open")}a.clearTimeout(k);
o.addClass("open");p.trigger(g)});o.find(".dropdown-submenu").each(function(){var r=b(this);var q;r.hover(function(){a.clearTimeout(q);
r.children(".dropdown-menu").show();r.siblings().children(".dropdown-menu").hide()},function(){var s=r.children(".dropdown-menu");
q=a.setTimeout(function(){s.hide()},h.delay)})})})};b(document).ready(function(){b('[data-hover="dropdown"]').dropdownHover()
})})(jQuery,this);function holderDropDown(){if($(window).width()<768){$(".accordion-mo-head").click(function(){$(this).next(".accordion-mo-info").toggle()
})}else{}}$(function(){holderDropDown()});!function(b){var a=function(d){this.element=b(d)};a.prototype={constructor:a,show:function(){var l=this.element,g=l.closest("ul:not(.dropdown-menu)"),f=l.attr("data-target"),h,d,k;
if(!f){f=l.attr("href");f=f&&f.replace(/.*(?=#[^\s]*$)/,"")}if(l.parent("li").hasClass("active")){return
}h=g.find(".active a").last()[0];k=b.Event("show",{relatedTarget:h});l.trigger(k);if(k.isDefaultPrevented()){return
}d=b(f);this.activate(l.parent("li"),g);this.activate(d,d.parent(),function(){l.trigger({type:"shown",relatedTarget:h})
})},activate:function(f,e,k){var d=e.find("> .active"),h=k&&b.support.transition&&d.hasClass("fade");
function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");f.addClass("active");
if(h){f[0].offsetWidth;f.addClass("in")}else{f.removeClass("fade")}if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")
}k&&k()}h?d.one(b.support.transition.end,g):g();d.removeClass("in")}};b.fn.tab=function(d){return this.each(function(){var f=b(this),e=f.data("tab");
if(!e){f.data("tab",(e=new a(this)))}if(typeof d=="string"){e[d]()}})};b.fn.tab.Constructor=a;b(function(){b("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();
b(this).tab("show")})})}(window.jQuery);!function(b){var d=function(f,e){this.init(f,e)};d.prototype={constructor:d,init:function(g,e){var f=this.$element=b(g);
this.options=b.extend({},b.fn.checkbox.defaults,e);f.before(this.options.template);this.setState()},setState:function(){var e=this.$element,f=e.closest(".checkbox");
e.prop("disabled")&&f.addClass("disabled");e.prop("checked")&&f.addClass("checked")},toggle:function(){var g="checked",f=this.$element,l=f.closest(".checkbox"),h=f.prop(g),k=b.Event("toggle");
if(f.prop("disabled")==false){l.toggleClass(g)&&h?f.removeAttr(g):f.prop(g,g);f.trigger(k).trigger("change")
}},setCheck:function(k){var n="disabled",h="checked",g=this.$element,m=g.closest(".checkbox"),f=k=="check"?true:false,l=b.Event(k);
m[f?"addClass":"removeClass"](h)&&f?g.prop(h,h):g.removeAttr(h);g.trigger(l).trigger("change")}};var a=b.fn.checkbox;
b.fn.checkbox=function(e){return this.each(function(){var h=b(this),g=h.data("checkbox"),f=b.extend({},b.fn.checkbox.defaults,h.data(),typeof e=="object"&&e);
if(!g){h.data("checkbox",(g=new d(this,f)))}if(e=="toggle"){g.toggle()}if(e=="check"||e=="uncheck"){g.setCheck(e)
}else{if(e){g.setState()}}})};b.fn.checkbox.defaults={template:'<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>'};
b.fn.checkbox.noConflict=function(){b.fn.checkbox=a;return this};b(document).on("click.checkbox.data-api","[data-toggle^=checkbox], .checkbox",function(g){var f=b(g.target);
if(g.target.tagName!="A"){g&&g.preventDefault()&&g.stopPropagation();if(!f.hasClass("checkbox")){f=f.closest(".checkbox")
}f.find(":checkbox").checkbox("toggle")}});b(function(){b('[data-toggle="checkbox"]').each(function(){var e=b(this);
e.checkbox()})})}(window.jQuery);!function(b){var d=function(f,e){this.init(f,e)};d.prototype={constructor:d,init:function(g,e){var f=this.$element=b(g);
this.options=b.extend({},b.fn.radio.defaults,e);f.before(this.options.template);this.setState()},setState:function(){var e=this.$element,f=e.closest(".radio");
e.prop("disabled")&&f.addClass("disabled");e.prop("checked")&&f.addClass("checked")},toggle:function(){var o="disabled",h="checked",g=this.$element,k=g.prop(h),m=g.closest(".radio"),n=g.closest("form").length?g.closest("form"):g.closest("body"),f=n.find(':radio[name="'+g.attr("name")+'"]'),l=b.Event("toggle");
f.not(g).each(function(){var e=b(this),p=b(this).closest(".radio");if(e.prop(o)==false){p.removeClass(h)&&e.removeAttr(h).trigger("change")
}});if(g.prop(o)==false){if(k==false){m.addClass(h)&&g.prop(h,true)}g.trigger(l);if(k!==g.prop(h)){g.trigger("change")
}}},setCheck:function(k){var f="checked",p=this.$element,h=p.closest(".radio"),g=k=="check"?true:false,m=p.prop(f),n=p.closest("form").length?p.closest("form"):p.closest("body"),o=n.find(':radio[name="'+p.attr("name")+'"]'),l=b.Event(k);
o.not(p).each(function(){var e=b(this),q=b(this).closest(".radio");q.removeClass(f)&&e.removeAttr(f)});
h[g?"addClass":"removeClass"](f)&&g?p.prop(f,f):p.removeAttr(f);p.trigger(l);if(m!==p.prop(f)){p.trigger("change")
}}};var a=b.fn.radio;b.fn.radio=function(e){return this.each(function(){var h=b(this),g=h.data("radio"),f=b.extend({},b.fn.radio.defaults,h.data(),typeof e=="object"&&e);
if(!g){h.data("radio",(g=new d(this,f)))}if(e=="toggle"){g.toggle()}if(e=="check"||e=="uncheck"){g.setCheck(e)
}else{if(e){g.setState()}}})};b.fn.radio.defaults={template:'<span class="icons"><span class="first-icon fui-radio-unchecked"></span><span class="second-icon fui-radio-checked"></span></span>'};
b.fn.radio.noConflict=function(){b.fn.radio=a;return this};b(document).on("click.radio.data-api","[data-toggle^=radio], .radio",function(g){var f=b(g.target);
g&&g.preventDefault()&&g.stopPropagation();if(!f.hasClass("radio")){f=f.closest(".radio")}f.find(":radio").radio("toggle")
});b(function(){b('[data-toggle="radio"]').each(function(){var e=b(this);e.radio()})})}(window.jQuery);
+function(d){var b=window.navigator.appName=="Microsoft Internet Explorer";var a=function(g,f){this.$element=d(g);
this.$input=this.$element.find(":file");if(this.$input.length===0){return}this.name=this.$input.attr("name")||f.name;
this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]');if(this.$hidden.length===0){this.$hidden=d('<input type="hidden" />');
this.$element.prepend(this.$hidden)}this.$preview=this.$element.find(".fileinput-preview");var e=this.$preview.css("height");
if(this.$preview.css("display")!="inline"&&e!="0px"&&e!="none"){this.$preview.css("line-height",e)}this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()};
this.inline_flag=this.$element.find(".input-group").length;if(this.inline_flag){this.$change=this.$element.find('[data-role="change"]');
this.$select_file=this.$element.find('[data-role="select-file"]')}this.listen()};a.prototype.listen=function(){this.$input.on("change.bs.fileinput",d.proxy(this.change,this));
d(this.$input[0].form).on("reset.bs.fileinput",d.proxy(this.reset,this));if(this.inline_flag){this.$element.on("mousemove.bs.fileinput",d.proxy(this.checkmove,this)).on("mouseout.bs.fileinput",d.proxy(this.resetControlsClass,this)).on("mousedown.bs.fileinput",d.proxy(this.activateControls,this))
}this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",d.proxy(this.trigger,this));
this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",d.proxy(this.clear,this))},a.prototype.change=function(l){if(l.target.files===undefined){l.target.files=l.target&&l.target.value?[{name:l.target.value.replace(/^.+\\/,"")}]:[]
}if(l.target.files.length===0){return}this.$hidden.val("");this.$hidden.attr("name","");this.$input.attr("name",this.name);
var h=l.target.files[0];if(this.$preview.length>0&&(typeof h.type!=="undefined"?h.type.match("image.*"):h.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!=="undefined"){var f=new FileReader();
var k=this.$preview;var g=this.$element;f.onload=function(m){var e=d("<img>");e[0].src=m.target.result;
l.target.files[0].result=m.target.result;g.find(".fileinput-filename").text(h.name);if(k.css("max-height")!="none"){e.css("max-height",parseInt(k.css("max-height"),10)-parseInt(k.css("padding-top"),10)-parseInt(k.css("padding-bottom"),10)-parseInt(k.css("border-top"),10)-parseInt(k.css("border-bottom"),10))
}k.html(e);g.addClass("fileinput-exists").removeClass("fileinput-new");g.trigger("change.bs.fileinput",l.target.files)
};f.readAsDataURL(h)}else{this.$element.find(".fileinput-filename").text(h.name);this.$preview.text(h.name);
this.$element.addClass("fileinput-exists").removeClass("fileinput-new");this.$element.trigger("change.bs.fileinput")
}},a.prototype.clear=function(g){if(g){g.preventDefault()}this.$hidden.val("");this.$hidden.attr("name",this.name);
this.$input.attr("name","");if(b){var f=this.$input.clone(true);this.$input.after(f);this.$input.remove();
this.$input=f}else{this.$input.val("")}this.$preview.html("");this.$element.find(".fileinput-filename").text("");
this.$element.addClass("fileinput-new").removeClass("fileinput-exists");if(g!==false){this.$input.trigger("change");
this.$element.trigger("clear.bs.fileinput")}},a.prototype.reset=function(){this.clear(false);this.$hidden.val(this.original.hiddenVal);
this.$preview.html(this.original.preview);this.$element.find(".fileinput-filename").text("");if(this.original.exists){this.$element.addClass("fileinput-exists").removeClass("fileinput-new")
}else{this.$element.addClass("fileinput-new").removeClass("fileinput-exists")}this.$element.trigger("reset.bs.fileinput")
},a.prototype.checkmove=function(g){var f=this.$select_file.offset()["left"],h=this.$change.offset()["left"];
if(this.$change.is(":hidden")){if(g.pageX>f&&g.pageX<f+this.$select_file.width()){this.$select_file.addClass("hover")
}else{this.$select_file.removeClass("hover")}}else{if(g.pageX>h&&g.pageX<h+this.$select_file.width()){this.$change.addClass("hover")
}else{this.$change.removeClass("hover")}}},a.prototype.activateControls=function(){if(this.$change.is(":hidden")){this.$select_file.addClass("active")
}else{this.$change.addClass("active")}},a.prototype.resetControlsClass=function(){this.$change.removeClass("hover active");
this.$select_file.removeClass("hover active")},a.prototype.trigger=function(f){this.$input.trigger("click");
f.preventDefault()};d.fn.fileinput=function(e){return this.each(function(){var g=d(this),f=g.data("fileinput");
if(!f){g.data("fileinput",(f=new a(this,e)))}if(typeof e=="string"){f[e]()}})};d.fn.fileinput.Constructor=a;
d(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(g){var f=d(g.target).closest('[data-dismiss="fileinput"], [data-trigger="fileinput"]');
if(f.length>0){g.preventDefault()}});d(function(){d('[data-provides="fileinput"]').each(function(){var e=d(this);
if(e.data("fileinput")){return}e.fileinput(e.data())})})}(window.jQuery);var Holder=Holder||{};(function(h,d){var v=false,o=false,b=document.createElement("canvas");
if(!b.getContext){o=true}else{if(b.toDataURL("image/png").indexOf("data:image/png")<0){o=true}else{var n=b.getContext("2d")
}}var a=1,u=1;if(!o){a=window.devicePixelRatio||1,u=n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1
}var f=a/u;document.getElementsByClassName||(document.getElementsByClassName=function(B){var y=document,C,A,x,z=[];
if(y.querySelectorAll){return y.querySelectorAll("."+B)}if(y.evaluate){A=".//*[contains(concat(' ', @class, ' '), ' "+B+" ')]",C=y.evaluate(A,y,null,0,null);
while(x=C.iterateNext()){z.push(x)}}else{C=y.getElementsByTagName("*"),A=new RegExp("(^|\\s)"+B+"(\\s|$)");
for(x=0;x<C.length;x++){A.test(C[x].className)&&z.push(C[x])}}return z});window.getComputedStyle||(window.getComputedStyle=function(x){return this.el=x,this.getPropertyValue=function(y){var z=/(\-([a-z]){1})/g;
return y=="float"&&(y="styleFloat"),z.test(y)&&(y=y.replace(z,function(){return arguments[2].toUpperCase()
})),x.currentStyle[y]?x.currentStyle[y]:null},this});function t(A,L){var B="complete",M="readystatechange",K=!1,D=K,G=!0,C=A.document,I=C.documentElement,F=C.addEventListener?"addEventListener":"attachEvent",J=C.addEventListener?"removeEventListener":"detachEvent",E=C.addEventListener?"":"on",x=function(y){(y.type!=M||C.readyState==B)&&((y.type=="load"?A:C)[J](E+y.type,x,K),!D&&(D=!0)&&L.call(A,null))
},z=function(){try{I.doScroll("left")}catch(y){setTimeout(z,50);return}x("poll")};if(C.readyState==B){L.call(A,"lazy")
}else{if(C.createEventObject&&I.doScroll){try{G=!A.frameElement}catch(H){}G&&z()}C[F](E+"DOMContentLoaded",x,K),C[F](E+M,x,K),A[F](E+"load",x,K)
}}function p(y){y=y.match(/^(\W)?(.*)/);var x=document["getElement"+(y[1]?y[1]=="#"?"ById":"sByClassName":"sByTagName")](y[2]);
var z=[];x!==null&&(x.length?z=x:x.length===0?z=x:z=[x]);return z}function s(y,x){var B={};for(var A in y){B[A]=y[A]
}for(var z in x){B[z]=x[z]}return B}if(!Object.prototype.hasOwnProperty){Object.prototype.hasOwnProperty=function(y){var x=this.__proto__||this.constructor.prototype;
return(y in this)&&(!(y in x)||x[y]!==this[y])}}function m(C,y,B){y=parseInt(y,10);C=parseInt(C,10);var x=Math.max(y,C);
var A=Math.min(y,C);var D=1/12;var z=Math.min(A*0.75,0.75*x*D);return{height:Math.round(Math.max(B.size,z))}
}function l(I,x,F,D,E){var B=m(x.width,x.height,F);var C=B.height;var z=x.width*D,H=x.height*D;var A=F.font?F.font:"sans-serif";
b.width=z;b.height=H;I.textAlign="center";I.textBaseline="middle";I.fillStyle=F.background;I.fillRect(0,0,z,H);
I.fillStyle=F.foreground;I.font="bold "+C+"px "+A;var G=F.text?F.text:(Math.floor(x.width)+"x"+Math.floor(x.height));
if(E){G=F.literalText}var y=I.measureText(G).width;if(y/z>=0.75){C=Math.floor(C*0.75*(z/y))}I.font="bold "+(C*D)+"px "+A;
I.fillText(G,(z/2),(H/2),z);return b.toDataURL("image/png")}function w(E,z,y,D){var A=y.dimensions,B=y.theme,C=y.text?decodeURIComponent(y.text):y.text;
var x=A.width+"x"+A.height;B=(C?s(B,{text:C}):B);B=(y.font?s(B,{font:y.font}):B);z.setAttribute("data-src",D);
B.literalText=x;y.originalTheme=y.theme;y.theme=B;if(E=="image"){z.setAttribute("alt",C?C:B.text?B.text+" ["+x+"]":x);
if(o||!y.auto){z.style.width=A.width+"px";z.style.height=A.height+"px"}if(o){z.style.backgroundColor=B.background
}else{z.setAttribute("src",l(n,A,B,f))}}else{if(E=="background"){if(!o){z.style.backgroundImage="url("+l(n,A,B,f)+")";
z.style.backgroundSize=A.width+"px "+A.height+"px"}}else{if(E=="fluid"){z.setAttribute("alt",C?C:B.text?B.text+" ["+x+"]":x);
if(A.height.slice(-1)=="%"){z.style.height=A.height}else{z.style.height=A.height+"px"}if(A.width.slice(-1)=="%"){z.style.width=A.width
}else{z.style.width=A.width+"px"}if(z.style.display=="inline"||z.style.display===""){z.style.display="block"
}if(o){z.style.backgroundColor=B.background}else{z.holderData=y;k.push(z);g(z)}}}}}function g(A){var x;
if(A.nodeType==null){x=k}else{x=[A]}for(var z in x){var B=x[z];if(B.holderData){var y=B.holderData;B.setAttribute("src",l(n,{height:B.clientHeight,width:B.clientWidth},y.theme,f,!!y.literal))
}}}function e(y,A){var z={theme:r.themes.gray};var B=false;for(sl=y.length,j=0;j<sl;j++){var x=y[j];if(h.flags.dimensions.match(x)){B=true;
z.dimensions=h.flags.dimensions.output(x)}else{if(h.flags.fluid.match(x)){B=true;z.dimensions=h.flags.fluid.output(x);
z.fluid=true}else{if(h.flags.literal.match(x)){z.literal=true}else{if(h.flags.colors.match(x)){z.theme=h.flags.colors.output(x)
}else{if(A.themes[x]){z.theme=A.themes[x]}else{if(h.flags.font.match(x)){z.font=h.flags.font.output(x)
}else{if(h.flags.auto.match(x)){z.auto=true}else{if(h.flags.text.match(x)){z.text=h.flags.text.output(x)
}}}}}}}}}return B?z:false}var k=[];var r={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}},stylesheet:""};
h.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(y){var x=this.regex.exec(y);return{width:+x[1],height:+x[2]}
}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(y){var x=this.regex.exec(y);return{width:x[1],height:x[2]}
}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(y){var x=this.regex.exec(y);return{size:r.themes.gray.size,foreground:"#"+x[2],background:"#"+x[1]}
}},text:{regex:/text\:(.*)/,output:function(x){return this.regex.exec(x)[1]}},font:{regex:/font\:(.*)/,output:function(x){return this.regex.exec(x)[1]
}},auto:{regex:/^auto$/},literal:{regex:/^literal$/}};for(var q in h.flags){if(!h.flags.hasOwnProperty(q)){continue
}h.flags[q].match=function(x){return x.match(this.regex)}}h.add_theme=function(x,y){x!=null&&y!=null&&(r.themes[x]=y);
return h};h.add_image=function(C,A){var B=p(A);if(B.length){for(var z=0,x=B.length;z<x;z++){var y=document.createElement("img");
y.setAttribute("data-src",C);B[z].appendChild(y)}}return h};h.run=function(y){var M=s(r,y),J=[],H=[],L=[];
if(typeof(M.images)=="string"){H=p(M.images)}else{if(window.NodeList&&M.images instanceof window.NodeList){H=M.images
}else{if(window.Node&&M.images instanceof window.Node){H=[M.images]}}}if(typeof(M.bgnodes)=="string"){L=p(M.bgnodes)
}else{if(window.NodeList&&M.elements instanceof window.NodeList){L=M.bgnodes}else{if(window.Node&&M.bgnodes instanceof window.Node){L=[M.bgnodes]
}}}v=true;for(D=0,B=H.length;D<B;D++){J.push(H[D])}var A=document.getElementById("holderjs-style");if(!A){A=document.createElement("style");
A.setAttribute("id","holderjs-style");A.type="text/css";document.getElementsByTagName("head")[0].appendChild(A)
}if(!M.nocss){if(A.styleSheet){A.styleSheet.cssText+=M.stylesheet}else{A.appendChild(document.createTextNode(M.stylesheet))
}}var I=new RegExp(M.domain+'/(.*?)"?\\)');for(var B=L.length,D=0;D<B;D++){var x=window.getComputedStyle(L[D],null).getPropertyValue("background-image");
var z=x.match(I);var G=L[D].getAttribute("data-background-src");if(z){var K=e(z[1].split("/"),M);if(K){w("background",L[D],K,x)
}}else{if(G!=null){var K=e(G.substr(G.lastIndexOf(M.domain)+M.domain.length+1).split("/"),M);if(K){w("background",L[D],K,x)
}}}}for(B=J.length,D=0;D<B;D++){var C,E;E=C=x=null;try{E=J[D].getAttribute("src");attr_datasrc=J[D].getAttribute("data-src")
}catch(F){}if(attr_datasrc==null&&!!E&&E.indexOf(M.domain)>=0){x=E}else{if(!!attr_datasrc&&attr_datasrc.indexOf(M.domain)>=0){x=attr_datasrc
}}if(x){var K=e(x.substr(x.lastIndexOf(M.domain)+M.domain.length+1).split("/"),M);if(K){if(K.fluid){w("fluid",J[D],K,x)
}else{w("image",J[D],K,x)}}}}return h};t(d,function(){if(window.addEventListener){window.addEventListener("resize",g,false);
window.addEventListener("orientationchange",g,false)}else{window.attachEvent("onresize",g)}v||h.run()
});if(typeof define==="function"&&define.amd){define([],function(){return h})}})(Holder,window);(function(d){var a=new Array();
var b=new Array();d.fn.doAutosize=function(k){var g=d(this).data("minwidth"),r=d(this).data("maxwidth"),m="",q=d(this),l=d("#"+d(this).data("tester_id"));
if(m===(m=q.val())){return}var f=m.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");
l.html(f);var p=l.width(),n=(p+k.comfortZone)>=g?p+k.comfortZone:g,h=q.width(),e=(n<h&&n>=g)||(n>g&&n<r);
if(e){q.width(n)}};d.fn.resetAutosize=function(g){var k=d(this).data("minwidth")||g.minInputWidth||d(this).width(),l=d(this).data("maxwidth")||g.maxInputWidth||(d(this).closest(".tagsinput").width()-g.inputPadding),m="",f=d(this),h=d("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:f.css("fontSize"),fontFamily:f.css("fontFamily"),fontWeight:f.css("fontWeight"),letterSpacing:f.css("letterSpacing"),whiteSpace:"nowrap"}),e=d(this).attr("id")+"_autosize_tester";
if(!d("#"+e).length>0){h.attr("id",e);h.appendTo("body")}f.data("minwidth",k);f.data("maxwidth",l);f.data("tester_id",e);
f.css("width",k)};d.fn.addTag=function(f,e){e=jQuery.extend({focus:false,callback:true},e);this.each(function(){var m=d(this).attr("id");
var g=d(this).val().split(a[m]);if(g[0]==""){g=new Array()}f=jQuery.trim(f);if(e.unique){var h=d(this).tagExist(f);
if(h==true){d("#"+m+"_tag").addClass("not_valid")}}else{var h=false}if(f!=""&&h!=true){d("<span>").addClass("tag").append(d("<span>").text(f).append("&nbsp;&nbsp;"),d('<a class="tagsinput-remove-link">',{href:"#",title:"Remove tag",text:""}).click(function(){return d("#"+m).removeTag(escape(f))
})).insertBefore("#"+m+"_addTag");g.push(f);d("#"+m+"_tag").val("");if(e.focus){d("#"+m+"_tag").focus()
}else{d("#"+m+"_tag").blur()}d.fn.tagsInput.updateTagsField(this,g);if(e.callback&&b[m]&&b[m]["onAddTag"]){var l=b[m]["onAddTag"];
l.call(this,f)}if(b[m]&&b[m]["onChange"]){var k=g.length;var l=b[m]["onChange"];l.call(this,d(this),g[k-1])
}}});return false};d.fn.removeTag=function(e){e=unescape(e);this.each(function(){var k=d(this).attr("id");
var g=d(this).val().split(a[k]);d("#"+k+"_tagsinput .tag").remove();str="";for(i=0;i<g.length;i++){if(g[i]!=e){str=str+a[k]+g[i]
}}d.fn.tagsInput.importTags(this,str);if(b[k]&&b[k]["onRemoveTag"]){var h=b[k]["onRemoveTag"];h.call(this,e)
}});return false};d.fn.tagExist=function(f){var g=d(this).attr("id");var e=d(this).val().split(a[g]);
return(jQuery.inArray(f,e)>=0)};d.fn.importTags=function(e){id=d(this).attr("id");d("#"+id+"_tagsinput .tag").remove();
d.fn.tagsInput.importTags(this,e)};d.fn.tagsInput=function(e){var f=jQuery.extend({interactive:true,defaultText:"",minChars:0,width:"",height:"",autocomplete:{selectFirst:false},hide:true,delimiter:",",unique:true,removeWithBackspace:true,placeholderColor:"#666666",autosize:true,comfortZone:20,inputPadding:6*2},e);
this.each(function(){if(f.hide){d(this).hide()}var l=d(this).attr("id");if(!l||a[d(this).attr("id")]){l=d(this).attr("id","tags"+new Date().getTime()).attr("id")
}var h=jQuery.extend({pid:l,real_input:"#"+l,holder:"#"+l+"_tagsinput",input_wrapper:"#"+l+"_addTag",fake_input:"#"+l+"_tag"},f);
a[l]=h.delimiter;if(f.onAddTag||f.onRemoveTag||f.onChange){b[l]=new Array();b[l]["onAddTag"]=f.onAddTag;
b[l]["onRemoveTag"]=f.onRemoveTag;b[l]["onChange"]=f.onChange}var k=d("#"+l).attr("class").replace("tagsinput","");
var g='<div id="'+l+'_tagsinput" class="tagsinput '+k+'"><div class="tagsinput-add-container" id="'+l+'_addTag"><div class="tagsinput-add"></div>';
if(f.interactive){g=g+'<input id="'+l+'_tag" value="" data-default="'+f.defaultText+'" />'}g=g+"</div></div>";
d(g).insertAfter(this);d(h.holder).css("width",f.width);d(h.holder).css("min-height",f.height);d(h.holder).css("height","100%");
if(d(h.real_input).val()!=""){d.fn.tagsInput.importTags(d(h.real_input),d(h.real_input).val())}if(f.interactive){d(h.fake_input).val(d(h.fake_input).attr("data-default"));
d(h.fake_input).css("color",f.placeholderColor);d(h.fake_input).resetAutosize(f);d(h.holder).bind("click",h,function(m){d(m.data.fake_input).focus()
});d(h.fake_input).bind("focus",h,function(m){if(d(m.data.fake_input).val()==d(m.data.fake_input).attr("data-default")){d(m.data.fake_input).val("")
}d(m.data.fake_input).css("color","#000000")});if(f.autocomplete_url!=undefined){autocomplete_options={source:f.autocomplete_url};
for(attrname in f.autocomplete){autocomplete_options[attrname]=f.autocomplete[attrname]}if(jQuery.Autocompleter!==undefined){d(h.fake_input).autocomplete(f.autocomplete_url,f.autocomplete);
d(h.fake_input).bind("result",h,function(m,o,n){if(o){d("#"+l).addTag(o[0]+"",{focus:true,unique:(f.unique)})
}})}else{if(jQuery.ui.autocomplete!==undefined){d(h.fake_input).autocomplete(autocomplete_options);d(h.fake_input).bind("autocompleteselect",h,function(m,n){d(m.data.real_input).addTag(n.item.value,{focus:true,unique:(f.unique)});
return false})}}}else{d(h.fake_input).bind("blur",h,function(m){var n=d(this).attr("data-default");if(d(m.data.fake_input).val()!=""&&d(m.data.fake_input).val()!=n){if((m.data.minChars<=d(m.data.fake_input).val().length)&&(!m.data.maxChars||(m.data.maxChars>=d(m.data.fake_input).val().length))){d(m.data.real_input).addTag(d(m.data.fake_input).val(),{focus:true,unique:(f.unique)})
}}else{d(m.data.fake_input).val(d(m.data.fake_input).attr("data-default"));d(m.data.fake_input).css("color",f.placeholderColor)
}return false})}d(h.fake_input).bind("keypress",h,function(m){if(m.which==m.data.delimiter.charCodeAt(0)||m.which==13){m.preventDefault();
if((m.data.minChars<=d(m.data.fake_input).val().length)&&(!m.data.maxChars||(m.data.maxChars>=d(m.data.fake_input).val().length))){d(m.data.real_input).addTag(d(m.data.fake_input).val(),{focus:true,unique:(f.unique)})
}d(m.data.fake_input).resetAutosize(f);return false}else{if(m.data.autosize){d(m.data.fake_input).doAutosize(f)
}}});h.removeWithBackspace&&d(h.fake_input).bind("keydown",function(n){if(n.keyCode==8&&d(this).val()==""){n.preventDefault();
var m=d(this).closest(".tagsinput").find(".tag:last").text();var o=d(this).attr("id").replace(/_tag$/,"");
m=m.replace(/[\s\u00a0]+x$/,"");d("#"+o).removeTag(escape(m));d(this).trigger("focus")}});d(h.fake_input).blur();
if(h.unique){d(h.fake_input).keydown(function(m){if(m.keyCode==8||String.fromCharCode(m.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)){d(this).removeClass("not_valid")
}})}}});return this};d.fn.tagsInput.updateTagsField=function(f,e){var g=d(f).attr("id");d(f).val(e.join(a[g]))
};d.fn.tagsInput.importTags=function(h,k){d(h).val("");var l=d(h).attr("id");var e=k.split(a[l]);for(i=0;
i<e.length;i++){d(h).addTag(e[i],{focus:false,callback:false})}if(b[l]&&b[l]["onChange"]){var g=b[l]["onChange"];
g.call(h,h,e[i])}}})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(h,l,e){var a="placeholder" in l.createElement("input"),f="placeholder" in l.createElement("textarea"),m=e.fn,d=e.valHooks,o,n;
if(a&&f){n=m.placeholder=function(){return this};n.input=n.textarea=true}else{n=m.placeholder=function(){var p=this;
p.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":b,"blur.placeholder":g}).data("placeholder-enabled",true).trigger("blur.placeholder");
return p};n.input=a;n.textarea=f;o={get:function(q){var p=e(q);return p.data("placeholder-enabled")&&p.hasClass("placeholder")?"":q.value
},set:function(q,r){var p=e(q);if(!p.data("placeholder-enabled")){return q.value=r}if(r==""){q.value=r;
if(q!=l.activeElement){g.call(q)}}else{if(p.hasClass("placeholder")){b.call(q,true,r)||(q.value=r)}else{q.value=r
}}return p}};a||(d.input=o);f||(d.textarea=o);e(function(){e(l).delegate("form","submit.placeholder",function(){var p=e(".placeholder",this).each(b);
setTimeout(function(){p.each(g)},10)})});e(h).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""
})})}function k(q){var p={},r=/^jQuery\d+$/;e.each(q.attributes,function(t,s){if(s.specified&&!r.test(s.name)){p[s.name]=s.value
}});return p}function b(q,r){var p=this,s=e(p);if(p.value==s.attr("placeholder")&&s.hasClass("placeholder")){if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));
if(q===true){return s[0].value=r}s.focus()}else{p.value="";s.removeClass("placeholder");p==l.activeElement&&p.select()
}}}function g(){var u,p=this,t=e(p),q=t,s=this.id;if(p.value==""){if(p.type=="password"){if(!t.data("placeholder-textinput")){try{u=t.clone().attr({type:"text"})
}catch(r){u=e("<input>").attr(e.extend(k(this),{type:"text"}))}u.removeAttr("name").data({"placeholder-password":true,"placeholder-id":s}).bind("focus.placeholder",b);
t.data({"placeholder-textinput":u,"placeholder-id":s}).before(u)}t=t.removeAttr("id").hide().prev().attr("id",s).show()
}t.addClass("placeholder");t[0].value=t.attr("placeholder")}else{t.removeClass("placeholder")}}}(this,document,jQuery));
/*!
 * typeahead.js 0.10.2
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */
(function(b){var u={isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false
},isBlankString:function(w){return !w||/^\s*$/.test(w)},escapeRegExChars:function(w){return w.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(w){return typeof w==="string"},isNumber:function(w){return typeof w==="number"},isArray:b.isArray,isFunction:b.isFunction,isObject:b.isPlainObject,isUndefined:function(w){return typeof w==="undefined"
},bind:b.proxy,each:function(y,w){b.each(y,x);function x(z,A){return w(A,z)}},map:b.map,filter:b.grep,every:function(x,y){var w=true;
if(!x){return w}b.each(x,function(z,A){if(!(w=y.call(null,A,z,x))){return false}});return !!w},some:function(x,y){var w=false;
if(!x){return w}b.each(x,function(z,A){if(w=y.call(null,A,z,x)){return false}});return !!w},mixin:b.extend,getUniqueId:function(){var w=0;
return function(){return w++}}(),templatify:function f(x){return b.isFunction(x)?x:w;function w(){return String(x)
}},defer:function(w){setTimeout(w,0)},debounce:function(y,A,x){var z,w;return function(){var E=this,D=arguments,C,B;
C=function(){z=null;if(!x){w=y.apply(E,D)}};B=x&&!z;clearTimeout(z);z=setTimeout(C,A);if(B){w=y.apply(E,D)
}return w}},throttle:function(B,D){var z,y,C,w,A,x;A=0;x=function(){A=new Date();C=null;w=B.apply(z,y)
};return function(){var E=new Date(),F=D-(E-A);z=this;y=arguments;if(F<=0){clearTimeout(C);C=null;A=E;
w=B.apply(z,y)}else{if(!C){C=setTimeout(x,F)}}return w}},noop:function(){}};var q="0.10.2";var r=function(x){return{nonword:w,whitespace:y,obj:{nonword:z(w),whitespace:z(y)}};
function y(A){return A.split(/\s+/)}function w(A){return A.split(/\W+/)}function z(B){return function A(C){return function D(E){return B(E[C])
}}}}();var e=function(){function x(D){this.maxSize=D||100;this.size=0;this.hash={};this.list=new A()}u.mixin(x.prototype,{set:function C(D,G){var F=this.list.tail,E;
if(this.size>=this.maxSize){this.list.remove(F);delete this.hash[F.key]}if(E=this.hash[D]){E.val=G;this.list.moveToFront(E)
}else{E=new y(D,G);this.list.add(E);this.hash[D]=E;this.size++}},get:function z(D){var E=this.hash[D];
if(E){this.list.moveToFront(E);return E.val}}});function A(){this.head=this.tail=null}u.mixin(A.prototype,{add:function B(D){if(this.head){D.next=this.head;
this.head.prev=D}this.head=D;this.tail=this.tail||D},remove:function w(D){D.prev?D.prev.next=D.next:this.head=D.next;
D.next?D.next.prev=D.prev:this.tail=D.prev},moveToFront:function(D){this.remove(D);this.add(D)}});function y(D,E){this.key=D;
this.val=E;this.prev=this.next=null}return x}();var s=function(){var w,x;try{w=window.localStorage;w.setItem("~~~","!");
w.removeItem("~~~")}catch(B){w=null}function z(D){this.prefix=["__",D,"__"].join("");this.ttlKey="__ttl__";
this.keyMatcher=new RegExp("^"+this.prefix)}if(w&&window.JSON){x={_prefix:function(D){return this.prefix+D
},_ttlKey:function(D){return this._prefix(D)+this.ttlKey},get:function(D){if(this.isExpired(D)){this.remove(D)
}return C(w.getItem(this._prefix(D)))},set:function(E,F,D){if(u.isNumber(D)){w.setItem(this._ttlKey(E),A(y()+D))
}else{w.removeItem(this._ttlKey(E))}return w.setItem(this._prefix(E),A(F))},remove:function(D){w.removeItem(this._ttlKey(D));
w.removeItem(this._prefix(D));return this},clear:function(){var F,E,G=[],D=w.length;for(F=0;F<D;F++){if((E=w.key(F)).match(this.keyMatcher)){G.push(E.replace(this.keyMatcher,""))
}}for(F=G.length;F--;){this.remove(G[F])}return this},isExpired:function(E){var D=C(w.getItem(this._ttlKey(E)));
return u.isNumber(D)&&y()>D?true:false}}}else{x={get:u.noop,set:u.noop,remove:u.noop,clear:u.noop,isExpired:u.noop}
}u.mixin(z.prototype,x);return z;function y(){return new Date().getTime()}function A(D){return JSON.stringify(u.isUndefined(D)?null:D)
}function C(D){return JSON.parse(D)}}();var t=function(){var y=0,z={},w=6,C=new e(10);function D(E){E=E||{};
this._send=E.transport?A(E.transport):b.ajax;this._get=E.rateLimiter?E.rateLimiter(this._get):this._get
}D.setMaxPendingRequests=function x(E){w=E};D.resetCache=function B(){C=new e(10)};u.mixin(D.prototype,{_get:function(I,L,F){var K=this,J;
if(J=z[I]){J.done(H).fail(G)}else{if(y<w){y++;z[I]=this._send(I,L).done(H).fail(G).always(E)}else{this.onDeckRequestArgs=[].slice.call(arguments,0)
}}function H(M){F&&F(null,M);C.set(I,M)}function G(){F&&F(true)}function E(){y--;delete z[I];if(K.onDeckRequestArgs){K._get.apply(K,K.onDeckRequestArgs);
K.onDeckRequestArgs=null}}},get:function(F,H,E){var G;if(u.isFunction(H)){E=H;H={}}if(G=C.get(F)){u.defer(function(){E&&E(null,G)
})}else{this._get(F,H,E)}return !!G}});return D;function A(E){return function F(H,K){var G=b.Deferred();
E(H,K,J,I);return G;function J(L){u.defer(function(){G.resolve(L)})}function I(L){u.defer(function(){G.reject(L)
})}}}}();var m=function(){function w(F){F=F||{};if(!F.datumTokenizer||!F.queryTokenizer){b.error("datumTokenizer and queryTokenizer are both required")
}this.datumTokenizer=F.datumTokenizer;this.queryTokenizer=F.queryTokenizer;this.reset()}u.mixin(w.prototype,{bootstrap:function y(F){this.datums=F.datums;
this.trie=F.trie},add:function(G){var F=this;G=u.isArray(G)?G:[G];u.each(G,function(H){var J,I;J=F.datums.push(H)-1;
I=A(F.datumTokenizer(H));u.each(I,function(K){var N,M,L;N=F.trie;M=K.split("");while(L=M.shift()){N=N.children[L]||(N.children[L]=D());
N.ids.push(J)}})})},get:function x(H){var F=this,I,G;I=A(this.queryTokenizer(H));u.each(I,function(J){var N,M,L,K;
if(G&&G.length===0){return false}N=F.trie;M=J.split("");while(N&&(L=M.shift())){N=N.children[L]}if(N&&M.length===0){K=N.ids.slice(0);
G=G?B(G,K):K}else{G=[];return false}});return G?u.map(z(G),function(J){return F.datums[J]}):[]},reset:function C(){this.datums=[];
this.trie=D()},serialize:function E(){return{datums:this.datums,trie:this.trie}}});return w;function A(F){F=u.filter(F,function(G){return !!G
});F=u.map(F,function(G){return G.toLowerCase()});return F}function D(){return{ids:[],children:{}}}function z(I){var F={},H=[];
for(var G=0;G<I.length;G++){if(!F[I[G]]){F[I[G]]=true;H.push(I[G])}}return H}function B(I,G){var F=0,H=0,K=[];
I=I.sort(J);G=G.sort(J);while(F<I.length&&H<G.length){if(I[F]<G[H]){F++}else{if(I[F]>G[H]){H++}else{K.push(I[F]);
F++;H++}}}return K;function J(M,L){return M-L}}}();var h=function(){return{local:y,prefetch:w,remote:x};
function y(z){return z.local||null}function w(B){var A,z;z={url:null,thumbprint:"",ttl:24*60*60*1000,filter:null,ajax:{}};
if(A=B.prefetch||null){A=u.isString(A)?{url:A}:A;A=u.mixin(z,A);A.thumbprint=q+A.thumbprint;A.ajax.type=A.ajax.type||"GET";
A.ajax.dataType=A.ajax.dataType||"json";!A.url&&b.error("prefetch requires url to be set")}return A}function x(D){var B,C;
C={url:null,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}};
if(B=D.remote||null){B=u.isString(B)?{url:B}:B;B=u.mixin(C,B);B.rateLimiter=/^throttle$/i.test(B.rateLimitBy)?A(B.rateLimitWait):z(B.rateLimitWait);
B.ajax.type=B.ajax.type||"GET";B.ajax.dataType=B.ajax.dataType||"json";delete B.rateLimitBy;delete B.rateLimitWait;
!B.url&&b.error("remote requires url to be set")}return B;function z(E){return function(F){return u.debounce(F,E)
}}function A(E){return function(F){return u.throttle(F,E)}}}}();(function(H){var w,C;w=H.Bloodhound;C={data:"data",protocol:"protocol",thumbprint:"thumbprint"};
H.Bloodhound=y;function y(O){if(!O||!O.local&&!O.prefetch&&!O.remote){b.error("one of local, prefetch, or remote is required")
}this.limit=O.limit||5;this.sorter=F(O.sorter);this.dupDetector=O.dupDetector||E;this.local=h.local(O);
this.prefetch=h.prefetch(O);this.remote=h.remote(O);this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null;
this.index=new m({datumTokenizer:O.datumTokenizer,queryTokenizer:O.queryTokenizer});this.storage=this.cacheKey?new s(this.cacheKey):null
}y.noConflict=function N(){H.Bloodhound=w;return y};y.tokenizers=r;u.mixin(y.prototype,{_loadPrefetch:function z(S){var P=this,R,O;
if(R=this._readFromStorage(S.thumbprint)){this.index.bootstrap(R);O=b.Deferred().resolve()}else{O=b.ajax(S.url,S.ajax).done(Q)
}return O;function Q(T){P.clear();P.add(S.filter?S.filter(T):T);P._saveToStorage(P.index.serialize(),S.thumbprint,S.ttl)
}},_getFromRemote:function B(T,O){var S=this,Q,R;T=T||"";R=encodeURIComponent(T);Q=this.remote.replace?this.remote.replace(this.remote.url,T):this.remote.url.replace(this.remote.wildcard,R);
return this.transport.get(Q,this.remote.ajax,P);function P(U,V){U?O([]):O(S.remote.filter?S.remote.filter(V):V)
}},_saveToStorage:function I(Q,P,O){if(this.storage){this.storage.set(C.data,Q,O);this.storage.set(C.protocol,location.protocol,O);
this.storage.set(C.thumbprint,P,O)}},_readFromStorage:function M(P){var O={},Q;if(this.storage){O.data=this.storage.get(C.data);
O.protocol=this.storage.get(C.protocol);O.thumbprint=this.storage.get(C.thumbprint)}Q=O.thumbprint!==P||O.protocol!==location.protocol;
return O.data&&!Q?O.data:null},_initialize:function x(){var R=this,Q=this.local,O;O=this.prefetch?this._loadPrefetch(this.prefetch):b.Deferred().resolve();
Q&&O.done(P);this.transport=this.remote?new t(this.remote):null;return this.initPromise=O.promise();function P(){R.add(u.isFunction(Q)?Q():Q)
}},initialize:function x(O){return !this.initPromise||O?this._initialize():this.initPromise},add:function D(O){this.index.add(O)
},get:function K(S,O){var Q=this,R=[],P=false;R=this.index.get(S);R=this.sorter(R).slice(0,this.limit);
if(R.length<this.limit&&this.transport){P=this._getFromRemote(S,T)}if(!P){(R.length>0||!this.transport)&&O&&O(R)
}function T(V){var U=R.slice(0);u.each(V,function(X){var W;W=u.some(U,function(Y){return Q.dupDetector(X,Y)
});!W&&U.push(X);return U.length<Q.limit});O&&O(Q.sorter(U))}},clear:function G(){this.index.reset()},clearPrefetchCache:function A(){this.storage&&this.storage.clear()
},clearRemoteCache:function J(){this.transport&&t.resetCache()},ttAdapter:function L(){return u.bind(this.get,this)
}});return y;function F(P){return u.isFunction(P)?O:Q;function O(R){return R.sort(P)}function Q(R){return R
}}function E(){return false}})(this);var l={wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'};
var k={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};
if(u.isMsie()){u.mixin(k.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"})
}if(u.isMsie()&&u.isMsie()<=7){u.mixin(k.input,{marginTop:"-1px"})}var a=function(){var x="typeahead:";
function w(y){if(!y||!y.el){b.error("EventBus initialized without el")}this.$el=b(y.el)}u.mixin(w.prototype,{trigger:function(z){var y=[].slice.call(arguments,1);
this.$el.trigger(x+z,y)}});return w}();var g=function(){var y=/\s+/,C=w();return{onSync:D,onAsync:x,off:z,trigger:A};
function E(K,I,G,H){var J;if(!G){return this}I=I.split(y);G=H?F(G,H):G;this._callbacks=this._callbacks||{};
while(J=I.shift()){this._callbacks[J]=this._callbacks[J]||{sync:[],async:[]};this._callbacks[J][K].push(G)
}return this}function x(I,G,H){return E.call(this,"async",I,G,H)}function D(I,G,H){return E.call(this,"sync",I,G,H)
}function z(G){var H;if(!this._callbacks){return this}G=G.split(y);while(H=G.shift()){delete this._callbacks[H]
}return this}function A(H){var I,J,G,K,L;if(!this._callbacks){return this}H=H.split(y);G=[].slice.call(arguments,1);
while((I=H.shift())&&(J=this._callbacks[I])){K=B(J.sync,this,[I].concat(G));L=B(J.async,this,[I].concat(G));
K()&&C(L)}return this}function B(J,I,H){return G;function G(){var L;for(var K=0;!L&&K<J.length;K+=1){L=J[K].apply(I,H)===false
}return !L}}function w(){var H;if(window.setImmediate){H=function I(J){setImmediate(function(){J()})}
}else{H=function G(J){setTimeout(function(){J()},0)}}return H}function F(H,G){return H.bind?H.bind(G):function(){H.apply(G,[].slice.call(arguments,0))
}}}();var d=function(z){var y={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:false,caseSensitive:false};
return function x(D){var A;D=u.mixin({},y,D);if(!D.node||!D.pattern){return}D.pattern=u.isArray(D.pattern)?D.pattern:[D.pattern];
A=w(D.pattern,D.caseSensitive,D.wordsOnly);B(D.node,C);function C(G){var F,E;if(F=A.exec(G.data)){wrapperNode=z.createElement(D.tagName);
D.className&&(wrapperNode.className=D.className);E=G.splitText(F.index);E.splitText(F[0].length);wrapperNode.appendChild(E.cloneNode(true));
G.parentNode.replaceChild(wrapperNode,E)}return !!F}function B(H,I){var F,G=3;for(var E=0;E<H.childNodes.length;
E++){F=H.childNodes[E];if(F.nodeType===G){E+=I(F)?1:0}else{B(F,I)}}}};function w(C,A,F){var E=[],D;for(var B=0;
B<C.length;B++){E.push(u.escapeRegExChars(C[B]))}D=F?"\\b("+E.join("|")+")\\b":"("+E.join("|")+")";return A?new RegExp(D):new RegExp(D,"i")
}}(window.document);var o=function(){var S;S={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};
function P(ab){var Z=this,aa,W,Y,X;ab=ab||{};if(!ab.input){b.error("input is missing")}aa=u.bind(this._onBlur,this);
W=u.bind(this._onFocus,this);Y=u.bind(this._onKeydown,this);X=u.bind(this._onInput,this);this.$hint=b(ab.hint);
this.$input=b(ab.input).on("blur.tt",aa).on("focus.tt",W).on("keydown.tt",Y);if(this.$hint.length===0){this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=u.noop
}if(!u.isMsie()){this.$input.on("input.tt",X)}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(ac){if(S[ac.which||ac.keyCode]){return
}u.defer(u.bind(Z._onInput,Z,ac))})}this.query=this.$input.val();this.$overflowHelper=I(this.$input)}P.normalizeQuery=function(W){return(W||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")
};u.mixin(P.prototype,g,{_onBlur:function G(){this.resetInputValue();this.trigger("blurred")},_onFocus:function A(){this.trigger("focused")
},_onKeydown:function U(W){var X=S[W.which||W.keyCode];this._managePreventDefault(X,W);if(X&&this._shouldTrigger(X,W)){this.trigger(X+"Keyed",W)
}},_onInput:function x(){this._checkInputValue()},_managePreventDefault:function C(aa,Z){var Y,X,W;switch(aa){case"tab":X=this.getHint();
W=this.getInputValue();Y=X&&X!==W&&!J(Z);break;case"up":case"down":Y=!J(Z);break;default:Y=false}Y&&Z.preventDefault()
},_shouldTrigger:function V(Y,X){var W;switch(Y){case"tab":W=!J(X);break;default:W=true}return W},_checkInputValue:function D(){var W,X,Y;
W=this.getInputValue();X=F(W,this.query);Y=X?this.query.length!==W.length:false;if(!X){this.trigger("queryChanged",this.query=W)
}else{if(Y){this.trigger("whitespaceChanged",this.query)}}},focus:function L(){this.$input.focus()},blur:function Q(){this.$input.blur()
},getQuery:function N(){return this.query},setQuery:function M(W){this.query=W},getInputValue:function B(){return this.$input.val()
},setInputValue:function E(X,W){this.$input.val(X);W?this.clearHint():this._checkInputValue()},resetInputValue:function z(){this.setInputValue(this.query,true)
},getHint:function y(){return this.$hint.val()},setHint:function R(W){this.$hint.val(W)},clearHint:function H(){this.setHint("")
},clearHintIfInvalid:function w(){var Z,Y,W,X;Z=this.getInputValue();Y=this.getHint();W=Z!==Y&&Y.indexOf(Z)===0;
X=Z!==""&&W&&!this.hasOverflow();!X&&this.clearHint()},getLanguageDirection:function K(){return(this.$input.css("direction")||"ltr").toLowerCase()
},hasOverflow:function O(){var W=this.$input.width()-2;this.$overflowHelper.text(this.getInputValue());
return this.$overflowHelper.width()>=W},isCursorAtEnd:function(){var X,Y,W;X=this.$input.val().length;
Y=this.$input[0].selectionStart;if(u.isNumber(Y)){return Y===X}else{if(document.selection){W=document.selection.createRange();
W.moveStart("character",-X);return X===W.text.length}}return true},destroy:function T(){this.$hint.off(".tt");
this.$input.off(".tt");this.$hint=this.$input=this.$overflowHelper=null}});return P;function I(W){return b('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:W.css("font-family"),fontSize:W.css("font-size"),fontStyle:W.css("font-style"),fontVariant:W.css("font-variant"),fontWeight:W.css("font-weight"),wordSpacing:W.css("word-spacing"),letterSpacing:W.css("letter-spacing"),textIndent:W.css("text-indent"),textRendering:W.css("text-rendering"),textTransform:W.css("text-transform")}).insertAfter(W)
}function F(X,W){return P.normalizeQuery(X)===P.normalizeQuery(W)}function J(W){return W.altKey||W.ctrlKey||W.metaKey||W.shiftKey
}}();var v=function(){var x="ttDataset",L="ttValue",F="ttDatum";function w(M){M=M||{};M.templates=M.templates||{};
if(!M.source){b.error("missing source")}if(M.name&&!z(M.name)){b.error("invalid dataset name: "+M.name)
}this.query=null;this.highlight=!!M.highlight;this.name=M.name||u.getUniqueId();this.source=M.source;
this.displayFn=A(M.display||M.displayKey);this.templates=B(M.templates,this.displayFn);this.$el=b(l.dataset.replace("%CLASS%",this.name))
}w.extractDatasetName=function J(M){return b(M).data(x)};w.extractValue=function G(M){return b(M).data(L)
};w.extractDatum=function G(M){return b(M).data(F)};u.mixin(w.prototype,g,{_render:function y(S,M){if(!this.$el){return
}var R=this,O;this.$el.empty();O=M&&M.length;if(!O&&this.templates.empty){this.$el.html(N()).prepend(R.templates.header?Q():null).append(R.templates.footer?P():null)
}else{if(O){this.$el.html(T()).prepend(R.templates.header?Q():null).append(R.templates.footer?P():null)
}}this.trigger("rendered");function N(){return R.templates.empty({query:S,isEmpty:true})}function T(){var V,U;
V=b(l.suggestions).css(k.suggestions);U=u.map(M,W);V.append.apply(V,U);R.highlight&&d({node:V[0],pattern:S});
return V;function W(X){var Y;Y=b(l.suggestion).append(R.templates.suggestion(X)).data(x,R.name).data(L,R.displayFn(X)).data(F,X);
Y.children().each(function(){b(this).css(k.suggestionChild)});return Y}}function Q(){return R.templates.header({query:S,isEmpty:!O})
}function P(){return R.templates.footer({query:S,isEmpty:!O})}},getRoot:function H(){return this.$el},update:function C(O){var N=this;
this.query=O;this.canceled=false;this.source(O,M);function M(P){if(!N.canceled&&O===N.query){N._render(O,P)
}}},cancel:function K(){this.canceled=true},clear:function E(){this.cancel();this.$el.empty();this.trigger("rendered")
},isEmpty:function D(){return this.$el.is(":empty")},destroy:function I(){this.$el=null}});return w;function A(M){M=M||"value";
return u.isFunction(M)?M:N;function N(O){return O[M]}}function B(N,O){return{empty:N.empty&&u.templatify(N.empty),header:N.header&&u.templatify(N.header),footer:N.footer&&u.templatify(N.footer),suggestion:N.suggestion||M};
function M(P){return"<p>"+O(P)+"</p>"}}function z(M){return/^[_a-zA-Z0-9-]+$/.test(M)}}();var p=function(){function P(Y){var W=this,U,X,V;
Y=Y||{};if(!Y.menu){b.error("menu is required")}this.isOpen=false;this.isEmpty=true;this.datasets=u.map(Y.datasets,G);
U=u.bind(this._onSuggestionClick,this);X=u.bind(this._onSuggestionMouseEnter,this);V=u.bind(this._onSuggestionMouseLeave,this);
this.$menu=b(Y.menu).on("click.tt",".tt-suggestion",U).on("mouseenter.tt",".tt-suggestion",X).on("mouseleave.tt",".tt-suggestion",V);
u.each(this.datasets,function(Z){W.$menu.append(Z.getRoot());Z.onSync("rendered",W._onRendered,W)})}u.mixin(P.prototype,g,{_onSuggestionClick:function O(U){this.trigger("suggestionClicked",b(U.currentTarget))
},_onSuggestionMouseEnter:function w(U){this._removeCursor();this._setCursor(b(U.currentTarget),true)
},_onSuggestionMouseLeave:function J(){this._removeCursor()},_onRendered:function C(){this.isEmpty=u.every(this.datasets,U);
this.isEmpty?this._hide():this.isOpen&&this._show();this.trigger("datasetRendered");function U(V){return V.isEmpty()
}},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function B(){return this.$menu.find(".tt-suggestion")
},_getCursor:function z(){return this.$menu.find(".tt-cursor").first()},_setCursor:function R(V,U){V.first().addClass("tt-cursor");
!U&&this.trigger("cursorMoved")},_removeCursor:function y(){this._getCursor().removeClass("tt-cursor")
},_moveCursor:function x(U){var W,V,Y,X;if(!this.isOpen){return}V=this._getCursor();W=this._getSuggestions();
this._removeCursor();Y=W.index(V)+U;Y=(Y+1)%(W.length+1)-1;if(Y===-1){this.trigger("cursorRemoved");return
}else{if(Y<-1){Y=W.length-1}}this._setCursor(X=W.eq(Y));this._ensureVisible(X)},_ensureVisible:function N(X){var U,W,V,Y;
U=X.position().top;W=U+X.outerHeight(true);V=this.$menu.scrollTop();Y=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10);
if(U<0){this.$menu.scrollTop(V+U)}else{if(Y<W){this.$menu.scrollTop(V+(W-Y))}}},close:function K(){if(this.isOpen){this.isOpen=false;
this._removeCursor();this._hide();this.trigger("closed")}},open:function I(){if(!this.isOpen){this.isOpen=true;
!this.isEmpty&&this._show();this.trigger("opened")}},setLanguageDirection:function S(U){this.$menu.css(U==="ltr"?k.ltr:k.rtl)
},moveCursorUp:function D(){this._moveCursor(-1)},moveCursorDown:function T(){this._moveCursor(+1)},getDatumForSuggestion:function F(V){var U=null;
if(V.length){U={raw:v.extractDatum(V),value:v.extractValue(V),datasetName:v.extractDatasetName(V)}}return U
},getDatumForCursor:function A(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function M(){return this.getDatumForSuggestion(this._getSuggestions().first())
},update:function E(U){u.each(this.datasets,V);function V(W){W.update(U)}},empty:function H(){u.each(this.datasets,U);
this.isEmpty=true;function U(V){V.clear()}},isVisible:function L(){return this.isOpen&&!this.isEmpty},destroy:function Q(){this.$menu.off(".tt");
this.$menu=null;u.each(this.datasets,U);function U(V){V.destroy()}}});return P;function G(U){return new v(U)
}}();var n=function(){var X="ttAttrs";function H(ad){var ac,ae,ab;ad=ad||{};if(!ad.input){b.error("missing input")
}this.isActivated=false;this.autoselect=!!ad.autoselect;this.minLength=u.isNumber(ad.minLength)?ad.minLength:1;
this.$node=K(ad.input,ad.withHint);ac=this.$node.find(".tt-dropdown-menu");ae=this.$node.find(".tt-input");
ab=this.$node.find(".tt-hint");ae.on("blur.tt",function(ag){var ai,ah,af;ai=document.activeElement;ah=ac.is(ai);
af=ac.has(ai).length>0;if(u.isMsie()&&(ah||af)){ag.preventDefault();ag.stopImmediatePropagation();u.defer(function(){ae.focus()
})}});ac.on("mousedown.tt",function(af){af.preventDefault()});this.eventBus=ad.eventBus||new a({el:ae});
this.dropdown=new p({menu:ac,datasets:ad.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this);
this.input=new o({input:ae,hint:ab}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this);
this._setLanguageDirection()}u.mixin(H.prototype,{_onSuggestionClicked:function y(ad,ac){var ab;if(ab=this.dropdown.getDatumForSuggestion(ac)){this._select(ab)
}},_onCursorMoved:function S(){var ab=this.dropdown.getDatumForCursor();this.input.setInputValue(ab.value,true);
this.eventBus.trigger("cursorchanged",ab.raw,ab.datasetName)},_onCursorRemoved:function B(){this.input.resetInputValue();
this._updateHint()},_onDatasetRendered:function O(){this._updateHint()},_onOpened:function z(){this._updateHint();
this.eventBus.trigger("opened")},_onClosed:function E(){this.input.clearHint();this.eventBus.trigger("closed")
},_onFocused:function Q(){this.isActivated=true;this.dropdown.open()},_onBlurred:function R(){this.isActivated=false;
this.dropdown.empty();this.dropdown.close()},_onEnterKeyed:function M(ac,ab){var ad,ae;ad=this.dropdown.getDatumForCursor();
ae=this.dropdown.getDatumForTopSuggestion();if(ad){this._select(ad);ab.preventDefault()}else{if(this.autoselect&&ae){this._select(ae);
ab.preventDefault()}}},_onTabKeyed:function aa(ad,ac){var ab;if(ab=this.dropdown.getDatumForCursor()){this._select(ab);
ac.preventDefault()}else{this._autocomplete(true)}},_onEscKeyed:function V(){this.dropdown.close();this.input.resetInputValue()
},_onUpKeyed:function x(){var ab=this.input.getQuery();this.dropdown.isEmpty&&ab.length>=this.minLength?this.dropdown.update(ab):this.dropdown.moveCursorUp();
this.dropdown.open()},_onDownKeyed:function C(){var ab=this.input.getQuery();this.dropdown.isEmpty&&ab.length>=this.minLength?this.dropdown.update(ab):this.dropdown.moveCursorDown();
this.dropdown.open()},_onLeftKeyed:function Z(){this.dir==="rtl"&&this._autocomplete()},_onRightKeyed:function N(){this.dir==="ltr"&&this._autocomplete()
},_onQueryChanged:function J(ac,ab){this.input.clearHintIfInvalid();ab.length>=this.minLength?this.dropdown.update(ab):this.dropdown.empty();
this.dropdown.open();this._setLanguageDirection()},_onWhitespaceChanged:function W(){this._updateHint();
this.dropdown.open()},_setLanguageDirection:function U(){var ab;if(this.dir!==(ab=this.input.getLanguageDirection())){this.dir=ab;
this.$node.css("direction",ab);this.dropdown.setLanguageDirection(ab)}},_updateHint:function P(){var ac,ag,af,ae,ab,ad;
ac=this.dropdown.getDatumForTopSuggestion();if(ac&&this.dropdown.isVisible()&&!this.input.hasOverflow()){ag=this.input.getInputValue();
af=o.normalizeQuery(ag);ae=u.escapeRegExChars(af);ab=new RegExp("^(?:"+ae+")(.+$)","i");ad=ab.exec(ac.value);
ad?this.input.setHint(ag+ad[1]):this.input.clearHint()}else{this.input.clearHint()}},_autocomplete:function Y(ad){var af,ae,ab,ac;
af=this.input.getHint();ae=this.input.getQuery();ab=ad||this.input.isCursorAtEnd();if(af&&ae!==af&&ab){ac=this.dropdown.getDatumForTopSuggestion();
ac&&this.input.setInputValue(ac.value);this.eventBus.trigger("autocompleted",ac.raw,ac.datasetName)}},_select:function L(ab){this.input.setQuery(ab.value);
this.input.setInputValue(ab.value,true);this._setLanguageDirection();this.eventBus.trigger("selected",ab.raw,ab.datasetName);
this.dropdown.close();u.defer(u.bind(this.dropdown.empty,this.dropdown))},open:function G(){this.dropdown.open()
},close:function I(){this.dropdown.close()},setVal:function w(ab){if(this.isActivated){this.input.setInputValue(ab)
}else{this.input.setQuery(ab);this.input.setInputValue(ab,true)}this._setLanguageDirection()},getVal:function F(){return this.input.getQuery()
},destroy:function T(){this.input.destroy();this.dropdown.destroy();A(this.$node);this.$node=null}});
return H;function K(ab,ag){var ah,ad,af,ac;ah=b(ab);ad=b(l.wrapper).css(k.wrapper);af=b(l.dropdown).css(k.dropdown);
ac=ah.clone().css(k.hint).css(D(ah));ac.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled",true).attr({autocomplete:"off",spellcheck:"false"});
ah.data(X,{dir:ah.attr("dir"),autocomplete:ah.attr("autocomplete"),spellcheck:ah.attr("spellcheck"),style:ah.attr("style")});
ah.addClass("tt-input").attr({autocomplete:"off",spellcheck:false}).css(ag?k.input:k.inputWithNoHint);
try{!ah.attr("dir")&&ah.attr("dir","auto")}catch(ae){}return ah.wrap(ad).parent().prepend(ag?ac:null).append(af)
}function D(ab){return{backgroundAttachment:ab.css("background-attachment"),backgroundClip:ab.css("background-clip"),backgroundColor:ab.css("background-color"),backgroundImage:ab.css("background-image"),backgroundOrigin:ab.css("background-origin"),backgroundPosition:ab.css("background-position"),backgroundRepeat:ab.css("background-repeat"),backgroundSize:ab.css("background-size")}
}function A(ab){var ac=ab.find(".tt-input");u.each(ac.data(X),function(ae,ad){u.isUndefined(ae)?ac.removeAttr(ad):ac.attr(ad,ae)
});ac.detach().removeData(X).removeClass("tt-input").insertAfter(ab);ab.remove()}}();(function(){var y,w,z;
y=b.fn.typeahead;w="ttTypeahead";z={initialize:function A(H,G){G=u.isArray(G)?G:[].slice.call(arguments,1);
H=H||{};return this.each(F);function F(){var K=b(this),I,J;u.each(G,function(L){L.highlight=!!H.highlight
});J=new n({input:K,eventBus:I=new a({el:K}),withHint:u.isUndefined(H.hint)?true:!!H.hint,minLength:H.minLength,autoselect:H.autoselect,datasets:G});
K.data(w,J)}},open:function B(){return this.each(F);function F(){var H=b(this),G;if(G=H.data(w)){G.open()
}}},close:function E(){return this.each(F);function F(){var H=b(this),G;if(G=H.data(w)){G.close()}}},val:function x(F){return !arguments.length?H(this.first()):this.each(G);
function G(){var J=b(this),I;if(I=J.data(w)){I.setVal(F)}}function H(K){var J,I;if(J=K.data(w)){I=J.getVal()
}return I}},destroy:function D(){return this.each(F);function F(){var H=b(this),G;if(G=H.data(w)){G.destroy();
H.removeData(w)}}}};b.fn.typeahead=function(F){if(z[F]){return z[F].apply(this,[].slice.call(arguments,1))
}else{return z.initialize.apply(this,arguments)}};b.fn.typeahead.noConflict=function C(){b.fn.typeahead=y;
return this}})()})(window.jQuery);function css_browser_selector(q){var a=q.toLowerCase(),k=function(b){return a.indexOf(b)>-1
},l="gecko",p="webkit",r="safari",d="opera",e="mobile",f=document.documentElement,n=[(!(/opera|webtv/i.test(a))&&/msie\s(\d)/.test(a))?("ie ie"+RegExp.$1):k("firefox/2")?l+" ff2":k("firefox/3.5")?l+" ff3 ff3_5":k("firefox/3.6")?l+" ff3 ff3_6":k("firefox/3")?l+" ff3":k("gecko/")?l:k("opera")?d+(/version\/(\d+)/.test(a)?" "+d+RegExp.$1:(/opera(\s|\/)(\d+)/.test(a)?" "+d+RegExp.$2:"")):k("konqueror")?"konqueror":k("blackberry")?e+" blackberry":k("android")?e+" android":k("chrome")?p+" chrome":k("iron")?p+" iron":k("applewebkit/")?p+" "+r+(/version\/(\d+)/.test(a)?" "+r+RegExp.$1:""):k("mozilla/")?l:"",k("j2me")?e+" j2me":k("iphone")?e+" iphone":k("ipod")?e+" ipod":k("ipad")?e+" ipad":k("mac")?"mac":k("darwin")?"mac":k("webtv")?"webtv":k("win")?"win"+(k("windows nt 6.0")?" vista":""):k("freebsd")?"freebsd":(k("x11")||k("linux"))?"linux":"","js"];
c=n.join(" ");f.className+=" "+c;return c}css_browser_selector(navigator.userAgent);(function(){var g,l,k,e,f,h,m,a,d,b;
g=window.device;window.device={};k=window.document.documentElement;b=window.navigator.userAgent.toLowerCase();
device.ios=function(){return device.iphone()||device.ipod()||device.ipad()};device.iphone=function(){return e("iphone")
};device.ipod=function(){return e("ipod")};device.ipad=function(){return e("ipad")};device.android=function(){return e("android")
};device.androidPhone=function(){return device.android()&&e("mobile")};device.androidTablet=function(){return device.android()&&!e("mobile")
};device.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")};device.blackberryPhone=function(){return device.blackberry()&&!e("tablet")
};device.blackberryTablet=function(){return device.blackberry()&&e("tablet")};device.windows=function(){return e("windows")
};device.windowsPhone=function(){return device.windows()&&e("phone")};device.windowsTablet=function(){return device.windows()&&(e("touch")&&!device.windowsPhone())
};device.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")};device.fxosPhone=function(){return device.fxos()&&e("mobile")
};device.fxosTablet=function(){return device.fxos()&&e("tablet")};device.meego=function(){return e("meego")
};device.cordova=function(){return window.cordova&&location.protocol==="file:"};device.nodeWebkit=function(){return typeof window.process==="object"
};device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()
};device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()
};device.desktop=function(){return !device.tablet()&&!device.mobile()};device.portrait=function(){return(window.innerHeight/window.innerWidth)>1
};device.landscape=function(){return(window.innerHeight/window.innerWidth)<1};device.noConflict=function(){window.device=g;
return this};e=function(n){return b.indexOf(n)!==-1};h=function(o){var n;n=new RegExp(o,"i");return k.className.match(n)
};l=function(n){if(!h(n)){return k.className+=" "+n}};a=function(n){if(h(n)){return k.className=k.className.replace(n,"")
}};if(device.ios()){if(device.ipad()){l("ios ipad tablet")}else{if(device.iphone()){l("ios iphone mobile")
}else{if(device.ipod()){l("ios ipod mobile")}}}}else{if(device.android()){if(device.androidTablet()){l("android tablet")
}else{l("android mobile")}}else{if(device.blackberry()){if(device.blackberryTablet()){l("blackberry tablet")
}else{l("blackberry mobile")}}else{if(device.windows()){if(device.windowsTablet()){l("windows tablet")
}else{if(device.windowsPhone()){l("windows mobile")}else{l("desktop")}}}else{if(device.fxos()){if(device.fxosTablet()){l("fxos tablet")
}else{l("fxos mobile")}}else{if(device.meego()){l("meego mobile")}else{if(device.nodeWebkit()){l("node-webkit")
}else{l("desktop")}}}}}}}if(device.cordova()){l("cordova")}f=function(){if(device.landscape()){a("portrait");
return l("landscape")}else{a("landscape");return l("portrait")}};d="onorientationchange" in window;m=d?"orientationchange":"resize";
if(window.addEventListener){window.addEventListener(m,f,false)}else{if(window.attachEvent){window.attachEvent(m,f)
}else{window[m]=f}}f()}).call(this);(function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(type,name){this.defaults.type=type;
this.defaults.name=name},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);if(!settings.single.length){settings.single="metadata"
}var data=$.data(elem,settings.single);if(data){return data}data="{}";if(settings.type=="class"){var m=settings.cre.exec(elem.className);
if(m){data=m[1]}}else{if(settings.type=="elem"){if(!elem.getElementsByTagName){return undefined}var e=elem.getElementsByTagName(settings.name);
if(e.length){data=$.trim(e[0].innerHTML)}}else{if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);
if(attr){data=attr}}}}if(data.indexOf("{")<0){data="{"+data+"}"}data=eval("("+data+")");$.data(elem,settings.single,data);
return data}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts)}})(jQuery);(function(g){var h={formatInvalidInputErrorMsg:function(l){return"Invalid input value '"+l+"' passed in"
},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"};
var f=function(n,m){var q=this.element=g(n).hide();var s=g(n)[0].style.width;var p=false;var o=this.element.parent();
this.options=m;if(o.hasClass("slider")===true){p=true;this.picker=o}else{this.picker=g('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div id="tooltip" class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div><div id="tooltip_min" class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div><div id="tooltip_max" class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element)
}this.id=this.element.data("slider-id")||m.id;if(this.id){this.picker[0].id=this.id}if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch){this.touchCapable=true
}var r=this.element.data("slider-tooltip")||m.tooltip;this.tooltip=this.picker.find("#tooltip");this.tooltipInner=this.tooltip.find("div.tooltip-inner");
this.tooltip_min=this.picker.find("#tooltip_min");this.tooltipInner_min=this.tooltip_min.find("div.tooltip-inner");
this.tooltip_max=this.picker.find("#tooltip_max");this.tooltipInner_max=this.tooltip_max.find("div.tooltip-inner");
if(p===true){this.picker.removeClass("slider-horizontal");this.picker.removeClass("slider-vertical");
this.tooltip.removeClass("hide");this.tooltip_min.removeClass("hide");this.tooltip_max.removeClass("hide")
}this.orientation=this.element.data("slider-orientation")||m.orientation;switch(this.orientation){case"vertical":this.picker.addClass("slider-vertical");
this.stylePos="top";this.mousePos="pageY";this.sizePos="offsetHeight";this.tooltip.addClass("right")[0].style.left="100%";
this.tooltip_min.addClass("right")[0].style.left="100%";this.tooltip_max.addClass("right")[0].style.left="100%";
break;default:this.picker.addClass("slider-horizontal").css("width",s);this.orientation="horizontal";
this.stylePos="left";this.mousePos="pageX";this.sizePos="offsetWidth";this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px";
this.tooltip_min.addClass("top")[0].style.top=-this.tooltip_min.outerHeight()-14+"px";this.tooltip_max.addClass("top")[0].style.top=-this.tooltip_max.outerHeight()-14+"px";
break}var l=this;g.each(["min","max","step","precision","value","reversed","handle","range"],function(u,t){if(typeof q.data("slider-"+t)!=="undefined"){l[t]=q.data("slider-"+t)
}else{if(typeof m[t]!=="undefined"){l[t]=m[t]}else{if(typeof q.prop(t)!=="undefined"){l[t]=q.prop(t)}else{l[t]=0
}}}});if(this.value instanceof Array){if(p&&!this.range){this.value=this.value[0]}else{this.range=true
}}else{if(this.range){this.value=[this.value,this.max]}}this.selection=this.element.data("slider-selection")||m.selection;
this.selectionEl=this.picker.find(".slider-selection");if(this.selection==="none"){this.selectionEl.addClass("hide")
}this.selectionElStyle=this.selectionEl[0].style;this.handle1=this.picker.find(".slider-handle:first");
this.handle1Stype=this.handle1[0].style;this.handle2=this.picker.find(".slider-handle:last");this.handle2Stype=this.handle2[0].style;
if(p===true){this.handle1.removeClass("round triangle");this.handle2.removeClass("round triangle hide")
}switch(this.handle){case"round":this.handle1.addClass("round");this.handle2.addClass("round");break;
case"triangle":this.handle1.addClass("triangle");this.handle2.addClass("triangle");break}this.offset=this.picker.offset();
this.size=this.picker[0][this.sizePos];this.formater=m.formater;this.tooltip_separator=m.tooltip_separator;
this.tooltip_split=m.tooltip_split;this.setValue(this.value);this.handle1.on({keydown:g.proxy(this.keydown,this,0)});
this.handle2.on({keydown:g.proxy(this.keydown,this,1)});if(this.touchCapable){this.picker.on({touchstart:g.proxy(this.mousedown,this)})
}this.picker.off({mousedown:g.proxy(this.mousedown,this)});this.picker.on({mousedown:g.proxy(this.mousedown,this)});
if(r==="hide"){this.tooltip.addClass("hide");this.tooltip_min.addClass("hide");this.tooltip_max.addClass("hide")
}else{if(r==="always"){this.showTooltip();this.alwaysShowTooltip=true}else{this.picker.on({mouseenter:g.proxy(this.showTooltip,this),mouseleave:g.proxy(this.hideTooltip,this)});
this.handle1.on({focus:g.proxy(this.showTooltip,this),blur:g.proxy(this.hideTooltip,this)});this.handle2.on({focus:g.proxy(this.showTooltip,this),blur:g.proxy(this.hideTooltip,this)})
}}this.enabled=m.enabled&&(this.element.data("slider-enabled")===undefined||this.element.data("slider-enabled")===true);
if(this.enabled){this.enable()}else{this.disable()}this.natural_arrow_keys=this.element.data("slider-natural_arrow_keys")||m.natural_arrow_keys
};f.prototype={constructor:f,over:false,inDrag:false,showTooltip:function(){if(this.tooltip_split===false){this.tooltip.addClass("in")
}else{this.tooltip_min.addClass("in");this.tooltip_max.addClass("in")}this.over=true},hideTooltip:function(){if(this.inDrag===false&&this.alwaysShowTooltip!==true){this.tooltip.removeClass("in");
this.tooltip_min.removeClass("in");this.tooltip_max.removeClass("in")}this.over=false},layout:function(){var p;
if(this.reversed){p=[100-this.percentage[0],this.percentage[1]]}else{p=[this.percentage[0],this.percentage[1]]
}this.handle1Stype[this.stylePos]=p[0]+"%";this.handle2Stype[this.stylePos]=p[1]+"%";if(this.orientation==="vertical"){this.selectionElStyle.top=Math.min(p[0],p[1])+"%";
this.selectionElStyle.height=Math.abs(p[0]-p[1])+"%"}else{this.selectionElStyle.left=Math.min(p[0],p[1])+"%";
this.selectionElStyle.width=Math.abs(p[0]-p[1])+"%";var o=this.tooltip_min[0].getBoundingClientRect();
var m=this.tooltip_max[0].getBoundingClientRect();if(o.right>m.left){this.tooltip_max.removeClass("top");
this.tooltip_max.addClass("bottom")[0].style.top=18+"px"}else{this.tooltip_max.removeClass("bottom");
this.tooltip_max.addClass("top")[0].style.top=-30+"px"}}if(this.range){this.tooltipInner.text(this.formater(this.value[0])+this.tooltip_separator+this.formater(this.value[1]));
this.tooltip[0].style[this.stylePos]=this.size*(p[0]+(p[1]-p[0])/2)/100-(this.orientation==="vertical"?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px";
this.tooltipInner_min.text(this.formater(this.value[0]));this.tooltipInner_max.text(this.formater(this.value[1]));
this.tooltip_min[0].style[this.stylePos]=this.size*((p[0])/100)-(this.orientation==="vertical"?this.tooltip_min.outerHeight()/2:this.tooltip_min.outerWidth()/2)+"px";
this.tooltip_max[0].style[this.stylePos]=this.size*((p[1])/100)-(this.orientation==="vertical"?this.tooltip_max.outerHeight()/2:this.tooltip_max.outerWidth()/2)+"px"
}else{this.tooltipInner.text(this.formater(this.value[0]));if(this.options.manual){if(this.tooltipInner.outerWidth()==0&&g.trim(this.tooltipInner.html())!=""){var l=String(this.tooltipInner.html()).replace(/,/g,"").length;
var n=13;l*=n;this.tooltip[0].style[this.stylePos]=(((p[0]/100)*this.picker.outerWidth()-(l)/2))+"px"
}else{this.tooltip[0].style[this.stylePos]=(((p[0]/100)*this.picker.outerWidth()-this.tooltipInner.outerWidth()/2))+"px"
}}else{this.tooltip[0].style[this.stylePos]=this.size*p[0]/100-(this.orientation==="vertical"?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"
}}},mousedown:function(m){if(!this.isEnabled()){return false}if(this.touchCapable&&m.type==="touchstart"){m=m.originalEvent
}this.triggerFocusOnHandle();this.offset=this.picker.offset();this.size=this.picker[0][this.sizePos];
var l=this.getPercentage(m);if(this.range){var p=Math.abs(this.percentage[0]-l);var n=Math.abs(this.percentage[1]-l);
this.dragged=(p<n)?0:1}else{this.dragged=0}this.percentage[this.dragged]=this.reversed?100-l:l;this.layout();
if(this.touchCapable){g(document).on({touchmove:g.proxy(this.mousemove,this),touchend:g.proxy(this.mouseup,this)})
}g(document).on({mousemove:g.proxy(this.mousemove,this),mouseup:g.proxy(this.mouseup,this)});this.inDrag=true;
var o=this.calculateValue();this.element.trigger({type:"slideStart",value:o}).data("value",o).prop("value",o);
this.setValue(o);return true},triggerFocusOnHandle:function(l){if(l===0){this.handle1.focus()}if(l===1){this.handle2.focus()
}},keydown:function(o,n){if(!this.isEnabled()){return false}var m;switch(n.which){case 37:case 40:m=-1;
break;case 39:case 38:m=1;break}if(!m){return}if(this.natural_arrow_keys){if((this.orientation==="vertical"&&!this.reversed)||(this.orientation==="horizontal"&&this.reversed)){m=m*-1
}}var q=m*this.percentage[2];var l=this.percentage[o]+q;if(l>100){l=100}else{if(l<0){l=0}}this.dragged=o;
this.adjustPercentageForRangeSliders(l);this.percentage[this.dragged]=l;this.layout();var p=this.calculateValue();
this.element.trigger({type:"slideStart",value:p}).data("value",p).prop("value",p);this.setValue(p,true);
this.element.trigger({type:"slideStop",value:p}).data("value",p).prop("value",p);return false},mousemove:function(m){if(!this.isEnabled()){return false
}if(this.touchCapable&&m.type==="touchmove"){m=m.originalEvent}var l=this.getPercentage(m);this.adjustPercentageForRangeSliders(l);
this.percentage[this.dragged]=this.reversed?100-l:l;this.layout();var n=this.calculateValue();this.setValue(n,true);
return false},adjustPercentageForRangeSliders:function(l){if(this.range){if(this.dragged===0&&this.percentage[1]<l){this.percentage[0]=this.percentage[1];
this.dragged=1}else{if(this.dragged===1&&this.percentage[0]>l){this.percentage[1]=this.percentage[0];
this.dragged=0}}}},mouseup:function(){if(!this.isEnabled()){return false}if(this.touchCapable){g(document).off({touchmove:this.mousemove,touchend:this.mouseup})
}g(document).off({mousemove:this.mousemove,mouseup:this.mouseup});this.inDrag=false;if(this.over===false){this.hideTooltip()
}var l=this.calculateValue();this.layout();this.element.data("value",l).prop("value",l).trigger({type:"slideStop",value:l});
return false},calculateValue:function(){var l;if(this.range){l=[this.min,this.max];if(this.percentage[0]!==0){l[0]=(Math.max(this.min,this.min+Math.round((this.diff*this.percentage[0]/100)/this.step)*this.step));
l[0]=this.applyPrecision(l[0])}if(this.percentage[1]!==100){l[1]=(Math.min(this.max,this.min+Math.round((this.diff*this.percentage[1]/100)/this.step)*this.step));
l[1]=this.applyPrecision(l[1])}this.value=l}else{l=(this.min+Math.round((this.diff*this.percentage[0]/100)/this.step)*this.step);
if(l<this.min){l=this.min}else{if(l>this.max){l=this.max}}l=parseFloat(l);l=this.applyPrecision(l);this.value=[l,this.value[1]]
}return l},applyPrecision:function(m){var l=this.precision||this.getNumDigitsAfterDecimalPlace(this.step);
return this.applyToFixedAndParseFloat(m,l)},getNumDigitsAfterDecimalPlace:function(m){var l=(""+m).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
if(!l){return 0}return Math.max(0,(l[1]?l[1].length:0)-(l[2]?+l[2]:0))},applyToFixedAndParseFloat:function(m,l){var n=m.toFixed(l);
return parseFloat(n)},getPercentage:function(m){if(this.touchCapable&&(m.type==="touchstart"||m.type==="touchmove")){m=m.touches[0]
}var l=(m[this.mousePos]-this.offset[this.stylePos])*100/this.size;l=Math.round(l/this.percentage[2])*this.percentage[2];
return Math.max(0,Math.min(100,l))},getValue:function(){if(this.range){return this.value}return this.value[0]
},setValue:function(n,m){if(!n){n=0}this.value=this.validateInputValue(n);if(this.range){this.value[0]=this.applyPrecision(this.value[0]);
this.value[1]=this.applyPrecision(this.value[1]);this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0]));
this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))}else{this.value=this.applyPrecision(this.value);
this.value=[Math.max(this.min,Math.min(this.max,this.value))];this.handle2.addClass("hide");if(this.selection==="after"){this.value[1]=this.max
}else{this.value[1]=this.min}}this.diff=this.max-this.min;if(this.diff>0){this.percentage=[(this.value[0]-this.min)*100/this.diff,(this.value[1]-this.min)*100/this.diff,this.step*100/this.diff]
}else{this.percentage=[0,0,100]}this.layout();if(m===true){var l=this.range?this.value:this.value[0];
this.element.trigger({type:"slide",value:l}).data("value",this.value).prop("value",this.value)}},validateInputValue:function(l){if(typeof l==="number"){return l
}else{if(l instanceof Array){g.each(l,function(n,m){if(typeof m!=="number"){throw new Error(h.formatInvalidInputErrorMsg(m))
}});return l}else{throw new Error(h.formatInvalidInputErrorMsg(l))}}},destroy:function(){this.handle1.off();
this.handle2.off();this.element.off().show().insertBefore(this.picker);this.picker.off().remove();g(this.element).removeData("slider")
},disable:function(){this.enabled=false;this.handle1.removeAttr("tabindex");this.handle2.removeAttr("tabindex");
this.picker.addClass("slider-disabled");this.element.trigger("slideDisabled")},enable:function(){this.enabled=true;
this.handle1.attr("tabindex",0);this.handle2.attr("tabindex",0);this.picker.removeClass("slider-disabled");
this.element.trigger("slideEnabled")},toggle:function(){if(this.enabled){this.disable()}else{this.enable()
}},isEnabled:function(){return this.enabled},setAttribute:function(l,m){this[l]=m},getAttribute:function(l){return this[l]
}};var d={getValue:f.prototype.getValue,setValue:f.prototype.setValue,setAttribute:f.prototype.setAttribute,getAttribute:f.prototype.getAttribute,destroy:f.prototype.destroy,disable:f.prototype.disable,enable:f.prototype.enable,toggle:f.prototype.toggle,isEnabled:f.prototype.isEnabled};
var b=g.fn.slider;g.fn.slider=function(m){if(typeof m==="string"&&m!=="refresh"){var l=Array.prototype.slice.call(arguments,1);
return e.call(this,m,l)}else{return k.call(this,m)}};g.fn.slider.noConflict=function(){g.fn.slider=b;
return this};function e(n,o){if(d[n]){var m=a(this);var l=d[n].apply(m,o);if(typeof l==="undefined"){return g(this)
}else{return l}}else{throw new Error("method '"+n+"()' does not exist for slider.")}}function a(m){var l=g(m).data("slider");
if(l&&l instanceof f){return l}else{throw new Error(h.callingContextNotSliderInstance)}}function k(l){var m=g(this);
m.each(function(){var p=g(this),o=p.data("slider"),n=typeof l==="object"&&l;if(o&&!n){n={};g.each(g.fn.slider.defaults,function(q){n[q]=o[q]
})}p.data("slider",(new f(this,g.extend({},g.fn.slider.defaults,n))))});return m}g.fn.slider.defaults={min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:false,selection:"before",tooltip:"show",tooltip_separator:":",tooltip_split:false,natural_arrow_keys:false,handle:"round",reversed:false,enabled:true,manual:true,formater:function(l){return l
}};g.fn.slider.Constructor=f})(window.jQuery);$(document).ready(function(){var b=$("#mobileSite")!=undefined&&$("#mobileSite").val()=="true";
var a=$("#pagName")!=undefined&&$("#pagName").val()!="newBootStrapMyAccount";if(b&&!a){$(".js-db-slide-in-menu li a").on("click",function(){window.location.href="/myaccount.html?entryTab="+$(this).attr("data-tab-name")
})}else{bindCustomerDBDropDownForDesktop()}});function triggerShowDashBoardSideMenu(a){var d=$("#logged-in-status")!=undefined&&$("#logged-in-status")!=null&&$("#logged-in-status").val()=="true";
var b=$("#loggedin")!=undefined&&$("#loggedin")!=null&&$("#loggedin").val()=="true";if(b||d){showDashBoardSideMenu()
}else{showLoginAndFireEvent(LoginSource.NAV_BAR)}}function showDashBoardSideMenu(){$(".db-menu-vertical").toggleClass("db-menu-open");
$(".modal-screen").toggle();$(".db-menu-vertical").show();if($("#bs-example-navbar-collapse-1").hasClass("in")){$("#navbarToggleButton").trigger("click")
}if($("#db-menu-s1").hasClass("db-menu-open")){$("#navbarToggleButton").attr("data-target","#");$("body").css("overflow","hidden").css("height","100%");
$("html").css("overflow","hidden").css("height","100%")}else{if(!$("#db-menu-s1").hasClass("db-menu-open")){resetSideMenuAndNavBar()
}}}function resetSideMenuAndNavBar(){$("body").css("overflow","").css("height","");$("html").css("overflow","").css("height","");
$("#navbarToggleButton").attr("data-target","#bs-example-navbar-collapse-1")}function bindCustomerDBDropDownForDesktop(){$(".js-menu-db-dropdown").on("click",function(){window.location.href="/myaccount.html?entryTab="+$(this).attr("data-user-db-tab-name")
});$("#my-account-link").on("click",function(){window.location.href="/myaccount.html?entryTab=username_label"
})}var DEAL_EVENT_CATEGORY=getCategoryName();var DEAL_EVENT_ACTION={CHECKOUT:"checkout",ENTRY:"view"};
function getCategoryName(){return"Deals"}function carouselSlideAndTagtoggle(){$(".js-fs-sticky-close").bind("click",function(){localStorage.carouselClosed="true";
$("#landingPageFlashSale").addClass("fs-sm-close");setTimeout(function(){$("#landingPageFlashSale").addClass("hide");
$(".js-fs-small-sticky").removeClass("hide")},1000);if($("#js-fs-small-sticky").attr("style")){$("#js-fs-small-sticky").attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")
})}});$(".js-fs-small-sticky").bind("click",function(){localStorage.carouselClosed="false";$("#landingPageFlashSale").removeClass("fs-sm-close");
$("#landingPageFlashSale").removeClass("hide");if($("#landingPageFlashSale").attr("style")){$("#landingPageFlashSale").attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")
})}$(".js-fs-small-sticky").addClass("hide")})}function slideNextPrevButton(){$(".js-sticky-prev").bind("click",function(){$("#carousel-flashsale").carousel("prev")
});$(".js-sticky-next").bind("click",function(){$("#carousel-flashsale").carousel("next")})}function webEventForDeals(){if($(".js-deal-getIt").length>0){$(".js-deal-getIt").on("click",function(){BB_trackGoogleEventWithLabel(DEAL_EVENT_CATEGORY,DEAL_EVENT_ACTION.CHECKOUT,$("#pageName").val())
})}if($(".js-caurosel").length>0){$(".js-caurosel").on("click",function(){if($("#productNameSpace").val()!=""){BB_trackGoogleEventWithLabel(DEAL_EVENT_CATEGORY,DEAL_EVENT_ACTION.ENTRY,$("#productNameSpace").val())
}else{BB_trackGoogleEventWithLabel(DEAL_EVENT_CATEGORY,DEAL_EVENT_ACTION.ENTRY,$("#pageName").val())}})
}}$(function(){webEventForDeals();carouselSlideAndTagtoggle();slideNextPrevButton();if(localStorage.carouselClosed&&localStorage.carouselClosed=="true"){$(".js-fs-small-sticky").removeClass("hide");
if($("#js-fs-small-sticky").attr("style")){$("#js-fs-small-sticky").attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")
})}}else{$("#landingPageFlashSale").removeClass("hide");if($("#landingPageFlashSale").attr("style")){$("#landingPageFlashSale").attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")
})}}$("#live-city0").on("hidden.bs.modal",function(){if($(".js-fs-small-sticky").hasClass("hide")){$("#landingPageFlashSale").removeClass("hide")
}});$("#live-city0").on("show.bs.modal",function(){$("#landingPageFlashSale").addClass("hide")})});$(document).ready(function(){$("#myCarousel").swiperight(function(){$("#myCarousel").carousel("prev")
});$("#myCarousel").swipeleft(function(){$("#myCarousel").carousel("next")});$(".header-icon").hover(function(){$(document).on("screen-block",function(){setTimeout(function(){if($(".screen-block-icon").css("display")!="none"){$("#landingPageFlashSale").addClass("fs-icon-over");
$("#js-fs-small-sticky").addClass("fs-icon-over")}},400)})},function(){});$(".screen-block-icon").click(function(){$("#landingPageFlashSale").removeClass("fs-icon-over");
$("#js-fs-small-sticky").removeClass("fs-icon-over")})});(function(a,d,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(e){b(e,a,d);
return e.mobile})}else{b(a.jQuery,a,d)}}(this,document,function(d,b,a,e){(function(D,M,l,s){var L="virtualMouseBindings",g="virtualTouchID",f="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),C="clientX clientY pageX pageY screenX screenY".split(" "),I=D.event.mouseHooks?D.event.mouseHooks.props:[],E=D.event.props.concat(I),G={},N=0,y=0,x=0,v=false,Q=[],n=false,X=false,A="addEventListener" in l,z=D(l),K=1,T=0,h,R;
D.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};function w(Y){while(Y&&typeof Y.originalEvent!=="undefined"){Y=Y.originalEvent
}return Y}function o(Z,aa){var ai=Z.type,aj,ah,ab,Y,af,ae,ad,ac,ag;Z=D.Event(Z);Z.type=aa;aj=Z.originalEvent;
ah=D.event.props;if(ai.search(/^(mouse|click)/)>-1){ah=E}if(aj){for(ad=ah.length,Y;ad;){Y=ah[--ad];Z[Y]=aj[Y]
}}if(ai.search(/mouse(down|up)|click/)>-1&&!Z.which){Z.which=1}if(ai.search(/^touch/)!==-1){ab=w(aj);
ai=ab.touches;af=ab.changedTouches;ae=(ai&&ai.length)?ai[0]:((af&&af.length)?af[0]:s);if(ae){for(ac=0,ag=C.length;
ac<ag;ac++){Y=C[ac];Z[Y]=ae[Y]}}}return Z}function V(ab){var Z={},Y,aa;while(ab){Y=D.data(ab,L);for(aa in Y){if(Y[aa]){Z[aa]=Z.hasVirtualBinding=true
}}ab=ab.parentNode}return Z}function H(aa,Z){var Y;while(aa){Y=D.data(aa,L);if(Y&&(!Z||Y[Z])){return aa
}aa=aa.parentNode}return null}function P(){X=false}function q(){X=true}function W(){T=0;Q.length=0;n=false;
q()}function u(){P()}function B(){F();N=setTimeout(function(){N=0;W()},D.vmouse.resetTimerDuration)}function F(){if(N){clearTimeout(N);
N=0}}function t(aa,ab,Y){var Z;if((Y&&Y[aa])||(!Y&&H(ab.target,aa))){Z=o(ab,aa);D(ab.target).trigger(Z)
}return Z}function p(Z){var aa=D.data(Z.target,g),Y;if(!n&&(!T||T!==aa)){Y=t("v"+Z.type,Z);if(Y){if(Y.isDefaultPrevented()){Z.preventDefault()
}if(Y.isPropagationStopped()){Z.stopPropagation()}if(Y.isImmediatePropagationStopped()){Z.stopImmediatePropagation()
}}}}function U(aa){var ac=w(aa).touches,ab,Y,Z;if(ac&&ac.length===1){ab=aa.target;Y=V(ab);if(Y.hasVirtualBinding){T=K++;
D.data(ab,g,T);F();u();v=false;Z=w(aa).touches[0];y=Z.pageX;x=Z.pageY;t("vmouseover",aa,Y);t("vmousedown",aa,Y)
}}}function O(Y){if(X){return}if(!v){t("vmousecancel",Y,V(Y.target))}v=true;B()}function k(ac){if(X){return
}var aa=w(ac).touches[0],Z=v,ab=D.vmouse.moveDistanceThreshold,Y=V(ac.target);v=v||(Math.abs(aa.pageX-y)>ab||Math.abs(aa.pageY-x)>ab);
if(v&&!Z){t("vmousecancel",ac,Y)}t("vmousemove",ac,Y);B()}function m(ab){if(X){return}q();var Y=V(ab.target),Z,aa;
t("vmouseup",ab,Y);if(!v){Z=t("vclick",ab,Y);if(Z&&Z.isDefaultPrevented()){aa=w(ab).changedTouches[0];
Q.push({touchID:T,x:aa.clientX,y:aa.clientY});n=true}}t("vmouseout",ab,Y);v=false;B()}function J(Z){var aa=D.data(Z,L),Y;
if(aa){for(Y in aa){if(aa[Y]){return true}}}return false}function S(){}function r(Y){var Z=Y.substr(1);
return{setup:function(){if(!J(this)){D.data(this,L,{})}var aa=D.data(this,L);aa[Y]=true;G[Y]=(G[Y]||0)+1;
if(G[Y]===1){z.bind(Z,p)}D(this).bind(Z,S);if(A){G.touchstart=(G.touchstart||0)+1;if(G.touchstart===1){z.bind("touchstart",U).bind("touchend",m).bind("touchmove",k).bind("scroll",O)
}}},teardown:function(){--G[Y];if(!G[Y]){z.unbind(Z,p)}if(A){--G.touchstart;if(!G.touchstart){z.unbind("touchstart",U).unbind("touchmove",k).unbind("touchend",m).unbind("scroll",O)
}}var aa=D(this),ab=D.data(this,L);if(ab){ab[Y]=false}aa.unbind(Z,S);if(!J(this)){aa.removeData(L)}}}
}for(R=0;R<f.length;R++){D.event.special[f[R]]=r(f[R])}if(A){l.addEventListener("click",function(ac){var Z=Q.length,ad=ac.target,af,ae,ag,ab,Y,aa;
if(Z){af=ac.clientX;ae=ac.clientY;h=D.vmouse.clickDistanceThreshold;ag=ad;while(ag){for(ab=0;ab<Z;ab++){Y=Q[ab];
aa=0;if((ag===ad&&Math.abs(Y.x-af)<h&&Math.abs(Y.y-ae)<h)||D.data(ag,g)===Y.touchID){ac.preventDefault();
ac.stopPropagation();return}}ag=ag.parentNode}}},true)}})(d,b,a);(function(f){f.mobile={}}(d));(function(g,h){var f={touch:"ontouchend" in a};
g.mobile.support=g.mobile.support||{};g.extend(g.support,f);g.extend(g.mobile.support,f)}(d));(function(k,p,f){var g=k(a),l=k.mobile.support.touch,m="touchmove scroll",q=l?"touchstart":"mousedown",o=l?"touchend":"mouseup",h=l?"touchmove":"mousemove";
k.each(("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop").split(" "),function(s,r){k.fn[r]=function(t){return t?this.bind(r,t):this.trigger(r)
};if(k.attrFn){k.attrFn[r]=true}});function n(v,s,u,r){var t=u.type;u.type=s;if(r){k.event.trigger(u,f,v)
}else{k.event.dispatch.call(v,u)}u.type=t}k.event.special.scrollstart={enabled:true,setup:function(){var r=this,u=k(r),t,v;
function s(w,x){t=x;n(r,t?"scrollstart":"scrollstop",w)}u.bind(m,function(w){if(!k.event.special.scrollstart.enabled){return
}if(!t){s(w,true)}clearTimeout(v);v=setTimeout(function(){s(w,false)},50)})},teardown:function(){k(this).unbind(m)
}};k.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:true,setup:function(){var r=this,t=k(r),s=false;
t.bind("vmousedown",function(w){s=false;if(w.which&&w.which!==1){return false}var v=w.target,z;function u(){clearTimeout(z)
}function y(){u();t.unbind("vclick",x).unbind("vmouseup",u);g.unbind("vmousecancel",y)}function x(A){y();
if(!s&&v===A.target){n(r,"tap",A)}else{if(s){A.preventDefault()}}}t.bind("vmouseup",u).bind("vclick",x);
g.bind("vmousecancel",y);z=setTimeout(function(){if(!k.event.special.tap.emitTapOnTaphold){s=true}n(r,"taphold",k.Event("taphold",{target:v}))
},k.event.special.tap.tapholdThreshold)})},teardown:function(){k(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup");
g.unbind("vmousecancel")}};k.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1000,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(u){var t=p.pageXOffset,s=p.pageYOffset,r=u.clientX,v=u.clientY;
if(u.pageY===0&&Math.floor(v)>Math.floor(u.pageY)||u.pageX===0&&Math.floor(r)>Math.floor(u.pageX)){r=r-t;
v=v-s}else{if(v<(u.pageY-s)||r<(u.pageX-t)){r=u.pageX-t;v=u.pageY-s}}return{x:r,y:v}},start:function(s){var t=s.originalEvent.touches?s.originalEvent.touches[0]:s,r=k.event.special.swipe.getLocation(t);
return{time:(new Date()).getTime(),coords:[r.x,r.y],origin:k(s.target)}},stop:function(s){var t=s.originalEvent.touches?s.originalEvent.touches[0]:s,r=k.event.special.swipe.getLocation(t);
return{time:(new Date()).getTime(),coords:[r.x,r.y]}},handleSwipe:function(v,s,r,t){if(s.time-v.time<k.event.special.swipe.durationThreshold&&Math.abs(v.coords[0]-s.coords[0])>k.event.special.swipe.horizontalDistanceThreshold&&Math.abs(v.coords[1]-s.coords[1])<k.event.special.swipe.verticalDistanceThreshold){var u=v.coords[0]>s.coords[0]?"swipeleft":"swiperight";
n(r,"swipe",k.Event("swipe",{target:t,swipestart:v,swipestop:s}),true);n(r,u,k.Event(u,{target:t,swipestart:v,swipestop:s}),true);
return true}return false},eventInProgress:false,setup:function(){var t,r=this,u=k(r),s={};t=k.data(this,"mobile-events");
if(!t){t={length:0};k.data(this,"mobile-events",t)}t.length++;t.swipe=s;s.start=function(x){if(k.event.special.swipe.eventInProgress){return
}k.event.special.swipe.eventInProgress=true;var v,z=k.event.special.swipe.start(x),w=x.target,y=false;
s.move=function(A){if(!z||A.isDefaultPrevented()){return}v=k.event.special.swipe.stop(A);if(!y){y=k.event.special.swipe.handleSwipe(z,v,r,w);
if(y){k.event.special.swipe.eventInProgress=false}}if(Math.abs(z.coords[0]-v.coords[0])>k.event.special.swipe.scrollSupressionThreshold){A.preventDefault()
}};s.stop=function(){y=true;k.event.special.swipe.eventInProgress=false;g.off(h,s.move);s.move=null};
g.on(h,s.move).one(o,s.stop)};u.on(q,s.start)},teardown:function(){var s,r;s=k.data(this,"mobile-events");
if(s){r=s.swipe;delete s.swipe;s.length--;if(s.length===0){k.removeData(this,"mobile-events")}}if(r){if(r.start){k(this).off(q,r.start)
}if(r.move){g.off(h,r.move)}if(r.stop){g.off(o,r.stop)}}}};k.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(s,r){k.event.special[s]={setup:function(){k(this).bind(r,k.noop)
},teardown:function(){k(this).unbind(r)}}})})(d,this)}));