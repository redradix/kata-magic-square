const SQUARE = [
  [3, 7, 2],
  [4, 9, 6],
  [1, 8, 5]
]

const SQUARE_4 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
]

const getSide = (matrixArr) =>
  Math.sqrt(matrixArr.length)

const getRows = (matrixArr) => {
  const side = getSide(matrixArr)

  return Array(side).fill()
    .map((_, y) => Array(side).fill()
      .map((_, x) => matrixArr[x + y * side]))
}

const getColumns = (matrixArr) => {
  const side = getSide(matrixArr)

  return Array(side).fill()
    .map((_, y) => Array(side).fill()
      .map((_, x) => matrixArr[y + x * side]))
}

const getDiagonals = (matrixArr) => {
  const side = getSide(matrixArr)

  return [
    Array(side).fill()
      .map((_, i) => matrixArr[i + i * side]),
    Array(side).fill()
      .map((_, i) => matrixArr[(side - i - 1) + i * side]),
  ]
}

const getLines = (matrixArr) => [
  ...getRows(matrixArr),
  ...getColumns(matrixArr),
  ...getDiagonals(matrixArr),
]

const sum = (line) => line.reduce((acc, x) => acc + x, 0)

const checkMatrixArr = (matrixArr) =>
  getLines(matrixArr)
    .map(sum)
    .every((x, _, arr) => x === arr[0])

const findSquare = (initialMatrix = SQUARE) => {
  const numbers = initialMatrix
    .reduce((acc, row) => [...acc, ...row], [])

  return getRows(_findSquare([], numbers))
}

const _findSquare = (currentMatrix, possibilities) => {
  if (possibilities.length === 0) {
    if (checkMatrixArr(currentMatrix)) {
      return currentMatrix
    }

    return false
  }

  for (let i = 0; i < possibilities.length; i++) {
    const newMatrix = [...currentMatrix, possibilities[i]]
    const newPossibilities = [
      ...possibilities.slice(0, i),
      ...possibilities.slice(i + 1),
    ]

    const result = _findSquare(newMatrix, newPossibilities)

    if (result) {
      return result
    }
  }

  return false
}

console.log(findSquare(SQUARE_4))

module.exports = {
  findSquare,
}
