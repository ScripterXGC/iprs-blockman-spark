const express = require('express');
const router = express.Router(); 

const tops = require('../config/decoration/1');
const hairs = require('../config/decoration/2');
const wings = require('../config/decoration/3');
const faces = require('../config/decoration/4');
const emotes = require('../config/decoration/5');
const colors = require('../config/decoration/6');
const backgrounds = require('../config/decoration/7');
const vipColors = require('../config/decoration/part-8-vip');
const usingTest = require('../config/decoration/usingTest');

const decorations = [tops, hairs, wings, faces, emotes, colors, backgrounds, vipColors];

router.get('/api/v1/shop/decorations/1', (req, res) => {
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
                data: tops,
                other: null
            }
        });
});

router.get('/api/v1/shop/decorations/2', (req, res) => {
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
                data: hairs,
                other: null
            }
        });
});

router.get('/api/v1/shop/decorations/3', (req, res) => {
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
                data: wings,
                other: null
            }
        });
});

router.get('/api/v1/shop/decorations/4', (req, res) => {
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
                data: faces,
                other: null
            }
        });
});

router.get('/api/v1/shop/decorations/5', (req, res) => {
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
                data: emotes,
                other: null
            }
        });
});

router.get('/api/v1/shop/decorations/6', (req, res) => {
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
                data: colors,
                other: null
            }
        });
});

router.get('/api/v1/shop/decorations/7', (req, res) => {
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
                data: backgrounds,
                other: null
            }
        });
});

router.get('/api/v1/shop/decorations/8', (req, res) => {
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
                data: placeholder,
                other: null
            }
        });
});

router.get('/api/v1/shop/vip/decorations/users/6', (req, res) => {
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
                data: vipColors,
                other: null
            }
        });
});

router.get('/api/v1/shop/vip/decorations/users/1', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.get('/api/v1/shop/vip/decorations/users/3', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.put('/api/v1/shop/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

router.delete('/api/v1/shop/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

// Made for v2

router.get('/api/v2/vip/decorations/users/1', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.get('/api/v2/vip/decorations/users/3', (req, res) => {
    const response = {
  "code": 1,
  "message": "SUCCESS",
  "data": [],
  "other": null
    };

    res.json(response);
});

router.put('/api/v2/shop/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

router.delete('/api/v2/shop/decorations/using/:id', (req, res) => {
    const { id } = req.params;

    let foundAvatar = null;
    for (const decoration of decorations) {
        foundAvatar = decoration.find(avatar => avatar.id === parseInt(id, 10));
        if (foundAvatar) break;
    }

    if (foundAvatar) {
        return res.status(200).json({
            code: 1,
            message: 'SUCCESS',
            data: foundAvatar
        });
    }

    res.status(200).json({
        code: 121,
        message: 'Decoration not exist',
        data: null
    });
});

router.get('/api/v1/shop/decorations/using', async (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: usingTest });
});

module.exports = router;