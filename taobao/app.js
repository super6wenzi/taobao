const express=require("express");
const bodyParser=require('body-parser');
const session=require("express-session");
const cors=require("cors");
const router=express.Router();
const details=require("./routes/details.js");
const login=require("./routes/login");
const register=require("./routes/register")

var app = express();
var server = app.listen(3007);
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
    secret:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    resave:false,
    saveUninitialized:true
}));
app.use(cors({
	origin:["http://127.0.0.1:3007"],
	credentials:true
}));
/*使用路由器来管理路由*/
app.use("/details",details);
app.use("/login",login);
app.use("/register",register);  