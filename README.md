# jqueryPlugins
1、jquery插件-tips
引用：tips.min.js,tips.style.css
使用：$(ele).creatTips(parms);
parms说明：
  status: "succeed",    //状态，succeed,fail,error三选一
  close: 0 ,             //自动关闭时间，为0时不自动关闭
  anitime:"500" ,         //动画时间
  title:"提示" ,          // tips标题
  content:"操作成功" ,    //消息
  detail:"你的操作已成功",  //消息详情
  cbfun:function(){}        //close之后的回调
