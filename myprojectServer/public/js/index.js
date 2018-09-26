$(function(){
    /*************************动态导航栏***********************/
    $('#nav').on('mouseenter','li',e=>{
        var $li=$(e.target);
        $li.addClass('nactive').siblings().removeClass();
        var i=$li.index();
        $('.nav-limit>.limove').animate({left:i*104+140},180);
    });
    $('#nav').mouseleave(function(){
     $('.nav-limit>.limove').css('left',140);
    })
    //楼梯导航
    $('#nav').on('click','li',function(){
        var $i=$(this).index();
        var $offsetTop=$("body").find('.car-title').eq($i).offset().top;
        $('html').animate({
            scrollTop:$offsetTop-120
        },500);
    })
    //下拉菜单
    var downtimer=null;
    $('.navlist').mouseenter(function(){
        $('.downDiv').slideDown();
    }).mouseleave(function(){
        downtimer=setTimeout(function(){
            $('.downDiv').slideUp();
        },1000);
    });
    $('.downDiv').mouseenter(function(){
        clearTimeout(downtimer);
    }).mouseleave(function(){
        downtimer=setTimeout(function(){
        $('.downDiv').slideUp();
    },1000);
    });
   /***************************汽车换色***************************/
   $('#outer').on('click','.outer-btn>ul>li',function(){
       var $btn=$(this);
       var $c=$btn.index();
       var $carImg=$('#outer>.outer-car>div').eq($c);
       //标签页添加焦点样式
       $btn.children(1).addClass('oactive').siblings().removeClass('oactive');
       //汽车图片切换路径
       $carImg.attr('src',`../public/img/index/co${$c+1}_020000.png`);
       //汽车过来时其他汽车隐藏并回去
       $carImg.animate({left:0,opacity:1}).siblings().css({left:500,opacity:0});
       //$('#outer>.outer-bg>img').attr('src',`../public/img/index/bg${$c}.png`);
   })
    /***************************彭拜动力******************************/
    $('#flie .power .power-start .power-s').click(function(e){
        var $ps=$(e.target);
        //点击时隐藏按钮
        $ps.css('display','none').siblings().hide();
        //给轮胎增加动画
        $('#flie .power .power-car .lt').addClass('ltAddAnimate');
        //改变背景图的位置(增加right会受原来left影响)
        $('#flie .power .hbg').removeClass('hbg1').animate({
           //left:'auto',
           //right:0
            marginLeft:-3600
        },2000,function(){
            //让汽车向右冲刺运动
            $('#flie .power .power-car').animate({
                left:'3000'
            },350,function(){
                //让详情页面出现
                $('#flie .power-con').css('zIndex','50');
                //发动机和描述文字左左右出现运动
                $('#flie .power-item .img1,#flie .power-item .power-right').animate({
                    marginLeft:0
                });
            });
        });
    })
    /************************宽享空间********************************/
    $('#space').click(function(e){
        var $tar=$(e.target);
        if($tar.get(0).nodeName=="A"){
            $('#space .space-bg,#space .space-show').show();
        }
        //给按钮切换图片
        if($tar.parent().get(0).nodeName=="LI"){
            var imgSrc=$tar.parent().get(0).dataset.img;
            $('.show-img>img').attr('src',`../public/img/index/${imgSrc}.jpg`);
        }
    });
    //点击屏幕边缘区隐藏显示内容
    $('.space-bg').click(function(){
        $('#space .space-bg,#space .space-show').hide();
    })
    //鼠标移入详情按钮加入动画
    $('#space .space-show .show-btn li').hover(
        function(){
            $(this).children('.space-list').addClass('space-listActive');
        },
        function(){
            $(this).children('.space-list').removeClass('space-listActive');
            $('.show-btn li:nth-child(1)').children('.space-list').addClass('space-listActive');
        }
    );

    //车身移动多方位隐藏显示
    //var isStop=false;
    var $movebg=$('.movecar .movebg');
    $movebg.mousedown(function(){
        isStop=true;
        $(document).mousemove(function(){
            if(isStop){
                var x=$movebg.offset().left;
                console.log(x);
                x=x<0?0:x;
                x=x>820?820:x;
                //console.log(x);
                $movebg.css('left',x);
                $('.space-img').css('width',x);
            }
        });
    });
    $movebg.mouseup(function(){
        isStop=false;
    });


    /**************************车型亮点*******************************/
    //点击弹出详情框
    $('.bling-btn li>a>p').click(function(){
        $('.carBtnClick').show();
        $(".mubu").show();
    })

    //无缝滚动
    //var $blingLi=$blingUl.find('li:first');
    //var $blingUlWidth=$blingLi.width()*($blingUl.find('li').length);
    var step=5;
    var $blingUl=$('.bling-show').find('ul:first');
    var $blingUl2=$('.bling-show').find('ul:last');
    var timer = setInterval(function(){
        var $blingUlLeft=parseInt($blingUl.css('marginLeft'));
        //var $blingUl2Left=parseInt($blingUl2.css('marginLeft'));
        if($blingUlLeft<=-2412){
            step = 0;
            $blingUl.css('marginLeft',4814);
        }
        step-=1;
        $blingUl.css('marginLeft',step);
        $blingUl2.css('marginLeft',step);
    },30);

    /**************************车型配置*******************************/
    $('#peizhi .peizhiLi-bg').mouseenter(function(){
        $(this).css('backgroundImage','url(../public/img/index/peizhi_listbg2.png)');
    });
    $('#peizhi .peizhiLi-bg').mouseleave(function(){
        $(this).css('backgroundImage','url(../public/img/index/peizhi_listbg.png)');
    });
    //点击弹出详情框
    $('.peizhi-btn').click(function(){
        $('.carBtnClick').show();
        $(".mubu").show();
    })
    /**************************弹出详情框****************************/
    //关闭
    $('.carBtnClick>.close').click(function(){
        $(this).parent().hide();
        $(".mubu").hide();
    })
    /***************************右侧固定导航栏************************/
    //移入图标对应文字出现
    var $r=0;
    $('.right-flex>ul>li').hover(function(){
       $r=$(this).index();
        $('.right-flex p').eq($r).stop().animate({right:43});
    },function(){
        $('.right-flex p').eq($r).stop().animate({right:-143});
    });
    //回到顶部
    $('.backtop').click(function(){
        $('html').animate({
            scrollTop:0
        },500);
    })
    /*************************滚动页面吸顶盒导航获焦*******************/
    $(window).scroll(function(){
        var scrollTop=$("body,html").scrollTop();
        //吸顶盒
        if(scrollTop>=800){
            $('#nav').addClass('navfixed');
        }else{
            $('#nav').removeClass('navfixed');
        }
        //导航栏获焦
        var $fs=$('.car-title');
        $fs.each((i,f)=>{
            var offsetTop=$(f).offset().top;
            if(innerHeight/2+scrollTop>offsetTop){
                $(".nav-limit>.nav-info>li").eq(i).addClass('nactive').siblings().removeClass('nactive');
            }
        });
        //加载宽享空间左右滑动
        if(scrollTop>=$('#space').offset().top-200 && scrollTop<=$('#bling').offset().top+200){
            $('.movecar .movebg').animate({
                left:96
            },4000,function(){
                //setTimeout(function(){
                    $(this).animate({
                        left:820
                    },4000);
                //},500);
            });
            $('.space-img').animate({
                width:96
            },4000,function(){
                //setTimeout(function(){
                    $(this).animate({
                        width:820
                    },4000);
                //},500);
            });
        }

    })
    /*************************弹出视频框******************************/
    //关闭
     $('.carBtnVideo>.close').click(function(){
        $(this).parent().hide();
        $(".mubu").hide();
     });
     $('.tvc>.tvc-bg>.video>img,.newsvideo').click(function(){
         $(".carBtnVideo").show();
         $(".mubu").show();
     })
    /************************信贷计算器弹出框************************/
    $('.cti-conter-container .close').click(function(){
        $(this).parent().hide();
        $(".mubu").hide();
    });
    $('.xindai').click(function(){
        $(".cti-conter-container").show();
    })
    //开始计算
    $('.ctibtn').click(function(){
        var res=$('.ctiPrice1').val()+$('.ctiPrice5').val()+$('.ctiPrice6').val()+$('.ctiPrice7').val()-$('.ctiPrice8').val()+$('.ctiPrice9').val();
        $('.ctibtn-res').html(`计算结果为 ￥ ${res} 万元`);
    })
    /************************幕布**********************************/
    $('.xindai').click(function(){
        $('.mubu').show();
    })
 })