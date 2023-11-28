'use client'
import { store } from '@/data/store'
import React, { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { io } from 'socket.io-client'

const Providers = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const socket = io('http://localhost:4000')
        socket.on('connect', () => {
            socket.emit('registerSocketId', { userId: JSON.parse(localStorage.getItem('user') || '')?.data?.user?._id, socketId: socket.id })
        }
        )
        socket.on('disconnect', () => {
            console.log('disconnected')
        })
        const token = localStorage.getItem('token')
        const response = fetch('http://localhost:4000/api/v1/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => res.json()).then(res => {
            console.log(res)
            if (res.status === 'success') {
                localStorage.setItem('user', JSON.stringify(res?.data?.user))

            }
        })

        if (token) {
            socket.on('message', (message: any) => {
                console.log(message)
            }
            )
        }

    }, [])


    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default Providers