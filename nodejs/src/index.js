const express = require('express')
const Userroute = require('./route/users')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(Userroute)


mongoose.connect('mongodb://127.0.0.1:27017/samajik');

const User = mongoose.model('User', { name: String, age: Number , email: String , password: String, ispremiumUser: Boolean });
User.create({ name: 'Ajay', age: 23, email: 'test@gmail.com', password: 'ajay@123', ispremiumUser: false })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})