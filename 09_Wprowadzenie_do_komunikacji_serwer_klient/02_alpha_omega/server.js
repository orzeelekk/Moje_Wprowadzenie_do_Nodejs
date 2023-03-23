const http = require("http");
const axios = require("axios");

const alpha = http.createServer(async (req, res) => {
    // your code goes here
    const clientAuth = req.headers.authorization
    try {
        const response = await axios ({
            url: 'http://localhost:9000',
            method: 'get',
            headers: {
                authorization: clientAuth
            }
        })
        // console.log(response.data)

        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(response.data))
    } catch (err) {
        console.log(err)
        res.statusCode = 403
        res.end('Server Omega sent an unauthorized response.')
    }

    // const authKey = req.headers.authorization
    // let response;
    // try {
    //     respone = await axios({
    //         url: "http://localhost:9000",
    //         method: "GET",
    //         headers: {
    //             authorization: authKey,
    //         },
    //     });
    //     res.setHeader("Content-Type", "application/json");
    //     res.end(JSON.stringify(response.data));
    // } catch(error) {
    //     res.statusCode = 403;
    //     res.end(error.message);
    // }
});

const omega = http.createServer(async (req, res) => {
    // your code goes here
    //w postman nadaje przez headera i tam authorization = kluczyk i dziala
    //tu ok!
    const authorized = req.headers.authorization && req.headers.authorization === 'kluczyk'
    if (!authorized) {
        res.statusCode = 403;
        res.end('Unauthorized')
        return
    }
    const obj = {
        firstName: 'Fred',
        lastName: 'Flintstone',
        kids: [{
            name: 'Joanna',
            age: 12,
            married: true,
            spouse: {
                name: 'Jan'
            }
        }]
    }
    res.end(JSON.stringify(obj))

    // const authKey = req.headers.authorization;
    //
    // if (authKey !== "mojeSuperHaslo") {
    //     res.statusCode = 403;
    //     res.end("Error coś tam message");
    // } else {
    //     res.setHeader("Content-Type", "application/json");
    //     res.end(
    //         JSON.stringify({
    //             myName: "Gustaw",
    //         })
    //     );
    // }
});

alpha.listen(8000, console.log("Alpha listening"));
omega.listen(9000, console.log("Omega listening"));