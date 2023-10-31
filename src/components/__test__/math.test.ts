import { substract, sum } from "../operations"

describe("Math Operation", function () {
  const numbers1 = [4, 3, 6, 7, 9]
  const numbers2 = [2, 3]
  const numbers3 = [6, 3]

  it("should sum array of numbers", () => {
    expect(sum(numbers1)).toBe(29)
    expect(sum(numbers2)).toBe(5)
    expect(sum(numbers3)).toBe(9)
  })

  it("should substraction array of numbers", function () {
    expect(substract(numbers1)).toBe(-21)
    expect(substract(numbers2)).toBe(-1)
    expect(substract(numbers3)).toBe(3)
  })

  it.todo("should multiplication array of numbers")
  // it("should multiplication array of numbers", function () {
  //   expect(multiply(...numbers1)).toBe(4536)
  //   expect(multiply(...numbers2)).toBe(6)
  //   expect(multiply(...numbers3)).toBe(18)
  // })

  it.todo("should division array of numbers")
  // it("should division array of numbers", function () {
  //   expect(divide(...numbers1)).toBe(0.00352)
  //   expect(divide(...numbers2)).toBe(0.66666)
  //   expect(divide(...numbers3)).toBe(2)
  // })
})
