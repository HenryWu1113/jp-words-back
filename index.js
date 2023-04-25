import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/users.js'
import './passport/passport.js'

mongoose.connect(process.env.DB_URL)
const app = express()

app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '請求被拒' })
})

app.use(express.json())

app.use('/users', userRoute)

app.listen(process.env.PORT || 5001, () => {
  console.log('Server Started!')
})
