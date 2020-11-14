//init
  var Users = new UsersProvider();
  var MyCursor = null;
  var ePacket = new ePack();
  var socket = io.connect(location.href, {reconnect: true});
  var local_id = null;
  var room = null;