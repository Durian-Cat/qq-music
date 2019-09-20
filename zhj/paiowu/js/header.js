// 输入框获得和失去焦点时，下拉列表隐藏和显示
$('#search_inp').focus(function () {
    $('.search_box ul').slideDown(300);
});
$('#search_inp').blur(function () {
    $('.search_box ul').slideUp(300);
});
//鼠标移入列表和移除列表，修改列表样式
$('.search_box li').hover(function () {
    $(this).css('background', '#31C27C');
}, function () {
    $(this).css('background', '');
})
$('.nav_hover').hover(function () {
    // $('.fix_nav_list').css('display', 'block');
    $('.fix_nav_list').show();

}, function () {
    $('.fix_nav_list').css('display', 'none');
})