require('dotenv').config()

module.exports = {
    MONGO_URL: process.env.MONGO_URL,
    SUPER_SECRET_KEY: process.env.SUPER_SECRET_KEY
}
