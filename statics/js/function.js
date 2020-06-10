	/*!
	* SuperSlide v2.1.3
	* 轻松解决网站大部分特效展示问题
	* 详尽信息请看官网：http://www.SuperSlide2.com/
	*
	* Copyright 2011-至今, 大话主席
	*
	* 请尊重原创，保留头部版权
	* 在保留版权的前提下可应用于个人或商业用途

	* v2.1.3：处理Jquery已经弃用的API，兼容最新版本的Jquery，目前是jquery3.3.1，日后如果发现插件不兼容新版本的jquery，请联系我 305491515@qq.com

	*/

!function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.length,l=a(c.mainCell,d),m=l.children().length,n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);if(parseInt(c.triggerTime),t=parseInt(c.scroll),u="false"==c.autoPlay||0==c.autoPlay?!1:!0,v="false"==c.opp||0==c.opp?!1:!0,w="false"==c.autoPage||0==c.autoPage?!1:!0,x="false"==c.pnLoop||0==c.pnLoop?!1:!0,y="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,z="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,A="false"==c.returnDefault||0==c.returnDefault?!1:!0,B=isNaN(c.vis)?1:parseInt(c.vis),C=!-[1]&&!window.XMLHttpRequest,D=0,E=0,F=0,G=0,H=c.easing,I=null,J=null,K=null,L=c.titOnClassName,M=j.index(d.find("."+L)),N=p=-1==M?p:M,O=p,P=p,Q=m>=B?0!=m%t?m%t:t:0,S="leftMarquee"==e||"topMarquee"==e?!0:!1,T=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},V=function(){j.removeClass(L),z&&j.eq(O).addClass(L)},"menu"==c.type)return z&&j.removeClass(L).eq(p).addClass(L),j.hover(function(){R=a(this).find(c.targetCell);var b=j.index(a(this));J=setTimeout(function(){switch(p=b,j.removeClass(L).eq(p).addClass(L),T(),e){case"fade":R.stop(!0,!0).animate({opacity:"show"},q,H,U);break;case"slideDown":R.stop(!0,!0).animate({height:"show"},q,H,U)}},c.triggerTime)},function(){switch(clearTimeout(J),e){case"fade":R.animate({opacity:"hide"},q,H);break;case"slideDown":R.animate({height:"hide"},q,H)}}),A&&d.hover(function(){clearTimeout(K)},function(){K=setTimeout(V,q)}),void 0;if(0==k&&(k=m),S&&(k=2),w){if(m>=B?"leftLoop"==e||"topLoop"==e?k=0!=m%t?(0^m/t)+1:m/t:(W=m-B,k=1+parseInt(0!=W%t?W/t+1:W/t),0>=k&&(k=1)):k=1,j.html(""),X="",1==c.autoPage||"true"==c.autoPage)for(Y=0;k>Y;Y++)X+="<li>"+(Y+1)+"</li>";else for(Y=0;k>Y;Y++)X+=c.autoPage.replace("$",Y+1);j.html(X),j=j.children()}if(m>=B)switch(l.children().each(function(){a(this).width()>F&&(F=a(this).width(),E=a(this).outerWidth(!0)),a(this).height()>G&&(G=a(this).height(),D=a(this).outerHeight(!0))}),Z=l.children(),$=function(){var a;for(a=0;B>a;a++)Z.eq(a).clone().addClass("clone").appendTo(l);for(a=0;Q>a;a++)Z.eq(m-a-1).clone().addClass("clone").prependTo(l)},e){case"fold":l.css({position:"relative",width:E,height:D}).children().css({position:"absolute",width:F,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+B*D+'px"></div>').css({top:-(p*t)*D,position:"relative",padding:"0",margin:"0"}).children().css({height:G});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+B*E+'px"></div>').css({width:m*E,left:-(p*t)*E,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:F});break;case"leftLoop":case"leftMarquee":$(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+B*E+'px"></div>').css({width:(m+B+Q)*E,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(Q+p*t)*E}).children().css({"float":"left",width:F});break;case"topLoop":case"topMarquee":$(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+B*D+'px"></div>').css({height:(m+B+Q)*D,position:"relative",padding:"0",margin:"0",top:-(Q+p*t)*D}).children().css({height:G})}_=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},ab=function(b){var d,f,g,h,c=function(c){for(var d=c;B+c>d;d++)b.eq(d).find("img["+n+"]").each(function(){var c,d,b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0])for(c=l.children(),d=0;d<c.length;d++)c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})})};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(Q+_(P));break;case"leftMarquee":case"topMarquee":d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?E:D,g=Q,0!=d%f&&(h=Math.abs(0^d/f),g=1==p?Q+h:Q+h-1),c(g)}},bb=function(a){var b,c,d;if(!z||N!=p||a||S){if(S?p>=1?p=1:0>=p&&(p=0):(P=p,p>=k?p=0:0>p&&(p=k-1)),T(),null!=n&&ab(l.children()),o[0]&&(R=o.eq(p),null!=n&&ab(o),"slideDown"==e?(o.not(R).stop(!0,!0).slideUp(q),R.slideDown(q,H,function(){l[0]||U()})):(o.not(R).stop(!0,!0).hide(),R.animate({opacity:"show"},q,function(){l[0]||U()}))),m>=B)switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,H,function(){U()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,H,function(){U()}).siblings().animate({opacity:"hide"},q,H);break;case"top":l.stop(!0,!1).animate({top:-p*t*D},q,H,function(){U()});break;case"left":l.stop(!0,!1).animate({left:-p*t*E},q,H,function(){U()});break;case"leftLoop":b=P,l.stop(!0,!0).animate({left:-(_(P)+Q)*E},q,H,function(){-1>=b?l.css("left",-(Q+(k-1)*t)*E):b>=k&&l.css("left",-Q*E),U()});break;case"topLoop":b=P,l.stop(!0,!0).animate({top:-(_(P)+Q)*D},q,H,function(){-1>=b?l.css("top",-(Q+(k-1)*t)*D):b>=k&&l.css("top",-Q*D),U()});break;case"leftMarquee":c=l.css("left").replace("px",""),0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*E)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+Q)*E&&l.css("left",-Q*E)});break;case"topMarquee":d=l.css("top").replace("px",""),0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*D)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+Q)*D&&l.css("top",-Q*D)})}j.removeClass(L).eq(p).addClass(L),N=p,x||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<span>"+(p+1)+"</span>/"+k)}},z&&bb(!0),A&&d.hover(function(){clearTimeout(K)},function(){K=setTimeout(function(){p=O,z?bb():"slideDown"==e?R.slideUp(q,V):R.animate({opacity:"hide"},q,V),N=p},300)}),cb=function(a){I=setInterval(function(){v?p--:p++,bb()},a?a:r)},db=function(a){I=setInterval(bb,a?a:r)},eb=function(){y||!u||i.hasClass("pauseState")||(clearInterval(I),cb())},fb=function(){(x||p!=k-1)&&(p++,bb(),S||eb())},gb=function(){(x||0!=p)&&(p--,bb(),S||eb())},hb=function(){clearInterval(I),S?db():cb(),i.removeClass("pauseState")},ib=function(){clearInterval(I),i.addClass("pauseState")},u?S?(v?p--:p++,db(),y&&l.hover(ib,hb)):(cb(),y&&d.hover(ib,hb)):(S&&(v?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?hb():ib()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);J=setTimeout(function(){p=a,bb(),eb()},c.triggerTime)},function(){clearTimeout(J)}):j.click(function(){p=j.index(this),bb(),eb()}),S?(g.mousedown(fb),f.mousedown(gb),x&&(kb=function(){jb=setTimeout(function(){clearInterval(I),db(0^r/10)},150)},lb=function(){clearTimeout(jb),clearInterval(I),db()},g.mousedown(kb),g.mouseup(lb),f.mousedown(kb),f.mouseup(lb)),"mouseover"==c.trigger&&(g.hover(fb,function(){}),f.hover(gb,function(){}))):(g.click(fb),f.click(gb)),"auto"!=c.vis||1!=t||"left"!=e&&"leftLoop"!=e||(nb=function(){C&&(l.width("auto"),l.children().width("auto")),l.parent().width("auto"),E=l.parent().width(),C&&l.parent().width(E),l.children().width(E),"left"==e?(l.width(E*m),l.stop(!0,!1).animate({left:-p*E},0)):(l.width(E*(m+2)),l.stop(!0,!1).animate({left:-(p+1)*E},0)),C||E==l.parent().width()||nb()},a(window).resize(function(){clearTimeout(mb),mb=setTimeout(nb,100)}),nb())})}}(jQuery),jQuery.easing["jswing"]=jQuery.easing["swing"],jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c)},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:2==(b/=e/2)?c+d:(g||(g=e*.3*1.5),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});

