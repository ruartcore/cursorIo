 class UsersProvider {
 	constructor() {
 		this.arr = [];
 	}
 	check(data){
 	for(let u = 0; u<this.arr.length; u++){
     	       if(this.arr[u].hash == data.hash){     	             
                       return true;
                  }
           }
           return false;
 }
 	addUser(data){
 	if(this.check(data)){
 	return this.getUser(data);
 }
 		this.arr.push( new Cursor( data) );
            return this.arr[this.arr.length-1];
 	}
     removeUser(hash){
     	for(let u = 0; u<this.arr.length; u++){
     	       if(this.arr[u].hash == hash){
     	             this.arr.splice(u,1);
     document.getElementById(hash).parentNode.removeChild(document.getElementById(hash));
                       break;
                  }
           }
     }
     
     getUser(data){
     	for(let u = 0; u<this.arr.length; u++){
     	       if(this.arr[u].hash == data.hash){     	             
                       return this.arr[u];
                  }
           }
           return this.addUser(data);
     }
     
     getUserAll()
     { return this.arr; }
     
 };