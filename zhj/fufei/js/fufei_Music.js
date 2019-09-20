$(function () {
    var z_ul_li_a = document.querySelector('.z_ul_li_a');
    for (var i = 0; i < z_ul_li_a.length; i++) {
        z_ul_li_a[i].onmouseenter = function () {
            this
        }
        z_ul_li_a[i].onmouseleave = function () {

        }
    }

    $('.z_top_ul li a').hover(function () {
        $(this).css('color', '#31c27c');
    }, function () {
        $(this).css('color', '');
    });


    $('.z_right_ul').children().eq(1).hover(function () {
        $(this).css({
            "border": "1px solid #fff",
            "background": "#31c27c",
            "color": "rgba(0, 0, 0, 0.8)"
        });
    }, function () {
        $(this).css({
            "border": "",
            "background": "",
            "color": ""
        });
    });


    $('.z_right_ul').children().eq(0).hover(function () {
        $(this).css({
            "border": "1px solid #fff",
            "background": "rgba(0, 0, 0, 0)",
            "color": "#31c27c"
        });
    }, function () {
        $(this).css({
            "border": "1px solid #31c27c",
            "background": "",
            "color": ""
        });
    });


    $('.z_content_ul_li_a1').hover(function () {
        
        $(this).css({
            "background": "#fff",
            "color": "#31c27c"
        });
    }, function () {
        $(this).css({
            "background": "",
            "color": ""
        });
    });


    $('.z_content_ul_li_a2').hover(function () {

        $(this).css({
            "background": "#fff",
            "color": "#31c27c"
        });
    }, function () {
        $(this).css({
            "background": "",
            "color": ""
        });
    });





    $('.z_bg').slideDown(1500);
})