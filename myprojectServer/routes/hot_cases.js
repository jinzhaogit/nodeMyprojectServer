/**
 * Created by web on 2018/9/12.
 */
const express=require('express');
const pool=require('../pool');
const router=express.Router();
router.get("/",(req,res)=>{
    var sql="SELECT id,img_url,title,cases_desc FROM `hot_cases`";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/news",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno)pno=1;
    if(!pageSize)pageSize=8;
    var sql="SELECT id,img_url,title,cases_desc,add_time,click FROM hot_news LIMIT ?,?";
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/problem",(req,res)=>{
    var sql="SELECT id,title,cases_desc FROM `hot_problem`";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/duo",(req,res)=>{
    var sql="SELECT id,title FROM `hot_duo`";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/biref",(req,res)=>{
    var sql="SELECT * FROM `hot_biref`";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
module.exports=router;