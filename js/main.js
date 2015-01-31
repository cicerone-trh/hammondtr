// creates an onclick function to make the associated block visible, others hidden

function createLink(linkArray, linkid, blockid) {
	
	$(linkid).click(function() {

		// if associated blockid is hidden, unhide it
		if ($(blockid).hasClass("hidden")) { 							
			$(blockid).toggleClass("hidden");
		}

		// hide the other blocks
		for (var i=0; i < linkArray.length; i++) {
			if (linkArray[i].linkid != linkid) {						
				if (!$(linkArray[i].blockid).hasClass("hidden")){	
					$(linkArray[i].blockid).toggleClass("hidden");
				}
			}
		}
	});

}

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
});

