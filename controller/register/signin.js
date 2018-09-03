const Model = require('../../models')
const bcrypt = require('bcryptjs');
require('dotenv').config()
const jwt = require('jsonwebtoken')
const Users = Model.User

const post = (req,res)=>{ 
    
    let email = req.body.email
    let password = req.body.password
    Users.findOne({
        where : { email}
    })
    .then( user =>{
        if(user.email == email){
            let isTrue = bcrypt.compareSync(password, user.password);
            if(isTrue){
                let token = jwt.sign({id : user.id, admin : user.admin},process.env.JWT)
                res.json({token,msg:'success login'})
            }
            res.status(400).json({msg: 'wrong password'})
        }   
        res.status(400).json({msg: 'check password/email'})
    })
    .catch(err => {
        res.status(400).json({msg :'check password/email'})
    })
}

module.exports = {post}