const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const path = require('path');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    password: String,
    nickname: String,
    userId: String,
    birthday: String,
    introduction: String,
    diamonds: Number,
    gold: Number,
    sex: Number,
    picUrl: String,
    vip: Number,
    email: String,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Array of user IDs who are friends
    friendRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const User = mongoose.model('User', userSchema);

router.post('/api/v1/app/set-password', async (req, res) => {
    const { password } = req.body;
    const userId = req.headers.userid;

    if (!userId) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId });

    if (!user) {
        return res.status(404).json({ code: 108, message: 'User not found', data: null });
    }

    user.password = password;

    await user.save();

    return res.status(200).json({ code: 1, message: 'SUCCESS', data: null });
    
});

router.post('/api/v1/app/renew', async (req, res) => {
    const userId = (Math.floor(Math.random() * 5000) + 125900000).toString();
    
    const user = new User({ userId });

        await user.save();

        res.status(200).json({ code: 1, message: 'SUCCESS', data: { userId, accessToken: 'Not implemented' } });
});

router.post('/api/v1/user/register', async (req, res) => {
    const { nickName, sex } = req.body;
    const userId = req.headers.userid;

    if (!nickName) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId: userId });

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    const existingUser = await User.findOne({ nickname: nickName });
    if (existingUser) {
        return res.status(400).json({ code: 7, message: 'Nickname already exists, choose another nickname', data: null });
    }

    user.nickname = nickName;
    user.sex = sex;
    user.picUrl = '';
    user.birthday = '';
    user.diamonds = 9999;
    user.introduction = 'Welcome to the blocky world!';
    user.gold = 9999;
    user.vip = 3;
    user.email = '';
    user.friends = [];
    user.friendRequests = [];

    await user.save();

    const responseData = { 
        userId: userId,
        nickName: user.nickname,
        sex: user.sex, 
        picUrl: user.picUrl, 
        details: user.introduction,
        birthday: user.birthday,
        vip: user.vip,
        email: user.email,
        expire: 0
    };

    res.status(200).json({ 
        code: 1, 
        message: 'SUCCESS', 
        data: responseData 
    });
});

router.post('/api/v1/user/details/info', async (req, res) => {
    const userId = req.headers['userid'];

    if (!userId) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId });

    const userInfo = {
        userId: user.userId,
        sex: user.sex || 2,
        nickName: user.nickname,
        birthday: user.birthday || '',
        details: user.introduction,
        diamonds: user.diamonds,
        golds: user.gold,
        picUrl: user.picUrl || '',
        email: user.email || '',
        hasPassword: true,
        stopToTime: null
    };

    res.status(200).json({ code: 1, message: 'SUCCESS', data: userInfo });
});

router.post('/api/v1/app/login', async (req, res) => {
    const { uid, password } = req.body;

    if (!uid || !password) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }

    let user = await User.findOne({ userId: uid });

    if (!user) {
        return res.status(200).json({
            code: 102,
            message: 'User ID or username not found.',
            data: null
        });
    }

    if (user.password !== password) {
        return res.status(200).json({
            code: 108,
            message: 'Incorrect password.',
            data: null
        });
    }

    res.status(200).json({
        code: 1,
        data: {
            userId: user.userId,
            accessToken: 'Not implemented',
            telephone: '',
            email: ''
        },
        message: 'SUCCESS'
    });
});

router.post('api/v1/user/details/info', async (req, res) => {
    const userId = req.headers.userid;
    const { oldName, newName } = req.query;
    
    if (!userId || !oldName || !newName) {
        return res.status(400).json({ code: 6, message: 'Bad request : Params error please fill them', data: null });
    }
    
        let user = await User.findOne({ userId: uid });

    if (!user) {
        return res.status(200).json({
            code: 102,
            message: 'User ID or username not found.',
            data: null
        });
    }

    if (user.nickname !== oldName) {
        return res.status(200).json({
            code: 108,
            message: 'Incorrect nicknames.',
            data: null
        });
    }
    
    
});

