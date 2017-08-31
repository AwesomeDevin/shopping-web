function moveaddopacity(obj,attr,target,fn,timer){
	clearInterval(obj[timer]);
	
	obj[timer]=setInterval(function(){
		
		if(attr=="opacity")
		{
			
			var now=Math.round(getStyle(obj,attr)*100);
			
		}
		else if(attr=="scrolltop")
		{
			var now=document.documentElement.scrollTop||document.body.scrollTop;
		}
		else{
			
			var now=parseInt(getStyle(obj,attr));
			
		}
		var speed=(target-now)/7;
		if(now==target)
		{
			
			clearInterval(obj[timer]);
			
			fn();
			return;
		}
		if(attr=="opacity")
		{
			console.log(now,speed,target);
			console.log("------------------");
			speed=Math.ceil(speed);
			console.log(now,speed,target);
			obj.style.opacity=(now+speed)/100;
			obj.style.filter="alpha(opacity="+(now+speed)+")";
			
		}
		else if(attr=="scrolltop")
		{
			speed=Math.ceil(Math.abs(speed));
			if(document.documentElement.scrollTop==0)
				{
					document.body.scrollTop=Math.ceil(now-speed);
				}
			else if(document.body.scrollTop==0)
				{
							
					document.documentElement.scrollTop=Math.ceil(now-speed);
				}
				
		}
		else{
			if(speed>=0)
			{
				speed=Math.ceil(speed);
			}
			else
			{
				speed=Math.floor(speed);
			}
			obj.style[attr]=(now+speed)+"px";
			
		}
	},50)
}

function getStyle(obj, attr) {
	var objStyle = null;
	if (window.getComputedStyle) {
		objStyle = getComputedStyle(obj);
	} else {
		objStyle = obj.currentStyle;
	}
	
	return objStyle[attr];
}
