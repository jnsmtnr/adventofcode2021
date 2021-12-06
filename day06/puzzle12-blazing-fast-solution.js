
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')

let fishes = input.split(',').filter(Boolean).reduce((fishes, fish) => {
    fishes[fish.trim()]++

    return fishes
}, { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0 })

for (let i = 0; i < 256; i++) {
    const newFishes = {
        '0': fishes['1'],
        '1': fishes['2'],
        '2': fishes['3'],
        '3': fishes['4'],
        '4': fishes['5'],
        '5': fishes['6'],
        '6': fishes['7'] + fishes['0'],
        '7': fishes['8'],
        '8': fishes['0']
    }

    fishes = newFishes
}

const numberOfFishes = Object.values(fishes).reduce((sum, fish) => sum + fish, 0)

console.log(numberOfFishes)
