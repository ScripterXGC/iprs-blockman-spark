const express = require('express');
const router = express.Router(); 
const fs = require('fs');
const mongoose = require('mongoose');

const uuser = mongoose.model('User');

router.get('/api/v1/friends/recommendation', async (req, res) => {
    const friendRecommend = await uuser.find({}, { sex: 1, userId: '$userId', nickName: '$nickname', _id: 0 });
    res.status(200).json({ code: 1, message: 'SUCCESS', data: friendRecommend });
});

router.get('/api/v1/friends/info/:nickName', async (req, res) => {
    const friendRecommend = await uuser.find({}, { sex: 1, nickName: '$nickname', _id: 0 });
    const nicknameToFind = req.params.nickName;
    const users = friendRecommend;
    const pageNo = parseInt(req.query.pageNo) || 0;
    const pageSize = parseInt(req.query.pageSize) || 10;

    let foundUser = users ? users.find(user => {
        if (user && user.nickName) { // Access 'user.nickname' (match database field name)
            return user.nickName === nicknameToFind;
        }
        return false;
    }) : undefined;
   
    console.log(foundUser);
    res.status(200).json({
        code: 1,
        message: 'SUCCESS',
        data: {
            pageNo,
            pageSize,
            data: foundUser
        }
    });
});

router.get('/api/v1/friends', async (req, res) => {
    const userId = req.headers.userid;
    let user = await uuser.findOne({ userId });
    const pageNo = parseInt(req.query.pageNo) || 0;
    const pageSize = parseInt(req.query.pageSize) || 10;
    
        if (pageNo !== 0) {
            return res.status(200).json({
                code: 1,
                message: 'SUCCESS',
                data: {
                    pageNo,
                    pageSize,
                    totalPage: 0,
                    totalSize: 0,
                    data: []
                }
            });
        }

        res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: {
                pageNo,
                pageSize,
                totalPage: 0,
                totalSize: 0,
                data: user.friends,
                other: null
            }
        });
});

router.post('/api/v1/friends', async (req, res) => {
    const userId = req.headers.userid;
    const messageone = req.body;
    const friend = req.body.friendid;
    const friendData = await uuser.findOne({ friend }, { sex: 1, nickname: "$nickname", userId: "$userId", _id: 0 });
    try {
        const helloWorld = await uuser.findByIdAndUpdate({ userId }, 
            { $push: { friendRequests: messageone } },
            { new: true, runValidators: true });
        
        res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: null
        });
    } catch (error) {
        console.log("Error in friend requests: " + error);
        res.status(400).json({
            code: 17,
            message: 'Wrong paremeters',
            data: null
        });
    }
});

module.exports = router;