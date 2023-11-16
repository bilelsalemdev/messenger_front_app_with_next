import React from 'react'
import Image from 'next/image'
import avatar from '@icons/avatar_user.svg'
const ChatHeader = () => {
    return (
        <section>
            <div className='flex' >
                <Image src={avatar} height={40} width={40} alt='user avatar' />

            </div>
        </section>
    )
}

export default ChatHeader