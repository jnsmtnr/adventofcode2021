const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')

let fishes = input.split(',').filter(Boolean).map(Number)

for (let i = 0; i < 80; i++) {
    const oldFishes = []
    const newFishes = []

    for (let fish of fishes) {
        if (fish > 0) oldFishes.push(--fish)
        else if (fish === 0) {
            oldFishes.push(6)
            newFishes.push(8)
        }
    }

    fishes = oldFishes.concat(newFishes)
}

console.log(fishes.length)