/**
 * jQuery.toTop.js v1.1
 * Developed by: MMK Jony
 * Fork on Github: https://github.com/mmkjony/jQuery.toTop
 **/

!function(o){"use strict";o.fn.toTop=function(t){var i=this,e=o(window),s=o("html, body"),n=o.extend({autohide:!0,offset:800,speed:300,position:!0,right:15,bottom:100},t);i.css({cursor:"pointer"}),n.autohide&&i.css("display","none"),n.position&&i.css({position:"fixed",right:n.right,bottom:n.bottom}),i.click(function(){s.animate({scrollTop:0},n.speed)}),e.scroll(function(){var o=e.scrollTop();n.autohide&&(o>n.offset?i.fadeIn(n.speed):i.fadeOut(n.speed))})}}(jQuery);

/**
dark
 **/
var dark = getCookie("dark");
function switchNightMode() {
	dark = getCookie("dark");
 	if (dark == "1") {
 		$("html").removeClass("dark");
		setCookie("dark","0","/","26280")
		$("#dark").html("黑暗");
 	} else {
 		$("html").addClass("dark");
		setCookie("dark","1","/","26280")
		$("#dark").html("明亮");
 	}
}

(function(){
	if (dark == "1") {
		$("html").addClass("dark");
	}
})();
/**
搜索
 **/
