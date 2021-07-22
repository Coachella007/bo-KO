"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery","./jquery.enjoyhint.js","jquery.scrollto"],a):"function"==typeof require&&"object"==typeof exports?module.exports=a(require("jquery"),require("./jquery.enjoyhint.js"),require("jquery.scrollto")):window.EnjoyHint=a(jQuery)}(function(a){return function(b){function c(){o.enjoyhint("render_circle",[]),a("#enjoyhint_label").remove(),a("#enjoyhint_arrpw_line").remove(),o.enjoyhint("hide_prev"),o.enjoyhint("hide_next"),o.enjoyhint("hide_skip")}var d,e=this,f=b||{},g=f.btnNextText,h=f.btnSkipText,i=f.backgroundColor||"rgba(0,0,0,0.9)",j="body",k={onStart:function(){},onEnd:function(){},onSkip:function(){},onNext:function(){}},l=a.extend(k,f),m=[],n=0,o=a(j),p=function(){a(".enjoyhint")&&a(".enjoyhint").remove(),o.css({overflow:"hidden"}),a(document).on("touchmove",q),o.enjoyhint({onNextClick:function(){t()},onPrevClick:function(){u()},onSkipClick:function(){l.onSkip(),v()},fill:i})},q=function(a){a.preventDefault()},r=function(){a(".enjoyhint").remove(),o.css({overflow:"auto"}),a(document).off("touchmove",q)};e.clear=function(){var b=a(".enjoyhint_next_btn"),c=a(".enjoyhint_skip_btn");b.removeClass(e.nextUserClass),b.text(g),c.removeClass(e.skipUserClass),c.text(h)};var s=function(){if(!m||!m[n])return o.enjoyhint("hide"),l.onEnd(),void r();l.onNext();var b=a(".enjoyhint");b.removeClass("enjoyhint-step-"+n),b.removeClass("enjoyhint-step-"+(n+1)),b.removeClass("enjoyhint-step-"+(n+2)),b.addClass("enjoyhint-step-"+(n+1));var f=m[n],g=f.scrollAnimationSpeed;f.onBeforeStart&&"function"==typeof f.onBeforeStart&&f.onBeforeStart();var h=f.timeout||0;setTimeout(function(){if(!f.selector)for(var b in f)f.hasOwnProperty(b)&&b.split(" ")[1]&&(f.selector=b.split(" ")[1],f.event=b.split(" ")[0],"next"!=b.split(" ")[0]&&"auto"!=b.split(" ")[0]&&"custom"!=b.split(" ")[0]||(f.event_type=b.split(" ")[0]),f.description=f[b]);setTimeout(function(){e.clear()},250);var h=a(f.selector).get(0).getBoundingClientRect();h.top<0||h.bottom>(window.innerHeight||document.documentElement.clientHeight)?(c(),a(document.body).scrollTo(f.selector,f.scrollAnimationSpeed||250,{offset:-200})):g=250,setTimeout(function(){var b=a(f.selector),c=w(f.event);if(o.enjoyhint("show"),d=b,f.event_selector&&(d=a(f.event_selector)),d.off(c),b.off("keydown"),f.event_type||"key"!=f.event||b.keydown(function(a){a.which==f.keyCode&&(n++,s())}),!0!==f.showNext&&o.enjoyhint("hide_next"),o.enjoyhint("hide_prev"),0!==n&&o.enjoyhint("show_prev"),0==f.showSkip?o.enjoyhint("hide_skip"):o.enjoyhint("show_skip"),f.nextButton){var g=a(".enjoyhint_next_btn");g.addClass(f.nextButton.className||""),g.text(f.nextButton.text||"Next"),e.nextUserClass=f.nextButton.className}if(f.skipButton){var h=a(".enjoyhint_skip_btn");h.addClass(f.skipButton.className||""),h.text(f.skipButton.text||"Skip"),e.skipUserClass=f.skipButton.className}if(f.event_type)switch(f.event_type){case"auto":return b[f.event](),f.event,n++,void s();case"custom":x(f.event,function(){n++,y(f.event),s()});break;case"next":o.enjoyhint("show_next")}else d.on(c,function(a){f.keyCode&&a.keyCode!=f.keyCode||(n++,s())});var i=Math.max(b.outerWidth(),b.outerHeight()),j=f.radius||Math.round(i/2)+5,k=b.offset(),l=b.outerWidth(),m=b.outerHeight(),p=void 0!==f.margin?f.margin:10,q={x:k.left+Math.round(l/2),y:k.top+Math.round(m/2)-a(document).scrollTop()},r={enjoyHintElementSelector:f.selector,center_x:q.x,center_y:q.y,text:f.description,top:f.top,bottom:f.bottom,left:f.left,right:f.right,margin:f.margin,scroll:f.scroll};f.shape&&"circle"==f.shape?(r.shape="circle",r.radius=j):(r.radius=0,r.width=l+p,r.height=m+p),o.enjoyhint("render_label_with_shape",r,e.stop)},g+20||270)},h)},t=function(){n++,s()},u=function(){n--,s()},v=function(){var b=m[n],c=a(b.selector);y(b.event),c.off(w(b.event)),r()},w=function(a,b){return a+(b?"custom":"")+".enjoy_hint"},x=function(a,b){o.on(w(a,!0),b)},y=function(a){o.off(w(a,!0))};window.addEventListener("resize",function(){null!=d&&o.enjoyhint("redo_events_near_rect",d[0].getBoundingClientRect())},!1),e.stop=function(){v()},e.reRunScript=function(a){n=a,s()},e.runScript=function(){n=0,l.onStart(),s()},e.resumeScript=function(){s()},e.setCurrentStep=function(a){n=a},e.getCurrentStep=function(){return n},e.trigger=function(a){switch(a){case"next":t();break;case"skip":v()}},e.setScript=function(a){if(!(a instanceof Array)&&a.length<1)throw new Error("Configurations list isn't correct.");m=a},e.set=function(a){e.setScript(a)},e.setSteps=function(a){e.setScript(a)},e.run=function(){e.runScript()},e.resume=function(){e.resumeScript()},p()}}),CanvasRenderingContext2D.prototype.roundRect=function(a,b,c,d,e){return c<2*e&&(e=c/2),d<2*e&&(e=d/2),this.beginPath(),this.moveTo(a+e,b),this.arcTo(a+c,b,a+c,b+d,e),this.arcTo(a+c,b+d,a,b+d,e),this.arcTo(a,b+d,a,b,e),this.arcTo(a,b,a+c,b,e),this.closePath(),this},function(a){"function"==typeof define&&define.amd?define(["jquery","kinetic"],a):"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery"),require("kinetic")):a(jQuery,Kinetic)}(function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=window.innerWidth,o=window.innerHeight,p={init:function(p){return this.each(function(){function q(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)c.setAttribute(d,b[d]);return c}var r={onNextClick:function(){},onSkipClick:function(){},onPrevClick:function(){},animation_time:800};this.enjoyhint_obj={},c=this.enjoyhint_obj,c.resetComponentStuff=function(){d=null,e=null,f=null,g=null,h=null,i=null,j=null,k=null,l=null,m=null,n=window.innerWidth,o=window.innerHeight};var s=a(this);c.options=a.extend(r,p),c.gcl={chooser:"enjoyhint"},c.cl={enjoy_hint:"enjoyhint",hide:"enjoyhint_hide",disable_events_element:"enjoyhint_disable_events",btn:"enjoyhint_btn",skip_btn:"enjoyhint_skip_btn",close_btn:"enjoyhint_close_btn",next_btn:"enjoyhint_next_btn",previous_btn:"enjoyhint_prev_btn",main_canvas:"enjoyhint_canvas",main_svg:"enjoyhint_svg",svg_wrapper:"enjoyhint_svg_wrapper",svg_transparent:"enjoyhint_svg_transparent",kinetic_container:"kinetic_container"},c.canvas_size={w:1.4*a(window).width(),h:1.4*a(window).height()},c.enjoyhint=a("<div>",{class:c.cl.enjoy_hint+" "+c.cl.svg_transparent}).appendTo(s),c.enjoyhint_svg_wrapper=a("<div>",{class:c.cl.svg_wrapper+" "+c.cl.svg_transparent}).appendTo(c.enjoyhint),c.$stage_container=a('<div id="'+c.cl.kinetic_container+'">').appendTo(c.enjoyhint),c.$canvas=a('<canvas id="enj_canvas" width="'+c.canvas_size.w+'" height="'+c.canvas_size.h+'" class="'+c.cl.main_canvas+'">').appendTo(c.enjoyhint),c.$svg=a('<svg width="'+c.canvas_size.w+'" height="'+c.canvas_size.h+'" class="'+c.cl.main_canvas+" "+c.cl.main_svg+'">').appendTo(c.enjoyhint_svg_wrapper);var t=a(q("defs")),u=a(q("marker",{id:"arrowMarker",viewBox:"0 0 36 21",refX:"21",refY:"10",markerUnits:"strokeWidth",orient:"auto",markerWidth:"16",markerHeight:"12"})),v=a(q("path",{style:"fill:none; stroke:rgb(245,149,24); stroke-width:3",d:"M0,0 c30,11 30,9 0,20"}));t.append(u.append(v)).appendTo(c.$svg),c.kinetic_stage=new b.Stage({container:c.cl.kinetic_container,width:c.canvas_size.w,height:c.canvas_size.h,scaleX:1}),c.layer=new b.Layer,c.rect=new b.Rect({fill:p.fill,width:c.canvas_size.w,height:c.canvas_size.h});var w=a("<div>",{class:c.cl.disable_events_element}).appendTo(c.enjoyhint),x=w.clone().appendTo(c.enjoyhint),y=w.clone().appendTo(c.enjoyhint),z=w.clone().appendTo(c.enjoyhint),A=function(a){a.stopImmediatePropagation()};a("button").focusout(A),w.click(A),x.click(A),y.click(A),z.click(A),c.$skip_btn=a("<div>",{class:c.cl.skip_btn}).appendTo(c.enjoyhint).html("Skip").click(function(a){c.hide(),c.options.onSkipClick()}),c.$next_btn=a("<div>",{class:c.cl.next_btn}).appendTo(c.enjoyhint).html("Next").click(function(a){c.options.onNextClick()}),c.$close_btn=a("<div>",{class:c.cl.close_btn}).appendTo(c.enjoyhint).html("").click(function(a){c.hide(),c.options.onSkipClick()}),c.$prev_btn=a("<div>",{class:c.cl.previous_btn}).appendTo(c.enjoyhint).html("Previous").click(function(a){c.options.onPrevClick()}),c.$canvas.mousedown(function(b){a("canvas").css({left:"4000px"});var c=document.elementFromPoint(b.clientX,b.clientY);return a("canvas").css({left:"0px"}),a(c).click(),!1});var B=0,C=130;c.shape=new b.Shape({radius:B,center_x:-C,center_y:-C,width:0,height:0,sceneFunc:function(a){var b=this.getContext("2d")._context,c=(this.pos,b.globalCompositeOperation);b.globalCompositeOperation="destination-out",b.beginPath();var d=this.attrs.center_x-Math.round(this.attrs.width/2),e=this.attrs.center_y-Math.round(this.attrs.height/2);b.roundRect(d,e,this.attrs.width,this.attrs.height,this.attrs.radius),b.fill(),b.globalCompositeOperation=c}}),c.shape.radius=B,c.layer.add(c.rect),c.layer.add(c.shape),c.kinetic_stage.add(c.layer);var D;a(window).on("resize",function(){function d(){var b=a(c.stepData.enjoyHintElementSelector).get(0).getBoundingClientRect();c.stepData.center_x=b.left+b.width/2,c.stepData.center_y=b.top+b.height/2,c.stepData.width=b.width+11,c.stepData.height=b.height+11,c.renderLabelWithShape(c.stepData),a(".enjoyhint_next_btn").css("visibility","visible"),a(".enjoyhint_prev_btn").css("visibility","visible"),a(".enjoyhint_skip_btn").css("visibility","visible")}if(clearTimeout(D),a(".enjoyhint_next_btn").css("visibility","hidden"),a(".enjoyhint_prev_btn").css("visibility","hidden"),a(".enjoyhint_skip_btn").css("visibility","hidden"),a(".enjoy_hint_label").remove(),a("#enjoyhint_arrpw_line").remove(),!a(c.stepData.enjoyHintElementSelector).is(":visible"))return c.stopFunction(),void a(window).off("resize");var e=a(c.stepData.enjoyHintElementSelector)[0].getBoundingClientRect();c.shape.attrs.center_x=Math.round(e.left+e.width/2),c.shape.attrs.center_y=Math.round(e.top+e.height/2),c.shape.attrs.width=e.width+11,c.shape.attrs.height=e.height+11,D=setTimeout(function(){e.top<0||e.bottom>(window.innerHeight||document.documentElement.clientHeight)?a(document.body).scrollTo(c.stepData.enjoyHintElementSelector,150,{offset:-200,onAfter:d}):d()},150);var f=window.innerWidth,g=window.innerHeight,h=f/n,i=g/o;c.kinetic_stage.setAttr("width",n*h),c.kinetic_stage.setAttr("height",o*i),c.rect=new b.Rect({fill:p.fill,width:window.innerWidth,height:window.innerHeight}),c.layer.removeChildren(),c.layer.add(c.rect),c.layer.add(c.shape),c.kinetic_stage.draw()});c.enjoyhint;return c.show=function(){c.enjoyhint.removeClass(c.cl.hide)},c.hide=function(){c.enjoyhint.addClass(c.cl.hide),new b.Tween({node:c.shape,duration:.002,center_x:-C,center_y:-C}).play()},c.hide(),c.hideNextBtn=function(){c.$next_btn.addClass(c.cl.hide),c.nextBtn="hide"},c.hidePrevBtn=function(){c.$prev_btn.addClass(c.cl.hide),c.prevBtn="hide"},c.showPrevBtn=function(){c.$prev_btn.removeClass(c.cl.hide),c.prevBtn="show"},c.showNextBtn=function(){c.$next_btn.removeClass(c.cl.hide),c.nextBtn="show"},c.hideSkipBtn=function(){c.$skip_btn.addClass(c.cl.hide)},c.showSkipBtn=function(){c.$skip_btn.removeClass(c.cl.hide)},c.renderCircle=function(a){var d=a.r||0,e=a.x||0,f=a.y||0;new b.Tween({node:c.shape,duration:.2,center_x:e,center_y:f,width:2*d,height:2*d,radius:d}).play();var g=e-d,h=e+d,i=f-d,j=f+d,k=20;return{x:e,y:f,left:g,right:h,top:i,bottom:j,conn:{left:{x:g-k,y:f},right:{x:h+k,y:f},top:{x:e,y:i-k},bottom:{x:e,y:j+k}}}},c.renderRect=function(a,d){var e=a.r||0,f=a.x||0,g=a.y||0,h=a.w||0,i=a.h||0,j=20;new b.Tween({node:c.shape,duration:d,center_x:f,center_y:g,width:h,height:i,radius:e}).play();var k=Math.round(h/2),l=Math.round(i/2),m=f-k,n=f+k,o=g-l,p=g+l;return{x:f,y:g,left:m,right:n,top:o,bottom:p,conn:{left:{x:m-j,y:g},right:{x:n+j,y:g},top:{x:f,y:o-j},bottom:{x:f,y:p+j}}}},c.renderLabel=function(b){var d=b.x||0;c.originalElementX=d;var e=b.y||0,f=(b.text,c.getLabelElement({x:d,y:e,text:b.text})),g=f.width(),h=f.height(),i=f.offset().left,j=f.offset().left+g,k=f.offset().top-a(document).scrollTop(),l=f.offset().top-a(document).scrollTop()+h,m=10,n={x:i-m,y:k+Math.round(h/2)},o={x:j+m,y:k+Math.round(h/2)},p={x:i+Math.round(g/2),y:k-m},q={x:i+Math.round(g/2),y:l+m};return f.detach(),setTimeout(function(){a("#enjoyhint_label").remove(),f.appendTo(c.enjoyhint)},c.options.animation_time/2),{label:f,left:i,right:j,top:k,bottom:l,conn:{left:n,right:o,top:p,bottom:q}}},c.renderArrow=function(b){var d=b.x_from||0,e=b.y_from||0,f=b.x_to||0,g=b.y_to||0,h=b.by_top_side,i=0,j=0;"hor"===h?(i=f,j=e):(i=d,j=g),c.enjoyhint.addClass(c.cl.svg_transparent),setTimeout(function(){a("#enjoyhint_arrpw_line").remove();var b="M"+d+","+e+" Q"+i+","+j+" "+f+","+g;c.$svg.append(q("path",{style:"fill:none; stroke:rgb(245,149,24); stroke-width:2","marker-end":"url(#arrowMarker)",d:b,id:"enjoyhint_arrpw_line"})),c.enjoyhint.removeClass(c.cl.svg_transparent)},c.options.animation_time/2)},c.getLabelElement=function(b){return a("<div>",{class:"enjoy_hint_label",id:"enjoyhint_label"}).css({top:b.y+"px",left:b.x+"px"}).html(b.text).appendTo(c.enjoyhint)},c.disableEventsNearRect=function(a){w.css({top:"0",left:"0"}).height(a.top),x.css({top:a.bottom+"px",left:"0"}),y.css({top:"0",left:"0px"}).width(a.left),z.css({top:"0",left:a.right+"px"})},function(a){a.event.special.destroyed={remove:function(a){a.handler&&a.handler()}}}(a),c.renderLabelWithShape=function(b){function d(b){return"MD-DIALOG"===b.tagName?b:void 0===b.tagName?null:d(a(b).parent()[0])}c.stepData=b;var e=d(a(c.stepData.enjoyHintElementSelector)[0]);null!=e&&a(e).on("dialogClosing",function(){c.stopFunction()}),c.resetComponentStuff();var f=b.shape||"rect",g={},h=0,i=0,j={top:b.top||0,bottom:b.bottom||0,left:b.left||0,right:b.right||0};switch(f){case"circle":h=i=b.radius;var k={top:b.center_y-i+j.top,bottom:b.center_y+i-j.bottom,left:b.center_x-h+j.left,right:b.center_x+h-j.right},l=k.right-k.left,m=k.bottom-k.top;b.radius=Math.round(Math.min(l,m)/2),h=i=Math.round(b.radius/2);var n=Math.round(l/2),o=Math.round(m/2);b.center_x=k.left+n,b.center_y=k.top+o,g=c.renderCircle({x:b.center_x,y:b.center_y,r:b.radius});break;case"rect":h=Math.round(b.width/2),i=Math.round(b.height/2);var k={top:b.center_y-i+j.top,bottom:b.center_y+i-j.bottom,left:b.center_x-h+j.left,right:b.center_x+h-j.right};b.width=k.right-k.left,b.height=k.bottom-k.top,h=Math.round(b.width/2),i=Math.round(b.height/2),b.center_x=k.left+h,b.center_y=k.top+i,g=c.renderRect({x:b.center_x,y:b.center_y,w:b.width,h:b.height,r:b.radius},.2)}var p={w:c.enjoyhint.width(),h:c.enjoyhint.height()},q=c.getLabelElement({x:0,y:0,text:b.text}),r=q.outerWidth(),s=q.outerHeight();q.remove();for(var t=b.center_y-i,u=p.h-(b.center_y+i),v=b.center_x-h,w=p.w-(b.center_x+h),x=150,y=40,z=x+s+y,A=i+x,B=[{name:"right_center",common_area:w*window.innerHeight,width:w,height:window.innerHeight},{name:"right_top",common_area:w*t,width:w,height:t},{name:"right_bottom",common_area:w*u,width:w,height:u},{name:"left_center",common_area:v*window.innerHeight,width:v,height:window.innerHeight},{name:"left_top",common_area:v*t,width:v,height:t},{name:"left_bottom",common_area:v*u,width:v,height:u},{name:"center_top",common_area:window.innerWidth*t,width:window.innerWidth,height:t},{name:"center_bottom",common_area:window.innerWidth*u,width:window.innerWidth,height:u}],C=r,D=z+20,E=B.sort(function(a,b){return a.common_area-b.common_area}),F="oversized",G=0;G<E.length;G++){var H=E[G].name,I=E[G];I.width>C&&I.height>D&&(F=H)}var J,K,L,M,N,O,P=b.width?b.width:2*b.radius,Q=b.height?b.height:2*b.radius,R=b.center_x+P/2+80,S=b.center_x-r-P/2-80,T=window.innerWidth/2-r/2,U=b.center_y-A-s,V=b.center_y+A,W=window.innerHeight/2-D/2+20,X="hor";switch(F){case"center_top":K=U,J=T,L=b.center_x,M=b.center_y-Q/2-20;break;case"center_bottom":K=V,J=T,L=b.center_x,M=b.center_y+Q/2+20;break;case"left_center":K=W,J=S,L=b.center_x-P/2-20,M=b.center_y,X="ver";break;case"left_top":K=U,J=S,L=b.center_x-P/2,M=b.center_y-20;break;case"left_bottom":K=V,J=S,L=b.center_x-P/2,M=b.center_y+20,X="ver";break;case"right_center":K=W,J=R,L=b.center_x+P/2+20,M=b.center_y,X="ver";break;case"right_top":K=U,J=R,L=b.center_x+P/2,M=b.center_y-20;break;case"right_bottom":K=V,J=R,L=b.center_x+P/2,M=b.center_y+20,X="ver";break;case"oversized":setTimeout(function(){a("#enjoyhint_arrpw_line").remove(),a(".enjoy_hint_label").css({"border-radius":"20px","-webkit-border-radius":"20px","-moz-border-radius":"20px","background-color":"#272A26","-webkit-transition":"background-color ease-out 0.5s","-moz-transition":"background-color ease-out 0.5s","-o-transition":"background-color ease-out 0.5s",transition:"background-color ease-out 0.5s"})},450),K=W,J=T}N=J+r/2,O=b.center_y>K+s/2?K+s:K,b.center_y<0?M=20:b.center_y>window.innerHeight+20&&(M=window.innerHeight-20),b.center_y>=K&&b.center_y<=K+s&&(N=b.center_x>J?J+r:J,O=b.center_y),c.renderLabel({x:J,y:K,text:b.text}),setTimeout(function(){var a=c.$next_btn.width()+c.$skip_btn.width()+c.$prev_btn.width()+30,b=J-100,d=K+s+40;a+J>L&&(b=L>=N?L+20:J+r/2),(a+b>window.innerWidth||b<0)&&(b=10,d=O<M?K-80:K+s+40);var e=b,f=d;window.innerWidth<=640?(b=10,d=10,c.$next_btn.html("&#8250;"),c.$prev_btn.html("&#8249;")):(b=e,d=f,c.$next_btn.html("Next"),c.$prev_btn.html("Previous")),c.$prev_btn.css({left:b,top:d});var g=b+c.$prev_btn.width()+10,h=b+c.$prev_btn.width()+c.$next_btn.width()+20;"hide"===c.nextBtn&&(h=b+c.$prev_btn.width()+10),"hide"===c.prevBtn&&(g=b,h=b+c.$next_btn.width()+10),c.$next_btn.css({left:g,top:d}),c.$skip_btn.css({left:h,top:d})},0),c.$close_btn.css({right:10,top:10}),c.disableEventsNearRect({top:g.top,bottom:g.bottom,left:g.left,right:g.right}),c.renderArrow({x_from:N,y_from:O,x_to:L,y_to:M,by_top_side:X})},c.clear=function(){c.ctx.clearRect(0,0,3e3,2e3)},this})},set:function(a){return this.each(function(){this.enjoyhint_obj.setValue(a)}),this},show:function(){return this.each(function(){this.enjoyhint_obj.show()}),this},hide:function(){return this.each(function(){this.enjoyhint_obj.hide()}),this},hide_next:function(){return this.each(function(){this.enjoyhint_obj.hideNextBtn()}),this},hide_prev:function(){return this.each(function(){this.enjoyhint_obj.hidePrevBtn()}),this},show_prev:function(){return this.each(function(){this.enjoyhint_obj.showPrevBtn()}),this},show_next:function(){return this.each(function(){this.enjoyhint_obj.showNextBtn()}),this},hide_skip:function(){return this.each(function(){this.enjoyhint_obj.hideSkipBtn()}),this},show_skip:function(){return this.each(function(){this.enjoyhint_obj.showSkipBtn()}),this},render_circle:function(a,b,c){return this.each(function(){this.enjoyhint_obj.renderCircle(a,b,c)}),this},render_label:function(a,b,c){return this.each(function(){this.enjoyhint_obj.renderLabel(a,b,c)}),this},render_label_with_shape:function(a,b){return this.each(function(){c.stopFunction=b,this.enjoyhint_obj.renderLabelWithShape(a)}),this},redo_events_near_rect:function(a){c.disableEventsNearRect({top:a.top,bottom:a.bottom,left:a.left,right:a.right})},clear:function(){return this.each(function(){this.enjoyhint_obj.clear()}),this},close:function(a){return this.each(function(){this.enjoyhint_obj.closePopdown()}),this}};a.fn.enjoyhint=function(b){return p[b]?p[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?(a.error("Method "+b+" does not exist on $.numinput"),this):p.init.apply(this,arguments)}});
//my
if ("false" === localStorage.getItem("firstTime")) {
    function balance() {
        $(".btn__bg").addClass("absence"), $(".header__balance").html(localStorage.getItem("balance")).addClass("plus");
    }
    balance();

    $(".btn__bg .btn").on("click", function () {
        rangesliderWarningTwo();
    });
    $(".welcome__link ").on("click", function () {
        rangesliderWarning();
    });
}
function rangesliderWarningTwo(){
    setTimeout(function () {
        if ($(".btn__bg .btn")[0].classList.contains("success") && !$(".deals__row").hasClass("active")) {
            $(".rangeslider__handle").attr("title", "Выберите сделку");
        }
        $(".deals__row").on("click", function () {
            if ($(".deals__row").hasClass("active")) {
                $(".rangeslider__handle").tooltip("disable");
                $(".rangeslider__handle").removeClass("hvr-buzz-out");
            }
        });
    }, 3000);
}

