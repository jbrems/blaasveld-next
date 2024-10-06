'use client'

import { addClub } from "./actions";

export default function ClubForm() {
  return <form action={addClub}>
  <input type="text" name="name" />
  <button type="submit">Vereniging toevoegen</button>
</form>
}