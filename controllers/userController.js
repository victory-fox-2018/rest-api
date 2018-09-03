const jwt = require('jsonwebtoken');
const model = require('./../models').User

module.exports = {
    findAll: function(req,res){
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
        const crypto = require('crypto');
        const secret = process.env.PASSWORD_SECRET;
        const hash = crypto.createHmac('sha256', secret)
                            .update(req.body.password)
                            .digest('hex');
        console.log(hash);
        
        model.findOne({
            where: {
                userName: req.body.userName,    
                password: hash
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
    
    },

    createUser: function(req,res){
        model.create({
            userName: req.body.userName,    
            password: req.body.password,
            role: req.body.role,
            createAt: new Date(),
            updateAt: new Date()
        })
        .then(() => {
            res.status(200).json({
                msg: "Create user is succesful"
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: "Invalid user username/password"
            })
        })
    },

    deleteUser: function (req,res){
        let id = req.params.id

        model.destroy({
            where:{id : id}
        })
        .then(()=>{
            res.status(200).json({
                msg: "Delete data is succesful"
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: "Delete data failed"
            })
        })
    },

    updateUser: function(req,res){
        model.update({
            userName: req.body.userName,    
            password: req.body.password,
            role: req.body.role,
            updateAt: new Date()
            },{
             where:{
             id:req.params.id}
        })
            
        .then(() =>{
            res.status(200).json({
                msg: "Data has been updated"
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: "Data update failed"
            })
        })

    }
    
    
}