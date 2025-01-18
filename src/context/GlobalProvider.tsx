import { createContext, ReactNode, useContext, useState } from "react"

interface GlobalContextType {
    isLoggedIn: boolean,
    setIsLoggedIn: (val: boolean) => void,
}

const GlobalContext = createContext<GlobalContextType | null>(null)
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({children}: {children: ReactNode}) => {
    const [isLoggedIn, setLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') == 'true')

    const onLogIn  = (loggedIn: boolean) => {
        setLoggedIn(loggedIn)
        sessionStorage.setItem('isLoggedIn', `${loggedIn}`)
    }

    return <GlobalContext.Provider
        value={{
            isLoggedIn,
            setIsLoggedIn: onLogIn
        }}
    >
        {children}
    </GlobalContext.Provider>
}