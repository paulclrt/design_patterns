// single responsibility principle: ensure that the class has a single instance + avoid global variable and their unsafe behavior
// difficulty since i never used typescript before is the static, private, public keywords and how to use them...

class Singleton{
    static singleton: Singleton;
    counter: number = 0;

    private constructor () {
        // this is conly called once
        console.log("regular constructor")
    }


    increment() {
        this.counter += 1
        return this.counter
    }


    public static getInstance(): Singleton {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton()
        } 
        return Singleton.singleton
    }



}


// let singleton: Singleton = new Singleton() // you can't call new since it is private.
// let singleton2: Singleton = new Singleton() // you must use getInstance as bellow

let singleton: Singleton = Singleton.getInstance()
let singleton2: Singleton = Singleton.getInstance()

console.log(singleton.increment())
console.log(singleton.increment())
console.log(singleton.increment())
console.log(singleton.increment())
console.log(singleton2.increment())
console.log(singleton2.increment())
console.log(singleton2.increment())
console.log(singleton2.increment())
console.log(singleton2.increment())
console.log(singleton2.increment())


//output: 1 to 10
