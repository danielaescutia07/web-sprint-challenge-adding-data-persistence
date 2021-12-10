const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('get all project router works!')
});


module.exports = router;
