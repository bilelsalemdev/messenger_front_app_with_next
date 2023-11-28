import UserProfile from '@/features/Messages/UserProfile'
import Navbar from '@/layouts/Navbar/Navbar'
import Sidebar from '@/layouts/Sidebar/Sidebar'
import React from 'react'

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Navbar />
            <section className='flex w-full' >
                <Sidebar />
                <section className='w-full h-[90vh]' >
                    {children}
                </section>
                <section className='basis-[55%] border-l ' >
                    <UserProfile />
                </section>
            </section>
        </main>
    )
}
