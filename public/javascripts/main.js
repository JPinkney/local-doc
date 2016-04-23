$(function() {
      
    $.get('/modules', function(data){
            var results = data.split("\n");

            $( "#modules" ).autocomplete({
                source: results
            });
    });      

    $("#search-button").on('click', function(){
        $.get("/readme", {filename : $("#modules").val()}, function(data){
            $('.rendered-file').html(data);
        });
    });
    
});   