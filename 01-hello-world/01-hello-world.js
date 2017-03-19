var canvas;
var ctx;
window.onload = function () {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 10, 10);
    ctx.fillStyle = "green";
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fill();
};