$(function(){
			if(document.domain=='syys.ml'){
				var js='https://syys.ml/static/js/jquery.autocomplete.min.js?1';
			}
			else{
				var js='https://cdn.staticfile.org/jquery.devbridge-autocomplete/1.4.10/jquery.autocomplete.min.js';
			}
			$.getScript(js, function(response, status) {
				$('.zanpian_wd').autocomplete({
					serviceUrl : 'https://syys.ml/s/ajax.php',
					//params: {'limit': $limit},
					paramName: 'q',
					maxHeight: 1000,
					transformResult: function(response) {
						var obj = $.parseJSON(response);
						return {
							suggestions: $.map(obj.data, function(dataItem) {
								return { value: dataItem.title, data: dataItem.url, img: dataItem.img, year: dataItem.year, type: dataItem.type, ename: dataItem.ename};
							})
						};
					},
					onSelect: function (suggestion) {
						location.href = suggestion.data;
						//alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
					}
				});
			});
	});
/**
播放
**/
function setCookie(name,value,path="/",time=720){ 
    var exp = new Date();  
    exp.setTime(exp.getTime() + time*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path="+path;
}
function getCookie(name){ 
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
    if(arr != null) return unescape(arr[2]); return null; 
}
function getplayer(){ 
    var arr = document.cookie.match(new RegExp("(^| )player123=([^;]*)(;|$)")); 
    if(arr != null) return unescape(arr[2]); return null; 
}
function setplayer(title,n,url,y,z,b){
	a=title+n+"##"+url+"##"+y+"##"+z+"$$";
	b=title+".{1,20}##"+b+".{1,15}\\$\\$";
	if(getplayer()){
	c=getplayer().replace(new RegExp(b,'g'),"")+a;
	}else{
	c=a;
	}
	setCookie("player123",c);
}
function historys(a="0",b=""){
if(getplayer()){
var allVideoArray = getplayer().split("$$");
nameArray = new Array();urlArray = new Array();timeArray = new Array();perArray = new Array();
if(a=="1"){
	for(var i = 0; i < allVideoArray.length; i++){
		var tarr=allVideoArray[i].indexOf(b);
		if(tarr>=0){
		var timeArray = allVideoArray[i].split("##");
	}}
	if(timeArray[2]){return timeArray[2];}else{return "0";}
}else{
for(var i = 0; i < allVideoArray.length; i++){
			var singleVideoArray = allVideoArray[i].split("##");
			nameArray[i] = singleVideoArray[0];urlArray[i] = singleVideoArray[1];timeArray[i] = singleVideoArray[2];perArray[i] = singleVideoArray[3];
		}
var innerStr = "";
if(document.domain!='m.syys.ml'){
				innerStr = '<li style="line-height: normal;text-align: right;"><a title="清空观看记录" href="javascript:_GC();"style="display: inline-block;line-height: 25px;"> 清空历史 </a></li>';
			}
for(var i =nameArray.length - 2; i >= 0; i--){
		if(!perArray[i]){perArray[i]="0";}
		innerStr += "<li><a href=\"" + urlArray[i] + "\"" + " title=\"" + nameArray[i] + "\"><i>" + nameArray[i] + "</i><i class=\"right\">" + perArray[i]+"%</i></a></li>"
		}
var count = 10;
if(allVideoArray.length > count){
var newCookieStr = "";
for(var i = 1; i < count; i++){
		newCookieStr += allVideoArray[i] + "$$" ;
		setCookie("player123",newCookieStr);
		}}
return innerStr;
		}
		}else{
			if(a=="1"){
			return "0";
			}else{
			return '<center>您的观看历史为空</center>';
			}
		}
}
function _GC(){
$(this).ajaxSuccess(function(){
    $("#historys").html('<center>您的观看历史为空</center>');;
});
$.get("/user/historys/delete/");
}
/**
其他
**/
function resetTabs(obj) {
	$(obj).parent().parent().next(".down-list").find("li").hide();
	$(obj).parent().parent().find("li").removeClass("on");
}
function loadTab() {
	$(".down-list li").show();
	$(".hd").each(function () {
		$(this).find("li:first").addClass("on");
	});
	$(".down-list").each(function () {
		$(this).find("li:first").fadeIn();
	});
	$(".hd li").on("click", function (e) {
		e.preventDefault();
		if ($(this).attr("class") == "on") {
			return;
		} else if ($(this).attr("id") == ".n"){
			resetTabs(this);
			$(this).addClass("on");
			$(".down-list li").show();
			$(".xx").remove();
		}else if($(this).attr("id") == ".x"){
			resetTabs(this);
			$(this).addClass("on");
			$(".xx").remove();
			$(".down-list ul").append("<li class=\"xx\"><div>暂无资源</div></i>");
		}else{
			resetTabs(this);
			$(this).addClass("on");
			$($(this).attr("id")).fadeIn();
			$(".xx").remove();
		}
	});
}
function decrypt(str,key,iv)
{
	var key			= CryptoJS.MD5(key).toString();
	var iv			= CryptoJS.MD5(iv).toString();
	var crypto_key 	= CryptoJS.enc.Utf8.parse(key);
	var crypto_iv 	= CryptoJS.enc.Utf8.parse(iv.substr(0,8));
	var decrypt_str	= CryptoJS.TripleDES.decrypt(str,crypto_key,{iv:crypto_iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});
	return 	decrypt_str.toString(CryptoJS.enc.Utf8);	
}
function decontent(key,iv)
{
$('.down-list p .torrent').each(function(){
    var href = $(this).attr('href');
	href = href.substr(1);
	var st=0;
	$(this).on('click contextmenu',function(){if(st++<1){$(this).attr('href',decrypt(href,key,iv));
	
	//console.log(decrypt(href));
	}});
/**
	var trigger = null;
	$(this).hover(
    function(){
	var $this=$(this);
    trigger = setTimeout(function(){
	if(st++<1){$this.attr('href',decrypt(href,key,iv));}
	},500);
    },
    function(){
        clearTimeout(trigger);
    }
);
**/
});
}
function change(){
var arr = ["mv","tv","ac"];
arr.forEach(v=>{
var p=1;
$("h2 #"+v).click(function(){
if(p++==5){p=1;}
$.ajaxSetup({cache:true});
$(this).parents().next("ul").load("/change/"+p+"_"+v+"/");
});
});
}
$(function(){
	  
      $(".sq_jj").click(function(){
          $(".sqjj_a").toggle();
          $(".zkjj_a").toggle();
      });
	  
      $(".zk_jj").click(function(){
          $(".sqjj_a").toggle();
          $(".zkjj_a").toggle();
      });
      $(".sq_zy").click(function(){
          $(".sqzy_a").toggle();
		  $(".zk_zy").toggle();
      });
      $(".zk_zy").click(function(){
		  $(this).toggle();
		  $(".sqzy_a").toggle();
      });
      $(".sq_xx").click(function(){
          $(".sqxx_a").toggle();
          $(".zkxx_a").toggle();
      });
      $(".zk_xx").click(function(){
          $(".sqxx_a").toggle();
          $(".zkxx_a").toggle();
      });
});