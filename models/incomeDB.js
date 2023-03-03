const { Sequelize } = require('sequelize');


// Income


const sequelize = new Sequelize('postgres://benishtainberg:password@localhost:5432/benishtainberg');


const Income = sequelize.define('income', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});


sequelize.sync()
    .then(() => {
        console.log('Models synced successfully.');
    })
    .catch((error) => {
        console.error('Error syncing models: ', error);
    });


module.exports = Income;