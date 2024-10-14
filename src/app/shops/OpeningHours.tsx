import { getNumber } from "../number.utils"
import { getCachedOpeningHours } from "./shops.utils"

export async function OpeningHours({ shopId }: { shopId: number }) {
  const nr = await getNumber()
  const openingHours = await getCachedOpeningHours(shopId)

  return <ul>
    <li>Your number is {nr}</li>
    <li>Monday: {JSON.stringify(openingHours.monday)}</li>
  </ul>
}