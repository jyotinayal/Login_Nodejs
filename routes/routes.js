const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')

// router.get('/', (req, res, next) => { res.render('signUp') });
// router.get('/signup', (req, res, next) => { res.render('signUp') });

router.get('/', (req, res, next) => { res.render('login') });
router.get('/login', (req, res, next) => { res.render('login') });
router.post('/login', controllers.login  );

module.exports = router;