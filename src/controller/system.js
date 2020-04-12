const signIn = async(ctx, next) => {
  ctx.body = 'Hello World'
  ctx.status = 200
}

const signOut = async(ctx, next) => {
  ctx.status = 200
}

const signUp = async(ctx, next) => {
  console.log(ctx)
  ctx.status = 200
}

module.exports = {
  controller: '/system',
  mappers: [
    signIn,
    signOut,
    signUp
  ]
}
