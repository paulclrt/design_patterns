// Builder.ts - Builder Design pattern



class Director {
    builder: Builder;

    constructor(builder?: Builder) {
        if (builder === undefined) {
            console.log("You need to defined a builder to use this class. DO it with the changeBuilder method");
        } else {
            this.builder = builder;
        }
    }

    changeBuilder(builder: Builder) {
        this.builder = builder;
    }


    make() {
        if (this.builder === undefined) {
            console.log("Error: No builder found")
            return
        }



        if (this.builder.type === "wooden") {
            this.builder.buildDoor()
            this.builder.buildRoof()
            this.builder.buildWalls()
            this.builder.buildWindows()
            // NO floor for the woodem one. Too expensive. They can live without
            
        } else if (this.builder.type === "metal") {
            this.builder.buildDoor()
            // this.builder.buildRoof() // No roof for this one, too heavy and would colapse
            this.builder.buildWalls()
            this.builder.buildWindows()
            this.builder.buildFloor()

        } else { console.log("unknown builder | cannot build object") }

    }

}


interface Builder {
    type: string;
    reset: Function;

    buildWalls: Function;
    buildRoof: Function;
    buildFloor: Function;
    buildWindows: Function;
    buildDoor: Function;

}


class WoodBuilder implements Builder {
    product: number;
    type: string = "wooden";
    reset() {console.log("reset wood")}

    buildWalls() {console.log("building wooden walls")};
    buildRoof() {console.log("building wooden roof")};
    buildFloor() {console.log("building wooden floor")};
    buildWindows() {console.log("building wooden windows")};
    buildDoor() {console.log("building wooden door")};

    getResults() {console.log("here is your wooden result")}

}

class MetalBuilder implements Builder {
    product: number;
    type: string = "metal";
    reset() {console.log("reset metal")}

    buildWalls() {console.log("building metal walls")};
    buildRoof() {console.log("building metal roof")};
    buildFloor() {console.log("building metal floor")};
    buildWindows() {console.log("building metal windows")};
    buildDoor() {console.log("building metal door")};

    getResults() {console.log("here is your metal result")}
}


let builderDirector = new Director();

let cabinBuilder = new WoodBuilder();
let ForteressBuilder = new MetalBuilder();


builderDirector.make();

builderDirector.changeBuilder(cabinBuilder);
builderDirector.make();
builderDirector.make();
builderDirector.changeBuilder(ForteressBuilder);
builderDirector.make();
