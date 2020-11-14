class Cursor {
		constructor(data) {
				this.x = data.x;
				this.y = data.y;
				this.event = 4;
				this.hash = data.hash;
				this.object = document.createElement('img');
                this.object.src = '/cursor.png';
                this.object.id = ''+data.hash;
                
                  this.object.style.position = 'absolute';
                  this.object.style.left = ''+data.x + 'px';
              	this.object.style.top = ''+data.y + 'px';
                this.object.classList.add('cursor');
                document.body.appendChild(this.object);
			}
			getPos(){
				return {
				        hash: this.hash,
						x:this.x,
						y:this.y,
						event: this.event
					};
				}
				
		      move(data){
			      this.object.style.left = ""+data.x + 'px';
				  if(data.event){
					this.event = data.event;
				  }
              	this.object.style.top = ""+data.y + 'px';
                  this.x = data.x;
				  this.y = data.y;
			 }
	};