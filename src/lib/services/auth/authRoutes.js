const AUTH_BASE_URL = process.env.REACT_APP_AUTH_BASE_URL
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

export const authRoutes = {
    loginRoute: () => `${AUTH_BASE_URL}?key=${API_KEY}`,
} 