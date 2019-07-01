const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var did=req.query.did;
    var obj={product:{},pics:[]};
    //console.log(did);
    (async function(){
        var sql="SELECT * FROM wd_dress WHERE did=?";
        await new Promise(function(open){
            pool.query(sql,[did],(err,result)=>{
                if(err) throw err;
                obj.product=result[0];
                open();
            })
        })
        var sql="SELECT * FROM wd_dress_pic WHERE dress_id=?";
        await new Promise(function(open){
            pool.query(sql,[did],(err,result)=>{
                if(err) throw err;
                obj.pics=result;
                open();
            })
        })
        res.send(obj);
    })()
});
module.exports=router;