function rangesliderWarning(){
    $(".rangeslider__handle").addClass("hvr-buzz-out");
        $(".rangeslider__handle").attr("title", "Найдите сделки");
        $(".rangeslider__handle").tooltip({
            tooltipClass: "warning-tooltip",
            position: {
                my: "center bottom",
                at: "left+20 top-10"
        },
    });
}

if ("true" === localStorage.getItem("firstTime")) {
    function balance() {
        $(".header__balance").html("$ 0.00");
    }
    balance();
}

function afterRegistration() {
    $(".default__btn.deal__btn, .btn__bg .btn").on("click", function () {
        $(".pop__up").css("display", "flex").hide().fadeIn(),
            $(".pop__up__close").on("click", function () {
                $(".pop__up").fadeOut();
            });
    });
}

function startTutorial() {
    $(".welcome").fadeOut(),
        $(".section__step").show(function () {
            $(this).addClass("fadeInBottom");
        });
}

function btnStatus() {
    generateDeals(),
        $(".btn__bg .btn").prop("disabled", !1),
        $(".btn__bg .btn").removeClass("searching spin"),
        $(".btn__bg .btn").addClass("success"),
        $(".section__deals__lock").fadeIn(),
        $(".content__deals__hide").fadeIn(),
        $(".section__deals__timer").fadeIn(),
        $("#content__deals__list").is(":hidden") && $("#content__deals__list").fadeIn();
}
let downloadTimer;
let skipUpdate = true;
function generateDeals() {
    let e = "Найдено сделок: " + l(6, 50);
    $(".content__deals__title").html(e);
    let t = 60;
    downloadTimer = setInterval(function () {
        if (t <= 0) {
            (clearInterval(downloadTimer),
            $(".section__deals__timer").html("0 сек"),
            $(".content__deals__hide").fadeOut(),
            $("#content__deals__list").fadeOut(),
            $(".content__deals__title").html("Найдено сделок: 0"),
            $(".content__deals__body").removeClass("hide"),
            $(".section__parameter__couple").html("Название сделки"),
            $(".section__parameter__coupleVal").html("$0.00"),
            $(".parameter__сommission").html("$0.00"),
            $(".section__body__velue").html("$0.00"),
            $(".parameter__amount").html("0 шт."),
            $(".section__body__range").val(20),
            $(".btn__bg .btn").removeClass("success").addClass("search"),
            $(".section__body__range").rangeslider("update", !0),
            $(".content__deals__body").addClass("hide"),
            $(".btn__bg .btn").removeClass("search"),
            $(".btn__bg .btn").removeClass("success"),
            $(".btn__bg .btn").addClass("searching vivify spin infinite"),
            $(".btn__bg .btn").prop("disabled", !0),
            setTimeout(btnStatus, 2e3),
            (currentPrice = 0),
            (amount = 20),
            (commision = 0))
        } 
        else if (localStorage.getItem("firstTime") === 'true'){
            $(".section__deals__timer").html("60 сек");
        } 
        else {
            $(".section__deals__timer").html(t + " сек");
            (t -= 1);
        }
    }, 1e3);
    for (var n = "", a = 0; a < 6; a++) {
        var s = tradingPairs[Math.floor(Math.random() * tradingPairs.length)],
            i = l(a < 2 ? 1 : -7, 18),
            o = i > 0;
        n += `\n            <div class="deals__row ${
            !(0 != a) && "first"
        }">\n                <div class="deals__info">\n                    <div class="deals__title">${s}</div>\n                    <div class="deals__date">${currentDate()}</div>\n                </div>\n                <span class="deals__price ${
            o ? "plus" : "minus"
        }" data-price="${i}">${o ? "+" : "-"}$${Math.abs(i)}</span>\n                <span class="deals__wallet"></span>\n            </div>\n        `;
    }

    function l(e, t) {
        let n = Math.floor(Math.random() * (t - e)) + e;
        return 0 !== n ? n : 0 === n ? ++n : void 0;
    }
    $("#content__deals__list").html(n),
        $(".deals__row").on("click", function () {
            $(".enjoyhint_next_btn").trigger("click"),
                $(this).hasClass("nextStep") && getNextStep(),
                $(".deals__row").each(function (e, t) {
                    $(this).hasClass("active") && $(this).removeClass("active");
                }),
                $(".deals__row").hasClass("active") && $(this).removeClass("active"),
                $(this).addClass("active"),
                (currentPrice = $(this).find(".deals__price").data("price")),
                $(".section__parameter__couple").html($(this).find(".deals__title").text()),
                $('[data-page="3"] .section__header__title').html("Транзакция " + $(this).find(".deals__title").text()),
                calculate();
        }),
        $(".section__body__range").on("input", function () {
            (amount = $(this).val()), calculate(), 2 == enjoyhint_instance.getCurrentStep() && $(".rangeslider").trigger("range_next");
        }),
        $(".deal__btn").on("click", function () {
            3 == enjoyhint_instance.getCurrentStep() && $(this).trigger("range_next_2"),
                localStorage.getItem("balance") ? $(".header__balance").html(localStorage.getItem("balance")) : $(".header__balance").html(totalProfitBlock.text()).addClass("plus");
        });
}
localStorage.getItem("firstTime") || localStorage.setItem("firstTime", !0),
    "false" == localStorage.getItem("firstTime") && afterRegistration(),
    $(".final-open").on("click", function () {
        $(".pop__up").css("display", "flex").hide().fadeIn(),
            $(".pop__up__close").on("click", function () {
                $(".pop__up").fadeOut();
            });
    }),
    $(".popup__close").click(function () {
        $(".welcome__popup__wrapper").fadeOut();
    }),
    $(".welcome__link, .popup__btn").click(function () {
        1 == $(".welcome__popup__wrapper:visible").length && $(".welcome__popup__wrapper").hide(),
            $(".welcome__logo").addClass("logoscale"),
            $(".welcome__wrapper").css("opacity", "0"),
            setTimeout(startTutorial, 100),
            $(".welcome__popup__wrapper").fadeOut();
    }),
    $(".welcome__btn, .popup__open__video").click(function () {
        $(".welcome__popup__wrapper").fadeIn();
    }),
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active"), $(this).toggleClass("notification"), $(".header__balance").toggle("fast"), $(".header__menu").slideToggle("fast");
    }),
    $(".header__menu__link").click(function () {
        $(".hamburger").toggleClass("is-active"), $(".hamburger").toggleClass("notification"), $(".header__balance").toggle("fast"), $(".header__menu").slideToggle("fast");
    }),
    $(".btn__bg .btn").click(function () {
        $(".btn__bg").removeClass("absence"),
            $(".content__deals__body").addClass("hide"),
            $(this).hasClass("search") || $(this).hasClass("success") ?
            ($(this).removeClass("search"), $(this).removeClass("success"), $(this).addClass("searching vivify spin infinite"), $(this).prop("disabled", !0), setTimeout(btnStatus, 2e3)) :
            ($(this).removeClass("searching vivify spin infinite"), $(this).addClass("search")),
            clearInterval(downloadTimer);
    }),
    $(".deals__popup, .popup__open").on("click", function (e) {
        $(".pop__up").css("display", "flex").hide().fadeIn(),
            $(".pop__up__close").on("click", function () {
                $(".pop__up").fadeOut();
            });
    }),
    $(".content__thankyou .form__btn").on("click", function () {
        $(".content__thankyou").fadeOut();
    }),
    $(".pop__up .form__btn").on("click", function () {
        $(".pop__up").fadeOut(), $(".content__thankyou").css("display", "flex").hide().fadeIn();
    });
