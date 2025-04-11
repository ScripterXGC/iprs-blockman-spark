const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const path = require('path');
const updateJson = require('../config/update');

const blockmodsJson = require('../config/blockmods-v1');

router.get('/files/blockymods-check-version', async (req, res) => {
    res.json(updateJson);
});

router.get('/files/blockmods-config', (req, res) => {
    res.json(blockmodsJson);
});

module.exports = router;