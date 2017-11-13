var server = require("./express/server");
var router = require("./test");

server.start(router.route);
