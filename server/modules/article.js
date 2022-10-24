const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Article = Sequelize.import("../schema/article");     // 引入文章数据表模型文件
Article.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class ArticleModel {
	static async createArticle(data) {
		return await Article.create({
			title: data.title,
			content: data.content,
		})
	}

	static async getArticleDetail(id) {
		return await Article.findOne({
			where: {id}
		})
	}
}

module.exports = ArticleModel;