import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { useGlobalContext } from '../context/GlobalProvider'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const context = useGlobalContext()

    const setUser = () => {
        if (username == 'admin' && password == 'admin123') {
            if (context) {
                context.setIsLoggedIn(true)
            }
        } else {
            toast.error('Incorrect name or password')
        }
    }


  return (
    <div className='justify-center' >
        <Input
            placeholder='Username'
            value={username}
            className='w-60 my-6'
            onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
        />
        <Input
            placeholder='Password'
            type='password'
            value={password}
            className='w-60 mb-6'
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
        <Button
            className='bg-lime-300'
            onClick={setUser}
        >
            Log In
        </Button>

        <div className='mt-20'>
            Hint <br/>
            username: admin <br/>
            password: admin123 <br/>
        </div>
    </div>
  )
}

export default LoginPage