const reso = document.getElementById("reso")
const pointer = document.getElementById("pointer")
const explain = document.getElementById("explain")
const ppimg = document.getElementById("ppimg")
const ppimg2 = document.getElementById("ppimg2")
const badge = document.getElementById("badge")
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
    } else {
        pointer.style.opacity = 1;
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