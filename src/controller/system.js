const { createModel } = require('../util/mangobd/model')

const User = createModel('user', {
  username: 'string',
  password: 'string'
})

const signIn = async(ctx, next) => {
  const param = ctx.request.body
  User.find({ username: param.username }, (err, docs) => {
    console.log(err, docs)
  })

  ctx.body = 'Hello World'
  ctx.status = 200
}

const signOut = async(ctx, next) => {
  console.log(ctx)
  ctx.status = 200
}

const signUp = async(ctx, next) => {
  console.log(ctx)
  ctx.status = 200
}

const controller = {
  name: '/system',
  mappers: [
    signIn,
    signOut,
    signUp
  ]
}

module.exports = controller
