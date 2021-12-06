const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')

const fishes = input.split(',').filter(Boolean).map(Number)

class LinkedFish {
    init = true
    first = {}
    next = {}

    push(value, numberOfFishes) {
        const next = {}
        if (this.init) {
            this.first.value = value
            this.first.numberOfFishes = numberOfFishes
            this.first.next = next
            this.init = false
        }
        else {
            this.next.value = value
            this.next.numberOfFishes = numberOfFishes
            this.next.next = next
        }
        this.next = next
    }

    print() {
        let current = this.first
        let fishes = ''
        while (current.next) {
            fishes += current.value + ', '
            current = current.next
        }
        console.log(fishes)
    }

    spawn() {
        let newFishes = 0
        let current = this.first
        while (current.next) {
            if (current.value > 0) current.value--
            else if (current.value === 0) {
                current.value = 6
                newFishes += current.numberOfFishes
            }
            current = current.next
        }
        this.push(8, newFishes)
    }

    getLength() {
        let length = 0
        let current = this.first
        while (current.next) {
            length += current.numberOfFishes
            current = current.next
        }
        return length
    }
}

const linkedFish = new LinkedFish()

for (let i = 0; i < fishes.length; i++) {
    linkedFish.push(fishes[i], 1)
}

for (let day = 0; day < 256; day++) {
    linkedFish.spawn()
}

console.log(linkedFish.getLength())
