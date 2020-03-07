const signIn = async(ctx, next) => {
  ctx.body = 'Hello World'
  ctx.status = 200
}

const signOut = async(ctx, next) => {
}

const signUp = async(ctx, next) => {
}

module.exports = {
  controller: '/system',
  mappers: [
    signIn,
    signOut,
    signUp
  ]
}
