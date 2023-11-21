import './globals.css'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers'
import Navbar from '@/components/Navbar'

import type { AppContext } from 'next/app';
import { getSession } from 'next-auth/react';

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
    <html className={`${poppins.variable} bg-gray-200`} lang="en">
      <NextAuthProvider>
        <body className={''}>
          {/* @ts-expect-error Async Server Component */}
          <Navbar />
          {children}
        </body>
      </NextAuthProvider>
    </html>
  )
}

RootLayout.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: {
      ...pageProps,
      session: await getSession(ctx)
    }
  };
};