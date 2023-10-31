export const sum = function (numbers: number[]) {
  let sum = 0
  numbers.forEach(num => {
    sum += num
  })

  return sum
}

export const substract = function (numbers: number[]) {
  return numbers.reduce((prevNum, num, idx) => {
    return idx === 0 ? (prevNum += num) : (prevNum -= num)
  }, 0)
}
