function ajax({url,type,data,dataType}){
    return new Promise(function(open,err){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                if(dataType!==undefined&&dataType.toLowerCase()==="json")
                    var res=JSON.parse(xhr.responseText);
                else
                    var res=xhr.responseText;
                open(res);
            }
        }
        if(type.toLowerCase()==="get"&&data!==undefined){
            url+="?"+data;
        }
        xhr.open(type,url,true);
        if(type.toLowerCase()==="post")
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        if(type.toLowerCase()==="post"&&data!==undefined)
            xhr.send(data);
        else
            xhr.send(null);
    })
}