const Model=require('./models').User
var express=require('express')
fs=require('fs')
var jwt = require('jsonwebtoken');


const User=fs.readFileSync('data.json',"utf-8");


var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get('/users', function (req, res) {
   Model.findAll().then(data=>{
     res.status(200).json(data)
   })
   .catch(err=>{
     res.status(200).json(err)
   })
})

app.post('/api/signin',function(req,res){
  jwt.sign({user:req.body.user,pass:req.body.password},'secret',function(err,token){
    if(err){
          res.status(500).json(err)
    }
    else{
      Model.findOne({
          where: {name:req.body.user,password:req.body.password}
      })
      .then(data=>{
        token=token
        res.status(200).json({msg:"anda berhasil login",token:token})
      }).catch(err=>{res.send("user name anda tidak ada")})
    }
})
})

app.get('/login',function(req,res){
  jwt.verify(req.headers.token,'secret',function (err, decoded){
     if(err){
       res.status(200).json(err)
     }
     else{
       Model.findOne({
         where:{name:decoded.user}}
       ).then(data=>{
         res.status(200).json(data)
       })
       .catch(err=>{
         res.status(200).json(err)
       })
     }
  })
})

app.get('/admin',function(req,res){

})

//app.get | **/api/users/:id** | GET  | Get a Single User Info (Admin and Authenticated User) |
app.get('/api/users/:id',function(req,res){
  Model.findOne({
    where:{id:req.params.id}
  }).then(data=>{
    res.status(200).json(data)
  }).catch(err=>{
    res.status(200).json("user tersebut tidak ada")
  })
})

app.post('/api/signup',function(req,res){
  console.log(req.body)
  let obj={user:req.body.user,
  role:req.body.role,age:req.body.age,location:req.body.location}

  fs.writeFileSync('data.json',JSON.stringify(obj))
  res.status(200).json(JSON.stringify(obj))
})

app.post('/api/users',function(req,res){
  let obj={user:req.body.user,
  role:req.body.role,age:req.body.age,location:req.body.location}

  res.status(200).json(obj)
})

console.log(User)
app.listen(3000, function () {
  console.log('Ready');
});
