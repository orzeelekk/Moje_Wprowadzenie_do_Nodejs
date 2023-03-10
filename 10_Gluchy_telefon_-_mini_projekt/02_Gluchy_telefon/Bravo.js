const http = require('http')
const {BRAVO_PORT} = require("./config");
const parseBody = require('./bodyParser')

const Bravo = http.createServer(async (req,res) => {
    req = await parseBody(req)

    res.end(req.body.replace(/l/g, '*'))
})
Bravo.listen(BRAVO_PORT, () => {console.log('Listening to Bravo port')})