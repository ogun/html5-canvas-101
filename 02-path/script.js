var canvas;
var ctx;
window.onload = function () {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(50, 30);
    for (var i = 0; i < 100; i++) {
        var x = Math.floor(Math.random() * 400) + 1;
        var y = Math.floor(Math.random() * 400) + 1;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
};
