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
		this.LoadProduct();
		this.ChangeUserName();
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
		dom.product.mouseenter(function(){
			
			dom.bigbox.css("display","block");
			
		})
		dom.product.mouseleave(function(){
			
			dom.bigbox.css("display","none");
		})
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
		dom.img.mouseover(function(){
			index=$(this).index();
			
			dom.product.attr("src","../img2/"+index+"q.jpg");
			dom.bigbox.find("img").attr("src","../img2/big"+index+".jpg");
		})
	},
	
	
//	产品数目
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
	
//	Tab切换
	Tab:function(){
		var dom=this.dom;
		dom.li.click(function(){
			$(this).addClass("li-class").siblings().removeClass("li-class");
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
	ChangeUserName:function(){
		
		var Auto=getcookie("auto_login");
		Auto=eval(Auto);
		
		if(Auto!=null)
		{
			
			$("a.head-a1").html(Auto);
			$("a.head-a2").html("退出登录");
		}
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
//		对商品进行排序
		$(".right-middle .box1 ul li").click(function(){
			$(this).addClass("li-class").siblings().removeClass("li-class");
			$("#main .right-middle .product").html("");
			var index=$(this).index();
//			默认排序
			if(index==0)
			{
				$.getJSON("../js/list.json",function(data){
					for(var i=0;i<data.length;i++)
					{
//						创建新的DIV
						var odiv=$("<dl><img src='../list-img/1.jpg' /><dt><a href='detail.html'>艾妮宝贝14X针织印花哺乳套装AQ924101红色</a><span>棉品专享价</span></dt><dd><p class='p1'>￥112.80</p><p class='p2'><span class='left-btn'>加入购物车</span><span class='right-btn'>收藏</span></p></dd></dl>");
						$("#main .right-middle .product").append(odiv);
						odiv.find("img").attr("src",data[i].src);
						odiv.find("a").html(data[i].title);
						odiv.find(".p1").html("￥"+data[i].price);
						odiv.on("click",".p2 .left-btn",function(){
//							取下用户名
										var Auto=getcookie("auto_login");
											
											if(Auto==null)
											{
												alert("用户未登录,请先登录用户");
												return;
											}
										var shoparr=new Array();
										//		 把已有的商品取出来
									
										var str0=getcookie(Auto+"_shop");
										str0=eval(str0);
													
										
										//			if(str0==null)
										//			{
										//				return;
										//			}
										
										if(str0!=null)
										{
											for(var j=0;j<str0.length;j++)
											{
												var shop={};
												shop.price=str0[j].price;
												shop.title=str0[j].title;
												shop.src=str0[j].src;
												shop.noprice=str0[j].noprice;
												shop.shopnum=str0[j].shopnum;
												shoparr.push(shop);
												
											}
										}
//										存入商品
										
										var shop1={};
										var n=$(this).parent().parent().parent().index();
										var che_left=$(".che i").offset().left;
										var che_top=$(".che i").offset().top;
										$("#small-img").css({"display":"block","left":$(this).offset().left,"top":$(this).offset().top});
										$("#small-img").find("img").attr("src",shop1.src);
										$("#small-img").animate({"left":che_left,"top":che_top},500,function(){
											$(this).css("display","none");
											alert("加入购物车成功！");
										});
//										改变商品数目
										for(var a=0;a<shoparr.length;a++)
										{
//											console.log($("#main .right-middle .product").find("dl").eq(n).find("a").html(),shoparr[a].title);
											if($("#main .right-middle .product").find("dl").eq(n).find("a").html()==shoparr[a].title)
											{
												shoparr[a].shopnum++;
												var json=JSON.stringify(shoparr);
					
												setcookie(Auto+"_shop",json,1);
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
												return;
											}
										}
										shop1.shopnum=1;
										shop1.price=$("#main .right-middle .product").find("dl").eq(n).find(".p1").html();
										shop1.noprice=parseInt($("#main .right-middle .product").find("dl").eq(n).find(".p1").html().slice(1))+30;
										shop1.title=$("#main .right-middle .product").find("dl").eq(n).find("a").html();
										shop1.src=$("#main .right-middle .product").find("dl").eq(n).find("img").attr("src");
										shoparr.push(shop1);
										
										var json=JSON.stringify(shoparr);
										
										setcookie(Auto+"_shop",json,1);
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
									})
						
					}
				})
			}
			else if(index==1)
			{
				
				$.getJSON("../js/list.json",function(data){
					
					for(var i=0;i<1000;i++)
					{
						for(var j=0;j<data.length;j++)
						{
//							按价格排序
							if(i==Math.ceil(data[j].sell))
							{
								
								var odiv=$("<dl><img src='../list-img/1.jpg' /><dt><a href='detail.html'>艾妮宝贝14X针织印花哺乳套装AQ924101红色</a><span>棉品专享价</span></dt><dd><p class='p1'>￥112.80</p><p class='p2'><span class='left-btn'>加入购物车</span><span class='right-btn'>收藏</span></p></dd></dl>");
								$("#main .right-middle .product").append(odiv);
								odiv.find("img").attr("src",data[j].src);
								odiv.find("a").html(data[j].title);
								odiv.find(".p1").html("￥"+data[j].price);
								odiv.on("click",".p2 .left-btn",function(){
										var Auto=getcookie("auto_login");
											
											if(Auto==null)
											{
												alert("用户未登录,请先登录用户");
												return;
											}
										var shoparr=new Array();
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
											for(var j=0;j<str0.length;j++)
											{
												var shop={};
												shop.price=str0[j].price;
												shop.title=str0[j].title;
												shop.src=str0[j].src;
												shop.noprice=str0[j].noprice;
												shop.shopnum=str0[j].shopnum;
												shoparr.push(shop);
												
											}
										}
										var shop1={};
										var n=$(this).parent().parent().parent().index();
										var che_left=$(".che i").offset().left;
										var che_top=$(".che i").offset().top;
										$("#small-img").css({"display":"block","left":$(this).offset().left,"top":$(this).offset().top});
										$("#small-img").find("img").attr("src",shop1.src);
										$("#small-img").animate({"left":che_left,"top":che_top},500,function(){
											$(this).css("display","none");
											alert("加入购物车成功！");
										});
//										改变商品数目
										for(var a=0;a<shoparr.length;a++)
										{
//											console.log($("#main .right-middle .product").find("dl").eq(n).find("a").html(),shoparr[a].title);
											if($("#main .right-middle .product").find("dl").eq(n).find("a").html()==shoparr[a].title)
											{
												shoparr[a].shopnum++;
												var json=JSON.stringify(shoparr);
					
												setcookie(Auto+"_shop",json,1);
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
												return;
											}
										}
										shop1.shopnum=1;
										shop1.noprice=parseInt($("#main .right-middle .product").find("dl").eq(n).find(".p1").html().slice(1))+30;
										
										shop1.price=$("#main .right-middle .product").find("dl").eq(n).find(".p1").html();
										shop1.title=$("#main .right-middle .product").find("dl").eq(n).find("a").html();
										shop1.src=$("#main .right-middle .product").find("dl").eq(n).find("img").attr("src");
										shoparr.push(shop1);
										var json=JSON.stringify(shoparr);
										
										setcookie(Auto+"_shop",json,1);
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
									})
							}
							
						}
						
					}
				})
			}
			else if(index==2)
			{
				$.getJSON("../js/list.json",function(data){
					
					for(var i=0;i<1000;i++)
					{
						for(var j=0;j<data.length;j++)
						{
//							按照价格排序
							if(i==Math.ceil(data[j].price)) 
							{
								
								var odiv=$("<dl><img src='../list-img/1.jpg' /><dt><a href='detail.html'>艾妮宝贝14X针织印花哺乳套装AQ924101红色</a><span>棉品专享价</span></dt><dd><p class='p1'>￥112.80</p><p class='p2'><span class='left-btn'>加入购物车</span><span class='right-btn'>收藏</span></p></dd></dl>");
								$("#main .right-middle .product").append(odiv);
								odiv.find("img").attr("src",data[j].src);
								odiv.find("a").html(data[j].title);
								odiv.find(".p1").html("￥"+data[j].price);
								odiv.on("click",".p2 .left-btn",function(){
										var Auto=getcookie("auto_login");
											
											if(Auto==null)
											{
												alert("用户未登录,请先登录用户");
												return;
											}
										var shoparr=new Array();
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
											for(var j=0;j<str0.length;j++)
											{
												var shop={};
												shop.price=str0[j].price;
												shop.noprice=str0[j].noprice;
												shop.title=str0[j].title;
												shop.src=str0[j].src;
												shop.shopnum=str0[j].shopnum;
												shoparr.push(shop);
												
											}
										}
										var shop1={};
										var n=$(this).parent().parent().parent().index();
										var che_left=$(".che i").offset().left;
										var che_top=$(".che i").offset().top;
										$("#small-img").css({"display":"block","left":$(this).offset().left,"top":$(this).offset().top});
										$("#small-img").find("img").attr("src",shop1.src);
										$("#small-img").animate({"left":che_left,"top":che_top},500,function(){
											$(this).css("display","none");
											alert("加入购物车成功！");
										});
//										改变商品数目
										for(var a=0;a<shoparr.length;a++)
										{
//											console.log($("#main .right-middle .product").find("dl").eq(n).find("a").html(),shoparr[a].title);
											if($("#main .right-middle .product").find("dl").eq(n).find("a").html()==shoparr[a].title)
											{
												shoparr[a].shopnum++;
												var json=JSON.stringify(shoparr);
					
												setcookie(Auto+"_shop",json,1);
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
												return;
											}
										}
										shop1.shopnum=1;
										shop1.noprice=parseInt($("#main .right-middle .product").find("dl").eq(n).find(".p1").html().slice(1))+30;
										
										shop1.price=$("#main .right-middle .product").find("dl").eq(n).find(".p1").html();
										shop1.title=$("#main .right-middle .product").find("dl").eq(n).find("a").html();
										shop1.src=$("#main .right-middle .product").find("dl").eq(n).find("img").attr("src");
										shoparr.push(shop1);
										var json=JSON.stringify(shoparr);
										
										setcookie(Auto+"_shop",json,1);
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
									})
							}
							
						}
						
					}
				})
			}
			else if(index==3)
			{
				$.getJSON("../js/list.json",function(data){
					
					for(var i=0;i<1000;i++)
					{
						for(var j=0;j<data.length;j++)
						{
//							按好评排序
							if(i==Math.ceil(data[j].comment))
							{
								
								var odiv=$("<dl><img src='../list-img/1.jpg' /><dt><a href='detail.html'>艾妮宝贝14X针织印花哺乳套装AQ924101红色</a><span>棉品专享价</span></dt><dd><p class='p1'>￥112.80</p><p class='p2'><span class='left-btn'>加入购物车</span><span class='right-btn'>收藏</span></p></dd></dl>");
								$("#main .right-middle .product").append(odiv);
								odiv.find("img").attr("src",data[j].src);
								odiv.find("a").html(data[j].title);
								odiv.find(".p1").html("￥"+data[j].price);
								odiv.on("click",".p2 .left-btn",function(){
										var Auto=getcookie("auto_login");
											
											if(Auto==null)
											{
												alert("用户未登录,请先登录用户");
												return;
											}
										var shoparr=new Array();
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
											for(var j=0;j<str0.length;j++)
											{
												var shop={};
												shop.noprice=str0[j].noprice;
												shop.price=str0[j].price;
												shop.title=str0[j].title;
												shop.src=str0[j].src;
												shop.shopnum=str0[j].shopnum;
												shoparr.push(shop);
												
											}
										}
										var shop1={};
										var n=$(this).parent().parent().parent().index();
										var che_left=$(".che i").offset().left;
										var che_top=$(".che i").offset().top;
										$("#small-img").css({"display":"block","left":$(this).offset().left,"top":$(this).offset().top});
										$("#small-img").find("img").attr("src",shop1.src);
										$("#small-img").animate({"left":che_left,"top":che_top},500,function(){
											$(this).css("display","none");
											alert("加入购物车成功！");
										});
//										改变商品数目
										for(var a=0;a<shoparr.length;a++)
										{
//											console.log($("#main .right-middle .product").find("dl").eq(n).find("a").html(),shoparr[a].title);
											if($("#main .right-middle .product").find("dl").eq(n).find("a").html()==shoparr[a].title)
											{
												shoparr[a].shopnum++;
												var json=JSON.stringify(shoparr);
					
												setcookie(Auto+"_shop",json,1);
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
												return;
											}
										}
										shop1.shopnum=1;
										shop1.noprice=parseInt($("#main .right-middle .product").find("dl").eq(n).find(".p1").html().slice(1))+30;
										
										shop1.price=$("#main .right-middle .product").find("dl").eq(n).find(".p1").html();
										shop1.title=$("#main .right-middle .product").find("dl").eq(n).find("a").html();
										shop1.src=$("#main .right-middle .product").find("dl").eq(n).find("img").attr("src");
										shoparr.push(shop1);
										var json=JSON.stringify(shoparr);
										
										setcookie(Auto+"_shop",json,1);
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
									})
							}
							
						}
						
					}
				})
			}
			else if(index==4)
			{
				$.getJSON("../js/list.json",function(data){
					
					for(var i=0;i<1000;i++)
					{
						for(var j=0;j<data.length;j++)
						{
//							按上架时间排序
							if(i==Math.ceil(data[j].timer))
							{
								
								var odiv=$("<dl><img src='../list-img/1.jpg' /><dt><a href='detail.html'>艾妮宝贝14X针织印花哺乳套装AQ924101红色</a><span>棉品专享价</span></dt><dd><p class='p1'>￥112.80</p><p class='p2'><span class='left-btn'>加入购物车</span><span class='right-btn'>收藏</span></p></dd></dl>");
								$("#main .right-middle .product").append(odiv);
								odiv.find("img").attr("src",data[j].src);
								odiv.find("a").html(data[j].title);
								odiv.find(".p1").html("￥"+data[j].price);
												odiv.on("click",".p2 .left-btn",function(){
										var Auto=getcookie("auto_login");
											
											if(Auto==null)
											{
												alert("用户未登录,请先登录用户");
												return;
											}
										var shoparr=new Array();
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
											for(var j=0;j<str0.length;j++)
											{
												var shop={};
												shop.noprice=str0[j].noprice;
												shop.price=str0[j].price;
												shop.title=str0[j].title;
												shop.src=str0[j].src;
												shop.shopnum=str0[j].shopnum;
												shoparr.push(shop);
												
											}
										}
										var shop1={};
										var n=$(this).parent().parent().parent().index();
										$("#small-img").css({"display":"block","left":$(this).offset().left,"top":$(this).offset().top});
										$("#small-img").find("img").attr("src",shop1.src);
										var che_left=$(".che i").offset().left;
										var che_top=$(".che i").offset().top;
										$("#small-img").animate({"left":che_left,"top":che_top},500,function(){
											$(this).css("display","none");
											alert("加入购物车成功！");
										});
//										改变商品数目
										for(var a=0;a<shoparr.length;a++)
										{
//											console.log($("#main .right-middle .product").find("dl").eq(n).find("a").html(),shoparr[a].title);
											if($("#main .right-middle .product").find("dl").eq(n).find("a").html()==shoparr[a].title)
											{
												
												shoparr[a].shopnum++;
												var json=JSON.stringify(shoparr);
					
												setcookie(Auto+"_shop",json,1);
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
												return;
											}
										}
										shop1.shopnum=1;
										shop1.noprice=parseInt($("#main .right-middle .product").find("dl").eq(n).find(".p1").html().slice(1))+30;
										
										shop1.price=$("#main .right-middle .product").find("dl").eq(n).find(".p1").html();
										shop1.title=$("#main .right-middle .product").find("dl").eq(n).find("a").html();
										shop1.src=$("#main .right-middle .product").find("dl").eq(n).find("img").attr("src");
										shoparr.push(shop1);
										var json=JSON.stringify(shoparr);
										
										setcookie(Auto+"_shop",json,1);
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
									})
							}
							
						}
						
					}
				})
			}
		})
	},
