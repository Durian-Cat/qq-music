var content2 = document.querySelector(".gk_content2");
var html = document.querySelector("html");
var content2h1 = document.querySelector(".gk_content2 h1");
var content = document.querySelector(".gk_content");
var content2img = document.querySelector(".gk_content2 img");
var content2p = document.querySelector(".gk_content2 p");
var content2ul = document.querySelector(".gk_content2 ul");
var content3 = document.querySelector(".gk_content3");
var content3img = document.querySelector(".gk_content3 img");
var content3p = document.querySelector(".gk_content3 .aa");
var content3h1 = document.querySelector(".gk_content3 h1");
var content3ul = document.querySelector(".gk_content3 ul");
var content4h1 = document.querySelector(".gk_content4 h1");
var content4img = document.querySelector(".gk_content4 img");
var content4p = document.querySelector(".gk_content4 p");
var content4ul = document.querySelector(".gk_content4 ul");
var contenth1 = document.querySelector(".gk_content h1");
var contentimg = document.querySelector(".gk_content img");
var contentp = document.querySelector(".gk_content p");
var contentul = document.querySelector(".gk_content ul");
document.onscroll = function () {
  var top = html.scrollTop;
  var cot = content.offsetTop;
  // console.log(cot);
  if (top > 400) {
    contenth1.style.display = "block";
    contenth1.style.animation = "nr2h1 1s linear forwards";
    contentimg.style.display = "block";
    contentimg.style.animation = "nr2 1s linear forwards";
    contentp.style.top = "0";
    contentp.style.display = "block";
    contentp.style.animation = "nr2p 1.5s linear forwards";
    contentul.style.top = "0";
    contentul.style.display = "block";
    contentul.style.animation = "nr2ul 2s linear forwards";
  }
  if (top > cot + 300) {
    content2h1.style.top = "0";
    content2h1.style.display = "block";
    content2h1.style.animation = "nr2h1 1.5s linear forwards";
    content2img.style.display = "block";
    content2img.style.animation = "nr2 1.5s linear forwards";
    content2p.style.top = "0";
    content2p.style.display = "block";
    content2p.style.animation = "nr2p 2s linear forwards";
    content2ul.style.top = "0";
    content2ul.style.display = "block";
    content2ul.style.animation = "nr2ul 2.5s linear forwards";
  }
  var top2 = content2.offsetTop;
  if (top > top2 + 300) {
    content3img.style.display = "block";
    content3img.style.animation = "nr3 1.5s linear forwards";
    content3h1.style.top = "0";
    content3h1.style.display = "block";
    content3h1.style.animation = "nr3h1 1.5s linear forwards";
    content3p.style.top = "0";
    content3p.style.display = "block";
    content3p.style.animation = "nr3aa 2s linear forwards";
    content3ul.style.top = "0";
    content3ul.style.display = "block";
    content3ul.style.animation = "nr3ul 2.5s linear forwards";
  }

  var top3 = content3.offsetTop;
  if (top > top3) {
    content4h1.style.top = "0";
    content4h1.style.display = "block";
    content4h1.style.animation = "nr4h1 1.5s linear forwards";
    content4img.style.display = "block";
    content4img.style.animation = "nr4 1.5s linear forwards";
    content4p.style.top = "0";
    content4p.style.display = "block";
    content4p.style.animation = "nr4p 2s linear forwards";
    content4ul.style.top = "0";
    content4ul.style.display = "block";
    content4ul.style.animation = "nr4ul 2.5s linear forwards";
  }
};