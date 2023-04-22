import { Axios } from "../config";

export const getPosts = async () => {
    try {
        const res = await Axios.get('/posts')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}