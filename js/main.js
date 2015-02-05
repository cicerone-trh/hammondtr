
$(document).ready(function () {


	var options = { $AutoPlay: true, $FillMode: 4, $SlideDuration: 1000, $AutoPlayInterval: 4000 };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

	
	// onclick events for the top nav buttons

	$("#about-link").click(function() {
		$("#evaluable").slideUp();
		$("#welcome").slideUp();
		$("#about-me").delay(400).slideDown(300);
	});

	$("#eval-link").click(function() {
		$("#about-me").slideUp();
		$("#welcome").slideUp();
		$("#evaluable").delay(400).slideDown(300);
	});

	$("#landing-link").click(function() {
		$("#about-me").slideUp();
		$("#evaluable").slideUp();
		$("#welcome").delay(400).slideDown(300);
	});


	// eval-intro
	// asm-link
	// asm
	// oop-link, oop
	// web-link, web-ex

	$("#oop-link").click(function() {
		if ($("#oop").is(":hidden")) {
			$("#eval-intro").slideUp();
			$("#asm").slideUp();
			$("#web-ex").slideUp();
			$("#oop").delay(400).slideDown(300);
			$("#juggleFestSource").attr('src', 'resources/FestivalCoordinator.cs.html');
		} else {
			$("#oop").slideUp();
			$("#eval-intro").delay(400).slideDown(300);
		}
	});

	$("#asm-link").click(function() {
		if ($("#asm").is(":hidden")) {
			$("#eval-intro").slideUp();
			$("#oop").slideUp();
			$("#web-ex").slideUp();
			$("#asm").delay(400).slideDown(300);
		} else {
			$("#asm").slideUp();
			$("#eval-intro").delay(400).slideDown(300);
		}
	});

	$("#web-link").click(function() {
		if ($("#web-ex").is(":hidden")) {
			$("#eval-intro").slideUp();
			$("#asm").slideUp();
			$("#oop").slideUp();
			$("#web-ex").delay(400).slideDown(300);
		} else {
			$("#web-ex").slideUp();
			$("#eval-intro").delay(400).slideDown(300);
		}
	});
});

		 

/* CODE THAT HAS BEEN DISCARDED 
	 // array of links/content blocks
	var linkArray = new Array(); 

	linkArray.push({linkid:"#about-link", blockid:"#about-me"});
	linkArray.push({linkid:"#landing-link", blockid:"#welcome"});
	linkArray.push({linkid:"#eval-link", blockid:"#evaluable"});

	// onclick events for each link
	for (var i = 0; i < linkArray.length; i++) {
		createLink(linkArray, linkArray[i].linkid, linkArray[i].blockid);
	}

// creates an onclick function to make the associated block visible, others hidden

function createLink(linkArray, linkid, blockid) {
	$(linkid).click(function() {


		// first, hide the other blocks
		for (var i=0; i < linkArray.length; i++) {
			if (linkArray[i].linkid != linkid) {						
				if (!$(linkArray[i].blockid).hasClass("hidden")){	
					$(linkArray[i].blockid).toggleClass("hidden");
				}
			}
		}

		// if associated blockid is hidden, unhide it
		if ($(blockid).hasClass("hidden")) { 							
			$(blockid).toggleClass("hidden");
		}
	});
}



	$(blockid).slideDown("slow");
	$(linkArray[i].blockid).slideUp(300);


*/

