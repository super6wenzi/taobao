(async function(){
    if(location.search.indexOf("did=")!=-1){
        var did=location.search.split("=")[1];
        var res=await ajax({
            url:"/details",
            type:"get",
            data:`did=${did}`,
            dataType:"json"
        });
        //console.log(res);
        var {pics,product}=res;
        //console.log(pics);
        //console.log(product)
        var html="";
        for(var p of pics){
            var {sm,md,lg}=p;
            html+=`<li><img src="${sm}" data-md="${md}" data-lg="${lg}"/></li>`;
        }
        var ul=document.querySelector("#preview>.preview_left>.preview_thumb>.thumb>ul")
        ul.innerHTML=html;
        ul.style.width=`${76*pics.length}px`;
        //图片的功能实现
        var $prev=$(".preview_left>.preview_thumb>.prev");
        var $next=$(".preview_left>.preview_thumb>.next");
        var $ul=$prev.next().children();
        var moved=0,liWidth=76;
        $next.click(function(){
            var $next=$(this);
            if(!$next.is(":disabled")){
                moved++;
                $ul.css("marginLeft",-liWidth*moved);
                $prev.prop("disabled",false);
                if($ul.children().length-4==moved){
                    $next.prop("disabled",true);
                }
            }
        });
        $prev.click(function(){
            var $prev=$(this);
            if(!$prev.is(":disabled")){
                moved--;
                $ul.css("marginLeft",-liWidth*moved);
                $prev.prop("disabled",false);
                if(moved==0){
                    $prev.prop("disabled",true);
                    $next.prop("disabled",false);
                }
            }
        });
        //放大镜效果
        var $mImg=$(".preview_left>.img_top");
        var $lgImg=$("#img_lg");
        $ul.on("mouseover","img",function(){
            var $img=$(this);
            var md=$img.attr("data-md");
            $mImg.attr("src",md);
            var lg=$img.attr("data-lg");
            $lgImg.css("backgroundImage",`url(${lg})`);
        });
        var $mask=$("#mask"),$smask=$("#super_mask");
        var MSIZEX=176,SMSIZEX=290,MAXX=SMSIZEX-MSIZEX;
        var MSIZEY=176,SMSIZEY=203,MAXY=SMSIZEY-MSIZEY;
        $smask.hover(
            function(){
                $mask.toggleClass("d-none");
                $lgImg.toggleClass("d-none");
            }
        ).mousemove(function(e){
            var top=e.offsetY-MSIZEY/2;
            var left=e.offsetX-MSIZEX/2;
            if(top<0) top=0;else if(top>MAXY) top=MAXY;
            if(left<0) left=0;else if(left>MAXX) left=MAXX;
            $mask.css({top,left});
            $lgImg.css("backgroundPosition",`${-2.6*left}px ${-2.4*top}px`);
        });
        //文字部分（product）
        var html="";
        html+=`<div>
        <h3>
             <span>定制</span>
             ${product.title}
         </h3>
        </div>
        <div class="clear">
            <span>价格：</span>
            <span>￥${product.price.toFixed(2)}</span>
            <a>
                <strong>-</strong>
                <span>交易成功</span>
            </a>
            <a>
                <strong>0</strong>
                <span>累计评价</span>
            </a>
        </div>
        <div>
            <dl>
                <dt>数量</dt>
                <dd>
                    <a href="#">-</a>
                    <input type="text" value="1"/>
                    <a href="#">+</a>
                </dd>
            </dl>
        </div>
        <div>
            <div>
                <button>立即购买</button>
            </div>
            <div>
                <a href="#"><img src="img/car.png" alt=""/>加入购物车</a>
            </div>
        </div>`;
        var div=document.querySelector("#preview>.preview_right>.preview_details");
        div.innerHTML=html;
        //数量加减
        var $input=$(".preview_right dl>dd>input");
        var $apre=$(".preview_right dl>dd>a:first-child");
        var $anext=$(".preview_right dl>dd>a:nth-child(3)");
        var n=$input.prop("value");
        $anext.click(function(){
            var $a=$(this);
            n++;
            $input.prop("value",n);
        });
        $apre.click(function(){
            var $a=$(this);
            if(n>1){
                n--;
                $input.prop("value",n);
            }else{
                $input.prop("disabled",true);
            }
        });
    }
})();