$(document).ready(function(){
    var lastNinja = undefined;
    $(".buttons button").on("click", function(){
        var color = $(this).html();
        changeImgByColor(color);
    });

    $("#searchColor").on("click", function(){
        var color = $("#textBar").val();
        changeImgByColor(color);
    });

    function changeImgByColor(color){
        if(lastNinja){
            $("#" + lastNinja).addClass("hide");
        }
        if(color === "blue"){ // leonardo
            $("#leonardo").removeClass("hide"); 
            lastNinja = "leonardo";
        }
        else if(color === "orange"){ // michelangelo
            $("#michelangelo").removeClass("hide");
            lastNinja = "michelangelo";
        }
        else if(color === "purple"){ // donatello
            $("#donatello").removeClass("hide");
            lastNinja = "donatello";
        }
        else if(color === "red"){ // raphael
            $("#raphael").removeClass("hide");
            lastNinja = "raphael";
        }
        else{ //notapril
            $("#notapril").removeClass("hide");
            lastNinja = "notapril";
        }
    }
});