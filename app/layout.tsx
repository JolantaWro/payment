import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment',
  description: 'Manage your payments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <div>
    //   <header>Marketing header</header>
    //   {children}
    // </div>
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
