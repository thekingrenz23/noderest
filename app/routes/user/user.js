const users = [
	{
		id: 1,
		name: 'Renz Carlo Salanga',
		email: 'thekingrenz23@gmail.com',
		password: '123123'
	},
	{
		id: 2,
		name: 'Cesar Salanga',
		email: 'cesar23@gmail.com',
		password: '123123'
	}
]

module.exports = function(app, db){

	app.get('/getUsers', function(req, res){
		res.json(users)
	})

	app.get('/getUser/:id', function(req, res){
		const id = req.params.id

		res.json(users[id])
	})

}