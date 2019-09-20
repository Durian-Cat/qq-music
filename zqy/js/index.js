


// $(document).ready(function(){
//         window.
//     })
// document.querySelector('b_xin_bj_top').ready(function(){

// })

$(function () {
    // 开场动画效果
    $(document).ready(function () {
    $('.b_xin_bj_top').fadeIn();
    $('.body_top_b_xin_bj_top1').fadeIn();
    $('.body_top_b_xin_bj_top2').fadeIn(4000);


    
    var id = setTimeout(function () {
        $('.b_xin_bj_top').fadeOut(1000);
        $('.body_top_img').fadeOut(1000);
        $('.b_xin ').fadeIn();
    }, 6000)
    $('.b_xin').fadeIn(6000);
    })
    // 动画效果结束
    // 更换开始

    $('.b_boximg_bj').mouseenter(function () {
        $('.b_box_bj1').stop().fadeIn(500);
    });
    $('.b_boximg_bj').mouseleave(function () {
        $('.b_box_bj1').stop().fadeOut(500);
    });


    $('.b_box_bj1').mouseenter(function () {
        $('.b_box_bj1').stop().fadeIn(500);
    });
    $('.b_box_bj1').mouseleave(function () {
        $('.b_box_bj1').stop().fadeOut(500);
    });




    $('.b_box_bj2 li').click(function () {

        var index = $(this).index();
        console.log(index)
        // $('.b_xin_bj_b div').eq(index).removeClass('b_xin_bj_a').addClass('b_xin_bj').siblings().removeClass('b_xin_bj');
        $('.b_xin_bj_b div').eq(index).stop().fadeIn(500).siblings().fadeOut(500);
        // $('body').addClass('.html');

    });
    $('.b_box_bj4').click(function(){
        $('.b_xin_bj_b div').fadeOut(500);
    });



    // 更换结束






    // 新碟首发JS
    // 导航栏效果
    $('.b_xin_div_1 span').on('mouseenter', function () {
        // 导航栏颜色添加
        $(this).css('color', '#31c27c');

    }).on('mouseout', function () {
        // 颜色清除
        $(this).css('color', '');

    }).on('click', function () {
        // 颜色类 清除
        $('.b_xin_div_1 span').removeClass('b_xin_div_1_a');

        // 颜色类添加
        $(this).addClass('b_xin_div_1_a');


        // li淡出
        $('.b_xin1 ul li').stop().fadeOut(500, function () {

            $('.b_xin1 ul').eq(index).addClass('b_xin_content').siblings().removeClass('b_xin_content');

            // li淡入
            $('.b_xin1 ul li').fadeIn(500);

        });

        // 需要加一个定时器   ul切换
        var index = $(this).index();


    });
    // 右侧更多
    $('.b_right_div a').on('mouseleave', function () {
        $(this).css('color', '#31c27c');

    }).on('mouseout', function () {
        $(this).css('color', '');
    })

    // 内部盒子效果
    $('.b_xin_content1 li').hover(function () {
        $(this).find('div').stop().fadeIn(500);
        $(this).find('div').css('transform', 'scale(0.8)');
        $(this).find('img').fadeTo(500, 0.8)
        $(this).find('.b_xin_p').stop().fadeIn(500);

    }, function () {
        $(this).find('div').stop().fadeOut(500);
        $(this).find('div').css('transform', 'scale(1.5)')
        $(this).find('img').fadeTo(500, 1);
        $(this).find('.b_xin_p').stop().fadeOut(500);

    });
    // 内部盒子 span 效果
    $('.b_xin_p span').hover(function () {
        $(this).stop().css('color', '#31c27c');
    }, function () {
        $(this).stop().css('color', '');
    });


    // 排行榜开始
    $('.b_phb_ul_box li').hover(function () {
        $(this).find('.b_ph_li_1').stop().fadeOut();
        $(this).find('.b_ph_li_2').stop().fadeIn(1000);
    }, function () {
        $(this).find('.b_ph_li_2').stop().fadeOut(500);
        $(this).find('.b_ph_li_1').stop().fadeIn(500);
    });



    // 被卷曲的头部 属性
    $(document).scroll(function () {
        //  console.log($(document).scrollTop());
        //   console.log($('.b_phb_ul_box').offset().top)
        if ($(document).scrollTop() <= 500) {

            $('.b_phb_ul_box li').stop().fadeOut();

        } else {
            $('.b_phb_ul_box li').stop().fadeIn(1000);

        }

        if ($(document).scrollTop() <= 400) {
            $(' .b_phb_img').stop().fadeOut();
        } else {
            $(' .b_phb_img').stop().fadeIn(1000);

        }

    });
   
    // var topNum = $('section').offset().top;
    // $(document).scroll(function () {
    //     // 页面被卷去的头部  $(document).scrollTop()
    //     if ($(document).scrollTop() >= topNum) {
    //         $('.back').fadeIn();
    //     } else {
    //         $('.back').fadeOut();
    //     };
    // });
    // 2. 点击返回顶部按钮
    $('.b_boximg_bj').click(function () {
        $('body,html').animate({
            scrollTop: 0
        });
    })




});



