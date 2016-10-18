var flag1=false;
var flag2=false;
var flag3=false;
var flag4=false;

var Log={
	dom:{},
	init:function(){
		var dom=this.dom;
		Log.initdom();
		Log.Get();
		Log.Auto_Login();
		Log.ChangeUserName();
	},
	initdom:function(){
		var dom=this.dom;
		dom.oinput1=$(".rightbox").find("input").eq(0);
		dom.oinput2=$(".rightbox").find("input").eq(1);
		dom.oinput3=$(".rightbox").find("input").eq(2);
		dom.oinput4=$(".rightbox").find("input").eq(3);
		
	},
//	取得cookie的用户
	Get:function(){
		var dom=this.dom;
		var str=getcookie("User");
		str=eval(str);
	
//		判断用户名格式
		dom.oinput1.blur(function(){
			var reg1=/^\w{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z{1,}$]/;
			var reg2=/^1[3578]\d{9}$/
				if(reg1.test($(this).val())||reg2.test($(this).val()))
				{
					
					flag1=true;
					$(".tips-user2").css("display","block");
					$(this).css("border","1px solid #cccccc");
					$(this).css("box-shadow","none");
					$(".tips-user1").css("display","none");
					
				}
				else
				{
					$(".tips-user1").css("display","block");
					$(".tips-user1").html("用户名格式不对，请重新确认！")
					$(".tips-user2").css("display","none");
					$("input.txt").eq(0).css("border","1px solid red");
					flag1=false;
				}
				
			
			
		})
//		判断密码格式
		dom.oinput2.blur(function(){
			
				var reg=/^\w{1,}$/;
				if(reg.test($(this).val()))
				{
					
					flag2=true;
					$(".tips-pwd2").css("display","block");
					$(this).css("border","1px solid #cccccc");
					$(this).css("box-shadow","none");
					$(".tips-pwd1").css("display","none");
					
				}
				else
				{
					$(".tips-pwd1").css("display","block");
					$(".tips-pwd1").html("密码格式不对或者密码错误，请重新确认！")
					$(".tips-pwd2").css("display","none");
					$("input.txt").eq(1).css("border","1px solid red");
					flag2=false;
				}
				
			
			
		})
//		判断验证码
		dom.oinput3.blur(function(){
			var IsBy = $.idcode.validateCode();  //调用返回值，返回值结果为true或者false
	        if(IsBy){
	           flag3=true;
	           $(".tips-yzm1-2").css("display","block");
				$("input.txt").eq(2).css("border","1px solid #cccccc");
				$("input.txt").eq(2).css("box-shadow","none");
				$(".tips-yzm1-1").css("display","none");
	        }
	        else {
	           flag3=false;
	           	$(".tips-yzm1-1").css("display","block");
				$(".tips-yzm1-2").css("display","none");
				$("input.txt").eq(2).css("border","1px solid red");
	        }
		})
		
		
//	点击登录
		$("#butn").click(function(){
			if(!flag1||!flag1||!flag3)
			{
				alert("账户验证错误！");
				return;
			}
			var success=0;
			if(str!=null)
			{
				
				for(var i=0;i<str.length;i++)
				{
					console.log($("input.txt").eq(0).val(),str[i].user_name,str);
					if($("input.txt").eq(0).val()==str[i].user_name)
					{
						
						if($("input.txt").eq(1).val()==str[i].pass_word)
						{
							success=1;
							if($(".check").is(":checked"))
							{
								
								var json=JSON.stringify($("input.txt").eq(0).val());
								setcookie("auto_login",json,1);
							}
							alert("登录成功");
							location.href="../index.html";
							return;
						}
						else
						{
							success=0;
							
						}
					}
					else
					{
						success=0;
						
					}
				}
			}
			else
			{success=0;}
			if(success==0)
			{
				alert("用户名或者密码错误，请重新登录！");
			}
		})
		
		
		
	},
	
	//自动登录
	Auto_Login:function(){
		var Auto=getcookie("auto_login");
		Auto=eval(Auto);
		if(Auto!=null)
		{
			if(confirm("允许自动登录，确认后将跳转到首页，否则返回登录页！"))
			{
			location.href="../index.html";
			}
			else{
				alert("自动跳转首页取消");
			}
		}
//							location.href="../index-DEMO.html";
						
			
		
	},
	ChangeUserName:function(){
		
		var Auto=getcookie("auto_login");
		Auto=eval(Auto);
		
		if(Auto!=null)
		{
			console.log()
			$("a.head-a1").html(Auto);
			$("a.head-a2").html("退出登录");
		}
	}
	
	
	
}



function Border(){
	$("input.txt").focus(function(e){
		$(this).css("border","1px solid orange");
		$(this).css("box-shadow","0 0 2px orange");
		
	})
	$("input.txt").blur(function(){
		$(this).css("border","1px solid #cccccc");
		$(this).css("box-shadow","none");
		
	})
}


function Quit(){
	$(".head-span .head-a2").click(function(){
		
		var json=JSON.stringify($("input.txt").eq(0).val());
		setcookie("auto_login",json,-1);
		alert("退出登录成功");
	})
}


$(function(){
	
	Border();
	Log.init();
	Quit();
})

