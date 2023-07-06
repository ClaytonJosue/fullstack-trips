import { NextAuthProvider } from './api/providers/auth'
import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: [
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
] })

export const metadata = {
  title: 'FWS Tips',
  description: 'Sistema de reserva de viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
