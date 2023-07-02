import axios from "axios";
import { Axios } from "../config";

export const getInstaPosts = async () => {
    try {
        const res = await Axios.get('/insta')
        console.log(res)
        return { data: res.data.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

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

export const getCopres = async () => {
    try {
        const res = await Axios.get('/copresident')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

export const getSecretary = async () => {
    try {
        const res = await Axios.get('/secretary')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

export const getTreasurer = async () => {
    try {
        const res = await Axios.get('/treasurer')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

export const getHr = async () => {
    try {
        const res = await Axios.get('/hr')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

export const getMarketing = async () => {
    try {
        const res = await Axios.get('/marketing')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

export const getPartnerships = async () => {
    try {
        const res = await Axios.get('/partnerships')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

export const getOperations = async () => {
    try {
        const res = await Axios.get('/operations')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}

export const getCompetitive = async () => {
    try {
        const res = await Axios.get('/competitive')
        console.log(res)
        return { data: res.data, error: false }
    } catch(error) {
        return { data: [], error: true }
    }
}