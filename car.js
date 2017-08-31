var myCtrl = angular.module('myController4', []);

myCtrl.controller('carCtrl', ['$scope','$state','$timeout',function($scope,$state,$timeout){

   var loginuser=sessionStorage.getItem("JDlogin_user");
   $scope.storearr=[];
   $scope.allchecked=false;
   if(!loginuser)
   {
      	loginuser=sessionStorage.getItem("JDspare_user");
   }
   console.log(loginuser+"&shopcar_content");
   $scope.shoparr=JSON.parse(sessionStorage.getItem(loginuser+"&shopcar_content"));

   console.log( $scope.shoparr);
   $scope.showselect=false;
   $scope.decideselect=function(){
   		$scope.showselect=!$scope.showselect;
   }

 //存放店铺的数组
  var shopnamearr=[];
  for(var i in $scope.shoparr)
  {
  	var push_flag=true;
  	if(i==0)
  	{
  		shopnamearr.push($scope.shoparr[i].storename);
  		continue;
  	}
  	else
  	{
  		for(var j in shopnamearr)
  		{
  			if($scope.shoparr[i].storename==shopnamearr[j])
  			{
  				push_flag=false;
  				break;
  			}
  		}
  	}

  	if(push_flag)
  	{
  		shopnamearr.push($scope.shoparr[i].storename);
  	}
  	console.log(shopnamearr);
  }

  // 存放用户购物车数据的数组
/*  JSON格式：
  [
    {
      storename:'商店名',
      shoplist:[商品1，商品2，商品3]
    }
    ,
    {
      storename:'商店名',
      shoplist:[商品1，商品2，商品3]
    }
  ]*/
  $scope.storearr=[];
  for(var i in shopnamearr)
  {
  	var store={};
  	store.storename=shopnamearr[i];
    var newshoparr=[];
  	for(var j in $scope.shoparr)
  	{
     
  		if($scope.shoparr[j].storename==shopnamearr[i])
        {
          newshoparr.push($scope.shoparr[j]);

        };

  	}
   store.shoplist=newshoparr;
  $scope.storearr.push(store);
    console.log( $scope.storearr,$scope.shoparr);
  }



// 删除订单
var valuehight;
var valuelow;
$scope.removeorder_copy=function(j){
   valuehight=j
   console.log(valuehight,valuelow);
  
   
}
$scope.removeorder=function(i){
    
  valuelow=i;

  $timeout(function(){
   
       $scope.storearr[ valuehight].shoplist.splice(valuelow,1);
       valuehight=null;
        valuelow=null;
        Getprice();
        console.log($scope.storearr);
      

  },100);
 
 

}

$scope.total_price=0;


$scope.reducenum=function(i){
  valuelow=i;
   $timeout(function(){
      if( $scope.storearr[ valuehight].shoplist[i].num<=1)
      {
         valuehight=null;
        valuelow=null;
        return;
      }
      $scope.storearr[ valuehight].shoplist[i].num--;
      Getprice();
       Getnum();
       valuehight=null;
        valuelow=null;
  },20);
}
$scope.addnum=function(i){
  valuelow=i;
   $timeout(function(){
      $scope.storearr[ valuehight].shoplist[i].num++;
      Getprice();
      Getnum();

       valuehight=null;
        valuelow=null;
  },20);
}

// $scope.choose_shop=function($event){
//   if($($event.target).prop("checked"))
//   {
//     console.log($($event.target).parent());
//   }
// }
// $scope.choose_goods=function($event){
  
// }



// 计算总价
function Getprice(){
  var total_price=0;
  for(var i in $scope.storearr)
  {
    for(var j in $scope.storearr[i].shoplist)
    {
       total_price=total_price+parseFloat($scope.storearr[i].shoplist[j].num)*parseFloat($scope.storearr[i].shoplist[j].price)
        
    }
  }
  $scope.total_price=total_price;

   var deletearr=[];
   for(var x in $scope.storearr)
      {
        for(var y in $scope.storearr[x].shoplist)
        {
          deletearr.push($scope.storearr[x].shoplist[y]);
        }
      }
      sessionStorage.setItem(loginuser+"&shopcar_content",JSON.stringify(deletearr));
}
Getprice();


$scope.choose_shop=function(i){
  $scope.index=i;
}
$scope.choose_goods=function(){
 
}
// 计算数量
 $scope.total_num=0;
function Getnum(){
  var total_num=0;
  for(var i in $scope.storearr)
  {
    for(var j in $scope.storearr[i].shoplist)
    {
     
       total_num=total_num+parseFloat($scope.storearr[i].shoplist[j].num)
        
    }
  }
  $scope.total_num=total_num;
}
Getnum();


}])

$("body").on('click','.header .checkbox-icon',function(){
 alert(1);
})



//判断数量是否等于1
// function Judgenum(){

// }
// $("body").on("click",".reduce",function(){
//   var value=parseFloat($(this).parents(".content").find("input.num").val());
//   if(value<=0)
//   {
//     $(this).attr("disabled","true");
//   }

// })
// $("body").on("click",".add",function(){
//   var value=parseFloat($(this).parents(".content").find("input.num").val());
//   if(value>=1)
//   {
//     $(this).parent().find(".reduce").removeAttr("disabled");
//   }

// })