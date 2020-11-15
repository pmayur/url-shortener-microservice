const express = require('express')
                require('dotenv').config()

const bodyParser  = require('body-parser');
const app         = module.exports = express()
const port        = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/shorten', require('./controllers/shorten'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})