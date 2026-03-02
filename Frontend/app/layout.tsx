import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Carrera Detailing Co. | Premium Mobile Interior Detailing in La Jolla & San Diego',
  description:
    'Luxury mobile interior car detailing for San Diego\'s finest vehicles. Premium concierge detailing service at your home or office. Serving La Jolla, Del Mar, Pacific Beach & Rancho Santa Fe.',
  keywords: [
    'Mobile Detailing La Jolla',
    'Interior Car Detailing La Jolla',
    'Mobile Detailer San Diego',
    'Luxury Car Detailing San Diego',
    'Premium Auto Detailing La Jolla',
    'Mobile Interior Detailing San Diego',
  ],
  openGraph: {
    title: 'Carrera Detailing Co. | Premium Mobile Interior Detailing',
    description: 'Luxury mobile interior car detailing for San Diego\'s finest vehicles.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
