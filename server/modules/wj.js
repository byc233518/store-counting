const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Wj = Sequelize.import("../schema/wj");     // 数据表模型文件
Wj.sync({ force: true });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class WjModel {
	static async createWj(data) {
		return await Wj.create({
			userName: data.title,
			account: data.title,
			title: data.title,
			content: data.content,
		})
	}

	static async getWj(id) {
		return await Wj.findOne({
			where: {id}
		})
	}
}

module.exports = WjModel;