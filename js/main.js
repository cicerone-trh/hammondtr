// h3 link function:

function createFamilyLink(linkFamily, linkid, blockid, extra) {
	$(linkid).click(function() {

		// default zone, header of links
	
		// slideup the other blocks; i=0 is default block
		for (var i=1; i < linkFamily.length; i++) {
			if (linkFamily[i].linkid != linkid) {
				$(linkFamily[i].linkid).removeClass("activeLink");
				$(linkFamily[i].blockid).slideUp();
			} 
		}

		// slidedown the targetblock
		if (!$(blockid).is(":hidden")){
			$(blockid).slideUp();
			$(linkid).removeClass("activeLink");
			$(linkFamily[0].blockid).delay(400).slideDown(300);
		} else {
			$(linkFamily[0].blockid).slideUp();
			$(linkid).addClass("activeLink");
			$(blockid).delay(400).slideDown(300);
		}

		// if there's extra functionality, such as code navigation;
		

	});
}



$(document).ready(function () {


// about page links:
	var aboutLinks = [{blockid:"#about-intro"}];

	aboutLinks.push({
		linkid:"#aprog-link",
		blockid:"#about-programming"
	});
	aboutLinks.push({
		linkid:"#agame-link",
		blockid:"#about-games"
	});
	aboutLinks.push({
		linkid:"#adrive-link",
		blockid:"#about-driving"
	});

	for (var i=0; i < aboutLinks.length; i++) {
		createFamilyLink(
			aboutLinks, 
			aboutLinks[i].linkid, 
			aboutLinks[i].blockid
		);
	}


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
			$("#oop").delay(400).slideDown(300, function(){
				$("#program-link").addClass("activeLink").siblings().removeClass("activeLink");
				$("#juggleFestSource").unbind("load");
				$("#juggleFestSource").attr('src', 'resources/Program.cs.html');
				$("#juggleFestSource").load(function() {
					$("#juggleFestSource").contents()
										  .find("html, body")
										  .delay(300)
										  .animate({ scrollTop: $("#juggleFestSource").contents().find("#main").position().top }, 'slow');
				})
			});

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



// SOURCE PAGE LINKS
	// aesthetic
	$("#evaluable li").click(function() {
		$(this).addClass("activeLink").siblings().removeClass("activeLink");
	});


	// individual links that need to be turned into a single function

	$("#program-link").click(function() {
		$("#juggleFestSource").unbind("load");
		$("#juggleFestSource").attr('src', 'resources/Program.cs.html');
		$("#juggleFestSource").load(function() {
			$("#juggleFestSource").contents()
								  .find("html, body")
					  			  .animate({ scrollTop: $("#juggleFestSource").contents().find("#main").position().top }, 'slow');
		});
	});

	$("#coord-link").click(function() {
		$("#juggleFestSource").unbind("load");
		$("#juggleFestSource").attr('src', 'resources/FestivalCoordinator.cs.html');
		$("#juggleFestSource").load(function() {
			$("#juggleFestSource").contents()
								  .find("html, body")
								  .animate({ scrollTop: "100px" }, 'slow');
		});
	});

	$("#jugg-link").click(function() {
		$("#juggleFestSource").unbind("load");
		$("#juggleFestSource").attr('src', 'resources/Juggler.cs.html');
		$("#juggleFestSource").load(function() {
			$("#juggleFestSource").contents()
								  .find("html, body")
								  .animate({ scrollTop: "100px" }, 'slow');
		});
	});

	$("#circ-link").click(function() {
		$("#juggleFestSource").unbind("load");
		$("#juggleFestSource").attr('src', 'resources/Circuit.cs.html');
		$("#juggleFestSource").load(function() {
			$("#juggleFestSource").contents()
								  .find("html, body")
								  .animate({ scrollTop: "100px" }, 'slow');
		});
	});


	// link scrolling to problem specified	
	$("#prob-link").click(function() {
		$("#coord-link").addClass("activeLink").siblings().removeClass("activeLink");

		$("#juggleFestSource").unbind("load");
		$("#juggleFestSource").attr('src','resources/FestivalCoordinator.cs.html');
		$("#juggleFestSource").load(function() {
			$("#juggleFestSource").contents()
					  			  .find("html, body")
					  			  .animate({ scrollTop: $("#juggleFestSource").contents().find("#sortingComment").position().top }, 'slow');
		});
	});
});

// the code I need is: 
	// change frame's source
	// once the source has changed, scroll it to a certain position


	 

