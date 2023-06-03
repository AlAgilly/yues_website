var dotenv = require('dotenv');
dotenv.config();

var port = process.env.PORT
var host = process.env.HOST
var localapp = process.env.LOCAL_CLIENT_APP
var remoteapp = process.env.REMOTE_CLIENT_APP
var allowedDomains = (process.env.NODE_ENV === 'production' ? [process.env.REMOTE_CLIENT_APP, process.env.REMOTE_SERVER_API] : [process.env.LOCAL_CLIENT_APP, process.env.LOCAL_SERVER_API])
var instagram = process.env.REACT_APP_INSTA

module.exports = { allowedDomains, instagram };