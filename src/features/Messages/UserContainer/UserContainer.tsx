
import { USERS } from '@/constants/users';
import { useAppDispatch } from '@/hooks/reduxHooks';
import Image from 'next/image'
import React from 'react'
const UserContainer = ({ avatar, name, lastMessage, userId, activeUser, setActiveUser }: { avatar: string; name: string; lastMessage?: string, userId: number, activeUser: number, setActiveUser: any }) => {
    const dispatch = useAppDispatch()
    const user = USERS?.find((user) => user?.id === userId)
    return (
        <div onClick={() => dispatch(setActiveUser(user))} className={`flex items-center gap-5 px-2  mt-5 cursor-pointer hover:bg-slate-200 rounded-[8px] duration-75 ease-linear py-1  ${userId === activeUser ? 'bg-[rgba(45,136,255,0.10)]' : 'bg-white'}`} >
            <Image src={avatar} height={56} width={56} alt='avatar container' />
            <div className='flex flex-col'  >
                <h3 className='text-sm font-normal' >{name}</h3>
                <p className='text-xs font-normal text-[#65676B]' >{lastMessage || 'last Message'}</p>
            </div>
        </div>
    )
}

export default UserContainer