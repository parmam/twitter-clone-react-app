export const setStorageData = (key, value) => localStorage.setItem(key, JSON.stringify(value))
  
export const removeStorageData = key => localStorage.removeItem(key)

export const getStorageData = key => JSON.parse(localStorage.getItem(key))

  