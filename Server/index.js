const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://user:Password@test.dxklxrm.mongodb.net/?retryWrites=true&w=majority&appName=test')

app.post('/add', (req, res) => {
    const task = req.body.task;
})


app.listen(3001, () => {
  console.log("Server is Running")
})