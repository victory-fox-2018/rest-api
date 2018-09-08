// var 



// module.exports = (req,res,next) => {
//     token = req.headers.token
//     if(token){
//         let verify = hash.jwtdecode(token)
//         Model.User.findOne({
//             where : {
//                 id : verify.id
//             }
//         })
//         .then(response => {
//             if(response.role == 'admin'){
//                 next()
//             } else {
//                 res.status(401).json({
//                     "message" : "Authorize is Faild"
//                 })
//             }
//         })
//     } else {
//         res.status(401).json({
//             "message" : "Autothicate is Faild"
//     }
// }