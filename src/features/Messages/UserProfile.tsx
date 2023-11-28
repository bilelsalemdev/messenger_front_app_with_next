'use client'
import { useAppSelector } from '@/hooks/reduxHooks'
import Image from 'next/image'
import React from 'react'
import avatar from '@icons/user_avatar.svg'
import facebook from '@icons/facebook.svg'
import ring from '@icons/ring.svg'
import search from '@icons/search.svg'
import chevron from '@icons/chevron.svg'
const UserProfile = () => {
    const user = useAppSelector(state => state.user)

    return (
        <section className=' flex flex-col w-full'>
            {user?.id && <article className='flex flex-col w-full items-center justify-center gap-3 mt-5' >
                <Image src={user?.avatar?.src || avatar} height={80} width={80} alt='user avatar' />
                <h4 className='text-center text-base font-semibold' >{user?.name}</h4>
                <p className='text-xs font-normal'>{new Date().toDateString()}</p>
            </article>}
            <div className='flex items-center gap-8 mt-8 w-full justify-center' >
                <div className='flex flex-col items-center justify-center gap-2 cursor-pointer' >
                    <Image src={facebook} height={36} width={36} alt='facebook icon' />
                    <p className='text-xs font-normal' >Profile</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                    <Image src={ring} height={36} width={36} alt='ring icon' />
                    <p className='text-xs font-normal'>Mute</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                    <Image src={search} height={36} width={36} alt='search icon' />
                    <p className='text-xs font-normal'>Search</p>
                </div>
            </div>
            <ul className='px-4 flex flex-col gap-3 mt-8' >
                <li className='flex items-center justify-between cursor-pointer' >
                    <span className='text-sm font-semibold'>Chat info</span>
                    <Image src={chevron} height={20} width={20} alt='chevron' />
                </li>
                <li className='flex items-center justify-between cursor-pointer' >
                    <span className='text-sm font-semibold'>Customize chat</span>
                    <Image src={chevron} height={20} width={20} alt='chevron' />
                </li>
                <li className='flex items-center justify-between cursor-pointer' >
                    <span className='text-sm font-semibold' >Media, files and links</span>
                    <Image src={chevron} height={20} width={20} alt='chevron' />
                </li>
                <li className='flex items-center justify-between cursor-pointer' >
                    <span className='text-sm font-semibold' >Privacy & support</span>
                    <Image src={chevron} height={20} width={20} alt='chevron' />
                </li>
            </ul>

        </section>
    )
}

export default UserProfile