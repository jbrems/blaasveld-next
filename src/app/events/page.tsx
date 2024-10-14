import { getNumber } from "../number.utils"

export default async function EventsPage() {
  const nr = await getNumber()

  return <>
    <h2>Activiteiten</h2>
    <span>Your number is {nr}</span>
  </>
}