$(function () {
    // $.ajax({
    //     type:"get",
    //     url:'http://localhost:3000/index',
    //     dataType:"jsonp",
    //     success:function (res) {
    //         console.log(res);
    //     }
    // });
    $.ajax({
        type:"get",
        url:'http://localhost:3000/index/banner',
        dataType:"jsonp",
        success:function (res) {
            console.log(res);
        }
    });
})