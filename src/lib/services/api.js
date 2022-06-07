import axios from 'axios'

export const api = {
    get: async (url, params) => await axios.get(url, { params }),
    post: async (url, data) => await axios.post(url, data),
}