$(document).ready(function(){
  $('#getlist').click(function(){
    $.ajax({
      url: 'https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp',
      dataType: 'jsonp'
    });
  });
});

function jsonCallback(data){
  $('#list').html("");
  data.forEach(function(item){
    $('#list').append('<p>'+item.name+' <a href="mailto:'+item.email+'">'+item.email+'</a></p>');
  });
}
