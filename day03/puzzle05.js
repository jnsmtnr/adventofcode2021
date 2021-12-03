const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const binaries = input.split('\n').filter(Boolean)

function countBits(binaries) {
    const bits = {}

    for (const binary of binaries) {
        for (const index in binary) {
            if (bits[index] === undefined) bits[index] = { [0]: 0, [1]: 0 }
    
            if (binary[index] === '0') bits[index][0]++
            else bits[index][1]++
        }
    }

    let gamma = ''
    let epsilon = ''

    for (const index in bits) {
        if (bits[index][1] > bits[index][0]) {
            gamma += '1'
            epsilon += '0'
        }
        else {
            gamma += '0'
            epsilon += '1'
        }
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

console.log(countBits(binaries))
