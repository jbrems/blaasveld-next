import { unstable_cache } from "next/cache"
import { cache } from "react"

type OpeningHours = {
  from: number
  till: number
}

export type WeeklyOpeningHours = {
  monday: OpeningHours[],
}

export function getOpeningHours(shopId: number): WeeklyOpeningHours {
  console.log(`Calculating opening hours for shop ${shopId}`)
  return {
    monday: [{ from: 800, till: 1200 }, { from: 1230, till: 1700 }],
  }
}

export const getCachedOpeningHours = cache(getOpeningHours)

export const getNextCachedOpeningHours = unstable_cache(async (shopId) => getOpeningHours(shopId), ['opening-hours'], { tags: ['opening-hours']})
