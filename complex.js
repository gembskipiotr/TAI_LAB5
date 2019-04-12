"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(object) {
        return new Complex(this.real + object.real, this.imaginary + object.imaginary);
    }
    substract(object) {
        return new Complex(this.real - object.real, this.imaginary - object.imaginary);
    }
    module() {
        return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
    }
    toString() {
        console.log("Real: " + this.real + ", imaginary: " + this.imaginary);
    }
}
let com = new Complex(2, 3);
let com2 = new Complex(4, 5);
let com3 = com.add(com2);
com3.toString();
let com4 = com3.substract(com);
com4.toString();
let modulc = com4.module();
console.log(modulc);
