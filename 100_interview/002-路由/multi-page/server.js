const express = require('express')
const {
    resolve
} = require('path')

const app = express();

// http://localhost:3000/index.html

app.use(express.static(resolve(__dirname, '/public')))

app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'public/index.html'))
})

app.get('/list', (req, res) => {
    res.sendFile(resolve(__dirname, 'public/list.html'))
})

app.listen(3000, () => {

})