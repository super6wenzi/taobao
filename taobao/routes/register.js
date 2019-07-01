const express=require('express');
const router=express.Router();
const pool=require('../pool.js');
router.post('/issign',(req,res)=>{
	var obj=req.body;
	var uname=obj.uname;
	var sql='SELECT `upid`, `uname`, `upwd`, `phone`, `email` FROM `wd_dress_users` WHERE uname=?';
	pool.query(sql,[uname],(err,result)=>{
		if(err) throw error;
		res.send(result);
	});
});
router.post('/sign',(req,res)=>{
	var obj=req.body;
	var uname=obj.uname;
	var upwd=obj.upwd;
	var phone=obj.phone;
	var email=obj.email;
	var sql='INSERT INTO wd_dress_users VALUES(null,?,?,?,?)';
	pool.query(sql,[uname,upwd,phone,email],(err,result)=>{
		if(err) throw error;
		res.send(result);
	});
});
module.exports=router;