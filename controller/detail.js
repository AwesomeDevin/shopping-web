var myCtrl = angular.module('myController2', []);


myCtrl.controller('detailCtrl', ['$scope', '$http', '$stateParams', '$ionicScrollDelegate', '$timeout', '$ionicScrollDelegate','$ionicLoading','$rootScope',
	function($scope, $http, $stateParams, $ionicScrollDelegate, $timeout, $ionicScrollDelegate,$ionicLoading,$rootScope) {

		$scope.selectshow = false;
		$scope.select_top = function() {
			if ($scope.selectshow) {
				$scope.selectshow = false;
			} else {
				$scope.selectshow = true;
			}
		}
		$scope.shops_title="联想(leveno) YOGA3-14 14英寸触控轻薄本";
		$scope.shops_price="5199.0";
		$scope.store_name="联想育新专卖店";
		$scope.store_lastname="联想笔记本 游戏本 超薄本 授权专卖店";
		$scope.shop_num=1;
		$scope.comment_hover=1;
		$scope.contentbox_movenum1 = true;
		$scope.contentbox_movenum2 = false;
		$scope.contentbox_movenum3 = false;
		// 跳转到详情部分
		$scope.to_shopdetail = function() {
			$scope.contentbox_movenum1 = false;
			$scope.contentbox_movenum2 = true;
			$scope.contentbox_movenum3 = false;
		}
		 $scope.showloading = function() {
		    $ionicLoading.show({
		      template: '已成功加入购物车',
		      duration:500
		    });
		  };

		// 跳转到评价部分
		$scope.to_shopcomment = function() {
			$scope.contentbox_movenum1 = false;
			$scope.contentbox_movenum2 = false;
			$scope.contentbox_movenum3 = true;
		}

		// 跳转到商品部分
		$scope.to_shophome = function() {
			$scope.contentbox_movenum1 = true;
			$scope.contentbox_movenum2 = false;
			$scope.contentbox_movenum3 = false;
		}

		$scope.introshow1 = true;
		$scope.introshow2 = false;
		$scope.introshow3 = false;

		$scope.show_introduce1 = function() {
			$scope.introshow1 = true;
			$scope.introshow2 = false;
			$scope.introshow3 = false;

		}

		$scope.show_introduce2 = function() {
			$scope.introshow1 = false;
			$scope.introshow2 = true;
			$scope.introshow3 = false;

		}

		$scope.show_introduce3 = function() {
			$scope.introshow1 = false;
			$scope.introshow2 = false;
			$scope.introshow3 = true;

		}



		$timeout(function() {
			var shopheight = $(".detail_left").height();
			var detailheight = $(".detail_center").height();
			var commentheight = $(".detail_right").height();
			console.log(shopheight, detailheight, commentheight);

			$(".detail_content .detail_left").css("height", shopheight);
			$(".detail_content .detail_center").css("height", shopheight);
			$(".detail_content .detail_right").css("height", shopheight);

			$("a.a_toshop").click(function() {
				console.log(shopheight);
				$(".detail_content .detail_center").css("height", shopheight);
				$(".detail_content .detail_right").css("height", shopheight);
				$(".detail_content .detail_left").css("height", shopheight);
				$ionicScrollDelegate.scrollTop();


			})

			$("a.a_todetail").click(function() {
				console.log(detailheight);
				$(".detail_content .detail_center").css("height", detailheight);

				$(".detail_content .detail_left").css("height", detailheight);
				$(".detail_content .detail_right").css("height", detailheight);
				$ionicScrollDelegate.scrollTop();

			})

			$("a.a_tocomment").click(function() {
				console.log(commentheight);
				$ionicScrollDelegate.scrollTop();

				$(".detail_content .detail_right").css("height", commentheight);
				$(".detail_content .detail_center").css("height", commentheight);
				$(".detail_content .detail_left").css("height", commentheight);

			})
		}, 500);


		$scope.tocomment1=function(){
			$scope.comment_hover=1;
		}

		$scope.tocomment2=function(){
			$scope.comment_hover=2;
		}

		$scope.tocomment3=function(){
			$scope.comment_hover=3;
		}

		$scope.tocomment4=function(){
			$scope.comment_hover=4;
		}

		$scope.tocomment5=function(){
			$scope.comment_hover=5;
		}

		$scope.reduce_num=function(){
			$scope.shop_num--;
			if($scope.shop_num<=0)
			{
				$scope.shop_num=1;
			}
		}

		$scope.add_num=function(){
			$scope.shop_num++;
		}


		$scope.typecolor_hover=1;
		$scope.typeversion_hover=1;
		$scope.shop_color=angular.element(".type_color .a1").html();
		$scope.shop_version=angular.element(".type_version .a1").html();

		$scope.selectcolor1=function(){
			$scope.typecolor_hover=1;
			$scope.shop_color=angular.element(".type_color .a1").html();
			console.log($scope.shop_color);
		}

		$scope.selectcolor2=function(){
			$scope.typecolor_hover=2;
			$scope.shop_color=angular.element(".type_color .a2").html();
			console.log($scope.shop_color);
		}

		$scope.selectcolor3=function(){
			$scope.typecolor_hover=3;
			$scope.shop_color=angular.element(".type_color .a3").html() 	;
			console.log($scope.shop_color);
		}


		$scope.selectversion1=function(){
			$scope.typeversion_hover=1;
			$scope.shop_version=angular.element(".type_version .a1").html();
			
		}

		$scope.selectversion2=function(){
			$scope.typeversion_hover=2;
			$scope.shop_version=angular.element(".type_version .a2").html();
		}

		$scope.selectversion3=function(){
			$scope.typeversion_hover=3;
			$scope.shop_version=angular.element(".type_version .a3").html();
		}

		$scope.add_shopcar=function(){
			var nowuser=$rootScope.admin_user;
			
			if(!nowuser)
			{
				sessionStorage.setItem("JDspare_user","临时用户");	
				nowuser=sessionStorage.getItem("JDspare_user");		
			}


			goods={};
			goods.img=angular.element(".mask_shopstype .shop_img").attr("src");
			goods.title=$scope.shops_title;
			goods.price=$scope.shops_price;
			goods.num=$scope.shop_num;
			goods.color=$scope.shop_color;
			goods.version=$scope.shop_version;
			goods.storename=$scope.store_name;
			
			if(sessionStorage.getItem(nowuser+"&shopcar_content"))
			{

				
				totalgoods=JSON.parse(sessionStorage.getItem(nowuser+"&shopcar_content"));
				// if(againgoods.title!=goods.title||againgoods.color!=goods.color||againgoods.version!=goods.version||againgoods.price!=goods.price)
				// {
				// 	sessionStorage.setItem(nowuser+"&shopcar_content",JSON.stringify(goods));
				// 	$scope.showloading();	
				// 	console.log(sessionStorage.getItem(nowuser+"&shopcar_content"));
				// 	return;
				// }

				totalgoods.push(goods);
				
				console.log(totalgoods);
				sessionStorage.setItem(nowuser+"&shopcar_content",JSON.stringify(totalgoods));
				$scope.showloading();	
				return;
			}
			var totalgoods=[];
			totalgoods.push(goods);
			sessionStorage.setItem(nowuser+"&shopcar_content",JSON.stringify(totalgoods));
			$scope.showloading();	
			console.log(sessionStorage.getItem(nowuser+"&shopcar_content"));
		}

		$scope.select_type=function(){
			$(".mask_shopstype").css("display","block");
			


		}

		$scope.close_typechoose=function(){
			$(".mask_shopstype").css("display","none");
		}

		
	}
])