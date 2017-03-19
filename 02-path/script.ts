var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("cnvs");
    ctx = canvas.getContext("2d");

    ctx.strokeStyle = "red";
    ctx.beginPath();

    // Go to without stroke 
    ctx.moveTo(50, 30);
    for (var i = 0; i < 100; i++) {
        var x = Math.floor(Math.random() * 400) + 1;
        var y = Math.floor(Math.random() * 400) + 1;

        // Draw line
        ctx.lineTo(x, y);
    }

    ctx.stroke();
}