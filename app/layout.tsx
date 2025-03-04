import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arithmecal",
  description: "Arithmecal home page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
