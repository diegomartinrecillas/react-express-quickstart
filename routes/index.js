const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'React App on Express'
    });
})

module.exports = router;
