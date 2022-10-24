const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('article', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name',
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'code',
		},
		qty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'qty',
		},
		desc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'desc',
		}
	})
}