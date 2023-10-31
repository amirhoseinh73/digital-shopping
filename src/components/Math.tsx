"use client"

import { useRef, useState } from "react"
import { substract, sum } from "./operations"

const MathComp = function () {
  const [sumResult, setSumResult] = useState<number>(0)
  const [subResult, setSubResult] = useState<number>(0)

  const numbersRef = useRef<HTMLInputElement>(null)

  const calculate = function () {
    const numbers = numbersRef.current?.value
    if (!numbers || numbers.length < 3) return

    const numbersArr = numbers.split(",").map(num => Number(num))
    if (numbersArr.length < 2) return

    setSumResult(sum(numbersArr))

    setSubResult(substract(numbersArr))
  }

  console.log("rendered math")

  return (
    <article className="bg-gray-400 p-1 rounded leading-10">
      <p className="text-md">
        Here you can see the result of 4 main operation in math (sum, substract,
        multiply, divide):
      </p>
      <p className="text-md">
        type numbers and separate numbers with comma to see the result:{" "}
      </p>

      <div className="my-2 p-1 flex flex-row items-center flex-wrap gap-2">
        <label htmlFor="numbers" className="block text-lg w-full">
          Type Numbers and separate with (,):
        </label>
        <input
          ref={numbersRef}
          type="text"
          id="numbers"
          className="shadow appearance-none border border-slate-500 rounded w-44 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        />
        <button
          type="button"
          className="bg-amber-900 text-slate-100 rounded px-2"
          onClick={calculate}
        >
          Calculate
        </button>
      </div>

      <div className="flex flex-row justify-between gap-2 items-center">
        <section id="result_sum">
          Sum:
          <abbr className="text-blue-800 text-2xl px-2 align-sub">
            {sumResult}
          </abbr>
        </section>
        <section id="result_sub">
          Substraction:
          <abbr className="text-red-800 text-2xl px-2 align-sub">
            {subResult}
          </abbr>
        </section>
        <section id="result_mlty">
          Multiply:
          <abbr className="text-yellow-800 text-2xl px-2 align-sub"></abbr>
        </section>
        <section id="result_div">
          Dividion:
          <abbr className="text-green-800 text-2xl px-2 align-sub"></abbr>
        </section>
      </div>
    </article>
  )
}

export default MathComp
