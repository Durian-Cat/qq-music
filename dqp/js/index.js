window.onload = function () {
    songsGetColor();
    songsTabToggle();
    getDongHua();
    getDongHua2();
    listen();
    listenLeft();
    paiHangBang();
    mv();
  
}

//歌单推荐部分

//给歌单下边的文字添加hover效果
function songsGetColor() {
    var a = document.querySelectorAll('.songs_list_item ul li a');
    for (var i = 0; i < a.length; i++) {
        a[i].onmouseenter = function () {
            for (var j = 0; j < a.length; j++) {
                a[j].className = '';
            }
            this.className = 'active_nav_fcolor';
        }
        a[i].onmouseleave = function () {
            this.className = '';
        }
    }
}

var imgsSrc = ['./index_images/song11.jpg', './index_images/songs12.jpg', './index_images/songs13.jpg', './index_images/songs14.jpg', './index_images/songs15.jpg', './index_images/songs16.jpg', './index_images/songs17.jpg', './index_images/songs18.jpg', './index_images/songs19.jpg', './index_images/songs20.jpg', './index_images/songs21.jpg', './index_images/songs22.jpg', './index_images/songs23.jpg', './index_images/songs24.jpg', './index_images/songs25.jpg', './index_images/songs26.jpg', './index_images/songs27.jpg', './index_images/songs28.jpg', './index_images/songs29.jpg', './index_images/songs30.jpg', './index_images/songs31.jpg', './index_images/songs32.jpg', './index_images/songs33.jpg'];
var songsExplans = ['用一根耳机线帮你降降温', '生活不开心？来点摇滚找回自己', '带动全美的50首R&B神曲', '荏苒岁月颓，此心稍已去', '站内评论999+的二字影视歌曲', '「艺考生必收」超燃BGM为你打气', '编剧激发灵感专用古典幻想曲', '日语歌难学？压箱底的假名注音速成大法！', '一气呵成：DBA听完从删库到跑路', '「作业向」东方纯音幻乐', '令和次世代', 'GReeeeN私藏'];
var number = ['播放量：5.2万', '播放量：44.5万', '播放量：582万', '播放量：6.8万', '播放量：8.96万', '播放量：78.3万', '播放量：2.2万', '播放量：8.8万', '播放量：7.9万', '播放量：88.69万', '播放量：5.89万'];

//切换
function songsTabToggle() {
    var lis = document.querySelectorAll('.songs_list_nav ul li a');
    var imgs = document.querySelectorAll('.songs_content .songs_list_item>ul li ul .kuang img');
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            var ID = this.dataset.name;
            for (var j = 0; j < lis.length; j++) {
                lis[j].classList.remove('active_nav_fcolor');
            }
            this.classList.add('active_nav_fcolor');
            for (var i = 0; i < imgs.length; i++) {
                for (var j = 0; j < imgs.length; j++) {
                    imgs[j].src = imgsSrc[getNumber(0, 22)];
                    imgs[j].parentElement.nextElementSibling.innerHTML = songsExplans[getNumber(0, 11)];
                    imgs[j].parentElement.parentElement.lastElementChild.innerText = number[getNumber(0, 11)];
                }
            }
        }
    }
}

//随机数
function getNumber(max, min) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}
//轮播图效果

//动画封装
var timerID = null;

function animation(elem, current, target, step) {
    current = elem.offsetLeft;
    if (elem.timerID) {
        clearInterval(elem.timerID);
        elem.timerID = null;
    }
    elem.timerID = setInterval(function () {
        if (current > target) {
            step = -Math.abs(step);
        }
        if (Math.abs(current - target) <= Math.abs(step)) {
            current = target;
            clearInterval(elem.timerID);
        } else {
            current += step;
        }
        elem.style.left = current + 'px';

    }, 25);
}

