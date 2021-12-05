const { readFileSync } = require("fs")

const input = readFileSync('input.txt', 'utf8')

const lines = input.split('\n').filter(Boolean).map(line => line.replace(' -> ', ',').split(',').map(Number))

const map = {}

for (const line of lines) {
    const [x1, y1, x2, y2] = line

    if (x1 !== x2 && y1 !== y2) continue

    if (x1 === x2) {
        for (let y = Math.min(y1, y2); y <= Math.max(y1,y2); y++) {
            if (map[x1 + '-' + y]) map[x1 + '-' + y]++
            else map[x1 + '-' + y] = 1
        }
    }

    if (y1 === y2) {
        for (let x = Math.min(x1, x2); x <= Math.max(x1,x2); x++) {
            if (map[x + '-' + y1]) map[x + '-' + y1]++
            else map[x + '-' + y1] = 1
        }
    }
}

let danger = 0

for (const point of Object.values(map)) {
    if (point > 1) danger++
}

console.log(danger)
