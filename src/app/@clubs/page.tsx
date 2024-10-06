import { Club } from "../clubs/actions"

export default async function ClubsPage() {
  const clubs = await fetch(new URL(`${process.env.NEXT_URL}/api/clubs`)).then(res => res.json())  as Club[]

  return <ul>
    {clubs.map((club) => <li key={club.id}>{club.id} - {club.name}</li>)}
  </ul>
}