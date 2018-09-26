const express=require('express');
const pool=require('../pool');
const router=express.Router();
router.get("/",(req,res)=>{
    var sql="SELECT id,img_url,title,price,number,uid FROM `s_cart`";
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
router.get("/add",(req,res)=>{
    var img_url=req.query.img_url;
    var title=req.query.title;
    var price=req.query.price;
    var number=req.query.number;
    var uid=req.query.uid;
    if(uid&&title){
        var sql="INSERT INTO s_cart VALUES(null,?,?,?,?,?)";
        pool.query(sql,[img_url,title,price,number,uid],(err,result)=>{
            if(err)throw err;
            res.send({code:1});
        })
    }
});
router.get("/del",(req,res)=>{
    var id=req.query.id;
    console.log(id);
    var sql="DELETE FROM s_cart WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:result});
    })
});
router.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="SELECT uid,uname,upwd FROM `user` WHERE uname=? AND upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result});
    })
});
module.exports=router;