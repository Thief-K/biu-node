const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})

function addRouter(module) {
  const controller = module.controller
  const mappers = module.mappers
  mappers.forEach(mapper => {
    router.all(
      controller + '/' + mapper.name.toLocaleLowerCase(),
      mapper
    )
  })
}

const system = require('../controller/system')

addRouter(system)

module.exports = router
