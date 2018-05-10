"use strict";
$(document).ready(function() {
	var total = 0;		// variable for total cost
	$("#menu img").each(function() {
        var oldURL = $(this).attr("src");      // gets the src attribute
        var newURL = $(this).attr("id");       // gets the id attribute

    // preload rollover image		
    var rolloverImage = new Image();
    rolloverImage.src = newURL;
    $(this).mouseover(function() {
		$(this).attr("src", newURL);
        });// end function and mouseover

        $(this).mouseout(function() {
            $(this).attr("src", oldURL);
        }); // end function and mouseout
    }); // end each
	
	// Click event functions for espresso
	$("#menu img").click(function(evt) {		
		var menuItem = $(this).attr("alt");
		switch (menuItem) {
			case "espresso":
				total += 1.95;
				$("#order").append('<option>$1.95 - Espresso</option>');
				$("#total").text("Total: $" + total.toFixed(2));
				break;
			case "latte":
				total += 2.95;
				$("#order").append('<option>$2.95 - Latte</option>');
				$("#total").text("Total: $" + total.toFixed(2));
				break;
			case "cappuccino":
				total += 3.45;
				$("#order").append('<option>$3.45 - Cappuccino</option>');
				$("#total").text("Total: $" + total.toFixed(2));
				break;
			case "coffee":
				total += 1.75;
				$("#order").append('<option>$1.75 - Drip coffee</option>');
				$("#total").text("Total: $" + total.toFixed(2));
				break;
			case "biscotti":
				total += 1.95;
				$("#order").append('<option>$1.95 - Biscotti</option>');
				$("#total").text("Total: $" + total.toFixed(2));
				break;
			case "scone":
				total += 2.95;
				$("#order").append('<option>$2.95 - Scone</option>');
				$("#total").text("Total: $" + total.toFixed(2));
					break;
			default:
				return false;
				break
		evt.preventDefault();		
		} // end switch
	}); // end click

	// Submit the form
	$("#place_order").click(function() {
	$("#order_form").submit();
		
	}); // end click
	
	// Clear the order select list and total p element
	$("#clear_order").click(function() {
		$("#order option").remove();
		$("#total").empty("");
	}); // end click
	
}); // end ready

// == $("#menu a").attr("id", "#images/espresso_info.jpg")