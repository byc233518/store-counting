const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})

const WjController = require('../controllers/wj')

router.post('/wj', WjController.create)

router.get('/wj/:id', WjController.detail)

module.exports = router
