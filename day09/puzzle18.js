const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const map = input.split('\n').filter(Boolean).map(line => line.split(''))

const basins = {}

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
        if (map[y][x] === '9') continue

        let u = x
        let v = y
        let flow = true

        while (flow) {
            if (map[v][u - 1] !== undefined && map[v][u - 1] < map[v][u]) {
                u -= 1
            }
            else if (map[v][u + 1] !== undefined && map[v][u + 1] < map[v][u]) {
                u += 1
            }
            else if (map[v - 1] !== undefined && map[v - 1][u] !== undefined && map[v - 1][u] < map[v][u]) {
                v -= 1
            }
            else if (map[v + 1] !== undefined && map[v + 1][u] !== undefined && map[v + 1][u] < map[v][u]) {
                v += 1
            }
            else {
                flow = false

                if (basins[u + '-' + v]) basins[u + '-' + v]++
                else basins[u + '-' + v] = 1
            }
        }
    }
}

const sizes = Object.values(basins).sort((a, b) => b - a)

console.log(sizes[0] * sizes[1] * sizes[2])
