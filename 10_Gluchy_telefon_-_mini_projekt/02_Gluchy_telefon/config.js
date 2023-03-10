require('dotenv').config()
const { BRAVO_PORT, GAMMA_PORT, ALPHA_PORT } = process.env;

if (!BRAVO_PORT || !GAMMA_PORT || !ALPHA_PORT) {
    throw new Error("Panie nie ma config key'a")
}

module.exports = {
    ALPHA_PORT,
    BRAVO_PORT,
    GAMMA_PORT
}

console.log(module.exports )