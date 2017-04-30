const Koa = require('koa')
const serve = require('koa-static')

const confs = require('./confs')

const server = new Koa()

server.use(serve(`./public/`, { gzip: true }))

server.listen(confs.port);

console.log(`sever start on port ${confs.port}`)