//	加载商品
	LoadProduct:function(){
		$.getJSON("../js/list.json",function(data){
			for(var i=0;i<data.length;i++)
			{
				var odiv=$("<dl><img src='../list-img/1.jpg' /><dt><a href='detail.html'>艾妮宝贝14X针织印花哺乳套装AQ924101红色</a><span>棉品专享价</span></dt><dd><p class='p1'>￥112.80</p><p class='p2'><span class='left-btn'>加入购物车</span><span class='right-btn'>收藏</span></p></dd></dl>");
				$("#main .right-middle .product").append(odiv);
				odiv.find("img").attr("src",data[i].src);
				odiv.find("a").html(data[i].title);
				odiv.find(".p1").html("￥"+data[i].price);
				odiv.on("click",".p2 .left-btn",function(){
					var Auto=getcookie("auto_login");
						
						if(Auto==null)
						{
							alert("用户未登录,请先登录用户");
							return;
						}
					var shoparr=new Array();
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
							var shop={};
							shop.noprice=str0[i].noprice;
							shop.price=str0[i].price;
							shop.title=str0[i].title;
							shop.src=str0[i].src;
							shop.shopnum=str0[i].shopnum;
						
							shoparr.push(shop);
							
						}
					}
					var shop1={};
					var n=$(this).parent().parent().parent().index();
					var che_left=$(".che i").offset().left;
					var che_top=$(".che i").offset().top;
					$("#small-img").css({"display":"block","left":$(this).offset().left,"top":$(this).offset().top});
					$("#small-img").find("img").attr("src",shop1.src);
					$("#small-img").animate({"left":che_left,"top":che_top},500,function(){
						$(this).css("display","none");
						alert("加入购物车成功！");
					});
//					改变商品数目
										for(var a=0;a<shoparr.length;a++)
										{
//											console.log($("#main .right-middle .product").find("dl").eq(n).find("a").html(),shoparr[a].title);
											if($("#main .right-middle .product").find("dl").eq(n).find("a").html()==shoparr[a].title)
											{
												
												shoparr[a].shopnum++;
												var json=JSON.stringify(shoparr);
					
												setcookie(Auto+"_shop",json,1);
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
												return;
											}
										}
					shop1.shopnum=1;
					shop1.noprice=parseInt($("#main .right-middle .product").find("dl").eq(n).find(".p1").html().slice(1))+30;
					
					shop1.price=$("#main .right-middle .product").find("dl").eq(n).find(".p1").html();
					shop1.title=$("#main .right-middle .product").find("dl").eq(n).find("a").html();
					shop1.src=$("#main .right-middle .product").find("dl").eq(n).find("img").attr("src");
					shoparr.push(shop1);
					
					var json=JSON.stringify(shoparr);
					
					setcookie(Auto+"_shop",json,1);
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
					
					
					
				})
			}
		})
	}
}
function Quit(){
	$(".head-span .head-a2").click(function(){
		var json=JSON.stringify($("input.txt").eq(0).val());
		setcookie("auto_login",json,-1);
		alert("退出登录成功");
	})
}


function FloatMove(obj){
		obj.fadeIn(300);
		obj.animate({"right":"35px","opacity":"100",},200,function(){
			return;
		});
		
	
	
}
function Location(){
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
	$(".buy-car").click(function(){
		
		location.href="shopcar.html";
	})
}
$(function(){
	Head.init();
	Top.Right_nav();
	Main.init();
	Quit();
	Location();
})
