import MathComp from "@/components/Math"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Digital Shopping&nbsp;
        </h1>
      </div>

      <div className="py-8 w-full">
        <h1>Here is some test apps</h1>

        <div className="bg-gray-300 p-3 rounded my-2">
          <h2>Math Operations</h2>
          <MathComp />
        </div>
      </div>
    </main>
  )
}
