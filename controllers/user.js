const model = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


class User{
    static create(req,res){
        let salt = bcrypt.genSaltSync(10);
        let password = req.body.password
        let hash = bcrypt.hashSync(password, salt)        
        model.User
            .create({
                name: req.body.name,
                email:req.body.email, 
                password:hash,
                role:req.body.role,
            })
            .then(function(user){
                
                res
                .status(200)
                .json({
                    user : user
                })
            })
            .catch(function(err){
                res
                .status(405)
                .json({
                    msg:"create used failed"
                })
            })
    }

    static signIn(req,res,next){
        model.User
            .findOne({
                where:{
                email:req.body.email
                }
            })
            .then(function(user){
                if(user){ 
                    let password = req.body.password
                    if(bcrypt.compareSync(password, user.password)){
                        let token = jwt.sign({ id: user.id, role:user.role }, process.env.secretkey)
                            res
                                .status(200)
                                .json({
                                    msg:"successfully, get token",
                                    token :token
                                    })   
                    }else{
                        res
                        .status(401)
                        .json({
                        msg:"wrong password"
                        }) 
                    }
                }else{
                res
                    .status(401)
                    .json({
                    msg:"user not found"
                    })
                }
            })
            .catch(function(err){
                res.json(err.message)
            })
    }

    

    static getUser(req,res, next){
        model.User
        .findAll()
        .then(function(users){
            res
                .status(200)
                .json({
                    msg : "this all users",
                    users : users
                })
        })
        .catch(function(err){
            res
                .status(404)
                .json({
                    msg: "no users"
                })
        })
    }

    static getSingleUser(req,res){
        model.User
        .findById(req.params.id)
        .then(function(user){
            res
                .status(200)
                .json({
                    user : user
                })
        })
        .catch(function(err){
            res
                .status(404)
                .json({
                    msg:"data not found"
                })
        })
    }

    static deleteUser(req,res){
        model.User
        .destroy({
            where:{
                id:req.params.id
            }
        })
        .then(function(user){
            if(user){
                res
                .status(200)
                .json({
                    msg : "delete user successfully"
                })
            }else{
                res
                .status(408)
                .json({
                    msg : "id is not found"
                })
            }
            
        })
        .catch(function(err){
            res
                .status(408)
        })
    }

    static updateUser(req,res){
        let salt = bcrypt.genSaltSync(10);
        let password = req.body.password
        let hash = bcrypt.hashSync(password, salt)
        model.User
        .update({
            name: req.body.name,
            email:req.body.email,
            password:hash,
            role:req.body.role,
        }, {
            where :{
                id:req.params.id
            }
        })
        .then(function(user){
            res
            .status(200)
            .json({
                msg:"update successfully"
            })
        })
        .catch(function(err){
            res
            .status(408)
        })
    }
    
}

module.exports = User