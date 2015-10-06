$(document).ready(function(){
	var me = $(".me");
	var link = $(".link");
	var button = $("#start-btn");
	
		me.animate({top: '200px'}, 500);
		me.animate({fontSize: '+=60pt', width: '+=150px', height: '+=150px'}, 700);
		link.animate({top: '400px'}, 700);
		link.animate({fontSize: '+=60pt', width: '+=150px', height: '+=150px'}, 1100);
		me.animate({top: '50px'}, 500);
		link.animate({top: '550px'}, 500);
          button.hide(1700).fadeIn(2500);
  });

