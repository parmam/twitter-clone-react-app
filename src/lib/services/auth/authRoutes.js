const REACT_APP_AUTH_BASE_URL = process.env.AUTH_BASE_URL
const REACT_APP_FIREBASE_API_KEY = process.env.API_KEY

export const authRoutes = {
    loginRoute: () => `${REACT_APP_AUTH_BASE_URL}?key=${REACT_APP_FIREBASE_API_KEY}`,
} 