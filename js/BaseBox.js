export class BaseBox {
    constructor(xyValues) {
        this.x = xyValues.x - xyValues.width / 2;
        this.y = xyValues.y - xyValues.height / 2;
        this.width = xyValues.width;
        this.height = xyValues.height;
        this.color = xyValues.color;
        this.isAlive = true;
    }

    set x(value) {
        this._x = value;
    }

    get x() {
        return this._x;
    }

    set y(value) {
        this._y = value;
    }

    get y() {
        return this._y;
    }

    set width(value) {
        this._w = value;
    }

    get width() {
        return this._w;
    }

    set height(value) {
        this._h = value;
    }

    get height() {
        return this._h;
    }

    hitTest(ball){
        let distX = Math.abs ( ball.x - this.x-this.width/2 );
        let distY = Math.abs ( ball.y - this.y-this.height/2);
 
         if(distX <= (ball.radius + this.width/2) && distY <= (ball.radius + this.height/2)){
             return true;
         }  else {
             return false;
         }
     }
 
     get boundaries() {
         return {
             top: this._y,
             left: this._x,
             bottom: this._y + this._h,
             right: this._x + this._w
 
         };
     }

     draw(ctx) {
         if(this.isAlive){
        ctx.fillStyle = this.color;
        ctx.fillRect(this._x, this._y, this._w, this._h);
    }
}
    
}