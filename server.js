const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/home', (req, res) => {
    res.render('index')
})

app.listen(5000)
console.log('Port 5000')