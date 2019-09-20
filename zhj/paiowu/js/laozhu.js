// 给检索按钮一个hover效果-search_input__btn
var search_input__btn = document.querySelector('.search_input__btn');
search_input__btn.onmouseenter = function () {
    search_input__btn.style.background = '#01c58a';
}
search_input__btn.onmouseleave = function () {
    search_input__btn.style.background = '';
}


// 地名可隐藏盒子中-字母点击事件
// letter_list列表中字母按钮被点击后,class发生改变
var letter_list__box = document.querySelectorAll('.letter_list__box');

for (var i = 0; i < letter_list__box.length; i++) {
    letter_list__box[i].onclick = function () {
        // 排他法先清类名，再对点击位置添加类名
        for (var i = 0; i < letter_list__box.length; i++) {
            letter_list__box[i].parentNode.classList.remove('letter_list__item--current');
        }
        this.parentNode.classList.add('letter_list__item--current');
    }
}


// 地名可隐藏盒子的显示与隐藏事件
// 获取隐藏盒子
var popup_data_detail = document.querySelector('.popup_data_detail');
var user_ctrl__btn_box = document.querySelector('.user_ctrl__btn_box ');
var mod_search_input_li = document.querySelectorAll('.mod_search_input ul li');
var mod_search_input_ul = document.querySelector('.mod_search_input ul');
var search_input__input = document.querySelector('.user_ctrl .user_ctrl__search .mod_search_input .search_input__input');

var flag_popup_data_detail = true;
// 上海按钮
user_ctrl__btn_box.onclick = popup_data_detail_display_none;
// 搜索下边栏/
for (var i = 0; i < mod_search_input_li.length; i++) {
    mod_search_input_li[i].onmouseenter = function () {
        this.style.background = 'rgba(209, 201, 201, 0.548)';
    }
    mod_search_input_li[i].onmouseleave = function () {
        this.style.background = 'rgba(209, 201, 201, 0)';
    }
}

// 搜索input
$(search_input__input).focus(function () {
    // for (var i = 0; i < mod_search_input_li.length; i++) {
    //     mod_search_input_li[i].style.display = 'block';
    //     mod_search_input_li[i].classList.remove('li_animate_slide_up');
    //     mod_search_input_li[i].classList.add('li_anmimate_slide_down');
    // }
    $('.mod_search_input ul').slideDown(500);
});
$(search_input__input).blur(function () {
    // for (var i = 0; i < mod_search_input_li.length; i++) {
    //     mod_search_input_li[i].classList.remove('li_anmimate_slide_down');
    //     mod_search_input_li[i].classList.add('li_animate_slide_up');
    //     mod_search_input_li[i].style.display = 'none';
    // }
    $('.mod_search_input ul').slideUp(500);
});


// 给地点盒子注册点击事件——作用:使滚轮下滑到字母代表位置
$('.js_choose_city_letter').click(function () {
    var a = $(this).children().text();

    if (a == "A") {
        $('.js_letter_list').scrollTop(0);
    } else if (a == "B") {
        $('.js_letter_list').scrollTop(28);
    } else if (a == "C") {
        $('.js_letter_list').scrollTop(56);
    } else if (a == "D") {
        $('.js_letter_list').scrollTop(84);
    } else if (a == "E") {
        $('.js_letter_list').scrollTop(112);
    } else if (a == "F") {
        $('.js_letter_list').scrollTop(130);
    } else if (a == "G") {
        $('.js_letter_list').scrollTop(168);
    } else if (a == "H") {
        $('.js_letter_list').scrollTop(196);
    } else if (a == "J") {
        $('.js_letter_list').scrollTop(252);
    } else if (a == "K") {
        $('.js_letter_list').scrollTop(280);
    } else if (a == "L") {
        $('.js_letter_list').scrollTop(308);
    } else if (a == "M") {
        $('.js_letter_list').scrollTop(336);
    } else if (a == "N") {
        $('.js_letter_list').scrollTop(364);
    } else if (a == "Q") {
        $('.js_letter_list').scrollTop(392);
    } else if (a == "S") {
        $('.js_letter_list').scrollTop(420);
    } else if (a == "T") {
        $('.js_letter_list').scrollTop(444);
    } else if (a == "W") {
        $('.js_letter_list').scrollTop(444);
    } else if (a == "X") {
        $('.js_letter_list').scrollTop(444);
    } else if (a == "Y") {
        $('.js_letter_list').scrollTop(444);
    } else if (a == "Z") {
        $('.js_letter_list').scrollTop(444);
    }
});

// 功能函数
// 盒子隐藏函数-用于判断当前（popup_data_detail）隐藏盒子是显示还是隐藏
function popup_data_detail_display_none() {
    if (flag_popup_data_detail) {
        popup_data_detail.classList.add('ani_popup_data_detail_block');
        popup_data_detail.classList.remove('ani_popup_data_detail_none');

        flag_popup_data_detail = false;
    } else {
        // popup_data_detail.style.display = 'none';
        popup_data_detail.classList.add('ani_popup_data_detail_none');
        popup_data_detail.classList.remove('ani_popup_data_detail_block');


        flag_popup_data_detail = true;
    }
}




// 测试函数
// 测试鼠标点击对象
// document.onclick = function (e) {
//     console.log(e.target);

// }