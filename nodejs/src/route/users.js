const {Router} = require('express')
const Userroute = Router()

Userroute.get('/users', (req, res) => {
    res.send( ['ram','shyam','hari'])
  })

  Userroute.post('/users', (req, res) => {
    res.send( ['ram','shyam','hari'])
  })

  Userroute.put('/users', (req, res) => {
    res.send( ['ram','shyam','hari'])
  })

  Userroute.delete('/users', (req, res) => {
    res.send( ['ram','shyam','hari'])
  })
  module.exports = Userroute;