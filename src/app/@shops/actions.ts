'use server'

export async function getShops(): Promise<{ id: number, name: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'Cafe Barbok'}, { id: 2, name: 'Cafe De Kannunik'}, { id: 3, name: 'Cafe De Plezanten Hoek'}])
    }, 4000)
  })
}