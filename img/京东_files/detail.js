var myCtrl = angular.module('myController2', []);


myCtrl.controller('detailCtrl', ['$scope', '$http', '$stateParams', '$ionicScrollDelegate', '$timeout', '$ionicScrollDelegate',
	function($scope, $http, $stateParams, $ionicScrollDelegate, $timeout, $ionicScrollDelegate) {

		$scope.selectshow = false;
		$scope.select_top = function() {
			if ($scope.selectshow) {
				$scope.selectshow = false;
			} else {
				$scope.selectshow = true;
			}
		}


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

		$scope.add_shopcar=function(){
			var nowuser=sessionStorage.getItem("JDlogin_user");
			if(!nowuser)
			{
				sessionStorage.setItem("JDspare_user","临时用户");				
			}

			var goods={};
			goods.title=""
		}

	}
])