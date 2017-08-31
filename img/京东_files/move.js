
// 封装函数： startMove: 让物体缓冲运动到目标值
// 参数： 
//     obj    物体
//     oAttr 
//             多个属性值的改变
//             { 属性1：目标1, 属性2：目标2}
//     fn      回调函数

function startMove(obj, oAttr, fn) {
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function() {

		// true 代表所有属性都已经到达目的地
		var flag = true;

		// 快速遍历对象中的所有属性
		for (var attr in oAttr) {
		
			// 1、 获取当前值
			var start = parseFloat(getStyle(obj, attr));
			
			if (attr == "opacity") {
				// 对于透明度特殊处理，都转换成 100 制
				start = Math.round(start * 100);
			} else {
				start = Math.round(start);
			}
			
					
			// 2、计算速度值
			//   缓冲运动： 速度值越来越小的
			//  oAttr[attr] 是代表当前属性 attr 的目标值
			var speed = (oAttr[attr] - start) / 7;
			speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
					
			// 3、判断没有到达目的地
			if (start == oAttr[attr]) {
				// 说明当前属性 attr 已经到达目的地，
				// 下面代码不执行
				
				// return 【终止函数】
				// return ;
				
				continue;
				
			} else {
				// 说明，至少有个属性没有完成动作
				flag = false;
			}
			
			// 4、更新位置
			if (attr == "opacity") {
				obj.style.opacity = (start + speed)/100;
				obj.style.filter = "alpha(opacity="+(start+speed)+")";
			} else {
				obj.style[attr] = (start + speed) + "px"; 
			}
		}

		if (flag == true) {
			
			// 说明所有属性都完成了
			clearInterval(obj.timer);
			
			fn && fn();
		}
	}, 50);
	
}


// 【获取】样式值
// 函数名： getStyle
// 参数： 
//    obj   节点对象
//    attr  需要获取的属性名
// 返回值： 就是对应的样式值
function getStyle(obj, attr) {
	var objStyle = null;
	if (window.getComputedStyle) {
		objStyle = getComputedStyle(obj);
	} else {
		objStyle = obj.currentStyle;
	}
	
	return objStyle[attr];
}


