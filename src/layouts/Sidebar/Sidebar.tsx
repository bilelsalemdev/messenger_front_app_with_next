'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import cameraIcon from '@icons/cameraIcon.svg'
import editIcon from '@icons/editIcon.svg'
import moreIcon from '@icons/moreIcon.svg'
import styles from './sidebar.module.scss'
import SearchIcon from '@/components/svgComponents/SearchIcon'
import Button from '@/components/Button/Button'
import UsersContainer from '@/features/Messages/UsersContainer/UsersContainer'
const Sidebar = () => {
    const [active, setActive] = React.useState(0)



    return (
        <section className={styles['sidebar-container']} >
            <div className={styles['sidebar-header']} >
                <h3 className={styles['sidebar-header__heading']} >Chats</h3>
                <div className={styles['sidebar-header__imgs']} >
                    <Image src={moreIcon} height={36} width={36} alt='more icon' className='cursor-pointer' />
                    <Image src={cameraIcon} height={36} width={36} alt='camera icon' className='cursor-pointer' />
                    <Image src={editIcon} height={36} width={36} alt='edit icon' className='cursor-pointer' />
                </div>
            </div>
            <div className={styles['sidebar__search']} >
                <SearchIcon />
                <input type="text" placeholder='Search Facebook' className={styles['sidebar__search-input']} />
            </div>
            <div className={styles['sidebar__btns']} >
                <Button name='Inbox'
                    onClick={() => setActive(prev => 0)}
                    style={{
                        backgroundColor: active === 0 ? '#E7F3FF' : '#E4E6EB',
                        color: active === 0 ? '#1877F2' : '#65676B'
                    }} />
                <Button name='Communities'
                    onClick={() => setActive(prev => 1)}
                    style={{
                        backgroundColor: active === 1 ? '#E7F3FF' : '#E4E6EB',
                        color: active === 1 ? '#1877F2' : '#65676B'
                    }} />
            </div>

            <article className='w-full h-[70vh] overflow-y-hidden' >
                <UsersContainer />
            </article>

        </section>
    )
}

export default Sidebar