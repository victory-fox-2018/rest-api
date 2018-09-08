const Model = require('../../models')
const Users = Model.User
const Items = Model.Item

const get = (req,res)=>{
    Users.findById(req.params.id)
    .then(users => {
        res.status(200).send(users)
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports = {get}