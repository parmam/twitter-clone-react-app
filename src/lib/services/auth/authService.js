import { api } from '../api'
import { authRoutes } from './authRoutes'

export const getAuth = async data => await api.post(authRoutes.loginRoute(), data)