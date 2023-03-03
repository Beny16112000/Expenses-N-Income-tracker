const experss = require('express');
const router = experss.Router();
const session = require('express-session');


// User Logout


router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));


router.get('/logout', function(req, res) {
    req.logout(function(err) {
        if (err) {return next(err); }
        req.session.destroy(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    });
});


module.exports = router