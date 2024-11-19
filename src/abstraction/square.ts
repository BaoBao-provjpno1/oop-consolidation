//square.ts
import { Shape } from "./shape";
export class Square extends Shape {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }
  //perimeter
  public perimeter(): number {
    return this.side * this.side;
  }
  //area overloading
  public area(): number;
  public area(a: string): string;

  public area(a?: string): string | number {
    if (a === undefined) return this.side * this.side;
    else if (typeof a === "string") return "type of a must be a number";
    return "invalid"; // case: invalid input
  }
}
