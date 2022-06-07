import React, { useState } from 'react'
import { useAuth } from 'lib/contexts'
import { Button } from 'view/elements'

export function LoginForm() {
    const [ formData, setFormData ] = useState({})
    const { loginUser } = useAuth()

    const handleChange = e => {
        const { name, value } = e.target
        e.preventDefault()
        setFormData(prev => ({...prev, [name]: value }))
    }


    const handleSubmit = async e => {
        e.preventDefault()
        loginUser(formData)
    }

    return (
        <>
            <form 
                className='w-96 flex flex-col h-96 items-center' 
                onSubmit={e => handleSubmit(e)}
            >
                <input 
                    className='w-4/5 mx-auto my-4 h-14 px-3 rounded-lg' 
                    name='email' 
                    type='text' 
                    placeholder='Email'
                    onChange={e => handleChange(e)} 
                />
                <input 
                    className='w-4/5 mx-auto my-4 h-14 px-3 rounded-lg' 
                    name='password' 
                    type='password' 
                    placeholder='Password'
                    onChange={e => handleChange(e)} 
                />
                <Button type='submit' variant='primary' >
                    Login
                </Button>
            </form>
        </>
    )
}
