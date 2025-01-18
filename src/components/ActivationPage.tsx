import React from 'react'
import { useGlobalContext } from '../context/GlobalProvider'
import { Navigate  } from "react-router-dom";

const ActivationPage = () => {
    const context = useGlobalContext()
    if (!context?.isLoggedIn) {
        return <Navigate to={'/'} />
    }
  return (
    <div>
        <div>
            Activation Page
        </div>
    </div>
  )
}

export default ActivationPage