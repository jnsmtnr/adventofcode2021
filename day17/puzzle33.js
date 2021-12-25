const input = require('fs').readFileSync('input.txt', 'utf8')

let [, , targetX, targetY] = input.trim().split(' ')

targetX = targetX.replace('x=', '').replace(',', '').split('..').map(Number)
targetY = targetY.replace('y=', '').split('..').map(Number)

let maxTop = 0

for (let i = 0; i < 500; i++ ) {
    for (let j = 0; j < 500; j++) {
        let dx = 1 + i
        let dy = 1 + j
        
        let x = 0
        let y = 0
            
        let top = 0
        
        while (y > targetY[0]) {
            x += dx
            y += dy
        
            if (x > targetX[1]) break
        
            if (y > top) top = y
        
            if (x >= targetX[0] && x <= targetX[1] && y >= targetY[0] && y <= targetY[1]) {
                if (top > maxTop) maxTop = top
                break
            }
        
            if (dx > 0) dx--
            dy--
        }
    }
}

console.log(maxTop)
