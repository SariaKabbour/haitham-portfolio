import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Haitham Akil — Videographer & Editor',
  description:
    'Creative videographer and video editor passionate about creating cinematic and engaging visual content. Experienced in editing, color grading, and producing social media reels, promotional videos, and event coverage.',
  keywords:
    'videographer, editor, video production, color grading, cinematic, reels',
  authors: [{ name: 'Haitham Akil' }],
  openGraph: {
    title: 'Haitham Akil — Videographer & Editor',
    description:
      'Creative videographer and video editor passionate about creating cinematic content.',
    type: 'website',
    url: 'https://haithamakil.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Haitham Akil Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haitham Akil — Videographer & Editor',
    description: 'Creative videographer and video editor',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-ink text-bone antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
