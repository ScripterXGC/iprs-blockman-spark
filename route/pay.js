const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/api/v1/pay/products', async (req, res) => {
    res.status(200).json({
        code: 1,
        message: "SUCCESS",
        data: [
            {}
        ]
    });
});

module.exports = router;