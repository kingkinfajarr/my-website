import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components'
import { cn } from '@/shared'
import { Poppins as FontSans, Fira_Code as FontMono } from 'next/font/google'

// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: '#effef7' },
//     { media: '(prefers-color-scheme: dark)', color: '#03301f' },
//   ],
//   colorScheme: 'dark light',
// }

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})
const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen overflow-y-scroll font-sans bg-color text-color',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className="mx-auto flex px-4 sm:max-w-5xl">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
