module.exports =  parseBody = (req) =>
    new Promise((resolve) => {
        let body = ''
        //nadajemy po body w Postmanie przez BODY => (raw) i wpisujemy co chcemy
        req.on('data',(data) => {
            body += data.toString()
        })
        req.on('end', () => resolve({
            ...req,
            body
        }))
    })

