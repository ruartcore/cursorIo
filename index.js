var express = require('express');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var colors = require('colors');
var opn = require('opn');
 
       app.use(express.static(__dirname + '/node_modules'));
		app.use(express.static(__dirname + '/public'));
		app.use(express.static(__dirname + '/public/action'));
		app.use(express.static(__dirname + '/public/js'));
		app.use(express.static(__dirname + '/public/cursor'));
		app.use(express.static(__dirname + '/public/styles'));
		app.use(express.static(__dirname + '/public/img'));
		app.use(express.static(__dirname + '/public/alg'));
		app.use(express.static(__dirname + '/public/init'));
		app.use(express.static(__dirname + '/public/inetPacket'));


//		My code
	var log = require('./log.js');
	var ePack = require('./server/inetPacket/inetpacket.js');
	var UsersProvider = require('./server/inetPacket/usersProvider.js');
//
		
	var Users = new UsersProvider();
	var ePacket = new ePack();
  
  
  
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
var ID = (socket.id).toString();
    console.log("Client connected. - "+ID);
    
  socket.on('join', function(data) {
  /*	data.unshift(ID);
       Users.addUser(ePacket.toJson(data));
       let all = Users.getUserAll();
       for(let a = 0;a<all.length;a++){
       	if(all[a].getPos().hash == ID) continue;       
             socket.emit('userConnect',ePacket.toByte(all[a].getPos()));
       }
       socket.broadcast.emit('userConnect',data);*/
    });
    
    socket.on('handshake', function(data) {
    	socket.emit('ok',{id:ID});
    })
    
    socket.on('move', function(data) {
        data.unshift(ID);
        if(Users.getUser(ePacket.toJson(data)).getRoom() == "none"){
        	return;
        }
        Users.getUser(ePacket.toJson(data)).move(ePacket.toJson(data));
     
       data = ePacket.toByte(Users.getUser(ePacket.toJson(data)).getPos());
        console.log("[MOVE]".red+`
  data: [ ${data} ]
  `);
       socket.broadcast.to(Users.getUser(ePacket.toJson(data)).getRoom()).emit('userMove', data);
    });
    socket.on('disconnect', function(data) {
    	Users.removeUser(ID);
        console.log('Client disconnected.');
        socket.broadcast.emit('leave',{hash:ID});
    });
    socket.on('join_room', function(room) {
    socket.join(room);
    log(`${ID} - подключился к комнате: ${room}`.green);
       Users.addUser(ePacket.toJson([ID,10,100,4]));
       Users.getUser(ePacket.toJson([ID,10,100,4])).setRoom(room);
       let all = Users.getUserAll();
       for(let a = 0;a<all.length;a++){
       	if(all[a].getPos().hash == ID || all[a].getRoom() != room) continue;      
             socket.emit('userConnect',ePacket.toByte(all[a].getPos()));
       }
       
	socket.broadcast.to(room).emit('userConnect', [ID,10,10,4]);
	//io.sockets.in(room).emit('userConnect', [ID,10,100,4]);
  });
});

http.listen(3000, () => {
    log('Сервер слушает порт 3000');
});