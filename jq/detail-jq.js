var Top={
	dom:{},
	init:function(){
		
		this.initdom();
	},
	initdom:function(){},
	Right_nav:function(){
		setInterval(function(){
			$("#nav-right .text").animate({"top":"-40px"},2000,function(){
			$("#nav-right .text").css("top","0");
		})
		},1000)
		
	},
}



var Main={
	dom:{},
	init:function(){
		this.initdom();
		this.Hide();
		this.Fangdajing();
		this.ProductNum();
		this.Tab();
		this.Input();
		this.Change();
	},
	
	initdom:function(){
		var dom=this.dom;
		dom.hide=$("#main-top-left .box3 .hide");
		dom.product=$("#main-top-left .box1 img");
		dom.bigbox=$("#main-top-left .bigbox ");
		dom.fangdajing=$("#main-top-left .box1 .fangdajing"); 
		dom.img=$("#main-top-left .box2 img");
		dom.li=$("#main-middle .right ul li")
	},
	Hide:function(){
		var dom=this.dom;
		dom.hide.mouseenter(function(){
			
			dom.hide.css("background","url(../img2/fav.jpg) no-repeat 0 -38px");
		})
		dom.hide.mouseleave(function(){
			
			dom.hide.css("background","url(../img2/fav.jpg) no-repeat 0 0");
		})
		
	},
	
	Fangdajing:function(){
		var dom=this.dom;
		var scrolltop=0;
		var scrollleft=0;
		var index=0;
//		鼠标移入 右边的BOX显示
		dom.product.mouseenter(function(){
			
			dom.bigbox.css("display","block");
			
		})
//		鼠标移除 右边的BOX消失
		dom.product.mouseleave(function(){
			
			dom.bigbox.css("display","none");
		})
//		得到滚动的距离
		$(window).scroll(function(){
				scrolltop=$(this).scrollTop();
				scrollleft=$(this).scrollLeft();
			})
		dom.product.parent().mousemove(function(e){
			var x=e.clientX;
			var y=e.clientY;
			
			dom.bigbox.show();
			dom.fangdajing.show();
			x=x-dom.product.offset().left+scrollleft-100;
			y=y-dom.product.offset().top+scrolltop-100;
			if(x<=0)
			{
				x=0;
			}
			if(x>=150)
			{
				x=150;
			}
			if(y<=0)
			{
				y=0;
			}
			if(y>=150)
			{
				y=150;
			}
			dom.fangdajing.css({"left":+x+"px","top":+y+"px"})
			
			var bleft=x*(dom.bigbox.find("img").width()-dom.bigbox.width())/(dom.product.width()-dom.fangdajing.width());
			var btop=y*(dom.bigbox.find("img").height()-dom.bigbox.height())/(dom.product.height()-dom.fangdajing.height());
			
			dom.bigbox.find("img").css({"left":-bleft,"top":-btop});
			
		})
		dom.product.parent().mouseout(function(){
			dom.fangdajing.css("display","none");
			dom.bigbox.hide();
		})
//		改变小BOX的图片路径
		dom.img.mouseover(function(){
			index=$(this).index();
			
			dom.product.attr("src","../img2/"+index+"q.jpg");
			dom.bigbox.find("img").attr("src","../img2/big"+index+".jpg");
		})
	},
//	改变商品数量
	ProductNum:function(){
		var dom=this.dom;
		$("#main-top-middle .bottom .add").click(function(){
			
			var num=$("#main-top-middle .bottom .txt").val();
			num++;
			
			$("#main-top-middle .bottom .txt").val(num);
		})
		$("#main-top-middle .bottom .reduce").click(function(){
			
			var num=$("#main-top-middle .bottom .txt").val();
			num--;
			if(num<=0)
			{
				return;
			}
			
			$("#main-top-middle .bottom .txt").val(num);
		})
	},
//	TAB切换
	Tab:function(){
		var dom=this.dom;
		dom.li.click(function(){
			$(this).addClass("li-class").siblings().removeClass("li-class");
		})
		
		$("#main-middle .right ul li").click(function(){
			var index0=$(this).index();
			if(index0==0)
			{
				$("#main-middle .right .text").css("display","block");
				$("#main-middle .right .jieshao").css("display","block");
				$("#main-middle .right #pingjia").css("display","block");
				$("#main-middle .right #pinglun").css("display","block");
				$("#main-middle .right #zixun").css("display","block");
				$("#main-middle .right #baozhang").css("display","block");
			}
			else if(index0==1)
			{
				$("#main-middle .right .text").css("display","none");
				$("#main-middle .right .jieshao").css("display","none");
				$("#main-middle .right #pingjia").css("display","block");
				$("#main-middle .right #pinglun").css("display","block");
				$("#main-middle .right #zixun").css("display","block");
				$("#main-middle .right #baozhang").css("display","block");
			}
			else if(index0==2)
			{
				$("#main-middle .right .text").css("display","none");
				$("#main-middle .right .jieshao").css("display","none");
				$("#main-middle .right #pingjia").css("display","none");
				$("#main-middle .right #pinglun").css("display","none");
				$("#main-middle .right #zixun").css("display","block");
				$("#main-middle .right #baozhang").css("display","block");
			}
			else if(index0==3)
			{
				$("#main-middle .right .text").css("display","none");
				$("#main-middle .right .jieshao").css("display","none");
				$("#main-middle .right #pingjia").css("display","none");
				$("#main-middle .right #pinglun").css("display","none");
				$("#main-middle .right #zixun").css("display","none");
				$("#main-middle .right #baozhang").css("display","block");
			}
		})
	},
	
	Input:function(){
		$(".head-2-search input").focus(function(){
			
			$(this).val("");
		})
		$(".head-2-search input").blur(function(){
			
			$(this).val("搜索  母婴之家   商品/品牌 ");
		})
	},
	
	Change:function(){
		$(".buy-car").mouseenter(function(){
			$(".car-tips").css("display","block");
			$(".car-tips").animate({"height":"60px"},100,function(){});
		})
		$(".buy-car").mouseleave(function(){
			$(".car-tips").css("display","none");
			$(".car-tips").animate({"height":"0px"},100,function(){});
		})
	}
}
var Head={
	
	dom:{},
	init:function(){
		this.initDom();
		this.Head1Move();
		
		this.Block();
		
	},
	
	initDom:function(){
		var dom=this.dom;
		dom.ul1=$(".head-li2-ul1");
		dom.ul2=$(".head-li2-ul2");
		dom.ul3=$(".head-li2-ul3");
		dom.nav2_li=$("#nav .nav-ul2 li");
		dom.banner=$("#lunbo");
		dom.blocktop=$("#topblock");
		dom.blockright=$("#rightblock");
	},
	
	Head1Move:function(){
		var dom=this.dom;
		$("#head-li3").hover(function(){
			
			$(this).children().eq(0).animate({"background-position":"-320px,-265px"},1000,function(){});
		})
		$(".head-2-search input").focus(function(){
			$(this).val("");
		})
		$(".head-2-search input").blur(function(){
			$(this).val("搜索 母婴之家  商品/品牌");
		})
		
		setInterval(function(){
			$("#nav-right .text").animate({"top":"-50px"},1000,function(){
				$("#nav-right .text").css("top","0px");
			});
		},4000);
		
		dom.nav2_li.mouseenter(function(){
			
			$(this).css("border","1px solid #FF5C00").siblings().css("border-right","1px solid #FF5C00");
			
		})
		dom.nav2_li.mouseleave(function(){
			
			$(this).css("border","0").siblings().css("border","0");
		})
		
		
	},
	

	
	
	Block:function(){
		var dom=this.dom;
		$("#rightblock .zhiding").click(function(){
				$("body").animate({"scrollTop":0},600,function(){
					return;
				});
			})
		$("#left-block .left-p1").click(function(){
				$("body").animate({"scrollTop":"1160px"},600,function(){
					return;
				});
			})
		$("#left-block .left-p2").click(function(){
				$("body").animate({"scrollTop":"7634px"},600,function(){
					return;
				});
			})
		$(window).scroll(function(){
			var scrollheight=$(this).scrollTop();
			
			if(scrollheight>=600)
			{
				dom.blocktop.css("display","block");
			}
			else{
				dom.blocktop.css("display","none");
			}
			
			if(scrollheight>=232)
			{
				$("#left-block").fadeIn(800);
			}
			else
			{
				$("#left-block").fadeOut(800);
			}
			
		})
		$("#top-right input").focus(function(){
			$(this).val("");
		})
		$("#top-right input").blur(function(){
			$(this).val("搜索  母婴之家  商品/品牌");
		})
		$(".ren").mouseenter(function(){
			
			FloatMove($("#login"));
		})
		$(".ren").parent().mouseleave(function(){
			
			$("#login").css({"display":"none","right":"55px"});
		})
		$(".xing").mouseenter(function(){
			
			FloatMove($("#login2"));
		})
		$(".xing").mouseleave(function(){
			
			$("#login2").css({"display":"none","right":"55px"});
		})
		$(".kefu").mouseenter(function(){
			
			FloatMove($("#kefu-float"));
		})
		$(".kefu").mouseleave(function(){
			
			$("#kefu-float").css({"display":"none","right":"55px"});
		})
		$(".zhiding").mouseenter(function(){
			
			FloatMove($("#zhiding-float"));
		})
		$(".zhiding").mouseleave(function(){
			
			$("#zhiding-float").css({"display":"none","right":"55px"});
		})
		$(".close").click(function(){
			$(this).parent().css({"display":"none","right":"55px"});
		})
		
	},
	
	Top_Product:function(){
		
		$("#timer-product ul li").mouseenter(function(){
			
			$(this).find(".timer-miss").fadeIn(200);
			$(this).find(".qiang").animate({"opacity":"100","top":"0"},200,function(){});
		})
		$("#timer-product ul li").mouseleave(function(){
			$(this).find(".timer-miss").fadeOut(200);
			$(this).find(".qiang").animate({"opacity":"0","top":"40px"},200,function(){});
		})
	}
	
	
	
	

	
}
function FloatMove(obj){
		obj.fadeIn(300);
		obj.animate({"right":"35px","opacity":"100",},200,function(){
			return;
		});
		
	
	
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
		}
	}
}
function Quit(){
	
	$(".head-span .head-a2").click(function(){
		alert("");
		var json=JSON.stringify($("input.txt").eq(0).val());
		setcookie("auto_login",json,-1);
		
		alert("退出登录成功");
	})
	
	var Auto=getcookie("auto_login");
	var shoparr0=getcookie(Auto+"_shop");
	
	shoparr0=eval(shoparr0);
	
	if(shoparr0!=null)
	{
		var shopnumber=0;
		for(var i=0;i<shoparr0.length;i++)
		{
			shopnumber=shopnumber+parseInt(shoparr0[i].shopnum);
			
		}
		$(".car-tips").find("p").html("您的购物车已有"+shopnumber+"件商品");
		$(".buy-car").find("p").html(shopnumber);
	}
}

