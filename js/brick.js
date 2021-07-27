import { BaseBox } from "./BaseBox.js";

export class Brick extends BaseBox{
    constructor(xyvalues){
            super(xyvalues);
            this.score = xyvalues.score;
    }
}