import Image from 'next/image'
import React from 'react'
import userAvatar from '@icons/user_avatar.svg'
const UserContainer = () => {
    return (
        <div className='flex items-center gap-5' >
            <Image src={userAvatar} height={56} width={56} alt='avatar container' />
            <div className='flex flex-col' >
                <h3>Ali Aissaoui</h3>
                <p>last message</p>
            </div>
        </div>
    )
}

export default UserContainer