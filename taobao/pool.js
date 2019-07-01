const mysql=require("mysql");
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'wd',
    connectionLimit:10
});
module.exports=pool;