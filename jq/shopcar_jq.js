function Input(){
	$("#buy .top span input").focus(function(){
		$(this).val("");
	})
	$("#buy .top span input").blur(function(){
		$(this).val("请使用优惠码");
	})
}

function Huangou(){
	$.getJSON("../json/huangou.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				var oli=$("<li><div><p><i></i>全场买即可换购（海淘商品除外）</p><dl><img src='../list-img/x1.jpg' /><dt><a href='javascript:;'>贝比姆婴儿PiPi柔湿巾10片装 (颜色随机发货)</a></dt><dd>1.00</dd></dl><span class='btn'>立即换购</span></div></li>");
				$("#main3 .box .nav-box ul").append(oli);
				oli.find("img").attr("src",data[i].src);
				oli.find("a").html(data[i].title);
				oli.find("dd").html(data[i].price);
			}
		})
	var i=0;
	$("#main3 .leftbtn").click(function(){
		
		if(i==0)
		{
			i=1;
		}
		else
		{
			i=0;
		}
		var Width=939*i;
		$("#main3 .nav-box ul").animate({"left":-Width+"px"},500,function(){});
	})
	$("#main3 .rightbtn").click(function(){
		
		if(i==0)
		{
			i=1;
		}
		else
		{
			i=0;
		}
		var Width=939*i;
		$("#main3 .nav-box ul").animate({"left":-Width+"px"},500,function(){});
	})
	
	$("#main4 ul li").click(function(){
		$(this).addClass("noborder").siblings().removeClass("noborder");
		
	})
	$("#main4 ul li").eq(1).click(function(){
		$("#main4 .box-move").html("");
		$.getJSON("../json/rexiao.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				
				var odl=$("<dl><img src='../list-img/b1.jpg' /><dt><a href='javascript:;'>膳魔师高真空不锈钢两用瓶红色550ml（蓝盖）-带杯套</a></dt><dd><b>388.00</b><span>468.00</span></dd><p>加入购物车</p></dl>");
				odl.find("img").attr("src",data[i].src);
				odl.find("a").html(data[i].title);
				odl.find("dd").children().eq(0).html(data[i].price);
				odl.find("dd").children().eq(1).html(data[i].noprice);
				$("#main4 .box-move").append(odl);
			}
		})
		
	})
	$("#main4 ul li").eq(0).click(function(){
		$("#main4 .box-move").html("");
		$.getJSON("../json/tuijian.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				
				var odl=$("<dl><img src='../list-img/b1.jpg' /><dt><a href='javascript:;'>膳魔师高真空不锈钢两用瓶红色550ml（蓝盖）-带杯套</a></dt><dd><b>388.00</b><span>468.00</span></dd><p>加入购物车</p></dl>");
				odl.find("img").attr("src",data[i].src);
				odl.find("a").html(data[i].title);
				odl.find("dd").children().eq(0).html(data[i].price);
				odl.find("dd").children().eq(1).html(data[i].noprice);
				$("#main4 .box-move").append(odl);
			}
		})
		
	})
}


function TuiJian(){
	$.getJSON("../json/tuijian.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				
				var odl=$("<dl><img src='../list-img/b1.jpg' /><dt><a href='javascript:;'>膳魔师高真空不锈钢两用瓶红色550ml（蓝盖）-带杯套</a></dt><dd><b>388.00</b><span>468.00</span></dd><p>加入购物车</p></dl>");
				odl.find("img").attr("src",data[i].src);
				odl.find("a").html(data[i].title);
				odl.find("dd").children().eq(0).html(data[i].price);
				odl.find("dd").children().eq(1).html(data[i].noprice);
				
				$("#main4 .box-move").append(odl);
			}
		})
	var i=0;
	$("#main4 .rightbtn").click(function(){
		
		if(i==0)
		{
			i=1;
		}
		else
		{
			i=0;
		}
		var Width=940*i;
		$("#main4 .box-move").animate({"left":-Width+"px"},500,function(){});
	})
	$("#main4 .leftbtn").click(function(){
		
		if(i==0)
		{
			i=1;
		}
		else
		{
			i=0;
		}
		var Width=940*i;
		$("#main4 .box-move").animate({"left":-Width+"px"},500,function(){});
	})
}

