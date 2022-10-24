const ArticleModel = require('../modules/article')

class articleController {
	static async create(ctx) {
		let req = ctx.request.body
		if(req.title && req.content) {
			try {
				const rec = await ArticleModel.createArticle(req)
				const data = await ArticleModel.getArticleDetail(rec.id)

				ctx.response.status = 200
				ctx.body = {
					code: 200,
					message: '创建成功',
					data
				}
			} catch (err) {
				ctx.response.status = 412
				ctx.body = {
					code: 200,
					message: '创建失败',
					data: err
				}
			}
		} else {
			ctx.response.status = 416
			ctx.body = {
				code: 200,
				message: '参数不全',
			}
		}
	}

	static async detail(ctx) {
		let id = ctx.params.id
		if(id) {
			try {
				const data = await ArticleModel.getArticleDetail(id)

				ctx.response.status = 200
				ctx.body = {
					code: 200,
					message: '查询成功',
					data
				}
			} catch (err) {
				ctx.response.status = 412
				ctx.body = {
					code: 200,
					message: '查询失败',
					data: err
				}
			}
		} else {
			ctx.response.status = 416
			ctx.body = {
				code: 200,
				message: '参数不全',
			}
		}
	}
}

module.exports = articleController