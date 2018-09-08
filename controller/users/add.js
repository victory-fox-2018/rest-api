const Model = require('../../models')
const Users = Model.User
const Items = Model.Item

const post = (req,res)=>{  
    Users.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    .then((data) => {
        res.status(201).send({
            msg : 'success add new user', data})
    })
    .catch(err => {
        if (err.name == 'SequelizeValidationError'){
            res.status(400).send({
                msg : 'invalid input error', err : err.errors})
        }
        res.status(400).send(err)
    })
}

module.exports = {post}