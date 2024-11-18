//main.ts
//import 
import { Cat } from "./src/poly_n_andi/cat";
import { Dog } from "./src/poly_n_andi/dog";
import { Square } from "./src/abstraction/square";
import { Circle } from "./src/abstraction/circle";
import { bankAccount } from "./src/encapsulation/bank";
//polymorphism
const dog = new Dog("doggy");
const cat = new Cat("katy");
dog.speak();
cat.speak();

//encapsulation
const acount = new bankAccount("YoungBooprovjp", 9000);
acount.deposit(500);
acount.withdraw(5800);
console.log(acount.getBalance);


const square = new Square(5);
const cirle = new Circle(5);
//overridings
console.log("area of square:", square.area());
console.log("area of square:", square.area("hello Mr. TienTran, handsome! <3"));
console.log("radius of circle:", square.perimeter());
console.log("area of circle: ", cirle.area());
console.log("radius of circle: ", cirle.perimeter());


