var x;
var y;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function Rectangle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(50, 300, 150, 100);
    ctx.stroke();
}

function Circle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(300, 350, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function Triangle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(370, 400);
    ctx.lineTo(500, 400);
    ctx.moveTo(370, 400);
    ctx.lineTo(430, 300);
    ctx.moveTo(430, 300);
    ctx.lineTo(500, 400);
    ctx.fill();
    ctx.stroke();
}

function Square() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(550, 300, 100, 100);
    ctx.stroke();
}

function Text() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = 'FF0000';
    ctx.font = '30px Cooper';
    ctx.textAlign = 'center';
    ctx.fillText("Canvas Text", 600, 250);
}





