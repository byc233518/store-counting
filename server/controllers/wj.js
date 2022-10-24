const WjModel = require('../modules/wj')

class WjController {
	static async create(ctx) {
		let req = ctx.request.body
		if(req.userName && req.account && req.title && req.content) {
			try {
				const rec = await WjModel.createWj(req)
				const data = await WjModel.getWj(rec.id)

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
				const data = await WjModel.getWj(id)

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

module.exports = WjController