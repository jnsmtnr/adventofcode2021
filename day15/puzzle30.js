const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

let map = input.split('\n').filter(Boolean)
let newmap = []

for (const index in map) {
    let newline = map[index]
    for (let i = 1; i < 5; i++) {
        for (const char of map[index]) {
            const value = parseInt(char) + i <= 9 ? parseInt(char) + i : parseInt(char) + i - 9
            newline += value.toString()
        }
    }
    newmap.push(newline)
}

map = [...newmap]
newmap = []

for (let i = 0; i < 5; i++) {
    for (const line of map) {
        let newline = ''
        for (const char of line) {
            const value = parseInt(char) + i <= 9 ? parseInt(char) + i : parseInt(char) + i - 9
            newline += value.toString()
        }
        newmap.push(newline)
    }
}

map = [...newmap]

const paths = {}

for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map.length; y++) {
        paths[x + '-' + y] = Infinity
    }
}

paths['0-0'] = 0

let go = true

while (go) {
    go = false
    for (let x = 0; x < map.length; x++) {
        for (let y = 0; y < map.length; y++) {
            if (x === 0 && y === 0) continue
            const up = paths[(x) + '-' + (y - 1)] !== undefined ? paths[(x) + '-' + (y - 1)] : Infinity
            const down = paths[(x) + '-' + (y + 1)] !== undefined ? paths[(x) + '-' + (y + 1)] : Infinity
            const left = paths[(x - 1) + '-' + (y)] !== undefined ? paths[(x - 1) + '-' + (y)] : Infinity
            const right = paths[(x + 1) + '-' + (y)] !== undefined ? paths[(x + 1) + '-' + (y)] : Infinity

            const min = Math.min(up, down, left, right)
            const value = min === Infinity ? Infinity : min + parseInt(map[y][x])

            if (value < paths[x + '-' + y]) {
                paths[x + '-' + y] = value
                go = true
            }
        }
    }
}

console.log(paths[(map.length - 1) + '-' + (map.length - 1)])
