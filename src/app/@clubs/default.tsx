import { getClubs } from "../clubs/actions"

export default async function Default() {
  const clubs = await getClubs()

  return <ul>
    {clubs.map((club) => <li key={club.id}>{club.id} - {club.name}</li>)}
  </ul>
}