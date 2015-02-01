// creates an onclick function to make the associated block visible, others hidden

function createLink(linkArray, linkid, blockid) {
/*	
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
*/
}



/*
	$(blockid).slideDown("slow");
	$(linkArray[i].blockid).slideUp(300);

*/

$(document).ready(function () {

	// array of links/content blocks
	var linkArray = new Array(); 

	linkArray.push({linkid:"#about-link", blockid:"#about-me"});
	linkArray.push({linkid:"#landing-link", blockid:"#welcome"});
	linkArray.push({linkid:"#eval-link", blockid:"#evaluable"});

	// onclick events for each link
	for (var i = 0; i < linkArray.length; i++) {
		createLink(linkArray, linkArray[i].linkid, linkArray[i].blockid);
	}
	
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
});

