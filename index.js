const square = [
  [3, 7, 2],
  [4, 9, 6],
  [1, 8, 5]
]

// [1,2,3,4,5,6,7,8,9]
// [1,9]
// [2,8]
// [3,7]
// [4,6]

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

const initMap = keys => {
  const map = new Map()
  keys.forEach(i => {
    map.set(i, false)
  })
  return map
}

const checkArr = arr => {
  const magicSum = getMagicSum(square)
  return magicSum === arr.reduce((a, b) => a + b, 0)
}

const magic = (map, arr, center) => {
  console.log(map)
}

const getPairs = (arr, pairs = []) => {
  if (arr.length <= 1)
    return pairs
  else {
    const first = arr.shift()
    const last = arr.pop()
    pairs.push([first, last])
    return getPairs(arr, pairs)
  }
}

const main = square => {

  // IF square is magic then finish the program
  //
  // ELSE
  //

  const arr = square.flat().sort()
  const pairs = getPairs([...arr])

  const center = getCenter(square)

  const centerRow = [pairs[0][0], center, pairs[0][1]]
  pairs.shift()
  console.log(pairs)
  const upperRow = [undefined, undefined, undefined]
  const lowerRow = [undefined, undefined, undefined]


  // const map = initMap(arr)
  // magic(map, arr, center)
}

const magicSquare = main(square)


module.exports = {}
