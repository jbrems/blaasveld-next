// import { unstable_cache } from "next/cache"
import { cache } from "react"

async function generateNumber(): Promise<number> {
  console.log('Number - Generating a random number')
  return Math.ceil(Math.random() * 100)
}

// const getCachedNumber = unstable_cache(async () => {
//   console.log('Number - NextJS cache miss')
//   return generateNumber()
// }, ['number'], { tags: ['number'] })

export const getNumber = cache(async () => {
  console.log('Number - React cache miss')
  return generateNumber()
})

