import { Club } from "./actions"
import ClubForm from "./ClubForm"

export default async function ClubsPage() {
  const clubs = await fetch(new URL(`${process.env.NEXT_URL}/api/clubs`)).then(res => res.json())  as Club[]

  return <>
    <h2>Verenigingen</h2>
    <ul>{clubs.map((club) => <li key={club.id}>{club.id} - {club.name}</li>)}</ul>
    <ClubForm />
  </>
}