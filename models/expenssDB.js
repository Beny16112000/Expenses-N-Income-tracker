const { Sequelize } = require('sequelize');


// Expenss


const sequelize = new Sequelize('postgres://benishtainberg:password@localhost:5432/benishtainberg');


const Expenss = sequelize.define('expenss', {
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


module.exports = Expenss;