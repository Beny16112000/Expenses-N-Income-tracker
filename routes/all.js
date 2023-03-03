const express = require('express');
const router = express.Router();
const Expenss = require('../models/expenssDB');
const Income = require('../models/incomeDB');


// All


router
    .route('/all')
    .get(async (req, res) => {
        const expenss = await Expenss.findAll();
        const incomes = await Income.findAll();
        res.render('expenss/all', { expenss: expenss, incomes: incomes });
    })
    .post(async (req, res) => {
        const { type ,pk } = req.body;
        try {
            if (type === 'expenss') {
                const expenss = await Expenss.findByPk(pk);
                await expenss.destroy();
                res.redirect('/expenses/all');
            } else if (type === 'income') {
                const income = await Income.findByPk(pk);
                await income.destroy();
                res.redirect('/expenses/all');
            } else {
                throw new Error('Invalid record type');
            } 
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting record');
        }
    });


module.exports = router