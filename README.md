# jqueryPlugins
jquery-tips-单消息<br>
1、引用：tips.min.js，tips.style.css<br>
2、使用：$(ele).creatTips(parms);<br>
parms说明：<br>
  status: "succeed",        //状态，succeed,fail,error三选一<br>
  close: 0 ,                //自动关闭时间，为0时不自动关闭<br>
  anitime:"500" ,           //动画时间<br>
  title:"提示" ,            // tips标题<br>
  content:"操作成功" ,      //消息<br>
  detail:"你的操作已成功",  //消息详情<br>
  cbfun:function(){}        //close之后的回调<br>
