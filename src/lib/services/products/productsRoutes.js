const URL = process.env.REACT_APP_FIREBASE_DATABASE_URL

export const productsRoutes = {
    getProducts: (token) => `${URL}/products.json?auth=${token}`,
} 