function getDongHua() {
    var lbtn = document.querySelector('.btns a:first-child');
    var rbtn = document.querySelector('.btns a:last-child');
    var ul = document.querySelector('.songs_list_item:first-child>ul');
    var box = document.querySelector('.songs_list_item:first-child');
    var dotteds = document.querySelectorAll('.songs_list_item .dotteds a');
    var content = document.querySelector('.songs_content');

    //右侧按钮点击
    var index = 0;
    rbtn.onclick = function () {
        //解决最后空白问题
        if (index == 2) {
            index = 0;
            ul.style['left'] = 0 + 'px';
        }
        index++;
        // console.log(index);
        animation(ul, box.offsetLeft, -box.offsetWidth * index - 75 * index, 50);

        dottedMove();
    }

    //  克隆第一版的一个li
    var newNode = ul.children[0].cloneNode(true);
    newNode.style['marginLeft'] = '75px';
    ul.appendChild(newNode);

    // 左侧按钮点击
    lbtn.onclick = function () {
        if (index == 0) {
            index = 2;
            ul.style['left'] = -box.offsetWidth * index + 'px';
        }
        index--;
        animation(ul, 0, -box.offsetWidth * index - 75 * index, 50);
        dottedMove();
    }

    //圆点跟着按钮走
    function dottedMove() {
        for (var i = 0; i < dotteds.length; i++) {
            dotteds[i].style.background = '';
        }
        if (index == 2) {
            dotteds[0].style.background = 'rgba(102, 102, 102, .5)';
        } else {
            dotteds[index].style.background = 'rgba(102, 102, 102, .5)';
        }
    }

    //点击小圆点
    function onclickDotteds() {
        for (var j = 0; j < dotteds.length; j++) {
            dotteds[j].indexPage = j;
            dotteds[j].onclick = function () {
                index = this.indexPage;
                animation(ul, 0, -box.offsetWidth * index - 75 * index, 50);
                dottedMove();
            }
        }
    }
    onclickDotteds();

    // 自动播放
    var imgID = null;

    function autoPlay() {
        imgID = setInterval(function () {
            rbtn.click();
        }, 3000);
    }
    content.onmouseenter = function () {
        clearInterval(imgID);
    }
    content.onmouseleave = function () {
        autoPlay();
    }
    autoPlay();

    //鼠标进入小动画
    imgHover();

    function imgHover() {
        $('.songs_list_item ul li .kuang').each(function (i, elm) {
            $(elm).hover(function () {
                $(this).find('img').css({
                    transform: 'scale(1.05)'
                });
                $(this).find('#mengban').stop().fadeTo(100, .2);
                $(this).find('#ies').stop().fadeTo(100, 1);

            }, function () {
                $(this).find('img').css({
                    transform: 'scale(1)'
                });
                $(this).find('#mengban').stop().fadeTo(100, 0);
                $(this).find('#ies').stop().fadeTo(100, 0);

            })
        })
    }
}

//新歌首发部分
function getDongHua2() {
    var btn1 = document.querySelector('.new_songs_center .btn a:first-child');
    var btn2 = document.querySelector('.new_songs_center .btn a:last-child');
    var box = document.querySelector('.new_songs_center .new_songs_main');
    var ul = document.querySelector('.new_songs_main ul');
    var dotted = document.querySelector('.new_songs_center .dotteds');
    var dotteds = dotted.children;
    var lis = document.querySelectorAll('.new_songs_nav ul li a');
    var imgs = document.querySelectorAll('.new_songs_main ul li ul li img');
    //导航切换
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'active_nav_fcolor';
            //图片切换
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].src = imgsSrc[getNumber(0, 22)];
            }
        }
    }

    //右侧按钮点击
    var index = 0;
    btn2.onclick = function () {
        //解决最后空白问题
        if (index == 4) {
            index = 0;
            ul.style['left'] = 0 + 'px';
        }
        index++;
        // console.log(index);
        animation(ul, box.offsetLeft, -box.offsetWidth * index - 75 * index, 50);

        dottedMove();
    }

    //   克隆第一版的一个li
    var newNode = ul.children[0].cloneNode(true);
    newNode.style['marginLeft'] = '75px';
    ul.appendChild(newNode);

    //  左侧按钮点击
    btn1.onclick = function () {
        if (index == 0) {
            index = 4;
            ul.style['left'] = -box.offsetWidth * index + 'px';
        }
        index--;
        animation(ul, 0, -box.offsetWidth * index - 75 * index, 50);
        dottedMove();
    }

    //  圆点跟着按钮走
    function dottedMove() {
        for (var i = 0; i < dotteds.length; i++) {
            dotteds[i].style.background = '';
        }
        if (index == 4) {
            dotteds[0].style.background = 'rgba(102, 102, 102, .5)';
        } else {
            dotteds[index].style.background = 'rgba(102, 102, 102, .5)';
        }
    }

    //  点击小圆点
    function onclickDotteds() {
        for (var j = 0; j < dotteds.length; j++) {
            dotteds[j].indexPage = j;
            dotteds[j].onclick = function () {
                index = this.indexPage;
                animation(ul, 0, -box.offsetWidth * index - 75 * index, 50);
                dottedMove();
            }
        }
    }
    onclickDotteds();

}

