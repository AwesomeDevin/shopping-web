var scrollheight=0;
var flag=false;
var Page={
	dom:{},
	
	init:function(){
		var dom=this.dom;
		dom.jiantou=$(".p0");
		dom.li2=$("#ul-2 li");
		dom.li1=$("#ul-1 li ");
		dom.div=$(".bc");
		dom.nav=$("#box-nav");
		dom.fthree=$("#floor-3");
		this.nav();
		this.Nav();
		this.Navchange();
		this.Defult();
		
	},
	
	Defult:function(){
		var dom=this.dom;
		$("body").animate({"scrollTop":"0"},function(){});
	},
	
	nav:function(){
		
		var dom=this.dom;
		
		setInterval(function(){
			dom.jiantou.animate({"top":"100px"},2000,function(){dom.jiantou.css("top","-40px")});
		},1000);
		
		dom.li2.click(function(){
			$(this).addClass("ul-2class").siblings().removeClass("ul-2class");
			var index=$(this).index();
			var scrollmove=$(".bc").eq(index).offset().top;
			
			$("body").animate({"scrollTop":scrollmove},500,function(){});
			
		});
		$("#p-img").click(function(){
			var dom=this.dom;
		
			
			
			var scrollmove=$(".bc").eq(1).offset().top;
			
			$("body").animate({"scrollTop":scrollmove},500,function(){});
		})
		$(window).scroll(function(){
			 scrollheight=$(this).scrollTop();
			
				dom.div.each(function(i){
				var settop=$(this).offset().top;
				
				if(scrollheight>=settop)
				{
					if(i==0)
					{
						dom.nav.css("background","black");
						$("#box-nav h1").css("color","white");
						clearInterval(timer);
						$(".F2-h1").css("top","-100px");
						$(".dl-1").css("opacity","0");
						dom.li1.eq(i).children().css("color","red").parent().siblings().children().css("color","white");
						dom.fthree.children().eq(0).css("left","-1000px");
						dom.fthree.children().eq(1).css("left","2000px");
						dom.fthree.children().eq(2).css("top","1000px");
						
					}
					
					 if(i==1)
					{
						dom.nav.css("background","bisque");
						$("#box-nav h1").css("color","black");
						TwoMove();
						Titletwo();
						dom.fthree.children().eq(0).css("left","-1000px");
						dom.fthree.children().eq(1).css("left","2000px");
						dom.fthree.children().eq(2).css("top","1000px");
						dom.li1.eq(i).children().css("color","red").parent().siblings().children().css("color","white");
						$("#f3-img1").css({"display":"none","opacity":"1","left":"900px","top":"230px"});
						$("#f3-img2").css("display","none");
						$("#f3-img3").css("display","none");
					}
					if(i==2)
					{
						
						dom.nav.css("background","cadetblue");
						$("#box-nav h1").css("color","black");
						clearInterval(timer);
						$(".F2-h1").css("top","-100px");
						$(".dl-1").css("opacity","0");
						dom.li1.eq(i).children().css("color","red").parent().siblings().children().css("color","black");
						dom.fthree.children().eq(0).css("left","-1000px");
						dom.fthree.children().eq(1).css("left","2000px");
						dom.fthree.children().eq(2).css("top","1000px");
						$("#pfloor").fadeIn(600,function(){
							
						});
					}
					if(i==3)
					{
						
						dom.nav.css("background","lemonchiffon");
						$("#box-nav h1").css("color","black");
						clearInterval(timer);
						$(".F2-h1").css("top","-100px");
						$(".dl-1").css("opacity","0");
						dom.li1.eq(i).children().css("color","red").parent().siblings().children().css("color","black");
					}
					if(i==4)
					{
						dom.fthree.children().eq(0).css("left","-1000px");
						dom.fthree.children().eq(1).css("left","2000px");
						dom.fthree.children().eq(2).css("top","1000px");
						
						$("#box-nav h1").css("color","white");
						dom.nav.css("background","black");
						clearInterval(timer);
						$(".F2-h1").css("top","-100px");
						$(".dl-1").css("opacity","0");
						dom.li1.eq(i).children().css("color","red").parent().siblings().children().css("color","black");
					}
					
					dom.li2.eq(i).addClass("ul-2class").siblings().removeClass("ul-2class");
					dom.li1.eq(i).children().addClass("ul-1class").parent().siblings().children().removeClass("ul-1class");
				}
			})
		})
		
		
	},
	
	Nav:function(){
		var dom=this.dom;
		dom.li1.click(function(){
			$(this).children().addClass("ul-1class").parent().siblings().children().removeClass("ul-1class");
			var index=$(this).index();
			var scrollmove=$(".bc").eq(index).offset().top;
			
			$("body").animate({"scrollTop":scrollmove},500,function(){});
		})
	},
	
	Navchange:function(){
		$(".f3-click").click(function(){
			$("#pfloor").fadeOut(1000,function(){
				Page.FloorThreeMove();
			});
		})
		
		
		
	},
	
	
	FloorThreeMove:function(){
		var dom=this.dom;
		var scrollmin=$(".bc").eq(2).offset().top;
		var scrollmax=$(".bc").eq(3).offset().top;
		
		if(scrollheight>=scrollmin&&scrollheight<scrollmax)
		{
			dom.fthree.children().eq(0).animate({"left":"570px"},800,function(){
				
			});
			dom.fthree.children().eq(1).animate({"left":"570px"},800,function(){
				
			});
			dom.fthree.children().eq(2).animate({"top":"350px"},800,function(){
				
			});
			
			$("#f3-img2").fadeIn(800,function(){
				
				$("#f3-img1").css("display","block");
				
				$("#f3-img1").animate({"left":"50px","opacity":0.3,"top":"50px"},800,function(){
					$("#f3-img3").fadeIn(500);
				});
			});
		}
		
		
	},
	
	
	
	
}

$(function(){
	Page.init();
})