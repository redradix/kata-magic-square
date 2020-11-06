const checkMagic = (square, sum) => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    const sum = square[i].reduce((a, b) => a + b, 0)
    if (sum !== sum) return false
  }
  // Check columns using transpose
  let copySquaure = [...square]
  copySquaure = copySquaure[0].map((_, i) => copySquaure.map(row => row[i]))
  for (let i = 0; i < 3; i++) {
    const sum = copySquaure[i].reduce((a, b) => a + b, 0)
    if (sum !== sum) return false
  }
  // Check first diagonal
  let sumDiagonals = 0
  for (let i = 0; i < 3; i++) {
    sumDiagonals += square[i][i]
  }
  if (sumDiagonals !== sum) return false
  // Check second diagonal
  sumDiagonals = 0
  for (let i = 0; i < 3; i++) {
    sumDiagonals += square[i][square.length - 1 - i]
  }
  if (sumDiagonals !== sum) return false
  return true
}

const buildMatrix = numbers => {
  const sortedNumbers = numbers.sort((a, b) => a - b)

  const min = sortedNumbers[0]
  const max = sortedNumbers[sortedNumbers.length - 1]
  const mid = sortedNumbers[Math.floor(sortedNumbers.length / 2)]
  const sum = min + max + mid

  const result = [[null, null, null], [null, null, null], [null, null, null]]

  result[1][0] = max
  result[1][1] = mid
  result[1][2] = min

  result[0][0] = min + 1
  result[2][2] = max - 1

  result[0][2] = max - 3
  result[2][0] = min + 3

  result[0][1] = max - 2
  result[2][1] = min + 2

  return result
}

const result1 = buildMatrix([3, 4, 5, 6, 7, 8, 9, 10, 11])
console.table(result1)
console.log('isMagic', checkMagic(result1, 21))

const result2 = buildMatrix([15, 16, 17, 18, 19, 20, 21, 22, 23, 24])
console.table(result2)
console.log('isMagic', checkMagic(result2, 59))

const result3 = buildMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.table(result3)
console.log('isMagic', checkMagic(result3, 15))
