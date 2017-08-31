var myCtrl = angular.module('myController', []);





myCtrl.controller('homeCtrl',['$scope','$interval','$http','$ionicScrollDelegate','$timeout','$state',
	function($scope,$interval,$http,$ionicScrollDelegate,$timeout,$state){
	$http.get('http://route.showapi.com/907-4?showapi_appid=26477&showapi_sign=b46deb6701d744538c75b724ec3dc585').success(function(data){
		$scope.miaosha=data.showapi_res_body.list;
		
	})

	var i=0;
	var num=20;
	$scope.more=[];
	$scope.loadshow=true;
	$scope.load_continue=true;
	$scope.to_top=false;
	// $(".load").find("svg").html("");

		$(".search input").focus(function(){
			location.href="#/main/search";
		})

		$scope.totop=function(){
			$ionicScrollDelegate.scrollTop(true);
			$scope.to_top=false;
		}
		
		
		$scope.moreload=function(){
			$timeout(function(){
				
			if($scope.load_continue!=true)
			{
				return;
			}
			i++;
			var snum=i*num;
			$http.get('json/more.json').success(function(data){
			$scope.more=data.slice(0,snum);
			if(i%3==0)
				{
					$scope.load_continue=false;
					$scope.loadshow=false;
				}
				
			$scope.$broadcast("scroll.infiniteScrollComplete");

			})
			},1000)
		}






	$scope.openload=function(){
		$scope.load_continue=true;
		$scope.loadshow=true;
	}


	// $http.get('json/more.json').success(function(data){
		
		
	// 	$scope.moreload=function(){
				
	// 			if($scope.load_continue!=true)
	// 			{
	// 				return;
	// 			}
	// 			i++;
	// 			var snum=i*num;
	// 			$scope.more=data.slice(0,snum);
	// 			if(i%3==0)
	// 			{
	// 				$scope.load_continue=false;
	// 				$scope.loadshow=false;
	// 			}
				
	// 			$scope.$broadcast("scroll.infiniteScrollComplete");
	
	// 	}



	// })
	



	$http.get('http://lvmx.top/jd/?c=good').success(function(data){
		$scope.items=data.list;
		$scope.shops=[];
		for(key in $scope.items)
		{
			$scope.shops.push( $scope.items[key]);
		}

		
	})


	$scope.jump=function(){
		$state.go('main.login');
	}
	
	$scope.scroll=function(){
		$timeout(function(){$scope.height=$ionicScrollDelegate.getScrollPosition().top;},100);
		
		$scope.Opacity=$scope.height/150;
		if($scope.Opacity>=0.8)
		{
			$scope.Opacity=0.8;
			$scope.to_top=true;
		}
		else{
			$scope.to_top=false;
		}

	

	}
	

	$scope.jdkb=function(){
		var i=0;
		var oul=document.getElementById("news");	
		$interval(function(){
			i++;
			if(i==4)
			{
				i=1;
				oul.style.top="0px";
			}
			var height=$(".jdkb .news ul li").height()*i;
			
			startMove(oul,{"top":parseFloat(-height)},function(){});
			
		// 	$(".jdkb .news ul").news.animate({"top":-height},200,function(){
		// 		i++
		// 		if(i==4)
		// 		{
		// 			i=1;
		// 			dom.news.css("top",0);
		// 		}
		// 	})
		},4000)
	}
	// 京东快报轮播定时器
	$scope.jdkb();

	$scope.timer=function(){

		$interval(function(){
			// var second=parseFloat($(".second").html());
			// var minute=parseFloat($(".minute").html());
			// var hour=parseFloat($(".hour").html());

			// second=second-1;
			// if(second<=0)
			// {
			// 	second=59;
			// 	minute=minute-1;
			// 	if(minute<=0)
			// 	{
			// 		minute=59;
			// 		hour=hour-1;
			// 		if(hour<0)
			// 		{
			// 			alert("倒计时已结束，商品及售完！");
			// 			return;
			// 		}
			// 		if(hour>0&&hour<10)
			// 		{
			// 			$(".hour").html("0"+hour);
			// 			return;
			// 		}
			// 		$(".hour").html(hour);
			// 	}
			// 	if(minute>0&&minute<10)
			// 		{
			// 			$(".minute").html("0"+minute);
			// 			return;
			// 		}
			// 	$(".minute").html(minute);

				
			// }
			// if(second>0&&second<10)
			// 	{

			// 		$(".second").html("0"+second);
			// 		return;
			// 	}
					
			// $(".second").html(second);


			var hour=new Date().getHours();
			var minute=new Date().getMinutes();
			var second=new Date().getSeconds();
			

			// 假设倒计时需求为早上九点到晚上九点
			if(hour<9||hour>21)
			{
				$(".hour").html("00");
				$(".second").html("00");
				$(".minute").html("00");
			}
			else
			{
				// 计算小时
				var nowhour=12-(hour-9);	
				if(minute>0)
				{
					nowhour=nowhour-1;
				}
				$(".hour").html(nowhour);	
				if(nowhour<10)
				{
					$(".hour").html("0"+nowhour);	
				}															

				// 计算分钟
				var nowminute=60-minute;
				if(second>0)
				{
					nowminute=nowminute-1;
				}
				$(".minute").html(nowminute);	
				if(nowminute<10)
				{
					$(".nownimute").html("0"+nowminute);	
				}


				// 计算秒
				var nowsecond=60-second;
				 $(".second").html(nowsecond);
				 if(nowsecond<10)
				{

					$(".second").html("0"+nowsecond);
					
				}
			}



		},1000)
		

	}
	$scope.timer();

	 
	
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		 direction: 'horizontal',
   		 loop: true,
   		 // scrollbarHide:false,
   		 // scrollbar:'.swiper-scrollbar' ,
    		// // 如果需要分页器
   		 pagination: '.swiper-pagination',
   		 autoplayDisableOnInteraction:false,//触摸之后仍可轮播
	})
	
}])




