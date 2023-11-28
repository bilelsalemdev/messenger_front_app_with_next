'use client'
import { USERS } from '@/constants/users'

import React, { useEffect } from 'react'
import UserContainer from '../UserContainer/UserContainer'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { fetchConversations, setUser } from '@/data/slices/userSlice'
import avatar from '@icons/user_avatar.svg'
const UsersContainer = () => {
    const activeUser = useAppSelector(state => state.user)
    const { conversations } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {

        dispatch(fetchConversations())
    }, [])
    console.log(conversations)

    return (
        <section className='w-full h-[69vh] overflow-y-scroll users-container' >
            {conversations?.map((conversation) => (
                <UserContainer activeUser={activeUser?.id as number} setActiveUser={setUser} userId={conversation?.members?.[0]?._id} key={conversation?._id} avatar={avatar} name={conversation?.members?.[0]?.username} />
            ))}
        </section>
    )
}

export default UsersContainer