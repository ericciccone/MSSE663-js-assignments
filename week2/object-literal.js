/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

var monkey = {
    name:'Japanese Macaque',
    nickname: 'Snow monkey',
    hangout: 'hot springs',
    formalizer: function() {
        return "A " + this.name + " is also known as a " + this.nickname;
    },
    hanging: function() {
        return "The " + this.nickname + " hangs out in " + this.hangout;
    }
};

console.log(monkey.formalizer());
console.log(monkey.hanging());

class Monkey {
    constructor(name, nickname, hangout) {
        this.name = name;
        this.nickname = nickname;
        this.hangout = hangout;
    }
    formalize() {
        return "A " + this.name + " is also known as a " + this.nickname;
    }
    hang() {
        return "The " + this.nickname + " hangs out in " + this.hangout;
    }

}

let kozaru = new Monkey('Japanese Macaque', 'Snow monkey', 'hotsprings');
console.log(kozaru.formalize());
console.log(kozaru.hang());
