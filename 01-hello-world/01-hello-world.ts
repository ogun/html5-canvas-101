var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

window.onload = () => {
   canvas = <HTMLCanvasElement>document.getElementById("cnvs");
   ctx = canvas.getContext("2d");

   ctx.fillStyle = "red";
   ctx.fillRect(10, 10, 10, 10);

   ctx.fillStyle = "green";
   ctx.arc(100, 100, 50, 0, 2 * Math.PI);
   ctx.fill();
}