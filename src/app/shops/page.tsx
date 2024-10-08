import { ClearCacheform } from "./ClearCacheForm"
import { OpeningHours } from "./OpeningHours"
import { getDoubleCachedOpeningHours } from "./shops.utils"

export default async function ShopsPage() {
  console.log('Rendering Shops Page on the server (if you are reading this on the server)')

  const openingHours = await getDoubleCachedOpeningHours(1)

  return <>
    <h2>Handelaars en Horeca</h2>
    <p>Opening hours {JSON.stringify(openingHours)}</p>
    <OpeningHours shopId={1} />
    <OpeningHours shopId={2} />
    <OpeningHours shopId={1} />
    <ClearCacheform />
  </>
}