'use client'
import { useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
import { Socket, io } from 'socket.io-client'
export default function LoginPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data: any) => {
        const email = data.email
        const password = data.password


        const response = await fetch('http://localhost:4000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,


            })
        })


        const res = await response.json()


        if (res.status === 'success') {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res?.data?.user))
            const socket = io('http://localhost:4000')
            socket.on('connect', () => {
                socket.emit('registerSocketId', { userId: res?.data?.user._id, socketId: socket.id })
            }
            )
            // localStorage.setItem('socketId', socket.id)
            socket.on('disconnect', () => {
                console.log('disconnected')
            })
            // )
            // socket.on('message', (message: any) => {
            //     console.log(message)
            // }
            // )
            // socket.on('error', (error: any) => {

            //     console.log(error)
            // }
            // )
            // socket.on('connect_error', (error: any) => {

            //     console.log(error)
            // }
            // )
            // socket.on('connect_timeout', (error: any) => {

            //     console.log(error)
            // }
            // )
            // socket.on('reconnect', (attemptNumber: any) => {

            //     console.log(attemptNumber)
            // }
            // )
            // socket.on('reconnect_attempt', (attemptNumber: any) => {

            //     console.log(attemptNumber)
            // }
            // )
            // socket.on('reconnecting', (attemptNumber: any) => {

            //     console.log(attemptNumber)
            // }
            // )


        }
        // console.log(res)
    }





    return (
        <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='email' id='email' {...register('email')} />
            <label htmlFor="password">password</label>
            <input type="password" placeholder='password' id='password'  {...register('password')} />

            <input type="submit" value='submit' />

        </form >
    )
}

