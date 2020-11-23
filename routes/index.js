const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// ensureAuthenticated makes sure user is logged in when viewing

router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

//contact
router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact')); 

router.get('/privacy', forwardAuthenticated, (req, res) => res.render('privacy'));

router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));










router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/wallet', ensureAuthenticated, (req, res) => res.render('wallet'));


router.get('/user', ensureAuthenticated, (req, res) =>
  res.render('user', {
    user: req.user
  })
);



module.exports = router;