let tradingPairs = ["OKEx / FTX", "OKEx / FTX", "MXC / AEX", "Zaif / AAX", "Luno / XT", "BTSE / C2CX", "ALINK / ETH", "1inch / DODO", "Nash / ViteX", "DDEX / Joyso"],
    months = ["Января", "Февраля", "Марта", "Фпреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

function currentDate() {
    let e = new Date();
    return e.getDate() + " " + months[e.getMonth()] + ", " + (e.getHours() < 10 ? "0" : "") + e.getHours() + ":" + (e.getMinutes() < 10 ? "0" : "") + e.getMinutes();
}
var currentPrice = 0,
    amount = 20,
    commision = 0,
    currentPriceBlock = $(".section__parameter__coupleVal"),
    totalProfitBlock = $(".section__body__velue"),
    comissionBlock = $(".parameter__сommission"),
    amountBlock = $(".parameter__amount");

function calculate() {
    currentPriceBlock.html("$" + currentPrice + ".00");
    let e = currentPrice * amount + ".00";
    totalProfitBlock.html("$" + e), (commision = Math.floor(0.1 * e)), comissionBlock.html("$" + commision + ".00"), amountBlock.html(amount + " шт.");
}
if (($("input[type=range]").rangeslider({
        polyfill: !1
    }), "true" == localStorage.getItem("firstTime"))) {
    var enjoyhint_instance = new EnjoyHint({}),
        enjoyhint_script_steps = [{
                selector: ".btn__bg",
                event: "click",
                description: '<p class="guide guide-1"><span class="guide-title">Шаг 1: Поиск</span> Нажмите “Поиск”, чтобы найти биржевые “вилки” на валютном рынке.</p>',
                shape: "circle",
                showSkip: !1
            },
            {
                selector: ".deals__row.first",
                event: "click",
                event_type: "custom",
                description: '<p class="guide guide-2"><span class="guide-title">Шаг 2: Результат</span> Список биржевых “вилок” актуален 60 секунд. Нажмите на иконку “кошелька”, чтобы совершить сделку.</p>',
                showSkip: !1,
                timeout: 2e3
            },
            {
                selector: ".rangeslider",
                event: "range_next",
                description: '<p class="guide guide-3"><span class="guide-title">Шаг 3: Выбор объема</span> Выберите объем сделки. В демо-режиме покупка происходит за счёт BitRadar.</p>',
                showSkip: !1,
                margin: 30,
            },
            {
                selector: ".content__calculator",
                event: "range_next_2",
                description: '<p class="guide guide-4"><span class="guide-title">Шаг 4: Совершить сделку</span></p>',
                showSkip: !1,
                onBeforeStart: function () {
                    setTimeout(function () {
                        $(".deal__btn").addClass("preloader-amin");
                    }, 1e3);
                },
            },
            {
                selector: ".header__balance",
                event: "auto",
                description: '<p class="guide guide-5"><span class="guide-title">Да, это ваши деньги:</span> В демо-режиме BitRadar  закрывает сделки за свой счёт. Чтобы получить средства, завершите регистрацию и подтвердите свой счёт.</p>',
                showSkip: !1,
                onBeforeStart: function () {
                    $(".deal__btn").removeClass("preloader-amin"),
                        setTimeout(function () {
                            enjoyhint_instance.stop(),
                                localStorage.setItem("firstTime", !1),
                                localStorage.setItem("balance", totalProfitBlock.text()),
                                $(".content__deals__body").removeClass("hide"),
                                $("#content__deals__list").hide(),
                                $(".content__deals__hide").hide(),
                                $(".content__deals__title").html("Найдено сделок: 0"),
                                $(".section__deals__timer").hide(),
                                clearInterval(downloadTimer),
                                $(".deal__btn").removeClass("preloader-amin"),
                                $(".btn__bg .btn").removeClass("success").addClass("search"),
                                afterRegistration(),
                                $(".pop__up").css("display", "flex").hide().fadeIn(),
                                $(".pop__up__close").on("click", function () {
                                    $(".pop__up").fadeOut();
                                }),
                                $(".btn__bg").addClass("absence"),
                                $(".default__btn.deal__btn").addClass("final-open"),
                                currentPriceBlock.html("$0.00"),
                                totalProfitBlock.html("$ 0.00"),
                                comissionBlock.html("$0.00"),
                                amountBlock.html("0 шт."),
                                $(".section__body__range").val(20),
                                $(".section__body__range").rangeslider("update", !0),
                                (currentPrice = 0),
                                (amount = 20),
                                (commision = 0),
                                $(".btn__bg .btn").on("click", function () {
                                    rangesliderWarningTwo();
                                });
                                rangesliderWarning();
                        }, 10e3);
                },
            },
        ];
    enjoyhint_instance.set(enjoyhint_script_steps),
        $(".demo, .popup__btn-start").on("click", function () {
            enjoyhint_instance.run();
        });
}
$(document).keydown(function (e) {
        return 123 != e.keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0;
    }),
    $(document).on("contextmenu", function (e) {
        e.preventDefault();
    });
$(".popup__close, .popup__btn-start").on("click", function () {
    $("video")[0].pause();
});

let stepFullscreen = true;
$(".play-btn").on("click", function () {
    if (stepFullscreen === true) {
        stepFullscreen = false;
        openFullscreen($(".video video")[0]);
    }
});

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}