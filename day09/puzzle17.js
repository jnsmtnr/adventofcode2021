const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const map = input.split('\n').filter(Boolean).map(line => line.split(''))

let risk = 0

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
        if (map[y][x - 1] && map[y][x - 1] <= map[y][x]) continue
        if (map[y][x + 1] && map[y][x + 1] <= map[y][x]) continue
        if (map[y - 1] && map[y - 1][x] && map[y - 1][x] <= map[y][x]) continue
        if (map[y + 1] && map[y + 1][x] && map[y + 1][x] <= map[y][x]) continue

        risk += parseInt(map[y][x]) + 1
    }
}

console.log(risk)
