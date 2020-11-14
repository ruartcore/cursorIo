var sendEvent = function(data){
	if(data.event == "EVENT_NONE") return;
	document.getElementById("event").innerHTML +=
	`
	ID: ${data.hash}   | Event: ${data.event}
	<br>
	`;
	}
//<!-- <meta name="viewport" content="width=device-width"> --!>
socket.on('connect', function(data) {
    socket.emit('handshake', 'connect' );
 });
 socket.on('ok', function(data) {
    local_id = data.id;
        });
        
socket.on('userConnect', function(data) {
	if(ePacket.toJson(data).hash == local_id) return;
      Users.addUser(ePacket.toJson(data));
 });
 socket.on('leave', function(data) {
      Users.removeUser(data.hash);
 });
 
 socket.on('userMove', function(data) {
 	data = ePacket.toJson(data);
		 sendEvent(data);
      Users.getUser(data).move(data);
 });