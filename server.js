const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('./app/handlers/error')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(errorHandler)

require('./app/routes')(app, {})

app.listen(8080, function(){
	console.log("Server is running at port "+8080)
})