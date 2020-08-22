require('dotenv').config()
const express = require('express')
const axios = require('axios');
const app = express()
const {searchByTitle} = require('./dbConn')

const port = 8081;

app.set('port', process.env.PORT || port)

const baseURL = `http://www.omdbapi.com/?apikey=612ed499`;

app.use(async (err, req, res, next) => {
    console.error(err.stack);
    res.writeHead(500)
    res.status(500).send('Someithing Broke!')
    res.end('error')
})

app.get('/', async (req, res) => {
    const {data} = await axios.get(baseURL + `&t=how+to+train`)
    res.end(JSON.stringify(data))
})

app.post('/search', async (req, res) => {
    const result = await searchByTitle();
    res.writeHead(200)
    res.end(JSON.stringify(result))
})


app.listen(port, () => {
    console.log(`Following tutorial, listen on port http://localhost:${port}`)
})