function  DingDan(){
				var sum=0;
				var Auto=getcookie("auto_login");
											
				if(Auto==null)
				{
					alert("用户未登录,用户购物车无法显示,请先登录！");
					return;
				}
				
										//		 先将cookie中的用户取下来
										//		setcookie('User',"1");
				var str0=getcookie(Auto+"_shop");
					
				str0=eval(str0);
											
				
										//			if(str0==null)
										//			{
										//				return;
										//			}
				if(str0!=null)
				{
					for(var i=0;i<str0.length;i++)
					{
						
					  	var oli=$("<li><div><img src='../list-img/1.jpg' /><a href='javascript:;'>贝比姆婴儿PiPi柔湿巾10片装 (颜色随机发货)贝比姆婴儿PiPi柔湿巾10片装 (颜色随机发货)贝比姆婴儿PiPi柔湿巾10片装 (颜色随机发货)</a><span class='jiage'><p>￥1.20</p><p style='color: #C1C1C1;text-decoration: line-through;'>￥3.60</p></span><span class='num-block'><button class='leftbtn'><span></span></button><input type='text' value='1' /><button class='rightbtn'><span></span><em></em></button></span><b>￥2.40</b><p class='delete'>删除</p></div></li>")
						oli.find("img").attr("src",str0[i].src);	
						oli.find(".jiage").children().eq(0).html(str0[i].price);
						oli.find("input").val(str0[i].shopnum);
						oli.find(".jiage").children().eq(1).html("￥"+str0[i].noprice);
						oli.find("a").html(str0[i].title);
						var total=parseFloat(str0[i].price.slice(1))*parseFloat(oli.find("input").val());
						total=total.toFixed(2);
						sum=parseFloat(sum)+parseFloat(total);
						
						sum=sum.toFixed(2);
						
						oli.find("b").html("￥"+total);
						oli.find("b").attr("maxlength","5");
						$("#main2 .tbody ul").append(oli);
						$("#buy .bottom b").html("￥"+sum);
						
					}
					
//					减少商品件数
					
					$("#main2").on("click",".leftbtn",function(){
						var index=$(this).parent().parent().parent().index();
						var s=$("#main2 .tbody ul li div .num-block input").eq(index).val();
						s--;
						
						if(s<1)
							{
								return;
							}
						$("#main2 .tbody ul li div .num-block input").eq(index).val(s);
						var total=parseFloat($(this).parent().parent().find(".jiage").children().eq(0).html().slice(1))*parseFloat($("#main2 .tbody ul li div .num-block input").eq(index).val());
						total=total.toFixed(2);
						$(this).parent().parent().find("b").html("￥"+total);
						sum=parseFloat(sum)-parseFloat($(this).parent().parent().find(".jiage").children().eq(0).html().slice(1));
						sum=sum.toFixed(2);
						$("#buy .bottom b").html("￥"+sum);
					})
					
//					增加商品件数
					$("#main2 ").on("click",".rightbtn",function(){
						var index=$(this).parent().parent().parent().index();
						var s=$("#main2 .tbody ul li div .num-block input").eq(index).val();
						s++;
						$("#main2 .tbody ul li div .num-block input").eq(index).val(s);
						var total=parseFloat($(this).parent().parent().find(".jiage").children().eq(0).html().slice(1))*parseFloat($("#main2 .tbody ul li div .num-block input").eq(index).val());
						total=total.toFixed(2);
						$(this).parent().parent().find("b").html("￥"+total);
						sum=parseFloat(sum)+parseFloat($(this).parent().parent().find(".jiage").children().eq(0).html().slice(1));
						sum=sum.toFixed(2);
						$("#buy .bottom b").html("￥"+sum);
					})
//					删除商品
					$("#main2 ").on("click",".delete",function(){
						var self=this;
						var index0=$(this).parent().parent().index();
						
						$(self).parents(".tbody-ul").find("li").eq(index0).remove();
						alert("移除商品成功！");
						str0.splice(index0,1);
						var json=JSON.stringify(str0);
						setcookie(Auto+"_shop",json,1);
						sum=parseFloat(sum)-parseFloat($(this).parent().parent().find("b").html().slice(1));
						sum=sum.toFixed(2);
						$("#buy .bottom b").html("￥"+sum);
					})
//					清除购物车
					$("#buy .bottom a").click(function(){
						$(this).parents("#main").find("#main2").find("li").remove();
						alert("移除商品成功！");
						str0.splice(0,str0.length);
						var json=JSON.stringify(str0);
						setcookie(Auto+"_shop",json,-1);
						sum=0;
						sum=sum.toFixed(2);
						$("#buy .bottom b").html("￥"+sum);
					})
				}
	
	
	
	
}

var Load={
	ChangeUserName:function(){
		
		var Auto=getcookie("auto_login");
		Auto=eval(Auto);
		
		if(Auto!=null)
		{
			console.log()
			$("a.head-a1").html(Auto);
			$("a.head-a2").html("退出登录");
			$("#main1 .title p").html(Auto+",欢迎您!");
			$("#main1 .title p").css("color","#FF4500");
		}
	}
}
function Quit(){
	$(".head-span .head-a2").click(function(){
		
		var json=JSON.stringify($("input.txt").eq(0).val());
		setcookie("auto_login",json,-1);
		
		alert("退出登录成功");
		location.reload();
	})
}
$(function(){
	Input();
	Huangou();
	TuiJian();
	DingDan();
	Load.ChangeUserName();
	Quit();
})
