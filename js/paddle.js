import { BaseBox } from "./BaseBox.js";

export class Paddle extends BaseBox {
    constructor(xyValues) {
        super(xyValues);
        this.xMaxBound = xyValues.xMaxBound - xyValues.width;
        this.speed = 0;
        this.color = 'bisque',
        this.maxSpeed = 8 ;
        this.direction = '';
    }

    // set x(value) {
    //     this._x = value;
    // }

    // get x() {
    //     return this._x;
    // }

    // set y(value) {
    //     this._y = value;
    // }

    // get y() {
    //     return this._y;
    // }

    // set width(value) {
    //     this._w = value;
    // }

    // get width() {
    //     return this._w;
    // }

    // set height(value) {
    //     this._h = value;
    // }

    // get height() {
    //     return this._h;
    // }

    // hitTest(ball){
    //    let distX = Math.abs ( ball.x - this.x-this.width/2 );
    //    let distY = Math.abs ( ball.y - this.y-this.height/2);

    //     if(distX <= (ball.radius + this.width/2) && distY <= (ball.radius + this.height/2)){
    //         return true;
    //     }  else {
    //         return false;
    //     }
    // }

    // get boundaries() {
    //     return {
    //         top: this._y,
    //         left: this._x,
    //         bottom: this._y + this._h,
    //         right: this._x + this._w

    //     };
    // }

    move(direction) {
        // if (this.speed < this.maxSpeed) {
        //     if ( direction === 'left'){
        //         this.speed-- ;
        //     } else if ( direction === 'right') {
        //         this.speed++;
        //     }

        // }
        this.direction = direction;
    }

    stop(direction) {
        // this.speed = 0 ;
        this.direction = '';
    }


    update() {
        // if ( this.x > 0 && this.x <=700){
        //     this.x += this.speed;
        let x = this.x;
        if (this.direction === 'left') {
            this.speed = (x > 0) ? -this.maxSpeed : 0;
            // console.log(this.speed)
        } else if (this.direction === 'right'){
            this.speed = (x < this.xMaxBound)? this.maxSpeed : 0;
        }else{
            this.speed = 0;
        }
        this.x += this.speed;

    }



// draw(ctx) {
//     ctx.fillStyle = "gray";
//     ctx.fillRect(this._x, this._y, this._w, this._h);
// }
}


