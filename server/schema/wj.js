const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('wj', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'userName',
		},
		account: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'account',
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'title',
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'content',
		}
	})
}