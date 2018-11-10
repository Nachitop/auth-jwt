const env = require('./env');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database,env.username,env.password,{
    hots:env.host,
    dialect:env.dialect,
    operatorAliases:false,
    pool:{
        max:env.max,
        min:env.min,
        acquire:env.pool.acquire,
        idle:env.pool.idle
    }
});

const db ={};

db.Sequelize=Sequelize;
db.sequelize= sequelize;

db.user=require('../models/user.model')(sequelize,Sequelize);
db.role=require('../models/role.model')(sequelize,Sequelize);

db.role.belongsToMany(db.user,{through:'user_roles', foreignKey:'roleId', otherKey:'userId'});
db.user.belongsToMany(db.role,{through:'user_roles', foreignKey:'userId', otherKey:'roleId'});

module.exports=db;