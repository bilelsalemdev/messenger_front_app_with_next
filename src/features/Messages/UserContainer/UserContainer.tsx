
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
const UserContainer = ({ avatar, name, lastMessage, userId, activeUser, setActiveUser }: { avatar: string; name: string; lastMessage?: string, userId: number, activeUser: number, setActiveUser: Dispatch<SetStateAction<number>> }) => {

    return (
        <div onClick={() => setActiveUser(userId)} className={`flex items-center gap-5 px-2  mt-5 cursor-pointer hover:bg-slate-200 rounded-[8px] duration-75 ease-linear py-1  ${userId === activeUser ? 'bg-[rgba(45,136,255,0.10)]' : 'bg-white'}`} >
            <Image src={avatar} height={56} width={56} alt='avatar container' />
            <div className='flex flex-col'  >
                <h3 className='text-sm font-normal' >{name}</h3>
                <p className='text-xs font-normal text-[#65676B]' >{lastMessage || 'last Message'}</p>
            </div>
        </div>
    )
}

export default UserContainer