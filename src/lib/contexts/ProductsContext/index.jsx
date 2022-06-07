import React, {
    createContext, 
    useState,
    useContext,
} from 'react'

import {
    getProducts
} from 'lib/services'
import { useAuth } from '..'

const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const { token } = useAuth()

    const [ products, setProducts ] = useState([])

    const fetchProducts = async () => {
        if(token){
            const res = await getProducts(token)
            try {
                setProducts(res.data)
                console.log(products)
            } catch (error) {
                console.log(error)
            }
        }
    }

    fetchProducts()
    

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
} 

export const useProducts = () => useContext(ProductsContext)
