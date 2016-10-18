function getcookie(name){
	var str=document.cookie;
	str=str.replace(/[ ]/g,"");
	name=encodeURIComponent(name);
	var oarr=str.split(";");
	
	for(var i=0;i<oarr.length;i++)
	{
		var newarr=oarr[i].split("=");
		
			
			if(newarr[0]==name)
			{
				return decodeURIComponent(newarr[1]);
			}
		
	}
}
