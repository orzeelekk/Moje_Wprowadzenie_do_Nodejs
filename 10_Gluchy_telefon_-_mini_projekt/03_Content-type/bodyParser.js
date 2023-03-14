module.exports = parseBody = (req) =>
    new Promise((resolve) => {
        let body = ''
        req.on('data',(data) => {
            body += data.toString()
        })
        req.on('end',() => resolve ({
            ...req,
            body
        }))
    })