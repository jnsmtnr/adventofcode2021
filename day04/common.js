function playBingo(boards, numbers) {
    for (let i = 1; i < numbers.length; i++) {
        const bingo = checkBoards(boards, numbers.slice(0, i))
        if (bingo) return bingo
    }
}

function checkBoards(boards, numbers) {
    for (const board of boards) {
        result = checkBingo(board, numbers)
        if (result) {
            return result
        }
    }
}

function checkBingo(board, numbers) {
    for (row of board) {
        let hits = 0
        for (const number of numbers) {
            if (row.includes(number)) hits++
            if (hits === 5) return calcScore(board, numbers)
        }
    }

    for (let col = 0; col < 5; col++) {
        let hits = 0
        for (let row = 0; row < 5; row++) {
            if (numbers.includes(board[row][col])) hits++
            if (hits === 5) return calcScore(board, numbers)
        }
    }
}

function calcScore(board, numbers) {
    const left = [].concat(...board).filter(number => !numbers.includes(number))

    return left.reduce((acc, cur) => acc + +cur, 0) * +numbers.pop()
}

function getNumbers(input) {
    return input.split('\n\n')[0].split(',')
}

function getBoards(input) {
    return input.split('\n\n').slice(1).map(board => board.split('\n').filter(Boolean).map(line => line.split(' ').filter(Boolean)))
}

module.exports = {
    checkBoards,
    checkBingo,
    playBingo,
    getNumbers,
    getBoards,
}