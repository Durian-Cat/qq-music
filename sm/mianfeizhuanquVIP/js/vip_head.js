// 获取头部区域的nav   a标签
var a = document.querySelectorAll('.fzy_nav ul a');
// 获取fzy_tc ;
var fzy_tc = document.querySelector('.fzy_tc');
// 循环遍历所有a标签
console.log(a);
for (var i = 0; i < a.length; i++) {
    // 给每个a标签注册鼠标移入事件
    a[i].onmouseenter = function () {
        this.classList.add('fzy_ys');
    }
    // 给索引为1的a单独注册
    a[0].onmouseenter = function () {
        this.classList.add('fzy_ys');
        fzy_tc.style.display = 'block';
    }
    a[i].onmouseleave = function () {
        this.classList.remove('fzy_ys');
    }
    a[1].onmouseleave = function () {
        this.classList.remove('fzy_ys');
        fzy_tc.style.display = 'block';

    }
}
a[3].style.color = 'green';
// 点击事件
for (var i = 0; i < a.length; i++) {
    a[i].onclick = function () {
        // 排他思想
        for (var j = 0; j < a.length; j++) {
            a[j].style.color = '';
        }
        this.style.color = 'green';
    }
}
// 给 fzy_tc 注册鼠标移入移出
fzy_tc.onmouseenter = function () {
    this.style.display = 'block';
}
fzy_tc.onmouseleave = function () {
    this.style.display = 'none';
}


