const http = require('http');
const axios = require('axios');
const {ALPHA_PORT, BRAVO_PORT, GAMMA_PORT} = require("./config");
const parseBody = require('./bodyParser')

const Alpha = http.createServer(async (req,res) => {
    req = await parseBody(req)
    const resultBravo = await axios ({
        method: 'post',
        url: `http://localhost:${BRAVO_PORT}`,
        data: req.body
    })

    const resultGamma = await axios ({
        method: 'post',
        url: `http://localhost:${GAMMA_PORT}`,
        data: resultBravo.data
    })
    res.end(resultGamma.data)
})

Alpha.listen(ALPHA_PORT, () => {console.log('Listening to Alpha')})

// const http = require('http');
// const axios = require('axios');
// const {ALPHA_PORT, BRAVO_PORT, GAMMA_PORT} = require("./config");
// const parseBody = require('./bodyParser')
//
// const Alpha = http.createServer(async (req,res) => {
//     req = await parseBody(req)
//     try {
//         const responseBravo = await axios ({
//             url: `http://localhost:${BRAVO_PORT}`,
//             method: 'post',
//             data: req.body
//         })
//         res.end(responseBravo.data)
//         //to jest w Bravo.js z zmiana znaków
//     } catch (err) {
//         console.log(err)
//         res.statusCode = 400
//         res.end("zle bravo")
//     }
//     try {
//         const responseGamma = await axios ({
//             url: `http://localhost:${GAMMA_PORT}`,
//             method: 'post',
//             data: req.body
//         })
//         res.end(responseGamma.data)
//     } catch (err) {
//         console.log(err)
//         res.statusCode = 400
//         res.end("zle gamma")
//     }
// })
//
// Alpha.listen(ALPHA_PORT, () => {console.log('Listening to Alpha')})

