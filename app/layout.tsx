import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AxiomWebVitals } from 'next-axiom'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dungeoneer',
  description: 'The Ultimate D&D 5e Platform for Parties',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AxiomWebVitals />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
