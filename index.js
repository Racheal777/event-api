 import express from "express"
import { eventRouter } from "./routes/events_routes.js"
import mongoose from "mongoose"
import 'dotenv/config'


 const app = express()


 const PORT = 7078

const mongoURI = process.env.MONGO_URI

 await mongoose.connect(mongoURI)


app.use(express.json())

 
app.use('/api/v1/events',eventRouter)


 app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
 })

