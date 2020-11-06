const square = [
  [3, 7, 2],
  [4, 9, 6],
  [1, 8, 5]
]

const checkSolution = square => {

  // Check rows
  for (let i = 0; i < 3; i++) {
    const sum = square[i].reduce((a, b) => a + b, 0)
    if (sum !== 15)
      return false
  }

  // Check columns using transpose
  let copySquaure = [...square]
  copySquaure = copySquaure[0].map((col, i) => copySquaure.map(row => row[i]))
  for (let i = 0; i < 3; i++) {
    const sum = copySquaure[i].reduce((a, b) => a + b, 0)
    if (sum !== 15)
      return false
  }

  // Check first diagonal
  let sumDiagonals = 0
  for (let i = 0; i < 3; i++) {
    sumDiagonals += square[i][i]
  }
  if (sumDiagonals !== 15)
    return false

  // Check second diagonal
  sumDiagonals = 0
  for (let i = 0; i < 3; i++) {
    sumDiagonals += square[i][square.length - 1 - i]
  }
  if (sumDiagonals !== 15)
    return false

  return true

}

const backtracking = square => {
  for (let i = 0; i <= 9; i++) {
    let row = Math.floor(i / 3)
    let column = i % 3
    if (row > 2) {
      break
    }
    if (square[row][column] === 0) {
      for (let value = 1; value <= 9; value++) {
        if (!(square[0].includes(value) || square[1].includes(value) || square[2].includes(value))) {
          square[row][column] = value
          // console.log(square)
          if (checkSolution(square)) {
            console.log('solution')
            return true
          } else {
            if (backtracking(square)) {
              return true
            }
          }
        }
      }
      square[row][column] = 0
    }
  }
}

const mainx = square => {
  if (!checkSolution(square)) {
    const _square = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const solved = backtracking(_square)
    if (solved) {
      console.log(_square)
    } else {
      console.log('Solution not found')
    }
  } else {
    console.log(square)
  }

}

mainx(square)


module.exports = {}
