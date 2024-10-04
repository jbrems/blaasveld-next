import { getClubs } from "./actions"

export default async function ClubsPage() {
  const clubs = await getClubs()

  return <ul>
    {clubs.map((club) => <li key={club.id}>{club.id} - {club.name}</li>)}
  </ul>
}