'use server'

import { revalidatePath } from "next/cache"

export type Club = {id: number, name: string}

export async function addClub(formData: FormData) {
  await fetch(new URL(`${process.env.NEXT_URL}/api/clubs`), { method: 'POST', body: JSON.stringify(Object.fromEntries(formData.entries())) })
  console.log('Revalidating path ' + `${process.env.NEXT_URL}/api/clubs`)
  revalidatePath(`${process.env.NEXT_URL}/api/clubs`)
}