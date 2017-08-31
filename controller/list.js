var myCtrl = angular.module('myController1', []);

	// var myscroll;
// function loaded(){
// 	setTimeout(function(){
// 		myscroll=new IScroll("wrapper");
// 	},100)
	
// }
// window.addEventListener("load",loaded,false);

myCtrl.controller('flCtrl',['$scope','$http','$stateParams','$ionicScrollDelegate','$state',function($scope,$http,$stateParams,$ionicScrollDelegate,$state){
	$http.get('json/type.json').success(function(data){
		$scope.lists=data.dataList;
		// console.log($stateParams.id);
		// console.log(data);
	})
	$scope.selectshow=false;
	$scope.select_top=function(){
		if($scope.selectshow)
		{
			$scope.selectshow=false;
		}
		else
		{
			$scope.selectshow=true;
		}
	}



	$scope.toSearch=function(){
		$state.go('main.search');
	}

	
	$scope.currentid=1;

	$scope.tabchange=function(index,id){
		
		var height=index*46;
		$scope.currentid=id;
		$ionicScrollDelegate.$getByHandle('left').scrollTo(0,height,true);
		height=-height;
		$scope.getcontent();
		// $(".scroll").css('transform','translate3d(0px,'+height+'px, 0px)');

	}

	$scope.getcontent=function(){
		$http.get("json/list"+$scope.currentid+".json").success(function(data){
			$scope.details=data.dataList;
			$scope.header_url=data.type_img;
			// console.log(data);

			$ionicScrollDelegate.$getByHandle('right').resize();
		})
	}
	
	$scope.getcontent();

}])












