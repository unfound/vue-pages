export function quickSort (arr) {
  if (!Array.isArray(arr)) throw new Error('quickSort的参数必须为数组')
  if (arr.length <= 1) return arr
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  arr.forEach(item => item > pivot ? right.push(item) : left.push(item))
  return quickSort(left).concat([pivot], quickSort(right))
}