var Head={
	
	dom:{},
	init:function(){
		this.initDom();
		this.Head1Move();
		this.BannerMove();
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
	
	BannerMove:function(){
		
		var dom=this.dom;
		var i=0;
		var j=0;
		var speed=1090;
		var start=dom.banner.offset().left;
		var timer=setInterval(function(){
			var targetx=i*speed;
			
			dom.banner.animate({"left":-targetx+"px"},1000,function(){
				
				
				
			$("#select-1").children().eq(i).addClass("bannerstyle").siblings().removeClass("bannerstyle");
					
				i++;
			
				
				if(i==4)
				{
					i=0;
					
				}
			})
		},4000);
		
		$("#select-1").children().mouseenter(function(){
			clearInterval(timer);
			var index=$(this).index();
			var length=1090*index;
			
			dom.banner.animate({"left":-(length)+"px"},400,function(){
				timer=setInterval(function(){
					var targetx=i*speed;
					
					dom.banner.animate({"left":-targetx+"px"},1000,function(){
						
						
						
					$("#select-1").children().eq(i).addClass("bannerstyle").siblings().removeClass("bannerstyle");
							
						i++;
					
						
						if(i==4)
						{
							i=0;
							
						}
					})
				},4000);
			});
			
			$("#select-1").children().eq(index).addClass("bannerstyle").siblings().removeClass("bannerstyle");
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
			$(this).find(".qiang").animate({"display":"block","top":"0"},200,function(){});
		})
		$("#timer-product ul li").mouseleave(function(){
			$(this).find(".timer-miss").fadeOut(200);
			$(this).find(".qiang").animate({"display":"none","top":"40px"},200,function(){});
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

function FloatMove(obj){
		obj.fadeIn(300);
		obj.animate({"right":"35px","opacity":"100",},200,function(){
			return;
		});
		
	
	
}

var l=1;
var timer1=0;
//顶部
var Product={
	dom:{},
	init:function(){
		this.Top();
		this.initdom();
		this.Banner();
		this.MiddleProduct();
		this.TodayProduct();
		this.ChangeUserName();
	},
	
	initdom:function(){
		var dom=this.dom;
		dom.li1=$("#timer-ul1 li");
		dom.leftbtn=$("#timer-top .leftbtn");
		dom.rightbtn=$("#timer-top .rightbtn");
		this.BtnClick();
	},
	Top:function(){
		var dom=this.dom;
		$.getJSON("js/timer.json",function(data){
			dom.li1.each(function(i){
				
				$(this).find("img").attr("src",data[i].src);
				$(this).find("dt").html("￥"+data[i].price);
				$(this).find("dd").html(data[i].title);
				$(this).find("p").html("已经售出"+data[i].sell+"件");
			})
		})
	},
	
	Banner:function(){
		
		var dom=this.dom;
		 timer1=setInterval(function(){
		 	
			var target=l*1090;
			
				if(l==0)
					{
						dom.leftbtn.css("background-position","-165px -83px");
						dom.rightbtn.css("background-position","-194px -53px");
					}
				if(l==1)
					{
						
						dom.leftbtn.css("background-position","-165px -53px");
						dom.rightbtn.css("background-position","-194px -83px");
					}
			
				$("#timer-ul1").animate({"left":-target+"px"},function(){
					
					l++;
					if(l==2)
					{
						l=0;
					}
				})
		},4000);
	},
	
	BtnClick:function(){
		var self=this;
		var dom=this.dom;
		dom.leftbtn.click(function(){
			
			clearInterval(timer1);
			l=0;
			var target=l*1090;
			if(l==0)
					{
						dom.leftbtn.css("background-position","-165px -83px");
						dom.rightbtn.css("background-position","-194px -53px");
					}
				if(l==1)
					{
						
						dom.leftbtn.css("background-position","-165px -53px");
						dom.rightbtn.css("background-position","-194px -83px");
					}
			$("#timer-ul1").animate({"left":-target+"px"},function(){
					
					l++;
					if(l==2)
					{
						l=0;
					}
					self.Banner();
				})
		})
		dom.rightbtn.click(function(){
			clearInterval(timer1);
			l=1;
			var target=l*1090;
			if(l==0)
					{
						dom.leftbtn.css("background-position","-165px -83px");
						dom.rightbtn.css("background-position","-194px -53px");
					}
				if(l==1)
					{
						
						dom.leftbtn.css("background-position","-165px -53px");
						dom.rightbtn.css("background-position","-194px -83px");
					}
			$("#timer-ul1").animate({"left":-target+"px"},function(){
					
					l++;
					if(l==2)
					{
						l=0;
					}
					self.Banner();
				})
		})
	},
	MiddleProduct:function(){
		$.getJSON("js/product.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				var odiv=$("<div class='list'><img src='img/index/product/cc.jpg' /><dl><a class='t-a' href='javascript:;'>港版惠氏</a> <p></p><dt>港版惠氏 </dt><dd class='ddleft'>￥<span>117</span>起</dd><a href='javascript:;'><dd class='ddright'>点击进入</dd></a></dl></div>");
				$("#hot-product").append(odiv);
				$("#hot-product").find("img").eq(i).attr("src",data[i].src);
				$("#hot-product").find(".list").eq(i).find(".t-a").html(data[i].title);
				$("#hot-product").find("dt").eq(i).html(data[i].title1);
				$("#hot-product").find(".ddleft").eq(i).find("span").html(data[i].price);
			}
		})
	},
	TodayProduct:function(){
		$.getJSON("json/product-tadoy.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				var odiv=$("<div class='list'><p class='adv'></p><img src='img/index/product/cc.jpg' /><dl><p class='p1'>折扣</p><p class='p2'>精品</p><a class='t-a' href='javascript:;'>港版惠氏</a> <p class='p3'></p><dt>港版惠氏 </dt><p class='p4'><i></i>母婴之家发货</p><dd class='ddleft'>￥<span>117</span></dd><a href='javascript:;'><dd class='ddright'>点击进入</dd></a></dl></div>");
				$("#hot-product1").append(odiv);
				$("#hot-product1").find("img").eq(i).attr("src",data[i].src);
				$("#hot-product1").find(".list").eq(i).find(".t-a").html(data[i].title);
				$("#hot-product1").find("dt").eq(i).html(data[i].title1);
				$("#hot-product1").find(".ddleft").eq(i).find("span").html(data[i].price);
				if(data[i].tips2)
				{
					
					$("#hot-product1").find(".p1").eq(i).html(data[i].tips);
					$("#hot-product1").find(".p2").eq(i).html(data[i].tips2);
					$("#hot-product1").find(".p4").eq(i).html(data[i].sell);
				}
				else
				{
					$("#hot-product1").find(".p1").eq(i).html(data[i].tips);
					$("#hot-product1").find(".p2").eq(i).css("display","none");
					$("#hot-product1").find(".p4").eq(i).html(data[i].sell);
				}
			}
		})
	},
//	显示用户名
	ChangeUserName:function(){
		
		var Auto=getcookie("auto_login");
		Auto=eval(Auto);
		
		if(Auto!=null)
		{
			console.log()
			$("a.head-a1").html(Auto);
//			$("a.head-a1").css({"width":"48px","overflow":"hidden","white-space":"nowrap","text-overflow":"ellipsis"});
			$("a.head-a2").html("退出登录");
		}
	}
	
}


$(function(){
	Head.init();
	LastTimer();
	Head.Top_Product();
	Product.init();
})