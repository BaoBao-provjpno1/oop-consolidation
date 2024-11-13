//square.ts
import { Shape } from "./shape";
export class Square extends Shape {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }
  //area
  public area(): number {
    return this.side * 4;
  }
  //perimeter
  public perimeter(): number {
    return this.side * this.side;
  }
}
