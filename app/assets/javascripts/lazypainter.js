/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "face": {
        "strokepath": [
            {
                "path": "M63 110l-9 0 -6 -53 0 0 -1 -8 0 0 6 0 0 0c6,0 11,-5 11,-12 0,-5 -4,-9 -9,-11 0,0 0,0 0,0 0,0 0,0 0,0 0,-2 0,-3 -1,-4 -1,0 -1,-1 -2,-1 0,0 -1,0 -2,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,1l-2 0c0,0 0,0 -1,0l0 0c0,0 0,0 0,0 -3,0 -5,1 -7,3 -3,2 -4,5 -4,8l-5 98c0,0 0,0 0,0 0,8 5,16 12,19l0 8c0,4 3,7 7,7 4,0 6,-3 6,-7l0 -6 18 0 1 0m5 0c5,0 10,0 15,0m85 0l0 0 -4 0c-33,0 -33,-11 -37,-24 -4,-13 -16,-21 -29,-22l-3 0 -12 0m6 46l11 0 0 6c0,4 3,7 7,7 3,0 6,-3 6,-7l0 -7c2,-1 3,-1 4,-2 17,11 51,10 51,10 2,0 3,-1 3,-3 0,-2 -1,-4 -3,-4",
                "duration": 1000
            },
            {
                "path": "M47 168c1,1 2,1 3,1 4,0 7,-3 7,-7l0 -6",
                "duration": 300
            },
            {
                "path": "M116 168c1,1 2,1 3,1 4,0 7,-3 7,-7l0 -8",
                "duration": 300
            },
            {
                "path": "M53 28c0,2 -2,3 -3,3 -2,0 -3,-1 -3,-3",
                "duration": 300,
                "strokeWidth": 2
            },
            {
                "path": "M45 57l0 0c-6,0 -11,-5 -11,-11 2,2 4,3 8,3l0 0 3 0 0 8 0 0",
                "duration": 300,
                "strokeWidth": 2
            },
            {
                "path": "M84 116c0,-2 0,-4 0,-6 -5,0 -10,0 -15,0 0,2 1,4 1,6 5,0 9,0 14,0",
                "duration": 300
            },
            {
                "path": "M86 130c0,-3 -1,-5 -1,-8 -5,0 -10,0 -15,0 1,3 1,5 1,8 5,0 10,0 15,0",
                "duration": 300
            },
            {
                "path": "M74 145c4,0 9,0 14,0 -1,-3 -1,-6 -1,-9 -5,0 -10,0 -15,0 0,3 1,6 1,9 0,0 1,0 1,0",
                "duration": 400
            },
            {
                "path": "M74 150c5,0 9,0 14,0 1,6 2,11 2,17 1,1 2,2 3,2 0,0 1,0 1,0 1,0 2,-1 2,-3l-7 -56m-15 40c0,6 1,11 2,16 0,2 -1,3 -3,3 0,0 0,0 0,0 -1,0 -3,-1 -3,-2 -1,-6 -1,-11 -2,-17l-5 -40",
                "duration": 800
            },
            {
                "path": "M58 40c0,3 -2,4 -4,4 -2,0 -4,-1 -4,-4",
                "duration": 400,
                "strokeWidth": 2
            }
        ],
        "dimensions": {
            "width": 200,
            "height": 200
        }
    }
}; 
 

function per(x) {
  document.getElementById("percentage").innerHTML = String(x) + "%";
}

