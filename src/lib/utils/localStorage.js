export const setToken = (token) => localStorage.setItem('userToken', JSON.stringify(token))
  
export const removeToken = () => localStorage.removeItem('userToken')

export const getToken = () => localStorage.getItem('userToken')

  