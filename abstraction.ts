abstract class Shape{
    abstract area(): number;
    abstract perimeter(): number;
}
class Square extends Shape{
    private side : number;
    
    constructor(side : number){
        super()
        this.side = side;
    }

    public area(): number{
        return this.side*4;
    }
    public perimeter(): number{
        return this.side*this.side;
    }

}
class Circle extends Shape{
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
const square = new Square(4)
const cirle = new Circle(5);

console.log('area of square:', square.area());
console.log('radius of circle:', square.perimeter());
console.log('area of circle: ', cirle.area());
console.log('radius of circle: ', cirle.perimeter());