
 var flag4=false;


//设置INPUT样式

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


var Input={
	dom:{},
	init:function(){
		Border();
		
		this.initdom();
		this.Iphone();
		this.ChangeUserName();
	},
	initdom:function(){
		var dom=this.dom;
		 dom.oinput=$("#form .main .txt");
		
	},
	Iphone:function(){
		var dom=this.dom;
		 var flag1=false;
		 var flag2=false;
		 var flag3=false;
		
		 var flag5=false;
		 var pwd=0;
		 var userarr=new Array();
//		 先将cookie中的用户取下来
//		setcookie('User',"1");
			var str0=getcookie("User");
			str0=eval(str0);
			
			
//			if(str0==null)
//			{
//				return;
//			}
			if(str0!=null)
			{
			for(var i=0;i<str0.length;i++)
			{
				var User0={};
				User0.user_name=str0[i].user_name;
				User0.pass_word=str0[i].pass_word;
				userarr.push(User0);
				
			}
			}
			
		
		 
//		判断手机号输入是否正确
		dom.oinput.eq(0).blur(function(){
			var reg=/^1[3578]\d{9}$/;
//			判断用户名是否存在
			if(reg.test($(this).val()))
			{
//				对str0中的用户名进行遍历
				for(var j in str0)
				{
					
					if($(this).val()==str0[j].user_name)
					{
						
						$(".tips-iphone1").css("display","block");
						$(".tips-iphone1").html("用户名已经存在");
						$(".tips-iphone2").css("display","none");
						$("input.txt").eq(0).css("border","1px solid red");
						flag1=false;
						return;
					}
				}
				
				$(".tips-iphone2").css("display","block");
				$("input.txt").eq(0).css("border","1px solid #cccccc");
				$("input.txt").eq(0).css("box-shadow","none");
				$(".tips-iphone1").css("display","none");
				flag1=true;
			}
			else
			{
				$(".tips-iphone1").css("display","block");
				$(".tips-iphone2").css("display","none");
				$("input.txt").eq(0).css("border","1px solid red");
				flag1=false;
			}
		})
//判断密码框的样式
		dom.oinput.eq(1).focus(function(){
			$(".tips-pwd1").css("display","none");
				$(".tips-pwd2").css("display","none");
			$(".tips-pwd3").find("ul").css("display","block");
			$(this).on("input",function(){
				var value=$(this).val();
				if(value.length>=6&&value.length<12)
				{
					$(".pwd-li1").css("background","orange");
					$(".pwd-li2").css("background","#C1C1C1");
					$(".pwd-li3").css("background","#C1C1C1");
				}
				else if(value.length>=12&&value.length<15)
				{
					$(".pwd-li1").css("background","orange");
					$(".pwd-li2").css("background","greenyellow");
					$(".pwd-li3").css("background","#C1C1C1");
				}
				else if(value.length>=15&&value.length<=20)
				{
					$(".pwd-li1").css("background","orange");
					$(".pwd-li2").css("background","greenyellow");
					$(".pwd-li3").css("background","green");
				}
				else
				{
					$(".pwd-li1").css("background","#C1C1C1");
					$(".pwd-li2").css("background","#C1C1C1");
					$(".pwd-li3").css("background","#C1C1C1");
				}
			})
		})
//		判断密码的长度
		dom.oinput.eq(1).blur(function(){
			
			var reg=/^\w{6,20}$/;
			
			$(".tips-pwd3").find("ul").css("display","none");
			if(reg.test($(this).val()))
			{
				flag2=true;
				pwd=$(this).val();
				$(".tips-pwd2").css("display","block");
				$("input.txt").eq(1).css("border","1px solid #cccccc");
				$("input.txt").eq(1).css("box-shadow","none");
				$(".tips-pwd1").css("display","none");
			}
			else
			{
				flag2=false;
				$(".tips-pwd1").css("display","block");
				$(".tips-pwd2").css("display","none");
				$("input.txt").eq(1).css("border","1px solid red");
			}
		})
//		判断密码是否相同
		dom.oinput.eq(2).blur(function(){
			
			
			
		
			if(pwd==$(this).val()&&pwd!="")
			{
				flag3=true;
				$(".tips-pwd5").css("display","block");
				$("input.txt").eq(2).css("border","1px solid #cccccc");
				$("input.txt").eq(2).css("box-shadow","none");
				$(".tips-pwd4").css("display","none");
			}
			else
			{
				flag3=false;
				$(".tips-pwd4").css("display","block");
				$(".tips-pwd5").css("display","none");
				$("input.txt").eq(2).css("border","1px solid red");
			}
		})
//		判断验证码
		dom.oinput.eq(3).blur(function(){
			var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
	        if(IsBy){
	           flag4=true;
	           $(".tips-yzm1-2").css("display","block");
				$("input.txt").eq(3).css("border","1px solid #cccccc");
				$("input.txt").eq(3).css("box-shadow","none");
				$(".tips-yzm1-1").css("display","none");
	        }else {
	           flag4=false;
	           	$(".tips-yzm1-1").css("display","block");
				$(".tips-yzm1-2").css("display","none");
				$("input.txt").eq(3).css("border","1px solid red");
	        }
				
		})
		
//			判断单选框
			$(".check").click(function(){
				if($(this).is(":checked"))
				{
					flag5=true;
				}
				else
				{
					flag5=false;
				}
			})
		$("#butn").click(function(){
		
			
//			注册提交
			if(flag1==true&&flag2==true&&flag3==true&&flag4==true&&flag5==true)
			{
				var User={};
				User.user_name=dom.oinput.eq(0).val();
				User.pass_word=dom.oinput.eq(1).val();
				
				userarr.push(User);
				var json=JSON.stringify(userarr);
				
				setcookie("User",json,1)
				
				$(".btn").css("background-position","0 -71px");
				$(".btn").css("box-shadow","0 0 10px #4d9221");
				location.href="log.html";
				alert("账号注册成功");
			}
			else
			{
				alert("注册失败");
			}
		})
		
		
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
	},
}
function Quit(){
	$(".head-span .head-a2").click(function(){
		var json=JSON.stringify($("input.txt").eq(0).val());
		setcookie("auto_login",json,-1);
		alert("退出登录成功")
	})
}

$(function(){
	Input.init();
	Quit();
})