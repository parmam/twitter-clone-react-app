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

import { onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseAuth } from 'lib/utils'



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
        const { email, password } = data
        setIsLoading(true)
        setError(null)
        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                setStorageData('token', userCredential.user.idToken)
                setStorageData('user', userCredential.user)
                const token = getStorageData('token')
                const user = getStorageData('user')
                if(user && token){
                    setUser(user)
                    setToken(token)
                    setIsAuthenticated(true)
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                setError(error)
                setIsAuthenticated(false)
                setIsLoading(false)
            }
        )
    }

    const logoutUser = () => {
        setIsLoading(true)
        setError(null)
        signOut(firebaseAuth).then(() => {
            removeStorageData('user')
            removeStorageData('token')
            let user = getStorageData('user')
            let token = getStorageData('token')
            if(!user && !token){
                setIsAuthenticated(false)
                setIsLoading(false)
            }
          }).catch((error) => {
            setError(error)
            setIsLoading(false)         
          });
    }
    return (
        <AuthContext.Provider value={{user, token, isAuthenticated, isLoading, error, getSessionFromStorage, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = () => useContext(AuthContext)
