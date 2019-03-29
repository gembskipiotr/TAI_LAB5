"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    subtract(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    abs() {
        return Math.sqrt(this.real + this.imaginary);
    }
    toString() {
        return String(this.real) + " " + String(this.imaginary);
    }
}
let com = new Complex(3, 2);
let com2 = new Complex(4, 1);
let com3 = com.add(com2);
console.log(com3);
let com4 = com.subtract(com2);
console.log(com4);
let com5 = com.abs();
console.log(com5);
