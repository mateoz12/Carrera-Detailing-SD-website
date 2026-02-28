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
  title: 'La Jolla Detail Co. | Premium Mobile Interior Detailing',
  description:
    'Premium concierge mobile interior detailing for luxury vehicles in La Jolla & San Diego. We restore your car\'s interior to showroom condition at your home or office.',
  keywords: [
    'Mobile Detailing La Jolla',
    'Interior Car Detailing La Jolla',
    'Mobile Detailer San Diego',
    'Luxury Car Detailing',
    'Mobile Interior Detailing San Diego',
  ],
  openGraph: {
    title: 'La Jolla Detail Co. | Premium Mobile Interior Detailing',
    description:
      'Premium concierge mobile interior detailing for luxury vehicles in La Jolla & San Diego.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#111111',
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
