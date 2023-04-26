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