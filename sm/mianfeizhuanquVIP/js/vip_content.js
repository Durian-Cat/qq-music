//背景图内a标签
$('.s_bg_5').mouseenter(function(){
    $(this).addClass('s_bg_55');
});
$('.s_bg_5').mouseleave(function(){
    $(this).removeClass('s_bg_55');
})

//鼠标进入 a时抖动
$('.s_vip_con a').hover(function(){
    $(this).addClass('s_a_pub');
},function(){
    $(this).removeClass('s_a_pub');
})


//鼠标离开时隐藏 

$('.s_con_foot li .s_pub').mouseleave(function(){
    $(this).find('.s_span_div,.s_triangle').stop().fadeOut();
    $(this).removeClass('s_li_span_one1');
})
//鼠标点击时显示
$('.s_con_foot li .s_pub').click(function(){
    $(this).find('.s_span_div,.s_triangle').stop().fadeIn();
    $(this).addClass('s_li_span_one1');
})






