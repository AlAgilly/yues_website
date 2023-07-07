import axios from "axios"

const isLocalhost = Boolean( window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))

const API_URL = isLocalhost ? "http://localhost:5000/api" : "https://king-prawn-app-a7f62.ondigitalocean.app/api/"

export const Axios = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})
