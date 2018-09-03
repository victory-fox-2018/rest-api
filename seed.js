const Model=require('./models').User

Model.bulkCreate([{
   name : "dani",
   password : "1234",
    email : "dani@gmail.com",role:"admin"
},{
   name : "rani",
   password : "1234",
    email : "rani@gmail.com",role:"user"
},{
  name : "rabbani",
  password : "1234",
   email : "rabbani@gmail.com",role:"user"
},{
  name : "rabbi",
  password : "1234",
   email : "rabbi@gmail.com",role:"user"
}])
