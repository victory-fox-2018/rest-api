const User = require('../models/index').User;

module.exports = {
  findAll : function(req,res){
    User.findAll()
    .then(data=>{
      res.json(data);
    })
    .catch(err=>{
      res.send(err);
    });
  },

  findOne : function(req,res){
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
      res.send(err);
    });
  },

  update : function(req,res){
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
      res.send(err);
    })
  },

  remove : function(req,res){
    User.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(()=>{
      res.send("success deleting");
    })
    .catch((err)=>{
      res.send(err);
    });
  },

  create : function(req,res){
    console.log(req.body);
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password
    })
    .then(()=>{
      res.send("success adding data");
    })
    .catch((err)=>{
      res.send(err);
    });
  }
};