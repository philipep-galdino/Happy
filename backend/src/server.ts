import express from 'express'

import './database/connection'

const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
    return res.json({ message: 'Hello there!' })
})

app.listen(3333)
