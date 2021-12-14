// const input = `NNCB

// CH -> B
// HH -> N
// CB -> H
// NH -> C
// HB -> C
// HC -> B
// HN -> C
// NN -> C
// BH -> H
// NC -> B
// NB -> B
// BN -> B
// BB -> N
// BC -> B
// CC -> N
// CN -> C
// `

const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

let polymer = input.split('\n\n')[0]

const rules = input.split('\n\n')[1].split('\n').filter(Boolean).reduce((acc, line) => {
    const [pair, result] = line.split(' -> ')

    acc[pair] = result

    return acc
}, {})

for (let step = 0; step < 10; step++) {
    let newPolymer = polymer[0]

    for (let i = 1; i < polymer.length; i++) {
        newPolymer += rules[polymer[i-1] + polymer[i]] + polymer[i]
    }

    polymer = newPolymer
}

const elements = {}

for (const element of polymer) {
    if (elements[element]) elements[element]++
    else elements[element] = 1
}

const max = Math.max(...Object.values(elements))
const min = Math.min(...Object.values(elements))

console.log(max - min)
