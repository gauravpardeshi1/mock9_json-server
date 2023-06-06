const jsonserver=require('json-server');
const server=jsonserver.create();
const route=jsonserver.router('db.json');
const middlewares=jsonserver.defaults();
//const port= process.env.PORT || 8080;
server.use(middlewares)
server.use(route) 
server.listen(8080);