$(document).ready(function(){
  $("#searchform").submit(function(e){
    e.preventDefault();
    $("#images").html("");
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
      tags:$("#search").val(),
      tagmode: "any",
      format: "json"
    }).done(function(data){
      $.each(data.items, function(i, item){
        $("<img>").attr( "src", item.media.m ).appendTo( "#images" );
      });
    });
  });
});
