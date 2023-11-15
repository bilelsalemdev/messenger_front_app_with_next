import FacebookIcon from '@/components/svgComponents/FacebookIcon'
import GameIcon from '@/components/svgComponents/GameIcon'
import GroupsIcon from '@/components/svgComponents/GroupsIcon'
import HomeIcon from '@/components/svgComponents/HomeIcon'
import SearchIcon from '@/components/svgComponents/SearchIcon'
import StoreIcon from '@/components/svgComponents/StoreIcon'
import VideosIcon from '@/components/svgComponents/VideosIcon'
import React from 'react'
import styles from './navbar.module.scss'
const Navbar = () => {
    return (
        <nav className={styles['navbar-container']} >
            <section className={styles['navbar-left']}>
                <FacebookIcon />
                <div className={styles['navbar-left__search']} >
                    <SearchIcon />
                    <input type="text" placeholder='Search Facebook' className={styles['navbar-left__search-input']} />
                </div>
            </section>
            <section className={styles['navbar-center']}>
                <HomeIcon />
                <VideosIcon />
                <StoreIcon />
                <GroupsIcon />
                <GameIcon />
            </section>
            <section className={styles['navbar-right']}>

            </section>

        </nav>
    )
}

export default Navbar