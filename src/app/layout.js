import './globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Quicksand } from 'next/font/google'

export const metadata = {
  title: 'Dig-it',
  description: 'Dig-it agency',
}

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['variable'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={quicksand.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
