// kế thừa
class Animal{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public speak(): void{
        console.log("what the animal say?");
    }
}

class Dog extends Animal{
    public speak(): void{
     console.log(`the ${this.name} say gaw gaw gaw gaw gaw gaw`);
    }
}
class Cat extends Animal{
    public speak(): void{
     console.log(`the ${this.name} say meow meow meow meow meow meow meow meow meow`);
    }
}


//đa hình
function animalSpeak(animal: Animal): void{
    animal.speak();
}

const dog = new Dog('doggy');
const cat = new Cat('katy');
animalSpeak(dog);
animalSpeak(cat);