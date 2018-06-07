window.onload = function() {
    var rotate = 0,
        rotation = setInterval(run, 30);

    function run() {
        if (rotate > 356) { rotate = 0; }
        rotate += 3;
        document.querySelector("#box").style.transform = "rotateY(" + rotate + "deg)";
    }
    document.querySelector("#view").onmouseover = function() { window.clearInterval(rotation)};
    document.querySelector("#view").onmouseout = function() { window.clearInterval(rotation);rotation = setInterval(run, 20); };
};