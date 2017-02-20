viewController.populateArray();

document.getElementById("add").addEventListener("click",addPerson);

function addPerson(){
	var name = document.getElementById("newperson").value;
	viewController.addPerson(name);
}

document.getElementById("addsmth").addEventListener("click",addSomething);

function addSomething(){
	var input = document.getElementById("something").value;
	var result = document.getElementById("someresult");

	var newEl = document.createElement("INPUT");
	newEl.setAttribute("type","text");
	newEl.setAttribute("placeholder",input);
	result.appendChild(newEl);
}