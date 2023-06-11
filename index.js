/*
    Execution Context
    this
    call
    apply
    bind
*/

// Functions as Properties of Objects

const byronPoodle = {
    name: "Byron",
    ageInYears: 2,
    warn: function () {
        console.log(`Bark bark bark`);
        console.log(this);
    }
};

byronPoodle.warn(); // Bark bark bark
console.log(this); // Window { ... }

const blakeDoodle = {
    name: "Blake",
    breed: "Labradoodle",
    sonicAttack: "ear-rupturing atomic bark",
    mostHatedThing: "noises in the apartment hallway",
    warn: function () {
        console.log(this);
        console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
    }
};

blakeDoodle.warn();

const frog = { name: "Kermit" };
const pig = { name: "Miss Piggy" };
const speak = function () { return `It ain't easy being ${this.name}` };

console.log(speak()); // It ain't easy being undefined
console.log(speak.call(frog)); // It ain't easy being Kermit
console.log(speak.call(pig)); // It ain't easy being Miss Piggy

frog.speak = speak;
pig.speak = speak;

console.log(frog.speak()); // It ain't easy being Kermit
console.log(pig.speak()); // It ain't easy being Miss Piggy


// The Execution Context of "Bare" Function Calls

const warn = function () {
    console.log(`Bark bark bark`);
    console.log(this);
}

warn(); // Bark bark bark
console.log(this); // Window { ... }

const contextReturner = function () {
    return this;
}

console.log(contextReturner()); //=> window
console.log(contextReturner() === global); //=> true (in Node:global, in browser: window)

// Implicitly-Set Context in Object-Oriented Programming

const warn2 = function () {
    console.log(`Bark bark bark`);
    console.log(this);
}

const byronPoodle2 = {
    name: "Byron",
    ageInYears: 2,
    warn: warn2
};

byronPoodle2.warn(); // Bark bark bark
console.log(this); // Window { ... }

