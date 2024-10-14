import { getNumber } from "../number.utils"
import { ClearCacheform } from "./ClearCacheForm"
import { OpeningHours } from "./OpeningHours"
import { getCachedOpeningHours } from "./shops.utils"

export default async function ShopsPage() {
  console.log('Rendering Shops Page on the server (if you are reading this on the server)')

  const nr = await getNumber()
  const openingHours = await getCachedOpeningHours(1)

  return <>
    <h2>Handelaars en Horeca</h2>
    <span>Your number is {nr}</span>
    <p>Opening hours {JSON.stringify(openingHours)}</p>
    <OpeningHours shopId={1} />
    <OpeningHours shopId={2} />
    <OpeningHours shopId={1} />
    <ClearCacheform />
  </>
}