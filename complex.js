var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.subtract = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.abs = function () {
        return Math.sqrt(this.real + this.imaginary);
    };
    Complex.prototype.toString = function () {
        return String(this.real) + " " + String(this.imaginary);
    };
    return Complex;
}());
var com = new Complex(3, 2);
var com2 = new Complex(4, 1);
var com3 = com.add(com2);
console.log(com3);
var com4 = com.subtract(com2);
console.log(com4);
var com5 = com.abs();
console.log(com5);
