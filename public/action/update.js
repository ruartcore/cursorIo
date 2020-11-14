
window.onload = (e) =>{ 
	try{
	if(!MyCursor){
	MyCursor = new Cursor({
  	x:0,
      y:0,  
      hash: 'local'
   });
   //socket.emit('join', ePacket.toByte(MyCursor.getPos()) );
   }
   
   button.onmouseover = button.onmouseout = handler;

function handler(event) {
  if (event.type == 'mouseover') {
 	socket.emit('join_room', room_name.value );
	 room = room_name.value;
	connectbar.style.display = "none";
	room_name_text.textContent = "Room - " + room;
  }
  //if (event.type == 'mouseout') {}
}
   
   
	document.onmousemove = function(ev) {
			if(MyCursor){
                  MyCursor.move({  
                    x: ev.clientX,
                    y: ev.clientY
                    });
                    socket.emit('move', ePacket.toByte(MyCursor.getPos()) );
                    }
       }      
	document.addEventListener("click",
                (e)=>{
                	let evg  = 4;
                if(e.which && e.which >=1 && e.which <=3){
                	evg = e.which;
                }
		if(MyCursor){
                  MyCursor.move({  
                    x: e.clientX,
                    y: e.clientY,
                    event: evg
                    });
                    socket.emit('move', ePacket.toByte(MyCursor.getPos()) );
        }
	});
	}catch(ex){
	document.getElementById("event").innerHTML +=
	`
	Error: ${ex}   |
	<br>
	`;
}
 };