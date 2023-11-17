'use client'
import React from 'react'
import Image from 'next/image'
import avatar from '@icons/user_avatar.svg'
import { useAppSelector } from '@/hooks/reduxHooks'
import Phone from '@/components/svgComponents/Phone'
import Cam from '@/components/svgComponents/Cam'
import Help from '@/components/svgComponents/Help'
const ChatHeader = () => {
    const user = useAppSelector(state => state.user)
    return (
        user?.id ?
            <section className='flex items-center justify-between py-4 px-4 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.20)]' >
                <div className='flex items-center gap-2' >
                    <Image src={user?.avatar?.src || avatar} height={40} width={40} alt='user avatar' />
                    <div className='flex flex-col' >
                        <h4 className='text-base font-semibold' >{user?.name}</h4>
                        <p className='text-xs text-[#65676B] font-normal' >{new Date().toDateString()}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2' >
                    <Phone />
                    <Cam />
                    <Help />
                </div>
            </section> : <></>
    )
}

export default ChatHeader