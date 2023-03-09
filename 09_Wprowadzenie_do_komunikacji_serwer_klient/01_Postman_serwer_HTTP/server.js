const http = require('http')
const fs = require('fs')

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/user') {
        res.end('Server received a GET request to path /user')
    }
    else if (req.method === 'GET') {
        res.end('Server received a GET request')
    }
    else if (req.method === 'POST' && req.url === "/file") {
        const writeStream = fs.createWriteStream(__dirname + '/file.txt')
        // console.log(req)
        req.pipe(writeStream)
        res.end('Wysłano plik do zapisu')
        // req.setEncoding('utf-8');
        // let file = '';
        // req.on('data',(data) => {
        //     file += data;
        // })
        // res.end('Server received a POST request')
    }
    else if (req.method === 'PUT') {
        res.end('Server received a PUT request')
    }
    else if (req.method === 'PATCH') {
        res.end('Server received a PATCH request')
    } else {
        res.statusCode = 404;
        res.end()
    }

})

server.listen(8080, () => {
    console.log('Listening on port 8080')
})
