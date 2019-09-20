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
var dom = document.querySelector(".container")
var myChart = echarts.init(dom);
option = null;
var namedate = ['LV1', 'LV2', 'LV3', 'LV4', 'LV5', 'LV6', 'LV7','LV8'];
var numdate = [10,20, 40, 60, 70, 80, 90, 100];
var colorlist = [];
numdate.forEach(element => {
    // 对元素进行遍历
    if (element < 100) {
        colorlist.push(["#90CAA9", "#90CAA9"])
    } else if (element >= 60 && element < 90) {
        colorlist.push(["#90CAA9","#90CAA9"])
    } else {
        colorlist.push(["#90CAA9", "#90CAA9"])
    }
});
option = {
    // 图标悬停的提示内容
    tooltip: {
        // 鼠标放在柱状图上自动显示
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // 布局
    grid: {
        left: '2%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    // x轴
    xAxis: [
        {
            type: 'category',
            data: namedate,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#73D2A3",
                    width: 4
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#73D2A3'
                }
            }
        }
    ],
    // y轴
    yAxis: [
        {
            type: 'value',
            // 左侧分数线
        // 文字的设置
            axisLabel: {
                // formatter: '{value} 分',
                show: true,
                textStyle: {
                    color: '#73D2A3',
                    fontsSize:40,
                    width:10,
                    barWidth:2
                }
            },
            // 线的设置
            axisLine: {
                lineStyle: {
                    color: "#73D2A3",
                    width:0
                }
            },
            // 后面的虚线
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#73D2A3',
                    width:1.5
                }
            }

        }
    ],
    // echarts必不可少的一部分用于指定图表的类型(饼图,柱状图)之类的
    series: [
        {
            name: '我的等级',
            type: 'bar',
            barWidth:'60%',
            data: numdate,
            itemStyle: {
                normal: {
                    //params 指函数调用时，传递过来的所有参数的数组
                    color: function (params) {
                        var colorList = colorlist
                        var index = params.dataIndex;
                        // console.dir(params);
                        // 0, 0, 0, 1,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                        // ：使用echarts内置的渐变色生成器echarts.graphic.LinearGradient
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [
                                { offset: 0, color: colorList[index][0] }, //0% 处的颜色
                                { offset: 1, color: colorList[index][1] } //100% 处的颜色
                            ]);
                    }
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
  console.dir(option);
    myChart.setOption(option, true);
}
    //鼠标进入的时候,其他的li标签透明度：0.5
    $(".adv_greens_bottom li").hover(function() {
        $(this).siblings().stop().fadeTo(400, 0.4);
    }, function() {
        // 鼠标离开，其他li 透明度改为 1
        $(this).siblings().stop().fadeTo(400, 1);
    })

