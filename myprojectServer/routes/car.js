const express=require('express');
const pool=require('../pool');
const router=express.Router();
router.get("/lists",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno)pno=1;
    if(!pageSize)pageSize=8;
    var sql="SELECT id,avatar,uname,add_time,zan,car_desc FROM `forum` LIMIT ?,?";
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        //res.writeHeader(200,{"Access-Control-Allow-Origin":'*'});
        //res.write(JSON.stringify(result));
        //res.end();
        res.send({code:1,msg:result});
    })
});
module.exports=router;