const input = require('fs').readFileSync('input.txt', 'utf8')

const algorithm = input.split('\n')[0]
let image = input.split('\n\n')[1].trim().split('\n')

const newImage = []

// top lines
for (let i = 0; i < 100; i++) {
    const length = image[0].length + 200

    const line = new Array(length).fill('.').join('')

    newImage.push(line)
}

// image
for (const img of image) {
    const line = new Array(100).fill('.').join('') + img + new Array(100).fill('.').join('')

    newImage.push(line)
}

// bottom lines
for (let i = 0; i < 100; i++) {
    const length = image[0].length + 200

    const line = new Array(length).fill('.').join('')

    newImage.push(line)
}

image = [...newImage]

for (let i = 0; i < 50; i++) {
    const newImage = []
    
    for (let row = 1; row < image.length - 1; row++) {
        let line = ''
    
        for (let col = 1; col < image[0].length - 1; col++) {
            let area = image[row - 1].slice(col - 1, col + 2) + image[row].slice(col - 1, col + 2) + image[row + 1].slice(col - 1, col + 2)
            
            area = area.replaceAll('.', '0').replaceAll('#', '1')
    
            line += algorithm[parseInt(area, 2)]
        }
        
        newImage.push(line)
    }
    
    image = [...newImage]
}

let light = 0

for (const char of image.join('n')) {
    if (char === '#') light++
}

console.log(light)
