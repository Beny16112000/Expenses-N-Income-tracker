const express = require('express');
const router = express.Router();
const Expenss = require('../models/expenssDB');


// Add Expensses


router
    .route('/add')
    .get((req, res) => {
        res.render('expenss/expens')
    })
    .post(async (req, res) => {
        const { title, amount } = req.body;

        const expenss = new Expenss({
            title,
            amount,
            date: Date.now()
        });

        try {
            await expenss.save();
            res.redirect('/');
        } catch (error) {
            res.send('Error To Add');
        }
    });


module.exports = router;