router.post('/api/v1/user/password/modify', async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const userId = req.headers['userid']; 

    if (!newPassword || newPassword.trim() === '') {
        return res.status(400).json({ 
            code: 1, 
            message: 'New password cannot be empty', 
            data: null 
        });
    }

    try {
        const user = await User.findOne({ userId });

        if (!user) {
            return res.status(404).json({ 
                code: 1, 
                message: 'User not found', 
                data: null 
            });
        }

        if (user.password !== oldPassword) {
            return res.status(200).json({
                code: 108, 
                message: 'Incorrect old password', 
                data: null
            });
        }

        user.password = newPassword;
        await user.save();

       
        return res.status(200).json({ 
            code: 1, 
            message: 'SUCCESS', 
            data: {
                userId: user.userId,
                nickName: user.nickname,
                diamonds: user.diamonds,
                gold: user.gold,
                picUrl: user.picUrl || '',
                vip: user.vip
            } 
        });
    } catch (err) {
        return res.status(500).json({
            code: 1, 
            message: 'Server error', 
            data: null
        });
    }
});

router.post('/api/v1/email/bind', async (req, res) => {
    const userId = req.headers.userid;
    
    if (req.query.verifyCode == 265178) {
        
        return res.status(200).json({ 
            code: 1, 
            message: 'SUCCESS', 
            data: null
        });
    } else {
    const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ 
                code: 1, 
                message: 'User not found', 
                data: null 
            });
        }
        user.email = '';
        await user.save();
        res.status(200).json({ 
            code: 108, 
            message: 'Incorrect code.', 
            data: null
        });
    }
});

router.delete('/api/v1/email/bind', async (req, res) => {
    const userId = req.headers.userid;
    
    if (req.query.verifyCode == 265178) {
        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ 
                code: 1, 
                message: 'User not found', 
                data: null 
            });
        }
            user.email = '';
            await user.save();
        res.status(200).json({ 
            code: 1, 
            message: 'SUCCESS', 
            data: null
        });
    } else {
        res.status(200).json({ 
            code: 108, 
            message: 'Incorrect code.', 
            data: null
        });
    }
});

router.post('/api/v1/email/send', async (req, res) => {
    const email = req.body.email;
    const userId = req.headers.userid;
    
    const user = await User.findOne({ userId });
    const emails = await User.findOne({ email });
    
    if (emails) {
        return res.status(200).json({ 
            code: 108, 
            message: 'Email is already bound to another account.', 
            data: null
        });
    }
    user.email = email;
    await user.save();
    
    return res.status(200).json({ 
            code: 1, 
            message: 'SUCCESS', 
            data: {
                userId: user.userId,
                nickName: user.nickname,
                diamonds: user.diamonds,
                gold: user.gold,
                picUrl: user.picUrl || '',
                vip: user.vip
            } 
    });
});

router.post('/api/v1/emails/password/reset', async (req ,res) => {
    const email = req.query.email;
    const emails = await User.findOne({ email });
    
    if (!emails) {
            return res.status(404).json({ 
                code: 1, 
                message: 'Email not found', 
                data: null 
            });
    }
    
    res.status(200).json({ 
            code: 1, 
            message: 'SUCCESS', 
            data: {
                userId: user.userId,
                nickName: user.nickname,
                diamonds: user.diamonds,
                gold: user.gold,
                picUrl: user.picUrl || '',
                vip: user.vip
            } 
        });
});

router.put('/api/v1/user/info', async (req, res) => {
    const userId = req.headers.userid;
    const details = req.body.details;
    
    const user = await User.findOne({ userId });
    
    if (!user) {
            return res.status(404).json({ 
                code: 1, 
                message: 'User not found', 
                data: null 
            });
    }
    
    user.introduction = details;
    await user.save();
    
    const userInfo = {
        userId: user.userId,
        sex: user.sex || 2,
        nickName: user.nickname,
        birthday: user.birthday || '',
        details: user.introduction,
        diamonds: user.diamonds,
        golds: user.gold,
        picUrl: user.picUrl || '',
        email: user.email || '',
        hasPassword: true,
        stopToTime: null
    };

    res.status(200).json({ code: 1, message: 'SUCCESS', data: userInfo });
});

module.exports = router;
