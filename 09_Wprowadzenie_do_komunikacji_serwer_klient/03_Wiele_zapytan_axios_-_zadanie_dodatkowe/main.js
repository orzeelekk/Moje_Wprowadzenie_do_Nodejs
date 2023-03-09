const http = require('http');
const axios = require('axios');

const alpha = http.createServer(async (req,res) => {
    try {
        const [b,c,d] = await Promise.all([
            //axios to jest moj req przekazywany
            //to działa
            // to jest to samo HTTP (BEZ S) i ok
            // axios.get('http://localhost:6000'),
            // axios.get('http://localhost:7000'),
            // axios.get('http://localhost:8000')
            axios({
                url: 'http://localhost:6000',
                method: 'GET',
            }),
            axios({
                url: 'http://localhost:7000',
                method: 'GET',
            }),
            axios({
                url: 'http://localhost:8000',
                method: 'GET',
            })
        ])
        // res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({
            'bravo': b.data,
            'charlie': c.data,
            'delta': d.data
        }))
    } catch(err) {
        res.statusCode = 403;
        res.end(err.message);
    }
})

// to jest na zewnatrz by nie kopiowac kodu leci po respond.
const respond = (serverName,response) => {
    const data = {
        message: `Hello from ${serverName}`,
        timestamp: new Date().getTime()
    }
    response.end(JSON.stringify(data))
}


const bravo = http.createServer(async (req,res) => {
    respond('bravo',res)
})
const charlie = http.createServer(async (req,res) => {
    respond('charlie',res)
})
const delta = http.createServer(async (req,res) => {
    respond('delta',res)
})

alpha.listen(5000, console.log('Alhpa listening'));
bravo.listen(6000, console.log('Bravo listening'));
charlie.listen(7000, console.log('Charlie listening'));
delta.listen(8000, console.log('Delta listening'));
