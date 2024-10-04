import { getShops } from "./actions"

export default async function ShopsPage() {
  const shops = await getShops()

  return <ul>
    {shops.map((shop) => <li key={shop.id}>{shop.id} - {shop.name}</li>)}
  </ul>
}