import React, {
    createContext, 
    useState,
    useContext,
} from 'react'

import { useAuth } from '..'

const UserContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const { token } = useAuth()

    const [ user, setUser ] = useState([])

    const fetchUser = async () => {
        if(token){

        }
    }

    fetchUser()
    

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
} 

export const useUser = () => useContext(UserContext)
