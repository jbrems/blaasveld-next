import { getDoubleCachedOpeningHours } from "./shops.utils"

export async function OpeningHours({ shopId }: { shopId: number }) {
  const openingHours = await getDoubleCachedOpeningHours(shopId)

  return <ul>
    <li>Monday: {JSON.stringify(openingHours.monday)}</li>
  </ul>
}