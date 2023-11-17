
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/layouts/Navbar/Navbar'
import Sidebar from '@/layouts/Sidebar/Sidebar'
import Providers from './providers'
import UserProfile from '@/features/Messages/UserProfile'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Messenger App',
  description: 'Generated by MohamedAli Aissaoui & Bilel Salems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} w-full h-screen overflow-hidden`} >
          <Navbar />
          <section className='flex w-full' >
            <Sidebar />
            <section className='w-full h-[90vh]' >
              {children}
            </section>
            <section className='basis-[45%] border-l ' >
              <UserProfile />
            </section>
          </section>
        </body>
      </html>
    </Providers>
  )
}
