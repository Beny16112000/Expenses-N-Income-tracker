const passport = require('passport');
const LocalStrategy = require('passport-local');
const express = require('express');
const router = express.Router();
const User = require('../models/authDB');
const bcrypt = require('bcryptjs');


// User Login


router.use(passport.initialize());


router.get('/login', (req, res) => {
    res.render('authentication/login');
});


router.post('/login', passport.authenticate('local', {
    session: false}),
    (req, res, next) => {
        res.redirect('/')
    }
);


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return done(null, false);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return done(null, false);
        }

        return done(null, {id: user.id, email: user.email });
    } catch (error) {
        return done(error, false);
    }
}));


module.exports = router;