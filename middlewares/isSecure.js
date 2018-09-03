// const hash = require('../helpers/hashhelper')
// const model = require('../models')

// module.exports = (req, res, next) => {
//     token = req.get('token')
//     if(token) {
//         let verify = hash.jwtdecode(token)
//         User
//         .findOne({_id:verify.id})
//         .then( response => {
//             if(response) {
//                 next()
//             } else {
//                 res.status(401).json({
//                     "message": "No Authorize"
//                 })
//             }
//         })
//     } else {
//         res.status(401).json({
//             "message": "No Authenticate"
//         })
//     }
// }