import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT
export const host = process.env.HOST
export const localapp = process.env.LOCAL_CLIENT_APP
export const remoteapp = process.env.REMOTE_CLIENT_APP
export const allowedDomains = (process.env.NODE_ENV === 'production' ? [process.env.REMOTE_CLIENT_APP, process.env.REMOTE_SERVER_API] : [process.env.LOCAL_CLIENT_APP, process.env.LOCAL_SERVER_API])
export const instagram = process.env.REACT_APP_INSTA