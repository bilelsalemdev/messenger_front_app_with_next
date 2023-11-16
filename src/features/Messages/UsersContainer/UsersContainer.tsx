'use client'
import { USERS } from '@/constants/users'

import React from 'react'
import UserContainer from '../UserContainer/UserContainer'

const UsersContainer = () => {
    const [activeUser, setActiveUser] = React.useState(USERS[0]?.id)
    return (
        <section className='w-full h-[69vh] overflow-y-scroll users-container' >
            {USERS?.map((user) => (
                <UserContainer activeUser={activeUser} setActiveUser={setActiveUser} userId={user?.id} key={user?.id} avatar={user?.avatar} name={user?.name} />
            ))}
        </section>
    )
}

export default UsersContainer