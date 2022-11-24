const sequelize = require("../../core/config/database/database")
const {DataTypes} = require("sequelize")

const OrderTest = sequelize.define("order-test", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    recipient: {
        type: DataTypes.STRING
    },
    note: {
        type: DataTypes.STRING
    },
    recipientPhoneNumber: {
        type: DataTypes.STRING
    },
}, {
    underscored: true
})

module.exports = OrderTest