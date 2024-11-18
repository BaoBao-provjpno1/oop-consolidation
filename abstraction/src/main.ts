//main.ts
import { Square } from "./square";
import { Circle } from "./circle";
//constructor
const square = new Square(5);
const cirle = new Circle(5);

console.log("area of square:", square.area());
console.log("area of square:", square.area("hello Mr. TienTran, handsome! <3"));
console.log("radius of circle:", square.perimeter());
console.log("area of circle: ", cirle.area());
console.log("radius of circle: ", cirle.perimeter());
