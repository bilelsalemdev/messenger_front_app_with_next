'use client'
import { USERS } from '@/constants/users'

import React from 'react'
import UserContainer from '../UserContainer/UserContainer'
import { useAppSelector } from '@/hooks/reduxHooks'
import { setUser } from '@/data/slices/userSlice'

const UsersContainer = () => {
    const activeUser = useAppSelector(state => state.user)
    return (
        <section className='w-full h-[69vh] overflow-y-scroll users-container' >
            {USERS?.map((user) => (
                <UserContainer activeUser={activeUser?.id as number} setActiveUser={setUser} userId={user?.id} key={user?.id} avatar={user?.avatar} name={user?.name} />
            ))}
        </section>
    )
}

export default UsersContainer