//换购的轮播图移动
function HuangouMove(){
	var index=0;
	$("#main-top-middle .nav div .bottombtn").click(function(){
		index++;
		if(index==3)
		{
			index=0;
		}
		var Height=index*81;
		$("#main-top-middle .nav ul").animate({"top":-Height},300,function(){});
		
	})
	$("#main-top-middle .nav div .topbtn").click(function(){
		index--;
		if(index==-1)
		{
			index=2;
		}
		var Height=index*81;
		$("#main-top-middle .nav ul").animate({"top":-Height},300,function(){});
		
	})
	
	var flag=1;
	$("#main-top-middle .btn").click(function(){
		if(flag==1)
		{
			$("#main-top-middle .nav").animate({"height":0,"border-width":0},500,function(){});
			flag=0;
			$(this).parent().find(".txt").html("点击展开");
			$("#main-top-middle .btn i").css("border-color","#fff #fff #333 #fff")
			$("#main-top-middle .btn i").css({"margin-bottom":"7px","margin-top":"0px"});
			return;
		}
		if(flag==0)
		{
			$("#main-top-middle .nav").animate({"height":88,"border-width":1},500,function(){});
			flag=1;
			$(this).parent().find(".txt").html("收起");
			$("#main-top-middle .btn i").css("border-color"," #333 #fff #fff #fff")
			$("#main-top-middle .btn i").css({"margin-bottom":"0px","margin-top":"7px"});
			return;
		}
	})
	$.getJSON("../json/detail.json",function(data){
		for(var i=0;i<data.length;i++)
		{
			var oli=$("<li><img src='../detail-img/1.jpg'/><p>￥1.00换购</p></li>");
			oli.find("img").attr("src",data[i].src);
			oli.find("p").html("￥"+data[i].price+"换购");
			$("#main-top-middle .nav ul").append(oli);
			oli.bind("mouseenter",function(){
				$(this).find("p").animate({"top":"48px"},500,function(){});
			})
			oli.bind("mouseleave",function(){
				$(this).find("p").animate({"top":"78px"},500,function(){});
			})
		}
	})
	
	
//	TAB置顶
	$(window).scroll(function(){
		var Height=$(this).scrollTop();
		if(Height>=749)
		{
			$("#main-middle .right .right-ul1").css({"position":"fixed","top":0,"left":"322px"});
		}
		else
		{
			$("#main-middle .right .right-ul1").css({"position":"absolute","top":"757px","left":"322px"});
		}
	})
}
$(function(){
	Head.init();
	Top.Right_nav();
	Main.init();
	Quit();
	Load.ChangeUserName();
	HuangouMove();
})
