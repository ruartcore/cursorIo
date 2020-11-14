module.exports = class Cursor {
		constructor(data) {
				this.x = data.x;
				this.y = data.y;
				this.event = 4;
				this.hash = data.hash;
				this.room = "none";
			}
			getRoom() {
				return this.room;
				}
			setRoom(room) {
					this.room = room;
				}
			getHash(){
				return this.hash;
				}
			getPos(){
				return {
					    hash:this.hash,
						x:this.x,
						y:this.y,
						event: this.event
					};
				}
				
		      move(data){
				  this.event = data.event;
			      this.x = data.x;
				  this.y = data.y;
			 }
	};