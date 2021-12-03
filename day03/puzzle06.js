const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const binaries = input.split('\n').filter(Boolean)

function filterBinaries(binaries, index, o2) {
    if (binaries.length === 1 || index > binaries[0].length) {
        return binaries[0]
    }

    const bits = { [0]: 0, [1]: 0 }

    for (const binary of binaries) {
        if (binary[index] === '0') bits[0]++
        else bits[1]++
    }

    let criteria

    if (o2) criteria = bits[0] > bits[1] ? '0' : '1'
    else criteria = bits[0] > bits[1] ? '1' : '0'


    return filterBinaries(binaries.filter(binary => binary[index] === criteria), index + 1, o2)
}

const o2 = parseInt(filterBinaries(binaries, 0, true), 2)
const co2 = parseInt(filterBinaries(binaries, 0, false), 2)

console.log(o2 * co2)
