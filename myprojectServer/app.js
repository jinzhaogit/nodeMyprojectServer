const express=require('express');
const app=express();
//加载跨域模块
var cors=require('cors');
//配置跨域模块，允许哪个地址访问
app.use(cors({
    origin:['http:127.0.0.1:8080','http://localhost:8080'],
    credentials:true
}))
// 引入中间件
const  bodyParser=require('body-parser');
//引入路由模块
var index=require("./routes/index");
var cases=require("./routes/hot_cases");
var car=require("./routes/car");
var scart=require("./routes/s_cart");

app.listen(3000,()=>{
    console.log("服务器连接成功");
})
//托管静态资源到public目录下
app.use(express.static('public'));
//使用body-parse中间件
app.use(bodyParser.urlencoded({extended:false}));
//使用路由器管理路由
app.use('/index',index);
app.use('/car',car);
app.use('/scart',scart);