const express = require('express')
const {
    resolve
} = require('path')

const app = express();

app.use(express.static(resolve(__dirname, '/public')))

app.get('/app.js', (req, res) => {
    res.sendFile(resolve(__dirname, 'public/app.js'));
});

app.use((req, res) => {
    res.sendFile(resolve(__dirname, 'public/index.html'))
})


app.listen(3300)