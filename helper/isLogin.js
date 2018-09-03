var jwt = require('jsonwebtoken');

function IsLogin(req,res){
    var verifiedJwt = jwt.verify(req.header.token,'secret')
}
