//animal.ts
class Animal{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public speak(): void{
        console.log("what the animal say?");
    }
}
// kế thừa
class Dog extends Animal{
    public speak(): void{
     console.log(`the ${this.name} say gaw gaw gaw gaw gaw gaw`);
    }
}
// kế thừa
class Cat extends Animal{
    public speak(): void{
     console.log(`the ${this.name} say meow meow meow meow meow meow meow meow meow`);
    }
}


//đa hình
const dog = new Dog('doggy');
const cat = new Cat('katy');
dog.speak();
cat.speak();