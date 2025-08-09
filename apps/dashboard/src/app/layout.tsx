import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Execution Management & Risk Control',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-grow p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
