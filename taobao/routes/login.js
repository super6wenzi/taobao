const express=require('express');
const router=express.Router();
const pool=require('../pool.js');
router.post('/signin',(req,res)=>{
	var obj=req.body;
	var uname=obj.uname;
	if(!uname){
		res.send({code:401,msg:'uname required'});return;
	};
	var upwd=obj.upwd;
	if(!upwd){
		res.send({code:402,msg:'upwd required'});return;
	};
	var sql='SELECT * FROM wd_dress_users WHERE uname=?';
	pool.query(sql,[uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			req.session.uname=result[0].uname;
			res.send({code:201,uname:result[0].uname,upwd:result[0].upwd});
		}else{
			res.send({code:301,msg:'uname err'});
		}
		
	});
});
router.post("/islogin",(req,res)=>{
	var uname=req.session.uname;
	if(uname!=undefined){
		res.send({code:201,uname:uname});
	}else{
		res.send({code:401,msg:'is not login'});
	}
});
router.post("/signout",(req,res)=>{
	req.session.uname=undefined;
	res.send();
});
module.exports=router;