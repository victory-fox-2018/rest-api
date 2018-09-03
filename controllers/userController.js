const jwt = require('jsonwebtoken');
const model = require('./../models').User

module.exports = {
    findAll : function(req,res){
        model.findAll()
        .then(data=>{
            res.status(200).json({
                msg:"Data retrieve is succesful",
                data: data
            })
        })
    },

    signUp: function(req,res){
        model.create({
            userName: req.body.userName,    
            password: req.body.password,
            role: req.body.role,
            createAt: new Date(),
            updateAt: new Date()
        })
        .then(() => {
            res.status(200).json({
                msg: "Signing up is succesful"
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: "Invalid username/password"
            })
        })
    },

    signIn: function(req,res){
        model.findOne({
            where: {
                userName: req.body.userName,    
                password: req.body.password
            }
        })
    
        .then(data => {
            if (data===null || data===undefined){
                res.status(404).json({
                    msg: "Invalid username/password"
                })
            }else {
                jwt.sign({userName:data.userName,password:data.password,role:data.role}, process.env.JWT_SECRET,function(err, token) {
                    res.status(200).json({
                        msg: "Login is successful",
                        token: token
                    })
                });   
            }
        })  
        .catch(err => {
            res.status(500).json({
                msg: "Invalid username/password"
            })
        })
    },

    findOne: function(req,res){
        model.findById(req.params.id)
        .then(data => {
            res.status(200).json({
                data: data
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: "Server error"
            })
        })
    
    } 

    



}