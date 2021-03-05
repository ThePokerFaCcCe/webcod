"use strict";

module.exports = {
	up: async (queryInterface, { DataTypes }) => {
		await queryInterface.createTable("servers", {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ip: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			port: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			server_type: {
				type: DataTypes.ENUM("CoD4x"),
				allowNull: false,
				defaultValue: "CoD4x",
			},
			database: {
				type: DataTypes.JSON,
				defaultValue: JSON.stringify({
					enabled: false,
					host: "localhost",
					user: "root",
					password: "",
					name: "cod4x",
				}),
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("servers");
	},
};