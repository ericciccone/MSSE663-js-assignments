export interface Cat {
    markings: string;
    name: string;
    age: number;
    getName: () => string;
    getAge: () => number;
    isComplete: (markings: string, name: string, age: number) => boolean;
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

    isComplete(markings: string, name: string, age: number) : boolean {
        return !(markings && name && age == null || markings && name && age === 0);
        }
    }
}

const sparrow = new Bengal("rosettes", "sparrow", 7);
console.log(sparrow.getName());
console.log(sparrow.getAge());
console.log(sparrow.isComplete("rosttes", "sparrow", 7));
