const http = require('http')
const sevrer = http.createServer((req, res) =>{

    console.log('New connection')
    res.end('Brongle is based')
})

const PORT = process.env.PORT || 8080
sevrer.listen(PORT, () => console.log('Listening dimwit'))
