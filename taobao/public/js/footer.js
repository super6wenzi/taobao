$(function(){
    var $link=$(`<link rel="stylesheet" href="css/footer.css">`);
    $link.appendTo("head");
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#footer")
        }
    })
});