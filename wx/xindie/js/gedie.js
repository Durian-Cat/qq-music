$(function(){
    // 内地港台切换
    $('.tag__list a').click(function(){
        var index = $(this).index();
    $(".mod_playlist ul").eq(index).show().siblings().hide();
    });
    
    // 点击变绿
    $('.tag__list a').click(function(){
        $(this).addClass('green').siblings().removeClass('green');
    })
    // 内地页数切换
    $('.mod_page_nav li').click(function(){
        var index = $(this).index();
    $(".mod_playlist .pub").eq(index).show().siblings().hide();
    });
    // 播放标签
    $('.playlist__list li').mouseenter(function(){
        $(this).find('em').stop().fadeIn();
    });
    $('.playlist__list li').mouseleave(function(){
        $(this).find('em').stop().fadeOut();
    })
})