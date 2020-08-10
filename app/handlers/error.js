const Template = require('../templates/response')

module.exports = function(err, req, res, next){
	let response = new Template.Error()
	res.status(500).json(response.body())
}