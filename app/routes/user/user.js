const Template = require('../../templates/response')

module.exports = function(app, db){

	app.post('/addUser', async function(req, res){
		let response

		try{
			const COLLECTION_COMMUTER = db.getDB().collection('user')
			const result = await COLLECTION_COMMUTER.insertOne(req.body)

			response = new Template.Success()
			response.withData(result.ops)
			res.status(200).json(response.body())
		}catch(err){
			response = new Template.Error()
			response.withMessage(err.toString())
			res.status(500).json(response.body())
		}

	})

}