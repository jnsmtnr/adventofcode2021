const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

let points = input.split('\n\n')[0].split('\n').map(line => line.split(',').map(Number))
const folds = input.split('\n\n')[1].split('\n').filter(Boolean).map(line => line.split(' ')[2].split('='))

for (const fold of folds) {
    const newPoints = []

    for (const point of points) {
        let newPoint

        if (fold[0] === 'x') {
            if (point[0] < fold[1]) {
                newPoint = [...point]
            }
            else {
                const newX = fold[1] - (point[0] - fold[1])
                const newY = point[1]
                newPoint = [newX, newY]
            }
        }
        else {
            if (point[1] < fold[1]) {
                newPoint = [...point]
            }
            else {
                const newX = point[0]
                const newY = fold[1] - (point[1] - fold[1])
                newPoint = [newX, newY]
            }
        }
    
        if (newPoints.some(point => point[0] === newPoint[0] && point[1] === newPoint[1])) continue
    
        newPoints.push(newPoint)
    }

    points = newPoints
}

let maxX = 0
let maxY = 0
const map = {}

for (const point of points) {
    if (point[0] > maxX) maxX = point[0]
    if (point[1] > maxY) maxY = point[1]
    map[point[0] + '-' + point[1]] = true
}

for (let y = 0; y <= maxY; y++) {
    let line = ''

    for (let x = 0; x <= maxX; x++) {
        if (map[x + '-' + y]) line += '#'
        else line += ' '
    }

    console.log(line)
}