// 登录页面控制器
myCtrl.controller('loginCtrl',['$scope','$http','$ionicPopup','$state','$rootScope',function($scope,$http,$ionicPopup,$state,$rootScope){
	$scope.txt1=false;
	$scope.txt2=false;
	$scope.txt3=false;
	$scope.btnok1=false;
	$scope.btnok2=false;
	$scope.btnok3=false;
	$scope.disabled_ok=true;
	$scope.focus1=function(flag){
		$scope.txt1=true;
		console.log($scope.txt1);

	}
	$scope.blur1=function(flag){
		$scope.txt1=false;
		if(flag)
		{
			$scope.btnok1=true;
		}
		else
		{
			$scope.btnok1=false;
		}
		$scope.checkbtn();
	}

	$scope.focus2=function(flag){
		$scope.txt2=true;
	}
	$scope.blur2=function(flag){

		$scope.txt2=false;
		if(flag)
		{
			$scope.btnok2=true;
		}
		else
		{
			$scope.btnok2=false;
		}
		console.log($scope.btnok2);
		$scope.checkbtn();
	}

	$scope.focus3=function(flag){
		$scope.txt3=true;
	}
	$scope.blur3=function(flag){
		$scope.txt3=false;
		if(flag)
		{
			$scope.btnok3=true;
		}
		else
		{
			$scope.btnok3=false;
		}
		$scope.checkbtn();
	}


	$scope.checkbtn=function(){
		if($scope.btnok1&&$scope.btnok2&&$scope.btnok3)
		{

			$scope.disabled_ok=false;

		}
		else
		{
			$scope.disabled_ok=true;
		}
		console.log($scope.disabled_ok);
	}
	
	$scope.change_checknum=function(){

		$(".check_num img").attr("src",'checknum/code_char.php?' + Math.random()); 
	}

	// $scope.pw_change=function(){
	// 	$scope.pw_flag=-$scope.pw_flag;
	// }

	$scope.print=function(){
	

		// $scope.disabled_ok=true
	}

	$scope.hh={
		input_value1:''
	}
	$scope.Clear1=function(){
		$scope.hh.input_value1="";
		
	}
	$scope.Clear2=function(){
		$scope.hh.input_value2="";
		
	}
	$scope.Clear3=function(){
		$scope.hh.input_value3="";
		
	}


	$scope.showAlert = function(str) {
     var alertPopup = $ionicPopup.alert({
       title: '提示!',
       template:str,
       buttons: [ {
		    text: '确认',
		    type: 'button-assertive',
		   
		  }]
     });
     alertPopup.then(function(res) {
       // console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

   $scope.is_free_login=false;
   $scope.dada=function(){
   	$scope.is_free_login=!$scope.is_free_login;
   	console.log($scope.is_free_login);
   }

	
	$scope.startlogin=function(){
				var data_user = {
			user:$scope.hh.input_value1,
			pwd:$scope.hh.input_value2
			},
			//post请求的地址
			url = "login.php",
			//将参数传递的方式改成form
			postCfg = {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			transformRequest: function (data) {
			return $.param(data);
			}
			};
			//发送post请求，获取数据
			$http.post(url, data_user, postCfg)
			.success(function (data) {
				var code_char =$scope.hh.input_value3;
				console.log(data_user.user);
				$.post("checknum/chk_code.php?act=char",{code:code_char},function(msg){
					if(msg==1){
						console.log(data.code);
						if(data.code==0)
						{
							$scope.showAlert('登录成功!');
							$state.go("main.home");
							console.log($scope.is_free_login);
							if($scope.is_free_login)
							{
								localStorage.setItem("JDlogin_user",JSON.stringify(data_user));
							}
							$rootScope.admin_user=data_user.user;
							
						}
						else if(data.code==1)
						{
							$scope.showAlert('登录失败!账号或密码错误!');
							$scope.change_checknum();
						}
						else
						{
							$scope.showAlert('网络错误!请重试。');
							$scope.change_checknum();
						}
					}else{
						$scope.showAlert('验证码错误！');
						$scope.change_checknum();
					}
				});



				
		});
	}


}])
























// 注册页面控制器
myCtrl.controller('registerCtrl',['$scope','$http','$state','$ionicPopup','$timeout','$rootScope','$interval',function($scope,$http,$state,$ionicPopup,$timeout,$rootScope,$interval){

	$scope.showicon1=false;
	$scope.showicon2=false;
	$scope.showicon3=false;
	$scope.showicon4=false;
	$scope.isok1=false;
	$scope.isok2=false;
	$scope.isok3=false;
	$scope.isok4=false;
	$scope.btn_isnook=true;
	$scope.emailbtn_txt="获取邮箱验证码"
	$rootScope.goBackWeb=function(){
		location.history.go(-1);
	}


	$scope.get_email_checknum=function(){
		var reg= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if(!reg.test($scope.hh.txt2))
		{
			$scope.showAlert("邮箱格式不正确");
			return;
		}
		$scope.emailbtn_isnotok=true;
		var second=60;
		$scope.emailbtn_txt="点击还需("+second+'S)';
		var timer=$interval(function(){
			second--;
			// console.log(second);
			$scope.emailbtn_txt="点击还需("+second+'S)';
			console.log($scope.emailbtn_txt);
			if(second==0)
			{
				$scope.emailbtn_isnotok=false;
				$scope.emailbtn_txt="获取邮箱验证码";
				$interval.cancel(timer);
			}
		},1000)

		console.log(1);
		var url="http://139.199.3.199:9999/res/check?email="+$scope.hh.txt2;
		$http.get(url).success(function(res,status){
			console.log(res);
			$scope.email_checknum=res.code;
		})
	}
	// $scope.get_email_checknum();


	$scope.showi1=function(){
		$scope.showicon1=true;
	}
	$scope.hidei1=function(txt){

		$scope.showicon1=false;
		if(txt)
		{
			$scope.isok1=true;
		}
		else
		{
			$scope.isok1=false;
		}
		$scope.btn_ok();
	}
	$scope.showi2=function(){
		$scope.showicon2=true;
	}
	$scope.hidei2=function(txt){
		$scope.showicon2=false;
		if(txt)
		{
			$scope.isok2=true;
		}
		else
		{
			$scope.isok2=false;
		}
		$scope.btn_ok();
	}
	$scope.showi3=function(){
		$scope.showicon3=true;
	}
	$scope.hidei3=function(txt){
		$scope.showicon3=false;
		if(txt)
		{
			$scope.isok3=true;
		}
		else
		{
			$scope.isok3=false;
		}
		$scope.btn_ok();
	}
	$scope.showi4=function(){
		$scope.showicon4=true;
	}
	$scope.hidei4=function(txt){
		$scope.showicon4=false;
		if(txt)
		{
			$scope.isok4=true;
		}
		else
		{
			$scope.isok4=false;
		}
		$scope.btn_ok();
		
	}


	$scope.btn_ok=function(){
		if($scope.isok1&&$scope.isok2&&$scope.isok3&&$scope.isok4)
		{
			$scope.btn_isnook=false;
		}
		else
		{
			$scope.btn_isnook=true;
		}
		console.log($scope.isok1,$scope.isok2,$scope.isok3,$scope.isok4,$scope.btn_isnook);
	}



	$scope.change_checknum=function(){

		$(".label1 p img").attr("src",'checknum/code_char.php?' + Math.random()); 
	}


	// $scope.qiehuan=function(){
	// 	// $scope.btn_isnook=true;
	// 	// $scope.hidei4(txt);
	// }

	$scope.hh = {
		txt1: '',
		txt2: '',
		txt3: '',
		txt4: ''
	};

	$scope.clear1=function(){

		// console.log(11);
		
		// $(".label1 input").val("");

		$scope.hh.txt1="";
		
	}

	$scope.clear2=function(){
		$scope.hh.txt2="";
		
	}

	$scope.clear3=function(){
		$scope.hh.txt3="";
	}

	$scope.clear4=function(){
		$scope.hh.txt4="";
	}

	// 提示框
	$scope.showAlert = function(str) {
     var alertPopup = $ionicPopup.alert({
       title: '提示!',
       template:str,
       buttons: [ {
		    text: '确认',
		    type: 'button-assertive',
		   
		  }]
     });
     alertPopup.then(function(res) {
       // console.log('Thank you for not eating my delicious ice cream cone');
     });
   };


	$scope.startregister=function(){

		// console.log($scope.hh.txt2,$scope.hh.txt4);
		// $http.post('register.php',{
		// params:{
		// 	user:$scope.hh.txt2,
		// 	pwd:$scope.hh.txt4
		// }
		// }).success(function(data){
		// 	console.log(data);
		// })
		console.log($scope.email_checknum,$scope.hh.txt3);
		if($scope.email_checknum!=$scope.hh.txt3)
		{
			$scope.showAlert('邮箱验证码错误');
			return;
		}




		var data = {
			user:$scope.hh.txt2,
			pwd:$scope.hh.txt4
			},
			//post请求的地址
			url = "register.php",
			//将参数传递的方式改成form
			postCfg = {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			transformRequest: function (data) {
			return $.param(data);
			}
			};
			//发送post请求，获取数据
		var registerisok=false;


		
		var code_char =$scope.hh.txt1;
		console.log(code_char);
		$.post("checknum/chk_code.php?act=char",{code:code_char},function(msg){
					console.log(msg);
					if(msg==1){
						
						// $scope.showAlert('注册成功！');
						$http.post(url, data, postCfg)
						.success(function (data) {
								if(data.code==0)
								{
									$state.go("main.home");
									$rootScope.admin_user=$scope.hh.txt2;
								}
								
								$scope.showAlert(data.msg);
								




								
						});
					}else{
						$scope.showAlert('验证码错误！');
						$scope.change_checknum();
					}
		});


		// if(registerisok==true)
		// {
		// 	$http.post(url, data, postCfg)
		// 	.success(function (data) {
					
		// 			console.log( data);
					


					
		// 	});
		// }
	}


}])




  