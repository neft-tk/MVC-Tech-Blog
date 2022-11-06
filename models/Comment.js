const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    // add properites here, ex:
    user: {
         type: DataTypes.STRING,
         allowNull:false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull:false
    },
},{
    sequelize
});

module.exports=Comment