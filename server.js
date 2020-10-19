const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('./app/handlers/error')
const cors = require('cors')
const db = require('./app/database/db')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(errorHandler)

require('./app/routes')(app, db)

db.connect(function(err){
	if(err){
		console.log(err)
		process.exit(1)
	}else{
		console.log("Database connected")

		app.listen(process.env.PORT || 8080, function(){
			console.log("Server is running at port "+ (process.env.PORT || 8080))
		})
	}
})