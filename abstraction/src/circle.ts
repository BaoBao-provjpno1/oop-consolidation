//circle.ts
import { Shape } from "./shape";

export class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  public area(): number {
    return 3.14 * this.radius ** 2;
  }

  public perimeter(): number {
    return 2 * 3.14 * this.radius;
  }
}
