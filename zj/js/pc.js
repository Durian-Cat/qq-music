 $(function () {
     var y2 = $('.section2').height();
     var y1 = $('.section1').height();
     var y3 = $('.section3').height();
     var y4 = $('.section4').height();
     var tval;

     function section2() {
         // console.dir($('.section2>.inner>h3'));
         $('.section2>.inner>h3').css('animation', 'slide .3s linear forwards');
         $('.section2').find('.img1').css('animation', 'move .7s 1.0s linear forwards');
         $('.section2').find('.img2').css('animation', ' move 1s 1.5s linear forwards');
     }

     function section3() {
         $('.section3>.inner>h3').css('animation', 'slide .3s linear forwards');
         $('.section3 img').css('animation', 'newface .3s .5s linear forwards');
     }

     function section4() {
         $('.section4>.inner>h3').css('animation', 'slide .2s linear forwards');
         $('.section4 img').css('animation', 'newface .4s .6s linear forwards');
         $('.section5 .pic').css('animation', 'last 2s 2s linear forwards');
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

         }
     })
     //section1的时隐时现效果
     var li='#list';
     var now=1;
     init(li);
     function init(selector) {
        setInterval(function() {
            var next=now===3?1:now+1;
            var nextnext=now===1?3:now-1;
            var nowPic=$(selector+now);
            var nextPic=$(selector+next);
            var nextnextPic=$(selector+nextnext);
            
            nowPic.animate({
                opacity: 0
            },1000).css('z-index',0);
            nextPic.animate({
                opacity: 1
            },1000).css('z-index',2);
            nextnextPic.css('z-index',1);
            now=next;
        },3000)
     }
 })