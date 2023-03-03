const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const Expenss = require('../models/expenssDB');
const Income = require('../models/incomeDB');


// Index Page


router.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


router.use(passport.initialize());
router.use(passport.session());


function isLoggedin(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/login');
}


router.get('/', isLoggedin, async (req, res) => {
    const expenses = await Expenss.sum('amount');
    const incomes = await Income.sum('amount');
    res.render('index', { expenses: expenses, incomes: incomes });
});


module.exports = router;