const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static('public'));

app.listen(PORT, ()=> {
  console.log(`Listening on port YA! ${PORT}`)
})

module.exports = app
