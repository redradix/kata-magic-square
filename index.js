const square = [
  [3, 7, 2],
  [4, 9, 6],
  [1, 8, 5],
]

const CROSS_COORDS = [
  [
    [2, 1],
    [0, 1],
  ],
  [
    [1, 0],
    [1, 2],
  ],
]
const DIAGONAL_COORDS = [
  [
    [0, 2],
    [2, 0],
  ],
  [
    [0, 0],
    [2, 2],
  ],
]

/**
 * First option: Divide the sum of all values of the square by n (being n the length of square)
 * Second option: Multiply the median of all values of the square by n (being n the length of square)
 */
const getMagicSum = square => {
  const sum = square.reduce((prev, curr) => {
    return prev + curr.reduce((a, b) => a + b, 0)
  }, 0)
  return sum / square.length
}

/**
 * The median of all sorted values of the square
 */
const getCenter = square => {
  const arr = square.flat().sort()
  const mid = Math.ceil(arr.length / 2)
  return arr.length % 2 == 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid - 1]
}

const initMatrix = (rows, cols) => {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(undefined))
}

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

const getPairs = (arr, pairs = []) => {
  if (arr.length <= 1) return pairs
  else {
    const first = arr.shift()
    const last = arr.pop()
    pairs.push([first, last])
    return getPairs(arr, pairs)
  }
}

const fillMatrix = (matrix, coords, pairs) => {
  coords.forEach(([coord1, coord2], i) => {
    matrix[coord1[0]][[coord1[1]]] = pairs[i][0]
    matrix[coord2[0]][[coord2[1]]] = pairs[i][1]
  })
  return matrix
}

const main = square => {
  const magicSum = getMagicSum(square)

  if (checkMagic(square, magicSum)) {
    return square
  }

  const arr = square.flat().sort()
  const pairs = getPairs([...arr])
  const center = getCenter(square)

  const oddPairs = pairs.filter((_, index) => index % 2 === 0)
  const evenPairs = pairs.filter((_, index) => index % 2 !== 0)

  let matrix = initMatrix(3, 3)

  matrix = fillMatrix(matrix, CROSS_COORDS, oddPairs)
  matrix = fillMatrix(matrix, DIAGONAL_COORDS, evenPairs)
  matrix[1][1] = center

  return checkMagic(matrix, magicSum) ? matrix : false
}

const magicSquare = main(square)

if (magicSquare) {
  console.log('✨ The magic square is')
  console.table(magicSquare)
} else {
  console.log('There is no magic square possible with those numbers 😔')
}

module.exports = {}
