

//鼠标进入后img放大，离开img回复原样 鼠标进去之后添加颜色
$('.s_c_one img').mouseenter(function () {
    $(this).addClass('s_img_ani').addClass('s_img_yy').removeClass('l_img_ani');
    // $('.s_c_one .s_c_o_cont .s_img i').addClass('s_img_yy_add');
})

$('.s_c_one img').mouseleave(function () {
    $(this).removeClass('s_img_ani').removeClass('s_img_yy').addClass('l_img_ani');
    // $('.s_c_one .s_c_o_cont .s_img i').removeClass('s_img_yy_add');
})    


//电梯导航
getDiv();
function getDiv() {
    // 页面滚动出去一段距离，让电梯导航显示
    // 获取卷起距离
    var a = $(document).scrollTop();
    //判断
    if (a >= $('.s_c_one ').offset().top) {
        $('.fixedtool').fadeIn();
    } else {
        $('.fixedtool').fadeOut();
    }

    // if(a<=$('.footer').offset().top){
    //     $('.fixedtool').fadeOut();
    // }
}
// 添加滚动事件，加给window
$(window).scroll(function () {
    getDiv();

    // 滚动的过程中，如果到达某个div就要让对应的li显示效果
    // 知道当前这个盒子的索引值，通过索引值找到li
    // 卷起距离和每一个盒子到顶部距离比较，如果超过顶部的距离，说明到达这个盒子，此时就得让对应的li显示样式
    var top = $(document).scrollTop();
    $('.floor>div').each(function (i, elm) {
        if (top >= $(elm).offset().top) {
            $('.fixedtool .s_list_ul_li').eq(i).addClass('current').siblings().removeClass('current');
            // $('.fixedtool .s_list_ul_li').eq(i).css('color','#31c27c').siblings().css('color','');
        }
    })


})

// 点击电梯导航，页面到指定的位置
$('.fixedtool li').click(function () {
    // $(this).addClass('current');
    console.log($(this));
    $(this).addClass('current').siblings().removeClass('current');
    // $(this)[0].css('color','#31c27c').siblings().css('color','');
    //1.li 对应的索引值
    var index = $(this).index();
    //2.找到对应的div及顶部的位置
    var topZhi = $('.floor>div').eq(index).offset().top;
    // 3.修改卷起的距离
    $('body,html').stop().animate({
        scrollTop: topZhi
    }, function () {
        $('this').addClass('current').siblings().removeClass('current');
    })
    

})


	//返回顶部
$('.fanhui').click(function () {
    // $(this).css('color','#31c27c');
    $('html,body').animate({
        scrollTop: 0
    })
})

