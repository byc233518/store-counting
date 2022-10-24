const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Stock = Sequelize.import("../schema/stock");     // 引入文章数据表模型文件
Stock.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class StockModel {
	static async createStock(data) {
		return await Stock.create({
			name: data.name,
			code: data.code,
			desc: data.desc,
			qty: data.qty,
		})
	}

	static async getStockDetail(id) {
		return await Stock.findOne({
			where: {id}
		})
	}
}

module.exports = StockModel;