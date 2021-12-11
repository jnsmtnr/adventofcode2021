const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const octopuses = input.split('\n').filter(Boolean).map(line => line.split('').map(octopus => ({ value: Number(octopus), flashed: false })))

let flashes = 0

for (let day = 0; day < 100; day++) {
    let flashing = false

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            octopuses[row][col].value++
            octopuses[row][col].flashed = false
            if (octopuses[row][col].value > 9) flashing = true
        }
    }

    while (flashing) {
        flashing = false

        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                if (octopuses[row][col].value < 10) continue

                octopuses[row][col].value = 0
                octopuses[row][col].flashed = true
                flashes++

                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if (i === 0 && j === 0) continue

                        if (octopuses[row - i] && octopuses[row - i][col - j] && !octopuses[row - i][col - j].flashed) {
                            octopuses[row - i][col - j].value++
                            if (octopuses[row - i][col - j].value > 9) flashing = true
                        }
                    }
                }
            }
        }
    }
}

console.log(flashes)
