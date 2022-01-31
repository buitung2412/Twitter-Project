const jwt = require('jsonwebtoken');

exports.verifyToken = (req,res,next)=> {
    // Access Authorization from req header
    const Authorization = req.header('authorization');

    if(!Authorization)
    {
        //Error : Unauthorized
        const error = new Error('Unauthorized!');
            err.statusCode = 401;
            return next(error);
    }

    // Get token

    const token = Authorization.replace('Bearer ','');

    //Verify token
    const {userId} = jwt.verify(token, process.env.APP_SECRET);

    //Assign req
    req.user = {userId};
    
    next();
}
