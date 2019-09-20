$(function() {
    $('.qiehuan li').click(function () {
        // 添加current类名
        $(this).addClass('current').siblings().removeClass('current');
        // 获取索引值
        var index = $(this).index();
        // 根据索引找对应div盒子
        $('.list .item').eq(index).show().siblings().hide();
    });

    $('.cation-list dd a').click(function() {
        // 添加变绿类名
        $(this).css('color','#31c27c').siblings().css('color','#000');
    })
});
