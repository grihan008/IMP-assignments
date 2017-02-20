// function storageAvaliable(type) {
// 	try {
// 		var storage = window[type],
// 			x = '__storage_test__';
// 		storage.setItem(x, x);
// 		storage.removeItem(x);
// 		return true;
// 	}
// 	catch(e) {
// 		return false;
// 	}
// }

// if (storageAvaliable('sessionStorage')) {
// 	alert("It's working");
// }
// else {
// 	alert("No local storage avaliable");
// }
var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');

if (!localStorage.getItem("bgcolor")){
	populateStorage();
} else {
	setStyles();
}

function setStyles() {
	var currentColor = localStorage.getItem('bgcolor');
	var currentFont = localStorage.getItem('font');

	document.getElementById('bgcolor').value = currentColor;
	document.getElementById('font').value = currentFont;

	htmlElem.style.backgroundColor = '#' + currentColor;
	pElem.style.fontFamily = currentFont;
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);

  setStyles();
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;