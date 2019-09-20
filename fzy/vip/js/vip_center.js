$(function () {
    // 获取要有切换效果的a标签 注册事件
    $('.fzy_zz a').click(function () {
        $('body,html').animate({
            scrollTop: 300
        })
        // 定义变量储存索引值
        var index = $(this).index();
        // 找到对应div标签的索引 并显示    其他的隐藏
        $('.fzy_banner').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })



    // 获取ul下的a   注册事件
    $('.fzy_gd ul li').hover(function () {
        // 获取索引
        var index_2 = $(this).index();
        // 用找到对应的li  设置显示 隐藏
        $('.fzy_gd ol li').eq(index_2).stop().slideDown(500).siblings().stop().slideUp();
    }, function () {
        var index_2 = $(this).index();
        $('.fzy_gd ol li').eq(index_2).stop().hide();
    })



    // 回到顶部按钮
    function Fn() {
        // 设置到一定位置时 返回顶部按钮 显示
        // 获取某位置元素到顶部的位置
        var top = $('.fzy_cent3').offset().top;
        // 获取卷上去的长度
        var top2 = $('body,html').scrollTop();

        // 判断
        if (top2 >= top) {
            $('.fzy_fh').fadeIn();
        } else {
            $('.fzy_fh').fadeOut();
        }
    }



    // 滑动事件
    $(document).scroll(function () {
        Fn();
        Hdb();
    })


    // 点击事件
    $('.fzy_fh').click(function () {
        // 点击时回到顶部
        $('body,html').animate({
            scrollTop:0
        },1000)
    })



    function Hdb() {
        var one = $(document).scrollTop();

        // 变量保存.diannao距离顶部位置
        var two = $('.fzy_cent').offset().top;
    
        // 判断
        if (one >= two) {
            $('.fzy_ys1').fadeIn();
            $('.fzy_ys2').fadeIn(2000);
            $('.fzy_ys3').fadeIn(2000);
        } 
        
        var three = $('.fzy_cent2').offset().top;
        if (one >= three) {
            $('.fzy_ys4').fadeIn();
            $('.fzy_ys5').fadeIn(2000);
            $('.fzy_ys6').fadeIn(2000);
        } 

        var four = $('.fzy_cent3').offset().top;
        if (one >= four) {
            $('.fzy_ys7').fadeIn(2000);
            $('.fzy_ys8').fadeIn();
            $('.fzy_ys9').fadeIn(2000);
        } 

        var five = $('.fzy_cent4').offset().top;
        if (one >= five) {
            $('.fzy_ys11').fadeIn(2000);
            $('.fzy_ys12').fadeIn(2000);
            $('.fzy_ys13').fadeIn(2000);
        } 
        
    }

    

})