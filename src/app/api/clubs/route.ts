import { cookies } from "next/headers"

const mockClubs = [{ id: 1, name: 'Fanfare Blaasveld' }, { id: 2, name: 'RFC Blaasveld' }]

export async function GET() {
  console.log('GETTING clubs')
  console.log(cookies().get('blv_clubs'))
  return new Response(JSON.stringify(mockClubs), { 
    status: 200, 
    headers: { 
      'Content-Type': 'application/json',
      'Set-Cookie': `blv_clubs=${JSON.stringify(mockClubs)}`,
    }
  })
}

export async function POST() {
  console.log('ADDING club')
  const id = mockClubs.reduce((maxId, club) => Math.max(maxId, club.id), 0) + 1
  const club = { id, name: 'New club' }
  return new Response(JSON.stringify([...mockClubs, club]), { 
    status: 200, 
    headers: { 
      'Content-Type': 'application/json',
      'Set-Cookie': `blv_clubs=${JSON.stringify([...mockClubs, club])}`,
    }
  })
}