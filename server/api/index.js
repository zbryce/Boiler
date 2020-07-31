const router = require('express').Router()

module.exports = router

//after /api

router.use('/american', require('./american'))

router.use('/national', require('./national'))


router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});


