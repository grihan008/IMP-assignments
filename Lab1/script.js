document.getElementById('addPerson').addEventListener("click",function(){
  document.getElementsByClassName('list')[0].innerHTML+="<p>"+document.getElementById('person').value+"</p>";
});
