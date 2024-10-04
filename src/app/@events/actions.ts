'use server'

export async function getEvents(): Promise<{ id: number, name: string }[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('500 Internal Server Error'))
    }, 5000)
  })
}