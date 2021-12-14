const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const polymer = input.split('\n\n')[0]
let pairs = {}

for (let i = 1; i < polymer.length; i++) {
    if (pairs[polymer[i-1] + polymer[i]]) pairs[polymer[i-1] + polymer[i]]++
    else pairs[polymer[i-1] + polymer[i]] = 1
}

const rules = input.split('\n\n')[1].split('\n').filter(Boolean).reduce((acc, line) => {
    const [pair, result] = line.split(' -> ')

    acc[pair] = result

    return acc
}, {})

for (let step = 0; step < 40; step++) {
    const newPairs = {}

    for (const pair in pairs) {
        const pair1 = pair[0] + rules[pair]
        const pair2 = rules[pair] + pair[1]

        if (newPairs[pair1]) newPairs[pair1] += pairs[pair] 
        else newPairs[pair1] = pairs[pair]

        if (newPairs[pair2]) newPairs[pair2] += pairs[pair]
        else newPairs[pair2] = pairs[pair]
    }

    pairs = newPairs
}

const elements = {}

for (const pair in pairs) {
    if (elements[pair[0]]) elements[pair[0]] += pairs[pair] / 2
    else elements[pair[0]] = pairs[pair] / 2

    if (elements[pair[1]]) elements[pair[1]] += pairs[pair] / 2
    else elements[pair[1]] = pairs[pair] / 2
}

const max = Math.ceil(Math.max(...Object.values(elements)))
const min = Math.ceil(Math.min(...Object.values(elements)))

console.log(max - min)
