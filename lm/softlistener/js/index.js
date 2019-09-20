//banner  图片淡入淡出


var i = 0;
window.reverse = false; //默认为正序播放
$(document).ready(function () {
    picGroup = [$("#div1"), $("#div2"), $("#div3"), $("#div4")];
    addlistener();
    ID = setInterval(show1, 4000);

});

function nextPicIndex() //对全局边量i进行更改，改为当前博播放顺序下的下一张图片索引
{
    if (reverse == true) {
        if (i > 0) {
            i--;
        } else {
            i = 4 - 1;
        }
    } else {
        if (i < 3) {
            i++;
        } else {
            i = 0;
        }
    }
}

function show1() {
    picGroup[i].fadeToggle(2000);
    nextPicIndex();
    picGroup[i].fadeToggle(2000);
}

function addlistener() {
    $("#slide").bind("mousedown", start);
}

function start(event) {
    if (event.button == 0) //当鼠标左键还是按下状态时
    {
        X = event.pageX;
        Y = event.pageY;
        $("#slide").bind("mousemove", move);
        $("#slide").bind("mouseup", stop);
    }
    return false; //很关键，取消执行浏览器默认事件，没有这一步，该事件执行不了
}

function move(event) {
    X1 = event.pageX;
    Y1 = event.pageY;
    return false; //同样取消浏览器默认事件
}

function stop() {
    if (X1 - X > 50) //滑动路程大于50，且为向右滑动
    {
        reverse = false; //正序
        clearInterval(ID); //停止当前的interval
        show1(); //立即执行一次图片下一张播放
        ID = setInterval(show1, 4000); //重新开启interval
    } else if (X1 - X < -50) //滑动路程大于50，且为向左滑动
    {
        reverse = true; //反序
        clearInterval(ID);
        show1();
        ID = setInterval(show1, 4000);
    }
    $("#slide").unbind("mousemove", move); //左键松开，则解除绑定鼠标移动事件
    $("#slide").unbind("mouseup", stop); //和左键松开事件
}




// 歌词滚动播放

var speed = 40;
var lyrics = document.querySelector(".lyrics");
var wait = document.querySelector(".wait");
var lyrics_details = document.querySelector(".lyrics_details");
wait.innerHTML = lyrics_details.innerHTML;

function Marquee() {
    if (wait.offsetTop - lyrics.scrollTop <= 0){
        lyrics.scrollTop -= lyrics_details.offsetHeight
        // console.log(123);
    }
       

    else {
        lyrics.scrollTop++
        // console.log(456);
        

    }

}
var MyMar = setInterval(Marquee, speed);



// 获取banner_1滚动出去的距离，等于距离文档上面的距离的时候，开始执行动画效果
var len1 = $('.banner_1').offset().top;
var len2 = $('.banner_2').offset().top;
var len3 = $('.banner_3').offset().top;
var len4 = $('#sp').offset().top;
var len5 = $('#six').offset().top;
// console.log(len2-700);

getLen();

function getLen() {
    //   console.log($(document).scrollTop());
    if ($(document).scrollTop() >= len1 - 700) {
        $('.text_left').fadeIn(5000);
        $('.img_right').fadeIn(3000);

        //   当右侧侧盒子容器显示之后，将里面的图片循环播放

        // 替换class达到淡入淡出的效果
        function fadeIn(e) {
            e.className = "bg fadein";
        };

        function fadeOut(e) {
            e.className = "bg";
        };
        //申明图片数组中当前的轮播图片
        var cur_img = document.getElementById("imgs").children.length - 1;
        //图片轮播函数
        function turnImgs(imgs) {
            var imgs = document.getElementById("imgs").children;
            if (cur_img == 0) {
                fadeOut(imgs[cur_img]);
                cur_img = imgs.length - 1;
                fadeIn(imgs[cur_img]);
            } else {
                fadeOut(imgs[cur_img]);
                fadeIn(imgs[cur_img - 1]);
                cur_img--;
            }
        }
        //设置轮播间隔
        setInterval(turnImgs, 2000);


    }
    if ($(document).scrollTop() >= len2 - 400) {
        var arr = ['skin__item--1', 'skin__item--2', 'skin__item--3']
        $('.skin__item').each(function (i, elm) {
            $(elm).addClass(arr[i]);
        })
    }
    if ($(document).scrollTop() >= len2 + 100) {
        $('.paraph').fadeIn(1000);
    }
    if ($(document).scrollTop() >= len4 - 700) {
        $('.text_left').fadeIn(5000);
        $('.img_right').fadeIn(3000);

        //   当右侧侧盒子容器显示之后，将里面的图片循环播放

        // 替换class达到淡入淡出的效果
        function fadeIn(e) {
            e.className = "bg fadein";
        };

        function fadeOut(e) {
            e.className = "bg";
        };
        //申明图片数组中当前的轮播图片
        var cur_img1 = document.getElementById("imgs1").children.length - 1;
        //图片轮播函数
        function turnImgs(imgs) {
            var imgs1 = document.getElementById("imgs1").children;
            if (cur_img1 == 0) {
                fadeOut(imgs1[cur_img1]);
                cur_img1 = imgs1.length - 1;
                fadeIn(imgs1[cur_img1]);
            } else {
                fadeOut(imgs1[cur_img1]);
                fadeIn(imgs1[cur_img1 - 1]);
                cur_img1--;
            }
        }
        //设置轮播间隔
        setInterval(turnImgs, 2000);


    }
    if ($(document).scrollTop() >= len5 - 700) {
        $('.text_left').fadeIn(5000);
        $('.img_right').fadeIn(3000);

        //   当右侧侧盒子容器显示之后，将里面的图片循环播放

        // 替换class达到淡入淡出的效果
        function fadeIn(e) {
            e.className = "bg fadein";
        };

        function fadeOut(e) {
            e.className = "bg";
        };
        //申明图片数组中当前的轮播图片
        var cur_img2 = document.getElementById("imgs2").children.length - 1;
        //图片轮播函数
        function turnImgs(imgs) {
            var imgs2 = document.getElementById("imgs2").children;
            if (cur_img2 == 0) {
                fadeOut(imgs2[cur_img2]);
                cur_img2 = imgs2.length - 1;
                fadeIn(imgs2[cur_img2]);
            } else {
                fadeOut(imgs2[cur_img2]);
                fadeIn(imgs2[cur_img2 - 1]);
                cur_img2--;
            }
        }
        //设置轮播间隔
        setInterval(turnImgs, 2000);


    }

    $('.banner_7 .public').hover(function (){
        // $(this).children('#im_one').css('zIndex','10');
        $(this).children('#big').stop().animate({
            left:350,
            opacity:1
        })
        $(this).children('#small').stop().animate({
            left:200,
            opacity:1
        },500)
        // $(this).children('#im_one').css('zIndex','2');
    },function(){
        // $(this).children('#im_one').css('zIndex','');
        $(this).children('#big').stop().animate({
            left:100,
            opacity:0
        })
        $(this).children('#small').stop().animate({
            left:100,
            opacity:0
        },500)
    })
    }
// $('.banner_3').mouseenter(function(){
//     $('.paraph').fadeIn(1000);
// })
// }
//滚动事件
$(window).scroll(function () {
    getLen();
})