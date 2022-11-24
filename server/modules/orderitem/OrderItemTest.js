const sequelize = require("../../core/config/database/database")
const {DataTypes} = require("sequelize")

const OrderItemTest = sequelize.define(
    "orderItemTest",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
}, {
    underscored: true
})

module.exports = OrderItemTest