// 1)
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] should return 9 because 1^2 + 2^2 + 2^2 = 9.

export function squareSum(numbers: number[]): number {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result += (Number(numbers[i]) * Number(numbers[i]))
  }
  return result
}
