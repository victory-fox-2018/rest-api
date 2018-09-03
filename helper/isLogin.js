var jwt = require('jsonwebtoken');

function IsLogin(req,res,next){
    var verifiedJwt = jwt.verify(req.header.token,'secret',function (err, decoded){
       if(err){
         res.status(200).json(err)
       }
       else{
         res.status(200).json(decoded)
       }
    })
}
