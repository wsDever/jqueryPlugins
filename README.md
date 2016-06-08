jquery-tips-消息提醒(单消息版)
===================================
1、引用
----------------------------------- 
在head中引用tips.min.js和tips.style.css
2、使用
----------------------------------- 
与其它使用jquery的方法一样：$(ele).creatTips(parms)，参数说明如下：
### parms说明：<br>
    status: "succeed",        //状态，succeed,fail,error三选一
    close: 0 ,                //自动关闭时间，为0时不自动关闭
    anitime:"500" ,           //动画时间
    title:"提示" ,            // tips标题
    content:"操作成功" ,      //消息
    detail:"你的操作已成功",  //消息详情
    cbfun:function(){}        //close之后的回调
