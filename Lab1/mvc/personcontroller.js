var viewController = new ViewController();

function ViewController(){
	this.personModel = new PersonModel();

	this.updateView = function(){
		var results = document.getElementById("someresult");

		for (var i=0; i < this.personModel.getPersons().length; i++){
			var person = this.personModel.getPersons()[i];
			results.innerHTML += person.name;
		}
	}
	this.addPerson = function(name){
		var newPerson = new Person(name);
		this.personModel.addPerson(newPerson);
		this.updateView();
	}
}