'use client'

import { clearCache } from "./clear-cache.actions"

export function ClearCacheform() {
  return <form action={clearCache}>
    <button type="submit">Clear cache</button>
  </form>
}