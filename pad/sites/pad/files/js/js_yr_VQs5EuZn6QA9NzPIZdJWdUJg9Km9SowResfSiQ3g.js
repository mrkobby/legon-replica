/*!
	Colorbox 1.6.1
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-z-D,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-N-j,I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(S).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),M=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(S=n(se,"Title"),F=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),L=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,L))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&L.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,I,L,M,S,F,R,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullScreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+z+D+"px",x[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(L.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),L.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),M.hide(),u(ne),_.get("onComplete")},S.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
/*
 * jQuery Nivo Slider v2.6
 * http://nivo.dev7studios.com
 *
 * Copyright 2011, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * March 2010
 */

(function($){var NivoSlider=function(element,options){var settings=$.extend({},$.fn.nivoSlider.defaults,options);var vars={currentSlide:0,currentImage:'',totalSlides:0,randAnim:'',running:false,paused:false,stop:false};var slider=$(element);slider.data('nivo:vars',vars);slider.css('position','relative');slider.addClass('nivoSlider');var kids=slider.children();kids.each(function(){var child=$(this);var link='';if(!child.is('img')){if(child.is('a')){child.addClass('nivo-imageLink');link=child;}
child=child.find('img:first');}
var childWidth=child.width();if(childWidth==0)childWidth=child.attr('width');var childHeight=child.height();if(childHeight==0)childHeight=child.attr('height');if(childWidth>slider.width()){slider.width(childWidth);}
if(childHeight>slider.height()){slider.height(childHeight);}
if(link!=''){link.css('display','none');}
child.css('display','none');vars.totalSlides++;});if(settings.startSlide>0){if(settings.startSlide>=vars.totalSlides)settings.startSlide=vars.totalSlides-1;vars.currentSlide=settings.startSlide;}
if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');slider.append($('<div class="nivo-caption"><p></p></div>').css({display:'none',opacity:settings.captionOpacity}));var processCaption=function(settings){var nivoCaption=$('.nivo-caption',slider);if(vars.currentImage.attr('title')!=''&&vars.currentImage.attr('title')!=undefined){var title=vars.currentImage.attr('title');if(title.substr(0,1)=='#')title=$(title).html();if(nivoCaption.css('display')=='block'){nivoCaption.find('p').fadeOut(settings.animSpeed,function(){$(this).html(title);$(this).fadeIn(settings.animSpeed);});}else{nivoCaption.find('p').html(title);}
nivoCaption.fadeIn(settings.animSpeed);}else{nivoCaption.fadeOut(settings.animSpeed);}}
processCaption(settings);var timer=0;if(!settings.manualAdvance&&kids.length>1){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
if(settings.directionNav){slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+settings.prevText+'</a><a class="nivo-nextNav">'+settings.nextText+'</a></div>');if(settings.directionNavHide){$('.nivo-directionNav',slider).hide();slider.hover(function(){$('.nivo-directionNav',slider).show();},function(){$('.nivo-directionNav',slider).hide();});}
$('a.nivo-prevNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');});$('a.nivo-nextNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');});}
if(settings.controlNav){var nivoControl=$('<div class="nivo-controlNav"></div>');slider.append(nivoControl);for(var i=0;i<kids.length;i++){if(settings.controlNavThumbs){var child=kids.eq(i);if(!child.is('img')){child=child.find('img:first');}
if(settings.controlNavThumbsFromRel){nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('rel')+'" alt="" /></a>');}else{nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('src').replace(settings.controlNavThumbsSearch,settings.controlNavThumbsReplace)+'" alt="" /></a>');}}else{nivoControl.append('<a class="nivo-control" rel="'+i+'">'+(i+1)+'</a>');}}
$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');$('.nivo-controlNav a',slider).live('click',function(){if(vars.running)return false;if($(this).hasClass('active'))return false;clearInterval(timer);timer='';slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');vars.currentSlide=$(this).attr('rel')-1;nivoRun(slider,kids,settings,'control');});}
if(settings.keyboardNav){$(window).keypress(function(event){if(event.keyCode=='37'){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');}
if(event.keyCode=='39'){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');}});}
if(settings.pauseOnHover){slider.hover(function(){vars.paused=true;clearInterval(timer);timer='';},function(){vars.paused=false;if(timer==''&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}});}
slider.bind('nivo:animFinished',function(){vars.running=false;$(kids).each(function(){if($(this).is('a')){$(this).css('display','none');}});if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
if(timer==''&&!vars.paused&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
settings.afterChange.call(this);});var createSlices=function(slider,settings,vars){for(var i=0;i<settings.slices;i++){var sliceWidth=Math.round(slider.width()/settings.slices);if(i==settings.slices-1){slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:(slider.width()-(sliceWidth*i))+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}else{slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:sliceWidth+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}}}
var createBoxes=function(slider,settings,vars){var boxWidth=Math.round(slider.width()/settings.boxCols);var boxHeight=Math.round(slider.height()/settings.boxRows);for(var rows=0;rows<settings.boxRows;rows++){for(var cols=0;cols<settings.boxCols;cols++){if(cols==settings.boxCols-1){slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:(slider.width()-(boxWidth*cols))+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}else{slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:boxWidth+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}}}}
var nivoRun=function(slider,kids,settings,nudge){var vars=slider.data('nivo:vars');if(vars&&(vars.currentSlide==vars.totalSlides-1)){settings.lastSlide.call(this);}
if((!vars||vars.stop)&&!nudge)return false;settings.beforeChange.call(this);if(!nudge){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}else{if(nudge=='prev'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}
if(nudge=='next'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}}
vars.currentSlide++;if(vars.currentSlide==vars.totalSlides){vars.currentSlide=0;settings.slideshowEnd.call(this);}
if(vars.currentSlide<0)vars.currentSlide=(vars.totalSlides-1);if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if(settings.controlNav){$('.nivo-controlNav a',slider).removeClass('active');$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');}
processCaption(settings);$('.nivo-slice',slider).remove();$('.nivo-box',slider).remove();if(settings.effect=='random'){var anims=new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade','boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');vars.randAnim=anims[Math.floor(Math.random()*(anims.length+1))];if(vars.randAnim==undefined)vars.randAnim='fade';}
if(settings.effect.indexOf(',')!=-1){var anims=settings.effect.split(',');vars.randAnim=anims[Math.floor(Math.random()*(anims.length))];if(vars.randAnim==undefined)vars.randAnim='fade';}
vars.running=true;if(settings.effect=='sliceDown'||settings.effect=='sliceDownRight'||vars.randAnim=='sliceDownRight'||settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'top':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUp'||settings.effect=='sliceUpRight'||vars.randAnim=='sliceUpRight'||settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'bottom':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUpDown'||settings.effect=='sliceUpDownRight'||vars.randAnim=='sliceUpDown'||settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var v=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);if(i==0){slice.css('top','0px');i++;}else{slice.css('bottom','0px');i=0;}
if(v==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;v++;});}
else if(settings.effect=='fold'||vars.randAnim=='fold'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;$('.nivo-slice',slider).each(function(){var slice=$(this);var origWidth=slice.width();slice.css({top:'0px',height:'100%',width:'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='fade'||vars.randAnim=='fade'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':slider.width()+'px'});firstSlice.animate({opacity:'1.0'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInRight'||vars.randAnim=='slideInRight'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInLeft'||vars.randAnim=='slideInLeft'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1','left':'','right':'0px'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){firstSlice.css({'left':'0px','right':''});slider.trigger('nivo:animFinished');});}
else if(settings.effect=='boxRandom'||vars.randAnim=='boxRandom'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var boxes=shuffle($('.nivo-box',slider));boxes.each(function(){var box=$(this);if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=20;i++;});}
else if(settings.effect=='boxRain'||vars.randAnim=='boxRain'||settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var rowIndex=0;var colIndex=0;var box2Darr=new Array();box2Darr[rowIndex]=new Array();var boxes=$('.nivo-box',slider);if(settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){boxes=$('.nivo-box',slider)._reverse();}
boxes.each(function(){box2Darr[rowIndex][colIndex]=$(this);colIndex++;if(colIndex==settings.boxCols){rowIndex++;colIndex=0;box2Darr[rowIndex]=new Array();}});for(var cols=0;cols<(settings.boxCols*2);cols++){var prevCol=cols;for(var rows=0;rows<settings.boxRows;rows++){if(prevCol>=0&&prevCol<settings.boxCols){(function(row,col,time,i,totalBoxes){var box=$(box2Darr[row][col]);var w=box.width();var h=box.height();if(settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){box.width(0).height(0);}
if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3,'',function(){slider.trigger('nivo:animFinished');});},(100+time));}else{setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3);},(100+time));}})(rows,prevCol,timeBuff,i,totalBoxes);i++;}
prevCol--;}
timeBuff+=100;}}}
var shuffle=function(arr){for(var j,x,i=arr.length;i;j=parseInt(Math.random()*i),x=arr[--i],arr[i]=arr[j],arr[j]=x);return arr;}
var trace=function(msg){if(this.console&&typeof console.log!="undefined")
console.log(msg);}
this.stop=function(){if(!$(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=true;trace('Stop Slider');}}
this.start=function(){if($(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=false;trace('Start Slider');}}
settings.afterLoad.call(this);return this;};$.fn.nivoSlider=function(options){return this.each(function(key,value){var element=$(this);if(element.data('nivoslider'))return element.data('nivoslider');var nivoslider=new NivoSlider(this,options);element.data('nivoslider',nivoslider);});};$.fn.nivoSlider.defaults={effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:'.jpg',controlNavThumbsReplace:'_thumb.jpg',keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,prevText:'Prev',nextText:'Next',beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};$.fn._reverse=[].reverse;})(jQuery);;

(function ($) {
  

  Drupal.behaviors.ugfd = {
    attach: function (context, settings) {
      
      if(settings.ugfd.slider_use == 0){
     
        var dnav = true;
        var cnav = true;
        var knav = true;
        var on_hover = true;
        if(settings.nivo_slider.directionNav == 'false'){
          dnav = false;
        }
        if(settings.nivo_slider.controlNav == 'false'){
          cnav = false;
        }
        if(settings.nivo_slider.pauseOnHover == 'false'){
          on_hover = false;
        }
        if(settings.nivo_slider.keyboardNav){
          knav = false;
        }
        $(window).load(function() {
          $('#nivo').nivoSlider({
            effect			: settings.nivo_slider.effect,
            slices			: settings.nivo_slider.slices, 
            boxCols			: settings.nivo_slider.boxCols,
            boxRows			: settings.nivo_slider.boxRows,
            pauseTime		: settings.nivo_slider.pauseTime,
            directionNav	: dnav,
            controlNav		: cnav,
            keyboardNav		: knav,
            pauseOnHover	: on_hover,
            captionOpacity	: settings.nivo_slider.captionOpacity
          });
        
        });
      }else{
        $(document).ready(function() { 
          $('#polaroid').polaroid({
            pause: 5000
          });
        });
      }
    }
  };

})(jQuery);;
