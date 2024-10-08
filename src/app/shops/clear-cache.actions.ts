'use server'

import { revalidateTag } from "next/cache"

export async function clearCache() {
  'use server'
  revalidateTag('opening-hours')
}