;(function($) {
	var Tips = function(ele,options)
	{
		this.element = ele ;
		this.defaults = {
			post: "bottomRight", //位置 四个角  topLeft,topRight,bottomLeft,bottomRight
            gurl: "#",           //广告跳转链接
            status: "succeed",    //状态，succeed,fail,error
            close: 0 ,             //自动关闭时间，为0时不自动关闭
            anitime:"500" ,
            title:"提示" ,
            content:"操作成功" ,
            detail:"你的操作已成功",
            cbfun:function(){}
		} 
		this.options = $.extend({},this.defaults, options);
		this.handler = '' ;
	};
	Tips.prototype = {
		creat:function(){
			var self = this ;
			var b  = '' , c = '';
            b += '<div id="tips" class="bottom-message-notice"><h2>' + self.options.title + '<span class="mes_prompt_close"></span></h2>' ; 
            if('succeed' == self.options.status)  c = 'notice_succeed';
            else if('fail' == self.options.status)  c = 'notice_fail';
            else c = 'notice_err';
            b += '<div class="mess-notice-con"><p><span class="bottom-bounced-notice '+ c +'"></span><span><b>' + self.options.content + '</b></span></p>' ;
            b += '<p><label>'+ self.options.detail +'</label></p>'
            
            $(self.element).append(b);
            $(document).on("click",".mes_prompt_close",function(){
            	self.hideOut('click');
        	});
        	self.showOut(); 
		},
		showOut:function(){
			var self = this ;
			self.handler = $("#tips") ;
			self.options.close > 0 ? self.autoClose() : '' ;	
			self.handler.animate({"bottom":5},self.options.anitime);
		},
		hideOut:function(auto){
			var self = this ;
			var h = 0 - 10 - self.handler.height() ;
            //tips.fadeOut('500');
            self.handler.animate({"bottom":h},self.options.anitime);
            t = self.options.anitime - 0 + 50 ;
            setTimeout(function(){
                self.handler.remove();
                auto == 'click' ? self.options.cbfun() : '';
            },t);
		},
		autoClose:function(){
			var self = this ;
			var time = 1000 * self.options.close ;
            window.setTimeout(function() {
                self.hideOut('auto');
            }, time);
		}
	}

	$.fn.creatTips = function(options) {
		var tips = new Tips(this,options);
		return tips.creat() ;
	}
})(jQuery)