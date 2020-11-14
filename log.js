module.exports = function log(text){
		let Data = new Date(); Data = ""+Data.getHours() + ":" + Data.getMinutes() + ":" +Data.getSeconds();
		console.log("[".gray + Data.gray +"]".gray+ "[Server]: ".blue +text);
	}