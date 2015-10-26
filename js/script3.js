$(document).ready(function(){
	var ca = $(".ca");
	var home = $("#home");
	var settings = $("#settings");
	var lock = $("#lock");
	var status = $("#status");
	var text = $("#text");
	var close = $("#close");
	
	ca.hide(1200).fadeIn(2000).draggable().resizable();
	
	
	home.draggable();
	settings.draggable();
	status.draggable();
	lock.draggable();
	text.draggable();
	close.draggable();
	
	
    
});