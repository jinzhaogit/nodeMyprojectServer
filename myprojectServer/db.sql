SET NAME UTF8;
DROP DATABASE IF EXISTS car;
CREATE DATABASE car CHARSET=UTF8;
USE car;
CREATE TABLE j_news(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    car_img VARCHAR(255),
    car_desc VARCHAR(255)
);
CREATE TABLE j_banner(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    banner_img VARCHAR(255)
);
CREATE TABLE hot_cases(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(64),
    cases_desc VARCHAR(255)
);
CREATE TABLE hot_news(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(64),
    cases_desc VARCHAR(255),
    add_time DATETIME,
    click INT
);
CREATE TABLE hot_problem(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    cases_desc VARCHAR(255)
);
CREATE TABLE hot_duo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    cases_desc VARCHAR(255)
);
CREATE TABLE hot_biref(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    cases_desc VARCHAR(255)
);
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16),
    upwd VARCHAR(32),
    phone VARCHAR(16)
);
CREATE TABLE forum(
    id INT PRIMARY KEY AUTO_INCREMENT,
    avatar VARCHAR(16),
    uname VARCHAR(16),
    add_time DATETIME,
    zan INT,
    car_desc VARCHAR(255)
);
CREATE TABLE s_cart(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(32),
    price VARCHAR(16),
    number SMALLINT,
    uid INT
);

INSERT INTO j_news VALUES(null,'全新动力组合 新杰德再掀时尚旋风','http://localhost:3000/img/index/news3.jpg','2013年杰德以新概念轿车的姿态入市，它以足够惹眼的外形、灵活多变的空间、独特的车身结构...');

INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s1.jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s1(2).jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s2(2).jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s5(1).jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s4(1).jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s4(2).jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s8(2).jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s9(1).jpg');
INSERT INTO j_banner VALUES(null,'http://localhost:3000/img/index/s3(2).jpg');

INSERT INTO hot_cases VALUES(NULL,'img/2-1601191103334V-lp.7bb968b5.png','出境穷游APP案例分享','【最强出境游神器来袭！出境游尽在穷游！】-最专业的出境旅行指南，随时查看最新海外目的...【最强出境游神器来袭！出境游尽在穷游！】-最专业的出境旅行指南，随时查看最新海外目的...')

INSERT INTO hot_news VALUES(NULL,'http://localhost:3000/img/hot/4-160624103HNN-lp.jpg','智能门禁系统在社区APP生态中扮演什么角色','智能门禁系统在在O2O领域里扮演的角色，青岛APP开发公司指出是连接社区APP平台与用户的重要载体。我们一直都支持和鼓励那些致力于O2O创业或者致力于互联网运营的企业，通过智能社...智能门禁系统在在O2O领域里扮演的角色，青岛APP开发公司指出是连接社区APP平台与用户的重要载体。我们一直都支持和鼓励那些致力于O2O创业或者致力于互联网运营的企业，通过智能社...',now(),'127');

INSERT INTO hot_problem VALUES(NULL,'二次元社交APP的COSER为啥这么火？','从青岛APP开发公司相关数据显示，二次元的用户年龄段主要居中于90、00阶段的年轻人，俗称宅男、腐女大部分都是这个年龄阶段的人群。这...从青岛APP开发公司相关数据显示，二次元的用户年龄段主要居中于90、00阶段的年轻人，俗称宅男、腐女大部分都是这个年龄阶段的人群。这...');
INSERT INTO hot_problem VALUES(NULL,'星火软件专注手机APP开发','NULL');
INSERT INTO hot_problem VALUES(NULL,'提供app制作全方位的设计解决方案','NULL');
INSERT INTO hot_problem VALUES(NULL,'青岛app开发外包服务领导品牌，欢迎交流与合作。','NULL');

INSERT INTO hot_duo VALUES(NULL,'本田汽车开发公司表示很看好H5定制');

INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (1, 'tom', '202cb962ac59075b964b07152d234b70', '15000152639');
INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (2, 'jarry', '202cb962ac59075b964b07152d234b70', '13315263363');
INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (3, 'mary', 'c20ad4d76fe97759aa27a0c99bff6710', '12000771145');
INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (4, 'jer', 'd41d8cd98f00b204e9800998ecf8427e', '12312371125');
INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (5, 'doudou', 'c20ad4d76fe97759aa27a0c99bff6710', '13838384565');
INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (6, 'root', '202cb962ac59075b964b07152d234b70', '11012001199');
INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (7, 'tianniu', 'd41d8cd98f00b204e9800998ecf8427e', '11325866963');
INSERT INTO `user` (`uid`, `uname`, `upwd`, `phone`) VALUES (8, 'wangwang', '202cb962ac59075b964b07152d234b70', '13355652355');


[{
    price:"12.99",
    bg_img:"http://localhost:3000/img/index/bg.png"
},{
    bg_img:"http://localhost:3000/img/index/bg.png",
    car_img:"http://localhost:3000/img/index/bg.png",
    title:["红","绿","蓝","金","白","紫"]
},{
   bg_img:"http://localhost:3000/img/index/bg.png",
   car_img:"http://localhost:3000/img/index/bg.png",
   power_img:"http://localhost:3000/img/index/bg.png",
   car_desc:"好车",
   btn_font:["左","右"],
   show:[
    {show_img:["img1","img2","img3"],
     btn_img:["img1","img2","img3"]
    }]
},{
    bg_img:"http://localhost:3000/img/index/bg.png",
    car_img:"http://localhost:3000/img/index/bg.png",
    btn_font:["左","中","右"],
    btn_img:["img1","img2","img3"]，
    banner_img:["img1","img2","img3","img1","img2","img3"]
},{
    bg_img:"http://localhost:3000/img/index/bg.png",
    list:[
        {title:"5座",price:"12.99",list_desc:"便宜车"},
        {title:"5座",price:"12.99",list_desc:"便宜车"},
        {title:"5座",price:"12.99",list_desc:"便宜车"}
    ]
},{
    bg_img:"http://localhost:3000/img/index/bg.png",
    title:"东风三圣殿",
    news_desc:"s时空裂缝减少的",
    news_img:"img1"
}]