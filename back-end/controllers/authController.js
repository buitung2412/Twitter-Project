const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req,res,next) => {
    try {
        //req.boy san gan thong so thuoc tinh nguoi dung dien vao
        const user = await User.create(req.body); // do bat dong bo nen awaot co td cho tao xong user trong db roi luu vao bien user
        const token = jwt.sign({userId: user._id},process.env.APP_SECRET);

        res.status(200).json({
            status:'success',
            data: { token, userName: user.name }
        })
    } 
    catch (error) {
        next(error);
    }
}

exports.login = async (req,res,next) =>
{
    try {
        const user = await User.findOne({ email:req.body.email});
        if(!user)
        {
            // Error: email is not correct
            const err = new Error('Email is not correct');
            err.statusCode = 400;
            return next(err);

        }
        if (bcrypt.compareSync(req.body.password, user.password))
        {
            const token = jwt.sign({userId: user._id}, process.env.APP_SECRET)
            res.status(200).json({
                status: 'success',
                data:{
                    token, userName: user.name
                }
            })
        }
        else{
            // Error: Password is not connct
            const err = new Error('Password is not correct');
            err.statusCode = 400;
            return next(err);
        }
    }
    catch (error)
    {
        res.json(error);
    }
};

// Get current User
exports.getCurrentUser = async (req, res, next) => {
    try {
        const data = { user: null}
        if (req.user) 
        {
            const user = await User.findOne({ _id: req.user.userId});
            data.user = { userName: user.name}
        }
        
        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (error) {
        res.json(error)
    }
}
