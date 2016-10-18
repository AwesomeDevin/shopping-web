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
		$(window).scroll(function(){
			var scrollheight=$(this).scrollTop();
			if(scrollheight>=600)
			{
				dom.blocktop.css("display","block");
			}
			else{
				dom.blocktop.css("display","none");
			}
			$("#rightblock .zhiding").click(function(){
				$("body").animate({"scrollTop":0},600,function(){
					return;
				});
			})
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
		$(".ren").mouseleave(function(){
			
			$("#login").css({"opacity":"0","right":"55px"});
		})
		$(".xing").mouseenter(function(){
			
			FloatMove($("#login2"));
		})
		$(".xing").mouseleave(function(){
			
			$("#login2").css({"opacity":"0","right":"55px"});
		})
		$(".kefu").mouseenter(function(){
			
			FloatMove($("#kefu-float"));
		})
		$(".kefu").mouseleave(function(){
			
			$("#kefu-float").css({"opacity":"0","right":"55px"});
		})
		$(".zhiding").mouseenter(function(){
			
			FloatMove($("#zhiding-float"));
		})
		$(".zhiding").mouseleave(function(){
			
			$("#zhiding-float").css({"opacity":"0","right":"55px"});
		})
		$(".close").click(function(){
			$(this).parent().css({"opacity":"0","right":"55px"});
		})
		
	},
	
	
	
	

	
}

$(function(){
	Head.init();
})


function FloatMove(obj){
	
		obj.animate({"right":"35px","opacity":"100"},80,function(){
			return;
		});
		
	
	
}
