// Step 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (const product of dairy) {
        console.log(product);
    }
}

logDairy();

// Step 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}

birdCan();

// Step 3
function animalCan() {
    for (const key in bird) {
        if (bird.hasOwnProperty(key)) {
            console.log(`${key}: ${bird[key]}`);
        }
    }
    for (const key in bird.__proto__) {
        if (bird.__proto__.hasOwnProperty(key)) {
            console.log(`${key}: ${bird.__proto__[key]}`);
        }
    }
}

animalCan();
