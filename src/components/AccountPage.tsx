import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from 'sonner';
import EditableInput from './EditableInput';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalProvider';

interface UserData {
    id: string,
    name: string,
    address: {
        [key: string]: string;
    },
    email: string
}

const AccountPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [userData, setUserData] = useState<UserData>()
    const context = useGlobalContext()

    if (!context?.isLoggedIn) {
        return <Navigate to={'/'} />
    }

    const onSearch = () => {
        if (searchValue === '' || isNaN(+searchValue)) {
            toast('Invalid input, numbers only')
            return
        }

        const pr = fetch(`https://jsonplaceholder.typicode.com/users/${searchValue}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('User not found')
                }

                return res.json()
            })
            .catch(() => {
                console.log('No user found')
            })
            .then(res => {
                setUserData({
                    id: res.id,
                    name: res.name,
                    address: res.address,
                    email: res.email
                })
            })

        toast.promise(pr,{
            error: 'User Not Found'
        })
    }

    return (
        <div>
            <div className='flex mx-auto w-[500px]' >
                <Input
                    className='w-[400px] mr-3'
                    value={searchValue}
                    onInput={(e) => setSearchValue((e.target as HTMLInputElement).value)}
                    placeholder='User Id'
                />
                <Button
                    variant='default'
                    className='bg-green-600 text-white'
                    onClick={onSearch}
                >
                    Search
                </Button>
            </div>
            

            {
                userData
                    ? (
                        <div className='mt-10 mx-auto w-[500px]'>
                            <div className='font-semibold text-lg'>
                                User we found:
                            </div>
                            <br />
                            <EditableInput label='Name' initialVal={userData.name} setNewValue={(val) => setUserData({...userData, name: val}) } />
                            <EditableInput label='Email' initialVal={userData.email} setNewValue={(val) => setUserData({...userData, email: val}) } />
                            <EditableInput label='Address' initialVal={userData.address.city} setNewValue={(val) => setUserData({...userData, address: { ...userData.address, city: val}}) } />
                        </div>
                    )
                    : ''
            }
        </div>
    )
}

export default AccountPage