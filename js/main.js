$(document).ready(function () {
	
/**************************************
 * top nav functionality:
 *************************************/

	addHomeLink("#about-link", "#about-me");
	addHomeLink("#eval-link", "#evaluable");
	addHomeLink("#landing-link", "#welcome");

/**************************************
 * home page slider:
 *************************************/
//	var options = { $AutoPlay: true, $FillMode: 4, $SlideDuration: 1500, $AutoPlayInterval: 2500 };
//  var jssor_slider1 = new $JssorSlider$('slider1_container', options);

/**************************************
 * about page links:
 *************************************/
	var aboutLinks = [{blockid:"#about-intro"}];

	aboutLinks.push({
		linkid:"#aprog-link",
		blockid:"#about-programming"
	});
	aboutLinks.push({
		linkid:"#agame-link",
		blockid:"#about-games",
	});
	aboutLinks.push({
		linkid:"#adrive-link",
		blockid:"#about-driving"
	});

	for (var i=0; i < aboutLinks.length; i++) {
		createFamilyLink(
			aboutLinks, 
			aboutLinks[i].linkid, 
			aboutLinks[i].blockid,
			aboutLinks[i].extra
		);
	}

/**************************************
 * evaluable h3 links:
 *************************************/
	var evalLinks = [{blockid:"#eval-intro"}];

	evalLinks.push({
		linkid:"#oop-link",
		blockid:"#oop",
		extra: function() {
			$("#program-link").addClass("activeLink").siblings().removeClass("activeLink");
			$("#juggleFestSource").unbind("load");
			$("#juggleFestSource").attr('src', 'resources/Program.cs.html');
			$("#juggleFestSource").load(function() {
				$("#juggleFestSource").contents()
									  .find("html, body")
									  .delay(300)
									  .animate({ scrollTop: $("#juggleFestSource").contents().find("#main").position().top }, 'slow');
			})
		}
	});
	evalLinks.push({
		linkid:"#asm-link",
		blockid:"#asm",
		extra: function() {
			$("#asm-source").attr('src', 'resources/gtt0.asm.html');
		}
	});
	evalLinks.push({
		linkid:"#web-link",
		blockid:"#web-ex"
	});

	for (var i=0; i < evalLinks.length; i++) {
		createFamilyLink(
			evalLinks, 
			evalLinks[i].linkid, 
			evalLinks[i].blockid,
			evalLinks[i].extra
		);
	}

/**************************************
 * OOP source code links:
 *************************************/
	// this is really bad. And also the changing active based on in-line. I'm aware.
	$("#evaluable li").click(function() {
		$(this).addClass("activeLink").siblings().removeClass("activeLink");
	});

	// individual source files
	$("#program-link").click(function() {
		setSourceWindow('#juggleFestSource','resources/Program.cs.html');
	});

	$("#coord-link").click(function() {
		setSourceWindow('#juggleFestSource','resources/FestivalCoordinator.cs.html');
	});

	$("#jugg-link").click(function() {
		setSourceWindow('#juggleFestSource','resources/Juggler.cs.html');
	});

	$("#circ-link").click(function() {
		setSourceWindow('#juggleFestSource','resources/Circuit.cs.html');
	});

	// in-line links	
	$("#prob-link").click(function() {
		$("#coord-link").addClass("activeLink").siblings().removeClass("activeLink");
		setSourceWindow('#juggleFestSource','resources/FestivalCoordinator.cs.html', 53);
	});

	$("#recursive-link").click(function() {
		$("#coord-link").addClass("activeLink").siblings().removeClass("activeLink");
		setSourceWindow('#juggleFestSource','resources/FestivalCoordinator.cs.html', 112);
	});

/**************************************
 * web dev links:
 *************************************/

	var webLinks = [{blockid:"#example-overview"}];

	webLinks.push({
		linkid:"#a-preview",
		blockid:"#a-example"
	});
	webLinks.push({
		linkid:"#b-preview",
		blockid:"#b-example"
	});
	webLinks.push({
		linkid:"#c-preview",
		blockid:"#c-example"
	});

	for (var i=0; i < webLinks.length; i++) {
		createFamilyLink(
			webLinks, 
			webLinks[i].linkid, 
			webLinks[i].blockid,
			webLinks[i].extra
		);
	}

}); // end document onload


function addHomeLink(linkid, blockid) {
	$(linkid).click(function() {

		// changing background widths
		$("#backgroundImages").find(".active").removeClass("active");
		$("#backgroundImages").find('[data-order="' + $(linkid).data("order")+'"]')
			.addClass("active");

		// sliding content blocks

		var inDir, outDir;
		if (!$(linkid).hasClass("activeUnit")) {
			
			// determine direction
			if ($(linkid).data("order") > $('.activeUnit').data("order")) {
				outDir = "left";	
				inDir = "right";
			} else {
				outDir = "right";
				inDir = "left";
			}

			// changing linkness
			$('.activeUnit').removeClass("activeUnit");
			$(linkid).addClass("activeUnit");

			// slide out out
			$(".active-component").hide('slide', {direction: outDir}, 300);
			$(".active-component").removeClass("active-component");
			
			// slide this in
			$(blockid).delay("300").show('slide', {direction: inDir}, 300);
			$(blockid).addClass("active-component");
		}
	});
}




function setSourceWindow(sourceFrame, file, line) {
	var targetLine = "html,body";

	if (line) {
		// $("span[class*='lnr']:contains(line)");
		targetLine = "span[class*='lnr']:contains('" + line + "')";
	}

	// if src is same as current, don't reload, just scroll
	if ($(sourceFrame).attr('src') == file) {
		$(sourceFrame).contents()
						  .find("html, body")
						  .animate({ scrollTop: $(sourceFrame).contents()
															  .find(targetLine)
															  .position().top }, 'slow');
	} else {
		$(sourceFrame).unbind("load");
		$(sourceFrame).attr('src', file);
		$(sourceFrame).load(function() {
			$(sourceFrame).contents()
						  .find("html, body")
						  .animate({ scrollTop: $(sourceFrame).contents()
															  .find(targetLine)
															  .position().top }, 'slow');
		});	
	}
}

function createFamilyLink(linkFamily, linkid, blockid, extra) {
	$(linkid).click(function() {
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
			$(blockid).delay(400).slideDown(300, extra);
		}
	});
}

function resetLinkFamily(linkFamily) {
	for (var i=1; i < linkFamily.length; i++) {
		$(linkFamily[i].linkid).removeClass("activeLink");
		$(linkFamily[i].blockid).slideUp();
	}
	$(linkFamily[0].blockid).delay(400).slideDown(300);
}
