const StockModel = require('../modules/stock')

class stockController {
	static async create(ctx) {
		let req = ctx.request.body
		if(req.name && req.code && req.qty) {
			try {
				const rec = await StockModel.createStock(req)
				const data = await StockModel.getStockDetail(rec.id)

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
				const data = await StockModel.getStockDetail(id)

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

module.exports = stockController