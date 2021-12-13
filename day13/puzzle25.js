const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

const points = input.split('\n\n')[0].split('\n').map(line => line.split(',').map(Number))
const x = 655

const newPoints = []

for (const point of points) {
    let newPoint
    if (point[0] < x) {
        newPoint = [...point]
    }
    else {
        const newX = x - (point[0] - x)
        const newY = point[1]
        newPoint = [newX, newY]
    }

    if (newPoints.some(point => point[0] === newPoint[0] && point[1] === newPoint[1])) continue

    newPoints.push(newPoint)
}

console.log(newPoints.length)
