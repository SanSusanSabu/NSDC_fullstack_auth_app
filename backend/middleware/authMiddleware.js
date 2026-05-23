const { verifyToken } = require("../utils/jwt");

//verify user token
exports.verifyuser = (req,res,next) => {
    try{
        const authHeader = req.headers.authorization;
        //check token exits
        if(!authHeader) {
            return res.status(401).json({
                success:false,
                message:"Token is required"
            });
        }

        //remove bearer
        const token = authHeader.split(" ")[1];

        //verify token
        const decoded =verifyToken(token);

        //store user data in request
        req.user = decoded;
        next();

    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid Token"
        });
    }
}