import React, { CSSProperties, DOMAttributes } from 'react'
import styles from './button.module.scss'
const Button = ({ name, style, onClick }: { name: string; style?: CSSProperties, onClick?: any }) => {
    return (
        <button className={styles['btn']} style={style} onClick={onClick}  >{name}</button>
    )
}

export default Button