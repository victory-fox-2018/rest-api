const Model = require('../../models')
const hashHelper = require('../../helper/hashGenerate')
const Users = Model.User

const post = (req,res)=>{    
    console.log(req.body.password);
        
    Users.create({
        name : req.body.name,
        email : req.body.email,
        password : hashHelper(req.body.password)
    })
    .then((data) => {
        res.status(201).send({
            msg : 'success signup', data})
            console.log('masuk');
            
    })
    .catch(err => {
        if (err.name == 'SequelizeValidationError'){
            res.status(400).send({
                msg : 'invalid input error', err : err.errors})
        }
        
    })
}

module.exports = {post}