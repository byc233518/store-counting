const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})

const StockController = require('../controllers/stock')

router.post('/stock', StockController.create)

router.get('/stock/:id', StockController.detail)

module.exports = router
