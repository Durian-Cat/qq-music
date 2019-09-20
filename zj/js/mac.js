$(function() {
           
    $(document).scroll(function() {
    var topVal=$(window).scrollTop();
    if(topVal>500) {
        $('.back').addClass('ani');
    }else {
        $('.back').removeClass('ani');
    }
})
//注意此处代码所放的位置，如果放在上面的滚动事件里面，则回到顶部之后，滚动条不能再滚动
$('.back').click(function() {
        $('body,html').animate({
            scrollTop: 0
        })
    })
$('.dotted>i').click(function () {
    $('i').css('background', '');
    $(this).css('background', '#31c27c');
    var i = $(this).index();
    $('li').css('display', 'none');
    $('li').eq(i).css('display', 'block');
})
$('.aft').click(function () {
    var index;
    $('.content6').find('li').each(function (i, elm) {
        if ($(elm).css('display') == 'block') {
            $('.content6').find('li').css('display', 'none');
            $('.dotted>i').css('background', '');
            index = i + 1;
            if (index == 5) {
                index = 0;
            }
        }
    })
    $('.dotted>i').eq(index).css('background', '#31c27c');
    $('li').eq(index).css('display', 'block');
})
$('.pre').click(function () {
    $('.content6').find('li').each(function (i, elm) {
        if ($(elm).css('display') == 'block') {
            $('.dotted>i').css('background', '');
            $('.content6').find('li').css('display', 'none');
            index = i - 1;
            if (index == -1) {
                index = 4;
            }
        }
    })
    $('.dotted>i').eq(index).css('background', '#31c27c');
    $('.content6').find('li').eq(index).css('display', 'block');
})
    var y1 = $('.content1').height();
    var y2 = $('.content2').height();
    var y3 = $('.content3').height();
    var y4 = $('.content4').height();
    var y5 = $('.content5').height();
    var tval;

    function section2() {
        // console.dir($('.section2>.inner>h3'));
        $('.content2').css('animation','slideUp 1s ease-in-out both');
        $('.content2 .logo').css('animation','fuxian 1s linear forwards 0.5s');
        $('.small_pic').css('animation','move 2s ease-in-out 1s both');
    }

    function section3() {
        $('.one3').css('animation', 'slideUp .5s ease-in both');
        $('.two3').css('animation', 'slideUp .5s ease-in .5s both');
        $('.three3').css('animation', 'slideUp .5s ease-in 1s both');

    }

    function section4() {
        $('.content4 img').css('animation', 'slideUp 1s ease-in-out 1s both');
        $('.first').css('animation', 'slideUp .5s ease-in 1s both');
        $('.second').css('animation', 'slideUp .5s ease-in 1.2s both');
        $('.third').css('animation','slideUp .5s ease-in 1.5s both');
        $('.fourth').css('animation','slideUp .5s ease-in 2s both');
    }
    function section5() {
        $('.content5 .logo').css('animation','slideUp 0.5s ease-in-out both');
        $('.content5 img').css('animation','slideUp 0.5s ease-in-out .5s both');
    }
    $(document).scroll(function () {
        tval = $(window).scrollTop();
        switch (true) {
            case tval < Number(y1 + y2) && tval >= y1:
                section2();
                break;
            case tval < Number(y1 + y2 + y3) && tval >= Number(y1 + y2):
                section3();
                break;
            case tval < Number(y1 + y2 + y3 + y4) && tval >= Number(y1 + y2 + y3):
                section4();
                break;
                case tval<Number(y1+y2+y3+y4+y5)&&tval>=Number(y1+y2+y3+y4): 
                section5();
                break;

        }
    })
})