$(function(){
    //汽车换色
    $('.cti-colour-toggle-btn>ul>li').mouseover(function(){
       var $i=$(this).index();
        $('.cti-colour-car-img>img').eq($i).addClass('d-show').siblings().removeClass('d-show');
    });
    //回到顶部
    $('.cti-btn-gotop').click(function(){
        $("html,body").animate({scrollTop:0},500);
    })
})