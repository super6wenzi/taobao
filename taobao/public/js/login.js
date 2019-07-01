//登录方式的选择
$("#code").click(function(){
    $("#code").addClass("method_active");
    $("#box").removeClass("method_active");
    $(".qrcode-login").show();
    $(".login-box").hide();
});
$("#box").click(function(){
    $("#box").addClass("method_active");
    $("#code").removeClass("method_active");
    $(".qrcode-login").hide();
    $(".login-box").show();
});
//登录验证
function vali(selector_input,selector_msg,reg,input,msg_err,e){
    e.preventDefault();
    var txt=$(selector_input);
    var msg=$(selector_msg);
    if(reg.test(txt.val())) {
        msg.html("");
        $(input).css("box-shadow","0 0 0");
    }
    else {
        msg.html(`${msg_err}`);
    }
}
function val(msg_other,msg_now,selector_input_other,msg,msg_html,clear){
    if($(msg_other).html()==msg_now){
        $(selector_input_other).css("box-shadow","1px 1px 10px","1px 1px 5px","1px 1px 10px");
        $(selector_input_other).css("transition","box-shadow 1s");
    }else{
        $(msg).html(msg_html);
        clear.show();
    }
}
var clear_name=$(".item-fore1>.login_uname>.clear-btn");
var clear_pwd=$(".item-fore2>.login_upwd>.clear-btn");
clear_name.hide();
clear_pwd.hide();
$("#loginname").focus(function(e){
    $(".login_upwd").css("box-shadow","0 0 0");
    $(".login_uname").css("border","0");
    setTimeout(function(){
        val(".msg-pwd","密码必须介于6-8位之间！",".login_upwd",".msg-name","请输入用户名",clear_name);
    },500)
});
$("#loginpwd").focus(function(e){
    $(".login_uname").css("box-shadow","0 0 0");
    $(".login_upwd").css("border","0");
    setTimeout(function(){
        val(".msg-name","用户名必须介于3-9位之间！",".login_uname",".msg-pwd","请输入密码", clear_pwd)
    },500);
});
$("#loginname").blur(function(e){
    vali("#loginname",".msg-name",/^\w{3,9}$/,".login_uname","用户名必须介于3-9位之间！",e);
});
$("#loginpwd").blur(function(e){
    vali("#loginpwd",".msg-pwd",/^\w{6,8}$/,".login_upwd","密码必须介于6-8位之间！",e);
});
clear_name.click(function(){
    $("#loginname").val('');
});
clear_pwd.click(function(){
    $("#loginpwd").val('');
});
//登录验证
function postMsg(){
    //console.log(1);
    //登录名和密码验证
    var uname=document.getElementById("loginname").value;
    var upwd=document.getElementById("loginpwd").value;
    $.ajax({
        url:"/login/signin",
        type:"post",
        data:"uname="+uname+"&upwd="+upwd,
        success:function(data){
            //console.log(data);
            if(data.code==401){
                $(".login_uname").css("border","1px solid red");
                $(".msg-name").html("用户名不能为空").css("color","red");
            }
            if(data.code==402){
                $(".login_upwd").css("border","1px solid red");
                $(".msg-pwd").html("密码不能为空").css("color","red");
            }
            if(data.code==301){
                $(".login_uname").css("border","1px solid red")
                .css("box-shadow","0 0 0");
                $(".msg-name").html("请输入正确的用户名").css("color","red");
            }
            if(data.code==201){
                if(upwd==data.upwd){
                    location.href="/index.html";
                }else{
                    $(".login_upwd").css("border","1px solid red")
                    .css("box-shadow","0 0 0");
                    $(".msg-pwd").html("请输入正确的密码").css("color","red");
                }
            }
        }
    });
};