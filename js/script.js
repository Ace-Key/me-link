$(document).ready(function(){
	var me = $(".me");
	var link = $(".link");
	var button = $(".btn");
	
		me.animate({top: '100px'}, 500);
		me.animate({fontSize: '+=40pt', width: '+=100px', height: '+=100px'}, 500);
		link.animate({top: '400px'}, 500);
		link.animate({fontSize: '+=40pt', width: '+=100px', height: '+=100px'}, 700);
          button.hide(1200).fadeIn(2000);
   
});