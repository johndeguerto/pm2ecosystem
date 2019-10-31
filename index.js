const express = require('express')
, port = process.env.PORT || 3001

const app = express()

app.get('/',(req,res) => {
  console.log('Hello there!')
  res.send(`${process.env.NODE_ENV}`)
})

app.listen(port, function(){
  console.log(`Server Started on port ${port} ENV ${process.env.NODE_ENV}`)
})


