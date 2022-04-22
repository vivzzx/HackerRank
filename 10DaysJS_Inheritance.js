class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
/*     area() {
        return this.w * this.h;
    } */
}
 
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
/* Object.defineProperty(Rectangle.prototype, 'area', {
    get() {
        return this.w * this.h;
    }
}) */

Rectangle.prototype.area = function() {
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(w, h) {
        super(w, h);
        this.w = w;
        this.h = w;
    }
} 


const rec = new Rectangle(3, 4);
const sqr = new Square(3);
console.log(sqr.constructor)

console.log(rec.area());
console.log(sqr.area()); 

