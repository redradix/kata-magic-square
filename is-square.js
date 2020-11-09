module.exports = matrix => {
  const rowSizes = matrix.map(row => row.length)
  return new Set([matrix.length, ...rowSizes]).size === 1
}