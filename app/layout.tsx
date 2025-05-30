import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Arithmecal',
  description: 'Arithmecal home page',
  keywords: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
