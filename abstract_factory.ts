
// general interface of a chair
interface Chair {
    numberOfLegs: number;
    type: string;
    sitOn(): void;
}

/*
interface Table {
    numberOfLegs: number;
    length: number;
    width: number;
}

interface Sofa {
    numberOfLegs: number;
    sitOn(): void;
}
*/

//two types of chair we have
class VictorianChair implements Chair {
    type: string;
    numberOfLegs: number;

    constructor(type: string, numberOfLegs: number) {
        this.type = type;
        this.numberOfLegs = numberOfLegs;
    }

    sitOn():void {
        console.log("sat on victorian chair with " + this.numberOfLegs + " legs")
    } 
}

class ModernChair implements Chair {
    type: string;
    numberOfLegs: number;

    constructor(type: string, numberOfLegs: number) {
        this.type = type;
        this.numberOfLegs = numberOfLegs;
    }

    sitOn():void {
        console.log("sat on modern chair with " + this.numberOfLegs + " legs")
    }
}



// global factory
class ChairFactory {
    createChair(factory: Factory, type: string, numberOfLegs: number): Chair {
        return factory.createChair(type, numberOfLegs)
    }
}

// abstraction for the tiny factory bellow
interface Factory {
    createChair(type: string, numberOfLegs: number): Chair;
    // createTable(): Table;
    // createSofa(): Sofa;
}


// here are the two type of factory that create a similar prodict but with different apperance...
class ModernFurnitureFactory implements Factory {
    createChair(type: string, numberOfLegs: number) {
        return new ModernChair(type, numberOfLegs)
    }
    createTable() {}
    createSofa() {}
}

class VictorianFurnitureFactory implements Factory {
    createChair(type: string, numberOfLegs: number) {
        return new VictorianChair(type, numberOfLegs)
    }
    createTable() {}
    createSofa() {}
}


let chair_type:string = "modern"
let factory: Factory;
if (chair_type === "victorian") {
    factory = new VictorianFurnitureFactory()
} else {
    factory = new ModernFurnitureFactory()
}

const chair_factory: ChairFactory = new ChairFactory()
let chair = chair_factory.createChair(factory, chair_type, 2)
chair.sitOn()
