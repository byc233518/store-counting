const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})

const ArticleController = require('../controllers/article')

router.post('/article', ArticleController.create)

router.get('/article/:id', ArticleController.detail)

module.exports = router
