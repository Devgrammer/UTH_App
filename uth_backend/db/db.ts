const mongoose = require('mongoose')


const connectToDB=() => {
mongoose.connect(process.env.MONGODB_URI).then(()=>{
     console.log("Database is connected");
}).catch((error)=>console.log("DB Error",error))
 }


 module.exports = connectToDB