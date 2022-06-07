import { api } from '../api'
import { authRoutes } from './authRoutes'

export const getUserAuth = async data => await api.post(authRoutes.loginRoute(), data)