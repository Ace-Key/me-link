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
	
	home.tooltip({
      show: null,
      position: {
        my: "left top",
        at: "left bottom"
      },
      open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 30 }, "fast" );
      }
    });
	
		text.tooltip({
      show: null,
      position: {
        my: "left top",
        at: "left bottom"
      },
      open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 30 }, "fast" );
      }
    });
	settings.tooltip({
      show: null,
      position: {
        my: "left top",
        at: "left bottom"
      },
      open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 30 }, "fast" );
      }
    });
	status.tooltip({
      show: null,
      position: {
        my: "left top",
        at: "left bottom"
      },
      open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 30 }, "fast" );
      }
	 });
	lock.tooltip({
      show: null,
      position: {
        my: "left top",
        at: "left bottom"
      },
      open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 30 }, "fast" );
      }
    });
	close.tooltip({
      show: null,
      position: {
        my: "left top",
        at: "left bottom"
      },
      open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 30 }, "fast" );
      }
    });
	
    
});