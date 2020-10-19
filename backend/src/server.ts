import express from 'express'

const app = express()

app.post('/users', (req, res) => {
    return res.json({ message: 'Hello there!' })
})

app.listen(3333)
