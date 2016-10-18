function setcookie(name,value,day){
	var d=new Date();
	d.setDate(d.getDate()+day);
	name=encodeURIComponent(name);
	value=encodeURIComponent(value);
	document.cookie=""+name+"="+value+";expires="+d+";path=/";
}
