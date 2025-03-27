import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib'
import {
  Space_Grotesk as FontSans,
  Fira_Code as FontMono,
} from 'next/font/google'
import { generateSeoMeta } from '@/lib/seo'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
})
const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono' })

export const generateMetadata = async (): Promise<Metadata> => generateSeoMeta()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen overflow-y-scroll bg-dark font-sans text-light',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <main className="mx-auto flex px-4 sm:max-w-4xl">{children}</main>
      </body>
    </html>
  )
}
