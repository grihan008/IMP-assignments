var connection = new WebSocket("wss://obscure-waters-98157.herokuapp.com");
connection.onopen = function(){
	
}
connection.onerror = function(error){
	console.log(error);
}
connection.onmessage = function(e){
	// var message = document.createElement("p");
	// var text = document.createTextNode(e.data);
	// message.appendChild(text);

	var chat = document.getElementById("chat");

	//chat.appendChild(message);
	chat.innerHTML+="<p>"+e.data+"</p>";
	chat.scrollTop = chat.scrollHeight;
};

document.getElementById("send").onclick = function(){
	connection.send(document.getElementById("text").value);
};