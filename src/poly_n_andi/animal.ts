//animal.ts
export class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
  //speak
  public speak(): void {
    console.log("what the animal say?");
  }
}
