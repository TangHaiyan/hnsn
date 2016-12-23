(function (argument) {

	//var chongzhi = document.getElementById('chongzhi');
	
	$('#chongzhi').on('click',function(){
		
	   var bodyData = $("input[type='radio']:checked").siblings('label').text();
	   var nonce_str = randomWord(false,32).toUpperCase();
       var options =
       '<xml>\
		   <appid>gh_40d701cafe72</appid>\
		   <attach>支付测试</attach>\
		   <body>湖南圣女美容'+ bodyData +'</body>\
		   <mch_id>10000100</mch_id>\
		   <nonce_str>'+ nonce_str +'</nonce_str>\
		   <sign>0CB01533B8C1EF103065174F50BCA001</sign>\
		</xml>';
	   console.log(options);

	   var url = 'https://api.mch.weixin.qq.com/pay/unifiedorder';

	   post(url,options);

	});

         

	function post(url,options){
		//1、创建ajax对象，实现兼容
		if (window.XMLHttpRequest) {
				request= new XMLHttpRequest();
		}else if(window.ActiveObject){
				request=new ActiveObject("Microsoft.XMLHTTP");
		}			
		//2、连接服务器
		request.open("post",url);
		//3、设置头部信息
		request.setRequestHeader("content-type","text/xml");
		//4、发送请求
		request.send(options);
		//4、监听响应
		var onchange=request.onreadystatechange;
		function onchange(){
		    if (request.readyState=4) {
			    if (request.status==200||request.status==304) {
				    //callback(request.responseText);
				    console.log(成功);
			        }else{
				    console.log("请求失败，错误状态码为："+request.responseText)
			    }
		    }	
		};
		
	};
  
   //var options = prepay;


	//获取时间错
	var date = new Date();
    var timeStamp = date.getTime();

	//生成随机32位字符串
	function randomWord(randomFlag, min, max){
	    var str = "",
	        range = min,
	        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	 
	    // 随机产生
	    if(randomFlag){
	        range = Math.round(Math.random() * (max-min)) + min;
	    }
	    for(var i=0; i<range; i++){
	        pos = Math.round(Math.random() * (arr.length-1));
	        str += arr[pos];
	    }
	    return str;
	}
	


		// function onBridgeReady(){
		//    WeixinJSBridge.invoke(
		//        'getBrandWCPayRequest', {
		//            "appId" ： "wx2421b1c4370ec43b",     //公众号名称，由商户传入     
		//            "timeStamp"：" 1395712654",         //时间戳，自1970年以来的秒数     
		//            "nonceStr" ： "e61463f8efa94090b1f366cccfbbb444", //随机串     
		//            "package" ： "prepay_id=u802345jgfjsdfgsdg888",     
		//            "signType" ： "MD5",         //微信签名方式：     
		//            "paySign" ： "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
		//        },
		//        function(res){     
		//            if(res.err_msg == "get_brand_wcpay_request：ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
		//        }
		//    ); 
		// }
		// if (typeof WeixinJSBridge == "undefined"){
		//    if( document.addEventListener ){
		//        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
		//    }else if (document.attachEvent){
		//        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
		//        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
		//    }
		// }else{
		//    onBridgeReady();
		// } 

})();