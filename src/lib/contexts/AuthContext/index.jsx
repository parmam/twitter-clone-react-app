import React, { 
    createContext, 
    useState 
} from 'react'

import {
    setToken,
    removeToken,
    getToken,
} from 'lib/utils'


const AuthContext = createContext({})


export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(undefined)
    
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)

    const [ isLoading, setIsLoading ] = useState(false)


    const token = getToken()
    if (token) {
        setUser(token)
        setIsAuthenticated(true)
    }
    else{
        console.log('no token')
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
} 

