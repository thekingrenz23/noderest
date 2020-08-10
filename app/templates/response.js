class Success{

	constructor(){
		this.response = {
			status: "success",
			data: null
		}
	}

	withData(responseData){
		this.response.data = responseData
	}

	body(){
		return this.response
	}
}

class Error{

	constructor(){
		this.response = {
			status: "error",
			message: null
		}
	}

	withMessage(customMessage){
		this.response.message = customMessage
	}

	body(){
		return this.response
	}
}

class Fail{

	constructor(){
		this.response = {
			status: "fail",
			data: null
		}
	}

	withData(responseData){
		this.response.data = responseData
	}

	body(){
		return this.response
	}
}


module.exports = { Success, Error, Fail }












