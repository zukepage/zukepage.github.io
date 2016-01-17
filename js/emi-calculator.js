/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.1-beta.4
 *
 * Copyright 2014 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function(){var D=this,M=D.Chart;
var J=function(Z){var ab=this;this.canvas=Z.canvas;this.ctx=Z;var aa=this.width=Z.canvas.width;var Y=this.height=Z.canvas.height;
this.aspectRatio=this.width/this.height;K.retinaScale(this);return this};J.defaults={global:{animation:true,animationSteps:60,animationEasing:"easeOutQuart",showScale:true,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleIntegersOnly:true,scaleBeginAtZero:false,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:true,maintainAspectRatio:true,showTooltips:true,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}};
J.types={};var K=J.helpers={};var P=K.each=function(ab,ad,Z){var Y=Array.prototype.slice.call(arguments,3);
if(ab){if(ab.length===+ab.length){var aa;for(aa=0;aa<ab.length;aa++){ad.apply(Z,[ab[aa],aa].concat(Y))
}}else{for(var ac in ab){ad.apply(Z,[ab[ac],ac].concat(Y))}}}},B=K.clone=function(Z){var Y={};P(Z,function(ab,aa){if(Z.hasOwnProperty(aa)){Y[aa]=ab
}});return Y},v=K.extend=function(Y){P(Array.prototype.slice.call(arguments,1),function(Z){P(Z,function(ab,aa){if(Z.hasOwnProperty(aa)){Y[aa]=ab
}})});return Y},N=K.merge=function(aa,Z){var Y=Array.prototype.slice.call(arguments,0);Y.unshift({});
return v.apply(null,Y)},y=K.indexOf=function(Y,aa){if(Array.prototype.indexOf){return Y.indexOf(aa)}else{for(var Z=0;
Z<Y.length;Z++){if(Y[Z]===aa){return Z}}return -1}},o=K.where=function(aa,Z){var Y=[];K.each(aa,function(ab){if(Z(ab)){Y.push(ab)
}});return Y},e=K.findNextWhere=function(Y,ac,ab){if(!ab){ab=-1}for(var aa=ab+1;aa<Y.length;aa++){var Z=Y[aa];
if(ac(Z)){return Z}}},G=K.findPreviousWhere=function(Y,ac,ab){if(!ab){ab=Y.length}for(var aa=ab-1;aa>=0;
aa--){var Z=Y[aa];if(ac(Z)){return Z}}},i=K.inherits=function(Z){var Y=this;var aa=(Z&&Z.hasOwnProperty("constructor"))?Z.constructor:function(){return Y.apply(this,arguments)
};var ab=function(){this.constructor=aa};ab.prototype=Y.prototype;aa.prototype=new ab();aa.extend=i;if(Z){v(aa.prototype,Z)
}aa.__super__=Y.prototype;return aa},S=K.noop=function(){},k=K.uid=(function(){var Y=0;return function(){return"chart-"+Y++
}})(),u=K.warn=function(Y){if(window.console&&typeof window.console.warn=="function"){console.warn(Y)
}},m=K.amd=(typeof define=="function"&&define.amd),W=K.isNumber=function(Y){return !isNaN(parseFloat(Y))&&isFinite(Y)
},C=K.max=function(Y){return Math.max.apply(Math,Y)},V=K.min=function(Y){return Math.min.apply(Math,Y)
},L=K.cap=function(Y,aa,Z){if(W(aa)){if(Y>aa){return aa}}else{if(W(Z)){if(Y<Z){return Z}}}return Y},I=K.getDecimalPlaces=function(Y){if(Y%1!==0&&W(Y)){return Y.toString().split(".")[1].length
}else{return 0}},O=K.radians=function(Y){return Y*(Math.PI/180)},a=K.getAngleFromPoint=function(ab,Z){var ac=Z.x-ab.x,Y=Z.y-ab.y,aa=Math.sqrt(ac*ac+Y*Y);
var ad=Math.PI*2+Math.atan2(Y,ac);if(ac<0&&Y<0){ad+=Math.PI*2}return{angle:ad,distance:aa}},t=K.aliasPixel=function(Y){return(Y%2===0)?0:0.5
},b=K.splineCurve=function(Z,ac,ae,Y){var ad=Math.sqrt(Math.pow(ac.x-Z.x,2)+Math.pow(ac.y-Z.y,2)),af=Math.sqrt(Math.pow(ae.x-ac.x,2)+Math.pow(ae.y-ac.y,2)),ab=Y*ad/(ad+af),aa=Y*af/(ad+af);
return{inner:{x:ac.x-ab*(ae.x-Z.x),y:ac.y-ab*(ae.y-Z.y)},outer:{x:ac.x+aa*(ae.x-Z.x),y:ac.y+aa*(ae.y-Z.y)}}
},U=K.calculateOrderOfMagnitude=function(Y){return Math.floor(Math.log(Y)/Math.LN10)},p=K.calculateScaleRange=function(Z,ae,Y,aa,ad){var ak=2,af=Math.floor(ae/(Y*1.5)),ao=(ak>=af);
var ag=C(Z),am=V(Z);if(ag===am){ag+=0.5;if(am>=0.5&&!aa){am-=0.5}else{ag+=0.5}}var ai=Math.abs(ag-am),aj=U(ai),ab=Math.ceil(ag/(1*Math.pow(10,aj)))*Math.pow(10,aj),al=(aa)?0:Math.floor(am/(1*Math.pow(10,aj)))*Math.pow(10,aj),ac=ab-al,ah=Math.pow(10,aj),an=Math.round(ac/ah);
while((an>af||(an*2)<af)&&!ao){if(an>af){ah*=2;an=Math.round(ac/ah);if(an%1!==0){ao=true}}else{if(ad&&aj>=0){if(ah/2%1===0){ah/=2;
an=Math.round(ac/ah)}else{break}}else{ah/=2;an=Math.round(ac/ah)}}}if(ao){an=ak;ah=ac/an}return{steps:an,stepValue:ah,min:al,max:al+(an*ah)}
},j=K.template=function(ab,aa){if(ab instanceof Function){return ab(aa)}var Z={};function Y(ae,ad){var ac=!/\W/.test(ae)?Z[ae]=Z[ae]:new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+ae.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
return ad?ac(ad):ac}return Y(ab,aa)},x=K.generateLabels=function(ab,Z,ac,Y){var aa=new Array(Z);if(labelTemplateString){P(aa,function(ae,ad){aa[ad]=j(ab,{value:(ac+(Y*(ad+1)))})
})}return aa},Q=K.easingEffects={linear:function(Y){return Y},easeInQuad:function(Y){return Y*Y},easeOutQuad:function(Y){return -1*Y*(Y-2)
},easeInOutQuad:function(Y){if((Y/=1/2)<1){return 1/2*Y*Y}return -1/2*((--Y)*(Y-2)-1)},easeInCubic:function(Y){return Y*Y*Y
},easeOutCubic:function(Y){return 1*((Y=Y/1-1)*Y*Y+1)},easeInOutCubic:function(Y){if((Y/=1/2)<1){return 1/2*Y*Y*Y
}return 1/2*((Y-=2)*Y*Y+2)},easeInQuart:function(Y){return Y*Y*Y*Y},easeOutQuart:function(Y){return -1*((Y=Y/1-1)*Y*Y*Y-1)
},easeInOutQuart:function(Y){if((Y/=1/2)<1){return 1/2*Y*Y*Y*Y}return -1/2*((Y-=2)*Y*Y*Y-2)},easeInQuint:function(Y){return 1*(Y/=1)*Y*Y*Y*Y
},easeOutQuint:function(Y){return 1*((Y=Y/1-1)*Y*Y*Y*Y+1)},easeInOutQuint:function(Y){if((Y/=1/2)<1){return 1/2*Y*Y*Y*Y*Y
}return 1/2*((Y-=2)*Y*Y*Y*Y+2)},easeInSine:function(Y){return -1*Math.cos(Y/1*(Math.PI/2))+1},easeOutSine:function(Y){return 1*Math.sin(Y/1*(Math.PI/2))
},easeInOutSine:function(Y){return -1/2*(Math.cos(Math.PI*Y/1)-1)},easeInExpo:function(Y){return(Y===0)?1:1*Math.pow(2,10*(Y/1-1))
},easeOutExpo:function(Y){return(Y===1)?1:1*(-Math.pow(2,-10*Y/1)+1)},easeInOutExpo:function(Y){if(Y===0){return 0
}if(Y===1){return 1}if((Y/=1/2)<1){return 1/2*Math.pow(2,10*(Y-1))}return 1/2*(-Math.pow(2,-10*--Y)+2)
},easeInCirc:function(Y){if(Y>=1){return Y}return -1*(Math.sqrt(1-(Y/=1)*Y)-1)},easeOutCirc:function(Y){return 1*Math.sqrt(1-(Y=Y/1-1)*Y)
},easeInOutCirc:function(Y){if((Y/=1/2)<1){return -1/2*(Math.sqrt(1-Y*Y)-1)}return 1/2*(Math.sqrt(1-(Y-=2)*Y)+1)
},easeInElastic:function(Z){var aa=1.70158;var ab=0;var Y=1;if(Z===0){return 0}if((Z/=1)==1){return 1
}if(!ab){ab=1*0.3}if(Y<Math.abs(1)){Y=1;aa=ab/4}else{aa=ab/(2*Math.PI)*Math.asin(1/Y)}return -(Y*Math.pow(2,10*(Z-=1))*Math.sin((Z*1-aa)*(2*Math.PI)/ab))
},easeOutElastic:function(Z){var aa=1.70158;var ab=0;var Y=1;if(Z===0){return 0}if((Z/=1)==1){return 1
}if(!ab){ab=1*0.3}if(Y<Math.abs(1)){Y=1;aa=ab/4}else{aa=ab/(2*Math.PI)*Math.asin(1/Y)}return Y*Math.pow(2,-10*Z)*Math.sin((Z*1-aa)*(2*Math.PI)/ab)+1
},easeInOutElastic:function(Z){var aa=1.70158;var ab=0;var Y=1;if(Z===0){return 0}if((Z/=1/2)==2){return 1
}if(!ab){ab=1*(0.3*1.5)}if(Y<Math.abs(1)){Y=1;aa=ab/4}else{aa=ab/(2*Math.PI)*Math.asin(1/Y)}if(Z<1){return -0.5*(Y*Math.pow(2,10*(Z-=1))*Math.sin((Z*1-aa)*(2*Math.PI)/ab))
}return Y*Math.pow(2,-10*(Z-=1))*Math.sin((Z*1-aa)*(2*Math.PI)/ab)*0.5+1},easeInBack:function(Y){var Z=1.70158;
return 1*(Y/=1)*Y*((Z+1)*Y-Z)},easeOutBack:function(Y){var Z=1.70158;return 1*((Y=Y/1-1)*Y*((Z+1)*Y+Z)+1)
},easeInOutBack:function(Y){var Z=1.70158;if((Y/=1/2)<1){return 1/2*(Y*Y*(((Z*=(1.525))+1)*Y-Z))}return 1/2*((Y-=2)*Y*(((Z*=(1.525))+1)*Y+Z)+2)
},easeInBounce:function(Y){return 1-Q.easeOutBounce(1-Y)},easeOutBounce:function(Y){if((Y/=1)<(1/2.75)){return 1*(7.5625*Y*Y)
}else{if(Y<(2/2.75)){return 1*(7.5625*(Y-=(1.5/2.75))*Y+0.75)}else{if(Y<(2.5/2.75)){return 1*(7.5625*(Y-=(2.25/2.75))*Y+0.9375)
}else{return 1*(7.5625*(Y-=(2.625/2.75))*Y+0.984375)}}}},easeInOutBounce:function(Y){if(Y<1/2){return Q.easeInBounce(Y*2)*0.5
}return Q.easeOutBounce(Y*2-1)*0.5+1*0.5}},d=K.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(Y){return window.setTimeout(Y,1000/60)
}})(),R=K.cancelAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(Y){return window.clearTimeout(Y,1000/60)
}})(),E=K.animationLoop=function(ad,Y,ac,ae,ab,ag){var Z=0,af=Q[ac]||Q.linear;var aa=function(){Z++;var ai=Z/Y;
var ah=af(ai);ad.call(ag,ah,ai,Z);ae.call(ag,ah,ai);if(Z<Y){ag.animationFrame=d(aa)}else{ab.apply(ag)
}};d(aa)},F=K.getRelativePosition=function(Y){var ac,ab;var ad=Y.originalEvent||Y,aa=Y.currentTarget||Y.srcElement,Z=aa.getBoundingClientRect();
if(ad.touches){ac=ad.touches[0].clientX-Z.left;ab=ad.touches[0].clientY-Z.top}else{ac=ad.clientX-Z.left;
ab=ad.clientY-Z.top}return{x:ac,y:ab}},r=K.addEvent=function(Z,Y,aa){if(Z.addEventListener){Z.addEventListener(Y,aa)
}else{if(Z.attachEvent){Z.attachEvent("on"+Y,aa)}else{Z["on"+Y]=aa}}},c=K.removeEvent=function(aa,Y,Z){if(aa.removeEventListener){aa.removeEventListener(Y,Z,false)
}else{if(aa.detachEvent){aa.detachEvent("on"+Y,Z)}else{aa["on"+Y]=S}}},T=K.bindEvents=function(Y,aa,Z){if(!Y.events){Y.events={}
}P(aa,function(ab){Y.events[ab]=function(){Z.apply(Y,arguments)};r(Y.chart.canvas,ab,Y.events[ab])})},X=K.unbindEvents=function(Y,Z){P(Z,function(ab,aa){c(Y.chart.canvas,aa,ab)
})},w=K.getMaximumWidth=function(Z){var Y=Z.parentNode;return Y.clientWidth},q=K.getMaximumHeight=function(Z){var Y=Z.parentNode;
return Y.clientHeight},A=K.getMaximumSize=K.getMaximumWidth,g=K.retinaScale=function(ab){var Z=ab.ctx,aa=ab.canvas.width,Y=ab.canvas.height;
if(window.devicePixelRatio){Z.canvas.style.width=aa+"px";Z.canvas.style.height=Y+"px";Z.canvas.height=Y*window.devicePixelRatio;
Z.canvas.width=aa*window.devicePixelRatio;Z.scale(window.devicePixelRatio,window.devicePixelRatio)}},H=K.clear=function(Y){Y.ctx.clearRect(0,0,Y.width,Y.height)
},f=K.fontString=function(Z,aa,Y){return aa+" "+Z+"px "+Y},z=K.longestText=function(Y,Z,ab){Y.font=Z;
var aa=0;P(ab,function(ac){var ad=Y.measureText(ac).width;aa=(ad>aa)?ad:aa});return aa},n=K.drawRoundedRectangle=function(ab,aa,ad,ac,Z,Y){ab.beginPath();
ab.moveTo(aa+Y,ad);ab.lineTo(aa+ac-Y,ad);ab.quadraticCurveTo(aa+ac,ad,aa+ac,ad+Y);ab.lineTo(aa+ac,ad+Z-Y);
ab.quadraticCurveTo(aa+ac,ad+Z,aa+ac-Y,ad+Z);ab.lineTo(aa+Y,ad+Z);ab.quadraticCurveTo(aa,ad+Z,aa,ad+Z-Y);
ab.lineTo(aa,ad+Y);ab.quadraticCurveTo(aa,ad,aa+Y,ad);ab.closePath()};J.instances={};J.Type=function(aa,Y,Z){this.options=Y;
this.chart=Z;this.id=k();J.instances[this.id]=this;if(Y.responsive){this.resize()}this.initialize.call(this,aa)
};v(J.Type.prototype,{initialize:function(){return this},clear:function(){H(this.chart);return this},stop:function(){K.cancelAnimFrame.call(D,this.animationFrame);
return this},resize:function(ab){this.stop();var Z=this.chart.canvas,aa=w(this.chart.canvas),Y=this.options.maintainAspectRatio?aa/this.chart.aspectRatio:q(this.chart.canvas);
Z.width=this.chart.width=aa;Z.height=this.chart.height=Y;g(this.chart);if(typeof ab==="function"){ab.apply(this,Array.prototype.slice.call(arguments,1))
}return this},reflow:S,render:function(Y){if(Y){this.reflow()}if(this.options.animation&&!Y){K.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this)
}else{this.draw();this.options.onAnimationComplete.call(this)}return this},generateLegend:function(){return j(this.options.legendTemplate,this)
},destroy:function(){this.clear();X(this,this.events);delete J.instances[this.id]},showTooltip:function(Z,aa){if(typeof this.activeElements==="undefined"){this.activeElements=[]
}var af=(function(ai){var ah=false;if(ai.length!==this.activeElements.length){ah=true;return ah}P(ai,function(ak,aj){if(ak!==this.activeElements[aj]){ah=true
}},this);return ah}).call(this,Z);if(!af&&!aa){return}else{this.activeElements=Z}this.draw();if(Z.length>0){if(this.datasets&&this.datasets.length>1){var ae,ad;
for(var ab=this.datasets.length-1;ab>=0;ab--){ae=this.datasets[ab].points||this.datasets[ab].bars||this.datasets[ab].segments;
ad=y(ae,Z[0]);if(ad!==-1){break}}var ac=[],Y=[],ag=(function(am){var ah=[],an,ap=[],ak=[],al,aj,ai,ao;
K.each(this.datasets,function(aq){an=aq.points||aq.bars||aq.segments;if(an[ad]&&an[ad].hasValue()){ah.push(an[ad])
}});K.each(ah,function(aq){ap.push(aq.x);ak.push(aq.y);ac.push(K.template(this.options.multiTooltipTemplate,aq));
Y.push({fill:aq._saved.fillColor||aq.fillColor,stroke:aq._saved.strokeColor||aq.strokeColor})},this);
ao=V(ak);aj=C(ak);ai=V(ap);al=C(ap);return{x:(ai>this.chart.width/2)?ai:al,y:(ao+aj)/2}}).call(this,ad);
new J.MultiTooltip({x:ag.x,y:ag.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:ac,legendColors:Y,legendColorBackground:this.options.multiTooltipKeyBackground,title:Z[0].label,chart:this.chart,ctx:this.chart.ctx}).draw()
}else{P(Z,function(ah){var ai=ah.tooltipPosition();new J.Tooltip({x:Math.round(ai.x),y:Math.round(ai.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:j(this.options.tooltipTemplate,ah),chart:this.chart}).draw()
},this)}}return this},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)
}});J.Type.extend=function(ac){var ab=this;var aa=function(){return ab.apply(this,arguments)};aa.prototype=B(ab.prototype);
v(aa.prototype,ac);aa.extend=J.Type.extend;if(ac.name||ab.prototype.name){var Z=ac.name||ab.prototype.name;
var Y=(J.defaults[ab.prototype.name])?B(J.defaults[ab.prototype.name]):{};J.defaults[Z]=v(Y,ac.defaults);
J.types[Z]=aa;J.prototype[Z]=function(af,ae){var ad=N(J.defaults.global,J.defaults[Z],ae||{});return new aa(af,ad,this)
}}else{u("Name not provided for this chart, so it hasn't been registered")}return ab};J.Element=function(Y){v(this,Y);
this.initialize.apply(this,arguments);this.save()};v(J.Element.prototype,{initialize:function(){},restore:function(Y){if(!Y){v(this,this._saved)
}else{P(Y,function(Z){this[Z]=this._saved[Z]},this)}return this},save:function(){this._saved=B(this);
delete this._saved._saved;return this},update:function(Y){P(Y,function(aa,Z){this._saved[Z]=this[Z];this[Z]=aa
},this);return this},transition:function(Y,Z){P(Y,function(ab,aa){this[aa]=((ab-this._saved[aa])*Z)+this._saved[aa]
},this);return this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return W(this.value)
}});J.Element.extend=i;J.Point=J.Element.extend({display:true,inRange:function(Y,aa){var Z=this.hitDetectionRadius+this.radius;
return((Math.pow(Y-this.x,2)+Math.pow(aa-this.y,2))<Math.pow(Z,2))},draw:function(){if(this.display){var Y=this.ctx;
Y.beginPath();Y.arc(this.x,this.y,this.radius,0,Math.PI*2);Y.closePath();Y.strokeStyle=this.strokeColor;
Y.lineWidth=this.strokeWidth;Y.fillStyle=this.fillColor;Y.fill();Y.stroke()}}});J.Arc=J.Element.extend({inRange:function(Z,ac){var Y=K.getAngleFromPoint(this,{x:Z,y:ac});
var ab=(Y.angle>=this.startAngle&&Y.angle<=this.endAngle),aa=(Y.distance>=this.innerRadius&&Y.distance<=this.outerRadius);
return(ab&&aa)},tooltipPosition:function(){var Y=this.startAngle+((this.endAngle-this.startAngle)/2),Z=(this.outerRadius-this.innerRadius)/2+this.innerRadius;
return{x:this.x+(Math.cos(Y)*Z),y:this.y+(Math.sin(Y)*Z)}},draw:function(aa){var Z=aa||1;var Y=this.ctx;
Y.beginPath();Y.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle);Y.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,true);
Y.closePath();Y.strokeStyle=this.strokeColor;Y.lineWidth=this.strokeWidth;Y.fillStyle=this.fillColor;
Y.fill();Y.lineJoin="bevel";if(this.showStroke){Y.stroke()}}});J.Rectangle=J.Element.extend({draw:function(){var Y=this.ctx,ad=this.width/2,aa=this.x-ad,Z=this.x+ad,ac=this.base-(this.base-this.y),ab=this.strokeWidth/2;
if(this.showStroke){aa+=ab;Z-=ab;ac+=ab}Y.beginPath();Y.fillStyle=this.fillColor;Y.strokeStyle=this.strokeColor;
Y.lineWidth=this.strokeWidth;Y.moveTo(aa,this.base);Y.lineTo(aa,ac);Y.lineTo(Z,ac);Y.lineTo(Z,this.base);
Y.fill();if(this.showStroke){Y.stroke()}},height:function(){return this.base-this.y},inRange:function(Y,Z){return(Y>=this.x-this.width/2&&Y<=this.x+this.width/2)&&(Z>=this.y&&Z<=this.base)
}});J.Tooltip=J.Element.extend({draw:function(){var ab=this.chart.ctx;ab.font=f(this.fontSize,this.fontStyle,this.fontFamily);
this.xAlign="center";this.yAlign="above";var aa=2;var ac=ab.measureText(this.text).width+2*this.xPadding,Z=this.fontSize+2*this.yPadding,ad=Z+this.caretHeight+aa;
if(this.x+ac/2>this.chart.width){this.xAlign="left"}else{if(this.x-ac/2<0){this.xAlign="right"}}if(this.y-ad<0){this.yAlign="below"
}var Y=this.x-ac/2,ae=this.y-ad;ab.fillStyle=this.fillColor;switch(this.yAlign){case"above":ab.beginPath();
ab.moveTo(this.x,this.y-aa);ab.lineTo(this.x+this.caretHeight,this.y-(aa+this.caretHeight));ab.lineTo(this.x-this.caretHeight,this.y-(aa+this.caretHeight));
ab.closePath();ab.fill();break;case"below":ae=this.y+aa+this.caretHeight;ab.beginPath();ab.moveTo(this.x,this.y+aa);
ab.lineTo(this.x+this.caretHeight,this.y+aa+this.caretHeight);ab.lineTo(this.x-this.caretHeight,this.y+aa+this.caretHeight);
ab.closePath();ab.fill();break}switch(this.xAlign){case"left":Y=this.x-ac+(this.cornerRadius+this.caretHeight);
break;case"right":Y=this.x-(this.cornerRadius+this.caretHeight);break}n(ab,Y,ae,ac,Z,this.cornerRadius);
ab.fill();ab.fillStyle=this.textColor;ab.textAlign="center";ab.textBaseline="middle";ab.fillText(this.text,Y+ac/2,ae+Z/2)
}});J.MultiTooltip=J.Element.extend({initialize:function(){this.font=f(this.fontSize,this.fontStyle,this.fontFamily);
this.titleFont=f(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);this.height=(this.labels.length*this.fontSize)+((this.labels.length-1)*(this.fontSize/2))+(this.yPadding*2)+this.titleFontSize*1.5;
this.ctx.font=this.titleFont;var ab=this.ctx.measureText(this.title).width,Z=z(this.ctx,this.font,this.labels)+this.fontSize+3,aa=C([Z,ab]);
this.width=aa+(this.xPadding*2);var Y=this.height/2;if(this.y-Y<0){this.y=Y}else{if(this.y+Y>this.chart.height){this.y=this.chart.height-Y
}}if(this.x>this.chart.width/2){this.x-=this.xOffset+this.width}else{this.x+=this.xOffset}},getLineHeight:function(Y){var aa=this.y-(this.height/2)+this.yPadding,Z=Y-1;
if(Y===0){return aa+this.titleFontSize/2}else{return aa+((this.fontSize*1.5*Z)+this.fontSize/2)+this.titleFontSize*1.5
}},draw:function(){n(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var Y=this.ctx;
Y.fillStyle=this.fillColor;Y.fill();Y.closePath();Y.textAlign="left";Y.textBaseline="middle";Y.fillStyle=this.titleTextColor;
Y.font=this.titleFont;Y.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0));Y.font=this.font;
K.each(this.labels,function(aa,Z){Y.fillStyle=this.textColor;Y.fillText(aa,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(Z+1));
Y.fillStyle=this.legendColorBackground;Y.fillRect(this.x+this.xPadding,this.getLineHeight(Z+1)-this.fontSize/2,this.fontSize,this.fontSize);
Y.fillStyle=this.legendColors[Z].fill;Y.fillRect(this.x+this.xPadding,this.getLineHeight(Z+1)-this.fontSize/2,this.fontSize,this.fontSize)
},this)}});J.Scale=J.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];
var Z=I(this.stepValue);for(var Y=0;Y<=this.steps;Y++){this.yLabels.push(j(this.templateString,{value:(this.min+(Y*this.stepValue)).toFixed(Z)}))
}this.yLabelWidth=(this.display&&this.showLabels)?z(this.ctx,this.font,this.yLabels):0},addXLabel:function(Y){this.xLabels.push(Y);
this.valuesCount++;this.fit()},removeXLabel:function(){this.xLabels.shift();this.valuesCount--;this.fit()
},fit:function(){this.startPoint=(this.display)?this.fontSize:0;this.endPoint=(this.display)?this.height-(this.fontSize*1.5)-5:this.height;
this.startPoint+=this.padding;this.endPoint-=this.padding;var Z=this.endPoint-this.startPoint,Y;this.calculateYRange(Z);
this.buildYLabels();this.calculateXLabelRotation();while((Z>this.endPoint-this.startPoint)){Z=this.endPoint-this.startPoint;
Y=this.yLabelWidth;this.calculateYRange(Z);this.buildYLabels();if(Y<this.yLabelWidth){this.calculateXLabelRotation()
}}},calculateXLabelRotation:function(){this.ctx.font=this.font;var aa=this.ctx.measureText(this.xLabels[0]).width,Y=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width,Z,af;
this.xScalePaddingRight=Y/2+3;this.xScalePaddingLeft=(aa/2>this.yLabelWidth+10)?aa/2:this.yLabelWidth+10;
this.xLabelRotation=0;if(this.display){var ab=z(this.ctx,this.font,this.xLabels),ae,ac;this.xLabelWidth=ab;
var ad=Math.floor(this.calculateX(1)-this.calculateX(0))-6;while((this.xLabelWidth>ad&&this.xLabelRotation===0)||(this.xLabelWidth>ad&&this.xLabelRotation<=90&&this.xLabelRotation>0)){ae=Math.cos(O(this.xLabelRotation));
Z=ae*aa;af=ae*Y;if(Z+this.fontSize/2>this.yLabelWidth+8){this.xScalePaddingLeft=Z+this.fontSize/2}this.xScalePaddingRight=this.fontSize/2;
this.xLabelRotation++;this.xLabelWidth=ae*ab}if(this.xLabelRotation>0){this.endPoint-=Math.sin(O(this.xLabelRotation))*ab+3
}}else{this.xLabelWidth=0;this.xScalePaddingRight=this.padding;this.xScalePaddingLeft=this.padding}},calculateYRange:S,drawingArea:function(){return this.startPoint-this.endPoint
},calculateY:function(Z){var Y=this.drawingArea()/(this.min-this.max);return this.endPoint-(Y*(Z-this.min))
},calculateX:function(aa){var ab=(this.xLabelRotation>0),Z=this.width-(this.xScalePaddingLeft+this.xScalePaddingRight),Y=Z/(this.valuesCount-((this.offsetGridLines)?0:1)),ac=(Y*aa)+this.xScalePaddingLeft;
if(this.offsetGridLines){ac+=(Y/2)}return Math.round(ac)},update:function(Y){K.extend(this,Y);this.fit()
},draw:function(){var Y=this.ctx,Z=(this.endPoint-this.startPoint)/this.steps,aa=Math.round(this.xScalePaddingLeft);
if(this.display){Y.fillStyle=this.textColor;Y.font=this.font;P(this.yLabels,function(ac,ab){var ad=this.endPoint-(Z*ab),ae=Math.round(ad);
Y.textAlign="right";Y.textBaseline="middle";if(this.showLabels){Y.fillText(ac,aa-10,ad)}Y.beginPath();
if(ab>0){Y.lineWidth=this.gridLineWidth;Y.strokeStyle=this.gridLineColor}else{Y.lineWidth=this.lineWidth;
Y.strokeStyle=this.lineColor}ae+=K.aliasPixel(Y.lineWidth);Y.moveTo(aa,ae);Y.lineTo(this.width,ae);Y.stroke();
Y.closePath();Y.lineWidth=this.lineWidth;Y.strokeStyle=this.lineColor;Y.beginPath();Y.moveTo(aa-5,ae);
Y.lineTo(aa,ae);Y.stroke();Y.closePath()},this);P(this.xLabels,function(ac,ab){var af=this.calculateX(ab)+t(this.lineWidth),ad=this.calculateX(ab-(this.offsetGridLines?0.5:0))+t(this.lineWidth),ae=(this.xLabelRotation>0);
Y.beginPath();if(ab>0){Y.lineWidth=this.gridLineWidth;Y.strokeStyle=this.gridLineColor}else{Y.lineWidth=this.lineWidth;
Y.strokeStyle=this.lineColor}Y.moveTo(ad,this.endPoint);Y.lineTo(ad,this.startPoint-3);Y.stroke();Y.closePath();
Y.lineWidth=this.lineWidth;Y.strokeStyle=this.lineColor;Y.beginPath();Y.moveTo(ad,this.endPoint);Y.lineTo(ad,this.endPoint+5);
Y.stroke();Y.closePath();Y.save();Y.translate(af,(ae)?this.endPoint+12:this.endPoint+8);Y.rotate(O(this.xLabelRotation)*-1);
Y.font=this.font;Y.textAlign=(ae)?"right":"center";Y.textBaseline=(ae)?"middle":"top";Y.fillText(ac,0,0);
Y.restore()},this)}}});J.RadialScale=J.Element.extend({initialize:function(){this.size=V([this.height,this.width]);
this.drawingArea=(this.display)?(this.size/2)-(this.fontSize/2+this.backdropPaddingY):(this.size/2)},calculateCenterOffset:function(Z){var Y=this.drawingArea/(this.max-this.min);
return(Z-this.min)*Y},update:function(){if(!this.lineArc){this.setScaleSize()}else{this.drawingArea=(this.display)?(this.size/2)-(this.fontSize/2+this.backdropPaddingY):(this.size/2)
}this.buildYLabels()},buildYLabels:function(){this.yLabels=[];var Z=I(this.stepValue);for(var Y=0;Y<=this.steps;
Y++){this.yLabels.push(j(this.templateString,{value:(this.min+(Y*this.stepValue)).toFixed(Z)}))}},getCircumference:function(){return((Math.PI*2)/this.valuesCount)
},setScaleSize:function(){var Y=V([(this.height/2-this.pointLabelFontSize-5),this.width/2]),am,ac,aj,ab,an=this.width,al,af,ae=0,ai,aa,ak,ah,ad,Z,ag;
this.ctx.font=f(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);for(ac=0;
ac<this.valuesCount;ac++){am=this.getPointPosition(ac,Y);aj=this.ctx.measureText(j(this.templateString,{value:this.labels[ac]})).width+5;
if(ac===0||ac===this.valuesCount/2){ab=aj/2;if(am.x+ab>an){an=am.x+ab;al=ac}if(am.x-ab<ae){ae=am.x-ab;
ai=ac}}else{if(ac<this.valuesCount/2){if(am.x+aj>an){an=am.x+aj;al=ac}}else{if(ac>this.valuesCount/2){if(am.x-aj<ae){ae=am.x-aj;
ai=ac}}}}}ak=ae;ah=Math.ceil(an-this.width);af=this.getIndexAngle(al);aa=this.getIndexAngle(ai);ad=ah/Math.sin(af+Math.PI/2);
Z=ak/Math.sin(aa+Math.PI/2);ad=(W(ad))?ad:0;Z=(W(Z))?Z:0;this.drawingArea=Y-(Z+ad)/2;this.setCenterPoint(Z,ad)
},setCenterPoint:function(ab,Y){var aa=this.width-Y-this.drawingArea,Z=ab+this.drawingArea;this.xCenter=(Z+aa)/2;
this.yCenter=(this.height/2)},getIndexAngle:function(Z){var Y=(Math.PI*2)/this.valuesCount;return Z*Y-(Math.PI/2)
},getPointPosition:function(Z,aa){var Y=this.getIndexAngle(Z);return{x:(Math.cos(Y)*aa)+this.xCenter,y:(Math.sin(Y)*aa)+this.yCenter}
},draw:function(){if(this.display){var ag=this.ctx;P(this.yLabels,function(al,ak){if(ak>0){var aj=ak*(this.drawingArea/this.steps),ai=this.yCenter-aj,an;
if(this.lineWidth>0){ag.strokeStyle=this.lineColor;ag.lineWidth=this.lineWidth;if(this.lineArc){ag.beginPath();
ag.arc(this.xCenter,this.yCenter,aj,0,Math.PI*2);ag.closePath();ag.stroke()}else{ag.beginPath();for(var am=0;
am<this.valuesCount;am++){an=this.getPointPosition(am,this.calculateCenterOffset(this.min+(ak*this.stepValue)));
if(am===0){ag.moveTo(an.x,an.y)}else{ag.lineTo(an.x,an.y)}}ag.closePath();ag.stroke()}}if(this.showLabels){ag.font=f(this.fontSize,this.fontStyle,this.fontFamily);
if(this.showLabelBackdrop){var ah=ag.measureText(al).width;ag.fillStyle=this.backdropColor;ag.fillRect(this.xCenter-ah/2-this.backdropPaddingX,ai-this.fontSize/2-this.backdropPaddingY,ah+this.backdropPaddingX*2,this.fontSize+this.backdropPaddingY*2)
}ag.textAlign="center";ag.textBaseline="middle";ag.fillStyle=this.fontColor;ag.fillText(al,this.xCenter,ai)
}}},this);if(!this.lineArc){ag.lineWidth=this.angleLineWidth;ag.strokeStyle=this.angleLineColor;for(var aa=this.valuesCount-1;
aa>=0;aa--){if(this.angleLineWidth>0){var Z=this.getPointPosition(aa,this.calculateCenterOffset(this.max));
ag.beginPath();ag.moveTo(this.xCenter,this.yCenter);ag.lineTo(Z.x,Z.y);ag.stroke();ag.closePath()}var ad=this.getPointPosition(aa,this.calculateCenterOffset(this.max)+5);
ag.font=f(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);ag.fillStyle=this.pointLabelFontColor;
var Y=this.labels.length,ab=this.labels.length/2,af=ab/2,ae=(aa<af||aa>Y-af),ac=(aa===af||aa===Y-af);
if(aa===0){ag.textAlign="center"}else{if(aa===ab){ag.textAlign="center"}else{if(aa<ab){ag.textAlign="left"
}else{ag.textAlign="right"}}}if(ac){ag.textBaseline="middle"}else{if(ae){ag.textBaseline="bottom"}else{ag.textBaseline="top"
}}ag.fillText(this.labels[aa],ad.x,ad.y)}}}}});K.addEvent(window,"resize",(function(){var Y;return function(){clearTimeout(Y);
Y=setTimeout(function(){P(J.instances,function(Z){if(Z.options.responsive){Z.resize(Z.render,true)}})
},50)}})());if(m){define(function(){return J})}else{if(typeof module==="object"&&module.exports){module.exports=J
}}D.Chart=J;J.noConflict=function(){D.Chart=M;return J}}).call(this);(function(){var c=this,b=c.Chart,d=b.helpers;
var a={scaleBeginAtZero:true,scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:true,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};
b.Type.extend({name:"Bar",defaults:a,initialize:function(f){var e=this.options;this.ScaleClass=b.Scale.extend({offsetGridLines:true,calculateBarX:function(g,n,j){var i=this.calculateBaseWidth(),m=this.calculateX(j)-(i/2),k=this.calculateBarWidth(g);
return m+(k*n)+(n*e.barDatasetSpacing)+k/2},calculateBaseWidth:function(){return(this.calculateX(1)-this.calculateX(0))-(2*e.barValueSpacing)
},calculateBarWidth:function(i){var g=this.calculateBaseWidth()-((i-1)*e.barDatasetSpacing);return(g/i)
}});this.datasets=[];if(this.options.showTooltips){d.bindEvents(this,this.options.tooltipEvents,function(g){var i=(g.type!=="mouseout")?this.getBarsAtEvent(g):[];
this.eachBars(function(j){j.restore(["fillColor","strokeColor"])});d.each(i,function(j){j.fillColor=j.highlightFill;
j.strokeColor=j.highlightStroke});this.showTooltip(i)})}this.BarClass=b.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx});
d.each(f.datasets,function(i,j){var g={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,bars:[]};
this.datasets.push(g);d.each(i.data,function(k,m){g.bars.push(new this.BarClass({value:k,label:f.labels[m],datasetLabel:i.label,strokeColor:i.strokeColor,fillColor:i.fillColor,highlightFill:i.highlightFill||i.fillColor,highlightStroke:i.highlightStroke||i.strokeColor}))
},this)},this);this.buildScale(f.labels);this.BarClass.prototype.base=this.scale.endPoint;this.eachBars(function(i,g,j){d.extend(i,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,j,g),y:this.scale.endPoint});
i.save()},this);this.render()},update:function(){this.scale.update();d.each(this.activeElements,function(e){e.restore(["fillColor","strokeColor"])
});this.eachBars(function(e){e.save()});this.render()},eachBars:function(e){d.each(this.datasets,function(f,g){d.each(f.bars,e,this,g)
},this)},getBarsAtEvent:function(k){var g=[],j=d.getRelativePosition(k),f=function(e){g.push(e.bars[i])
},i;for(var m=0;m<this.datasets.length;m++){for(i=0;i<this.datasets[m].bars.length;i++){if(this.datasets[m].bars[i].inRange(j.x,j.y)){d.each(this.datasets,f);
return g}}}return g},buildScale:function(i){var f=this;var g=function(){var j=[];f.eachBars(function(k){j.push(k.value)
});return j};var e={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:i.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(k){var j=d.calculateScaleRange(g(),k,this.fontSize,this.beginAtZero,this.integersOnly);
d.extend(this,j)},xLabels:i,font:d.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,gridLineWidth:(this.options.scaleShowGridLines)?this.options.scaleGridLineWidth:0,gridLineColor:(this.options.scaleShowGridLines)?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:(this.options.showScale)?0:(this.options.barShowStroke)?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};
if(this.options.scaleOverride){d.extend(e,{calculateYRange:d.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)})
}this.scale=new this.ScaleClass(e)},addData:function(f,e){d.each(f,function(g,i){this.datasets[i].bars.push(new this.BarClass({value:g,label:e,x:this.scale.calculateBarX(this.datasets.length,i,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[i].strokeColor,fillColor:this.datasets[i].fillColor}))
},this);this.scale.addXLabel(e);this.update()},removeData:function(){this.scale.removeXLabel();d.each(this.datasets,function(e){e.bars.shift()
},this);this.update()},reflow:function(){d.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});
var e=d.extend({height:this.chart.height,width:this.chart.width});this.scale.update(e)},draw:function(g){var f=g||1;
this.clear();var e=this.chart.ctx;this.scale.draw(f);d.each(this.datasets,function(i,j){d.each(i.bars,function(m,k){if(m.hasValue()){m.base=this.scale.endPoint;
m.transition({x:this.scale.calculateBarX(this.datasets.length,j,k),y:this.scale.calculateY(m.value),width:this.scale.calculateBarWidth(this.datasets.length)},f).draw()
}},this)},this)}})}).call(this);(function(){var c=this,b=c.Chart,d=b.helpers;var a={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};
b.Type.extend({name:"Doughnut",defaults:a,initialize:function(e){this.segments=[];this.outerRadius=(d.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2;
this.SegmentArc=b.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2});if(this.options.showTooltips){d.bindEvents(this,this.options.tooltipEvents,function(f){var g=(f.type!=="mouseout")?this.getSegmentsAtEvent(f):[];
d.each(this.segments,function(i){i.restore(["fillColor"])});d.each(g,function(i){i.fillColor=i.highlightColor
});this.showTooltip(g)})}this.calculateTotal(e);d.each(e,function(g,f){this.addData(g,f,true)},this);
this.render()},getSegmentsAtEvent:function(i){var g=[];var f=d.getRelativePosition(i);d.each(this.segments,function(e){if(e.inRange(f.x,f.y)){g.push(e)
}},this);return g},addData:function(i,g,e){var f=g||this.segments.length;this.segments.splice(f,0,new this.SegmentArc({value:i.value,outerRadius:(this.options.animateScale)?0:this.outerRadius,innerRadius:(this.options.animateScale)?0:(this.outerRadius/100)*this.options.percentageInnerCutout,fillColor:i.color,highlightColor:i.highlight||i.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:Math.PI*1.5,circumference:(this.options.animateRotate)?0:this.calculateCircumference(i.value),label:i.label}));
if(!e){this.reflow();this.update()}},calculateCircumference:function(e){return(Math.PI*2)*(e/this.total)
},calculateTotal:function(e){this.total=0;d.each(e,function(f){this.total+=f.value},this)},update:function(){this.calculateTotal(this.segments);
d.each(this.activeElements,function(e){e.restore(["fillColor"])});d.each(this.segments,function(e){e.save()
});this.render()},removeData:function(f){var e=(d.isNumber(f))?f:this.segments.length-1;this.segments.splice(e,1);
this.reflow();this.update()},reflow:function(){d.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2});
this.outerRadius=(d.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2;d.each(this.segments,function(e){e.update({outerRadius:this.outerRadius,innerRadius:(this.outerRadius/100)*this.options.percentageInnerCutout})
},this)},draw:function(e){var f=(e)?e:1;this.clear();d.each(this.segments,function(i,g){i.transition({circumference:this.calculateCircumference(i.value),outerRadius:this.outerRadius,innerRadius:(this.outerRadius/100)*this.options.percentageInnerCutout},f);
i.endAngle=i.startAngle+i.circumference;i.draw();if(g===0){i.startAngle=Math.PI*1.5}if(g<this.segments.length-1){this.segments[g+1].startAngle=i.endAngle
}},this)}});b.types.Doughnut.extend({name:"Pie",defaults:d.merge(a,{percentageInnerCutout:0})})}).call(this);
(function(){var c=this,b=c.Chart,d=b.helpers;var a={scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:true,bezierCurveTension:0.4,pointDot:true,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};
b.Type.extend({name:"Line",defaults:a,initialize:function(e){this.PointClass=b.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(f){return(Math.pow(f-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2))
}});this.datasets=[];if(this.options.showTooltips){d.bindEvents(this,this.options.tooltipEvents,function(f){var g=(f.type!=="mouseout")?this.getPointsAtEvent(f):[];
this.eachPoints(function(i){i.restore(["fillColor","strokeColor"])});d.each(g,function(i){i.fillColor=i.highlightFill;
i.strokeColor=i.highlightStroke});this.showTooltip(g)})}d.each(e.datasets,function(g){var f={label:g.label||null,fillColor:g.fillColor,strokeColor:g.strokeColor,pointColor:g.pointColor,pointStrokeColor:g.pointStrokeColor,points:[]};
this.datasets.push(f);d.each(g.data,function(i,j){f.points.push(new this.PointClass({value:i,label:e.labels[j],datasetLabel:g.label,strokeColor:g.pointStrokeColor,fillColor:g.pointColor,highlightFill:g.pointHighlightFill||g.pointColor,highlightStroke:g.pointHighlightStroke||g.pointStrokeColor}))
},this);this.buildScale(e.labels);this.eachPoints(function(i,j){d.extend(i,{x:this.scale.calculateX(j),y:this.scale.endPoint});
i.save()},this)},this);this.render()},update:function(){this.scale.update();d.each(this.activeElements,function(e){e.restore(["fillColor","strokeColor"])
});this.eachPoints(function(e){e.save()});this.render()},eachPoints:function(e){d.each(this.datasets,function(f){d.each(f.points,e,this)
},this)},getPointsAtEvent:function(g){var i=[],f=d.getRelativePosition(g);d.each(this.datasets,function(e){d.each(e.points,function(j){if(j.inRange(f.x,f.y)){i.push(j)
}})},this);return i},buildScale:function(i){var f=this;var g=function(){var j=[];f.eachPoints(function(k){j.push(k.value)
});return j};var e={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:i.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(k){var j=d.calculateScaleRange(g(),k,this.fontSize,this.beginAtZero,this.integersOnly);
d.extend(this,j)},xLabels:i,font:d.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,gridLineWidth:(this.options.scaleShowGridLines)?this.options.scaleGridLineWidth:0,gridLineColor:(this.options.scaleShowGridLines)?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:(this.options.showScale)?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};
if(this.options.scaleOverride){d.extend(e,{calculateYRange:d.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)})
}this.scale=new b.Scale(e)},addData:function(f,e){d.each(f,function(g,i){this.datasets[i].points.push(new this.PointClass({value:g,label:e,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[i].pointStrokeColor,fillColor:this.datasets[i].pointColor}))
},this);this.scale.addXLabel(e);this.update()},removeData:function(){this.scale.removeXLabel();d.each(this.datasets,function(e){e.points.shift()
},this);this.update()},reflow:function(){var e=d.extend({height:this.chart.height,width:this.chart.width});
this.scale.update(e)},draw:function(k){var f=k||1;this.clear();var e=this.chart.ctx;var g=function(m){return m.value!==null
},j=function(m,o,n){return d.findNextWhere(o,g,n)||m},i=function(m,o,n){return d.findPreviousWhere(o,g,n)||m
};this.scale.draw(f);d.each(this.datasets,function(n){var m=d.where(n.points,g);d.each(n.points,function(o,p){if(o.hasValue()){o.transition({y:this.scale.calculateY(o.value),x:this.scale.calculateX(p)},f)
}},this);if(this.options.bezierCurve){d.each(m,function(o,p){var q=(p>0&&p<m.length-1)?this.options.bezierCurveTension:0;
o.controlPoints=d.splineCurve(i(o,m,p),o,j(o,m,p),q);if(o.controlPoints.outer.y>this.scale.endPoint){o.controlPoints.outer.y=this.scale.endPoint
}else{if(o.controlPoints.outer.y<this.scale.startPoint){o.controlPoints.outer.y=this.scale.startPoint
}}if(o.controlPoints.inner.y>this.scale.endPoint){o.controlPoints.inner.y=this.scale.endPoint}else{if(o.controlPoints.inner.y<this.scale.startPoint){o.controlPoints.inner.y=this.scale.startPoint
}}},this)}e.lineWidth=this.options.datasetStrokeWidth;e.strokeStyle=n.strokeColor;e.beginPath();d.each(m,function(o,p){if(p===0){e.moveTo(o.x,o.y)
}else{if(this.options.bezierCurve){var q=i(o,m,p);e.bezierCurveTo(q.controlPoints.outer.x,q.controlPoints.outer.y,o.controlPoints.inner.x,o.controlPoints.inner.y,o.x,o.y)
}else{e.lineTo(o.x,o.y)}}},this);e.stroke();if(this.options.datasetFill&&m.length>0){e.lineTo(m[m.length-1].x,this.scale.endPoint);
e.lineTo(m[0].x,this.scale.endPoint);e.fillStyle=n.fillColor;e.closePath();e.fill()}d.each(m,function(o){o.draw()
})},this)}})}).call(this);(function(){var c=this,b=c.Chart,d=b.helpers;var a={scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:true,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:true,segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};
b.Type.extend({name:"PolarArea",defaults:a,initialize:function(e){this.segments=[];this.SegmentArc=b.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2});
this.scale=new b.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:(this.options.scaleShowLine)?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:true,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:e.length});
this.updateScaleRange(e);this.scale.update();d.each(e,function(g,f){this.addData(g,f,true)},this);if(this.options.showTooltips){d.bindEvents(this,this.options.tooltipEvents,function(f){var g=(f.type!=="mouseout")?this.getSegmentsAtEvent(f):[];
d.each(this.segments,function(i){i.restore(["fillColor"])});d.each(g,function(i){i.fillColor=i.highlightColor
});this.showTooltip(g)})}this.render()},getSegmentsAtEvent:function(i){var g=[];var f=d.getRelativePosition(i);
d.each(this.segments,function(e){if(e.inRange(f.x,f.y)){g.push(e)}},this);return g},addData:function(i,g,e){var f=g||this.segments.length;
this.segments.splice(f,0,new this.SegmentArc({fillColor:i.color,highlightColor:i.highlight||i.color,label:i.label,value:i.value,outerRadius:(this.options.animateScale)?0:this.scale.calculateCenterOffset(i.value),circumference:(this.options.animateRotate)?0:this.scale.getCircumference(),startAngle:Math.PI*1.5}));
if(!e){this.reflow();this.update()}},removeData:function(f){var e=(d.isNumber(f))?f:this.segments.length-1;
this.segments.splice(e,1);this.reflow();this.update()},calculateTotal:function(e){this.total=0;d.each(e,function(f){this.total+=f.value
},this);this.scale.valuesCount=this.segments.length},updateScaleRange:function(f){var e=[];d.each(f,function(i){e.push(i.value)
});var g=(this.options.scaleOverride)?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)}:d.calculateScaleRange(e,d.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);
d.extend(this.scale,g,{size:d.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})
},update:function(){this.calculateTotal(this.segments);d.each(this.segments,function(e){e.save()});this.render()
},reflow:function(){d.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2});
this.updateScaleRange(this.segments);this.scale.update();d.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2});
d.each(this.segments,function(e){e.update({outerRadius:this.scale.calculateCenterOffset(e.value)})},this)
},draw:function(f){var e=f||1;this.clear();d.each(this.segments,function(i,g){i.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(i.value)},e);
i.endAngle=i.startAngle+i.circumference;if(g===0){i.startAngle=Math.PI*1.5}if(g<this.segments.length-1){this.segments[g+1].startAngle=i.endAngle
}i.draw()},this);this.scale.draw()}})}).call(this);(function(){var b=this,a=b.Chart,c=a.helpers;a.Type.extend({name:"Radar",defaults:{scaleShowLine:true,angleShowLineOut:true,scaleShowLabels:false,scaleBeginAtZero:true,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:true,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(d){this.PointClass=a.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx});
this.datasets=[];this.buildScale(d);if(this.options.showTooltips){c.bindEvents(this,this.options.tooltipEvents,function(e){var f=(e.type!=="mouseout")?this.getPointsAtEvent(e):[];
this.eachPoints(function(g){g.restore(["fillColor","strokeColor"])});c.each(f,function(g){g.fillColor=g.highlightFill;
g.strokeColor=g.highlightStroke});this.showTooltip(f)})}c.each(d.datasets,function(f){var e={label:f.label||null,fillColor:f.fillColor,strokeColor:f.strokeColor,pointColor:f.pointColor,pointStrokeColor:f.pointStrokeColor,points:[]};
this.datasets.push(e);c.each(f.data,function(g,i){var j;if(!this.scale.animation){j=this.scale.getPointPosition(i,this.scale.calculateCenterOffset(g))
}e.points.push(new this.PointClass({value:g,label:d.labels[i],datasetLabel:f.label,x:(this.options.animation)?this.scale.xCenter:j.x,y:(this.options.animation)?this.scale.yCenter:j.y,strokeColor:f.pointStrokeColor,fillColor:f.pointColor,highlightFill:f.pointHighlightFill||f.pointColor,highlightStroke:f.pointHighlightStroke||f.pointStrokeColor}))
},this)},this);this.render()},eachPoints:function(d){c.each(this.datasets,function(e){c.each(e.points,d,this)
},this)},getPointsAtEvent:function(d){var j=c.getRelativePosition(d),f=c.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},j);
var e=(Math.PI*2)/this.scale.valuesCount,g=Math.round((f.angle-Math.PI*1.5)/e),i=[];if(g>=this.scale.valuesCount||g<0){g=0
}if(f.distance<=this.scale.drawingArea){c.each(this.datasets,function(k){i.push(k.points[g])})}return i
},buildScale:function(d){this.scale=new a.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:(this.options.scaleShowLine)?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:(this.options.angleShowLineOut)?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:d.labels,valuesCount:d.datasets[0].data.length});
this.scale.setScaleSize();this.updateScaleRange(d.datasets);this.scale.buildYLabels()},updateScaleRange:function(e){var d=(function(){var g=[];
c.each(e,function(i){if(i.data){g=g.concat(i.data)}else{c.each(i.points,function(j){g.push(j.value)})
}});return g})();var f=(this.options.scaleOverride)?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)}:c.calculateScaleRange(d,c.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);
c.extend(this.scale,f)},addData:function(e,d){this.scale.valuesCount++;c.each(e,function(f,i){var g=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(f));
this.datasets[i].points.push(new this.PointClass({value:f,label:d,x:g.x,y:g.y,strokeColor:this.datasets[i].pointStrokeColor,fillColor:this.datasets[i].pointColor}))
},this);this.scale.labels.push(d);this.reflow();this.update()},removeData:function(){this.scale.valuesCount--;
this.scale.labels.shift();c.each(this.datasets,function(d){d.points.shift()},this);this.reflow();this.update()
},update:function(){this.eachPoints(function(d){d.save()});this.reflow();this.render()},reflow:function(){c.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:c.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2});
this.updateScaleRange(this.datasets);this.scale.setScaleSize();this.scale.buildYLabels()},draw:function(f){var e=f||1,d=this.chart.ctx;
this.clear();this.scale.draw();c.each(this.datasets,function(g){c.each(g.points,function(i,j){if(i.hasValue()){i.transition(this.scale.getPointPosition(j,this.scale.calculateCenterOffset(i.value)),e)
}},this);d.lineWidth=this.options.datasetStrokeWidth;d.strokeStyle=g.strokeColor;d.beginPath();c.each(g.points,function(i,j){if(j===0){d.moveTo(i.x,i.y)
}else{d.lineTo(i.x,i.y)}},this);d.closePath();d.stroke();d.fillStyle=g.fillColor;d.fill();c.each(g.points,function(i){if(i.hasValue()){i.draw()
}})},this)}})}).call(this);if(!document.createElement("canvas").getContext){(function(){var Y=Math;var q=Y.round;
var o=Y.sin;var B=Y.cos;var H=Y.abs;var N=Y.sqrt;var d=10;var f=d/2;function A(){return this.context_||(this.context_=new D(this))
}var v=Array.prototype.slice;function g(j,m,p){var i=v.call(arguments,2);return function(){return j.apply(m,i.concat(v.call(arguments)))
}}function ad(i){return String(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function R(j){if(!j.namespaces.g_vml_){j.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML")
}if(!j.namespaces.g_o_){j.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML")
}if(!j.styleSheets.ex_canvas_){var i=j.createStyleSheet();i.owningElement.id="ex_canvas_";i.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
}}R(document);var e={init:function(i){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var j=i||document;
j.createElement("canvas");j.attachEvent("onreadystatechange",g(this.init_,this,j))}},init_:function(p){var m=p.getElementsByTagName("canvas");
for(var j=0;j<m.length;j++){this.initElement(m[j])}},initElement:function(j){if(!j.getContext){j.getContext=A;
R(j.ownerDocument);j.innerHTML="";j.attachEvent("onpropertychange",z);j.attachEvent("onresize",V);var i=j.attributes;
if(i.width&&i.width.specified){j.style.width=i.width.nodeValue+"px"}else{j.width=j.clientWidth}if(i.height&&i.height.specified){j.style.height=i.height.nodeValue+"px"
}else{j.height=j.clientHeight}}return j}};function z(j){var i=j.srcElement;switch(j.propertyName){case"width":i.getContext().clearRect();
i.style.width=i.attributes.width.nodeValue+"px";i.firstChild.style.width=i.clientWidth+"px";break;case"height":i.getContext().clearRect();
i.style.height=i.attributes.height.nodeValue+"px";i.firstChild.style.height=i.clientHeight+"px";break
}}function V(j){var i=j.srcElement;if(i.firstChild){i.firstChild.style.width=i.clientWidth+"px";i.firstChild.style.height=i.clientHeight+"px"
}}e.init();var n=[];for(var ac=0;ac<16;ac++){for(var ab=0;ab<16;ab++){n[ac*16+ab]=ac.toString(16)+ab.toString(16)
}}function C(){return[[1,0,0],[0,1,0],[0,0,1]]}function J(p,m){var j=C();for(var i=0;i<3;i++){for(var af=0;
af<3;af++){var Z=0;for(var ae=0;ae<3;ae++){Z+=p[i][ae]*m[ae][af]}j[i][af]=Z}}return j}function x(j,i){i.fillStyle=j.fillStyle;
i.lineCap=j.lineCap;i.lineJoin=j.lineJoin;i.lineWidth=j.lineWidth;i.miterLimit=j.miterLimit;i.shadowBlur=j.shadowBlur;
i.shadowColor=j.shadowColor;i.shadowOffsetX=j.shadowOffsetX;i.shadowOffsetY=j.shadowOffsetY;i.strokeStyle=j.strokeStyle;
i.globalAlpha=j.globalAlpha;i.font=j.font;i.textAlign=j.textAlign;i.textBaseline=j.textBaseline;i.arcScaleX_=j.arcScaleX_;
i.arcScaleY_=j.arcScaleY_;i.lineScale_=j.lineScale_}var b={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"};
function M(j){var p=j.indexOf("(",3);var i=j.indexOf(")",p+1);var m=j.substring(p+1,i).split(",");if(m.length==4&&j.substr(3,1)=="a"){alpha=Number(m[3])
}else{m[3]=1}return m}function c(i){return parseFloat(i)/100}function u(j,m,i){return Math.min(i,Math.max(m,j))
}function I(af){var m,j,i;h=parseFloat(af[0])/360%360;if(h<0){h++}s=u(c(af[1]),0,1);l=u(c(af[2]),0,1);
if(s==0){m=j=i=l}else{var Z=l<0.5?l*(1+s):l+s-l*s;var ae=2*l-Z;m=a(ae,Z,h+1/3);j=a(ae,Z,h);i=a(ae,Z,h-1/3)
}return"#"+n[Math.floor(m*255)]+n[Math.floor(j*255)]+n[Math.floor(i*255)]}function a(j,i,m){if(m<0){m++
}if(m>1){m--}if(6*m<1){return j+(i-j)*6*m}else{if(2*m<1){return i}else{if(3*m<2){return j+(i-j)*(2/3-m)*6
}else{return j}}}}function F(j){var ae,Z=1;j=String(j);if(j.charAt(0)=="#"){ae=j}else{if(/^rgb/.test(j)){var p=M(j);
var ae="#",af;for(var m=0;m<3;m++){if(p[m].indexOf("%")!=-1){af=Math.floor(c(p[m])*255)}else{af=Number(p[m])
}ae+=n[u(af,0,255)]}Z=p[3]}else{if(/^hsl/.test(j)){var p=M(j);ae=I(p);Z=p[3]}else{ae=b[j]||j}}}return{color:ae,alpha:Z}
}var r={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"};var L={};function E(i){if(L[i]){return L[i]
}var p=document.createElement("div");var m=p.style;try{m.font=i}catch(j){}return L[i]={style:m.fontStyle||r.style,variant:m.fontVariant||r.variant,weight:m.fontWeight||r.weight,size:m.fontSize||r.size,family:m.fontFamily||r.family}
}function w(m,j){var i={};for(var af in m){i[af]=m[af]}var ae=parseFloat(j.currentStyle.fontSize),Z=parseFloat(m.size);
if(typeof m.size=="number"){i.size=m.size}else{if(m.size.indexOf("px")!=-1){i.size=Z}else{if(m.size.indexOf("em")!=-1){i.size=ae*Z
}else{if(m.size.indexOf("%")!=-1){i.size=(ae/100)*Z}else{if(m.size.indexOf("pt")!=-1){i.size=Z/0.75}else{i.size=ae
}}}}}i.size*=0.981;return i}function aa(i){return i.style+" "+i.variant+" "+i.weight+" "+i.size+"px "+i.family
}function S(i){switch(i){case"butt":return"flat";case"round":return"round";case"square":default:return"square"
}}function D(j){this.m_=C();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";
this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=d*1;
this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=j;
var i=j.ownerDocument.createElement("div");i.style.width=j.clientWidth+"px";i.style.height=j.clientHeight+"px";
i.style.overflow="hidden";i.style.position="absolute";j.appendChild(i);this.element_=i;this.arcScaleX_=1;
this.arcScaleY_=1;this.lineScale_=1}var t=D.prototype;t.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);
this.textMeasureEl_=null}this.element_.innerHTML=""};t.beginPath=function(){this.currentPath_=[]};t.moveTo=function(j,i){var m=this.getCoords_(j,i);
this.currentPath_.push({type:"moveTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};t.lineTo=function(j,i){var m=this.getCoords_(j,i);
this.currentPath_.push({type:"lineTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};t.bezierCurveTo=function(m,j,ai,ah,ag,ae){var i=this.getCoords_(ag,ae);
var af=this.getCoords_(m,j);var Z=this.getCoords_(ai,ah);K(this,af,Z,i)};function K(i,Z,m,j){i.currentPath_.push({type:"bezierCurveTo",cp1x:Z.x,cp1y:Z.y,cp2x:m.x,cp2y:m.y,x:j.x,y:j.y});
i.currentX_=j.x;i.currentY_=j.y}t.quadraticCurveTo=function(ag,m,j,i){var af=this.getCoords_(ag,m);var ae=this.getCoords_(j,i);
var ah={x:this.currentX_+2/3*(af.x-this.currentX_),y:this.currentY_+2/3*(af.y-this.currentY_)};var Z={x:ah.x+(ae.x-this.currentX_)/3,y:ah.y+(ae.y-this.currentY_)/3};
K(this,ah,Z,ae)};t.arc=function(aj,ah,ai,ae,j,m){ai*=d;var an=m?"at":"wa";var ak=aj+B(ae)*ai-f;var am=ah+o(ae)*ai-f;
var i=aj+B(j)*ai-f;var al=ah+o(j)*ai-f;if(ak==i&&!m){ak+=0.125}var Z=this.getCoords_(aj,ah);var ag=this.getCoords_(ak,am);
var af=this.getCoords_(i,al);this.currentPath_.push({type:an,x:Z.x,y:Z.y,radius:ai,xStart:ag.x,yStart:ag.y,xEnd:af.x,yEnd:af.y})
};t.rect=function(m,j,i,p){this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);
this.closePath()};t.strokeRect=function(m,j,i,p){var Z=this.currentPath_;this.beginPath();this.moveTo(m,j);
this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath();this.stroke();this.currentPath_=Z
};t.fillRect=function(m,j,i,p){var Z=this.currentPath_;this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);
this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath();this.fill();this.currentPath_=Z};t.createLinearGradient=function(j,p,i,m){var Z=new U("gradient");
Z.x0_=j;Z.y0_=p;Z.x1_=i;Z.y1_=m;return Z};t.createRadialGradient=function(p,ae,m,j,Z,i){var af=new U("gradientradial");
af.x0_=p;af.y0_=ae;af.r0_=m;af.x1_=j;af.y1_=Z;af.r1_=i;return af};t.drawImage=function(ao,m){var ah,af,aj,aw,am,ak,aq,ay;
var ai=ao.runtimeStyle.width;var an=ao.runtimeStyle.height;ao.runtimeStyle.width="auto";ao.runtimeStyle.height="auto";
var ag=ao.width;var au=ao.height;ao.runtimeStyle.width=ai;ao.runtimeStyle.height=an;if(arguments.length==3){ah=arguments[1];
af=arguments[2];am=ak=0;aq=aj=ag;ay=aw=au}else{if(arguments.length==5){ah=arguments[1];af=arguments[2];
aj=arguments[3];aw=arguments[4];am=ak=0;aq=ag;ay=au}else{if(arguments.length==9){am=arguments[1];ak=arguments[2];
aq=arguments[3];ay=arguments[4];ah=arguments[5];af=arguments[6];aj=arguments[7];aw=arguments[8]}else{throw Error("Invalid number of arguments")
}}}var ax=this.getCoords_(ah,af);var p=aq/2;var j=ay/2;var av=[];var i=10;var ae=10;av.push(" <g_vml_:group",' coordsize="',d*i,",",d*ae,'"',' coordorigin="0,0"',' style="width:',i,"px;height:",ae,"px;position:absolute;");
if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var Z=[];Z.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",q(ax.x/d),",","Dy=",q(ax.y/d),"");
var at=ax;var ar=this.getCoords_(ah+aj,af);var ap=this.getCoords_(ah,af+aw);var al=this.getCoords_(ah+aj,af+aw);
at.x=Y.max(at.x,ar.x,ap.x,al.x);at.y=Y.max(at.y,ar.y,ap.y,al.y);av.push("padding:0 ",q(at.x/d),"px ",q(at.y/d),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",Z.join(""),", sizingmethod='clip');")
}else{av.push("top:",q(ax.y/d),"px;left:",q(ax.x/d),"px;")}av.push(' ">','<g_vml_:image src="',ao.src,'"',' style="width:',d*aj,"px;"," height:",d*aw,'px"',' cropleft="',am/ag,'"',' croptop="',ak/au,'"',' cropright="',(ag-am-aq)/ag,'"',' cropbottom="',(au-ak-ay)/au,'"'," />","</g_vml_:group>");
this.element_.insertAdjacentHTML("BeforeEnd",av.join(""))};t.stroke=function(am){var Z=10;var an=10;var ae=5000;
var ag={x:null,y:null};var al={x:null,y:null};for(var ah=0;ah<this.currentPath_.length;ah+=ae){var ak=[];
var af=false;ak.push("<g_vml_:shape",' filled="',!!am,'"',' style="position:absolute;width:',Z,"px;height:",an,'px;"',' coordorigin="0,0"',' coordsize="',d*Z,",",d*an,'"',' stroked="',!am,'"',' path="');
var ao=false;for(var ai=ah;ai<Math.min(ah+ae,this.currentPath_.length);ai++){if(ai%ae==0&&ai>0){ak.push(" m ",q(this.currentPath_[ai-1].x),",",q(this.currentPath_[ai-1].y))
}var m=this.currentPath_[ai];var aj;switch(m.type){case"moveTo":aj=m;ak.push(" m ",q(m.x),",",q(m.y));
break;case"lineTo":ak.push(" l ",q(m.x),",",q(m.y));break;case"close":ak.push(" x ");m=null;break;case"bezierCurveTo":ak.push(" c ",q(m.cp1x),",",q(m.cp1y),",",q(m.cp2x),",",q(m.cp2y),",",q(m.x),",",q(m.y));
break;case"at":case"wa":ak.push(" ",m.type," ",q(m.x-this.arcScaleX_*m.radius),",",q(m.y-this.arcScaleY_*m.radius)," ",q(m.x+this.arcScaleX_*m.radius),",",q(m.y+this.arcScaleY_*m.radius)," ",q(m.xStart),",",q(m.yStart)," ",q(m.xEnd),",",q(m.yEnd));
break}if(m){if(ag.x==null||m.x<ag.x){ag.x=m.x}if(al.x==null||m.x>al.x){al.x=m.x}if(ag.y==null||m.y<ag.y){ag.y=m.y
}if(al.y==null||m.y>al.y){al.y=m.y}}}ak.push(' ">');if(!am){y(this,ak)}else{G(this,ak,ag,al)}ak.push("</g_vml_:shape>");
this.element_.insertAdjacentHTML("beforeEnd",ak.join(""))}};function y(m,ae){var j=F(m.strokeStyle);var p=j.color;
var Z=j.alpha*m.globalAlpha;var i=m.lineScale_*m.lineWidth;if(i<1){Z*=i}ae.push("<g_vml_:stroke",' opacity="',Z,'"',' joinstyle="',m.lineJoin,'"',' miterlimit="',m.miterLimit,'"',' endcap="',S(m.lineCap),'"',' weight="',i,'px"',' color="',p,'" />')
}function G(ao,ag,aI,ap){var ah=ao.fillStyle;var az=ao.arcScaleX_;var ay=ao.arcScaleY_;var j=ap.x-aI.x;
var p=ap.y-aI.y;if(ah instanceof U){var al=0;var aD={x:0,y:0};var av=0;var ak=1;if(ah.type_=="gradient"){var aj=ah.x0_/az;
var m=ah.y0_/ay;var ai=ah.x1_/az;var aK=ah.y1_/ay;var aH=ao.getCoords_(aj,m);var aG=ao.getCoords_(ai,aK);
var ae=aG.x-aH.x;var Z=aG.y-aH.y;al=Math.atan2(ae,Z)*180/Math.PI;if(al<0){al+=360}if(al<0.000001){al=0
}}else{var aH=ao.getCoords_(ah.x0_,ah.y0_);aD={x:(aH.x-aI.x)/j,y:(aH.y-aI.y)/p};j/=az*d;p/=ay*d;var aB=Y.max(j,p);
av=2*ah.r0_/aB;ak=2*ah.r1_/aB-av}var at=ah.colors_;at.sort(function(aL,i){return aL.offset-i.offset});
var an=at.length;var ar=at[0].color;var aq=at[an-1].color;var ax=at[0].alpha*ao.globalAlpha;var aw=at[an-1].alpha*ao.globalAlpha;
var aC=[];for(var aF=0;aF<an;aF++){var am=at[aF];aC.push(am.offset*ak+av+" "+am.color)}ag.push('<g_vml_:fill type="',ah.type_,'"',' method="none" focus="100%"',' color="',ar,'"',' color2="',aq,'"',' colors="',aC.join(","),'"',' opacity="',aw,'"',' g_o_:opacity2="',ax,'"',' angle="',al,'"',' focusposition="',aD.x,",",aD.y,'" />')
}else{if(ah instanceof T){if(j&&p){var af=-aI.x;var aA=-aI.y;ag.push("<g_vml_:fill",' position="',af/j*az*az,",",aA/p*ay*ay,'"',' type="tile"',' src="',ah.src_,'" />')
}}else{var aJ=F(ao.fillStyle);var au=aJ.color;var aE=aJ.alpha*ao.globalAlpha;ag.push('<g_vml_:fill color="',au,'" opacity="',aE,'" />')
}}}t.fill=function(){this.stroke(true)};t.closePath=function(){this.currentPath_.push({type:"close"})
};t.getCoords_=function(p,j){var i=this.m_;return{x:d*(p*i[0][0]+j*i[1][0]+i[2][0])-f,y:d*(p*i[0][1]+j*i[1][1]+i[2][1])-f}
};t.save=function(){var i={};x(this,i);this.aStack_.push(i);this.mStack_.push(this.m_);this.m_=J(C(),this.m_)
};t.restore=function(){if(this.aStack_.length){x(this.aStack_.pop(),this);this.m_=this.mStack_.pop()}};
function k(i){return isFinite(i[0][0])&&isFinite(i[0][1])&&isFinite(i[1][0])&&isFinite(i[1][1])&&isFinite(i[2][0])&&isFinite(i[2][1])
}function X(j,i,p){if(!k(i)){return}j.m_=i;if(p){var Z=i[0][0]*i[1][1]-i[0][1]*i[1][0];j.lineScale_=N(H(Z))
}}t.translate=function(m,j){var i=[[1,0,0],[0,1,0],[m,j,1]];X(this,J(i,this.m_),false)};t.rotate=function(j){var p=B(j);
var m=o(j);var i=[[p,m,0],[-m,p,0],[0,0,1]];X(this,J(i,this.m_),false)};t.scale=function(m,j){this.arcScaleX_*=m;
this.arcScaleY_*=j;var i=[[m,0,0],[0,j,0],[0,0,1]];X(this,J(i,this.m_),true)};t.transform=function(Z,p,af,ae,j,i){var m=[[Z,p,0],[af,ae,0],[j,i,1]];
X(this,J(m,this.m_),true)};t.setTransform=function(ae,Z,ag,af,p,j){var i=[[ae,Z,0],[ag,af,0],[p,j,1]];
X(this,i,true)};t.drawText_=function(ak,ai,ah,an,ag){var am=this.m_,aq=1000,j=0,ap=aq,af={x:0,y:0},ae=[];
var i=w(E(this.font),this.element_);var p=aa(i);var ar=this.element_.currentStyle;var Z=this.textAlign.toLowerCase();
switch(Z){case"left":case"center":case"right":break;case"end":Z=ar.direction=="ltr"?"right":"left";break;
case"start":Z=ar.direction=="rtl"?"right":"left";break;default:Z="left"}switch(this.textBaseline){case"hanging":case"top":af.y=i.size/1.75;
break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":af.y=-i.size/2.25;
break}switch(Z){case"right":j=aq;ap=0.05;break;case"center":j=ap=aq/2;break}var ao=this.getCoords_(ai+af.x,ah+af.y);
ae.push('<g_vml_:line from="',-j,' 0" to="',ap,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!ag,'" stroked="',!!ag,'" style="position:absolute;width:1px;height:1px;">');
if(ag){y(this,ae)}else{G(this,ae,{x:-j,y:0},{x:ap,y:i.size})}var al=am[0][0].toFixed(3)+","+am[1][0].toFixed(3)+","+am[0][1].toFixed(3)+","+am[1][1].toFixed(3)+",0,0";
var aj=q(ao.x/d)+","+q(ao.y/d);ae.push('<g_vml_:skew on="t" matrix="',al,'" ',' offset="',aj,'" origin="',j,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',ad(ak),'" style="v-text-align:',Z,";font:",ad(p),'" /></g_vml_:line>');
this.element_.insertAdjacentHTML("beforeEnd",ae.join(""))};t.fillText=function(m,i,p,j){this.drawText_(m,i,p,j,false)
};t.strokeText=function(m,i,p,j){this.drawText_(m,i,p,j,true)};t.measureText=function(m){if(!this.textMeasureEl_){var i='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
this.element_.insertAdjacentHTML("beforeEnd",i);this.textMeasureEl_=this.element_.lastChild}var j=this.element_.ownerDocument;
this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(j.createTextNode(m));
return{width:this.textMeasureEl_.offsetWidth}};t.clip=function(){};t.arcTo=function(){};t.createPattern=function(j,i){return new T(j,i)
};function U(i){this.type_=i;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]
}U.prototype.addColorStop=function(j,i){i=F(i);this.colors_.push({offset:j,color:i.color,alpha:i.alpha})
};function T(j,i){Q(j);switch(i){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=i;
break;default:O("SYNTAX_ERR")}this.src_=j.src;this.width_=j.width;this.height_=j.height}function O(i){throw new P(i)
}function Q(i){if(!i||i.nodeType!=1||i.tagName!="IMG"){O("TYPE_MISMATCH_ERR")}if(i.readyState!="complete"){O("INVALID_STATE_ERR")
}}function P(i){this.code=this[i];this.message=i+": DOM Exception "+this.code}var W=P.prototype=new Error;
W.INDEX_SIZE_ERR=1;W.DOMSTRING_SIZE_ERR=2;W.HIERARCHY_REQUEST_ERR=3;W.WRONG_DOCUMENT_ERR=4;W.INVALID_CHARACTER_ERR=5;
W.NO_DATA_ALLOWED_ERR=6;W.NO_MODIFICATION_ALLOWED_ERR=7;W.NOT_FOUND_ERR=8;W.NOT_SUPPORTED_ERR=9;W.INUSE_ATTRIBUTE_ERR=10;
W.INVALID_STATE_ERR=11;W.SYNTAX_ERR=12;W.INVALID_MODIFICATION_ERR=13;W.NAMESPACE_ERR=14;W.INVALID_ACCESS_ERR=15;
W.VALIDATION_ERR=16;W.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=e;CanvasRenderingContext2D=D;CanvasGradient=U;
CanvasPattern=T;DOMException=P})()}if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;
return new a()}}(function(c,b,a){var d={init:function(e,f){var g=this;g.$elem=c(f);g.options=c.extend({},c.fn.owlCarousel.options,g.$elem.data(),e);
g.userOptions=e;g.loadContent()},loadContent:function(){var g=this,f;function e(m){var j,k="";if(typeof g.options.jsonSuccess==="function"){g.options.jsonSuccess.apply(this,[m])
}else{for(j in m.owl){if(m.owl.hasOwnProperty(j)){k+=m.owl[j].item}}g.$elem.html(k)}g.logIn()}if(typeof g.options.beforeInit==="function"){g.options.beforeInit.apply(this,[g.$elem])
}if(typeof g.options.jsonPath==="string"){f=g.options.jsonPath;c.getJSON(f,e)}else{g.logIn()}},logIn:function(){var e=this;
e.$elem.data("owl-originalStyles",e.$elem.attr("style"));e.$elem.data("owl-originalClasses",e.$elem.attr("class"));
e.$elem.css({opacity:0});e.orignalItems=e.options.items;e.checkBrowser();e.wrapperWidth=0;e.checkVisible=null;
e.setVars()},setVars:function(){var e=this;if(e.$elem.children().length===0){return false}e.baseClass();
e.eventTypes();e.$userItems=e.$elem.children();e.itemsAmount=e.$userItems.length;e.wrapItems();e.$owlItems=e.$elem.find(".owl-item");
e.$owlWrapper=e.$elem.find(".owl-wrapper");e.playDirection="next";e.prevItem=0;e.prevArr=[0];e.currentItem=0;
e.customEvents();e.onStartup()},onStartup:function(){var e=this;e.updateItems();e.calculateAll();e.buildControls();
e.updateControls();e.response();e.moveEvents();e.stopOnHover();e.owlStatus();if(e.options.transitionStyle!==false){e.transitionTypes(e.options.transitionStyle)
}if(e.options.autoPlay===true){e.options.autoPlay=5000}e.play();e.$elem.find(".owl-wrapper").css("display","block");
if(!e.$elem.is(":visible")){e.watchVisibility()}else{e.$elem.css("opacity",1)}e.onstartup=false;e.eachMoveUpdate();
if(typeof e.options.afterInit==="function"){e.options.afterInit.apply(this,[e.$elem])}},eachMoveUpdate:function(){var e=this;
if(e.options.lazyLoad===true){e.lazyLoad()}if(e.options.autoHeight===true){e.autoHeight()}e.onVisibleItems();
if(typeof e.options.afterAction==="function"){e.options.afterAction.apply(this,[e.$elem])}},updateVars:function(){var e=this;
if(typeof e.options.beforeUpdate==="function"){e.options.beforeUpdate.apply(this,[e.$elem])}e.watchVisibility();
e.updateItems();e.calculateAll();e.updatePosition();e.updateControls();e.eachMoveUpdate();if(typeof e.options.afterUpdate==="function"){e.options.afterUpdate.apply(this,[e.$elem])
}},reload:function(){var e=this;b.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;
if(e.$elem.is(":visible")===false){e.$elem.css({opacity:0});b.clearInterval(e.autoPlayInterval);b.clearInterval(e.checkVisible)
}else{return false}e.checkVisible=b.setInterval(function(){if(e.$elem.is(":visible")){e.reload();e.$elem.animate({opacity:1},200);
b.clearInterval(e.checkVisible)}},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');e.wrapperOuter=e.$elem.find(".owl-wrapper-outer");
e.$elem.css("display","block")},baseClass:function(){var g=this,e=g.$elem.hasClass(g.options.baseClass),f=g.$elem.hasClass(g.options.theme);
if(!e){g.$elem.addClass(g.options.baseClass)}if(!f){g.$elem.addClass(g.options.theme)}},updateItems:function(){var g=this,f,e;
if(g.options.responsive===false){return false}if(g.options.singleItem===true){g.options.items=g.orignalItems=1;
g.options.itemsCustom=false;g.options.itemsDesktop=false;g.options.itemsDesktopSmall=false;g.options.itemsTablet=false;
g.options.itemsTabletSmall=false;g.options.itemsMobile=false;return false}f=c(g.options.responsiveBaseWidth).width();
if(f>(g.options.itemsDesktop[0]||g.orignalItems)){g.options.items=g.orignalItems}if(g.options.itemsCustom!==false){g.options.itemsCustom.sort(function(j,i){return j[0]-i[0]
});for(e=0;e<g.options.itemsCustom.length;e+=1){if(g.options.itemsCustom[e][0]<=f){g.options.items=g.options.itemsCustom[e][1]
}}}else{if(f<=g.options.itemsDesktop[0]&&g.options.itemsDesktop!==false){g.options.items=g.options.itemsDesktop[1]
}if(f<=g.options.itemsDesktopSmall[0]&&g.options.itemsDesktopSmall!==false){g.options.items=g.options.itemsDesktopSmall[1]
}if(f<=g.options.itemsTablet[0]&&g.options.itemsTablet!==false){g.options.items=g.options.itemsTablet[1]
}if(f<=g.options.itemsTabletSmall[0]&&g.options.itemsTabletSmall!==false){g.options.items=g.options.itemsTabletSmall[1]
}if(f<=g.options.itemsMobile[0]&&g.options.itemsMobile!==false){g.options.items=g.options.itemsMobile[1]
}}if(g.options.items>g.itemsAmount&&g.options.itemsScaleUp===true){g.options.items=g.itemsAmount}},response:function(){var g=this,f,e;
if(g.options.responsive!==true){return false}e=c(b).width();g.resizer=function(){if(c(b).width()!==e){if(g.options.autoPlay!==false){b.clearInterval(g.autoPlayInterval)
}b.clearTimeout(f);f=b.setTimeout(function(){e=c(b).width();g.updateVars()},g.options.responsiveRefreshRate)
}};c(b).resize(g.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem);if(e.options.autoPlay!==false){e.checkAp()
}},appendItemsSizes:function(){var g=this,e=0,f=g.itemsAmount-g.options.items;g.$owlItems.each(function(i){var j=c(this);
j.css({width:g.itemWidth}).data("owl-item",Number(i));if(i%g.options.items===0||i===f){if(!(i>f)){e+=1
}}j.data("owl-roundPages",e)})},appendWrapperSizes:function(){var f=this,e=f.$owlItems.length*f.itemWidth;
f.$owlWrapper.css({width:e*2,left:0});f.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth();
e.appendWrapperSizes();e.loops();e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)
},max:function(){var e=this,f=((e.itemsAmount*e.itemWidth)-e.options.items*e.itemWidth)*-1;if(e.options.items>e.itemsAmount){e.maximumItem=0;
f=0;e.maximumPixels=0}else{e.maximumItem=e.itemsAmount-e.options.items;e.maximumPixels=f}return f},min:function(){return 0
},loops:function(){var m=this,k=0,g=0,f,j,e;m.positionsInArray=[0];m.pagesInArray=[];for(f=0;f<m.itemsAmount;
f+=1){g+=m.itemWidth;m.positionsInArray.push(-g);if(m.options.scrollPerPage===true){j=c(m.$owlItems[f]);
e=j.data("owl-roundPages");if(e!==k){m.pagesInArray[k]=m.positionsInArray[f];k=e}}}},buildControls:function(){var e=this;
if(e.options.navigation===true||e.options.pagination===true){e.owlControls=c('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)
}if(e.options.pagination===true){e.buildPagination()}if(e.options.navigation===true){e.buildButtons()
}},buildButtons:function(){var f=this,e=c('<div class="owl-buttons"/>');f.owlControls.append(e);f.buttonPrev=c("<div/>",{"class":"owl-prev",html:f.options.navigationText[0]||""});
f.buttonNext=c("<div/>",{"class":"owl-next",html:f.options.navigationText[1]||""});e.append(f.buttonPrev).append(f.buttonNext);
e.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(g){g.preventDefault()
});e.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(g){g.preventDefault();
if(c(this).hasClass("owl-next")){f.next()}else{f.prev()}})},buildPagination:function(){var e=this;e.paginationWrapper=c('<div class="owl-pagination"/>');
e.owlControls.append(e.paginationWrapper);e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(f){f.preventDefault();
if(Number(c(this).data("owl-page"))!==e.currentItem){e.goTo(Number(c(this).data("owl-page")),true)}})
},updatePagination:function(){var n=this,f,m,k,j,g,e;if(n.options.pagination===false){return false}n.paginationWrapper.html("");
f=0;m=n.itemsAmount-n.itemsAmount%n.options.items;for(j=0;j<n.itemsAmount;j+=1){if(j%n.options.items===0){f+=1;
if(m===j){k=n.itemsAmount-n.options.items}g=c("<div/>",{"class":"owl-page"});e=c("<span></span>",{text:n.options.paginationNumbers===true?f:"","class":n.options.paginationNumbers===true?"owl-numbers":""});
g.append(e);g.data("owl-page",m===j?k:j);g.data("owl-roundPages",f);n.paginationWrapper.append(g)}}n.checkPagination()
},checkPagination:function(){var e=this;if(e.options.pagination===false){return false}e.paginationWrapper.find(".owl-page").each(function(){if(c(this).data("owl-roundPages")===c(e.$owlItems[e.currentItem]).data("owl-roundPages")){e.paginationWrapper.find(".owl-page").removeClass("active");
c(this).addClass("active")}})},checkNavigation:function(){var e=this;if(e.options.navigation===false){return false
}if(e.options.rewindNav===false){if(e.currentItem===0&&e.maximumItem===0){e.buttonPrev.addClass("disabled");
e.buttonNext.addClass("disabled")}else{if(e.currentItem===0&&e.maximumItem!==0){e.buttonPrev.addClass("disabled");
e.buttonNext.removeClass("disabled")}else{if(e.currentItem===e.maximumItem){e.buttonPrev.removeClass("disabled");
e.buttonNext.addClass("disabled")}else{if(e.currentItem!==0&&e.currentItem!==e.maximumItem){e.buttonPrev.removeClass("disabled");
e.buttonNext.removeClass("disabled")}}}}}},updateControls:function(){var e=this;e.updatePagination();
e.checkNavigation();if(e.owlControls){if(e.options.items>=e.itemsAmount){e.owlControls.hide()}else{e.owlControls.show()
}}},destroyControls:function(){var e=this;if(e.owlControls){e.owlControls.remove()}},next:function(f){var e=this;
if(e.isTransition){return false}e.currentItem+=e.options.scrollPerPage===true?e.options.items:1;if(e.currentItem>e.maximumItem+(e.options.scrollPerPage===true?(e.options.items-1):0)){if(e.options.rewindNav===true){e.currentItem=0;
f="rewind"}else{e.currentItem=e.maximumItem;return false}}e.goTo(e.currentItem,f)},prev:function(f){var e=this;
if(e.isTransition){return false}if(e.options.scrollPerPage===true&&e.currentItem>0&&e.currentItem<e.options.items){e.currentItem=0
}else{e.currentItem-=e.options.scrollPerPage===true?e.options.items:1}if(e.currentItem<0){if(e.options.rewindNav===true){e.currentItem=e.maximumItem;
f="rewind"}else{e.currentItem=0;return false}}e.goTo(e.currentItem,f)},goTo:function(e,j,g){var i=this,f;
if(i.isTransition){return false}if(typeof i.options.beforeMove==="function"){i.options.beforeMove.apply(this,[i.$elem])
}if(e>=i.maximumItem){e=i.maximumItem}else{if(e<=0){e=0}}i.currentItem=i.owl.currentItem=e;if(i.options.transitionStyle!==false&&g!=="drag"&&i.options.items===1&&i.browser.support3d===true){i.swapSpeed(0);
if(i.browser.support3d===true){i.transition3d(i.positionsInArray[e])}else{i.css2slide(i.positionsInArray[e],1)
}i.afterGo();i.singleItemTransition();return false}f=i.positionsInArray[e];if(i.browser.support3d===true){i.isCss3Finish=false;
if(j===true){i.swapSpeed("paginationSpeed");b.setTimeout(function(){i.isCss3Finish=true},i.options.paginationSpeed)
}else{if(j==="rewind"){i.swapSpeed(i.options.rewindSpeed);b.setTimeout(function(){i.isCss3Finish=true
},i.options.rewindSpeed)}else{i.swapSpeed("slideSpeed");b.setTimeout(function(){i.isCss3Finish=true},i.options.slideSpeed)
}}i.transition3d(f)}else{if(j===true){i.css2slide(f,i.options.paginationSpeed)}else{if(j==="rewind"){i.css2slide(f,i.options.rewindSpeed)
}else{i.css2slide(f,i.options.slideSpeed)}}}i.afterGo()},jumpTo:function(e){var f=this;if(typeof f.options.beforeMove==="function"){f.options.beforeMove.apply(this,[f.$elem])
}if(e>=f.maximumItem||e===-1){e=f.maximumItem}else{if(e<=0){e=0}}f.swapSpeed(0);if(f.browser.support3d===true){f.transition3d(f.positionsInArray[e])
}else{f.css2slide(f.positionsInArray[e],1)}f.currentItem=f.owl.currentItem=e;f.afterGo()},afterGo:function(){var e=this;
e.prevArr.push(e.currentItem);e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2];e.prevArr.shift(0);
if(e.prevItem!==e.currentItem){e.checkPagination();e.checkNavigation();e.eachMoveUpdate();if(e.options.autoPlay!==false){e.checkAp()
}}if(typeof e.options.afterMove==="function"&&e.prevItem!==e.currentItem){e.options.afterMove.apply(this,[e.$elem])
}},stop:function(){var e=this;e.apStatus="stop";b.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;
if(e.apStatus!=="stop"){e.play()}},play:function(){var e=this;e.apStatus="play";if(e.options.autoPlay===false){return false
}b.clearInterval(e.autoPlayInterval);e.autoPlayInterval=b.setInterval(function(){e.next(true)},e.options.autoPlay)
},swapSpeed:function(f){var e=this;if(f==="slideSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
}else{if(f==="paginationSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))}else{if(typeof f!=="string"){e.$owlWrapper.css(e.addCssSpeed(f))
}}}},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}
},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}
},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}
},transition3d:function(f){var e=this;e.$owlWrapper.css(e.doTranslate(f))},css2move:function(f){var e=this;
e.$owlWrapper.css({left:f})},css2slide:function(g,f){var e=this;e.isCssFinish=false;e.$owlWrapper.stop(true,true).animate({left:g},{duration:f||e.options.slideSpeed,complete:function(){e.isCssFinish=true
}})},checkBrowser:function(){var k=this,g="translate3d(0px, 0px, 0px)",j=a.createElement("div"),i,f,m,e;
j.style.cssText="  -moz-transform:"+g+"; -ms-transform:"+g+"; -o-transform:"+g+"; -webkit-transform:"+g+"; transform:"+g;
i=/translate3d\(0px, 0px, 0px\)/g;f=j.style.cssText.match(i);m=(f!==null&&f.length===1);e="ontouchstart" in b||b.navigator.msMaxTouchPoints;
k.browser={support3d:m,isTouch:e}},moveEvents:function(){var e=this;if(e.options.mouseDrag!==false||e.options.touchDrag!==false){e.gestures();
e.disabledEvents()}},eventTypes:function(){var f=this,e=["s","e","x"];f.ev_types={};if(f.options.mouseDrag===true&&f.options.touchDrag===true){e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]
}else{if(f.options.mouseDrag===false&&f.options.touchDrag===true){e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]
}else{if(f.options.mouseDrag===true&&f.options.touchDrag===false){e=["mousedown.owl","mousemove.owl","mouseup.owl"]
}}}f.ev_types.start=e[0];f.ev_types.move=e[1];f.ev_types.end=e[2]},disabledEvents:function(){var e=this;
e.$elem.on("dragstart.owl",function(f){f.preventDefault()});e.$elem.on("mousedown.disableTextSelect",function(f){return c(f.target).is("input, textarea, select, option")
})},gestures:function(){var i=this,j={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};
i.isCssFinish=true;function m(n){if(n.touches!==undefined){return{x:n.touches[0].pageX,y:n.touches[0].pageY}
}if(n.touches===undefined){if(n.pageX!==undefined){return{x:n.pageX,y:n.pageY}}if(n.pageX===undefined){return{x:n.clientX,y:n.clientY}
}}}function k(n){if(n==="on"){c(a).on(i.ev_types.move,g);c(a).on(i.ev_types.end,e)}else{if(n==="off"){c(a).off(i.ev_types.move);
c(a).off(i.ev_types.end)}}}function f(p){var o=p.originalEvent||p||b.event,n;if(o.which===3){return false
}if(i.itemsAmount<=i.options.items){return}if(i.isCssFinish===false&&!i.options.dragBeforeAnimFinish){return false
}if(i.isCss3Finish===false&&!i.options.dragBeforeAnimFinish){return false}if(i.options.autoPlay!==false){b.clearInterval(i.autoPlayInterval)
}if(i.browser.isTouch!==true&&!i.$owlWrapper.hasClass("grabbing")){i.$owlWrapper.addClass("grabbing")
}i.newPosX=0;i.newRelativeX=0;c(this).css(i.removeTransition());n=c(this).position();j.relativePos=n.left;
j.offsetX=m(o).x-n.left;j.offsetY=m(o).y-n.top;k("on");j.sliding=false;j.targetElement=o.target||o.srcElement
}function g(q){var p=q.originalEvent||q||b.event,n,o;i.newPosX=m(p).x-j.offsetX;i.newPosY=m(p).y-j.offsetY;
i.newRelativeX=i.newPosX-j.relativePos;if(typeof i.options.startDragging==="function"&&j.dragging!==true&&i.newRelativeX!==0){j.dragging=true;
i.options.startDragging.apply(i,[i.$elem])}if((i.newRelativeX>8||i.newRelativeX<-8)&&(i.browser.isTouch===true)){if(p.preventDefault!==undefined){p.preventDefault()
}else{p.returnValue=false}j.sliding=true}if((i.newPosY>10||i.newPosY<-10)&&j.sliding===false){c(a).off("touchmove.owl")
}n=function(){return i.newRelativeX/5};o=function(){return i.maximumPixels+i.newRelativeX/5};i.newPosX=Math.max(Math.min(i.newPosX,n()),o());
if(i.browser.support3d===true){i.transition3d(i.newPosX)}else{i.css2move(i.newPosX)}}function e(r){var q=r.originalEvent||r||b.event,p,o,n;
q.target=q.target||q.srcElement;j.dragging=false;if(i.browser.isTouch!==true){i.$owlWrapper.removeClass("grabbing")
}if(i.newRelativeX<0){i.dragDirection=i.owl.dragDirection="left"}else{i.dragDirection=i.owl.dragDirection="right"
}if(i.newRelativeX!==0){p=i.getNewPosition();i.goTo(p,false,"drag");if(j.targetElement===q.target&&i.browser.isTouch!==true){c(q.target).on("click.disable",function(t){t.stopImmediatePropagation();
t.stopPropagation();t.preventDefault();c(t.target).off("click.disable")});o=c._data(q.target,"events").click;
n=o.pop();o.splice(0,0,n)}}k("off")}i.$elem.on(i.ev_types.start,".owl-wrapper",f)},getNewPosition:function(){var f=this,e=f.closestItem();
if(e>f.maximumItem){f.currentItem=f.maximumItem;e=f.maximumItem}else{if(f.newPosX>=0){e=0;f.currentItem=0
}}return e},closestItem:function(){var g=this,i=g.options.scrollPerPage===true?g.pagesInArray:g.positionsInArray,e=g.newPosX,f=null;
c.each(i,function(k,j){if(e-(g.itemWidth/20)>i[k+1]&&e-(g.itemWidth/20)<j&&g.moveDirection()==="left"){f=j;
if(g.options.scrollPerPage===true){g.currentItem=c.inArray(f,g.positionsInArray)}else{g.currentItem=k
}}else{if(e+(g.itemWidth/20)<j&&e+(g.itemWidth/20)>(i[k+1]||i[k]-g.itemWidth)&&g.moveDirection()==="right"){if(g.options.scrollPerPage===true){f=i[k+1]||i[i.length-1];
g.currentItem=c.inArray(f,g.positionsInArray)}else{f=i[k+1];g.currentItem=k+1}}}});return g.currentItem
},moveDirection:function(){var e=this,f;if(e.newRelativeX<0){f="right";e.playDirection="next"}else{f="left";
e.playDirection="prev"}return f},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()
});e.$elem.on("owl.prev",function(){e.prev()});e.$elem.on("owl.play",function(f,g){e.options.autoPlay=g;
e.play();e.hoverStatus="play"});e.$elem.on("owl.stop",function(){e.stop();e.hoverStatus="stop"});e.$elem.on("owl.goTo",function(g,f){e.goTo(f)
});e.$elem.on("owl.jumpTo",function(g,f){e.jumpTo(f)})},stopOnHover:function(){var e=this;if(e.options.stopOnHover===true&&e.browser.isTouch!==true&&e.options.autoPlay!==false){e.$elem.on("mouseover",function(){e.stop()
});e.$elem.on("mouseout",function(){if(e.hoverStatus!=="stop"){e.play()}})}},lazyLoad:function(){var m=this,j,f,k,g,e;
if(m.options.lazyLoad===false){return false}for(j=0;j<m.itemsAmount;j+=1){f=c(m.$owlItems[j]);if(f.data("owl-loaded")==="loaded"){continue
}k=f.data("owl-item");g=f.find(".lazyOwl");if(typeof g.data("src")!=="string"){f.data("owl-loaded","loaded");
continue}if(f.data("owl-loaded")===undefined){g.hide();f.addClass("loading").data("owl-loaded","checked")
}if(m.options.lazyFollow===true){e=k>=m.currentItem}else{e=true}if(e&&k<m.currentItem+m.options.items&&g.length){m.lazyPreload(f,g)
}}},lazyPreload:function(e,f){var j=this,i=0,k;if(f.prop("tagName")==="DIV"){f.css("background-image","url("+f.data("src")+")");
k=true}else{f[0].src=f.data("src")}function g(){e.data("owl-loaded","loaded").removeClass("loading");
f.removeAttr("data-src");if(j.options.lazyEffect==="fade"){f.fadeIn(400)}else{f.show()}if(typeof j.options.afterLazyLoad==="function"){j.options.afterLazyLoad.apply(this,[j.$elem])
}}function m(){i+=1;if(j.completeImg(f.get(0))||k===true){g()}else{if(i<=100){b.setTimeout(m,100)}else{g()
}}}m()},autoHeight:function(){var i=this,j=c(i.$owlItems[i.currentItem]).find("img"),g;function e(){var k=c(i.$owlItems[i.currentItem]).height();
i.wrapperOuter.css("height",k+"px");if(!i.wrapperOuter.hasClass("autoHeight")){b.setTimeout(function(){i.wrapperOuter.addClass("autoHeight")
},0)}}function f(){g+=1;if(i.completeImg(j.get(0))){e()}else{if(g<=100){b.setTimeout(f,100)}else{i.wrapperOuter.css("height","")
}}}if(j.get(0)!==undefined){g=0;f()}else{e()}},completeImg:function(e){var f;if(!e.complete){return false
}f=typeof e.naturalWidth;if(f!=="undefined"&&e.naturalWidth===0){return false}return true},onVisibleItems:function(){var f=this,e;
if(f.options.addClassActive===true){f.$owlItems.removeClass("active")}f.visibleItems=[];for(e=f.currentItem;
e<f.currentItem+f.options.items;e+=1){f.visibleItems.push(e);if(f.options.addClassActive===true){c(f.$owlItems[e]).addClass("active")
}}f.owl.visibleItems=f.visibleItems},transitionTypes:function(e){var f=this;f.outClass="owl-"+e+"-out";
f.inClass="owl-"+e+"-in"},singleItemTransition:function(){var f=this,i=f.outClass,m=f.inClass,k=f.$owlItems.eq(f.currentItem),j=f.$owlItems.eq(f.prevItem),o=Math.abs(f.positionsInArray[f.currentItem])+f.positionsInArray[f.prevItem],n=Math.abs(f.positionsInArray[f.currentItem])+f.itemWidth/2,g="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
f.isTransition=true;f.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":n+"px","-moz-perspective-origin":n+"px","perspective-origin":n+"px"});
function e(p){return{position:"relative",left:p+"px"}}j.css(e(o,10)).addClass(i).on(g,function(){f.endPrev=true;
j.off(g);f.clearTransStyle(j,i)});k.addClass(m).on(g,function(){f.endCurrent=true;k.off(g);f.clearTransStyle(k,m)
})},clearTransStyle:function(f,e){var g=this;f.css({position:"",left:""}).removeClass(e);if(g.endPrev&&g.endCurrent){g.$owlWrapper.removeClass("owl-origin");
g.endPrev=false;g.endCurrent=false;g.isTransition=false}},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}
},clearEvents:function(){var e=this;e.$elem.off(".owl owl mousedown.disableTextSelect");c(a).off(".owl owl");
c(b).off("resize",e.resizer)},unWrap:function(){var e=this;if(e.$elem.children().length!==0){e.$owlWrapper.unwrap();
e.$userItems.unwrap().unwrap();if(e.owlControls){e.owlControls.remove()}}e.clearEvents();e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))
},destroy:function(){var e=this;e.stop();b.clearInterval(e.checkVisible);e.unWrap();e.$elem.removeData()
},reinit:function(g){var f=this,e=c.extend({},f.userOptions,g);f.unWrap();f.init(e,f.$elem)},addItem:function(i,f){var g=this,e;
if(!i){return false}if(g.$elem.children().length===0){g.$elem.append(i);g.setVars();return false}g.unWrap();
if(f===undefined||f===-1){e=-1}else{e=f}if(e>=g.$userItems.length||e===-1){g.$userItems.eq(-1).after(i)
}else{g.$userItems.eq(e).before(i)}g.setVars()},removeItem:function(f){var g=this,e;if(g.$elem.children().length===0){return false
}if(f===undefined||f===-1){e=-1}else{e=f}g.unWrap();g.$userItems.eq(e).remove();g.setVars()}};c.fn.owlCarousel=function(e){return this.each(function(){if(c(this).data("owl-init")===true){return false
}c(this).data("owl-init",true);var f=Object.create(d);f.init(e,this);c.data(this,"owlCarousel",f)})};
c.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}
}(jQuery,window,document));var thousand=1000;var lakh=100000;var gnity=10000;var crore=10000000;var dPlaces=1;
var loadingContent="<p class='clr loader'><img src='/images/loader-small.gif' alt='Loader'/>&nbsp;&nbsp;&nbsp;&nbsp;Updating Results...</p>";
var inputEdit=false;function getValue(a){return parseInt($("#"+a).text())}function getAmountInThousands(a){return parseInt(a/thousand)
}function getAmountInLakhs(b,a){if(!a){a=dPlaces}return Math.round((b/lakh)*Math.pow(10,a))/Math.pow(10,a)
}function getAmountInCrores(b,a){if(!a){a=dPlaces}return Math.round((b/crore)*Math.pow(10,a))/Math.pow(10,a)
}function getShortFormattedAmount(d){var c,b,a=2;switch(true){case (d>=crore):c=getAmountInCrores(d,a);
b="C";return c+b;break;case (d>=lakh):c=getAmountInLakhs(d,a);b="L";return c+b;break;default:return getFormattedNumber(d);
break}}function getFormattedAmount(d){var c,b,a=2;switch(true){case (d>=crore):c=getAmountInCrores(d,a);
b=(c==1)?"Crore":"Crores";return c+" "+b;break;case (d>=lakh):c=getAmountInLakhs(d,a);b=(c==1)?"Lakh":"Lakhs";
return c+" "+b;break;default:return getFormattedNumber(d);break}}function formatAmoutInWords(){$(".word-amount").each(function(){if((!this.innerHTML.NaN)&&(this.innerHTML!="")&&(this.innerHTML!="N/A")){this.innerHTML=getFormattedAmount(this.innerHTML)
}})}function getTnrTxt(d){var c=parseInt(d/12);var e=d%12;var b=(c>0?(c+(c>1?" Years":" Year")):"");var a=(e>0?(e+(e>1?" Months":" Month")):"");
return b+a}function getAmount(b){var d=(b>=crore)?getAmountInCrores(b,2)*crore:getAmountInLakhs(b,2)*lakh;
var a=getValue("minLmt_val");var c=getValue("maxLmt_val");return Math.round(Math.max(a,Math.min(c,d)))
}function getPremium(b){var d=(b>=crore)?getAmountInCrores(b,2)*crore:getAmountInLakhs(b,2)*lakh;var a=getValue("minPremium_val");
var c=getValue("maxPremium_val");return Math.round(Math.max(a,Math.min(c,d)))}function adjustAmount(b){var a=getValue("minLmt_val");
var c=getValue("maxLmt_val");return Math.round(Math.max(a,Math.min(c,b)))}function adjustPremium(b){var a=getValue("minPremium_val");
var c=getValue("maxPremium_val");return Math.round(Math.max(a,Math.min(c,b)))}function getMinAmount(){return getValue("minLmt_val")
}function getMaxAmount(){return getValue("maxLmt_val")}function getCurrentAmount(){return getValue("curLmt_val")
}function setCurrentAmount(c){if(isNaN(c)){return}var e=getAmount(c);if(inputEdit){var a=$("#curLmt_input").val();
a=parseInt(a.replace(/,/g,""));a=adjustAmount(a);$("#curLmt_val").text(getAmountInThousands(a)*thousand);
inputEdit=false}else{$("#curLmt_val").text(e)}if($("#curLmt").is("select")){var b=$("#loanAmountDecimal").length?parseInt($("#loanAmountDecimal").val()):1;
var d=getAmountInLakhs(e,b);$("#curLmt").val(d)}else{$("#curLmt").text(getFormattedAmount(e))}}function getCurrentPremium(){return getValue("curPremium_val")
}function setCurrentPremium(b){if(isNaN(b)){return}var d=getPremium(b);if(inputEdit){var a=$("#curPremium_input").val();
a=parseInt(a.replace(/,/g,""));a=adjustPremium(a);$("#curPremium_val").text(getAmountInThousands(a)*thousand);
inputEdit=false}else{$("#curPremium_val").text(d)}if($("#curPremium").is("select")){var c=getAmountInLakhs(d,1);
$("#curPremium").val(c)}else{$("#curPremium").text(getFormattedAmount(d))}}function getMinTenure(){return getValue("minTnr_val")
}function getMaxTenure(){return getValue("maxTnr_val")}function getCurrentTenure(){return getValue("curTnr_val")
}function setCurrentTenure(c){if(isNaN(c)){return}c=Math.round(c/6)*6;var a=c%12;var b=parseInt((c-a)/12);
$("#curTnr_val").text(c);b=b>0?b:"";if($("#curTnr").is("select")){$("#curTnr").val(b)}else{$("#curTnr").text(b)
}$("span#years").text(b>0?(b==1?" Year":" Years"):"");$(".tenureStr").text(b);if(a!=0){$("#curTnrmonths").text(a);
$("span.hidemonth").removeClass("dontshow")}else{$("span.hidemonth").addClass("dontshow");$("#curTnrmonths").text(" ")
}}function getSliderStepping(i,a,f){var g=Math.round(parseInt(i-a)/f);var d=[1000,2000,5000,10000,25000,50000,lakh];
var e=0,c=d.length-1;while(c-e>1){var b=Math.round((e+c)/2);if(d[b]<=g){e=b}else{c=b}}return d[c]}function lockSliders(a){$("#lmtSlider,#tnrSlider").slider(a?"disable":"enable");
if(a){$(".showMaxElig").addClass("dontshow")}else{$(".showMaxElig").removeClass("dontshow")}}function bindFunctions(){$("body").bind("mousedown",function(b){if(!b){b=window.event
}var a=b.target||b.srcElement;if(!(a.id=="saveAmountLink"||a.id=="editAmountLink"||a.id=="curLmt_input")){closeEditAmount()
}})}function unbindFunctions(){$("body").unbind("mousedown")}function stepAmount(b){var d=$("#curLmt_input");
var a=d.val();a=parseInt(a.replace(/,/g,""));var c=a+b*parseInt($("#gnity").val());c=getAmount(c);$("#curLmt_input").val(getFormattedNumber(c))
}function closeEditAmount(){$("#curLmt").removeClass("dontshow");$("#curLmt_input").blur();$("#curLmt_input").parent().addClass("dontshow");
$("#editAmountLink").removeClass("dontshow");$("#saveAmountLink").parent().addClass("dontshow");unbindFunctions()
}function saveAmount(){var a=$("#curLmt_input").val();if(a!=""){var b=getValue("curLmt_val");a=parseInt(a.replace(/,/g,""));
a=getAmountInThousands(a)*thousand;if(a!=b){inputEdit=true;$(".loan-amount").slider("setValue",a,true).trigger("slideStop")
}}closeEditAmount()}function editAmount(){var a=getValue("curLmt_val");$("#curLmt_input").val(getFormattedNumber(a));
$("#curLmt").addClass("dontshow");$("#curLmt_input").parent().removeClass("dontshow");$("#curLmt_input").focus().select();
$("#editAmountLink").addClass("dontshow");$("#saveAmountLink").parent().removeClass("dontshow");bindFunctions()
}function checkAmountKeyup(b){var a=(b.keyCode?b.keyCode:b.which);if(a=="13"){saveAmount()}else{if(a=="27"){closeEditAmount()
}else{if(a=="38"){stepAmount(1)}else{if(a=="40"){stepAmount(-1)}}}}}function stepPremium(b){var d=$("#curPremium_input");
var a=d.val();a=parseInt(a.replace(/,/g,""));var c=a+b*parseInt($("#gnity").val());c=getAmount(c);$("#curPremium_input").val(getFormattedNumber(c))
}function closeEditPremium(){$("#curPremium").removeClass("dontshow");$("#curPremium_input").blur();$("#curPremium_input").parent().addClass("dontshow");
$("#editPremiumLink").removeClass("dontshow");$("#savePremiumLink").parent().addClass("dontshow");unbindFunctions()
}var STTAF={userid:"2009031412525",version:"20090420",widgetUrl:"http://taf.socialtwist.com:80/taf",widgetHostUrl:"http://taf.socialtwist.com:80",cdnUrl:"cdn.socialtwist.com",contentUrl:"http://content.socialtwist.com/",imagesUrl:"images.socialtwist.com",isButtonExpandable:true,isOverlaySelected:true,isPopupMode:true,isHideFlashSelected:false,frameHeight:"546",frameBorderColor:"gray",frameWidth:"482",cssTheme:"glossyBlue",loadJS:"getScriptJS.js",widgetFile:"widget",serviceOrder:{tabs:["bookmark","blog","social","email","im"],email:["gmail","msnmail","ymail","email"],im:["gtalk","msnim","yim","aim"],social:["facebook","myspace","linkedin","twitter","friendfeed","identica","orkut","googlebuzz"],blog:["wordpress","blogger","livejournal","typepad","movabletype","xanga"],cms:[],bookmark:["digg","delicious","google","stumbleupon","technorati","reddit","slashdot","misterwong","newsvine","propeller","windowslive","yahoobuzz","blinklist","yahoomyweb","simpy","faves","blogmarks","diigo","folkd","mixx","yahoobookmarks","backflip","current","ballhype","bebo","yardbarker","yigg","sphinn","squidoo","shoutwire","indiapad","spurl","myaol","symbaloo","multiply","kaboodle","netvouz","xanga","tipd","care2","kirtsy","fresqui","meneame","funp","segnalo","oknotiziealiceit","n4g","linkagogo","hugg","stumpedia","healthranker","tagza","hotklix","aimshare","fark","dropjack"]},enableHoverBranding:true,ie:document.all&&!window.opera,addJavascript:function(e){var d=document.getElementsByTagName("head");
var c=null;if(d&&d.length&&d.length>0){for(var a=0;a<d.length;a++){if(d[a]&&d[a].lastChild&&d[a].lastChild.src==e){return false
}}c=document.getElementsByTagName("head")[0]}else{c=document.getElementById("st"+STTAF.userid)}var b=document.createElement("script");
b.setAttribute("type","text/javascript");b.setAttribute("src",e);c.appendChild(b)}};STTAF.addJavascript("https://"+STTAF.cdnUrl+"/"+STTAF.loadJS+"");
var firstTimeBounce=true;var G_vmlCanvasManager;var plot2;var flagForChartResize=false;var prePayChosen=false;
var maximumTenure=480;function setLoanAmountFieldBindings(){$("#loan-amount-dropdown-input").keyup(function(){var a=getFormattedNumber(this.value.replace(/\D/g,""));
this.value=(a==0&&$(this).is(".number"))?"":a;var b=$("#loan-amount-dropdown-input").val();if(b==""){b="25,000"
}$("#loanAmountSlider").val(b)})}function getTotalMonths(b,a){if(b==""){b=0}if(a==""){a=0}return((parseInt(b)*12)+parseInt(a))
}function setEMIFieldBindings(){$("#year-tenure-value-dropdown-input,#month-tenure-value-dropdown-input").keyup(function(){$("#tenure-value-dropdown-input").val(getTotalMonths($("#year-tenure-value-dropdown-input").val(),$("#month-tenure-value-dropdown-input").val()));
var b=getFormattedNumber(this.value.replace(/\D/g,""));var c=$("#curTenure_val").html();this.value=(b==0&&$(this).is(".number"))?"":b;
var a=$("#tenure-value-dropdown-input").val();if(a==""){a=c}$("#tenureSlider").val(a);$("input[name='tenure']").val(a)
});$("#tenure-value-dropdown-input").keyup(function(){var b=getFormattedNumber(this.value.replace(/\D/g,""));
var c=$("#curTenure_val").html();this.value=(b==0&&$(this).is(".number"))?"":b;var a=$("#tenure-value-dropdown-input").val();
if(a==""){a=c}$("#tenureSlider").val(a)})}function setDefaultValue(b,c,a,d){$("input[name='loanAmount']").val(b);
$("input[name='tenure']").val(c);$("input[name='interestRate']").val(a);$("input[name='processingFee']").val(d)
}function resetDefaultValue(){$("input[name='interestRate']").val("");$("input[name='processingFee']").val("")
}function getTableColumnForAmount(a){return($("<td><img src='/images/tools/rupee-icon-black.png' alt='Rupee image'>"+getFormattedNumber(String(a))+"</td>"))
}function drawYearRow(e,f,c,a,b,g){var d=$('<tr class="clickable amort-table" data-toggle="collapse" id="row'+b+'" data-target=".row'+b+'"/>');
$("#amortTable").append(d);d.append($("<td><i class='glyphicon glyphicon-plus'></i>"+(e)+"</td>"));d.append(getTableColumnForAmount(c[1]));
d.append(getTableColumnForAmount(f[1]));d.append(getTableColumnForAmount(c[1]+f[1]));d.append(getTableColumnForAmount(a[1]));
if(prePayChosen==true){d.append(getTableColumnForAmount(g[1]))}}function drawRow(d,c,b){var a=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
var e=$('<tr class="collapse row'+b+'">');$("#amortTable").append(e);e.append($("<td>"+a[(c[0]-1)%12]+"</td>"));
for(b=1;b<c.length;b++){e.append(getTableColumnForAmount(c[b]))}}function constructTable(j,d){var m=1;
var e=d;var f=[];$("#amortTable > tbody").html("");var a=j.interestPaid;var g=j.principalPaid;var b=j.outstandingAmount;
var k=(prePayChosen==false)?f:j.prepaidAmount;drawYearRow(e,a[m-1],g[m-1],b[m-1],m,k[m-1]);for(var c=1;
c<j.chartData.length;c++){if(j.chartData[c]!=null){if(j.chartData[c][0]%12==0&&j.chartData[c][0]!=j.chartData.length){drawRow(e,j.chartData[c],m);
m=m+1;e=e+1;drawYearRow(e,a[m-1],g[m-1],b[m-1],m,k[m-1])}else{drawRow(e,j.chartData[c],m)}}}}function getYearText(b){var a=Math.floor(b/12);
if(a<2){return" Year "}return" Years "}function convertMonthsToYear(a){var b,c;var d;if(a!=undefined){b=Math.floor(a/12);
c=a%12;if(c==0){d=b+getYearText(a)}else{if(b==0){d=c+getMonthText(a)}else{d=b+getYearText(a)+c+getMonthText(a)
}}}return d}function updateSaveSection(k){$("#final-tenure-without-prepay").html(convertMonthsToYear(k.dataWithoutPrepay.totalTenure));
$("#final-tenure-with-prepay").html(convertMonthsToYear(k.dataWithPrepay.totalTenure));var g=k.dataWithoutPrepay.totalTenure-k.dataWithPrepay.totalTenure;
$("#saved-tenure").html(convertMonthsToYear(g));var f=k.dataWithPrepay.interestPaid.length-1;var j=k.dataWithPrepay.interestPaid[f][2];
var a=k.dataWithPrepay.principalPaid[f][2];var d=k.dataWithPrepay.prepaidAmount[f][2];var c=j+a+d;var b=parseInt($("#final-amt-without-prepay").html().replace(/,/g,""));
var e=b-c;$("#final-amt-with-prepay").html(getFormattedNumber(c));$("#saved-amount").html(getFormattedNumber(e));
$("#ascyn_fb_share_custom").attr("data-custom-text","Woo-hoo! Thanks to BankBazaar's Prepayment Calculator, I'm going to save Rs."+getFormattedNumber(e)+" on my loan and reduce my loan tenure by "+convertMonthsToYear(g)+"!");
$("#async_twitter_share").attr("data-custom-text","Yay! BankBazaar Loan Prepayment Calculator saved me Rs."+getFormattedNumber(e)+" and reduced loan tenure by "+convertMonthsToYear(g)+"!")
}function updateTwitterShareContent(){twitterShareMessage($("#async_twitter_share").attr("data-custom-text"))
}function onAmortChartDataReceived(j){var a=[];var g=[];var c=[];var f=[];var i=[];var b=$("#amort_chart_holder").width();
var e=j.baseYear;a.push(e-1);$.each(j.dataWithoutPrepay.outstandingAmount,function(k,m){a.push(m[0])});
a.push(e+j.maxX);b=b/a.length;b=(b*40)/100;g=j.dataWithoutPrepay.principalPaid;c=j.dataWithoutPrepay.interestPaid;
f=j.dataWithoutPrepay.outstandingAmount;if(prePayChosen==true){i=j.dataWithPrepay.outstandingAmount}var d=["Principal","Interest","Bal with Pre-payment","Bal without Pre-payment"];
plot2=$.jqplot("amort_chart_holder",[g,c,i,f],{stackSeries:true,seriesDefaults:{renderer:$.jqplot.BarRenderer,rendererOptions:{barMargin:100}},axes:{xaxis:{labelOptions:{textColor:"#ffffff"},ticks:a,tickOptions:{textColor:"#ffffff",showGridline:false,formatString:"%d",angle:60,formatter:function(m,k){if((k<j.baseYear)||(k>=j.baseYear+j.maxX)){return""
}else{return k}}}},y2axis:{tickRenderer:$.jqplot.CanvasAxisTickRenderer,label:"EMI Payment/year",labelRenderer:$.jqplot.CanvasAxisLabelRenderer,labelOptions:{textColor:"#ffffff"},tickOptions:{textColour:"#ffffff",showGridline:false,formatter:function(m,k){return"Rs."+getFormattedNumber(String(k))
}},useSeriesColor:"#fff",autoscale:true},yaxis:{min:0,labelRenderer:$.jqplot.CanvasAxisLabelRenderer,textColor:"#ffffff",label:"Balance Amount",labelOptions:{textColor:"#ffffff"},autoscale:true,tickOptions:{textColour:"#ffffff",formatter:function(m,k){return"Rs."+getFormattedNumber(String(k))
}}}},highlighter:{show:true,showTooltip:true,tooltipAxes:"xy1y2",toltipLocation:"nw",tooltipContentEditor:function(o,m,k,n){var p=n.data[m][k];
return'<div class="jqplot-highlighter"><div class="dropdown-arrow"></div><div class="strong">Year: '+p[0]+'</div><div class="year">'+d[m]+":<br/>Rs."+getFormattedNumber(p[1])+"</div></div>"
}},series:[{disableStack:false,renderer:$.jqplot.BarRenderer,rendererOptions:{fillToZero:true,barWidth:b},lineWidth:2,color:"#f1a334",yaxis:"y2axis",padMin:0,markerOptions:{size:10}},{disableStack:false,renderer:$.jqplot.BarRenderer,rendererOptions:{fillToZero:true,barWidth:b},lineWidth:2,color:"#02c8a5",yaxis:"y2axis",padMin:0,pointLabels:{show:false},markerOptions:{size:10}},{disableStack:true,renderer:$.jqplot.LineRenderer,lineWidth:2,color:"#a66bbf",highlightMouseOver:true,highlightColors:"#a66bbf",pointLabels:{show:false},markerOptions:{size:10}},{disableStack:true,renderer:$.jqplot.LineRenderer,lineWidth:2,color:"red",highlightMouseOver:true,highlightColors:"red",pointLabels:{show:false},markerOptions:{size:10}}],axesDefaults:{tickRenderer:$.jqplot.CanvasAxisTickRenderer,rendererOptions:{textColour:"#ffffff"}}});
if(prePayChosen==true){updateSaveSection(j);constructTable(j.dataWithPrepay,e)}else{constructTable(j.dataWithoutPrepay,e)
}flagForChartResize=true}function animateEmail(){if($(".related-tools").length>0){var a=$(".select-your-product").offset().top;
if($(window).scrollTop()>a){if(firstTimeBounce==true){$(".get-quote-section").css("display","block");
$(".get-quote-section").animate({opacity:"1"},"slow");$(".get-quote-section").animate({top:"60px"},"slow");
$(".get-quote-section").animate({top:"-1px"},"slow")}$(".get-quote-section").css("top","0px");$(".get-quote-section").css("position","relative");
$(".get-quote-section").css("top","0px");firstTimeBounce=false}else{$(".get-quote-section").css("display","none");
$(".get-quote-section").css("opacity","0");$(".get-quote-section").css("position","relative");$(".get-quote-section").css("top","0px");
firstTimeBounce=true}}}function monToYrMon(a){return a<12?(parseInt(a)<=1?a+" Month":a+" Months"):(a==12?parseInt(a/12)+"Yr":parseInt(a/12)+"."+parseInt(a%12)+" Yrs")
}function getYears(a){return Math.floor(a/12)}function getRemainingMonths(a){return a%12}function calculateEmi(){var b=parseInt($("input[name='loanAmount']").val().replace(/,/g,""));
var a=parseInt($("input[name='tenure']").val());var g=parseFloat($("input[name='interestRate']").val());
if(g!=""||g!=0){g=parseFloat(g)}else{g=10.25;$("input[name='interestRate']").val(g)}var j=(g/12)/100;
var d=$("input[name='processingFee']").val();if(d!=""){d=parseFloat(d)}else{d=2}var f=calculateEmiValues(b,a,j,d);
var e=Math.round(f*a-b);var i=Math.round((b/100)*(d));var c=b+e+i;$("#emiVal").html(getFormattedNumber(String(Math.round(f))));
$("#loanAmountDetails").html(getFormattedNumber(String(b)));$("#pieInterestPay").html(getFormattedNumber(String(e)));
$("#pieProcessFee").html(getFormattedNumber(String(i)));$("#pieTotalAmount,#final-amt-without-prepay").html(getFormattedNumber(String(c)));
$("#prePayFee").html(getFormattedNumber($("input[name='prePayAmount']").val()));$("#tenureFee").html(convertMonthsToYear($("input[name='tenure']").val()));
$("#processingFee").html($("input[name='processingFee']").val()+"%");$("#interestRate").html($("input[name='interestRate']").val()+"%");
$("#pieLoanAmount").html(getFormattedNumber(String(b)));return{loanAmount:b,processFee:i,interestFee:e,tenureValue:a,emiValue:f,interestRate:g}
}function calculateEmiValues(a,c,e,d){var b=a*e*(Math.pow((1+e),c)/(Math.pow((1+e),c)-1));return b}function getProductType(){return $("#productNameSpace").val()==""?"generic":$("#productNameSpace").val()
}function gtmTrack(){BB_trackGoogleEventWithLabel("calculateEmi","click",getProductType())}function openAmortDiv(a){var b=$("#amortization-table-inner").css("display");
if(b=="none"){$("#amortization-table-inner").css({display:"block"});$("#imageDivLink1").children().attr("src","/images/tools/minus2.png")
}$("#amort_chart_holder").html("");onAmortChartDataReceived(a)}function openCloseAmortDiv(){var a=$("#amortization-table-inner").css("display");
if(a=="none"){$("#amortization-table-inner").css({display:"block"});$("#imageDivLink1").children().attr("src","/images/tools/minus2.png")
}else{$("#amortization-table-inner").css({display:"none"});$("#imageDivLink1").children().attr("src","/images/tools/plus2.png")
}}function openChartDiv(a){var b=$("#your-emi-inner").css("display");if(b=="none"){$("#your-emi-inner").css({display:"block"});
$("#imageDivLink").children().attr("src","/images/tools/minus1.png")}initializeChart(a)}function openCloseChartDiv(){var a=$("#your-emi-inner").css("display");
if(a=="none"){$("#your-emi-inner").css({display:"block"});$("#imageDivLink").children().attr("src","/images/tools/minus1.png");
$("html,body").animate({scrollTop:$("#imageDivLink").offset().top},2000)}else{$("#your-emi-inner").css({display:"none"});
$("#imageDivLink").children().attr("src","/images/tools/plus1.png")}}function updatePieChartDetailSection(c,e,f){if(c=="show"){$("#break-down-section").addClass("dontshow");
$("#break-down-section-prepay").removeClass("dontshow");var d=e.dataWithPrepay.interestPaid.length-1;
var g=2;var k=e.dataWithPrepay.interestPaid[d][g];var b=e.dataWithPrepay.prepaidAmount[d][g];var j=$("input[name='loanAmount']").val()-b;
$("#pieLoanAmountEMIWithPrepay").html(getFormattedNumber(j));$("#piePrepaidLoanWithPrepay").html(getFormattedNumber(b));
$("#pieInterestPayWithPrepay").html(getFormattedNumber(k));$("#pieProcessFeeWithPrepay").html(getFormattedNumber(f));
$("#piePrePayFeeWithPrepay").html(getFormattedNumber(e.dataWithPrepay.totalPenaltyFee));var a=j+b+k+f+e.dataWithPrepay.totalPenaltyFee;
$("#pieTotalAmount").html(getFormattedNumber(a));if($("#prepay-frequency").val()=="PAY_COMPLETELY"){$("#prePayFee").html(getFormattedNumber(String(e.dataWithPrepay.prepaidAmount[d][1])))
}}else{$("#break-down-section").removeClass("dontshow");$("#break-down-section-prepay").addClass("dontshow")
}}function initializeChart(f){var b=0;var g=0;var a=0;var c=0;var e=0;var j=new calculateEmi();if(prePayChosen==false){b=j.loanAmount;
a=j.interestFee;updatePieChartDetailSection("hide",f)}else{var d=f.dataWithPrepay.prepaidAmount.length-1;
c=f.dataWithPrepay.prepaidAmount[d][2];b=j.loanAmount-f.dataWithPrepay.prepaidAmount[d][2];a=f.dataWithPrepay.interestPaid[d][2];
e=f.dataWithPrepay.totalPenaltyFee;updatePieChartDetailSection("show",f,j.processFee)}g=j.processFee;
constructChart(b,g,a,c,e)}function constructChart(d,g,f,j,b){var k={segmentShowStroke:true,tooltipTemplate:"<%if (label){%><%=label%> : Rs.<%}%><%= getFormattedNumber(String(value)) %>"};
var e=[{value:d,color:"#f1a334",highlight:"#f1a334",label:"Loan Amount"},{value:g,color:"#ff3334",highlight:"#ff3334",label:"Processing Fee"},{value:f,color:"#02c8a5",highlight:"#02c8a5",label:"Total Interest"},{value:j,color:"#2ca8c0",highlight:"#2ca8c0",label:"Prepaid Amount"},{value:b,color:"#a66bbf",highlight:"#a66bbf",label:"Prepayment Fee"}];
$("#myChart").replaceWith('<canvas id="myChart"></canvas>');var c=$("#myChart").get(0);if(G_vmlCanvasManager){G_vmlCanvasManager.initElement(c)
}var i=c.getContext("2d");var a=new Chart(i).Pie(e,k)}function isValidPercentage(d){var b=""+d;var c=/^(\d{1,2})(\.(\d{1,2}))?\%?$/;
var a=c.exec(b);if(a==null){return false}else{return true}}function hideGetQuoteSectionAnimation(){$("#loantabs").find(".anim").stop().animate({top:"-30px",opacity:"0"},100);
$("#loantabs").find(".anim").removeClass("temp-z-index");$("#loantabs").find(".anim").removeClass("anim")
}function updateValidationRules(a){if(a=="ADD"){$("#prepay-section").find(":input").each(function(){$(this).addClass("validate");
$(this).removeClass("dontvalidate");$(this).attr("disabled",false)})}else{if(a=="REMOVE"){$("#prepay-section").find(":input").each(function(){$(this).removeClass("validate");
$(this).addClass("dontvalidate");$(this).attr("disabled",true)})}}}function constructErrorMessage(a){var b="<img src='/images/icon-error.png' alt='error image'/>";
return b+a}function defaultErrorMsg(){return constructErrorMessage("Hi!Please provide an input!")}function invalidPrePayAmount(){return constructErrorMessage("Uh-oh! Please check the amount entered!")
}function invalidLength(){return constructErrorMessage("Please enter no more than 8 characters")}function invalidPrePayTenure(){return constructErrorMessage("Uh-oh! Please check the tenure entered!")
}function showHidePrepaySection(a){if(a=="show"){$("#prepay-section").show();prePayChosen=true;updateValidationRules("ADD")
}else{$("#prepay-section").hide();prePayChosen=false;updateValidationRules("REMOVE")}}function showPrepayDependentSections(){if($("input[name=radioName]:checked").val()=="show"){$(".you-save-section,#pie-prepay-details,.pre-pay,#prepay-breakdown-section,#osbalance-with-prepay,#osbalance-in-prepay").show();
$("#osbalance-without-prepay").hide()}else{$(".you-save-section,#pie-prepay-details,.pre-pay,#prepay-breakdown-section,#osbalance-with-prepay,#osbalance-in-prepay").hide();
$("#osbalance-without-prepay").show()}}$.validator.addMethod("validPrePayAmount",function(){if($("#prepay-frequency").val()!="PAY_COMPLETELY"){return(parseInt($("#pre-payment-amount").val())<parseInt($("input[name='loanAmount']").val()))
}return true});$.validator.addMethod("validPrePayTenure",function(){if($("#prepay-frequency").val()!="PAY_COMPLETELY"){return(parseInt($("#prepay-start-value").val())<parseInt($("input[name='tenure']").val()))
}return true});$.validator.addMethod("validPrePayStopTenure",function(){if($("#prepay-frequency").val()=="PAY_COMPLETELY"){return(parseInt($("#loan-completion-month").val())<parseInt($("input[name='tenure']").val()))
}return true});var validationConfig={ignore:".dontvalidate",onfocusout:function(a,b){this.element(a)},rules:{prePayFreq:{required:true},prePayAmount:{required:function(){return $("#prepay-frequency").val()!="PAY_COMPLETELY"
},validPrePayAmount:true},prePayStartMonth:{required:function(){return $("#prepay-frequency").val()!="PAY_COMPLETELY"
},validPrePayTenure:true},prePayEndMonth:{required:function(){return $("#prepay-frequency").val()=="PAY_COMPLETELY"
},validPrePayStopTenure:true},prePayPenaltyMonth:{required:function(){return($("#prepay-frequency").val()!="PAY_COMPLETELY"&&$("#prepay-frequency").val()!="ONLY_ONCE")
}}},messages:{prePayFreq:{required:defaultErrorMsg},prePayAmount:{required:defaultErrorMsg,validPrePayAmount:invalidPrePayAmount,maxlength:invalidLength},prePayStartMonth:{required:defaultErrorMsg,validPrePayTenure:invalidPrePayTenure},prePayEndMonth:{required:defaultErrorMsg,validPrePayStopTenure:invalidPrePayTenure},prePayPenaltyMonth:{required:defaultErrorMsg}},invalidHandler:function(d,b){var e=b.numberOfInvalids();
if(e){var a=b.errorList[0].element;var c=b.errorList[0].message;$(a).parent().find(".input-error").html(c);
$(a).parent().find(".input-error").show()}},errorPlacement:function(){},unhighlight:function(a){$(a).parent().find(".input-error").hide()
},submitHandler:function(a){$(a).find(".input-error").hide();$("input.number").each(function(b){var c=$(this);
c.val(c.val().replace(/,/g,""))})}};function updateTenureDetailCss(a){if(getYears(a)>0){$("#tenureYrSlider").css("display","inline");
$("#tenureYrSlider").next().css("display","inline");$("#tenureYrSlider").val(getYears(a))}else{$("#tenureYrSlider").css("display","none");
$("#tenureYrSlider").next().css("display","none")}$(".loan-tenure-year-popup").html(getYearText(a));if(getRemainingMonths(a)>0){$("#tenureMonSlider").css("display","inline");
$("#tenureMonSlider").next().css("display","inline");$("#tenureMonSlider").val(getRemainingMonths(a))
}else{$("#tenureMonSlider").css("display","none");$("#tenureMonSlider").next().css("display","none")}$(".loan-tenure-month-popup").html(getMonthText(a))
}function getMonthText(a){if(getRemainingMonths(a)<=1){return" Month "}return" Months "}function updateInputFieldWidth(){var a=$("#tenureYrSlider").val().length;
$("#tenureYrSlider").width(a*15);var b=$("#tenureMonSlider").val().length;$("#tenureMonSlider").width(b*15)
}function triggerAjax(){var c=new calculateEmi();var a="amort_getEmiAmortDetails.html";var d=$("#emiForm").serialize();
var b=$.parseJSON($.ajax({cache:false,url:a,type:"post",global:false,async:false,dataType:"json",data:d+"&emiValue="+c.emiValue+"&prePayChosen="+prePayChosen,success:function(e){return e
}}).responseText);return b}$(window).scroll(animateEmail);$(function(){var j=0;var p=10000000;var e=100000;
var i=0;var f=30;var m=25000;var q=6;var o=true;var n=10.25;var k=2;jQuery("#loantabs").fadeIn(2000);
$("tr").live("hidden.bs.collapse",function(v){$(this).prev().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus")
});$("tr").live("shown.bs.collapse",function(v){$(this).prev().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus")
});$(".accordion-one").on("hidden.bs.collapse",function(v){$(v.target).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus")
});$(".accordion-one").on("shown.bs.collapse",function(v){$(v.target).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus")
});$("#imageDivLink").click(function(v){openCloseChartDiv()});$("#imageDivLink1").click(function(v){openCloseAmortDiv()
});$(".show-hide-select").change(function(){if($(this).is(":checked")){if($(this).val()=="show"){$("#prepay-section").show();
prePayChosen=true;updateValidationRules("ADD")}else{$("#prepay-section").hide();prePayChosen=false;updateValidationRules("REMOVE")
}}});$("#prepay-frequency").change(function(){if($("#prepay-frequency").val()=="PAY_COMPLETELY"){$("#prepay-start-month,#prepay-amount-section,#prepay-applies-month").hide();
$("#loan-complete-month").show()}else{if($("#prepay-frequency").val()=="ONLY_ONCE"){$("#prepay-start-month,#prepay-amount-section").show();
$("#prepay-applies-month,#loan-complete-month").hide()}else{$("#prepay-start-month,#prepay-amount-section,#prepay-applies-month").show();
$("#loan-complete-month").hide()}}});$("select").selectpicker({style:"btn-hg btn-primary"});var g=$("#productType").val();
if(g=="Personal Loan"){j=50000;p=3000000;e=50000;f=5;m=50000;q=12;i=1}else{if(g=="Car Loan"){j=100000;
p=4000000;e=50000;f=7;m=50000;q=12;i=1}else{if(g=="Home Loan"){j=0;p=10000000;e=50000;f=30}}}$("#owl-demo").owlCarousel({items:3,slideCount:3,lazyLoad:true,navigation:true});
setDefaultValue(m,q,n,k);var c=triggerAjax();initializeChart(c);onAmortChartDataReceived(c);resetDefaultValue();
$("#your-emi-inner,#amortization-table-inner").css({display:"none"});$("#imageDivLink").children().attr("src","/images/tools/plus1.png");
$("#imageDivLink1").children().attr("src","/images/tools/plus2.png");$("#year-tenure-value-dropdown-input,#month-tenure-value-dropdown-input").blur(function(){if($("#month-tenure-value-dropdown-input").val()>11){$("#month-tenure-value-dropdown-input").val(11)
}$("#tenure-value-dropdown-input").val(getTotalMonths($("#year-tenure-value-dropdown-input").val(),$("#month-tenure-value-dropdown-input").val()));
var v=$("#tenure-value-dropdown-input").val();if(v==""){return false}if(v<i*12&&v!=""){v=i*12}if(v>maximumTenure){v=maximumTenure;
$("#tenure-value-dropdown-input").val(v);$("#year-tenure-value-dropdown-input").val(getYears(v));$("#month-tenure-value-dropdown-input").val(getRemainingMonths(v))
}updateTenureDetailCss(v);updateInputFieldWidth();$("#tenureMonSlider").val(getRemainingMonths(v));$("#tenureSlider").val(parseInt(v));
$("#curTenure_val").html(parseInt(v));$(".emi-tenure-slider-bg").slider("setValue",parseInt(v));if(v>Number(f*12)){$(".emi-tenure-tagger .tooltip-inner").text(">"+f+" Yrs")
}var w=$("#tenureSlider").val().length;$("#tenureSlider").width(w*15)});var a="bankbazaar-product";var b=document.createElement("script");
b.type="text/javascript";b.async=true;b.src="//"+a+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(b);
var r=$(".loan-amount");var u=r.slider({min:j,max:p,value:getValue("curLmt_val"),orientation:"horizontal",step:e,formater:function(v){if(v>Number(p)){return">"+getFormattedNumber(String(v))
}return getFormattedNumber(String(v))}}).on("slideStop",function(y,x){var w=u.getValue();$("#curLmt_val").html(w);
$("#loanAmountSlider").val(getFormattedNumber(w));var v=$("#loanAmountSlider").val();$("#loanAmountSlider").width((v.length)*13);
$("#loan-amount-dropdown-input").val("");$("#loan-amount-dropdown-input").attr("placeholder",getFormattedNumber(w));
$("input[name='loanAmount']").val(w)}).data("slider");var t=$(".emi-tenure-slider-bg");var d=t.slider({min:i*12,max:f*12,value:getValue("curTenure_val"),orientation:"horizontal",step:1,formater:function(v){return monToYrMon(v)
}}).on("slideStop",function(x,w){var v=d.getValue();$("#curTenure_val").html(v);$("#tenureSlider").val(v);
$("input[name='tenure']").val(v);var v=d.getValue();updateTenureDetailCss(v);$(".emi-tenure-tagger .tooltip-inner").text(monToYrMon(v));
$("#year-tenure-value-dropdown-input").val("");$("#month-tenure-value-dropdown-input").val("");$("#tenure-value-dropdown-input").val("");
$("#year-tenure-value-dropdown-input").attr("placeholder",(getFormattedNumber(getYears(v))+getYearText(v)));
$("#month-tenure-value-dropdown-input").attr("placeholder",(getFormattedNumber(getRemainingMonths(v))+getMonthText(v)));
updateInputFieldWidth()}).on("slide",function(x,w){var v=d.getValue();$(".emi-tenure-tagger .tooltip-inner").text(monToYrMon(v))
}).data("slider");$("#loan-amount-dropdown-input").blur(function(){var v=$("#loanAmountSlider").val();
if(typeof v!="undefined"){if($("#isMobileSite").val()=="true"){$("#loanAmountSlider").width((v.length)*16)
}else{$("#loanAmountSlider").width((v.length)*13)}}var x=$("#loan-amount-dropdown-input").val();x=x.replace(/,/g,"");
var w=x.length;if(w>8){$("#loan-amount-error").removeClass("dontshow");return false}else{$("#loan-amount-error").addClass("dontshow")
}if(x<j&&x!=""){x=j}$("#curLmt_val").html(x);if(x==""){return false}$("#loanAmountSlider").val(getFormattedNumber(x));
$("input[name='loanAmount']").val(x);$(".loan-amount").slider("setValue",parseInt(x));if(x>Number(p)){$(".emi-tagger .tooltip-inner").text(">"+getFormattedNumber(p))
}});$("#popoverData").popover();$("#popoverOption").popover({trigger:"hover"});$("#popoverData1").popover();
$("#popoverOption1").popover({trigger:"hover"});$("#popoverData2").popover();$("#popoverOption1").popover({trigger:"hover"});
$("#popoverData3").popover();$("#popoverOption1").popover({trigger:"hover"});$("#popoverData4").popover();
$("#popoverOption1").popover({trigger:"hover"});$("#popoverData5").popover();$("#popoverOption1").popover({trigger:"hover"});
$("#popoverData6").popover();$("#popoverOption1").popover({trigger:"hover"});$("#popoverData7").popover();
$("#popoverOption1").popover({trigger:"hover"});$("#popoverData8").popover();$("#popoverOption1").popover({trigger:"hover"});
$("#popoverData9").popover();$("#popoverOption1").popover({trigger:"hover"});setLoanAmountFieldBindings();
setEMIFieldBindings();$("#emiForm").validate(validationConfig);$("#emiForm").submit(function(y){y.preventDefault();
if($("#emiForm").valid()){if($("#interest-rate").val()==""){$("#interest-rate").val("10.25")}if($("#processing-fee").val()==""){$("#processing-fee").val("2")
}if($("#curLmt_val").html()<m){$("#curLmt_val").html(m);$("input[name='loanAmount']").val(m);$("#loanAmountSlider").val(getFormattedNumber(String(m)));
$(".loan-amount").slider("setValue",m)}if($("#curTenure_val").html()==0){$("#curTenure_val").html(q);
$("#tenureSlider, input[name='tenure']").val(q);updateTenureDetailCss(q);$(".emi-tenure-slider-bg").slider("setValue",q)
}var w=$("#interest-rate").val();var z=$("#processing-fee").val();var v=$("#curLmt_val").text().length;
if(w>50||z>10||!isValidPercentage(w)||!isValidPercentage(z)||(v>8)){return false}var x=triggerAjax();
openChartDiv(x);openAmortDiv(x);$("html,body").animate({scrollTop:$("#loan-details-down-arrow").offset().top},2000);
gtmTrack();showPrepayDependentSections()}y.preventDefault()});$("#loantabs").hoverIntent({out:function(v){hideGetQuoteSectionAnimation()
}});$("a.header-icon").hoverIntent({over:function(v){hideGetQuoteSectionAnimation();$(this).next().addClass("temp-z-index");
$(this).next().stop().animate({top:"-50px",opacity:"1"},2000);$(this).next().addClass("anim")},interval:200});
$("#loan-details-down-arrow").click(function(){$("html,body").animate({scrollTop:$("#loan-details-down-arrow").offset().top},2000)
});$("#amort-section-down-arrow").click(function(){$("html,body").animate({scrollTop:$("#amortTable").offset().top+200},2000)
});$("#related-tools-arrow-down").click(function(){$("html,body").animate({scrollTop:$("#related-tools-header").offset().top},2000)
});$("#further-reading-arrow-down").click(function(){$("html,body").animate({scrollTop:$("#further-reading-arrow-down").offset().top},2000)
});$("#emi-section-down-arrow").click(function(){$("html,body").animate({scrollTop:$("#amortTable").offset().top},2000)
});$("#popoverData, #popoverData1, #popoverData2, #popoverData3, #popoverData4, #popoverData5, #popoverData6, #popoverData7, #popoverData8, #popoverData9 ").hover(function(){$(this).find(".dot").css("animation-play-state","paused");
$(this).addClass("anim-stop")});$("#product-icons-arrow-down").click(function(){$("html,body").animate({scrollTop:$("#how-to-use").offset().top+200},2000)
});$("#how-to-use-arrow-down").click(function(){$("html,body").animate({scrollTop:$(".accordion-one").offset().top+300},2000)
});$("#curLmt_val_mobile").blur(function(){if($("#curLmt_val_mobile").val()==""){$("#loan-amt-mobile-error").removeClass("dontshow")
}else{$("#loan-amt-mobile-error").addClass("dontshow")}});$("#curTenure_val_mobile").blur(function(){if($("#curTenure_val_mobile").val()==""){$("#tenure-mobile-error").removeClass("dontshow")
}else{$("#tenure-mobile-error").addClass("dontshow")}});$("#interest-rate").blur(function(){if($("#interest-rate").val()>50){$("#interest-rate-error").removeClass("dontshow");
return false}else{$("#interest-rate-error").addClass("dontshow")}if($("#interest-rate").val()!=""&&!isValidPercentage($("#interest-rate").val())){$("#interest-rate-format-error").removeClass("dontshow")
}else{$("#interest-rate-format-error").addClass("dontshow")}});$("#processing-fee").blur(function(){if($("#processing-fee").val()>10){$("#process-fee-error").removeClass("dontshow");
return false}else{$("#process-fee-error").addClass("dontshow")}if($("#processing-fee").val()!=""&&!isValidPercentage($("#processing-fee").val())){$("#process-fee-format-error").removeClass("dontshow")
}else{$("#process-fee-format-error").addClass("dontshow")}});$("#how-to-use-link").click(function(){if(o==true){$("#how-to-use-modal .how-to-use").append($("#how-to-use").html());
$(".accordion-one").on("hidden.bs.collapse",function(w){$(w.target).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus")
});$(".accordion-one").on("shown.bs.collapse",function(w){$(w.target).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus")
});var v=$(".how-to-use-video iframe").attr("data-src");$(".how-to-use-video iframe").attr("src",v);o=false
}});updateTenureDetailCss(q);setUpTrackingForProductMenu(analyticsConstants.EMI_CALC_MENU)});$(window).resize(function(){if(flagForChartResize!=false){plot2.replot({resetAxes:false})
}});
/*! Lazy Load XT v1.0.5 2014-06-05
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */
(function(m,r,x,n){var u="lazyLoadXT",C="lazied",o="load error",a="lazy-hidden",F=x.documentElement||x.body,g=(r.onscroll===n||!!r.operamini||!F.getBoundingClientRect),j={autoInit:true,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:g,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:a},onload:{removeClass:a,addClass:"lazy-loaded"},onerror:{removeClass:a},checkDuplicates:true},d={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:true},v=m(r),w=m.isFunction,b=m.extend,k=m.data||function(H,G){return m(H).data(G)
},z=m.contains||function(H,G){while(G=G.parentNode){if(G===H){return true}}return false},t=[],f=0,q=0;
m[u]=b(j,d,m[u]);function B(G,H){return G[H]===n?j[H]:G[H]}function c(){var G=r.pageYOffset;return(G===n)?F.scrollTop:G
}m.fn[u]=function(K){K=K||{};var G=B(K,"blankImage"),J=B(K,"checkDuplicates"),H=B(K,"scrollContainer"),I={},L;
m(H).on("scroll",y);for(L in d){I[L]=B(K,L)}return this.each(function(M,O){if(O===r){m(j.selector).lazyLoadXT(K)
}else{if(J&&k(O,C)){return}var N=m(O).data(C,1);if(G&&O.tagName==="IMG"&&!O.src){O.src=G}N[u]=b({},I);
e("init",N);t.push(N)}})};function e(I,G){var H=j["on"+I];if(H){if(w(H)){H.call(G[0])}else{if(H.addClass){G.addClass(H.addClass)
}if(H.removeClass){G.removeClass(H.removeClass)}}}G.trigger("lazy"+I,[G]);y()}function i(G){e(G.type,m(this).off(o,i))
}function p(H){if(!t.length){return}H=H||j.forceLoad;f=Infinity;var I=c(),O=r.innerHeight||F.clientHeight,R=r.innerWidth||F.clientWidth,N,J;
for(N=0,J=t.length;N<J;N++){var W=t[N],K=W[0],V=W[u],L=false,M=H,S;if(!z(F,K)){L=true}else{if(H||!V.visibleOnly||K.offsetWidth||K.offsetHeight){if(!M){var U=K.getBoundingClientRect(),Q=V.edgeX,P=V.edgeY;
S=(U.top+I-P)-O;M=(S<=I&&U.bottom>-P&&U.left<=R+Q&&U.right>-Q)}if(M){e("show",W);var T=V.srcAttr,G=w(T)?T(W):K.getAttribute(T);
if(G){W.on(o,i);K.src=G}L=true}else{if(S<f){f=S}}}}if(L){t.splice(N--,1);J--}}if(!J){e("complete",m(F))
}}function A(){if(q>1){q=1;p();setTimeout(A,j.throttle)}else{q=0}}function y(G){if(!t.length){return}if(G&&G.type==="scroll"&&G.currentTarget===r){if(f>=c()){return
}}if(!q){setTimeout(A,0)}q=2}function D(){v.lazyLoadXT()}function E(){p(true)}m(x).ready(function(){e("start",v);
v.on(j.loadEvent,D).on(j.updateEvent,y).on(j.forceEvent,E);m(x).on(j.updateEvent,y);if(j.autoInit){D()
}})})(window.jQuery||window.Zepto||window.$,window,document);(function(b){var a=b.lazyLoadXT;a.selector+=",video,iframe[data-src]";
a.videoPoster="data-poster";b(document).on("lazyshow","video",function(g,d){var c=d.lazyLoadXT.srcAttr,f=b.isFunction(c);
d.attr("poster",d.attr(a.videoPoster)).children("source,track").each(function(e,i){var j=b(i);j.attr("src",f?c(j):j.attr(c))
});this.load()})})(window.jQuery||window.Zepto||window.$);