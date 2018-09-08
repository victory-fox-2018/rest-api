const Model = require('../../models')
const Users = Model.User
const Items = Model.Item
require('dotenv').config()
const get = (req,res)=>{
    // console.log('masuk',process.env.JWT);
    
    Users.findAll({
        include : {
            model : Items
        }
    })
    .then(users => {
        res.status(200).send({users,env:process.env.JWT})
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports = {get}