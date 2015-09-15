$(document).ready(function(){
	var me = $(".me");
	var link = $(".link");
	var button = $(".btn");
	
		me.animate({top: '200px'}, 300);
		me.animate({fontSize: '+=60pt', width: '+=150px', height: '+=150px'}, 500);
		link.animate({top: '400px'}, 300);
		link.animate({fontSize: '+=60pt', width: '+=150px', height: '+=150px'}, 900);
		me.animate({top: '50px'}, 500);
		link.animate({top: '550px'}, 500);
          button.hide(1200).fadeIn(2000);
  });

