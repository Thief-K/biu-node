const Koa = require('koa')
const app = new Koa()
const router = require('./src/router')
const cors = require('@koa/cors')

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })

// cors
app.use(cors())

// router
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
