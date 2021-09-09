$( document ).ready(function() {

    // Main navigation menu toggle
	$("#shopmenu").on( "mouseover", function() {
	  $("#menu").css("display", "block");
	});
	
	$("#menu").on( "mouseleave", function() {
	  $("#menu").css("display", "none");
	});
	
    // Sets the image for "Search All" to be displayed when mousing over all menu items
	$("#leftmenu ul li").on("mouseover", function() {
		$("#all").css("display", "block");
		$("#seats").css("display", "none");
	});
	
    // But, we want to set the image for "Seats" to switch to the one in the design.
	$("#menuseats").off("mouseover");
	
	$("#menuseats").on("mouseover", function() {
		$("#all").css("display", "none");
		$("#seats").css("display", "block");
	});
	
    // Location menu toggle
	$("#location").on( "mouseover", function() {
	  $("#locationmenu").css("display", "inline-block");
	});
	
	$("#locationmenu").on( "mouseleave", function() {
	  $("#locationmenu").css("display", "none");
	});
	
    // When selecting a location, it should be changed in the text in the navbar.
	$("#locationmenu ul li a").on("click", function() {
		$("#location").text( $(this).text() );
	});
});