interface Transport {
    type?: string;
    name: string;
    deliver: Function;
}

abstract class TransportationFactory {
    internal_function() {
        // Some internal configuatio function for general bullshit;
        console.log("working hard to make it work ... uuuurhhh")
        return null;
    }

    public abstract create(name?: string, type?: string): Transport;
}


class Ship {
    name: string;
    type: string;

    constructor(name: string, type?: string) {
        this.name = name;
        this.type = type || "big ship" ;
    }

    deliver() {
        console.log(`${this.name}: starting big heavy engine`)
        console.log(`${this.name}: sailing`)
        console.log(`${this.name}: arrived at dock`)
    }
}

class Truck {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    deliver() {
        console.log(`${this.name}: starting engine`)
        console.log(`${this.name}: driving`)
        console.log(`${this.name}: arrived at desination`)
    }
}




class ShipFactory extends TransportationFactory {
    public create(name: string): Transport {
        return new Ship(name);
    }
}

class TruckFactory extends TransportationFactory {
    create(name: string): Transport {
        return new Truck(name);
    }
}



function clientCode(concreateCreator: TransportationFactory, name: string, type?: string) {
    // to replace with *args (yeah i am from python, idk what it is in TS)
    return concreateCreator.create(name, type);
}





function deliverToCustomer(transport: Transport) {
    if (transport.type) {
        console.log("transport is a: "+transport.type)
    }
    transport.deliver()
}


let truck = clientCode(new TruckFactory, "john", "truck")
let truck2 = clientCode(new TruckFactory, "johnny", "truck")

let ship = clientCode(new ShipFactory, "capitaine")
let ship2 = clientCode(new ShipFactory, "hadock", "ship")

deliverToCustomer(truck)
deliverToCustomer(ship)
deliverToCustomer(truck2)
deliverToCustomer(ship2)

