function hideOutfits() {
	var outfitElements = document.getElementsByClassName('outfit');
	for (var i = 0; i < outfitElements.length; i++) {
		outfitElements[i].style.display = 'none';
	}
}
// s1 outfit
let s1 = document.getElementById('s1');/* get #s1 outfit */
/* the process: */
s1.onclick = function() {
	document.getElementById('body').style.display = "none";
	hideOutfits();
	document.getElementById('o1').style.display = 'block';
};

// s2 outfit
let s2 = document.getElementById('s2');/* get #s2 outfit */
/* repeat process */
s2.onclick = function() {
	document.getElementById('body').style.display = "none";
	hideOutfits();
	document.getElementById('o2').style.display = 'block';
};

// s3 outfit
let s3 = document.getElementById('s3');/* get #s3 outfit */
/* repeat process */
s3.onclick = function() {
	document.getElementById('body').style.display = "none";
	hideOutfits();
	document.getElementById('o3').style.display = 'block';
};

// s4 outfit
let s4 = document.getElementById('s4');/* get #s4 outfit */
/* repeat process */
s4.onclick = function() {
	document.getElementById('body').style.display = "none";
	hideOutfits();
	document.getElementById('o4').style.display = 'block';
};

// s5 outfit
let s5 = document.getElementById('s5');/* get #s5 outfit */
/* repeat process */
s5.onclick = function() {
	document.getElementById('body').style.display = "none";
	hideOutfits();
	document.getElementById('o5').style.display = 'block';
};

// strip outfit
let strip = document.getElementById('strip-button');/* get #strip-button */
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	hideOutfits();
	/* show #body */
	document.getElementById('body').style.display = "block";
};