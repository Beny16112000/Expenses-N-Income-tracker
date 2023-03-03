const { Sequelize } = require('sequelize');


// Authentication Database


const sequelize = new Sequelize('postgres://benishtainberg:password@localhost:5432/benishtainberg');


const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await User.sync({ alter: true });
        console.log('User table synced successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = User;