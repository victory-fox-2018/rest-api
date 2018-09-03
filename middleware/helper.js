var jwt = require('jsonwebtoken');
const Model=require('../models').User

function isLogin(req,res,next){
  jwt.verify(req.headers.token,'secret',function (err, decoded){
     if(err){
       res.status(200).json(err)
     }
     else{
       Model.findOne({
         where:{name:decoded.user}}
       ).then(data=>{
         req.role = data.role
         req.id_user=data.id
         next()
       })
       .catch(err=>{
         res.status(200).json("user not exist")
       })
     }
  })
}

function isAdmin(req,res,next){

  if(req.role == "admin") {
      next()
  }
  else{
    res.status(200).json('bukan admin')
  }
  //
  // jwt.verify(req.headers.token,'secret',function (err, decoded){
  //    if(err){
  //      res.status(200).json(err)
  //    }
  //    else{
  //      console.log(decoded.password)
  //      Model.findOne({
  //        where:{name:decoded.user,role:"admin"}}
  //      ).then(data=>{
  //        req.id_user=req.params.id
  //        next()
  //      })
  //      .catch(err=>{
  //        res.status(200).json("login as non admin")
  //      })
  //    }
  // })
}

function isSamePerson(req,res,next){
  jwt.verify(req.headers.token,'secret',function (err, decoded){
     if(err){
       res.status(200).json(err)
     }
     else{
       Model.findOne({
         where:{name:decoded.user}
       }).then(data=>{
         if(req.id_user===req.params.id){
            next()
         }
         else{
            res.status(500).json("Tidak berhak , yang diedit bukan id anda")
         }
       })
       .catch(err=>{
         res.status(200).json("Verifikasi token gagal")
       })
     }
  })
}
module.exports={isLogin,isAdmin,isSamePerson}
