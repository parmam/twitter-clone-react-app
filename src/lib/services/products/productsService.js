import { api } from '../api'
import { productsRoutes } from './productsRoutes'

export const getProducts = async token => await api.get(productsRoutes.productsRoute(token))