$(function(){
    var $link=$(`<link rel="stylesheet" href="css/header.css">`);
    $link.appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header");
        }
    });
    

});