//阶梯导航部分===>JQuery
$(function () {
    shouLadderNav();

    //导航显示
    function shouLadderNav() {
        var domTop = $(document).scrollTop();
        if (domTop >= $('.songs_list').offset().top) {
            $('.ladder_nav').fadeIn();
        } else {
            $('.ladder_nav').fadeOut();
        }
    }
    //给window添加滚动事件
    $(window).scroll(function () {
        shouLadderNav();
        var top1 = $(document).scrollTop();
        $('.contents > div').each(function (index, elem) {
            if (top1 >= $(elem).offset().top - 200) {
                $('.ladder_nav li').eq(index).addClass('current').siblings().removeClass('current');
            }
        })

    })

    //给阶梯导航上的li添加点击事件
    $('.ladder_nav li').click(function () {
        var index = null;
        var itemTop = 0;
        index = $(this).index();

        itemTop = $('.contents > div').eq(index).offset().top;

        $('body,html').animate({
            scrollTop: itemTop
        }, function () {
            $(this).addClass('current').siblings().removeClass('current');
            // console.log($(this));
        })
    })
    //给返回顶部添加点击事件
    $('.ladder_nav > a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, function () {
            $(this).siblings().find('.song').addClass('current').siblings().removeClass('current');
        });
    })
})

//榜单
//右侧轮播图
function listen() {
    var items = document.querySelectorAll('.item');
    var itemW = items[0].offsetWidth;
    var k = 0;
    //设置每张图片的背景偏移位置拼接成完整的图片
    for (var i = 0; i < items.length; i++) {
        items[i].style['left'] = i * itemW + 'px';
        for (var j = 0; j < items[i].children.length; j++) {
            items[i].children[j].style['backgroundPosition'] = k * itemW + 'px' + ' ' + '0px';
        }
        k--;
    }
    var lbtn = document.getElementById('a1');
    var rbtn = document.getElementById('a2');

    var k = 0;
    //给左侧按钮注册点击事件
    lbtn.onclick = function () {
        k--;
        for (var i = 0; i < items.length; i++) {
            (function (i) {
                setTimeout(function () {
                    items[i].style.transform = 'rotateX(' + k * 90 + 'deg)';
                    items[i].style.transition = 'all 1s linear';
                }, 80 * i);
            })(i);
        }
    }

    //右侧按钮注册点击事件
    rbtn.onclick = function () {
        k++;
        for (var i = 0; i < items.length; i++) {
            (function (i) {
                setTimeout(function () {
                    items[i].style['transform'] = 'rotateX(' + k * 90 + 'deg)';
                    items[i].style['transition'] = 'all 1s linear';
                }, 80 * i);

            })(i)
        }
    }
    //自动轮播
    var imgid = null;

    function auto() {
        imgid = setInterval(function () {
            rbtn.click();
        }, 3000);
    }
    auto();
    //清除定时器
    function clear() {
        var box = document.querySelector('.listen_center .box1');
        box.onmouseenter = function () {
            clearInterval(imgid);
        }
        box.onmouseleave = function () {
            auto();
        }
    }
    clear();
}
//左侧榜单
function listenLeft() {
    //全选按钮
    selector();

    function selector() {
        $('#checkall').click(function () {
            $('ol li #j_checked').each(function (i, elem) {
                $(elem).prop('checked', $('#checkall').prop('checked'));
            })
        });
    }

    //背景颜色
    bg();

    var a1, a2, a3;

    function bg() {
        var audio = document.getElementById('audio');
        // console.log(audio.paused);
        $('ol>li').hover(function () {
            //背景色
            $(this).css({
                background: '#CCEEFF'
            });
            //动态创建控制按钮
            if ($('#smallbtn a').length == 0) {
                a1 = $('<a href="javaScript:;" class="iconfont" id="niu">&#xe61e;</a>').appendTo($(this).find('#smallbtn'));
                a2 = $('<a href="javaScript:;" class="iconfont">&#xe71d;</a>').appendTo($(this).find('#smallbtn'));
                a3 = $('<a href="javaScript:;" class="iconfont">&#xe642;</a>').appendTo($(this).find('#smallbtn'));
            }
        }, function () {
            $(this).css({
                background: ''
            });
            $(this).find('#smallbtn').html('');
        });

        //放歌按钮
        $('ol>li').find('#smallbtn').on('click', a1, function (e) {
            if (audio.paused) {
                $(this).html('');
                $(this).html('<a href="javaScript:;" class="iconfont">&#xe69d;</a>' + '<a href="javaScript:;" class="iconfont">&#xe71d;</a>' + '<a href="javaScript:;" class="iconfont">&#xe642;</a>');
                audio.play();
            } else {
                $(this).html('');
                $(this).html('<a href="javaScript:;" class="iconfont">&#xe61e;</a>' + '<a href="javaScript:;" class="iconfont">&#xe71d;</a>' + '<a href="javaScript:;" class="iconfont">&#xe642;</a>');
                audio.pause();
            }
        });
    }
}

