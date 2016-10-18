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

function LastTimer(){
	var ts=$(".tspan5").html();
	var hour=$(".tspan1").html();
	var minute=$(".tspan3").html();
	var timer2=setInterval(function(){
		ts=$(".tspan5").html();
		hour=$(".tspan1").html();
		minute=$(".tspan3").html();
		if(ts==0)
		{
			
			
			if(minute==0)
			{
				hour--;
				$(".tspan1").html(hour);
				minute=60;
				if(hour<0)
				{
					clearInterval(timer2);
				}
				
			}
			minute--;
			$(".tspan3").html(minute);
			
			if(minute<10)
				{
					
					$(".tspan3").html("0"+minute);
				}
			ts=60;
			
		}
		ts--;
		
		$(".tspan5").html(ts);
		if(ts<10)
		{
			$(".tspan5").html("0"+ts);
		}
		
	},1000)
	
}

function FloatMove(){
		
//		$("#product-box").mouseenter(function(){
//			$(this).animate({"top":0},400,function(){});
//		})
//		$("#product-box").mouseleave(function(){
//			$(this).animate({"top":"10px"},400,function(){});
//		})
		$.getJSON("../json/daigou.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				
				var odiv=$("<div><div id='product-box'><dl><a href='detail.html'><img src='../daigou-img/1.jpg' /></a><dt><a href='detail.html'>欧洲直邮：HiPP德国喜宝婴儿有机奶粉12+段 800g（每单限3盒）</a></dt><dd><a href='detail.html'>欧洲直邮保税区满199减40</a></dd></dl><div><p>￥145.00</p></div></div></div>");
				odiv.find("a").eq(1).html(data[i].title);
				odiv.find("img").attr("src",data[i].src);
				
				$("#produvt-box div p").html(data[i].price);
				$("#product").append(odiv);
				
				odiv.bind("mouseenter",function(){
					
					$(this).find("#product-box").animate({"top":0},200,function(){});
				})
				odiv.bind("mouseleave",function(){
					
					$(this).find("#product-box").animate({"top":"10px"},200,function(){});
				})
			}
		})
	
	
}

var l=1;
var timer1=0;
//顶部
var Product={
	dom:{},
	init:function(){
		
		
		
		
		this.ChangeUserName();
	},
	ChangeUserName:function(){
		
		var Auto=getcookie("auto_login");
		Auto=eval(Auto);
		console.log(Auto);
		if(Auto!=null)
		{
			console.log()
			$("a.head-a1").html(Auto);
//			$("a.head-a1").css({"width":"48px","overflow":"hidden","white-space":"nowrap","text-overflow":"ellipsis"});
			$("a.head-a2").html("退出登录");
		}
	},
	
	
	
}
function Quit(){
	$(".head-span .head-a2").click(function(){
		
		setcookie("auto_login","json",-1);
		alert("退出登录成功");
	})
}
$(function(){
	FloatMove();
	Head.init();
	LastTimer();
	Head.Top_Product();
	Product.init();
	Quit();
})