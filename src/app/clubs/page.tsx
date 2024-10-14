// import { cookies } from "next/headers"
import { getNumber } from "../number.utils"
import { getClubs } from "./actions"
import ClubForm from "./ClubForm"

export default async function ClubsPage() {
  // const clubCookie =  cookies().get('blv_clubs') || { name: 'blv_clubs', value: ''}
  // const clubs = await fetch(new URL(`${process.env.NEXT_URL}/api/clubs`), { method: 'GET', credentials: 'include'}).then(res => res.json())  as Club[]


  const nr = await getNumber()
  const clubs = await getClubs()

  return <>
    <h2>Verenigingen</h2>
    <span>Your number is {nr}</span>
    <ul>{clubs.map((club) => <li key={club.id}>{club.id} - {club.name}</li>)}</ul>
    <ClubForm />
  </>
}