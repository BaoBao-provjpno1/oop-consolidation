//cat.ts
import { Animal } from "./animal";
// kế thừa
export class Cat extends Animal {
    public speak(): void {
      console.log(
        `the ${this.name} say meow meow meow meow meow meow meow meow meow`
      );
    }
  }