'use client'

import { ReactNode } from 'react'

/**
 * Client-side providers wrapper
 * Add Redux, theme providers, etc. here as needed
 */
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>
}
