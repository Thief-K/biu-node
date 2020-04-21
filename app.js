const Koa = require('koa')
const app = new Koa()

const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const router = require('./src/router')
const connect = require('./src/util/mangobd/connect')

// cors
app.use(cors())

// body
app.use(bodyParser())

// router
app.use(router.routes())
  .use(router.allowedMethods())

// database
connect()

app.listen(3000)
