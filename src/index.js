const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes')
server.use('/task', TaskRoutes)

server.get('/', (request, response) => {
  return response.send('A api está funcionando!')
})

server.listen(process.env.PORT, () => {
  console.log('API ONLINE')
})
