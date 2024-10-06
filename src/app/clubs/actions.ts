'use server'

import { cookies } from "next/headers"

export type Club = {id: number, name: string}

const mockClubs: Club[] = [{ id: 1, name: 'Fanfare Blaasveld' }, { id: 2, name: 'RFC Blaasveld' }]

export async function getClubs(): Promise<Club[]> {
  const clubsCookie = cookies().get('blv_clubs')?.value || JSON.stringify(mockClubs)
  const clubs: Club[] = JSON.parse(clubsCookie)
  clubs.forEach((club) => {
    if (club.id === 0) club.id = Math.max(...clubs.map(c => c.id)) + 1
  })
  return new Promise(resolve => {
    setTimeout(() => { resolve(clubs) }, 3000)
  })
}

export async function addClub(formData: FormData) {
  cookies().set('blv_clubs', JSON.stringify([...JSON.parse(cookies().get('blv_clubs')?.value || '[]'), { id: 0, name: formData.get('name')}]))
}