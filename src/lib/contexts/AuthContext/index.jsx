import React, { 
    createContext, 
    useState,
    useContext 
} from 'react'

import {
    setStorageData,
    removeStorageData,
    getStorageData
} from 'lib/utils'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from 'lib/utils'
import { getUserAuth } from 'lib/services'

const AuthContext = createContext({})



export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(undefined)
    const [ token, setToken ] = useState(undefined)
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)


    const getSessionFromStorage = () => {
        setIsLoading(true)
        setError(null)
        const token = getStorageData('token')
        const user = getStorageData('user')
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
            setUser(user)
            setIsAuthenticated(true)
            setToken(token)
            } else {
                console.log('no session avaiable')
                setIsAuthenticated(false)
                setIsLoading(false)
            }
        })(user)
    }

    const loginUser = async data =>  {
        setIsLoading(true)
        setError(null)
        try {
            let res = await getUserAuth(data)
            if (res.status === 200) {
                setStorageData('token', res.data.idToken)
                setStorageData('user', res.data)
                const token = getStorageData('token')
                const user = getStorageData('user')
                if(user && token){
                    setUser(user)
                    setToken(token)
                    setIsAuthenticated(true)
                    setIsLoading(false)
                }
            }
        } catch (error) {
            setError(error)
            setIsAuthenticated(false)
            setIsLoading(false)
        }
    }

    const logoutUser = () => {
        setIsLoading(true)
        setError(null)
        try {
            removeStorageData('user')
            removeStorageData('token')
            let user = getStorageData('user')
            let token = getStorageData('token')
            if(!user && !token){
                setIsAuthenticated(false)
                setIsLoading(false)
            }
        } catch (error) {
            setError(error)
            setIsLoading(false)            
        }
    }
    return (
        <AuthContext.Provider value={{user, token, isAuthenticated, isLoading, error, getSessionFromStorage, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = () => useContext(AuthContext)
