const Template = require('../templates/response')

const ROUTES_USER = require('./user/user')

module.exports = function(app, db){
	ROUTES_USER(app,db)

	/*
	*Throw not found if no 
	*handler found for the request route
	*/

	app.use(function(req, res, next){
		let response = new Template.Error()
		response.withMessage("Nice try :) Doctor Quack Quack T_T")

		res.status(404).json(response.body())
	})
}