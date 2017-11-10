'use strict'

const Router = require('koa-router')
const App = require('../app/controllers/app')

module.exports = function(){
	var router = new Router({
    prefix: '/api'
  })

  // DB Interface test
  router.get('/test/',App.test)

  return router
}