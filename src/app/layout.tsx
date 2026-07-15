import './globals.css'
import { Google_Sans } from 'next/font/google'
import Header from '@/components/header';

const googleSans = Google_Sans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={googleSans.className}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}