const router = require('express').Router()

module.exports = router

//after /api

router.use('/politics', require('./politics'))

router.use('/sports', require('./sports'))


router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});


