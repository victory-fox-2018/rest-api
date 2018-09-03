function isAdmin(req,res,next){
    if(req.decoded.role==="admin"){
        next();
    }
    else{
        res.status(403).json({
            msg : "You are not an admin"
        })
    }
}

module.exports = isAdmin;