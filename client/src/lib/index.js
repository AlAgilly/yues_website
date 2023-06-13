import axios from "axios";
import { Axios } from "../config";

export const getPosts = async () => {
    try {
        const res = await Axios.get('/insta')
        console.log(res)
        return { data: res.data.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

// export const getInsta = async () => {
//     try {
//         const res = await Axios.get('/insta')
//         console.log(res)
//         return { data, error: false }
//     } catch(error) {
//         return { data: [], error: true }
//     }
// }

export const getUpcoming = async () => {
    try {
        const res = await Axios.get('/upcoming')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}
export const getRecent = async () => {
    try {
        const res = await Axios.get('/recent')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}
export const getEvents = async () => {
    try {
        const res = await Axios.get('/events')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}