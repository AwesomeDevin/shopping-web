var Lunbo={
	dom:{},

	init:function(){
		var dom=this.dom;
		dom.news=$(".jdkb .news ul");
		
		this.NewMove();
	},


	NewMove:function(){

		var dom=this.dom;
		var i=1;
		
		setInterval(function(){
			var height=$(".jdkb .news ul li").height()*i;

			
			dom.news.animate({"top":-height},200,function(){
				i++
				if(i==4)
				{
					i=1;
					dom.news.css("top",0);
				}
			})
		},5000);
	}
}


$(function(){
	Lunbo.init();
})