const env={
    database: 'testdb',
    username:'iooo2',
    password: '12345',
    host:'localhost',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000

    }
};

module.exports=env;