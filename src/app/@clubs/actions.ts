'use server'

export async function getClubs(): Promise<{id: number, name: string}[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'Fanfare Blaasveld' }, { id: 2, name: 'RFC Blaasveld' }])
    }, 3000)
  })
}