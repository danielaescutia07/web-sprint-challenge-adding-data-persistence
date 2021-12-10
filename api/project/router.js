const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
});

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Projects router failed',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;
