const Model = require('../../models')
const Users = Model.User
const Items = Model.Item

const remove = (req,res)=>{  

    Users.findById(req.params.id)
    .then((user)=>{
        user.destroy()
        .then( (user) => {
            res.status(200).send({msg : 'success delete user', user})
        })
        .catch(err => res.status(400).send({msg: 'delete error'}))  
    })
    .catch(err => res.status(400).send({msg: 'error find user'}))
}

module.exports = {remove}