const express=require('express');
const pool=require('../pool');
const router=express.Router();
router.get("/",(req,res)=>{
    var sql="SELECT nid,title,car_img,car_desc FROM `j_news`";
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/banner",(req,res)=>{
    var sql="SELECT bid,banner_img FROM `j_banner`";
    pool.query(sql,[],(err,result)=>{
        if(err)throw  err;
        res.send({code:1,msg:result});
    })
})
module.exports=router;