'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function SignUpPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data: any) => {
        const email = data.email
        const password = data.password
        const username = data.username

        const response = await fetch('http://localhost:4000/api/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                username,


            })
        })
        const res = await response.json()
        // console.log(res)


    }


    return (
        <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='email' id='email' {...register('email')} />
            <label htmlFor="username">username</label>
            <input type="text" placeholder='username' id='username'  {...register('username')} />
            <label htmlFor="password">password</label>
            <input type="password" placeholder='password' id='password'  {...register('password')} />

            <input type="submit" value='submit' />

        </form >
    )
}
