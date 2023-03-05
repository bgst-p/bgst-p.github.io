const reso = document.getElementById("reso")
const pointer = document.getElementById("pointer")
const conn = document.getElementById("conn")
const explain = document.getElementById("explain")
const ppimg = document.getElementById("ppimg")
const ppimg2 = document.getElementById("ppimg2")
const badge = document.getElementById("badge")
const seeP = document.getElementById("seeP")
const NF = document.getElementById("NF")
const popup = document.getElementById("popup")
const pp = document.getElementById("pp")
const closepop = document.getElementById("closepop")
var x = 0;
var y = 0;

setInterval(function() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    reso.innerHTML = w+" x "+h;

    if (w <= 767){
        ppimg.style.display = "none"
        ppimg.style.width = "0px"
        ppimg2.style.display = "block"
        setTimeout(function(){
            ppimg2.style.height = "200px"
        },200)
    }else{
        ppimg.style.display = "block"
        setTimeout(function(){
            ppimg.style.width = "230px"
        },200)
        ppimg2.style.display = "none"
        ppimg2.style.height = "0px"
    }
}, 50);

setInterval(function() {
    x++;
    if (x % 2 == 0) {
        pointer.style.opacity = 0;
        conn.style.color = "rgb(117, 61, 141)"
    } else {
        pointer.style.opacity = 1;
        conn.style.color = "lightgreen"
    }
}, 600);

setInterval(function() {
    y++;
    if (y == 20) {
        y = 0;
    }

    let text = "'project'..";
    let result = text.slice(0, y);
    document.getElementById("project").innerHTML = result;

}, 250);

function seeProject(){
    if(seeP.innerHTML === '<i class="fa fa-chevron-down"></i>'){
        seeP.innerHTML = '<i class="fa fa-chevron-up"></i>';
        NF.style.display = "block";
        setTimeout(function(){
            NF.style.marginTop = "0";
            NF.style.opacity = "1";
        }, 200)
    }else{
        seeP.innerHTML = '<i class="fa fa-chevron-down"></i>';
        NF.style.marginTop = "-100px";
        NF.style.opacity = "0";
        setTimeout(function(){
            NF.style.display = "none";
        }, 500)
    }
}

function dataUser(){
    popup.style.zIndex = "1"
    popup.style.opacity = "1"
    popup.style.width = "100%"
    pp.style.backgroundColor = "wheat"
}

function closeUser(){
    popup.style.opacity = "0"
    popup.style.width = "0"
    pp.style.backgroundColor = "rgb(68, 36, 82)"
    setTimeout(function (){
        popup.style.zIndex = "-1"
    }, 200)
}