const MongoClient = require('mongodb').MongoClient

const config = {
	url: 'mongodb://localhost:27017',
	databaseName: 'ridebuddy',
	options: {
		useUnifiedTopology: true
	}
}

const client = new MongoClient(config.url, { ...config.options })

const state = {
	db: null
}

const connect = function(cb){
	if(state.db !== null){
		cb()
	}else{
		client.connect(function(err, client){
			if(err){
				cb(err)
			}else{
				state.db = client.db(config.databaseName)
				cb()
			}
		})
	}
}

const getDB = function(){
	return state.db
}

module.exports = { connect, getDB }