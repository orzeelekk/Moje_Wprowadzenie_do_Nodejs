const http = require('http')
const jsonxml = require('jsonxml')
const parseBody = require('./bodyParser')

const generateHtml = (object) => {
    console.log(object)
    return `
        <html>
            <header>
                <h2>CodersLab</h2> 
            </header>
            <body>
                <p>${object.message}</p>
            </body>
        </html>
    `
}

const server = http.createServer(async (req, res) => {
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
        req = await parseBody(req)
    }

    const acceptedContentType = req.headers.accept
    console.log(acceptedContentType)
    const body = JSON.parse(req.body)

    switch (acceptedContentType) {
        case 'application/json':
            res.setHeader('Content-Type','application/json')
            res.end(JSON.stringify(body))
            break
        case 'application/xml':
            res.setHeader('Content-Type','application/xml')
            res.end(jsonxml(body))
            break
        case 'text/html':
            res.setHeader('Content-Type','text/html')
            res.end(generateHtml(body))
            break
        default:
            res.statusCode = 400
            res.end('Accepted Content-Type is not supported.')
    }
})

server.listen(8419, () => {
    console.log('Server listening on port 8419')
})