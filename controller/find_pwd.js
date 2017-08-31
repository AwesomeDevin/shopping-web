var myCtrl = angular.module('myController5', []);

myCtrl.controller('findPwdCtrl',['$scope','$ionicScrollDelegate','$http','$ionicPopup','$interval',function($scope,$ionicScrollDelegate,$http,$ionicPopup,$interval){
	$scope.emailbtn_txt='获取邮箱验证码';
	// email_txt=123;
	$scope.get_email_checknum=function(email_txt){
		var reg= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		console.log(email_txt);
		if(!reg.test(email_txt))
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
		var url="http://139.199.3.199:9999/res/check?email="+email_txt;
		$http.get(url).success(function(res,status){
			console.log(res);
			$scope.email_checknum=res.code;
		})
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
   }

   $scope.showTip = function(str) {
     var alertPopup = $ionicPopup.alert({
       title: '密码找回',
       template:'您的密码为'+str,
       buttons: [ {
		    text: '确认',
		    type: 'button-positive',
		   
		  }]
     });
     alertPopup.then(function(res) {
       // console.log('Thank you for not eating my delicious ice cream cone');
     });
   }

   $scope.toFind=function(str,emailtxt){
   	console.log($scope.email_checknum,str);
   	if($scope.email_checknum==str)
   	{
   		$http.get('tofindpwd.php?email='+emailtxt).success(function(res,status){
   			console.log(res,status)
   			if(res.code==0)
   			{
   				$scope.showTip(res.password);
   			}
   			else
   			{
   				$scope.showAlert('用户不存在');
   			}
   		}).error(function(res,status){
   			console.log(res,status)
   			$scope.showAlert('用户不存在');
   		})
   	}
   	else
   	{
   		$scope.showAlert('验证码有误');
   	}
   }


}])

