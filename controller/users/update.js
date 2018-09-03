const Model = require('../../models')
const hashHelper = require('../../helper/hashGenerate')
const Users = Model.User

const put = (req,res)=>{
            
    Users.update({
        name : req.body.name,
        email : req.body.email,
        password : hashHelper(req.body.password)
    },{
        where : { id :req.params.id}
    })
    .then(user => {
        res.status(200).send({msg : 'success edit user',  user}) 
    })
    .catch( err => {
        if (err.name == 'SequelizeValidationError'){
            Users.findById(req.params.id)
            .then(user => {
                res.status(400).send({user,err : err.errors}) 
            })
            .catch(err => {
                res.status(400).send({msg : 'error edit user'})
                res.send(err)
            })
            
        }
        else {
            res.status(400).send({msg : 'error'})
        }
    })
}

const patch = (req,res)=>{
            
    Users.update({
        name : req.body.name,
        email : req.body.email,
        password : hashHelper(req.body.password)
    },{
        where : { id :req.params.id}
    })
    .then(user => {
        res.status(200).send({msg : 'success edit user',  user}) 
    })
    .catch( err => {
        if (err.name == 'SequelizeValidationError'){
            Users.findById(req.params.id)
            .then(user => {
                res.status(400).send({user,err : err.errors}) 
            })
            .catch(err => {
                res.status(400).send({msg : 'error edit user'})
                res.send(err)
            })
            
        }
        else {
            res.status(400).send({msg : 'error'})
        }
    })
}
module.exports = {put,patch}