const User = require('../models/index').User;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


module.exports = {
  findAll : function( req,res ){
    User.findAll()
    .then(data=>{
      res.json(data);
    })
    .catch(err=>{
      res.status(500).json({
        msg : err
      });
    });
  },

  findOne : function( req,res ){
    console.log(req.params);
    User.findOne({
      where : {
        id : req.params.id
      }
    })
    .then(data=>{
      res.json(data);
    })
    .catch(err=>{
      res.status(500).json({
        msg : err
      });
    });
  },

  update : function( req,res ){
    console.log(req.body)
    console.log(req.params.id)
    User.update({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password
    },{
      where : {
        id : req.params.id
      }
    })
    .then(()=>{
      res.send("success updating");
    })
    .catch(err=>{
      res.status(500).json({
        msg : err
      });
    });
  },

  remove : function( req,res ){
    User.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(()=>{
      res.send("success deleting");
    })
    .catch((err)=>{
      res.status(500).json({
        msg : err
      });
    });
  },

  create : function( req,res ){
    const secret = process.env.PASSWORD_SECRET;
    const hash = crypto.createHmac('sha256', secret)
                   .update(req.body.password)
                   .digest('hex');
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hash,
      role : req.body.role
    })
    .then(()=>{
      res.send("success adding data");
    })
    .catch((err)=>{
      res.status(500).json({
        msg : err
      });
    });
  },

  signIn : function( req,res ){
    const secret = process.env.PASSWORD_SECRET;
    const hash = crypto.createHmac('sha256', secret)
                   .update(req.body.password)
                   .digest('hex');
    User.findOne({
      where : {
        email : req.body.email,
        password : hash
      }
    })
    .then(data=>{
      if( data === undefined || data === null ){
        res.status( 500 ).json({
          msg : "no user found"
        })
      } else{
        jwt.sign({
          email : data.email,
          role : data.role,
          name : data.name
        }, process.env.JWT_SECRET,( err,token )=>{
          if( err ){
            res.status( 500 ).json({
              msg : err.message
            });
          }
          else{
            res.status( 200 ).json({
              mesg : 'login success',
              token : token
            });
          }
        });
      }
    })
    .catch(err=>{

    });
  }
};