export interface Cat {
    markings: string;
    name: string;
    age: number;
    getName: () => string;
    getAge: () => number;
//    isComplete: () => boolean;
}

export class Bengal implements Cat {
    constructor (public markings: string, public name: string, public age: number) {
        this.markings = markings; 
        this.name = name; 
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

//    isComplete() {
//        if (!(this.markings && this.name && this.age)) { 
//            return true;}
//    }
}

const sparrow = new Bengal("rosettes", "sparrow", 7);
console.log(sparrow.getName());
console.log(sparrow.getAge());
