import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalProvider'

const Nav = () => {
    const context = useGlobalContext()
    const onLogOut = () => {
        if (context) {
            context.setIsLoggedIn(false)
        }
    }
    return (
        <nav className='flex justify-between py-6 px-10'>
            <div className='flex gap-3'>
                <div className=''>
                <Link to={'/'} >
                <Button variant='outline'>
                Home
                    </Button>
                            
                        </Link>
                    
                </div>
                <div>
                <Link to={'/activation'} >
                <Button variant='outline'>
                Activation
                        </Button>
                        </Link>
                    
                </div>
                <div>
                    <Link to={'/account'} >
                        <Button variant='outline'>
                            Account
                        </Button>
                    </Link>

                </div>
            </div>

            <div>
                <Button variant='ghost' onClick={onLogOut} >
                    Log out
                </Button>
            </div>
        </nav>
    )
}

export default Nav