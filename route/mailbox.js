const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const path = require('path');

const attachment = new mongoose.Schema({
         status: Number,
         type: Number,
         name: String,
         itemId: Number,
         qty: Number,
         icon: String
});


const mailboxSchema = new mongoose.Schema({
   id: Number,
   title: String,
   content: String,
   sendDate: Number,
   status: Number,
   type: Number,
   attachment: [attachment],
   extra: String
});

const Mailbox = mongoose.model('Mailbox', mailboxSchema, 'mailbox');

router.get('/api/v1/mail', async (req, res) => {
    const mail = await Mailbox.find({});
    res.status(200).json({ code: 1, message: 'SUCCESS', data: mail });
});

module.exports = router;
