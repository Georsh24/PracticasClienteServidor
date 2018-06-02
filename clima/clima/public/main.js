$(function(){
    var $h1 =$("h1");
    var $zip = $("input[name='zip']");
    $("form").on("submit",function(event) {
        event.preventDefault();
        var zipCode = $.trim($zip.val());
        $h1.text("cargando...");
        var request = $.ajax({
            url:"/" + zipCode,
            dataType:"json"
        });
        request.done(function(data){
            var temperatura = data.temperature;
            $h1.html("la temperatura es" + temperature + "&#175;en " + zipCode + ".")

        });
        request.fail(function(){
            $h1.text("error!");

        })
        
    })
})