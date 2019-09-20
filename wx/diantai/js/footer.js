var ld_dds = document.querySelectorAll('.pub_download');
for(var i = 0;i<ld_dds.length;i++){
    ld_dds[i].index = i
    ld_dds[i].onmouseenter = function(){
        this.style.color = '#31C37C';
        this.children[0].style.backgroundPosition = (-91)*this.index+'px'+' ' +'-55px';
        if(this.index == 6){
            this.children[0].style.backgroundPositionX = '-555px';
        }
    }
    ld_dds[i].onmouseleave = function(){
        this.style.color = '';
        this.children[0].style.backgroundPosition = (-91)*this.index+'px'+' ' +'-3px';
        if(this.index == 6){
            this.children[0].style.backgroundPositionX = '-555px';
        }
    }
}
var lis = document.querySelectorAll('.pub_ul_li');
for(var j = 0;j<lis.length;j++){
    lis[j].index = j;
    lis[j].onmouseenter = function(){
        this.style.color = '#31C37C';
    }
    lis[j].onmouseleave = function(){
        this.style.color = '';
    }
}

var footer_as = document.querySelectorAll('.footer_copyright a');
for(var i = 0;i<footer_as.length;i++){
    footer_as[i].onmouseenter = function(){
        this.style.color = '#31C37C';
    }
    footer_as[i].onmouseleave = function(){
        this.style.color = '';
    }
}