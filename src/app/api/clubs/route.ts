const mockClubs = [{ id: 1, name: 'Fanfare Blaasveld' }, { id: 2, name: 'RFC Blaasveld' }]

export async function GET() {
  console.log('GETTING clubs')
  return Response.json(mockClubs)
}

export async function POST() {
  console.log('ADDING club')
  const id = mockClubs.reduce((maxId, club) => Math.max(maxId, club.id), 0) + 1
  const club = { id, name: 'New club' }
  return Response.json([...mockClubs, club])
}