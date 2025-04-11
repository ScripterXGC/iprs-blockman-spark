const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const path = require('path');

const clanSchema = new mongoose.Schema({
    
});

const Clan = mongoose.model('Clan', clanSchema, 'clans')

router.get('/api/v1/clan/tribe/recommendation', async (req, res) => {
    const clanJson = await Clan.find({});
    if ( clanJson !== 0 ) {
        return res.status(200).json({ 
                code: 1, 
                message: 'SUCCESS', 
                data: clanJson
        });
    }
    
     res.status(200).json({ 
        code: 1, 
        message: 'SUCCESS', 
        data: null
    });
});

module.exports = router;