(function(h){var r={init:function(a){return this.each(function(){var c=h(this),b=c.data("lazyLinePainter");c.addClass("lazylinepainter");if(!b){var b=h.extend({strokeWidth:2,strokeDash:null,strokeColor:"#000",strokeOverColor:null,strokeCap:"round",strokeJoin:"round",strokeOpacity:1,onComplete:null,onUpdate:null,onStart:null,onStrokeStart:null,onStrokeComplete:null,delay:0,ease:null,overrideKey:null,drawSequential:!0,speedMultiplier:1,reverse:!1,paused:!1,progress:0,longestDuration:0,playhead:0},a),
d=b.overrideKey?b.overrideKey:c.attr("id").replace("#","");b.width=b.svgData[d].dimensions.width;b.height=b.svgData[d].dimensions.height;b.paths=h.extend(!0,[],b.svgData[d].strokepath);var d="0 0 "+b.width+" "+b.height,f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttributeNS(null,"viewBox",d);f.setAttribute("xmlns","http://www.w3.org/2000/svg");d=h(f);b.svg=d;for(var d=b.delay,e=b.paths,g=f=0;g<e.length;g++)f+=e[g].duration+(e[g].delay||0);for(var e=b.delay,g=b.paths,k=0,l=
0;l<g.length;l++){var m=g[l].delay||0;g[l].duration+m>k&&(k=g[l].duration+m)}b.totalDuration=b.drawSequential?d+f:e+k;d=b.reverse?b.totalDuration:0;for(f=0;f<b.paths.length;f++){e=b.paths[f];e.progress=0;e.index=f;var g=e,k=b,l=f,m=document.createElementNS("http://www.w3.org/2000/svg","path"),p=h(m);k.svg.append(p);p.attr(x(k,k.paths[l]));g.el=m;e.length=Math.ceil(e.el.getTotalLength());e.delay=e.delay||0;e.duration=e.duration;g=e;k=e.el;l=e.length;m=[];for(p=0;p<l;p++){var n=k.getPointAtLength(p);
m.push({x:n.x,y:n.y})}g.positions=m;e.ease=e.ease||null;g=e.el.style;k=b;l=e.length;m=void 0;m=e.strokeDash?t(e.strokeDash,l):k.strokeDash?t(k.strokeDash,l):l+" "+l;g.strokeDasharray=m;e.el.style.strokeDashoffset=e.length;e.el.style.display="block";e.el.getBoundingClientRect();e.onStrokeStart=e.onStrokeStart||null;e.onStrokeComplete=e.onStrokeComplete||null;e.onStrokeStartDone=!1;e.onStrokeCompleteDone=!1;e.onStrokeUpdate=e.onStrokeUpdate||null;k=e.duration/b.totalDuration;d=b.reverse?d-e.duration:
b.drawSequential?b.playhead+b.delay:e.delay+b.delay;g=d/b.totalDuration;e.startTime=d;e.startProgress=g;e.durationProgress=k;b.playhead+=e.duration+e.delay}b.totalDuration*=b.speedMultiplier;c.append(b.svg);c.data("lazyLinePainter",b);c.lazylinepainter("resize")}})},paint:function(){return this.each(function(){var a=h(this),c=a.data("lazyLinePainter");a.lazylinepainter("erase");c.rAF=requestAnimationFrame(function(a){q(a,c)});if(null!==c.onStart)c.onStart()})},pause:function(){return this.each(function(){var a=
h(this).data("lazyLinePainter");a.paused||(a.paused=!0,cancelAnimationFrame(a.rAF))})},resume:function(){return this.each(function(){var a=h(this).data("lazyLinePainter");a.paused&&(requestAnimationFrame(function(c){y(c,a)}),a.paused=!1)})},erase:function(){return this.each(function(){var a=h(this).data("lazyLinePainter");a.startTime=null;a.elapsedTime=null;cancelAnimationFrame(a.rAF);a.onStrokeCompleteDone=!1;a.paused=!1;for(var c=0;c<a.paths.length;c++){var b=a.paths[c];b.el.style.strokeDashoffset=
b.length;b.onStrokeCompleteDone=!1;b.onStrokeStartDone=!1}})},destroy:function(){return this.each(function(){var a=h(this);a.removeData("lazyLinePainter");a.empty();a.removeClass("lazylinepainter")})},set:function(a){return this.each(function(){var c=h(this).data("lazyLinePainter");c.progress=a;u(c)})},get:function(){return h(this).data("lazyLinePainter")},resize:function(){this.each(function(){var a=h(this),c=a.data("lazyLinePainter");c.offset=a.offset();for(a=0;a<c.paths.length;a++)v(c,c.paths[a])})}},
y=function(a,c){c.startTime=a-c.elapsedTime;requestAnimationFrame(function(a){q(a,c)})},q=function(a,c){c.startTime||(c.startTime=a);if(null!==c.onUpdate)c.onUpdate();c.elapsedTime=a-c.startTime;c.progress=w(c.totalDuration,c.startTime,c.elapsedTime,c.ease);u(c);if(1>c.progress)c.rAF=requestAnimationFrame(function(a){q(a,c)});else if(null!==c.onComplete)c.onComplete()},u=function(a){for(var c=0;c<a.paths.length;c++){var b=a.paths[c],d=void 0;a.progress>b.startProgress&&a.progress<b.startProgress+
b.durationProgress?d=(a.progress-b.startProgress)/b.durationProgress:a.progress>=b.startProgress+b.durationProgress?d=1:a.progress<=b.startProgress&&(d=0);b.progress=w(1,0,d,b.ease);var d=b,f=d.progress*d.length;d.el.style.strokeDashoffset=a.reverse||d.reverse?-d.length+f:d.length-f;v(a,b);d=a;if(1===b.progress)d.onStrokeComplete&&!b.onStrokeCompleteDone&&(d.onStrokeComplete(b),b.onStrokeComplete||(b.onStrokeCompleteDone=!0)),b.onStrokeComplete&&!b.onStrokeCompleteDone&&(b.onStrokeComplete(b),b.onStrokeCompleteDone=
!0);else if(1E-5<b.progress&&(d.onStrokeStart&&!b.onStrokeStartDone&&(d.onStrokeStart(b),b.onStrokeStart||(b.onStrokeStartDone=!0)),b.onStrokeStart&&!b.onStrokeStartDone&&(b.onStrokeStart(b),b.onStrokeStartDone=!0),b.onStrokeUpdate))b.onStrokeUpdate(b)}},w=function(a,c,b,d){var f;0<b&&b<a?f=d?n[d](b,0,1,a):b/a:b>=a?f=1:b<=c&&(f=0);return f},v=function(a,c){var b=Math.round(c.progress*(c.length-1)),b=c.positions[b];c.position={x:a.offset.left+b.x,y:a.offset.top+b.y}},x=function(a,c){return{d:c.path,
stroke:c.strokeColor?c.strokeColor:a.strokeColor,"fill-opacity":0,"stroke-opacity":c.strokeOpacity?c.strokeOpacity:a.strokeOpacity,"stroke-width":c.strokeWidth?c.strokeWidth:a.strokeWidth,"stroke-linecap":c.strokeCap?c.strokeCap:a.strokeCap,"stroke-linejoin":c.strokeJoin?c.strokeJoin:a.strokeJoin}},t=function(a,c){for(var b="",d=a.split(","),f=0,e=d.length-1;0<=e;e--)f+=Number(d[e]);d=Math.floor(c/f);for(e=d-1;0<=e;e--)b+=a+", ";return(b+(c-d*f)+", "+c).split(",").join("px,")+"px"};h.fn.lazylinepainter=
function(a){if(r[a])return r[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)console.log("opps - issue finding method");else return r.init.apply(this,arguments)};var n={easeLinear:function(a,c,b,d){return b*a/d+c},easeInQuad:function(a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(a,
c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(a,c,b,d){return 1>(a/=d/2)?
b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,
-10*--a)+2)+c},easeInCirc:function(a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(a,c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;e||(e=.3*d);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e))+c},easeOutElastic:function(a,
c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;e||(e=.3*d);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*d-f)*Math.PI/e)+b+c},easeInOutElastic:function(a,c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;e||(e=.3*d*1.5);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return 1>a?-.5*g*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)+c:g*Math.pow(2,-10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)*.5+b+c},
easeInBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(a,c,b,d){return b-n.easeOutBounce(d-a,0,b,d)+c},easeOutBounce:function(a,c,b,d){return(a/=d)<1/2.75?7.5625*b*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+
.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(a,c,b,d){return a<d/2?.5*n.easeInBounce(2*a,0,b,d)+c:.5*n.easeOutBounce(2*a-d,0,b,d)+.5*b+c}}})(jQuery);

// make sure requestAnimationFrame and cancelAnimationFrame are defined
// polyfill for browsers without native support
// by Opera engineer Erik Möller
var lastTime = 0;
var vendors = ['webkit', 'moz', 'ms', 'o'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
}
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    }
}
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    }
}