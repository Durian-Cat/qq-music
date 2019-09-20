// 获取头部区域的nav  a标签
var a = document.querySelectorAll('.fzy_nav ul a');
// 获取fzy_tc ;
var fzy_tc = document.querySelector('.fzy_tc');
// 循环遍历所有a标签
// console.log(a);
for (var i = 0; i < a.length; i++) {
    // 给每个a标签注册鼠标移入事件
    a[i].onmouseenter = function () {
        this.classList.add('fzy_ys');
    }
    // 给索引为1的a单独注册
    a[1].onmouseenter = function () {
        this.classList.add('fzy_ys');
        fzy_tc.style.display = 'block';
    }
    a[i].onmouseleave = function () {
        this.classList.remove('fzy_ys');
    }
    a[1].onmouseleave = function () {
        this.classList.remove('fzy_ys');
        fzy_tc.style.display = 'none';
    }
}
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
var count = 0;  //定义图片变更次数
var FI=null; //存储淡入interval循环
var timer=null;//存储轮播interval循环
var fullBox = document.getElementById('container');//用于设置背景颜色
var pictures=document.getElementsByClassName('pictures');//存储图片
var arrow=document.getElementsByClassName('arrow');//存储左右箭头
var button=document.getElementsByClassName('button');//存储下部圆圈
var percent = 0;//淡入循环变量
function fadeIn(){//淡入函数
        FI = setInterval(function (){
         percent += 0.010000; //精确浮点数精度
                 if(percent>=1){clearInterval(FI);}
                    else{
                        pictures[count].style.opacity=percent;}
                    },10);
                    percent = 0;}
function pic(){//图像变换函数
                for(var i=0;i<pictures.length;i++){
                  pictures[i].style.opacity=0;};//所有图片透明
                fullBox.style.backgroundColor = pictures[count].id//背景图片颜色等于相应图片的id
                for(var c=0;c<button.length;c++){//底部按钮颜色变化
                    button[c].style.backgroundColor = 'rgba(255,255,255,.6)';
                };
                button[count].style.backgroundColor='#fff';    
}//主轮播循环
showtime();
function showtime(){timer=setInterval(show,4000)};
function show(){//轮播循环函数
                count ++;
                if(count > pictures.length - 1){
                count = 0;};
                fadeIn();               
                pic();
            }
            //左右箭头
            for(var i=0;i<arrow.length;i++){
                arrow[i].onmouseover=function(){
                    clearInterval(timer);
                };
                arrow[i].onmouseout=function(){
                    showtime();
                };
                arrow[i].onclick=function(){
                    if(this.title == 'left'){
                        count--;
                        if(count < 0){count = pictures.length - 1;}
                    }else{
                        count++;
                        if(count>pictures.length - 1){count = 0;}
                    };
                fadeIn();
                pic();
                }
            }
            //底部圆点
            for(var i=0;i<button.length;i++){
                button[i].index = i;
                button[i].onmouseover=function(){
                    clearInterval(timer);
                    count = this.index;//确保count值不会出错
                    fadeIn();
                    pic();
                };
                button[i].onmouseout=function(){showtime()};
                }