//热歌首选部分
function paiHangBang() {
    //显示
    shou();

    function shou() {
        $('.phb_content div').each(function (i, elm) {
            var id = null;
            $(window).scroll(function () {
                var top = $(document).scrollTop();
                if (top >= $('.phb').offset().top - 200) {
                    id = setInterval(function () {
                        $(elm).css({
                            animation: 'hover 1s linear forwards'
                        });
                        $('.phb_content ul').each(function (index, elem) {
                            setInterval(function () {
                                $(elem).stop().fadeIn();
                            }, 1500 * index);
                        })

                    }, 500 * i);
                }
            })
        })
    }

    // //添加鼠标进入小动画
    hiddle();

    function hiddle() {
        $('.phb_content i').hover(function () {
            $(this).stop().fadeTo(200, 1);
            $(this).siblings('span').fadeOut();

        }, function () {
            $(this).siblings('span').fadeIn();
            $(this).stop().fadeTo(200, 0);
        })

    }
}

//MV部分
function mv() {
    //MV鼠标进入小动画
    mvDongHua();

    function mvDongHua() {
        var box = document.querySelectorAll('.img_hezi');
        var hiddle = document.querySelectorAll('#hiddle');
        for (var i = 0; i < box.length; i++) {
            box[i].onmouseenter = function () {
                this.lastElementChild.style.top = '';
                this.style['boxShadow'] = '0 0 3px 3px rgba(0,0,0,.5)';
                this.lastElementChild.style.top = this.lastElementChild.style.top--;
            }
            box[i].onmouseleave = function () {
                this.style['boxShadow'] = '';
                this.lastElementChild.style.top = '130px';
            }
        }
    }

    //点击有小球
    qiu();

    function qiu() {
        var qius = document.querySelectorAll('.caream .qiu');
        var careams = document.querySelectorAll('.caream i');
        var b = null;
        var m_x = null,
            m_y = null;
        for (var i = 0; i < qius.length; i++) {
            careams[i].onclick = function (e) {
                m_x = this.offsetLeft;
                m_y = this.offsetTop;
                this.nextElementSibling.style.display = 'block';
                b = this.nextElementSibling;
                this.nextElementSibling.style['transition'] = 'left 0s,top 0s ';
                setTimeout(function () {
                    b.style.left = '-100px';
                    b.style.top = window.innerHeight + 'px';
                    b.style.transition = 'left 1s linear,top 1s ease-in';
                }, 20);
                this.nextElementSibling.style.left = m_x + 'px';
                this.nextElementSibling.style.top = m_y + 'px';
            }
        }
    }
}