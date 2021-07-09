
var canvas = document.getElementById('myGame');
var ctx = canvas.getContext("2d");
const car = new Image();
const road = new Image();
const boundary = new Image();
const rev_car = new Image();
const carW = 48;
const carH = 92;
let x = 376;
let y = 508;
let x1 = Math.floor(Math.random() * (483.5 - 227 + 1) + 227);
let y1 = 0;
let speed = 2;
let dir = 0;
let mod = 0;


document.addEventListener("DOMContentLoaded", () => {
    init();
});


let count = 0;
function onImageLoad() {
    count++;
    if (count = 4) {
        draw();
    }
}
function init() {


    car.onload = onImageLoad;
    road.onload = onImageLoad;
    boundary.onload = onImageLoad;
    rev_car.onload = onImageLoad;


    car.src = "https://s3.envato.com/files/144775074/Aston-Martin_ONE77_02.png";
    rev_car.src = "revcar.png";
    road.src = "https://i.pinimg.com/originals/c8/e8/e7/c8e8e705cbda61caf9932309ef8cb5bf.jpg";
    boundary.src = "boundary.jpg";


    window.addEventListener("keydown", keyHandler);
    window.addEventListener("keyup", keyHandler);

}

function draw() {
    if (x >= 226.5 && x <= 525.5) {
        x += speed * mod;

    }
    else {
        if (x < 226.5) {
            x = 226.5;
        }
        else if (x > 525.5) {
            x = 525.5;
        }

    }
    if (y >= 0 && y <= 500) {
        y -= speed * dir;
    }
    else {
        if (y < 0) {
            y = 0;
        }
        else if (y > 500) {
            y = 500;
        }
    }

    if (x1 >= 227 && y1 <= 600) {
        y1++;
    }
    else {
        y1 = -110;
        x1 = Math.floor(Math.random() * (483.5 - 227 + 1) + 227);
    }



    let timer = setTimeout(() => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(boundary, 0, 0, 226.5, 600);
        ctx.drawImage(road, 226.5, 0);
        ctx.drawImage(boundary, 573.5, 0, 226.5, 600);
        ctx.drawImage(car, x, y, 48, 92);
        ctx.drawImage(rev_car, x1, y1, 90, 110);
        draw();


    }, 20);



}

function keyHandler(e) {
    console.log(e);
    switch (e.type) {
        case 'keydown':
            switch (e.code) {
                case 'KeyW':
                case 'ArrowUp':
                    dir = 1;
                    break;
                case 'KeyS':
                case 'ArrowDown':
                    dir = -1;
                    break;
                case 'KeyA':
                case 'ArrowLeft':
                    mod = -1;
                    break;
                case 'KeyD':
                case 'ArrowRight':
                    mod = 1;
                    break;

            }
            break;

        case "keyup":
            switch (e.code) {
                case 'KeyW':
                case 'ArrowUp':
                case 'KeyS':
                case 'ArrowDown':
                    dir = 0;
                    break;
                case 'KeyA':
                case 'ArrowLeft':
                case 'KeyD':
                case 'ArrowRight':
                    mod = 0;
                    break;
            }
            break;
    }

}




