//dog.ts
import { Animal } from "./animal";
// kế thừa
export class Dog extends Animal {
  public speak(): void {
    console.log(`the ${this.name} say gaw gaw gaw gaw gaw gaw`);
  }
}
