const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/authDB')
const router = express.Router()


// User Register


router
    .route('/register')
    .get((req, res) => {
        res.render('authentication/register')
    })
    .post(async (req, res) => {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        try {
            await user.save();
            res.redirect('/auth/login');
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                res.send('Email or username already exists');
            } else {
                res.send('Error registering user');
            }
        }
    });


module.exports = router