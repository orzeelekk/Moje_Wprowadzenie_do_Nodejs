const http = require('http')
const {GAMMA_PORT} = require("./config");
const parseBody = require('./bodyParser')

const Gamma = http.createServer(async (req,res) => {
    req = await parseBody(req)

    res.end(req.body.replace(/o/g, '?'))
})
Gamma.listen(GAMMA_PORT, () => {console.log('Listening to Gamma port')})