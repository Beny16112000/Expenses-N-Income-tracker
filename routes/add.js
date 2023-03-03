const express = require('express');
const router = express.Router();
const Income = require('../models/incomeDB');


// Add expenss

router
    .route('/income')
    .get((req, res) => {
        res.render('expenss/add')
    })
    .post(async (req, res) => {
        const { title, amount } = req.body;

        const add = new Income({
            title,
            amount,
            date: Date.now()
        });

        try {
            await add.save();
            res.redirect('/');
        } catch (error) {
            res.send('Error To Add');
        }
    });


module.exports = router;