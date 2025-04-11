const express = require('express');
const router = express.Router(); 
const fs = require('fs');
const mongoose = require('mongoose');

const uuser = mongoose.model('User');

router.get('/api/v1/friends/recommendation', async (req, res) => {
    const currentUser = req.headers.userid;
    const currentUserData = uuser.findOne({ currentUser });
    const users = await uuser.find({ userId: { $ne: currentUser } }).select('userId sex nickname');

    // Transform the nickname field to nickName in the response
    const formattedUsers = users.map(user => ({
      userId: user.userId,
      sex: user.sex,
      nickName: user.nickname,
    }));
    res.status(200).json({ code: 1, message: 'SUCCESS', data: formattedUsers });
});

router.get('/api/v1/friends/info/:nickName', async (req, res) => {
    const nickName = req.params.nickName;
    const users = await uuser.find({
            nickname: { $regex: new RegExp(nickName, 'i') } 
        }).select('userId nickname sex -_id');
        const searchResults = users.map(user => ({
            userId: user.userId,
            nickName: user.nickname,
            sex: user.sex
        }));
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
                data: searchResults,
                other: null
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


router.get('/api/v1/friends/requests', async (req, res) => {
    const userId = req.headers.userid;
    let user = await uuser.findOne({ userId });
    const requests = user.friendRequests
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
                data: requests,
                other: null
            }
        });
});

router.get('/api/v1/friends', async (req, res) => {
    const userId = req.headers.userid;
    let user = await uuser.findOne({ userId });
    const friend = user.friends
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
                data: friend,
                other: null
            }
        });
});

module.exports = router;