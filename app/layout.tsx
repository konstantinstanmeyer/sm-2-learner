import './globals.css'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${poppins.variable}`} lang="en">
      <NextAuthProvider>
        <body className={''}>{children}</body>
      </NextAuthProvider>
    </html>
  )
}
