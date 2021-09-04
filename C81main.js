Canvas = document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();

Canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
mousex= e.clientX-Canvas.offsetLeft;
mousey= e.clientY-Canvas.offsetTop;
console.log(mousex, mousey);
circle(mousex, mousey);
}

function circle(mousex, mousey) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mousex, mousey, 50, 0, 2*Math.PI);
    ctx.stroke();   
}