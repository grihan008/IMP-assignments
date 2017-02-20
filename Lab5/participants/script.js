$(document).ready(function(){
  $('#addPerson').click(function(){
    $('.list').append("<p>"+$("#person").val()+"</p>");
  });
});
