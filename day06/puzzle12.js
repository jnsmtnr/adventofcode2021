const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')

const fishes = input.split(',').filter(Boolean).map(fish => ({ timer: +fish, number: 1 }))

for (let i = 0; i < 256; i++) {
    let newFishes = 0

    for (const fish of fishes) {
        if (fish.timer > 0) fish.timer--
        else if (fish.timer === 0) {
            fish.timer = 6
            newFishes += fish.number
        }
    }

    fishes.push({ timer: 8, number: newFishes })
}

let numberOfFishes = 0

for (const fish of fishes) {
    numberOfFishes += fish.number
}

console.log(numberOfFishes)
